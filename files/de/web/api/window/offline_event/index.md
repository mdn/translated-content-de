---
title: "Window: offline event"
short-title: offline
slug: Web/API/Window/offline_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`offline`**-Ereignis der [`Window`](/de/docs/Web/API/Window)-Schnittstelle wird ausgelöst, wenn der Browser den Netzwerkzugang verliert und der Wert von [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) auf `false` wechselt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("offline", (event) => { })

onoffline = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Event-Handler-Aliase

Zusätzlich zur `Window`-Schnittstelle ist die Event-Handler-Eigenschaft `onoffline` auch für die folgenden Ziele verfügbar:

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
