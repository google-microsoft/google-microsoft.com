GIT_USER=richardgong1987 USE_SSH=true yarn run deploy
ssh root@161.117.178.164 << eeooff

rm -fr /usr/share/nginx/html/*

cd /root/google-microsoft.com

git pull

yarn build

cp -fr build/* /usr/share/nginx/html/


eeooff

echo done!



