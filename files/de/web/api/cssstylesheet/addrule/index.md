---
title: "CSSStyleSheet: addRule()-Methode"
short-title: addRule()
slug: Web/API/CSSStyleSheet/addRule
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef("CSSOM")}}{{deprecated_header}}

Die veraltete _Legacy-Methode_ **`addRule()`** des [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Interfaces fügt dem Stylesheet eine neue Regel hinzu. Sie sollten diese Methode vermeiden und stattdessen die standardmäßigere Methode [`insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule) verwenden.

## Syntax

```js-nolint
addRule(selector, styleBlock, index)
```

### Parameter

- `selector`
  - : Ein String, der den Selektor-Teil der CSS-Regel angibt. Der Standardwert ist der String `undefined`.
- `styleBlock`
  - : Ein String, der den Style-Block angibt, der auf Elemente angewendet wird, die mit dem `selector` übereinstimmen. Der Standardwert ist der String `undefined`.
- `index` {{optional_inline}}
  - : Ein optionaler Index in der [`CSSRuleList`](/de/docs/Web/API/CSSRuleList) des Stylesheets, an dem die neue Regel eingefügt wird. Wenn `index` nicht angegeben ist, wird der nächste Index nach dem letzten derzeit in der Liste befindlichen Element verwendet (das heißt, der Wert von `cssStyleSheet.cssRules.length`).

### Rückgabewert

Gibt immer -1 zurück.

Beachten Sie, dass aufgrund einiger eher esoterischer Regeln, wo Sie Regeln legal einfügen können, möglicherweise eine Ausnahme ausgelöst wird. Weitere Informationen finden Sie unter [`insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule).

## Hinweise zur Verwendung

Diese Methode wird von Browsern implementiert, indem sie einen String mit dem Template Literal `` `${selector}{${styleBlock}}` `` erstellen und ihn dann in die standardmäßige Methode [`insertRule()`](/de/docs/Web/API/CSSStyleSheet/insertRule) übergeben.

Daher können Sie vorhandenen Code wie den folgenden:

```js
cssStyleSheet.addRule(selector, styles, 0);
```

umformulieren, um die standardmäßigere `insertRule()` zu verwenden, wie folgt:

```js
cssStyleSheet.insertRule(`${selector} {${styles}}`, 0);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Object Model](/de/docs/Web/API/CSS_Object_Model)
- [Verwendung von dynamischen Styling-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
