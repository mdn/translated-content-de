---
title: "SVGElement: error Ereignis"
short-title: error
slug: Web/API/SVGElement/error_event
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}}

Das `error` Ereignis wird ausgelöst, wenn ein SVG-Element nicht ordnungsgemäß geladen wird oder wenn ein Fehler während der Skriptausführung auftritt.

Dies implementiert im Wesentlichen das standardmäßige `error` DOM-Ereignis.

Dieses Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
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
