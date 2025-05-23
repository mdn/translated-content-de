---
title: StyleSheetList
slug: Web/API/StyleSheetList
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{APIRef("CSSOM")}}

Das `StyleSheetList`-Interface repräsentiert eine Liste von [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekten. Eine Instanz dieses Objekts kann von [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) zurückgegeben werden.

Es handelt sich um ein array-ähnliches Objekt, das jedoch nicht mit {{jsxref("Array")}}-Methoden durchlaufen werden kann. Es kann jedoch in einer standardmäßigen {{jsxref("Statements/for", "for")}}-Schleife über seine Indizes durchlaufen oder in ein {{jsxref("Array")}} umgewandelt werden.

> [!NOTE]
> Typischerweise umschließen Listeninterfaces wie `StyleSheetList` {{jsxref("Array")}}-Typen, sodass Sie `Array`-Methoden auf ihnen verwenden können.
> Dies ist hier aus [historischen Gründen](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156) nicht der Fall.
> Sie können jedoch `StyleSheetList` in ein `Array` umwandeln, um diese Methoden zu verwenden (siehe das Beispiel unten).

## Instanz-Eigenschaften

- [`StyleSheetList.length`](/de/docs/Web/API/StyleSheetList/length) {{ReadOnlyInline}}
  - : Gibt die Anzahl der [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekte in der Sammlung zurück.

## Instanz-Methoden

- [`StyleSheetList.item()`](/de/docs/Web/API/StyleSheetList/item)
  - : Gibt das [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt an dem übergebenen Index zurück oder `null`, wenn für diesen Index kein Element existiert.

## Beispiele

### CSSStyleSheet-Objekte mit einer for-Schleife abrufen

```js
const styleSheet = [];
const styleSheets = document.styleSheets;

for (let i = 0; i < styleSheets.length; i++) {
  styleSheet.push(styleSheets[i]);
}
```

### Alle CSS-Regeln für das Dokument mit Array-Methoden abrufen

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
      return undefined;
    }
  })
  .filter(Boolean)
  .join("\n");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
