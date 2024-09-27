---
title: Statische Methode
slug: Glossary/Static_method
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Eine statische Methode (oder _statische Funktion_) ist eine [Methode](/de/docs/Glossary/method), die als Mitglied eines [Objekts](/de/docs/Glossary/object) definiert ist, aber direkt vom Konstruktor eines API-Objekts aus zugänglich ist, anstatt von einer Objektinstanz, die über den Konstruktor erstellt wurde.

In einer [Web-API](/de/docs/Web/API) ist eine statische Methode eine, die durch eine Schnittstelle definiert ist, aber ohne vorherige Instanziierung eines Objekts dieses Typs aufgerufen werden kann.

Methoden, die auf Objektinstanzen aufgerufen werden, nennt man _Instanzmethoden_.

## Beispiele

In der [Notifications-API](/de/docs/Web/API/Notifications_API) wird die Methode [`Notification.requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static) auf dem eigentlichen [`Notification`](/de/docs/Web/API/Notification) Konstruktor selbst aufgerufen — es ist eine statische Methode:

```js
let promise = Notification.requestPermission();
```

Die Methode [`Notification.close()`](/de/docs/Web/API/Notification/close) hingegen ist eine Instanzmethode — sie wird auf einem spezifischen Benachrichtigungsobjekt aufgerufen, um die von ihr repräsentierte Systembenachrichtigung zu schließen:

```js
let myNotification = new Notification("This is my notification");

myNotification.close();
```

## Siehe auch

- [Static Method](https://www.techopedia.com/definition/24034/static-method-java) auf Techopedia
- [static](/de/docs/Web/JavaScript/Reference/Classes/static)
- Verwandte Glossarbegriffe:
  - [Objekt](/de/docs/Glossary/Object)
  - [Methode](/de/docs/Glossary/Method)
