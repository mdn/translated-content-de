---
title: CSSPageRule
slug: Web/API/CSSPageRule
l10n:
  sourceCommit: 474a7c0e7bbb5f89b6dcc15cff75f06338457da2
---

{{APIRef("CSSOM")}}

**`CSSPageRule`** repräsentiert eine einzelne CSS-{{cssxref("@page")}}-Regel.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinen Vorfahren [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSPageRule.selectorText`](/de/docs/Web/API/CSSPageRule/selectorText)
  - : Stellt den Text des Seitenselectors dar, der mit der At-Regel verknüpft ist.
- [`CSSPageRule.style`](/de/docs/Web/API/CSSPageRule/style) {{ReadOnlyInline}}
  - : Gibt den [Deklarationsblock](/de/docs/Web/API/CSS_Object_Model/CSS_Declaration_Block) zurück, der mit der At-Regel verknüpft ist.

## Instanz-Methoden

_Erbt Methoden von seinen Vorfahren [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

### Filtern nach Seitenregeln

Dieses Beispiel zeigt, wie Sie `CSSPageRule`-Objekte für {{cssxref("@page")}}-Regeln finden können, die von dem Dokument geladen wurden.

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

Unten definieren wir Stile für die Seite unter Verwendung einer {{cssxref("@page")}}-Regel.

```css
@page {
  margin: 1cm;
}
```

#### JavaScript

Der Code durchläuft alle Sheets im Dokument und alle `cssRules` in jedem Sheet und protokolliert den Sheet-Index, die Anzahl der Regeln und den Typ jedes Regelobjekts. Danach erkennen wir `CSSPageRule`-Objekte anhand ihres Typs (und tun nichts mit der Information).

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
      //... Do something with CSSPageRule
    }
  }
}
```

#### Ergebnisse

Die Ergebnisse sind unten gezeigt. Wie Sie sehen können, gibt es zwei Sheets, die diesem Hauptdokument und dem Beispiel-Code-Rahmen entsprechen, und jedes hat eine Anzahl von Regeln, von denen nur eine unsere `CSSPageRule` ist.

{{EmbedLiveSample("Filtering for page rules", "100%", "300px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
