---
title: "Notification: silent-Eigenschaft"
short-title: silent
slug: Web/API/Notification/silent
l10n:
  sourceCommit: 79f5e2c8ed9833f409e9054e69e02798b83422d1
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die schreibgeschützte **`silent`**-Eigenschaft des [`Notification`](/de/docs/Web/API/Notification)-Interfaces gibt an, ob die Benachrichtigung stumm sein soll, d.h. keine Geräusche oder Vibrationen sollten ausgegeben werden, unabhängig von den Geräteeinstellungen. Dies wird über die `silent`-Option des [`Notification()`](/de/docs/Web/API/Notification/Notification)-Konstruktors gesteuert.

## Wert

Ein boolescher Wert oder `null`. Wenn auf `true` gesetzt, ist die Benachrichtigung stumm; wenn auf `null` gesetzt (der Standardwert), werden die Standardeinstellungen des Geräts respektiert.

## Beispiele

Das folgende Beispiel löst eine stumme Benachrichtigung aus. Ein `options`-Objekt wird erstellt, und die Benachrichtigung wird als Reaktion auf einen Button-Klick unter Verwendung des [`Notification()`](/de/docs/Web/API/Notification/Notification)-Konstruktors ausgelöst. Der Code umfasst auch eine rudimentäre Berechtigungsbehandlung, die die Erlaubnis des Nutzers anfordert, Benachrichtigungen auszulösen, falls diese noch nicht erteilt wurde.

```js
const btn = document.querySelector("button");

const options = {
  body: "No annoying pings or vibrations?",
  silent: true,
};

function requestSilentNotification() {
  const n = new Notification("Silent notification", options);
  console.log(n.silent); // should return true
}

btn.addEventListener("click", () => {
  if (Notification.permission === "granted") {
    requestSilentNotification();
  } else {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        requestSilentNotification();
      } else {
        console.log("Notification permission was not granted");
      }
    });
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
