https://github.com/StephenGrider/ticketing/tree/master

docker build -t hrylog/ms_node_step_tick_auth .

https://ticketing.dev/api/users/currentuser
thisisunsafe
ticketing.dev/api/users/currentuser


----
https://console.cloud.google.com/kubernetes/clusters/details/us-central1-a/ticketing-dev/nodes?project=ticketing-dev-431506

https://cloud.google.com/sdk/docs/install-sdk#deb

gcloud auth login

gcloud config set project PROJECT_ID
gcloud config set project ticketing-dev-431506    

gcloud components install gke-gcloud-auth-plugin

gke-gcloud-auth-plugin --version

gcloud container clusters get-credentials ticketing-dev

kubectl config current-context  

           ---> will bring
           
gke_ticketing-dev-431506_us-central1-a_ticketing-dev


kubectl config get-contexts
default:
kubectl config use-context minikube
kubectl config use-context gke_ticketing-dev-431506_us-central1-a_ticketing-dev


kubectl get service ingress-nginx-controller -n ingress-nginx

 sudo nano /etc/hosts 
 34.28.244.200    ticketing.dev
--------
skaffold dev

gcloud container clusters resize ticketing-dev --num-nodes=0 --zone=us-central1-a 
gcloud container clusters resize ticketing-dev --num-nodes=6 --zone=us-central1-a 

npm login
npm publish
https://www.npmjs.com/settings/hrylog-ticketing-ms/packages
in common
npm run pub
cd tickets
npm update @hrylog-ticketing-ms/common   

after changes
npm update --save @hrylog-ticketing-ms/common

then
k get pods 
k exec -it auth-depl-65fb7c79f4-mf55q sh
ticketing.dev

minikube start
kubectl config use-context gke_ticketing-dev-431506_us-central1-a_ticketing-dev
minikube addons enable ingress 


-------------------
nats

port fowarding
k get pods 
find nats
run 
k port-forward nats-depl-759877c85d-gv95w 4222:4222
port local machine : port on the pod we want to access

Forwarding from 127.0.0.1:4222 -> 4222
Forwarding from [::1]:4222 -> 4222
npm run publish/listen

k port-forward nats-depl-6567485585-rkw67 8222:8222
http://localhost:8222/streaming

https://console.cloud.google.com/kubernetes/nodepool/edit/us-central1-a/ticketing-dev/default-pool?project=ticketing-dev-431506

minikube addons enable metrics-server

minikube addons enable dashboard

kubectl config use-context gke_ticketing-dev-431506_us-central1-a_ticketing-dev

minikube addons enable ingress 

minikube addons enable dashboard
 minikube dashboard
 minikube addons enable metrics-server
