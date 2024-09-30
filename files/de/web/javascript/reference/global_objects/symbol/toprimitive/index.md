---
title: Symbol.toPrimitive
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die statische Daten-Eigenschaft **`Symbol.toPrimitive`** repräsentiert das [wohlbekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.toPrimitive`. Alle Algorithmen zur [Typumwandlung](/de/docs/Web/JavaScript/Data_structures#type_coercion) suchen auf Objekten nach diesem Symbol für die Methode, die einen bevorzugten Typ akzeptiert und eine primitive Darstellung des Objekts zurückgibt, bevor sie als Fallback die `valueOf()`- und `toString()`-Methoden des Objekts verwenden.

{{EmbedInteractiveExample("pages/js/symbol-toprimitive.html")}}

## Wert

Das wohlbekannte Symbol `Symbol.toPrimitive`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Mit Hilfe der `Symbol.toPrimitive`-Eigenschaft (verwendet als Funktionswert) kann ein Objekt in einen primitiven Wert umgewandelt werden. Die Funktion wird mit einem String-Argument `hint` aufgerufen, das den bevorzugten Typ des resultierenden primitiven Wertes angibt. Das `hint`-Argument kann einer der folgenden Werte sein: `"number"`, `"string"` und `"default"`.

Der `"number"`-Hinweis wird von [numerischen Umwandlungsalgorithmen](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) verwendet. Der `"string"`-Hinweis wird von dem [String-Umwandlungsalgorithmus](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) verwendet. Der `"default"`-Hinweis wird von dem [primitiven Umwandlungsalgorithmus](/de/docs/Web/JavaScript/Data_structures#primitive_coercion) verwendet. Der `hint` dient nur als schwaches Präferenzsignal, und die Implementierung kann ihn ignorieren (wie es [`Symbol.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive) tut). Die Sprache erzwingt keine Übereinstimmung zwischen dem `hint` und dem Ergebnistyp, obwohl `[Symbol.toPrimitive]()` einen primitiven Wert zurückgeben muss, oder ein {{jsxref("TypeError")}} wird ausgelöst.

Objekte ohne die `[Symbol.toPrimitive]`-Eigenschaft werden zu primitiven Werten umgewandelt, indem die Methoden `valueOf()` und `toString()` in unterschiedlicher Reihenfolge aufgerufen werden, was im Detail im Abschnitt zur [Typumwandlung](/de/docs/Web/JavaScript/Data_structures#type_coercion) erklärt wird. `[Symbol.toPrimitive]()` ermöglicht volle Kontrolle über den Umwandlungsprozess zu primitiven Werten. Zum Beispiel behandelt [`Date.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) `"default"` als wäre es `"string"` und ruft `toString()` statt `valueOf()` auf. [`Symbol.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive) ignoriert den Hinweis und gibt immer ein Symbol zurück, was bedeutet, dass selbst in String-Kontexten {{jsxref("Symbol.prototype.toString()")}} nicht aufgerufen wird und `Symbol`-Objekte immer explizit durch [`String()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/String) in Strings umgewandelt werden müssen.

## Beispiele

### Modifizieren von primitiven Werten, die von einem Objekt umgewandelt wurden

Das folgende Beispiel beschreibt, wie die Eigenschaft `Symbol.toPrimitive` den primitiven Wert modifizieren kann, der von einem Objekt umgewandelt wurde.

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
