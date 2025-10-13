---
title: "Dokument: styleSheets-Eigenschaft"
short-title: styleSheets
slug: Web/API/Document/styleSheets
l10n:
  sourceCommit: 87440643d71bf81a5bf4b8fa21db9e3d56ead395
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`styleSheets`**-Eigenschaft des [`Document`](/de/docs/Web/API/Document)-Interfaces gibt eine [`StyleSheetList`](/de/docs/Web/API/StyleSheetList) von [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekten zurück, für Stylesheets, die explizit in ein Dokument verlinkt oder eingebettet sind.

## Wert

Die zurückgegebene Liste ist folgendermaßen geordnet:

- StyleSheets, die über {{HTTPHeader("Link")}}-Header abgerufen wurden, werden zuerst platziert und in der Reihenfolge der Header sortiert.
- StyleSheets, die aus dem DOM abgerufen wurden, werden danach platziert und in [Baumreihenfolge](https://dom.spec.whatwg.org/#concept-tree-order) sortiert.

## Beispiele

### Abrufen eines bestimmten Stylesheets nach seinem Titel

```js
function getStyleSheet(uniqueTitle) {
  for (const sheet of document.styleSheets) {
    if (sheet.title === uniqueTitle) {
      return sheet;
    }
  }
}
```

### Zugriff auf Regeln im Stylesheet

Sie können auf diese Stylesheets und ihre Regeln einzeln zugreifen, indem Sie die Objekte `stylesheet`, `style` und [`CSSRule`](/de/docs/Web/API/CSSRule) verwenden, wie in diesem Beispiel gezeigt wird, das alle Stilregel-Selektoren in die Konsole ausgibt.

```js
for (const styleSheet of document.styleSheets) {
  for (const rule of styleSheet.cssRules) {
    console.log(`${rule.selectorText}\n`);
  }
}
```

Für ein Dokument mit einem einzelnen Stylesheet, in dem die folgenden drei Regeln definiert sind:

```css
body {
  background-color: darkblue;
}
p {
  font-family: "Arial";
  font-size: 10pt;
  margin-left: 0.125in;
}
#lumpy {
  display: none;
}
```

Gibt dieses Skript Folgendes aus:

```plain
BODY
P
#LUMPY
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
