---
title: "CSSStyleSheet: CSSStyleSheet() Konstruktor"
short-title: CSSStyleSheet()
slug: Web/API/CSSStyleSheet/CSSStyleSheet
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{APIRef("CSSOM")}}

Der **`CSSStyleSheet()`** Konstruktor erstellt ein neues {{domxref("CSSStyleSheet")}}-Objekt, das ein einzelnes [Stylesheet](/de/docs/Glossary/Stylesheet) repräsentiert.

Nach der Erstellung eines Stylesheets können die Methoden {{domxref("CSSStyleSheet.replace()")}}, {{domxref("CSSStyleSheet.replaceSync()")}}, {{domxref("CSSStyleSheet.insertRule()")}} und {{domxref("CSSStyleSheet.deleteRule()")}} verwendet werden, um die Regeln des neuen Stylesheets zu ändern.

Ein mit dieser Methode erstelltes Stylesheet wird als "konstruiertes Stylesheet" bezeichnet.
Ein konstruiertes Stylesheet kann zwischen einem Dokument und seinen Shadow-DOM-Unterbäumen mit {{domxref("ShadowRoot.adoptedStyleSheets")}} und {{domxref("Document.adoptedStyleSheets")}} geteilt werden.

## Syntax

```js-nolint
new CSSStyleSheet()
new CSSStyleSheet(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das Folgendes enthält:

    - `baseURL` {{optional_inline}}
      - : Ein String, der die `baseURL` enthält, die zum Auflösen relativer URLs im Stylesheet verwendet wird.
    - `media` {{optional_inline}}
      - : Ein {{domxref("MediaList")}}, das eine Liste von Medientypen enthält, oder ein String, der eine einzelne Regel enthält.
    - `disabled` {{optional_inline}}
      - : Ein {{jsxref("Boolean")}}, der angibt, ob das Stylesheet deaktiviert ist. Standardmäßig falsch.

## Beispiele

Im folgenden Beispiel wird ein neues {{domxref("CSSStyleSheet")}} mit einer Medienregel von `"print"` erstellt.
Das Ausdrucken von {{domxref("StyleSheet.media")}} in die Konsole gibt eine {{domxref("MediaList")}} mit einem einzigen Eintrag für diese Druckregel zurück.

```js
let stylesheet = new CSSStyleSheet({ media: "print" });
console.log(stylesheet.media);
```

### Stylesheets mit einem Shadow DOM teilen

Der folgende Code zeigt, dass das Stylesheet erstellt wird und dann {{domxref("CSSStyleSheet.replaceSync()")}} aufgerufen wird, um eine Regel zum Stylesheet hinzuzufügen.

```js
// Erstellen Sie ein leeres "konstruiertes" Stylesheet
const sheet = new CSSStyleSheet();
// Fügen Sie eine Regel zum Stylesheet hinzu
sheet.replaceSync("a { color: red; }");
```

Wir erstellen dann ein {{domxref("ShadowRoot")}} und übergeben das Stylesheet-Objekt der Eigenschaft {{domxref("ShadowRoot.adoptedStyleSheets")}} innerhalb eines Arrays.

```js
// Erstellen Sie ein Element im Dokument und dann einen Shadow Root:
const node = document.createElement("div");
const shadow = node.attachShadow({ mode: "open" });

// Adoptiere das Stylesheet in den Shadow DOM
shadow.adoptedStyleSheets = [sheet];
```

Wir können die Stylesheets ändern, nachdem sie zum Array hinzugefügt wurden.
Unten fügen wir mit {{domxref("CSSStyleSheet.insertRule()")}} eine neue Regel zum selben Stylesheet hinzu.

```js
sheet.insertRule("* { background-color: blue; }");
// Das Dokument hat jetzt einen blauen Hintergrund.
```

Dasselbe Stylesheet kann mit mehreren Shadow-Unterbäumen im gleichen Dokument geteilt werden.
Für weitere Beispiele sehen Sie {{domxref("ShadowRoot.adoptedStyleSheets")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Konstruktionsfähige Stylesheets](https://web.dev/articles/constructable-stylesheets) (web.dev)
- [Verwendung des Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [construct-style-sheets-polyfill](https://www.npmjs.com/package/construct-style-sheets-polyfill)
