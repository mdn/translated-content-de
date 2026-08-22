---
title: CSSPageRule
slug: Web/API/CSSPageRule
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{APIRef("CSSOM")}}

**`CSSPageRule`** repräsentiert eine einzelne CSS {{cssxref("@page")}} Regel.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinen Vorfahren [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSPageRule.selectorText`](/de/docs/Web/API/CSSPageRule/selectorText)
  - : Repräsentiert den Text des Seitenselektors, der mit der At-Regel verbunden ist.
- [`CSSPageRule.style`](/de/docs/Web/API/CSSPageRule/style) {{ReadOnlyInline}}
  - : Gibt den [Deklarationsblock](/de/docs/Web/API/CSS_Object_Model/CSS_Declaration_Block) zurück, der mit der At-Regel verbunden ist.

## Instanz-Methoden

_Erbt Methoden von seinen Vorfahren [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

### Filtern nach Seitenregeln

Dieses Beispiel zeigt, wie Sie `CSSPageRule` Objekte für {{cssxref("@page")}} Regeln finden können, die vom Dokument geladen wurden.

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```css hidden
#log {
  height: 220px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### CSS

Unten definieren wir Stile für die Seite mit einer {{cssxref("@page")}} Regel.

```css
@page {
  margin: 1cm;
}
```

#### JavaScript

Der Code durchläuft alle Stylesheets im Dokument und alle `cssRules` in jedem Sheet, protokolliert den Sheet-Index, die Anzahl der Regeln und den Typ jedes Regelobjekts.
Wir erkennen dann `CSSPageRule` Objekte anhand ihres Typs (tun jedoch nichts mit der Information).

```js
for (
  let sheetCount = 0;
  sheetCount < document.styleSheets.length;
  sheetCount++
) {
  const sheet = document.styleSheets[sheetCount].cssRules;
  log(`styleSheet: ${sheetCount}`);

  const myRules = document.styleSheets[sheetCount].cssRules;
  log(`rules: ${myRules.length}`);
  for (const rule of myRules) {
    log(`rule: ${rule}`);
    if (rule instanceof CSSPageRule) {
      // Do something with CSSPageRule
    }
  }
}
```

#### Ergebnisse

Die Ergebnisse sind unten gezeigt.
Wie Sie sehen können, gibt es zwei Stylesheets, die diesem Hauptdokument und dem Beispielcode-Rahmen entsprechen, und jedes hat eine Anzahl von Regeln, von denen nur eine unsere `CSSPageRule` ist.

{{EmbedLiveSample("Filtering for page rules", "100%", "300px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
