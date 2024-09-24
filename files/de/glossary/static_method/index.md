---
title: Statische Methode
slug: Glossary/Static_method
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Eine statische Methode (oder _statische Funktion_) ist eine {{Glossary("method")}}, die als Mitglied eines {{Glossary("object")}} definiert ist, aber direkt vom Konstruktor eines API-Objekts zugänglich ist, anstatt von einer Objektinstanz, die über den Konstruktor erstellt wurde.

In einer [Web-API](/de/docs/Web/API) ist eine statische Methode eine, die durch ein Interface definiert ist, aber aufgerufen werden kann, ohne zuerst ein Objekt dieses Typs zu instanziieren.

Methoden, die auf Objektinstanzen aufgerufen werden, nennt man _Instanzmethoden_.

## Beispiele

In der [Notifications API](/de/docs/Web/API/Notifications_API) wird die {{domxref("Notification/requestPermission_static", "Notification.requestPermission()")}} Methode direkt auf dem eigentlichen {{domxref("Notification")}} Konstruktor aufgerufen — sie ist eine statische Methode:

```js
let promise = Notification.requestPermission();
```

Die {{domxref("Notification.close()")}} Methode hingegen ist eine Instanzmethode — sie wird auf einer spezifischen Notification-Objektinstanz aufgerufen, um die Systembenachrichtigung, die sie repräsentiert, zu schließen:

```js
let myNotification = new Notification("This is my notification");

myNotification.close();
```

## Siehe auch

- [Statische Methode](https://www.techopedia.com/definition/24034/static-method-java) auf Techopedia
- [static](/de/docs/Web/JavaScript/Reference/Classes/static)
- Verwandte Glossarbegriffe:
  - {{Glossary("Object")}}
  - {{Glossary("Method")}}
