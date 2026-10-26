---
title: "SVGElement: error-Ereignis"
short-title: error
slug: Web/API/SVGElement/error_event
l10n:
  sourceCommit: d4f95d5a32920324e2502a556d8bdd9d7f446718
---

{{APIRef("SVG")}}

Das `error`-Ereignis wird ausgelöst, wenn ein SVG-Element nicht ordnungsgemäß geladen wird oder während der Ausführung eines Skripts ein Fehler auftritt.

Es implementiert im Wesentlichen das standardmäßige DOM-`error`-Ereignis.

Dieses Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("error", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onerror = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

```js
svgElem.addEventListener("error", () => {
  console.log("SVG not loaded properly.");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
