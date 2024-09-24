---
title: "CSSGroupingRule: Methode insertRule()"
short-title: insertRule()
slug: Web/API/CSSGroupingRule/insertRule
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("CSSOM") }}

Die **`insertRule()`**-Methode der
{{domxref("CSSGroupingRule")}}-Schnittstelle fügt eine neue CSS-Regel zu einer Liste von CSS-Regeln hinzu.

## Syntax

```js-nolint
insertRule(rule)
insertRule(rule, index)
```

### Parameter

- `rule`
  - : Ein String
- `index` {{optional_inline}}
  - : Ein optionaler Index, an dem die Regel eingefügt werden soll; Standardwert ist 0.

### Rückgabewert

Der Index der neuen Regel.

### Ausnahmen

- `IndexSizeError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn _index_ größer ist als die Anzahl der CSS-Kindregeln.
- `HierarchyRequestError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die neue Regel aufgrund von durch CSS festgelegten Einschränkungen nicht in die Liste an der angegebenen (nullbasierten) Indexposition eingefügt werden kann.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die neue Regel eine `@namespace`-At-Regel ist und die Liste der CSS-Kindregeln etwas anderes als `@import`-At-Regeln und `@namespace`-At-Regeln enthält.

## Beispiele

```js
let myRules = document.styleSheets[0].cssRules;
myRules[0].insertRule(
  "html {background-color: blue;}",
  0,
); /* fügt eine Regel für das HTML-Element an Position 0 ein */
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
