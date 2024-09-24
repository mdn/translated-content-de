---
title: "SVGElement: load Ereignis"
short-title: load
slug: Web/API/SVGElement/load_event
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}}

Das `load` Ereignis wird an einem `SVGElement` ausgelöst, wenn es im Browser geladen wird, z.B. im DOM im Fall eines eingebetteten `<svg>`. Es ist im Wesentlichen dasselbe wie das Standard-DOM-`load`-Ereignis.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("load", (event) => {});

onload = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

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
