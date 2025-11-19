---
title: "DOMTokenList: forEach() Methode"
short-title: forEach()
slug: Web/API/DOMTokenList/forEach
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("DOM")}}

Die **`forEach()`** Methode der [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) Schnittstelle führt die im Parameter angegebene Rückruffunktion einmal für jedes Wertpaar in der Liste in der Einfügereihenfolge aus.

## Syntax

```js-nolint
forEach(callback)
forEach(callback, thisArg)
```

### Parameter

- `callback`
  - : Die Funktion, die für jedes Element ausgeführt wird, nimmt schließlich drei Argumente entgegen:
    - `currentValue`
      - : Das aktuelle Element, das im Array verarbeitet wird.
    - `currentIndex`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
    - `listObj`
      - : Das Array, auf das `forEach()` angewendet wird.

- `thisArg` {{Optional_inline}}
  - : Der Wert, der als {{jsxref("Operators/this", "this")}} verwendet wird, wenn `callback` ausgeführt wird.

### Rückgabewert

Keiner.

## Beispiel

Im folgenden Beispiel rufen wir die Liste der Klassen ab, die auf einem {{htmlelement("pre")}}-Element mittels `DOMTokenList` gesetzt sind, unter Verwendung von [`Element.classList`](/de/docs/Web/API/Element/classList). Dann erhalten wir einen Iterator, der die Werte enthält, indem er `forEach()` verwendet, und schreiben jede in das `<pre>`s [`Node.textContent`](/de/docs/Web/API/Node/textContent) innerhalb der `forEach()`-inneren Funktion.

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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMTokenList.entries()`](/de/docs/Web/API/DOMTokenList/entries), [`DOMTokenList.keys`](/de/docs/Web/API/DOMTokenList/keys) und [`DOMTokenList.values`](/de/docs/Web/API/DOMTokenList/values).
