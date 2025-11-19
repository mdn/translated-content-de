---
title: "@supports"
slug: Web/CSS/Reference/At-rules/@supports
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

Die **`@supports`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) ermöglicht es Ihnen, CSS-Deklarationen anzugeben, die von der Unterstützung von CSS-Funktionen durch einen Browser abhängen. Die Verwendung dieser At-Regel wird allgemein als _Feature-Abfrage_ bezeichnet. Die Regel muss auf der obersten Ebene Ihres Codes oder verschachtelt innerhalb einer anderen bedingten Gruppenregel platziert werden.

In JavaScript kann `@supports` über die CSS Objektmodell-Schnittstelle [`CSSSupportsRule`](/de/docs/Web/API/CSSSupportsRule) zugegriffen werden.

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

## Syntax

```css
@supports (<supports-condition>) {
  /* If the condition is true, use the CSS in this block. */
}

@supports (<supports-condition>) and (<supports-condition>) {
  /* If both conditions are true, use the CSS in this block. */
}
```

Die `@supports` At-Regel besteht aus einem Block von Anweisungen mit einer _Supports-Bedingung_. Die Bedingungen können durch Konjunktionen (`and`), Disjunktionen (`or`) und/oder Negationen (`not`) kombiniert werden. Die Priorität der Operatoren kann mit Klammern definiert werden.

Supports-Bedingungen können entweder eine `<property>: <value>` Deklarationssyntax oder eine `<function()>` Syntax verwenden. Die folgenden Abschnitte beschreiben die Verwendung jedes Typs von Supports-Bedingungen.

### Deklarationssyntax

Die Deklarationssyntax prüft, ob ein Browser die angegebene `<property>: <value>` Deklaration unterstützt. Die Deklaration muss in Klammern eingeschlossen werden. Das folgende Beispiel gibt `true` zurück, wenn der Browser den Ausdruck `transform-origin: 5% 5%` unterstützt:

```css
@supports (transform-origin: 5% 5%) {
}
```

### Funktionssyntax

Die Funktionssyntax prüft, ob ein Browser Werte oder Ausdrücke innerhalb der Funktion unterstützt. Die in der Funktionssyntax unterstützten Funktionen sind in den folgenden Abschnitten beschrieben.

#### `selector()`

Diese Funktion bewertet, ob ein Browser die angegebene Selektorsyntax unterstützt. Das folgende Beispiel gibt `true` zurück und wendet den CSS-Stil an, wenn der Browser den [Kind-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Child_combinator) unterstützt:

```css
@supports selector(h2 > p) {
}
```

#### `font-tech()`

Diese Funktion prüft, ob ein Browser die angegebene Schrifttechnologie für Layout und Rendering unterstützt. Das folgende Beispiel gibt `true` zurück und wendet den CSS-Stil an, wenn der Browser die `COLRv1` Schrifttechnologie unterstützt:

```css
@supports font-tech(color-COLRv1) {
}
```

Die folgende Tabelle beschreibt die Schrifttechnologien (`<font-tech>`), einschließlich Farbenschrifttechnologien (`<color-font-tech>`), Schriftmerkmaltechnologien (`<font-features-tech>`) und andere verfügbare Schrifttechnologien, die mit der `font-tech()` Funktion abgefragt werden können:

| Technologie                    | Unterstützt                                                                                                     |
| :----------------------------- | :-------------------------------------------------------------------------------------------------------------- |
| **`<color-font-tech>`**        |                                                                                                                 |
| `color-colrv0`                 | Mehrfarbige Glyphen über die COLR Version 0 Tabelle                                                             |
| `color-colrv1`                 | Mehrfarbige Glyphen über die COLR Version 1 Tabelle                                                             |
| `color-svg`                    | SVG Mehrfarbtische                                                                                              |
| `color-sbix`                   | Standard Bitmap Grafiktische                                                                                    |
| `color-cbdt`                   | Farbbilddaten-Tische                                                                                            |
| **`<font-features-tech>`**     |                                                                                                                 |
| `features-opentype`            | OpenType `GSUB` und `GPOS` Tische                                                                               |
| `features-aat`                 | TrueType `morx` und `kerx` Tische                                                                               |
| `features-graphite`            | Graphite-Funktionen, nämlich `Silf`, `Glat`, `Gloc`, `Feat` und `Sill` Tische                                   |
| **Andere `<font-tech>` Werte** |                                                                                                                 |
| `incremental-patch`            | Inkrementelles Schriftartenladen mit der Patch-Subset-Methode                                                   |
| `incremental-range`            | Inkrementelles Schriftartenladen mit der Bereichsanforderungsmethode                                            |
| `incremental-auto`             | Inkrementelles Schriftartenladen mit Methodenverhandlung                                                        |
| `variations`                   | Schriftvariationen in TrueType- und OpenType-Schriften zur Steuerung der Schriftachse, Gewichtung, Glyphen usw. |
| `palettes`                     | Schriftpaletten über `font-palette` zur Auswahl einer von vielen Farbpaletten in der Schrift                    |

#### `font-format()`

Diese Funktion prüft, ob ein Browser das angegebene Schriftformat für Layout und Rendering unterstützt. Das folgende Beispiel gibt `true` zurück und wendet den CSS-Stil an, wenn der Browser das `opentype` Schriftformat unterstützt:

```css
@supports font-format(opentype) {
}
```

Die folgende Tabelle beschreibt die verfügbaren Formate (`<font-format>` Werte), die mit dieser Funktion abgefragt werden können:

| Format              | Beschreibung                    | Dateierweiterungen |
| :------------------ | :------------------------------ | :----------------- |
| `collection`        | OpenType Sammlung               | `.otc`, `.ttc`     |
| `embedded-opentype` | Eingebettetes OpenType          | `.eot`             |
| `opentype`          | OpenType                        | `.ttf`, `.otf`     |
| `svg`               | SVG Schrift (veraltet)          | `.svg`, `.svgz`    |
| `truetype`          | TrueType                        | `.ttf`             |
| `woff`              | WOFF 1.0 (Web Open Font Format) | `.woff`            |
| `woff2`             | WOFF 2.0 (Web Open Font Format) | `.woff2`           |

### Der not-Operator

Der `not`-Operator steht vor einem Ausdruck und führt zur Negation des Ausdrucks. Das Folgende gibt `true` zurück, wenn die {{CSSxRef("transform-origin")}}-Eigenschaft des Browsers `10em 10em 10em` **als ungültig betrachtet:**

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
> Es ist nicht notwendig, den `not`-Operator auf der obersten Ebene zwischen zwei Klammern einzuschließen. Um ihn mit anderen Operatoren wie `and` und `or` zu kombinieren, sind die Klammern erforderlich.

### Der and-Operator

Der `and`-Operator erstellt einen neuen Ausdruck aus der Konjunktion zweier kürzerer Ausdrücke. Er gibt `true` nur zurück, wenn **beide** der kürzeren Ausdrücke ebenfalls `true` sind. Das folgende Beispiel gibt `true` zurück, wenn und nur wenn beide kürzeren Ausdrücke gleichzeitig `true` sind:

```css
@supports (display: table-cell) and (display: list-item) {
}
```

Mehrere Konjunktionen können ohne zusätzliche Klammern nebeneinander gestellt werden. Die folgenden sind beide gleichwertig:

```css
@supports (display: table-cell) and (display: list-item) and (display: contents) {
}
@supports (display: table-cell) and
  ((display: list-item) and (display: contents)) {
}
```

### Der or-Operator

Der `or`-Operator erstellt einen neuen Ausdruck aus der Disjunktion zweier kürzerer Ausdrücke. Er gibt `true` zurück, wenn **einer oder beide** der kürzeren Ausdrücke ebenfalls `true` sind. Das folgende Beispiel gibt `true` zurück, wenn mindestens einer der beiden kürzeren Ausdrücke `true` ist:

```css
@supports (transform-style: preserve) or (-moz-transform-style: preserve) {
}
```

Mehrere Disjunktionen können ohne zusätzliche Klammern nebeneinander gestellt werden. Die folgenden sind beide gleichwertig:

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
> Bei Verwendung von sowohl `and`- als auch `or`-Operatoren müssen die Klammern verwendet werden, um die Reihenfolge zu definieren, in der sie angewendet werden. Andernfalls ist die Bedingung ungültig und die gesamte Regel wird ignoriert.

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

### Testen der Unterstützung einer bestimmten CSS-Eigenschaft oder einer präfixierten Version

```css
@supports (text-stroke: 10px) or (-webkit-text-stroke: 10px) {
  /* CSS applied when text-stroke, prefixed or not, is supported */
}
```

### Testen der fehlenden Unterstützung einer bestimmten CSS-Eigenschaft

```css
@supports not ((text-align-last: justify) or (-moz-text-align-last: justify)) {
  /* CSS to provide fallback alternative for text-align-last: justify */
}
```

### Testen der Unterstützung eines Selektors

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

### Testen der Unterstützung einer Schrifttechnologie

Das folgende Beispiel wendet die [Bungee Spice](https://fonts.google.com/specimen/Bungee+Spice) Farbenschrift an, wenn der Browser die `COLRv1` Schrifttechnologie unterstützt:

```css
@supports font-tech(color-COLRv1) {
  body {
    font-family: "Bungee Spice", fantasy;
  }
}
```

Es ist auch möglich, die Unterstützung einer Schrifttechnologie zu testen, indem die `tech`-Funktion innerhalb der {{CSSxRef("@font-face")}} At-Regel verwendet wird. Im folgenden Beispiel wird, falls ein Browser die Farbenschrifttechnologie in der [`bungee-spice.woff2`](https://fonts.google.com/specimen/Bungee+Spice) Schrift nicht unterstützt, eine reguläre [`bungee.woff2`](https://fonts.google.com/specimen/Bungee) Schrift stattdessen verwendet.

```css
@font-face {
  font-family: "Bungee Spice";
  src:
    url("bungee-spice.woff2") tech(color-COLRv1) format("woff2"),
    url("bungee.woff2") format("woff2");
}
```

### Testen der Unterstützung eines Schriftformats

Das folgende Beispiel verwendet die WOFF2-Version der Schrift, wenn der Browser dieses Schriftformat unterstützt, andernfalls wird auf die zuvor spezifizierte WOFF-Version zurückgegriffen:

```css
@font-face {
  font-family: "Open Sans WOFF";
  src: url("open-sans.woff") format("woff");
}

@font-face {
  font-family: "Open Sans WOFF2";
  src: url("open-sans.woff2") format("woff2");
}

body {
  font-family: "Open Sans WOFF", sans-serif;
}

@supports font-format(woff2) {
  body {
    font-family: "Open Sans WOFF2", sans-serif;
  }
}
```

Eine effizientere Möglichkeit, mehrere Schriftformate anzugeben, besteht jedoch darin, sie im `src`-Beschreiber einer einzelnen {{cssxref("@font-face")}} At-Regel in der Reihenfolge vom bevorzugtesten Format zum am wenigsten bevorzugten aufzulisten:

```css
@font-face {
  font-family: "Open Sans";
  src:
    url("open-sans.woff2") format("woff2"),
    url("open-sans.woff") format("woff");
}

body {
  font-family: "Open Sans", sans-serif;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Feature-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
- [CSS At-Regel-Funktionen](/de/docs/Web/CSS/Reference/At-rules/At-rule_functions)
- [`CSSSupportsRule`](/de/docs/Web/API/CSSSupportsRule)
- [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static) Methode
