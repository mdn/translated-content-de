---
title: "SVGElement: load-Ereignis"
short-title: load
slug: Web/API/SVGElement/load_event
l10n:
  sourceCommit: d4f95d5a32920324e2502a556d8bdd9d7f446718
---

{{APIRef("SVG")}}

Das `load`-Ereignis wird auf einem `SVGElement` ausgelöst, wenn es im Browser geladen wurde, beispielsweise im DOM bei einem eingebetteten `<svg>`. Es entspricht im Wesentlichen dem standardmäßigen `load`-DOM-Ereignis.

Dieses Ereignis kann nicht abgebrochen werden und steigt nicht im DOM-Baum auf.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("load", (event) => { })
```

Alternativ können Sie einen Wert der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onload = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

```js
svgElem.addEventListener("load", () => {
  console.log("SVG loaded.");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
