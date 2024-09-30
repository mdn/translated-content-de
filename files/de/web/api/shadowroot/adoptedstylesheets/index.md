---
title: "ShadowRoot: adoptedStyleSheets-Eigenschaft"
short-title: adoptedStyleSheets
slug: Web/API/ShadowRoot/adoptedStyleSheets
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("CSSOM")}}

Die **`adoptedStyleSheets`**-Eigenschaft des [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Interfaces legt ein Array von erstellten Stylesheets fest, das vom Schatten-DOM-Teilbaum verwendet wird.

> [!NOTE]
> Ein erstelltes Stylesheet ist ein Stylesheet, das programmatisch mit dem [`CSSStyleSheet()`-Konstruktor](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet) erstellt wurde (im Vergleich zu einem, das von einem User-Agent erstellt wird, wenn ein Stylesheet aus einem Skript importiert, mit {{HTMLElement('style')}} und {{CSSXref('@import')}} importiert oder über {{HTMLElement('link')}} verknüpft wird).

Dasselbe erstellte Stylesheet kann von mehreren [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Instanzen sowie vom übergeordneten Dokument (mithilfe der [`Document.adoptedStyleSheets`](/de/docs/Web/API/Document/adoptedStyleSheets)-Eigenschaft) übernommen werden.
Änderungen an einem übernommenen Stylesheet wirken sich auf alle übernehmenden Objekte aus.

Stylesheets in der `adoptedStyleSheets`-Eigenschaft werden zusammen mit den anderen Stylesheets des Schatten-DOMs betrachtet.
Für die Bestimmung des endgültigen berechneten CSS eines Elements gelten sie als _nach_ den anderen Stylesheets im Schatten-DOM ([`ShadowRoot.styleSheets`](/de/docs/Web/API/ShadowRoot/styleSheets)) hinzugefügt.

Nur Stylesheets, die mit dem [`CSSStyleSheet()`-Konstruktor](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet) erstellt wurden und sich im selben übergeordneten [`Document`](/de/docs/Web/API/Document) wie der Schattenwurzel befinden, können übernommen werden.

## Wert

Der Wert ist ein Array von [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Instanzen, die mit dem [`CSSStyleSheet()`-Konstruktor](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet) im Kontext des übergeordneten [`Document`](/de/docs/Web/API/Document) der Schattenwurzel erstellt wurden.

Falls das Array geändert werden muss, verwenden Sie in-place Mutationen wie `push()`. Die [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Instanzen selbst können ebenfalls geändert werden, und diese Änderungen gelten überall dort, wo das Stylesheet übernommen wird.

In einer früheren Version der Spezifikation war das Array nicht modifizierbar, sodass die einzige Möglichkeit, neue Stylesheets hinzuzufügen, darin bestand, ein neues Array der `adoptedStyleSheets`-Eigenschaft zuzuweisen.

## Beispiele

### Übernahme eines Stylesheets

Der untenstehende Code zeigt zunächst, wie ein Stylesheet erstellt wird, und dann wird [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync) aufgerufen, um eine Regel zum Stylesheet hinzuzufügen.

```js
// Create an empty "constructed" stylesheet
const sheet = new CSSStyleSheet();
// Apply a rule to the sheet
sheet.replaceSync("a { color: red; }");
```

Dann erstellen wir ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) und übergeben das Stylesheet-Objekt innerhalb eines Arrays an `adoptedStyleSheets`.

```js
// Create an element in the document and then create a shadow root:
const node = document.createElement("div");
const shadow = node.attachShadow({ mode: "open" });

// Adopt the sheet into the shadow DOM
shadow.adoptedStyleSheets = [sheet];
```

Wir können die Stylesheets immer noch ändern, nachdem sie dem Array hinzugefügt wurden.
Unten fügen wir dem gleichen Stylesheet mit [`CSSStyleSheet.insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule) eine neue Regel hinzu.

```js
sheet.insertRule("* { background-color: blue; }");
// The document will now have blue background.
```

### Ein neues Stylesheet anhängen

Neue Stylesheets können dem Dokument oder dem Schatten-Wurzel durch die Verwendung von `adoptedStyleSheets.push()` _angehängt_ werden:

```js
const extraSheet = new CSSStyleSheet();
extraSheet.replaceSync("p { color: green; }");

// Concat the new sheet.
shadow.adoptedStyleSheets.push(extraSheet);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Constructable Stylesheets](https://web.dev/articles/constructable-stylesheets) (web.dev)
- [Verwendung des Shadow DOMs](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [`CSSStyleSheet()` Konstruktor](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet)
- [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync)
- [`CSSStyleSheet.replace()`](/de/docs/Web/API/CSSStyleSheet/replace)
- [`CSSStyleSheet.insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule)
- [`CSSStyleSheet.deleteRule()`](/de/docs/Web/API/CSSStyleSheet/deleteRule)
