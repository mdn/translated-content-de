---
title: "DOMTokenList: forEach()-Methode"
short-title: forEach()
slug: Web/API/DOMTokenList/forEach
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

{{APIRef("DOM")}}

Die **`forEach()`**-Methode der [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Schnittstelle ruft die als Parameter übergebene Callback-Funktion für jedes Wertepaar in der Liste in der Einfügereihenfolge auf.

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
  - : Der Wert, der als {{jsxref("this")}} verwendet wird, wenn `callback` ausgeführt wird.

### Rückgabewert

Keiner.

## Beispiel

Im folgenden Beispiel erhalten wir die Liste der Klassen, die auf einem {{htmlelement("pre")}}-Element als `DOMTokenList` festgelegt sind, unter Verwendung von [`Element.classList`](/de/docs/Web/API/Element/classList). Wir holen dann einen Iterator, der die Werte enthält, mithilfe von `forEach()` ab, wobei jeder Wert in das [`Node.textContent`](/de/docs/Web/API/Node/textContent) des `<pre>` während der Ausführung der inneren Funktion von `forEach()` geschrieben wird.

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
