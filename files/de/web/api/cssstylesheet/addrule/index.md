---
title: "CSSStyleSheet: addRule() Methode"
short-title: addRule()
slug: Web/API/CSSStyleSheet/addRule
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef("CSSOM")}}{{deprecated_header}}

Die veraltete Schnittstelle [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) verwendet die **`addRule()`** _Legacy-Methode_, um eine neue Regel zum Stylesheet hinzuzufügen. Sie sollten diese Methode vermeiden und stattdessen die standardmäßigere [`insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule) Methode verwenden.

## Syntax

```js-nolint
addRule(selector, styleBlock, index)
```

### Parameter

- `selector`
  - : Ein Zeichenfolgenwert, der den Selektoranteil der CSS-Regel angibt. Der Standardwert ist die Zeichenfolge `undefined`.
- `styleBlock`
  - : Eine Zeichenfolge, die den Stilblock angibt, der auf Elemente angewendet werden soll, die dem `selector` entsprechen. Der Standardwert ist die Zeichenfolge `undefined`.
- `index` {{optional_inline}}
  - : Ein optionaler Index in der [`CSSRuleList`](/de/docs/Web/API/CSSRuleList) des Stylesheets, an dem die neue Regel eingefügt werden soll. Wird `index` nicht angegeben, wird der nächste Index nach dem letzten Element in der Liste verwendet (also der Wert von `cssStyleSheet.cssRules.length`).

### Rückgabewert

Gibt immer -1 zurück.

Beachten Sie, dass es aufgrund von etwas exotischen Regeln darüber, wo Sie legal Regeln einfügen können, möglich ist, dass eine Ausnahme ausgelöst wird. Weitere Informationen finden Sie unter [`insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule).

## Verwendungshinweise

Diese Methode wird von Browsern implementiert, indem ein String unter Verwendung des Template-Literals `` `${selector}{${styleBlock}}` `` konstruiert und dann in die standardmäßige [`insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule) Methode übergeben wird.

Daher kann der bestehende Code wie folgt umgeschrieben werden:

```js
cssStyleSheet.addRule(selector, styles, 0);
```

Sie können dies umschreiben und die standardmäßigere `insertRule()` Methode wie folgt verwenden:

```js
cssStyleSheet.insertRule(`${selector} {${styles}}`, 0);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Objektmodell](/de/docs/Web/API/CSS_Object_Model)
- [Verwendung dynamischer Styling-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
