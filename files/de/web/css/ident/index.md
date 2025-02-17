---
title: <ident>
slug: Web/CSS/ident
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Der **`<ident>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) bezeichnet eine beliebige Zeichenkette, die als {{Glossary("identifier", "Identifier")}} verwendet wird.

## Syntax

Ein CSS-Identifier besteht aus einem oder mehreren Zeichen, die aus den folgenden bestehen können:

- einem beliebigen {{Glossary("ASCII", "ASCII")}}-Zeichen im Bereich `A-Z` und `a-z`
- einer beliebigen Dezimalziffer (`0` bis `9`)
- einem Bindestrich (`-`)
- einem Unterstrich (`_`)
- einem weiteren {{Glossary("Unicode", "Unicode")}}-Zeichen `U+00A0` und höher (d.h. jedes andere Unicode-Zeichen außerhalb des ASCII-Bereichs)
- einem [escaped character](#zeichen_escapen)

Zusätzlich darf ein Identifier nicht mit einer nicht-escaped Zahl beginnen und auch nicht mit einem nicht-escaped Bindestrich, gefolgt von einer nicht-escaped Zahl.

Beachten Sie, dass `id1`, `Id1`, `iD1` und `ID1` unterschiedliche Identifier sind, da sie [case-sensitive](https://en.wikipedia.org/wiki/Case_sensitivity) sind. Andererseits gibt es verschiedene Möglichkeiten, ein Zeichen zu escapen, daher sind `toto\?` und `toto\3F` identische Identifier.

### Zeichen escapen

{{Glossary("Escape_character", "Ein Zeichen zu escapen")}} bedeutet, es auf eine Weise darzustellen, die ändert, wie es von einem Softwaresystem interpretiert wird. In CSS können Sie ein Zeichen durch Hinzufügen eines Backslashs (`\`) vor dem Zeichen escapen. Jedes Zeichen, außer den hexadezimalen Ziffern `0-9`, `a-f` und `A-F`, kann so escapen werden. Zum Beispiel kann `&` als `\&` escapen werden.

Sie können auch ein beliebiges Zeichen mit einem Backslash gefolgt vom {{Glossary("Unicode", "Unicode")}}-{{Glossary("code_point", "Codepunkt")}} des Zeichens escapen, der durch eine bis sechs hexadezimale Ziffern dargestellt wird. Zum Beispiel kann `&` als `\26` escapen werden. In diesem Fall, wenn das escapte Zeichen von einer hexadezimalen Ziffer gefolgt wird, tun Sie eines der folgenden Dinge:

- Fügen Sie ein Leerzeichen oder ein anderes Leerzeichen-Zeichen hinter dem Unicode-Codepunkt ein.
- Geben Sie den vollständigen sechsstelligen Unicode-Codepunkt des zu escapenden Zeichens an.

Zum Beispiel kann der String `&123` als `\26 123` (mit einem Leerzeichen) oder `\000026123` (mit dem sechsstelligen Unicode-Codepunkt für `&`) escapen werden, um sicherzustellen, dass `123` nicht als Teil des Escape-Musters interpretiert wird.

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

_Da dieser Typ kein realer Typ ist, sondern ein Hilfstyp, der verwendet wird, um die Definition anderer CSS-Syntax zu vereinfachen, gibt es keine spezifischen Informationen zur Browser-Kompatibilität._

## Siehe auch

- [&lt;custom-ident&gt;](/de/docs/Web/CSS/custom-ident)
- [&lt;dashed-ident&gt;](/de/docs/Web/CSS/dashed-ident)
