---
title: "CSSStyleSheet: removeRule() Methode"
short-title: removeRule()
slug: Web/API/CSSStyleSheet/removeRule
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("CSSOM")}}

Die veraltete Methode [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) **`removeRule()`** entfernt eine Regel aus dem Stylesheet-Objekt. Sie ist funktional identisch mit der standardmäßigen, bevorzugten Methode [`deleteRule()`](/de/docs/Web/API/CSSStyleSheet/deleteRule).

> [!NOTE]
> Dies ist eine _veraltete Methode_, die durch die Standardmethode [`deleteRule()`](/de/docs/Web/API/CSSStyleSheet/deleteRule) ersetzt wurde. Sie sollten stattdessen diese verwenden.

## Syntax

```js-nolint
removeRule(index)
```

### Parameter

- `index`
  - : Der Index in der [`CSSRuleList`](/de/docs/Web/API/CSSRuleList) des Stylesheets, der die zu entfernende Regel angibt.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel entfernt die erste Regel aus dem Stylesheet `myStyles`.

```js
myStyles.removeRule(0);
```

Sie können dies sehr einfach umschreiben, um die Standardmethode `deleteRule()` zu verwenden:

```js
myStyles.deleteRule(0);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Object Model](/de/docs/Web/API/CSS_Object_Model)
- [Verwendung dynamischer Styling-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [`insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule)
