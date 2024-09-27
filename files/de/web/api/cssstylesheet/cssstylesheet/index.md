---
title: "CSSStyleSheet: CSSStyleSheet() Konstruktor"
short-title: CSSStyleSheet()
slug: Web/API/CSSStyleSheet/CSSStyleSheet
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{APIRef("CSSOM")}}

Der **`CSSStyleSheet()`** Konstruktor erstellt ein neues [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt, das ein einzelnes [Stylesheet](/de/docs/Glossary/Stylesheet) repräsentiert.

Nach der Erstellung eines Stylesheets können die Methoden [`CSSStyleSheet.replace()`](/de/docs/Web/API/CSSStyleSheet/replace), [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync), [`CSSStyleSheet.insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule) und [`CSSStyleSheet.deleteRule()`](/de/docs/Web/API/CSSStyleSheet/deleteRule) verwendet werden, um die Regeln des neuen Stylesheets zu ändern.

Ein mit dieser Methode erstelltes Stylesheet wird als "konstruiertes Stylesheet" bezeichnet. Ein konstruiertes Stylesheet kann zwischen einem Dokument und seinen Shadow DOM-Unterbäumen mithilfe von [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets) und [`Document.adoptedStyleSheets`](/de/docs/Web/API/Document/adoptedStyleSheets) geteilt werden.

## Syntax

```js-nolint
new CSSStyleSheet()
new CSSStyleSheet(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das folgendes enthält:

    - `baseURL` {{optional_inline}}
      - : Ein String, der die `baseURL` enthält, die verwendet wird, um relative URLs im Stylesheet aufzulösen.
    - `media` {{optional_inline}}
      - : Eine [`MediaList`](/de/docs/Web/API/MediaList), die eine Liste von Medientypen enthält, oder ein String, der einen einzelnen Medientyp enthält.
    - `disabled` {{optional_inline}}
      - : Ein {{jsxref("Boolean")}}, der angibt, ob das Stylesheet deaktiviert ist. Standardmäßig `false`.

## Beispiele

Im folgenden Beispiel wird ein neues [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) mit einer Medientyp-Regel `"print"` erstellt. Das Ausgeben von [`StyleSheet.media`](/de/docs/Web/API/StyleSheet/media) in der Konsole gibt eine [`MediaList`](/de/docs/Web/API/MediaList) mit einem Eintrag für diese Druckregel zurück.

```js
let stylesheet = new CSSStyleSheet({ media: "print" });
console.log(stylesheet.media);
```

### Stylesheets mit einem Shadow DOM teilen

Der untenstehende Code zeigt, wie das Stylesheet erstellt wird und anschließend mit [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync) eine Regel hinzugefügt wird.

```js
// Create an empty "constructed" stylesheet
const sheet = new CSSStyleSheet();
// Apply a rule to the sheet
sheet.replaceSync("a { color: red; }");
```

Wir erstellen dann ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) und übergeben das Stylesheet-Objekt in einem Array an die Eigenschaft [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets).

```js
// Create an element in the document and then create a shadow root:
const node = document.createElement("div");
const shadow = node.attachShadow({ mode: "open" });

//Adopt the sheet into the shadow DOM
shadow.adoptedStyleSheets = [sheet];
```

Wir können die Stylesheets ändern, nachdem sie dem Array hinzugefügt wurden. Unten fügen wir demselben Stylesheet mit [`CSSStyleSheet.insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule) eine neue Regel hinzu.

```js
sheet.insertRule("* { background-color: blue; }");
// The document will now have blue background.
```

Dasselbe Stylesheet kann mit mehreren Shadow-Unterbäumen im selben Dokument geteilt werden. Für weitere Beispiele siehe [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Konstruktible Stylesheets](https://web.dev/articles/constructable-stylesheets) (web.dev)
- [Verwendung des Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [construct-style-sheets-polyfill](https://www.npmjs.com/package/construct-style-sheets-polyfill)
