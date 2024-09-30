---
title: Set.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Set/entries
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

Die **`entries()`**-Methode von {{jsxref("Set")}}-Instanzen gibt ein neues _[Set-Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ zurück, das **ein Array von `[value, value]`** für jedes Element in diesem Set in der Einfügereihenfolge enthält. Für `Set`-Objekte gibt es keinen `key` wie bei `Map`-Objekten. Um jedoch die API ähnlich dem `Map`-Objekt zu gestalten, hat jeder _Eintrag_ hier denselben Wert für seinen _key_ und _value_, sodass ein Array `[value, value]` zurückgegeben wird.

{{EmbedInteractiveExample("pages/js/set-prototype-entries.html")}}

## Syntax

```js-nolint
entries()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [iterierbares Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Beispiele

### Verwendung von entries()

```js
const mySet = new Set();
mySet.add("foobar");
mySet.add(1);
mySet.add("baz");

const setIter = mySet.entries();

console.log(setIter.next().value); // ["foobar", "foobar"]
console.log(setIter.next().value); // [1, 1]
console.log(setIter.next().value); // ["baz", "baz"]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Set.prototype.keys()")}}
- {{jsxref("Set.prototype.values()")}}
