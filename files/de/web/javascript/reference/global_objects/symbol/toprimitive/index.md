---
title: Symbol.toPrimitive
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Der **`Symbol.toPrimitive`** statische Dateneigenschaft repräsentiert das [bekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.toPrimitive`. Alle [Typumwandlungs-](/de/docs/Web/JavaScript/Data_structures#type_coercion) Algorithmen suchen dieses Symbol auf Objekten, um eine Methode zu finden, die einen bevorzugten Typ akzeptiert und eine primitive Repräsentation des Objekts zurückgibt, bevor sie auf die Verwendung der `valueOf()` und `toString()`-Methoden des Objekts zurückfallen.

{{EmbedInteractiveExample("pages/js/symbol-toprimitive.html")}}

## Wert

Das bekannte Symbol `Symbol.toPrimitive`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Mit Hilfe der `Symbol.toPrimitive`-Eigenschaft (verwendet als Funktionswert) kann ein Objekt in einen primitiven Wert konvertiert werden. Die Funktion wird mit einem String-Argument `hint` aufgerufen, das den bevorzugten Typ des resultierenden primitiven Werts angibt. Das `hint`-Argument kann eines der folgenden sein: `"number"`, `"string"` und `"default"`.

Der `"number"`-Hinweis wird von [numerischen Koerzions-](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) Algorithmen verwendet. Der `"string"`-Hinweis wird vom [String-Koerzions-](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) Algorithmus verwendet. Der `"default"`-Hinweis wird vom [primitiven Koerzions-](/de/docs/Web/JavaScript/Data_structures#primitive_coercion) Algorithmus verwendet. Der `hint` dient nur als schwaches Präferenzsignal, und die Implementierung kann ihn ignorieren (wie [`Symbol.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive) es tut). Die Sprache erzwingt keine Übereinstimmung zwischen dem `hint` und dem Ergebnistyp, obwohl `[Symbol.toPrimitive]()` einen primitiven Wert zurückgeben muss, ansonsten wird ein {{jsxref("TypeError")}} ausgelöst.

Objekte ohne die `[Symbol.toPrimitive]`-Eigenschaft werden zu primitiven Werten konvertiert, indem die `valueOf()`- und `toString()`-Methoden in unterschiedlicher Reihenfolge aufgerufen werden, was detaillierter im Abschnitt [Typumwandlung](/de/docs/Web/JavaScript/Data_structures#type_coercion) erklärt wird. `[Symbol.toPrimitive]()` ermöglicht volle Kontrolle über den Konvertierungsprozess zu primitiven Werten. Zum Beispiel behandelt [`Date.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) `"default"` so, als wäre es `"string"` und ruft `toString()` anstelle von `valueOf()` auf. [`Symbol.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive) ignoriert den Hinweis und gibt immer ein Symbol zurück, was bedeutet, dass selbst in String-Kontexten {{jsxref("Symbol.prototype.toString()")}} nicht aufgerufen wird, und `Symbol`-Objekte immer explizit durch [`String()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/String) in Strings konvertiert werden müssen.

## Beispiele

### Modifizieren von primitiven Werten, die aus einem Objekt konvertiert wurden

Das folgende Beispiel beschreibt, wie die `Symbol.toPrimitive`-Eigenschaft den aus einem Objekt konvertierten primitiven Wert modifizieren kann.

```js
// Ein Objekt ohne Symbol.toPrimitive-Eigenschaft.
const obj1 = {};
console.log(+obj1); // NaN
console.log(`${obj1}`); // "[object Object]"
console.log(obj1 + ""); // "[object Object]"

// Ein Objekt mit Symbol.toPrimitive-Eigenschaft.
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
console.log(+obj2); // 10        — hint ist "number"
console.log(`${obj2}`); // "hello"   — hint ist "string"
console.log(obj2 + ""); // "true"    — hint ist "default"
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
