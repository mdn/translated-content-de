---
title: "Document: adoptedStyleSheets-Eigenschaft"
short-title: adoptedStyleSheets
slug: Web/API/Document/adoptedStyleSheets
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("CSSOM")}}

Die **`adoptedStyleSheets`**-Eigenschaft der [`Document`](/de/docs/Web/API/Document)-Schnittstelle wird verwendet, um ein Array von konstruierten Stylesheets festzulegen, die vom Dokument verwendet werden sollen.

> [!NOTE]
> Ein konstruiertes Stylesheet ist ein Stylesheet, das programmgesteuert mit dem [`CSSStyleSheet()`-Konstruktor](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet) erstellt wurde (im Vergleich zu einem, das von einem Benutzer-Agent beim Importieren eines Stylesheets aus einem Skript erstellt wurde, importiert mit {{HTMLElement('style')}} und {{CSSXref('@import')}}, oder verlinkt über {{HTMLElement('link')}}).

Die gleichen konstruierten Stylesheets können auch mit einer oder mehreren [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Instanzen mittels der [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets)-Eigenschaft geteilt werden. Änderungen an einem angenommenen Stylesheet wirken sich auf alle Objekte aus, die es angenommen haben.

Stylesheets in der Eigenschaft werden zusammen mit den anderen Stylesheets des Dokuments unter Verwendung des [CSS-Cascade-Algorithmus](/de/docs/Web/CSS/Cascade) ausgewertet. Wo die Auflösung von Regeln die Reihenfolge der Stylesheets berücksichtigt, wird angenommen, dass `adoptedStyleSheets` nach denen in [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) geordnet sind.

Nur Stylesheets, die mithilfe des [`CSSStyleSheet()`-Konstruktors](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet) im Kontext des aktuellen [`Document`](/de/docs/Web/API/Document) erstellt wurden, dürfen übernommen werden.

## Wert

Der Wert ist ein Array von [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Instanzen, die mit dem [`CSSStyleSheet()`](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet)-Konstruktor im Kontext desselben [`Document`](/de/docs/Web/API/Document) erstellt worden sein müssen.

Wenn das Array geändert werden muss, verwenden Sie in-place Mutationen wie `push()`. Die [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Instanzen selbst können ebenfalls modifiziert werden, und diese Änderungen gelten überall dort, wo das Stylesheet übernommen wird.

In einer früheren Version der Spezifikation war das Array nicht modifizierbar, sodass der einzige Weg, neue Stylesheets hinzuzufügen, darin bestand, ein neues Array dem `adoptedStyleSheets` zuzuweisen.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Eine der [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Instanzen im Array wurde nicht mit dem [`CSSStyleSheet()`-Konstruktor](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet) erstellt oder in einem anderen Dokument als dem aktuellen Dokument konstruiert, wie zum Beispiel in einem Frame.

## Beispiele

### Ein Stylesheet übernehmen

Der folgende Code zeigt ein Konstruktionsbeispiel eines Stylesheets, und dann wird [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync) aufgerufen, um eine Regel zum Stylesheet hinzuzufügen. Das Stylesheet wird dann zu einem Array hinzugefügt und der `adoptedStyleSheets`-Eigenschaft zugewiesen.

```js
// Create an empty "constructed" stylesheet
const sheet = new CSSStyleSheet();
// Apply a rule to the sheet
sheet.replaceSync("a { color: red; }");

// Apply the stylesheet to a document
document.adoptedStyleSheets = [sheet];
```

Wir können eine neue Regel zum Stylesheet hinzufügen, indem wir [`CSSStyleSheet.insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule) verwenden.

```js
sheet.insertRule("* { background-color: blue; }");
// The document will now have blue background.
```

### Ein neues Stylesheet hinzufügen

Um ein ganz neues Stylesheet zur `adoptedStyleSheets`-Eigenschaft hinzuzufügen, müssen wir ein neues kombiniertes Array erstellen und zuweisen. Dies wird unten mithilfe der Spread-Syntax demonstriert:

```js
const extraSheet = new CSSStyleSheet();
extraSheet.replaceSync("p { color: green; }");

// Combine the existing sheets and new one
document.adoptedStyleSheets = [...document.adoptedStyleSheets, extraSheet];
```

## Ein Stylesheet mit einem Shadow DOM teilen

Wir können ein Stylesheet auf ähnliche Weise zu einem Shadow Root teilen.

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

- [Constructable Stylesheets](https://web.dev/articles/constructable-stylesheets) (web.dev)
- [Verwendung des Shadow DOMs](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [`CSSStyleSheet()`-Konstruktor](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet)
- [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync)
- [`CSSStyleSheet.replace()`](/de/docs/Web/API/CSSStyleSheet/replace)
- [`CSSStyleSheet.insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule)
- [`CSSStyleSheet.deleteRule()`](/de/docs/Web/API/CSSStyleSheet/deleteRule)
