---
title: Set.prototype.clear()
slug: Web/JavaScript/Reference/Global_Objects/Set/clear
l10n:
  sourceCommit: 4776b8fddca8ed71adc9c0f12712820db8d02371
---

{{JSRef}}

Die **`clear()`** Methode von {{jsxref("Set")}} Instanzen entfernt alle Elemente aus diesem Set.

{{EmbedInteractiveExample("pages/js/set-prototype-clear.html")}}

## Syntax

```js-nolint
clear()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Verwendung der clear()-Methode

```js
const mySet = new Set();
mySet.add(1);
mySet.add("foo");

console.log(mySet.size); // 2
console.log(mySet.has("foo")); // true

mySet.clear();

console.log(mySet.size); // 0
console.log(mySet.has("foo")); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.delete()")}}
