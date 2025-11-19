---
title: Statische Methode
slug: Glossary/Static_method
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

Eine statische Methode (oder _statische Funktion_) ist eine {{Glossary("method", "Methode")}}, die als Mitglied eines {{Glossary("object", "Objekts")}} definiert ist, jedoch direkt vom Konstruktor eines API-Objekts aus zugänglich ist, anstatt von einer Objektinstanz, die über den Konstruktor erstellt wurde.

In einer [Web-API](/de/docs/Web/API) ist eine statische Methode eine, die durch eine Schnittstelle definiert ist, aber aufgerufen werden kann, ohne zuerst ein Objekt dieses Typs zu instanziieren.

Methoden, die auf Objektinstanzen aufgerufen werden, werden _Instanzmethoden_ genannt.

## Beispiele

In der [Benachrichtigungen API](/de/docs/Web/API/Notifications_API) wird die Methode [`Notification.requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static) direkt auf dem eigentlichen [`Notification`](/de/docs/Web/API/Notification) Konstruktor aufgerufen — es handelt sich um eine statische Methode:

```js
let promise = Notification.requestPermission();
```

Die Methode [`Notification.close()`](/de/docs/Web/API/Notification/close) hingegen ist eine Instanzmethode — sie wird auf einer spezifischen Benachrichtigungsobjektinstanz aufgerufen, um die Systembenachrichtigung zu schließen, die sie repräsentiert:

```js
let myNotification = new Notification("This is my notification");

myNotification.close();
```

## Siehe auch

- [static](/de/docs/Web/JavaScript/Reference/Classes/static)
- Verwandte Glossarbegriffe:
  - {{Glossary("Object", "Objekt")}}
  - {{Glossary("Method", "Methode")}}
