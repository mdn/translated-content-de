---
title: RegExp.prototype.source
short-title: source
slug: Web/JavaScript/Reference/Global_Objects/RegExp/source
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`source`** Accessor-Eigenschaft von {{jsxref("RegExp")}} Instanzen gibt einen String zurück, der den Quelltext dieses regulären Ausdrucks enthält, ohne die beiden Schrägstriche auf beiden Seiten oder irgendeine Flags.

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

Konzeptionell ist die `source`-Eigenschaft der Text zwischen den beiden Schrägstrichen im regulären Ausdruck Literal. Die Sprache verlangt, dass der zurückgegebene String ordnungsgemäß maskiert ist, sodass, wenn die `source` mit einem Schrägstrich an beiden Enden zusammengefügt wird, ein analysierbares Regex-Literal entsteht. Zum Beispiel, für `new RegExp("/")`, ist die `source` `\\/`, weil, wenn es `/` erzeugt, das resultierende Literal `///` wird, was ein Zeilenkommentar ist. Ebenso werden alle [Zeilentrenner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) maskiert, da Zeilentrenner-Zeichen das Regex-Literal unterbrechen würden. Es gibt keine Anforderungen für andere Zeichen, solange das Ergebnis analysierbar ist. Für leere reguläre Ausdrücke wird der String `(?:)` zurückgegeben.

## Beispiele

### Verwendung von source

```js
const regex = /fooBar/gi;

console.log(regex.source); // "fooBar", doesn't contain /.../ and "gi".
```

### Leere reguläre Ausdrücke und Maskierung

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
