---
title: <ident>
slug: Web/CSS/ident
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{CSSRef}}

Der **`<ident>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) bezeichnet eine beliebige Zeichenkette, die als {{Glossary("identifier", "Identifier")}} verwendet wird.

## Syntax

Ein CSS-Identifikator besteht aus einem oder mehreren Zeichen, die aus folgenden Bestandteilen bestehen können:

- Alle {{Glossary("ASCII", "ASCII")}} Zeichen im Bereich `A-Z` und `a-z`
- Beliebige Dezimalziffern (`0` bis `9`)
- Ein Bindestrich (`-`)
- Ein Unterstrich (`_`)
- Alle anderen {{Glossary("Unicode", "Unicode")}} Zeichen `U+00A0` und höher (das heißt, alle anderen nicht-ASCII Unicode-Zeichen)
- Ein [escaped character](#zeichen_escapen)

Des Weiteren darf ein Identifikator nicht mit einer unescaped Ziffer beginnen und nicht mit einem unescaped Bindestrich gefolgt von einer unescaped Ziffer beginnen.

Beachten Sie, dass `id1`, `Id1`, `iD1` und `ID1` alle unterschiedliche Identifikatoren sind, da sie [case-sensitive](https://en.wikipedia.org/wiki/Case_sensitivity) sind. Andererseits sind `toto\?` und `toto\3F` aufgrund der verschiedenen Möglichkeiten, ein Zeichen zu escapen, gleiche Identifikatoren.

### Zeichen escapen

Das Escapen eines Zeichens bedeutet, es so darzustellen, dass seine Interpretation durch ein Softwaresystem verändert wird. In CSS können Sie ein Zeichen escapen, indem Sie einen Backslash (`\`) vor das Zeichen setzen. Jedes Zeichen, außer den hexadezimalen Ziffern `0-9`, `a-f` und `A-F`, kann auf diese Weise escaped werden. Beispielsweise kann `&` als `\&` escaped werden.

Sie können auch jedes Zeichen mit einem Backslash gefolgt von dem Unicode-{{Glossary("code_point", "code point")}} des Zeichens, dargestellt durch eins bis sechs hexadezimale Ziffern, escapen. Zum Beispiel kann `&` als `\26` escaped werden. In diesem Fall, wenn dem escaped Zeichen eine hexadezimale Ziffer folgt, machen Sie eines der Folgenden:

- Setzen Sie ein Leerzeichen oder ein anderes Leerzeichenzeichen nach dem Unicode-Codepunkt.
- Geben Sie den vollständigen sechsstelligen Unicode-Codepunkt des zu escapenden Zeichens an.

Zum Beispiel kann die Zeichenkette `&123` als `\26 123` (mit Leerzeichen) oder `\000026123` (mit dem sechsstelligen Unicode-Codepunkt für `&`) escaped werden, um sicherzustellen, dass `123` nicht als Teil des Escape-Musters betrachtet wird.

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

_Da dieser Typ kein echter Typ ist, sondern ein Hilfstyp, der zur Vereinfachung der Definition anderer CSS-Syntax verwendet wird, gibt es keine spezifischen Informationen zur Browser-Kompatibilität._

## Siehe auch

- [&lt;custom-ident&gt;](/de/docs/Web/CSS/custom-ident)
- [&lt;dashed-ident&gt;](/de/docs/Web/CSS/dashed-ident)
