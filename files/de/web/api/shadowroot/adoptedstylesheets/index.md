---
title: "ShadowRoot: adoptedStyleSheets-Eigenschaft"
short-title: adoptedStyleSheets
slug: Web/API/ShadowRoot/adoptedStyleSheets
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("CSSOM")}}

Die **`adoptedStyleSheets`**-Eigenschaft des [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Interfaces legt ein Array von konstruierten Stylesheets fest, die vom Shadow-DOM-Teilbaum verwendet werden sollen.

> [!NOTE]
> Ein konstruiertes Stylesheet ist ein Stylesheet, das programmgesteuert über den [`CSSStyleSheet()`-Konstruktor](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet) erstellt wurde (im Vergleich zu einem, das von einem User-Agent beim Import eines Stylesheets aus einem Skript erstellt wurde, importiert mit {{HTMLElement('style')}} und {{CSSXref('@import')}}, oder verlinkt über {{HTMLElement('link')}}).

Dasselbe konstruierte Stylesheet kann von mehreren [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Instanzen sowie vom übergeordneten Dokument übernommen werden (mittels der [`Document.adoptedStyleSheets`](/de/docs/Web/API/Document/adoptedStyleSheets)-Eigenschaft).
Änderungen an einem übernommenen Stylesheet wirken sich auf alle übernehmenden Objekte aus.

Stylesheets in der `adoptedStyleSheets`-Eigenschaft werden zusammen mit den anderen Stylesheets des Shadow-DOM betrachtet.
Zur Bestimmung des endgültigen berechneten CSS eines Elements werden sie als _nach_ den anderen Stylesheets im Shadow-DOM ([`ShadowRoot.styleSheets`](/de/docs/Web/API/ShadowRoot/styleSheets)) hinzugefügt betrachtet.

Nur Stylesheets, die über den [`CSSStyleSheet()`-Konstruktor](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet) erstellt wurden und sich im selben übergeordneten [`Document`](/de/docs/Web/API/Document) wie das Shadow-Root befinden, können übernommen werden.

## Wert

Der Wert ist ein Array von [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Instanzen, die mit dem [`CSSStyleSheet()`](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet)-Konstruktor im Kontext des übergeordneten [`Document`](/de/docs/Web/API/Document) des Shadow-Root erstellt worden sein müssen.

Wenn das Array geändert werden muss, verwenden Sie In-place-Änderungen wie `push()`. Die [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Instanzen selbst können ebenfalls geändert werden, und diese Änderungen werden überall dort übernommen, wo das Stylesheet übernommen wurde.

In einer früheren Version der Spezifikation war das Array nicht änderbar, sodass die einzige Möglichkeit, neue Stylesheets hinzuzufügen, darin bestand, ein neues Array `adoptedStyleSheets` zuzuweisen.

## Beispiele

### Ein Stylesheet übernehmen

Der folgende Code zeigt zuerst, wie ein Stylesheet konstruiert wird, und dann wird [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync) aufgerufen, um dem Sheet eine Regel hinzuzufügen.

```js
// Create an empty "constructed" stylesheet
const sheet = new CSSStyleSheet();
// Apply a rule to the sheet
sheet.replaceSync("a { color: red; }");
```

Anschließend erstellen wir ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) und übergeben das Sheet-Objekt in einem Array an `adoptedStyleSheets`.

```js
// Create an element in the document and then create a shadow root:
const node = document.createElement("div");
const shadow = node.attachShadow({ mode: "open" });

// Adopt the sheet into the shadow DOM
shadow.adoptedStyleSheets = [sheet];
```

Wir können die Stylesheets auch nach dem Hinzufügen zum Array weiterhin ändern.
Unten fügen wir mit [`CSSStyleSheet.insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule) eine neue Regel zum selben Sheet hinzu.

```js
sheet.insertRule("* { background-color: blue; }");
// The document will now have blue background.
```

### Ein neues Stylesheet anhängen

Neue Stylesheets können dem Dokument oder dem Shadow-Root _angehängt_ werden, indem `adoptedStyleSheets.push()` verwendet wird:

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
- [Verwendung des Shadow-DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [`CSSStyleSheet()`-Konstruktor](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet)
- [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync)
- [`CSSStyleSheet.replace()`](/de/docs/Web/API/CSSStyleSheet/replace)
- [`CSSStyleSheet.insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule)
- [`CSSStyleSheet.deleteRule()`](/de/docs/Web/API/CSSStyleSheet/deleteRule)
