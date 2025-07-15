---
title: <ident>
slug: Web/CSS/ident
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`<ident>`** [CSS](/de/docs/Web/CSS)-[Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) bezeichnet eine beliebige Zeichenkette, die als {{Glossary("identifier", "Identifier")}} verwendet wird.

## Syntax

Ein CSS-Identifier besteht aus einem oder mehreren Zeichen, die folgendes umfassen können:

- jedes {{Glossary("ASCII", "ASCII")}}-Zeichen im Bereich `A-Z` und `a-z`
- jede Dezimalziffer (`0` bis `9`)
- ein Bindestrich (`-`)
- ein Unterstrich (`_`)
- jedes andere {{Glossary("Unicode", "Unicode")}}-Zeichen `U+00A0` und höher (das heißt, jedes andere nicht-ASCII Unicode-Zeichen)
- ein [escaped character](#escaping_characters)

Zusätzlich darf ein Identifier nicht mit einer nicht-escaped Ziffer beginnen und nicht mit einem nicht-escaped Bindestrich gefolgt von einer nicht-escaped Ziffer starten.

Beachten Sie, dass `id1`, `Id1`, `iD1` und `ID1` alle unterschiedliche Identifier sind, da sie [case-sensitive](https://en.wikipedia.org/wiki/Case_sensitivity) sind. Andererseits, da es mehrere Möglichkeiten gibt, ein Zeichen zu escapen, sind `toto\?` und `toto\3F` die gleichen Identifier.

### Escaping characters

{{Glossary("Escape_character", "Escapen eines Zeichens")}} bedeutet, es so darzustellen, dass seine Interpretation durch ein Softwaresystem verändert wird. In CSS können Sie ein Zeichen escapen, indem Sie einen Backslash (`\`) vor das Zeichen setzen. Jedes Zeichen, außer den hexadezimalen Ziffern `0-9`, `a-f` und `A-F`, kann auf diese Weise escaped werden. Zum Beispiel kann `&` als `\&` escaped werden.

Sie können auch jedes Zeichen mit einem Backslash gefolgt vom {{Glossary("Unicode", "Unicode")}}-{{Glossary("code_point", "Codepunkt")}} des Zeichens, dargestellt durch ein bis sechs hexadezimale Ziffern, escapen. Zum Beispiel kann `&` als `\26` escaped werden. Bei dieser Verwendung, wenn das escaped Zeichen von einer hexadezimalen Ziffer gefolgt wird, können Sie Folgendes tun:

- Platzieren Sie ein Leerzeichen oder ein anderes Leerzeichenzeichen nach dem Unicode-Codepunkt.
- Geben Sie den vollständigen sechsstelligen Unicode-Codepunkt des zu escapenden Zeichens an.

Zum Beispiel kann der String `&123` als `\26 123` (mit einem Leerzeichen) oder `\000026123` (mit dem sechsstelligen Unicode-Codepunkt für `&`) escaped werden, um sicherzustellen, dass `123` nicht als Teil des Escape-Musters betrachtet wird.

## Beispiele

### Gültige Identifier

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

### Ungültige Identifier

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

_Da dieser Typ kein realer Typ ist, sondern ein Bequemlichkeitstyp zur Vereinfachung der Definition anderer CSS-Syntax, gibt es keine Browser-Kompatibilitätsinformationen in diesem Sinne._

## Siehe auch

- [&lt;custom-ident&gt;](/de/docs/Web/CSS/custom-ident)
- [&lt;dashed-ident&gt;](/de/docs/Web/CSS/dashed-ident)
