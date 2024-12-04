#!/bin/bash

search_dir=~/Personal/repository/my-obsidian-flow/5.\ Exhibit
for entry in "$search_dir"/*
do
  echo "$entry"
  cp -r "$entry" content/
done

cp -r ~/Personal/repository/my-obsidian-flow/6.\ Vault/attachments/ content/6.\ Vault