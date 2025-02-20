---
title: "Dokument: adoptedStyleSheets-Eigenschaft"
short-title: adoptedStyleSheets
slug: Web/API/Document/adoptedStyleSheets
l10n:
  sourceCommit: a29769d6d10261f771321eb60f3990029c160924
---

{{APIRef("CSSOM")}}

Die **`adoptedStyleSheets`**-Eigenschaft der [`Document`](/de/docs/Web/API/Document)-Schnittstelle wird verwendet, um ein Array von konstruierten Stylesheets festzulegen, die vom Dokument verwendet werden sollen.

> [!NOTE]
> Ein konstruiertes Stylesheet ist ein Stylesheet, das programmgesteuert mit dem [`CSSStyleSheet()` constructor](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet) erstellt wurde (im Gegensatz zu einem, das von einem User-Agent erstellt wird, wenn ein Stylesheet aus einem Skript importiert, durch {{HTMLElement('style')}} oder {{CSSXref('@import')}} importiert oder über {{HTMLElement('link')}} verlinkt wird).

Die gleichen konstruierten Stylesheets können auch mit einer oder mehreren [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Instanzen über die [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets)-Eigenschaft geteilt werden. Änderungen an einem adoptierten Stylesheet wirken sich auf alle Objekte aus, die dieses Stylesheet übernehmen.

Stylesheets in dieser Eigenschaft werden zusammen mit den anderen Stylesheets des Dokuments unter Verwendung des [CSS-Kaskadenalgorithmus](/de/docs/Web/CSS/CSS_cascade/Cascade) ausgewertet. Wenn die Auflösung von Regeln die Reihenfolge von Stylesheets berücksichtigt, wird davon ausgegangen, dass `adoptedStyleSheets` nach denen in [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) angeordnet sind.

Nur mit dem [`CSSStyleSheet()` constructor](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet) im Kontext des aktuellen [`Document`](/de/docs/Web/API/Document) erstellte Stylesheets können übernommen werden.

## Wert

Der Wert ist ein Array von [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Instanzen, die mit dem [`CSSStyleSheet()`](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet)-Constructor im Kontext desselben [`Document`](/de/docs/Web/API/Document) erstellt worden sein müssen.

Wenn das Array geändert werden muss, kann es durch in-place-Methoden wie `push()` modifiziert werden. Die [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Instanzen selbst können ebenfalls geändert werden, und diese Änderungen gelten überall dort, wo das Stylesheet übernommen wurde.

In einer früheren Version der Spezifikation war das Array nicht modifizierbar, sodass neue Stylesheets nur hinzugefügt werden konnten, indem ein neues Array zu `adoptedStyleSheets` zugewiesen wurde.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Eine der [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Instanzen im Array wurde nicht mit dem [`CSSStyleSheet()` constructor](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet) erstellt oder wurde in einem anderen Dokument als dem aktuellen Dokument erstellt, z. B. in einem Frame.

## Beispiele

### Ein Stylesheet übernehmen

Der Code unten zeigt, wie ein Stylesheet konstruiert wird, und anschließend wird [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync) aufgerufen, um eine Regel hinzuzufügen. Das Stylesheet wird dann einem Array hinzugefügt und der `adoptedStyleSheets`-Eigenschaft zugewiesen.

```js
// Create an empty "constructed" stylesheet
const sheet = new CSSStyleSheet();
// Apply a rule to the sheet
sheet.replaceSync("a { color: red; }");

// Apply the stylesheet to a document
document.adoptedStyleSheets = [sheet];
```

Wir können eine neue Regel zum Stylesheet mit [`CSSStyleSheet.insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule) hinzufügen.

```js
sheet.insertRule("* { background-color: blue; }");
// The document will now have blue background.
```

### Ein neues Stylesheet hinzufügen

Um ein vollständiges neues Stylesheet zur `adoptedStyleSheets`-Eigenschaft hinzuzufügen, müssen wir ein neues kombiniertes Array erstellen und zuweisen. Dies wird unten mit Spread-Syntax demonstriert:

```js
const extraSheet = new CSSStyleSheet();
extraSheet.replaceSync("p { color: green; }");

// Combine the existing sheets and new one
document.adoptedStyleSheets = [...document.adoptedStyleSheets, extraSheet];
```

## Ein Stylesheet mit einem Shadow-DOM teilen

Wir können ein Stylesheet auf ähnliche Weise einem Shadow-Root zuweisen.

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

- [Erstellbare Stylesheets](https://web.dev/articles/constructable-stylesheets) (web.dev)
- [Verwendung des Shadow-DOMs](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [`CSSStyleSheet()` constructor](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet)
- [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync)
- [`CSSStyleSheet.replace()`](/de/docs/Web/API/CSSStyleSheet/replace)
- [`CSSStyleSheet.insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule)
- [`CSSStyleSheet.deleteRule()`](/de/docs/Web/API/CSSStyleSheet/deleteRule)
