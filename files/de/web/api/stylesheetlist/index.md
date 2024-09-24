---
title: StyleSheetList
slug: Web/API/StyleSheetList
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("CSSOM")}}

Das `StyleSheetList`-Interface repräsentiert eine Liste von {{domxref("CSSStyleSheet")}}-Objekten. Eine Instanz dieses Objekts kann durch {{domxref("Document.styleSheets")}} zurückgegeben werden.

Es ist ein array-ähnliches Objekt, jedoch kann es nicht mit {{jsxref("Array")}}-Methoden durchlaufen werden. Es kann jedoch in einer Standard-{{jsxref("Statements/for", "for")}}-Schleife über seine Indizes iteriert oder in ein {{jsxref("Array")}} umgewandelt werden.

> [!NOTE]
> Typischerweise umhüllen Listen-Interfaces wie `StyleSheetList` {{jsxref("Array")}}-Typen, sodass Sie `Array`-Methoden darauf verwenden können.
> Dies ist hier aus [historischen Gründen](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156) nicht der Fall.
> Sie können `StyleSheetList` jedoch in ein `Array` umwandeln, um diese Methoden zu verwenden (siehe das Beispiel unten).

## Instanz-Eigenschaften

- {{domxref("StyleSheetList.length")}} {{ReadOnlyInline}}
  - : Gibt die Anzahl der {{domxref("CSSStyleSheet")}}-Objekte in der Sammlung zurück.

## Instanz-Methoden

- {{domxref("StyleSheetList.item()")}}
  - : Gibt das {{domxref("CSSStyleSheet")}}-Objekt an dem übergebenen Index zurück oder `null`, wenn kein Element für diesen Index existiert.

## Beispiele

### CSSStyleSheet-Objekte mit einer for-Schleife erhalten

```js
const styleSheet = [];
const styleSheets = document.styleSheets;

for (let i = 0; i < styleSheets.length; i++) {
  styleSheet.push(styleSheets[i]);
}
```

### Alle CSS-Regeln für das Dokument mit Array-Methoden erhalten

```js
const allCSS = [...document.styleSheets]
  .map((styleSheet) => {
    try {
      return [...styleSheet.cssRules].map((rule) => rule.cssText).join("");
    } catch (e) {
      console.log(
        "Access to stylesheet %s is denied. Ignoring…",
        styleSheet.href,
      );
    }
  })
  .filter(Boolean)
  .join("\n");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
