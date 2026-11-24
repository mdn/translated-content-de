---
title: RegExp.prototype.source
short-title: source
slug: Web/JavaScript/Reference/Global_Objects/RegExp/source
l10n:
  sourceCommit: f2385bc25e8dc4c774d50bcf7f97e420d59c7a1a
---

Die Accessor-Eigenschaft **`source`** von {{jsxref("RegExp")}}-Instanzen gibt einen String zurück, der den Quelltext dieses regulären Ausdrucks enthält, ohne die beiden umschließenden Schrägstriche oder Flags.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.source")}}

```js interactive-example
const regex = /fooBar/gi;

console.log(regex.source);
// Expected output: "fooBar"

console.log(new RegExp().source);
// Expected output: "(?:)"

console.log(new RegExp("\n").source === "\\n");
// Expected output: true (starting with ES5)
// Due to escaping
```

## Beschreibung

Konzeptionell ist die Eigenschaft `source` der Text zwischen den beiden Schrägstrichen im Literal des regulären Ausdrucks. Die Sprache schreibt vor, dass der zurückgegebene String korrekt mit Escape-Sequenzen versehen ist, sodass er zusammen mit einem Schrägstrich an jedem Ende ein gültiges Regex-Literal bildet. Bei `new RegExp("/")` ist `source` beispielsweise `\\/`, denn wenn stattdessen `/` zurückgegeben würde, ergäbe sich das Literal `///`, das als Zeilenkommentar interpretiert wird. Ebenso werden alle [Zeilentrennzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) mit Escape-Sequenzen versehen, da Zeilentrennzeichen als _Zeichen_ das Regex-Literal unterbrechen würden. Für andere Zeichen gibt es keine entsprechende Vorgabe, solange das Ergebnis geparst werden kann. Bei leeren regulären Ausdrücken wird der String `(?:)` zurückgegeben.

Aus Gründen der Abwärtskompatibilität gilt `RegExp.prototype.source === "(?:)"`, obwohl `RegExp.prototype` keine `RegExp`-Instanz ist.

## Beispiele

### source verwenden

```js
const regex = /fooBar/gi;

console.log(regex.source); // "fooBar", doesn't contain /.../ and "gi".
```

### Leere reguläre Ausdrücke und Escape-Sequenzen

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
