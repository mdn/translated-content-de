---
title: "CSSStyleSheet: addRule() Methode"
short-title: addRule()
slug: Web/API/CSSStyleSheet/addRule
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("CSSOM")}}

Die veraltete Methode **`addRule()`** des [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) Schnittstelle fügt ein neue Regel zum Stylesheet hinzu. Sie sollten diese Methode vermeiden und stattdessen die standardmäßigere Methode [`insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule) verwenden.

## Syntax

```js-nolint
addRule(selector, styleBlock, index)
```

### Parameter

- `selector`
  - : Ein String, der den Selektor-Teil der CSS-Regel angibt. Der Standardwert ist der String `undefined`.
- `styleBlock`
  - : Ein String, der den Stilblock angibt, der auf die Elemente angewendet werden soll, die dem `selector` entsprechen. Der Standardwert ist der String `undefined`.
- `index` {{optional_inline}}
  - : Ein optionaler Index in der [`CSSRuleList`](/de/docs/Web/API/CSSRuleList) des Stylesheets, an dem die neue Regel eingefügt werden soll. Wenn `index` nicht angegeben ist, wird der nächste Index nach dem letzten derzeit in der Liste befindlichen Element verwendet (das ist der Wert von `cssStyleSheet.cssRules.length`).

### Rückgabewert

Gibt immer -1 zurück.

Beachten Sie, dass aufgrund einiger etwas komplexer Regeln dazu, wo Regeln rechtlich eingefügt werden können, möglicherweise eine Ausnahme ausgelöst wird. Weitere Informationen finden Sie unter [`insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule).

## Verwendungshinweise

Diese Methode wird von Browsern implementiert, indem ein String mit der Template Literal `` `${selector}{${styleBlock}}` `` erstellt und dann an die Standardmethode [`insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule) übergeben wird.

Daher kann vorhandener Code wie der folgende:

```js
cssStyleSheet.addRule(selector, styles, 0);
```

umgeschrieben werden, um die standardmäßigere `insertRule()` Methode zu verwenden, wie folgt:

```js
cssStyleSheet.insertRule(`${selector} {${styles}}`, 0);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Object Model](/de/docs/Web/API/CSS_Object_Model)
- [Verwendung dynamischer Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
