---
title: String.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/String/toString
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

Die **`toString()`** Methode von {{jsxref("String")}}-Werten gibt diesen Zeichenkettenwert zurück.

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

Eine Zeichenkette, die den angegebenen Zeichenkettenwert darstellt.

## Beschreibung

Das {{jsxref("String")}}-Objekt überschreibt die `toString`-Methode von {{jsxref("Object")}}; es erbt nicht von
{{jsxref("Object.prototype.toString()")}}. Für `String`-Werte gibt die `toString`-Methode die Zeichenkette selbst zurück (wenn es sich um ein einfaches Zeichenkettenprimiti handelt) oder die Zeichenkette, die das `String`-Objekt umschließt. Sie hat die exakt gleiche Implementierung wie {{jsxref("String.prototype.valueOf()")}}.

Die `toString()`-Methode erfordert, dass ihr `this`-Wert ein `String`-Primitive oder Wrapper-Objekt ist. Sie löst einen {{jsxref("TypeError")}} für andere `this`-Werte aus, ohne zu versuchen, sie zu Zeichenkettenwerten zu zwingen.

Da `String` keine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) Methode hat, ruft JavaScript die `toString()`-Methode automatisch auf, wenn ein `String`-Objekt in einem Kontext verwendet wird, der eine Zeichenkette erwartet, wie zum Beispiel in einem [Template-Literal](/de/docs/Web/JavaScript/Reference/Template_literals). Allerdings konsultieren Zeichenkettenprimitivwerte nicht die `toString()`-Methode, um [in Zeichenketten umgewandelt zu werden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) – da sie bereits Zeichenketten sind, wird keine Konvertierung durchgeführt.

```js
String.prototype.toString = () => "Overridden";
console.log(`${"foo"}`); // "foo"
console.log(`${new String("foo")}`); // "Overridden"
```

## Beispiele

### Verwendung von toString()

Das folgende Beispiel zeigt den Zeichenkettenwert eines {{jsxref("String")}}-Objekts:

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
