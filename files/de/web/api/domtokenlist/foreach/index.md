---
title: "DOMTokenList: forEach()-Methode"
short-title: forEach()
slug: Web/API/DOMTokenList/forEach
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

Die **`forEach()`**-Methode der [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Schnittstelle
ruft den im Parameter angegebenen Callback einmal für jedes Wertpaar in der Liste auf, in der
Einfügereihenfolge.

## Syntax

```js-nolint
forEach(callback)
forEach(callback, thisArg)
```

### Parameter

- `callback`

  - : Die Funktion, die für jedes Element ausgeführt wird und schließlich drei Argumente annimmt:

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

Im folgenden Beispiel rufen wir die Liste der auf einem
{{htmlelement("pre")}}-Element gesetzten Klassen als `DOMTokenList` ab, indem wir
[`Element.classList`](/de/docs/Web/API/Element/classList) verwenden. Danach holen wir einen Iterator, der die Werte
mithilfe von `forEach()` enthält, und schreiben jeden Wert in das `<pre>`-
[`Node.textContent`](/de/docs/Web/API/Node/textContent) innerhalb der `forEach()`-Funktion.

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
