---
title: RegExp.prototype.source
slug: Web/JavaScript/Reference/Global_Objects/RegExp/source
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`source`**-Zugriffseigenschaft von {{jsxref("RegExp")}}-Instanzen gibt einen String zurück, der den Quelltext dieses regulären Ausdrucks enthält, ohne die beiden Schrägstriche auf beiden Seiten oder irgendwelche Flags.

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

Konzeptionell ist die `source`-Eigenschaft der Text zwischen den beiden Schrägstrichen im regulären Ausdrucksliteral. Die Sprache erfordert, dass der zurückgegebene String korrekt maskiert ist, sodass, wenn `source` mit einem Schrägstrich an beiden Enden verknüpft wird, ein parsierbares Regex-Literal entsteht. Zum Beispiel, für `new RegExp("/")`, ist die `source` `\\/`, weil, wenn es `/` erzeugt, das resultierende Literal `///` wird, was ein Zeilenkommentar ist. Ähnlich werden alle [Zeilentrennzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) maskiert, weil Zeilentrennzeichen-_Zeichen_ das Regex-Literal unterbrechen würden. Es gibt keine Anforderungen an andere Zeichen, solange das Ergebnis parsierbar ist. Für leere reguläre Ausdrücke wird der String `(?:)` zurückgegeben.

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
