---
title: "CSSStyleSheet: CSSStyleSheet() Konstruktor"
short-title: CSSStyleSheet()
slug: Web/API/CSSStyleSheet/CSSStyleSheet
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("CSSOM")}}

Der **`CSSStyleSheet()`** Konstruktor erstellt ein neues [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) Objekt, das ein einzelnes {{Glossary("Stylesheet", "Stylesheet")}} repräsentiert.

Nachdem ein Stylesheet konstruiert wurde, können die Methoden [`CSSStyleSheet.replace()`](/de/docs/Web/API/CSSStyleSheet/replace), [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync), [`CSSStyleSheet.insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule) und [`CSSStyleSheet.deleteRule()`](/de/docs/Web/API/CSSStyleSheet/deleteRule) verwendet werden, um die Regeln des neuen Stylesheets zu ändern.

Ein mit dieser Methode erstelltes Stylesheet wird als "konstruiertes Stylesheet" bezeichnet. Ein konstruiertes Stylesheet kann zwischen einem Dokument und seinen Shadow-DOM-Subtrees mit [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets) und [`Document.adoptedStyleSheets`](/de/docs/Web/API/Document/adoptedStyleSheets) geteilt werden.

## Syntax

```js-nolint
new CSSStyleSheet()
new CSSStyleSheet(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das Folgendes enthält:
    - `baseURL` {{optional_inline}}
      - : Ein String, der die `baseURL` enthält, die zur Auflösung relativer URLs im Stylesheet verwendet wird.
    - `media` {{optional_inline}}
      - : Eine [`MediaList`](/de/docs/Web/API/MediaList), die eine Liste von Medientypen enthält, oder ein String mit einer einzigen Regel.
    - `disabled` {{optional_inline}}
      - : Ein {{jsxref("Boolean")}}, das angibt, ob das Stylesheet deaktiviert ist. Standardmäßig falsch.

## Beispiele

Im folgenden Beispiel wird ein neues [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) mit einer Medienregel von `"print"` konstruiert. Das Ausdrucken von [`StyleSheet.media`](/de/docs/Web/API/StyleSheet/media) in die Konsole gibt eine [`MediaList`](/de/docs/Web/API/MediaList) mit einem einzigen Eintrag für diese Druckregel zurück.

```js
let stylesheet = new CSSStyleSheet({ media: "print" });
console.log(stylesheet.media);
```

### Teilung von Stylesheets mit einem Shadow DOM

Der untenstehende Code zeigt das konstruierte Stylesheet und dann wird [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync) aufgerufen, um eine Regel zum Stylesheet hinzuzufügen.

```js
// Create an empty "constructed" stylesheet
const sheet = new CSSStyleSheet();
// Apply a rule to the sheet
sheet.replaceSync("a { color: red; }");
```

Wir erstellen dann ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) und übergeben das Stylesheet-Objekt der Eigenschaft [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets) innerhalb eines Arrays.

```js
// Create an element in the document and then create a shadow root:
const node = document.createElement("div");
const shadow = node.attachShadow({ mode: "open" });

// Adopt the sheet into the shadow DOM
shadow.adoptedStyleSheets = [sheet];
```

Wir können die Stylesheets ändern, nachdem sie dem Array hinzugefügt wurden. Unten fügen wir eine neue Regel zum gleichen Stylesheet mit [`CSSStyleSheet.insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule) hinzu.

```js
sheet.insertRule("* { background-color: blue; }");
// The document will now have blue background.
```

Dasselbe Stylesheet kann mit mehreren Shadow-Subtrees im gleichen Dokument geteilt werden. Weitere Beispiele finden Sie unter [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.adoptedStyleSheets`](/de/docs/Web/API/Document/adoptedStyleSheets)
- [Konstruktible Stylesheets](https://web.dev/articles/constructable-stylesheets) (web.dev)
- [Verwendung des Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [construct-style-sheets-polyfill](https://www.npmjs.com/package/construct-style-sheets-polyfill)
