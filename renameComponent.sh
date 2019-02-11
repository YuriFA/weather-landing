#!/bin/bash
# $1 - component location path
# $2 - component name

[ -z "$1" ] && echo "1st parameter - 'location path' is required" && exit 1
[ -z "$2" ] && echo "2nd parameter - 'component name' is required" && exit 1
[ -z "$3" ] && echo "3rd parameter - 'new component name' is required" && exit 1

location_path=$1
component_name=$2
new_component_name=$3

component_path="$location_path/$component_name/"
component_file="$component_path/$component_name.js"

echo "Path: $location_path \r\nComponent: $component_name\r\nComponent file: $component_file"

if [ ! -f "$component_file" ]; then
  echo "[NOT_FOUND] Component file $component_file"
  exit 1
else
  echo "Starting rename $component_name to $new_component_name"

  new_component_path=$location_path/$new_component_name

  [ -f "$component_path/$component_name.js" ] && git mv $component_path/$component_name.js $component_path/$new_component_name.js
  [ -f "$component_path/$component_name.test.js" ] && git mv $component_path/$component_name.test.js $component_path/$new_component_name.test.js
  [ -f "$component_path/$component_name.sss" ] && git mv $component_path/$component_name.sss $component_path/$new_component_name.sss

  git mv $component_path $new_component_path

  echo "Rename component name in files"
  sed -i "s/$component_name/$new_component_name/g" $new_component_path/index.js
  sed -i "s/$component_name/$new_component_name/g" $new_component_path/$new_component_name.js
fi

echo "Component $component_name renamed to $new_component_name"
