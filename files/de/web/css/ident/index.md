---
title: <ident>
slug: Web/CSS/ident
l10n:
  sourceCommit: bf156514caa958203725721346b2165c5382fb58
---

{{CSSRef}}

Der **`<ident>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) bezeichnet eine beliebige Zeichenfolge, die als [Identifier](/de/docs/Glossary/identifier) verwendet wird.

## Syntax

Ein CSS-Identifier besteht aus einem oder mehreren Zeichen, die Folgendes sein können:

- ein beliebiges [ASCII](/de/docs/Glossary/ASCII)-Zeichen im Bereich `A-Z` und `a-z`
- eine Dezimalziffer (`0` bis `9`)
- ein Bindestrich (`-`)
- ein Unterstrich (`_`)
- ein anderes [Unicode](/de/docs/Glossary/Unicode)-Zeichen `U+00A0` und höher (das heißt, jedes andere nicht-ASCII-Unicode-Zeichen)
- ein [escaped character](#zeichen_escapen)

Zusätzlich darf ein Identifier nicht mit einer nicht-escaped Ziffer beginnen und nicht mit einem nicht-escaped Bindestrich gefolgt von einer nicht-escaped Ziffer beginnen.

Beachten Sie, dass `id1`, `Id1`, `iD1` und `ID1` unterschiedliche Identifier sind, da sie [case-sensitive](https://de.wikipedia.org/wiki/Case_sensitivity) sind. Andererseits, da es mehrere Möglichkeiten gibt, ein Zeichen zu escapen, sind `toto\?` und `toto\3F` dieselben Identifier.

### Zeichen escapen

Ein Zeichen zu escapen bedeutet, es so darzustellen, dass sich ändert, wie es von einem Softwaresystem interpretiert wird. In CSS können Sie ein Zeichen escapen, indem Sie einen Backslash (`\`) vor das Zeichen setzen. Jedes Zeichen, außer den hexadezimalen Ziffern `0-9`, `a-f` und `A-F`, kann auf diese Weise escaped werden. Zum Beispiel kann `&` als `\&` escaped werden.

Sie können auch jedes Zeichen mit einem Backslash gefolgt vom Unicode-[Codepunkt](/de/docs/Glossary/code_point) des Zeichens, dargestellt durch ein bis sechs hexadezimale Ziffern, escapen. Zum Beispiel kann `&` als `\26` escaped werden. In diesem Fall, wenn das escaped Zeichen von einer hexadezimalen Ziffer gefolgt wird, tun Sie eines der Folgenden:

- Fügen Sie ein Leerzeichen oder ein anderes Leerzeichen nach dem Unicode-Codepunkt ein.
- Geben Sie den vollständigen sechsstelligen Unicode-Codepunkt des escapeten Zeichens an.

Zum Beispiel kann die Zeichenfolge `&123` als `\26 123` (mit einem Leerzeichen) oder `\000026123` (mit dem sechsstelligen Unicode-Codepunkt für `&`) escaped werden, um sicherzustellen, dass `123` nicht als Teil des Escape-Musters betrachtet wird.

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
bili\.bob     /* A correctly escaped period */
🔥123         /* A non-ASCII character followed by numbers */
```

### Ungültige Identifier

```plain example-bad
34rem     /* Must not start with a decimal digit */
-12rad    /* Must not start with a dash followed by a decimal digit */
bili.bob  /* ASCII characters apart from alphanumerics must be escaped */
'bilibob' /* Treated as a string */
"bilibob" /* Treated as a string */
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

_Da dieser Typ kein echter Typ ist, sondern ein Bequemlichkeitstyp zur Vereinfachung der Definition anderer CSS-Syntax, gibt es keine spezifischen Informationen zur Browser-Kompatibilität._

## Siehe auch

- [&lt;custom-ident&gt;](/de/docs/Web/CSS/custom-ident)
- [&lt;dashed-ident&gt;](/de/docs/Web/CSS/dashed-ident)
