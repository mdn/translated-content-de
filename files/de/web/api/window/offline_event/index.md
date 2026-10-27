---
title: "Window: offline-Ereignis"
short-title: offline
slug: Web/API/Window/offline_event
l10n:
  sourceCommit: 023b9075df473020b3279afa031bb4a32e3b743b
---

{{APIRef("HTML DOM")}}

Das **`offline`**-Ereignis der [`Window`](/de/docs/Web/API/Window)-Schnittstelle wird ausgelöst, wenn der Browser den Zugriff auf das Netzwerk verliert und der Wert von [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) auf `false` wechselt.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("offline", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onoffline = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Aliasse für den Event-Handler

Neben der `Window`-Schnittstelle ist die Event-Handler-Eigenschaft `onoffline` auch für die folgenden Ziele verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Beispiele

```js
// addEventListener version
window.addEventListener("offline", (event) => {
  console.log("The network connection has been lost.");
});

// onoffline version (but note that this replaces other event listeners
// added using onoffline, if any)
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
