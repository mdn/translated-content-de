---
title: CSSScopeRule
slug: Web/API/CSSScopeRule
l10n:
  sourceCommit: aa1c6876fb3cea003dda92f02c9bac93fd3370b2
---

{{ APIRef("CSSOM") }}

Das **`CSSScopeRule`**-Interface des [CSS-Objektmodells](/de/docs/Web/API/CSS_Object_Model) repräsentiert eine CSS-{{CSSxRef("@scope")}}-Regel.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinen Vorfahren {{domxref("CSSGroupingRule")}} und {{domxref("CSSRule")}}._

- {{domxref("CSSScopeRule.end", "end")}}
  - : Gibt einen String zurück, der den Wert der Gültigkeitsgrenze der `@scope`-Regel enthält.
- {{domxref("CSSScopeRule.start", "start")}}
  - : Gibt einen String zurück, der den Wert der Wurzel der `@scope`-Regel enthält.

## Instanz-Methoden

_Erbt Methoden von seinen Vorfahren {{domxref("CSSGroupingRule")}} und {{domxref("CSSRule")}}._

## Beispiele

### Zugriff auf @scope-Informationen in JavaScript

Angenommen, es handelt sich um das einzige Stylesheet, das an ein Dokument angehängt ist:

```css
@scope (.outer) to (.inner) {
  :scope {
    background: yellow;
  }
}
```

Der folgende JavaScript-Code könnte verwendet werden, um Informationen über den enthaltenen `@scope`-Block abzurufen:

```js
const scopeBlock = document.styleSheets[0].cssRules[0];

console.log(scopeBlock.start); // Gibt ".outer" zurück
console.log(scopeBlock.end); // Gibt ".inner" zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("@scope")}}
- {{CSSxRef(":scope")}}
