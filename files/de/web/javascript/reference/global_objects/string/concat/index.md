---
title: String.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/String/concat
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`concat()`**-Methode von {{jsxref("String")}}-Werten verkettet die Zeichenfolgenargumente mit dieser Zeichenfolge und gibt eine neue Zeichenfolge zurück.

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
  - : Eine oder mehrere Zeichenfolgen, die an `str` angehängt werden sollen. Obwohl technisch erlaubt, ist das Aufrufen von `String.prototype.concat()` ohne Argumente eine unnötige Operation, da es nicht zu einem beobachtbaren Kopieren führt (wie bei {{jsxref("Array.prototype.concat()")}}), da Zeichenfolgen unveränderlich sind. Dies sollte nur geschehen, wenn Sie ein Array von Zeichenfolgen als Argumente [spreading](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) und dieses Array zufällig leer ist.

### Rückgabewert

Eine neue Zeichenfolge, die den kombinierten Text der bereitgestellten Zeichenfolgen enthält.

## Beschreibung

Die `concat()`-Funktion verkettet die Zeichenfolgenargumente mit der aufrufenden Zeichenfolge und gibt eine neue Zeichenfolge zurück.

Wenn die Argumente nicht vom Typ Zeichenfolge sind, werden sie vor dem Verkettungsprozess in Zeichenfolgen umgewandelt.

Die `concat()`-Methode ist der Verwendung der [Addition/Zeichenfolgenverkettungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Addition) (`+`, `+=`) sehr ähnlich, außer dass `concat()` [ihre Argumente direkt in Zeichenfolgen umwandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), während die Addition ihre Operanden zuerst in primitive Werte umwandelt. Weitere Informationen finden Sie auf der Referenzseite für den [`+`-Operator](/de/docs/Web/JavaScript/Reference/Operators/Addition).

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
