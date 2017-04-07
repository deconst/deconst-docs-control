# deconst-docs-control

[![Build Status](https://travis-ci.org/deconst/deconst-docs-control.svg?branch=master)](https://travis-ci.org/deconst/deconst-docs-control)

Control repository for the [self-hosted deconst-docs documentation](https://deconst.horse).

# Deconst Dev Env in Kubernetes with Minikube

1. If necessary, deploy the [deconst docs](https://github.com/deconst/deconst-docs#deconst-dev-env-in-kubernetes-with-minikube)

1. Open a new shell

1. Submit the control repo assets to the content service

    The `CONTENT_STORE_APIKEY` must match the `ADMIN_APIKEY` set when deploying the [content service](https://github.com/deconst/content-service#deconst-dev-env-in-kubernetes-with-minikube).

    ```bash
    docker run -it --rm \
      --env CONTENT_STORE_URL=$(minikube service --url --namespace deconst content) \
      --env CONTENT_STORE_APIKEY=${ADMIN_APIKEY} \
      --env TRAVIS_PULL_REQUEST=false \
      --volume "$(pwd)":/var/control-repo \
      quay.io/deconst/preparer-asset
    ```

1. Open the deconst docs site in a browser

    ```bash
    minikube service --namespace deconst presenter
    ```

1. Open the deconst staging docs site in a browser

    ```bash
    open $(minikube service --url --namespace deconst staging-presenter)/staging/
    ```
