---
title: "@supports"
slug: Web/CSS/@supports
l10n:
  sourceCommit: 478517351c5aa97f8b878228da3b3a9b0fb90371
---

{{CSSRef}}

Die **`@supports`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) ermöglicht es Ihnen, CSS-Deklarationen anzugeben, die von der Unterstützung einer bestimmten CSS-Funktion durch den Browser abhängen. Die Verwendung dieser At-Regel wird üblicherweise als _Feature Query_ bezeichnet. Die Regel muss an der obersten Ebene Ihres Codes oder verschachtelt innerhalb einer anderen konditionalen Gruppenregel platziert werden.

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

```css
@supports (<supports-condition>) {
  /* If the condition is true, use the CSS in this block. */
}

@supports (<supports-condition>) and (<supports-condition>) {
  /* If both conditions are true, use the CSS in this block. */
}
```

Die `@supports` At-Regel besteht aus einem Block von Anweisungen mit einer _supports-Bedingung_. Die Bedingungen können durch Konjunktionen (`and`), Disjunktionen (`or`) und/oder Negationen (`not`) kombiniert werden. Die Präzedenz der Operatoren kann mit Klammern definiert werden.

Supports-Bedingungen können entweder eine `<property>: <value>` Deklarationssyntax oder eine `<function()>` Syntax verwenden. Die folgenden Abschnitte beschreiben die Verwendung der einzelnen Typen von Supports-Bedingungen.

### Deklarationssyntax

Die Deklarationssyntax prüft, ob ein Browser die angegebene `<property>: <value>` Deklaration unterstützt. Die Deklaration muss von Klammern umgeben sein. Das folgende Beispiel gibt true zurück, wenn der Browser den Ausdruck `transform-origin: 5% 5%` unterstützt:

```css
@supports (transform-origin: 5% 5%) {
}
```

### Funktionssyntax

Die Funktionssyntax prüft, ob ein Browser Werte oder Ausdrücke innerhalb der Funktion unterstützt. Die in der Funktionssyntax unterstützen Funktionen sind in den folgenden Abschnitten beschrieben.

#### `selector()`

Diese Funktion überprüft, ob ein Browser die angegebene Selektorsyntax unterstützt. Das folgende Beispiel gibt true zurück und wendet den CSS-Stil an, wenn der Browser den [Kind-Kombinator](/de/docs/Web/CSS/Child_combinator) unterstützt:

```css
@supports selector(h2 > p) {
}
```

#### `font-tech()`

Diese Funktion prüft, ob ein Browser die angegebene Fonttechnologie für Layout und Rendering unterstützt. Das folgende Beispiel gibt true zurück und wendet den CSS-Stil an, wenn der Browser die `COLRv1` Fonttechnologie unterstützt:

```css
@supports font-tech(color-COLRv1) {
}
```

Die folgende Tabelle beschreibt die Fonttechnologien (`<font-tech>`), einschließlich Farbfonttechnologien (`<color-font-tech>`), Font-Feature-Technologien (`<font-features-tech>`) und andere verfügbare Fonttechnologien, die mit der `font-tech()` Funktion abgefragt werden können:

| Technologie                    | Unterstützt                                                                                             |
| :----------------------------- | :------------------------------------------------------------------------------------------------------ |
| **`<color-font-tech>`**        |                                                                                                         |
| `color-colrv0`                 | Mehrfarbige Glyphen über COLR Version 0 Tabelle                                                         |
| `color-colrv1`                 | Mehrfarbige Glyphen über COLR Version 1 Tabelle                                                         |
| `color-svg`                    | SVG-Tabelle mit mehreren Farben                                                                         |
| `color-sbix`                   | Standard-Bitmap-Grafiktabellen                                                                          |
| `color-cbdt`                   | Farbbild-Daten Tabellen                                                                                 |
| **`<font-features-tech>`**     |                                                                                                         |
| `features-opentype`            | OpenType `GSUB` und `GPOS` Tabellen                                                                     |
| `features-aat`                 | TrueType `morx` und `kerx` Tabellen                                                                     |
| `features-graphite`            | Graphite Features, namentlich `Silf`, `Glat`, `Gloc`, `Feat`, und `Sill` Tabellen                       |
| **Andere `<font-tech>` Werte** |                                                                                                         |
| `incremental-patch`            | Inkrementelles Font-Loading mittels Patch-Subset-Methode                                                |
| `incremental-range`            | Inkrementelles Font-Loading mittels Range-Request-Methode                                               |
| `incremental-auto`             | Inkrementelles Font-Loading mittels Methodenverhandlung                                                 |
| `variations`                   | Font-Variationen in TrueType und OpenType Fonts zur Steuerung der Font-Achse, Gewichtung, Glyphen, etc. |
| `palettes`                     | Font-Paletten mittels `font-palette`, um eine von vielen Farbpaletten im Font auszuwählen               |

#### `font-format()`

Diese Funktion überprüft, ob ein Browser das angegebene Fontformat für Layout und Rendering unterstützt. Das folgende Beispiel gibt true zurück und wendet den CSS-Stil an, wenn der Browser das `opentype` Fontformat unterstützt:

```css
@supports font-format(opentype) {
}
```

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

### Der `not` Operator

Der `not` Operator geht einer Ausdruck voran und negiert diesen. Der folgende Ausdruck gibt true zurück, wenn die {{CSSxRef("transform-origin")}} Eigenschaft des Browsers `10em 10em 10em` **als ungültig** betrachtet:

```css
@supports not (transform-origin: 10em 10em 10em) {
}
```

Wie bei jedem Operator kann der `not` Operator auf eine Deklaration beliebiger Komplexität angewendet werden. Die folgenden Beispiele sind beide gültig:

```css
@supports not (not (transform-origin: 2px)) {
}
@supports (display: grid) and (not (display: inline-grid)) {
}
```

> [!NOTE]
> Es ist nicht notwendig, den `not` Operator auf oberster Ebene zwischen zwei Klammern zu setzen.
> Um ihn mit anderen Operatoren wie `and` und `or` zu kombinieren, sind die Klammern erforderlich.

### Der `and` Operator

Der `and` Operator erzeugt einen neuen Ausdruck aus der Konjunktion von zwei kürzeren Ausdrücken. Er gibt true zurück, nur wenn **beide** kürzeren Ausdrücke ebenfalls true sind. Das folgende Beispiel gibt true zurück, wenn und nur wenn die zwei kürzeren Ausdrücke gleichzeitig true sind:

```css
@supports (display: table-cell) and (display: list-item) {
}
```

Mehrere Konjunktionen können ohne zusätzliche Klammern nebeneinander gestellt werden. Die folgenden Ausdrücke sind beide gleichwertig:

```css
@supports (display: table-cell) and (display: list-item) and (display: contents) {
}
@supports (display: table-cell) and
  ((display: list-item) and (display: contents)) {
}
```

### Der `or` Operator

Der `or` Operator erzeugt einen neuen Ausdruck aus der Disjunktion von zwei kürzeren Ausdrücken. Er gibt true zurück, wenn **einer oder beide** der kürzeren Ausdrücke ebenfalls true sind. Das folgende Beispiel gibt true zurück, wenn mindestens einer der zwei kürzeren Ausdrücke true ist:

```css
@supports (transform-style: preserve) or (-moz-transform-style: preserve) {
}
```

Mehrere Disjunktionen können ohne zusätzliche Klammern nebeneinander gestellt werden. Die folgenden Ausdrücke sind beide gleichwertig:

```css
@supports (transform-style: preserve) or (-moz-transform-style: preserve) or
  (-webkit-transform-style: preserve) {
}

@supports (transform-style: preserve-3d) or
  (
    (-moz-transform-style: preserve-3d) or
      (-webkit-transform-style: preserve-3d)
  ) {
}
```

> [!NOTE]
> Bei der Verwendung von `and` und `or` Operatoren müssen Klammern verwendet werden, um die Reihenfolge zu definieren, in der sie angewendet werden. Andernfalls ist die Bedingung ungültig und die gesamte Regel wird ignoriert.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Prüfung der Unterstützung einer CSS-Eigenschaft

```css
@supports (animation-name: test) {
  /* CSS applied when animations are supported without a prefix */
  @keyframes {
    /* Other at-rules can be nested inside */
  }
}
```

### Prüfung der Unterstützung einer bestimmten CSS-Eigenschaft oder einer mit Präfix versehenen Version

```css
@supports (text-stroke: 10px) or (-webkit-text-stroke: 10px) {
  /* CSS applied when text-stroke, prefixed or not, is supported */
}
```

### Prüfung des Nicht-Unterstützens einer spezifischen CSS-Eigenschaft

```css
@supports not ((text-align-last: justify) or (-moz-text-align-last: justify)) {
  /* CSS to provide fallback alternative for text-align-last: justify */
}
```

### Prüfung der Unterstützung eines Selektors

CSS-Bedingungsregeln bieten die Möglichkeit, die Unterstützung eines Selektors wie {{cssxref(":has",":has()")}} zu testen.

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

### Prüfung der Unterstützung einer Fonttechnologie

Das folgende Beispiel wendet den CSS-Stil an, wenn der Browser die `COLRv1` Fonttechnologie unterstützt:

```css
@import url("https://fonts.googleapis.com/css2?family=Bungee+Spice");

@supports font-tech(color-COLRv1) {
  p {
    font-family: "Bungee Spice", fantasy;
  }
}
```

Es ist auch möglich, die Unterstützung einer Fonttechnologie durch die Verwendung der `tech` Funktion innerhalb der {{CSSxRef("@font-face")}} At-Regel zu testen. Wenn ein Browser die Fonttechnologie nicht unterstützt, kann eine Ersatzschriftart (`Bungee-fallback.otf`) verwendet werden.

```css
@font-face {
  font-family: "Bungee Spice";
  src:
    url("https://fonts.googleapis.com/css2?family=Bungee+Spice")
      tech(color-COLRv1),
    url("Bungee-fallback.otf") format("opentype");
}
```

### Prüfung der Unterstützung eines Fontformats

Das folgende Beispiel wendet den CSS-Stil an, wenn der Browser das `woff2` Fontformat unterstützt:

```css
@supports font-format(woff2) {
  p {
    font-family: "Open Sans", sans-serif;
    src: url("open-sans.woff2") format("woff2");
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Feature Queries](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- [CSS At-Regel Funktionen](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)
- [`CSSSupportsRule`](/de/docs/Web/API/CSSSupportsRule)
- [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static) Methode
