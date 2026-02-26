#!/bin/sh
branch=$(git symbolic-ref --short HEAD)
if [ "$branch" = "main" ] || [ "$branch" = "develop" ]; then
  echo "Pushing to $branch is not allowed!"
  exit 1
fi
