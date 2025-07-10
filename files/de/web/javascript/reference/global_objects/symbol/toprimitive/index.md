---
title: Symbol.toPrimitive
short-title: toPrimitive
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Dateneigenschaft **`Symbol.toPrimitive`** repräsentiert das [bekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.toPrimitive`. Alle Algorithmen zur [Typumwandlung](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion) suchen dieses Symbol in Objekten für die Methode, die einen bevorzugten Typ akzeptiert und eine primitive Darstellung des Objekts zurückgibt, bevor auf die Verwendung der Methoden `valueOf()` und `toString()` des Objekts zurückgegriffen wird.

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

Das bekannte Symbol `Symbol.toPrimitive`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Mit Hilfe der `Symbol.toPrimitive` Eigenschaft (verwendet als Funktionswert) kann ein Objekt in einen primitiven Wert umgewandelt werden. Die Funktion wird mit einem String-Argument `hint` aufgerufen, das die bevorzugte Art des Ergebnisprimitivwerts angibt. Das `hint`-Argument kann einer der folgenden sein: `"number"`, `"string"` und `"default"`.

Der `"number"` Hinweis wird von Algorithmen zur [numerischen Umwandlung](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) verwendet. Der `"string"` Hinweis wird vom [String-Umwandlungs-Algorithmus](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) verwendet. Der `"default"` Hinweis wird vom [primitiven Umwandlungs-Algorithmus](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) verwendet. Der `hint` dient nur als schwaches Präferenzsignal, und die Implementierung kann ihn ignorieren (wie [`Symbol.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive) dies tut). Die Sprache erzwingt keine Übereinstimmung zwischen dem `hint` und dem Ergebnistyp, obwohl `[Symbol.toPrimitive]()` einen primitiven Wert zurückgeben muss, oder es wird ein {{jsxref("TypeError")}} ausgelöst.

Objekte ohne die `[Symbol.toPrimitive]` Eigenschaft werden in primitive Werte umgewandelt, indem die Methoden `valueOf()` und `toString()` in unterschiedlicher Reihenfolge aufgerufen werden, was im Abschnitt über die [Typumwandlung](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion) ausführlicher erklärt wird. `[Symbol.toPrimitive]()` ermöglicht die vollständige Kontrolle über den Prozess der primitiven Umwandlung. Zum Beispiel behandelt [`Date.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) `"default"` so, als wäre es `"string"` und ruft `toString()` statt `valueOf()` auf. [`Symbol.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive) ignoriert den Hinweis und gibt immer ein Symbol zurück, was bedeutet, dass selbst in String-Kontexten {{jsxref("Symbol.prototype.toString()")}} nicht aufgerufen wird und `Symbol`-Objekte immer explizit durch [`String()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/String) in Strings umgewandelt werden müssen.

## Beispiele

### Modifikation von primitiven Werten, die aus einem Objekt umgewandelt wurden

Das folgende Beispiel beschreibt, wie die `Symbol.toPrimitive` Eigenschaft den aus einem Objekt umgewandelten primitiven Wert modifizieren kann.

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
