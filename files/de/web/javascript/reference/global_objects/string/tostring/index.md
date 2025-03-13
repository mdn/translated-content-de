---
title: String.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/String/toString
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`toString()`** Methode von {{jsxref("String")}} Werten gibt diesen Zeichenkettenwert zurück.

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

Eine Zeichenkette, die den angegebenen Zeichenkettenwert repräsentiert.

## Beschreibung

Das {{jsxref("String")}} Objekt überschreibt die `toString` Methode von {{jsxref("Object")}}; es erbt nicht von
{{jsxref("Object.prototype.toString()")}}. Für `String` Werte gibt die `toString` Methode die Zeichenkette selbst zurück (wenn es sich um einen primitiven Typ handelt) oder die Zeichenkette, die das `String` Objekt umschließt. Sie hat die exakt gleiche Implementierung wie {{jsxref("String.prototype.valueOf()")}}.

Die `toString()` Methode erfordert, dass ihr `this` Wert ein `String` primitiver Typ oder Wrapper-Objekt ist. Sie wirft einen {{jsxref("TypeError")}} für andere `this` Werte, ohne zu versuchen, sie in Zeichenkettenwerte umzuwandeln.

Da `String` keine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) Methode hat, ruft JavaScript automatisch die `toString()` Methode auf, wenn ein `String` _Objekt_ in einem Kontext verwendet wird, der eine Zeichenkette erwartet, wie zum Beispiel in einem [Template-String](/de/docs/Web/JavaScript/Reference/Template_literals). String _primitive_ Werte beziehen sich jedoch nicht auf die `toString()` Methode, um in [Zeichenketten umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) zu werden — da sie bereits Zeichenketten sind, wird keine Umwandlung durchgeführt.

```js
String.prototype.toString = () => "Overridden";
console.log(`${"foo"}`); // "foo"
console.log(`${new String("foo")}`); // "Overridden"
```

## Beispiele

### Verwendung von toString()

Das folgende Beispiel zeigt den Zeichenkettenwert eines {{jsxref("String")}} Objekts:

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
