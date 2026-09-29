---
title: CSSScopeRule
slug: Web/API/CSSScopeRule
l10n:
  sourceCommit: 5b8d7c22883325e4abffcce235520c4a8b840bf3
---

{{ APIRef("CSSOM") }}

Die Schnittstelle **`CSSScopeRule`** des [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) repräsentiert eine CSS-{{CSSxRef("@scope")}}-At-Regel.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von den übergeordneten Schnittstellen [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`end`](/de/docs/Web/API/CSSScopeRule/end) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Wert der Geltungsbereichsgrenze der `@scope`-At-Regel enthält.
- [`start`](/de/docs/Web/API/CSSScopeRule/start) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Wert der Geltungsbereichswurzel der `@scope`-At-Regel enthält.

## Instanzmethoden

_Erbt Methoden von den übergeordneten Schnittstellen [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

### Auf Informationen zu @scope in JavaScript zugreifen

Angenommen, das folgende Stylesheet ist das einzige, das einem Dokument zugeordnet ist:

```css
@scope (.outer) to (.inner) {
  :scope {
    background: yellow;
  }
}
```

Mit dem folgenden JavaScript können Sie auf Informationen über den enthaltenen `@scope`-Block zugreifen:

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
