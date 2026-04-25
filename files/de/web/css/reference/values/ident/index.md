---
title: "`<ident>` CSS-Typ"
short-title: <ident>
slug: Web/CSS/Reference/Values/ident
l10n:
  sourceCommit: c88e03530319b73272fd4f9a9f6ebe878f026004
---

Der **`<ident>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) bezeichnet eine beliebige Zeichenkette, die als {{Glossary("identifier", "Identifier")}} verwendet wird.

## Syntax

Ein CSS-Identifikator besteht aus einem oder mehreren Zeichen, die folgende sein können:

- jedes {{Glossary("ASCII", "ASCII")}}-Zeichen im Bereich `A-Z` und `a-z`
- jede Dezimalziffer (`0` bis `9`)
- ein Bindestrich (`-`)
- ein Unterstrich (`_`)
- jedes andere {{Glossary("Unicode", "Unicode")}}-Zeichen `U+00A0` und höher (also jedes andere nicht-ASCII-Unicode-Zeichen)
- ein [escaped Zeichen](#zeichen_escapen)

Zusätzlich darf ein Identifikator nicht mit einer nicht-escapten Ziffer beginnen und nicht mit einem nicht-escapten Bindestrich gefolgt von einer nicht-escapten Ziffer beginnen.

Beachten Sie, dass `id1`, `Id1`, `iD1` und `ID1` verschiedene Identifikatoren sind, weil sie [case-sensitive](https://en.wikipedia.org/wiki/Case_sensitivity) sind. Andererseits, da es mehrere Möglichkeiten gibt, ein Zeichen zu escapen, sind `toto\?` und `toto\3F` die gleichen Identifikatoren.

### Zeichen escapen

{{Glossary("Escape_character", "Ein Zeichen escapen")}} bedeutet, es in einer Weise darzustellen, die verändert, wie es von einem Softwaresystem interpretiert wird. In CSS können Sie ein Zeichen escapen, indem Sie einen Backslash (`\`) vor das Zeichen setzen. Jedes Zeichen außer den hexadezimalen Ziffern `0-9`, `a-f` und `A-F` kann auf diese Weise escapt werden. Zum Beispiel kann `&` als `\&` escapt werden.

Sie können auch jedes Zeichen mit einem Backslash gefolgt von dem {{Glossary("Unicode", "Unicode")}}-{{Glossary("code_point", "Codepunkt")}} des Zeichens, dargestellt durch eine bis sechs hexadezimale Ziffern, escapen. Zum Beispiel kann `&` als `\26` escapt werden. Bei dieser Verwendung, wenn das escapte Zeichen von einer hexadezimalen Ziffer gefolgt wird, sollten Sie eines der folgenden tun:

- Platzieren Sie ein Leerzeichen oder ein anderes Leerzeichen nach dem Unicode-Codepunkt.
- Geben Sie den vollständigen sechsstelligen Unicode-Codepunkt des escapt werdenden Zeichens an.

Zum Beispiel kann die Zeichenkette `&123` als `\26 123` (mit einem Leerzeichen) oder `\000026123` (mit dem sechsstelligen Unicode-Codepunkt für `&`) escapt werden, um sicherzustellen, dass `123` nicht als Teil des Escape-Musters betrachtet wird.

## Beispiele

### Gültige Identifikatoren

```plain example-good
nono79        /* A mix of alphanumeric characters and numbers */
ground-level  /* A mix of alphanumeric characters and a dash */
-test         /* A hyphen followed by alphanumeric characters */
--toto        /* A custom-property like identifier */
_internal     /* An underscore followed by alphanumeric characters */
\22 toto      /* An escaped character followed by alphanumeric characters */
\000022toto   /* Same as the previous example */
scooby\.doo   /* A correctly escaped period */
🔥123         /* A non-ASCII character followed by numbers */
```

### Ungültige Identifikatoren

```plain example-bad
34rem     /* Must not start with a decimal digit */
-12rad    /* Must not start with a dash followed by a decimal digit */
scooby.doo  /* ASCII characters apart from alphanumerics must be escaped */
'scoobyDoo' /* Treated as a string */
"scoobyDoo" /* Treated as a string */
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

_Da dieser Typ kein echter Typ, sondern ein Bequemlichkeitstyp ist, der verwendet wird, um die Definition anderer CSS-Syntax zu vereinfachen, gibt es keine Informationen zur Browser-Kompatibilität als solche._

## Siehe auch

- [&lt;custom-ident&gt;](/de/docs/Web/CSS/Reference/Values/custom-ident)
- [&lt;dashed-ident&gt;](/de/docs/Web/CSS/Reference/Values/dashed-ident)
