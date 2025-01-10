---
title: <ident>
slug: Web/CSS/ident
l10n:
  sourceCommit: bd74b8a8222517dead9def675a499dcf1dc30328
---

{{CSSRef}}

Der **`<ident>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) bezeichnet eine beliebige Zeichenfolge, die als {{Glossary("identifier", "Bezeichner")}} verwendet wird.

## Syntax

Ein CSS-Bezeichner besteht aus einem oder mehreren Zeichen, die eines der folgenden sein können:

- beliebige {{Glossary("ASCII", "ASCII")}} Zeichen im Bereich `A-Z` und `a-z`
- beliebige Dezimalziffern (`0` bis `9`)
- ein Bindestrich (`-`)
- ein Unterstrich (`_`)
- jedes andere {{Glossary("Unicode", "Unicode")}} Zeichen ab `U+00A0` und höher (d. h. jedes andere nicht-ASCII-Unicode-Zeichen)
- ein [escaped character](#escaping_characters)

Darüber hinaus darf ein Bezeichner nicht mit einer nicht-escaped Ziffer beginnen und nicht mit einem nicht-escaped Bindestrich gefolgt von einer nicht-escaped Ziffer beginnen.

Beachten Sie, dass `id1`, `Id1`, `iD1` und `ID1` alle unterschiedliche Bezeichner sind, da sie [case-sensitive](https://en.wikipedia.org/wiki/Case_sensitivity) sind. Andererseits, da es mehrere Möglichkeiten gibt, ein Zeichen zu escapen, sind `toto\?` und `toto\3F` dieselben Bezeichner.

### Escaping characters

{{Glossary("Escape_character", "Ein Zeichen escapen")}} bedeutet, es in einer Weise darzustellen, die seine Interpretation durch ein Softwaresystem verändert. In CSS kann ein Zeichen durch Voranstellen eines Backslashes (`\`) escapt werden. Jedes Zeichen, außer den hexadezimalen Ziffern `0-9`, `a-f` und `A-F`, kann auf diese Weise escapt werden. Zum Beispiel kann `&` als `\&` escapt werden.

Sie können auch jedes Zeichen mit einem Backslash gefolgt vom {{Glossary("Unicode", "Unicode")}} {{Glossary("code_point", "code point")}} des Zeichens escapen, dargestellt durch ein bis sechs hexadezimale Ziffern. Zum Beispiel kann `&` als `\26` escapt werden. In diesem Fall, wenn das escapte Zeichen von einer hexadezimalen Ziffer gefolgt wird, führen Sie eine der folgenden Maßnahmen aus:

- Platzieren Sie ein Leerzeichen oder ein anderes Leerzeichenzeichen nach dem Unicode-Codepunkt.
- Geben Sie den vollständigen sechsstelligen Unicode-Codepunkt des escapten Zeichens an.

Zum Beispiel kann die Zeichenfolge `&123` als `\26 123` (mit einem Leerzeichen) oder `\000026123` (mit dem sechsstelligen Unicode-Codepunkt für `&`) escapt werden, um sicherzustellen, dass `123` nicht als Teil des Escape-Musters betrachtet wird.

## Beispiele

### Gültige Bezeichner

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

### Ungültige Bezeichner

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

_Da dieser Typ kein echter Typ ist, sondern ein Bequemlichkeitstyp, der zur Vereinfachung der Definition anderer CSS-Syntax verwendet wird, gibt es keine Browser-Kompatibilitätsinformationen als solche._

## Siehe auch

- [&lt;custom-ident&gt;](/de/docs/Web/CSS/custom-ident)
- [&lt;dashed-ident&gt;](/de/docs/Web/CSS/dashed-ident)
