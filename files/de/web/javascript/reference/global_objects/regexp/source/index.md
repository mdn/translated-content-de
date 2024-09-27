---
title: RegExp.prototype.source
slug: Web/JavaScript/Reference/Global_Objects/RegExp/source
l10n:
  sourceCommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{JSRef}}

Die **`source`** Accessor-Eigenschaft von {{jsxref("RegExp")}} Instanzen gibt einen String zurück, der den Quelltext dieses regulären Ausdrucks enthält, ohne die beiden Schrägstriche auf beiden Seiten oder irgendwelche Flags.

{{EmbedInteractiveExample("pages/js/regexp-prototype-source.html")}}

## Beschreibung

Konzepthafterweise ist die `source` Eigenschaft der Text zwischen den beiden Schrägstrichen im regulären Ausdrucksliteral. Die Sprache verlangt, dass der zurückgegebene String korrekt maskiert wird, sodass, wenn das `source` mit einem Schrägstrich auf beiden Enden verbunden wird, ein analysierbares Regex-Literal entsteht. Zum Beispiel ist für `new RegExp("/")` das `source` `\\/`, weil, wenn es `/` generiert, das resultierende Literal `///` wird, was einem Kommentar für die Zeile entspricht. Ebenso werden alle [Zeilenendzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) maskiert, weil Zeichen von Zeilenendzeichen das Regex-Literal zerbrechen würden. Es gibt keine Anforderung für andere Zeichen, solange das Ergebnis analysierbar ist. Für leere reguläre Ausdrücke wird der String `(?:)` zurückgegeben.

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
