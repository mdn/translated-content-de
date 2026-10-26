---
title: Symbol.toPrimitive
short-title: toPrimitive
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Dateneigenschaft **`Symbol.toPrimitive`** repräsentiert das [bekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.toPrimitive`. Alle Algorithmen zur [Typumwandlung](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion) suchen bei Objekten nach diesem Symbol, um eine Methode zu finden, die einen bevorzugten Typ entgegennimmt und eine primitive Repräsentation des Objekts zurückgibt. Erst wenn diese Methode nicht vorhanden ist, greifen sie auf die Methoden `valueOf()` und `toString()` des Objekts zurück.

{{InteractiveExample("JavaScript Demo: Symbol.toPrimitive")}}

```js interactive-example
const object = {
  [Symbol.toPrimitive](hint) {
    if (hint === "number") {
      return 42;
    }
    return null;
  },
};

console.log(+object);
// Expected output: 42
```

## Wert

Das bekannte Symbol `Symbol.toPrimitive`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Mithilfe der Eigenschaft `Symbol.toPrimitive` (als Funktionswert verwendet) kann ein Objekt in einen primitiven Wert umgewandelt werden. Die Funktion wird mit dem String-Argument `hint` aufgerufen, das den bevorzugten Typ des resultierenden primitiven Werts angibt. Für `hint` sind die Werte `"number"`, `"string"` und `"default"` möglich.

Der Hinweis `"number"` wird von Algorithmen zur [numerischen Typumwandlung](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) verwendet. Der Hinweis `"string"` wird vom Algorithmus zur [String-Umwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) verwendet. Der Hinweis `"default"` wird vom Algorithmus zur [Umwandlung in einen primitiven Wert](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) verwendet. `hint` ist lediglich ein schwacher Hinweis auf den bevorzugten Typ; die Implementierung kann ihn ignorieren (wie es [`Symbol.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive) tut). Die Sprache schreibt nicht vor, dass der Ergebnistyp mit `hint` übereinstimmt. `[Symbol.toPrimitive]()` muss jedoch einen primitiven Wert zurückgeben; andernfalls wird ein {{jsxref("TypeError")}} ausgelöst.

Objekte ohne die Eigenschaft `[Symbol.toPrimitive]` werden in primitive Werte umgewandelt, indem die Methoden `valueOf()` und `toString()` in unterschiedlicher Reihenfolge aufgerufen werden. Dies wird im Abschnitt zur [Typumwandlung](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion) genauer erläutert. `[Symbol.toPrimitive]()` ermöglicht die vollständige Kontrolle über die Umwandlung in einen primitiven Wert. Beispielsweise behandelt [`Date.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) `"default"` wie `"string"` und ruft `toString()` statt `valueOf()` auf. [`Symbol.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive) ignoriert den Hinweis und gibt immer ein Symbol zurück. Das bedeutet, dass {{jsxref("Symbol.prototype.toString()")}} selbst in String-Kontexten nicht aufgerufen wird und `Symbol`-Objekte immer ausdrücklich mit [`String()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/String) in Strings umgewandelt werden müssen.

## Beispiele

### Aus einem Objekt umgewandelte primitive Werte ändern

Das folgende Beispiel zeigt, wie die Eigenschaft `Symbol.toPrimitive` den primitiven Wert beeinflussen kann, der aus einem Objekt umgewandelt wird.

```js
// An object without Symbol.toPrimitive property.
const obj1 = {};
console.log(+obj1); // NaN
console.log(`${obj1}`); // "[object Object]"
console.log(obj1 + ""); // "[object Object]"

// An object with Symbol.toPrimitive property.
const obj2 = {
  [Symbol.toPrimitive](hint) {
    if (hint === "number") {
      return 10;
    }
    if (hint === "string") {
      return "hello";
    }
    return true;
  },
};
console.log(+obj2); // 10        — hint is "number"
console.log(`${obj2}`); // "hello"   — hint is "string"
console.log(obj2 + ""); // "true"    — hint is "default"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Symbol.toPrimitive` in `core-js`](https://core-js.io/docs/features/ecmascript/symbol)
- [`Date.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive)
- [`Symbol.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive)
- {{jsxref("Object.prototype.toString()")}}
- {{jsxref("Object.prototype.valueOf()")}}
