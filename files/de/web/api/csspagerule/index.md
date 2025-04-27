---
title: CSSPageRule
slug: Web/API/CSSPageRule
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("CSSOM")}}

**`CSSPageRule`** repräsentiert eine einzelne CSS {{cssxref("@page")}}-Regel.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinen Vorfahren [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSPageRule.selectorText`](/de/docs/Web/API/CSSPageRule/selectorText)
  - : Repräsentiert den Text des mit der At-Regel verbundenen Seitenselektors.
- [`CSSPageRule.style`](/de/docs/Web/API/CSSPageRule/style) {{ReadOnlyInline}}
  - : Gibt den [Deklarationsblock](/de/docs/Web/API/CSS_Object_Model/CSS_Declaration_Block) zurück, der mit der At-Regel assoziiert ist.

## Instanzmethoden

_Erbt Methoden von seinen Vorfahren [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

### Filterung für Seitenregeln

Dieses Beispiel zeigt, wie Sie `CSSPageRule`-Objekte für {{cssxref("@page")}}-Regeln finden können, die vom Dokument geladen wurden.

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

Unten definieren wir Stile für die Seite mit einer {{cssxref("@page")}}-Regel.

```css
@page {
  margin: 1cm;
}
```

#### JavaScript

Der Code iteriert durch alle Blätter im Dokument und durch alle `cssRules` in jedem Blatt, protokolliert den Blattindex, die Anzahl der Regeln und den Typ jedes Regelobjekts.
Wir erkennen dann `CSSPageRule`-Objekte, indem wir ihren Typ detektieren (ohne etwas mit der Information zu machen).

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
  for (let i = 0; i < myRules.length; i++) {
    log(`rule: ${myRules[i]}`);
    if (myRules[i] instanceof CSSPageRule) {
      // Do something with CSSPageRule
    }
  }
}
```

#### Ergebnisse

Die Ergebnisse werden unten gezeigt. Wie Sie sehen, gibt es zwei Blätter, die diesem Hauptdokument und dem Beispiel-Code-Frame entsprechen, und jedes hat eine Reihe von Regeln, von denen nur eine unsere `CSSPageRule` ist.

{{EmbedLiveSample("Filtering for page rules", "100%", "300px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
