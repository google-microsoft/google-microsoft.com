GIT_USER=richardgong1987 USE_SSH=true yarn run deploy
ssh root@161.117.178.164 << eeooff

cd  -fr /usr/share/nginx/html/

git pull

eeooff

echo done!



