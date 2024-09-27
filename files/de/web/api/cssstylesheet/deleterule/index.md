---
title: "CSSStyleSheet: deleteRule() Methode"
short-title: deleteRule()
slug: Web/API/CSSStyleSheet/deleteRule
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{APIRef("CSSOM")}}

Die Methode **`deleteRule()`** des [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) entfernt eine Regel aus dem Stylesheet-Objekt.

## Syntax

```js-nolint
deleteRule(index)
```

### Parameter

- `index`
  - : Der Index in der [`CSSRuleList`](/de/docs/Web/API/CSSRuleList) des Stylesheets, der die zu entfernende Regel angibt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel entfernt die erste Regel aus dem Stylesheet `myStyles`.

```js
myStyles.deleteRule(0);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Object Model](/de/docs/Web/API/CSS_Object_Model)
- [Konstruktiv erstellbare Stylesheets](https://web.dev/articles/constructable-stylesheets) (web.dev)
- [Verwendung von dynamischen Styling-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [`insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule)
