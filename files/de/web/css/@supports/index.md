---
title: "@supports"
slug: Web/CSS/@supports
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

---

title: "@supports"
slug: Web/CSS/@supports
page-type: css-at-rule
browser-compat: css.at-rules.supports
---

{{CSSRef}}

Die **`@supports`** [CSS](/de/docs/Web/CSS) [Regel](/de/docs/Web/CSS/At-rule) ermöglicht das Festlegen von CSS-Deklarationen, die von der Unterstützung bestimmter CSS-Funktionen im Browser abhängen. Diese At-Regel wird üblicherweise als _Feature-Abfrage_ bezeichnet. Die Regel muss auf höchster Ebene Ihres Codes oder verschachtelt in einer anderen bedingten Gruppenregel platziert werden.

{{EmbedInteractiveExample("pages/tabbed/at-rule-supports.html", "tabbed-standard")}}

In JavaScript kann `@supports` über die CSS-Objektmodell-Schnittstelle {{DOMxRef("CSSSupportsRule")}} aufgerufen werden.

## Syntax

Die `@supports` At-Regel besteht aus einem Block von Anweisungen mit einer _Supports-Bedingung._ Die Supports-Bedingung ist eine Menge von einem oder mehreren Name-Wert-Paaren (z.B. `<property>: <value>`).

```css
@supports (<supports-condition>) {
  /* Wenn die Bedingung zutrifft, wird das CSS in diesem Block verwendet. */
}
```

Die Bedingungen können durch Konjunktionen (`and`), Disjunktionen (`or`) und/oder Negationen (`not`) kombiniert werden.

```css
@supports (<supports-condition>) and (<supports-condition>) {
  /* Wenn beide Bedingungen zutreffen, wird das CSS in diesem Block verwendet. */
}
```

Die Vorrangregeln der Operatoren können mit Klammern definiert werden. Supports-Bedingungen können entweder eine `<property>: <value>` Deklarationssyntax oder eine `<function()>`-Syntax verwenden. Die folgenden Abschnitte beschreiben die Verwendung jedes Typs von Supports-Bedingung.

### Deklarationssyntax

Die Deklarationssyntax überprüft, ob ein Browser die angegebene `<property>: <value>` Deklaration unterstützt. Die Deklaration muss in Klammern stehen. Das folgende Beispiel gibt true zurück, wenn der Browser den Ausdruck `transform-origin: 5% 5%` unterstützt:

```css
@supports (transform-origin: 5% 5%) {
}
```

### Funktionssyntax

Die Funktionssyntax prüft, ob ein Browser Werte oder Ausdrücke innerhalb der Funktion unterstützt. Die in der Funktionssyntax unterstützten Funktionen werden in den folgenden Abschnitten beschrieben.

#### `selector()`

Diese Funktion bewertet, ob ein Browser die angegebene Selektorsyntax unterstützt. Das folgende Beispiel gibt true zurück und wendet den CSS-Stil an, wenn der Browser den [Child-Kombinator](/de/docs/Web/CSS/Child_combinator) unterstützt:

```css
@supports selector(h2 > p) {
}
```

#### `font-tech()`

Diese Funktion überprüft, ob ein Browser die angegebene Schrifttechnologie für Layout und Rendering unterstützt. Das folgende Beispiel gibt true zurück und wendet den CSS-Stil an, wenn der Browser die `COLRv1`-Schrifttechnologie unterstützt:

```css
@supports font-tech(color-COLRv1) {
}
```

Die folgende Tabelle beschreibt die Schrifttechnologien (`<font-tech>`), einschließlich Farbschrifttechnologien (`<color-font-tech>`), Schriftmerkmaltechnologien (`<font-features-tech>`) und andere verfügbare Schrifttechnologien, die mit der `font-tech()` Funktion abgefragt werden können:

| Technologie                    | Unterstützt                                                                                  |
| :----------------------------- | :------------------------------------------------------------------------------------------- |
| **`<color-font-tech>`**        |                                                                                               |
| `color-colrv0`                 | Mehrfarbige Glyphen über COLR Version 0 Tabelle                                              |
| `color-colrv1`                 | Mehrfarbige Glyphen über COLR Version 1 Tabelle                                              |
| `color-svg`                    | SVG mehrfarbige Tabellen                                                                     |
| `color-sbix`                   | Standard Bitmap Grafiktabellen                                                               |
| `color-cbdt`                   | Farbige Bitmap-Daten-Tabellen                                                                |
| **`<font-features-tech>`**     |                                                                                               |
| `features-opentype`            | OpenType `GSUB` und `GPOS` Tabellen                                                          |
| `features-aat`                 | TrueType `morx` und `kerx` Tabellen                                                          |
| `features-graphite`            | Graphite Features, nämlich `Silf`, `Glat`, `Gloc`, `Feat` und `Sill` Tabellen                |
| **Andere `<font-tech>` Werte** |                                                                                               |
| `incremental-patch`            | Inkrementelles Schriftladen unter Verwendung der Patch-Untersetzungsmethode                  |
| `incremental-range`            | Inkrementelles Schriftladen unter Verwendung der Bereichsanfrage-Methode                     |
| `incremental-auto`             | Inkrementelles Schriftladen durch Methodenverhandlung                                        |
| `variations`                   | Schriftvariationen in TrueType und OpenType Schriften zur Steuerung der Schriftenachse, Gewicht, Glyphen usw. |
| `palettes`                     | Schriftpaletten mittels `font-palette`, um eine von vielen Farbpaletten in der Schrift auszuwählen |

#### `font-format()`

Diese Funktion prüft, ob ein Browser das angegebene Schriftformat für Layout und Rendering unterstützt. Das folgende Beispiel gibt true zurück und wendet den CSS-Stil an, wenn der Browser das `opentype`-Schriftformat unterstützt:

```css
@supports font-format(opentype) {
}
```

Die folgende Tabelle beschreibt die verfügbaren Formate (`<font-format>` Werte), die mit dieser Funktion abgefragt werden können:

| Format              | Beschreibung                      | Dateiendungen    |
| :------------------ | :-------------------------------- | :-------------- |
| `collection`        | OpenType Collection               | `.otc`, `.ttc`  |
| `embedded-opentype` | Eingebettetes OpenType            | `.eot`          |
| `opentype`          | OpenType                          | `.ttf`, `.otf`  |
| `svg`               | SVG-Schrift (veraltet)            | `.svg`, `.svgz` |
| `truetype`          | TrueType                          | `.ttf`          |
| `woff`              | WOFF 1.0 (Web Open Font Format)   | `.woff`         |
| `woff2`             | WOFF 2.0 (Web Open Font Format)   | `.woff2`        |

### Der not-Operator

Der `not`-Operator geht einem Ausdruck voraus und negiert den Ausdruck. Das Folgende gibt true zurück, wenn die `{{CSSxRef("transform-origin")}}`-Eigenschaft des Browsers `10em 10em 10em` **als ungültig** betrachtet:

```css
@supports not (transform-origin: 10em 10em 10em) {
}
```

Wie bei jedem Operator kann der `not`-Operator auf eine Deklaration beliebiger Komplexität angewendet werden. Die folgenden Beispiele sind beide gültig:

```css
@supports not (not (transform-origin: 2px)) {
}
@supports (display: grid) and (not (display: inline-grid)) {
}
```

> [!NOTE]
> Es ist nicht erforderlich, den `not`-Operator auf der obersten Ebene zwischen zwei Klammern zu setzen. Um ihn mit anderen Operatoren wie `and` und `or` zu kombinieren, sind die Klammern erforderlich.

### Der and-Operator

Der `and`-Operator erstellt einen neuen Ausdruck durch die Verknüpfung zweier kürzerer Ausdrücke. Er gibt true zurück, nur wenn **beide** kürzeren Ausdrücke ebenfalls wahr sind. Das folgende Beispiel gibt true zurück, wenn und nur wenn beide kürzeren Ausdrücke gleichzeitig wahr sind:

```css
@supports (display: table-cell) and (display: list-item) {
}
```

Mehrere Konjunktionen können nebeneinander gestellt werden, ohne dass weitere Klammern erforderlich sind. Die folgenden sind beide gleichwertig:

```css
@supports (display: table-cell) and (display: list-item) and (display: contents) {
}
@supports (display: table-cell) and
  ((display: list-item) and (display: contents)) {
}
```

### Der or-Operator

Der `or`-Operator erstellt einen neuen Ausdruck durch die Disjunktion zweier kürzerer Ausdrücke. Er gibt true zurück, wenn **einer oder beide** der kürzeren Ausdrücke ebenfalls wahr sind. Das folgende Beispiel gibt true zurück, wenn mindestens einer der beiden kürzeren Ausdrücke wahr ist:

```css
@supports (transform-style: preserve) or (-moz-transform-style: preserve) {
}
```

Mehrere Disjunktionen können nebeneinander gestellt werden, ohne dass weitere Klammern erforderlich sind. Die folgenden sind beide gleichwertig:

```css
@supports (transform-style: preserve) or (-moz-transform-style: preserve) or (-webkit-transform-style: preserve) {}

@supports (transform-style: preserve-3d) or ((-moz-transform-style: preserve-3d) or (-webkit-transform-style: preserve-3d))) {}
```

> [!NOTE]
> Beim Verwenden von `and` und `or`-Operatoren müssen die Klammern verwendet werden, um die Reihenfolge ihrer Anwendung zu definieren. Andernfalls ist die Bedingung ungültig und die gesamte Regel wird ignoriert.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Testen der Unterstützung einer CSS-Eigenschaft

```css
@supports (animation-name: test) {
  /* CSS angewendet, wenn Animationen ohne Präfix unterstützt werden */
  @keyframes {
    /* Andere At-Regeln können verschachtelt werden */
  }
}
```

### Testen der Unterstützung einer gegebenen CSS-Eigenschaft oder einer Version mit Präfix

```css
@supports (text-stroke: 10px) or (-webkit-text-stroke: 10px) {
  /* CSS angewendet, wenn Textkontur, mit oder ohne Präfix, unterstützt wird */
}
```

### Testen der Nichtunterstützung einer bestimmten CSS-Eigenschaft

```css
@supports not ((text-align-last: justify) or (-moz-text-align-last: justify)) {
  /* CSS, um eine Fallback-Alternative für text-align-last: justify bereitzustellen */
}
```

### Testen der Unterstützung eines Selektors

CSS-bedingte Regeln bieten die Möglichkeit, die Unterstützung eines Selektors wie {{cssxref(":has",":has()")}} zu testen.

```css
/* Diese Regel wird in Browsern, die :has() nicht unterstützen, nicht angewendet */
ul:has(> li li) {
  /* CSS wird angewendet, wenn der :has(…) Pseudo-Klasse unterstützt wird */
}

@supports not selector(:has(a, b)) {
  /* Fallback für den Fall, dass :has() nicht unterstützt wird */
  ul > li,
  ol > li {
    /* Das obige für Browser erweitert, die :has(…) nicht unterstützen */
  }
}

/* Hinweis: Bisher gibt es keinen Browser, der das `of` Argument von :nth-child(…) unterstützt */
@supports selector(:nth-child(1n of a, b)) {
  /* Diese Regel muss innerhalb des @supports-Blocks stehen, andernfalls
     wird sie teilweise in Browsern angewendet, die das `of` Argument von :nth-child(…) nicht unterstützen */
  :is(:nth-child(1n of ul, ol) a, details > summary) {
    /* CSS wird angewendet, wenn sowohl der :is(…)-Selektor als auch 
       das `of` Argument von :nth-child(…) unterstützt werden */
  }
}
```

### Testen der Unterstützung einer Schrifttechnologie

Im folgenden Beispiel wird der CSS-Stil angewendet, wenn der Browser die `COLRv1` Schrifttechnologie unterstützt:

```css
@import url("https://fonts.googleapis.com/css2?family=Bungee+Spice");

@supports font-tech(color-COLRv1) {
  font-family: "Bungee Spice";
}
```

Es ist auch möglich, die Unterstützung einer Schrifttechnologie durch Verwendung der `tech` Funktion innerhalb der {{CSSxRef("@font-face")}} At-Regel zu testen. Wenn ein Browser die Schrifttechnologie nicht unterstützt, kann stattdessen ein Fallback-Font (`Bungee-fallback.otf`) verwendet werden.

```css
@font-face {
  font-family: "Bungee Spice";
  src:
    url("https://fonts.googleapis.com/css2?family=Bungee+Spice")
      tech(color-COLRv1),
    url("Bungee-fallback.otf") format("opentype");
}
```

### Testen der Unterstützung eines Schriftformats

Im folgenden Beispiel wird der CSS-Stil angewendet, wenn der Browser das `woff2` Schriftformat unterstützt:

```css
@supports font-format(woff2) {
  font-family: "Open Sans";
  src: url("open-sans.woff2") format("woff2");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- Die CSSOM-Klasse {{DOMxRef("CSSSupportsRule")}} und die {{DOMxref("CSS.supports_static", "CSS.supports()")}} Methode, die dieselbe Überprüfung über JavaScript ermöglicht.
