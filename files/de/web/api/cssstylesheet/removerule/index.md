---
title: "CSSStyleSheet: removeRule()-Methode"
short-title: removeRule()
slug: Web/API/CSSStyleSheet/removeRule
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("CSSOM")}}{{deprecated_header}}

Die veraltete Methode **`removeRule()`** des [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) entfernt eine Regel aus dem Stylesheet-Objekt. Sie ist funktional identisch mit der standardisierten, bevorzugten Methode [`deleteRule()`](/de/docs/Web/API/CSSStyleSheet/deleteRule).

> [!NOTE]
> Dies ist eine _veraltete Methode_, die durch die standardisierte Methode [`deleteRule()`](/de/docs/Web/API/CSSStyleSheet/deleteRule) ersetzt wurde. Sie sollten stattdessen diese verwenden.

## Syntax

```js-nolint
removeRule(index)
```

### Parameter

- `index`
  - : Der Index in der [`CSSRuleList`](/de/docs/Web/API/CSSRuleList) des Stylesheets, der auf die zu entfernende Regel verweist.

### Rückgabewert

Kein Wert ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel entfernt die erste Regel aus dem Stylesheet `myStyles`.

```js
myStyles.removeRule(0);
```

Sie können dies ganz einfach umschreiben, um die standardisierte `deleteRule()`-Methode zu verwenden:

```js
myStyles.deleteRule(0);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Object Model](/de/docs/Web/API/CSS_Object_Model)
- [Verwendung dynamischer Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [`insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule)
