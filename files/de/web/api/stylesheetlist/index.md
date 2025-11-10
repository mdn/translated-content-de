---
title: StyleSheetList
slug: Web/API/StyleSheetList
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{APIRef("CSSOM")}}

Das `StyleSheetList`-Interface repräsentiert eine Liste von [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekten. Eine Instanz dieses Objekts kann durch [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) zurückgegeben werden.

Es handelt sich um ein array-ähnliches Objekt, das jedoch nicht mit {{jsxref("Array")}}-Methoden iteriert werden kann. Es kann jedoch in einer standardmäßigen {{jsxref("Statements/for", "for")}}-Schleife über seine Indizes iteriert oder in ein {{jsxref("Array")}} umgewandelt werden.

> [!NOTE]
> Typischerweise umschließen Listen-Interfaces wie `StyleSheetList` {{jsxref("Array")}}-Typen, sodass Sie `Array`-Methoden darauf verwenden können.
> Dies ist hier aus [historischen Gründen](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156) nicht der Fall.
> Sie können jedoch `StyleSheetList` in ein `Array` umwandeln, um diese Methoden zu verwenden (siehe das Beispiel unten).

## Instanz-Eigenschaften

- [`StyleSheetList.length`](/de/docs/Web/API/StyleSheetList/length) {{ReadOnlyInline}}
  - : Gibt die Anzahl der [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekte in der Sammlung zurück.

## Instanz-Methoden

- [`StyleSheetList.item()`](/de/docs/Web/API/StyleSheetList/item)
  - : Gibt das [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt am übergebenen Index zurück oder `null`, wenn kein Element für diesen Index existiert.

## Beispiele

### CSSStyleSheet-Objekte mit einer for-Schleife erhalten

```js
for (const styleSheet of document.styleSheets) {
  console.log(styleSheet); // A CSSStyleSheet object
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
