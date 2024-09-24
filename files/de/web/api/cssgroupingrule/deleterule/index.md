---
title: "CSSGroupingRule: deleteRule() Methode"
short-title: deleteRule()
slug: Web/API/CSSGroupingRule/deleteRule
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{ APIRef("CSSOM") }}

Die **`deleteRule()`** Methode des
{{domxref("CSSGroupingRule")}} Interfaces entfernt eine CSS-Regel aus einer Liste von untergeordneten CSS-Regeln.

## Syntax

```js-nolint
deleteRule(index)
```

### Parameter

- `index`
  - : Der Index der zu löschenden Regel.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `IndexSizeError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn _index_ größer oder gleich der Anzahl der untergeordneten CSS-Regeln ist.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die zu entfernende Regel eine `@namespace` At-Regel ist und die Liste der untergeordneten CSS-Regeln etwas anderes als `@import` At-Regeln und `@namespace` At-Regeln enthält.

## Beispiele

```js
let myRules = document.styleSheets[0].cssRules;
myRules[0].deleteRule(2); /* löscht die Regel am Index 2 */
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
