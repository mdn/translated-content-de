---
title: "Window: offline-Ereignis"
short-title: offline
slug: Web/API/Window/offline_event
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

Das **`offline`**-Ereignis der {{domxref("Window")}}-Schnittstelle wird ausgelöst, wenn der Browser den Zugriff auf das Netzwerk verloren hat und der Wert von {{domxref("Navigator.onLine")}} auf `false` wechselt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("offline", (event) => {});
onoffline = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Ereignis-Handler-Aliase

Zusätzlich zur `Window`-Schnittstelle ist die Ereignis-Handler-Eigenschaft `onoffline` auch auf den folgenden Zielen verfügbar:

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## Beispiele

```js
// addEventListener-Version
window.addEventListener("offline", (event) => {
  console.log("The network connection has been lost.");
});

// onoffline-Version
window.onoffline = (event) => {
  console.log("The network connection has been lost.");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`online`](/de/docs/Web/API/Window/online_event)
