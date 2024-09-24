---
title: "Dokument: styleSheets-Eigenschaft"
short-title: styleSheets
slug: Web/API/Document/styleSheets
l10n:
  sourceCommit: b8af61d883d15a2d7e964ca96e00cafbd94f6e6a
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`styleSheets`**-Eigenschaft des {{domxref("Document")}}-Interfaces gibt eine {{domxref('StyleSheetList')}} von {{domxref('CSSStyleSheet')}}-Objekten zurück, für Stylesheets, die explizit in ein Dokument verlinkt oder eingebettet sind.

## Wert

Die zurückgegebene Liste ist wie folgt geordnet:

- StyleSheets, die aus {{HTTPHeader("Link")}}-Headern abgerufen werden, stehen an erster Stelle, sortiert in der Reihenfolge der Header.
- StyleSheets, die aus dem DOM abgerufen werden, folgen danach, sortiert in [tree order](https://dom.spec.whatwg.org/#concept-tree-order).

## Beispiele

```js
function getStyleSheet(unique_title) {
  for (const sheet of document.styleSheets) {
    if (sheet.title === unique_title) {
      return sheet;
    }
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
