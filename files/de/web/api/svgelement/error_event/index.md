---
title: "SVGElement: error event"
short-title: error
slug: Web/API/SVGElement/error_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("SVG")}}

Das `error`-Ereignis wird ausgelöst, wenn ein SVG-Element nicht ordnungsgemäß geladen wird oder wenn ein Fehler während der Skriptausführung auftritt.

Dies implementiert im Wesentlichen das Standard-`error`-DOM-Ereignis.

Dieses Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("error", (event) => { })

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
