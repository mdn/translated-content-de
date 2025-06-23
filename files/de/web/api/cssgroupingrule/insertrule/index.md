---
title: "CSSGroupingRule: insertRule() Methode"
short-title: insertRule()
slug: Web/API/CSSGroupingRule/insertRule
l10n:
  sourceCommit: 546c31e548e0c03ada8e4c5f37883549299e17ea
---

{{ APIRef("CSSOM") }}

Die **`insertRule()`** Methode der [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule)-Schnittstelle fügt eine neue CSS-Regel zu einer Liste von CSS-Regeln hinzu.

## Syntax

```js-nolint
insertRule(rule)
insertRule(rule, index)
```

### Parameter

- `rule`
  - : Ein String
- `index` {{optional_inline}}
  - : Ein optionaler Index, an dem die Regel eingefügt werden soll; Standard ist 0.

### Rückgabewert

Der Index der neuen Regel.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn _index_ größer ist als die Anzahl der untergeordneten CSS-Regeln.
- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `rule` aufgrund einer CSS-Einschränkung nicht an der angegebenen Stelle eingefügt werden kann.
- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die `rule` eine gültige Anweisung ist, aber keine [verschachtelte Anweisung](/de/docs/Web/CSS/CSS_syntax/Syntax#nested_statements) darstellt.

## Beispiele

```js
let myRules = document.styleSheets[0].cssRules;
myRules[0].insertRule(
  "html {background-color: blue;}",
  0,
); /* inserts a rule for the HTML element at position 0 */
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
