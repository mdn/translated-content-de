---
title: "@supports"
slug: Web/CSS/@supports
l10n:
  sourceCommit: d50c6b04f0e0cb20eca8a5f0e643e435ee8ac6ff
---

{{CSSRef}}

Die **`@supports`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rule) ermöglicht es Ihnen, CSS-Deklarationen anzugeben, die von der Unterstützung der CSS-Funktionen durch einen Browser abhängen.
Die Verwendung dieser at-rule wird üblicherweise als _Feature-Abfrage_ bezeichnet.
Die Regel muss auf der obersten Ebene Ihres Codes oder verschachtelt innerhalb einer anderen bedingungsabhängigen Gruppen-at-rule platziert werden.

{{InteractiveExample("CSS Demo: @supports", "tabbed-standard")}}

```css interactive-example
.flex-container > * {
  padding: 0.3em;
  list-style-type: none;
  text-shadow: 0 0 2px red;
  float: left;
}

@supports (display: flex) {
  .flex-container > * {
    text-shadow: 0 0 2px blue;
    float: none;
  }

  .flex-container {
    display: flex;
  }
}
```

```html interactive-example
<ul class="flex-container">
  <li><a href="#">Index</a></li>
  <li><a href="#">About me</a></li>
  <li><a href="#">Contact</a></li>
</ul>
```

In JavaScript kann auf `@supports` über die CSS-Objektmodell-Schnittstelle [`CSSSupportsRule`](/de/docs/Web/API/CSSSupportsRule) zugegriffen werden.

## Syntax

Die `@supports` at-rule besteht aus einem Anweisungsblock mit einer _supports-Bedingung._
Die supports-Bedingung ist eine Reihe von einem oder mehreren Namens-Werte-Paaren (z.B. `<property>: <value>`).

```css
@supports (<supports-condition>) {
  /* If the condition is true, use the CSS in this block. */
}
```

Die Bedingungen können durch Konjunktionen (`and`), Disjunktionen (`or`) und/oder Negationen (`not`) kombiniert werden.

```css
@supports (<supports-condition>) and (<supports-condition>) {
  /* If both conditions are true, use the CSS in this block. */
}
```

Die Priorität der Operatoren kann mit Klammern festgelegt werden.
Supports-Bedingungen können entweder eine `<property>: <value>` Deklarationssyntax oder eine `<function()>` Syntax verwenden.
Die folgenden Abschnitte beschreiben die Verwendung jedes Typs von supports-Bedingungen.

### Deklarationssyntax

Die Deklarationssyntax überprüft, ob ein Browser die angegebene `<property>: <value>` Deklaration unterstützt.
Die Deklaration muss von Klammern umgeben sein.
Das folgende Beispiel gibt wahr zurück, wenn der Browser den Ausdruck `transform-origin: 5% 5%` unterstützt:

```css
@supports (transform-origin: 5% 5%) {
}
```

### Funktionssyntax

Die Funktionssyntax überprüft, ob ein Browser Werte oder Ausdrücke innerhalb der Funktion unterstützt.
Die in der Funktionssyntax unterstützten Funktionen werden in den folgenden Abschnitten beschrieben.

#### `selector()`

Diese Funktion bewertet, ob ein Browser die angegebene Selektorsyntax unterstützt.
Das folgende Beispiel gibt wahr zurück und wendet den CSS-Stil an, wenn der Browser den [Kind-Kombinator](/de/docs/Web/CSS/Child_combinator) unterstützt:

```css
@supports selector(h2 > p) {
}
```

#### `font-tech()`

Diese Funktion überprüft, ob ein Browser die angegebene Schrifttechnologie für Layout und Rendering unterstützt.
Das folgende Beispiel gibt wahr zurück und wendet den CSS-Stil an, wenn der Browser die `COLRv1` Schrifttechnologie unterstützt:

```css
@supports font-tech(color-COLRv1) {
}
```

Die folgende Tabelle beschreibt die Schrifttechnologien (`<font-tech>`), einschließlich Farbschrifttechnologien (`<color-font-tech>`), Schriftfeature-Technologien (`<font-features-tech>`) und weitere verfügbare Schrifttechnologien, die mit der Funktion `font-tech()` abgefragt werden können:

| Technologie                    | Unterstützt                                                                                                       |
| :----------------------------- | :---------------------------------------------------------------------------------------------------------------- |
| **`<color-font-tech>`**        |                                                                                                                   |
| `color-colrv0`                 | Mehrfarbige Glyphen über COLR-Version 0-Tabelle                                                                   |
| `color-colrv1`                 | Mehrfarbige Glyphen über COLR-Version 1-Tabelle                                                                   |
| `color-svg`                    | SVG-mehrfarbige Tabellen                                                                                          |
| `color-sbix`                   | Standard-Bitmap-Grafiktabellen                                                                                    |
| `color-cbdt`                   | Farbbild-Datentabellen                                                                                            |
| **`<font-features-tech>`**     |                                                                                                                   |
| `features-opentype`            | OpenType `GSUB` und `GPOS` Tabellen                                                                               |
| `features-aat`                 | TrueType `morx` und `kerx` Tabellen                                                                               |
| `features-graphite`            | Graphite-Features, nämlich `Silf`, `Glat`, `Gloc`, `Feat` und `Sill` Tabellen                                     |
| **Andere `<font-tech>` Werte** |                                                                                                                   |
| `incremental-patch`            | Inkrementelles Schriftartladen mit der Patch-Subset-Methode                                                       |
| `incremental-range`            | Inkrementelles Schriftartladen mit der Bereichsanfrage-Methode                                                    |
| `incremental-auto`             | Inkrementelles Schriftartladen mit Methodenverhandlung                                                            |
| `variations`                   | Schriftvariationen in TrueType- und OpenType-Schriften, um die Schriftachse, das Gewicht, Glyphen usw. zu steuern |
| `palettes`                     | Schriftpaletten mittels `font-palette`, um eine von vielen Farbpaletten in der Schrift auszuwählen                |

#### `font-format()`

Diese Funktion überprüft, ob ein Browser das angegebene Schriftformat für Layout und Rendering unterstützt.
Das folgende Beispiel gibt wahr zurück und wendet den CSS-Stil an, wenn der Browser das `opentype` Schriftformat unterstützt:

```css
@supports font-format(opentype) {
}
```

Die folgende Tabelle beschreibt die verfügbaren Formate (`<font-format>` Werte), die mit dieser Funktion abgefragt werden können:

| Format              | Beschreibung                    | Dateiendungen   |
| :------------------ | :------------------------------ | :-------------- |
| `collection`        | OpenType-Sammlung               | `.otc`, `.ttc`  |
| `embedded-opentype` | Eingebettetes OpenType          | `.eot`          |
| `opentype`          | OpenType                        | `.ttf`, `.otf`  |
| `svg`               | SVG-Schrift (veraltet)          | `.svg`, `.svgz` |
| `truetype`          | TrueType                        | `.ttf`          |
| `woff`              | WOFF 1.0 (Web Open Font Format) | `.woff`         |
| `woff2`             | WOFF 2.0 (Web Open Font Format) | `.woff2`        |

### Der not-Operator

Der `not`-Operator steht vor einem Ausdruck und führt zur Negation des Ausdrucks.
Das folgende Beispiel gibt wahr zurück, wenn die {{CSSxRef("transform-origin")}}-Eigenschaft des Browsers `10em 10em 10em` als **ungültig** betrachtet:

```css
@supports not (transform-origin: 10em 10em 10em) {
}
```

Wie bei jedem Operator kann der `not`-Operator auf eine Deklaration beliebiger Komplexität angewendet werden.
Die folgenden Beispiele sind beide gültig:

```css
@supports not (not (transform-origin: 2px)) {
}
@supports (display: grid) and (not (display: inline-grid)) {
}
```

> [!NOTE]
> Es ist nicht erforderlich, den `not`-Operator auf der obersten Ebene in Klammern zu setzen.
> Um ihn mit anderen Operatoren wie `and` und `or` zu kombinieren, sind Klammern erforderlich.

### Der and-Operator

Der `and`-Operator erstellt einen neuen Ausdruck aus der Konjunktion von zwei kürzeren Ausdrücken. Er gibt nur dann wahr zurück, wenn **beide** kürzeren Ausdrücke ebenfalls wahr sind. Das folgende Beispiel gibt wahr zurück, wenn und nur wenn die beiden kürzeren Ausdrücke gleichzeitig wahr sind:

```css
@supports (display: table-cell) and (display: list-item) {
}
```

Mehrere Konjunktionen können nebeneinander gestellt werden, ohne dass zusätzliche Klammern erforderlich sind. Die folgenden sind beide gleichwertig:

```css
@supports (display: table-cell) and (display: list-item) and (display: contents) {
}
@supports (display: table-cell) and
  ((display: list-item) and (display: contents)) {
}
```

### Der or-Operator

Der `or`-Operator erstellt einen neuen Ausdruck aus der Disjunktion von zwei kürzeren Ausdrücken. Er gibt wahr zurück, wenn **einer oder beide** der kürzeren Ausdrücke ebenfalls wahr sind. Das folgende Beispiel gibt wahr zurück, wenn mindestens einer der beiden kürzeren Ausdrücke wahr ist:

```css
@supports (transform-style: preserve) or (-moz-transform-style: preserve) {
}
```

Mehrere Disjunktionen können nebeneinander gestellt werden, ohne dass zusätzliche Klammern erforderlich sind. Die folgenden sind beide gleichwertig:

```css
@supports (transform-style: preserve) or (-moz-transform-style: preserve) or (-webkit-transform-style: preserve) {}

@supports (transform-style: preserve-3d) or ((-moz-transform-style: preserve-3d) or (-webkit-transform-style: preserve-3d))) {}
```

> [!NOTE]
> Wenn sowohl `and`- als auch `or`-Operatoren verwendet werden, müssen Klammern verwendet werden, um die Reihenfolge festzulegen, in der sie angewendet werden. Andernfalls ist die Bedingung ungültig und die gesamte Regel wird ignoriert.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Testen der Unterstützung einer CSS-Eigenschaft

```css
@supports (animation-name: test) {
  /* CSS applied when animations are supported without a prefix */
  @keyframes {
    /* Other at-rules can be nested inside */
  }
}
```

### Testen der Unterstützung einer bestimmten CSS-Eigenschaft oder einer vorangestellten Version

```css
@supports (text-stroke: 10px) or (-webkit-text-stroke: 10px) {
  /* CSS applied when text-stroke, prefixed or not, is supported */
}
```

### Testen der Nichtunterstützung einer bestimmten CSS-Eigenschaft

```css
@supports not ((text-align-last: justify) or (-moz-text-align-last: justify)) {
  /* CSS to provide fallback alternative for text-align-last: justify */
}
```

### Testen der Unterstützung eines Selektors

CSS-Bedingungsregeln ermöglichen es, die Unterstützung eines Selektors wie {{cssxref(":has",":has()")}} zu testen.

```css
/* This rule won't be applied in browsers that don't support :has() */
ul:has(> li li) {
  /* CSS is applied when the :has(…) pseudo-class is supported */
}

@supports not selector(:has(a, b)) {
  /* Fallback for when :has() is unsupported */
  ul > li,
  ol > li {
    /* The above expanded for browsers that don't support :has(…) */
  }
}

/* Note: So far, there's no browser that supports the `of` argument of :nth-child(…) */
@supports selector(:nth-child(1n of a, b)) {
  /* This rule needs to be inside the @supports block, otherwise
     it will be partially applied in browsers which don't support
     the `of` argument of :nth-child(…) */
  :is(:nth-child(1n of ul, ol) a, details > summary) {
    /* CSS applied when the :is(…) selector and
       the `of` argument of :nth-child(…) are both supported */
  }
}
```

### Testen der Unterstützung einer Schrifttechnologie

Das folgende Beispiel wendet den CSS-Stil an, wenn der Browser die `COLRv1` Schrifttechnologie unterstützt:

```css
@import url("https://fonts.googleapis.com/css2?family=Bungee+Spice");

@supports font-tech(color-COLRv1) {
  font-family: "Bungee Spice";
}
```

Es ist auch möglich, die Unterstützung einer Schrifttechnologie zu testen, indem die `tech`-Funktion innerhalb der {{CSSxRef("@font-face")}} at-rule verwendet wird.
Wenn ein Browser die Schrifttechnologie nicht unterstützt, kann eine Ersatzschrift (`Bungee-fallback.otf`) verwendet werden.

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

Das folgende Beispiel wendet den CSS-Stil an, wenn der Browser das `woff2` Schriftformat unterstützt:

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
- [CSS at-rule Funktionen](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)
- [`CSSSupportsRule`](/de/docs/Web/API/CSSSupportsRule)
- [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static) Methode
