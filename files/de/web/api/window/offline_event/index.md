---
title: "Window: offline Ereignis"
short-title: offline
slug: Web/API/Window/offline_event
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

Das **`offline`**-Ereignis der [`Window`](/de/docs/Web/API/Window)-Schnittstelle wird ausgelöst, wenn der Browser den Zugriff auf das Netzwerk verliert und der Wert von [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) auf `false` wechselt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("offline", (event) => {});
onoffline = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Ereignis-Handler-Aliase

Zusätzlich zur `Window`-Schnittstelle ist die Ereignis-Handler-Eigenschaft `onoffline` auch auf den folgenden Zielen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Beispiele

```js
// addEventListener version
window.addEventListener("offline", (event) => {
  console.log("The network connection has been lost.");
});

// onoffline version
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
