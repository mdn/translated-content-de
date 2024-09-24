---
title: "Benachrichtigung: Eigenschaft vibrate"
short-title: vibrate
slug: Web/API/Notification/vibrate
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die **`vibrate`** schreibgeschützte Eigenschaft des {{domxref("Notification")}}-Interfaces legt ein [Vibrationsmuster](/de/docs/Web/API/Vibration_API#vibration_patterns) für die Vibrationstechnik des Geräts fest, das ausgeführt wird, wenn die Benachrichtigung ausgelöst wird. Dies wird in der `vibrate`-Option des {{domxref("Notification.Notification","Notification()")}}-Konstruktors angegeben.

## Wert

Ein [Vibrationsmuster](/de/docs/Web/API/Vibration_API#vibration_patterns), wie im [Vibration API spec](https://w3c.github.io/vibration/) angegeben.

## Beispiele

Der folgende Codeausschnitt soll eine Benachrichtigung erstellen, die auch eine Gerätevibration auslöst; ein einfaches `options`-Objekt wird erstellt und anschließend die Benachrichtigung mit dem `Notification()`-Konstruktor ausgelöst.

```js
const options = {
  body: "Your code submission has received 3 new review comments.",
  vibrate: [200, 100, 200],
};

const n = new Notification("New review activity", options);

console.log(n.vibrate); // [200, 100, 200]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
