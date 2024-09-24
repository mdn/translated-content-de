---
title: "DOMTokenList: forEach()-Methode"
short-title: forEach()
slug: Web/API/DOMTokenList/forEach
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

Die **`forEach()`**-Methode des {{domxref("DOMTokenList")}}-Interfaces
ruft die im Parameter angegebene Rückruffunktion einmal für jedes Wert-Paar in der Liste in der Einfügereihenfolge auf.

## Syntax

```js-nolint
forEach(callback)
forEach(callback, thisArg)
```

### Parameter

- `callback`

  - : Die Funktion, die für jedes Element ausgeführt wird, gegebenenfalls mit drei Argumenten:

    - `currentValue`
      - : Das aktuelle Element, das im Array verarbeitet wird.
    - `currentIndex`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
    - `listObj`
      - : Das Array, auf das `forEach()` angewendet wird.

- `thisArg` {{Optional_inline}}
  - : Der Wert, der als {{jsxref("Operators/this", "this")}} beim Ausführen von `callback` verwendet wird.

### Rückgabewert

Keiner.

## Beispiel

Im folgenden Beispiel rufen wir die Liste der Klassen, die auf einem
{{htmlelement("pre")}}-Element festgelegt sind, als `DOMTokenList` mit
{{domxref("Element.classList")}} ab. Wir rufen dann einen Iterator auf, der die
Werte mit `forEach()` enthält, und schreiben jeden in den `<pre>`-Tag
{{domxref("Node.textContent")}} innerhalb der inneren `forEach()`-Funktion.

### HTML

```html
<pre class="a b c"></pre>
```

### JavaScript

```js
const pre = document.querySelector("pre");
const classes = pre.classList;
const iterator = classes.values();

classes.forEach(function (value, key, listObj) {
  pre.textContent += `(${value} ${key})/${this}\n`;
}, "arg");
```

### Ergebnis

{{ EmbedLiveSample('Example', '100%', 100) }}

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("DOMTokenList.entries()")}}, {{domxref("DOMTokenList.keys")}} und {{domxref("DOMTokenList.values")}}.
