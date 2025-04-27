---
title: "Dokument: adoptedStyleSheets-Eigenschaft"
short-title: adoptedStyleSheets
slug: Web/API/Document/adoptedStyleSheets
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("CSSOM")}}

Die **`adoptedStyleSheets`**-Eigenschaft des [`Document`](/de/docs/Web/API/Document)-Interface wird verwendet, um ein Array von konstruierten Stylesheets festzulegen, die vom Dokument verwendet werden sollen.

> [!NOTE]
> Ein konstruiertes Stylesheet wird programmgesteuert mit dem [`CSSStyleSheet()`-Konstruktor](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet) erstellt (im Gegensatz zu einem, das von einem User-Agent erstellt wird, wenn ein Stylesheet aus einem Skript importiert wird, das mit {{HTMLElement('style')}} und {{CSSXref('@import')}} importiert oder über {{HTMLElement('link')}} verlinkt wurde).

Die gleichen konstruierten Stylesheets können auch mit einer oder mehreren [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Instanzen geteilt werden, indem die [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets)-Eigenschaft verwendet wird. Eine Änderung an einem übernommenen Stylesheet wirkt sich auf alle Objekte aus, die es übernommen haben.

Stylesheets in der Eigenschaft werden zusammen mit den anderen Stylesheets des Dokuments unter Verwendung des [CSS-Cascade-Algorithmus](/de/docs/Web/CSS/CSS_cascade/Cascade) ausgewertet. Bei der Regelauflösung wird die Reihenfolge der Stylesheets berücksichtigt, wobei `adoptedStyleSheets` als nach denen in [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) angeordnet angenommen werden.

Nur Stylesheets, die unter Verwendung des [`CSSStyleSheet()`-Konstruktors](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet) im Kontext des aktuellen [`Document`](/de/docs/Web/API/Document) erstellt wurden, dürfen übernommen werden.

## Wert

Der Wert ist ein Array von [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Instanzen, die unter Verwendung des [`CSSStyleSheet()`](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet)-Konstruktors im Kontext desselben [`Document`](/de/docs/Web/API/Document) erstellt worden sein müssen.

Wenn das Array geändert werden muss, verwenden Sie in-place Mutationen wie `push()`. Die [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Instanzen selbst können ebenfalls modifiziert werden, und diese Änderungen werden überall angewendet, wo das Stylesheet übernommen wird.

In einer früheren Version der Spezifikation war das Array nicht modifizierbar, so dass der einzige Weg, neue Stylesheets hinzuzufügen, darin bestand, ein neues Array der `adoptedStyleSheets`-Eigenschaft zuzuweisen.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Eine der [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Instanzen im Array wurde nicht unter Verwendung des [`CSSStyleSheet()`-Konstruktors](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet) erstellt oder in einem anderen Dokument als dem aktuellen Dokument konstruiert, wie z. B. in einem Frame.

## Beispiele

### Ein Stylesheet übernehmen

Der untenstehende Code zeigt, wie ein Stylesheet konstruiert wird, und dann wird [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync) aufgerufen, um eine Regel zum Stylesheet hinzuzufügen. Das Stylesheet wird dann zu einem Array hinzugefügt und der `adoptedStyleSheets`-Eigenschaft zugewiesen.

```js
// Create an empty "constructed" stylesheet
const sheet = new CSSStyleSheet();
// Apply a rule to the sheet
sheet.replaceSync("a { color: red; }");

// Apply the stylesheet to a document
document.adoptedStyleSheets = [sheet];
```

Wir können eine neue Regel mit [`CSSStyleSheet.insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule) zum Stylesheet hinzufügen.

```js
sheet.insertRule("* { background-color: blue; }");
// The document will now have blue background.
```

### Ein neues Stylesheet anhängen

Um ein ganz neues Stylesheet zur `adoptedStyleSheets`-Eigenschaft hinzuzufügen, müssen wir ein neues kombiniertes Array erstellen und zuweisen. Dies wird unten mit Spread-Syntax demonstriert:

```js
const extraSheet = new CSSStyleSheet();
extraSheet.replaceSync("p { color: green; }");

// Combine the existing sheets and new one
document.adoptedStyleSheets = [...document.adoptedStyleSheets, extraSheet];
```

## Ein Stylesheet mit einem Shadow DOM teilen

Wir können ein Stylesheet auf ähnliche Weise mit einem Shadow-Root-Element teilen.

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
- [Verwendung des Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [`CSSStyleSheet()`-Konstruktor](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet)
- [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync)
- [`CSSStyleSheet.replace()`](/de/docs/Web/API/CSSStyleSheet/replace)
- [`CSSStyleSheet.insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule)
- [`CSSStyleSheet.deleteRule()`](/de/docs/Web/API/CSSStyleSheet/deleteRule)
