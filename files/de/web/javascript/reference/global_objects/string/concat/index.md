---
title: String.prototype.concat()
short-title: concat()
slug: Web/JavaScript/Reference/Global_Objects/String/concat
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`concat()`** Methode von {{jsxref("String")}} Werten verkettet die String-Argumente mit diesem String und gibt einen neuen String zurück.

{{InteractiveExample("JavaScript Demo: String.prototype.concat()")}}

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
  - : Ein oder mehrere Strings, die an `str` angehängt werden sollen. Obwohl technisch erlaubt, ist ein Aufruf von `String.prototype.concat()` ohne Argumente eine nutzlose Operation, da dies nicht zu einer beobachtbaren Kopie führt (wie {{jsxref("Array.prototype.concat()")}}), da Strings unveränderlich sind. Dies sollte nur geschehen, wenn Sie ein Array von Strings als Argumente verbreiten und dieses Array leer ist.

### Rückgabewert

Ein neuer String, der den kombinierten Text der bereitgestellten Strings enthält.

## Beschreibung

Die Funktion `concat()` verkettet die String-Argumente mit dem aufrufenden String und gibt einen neuen String zurück.

Falls die Argumente nicht vom Typ String sind, werden sie vor der Verkettung in String-Werte umgewandelt.

Die `concat()` Methode ist dem [Addition/String-Verkettungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Addition) (`+`, `+=`) sehr ähnlich, mit dem Unterschied, dass `concat()` [seine Argumente direkt in Strings umwandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), während Addition ihre Operanden zunächst in primitive Typen umwandelt. Für weitere Informationen, siehe die Referenzseite für den [`+` Operator](/de/docs/Web/JavaScript/Reference/Operators/Addition).

## Beispiele

### Verwendung von concat()

Im folgenden Beispiel werden Strings zu einem neuen String kombiniert.

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
