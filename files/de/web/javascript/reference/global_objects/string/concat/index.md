---
title: String.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/String/concat
l10n:
  sourceCommit: c7ee557d776d91998eeec005b6c794f03d6079ad
---

{{JSRef}}

Die **`concat()`**-Methode von {{jsxref("String")}}-Werten verkettet die Zeichenfolgenargumente mit dieser Zeichenfolge und gibt eine neue Zeichenfolge zurück.

{{EmbedInteractiveExample("pages/js/string-concat.html")}}

## Syntax

```js-nolint
concat(str1)
concat(str1, str2)
concat(str1, str2, /* …, */ strN)
```

### Parameter

- `str1`, …, `strN`
  - : Eine oder mehrere Zeichenfolgen, die an `str` angehängt werden sollen. Obwohl technisch erlaubt, ist der Aufruf von `String.prototype.concat()` ohne Argumente eine sinnlose Operation, da keine beobachtbare Kopie entsteht (wie bei {{jsxref("Array.prototype.concat()")}}), da Zeichenfolgen unveränderlich sind. Dies sollte nur geschehen, wenn Sie ein Array von Zeichenfolgen als Argumente [spreizen](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), und dieses Array zufällig leer ist.

### Rückgabewert

Eine neue Zeichenfolge, die den kombinierten Text der angegebenen Zeichenfolgen enthält.

## Beschreibung

Die Funktion `concat()` verkettet die Zeichenfolgenargumente mit der aufrufenden Zeichenfolge und gibt eine neue Zeichenfolge zurück.

Wenn die Argumente nicht vom Typ Zeichenfolge sind, werden sie vor dem Verketten in Zeichenfolgenwerte umgewandelt.

Die `concat()`-Methode ist der [Additions-/Zeichenfolgenverkettungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Addition) (`+`, `+=`) sehr ähnlich, außer dass `concat()` [seine Argumente direkt in Zeichenfolgen umwandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), während die Addition ihre Operanden zuerst auf primitive Werte umsetzt. Weitere Informationen finden Sie auf der Referenzseite für den [`+`-Operator](/de/docs/Web/JavaScript/Reference/Operators/Addition).

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
