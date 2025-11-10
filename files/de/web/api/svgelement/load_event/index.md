---
title: "SVGElement: load-Ereignis"
short-title: load
slug: Web/API/SVGElement/load_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("SVG")}}

Das `load`-Ereignis wird auf einem `SVGElement` ausgelöst, wenn es im Browser geladen wird, z. B. im DOM im Fall eines eingebetteten `<svg>`. Es ist im Wesentlichen dasselbe wie das standardmäßige `load`-DOM-Ereignis.

Dieses Ereignis ist nicht abbruchfähig und wird nicht weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("load", (event) => { })

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
