---
title: String.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/String/toString
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`toString()`**-Methode von {{jsxref("String")}}-Werten gibt diesen Zeichenfolgenwert zurück.

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

Eine Zeichenfolge, die den angegebenen Zeichenfolgenwert darstellt.

## Beschreibung

Das {{jsxref("String")}}-Objekt überschreibt die `toString`-Methode von {{jsxref("Object")}}; es erbt nicht {{jsxref("Object.prototype.toString()")}}. Für `String`-Werte gibt die `toString`-Methode die Zeichenfolge selbst zurück (wenn es sich um ein primitives handelt) oder die Zeichenfolge, die das `String`-Objekt umschließt. Sie hat die exakt gleiche Implementierung wie {{jsxref("String.prototype.valueOf()")}}.

Die `toString()`-Methode erfordert, dass ihr `this`-Wert ein primitiver `String` oder ein Wrapper-Objekt ist. Sie wirft einen {{jsxref("TypeError")}} für andere `this`-Werte aus, ohne zu versuchen, sie zu Zeichenfolgenwerten zu erzwingen.

Da `String` keine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)-Methode hat, ruft JavaScript die `toString()`-Methode automatisch auf, wenn ein `String`-Objekt in einem Kontext verwendet wird, der eine Zeichenfolge erwartet, wie zum Beispiel in einem [Template-Literal](/de/docs/Web/JavaScript/Reference/Template_literals). Allerdings konsultieren `String`-Primitive die `toString()`-Methode nicht, um [zu Zeichenfolgen umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) zu werden — da sie bereits Zeichenfolgen sind, wird keine Umwandlung durchgeführt.

```js
String.prototype.toString = () => "Overridden";
console.log(`${"foo"}`); // "foo"
console.log(`${new String("foo")}`); // "Overridden"
```

## Beispiele

### Verwendung von toString()

Das folgende Beispiel zeigt den Zeichenfolgenwert eines {{jsxref("String")}}-Objekts:

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
