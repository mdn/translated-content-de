---
title: "Dokument: adoptedStyleSheets Eigenschaft"
short-title: adoptedStyleSheets
slug: Web/API/Document/adoptedStyleSheets
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("CSSOM")}}

Die **`adoptedStyleSheets`** Eigenschaft der {{domxref("Document")}} Schnittstelle wird verwendet, um ein Array von erstellten Stylesheets festzulegen, die vom Dokument verwendet werden sollen.

> [!NOTE]
> Ein erstelltes Stylesheet ist ein Stylesheet, das programmatisch mit dem [`CSSStyleSheet()` Konstruktor](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet) erstellt wurde (im Gegensatz zu einem, das von einem User-Agent erstellt wurde, wenn ein Stylesheet aus einem Skript importiert wird, importiert mit {{HTMLElement('style')}} und {{CSSXref('@import')}}, oder verlinkt über {{HTMLElement('link')}}).

Die gleichen erstellten Stylesheets können auch mit einer oder mehreren {{domxref("ShadowRoot")}} Instanzen mithilfe der [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets) Eigenschaft geteilt werden. Eine Änderung eines adoptieren Stylesheets wirkt sich auf alle Objekte aus, die es adoptieren.

Stylesheets in der Eigenschaft werden zusammen mit den anderen Stylesheets des Dokuments mithilfe des [CSS-Cascade-Algorithmus](/de/docs/Web/CSS/Cascade) ausgewertet.
Wo die Auflösung von Regeln die Reihenfolge der Stylesheets berücksichtigt, werden `adoptedStyleSheets` nach denen in [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) angenommen.

Nur Stylesheets, die mit dem [`CSSStyleSheet()` Konstruktor](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet) im Kontext des aktuellen {{domxref("Document")}} erstellt wurden, können adoptiert werden.

## Wert

Der Wert ist ein Array von {{domxref("CSSStyleSheet")}} Instanzen, die mit dem {{domxref("CSSStyleSheet.CSSStyleSheet()", "CSSStyleSheet()")}} Konstruktor im Kontext desselben {{domxref("Document")}} erstellt worden sein müssen.

Wenn das Array geändert werden muss, verwenden Sie In-Place-Mutationen wie `push()`. Die {{domxref("CSSStyleSheet")}} Instanzen selbst können auch verändert werden, und diese Änderungen werden überall dort angewendet, wo das Stylesheet adoptiert ist.

In einer früheren Version der Spezifikation war das Array nicht modifizierbar, sodass die einzige Möglichkeit, neue Stylesheets hinzuzufügen, darin bestand, ein neues Array `adoptedStyleSheets` zuzuweisen.

### Ausnahmen

- `NotAllowedError` {{domxref("DOMException")}}
  - : Eine der {{domxref("CSSStyleSheet")}} Instanzen im Array wurde nicht mit dem [`CSSStyleSheet()` Konstruktor](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet) erstellt oder in einem anderen Dokument als dem aktuellen Dokument erstellt, wie z.B. einem in einem Frame.

## Beispiele

### Adoptiertes Stylesheet

Der untenstehende Code zeigt ein Stylesheet, das erstellt wird, und dann wird {{domxref("CSSStyleSheet.replaceSync()")}} aufgerufen, um eine Regel zum Stylesheet hinzuzufügen.
Das Stylesheet wird dann einem Array hinzugefügt und der `adoptedStyleSheets` Eigenschaft zugewiesen.

```js
// Erstelle ein leeres "erstellt" Stylesheet
const sheet = new CSSStyleSheet();
// Füge dem Stylesheet eine Regel hinzu
sheet.replaceSync("a { color: red; }");

// Wenden Sie das Stylesheet auf ein Dokument an
document.adoptedStyleSheets = [sheet];
```

Wir können dem Stylesheet eine neue Regel hinzufügen, indem wir {{domxref("CSSStyleSheet.insertRule()")}} verwenden.

```js
sheet.insertRule("* { background-color: blue; }");
// Das Dokument hat nun einen blauen Hintergrund.
```

### Hinzufügen eines neuen Stylesheets

Um ein vollkommen neues Stylesheet zum `adoptedStyleSheets` Eigenschaft hinzuzufügen, müssen wir ein neues kombiniertes Array erstellen und zuweisen.
Dies wird unten mit Spread-Syntax demonstriert:

```js
const extraSheet = new CSSStyleSheet();
extraSheet.replaceSync("p { color: green; }");

// Kombinieren Sie die vorhandenen und neuen Stylesheets
document.adoptedStyleSheets = [...document.adoptedStyleSheets, extraSheet];
```

## Teilen eines Stylesheets mit einem Shadow DOM

Wir können ein Stylesheet in ähnlicher Weise an eine Shadow-Root weitergeben.

```js
// Erstelle ein Element im Dokument und dann eine Shadow-Root:
const node = document.createElement("div");
const shadow = node.attachShadow({ mode: "open" });

//Adoptieren Sie dasselbe Stylesheet in das Shadow-DOM
shadow.adoptedStyleSheets = [sheet];
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Konstruktierbare Stylesheets](https://web.dev/articles/constructable-stylesheets) (web.dev)
- [Verwendung des Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [`CSSStyleSheet()` Konstruktor](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet)
- {{domxref("CSSStyleSheet.replaceSync()")}}
- {{domxref("CSSStyleSheet.replace()")}}
- {{domxref("CSSStyleSheet.insertRule()")}}
- {{domxref("CSSStyleSheet.deleteRule()")}}
