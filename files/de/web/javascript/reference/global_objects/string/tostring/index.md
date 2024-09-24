---
title: String.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/String/toString
l10n:
  sourceCommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{JSRef}}

Die **`toString()`**-Methode von {{jsxref("String")}}-Werten gibt diesen Zeichenfolgenwert zurück.

{{EmbedInteractiveExample("pages/js/string-tostring.html")}}

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Eine Zeichenfolge, die den angegebenen Zeichenfolgenwert darstellt.

## Beschreibung

Das {{jsxref("String")}}-Objekt überschreibt die `toString`-Methode von {{jsxref("Object")}}; es erbt nicht
{{jsxref("Object.prototype.toString()")}}. Für `String`-Werte gibt die `toString`-Methode die Zeichenfolge selbst zurück (wenn es sich um ein primitiven Wert handelt) oder die Zeichenfolge, die das `String`-Objekt umgibt. Sie hat die genau gleiche Implementierung wie {{jsxref("String.prototype.valueOf()")}}.

Die `toString()`-Methode erfordert, dass ihr `this`-Wert ein `String`-Primitiv oder Wrapper-Objekt ist. Bei anderen `this`-Werten wirft sie einen {{jsxref("TypeError")}}, ohne zu versuchen, diese in Zeichenfolgenwerte umzuwandeln.

Da `String` keine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)-Methode hat, ruft JavaScript die `toString()`-Methode automatisch auf, wenn ein `String`-Objekt in einem Kontext verwendet wird, der eine Zeichenfolge erwartet, wie in einem [Template-Literal](/de/docs/Web/JavaScript/Reference/Template_literals). Allerdings konsultieren String-Primitivwerte die `toString()`-Methode nicht, um in Zeichenfolgen [umgewandelt zu werden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) — da sie bereits Zeichenfolgen sind, wird keine Konvertierung durchgeführt.

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
