---
title: Static method
slug: Glossary/Static_method
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Eine statische Methode (oder _statische Funktion_) ist eine [Methode](/de/docs/Glossary/method), die als Mitglied eines [Objekts](/de/docs/Glossary/object) definiert ist, aber direkt vom Konstruktor eines API-Objekts aus zugänglich ist, statt von einer über den Konstruktor erstellten Objektinstanz.

In einer [Web-API](/de/docs/Web/API) ist eine statische Methode eine Methode, die von einer Schnittstelle definiert wird, aber aufgerufen werden kann, ohne zuerst ein Objekt dieses Typs zu instanziieren.

Methoden, die auf Objektinstanzen aufgerufen werden, werden _Instanzmethoden_ genannt.

## Beispiele

In der [Notifications API](/de/docs/Web/API/Notifications_API) wird die Methode [`Notification.requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static) direkt auf dem eigentlichen [`Notification`](/de/docs/Web/API/Notification)-Konstruktor aufgerufen — sie ist eine statische Methode:

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
- Verwandte Glossareinträge:
  - [Object](/de/docs/Glossary/Object)
  - [Method](/de/docs/Glossary/Method)
