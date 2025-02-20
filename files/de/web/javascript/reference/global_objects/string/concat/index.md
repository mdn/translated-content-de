---
title: String.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/String/concat
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`concat()`**-Methode von {{jsxref("String")}}-Werten verknüpft die übergebenen Zeichenfolgen mit der bestehenden Zeichenfolge und gibt eine neue Zeichenfolge zurück.

{{InteractiveExample("JavaScript Demo: String.concat()")}}

```js interactive-example
const str1 = "Hello";
const str2 = "World";

console.log(str1.concat(" ", str2));
// Expected output: "Hello World"

console.log(str2.concat(", ", str1));
// Expected output: "World, Hello"
```

## Syntax

```js-nolint
concat(str1)
concat(str1, str2)
concat(str1, str2, /* …, */ strN)
```

### Parameter

- `str1`, …, `strN`
  - : Eine oder mehrere Zeichenfolgen, die mit `str` verknüpft werden sollen. Obwohl technisch erlaubt, ist ein Aufruf von `String.prototype.concat()` ohne Argumente eine sinnlose Operation, da er nicht zu einer beobachtbaren Kopie führt (wie {{jsxref("Array.prototype.concat()")}}), da Zeichenfolgen unveränderlich sind. Dies sollte nur geschehen, wenn Sie ein [Array mit Zeichenfolgen aufspalten](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) und dieses Array zufällig leer ist.

### Rückgabewert

Eine neue Zeichenfolge, die den kombinierten Text der bereitgestellten Zeichenfolgen enthält.

## Beschreibung

Die Funktion `concat()` verknüpft die übergebenen Zeichenfolgen mit der aufrufenden Zeichenfolge und gibt eine neue Zeichenfolge zurück.

Wenn die Argumente nicht vom Typ `string` sind, werden sie vor dem Verknüpfen in Zeichenfolgen konvertiert.

Die Methode `concat()` ähnelt stark den [Additions-/Zeichenfolgenverkettungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Addition) (`+`, `+=`), außer dass `concat()` [seine Argumente direkt in Zeichenfolgen umwandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), während Addition die Operanden zuerst in primitive Werte umwandelt. Weitere Informationen finden Sie auf der Referenzseite zum [`+` Operator](/de/docs/Web/JavaScript/Reference/Operators/Addition).

## Beispiele

### Verwendung von concat()

Das folgende Beispiel kombiniert Zeichenfolgen zu einer neuen Zeichenfolge.

```js
const hello = "Hello, ";
console.log(hello.concat("Kevin", ". Have a nice day."));
// Hello, Kevin. Have a nice day.

const greetList = ["Hello", " ", "Venkat", "!"];
"".concat(...greetList); // "Hello Venkat!"

"".concat({}); // "[object Object]"
"".concat([]); // ""
"".concat(null); // "null"
"".concat(true); // "true"
"".concat(4, 5); // "45"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Array.prototype.concat()")}}
- [Addition (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Addition)
