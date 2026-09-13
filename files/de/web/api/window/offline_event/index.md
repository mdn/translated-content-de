---
title: "Window: offline-Event"
short-title: offline
slug: Web/API/Window/offline_event
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}

Das **`offline`**-Event des [`Window`](/de/docs/Web/API/Window)-Interfaces wird ausgelöst, wenn der Browser den Zugriff auf das Netzwerk verloren hat und der Wert von [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) auf `false` wechselt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("offline", (event) => { })

onoffline = (event) => { }
```

## Event-Typ

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Event-Handler-Aliase

Zusätzlich zum `Window`-Interface ist die Event-Handler-Eigenschaft `onoffline` auch für die folgenden Ziele verfügbar:

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
