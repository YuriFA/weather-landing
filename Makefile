include .env

export

bin     := node_modules/.bin
src     := src
dest    := dist
scripts := scripts
styles  := styles
images  := images
icons   := icons

all: build

build: clean lint process

lint: lint-scripts lint-styles

lint-scripts:
	$(bin)/eslint $(src)/$(scripts)/**.js

lint-styles:
	$(bin)/stylelint $(src)/$(styles)/**.css

process: process-webpack

process-webpack:
	yarn build

process-images:
	$(bin)/imagemin $(src)/$(images)/* -o $(dest)/$(images)

process-icons:
	$(bin)/svg-sprite $(src)/$(icons)/* \
		-s \
		--ss=icons \
		--symbol-dest=$(dest)/$(images)

watch:
	yarn dev

clean:
	-rm -r -v $(dest)

.PHONY: all build lint lint-scripts lint-styles process-webpack process-images process-icons watch clean
