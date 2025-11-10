---
title: CSSPageRule
slug: Web/API/CSSPageRule
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{APIRef("CSSOM")}}

**`CSSPageRule`** repräsentiert eine einzelne CSS-{{cssxref("@page")}}-Regel.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinen Vorfahren [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSPageRule.selectorText`](/de/docs/Web/API/CSSPageRule/selectorText)
  - : Repräsentiert den Text des Seiten-Selectors, der mit der At-Regel verknüpft ist.
- [`CSSPageRule.style`](/de/docs/Web/API/CSSPageRule/style) {{ReadOnlyInline}}
  - : Gibt den [Deklarationsblock](/de/docs/Web/API/CSS_Object_Model/CSS_Declaration_Block) zurück, der mit der At-Regel verknüpft ist.

## Instanzmethoden

_Erbt Methoden von seinen Vorfahren [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

### Filtern nach Seitenregeln

Dieses Beispiel zeigt, wie Sie `CSSPageRule`-Objekte für {{cssxref("@page")}}-Regeln finden, die vom Dokument geladen werden.

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

Unten definieren wir Stile für die Seite mithilfe einer {{cssxref("@page")}}-Regel.

```css
@page {
  margin: 1cm;
}
```

#### JavaScript

Der Code iteriert durch alle Stylesheets im Dokument und durch alle `cssRules` in jedem Stylesheet und protokolliert den Index des Stylesheets, die Anzahl der Regeln und den Typ jedes Regelobjekts.
Wir erkennen dann `CSSPageRule`-Objekte anhand ihres Typs (ohne Informationen damit zu verarbeiten).

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

Die Ergebnisse werden unten gezeigt. Wie Sie sehen können, gibt es zwei Stylesheets, die diesem Hauptdokument und dem Beispielcodefenster entsprechen, und jedes hat eine Anzahl von Regeln, von denen nur eine unsere `CSSPageRule` ist.

{{EmbedLiveSample("Filtering for page rules", "100%", "300px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
