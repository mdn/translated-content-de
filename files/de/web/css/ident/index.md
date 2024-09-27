---
title: <ident>
slug: Web/CSS/ident
l10n:
  sourceCommit: bf156514caa958203725721346b2165c5382fb58
---

{{CSSRef}}

Der **`<ident>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) bezeichnet eine beliebige Zeichenkette, die als [Kennung](/de/docs/Glossary/identifier) verwendet wird.

## Syntax

Ein CSS-Identifier besteht aus einem oder mehreren Zeichen, die aus den folgenden Optionen bestehen können:

- jedes [ASCII](/de/docs/Glossary/ASCII)-Zeichen in den Bereichen `A-Z` und `a-z`
- jede Dezimalziffer (`0` bis `9`)
- ein Bindestrich (`-`)
- ein Unterstrich (`_`)
- jedes andere [Unicode](/de/docs/Glossary/Unicode)-Zeichen `U+00A0` und höher (d.h. jedes andere nicht-ASCII-Unicode-Zeichen)
- ein [escaped character](#zeichen_escapen)

Zusätzlich darf ein Identifier nicht mit einer unescaped Ziffer beginnen und nicht mit einem unescaped Bindestrich gefolgt von einer unescaped Ziffer beginnen.

Beachten Sie, dass `id1`, `Id1`, `iD1` und `ID1` alle unterschiedliche Identifier sind, da sie [case-sensitive](https://de.wikipedia.org/wiki/Case_sensitivity) sind. Andererseits, da es mehrere Möglichkeiten gibt, ein Zeichen zu escapen, sind `toto\?` und `toto\3F` die gleichen Identifier.

### Zeichen escapen

Ein Zeichen zu escapen bedeutet, es so darzustellen, dass sich die Interpretation durch ein Softwaresystem ändert. In CSS können Sie ein Zeichen escapen, indem Sie einen Backslash (`\`) vor das Zeichen setzen. Jedes Zeichen, außer den hexadezimalen Ziffern `0-9`, `a-f` und `A-F`, kann auf diese Weise escapen werden. Zum Beispiel kann `&` als `\&` escapen werden.

Sie können auch jedes Zeichen mit einem Backslash gefolgt vom [Unicode](/de/docs/Glossary/Unicode) [Codepoint](/de/docs/Glossary/code_point) des Zeichens, dargestellt durch ein bis sechs hexadezimale Ziffern, escapen. Zum Beispiel kann `&` als `\26` escapen werden. In diesem Fall, wenn das escapte Zeichen von einer hexadezimalen Ziffer gefolgt wird, tun Sie eines der folgenden:

- Setzen Sie ein Leerzeichen oder ein anderes Trennzeichen nach dem Unicode-Codepunkt.
- Geben Sie den vollständigen sechsstelligen Unicode-Codepunkt des zu escapenden Zeichens an.

Zum Beispiel kann die Zeichenkette `&123` als `\26 123` (mit einem Leerzeichen) oder `\000026123` (mit dem sechsstelligen Unicode-Codepunkt für `&`) escapen werden, um sicherzustellen, dass `123` nicht als Teil des Escape-Musters betrachtet wird.

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

_Da dieser Typ kein echter Typ, sondern ein bequemer Typ zur Vereinfachung der Definition anderer CSS-Syntax ist, gibt es keine Informationen zur Browser-Kompatibilität._

## Siehe auch

- [&lt;custom-ident&gt;](/de/docs/Web/CSS/custom-ident)
- [&lt;dashed-ident&gt;](/de/docs/Web/CSS/dashed-ident)
