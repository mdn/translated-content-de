---
title: String.prototype.concat()
short-title: concat()
slug: Web/JavaScript/Reference/Global_Objects/String/concat
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`concat()`** Methode von {{jsxref("String")}} Werten verknüpft die Zeichenkettenargumente mit dieser Zeichenkette und gibt eine neue Zeichenkette zurück.

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
  - : Eine oder mehrere Zeichenketten, die an `str` angehängt werden. Obwohl technisch erlaubt, ist der Aufruf von `String.prototype.concat()` ohne Argumente eine nutzlose Operation, da sie nicht zu einer sichtbaren Kopie führt (wie {{jsxref("Array.prototype.concat()")}}), da Zeichenketten unveränderlich sind. Dies sollte nur passieren, wenn Sie ein Array von Zeichenketten als Argumente [spreaden](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) und dieses Array leer ist.

### Rückgabewert

Eine neue Zeichenkette, die den kombinierten Text der angegebenen Zeichenketten enthält.

## Beschreibung

Die `concat()` Funktion verknüpft die Zeichenkettenargumente mit der aufrufenden Zeichenkette und gibt eine neue Zeichenkette zurück.

Wenn die Argumente nicht vom Typ Zeichenkette sind, werden sie vor der Verkettung in Zeichenkettenwerte umgewandelt.

Die `concat()` Methode ähnelt stark den [Additions-/Zeichenkettenverkettungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Addition) (`+`, `+=`), außer dass `concat()` [seine Argumente direkt zu Zeichenketten erzwingt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), während die Addition ihre Operanden zuerst in Primitive umwandelt. Weitere Informationen finden Sie auf der Referenzseite für den [`+` Operator](/de/docs/Web/JavaScript/Reference/Operators/Addition).

## Beispiele

### Verwendung von concat()

Das folgende Beispiel kombiniert Zeichenketten zu einer neuen Zeichenkette.

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
