---
title: String.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/String/toString
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`toString()`** Methode von {{jsxref("String")}} Werten gibt diesen String-Wert zurück.

{{InteractiveExample("JavaScript Demo: String.prototype.toString()")}}

```js interactive-example
const stringObj = new String("foo");

console.log(stringObj);
// Expected output: String { "foo" }

console.log(stringObj.toString());
// Expected output: "foo"
```

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der den angegebenen String-Wert darstellt.

## Beschreibung

Das {{jsxref("String")}} Objekt überschreibt die `toString` Methode von {{jsxref("Object")}}; es erbt nicht von {{jsxref("Object.prototype.toString()")}}. Für `String`-Werte gibt die `toString` Methode den String selbst zurück (wenn es sich um ein primitives Element handelt) oder den String, den das `String`-Objekt umschließt. Die Implementierung ist identisch mit {{jsxref("String.prototype.valueOf()")}}.

Die `toString()` Methode erfordert, dass ihr `this`-Wert ein `String`-Primitiv oder Wrapper-Objekt ist. Sie löst einen {{jsxref("TypeError")}} für andere `this`-Werte aus, ohne zu versuchen, sie in String-Werte zu zwingen.

Da `String` keine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) Methode besitzt, ruft JavaScript die `toString()` Methode automatisch auf, wenn ein `String` _Objekt_ in einem Kontext verwendet wird, der einen String erwartet, wie zum Beispiel in einem [Template-Literal](/de/docs/Web/JavaScript/Reference/Template_literals). Allerdings konsultieren String _primitive_ Werte die `toString()` Methode nicht, um [in Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) zu werden — da sie bereits Strings sind, wird keine Umwandlung durchgeführt.

```js
String.prototype.toString = () => "Overridden";
console.log(`${"foo"}`); // "foo"
console.log(`${new String("foo")}`); // "Overridden"
```

## Beispiele

### Verwendung von toString()

Das folgende Beispiel zeigt den String-Wert eines {{jsxref("String")}} Objekts:

```js
const x = new String("Hello world");

console.log(x.toString()); // "Hello world"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("String.prototype.valueOf()")}}
