---
title: "Document: styleSheets-Eigenschaft"
short-title: styleSheets
slug: Web/API/Document/styleSheets
l10n:
  sourceCommit: b8af61d883d15a2d7e964ca96e00cafbd94f6e6a
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`styleSheets`**-Eigenschaft des [`Document`](/de/docs/Web/API/Document)-Interfaces gibt eine [`StyleSheetList`](/de/docs/Web/API/StyleSheetList) von [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekten für Stylesheets zurück, die explizit in ein Dokument eingebunden oder eingebettet sind.

## Wert

Die zurückgegebene Liste ist wie folgt geordnet:

- StyleSheets, die aus {{HTTPHeader("Link")}}-Headern abgerufen werden, stehen zuerst, sortiert in der Reihenfolge der Header.
- StyleSheets, die aus dem DOM abgerufen werden, folgen danach, sortiert in [Baumreihenfolge](https://dom.spec.whatwg.org/#concept-tree-order).

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
