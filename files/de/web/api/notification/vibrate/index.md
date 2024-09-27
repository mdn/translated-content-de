---
title: "Notification: Eigenschaft vibrate"
short-title: vibrate
slug: Web/API/Notification/vibrate
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die **`vibrate`**-Eigenschaft der [`Notification`](/de/docs/Web/API/Notification)-Schnittstelle gibt ein [Vibrationsmuster](/de/docs/Web/API/Vibration_API#vibration_patterns) an, das von der Vibrationshardware des Geräts ausgeführt wird, wenn die Benachrichtigung ausgelöst wird. Dies wird in der `vibrate`-Option des [`Notification()`](/de/docs/Web/API/Notification/Notification)-Konstruktors angegeben.

## Wert

Ein [Vibrationsmuster](/de/docs/Web/API/Vibration_API#vibration_patterns), wie im [Vibration API-Spezifikation](https://w3c.github.io/vibration/) angegeben.

## Beispiele

Der folgende Code-Snippet soll eine Benachrichtigung erzeugen, die auch die Vibration des Geräts auslöst; ein einfaches `options`-Objekt wird erstellt und dann durch den `Notification()`-Konstruktor die Benachrichtigung ausgelöst.

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
