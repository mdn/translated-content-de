---
title: "DOMTokenList: forEach()-Methode"
short-title: forEach()
slug: Web/API/DOMTokenList/forEach
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

{{APIRef("DOM")}}

Die **`forEach()`**-Methode der [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Schnittstelle ruft die als Parameter übergebene Callback-Funktion einmal für jeden Wert in der Liste auf, und zwar in der Reihenfolge, in der die Werte eingefügt wurden.

## Syntax

```js-nolint
forEach(callback)
forEach(callback, thisArg)
```

### Parameter

- `callback`
  - : Die Funktion, die für jedes Element ausgeführt wird. Sie erhält bis zu drei Argumente:
    - `currentValue`
      - : Das aktuelle Element, das im Array verarbeitet wird.
    - `currentIndex`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
    - `listObj`
      - : Das Array, auf das `forEach()` angewendet wird.

- `thisArg` {{Optional_inline}}
  - : Der Wert, der bei der Ausführung von `callback` als {{jsxref("this")}} verwendet wird.

### Rückgabewert

Keiner.

## Beispiel

Im folgenden Beispiel rufen wir die Liste der Klassen ab, die für ein {{htmlelement("pre")}}-Element festgelegt wurden. Dazu verwenden wir [`Element.classList`](/de/docs/Web/API/Element/classList), das eine `DOMTokenList` zurückgibt. Anschließend durchlaufen wir die Werte mit `forEach()` und schreiben jeden Wert innerhalb der Callback-Funktion in den [`Node.textContent`](/de/docs/Web/API/Node/textContent) des `<pre>`-Elements.

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

- [Polyfill für `DOMTokenList.prototype.forEach` in `core-js`](https://core-js.io/docs/features/web-standards/iterable-dom-collections)
- [`DOMTokenList.entries()`](/de/docs/Web/API/DOMTokenList/entries), [`DOMTokenList.keys`](/de/docs/Web/API/DOMTokenList/keys) und [`DOMTokenList.values`](/de/docs/Web/API/DOMTokenList/values).
