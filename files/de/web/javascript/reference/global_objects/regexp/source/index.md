---
title: RegExp.prototype.source
slug: Web/JavaScript/Reference/Global_Objects/RegExp/source
l10n:
  sourceCommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{JSRef}}

Die **`source`** Zugriffs-Eigenschaft von {{jsxref("RegExp")}} Instanzen gibt eine Zeichenkette zurück, die den Quelltext dieses regulären Ausdrucks enthält, ohne die beiden Schrägstriche auf beiden Seiten oder irgendwelche Flags.

{{EmbedInteractiveExample("pages/js/regexp-prototype-source.html")}}

## Beschreibung

Konzepterweise ist die `source` Eigenschaft der Text zwischen den beiden Schrägstrichen im regulären Ausdrucks-Literal. Die Sprache verlangt, dass die zurückgegebene Zeichenkette ordnungsgemäß maskiert ist, so dass, wenn die `source` am Ende mit einem Schrägstrich an beiden Enden verkettet wird, ein parsbares Regex-Literal ergibt. Zum Beispiel, für `new RegExp("/")`, ist die `source` `\\/`, weil wenn es `/` erzeugt, das resultierende Literal `///` wird, was ein Zeilenkommentar ist. Ebenso werden alle [Zeilenabschlusszeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) maskiert, da Zeilenabschluss _Zeichen_ das Regex-Literal aufbrechen würden. Es gibt keine Anforderung für andere Zeichen, solange das Ergebnis parsierbar ist. Für leere reguläre Ausdrücke wird die Zeichenkette `(?:)` zurückgegeben.

## Beispiele

### Verwendung von source

```js
const regex = /fooBar/gi;

console.log(regex.source); // "fooBar", enthält nicht /.../ und "gi".
```

### Leere reguläre Ausdrücke und Maskierung

```js
new RegExp().source; // "(?:)"

new RegExp("\n").source === "\\n"; // true, beginnend mit ES5
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("RegExp.prototype.flags")}}
