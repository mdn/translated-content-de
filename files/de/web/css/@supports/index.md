---
title: "@supports"
slug: Web/CSS/@supports
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{CSSRef}}

Die **`@supports`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/At-rule) ermöglicht es Ihnen, CSS-Deklarationen zu spezifizieren, die von der Unterstützung von CSS-Funktionalitäten durch den Browser abhängen.
Die Nutzung dieser Regel wird üblicherweise als _Feature Query_ bezeichnet.
Die Regel muss entweder auf oberster Ebene Ihres Codes oder verschachtelt innerhalb einer anderen bedingten Gruppenregel platziert werden.

{{EmbedInteractiveExample("pages/tabbed/at-rule-supports.html", "tabbed-standard")}}

In JavaScript kann `@supports` über das CSS-Objektmodell-Interface [`CSSSupportsRule`](/de/docs/Web/API/CSSSupportsRule) genutzt werden.

## Syntax

Die `@supports` Regel besteht aus einem Block von Anweisungen mit einer _supports condition._
Die supports-Bedingung ist ein Satz von einem oder mehreren Name-Wert-Paaren (z.B. `<property>: <value>`).

Die Bedingungen können mittels Konjunktionen (`and`), Disjunktionen (`or`) und/oder Negationen (`not`) kombiniert werden.

Die Reihenfolge der Operatoren kann durch Klammern festgelegt werden.
Supports-Bedingungen können entweder eine `<property>: <value>` Deklarationssyntax oder eine `<function()>` Syntax verwenden.
In den folgenden Abschnitten wird die Verwendung jeder Art von supports-Bedingung beschrieben.

### Deklarationssyntax

Die Deklarationssyntax überprüft, ob ein Browser die angegebene `<property>: <value>` Deklaration unterstützt.
Die Deklaration muss von Klammern umgeben sein.
Das folgende Beispiel gibt true zurück, wenn der Browser den Ausdruck `transform-origin: 5% 5%` unterstützt:

### Funktionssyntax

Die Funktionssyntax überprüft, ob ein Browser Werte oder Ausdrücke innerhalb der Funktion unterstützt.
Die in der Funktionssyntax unterstützten Funktionen werden in den folgenden Abschnitten beschrieben.

#### `selector()`

Diese Funktion bewertet, ob ein Browser die angegebene Selektorsyntax unterstützt.
Das folgende Beispiel gibt true zurück und wendet den CSS-Stil an, wenn der Browser den [Kindkombinator](/de/docs/Web/CSS/Child_combinator) unterstützt:

#### `font-tech()`

Diese Funktion prüft, ob ein Browser die angegebene Schrifttechnologie für Layout und Rendering unterstützt.
Das folgende Beispiel gibt true zurück und wendet den CSS-Stil an, wenn der Browser die `COLRv1` Schrifttechnologie unterstützt:

Die folgende Tabelle beschreibt die Schrifttechnologien (`<font-tech>`), einschließlich Farb-Schrifttechnologien (`<color-font-tech>`), Schrift-Feature-Technologien (`<font-features-tech>`) und andere verfügbare Schrifttechnologien, die mit der `font-tech()` Funktion abgefragt werden können:

| Technologie                    | Unterstützt                                                                                                   |
| :----------------------------- | :------------------------------------------------------------------------------------------------------------ |
| **`<color-font-tech>`**        |                                                                                                               |
| `color-colrv0`                 | Mehrfarbige Glyphen über COLR Version 0 Tabelle                                                               |
| `color-colrv1`                 | Mehrfarbige Glyphen über COLR Version 1 Tabelle                                                               |
| `color-svg`                    | SVG-mehrfarbige Tabellen                                                                                      |
| `color-sbix`                   | Standard-Bitmap-Grafiktabellen                                                                                |
| `color-cbdt`                   | Farb-Bitmap-Datentabellen                                                                                     |
| **`<font-features-tech>`**     |                                                                                                               |
| `features-opentype`            | OpenType `GSUB` und `GPOS` Tabellen                                                                           |
| `features-aat`                 | TrueType `morx` und `kerx` Tabellen                                                                           |
| `features-graphite`            | Graphite-Features, nämlich `Silf`, `Glat`, `Gloc`, `Feat` und `Sill` Tabellen                                 |
| **Andere `<font-tech>` Werte** |                                                                                                               |
| `incremental-patch`            | Inkrementelles Schriftenladen mit der Patch-Subset-Methode                                                    |
| `incremental-range`            | Inkrementelles Schriftenladen mit der Bereichsanfragen-Methode                                                |
| `incremental-auto`             | Inkrementelles Schriftenladen mittels Methodenverhandlung                                                     |
| `variations`                   | Schriftvariationen in TrueType- und OpenType-Schriften zur Steuerung von Schriftachse, Gewicht, Glyphen, usw. |
| `palettes`                     | Schriftpaletten mit `font-palette` zur Auswahl einer von mehreren Farbpaletten in der Schrift                 |

#### `font-format()`

Diese Funktion überprüft, ob ein Browser das angegebene Schriftformat für Layout und Rendering unterstützt.
Das folgende Beispiel gibt true zurück und wendet den CSS-Stil an, wenn der Browser das `opentype` Schriftformat unterstützt:

Die folgende Tabelle beschreibt die verfügbaren Formate (`<font-format>` Werte), die mit dieser Funktion abgefragt werden können:

| Format              | Beschreibung                    | Dateierweiterungen |
| :------------------ | :------------------------------ | :----------------- |
| `collection`        | OpenType Collection             | `.otc`, `.ttc`     |
| `embedded-opentype` | Eingebettetes OpenType          | `.eot`             |
| `opentype`          | OpenType                        | `.ttf`, `.otf`     |
| `svg`               | SVG Font (veraltet)             | `.svg`, `.svgz`    |
| `truetype`          | TrueType                        | `.ttf`             |
| `woff`              | WOFF 1.0 (Web Open Font Format) | `.woff`            |
| `woff2`             | WOFF 2.0 (Web Open Font Format) | `.woff2`           |

### Der not-Operator

Der `not`-Operator steht vor einem Ausdruck und negiert das Ergebnis des Ausdrucks.
Das folgende Beispiel gibt true zurück, wenn die {{CSSxRef("transform-origin")}} Eigenschaft des Browsers `10em 10em 10em` als **ungültig** ansieht:

Der `not`-Operator kann wie jeder andere Operator auf Deklarationen beliebiger Komplexität angewendet werden.
Die folgenden Beispiele sind beide gültig:

> [!NOTE]
> Es ist nicht notwendig, den `not`-Operator auf oberster Ebene zwischen zwei Klammern zu setzen.
> Um ihn mit anderen Operatoren wie `and` und `or` zu kombinieren, sind die Klammern jedoch erforderlich.

### Der and-Operator

Der `and`-Operator erstellt einen neuen Ausdruck durch die Verknüpfung zweier kürzerer Ausdrücke. Er gibt nur dann true zurück, wenn **beide** der kürzeren Ausdrücke ebenfalls true sind. Das folgende Beispiel gibt true zurück, wenn und nur wenn die beiden kürzeren Ausdrücke gleichzeitig true sind:

Mehrere Konjunktionen können ohne weitere Klammern aneinander gereiht werden. Die folgenden Beispiele sind beide gleichwertig:

### Der or-Operator

Der `or`-Operator erstellt einen neuen Ausdruck durch die Disjunktion zweier kürzerer Ausdrücke. Er gibt true zurück, wenn **einer oder beide** der kürzeren Ausdrücke ebenfalls true sind. Das folgende Beispiel gibt true zurück, wenn mindestens einer der beiden kürzeren Ausdrücke true ist:

Mehrere Disjunktionen können ohne zusätzliche Klammern aneinander gereiht werden. Die folgenden Beispiele sind beide gleichwertig:

> [!NOTE]
> Bei gleichzeitiger Verwendung von `and`- und `or`-Operatoren müssen Klammern zur Definition der Anwendungsreihenfolge verwendet werden. Andernfalls ist die Bedingung ungültig und die gesamte Regel wird ignoriert.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Testen der Unterstützung einer CSS-Eigenschaft

### Testen der Unterstützung einer bestimmten CSS-Eigenschaft oder einer vorangestellten Version

### Testen der Nichtunterstützung einer bestimmten CSS-Eigenschaft

### Testen der Unterstützung eines Selektors

Bedingte CSS-Regeln ermöglichen das Testen der Unterstützung eines Selektors wie {{cssxref(":has",":has()")}}.

### Testen der Unterstützung einer Schrifttechnologie

Das folgende Beispiel wendet den CSS-Stil an, wenn der Browser die `COLRv1` Schrifttechnologie unterstützt:

Es ist auch möglich, die Unterstützung einer Schrifttechnologie durch die Verwendung der `tech` Funktion innerhalb der {{CSSxRef("@font-face")}} Regel zu testen.
Wenn ein Browser die Schrifttechnologie nicht unterstützt, kann eine Ersatzschrift (`Bungee-fallback.otf`) verwendet werden.

### Testen der Unterstützung eines Schriftformats

Das folgende Beispiel wendet den CSS-Stil an, wenn der Browser das `woff2` Schriftformat unterstützt:

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Verwendung von Feature Queries](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- Die CSSOM-Klasse [`CSSSupportsRule`](/de/docs/Web/API/CSSSupportsRule) und die Methode [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static), die es ermöglicht, dieselbe Überprüfung über JavaScript durchzuführen.
