---
title: "Dokument: `adoptedStyleSheets`-Eigenschaft"
short-title: adoptedStyleSheets
slug: Web/API/Document/adoptedStyleSheets
l10n:
  sourceCommit: 49f27d57fe6c54d1152bdddb3e8e09817055c241
---

{{APIRef("CSSOM")}}

Die **`adoptedStyleSheets`**-Eigenschaft des [`Document`](/de/docs/Web/API/Document)-Interfaces wird verwendet, um ein Array von konstruierten Stylesheets, die vom Dokument verwendet werden, festzulegen.

> [!NOTE]
> Ein konstruiertes Stylesheet ist ein Stylesheet, das programmatisch mithilfe des [`CSSStyleSheet()`-Konstruktors](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet) erstellt wurde (im Vergleich zu einem, das von einem User-Agent erstellt wird, wenn ein Stylesheet aus einem Skript importiert, mit {{HTMLElement('style')}} und {{CSSXref('@import')}} importiert oder über {{HTMLElement('link')}} verlinkt wird).

Die gleichen konstruierten Stylesheets können auch mit einer oder mehreren [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Instanzen über die [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets)-Eigenschaft geteilt werden.
Eine Änderung eines adoptierten Stylesheets wirkt sich auf alle Objekte aus, die es adoptieren.

Stylesheets in der Eigenschaft werden zusammen mit den anderen Stylesheets des Dokuments unter Verwendung des [CSS-Kaskaden-Algorithmus](/de/docs/Web/CSS/CSS_cascade/Cascade) ausgewertet.
Wo die Auflösung von Regeln die Reihenfolge der Stylesheets berücksichtigt, wird angenommen, dass `adoptedStyleSheets` nach denjenigen in [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) geordnet sind.

Nur Stylesheets, die mithilfe des [`CSSStyleSheet()`-Konstruktors](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet) im Kontext des aktuellen [`Document`](/de/docs/Web/API/Document) erstellt wurden, dürfen adoptiert werden.

## Wert

Der Wert ist ein Array von [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Instanzen, die mit dem [`CSSStyleSheet()`](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet)-Konstruktor im Kontext desselben [`Document`](/de/docs/Web/API/Document) erstellt worden sein müssen.

Wenn das Array geändert werden muss, verwenden Sie in-place Mutationen wie `push()`. Die [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Instanzen selbst können ebenfalls verändert werden und diese Änderungen gelten, wo immer das Stylesheet adoptiert wird.

In einer früheren Version der Spezifikation war das Array nicht modifizierbar, sodass der einzige Weg, neue Stylesheets hinzuzufügen, darin bestand, ein neues Array `adoptedStyleSheets` zuzuweisen.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Eine der [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Instanzen im Array wurde nicht mithilfe des [`CSSStyleSheet()`-Konstruktors](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet) erstellt oder wurde in einem anderen Dokument als dem aktuellen Dokument erstellt, etwa in einem Frame.

## Beispiele

### Adoptiere ein Stylesheet

Der folgende Code zeigt ein Stylesheet, das konstruiert wird, und dann wird [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync) aufgerufen, um dem Sheet eine Regel hinzuzufügen.
Das Stylesheet wird dann zu einem Array hinzugefügt und der `adoptedStyleSheets`-Eigenschaft zugewiesen.

```js
// Create an empty "constructed" stylesheet
const sheet = new CSSStyleSheet();
// Apply a rule to the sheet
sheet.replaceSync("a { color: red; }");

// Apply the stylesheet to a document
document.adoptedStyleSheets.push(sheet);
```

Wir können eine neue Regel zum Stylesheet mit [`CSSStyleSheet.insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule) hinzufügen.

```js
sheet.insertRule("* { background-color: blue; }");
// The document will now have blue background.
```

## Teilen eines Stylesheets mit einem Shadow-DOM

Wir können ein Stylesheet auf ähnliche Weise mit einem Shadow Root teilen.

```js
// Create an element in the document and then create a shadow root:
const node = document.createElement("div");
const shadow = node.attachShadow({ mode: "open" });

// Adopt the same sheet into the shadow DOM
shadow.adoptedStyleSheets = [sheet];
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Konstruktive Stylesheets](https://web.dev/articles/constructable-stylesheets) (web.dev)
- [Verwendung des Shadow-DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [`CSSStyleSheet()`-Konstruktor](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet)
- [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync)
- [`CSSStyleSheet.replace()`](/de/docs/Web/API/CSSStyleSheet/replace)
- [`CSSStyleSheet.insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule)
- [`CSSStyleSheet.deleteRule()`](/de/docs/Web/API/CSSStyleSheet/deleteRule)
