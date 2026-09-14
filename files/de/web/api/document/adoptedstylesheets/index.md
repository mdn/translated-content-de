---
title: "Document: adoptedStyleSheets property"
short-title: adoptedStyleSheets
slug: Web/API/Document/adoptedStyleSheets
l10n:
  sourceCommit: 54c7daee2e939976b17952e7452ea87ba7e59563
---

{{APIRef("CSSOM")}}

Die Eigenschaft **`adoptedStyleSheets`** des Interfaces [`Document`](/de/docs/Web/API/Document) wird verwendet, um ein Array von konstruierten Stylesheets festzulegen, die vom Dokument verwendet werden sollen.

> [!NOTE]
> Ein konstruiertes Stylesheet ist ein Stylesheet, das programmgesteuert mit dem [`CSSStyleSheet()` constructor](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet) erstellt wurde (im Gegensatz zu einem, das von einem User-Agent beim Importieren eines Stylesheets aus einem Skript erstellt wird, importiert mit {{HTMLElement('style')}} und {{CSSXref('@import')}}, oder über {{HTMLElement('link')}} verknüpft wird).

Dieselben konstruierten Stylesheets können auch mithilfe der Eigenschaft [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets) mit einer oder mehreren [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Instanzen geteilt werden.
Das Ändern eines adoptierten Stylesheets wirkt sich auf alle Objekte aus, die es übernehmen.

Stylesheets in der Eigenschaft werden zusammen mit den anderen Stylesheets des Dokuments unter Verwendung des [CSS-Kaskadenalgorithmus](/de/docs/Web/CSS/Guides/Cascade/Introduction) ausgewertet.
Wenn die Auflösung von Regeln die Reihenfolge der Stylesheets berücksichtigt, wird angenommen, dass `adoptedStyleSheets` nach denen in [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) angeordnet sind.

Nur _konstruierte Stylesheets_ im Kontext des aktuellen [`Document`](/de/docs/Web/API/Document) können übernommen werden. Sie können konstruierte Stylesheets mit dem [`CSSStyleSheet()` constructor](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet) oder durch [Importieren von CSS-Modulen](/de/docs/Web/JavaScript/Reference/Statements/import/with#css_modules_type_css) erstellen.

## Wert

Der Wert ist ein Array von [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Instanzen, die im Kontext desselben [`Document`](/de/docs/Web/API/Document) mit dem [`CSSStyleSheet()`](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet) constructor erstellt worden sein müssen.

Wenn das Array geändert werden muss, verwenden Sie In-Place-Mutationen wie `push()`. Die [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Instanzen selbst können ebenfalls geändert werden; diese Änderungen gelten überall dort, wo das Stylesheet übernommen wird.

In einer früheren Version der Spezifikation war das Array nicht veränderbar, sodass die einzige Möglichkeit, neue Stylesheets hinzuzufügen, darin bestand, `adoptedStyleSheets` ein neues Array zuzuweisen.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Eine der [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Instanzen im Array wurde nicht mit dem [`CSSStyleSheet()` constructor](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet) erstellt oder wurde in einem anderen Dokument als dem aktuellen Dokument konstruiert, etwa in einem Frame.

## Beispiele

### Ein Stylesheet übernehmen

Der folgende Code zeigt, wie ein Stylesheet konstruiert wird und anschließend [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync) aufgerufen wird, um dem Stylesheet eine Regel hinzuzufügen.
Das Stylesheet wird dann einem Array hinzugefügt und der Eigenschaft `adoptedStyleSheets` zugewiesen.

```js
// Create an empty "constructed" stylesheet
const sheet = new CSSStyleSheet();
// Apply a rule to the sheet
sheet.replaceSync("a { color: red; }");

// Apply the stylesheet to a document
document.adoptedStyleSheets.push(sheet);
```

Wir können dem Stylesheet mit [`CSSStyleSheet.insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule) eine neue Regel hinzufügen.

```js
sheet.insertRule("* { background-color: blue; }");
// The document will now have blue background.
```

## Ein Stylesheet mit einem Shadow DOM teilen

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

- [Constructable Stylesheets](https://web.dev/articles/constructable-stylesheets) (web.dev)
- [Verwendung des Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [`CSSStyleSheet()` constructor](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet)
- [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync)
- [`CSSStyleSheet.replace()`](/de/docs/Web/API/CSSStyleSheet/replace)
- [`CSSStyleSheet.insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule)
- [`CSSStyleSheet.deleteRule()`](/de/docs/Web/API/CSSStyleSheet/deleteRule)
