---
title: RegExp.prototype.source
slug: Web/JavaScript/Reference/Global_Objects/RegExp/source
l10n:
  sourceCommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{JSRef}}

Die **`source`** Zugriffs-Eigenschaft von {{jsxref("RegExp")}} Instanzen gibt einen String zurück, der den Quelltext des regulären Ausdrucks enthält, ohne die beiden Schrägstriche auf beiden Seiten oder irgendwelche Flags.

{{EmbedInteractiveExample("pages/js/regexp-prototype-source.html")}}

## Beschreibung

Konzeptionell ist die `source`-Eigenschaft der Text zwischen den beiden Schrägstrichen im regulären Ausdrucksliteral. Die Sprache erfordert, dass der zurückgegebene String ordnungsgemäß maskiert ist, sodass, wenn `source` mit einem Schrägstrich an beiden Enden verkettet wird, ein auswertbares Regex-Literal gebildet wird. Zum Beispiel für `new RegExp("/")` ist die `source` `\\/`, da, wenn es `/` ergibt, das resultierende Literal `///` wird, welches ein Zeilenkommentar ist. Ebenso werden alle [Zeilentrenner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) maskiert, da Zeilentrenner-_Zeichen_ das Regex-Literal unterbrechen würden. Es gibt keine Anforderung für andere Zeichen, solange das Ergebnis auswertbar ist. Für leere reguläre Ausdrücke wird der String `(?:)` zurückgegeben.

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
