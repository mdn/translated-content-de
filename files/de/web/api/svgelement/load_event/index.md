---
title: "SVGElement: load event"
short-title: load
slug: Web/API/SVGElement/load_event
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("SVG")}}

Das `load` Ereignis wird auf einem `SVGElement` ausgelöst, wenn es im Browser geladen wird, z.B. im DOM im Falle eines eingebetteten `<svg>`. Es ist im Wesentlichen dasselbe wie das Standard-`load`-DOM-Ereignis.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("load", (event) => {});

onload = (event) => {};
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
