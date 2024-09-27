---
title: "Document: adoptedStyleSheets-Eigenschaft"
short-title: adoptedStyleSheets
slug: Web/API/Document/adoptedStyleSheets
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("CSSOM")}}

Die **`adoptedStyleSheets`**-Eigenschaft der [`Document`](/de/docs/Web/API/Document)-Schnittstelle wird verwendet, um ein Array von konstruierten Stylesheets festzulegen, die vom Dokument verwendet werden.

> [!NOTE]
> Ein konstruiertes Stylesheet ist ein Stylesheet, das programmatisch mit dem [`CSSStyleSheet()`-Konstruktor](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet) erstellt wird (im Vergleich zu einem, das von einem Benutzeragenten erstellt wird, wenn ein Stylesheet aus einem Skript importiert wird, mit {{HTMLElement('style')}} und {{CSSXref('@import')}} importiert wird oder über {{HTMLElement('link')}} verknüpft wird).

Die gleichen konstruierten Stylesheets können auch mit einer oder mehreren [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Instanzen über die [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets)-Eigenschaft geteilt werden. Änderungen an einem adoptierten Stylesheet wirken sich auf alle Objekte aus, die es übernehmen.

Stylesheets in der Eigenschaft werden zusammen mit den anderen Stylesheets des Dokuments unter Verwendung des [CSS-Cascading-Algorithmus](/de/docs/Web/CSS/Cascade) ausgewertet. Wenn die Auflösung von Regeln die Reihenfolge der Stylesheets berücksichtigt, wird angenommen, dass `adoptedStyleSheets` nach denen in [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) geordnet sind.

Nur Stylesheets, die mit dem [`CSSStyleSheet()`-Konstruktor](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet) im Kontext des aktuellen [`Document`](/de/docs/Web/API/Document) erstellt wurden, können übernommen werden.

## Wert

Der Wert ist ein Array von [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Instanzen, die mit dem [`CSSStyleSheet()`](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet)-Konstruktor im Kontext desselben [`Document`](/de/docs/Web/API/Document) erstellt worden sein müssen.

Wenn das Array geändert werden muss, verwenden Sie In-Place-Mutationen wie `push()`. Die [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Instanzen selbst können ebenfalls geändert werden, und diese Änderungen werden überall angewendet, wo das Stylesheet übernommen wird.

In einer früheren Version der Spezifikation war das Array nicht veränderbar, daher war der einzige Weg, neue Stylesheets hinzuzufügen, ein neues Array an `adoptedStyleSheets` zuzuweisen.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Eine der [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Instanzen im Array wurde nicht mit dem [`CSSStyleSheet()`-Konstruktor](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet) erstellt oder in einem anderen Dokument als dem aktuellen Dokument erstellt, beispielsweise in einem Frame.

## Beispiele

### Ein Stylesheet übernehmen

Der folgende Code zeigt ein konstruiertes Stylesheet und dann wird [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync) aufgerufen, um eine Regel zum Stylesheet hinzuzufügen. Das Stylesheet wird dann zu einem Array hinzugefügt und der `adoptedStyleSheets`-Eigenschaft zugewiesen.

```js
// Create an empty "constructed" stylesheet
const sheet = new CSSStyleSheet();
// Apply a rule to the sheet
sheet.replaceSync("a { color: red; }");

// Apply the stylesheet to a document
document.adoptedStyleSheets = [sheet];
```

Wir können mit [`CSSStyleSheet.insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule) eine neue Regel zum Stylesheet hinzufügen.

```js
sheet.insertRule("* { background-color: blue; }");
// The document will now have blue background.
```

### Ein neues Stylesheet anhängen

Um ein ganzes neues Stylesheet an die `adoptedStyleSheets`-Eigenschaft anzuhängen, müssen wir ein neues kombiniertes Array erstellen und zuweisen. Dies wird unten mit der Spread-Syntax demonstriert:

```js
const extraSheet = new CSSStyleSheet();
extraSheet.replaceSync("p { color: green; }");

// Combine the existing sheets and new one
document.adoptedStyleSheets = [...document.adoptedStyleSheets, extraSheet];
```

## Ein Stylesheet mit einem Shadow DOM teilen

Wir können ein Stylesheet in ähnlicher Weise einem Shadow Root zuordnen.

```js
// Create an element in the document and then create a shadow root:
const node = document.createElement("div");
const shadow = node.attachShadow({ mode: "open" });

//Adopt the same sheet into the shadow DOM
shadow.adoptedStyleSheets = [sheet];
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Konstruktable Stylesheets](https://web.dev/articles/constructable-stylesheets) (web.dev)
- [Verwendung des Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [`CSSStyleSheet()`-Konstruktor](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet)
- [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync)
- [`CSSStyleSheet.replace()`](/de/docs/Web/API/CSSStyleSheet/replace)
- [`CSSStyleSheet.insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule)
- [`CSSStyleSheet.deleteRule()`](/de/docs/Web/API/CSSStyleSheet/deleteRule)
