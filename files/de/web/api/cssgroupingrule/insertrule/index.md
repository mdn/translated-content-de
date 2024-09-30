---
title: "CSSGroupingRule: insertRule() Methode"
short-title: insertRule()
slug: Web/API/CSSGroupingRule/insertRule
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("CSSOM") }}

Die **`insertRule()`** Methode der
[`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule)-Schnittstelle fügt eine neue CSS-Regel zu einer Liste von CSS-Regeln hinzu.

## Syntax

```js-nolint
insertRule(rule)
insertRule(rule, index)
```

### Parameter

- `rule`
  - : Ein String
- `index` {{optional_inline}}
  - : Ein optionaler Index, an dem die Regel eingefügt werden soll; standardmäßig 0.

### Rückgabewert

Der Index der neuen Regel.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn _index_ größer als die Anzahl der untergeordneten CSS-Regeln ist.
- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn aufgrund von durch CSS festgelegten Einschränkungen die neue Regel nicht an der angegebenen (Null-basierten) Indexposition in die Liste eingefügt werden kann.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die neue Regel eine `@namespace` At-Regel ist und die Liste der untergeordneten CSS-Regeln etwas anderes als `@import` At-Regeln und `@namespace` At-Regeln enthält.

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
