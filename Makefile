# The shell we use
SHELL := /bin/bash

# We like colors
# From: https://coderwall.com/p/izxssa/colored-makefile-for-golang-projects
RED=`tput setaf 1`
GREEN=`tput setaf 2`
RESET=`tput sgr0`
YELLOW=`tput setaf 3`

# Vars
NAME = optical
DOCKER := $(bash docker)

# Vars
# Add the following 'help' target to your Makefile
# And add help text after each target name starting with '\#\#'
.PHONY: help
help: ## This help message
	@echo -e "$$(grep -hE '^\S+:.*##' $(MAKEFILE_LIST) | sed -e 's/:.*##\s*/:/' -e 's/^\(.\+\):\(.*\)/\\x1b[35m\1\\x1b[m:\2/' | column -c2 -t -s :)"

.PHONY: init
init: ## Initialize project
	@echo "$(YELLOW)==> Initialize project$(RESET)"
	@pre-commit install

.PHONY: build-docker
build-docker: ## Build production image
	@docker build --no-cache=true -t $(NAME) -f Dockerfile .

.PHONY: run-docker
run-docker: ## Start prod container locally on port 8080
	@echo "$(YELLOW)==> Please open your browser localhost:8080$(RESET)"
	@docker run --rm -p 9090:8080 --name public-api-docs $(NAME):latest