---
title: "SVGElement: load-Ereignis"
short-title: load
slug: Web/API/SVGElement/load_event
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}}

Das `load`-Ereignis wird bei einem `SVGElement` ausgelöst, wenn es im Browser geladen wird, z.B. im DOM im Fall eines eingebetteten `<svg>`. Es ist im Grunde dasselbe wie das standardmäßige `load`-DOM-Ereignis.

Dieses Ereignis kann nicht abgebrochen werden und nicht nach oben geleitet (bubbled) werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

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
