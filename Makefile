## this file helps you to create posts, news, publications , ...
help:
	@egrep -h '\s##\s' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m  %-30s\033[0m %s\n", $$1, $$2}'

serve: ## serve your website locally
	hugo serve --port 1313
