---
title: <ident>
slug: Web/CSS/Reference/Values/ident
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Der **`<ident>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) bezeichnet eine beliebige Zeichenfolge, die als {{Glossary("identifier", "Identifier")}} verwendet wird.

## Syntax

Ein CSS-Identifikator besteht aus einem oder mehreren Zeichen, die Folgendes sein können:

- ein beliebiges {{Glossary("ASCII", "ASCII")}}-Zeichen im Bereich `A-Z` und `a-z`
- eine Dezimalziffer (`0` bis `9`)
- ein Bindestrich (`-`)
- ein Unterstrich (`_`)
- jedes andere {{Glossary("Unicode", "Unicode")}}-Zeichen ab `U+00A0` (also jedes andere nicht-ASCII-Unicode-Zeichen)
- ein [escape-Zeichen](#escaping_characters)

Zusätzlich darf ein Identifikator nicht mit einer nicht-escaped Ziffer beginnen und nicht mit einem nicht-escaped Bindestrich gefolgt von einer nicht-escaped Ziffer.

Beachten Sie, dass `id1`, `Id1`, `iD1` und `ID1` alle unterschiedliche Identifikatoren sind, da sie [case-sensitive](https://en.wikipedia.org/wiki/Case_sensitivity) sind. Andererseits sind `toto\?` und `toto\3F` dieselben Identifikatoren, da es mehrere Möglichkeiten gibt, ein Zeichen zu escapen.

### Escaping characters

{{Glossary("Escape_character", "Das Escapen eines Zeichens")}} bedeutet, es auf eine Weise darzustellen, die ändert, wie es von einem Softwaresystem interpretiert wird. In CSS können Sie ein Zeichen escapen, indem Sie einen Backslash (`\`) vor das Zeichen setzen. Jedes Zeichen, außer den hexadezimalen Ziffern `0-9`, `a-f` und `A-F`, kann auf diese Weise escapt werden. Zum Beispiel kann `&` als `\&` escapt werden.

Sie können auch jedes Zeichen mit einem Backslash gefolgt vom {{Glossary("Unicode", "Unicode")}}-{{Glossary("code_point", "Codepunkt")}} des Zeichens escapen, der aus ein bis sechs hexadezimalen Ziffern besteht. Zum Beispiel kann `&` als `\26` escapt werden. In diesem Fall, wenn das escapte Zeichen von einer hexadezimalen Ziffer gefolgt wird, tun Sie eines der folgenden:

- Platzieren Sie ein Leerzeichen oder ein anderes Leerzeichenzeichen nach dem Unicode-Codepunkt.
- Geben Sie den vollständigen sechsstelligen Unicode-Codepunkt des zu escapenden Zeichens an.

Zum Beispiel kann der String `&123` als `\26 123` (mit einem Leerzeichen) oder `\000026123` (mit dem sechsstelligen Unicode-Codepunkt für `&`) escapt werden, um sicherzustellen, dass `123` nicht als Teil des Escape-Musters betrachtet wird.

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

_Da dieser Typ kein echter Typ, sondern ein Typ zur Vereinfachung der Definition anderer CSS-Syntax ist, gibt es keine Informationen zur Browser-Kompatibilität als solche._

## Siehe auch

- [&lt;custom-ident&gt;](/de/docs/Web/CSS/Reference/Values/custom-ident)
- [&lt;dashed-ident&gt;](/de/docs/Web/CSS/Reference/Values/dashed-ident)
