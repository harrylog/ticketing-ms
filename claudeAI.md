To enable Ingress on your new Google Cloud Platform (GCP) Kubernetes Engine (GKE) cluster, you'll need to install and configure the Ingress controller. GKE provides a managed version of the NGINX Ingress controller, which is generally recommended. Here's how to set it up:

1. First, ensure you're connected to your GKE cluster:

   ```
   kubectl config current-context
   ```

2. Enable the necessary APIs in your GCP project (if not already enabled):

   ```
   gcloud services enable compute.googleapis.com
   gcloud services enable container.googleapis.com
   ```

3. Install the NGINX Ingress controller:

   ```
   kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.2/deploy/static/provider/cloud/deploy.yaml
   ```

   Note: Check for the latest version of this file on the official Ingress-NGINX GitHub repository.

4. Wait for the Ingress controller to be ready:

   ```
   kubectl wait --namespace ingress-nginx \
     --for=condition=ready pod \
     --selector=app.kubernetes.io/component=controller \
     --timeout=120s
   ```

5. Verify the installation:

   ```
   kubectl get pods -n ingress-nginx
   ```

   You should see the ingress-nginx-controller pod running.

6. Get the external IP of your Ingress controller:

   ```
   kubectl get service ingress-nginx-controller -n ingress-nginx
   ```

   Look for the EXTERNAL-IP column. It might take a few minutes to populate.

7. Update your DNS settings to point your domain to this external IP.

8. Now you can create Ingress resources in your cluster. They will be automatically picked up by the Ingress controller.

After setting up the Ingress controller, you can create Ingress resources as usual. Your existing Ingress YAML file should work without modifications:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ingress-service
  annotations:
    nginx.ingress.kubernetes.io/use-regex: "true"
spec:
  ingressClassName: nginx
  rules:
    - host: ticketing.dev
      http:
        paths:
          - path: /api/users/?(.*)
            pathType: ImplementationSpecific
            backend:
              service:
                name: auth-srv
                port:
                  number: 3000
```

Apply this Ingress resource:

```
kubectl apply -f your-ingress-file.yaml
```

Remember to update your local /etc/hosts file or actual DNS settings to point your domain (ticketing.dev in this case) to the external IP of the Ingress controller.

Would you like me to explain any part of this process in more detail?