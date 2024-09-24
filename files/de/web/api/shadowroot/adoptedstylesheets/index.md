---
title: "ShadowRoot: Eigenschaft adoptedStyleSheets"
short-title: adoptedStyleSheets
slug: Web/API/ShadowRoot/adoptedStyleSheets
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("CSSOM")}}

Die **`adoptedStyleSheets`**-Eigenschaft des {{domxref("ShadowRoot")}}-Interfaces setzt ein Array von konstruierten Stylesheets ein, das von der Shadow DOM-Unterstruktur verwendet wird.

> [!NOTE]
> Ein konstruiertes Stylesheet ist ein Stylesheet, das programmatisch mit dem [`CSSStyleSheet()` Konstruktor](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet) erstellt wurde (im Vergleich zu einem, das von einem User-Agent erstellt wird, wenn ein Stylesheet aus einem Script importiert wird und über {{HTMLElement('style')}} und {{CSSXref('@import')}} importiert oder über {{HTMLElement('link')}} verlinkt wird).

Dasselbe konstruierte Stylesheet kann von mehreren {{domxref("ShadowRoot")}}-Instanzen sowie vom übergeordneten Dokument (mittels der {{domxref("Document.adoptedStyleSheets")}}-Eigenschaft) übernommen werden. Eine Änderung an einem angenommenen Stylesheet wirkt sich auf alle Objekte aus, die es übernommen haben.

Stylesheets in der `adoptedStyleSheets`-Eigenschaft werden zusammen mit den anderen Stylesheets des Shadow DOM betrachtet. Für die Bestimmung des endgültigen berechneten CSS eines Elements gelten sie als _nach_ den anderen Stylesheets im Shadow DOM ([`ShadowRoot.styleSheets`](/de/docs/Web/API/ShadowRoot/styleSheets)) hinzugefügt.

Nur Stylesheets, die mittels des [`CSSStyleSheet()` Konstruktor](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet) erstellt wurden und sich im selben übergeordneten {{domxref("Document")}} wie der Shadow Root befinden, können übernommen werden.

## Wert

Der Wert ist ein Array von {{domxref("CSSStyleSheet")}}-Instanzen, die mit dem {{domxref("CSSStyleSheet.CSSStyleSheet()", "CSSStyleSheet()")}}-Konstruktor innerhalb des Kontexts des Eltern-{{domxref("Document")}} des Shadow Roots erstellt worden sein müssen.

Falls das Array verändert werden muss, verwenden Sie Mutationen an Ort und Stelle wie `push()`. Die {{domxref("CSSStyleSheet")}}-Instanzen selbst können ebenfalls modifiziert werden, und diese Änderungen gelten dort, wo das Stylesheet übernommen wurde.

In einer früheren Version der Spezifikation war das Array nicht veränderbar, daher war der einzige Weg, neue Stylesheets hinzuzufügen, ein neues Array `adoptedStyleSheets` zuzuweisen.

## Beispiele

### Ein Stylesheet übernehmen

Der folgende Code zeigt zunächst, wie ein Stylesheet konstruiert wird, und dann wird {{domxref("CSSStyleSheet.replaceSync()")}} aufgerufen, um eine Regel zum Stylesheet hinzuzufügen.

```js
// Ein leeres "konstruiertes" Stylesheet erstellen
const sheet = new CSSStyleSheet();
// Eine Regel auf das Stylesheet anwenden
sheet.replaceSync("a { color: red; }");
```

Wir erstellen dann einen {{domxref("ShadowRoot")}} und übergeben das sheet-Objekt innerhalb eines Arrays an `adoptedStyleSheets`.

```js
// Ein Element im Dokument erstellen und dann einen Shadow Root erstellen:
const node = document.createElement("div");
const shadow = node.attachShadow({ mode: "open" });

// Das Stylesheet in das Shadow DOM übernehmen
shadow.adoptedStyleSheets = [sheet];
```

Wir können die Stylesheets auch nach ihrer Hinzufügung zum Array noch ändern. Unten fügen wir dieselbe Regel mit {{domxref("CSSStyleSheet.insertRule()")}} ein.

```js
sheet.insertRule("* { background-color: blue; }");
// Das Dokument hat nun einen blauen Hintergrund.
```

### Ein neues Stylesheet anhängen

Neue Stylesheets können dem Dokument oder Shadow Root durch Verwenden von `adoptedStyleSheets.push()` _angehängt_ werden:

```js
const extraSheet = new CSSStyleSheet();
extraSheet.replaceSync("p { color: green; }");

// Das neue Stylesheet anhängen.
shadow.adoptedStyleSheets.push(extraSheet);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Konstruierebare Stylesheets](https://web.dev/articles/constructable-stylesheets) (web.dev)
- [Verwendung des Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [`CSSStyleSheet()` Konstruktor](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet)
- {{domxref("CSSStyleSheet.replaceSync()")}}
- {{domxref("CSSStyleSheet.replace()")}}
- {{domxref("CSSStyleSheet.insertRule()")}}
- {{domxref("CSSStyleSheet.deleteRule()")}}
