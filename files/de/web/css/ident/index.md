---
title: <ident>
slug: Web/CSS/ident
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Der **`<ident>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types) bezeichnet eine beliebige Zeichenkette, die als {{Glossary("identifier", "Bezeichner")}} verwendet wird.

## Syntax

Ein CSS-Bezeichner besteht aus einem oder mehreren Zeichen, die aus den folgenden bestehen können:

- jedem {{Glossary("ASCII", "ASCII")}}-Zeichen in den Bereichen `A-Z` und `a-z`
- jeder Dezimalziffer (`0` bis `9`)
- einem Bindestrich (`-`)
- einem Unterstrich (`_`)
- jedem anderen {{Glossary("Unicode", "Unicode")}}-Zeichen `U+00A0` und höher (das heißt, jedem anderen Nicht-ASCII-Unicode-Zeichen)
- einem [entkommenen Zeichen](#zeichen_entkommen)

Zusätzlich darf ein Bezeichner nicht mit einer nicht-entkommenen Ziffer beginnen und nicht mit einem nicht-entkommenen Bindestrich gefolgt von einer nicht-entkommenen Ziffer beginnen.

Beachten Sie, dass `id1`, `Id1`, `iD1` und `ID1` unterschiedliche Bezeichner sind, da sie [groß-/klein-schreibungssensitiv](https://en.wikipedia.org/wiki/Case_sensitivity) sind. Andererseits sind `toto\?` und `toto\3F` identische Bezeichner, da es mehrere Möglichkeiten gibt, ein Zeichen zu entkommen.

### Zeichen entkommen

{{Glossary("Escape_character", "Ein Zeichen zu entkommen")}} bedeutet, es in einer Weise darzustellen, die seine Interpretation durch ein Softwaresystem verändert. In CSS können Sie ein Zeichen durch Hinzufügen eines Backslashes (`\`) vor dem Zeichen entkommen. Jedes Zeichen, außer den hexadezimalen Ziffern `0-9`, `a-f` und `A-F`, kann auf diese Weise entkommen werden. Zum Beispiel kann `&` als `\&` entkommen werden.

Sie können auch jedes Zeichen mit einem Backslash gefolgt vom {{Glossary("Unicode", "Unicode")}} {{Glossary("code_point", "Codepunkt")}} des Zeichens, dargestellt durch eine bis sechs hexadezimale Ziffern, entkommen. Zum Beispiel kann `&` als `\26` entkommen werden. In diesem Fall, wenn das entkommene Zeichen von einer hexadezimalen Ziffer gefolgt wird, tun Sie eines der folgenden:

- Platzieren Sie ein Leerzeichen oder ein anderes Leerzeichen nach dem Unicode-Codepunkt.
- Geben Sie den vollständigen sechsstelligen Unicode-Codepunkt des zu entkommenden Zeichens an.

Zum Beispiel kann die Zeichenfolge `&123` als `\26 123` (mit einem Leerzeichen) oder `\000026123` (mit dem sechsstelligen Unicode-Codepunkt für `&`) entkommen werden, um sicherzustellen, dass `123` nicht als Teil des Escape-Musters angesehen wird.

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

_Da dieser Typ kein echter Typ ist, sondern ein bequemer Typ, der zur Vereinfachung der Definition anderer CSS-Syntax verwendet wird, gibt es keine Browser-Kompatibilitätsinformationen in diesem Sinne._

## Siehe auch

- [&lt;custom-ident&gt;](/de/docs/Web/CSS/custom-ident)
- [&lt;dashed-ident&gt;](/de/docs/Web/CSS/dashed-ident)
