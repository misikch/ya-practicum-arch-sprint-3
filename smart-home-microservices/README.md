### Как запускать:
```shell
docker-compose up
```

После того, как kafka стартовала можно дергать сервисы по url из файла `test/test.http`

### Как остановить:
Ctrl+C и затем подчистить окружение:
```shell
docker-compose down --remove-orphan
```