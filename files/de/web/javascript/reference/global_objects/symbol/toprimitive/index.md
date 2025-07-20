---
title: Symbol.toPrimitive
short-title: toPrimitive
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die statische Dateneigenschaft **`Symbol.toPrimitive`** repräsentiert das [bekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.toPrimitive`. Alle [Typumwandlungs-Algorithmen](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion) suchen dieses Symbol in Objekten nach der Methode, die einen bevorzugten Typ akzeptiert und eine primitive Darstellung des Objekts zurückgibt, bevor sie auf die Verwendung der `valueOf()`- und `toString()`-Methoden des Objekts zurückfallen.

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

Mit Hilfe der `Symbol.toPrimitive`-Eigenschaft (verwendet als Funktionswert) kann ein Objekt in einen primitiven Wert umgewandelt werden. Die Funktion wird mit einem String-Argument `hint` aufgerufen, das den bevorzugten Typ des resultierenden primitiven Werts angibt. Das `hint`-Argument kann eine der folgenden ist: `"number"`, `"string"` und `"default"`.

Der `"number"`-Hinweis wird von [numerischen Umwandlungsalgorithmen](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) verwendet. Der `"string"`-Hinweis wird vom [String-Umwandlungsalgorithmus](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) verwendet. Der `"default"`-Hinweis wird vom [primitiven Umwandlungsalgorithmus](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) verwendet. Der `hint` dient nur als schwaches Präferenzsignal, und die Implementierung kann ihn ignorieren (wie es [`Symbol.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive) tut). Die Sprache erzwingt keine Übereinstimmung zwischen dem `hint` und dem Ergebnistyp, obwohl `[Symbol.toPrimitive]()` ein primitiver Wert zurückgeben muss, oder ein {{jsxref("TypeError")}} wird ausgelöst.

Objekte ohne die `[Symbol.toPrimitive]`-Eigenschaft werden in primitive Werte umgewandelt, indem die Methoden `valueOf()` und `toString()` in unterschiedlicher Reihenfolge aufgerufen werden, was im Abschnitt über [Typumwandlung](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion) ausführlicher erklärt wird. `[Symbol.toPrimitive]()` ermöglicht die vollständige Kontrolle über den Umwandlungsprozess in primitive Werte. Zum Beispiel behandelt [`Date.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) `"default"` so, als wäre es `"string"` und ruft `toString()` statt `valueOf()` auf. [`Symbol.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive) ignoriert den Hinweis und gibt immer ein Symbol zurück, was bedeutet, dass auch in String-Kontexten {{jsxref("Symbol.prototype.toString()")}} nicht aufgerufen wird, und `Symbol`-Objekte müssen immer explizit über [`String()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/String) in Strings umgewandelt werden.

## Beispiele

### Modifizieren primitiver Werte, die aus einem Objekt umgewandelt wurden

Das folgende Beispiel beschreibt, wie die `Symbol.toPrimitive`-Eigenschaft den primitiven Wert, der aus einem Objekt umgewandelt wurde, modifizieren kann.

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
