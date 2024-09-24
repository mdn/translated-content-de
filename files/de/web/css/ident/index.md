---
title: <ident>
slug: Web/CSS/ident
l10n:
  sourceCommit: bf156514caa958203725721346b2165c5382fb58
---

{{CSSRef}}

Der **`<ident>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) bezeichnet eine beliebige Zeichenfolge, die als {{glossary("Identifier")}} verwendet wird.

## Syntax

Ein CSS-Identifier besteht aus einem oder mehreren Zeichen, die wie folgt sein können:

- jedes {{glossary("ASCII")}}-Zeichen in den Bereichen `A-Z` und `a-z`
- jede Dezimalziffer (`0` bis `9`)
- ein Bindestrich (`-`)
- ein Unterstrich (`_`)
- jedes andere {{glossary("Unicode")}}-Zeichen `U+00A0` und höher (das heißt, jedes andere nicht-ASCII-Unicode-Zeichen)
- ein [entkommenes Zeichen](#entkommen_von_zeichen)

Zusätzlich darf ein Identifier nicht mit einer nicht entkommenen Ziffer beginnen und nicht mit einem nicht entkommenen Bindestrich gefolgt von einer nicht entkommenen Ziffer beginnen.

Bitte beachten Sie, dass `id1`, `Id1`, `iD1` und `ID1` alle unterschiedliche Identifier sind, da sie [case-sensitive](https://en.wikipedia.org/wiki/Case_sensitivity) sind. Andererseits, da es mehrere Möglichkeiten gibt, ein Zeichen zu entkommen, sind `toto\?` und `toto\3F` dieselben Identifier.

### Entkommen von Zeichen

Ein Zeichen zu entkommen bedeutet, es auf eine Weise darzustellen, die ändert, wie es von einem Softwaresystem interpretiert wird. In CSS können Sie ein Zeichen entkommen, indem Sie einen Rückwärtsschrägstrich (`\`) vor das Zeichen setzen. Jedes Zeichen außer den hexadezimalen Ziffern `0-9`, `a-f` und `A-F` kann auf diese Weise entkommen werden. Zum Beispiel kann `&` als `\&` entkommen werden.

Sie können auch jedes Zeichen mit einem Rückwärtsschrägstrich gefolgt vom Unicode-{{glossary("Codepunkt")}} des Zeichens, dargestellt durch ein bis sechs hexadezimale Ziffern, entkommen. Zum Beispiel kann `&` als `\26` entkommen werden. Wird in diesem Fall das entkommene Zeichen von einer hexadezimalen Ziffer gefolgt, tun Sie eines der Folgenden:

- Setzen Sie ein Leerzeichen oder ein anderes Leerzeichen nach dem Unicode-Codepunkt.
- Geben Sie den vollständigen sechsstelligen Unicode-Codepunkt des Zeichens an, das entkommen wird.

Zum Beispiel kann die Zeichenfolge `&123` als `\26 123` (mit einem Leerzeichen) oder `\000026123` (mit dem sechsstelligen Unicode-Codepunkt für `&`) entkommen werden, um sicherzustellen, dass `123` nicht als Teil des Escape-Musters angesehen wird.

## Beispiele

### Gültige Identifier

```plain example-good
nono79        /* Eine Mischung aus alphanumerischen Zeichen und Zahlen */
ground-level  /* Eine Mischung aus alphanumerischen Zeichen und einem Bindestrich */
-test         /* Ein Bindestrich gefolgt von alphanumerischen Zeichen */
--toto        /* Ein dem benutzerdefinierten Stil ähnlicher Identifier */
_internal     /* Ein Unterstrich gefolgt von alphanumerischen Zeichen */
\22 toto      /* Ein entkommenes Zeichen gefolgt von alphanumerischen Zeichen */
\000022toto   /* Dasselbe wie im vorherigen Beispiel */
bili\.bob     /* Ein korrekt entkommener Punkt */
🔥123         /* Ein nicht-ASCII-Zeichen gefolgt von Zahlen */
```

### Ungültige Identifier

```plain example-bad
34rem     /* Darf nicht mit einer Dezimalziffer beginnen */
-12rad    /* Darf nicht mit einem Bindestrich gefolgt von einer Dezimalziffer beginnen */
bili.bob  /* ASCII-Zeichen, die keine alphanumerischen Zeichen sind, müssen entkommen werden */
'bilibob' /* Wird als Zeichenfolge behandelt */
"bilibob" /* Wird als Zeichenfolge behandelt */
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

_Da dieser Typ kein echter Typ, sondern ein Komforttyp ist, der verwendet wird, um die Definition anderer CSS-Syntax zu vereinfachen, gibt es keine Browser-Kompatibilitätsinformationen als solche._

## Siehe auch

- [&lt;custom-ident&gt;](/de/docs/Web/CSS/custom-ident)
- [&lt;dashed-ident&gt;](/de/docs/Web/CSS/dashed-ident)
