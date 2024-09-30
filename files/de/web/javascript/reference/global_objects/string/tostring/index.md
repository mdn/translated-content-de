---
title: String.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/String/toString
l10n:
  sourceCommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{JSRef}}

Die **`toString()`**-Methode von {{jsxref("String")}}-Werten gibt diesen String-Wert zurück.

{{EmbedInteractiveExample("pages/js/string-tostring.html")}}

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der den angegebenen String-Wert darstellt.

## Beschreibung

Das {{jsxref("String")}}-Objekt überschreibt die `toString`-Methode von {{jsxref("Object")}}; es erbt nicht
{{jsxref("Object.prototype.toString()")}}. Für `String`-Werte gibt die `toString`-Methode den String selbst zurück (wenn es ein primitiver Wert ist) oder den String, den das `String`-Objekt umschließt. Sie hat die genau gleiche Implementierung wie {{jsxref("String.prototype.valueOf()")}}.

Die `toString()`-Methode erfordert, dass ihr `this`-Wert ein primitiver `String` oder ein Wrapper-Objekt ist. Bei anderen `this`-Werten löst sie einen {{jsxref("TypeError")}} aus, ohne zu versuchen, diese in String-Werte zu konvertieren.

Da `String` keine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)-Methode hat, ruft JavaScript automatisch die `toString()`-Methode auf, wenn ein `String`-Objekt in einem Kontext verwendet wird, der einen String erwartet, wie z.B. in einem [Template-String](/de/docs/Web/JavaScript/Reference/Template_literals). String-Primitivwerte konsultieren jedoch nicht die `toString()`-Methode, um in Strings [konvertiert zu werden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) — da sie bereits Strings sind, wird keine Umwandlung durchgeführt.

```js
String.prototype.toString = () => "Overridden";
console.log(`${"foo"}`); // "foo"
console.log(`${new String("foo")}`); // "Overridden"
```

## Beispiele

### Verwendung von toString()

Das folgende Beispiel zeigt den String-Wert eines {{jsxref("String")}}-Objekts:

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
