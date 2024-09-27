---
title: Symbol.toPrimitive
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die statische Dateneigenschaft **`Symbol.toPrimitive`** repräsentiert das [bekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.toPrimitive`. Alle Algorithmen zur [Typumwandlung](/de/docs/Web/JavaScript/Data_structures#type_coercion) suchen dieses Symbol auf Objekten für die Methode, die einen bevorzugten Typ akzeptiert und eine primitive Darstellung des Objekts zurückgibt, bevor sie auf die `valueOf()` und `toString()` Methoden des Objekts zurückgreifen.

{{EmbedInteractiveExample("pages/js/symbol-toprimitive.html")}}

## Wert

Das bekannte Symbol `Symbol.toPrimitive`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Mit Hilfe der `Symbol.toPrimitive`-Eigenschaft (verwendet als Funktionswert) kann ein Objekt in einen primitiven Wert umgewandelt werden. Die Funktion wird mit einem String-Argument `hint` aufgerufen, das den bevorzugten Typ des resultierenden primitiven Werts angibt. Das `hint`-Argument kann einer der folgenden Werte sein: `"number"`, `"string"` und `"default"`.

Der `"number"`-Hinweis wird von Algorithmen zur [numerischen Typumwandlung](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) verwendet. Der `"string"`-Hinweis wird vom [String-Umwandlungsalgorithmus](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) verwendet. Der `"default"`-Hinweis wird vom [primitiven Umwandlungsalgorithmus](/de/docs/Web/JavaScript/Data_structures#primitive_coercion) verwendet. Der `hint` dient nur als schwaches Präferenzsignal, und die Implementierung kann ihn ignorieren (wie es [`Symbol.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive) tut). Die Sprache erzwingt keine Übereinstimmung zwischen dem `hint` und dem Ergebnistyp, allerdings muss `[Symbol.toPrimitive]()` einen primitiven Wert zurückgeben, sonst wird ein {{jsxref("TypeError")}} ausgelöst.

Objekte ohne die Eigenschaft `[Symbol.toPrimitive]` werden in primitive Werte umgewandelt, indem die Methoden `valueOf()` und `toString()` in verschiedenen Reihenfolgen aufgerufen werden, was im Abschnitt zur [Typumwandlung](/de/docs/Web/JavaScript/Data_structures#type_coercion) näher erläutert wird. `[Symbol.toPrimitive]()` ermöglicht volle Kontrolle über den primitiven Umwandlungsprozess. Zum Beispiel behandelt [`Date.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) `"default"` als wäre es `"string"` und ruft `toString()` statt `valueOf()` auf. [`Symbol.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive) ignoriert den Hinweis und gibt immer ein Symbol zurück, was bedeutet, dass selbst in String-Kontexten {{jsxref("Symbol.prototype.toString()")}} nicht aufgerufen wird, und `Symbol`-Objekte müssen immer explizit durch [`String()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/String) in Strings konvertiert werden.

## Beispiele

### Modifizierung primitiver Werte, die aus einem Objekt konvertiert wurden

Das folgende Beispiel beschreibt, wie die `Symbol.toPrimitive`-Eigenschaft den primitiven Wert ändern kann, der aus einem Objekt konvertiert wurde.

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
