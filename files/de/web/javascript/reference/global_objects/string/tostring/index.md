---
title: String.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/String/toString
l10n:
  sourceCommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{JSRef}}

Die **`toString()`** Methode von {{jsxref("String")}}-Werten gibt diesen Zeichenkettenwert zurück.

{{EmbedInteractiveExample("pages/js/string-tostring.html")}}

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Eine Zeichenkette, die den angegebenen Zeichenkettenwert darstellt.

## Beschreibung

Das {{jsxref("String")}}-Objekt überschreibt die `toString`-Methode von {{jsxref("Object")}}; es erbt nicht von {{jsxref("Object.prototype.toString()")}}. Für `String`-Werte gibt die `toString`-Methode die Zeichenkette selbst zurück (wenn es sich um eine Primzahl handelt) oder die Zeichenkette, die das `String`-Objekt umschließt. Sie hat dieselbe Implementierung wie {{jsxref("String.prototype.valueOf()")}}.

Die `toString()`-Methode erfordert, dass ihr `this`-Wert ein `String`-Primitive oder Wrapper-Objekt ist. Sie löst einen {{jsxref("TypeError")}} aus, wenn andere `this`-Werte ohne Versuch, sie in Zeichenkettenwerte zu zwingen, angegeben werden.

Da `String` keine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)-Methode hat, ruft JavaScript die `toString()`-Methode automatisch auf, wenn ein `String`-Objekt in einem Kontext verwendet wird, der eine Zeichenkette erwartet, wie z.B. in einem [Template-Literal](/de/docs/Web/JavaScript/Reference/Template_literals). Allerdings ziehen `String`-Primitive-Werte die `toString()`-Methode nicht zu Rate, um zu [Zeichenketten konvertiert zu werden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) — da sie bereits Zeichenketten sind, wird keine Konvertierung durchgeführt.

```js
String.prototype.toString = () => "Overridden";
console.log(`${"foo"}`); // "foo"
console.log(`${new String("foo")}`); // "Overridden"
```

## Beispiele

### Verwendung von toString()

Das folgende Beispiel zeigt den Zeichenkettenwert eines {{jsxref("String")}}-Objekts an:

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
