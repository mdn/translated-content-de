---
title: "SVGElement: Fehlerereignis"
short-title: Fehler
slug: Web/API/SVGElement/error_event
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}}

Das `error`-Ereignis wird ausgelöst, wenn ein SVG-Element nicht richtig geladen wird oder ein Fehler während der Skriptausführung auftritt.

Dies implementiert im Grunde das standardmäßige `error`-DOM-Ereignis.

Dieses Ereignis ist nicht abbruchfähig.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandlereigenschaft.

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

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
