---
title: "CSSStyleSheet: addRule()-Methode"
short-title: addRule()
slug: Web/API/CSSStyleSheet/addRule
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef("CSSOM")}}{{deprecated_header}}

Die veraltete **`addRule()`**-Methode des {{domxref("CSSStyleSheet")}}-Interfaces fügt der Stylesheet eine neue Regel hinzu. Sie sollten diese Methode vermeiden und stattdessen die standardmäßigere {{domxref("CSSStyleSheet.insertRule", "insertRule()")}}-Methode verwenden.

## Syntax

```js-nolint
addRule(selector, styleBlock, index)
```

### Parameter

- `selector`
  - : Ein String, der den Selektor-Teil der CSS-Regel angibt. Der Standardwert ist der String `undefined`.
- `styleBlock`
  - : Ein String, der den Style-Block angibt, der auf Elemente angewendet werden soll, die dem `selector` entsprechen. Der Standardwert ist der String `undefined`.
- `index` {{optional_inline}}
  - : Ein optionaler Index in der {{domxref("CSSRuleList")}} des Stylesheets, an dem die neue Regel eingefügt werden soll. Wenn `index` nicht angegeben ist, wird der nächste Index nach dem letzten derzeit in der Liste befindlichen Element verwendet (das heißt, der Wert von `cssStyleSheet.cssRules.length`).

### Rückgabewert

Gibt immer -1 zurück.

Beachten Sie, dass aufgrund einiger eher esoterischer Regeln darüber, wo Sie Regeln legal einfügen können, eine Ausnahme ausgelöst werden kann. Weitere Informationen finden Sie bei {{domxref("CSSStyleSheet.insertRule", "insertRule()")}}.

## Hinweise zur Verwendung

Diese Methode wird von Browsern implementiert, indem ein String unter Verwendung des Template-Literals `` `${selector}{${styleBlock}}` `` konstruiert und dann in die Standard-{{domxref("CSSStyleSheet.insertRule", "insertRule()")}}-Methode übergeben wird.

Daher kann bestehender Code wie der folgende:

```js
cssStyleSheet.addRule(selector, styles, 0);
```

in eine Verwendung von `insertRule()` umgeschrieben werden, die so aussieht:

```js
cssStyleSheet.insertRule(`${selector} {${styles}}`, 0);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Object Model](/de/docs/Web/API/CSS_Object_Model)
- [Verwenden dynamischer Stylinginformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
