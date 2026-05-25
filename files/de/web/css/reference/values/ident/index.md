---
title: "`<ident>` CSS-Typ"
short-title: <ident>
slug: Web/CSS/Reference/Values/ident
l10n:
  sourceCommit: cad9096502d2a74b34a67377bbb0ac88fcfa58c2
---

Der **`<ident>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) bezeichnet eine beliebige unverkleidete Zeichenkette, die als {{Glossary("identifier", "Bezeichner")}} verwendet wird.

## Syntax

Ein CSS-Bezeichner besteht aus einem oder mehreren Zeichen, die alle der folgenden sein können:

- jedes {{Glossary("ASCII", "ASCII")}}-Zeichen im Bereich `A-Z` und `a-z`
- jede Dezimalziffer (`0` bis `9`)
- ein Bindestrich (`-`)
- ein Unterstrich (`_`)
- jedes andere {{Glossary("Unicode", "Unicode")}}-Zeichen `U+00A0` und höher (das heißt, jedes andere nicht-ASCII-Unicode-Zeichen)
- ein [escaped Zeichen](#zeichen_escapen)

Außerdem darf ein Bezeichner nicht mit einer unverkleideten Ziffer beginnen und nicht mit einem unverkleideten Bindestrich gefolgt von einer unverkleideten Ziffer beginnen.

Beachten Sie, dass `id1`, `Id1`, `iD1` und `ID1` alles verschiedene Bezeichner sind, da sie [case-sensitive](https://en.wikipedia.org/wiki/Case_sensitivity) sind. Da es jedoch mehrere Möglichkeiten gibt, ein Zeichen zu escapen, sind `toto\?` und `toto\3F` dieselben Bezeichner.

### Zeichen escapen

{{Glossary("Escape_character", "Ein Zeichen escapen")}} bedeutet, es auf eine Weise darzustellen, die seine Interpretation durch ein Softwaresystem ändert. In CSS kann ein Zeichen durch Hinzufügen eines Backslashes (`\`) vor dem Zeichen escaped werden. Jedes Zeichen, außer den hexadezimalen Ziffern `0-9`, `a-f` und `A-F`, kann auf diese Weise escaped werden. Zum Beispiel kann `&` als `\&` escaped werden.

Sie können auch ein beliebiges Zeichen mit einem Backslash gefolgt von dem {{Glossary("Unicode", "Unicode")}}-{{Glossary("code_point", "Codepunkt")}} des Zeichens, dargestellt durch ein bis sechs hexadezimale Ziffern, escapen. Zum Beispiel kann `&` als `\26` escaped werden. In dieser Verwendung, wenn das escapte Zeichen von einer hexadezimalen Ziffer gefolgt wird, sollten Sie eines der folgenden tun:

- Setzen Sie ein Leer- oder anderes Whitespace-Zeichen nach dem Unicode-Codepunkt.
- Geben Sie den vollständigen sechsstelligen Unicode-Codepunkt des escapten Zeichens an.

Zum Beispiel kann die Zeichenkette `&123` als `\26 123` (mit einem Leerzeichen) oder `\000026123` (mit dem sechsstelligen Unicode-Codepunkt für `&`) escaped werden, um sicherzustellen, dass `123` nicht als Teil des Escape-Musters betrachtet wird.

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

_Da dieser Typ kein echter Typ ist, sondern ein Convenience-Typ, der zur Vereinfachung der Definition anderer CSS-Syntax verwendet wird, gibt es als solcher keine Browser-Kompatibilitätsinformationen._

## Siehe auch

- [&lt;custom-ident&gt;](/de/docs/Web/CSS/Reference/Values/custom-ident)
- [&lt;dashed-ident&gt;](/de/docs/Web/CSS/Reference/Values/dashed-ident)
