---
title: Symbol.toPrimitive
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Dateneigenschaft **`Symbol.toPrimitive`** repräsentiert das [wohlbekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.toPrimitive`. Alle [Typumwandlungs-](/de/docs/Web/JavaScript/Data_structures#type_coercion) Algorithmen suchen dieses Symbol in Objekten, um die Methode zu finden, die einen bevorzugten Typ akzeptiert und eine primitive Darstellung des Objekts zurückgibt, bevor auf die Methoden `valueOf()` und `toString()` des Objekts zurückgegriffen wird.

{{InteractiveExample("JavaScript Demo: Symbol.toPrimitive")}}

```js interactive-example
const object1 = {
  [Symbol.toPrimitive](hint) {
    if (hint === "number") {
      return 42;
    }
    return null;
  },
};

console.log(+object1);
// Expected output: 42
```

## Wert

Das wohlbekannte Symbol `Symbol.toPrimitive`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Mit Hilfe der Eigenschaft `Symbol.toPrimitive` (verwendet als Funktionswert) kann ein Objekt in einen primitiven Wert umgewandelt werden. Die Funktion wird mit einem String-Argument `hint` aufgerufen, der den bevorzugten Typ des resultierenden primitiven Wertes angibt. Das Argument `hint` kann einer der Werte `"number"`, `"string"` oder `"default"` sein.

Der `"number"`-Hinweis wird von [numerischen Umwandlungs-](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) Algorithmen verwendet. Der `"string"`-Hinweis wird vom [String-Umwandlungs-](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) Algorithmus genutzt. Der `"default"`-Hinweis wird vom [primitiven Umwandlungs-](/de/docs/Web/JavaScript/Data_structures#primitive_coercion) Algorithmus genutzt. Der `hint` fungiert nur als schwaches Signal der Präferenz, und die Implementierung kann ihn ignorieren (wie beispielsweise [`Symbol.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive)). Die Sprache erzwingt keine Übereinstimmung zwischen dem `hint` und dem Resultat-Typ, obwohl `[Symbol.toPrimitive]()` einen primitiven Wert zurückgeben muss, andernfalls wird ein {{jsxref("TypeError")}} ausgelöst.

Objekte ohne die `[Symbol.toPrimitive]`-Eigenschaft werden in primitive Werte umgewandelt, indem die Methoden `valueOf()` und `toString()` in unterschiedlicher Reihenfolge aufgerufen werden. Dies wird detailliert im Abschnitt [Typumwandlung](/de/docs/Web/JavaScript/Data_structures#type_coercion) erklärt. `[Symbol.toPrimitive]()` ermöglicht eine vollständige Kontrolle über den Umwandlungsprozess in primitive Werte. Zum Beispiel behandelt [`Date.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) `"default"` so, als wäre es `"string"`, und ruft `toString()` anstelle von `valueOf()` auf. [`Symbol.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive) ignoriert den Hinweis und gibt immer ein Symbol zurück. Das bedeutet, dass auch in String-Kontexten {{jsxref("Symbol.prototype.toString()")}} nicht aufgerufen wird, und `Symbol`-Objekte immer explizit durch [`String()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/String) in Strings konvertiert werden müssen.

## Beispiele

### Ändern von primitiven Werten, die aus einem Objekt umgewandelt werden

Das folgende Beispiel beschreibt, wie die `Symbol.toPrimitive`-Eigenschaft den aus einem Objekt umgewandelten primitiven Wert ändern kann.

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

- [Polyfill von `Symbol.toPrimitive` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- [`Date.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive)
- [`Symbol.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive)
- {{jsxref("Object.prototype.toString()")}}
- {{jsxref("Object.prototype.valueOf()")}}
