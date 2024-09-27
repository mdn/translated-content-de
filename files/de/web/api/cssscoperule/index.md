---
title: CSSScopeRule
slug: Web/API/CSSScopeRule
l10n:
  sourceCommit: aa1c6876fb3cea003dda92f02c9bac93fd3370b2
---

{{ APIRef("CSSOM") }}

Das **`CSSScopeRule`**-Interface des [CSS Object Model (CSSOM)](/de/docs/Web/API/CSS_Object_Model) repräsentiert eine CSS-{{CSSxRef("@scope")}}-Regel.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinen Vorfahren [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`end`](/de/docs/Web/API/CSSScopeRule/end)
  - : Gibt einen String zurück, der den Wert der Gültigkeitsgrenze der `@scope`-Regel enthält.
- [`start`](/de/docs/Web/API/CSSScopeRule/start)
  - : Gibt einen String zurück, der den Wert des Wurzelelements der `@scope`-Regel enthält.

## Instanz-Methoden

_Erbt Methoden von seinen Vorfahren [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

### Zugriff auf @scope-Informationen in JavaScript

Angenommen, das folgende ist das einzige Stylesheet, das an ein Dokument angehängt ist:

```css
@scope (.outer) to (.inner) {
  :scope {
    background: yellow;
  }
}
```

Mit dem folgenden JavaScript könnte auf Informationen über den enthaltenen `@scope`-Block zugegriffen werden:

```js
const scopeBlock = document.styleSheets[0].cssRules[0];

console.log(scopeBlock.start); // Returns ".outer"
console.log(scopeBlock.end); // Returns ".inner"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("@scope")}}
- {{CSSxRef(":scope")}}
