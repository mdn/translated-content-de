---
title: RegExp.prototype.source
short-title: source
slug: Web/JavaScript/Reference/Global_Objects/RegExp/source
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`source`** Zugriffs-Eigenschaft von {{jsxref("RegExp")}}-Instanzen gibt eine Zeichenkette zurück, die den Quelltext dieses regulären Ausdrucks enthält, ohne die beiden Schrägstriche auf beiden Seiten oder irgendwelche Flags.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.source")}}

```js interactive-example
const regex1 = /fooBar/gi;

console.log(regex1.source);
// Expected output: "fooBar"

console.log(new RegExp().source);
// Expected output: "(?:)"

console.log(new RegExp("\n").source === "\\n");
// Expected output: true (starting with ES5)
// Due to escaping
```

## Beschreibung

Konzeptionell ist die `source`-Eigenschaft der Text zwischen den beiden Schrägstrichen im regulären Ausdrucks-Literal. Die Sprache erfordert, dass die zurückgegebene Zeichenkette richtig escaped ist, so dass, wenn die `source` mit einem Schrägstrich an beiden Enden verkettet wird, ein parsbares Regex-Literal gebildet wird. Zum Beispiel ist für `new RegExp("/")` die `source` `\\/`, weil, wenn es `/` erzeugt, das resultierende Literal `///` wird, was ein Zeilenkommentar ist. Ebenso werden alle [Zeilenabschlusszeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) escaped, weil Zeilenabschluss-Zeichen das Regex-Literal aufbrechen würden. Für andere Zeichen gibt es keine Anforderung, solange das Ergebnis parsbar ist. Für leere reguläre Ausdrücke wird die Zeichenkette `(?:)` zurückgegeben.

## Beispiele

### Verwendung von source

```js
const regex = /fooBar/gi;

console.log(regex.source); // "fooBar", doesn't contain /.../ and "gi".
```

### Leere reguläre Ausdrücke und Escaping

```js
new RegExp().source; // "(?:)"

new RegExp("\n").source === "\\n"; // true, starting with ES5
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("RegExp.prototype.flags")}}
