### Анализ и проектирование
 
- Анализ текущей системы smart-home описан [здесь](docs/asis/Readme.md)
- Проектирование будущей системы smart-home based on microservice arch описано [здесь](docs/tobe/Readme.md)

### Создание и документирование API будущих микросервисов

- Device-manager service [API doc](https://github.com/misikch/ya-practicum-arch-sprint3-device-manager/blob/main/api.yaml)
- Telemetry service [API doc](https://github.com/misikch/ya-practicum-arch-sprint3-telemetry/blob/main/api.yaml)

### Задание 2: Разработка MVP

#### Сервис Управления устройствами умного дома

- Код сервиса: https://github.com/misikch/ya-practicum-arch-sprint3-device-manager
- Инструкция по запуску окружения (database, kafka) лежит в Readme.md
- Api сервиса описано в [файле]((https://github.com/misikch/ya-practicum-arch-sprint3-device-manager/blob/main/api.yaml)). 
Имеется кодогенерация на основе openApi.
- Имеется Makefile для запуска codegen, linter, tests, build
- Настроено CI через github actions: codegen, linter, tests, build, docker image build, push to dockerhub.

#### Сервис работы с телеметрией устройств умного дома

- Код сервиса: https://github.com/misikch/ya-practicum-arch-sprint3-telemetry
- Инструкция по запуску окружения (database, kafka) лежит в Readme.md
- Api сервиса описано в [файле]((https://github.com/misikch/ya-practicum-arch-sprint3-telemetry/blob/main/api.yaml)).
  Имеется кодогенерация на основе openApi.
- Есть сам сервис работы с api и отдельный worker, который следит за databus -- появление устройств, изменения их статуса.
- Имеется Makefile для запуска codegen, linter, tests, build
- Настроено CI через github actions: codegen, linter, tests, build, docker image build, push to dockerhub.


### Подготовка 3rd party сервисов для связи микросервисов

В директории `smart-home-microservices` создан docker-compose файл в котором:
- Настроен api-gateway (kong). Static config file.
- Настроена mongo db (database, collections). Для простоты поднята одна БД для всех сервисов
- Настроена kafka и два topic'а
- Поднимаются микросервисы (образы которых собираются автоматически по CI github actions и пушатся в dockerhub)
  - device-manager (1 replica)
  - telemetry service (2 replicas), telemetry worker (1 replica)
- Имеются примеры запросов в файл [test.http](smart-home-microservices/test/test.http)

