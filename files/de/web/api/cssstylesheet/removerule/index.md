---
title: "CSSStyleSheet: die Methode removeRule()"
short-title: removeRule()
slug: Web/API/CSSStyleSheet/removeRule
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("CSSOM")}}{{deprecated_header}}

Die veraltete Methode **`removeRule()`** des {{domxref("CSSStyleSheet")}} entfernt eine Regel aus dem Stylesheet-Objekt. Sie ist funktional identisch mit der standardmäßigen, bevorzugten Methode {{domxref("CSSStyleSheet.deleteRule", "deleteRule()")}}.

> [!NOTE]
> Dies ist eine _veraltete Methode_, die durch die Standardmethode {{domxref("CSSStyleSheet.deleteRule", "deleteRule()")}} ersetzt wurde. Sie sollten stattdessen diese verwenden.

## Syntax

```js-nolint
removeRule(index)
```

### Parameter

- `index`
  - : Der Index in der {{domxref("CSSRuleList")}} des Stylesheets, der die zu entfernende Regel angibt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

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

- [CSS-Objektmodell](/de/docs/Web/API/CSS_Object_Model)
- [Verwendung dynamischer Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- {{domxref("CSSStyleSheet.insertRule", "insertRule()")}}
