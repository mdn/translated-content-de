---
title: "DOMTokenList: forEach()-Methode"
short-title: forEach()
slug: Web/API/DOMTokenList/forEach
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

Die **`forEach()`**-Methode der [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Schnittstelle ruft den im Parameter angegebenen Callback für jedes Wertepaar in der Liste in Eingabe-Reihenfolge auf.

## Syntax

```js-nolint
forEach(callback)
forEach(callback, thisArg)
```

### Parameter

- `callback`

  - : Die Funktion, die für jedes Element ausgeführt wird und letztendlich drei Argumente akzeptiert:

    - `currentValue`
      - : Das aktuelle Element, das im Array bearbeitet wird.
    - `currentIndex`
      - : Der Index des aktuellen Elements, das im Array bearbeitet wird.
    - `listObj`
      - : Das Array, auf das `forEach()` angewendet wird.

- `thisArg` {{Optional_inline}}
  - : Der Wert, der als {{jsxref("Operators/this", "this")}} beim Ausführen des `callback` verwendet wird.

### Rückgabewert

Keiner.

## Beispiel

Im folgenden Beispiel rufen wir die Liste der Klassen ab, die auf einem {{htmlelement("pre")}}-Element als `DOMTokenList` festgelegt sind, unter Verwendung von [`Element.classList`](/de/docs/Web/API/Element/classList). Wir holen dann einen Iterator, der die Werte enthält, mit `forEach()` und schreiben jeden einzelnen in das [`Node.textContent`](/de/docs/Web/API/Node/textContent) des `<pre>`-Elements innerhalb der inneren `forEach()`-Funktion.

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
