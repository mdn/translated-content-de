---
title: String.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/String/concat
l10n:
  sourceCommit: 4406757f6bb4404b5309756bac2acb994c169e40
---

{{JSRef}}

Die **`concat()`**-Methode von {{jsxref("String")}}-Werten verkettet die Zeichenfolgen-Argumente mit dieser Zeichenfolge und gibt eine neue Zeichenfolge zurück.

{{EmbedInteractiveExample("pages/js/string-concat.html")}}

## Syntax

```js-nolint
concat()
concat(str1)
concat(str1, str2)
concat(str1, str2, /* …, */ strN)
```

### Parameter

- `str1`, …, `strN`
  - : Eine oder mehrere Zeichenfolgen, die an `str` angehängt werden sollen.

### Rückgabewert

Eine neue Zeichenfolge, die den kombinierten Text der bereitgestellten Zeichenfolgen enthält.

## Beschreibung

Die `concat()`-Funktion verkettet die Zeichenfolgen-Argumente mit der aufrufenden Zeichenfolge und gibt eine neue Zeichenfolge zurück.

Wenn die Argumente nicht vom Typ Zeichenfolge sind, werden sie vor dem Verketten in Zeichenfolgenwerte umgewandelt.

Die `concat()`-Methode ist der [Addition/String-Verkettungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Addition) (`+`, `+=`) sehr ähnlich, außer dass `concat()` [seine Argumente direkt in Zeichenfolgen umwandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), während Addition ihre Operanden zuerst in primitive Typen umwandelt. Weitere Informationen finden Sie auf der Referenzseite für den [`+`-Operator](/de/docs/Web/JavaScript/Reference/Operators/Addition).

## Beispiele

### Verwendung von concat()

Das folgende Beispiel kombiniert Zeichenfolgen in eine neue Zeichenfolge.

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
