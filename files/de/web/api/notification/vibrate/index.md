---
title: "Notification: Eigenschaft vibrate"
short-title: vibrate
slug: Web/API/Notification/vibrate
l10n:
  sourceCommit: 85577061e99da7082b48263fa19f9b1ef4187eda
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}} {{AvailableInWorkers}}{{non-standard_header}}

Die schreibgeschützte Eigenschaft **`vibrate`** der Schnittstelle [`Notification`](/de/docs/Web/API/Notification) gibt ein [Vibrationsmuster](/de/docs/Web/API/Vibration_API#vibration_patterns) an, das die Vibrationshardware des Geräts ausgibt, wenn die Benachrichtigung ausgelöst wird. Es wird in der Option `vibrate` des Konstruktors [`Notification()`](/de/docs/Web/API/Notification/Notification) festgelegt.

## Wert

Ein [Vibrationsmuster](/de/docs/Web/API/Vibration_API#vibration_patterns), wie in der [Vibration-API-Spezifikation](https://w3c.github.io/vibration/) definiert.

## Beispiele

Der folgende Ausschnitt soll eine Benachrichtigung erstellen, die auch eine Vibration des Geräts auslöst. Dazu wird ein einfaches `options`-Objekt erstellt und anschließend die Benachrichtigung mit dem Konstruktor `Notification()` ausgelöst.

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
