---
title: Statische Methode
slug: Glossary/Static_method
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Eine statische Methode (oder _statische Funktion_) ist eine {{Glossary("method", "Methode")}}, die als Mitglied eines {{Glossary("object", "Objekts")}} definiert ist, aber direkt vom Konstruktor eines API-Objekts aus zugänglich ist, anstatt von einer über den Konstruktor erstellten Objektinstanz.

In einer [Web-API](/de/docs/Web/API) ist eine statische Methode eine, die durch eine Schnittstelle definiert ist, aber ohne vorheriges Instanziieren eines Objekts dieses Typs aufgerufen werden kann.

Methoden, die auf Objektinstanzen aufgerufen werden, werden _Instanzmethoden_ genannt.

## Beispiele

In der [Benachrichtigungs-API](/de/docs/Web/API/Notifications_API) wird die Methode [`Notification.requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static) auf dem eigentlichen [`Notification`](/de/docs/Web/API/Notification)-Konstruktor selbst aufgerufen — sie ist eine statische Methode:

```js
let promise = Notification.requestPermission();
```

Die Methode [`Notification.close()`](/de/docs/Web/API/Notification/close) hingegen ist eine Instanzmethode — sie wird auf einer spezifischen Benachrichtigungsobjektinstanz aufgerufen, um die von ihr dargestellte Systembenachrichtigung zu schließen:

```js
let myNotification = new Notification("This is my notification");

myNotification.close();
```

## Siehe auch

- [Static Method](https://www.techopedia.com/definition/24034/static-method-java) auf Techopedia
- [static](/de/docs/Web/JavaScript/Reference/Classes/static)
- Verwandte Glossarbegriffe:
  - {{Glossary("Object", "Objekt")}}
  - {{Glossary("Method", "Methode")}}
