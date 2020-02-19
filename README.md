Example of Payload

* Create Record
```
{
  "create": true,
  "key": 1,
  "value": "REGINALDO"
}
```

* Read Record
```
{
  "get": true,
  "key": 1
}
```

* Update Record
```
{
  "update": true,
  "key": 1,
  "data": {
    "age": 12,
    "gender": "male"
  }
}
```

* Remove Record
```
{
  "remove": true,
  "key": 1
}
```
