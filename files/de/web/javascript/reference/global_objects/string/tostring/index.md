---
title: String.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/String/toString
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`toString()`**-Methode von {{jsxref("String")}}-Werten gibt diesen String-Wert zurück.

{{InteractiveExample("JavaScript Demo: String.toString()")}}

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

Ein String, der den angegebenen String-Wert repräsentiert.

## Beschreibung

Das {{jsxref("String")}}-Objekt überschreibt die `toString`-Methode von {{jsxref("Object")}}; es erbt nicht von {{jsxref("Object.prototype.toString()")}}. Für `String`-Werte gibt die `toString`-Methode den String selbst zurück (wenn es sich um einen primitiven Wert handelt) oder den String, den das `String`-Objekt umschließt. Sie hat die exakt gleiche Implementierung wie {{jsxref("String.prototype.valueOf()")}}.

Die `toString()`-Methode erfordert, dass ihr `this`-Wert ein `String`-Primitiv oder ein Wrapper-Objekt ist. Sie löst einen {{jsxref("TypeError")}} aus, wenn andere `this`-Werte verwendet werden, ohne zu versuchen, diese in String-Werte umzuwandeln.

Da `String` keine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)-Methode besitzt, wird die `toString()`-Methode in JavaScript automatisch aufgerufen, wenn ein `String`-Objekt in einem Kontext verwendet wird, der einen String erwartet, wie etwa in einem [Template-String](/de/docs/Web/JavaScript/Reference/Template_literals). Allerdings verwenden `String`-Primitive die `toString()`-Methode nicht, um in Strings [umgewandelt zu werden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) — da sie bereits Strings sind, wird keine Umwandlung durchgeführt.

```js
String.prototype.toString = () => "Overridden";
console.log(`${"foo"}`); // "foo"
console.log(`${new String("foo")}`); // "Overridden"
```

## Beispiele

### Verwendung von toString()

Das folgende Beispiel zeigt den String-Wert eines {{jsxref("String")}}-Objekts an:

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
