---
title: "@supports"
slug: Web/CSS/@supports
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`@supports`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rule) ermöglicht es Ihnen, CSS-Deklarationen anzugeben, die von der Unterstützung eines Browsers für CSS-Funktionen abhängen. Diese At-Regel zu verwenden, wird gemeinhin als _Feature-Query_ bezeichnet. Die Regel muss entweder auf der obersten Ebene Ihres Codes oder verschachtelt in einer anderen bedingten Gruppen-At-Regel platziert werden.

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

In JavaScript kann auf `@supports` über das CSS-Objektmodell-Interface [`CSSSupportsRule`](/de/docs/Web/API/CSSSupportsRule) zugegriffen werden.

## Syntax

```css
@supports (<supports-condition>) {
  /* If the condition is true, use the CSS in this block. */
}

@supports (<supports-condition>) and (<supports-condition>) {
  /* If both conditions are true, use the CSS in this block. */
}
```

Die `@supports` At-Regel besteht aus einem Block von Anweisungen mit einer _Supports-Bedingung_. Die Bedingungen können durch Konjunktionen (`and`), Disjunktionen (`or`) und/oder Negationen (`not`) kombiniert werden. Die Vorrangigkeit der Operatoren kann mit Klammern definiert werden.

Supports-Bedingungen können entweder eine Deklarationssyntax `<property>: <value>` oder eine Funktionssyntax `<function()>` verwenden. Die folgenden Abschnitte beschreiben die Verwendung jedes Typs von Supports-Bedingungen.

### Deklarationssyntax

Die Deklarationssyntax prüft, ob ein Browser die angegebene Deklaration `<property>: <value>` unterstützt. Die Deklaration muss von Klammern umgeben sein. Das folgende Beispiel gibt wahr zurück, wenn der Browser den Ausdruck `transform-origin: 5% 5%` unterstützt:

```css
@supports (transform-origin: 5% 5%) {
}
```

### Funktionssyntax

Die Funktionssyntax prüft, ob ein Browser Werte oder Ausdrücke innerhalb der Funktion unterstützt. Die in der Funktionssyntax unterstützten Funktionen werden in den folgenden Abschnitten beschrieben.

#### `selector()`

Diese Funktion prüft, ob ein Browser die angegebene Selektor-Syntax unterstützt. Das folgende Beispiel gibt wahr zurück und wendet den CSS-Stil an, wenn der Browser den [Kind-Kombinator](/de/docs/Web/CSS/Child_combinator) unterstützt:

```css
@supports selector(h2 > p) {
}
```

#### `font-tech()`

Diese Funktion prüft, ob ein Browser die angegebene Schrifttechnologie für Layout und Rendering unterstützt. Das folgende Beispiel gibt wahr zurück und wendet den CSS-Stil an, wenn der Browser die `COLRv1` Schrifttechnologie unterstützt:

```css
@supports font-tech(color-COLRv1) {
}
```

Die folgende Tabelle beschreibt die Schrifttechnologien (`<font-tech>`), einschließlich Farbschrifttechnologien (`<color-font-tech>`), Schriftfunktions-Technologien (`<font-features-tech>`) und weiterer verfügbarer Schrifttechnologien, die mit der `font-tech()` Funktion abgefragt werden können:

| Technologie                    | Unterstützt                                                                                                           |
| :----------------------------- | :-------------------------------------------------------------------------------------------------------------------- |
| **`<color-font-tech>`**        |                                                                                                                       |
| `color-colrv0`                 | Mehrfarbige Glyphen über COLR Version 0 Tabelle                                                                       |
| `color-colrv1`                 | Mehrfarbige Glyphen über COLR Version 1 Tabelle                                                                       |
| `color-svg`                    | SVG-Mehrfarbtabelle                                                                                                   |
| `color-sbix`                   | Standard-Bitmap-Grafiktabellen                                                                                        |
| `color-cbdt`                   | Farbbilddaten-Tabellen                                                                                                |
| **`<font-features-tech>`**     |                                                                                                                       |
| `features-opentype`            | OpenType `GSUB` und `GPOS` Tabellen                                                                                   |
| `features-aat`                 | TrueType `morx` und `kerx` Tabellen                                                                                   |
| `features-graphite`            | Graphite-Funktionen, nämlich `Silf`, `Glat`, `Gloc`, `Feat` und `Sill` Tabellen                                       |
| **Andere `<font-tech>` Werte** |                                                                                                                       |
| `incremental-patch`            | Inkrementelles Schriftladen mit der Patch-Subset-Methode                                                              |
| `incremental-range`            | Inkrementelles Schriftladen mit der Bereichsanfrage-Methode                                                           |
| `incremental-auto`             | Inkrementelles Schriftladen mit Methodenverhandlung                                                                   |
| `variations`                   | Schriftvariationen in TrueType- und OpenType-Schriften zur Steuerung der Schriftachse, des Gewichts, der Glyphen usw. |
| `palettes`                     | Schriftpaletten mittels `font-palette`, um eine von vielen Farbpaletten in der Schriftart auszuwählen                 |

#### `font-format()`

Diese Funktion prüft, ob ein Browser das angegebene Schriftformat für Layout und Rendering unterstützt. Das folgende Beispiel gibt wahr zurück und wendet den CSS-Stil an, wenn der Browser das `opentype` Schriftformat unterstützt:

```css
@supports font-format(opentype) {
}
```

Die folgende Tabelle beschreibt die verfügbaren Formate (`<font-format>` Werte), die mit dieser Funktion abgefragt werden können:

| Format              | Beschreibung                    | Dateierweiterungen |
| :------------------ | :------------------------------ | :----------------- |
| `collection`        | OpenType Collection             | `.otc`, `.ttc`     |
| `embedded-opentype` | Embedded OpenType               | `.eot`             |
| `opentype`          | OpenType                        | `.ttf`, `.otf`     |
| `svg`               | SVG-Schrift (veraltet)          | `.svg`, `.svgz`    |
| `truetype`          | TrueType                        | `.ttf`             |
| `woff`              | WOFF 1.0 (Web Open Font Format) | `.woff`            |
| `woff2`             | WOFF 2.0 (Web Open Font Format) | `.woff2`           |

### Der not-Operator

Der `not` Operator geht einem Ausdruck voraus und führt zur Negation des Ausdrucks. Das folgende Beispiel gibt wahr zurück, wenn die {{CSSxRef("transform-origin")}} Eigenschaft des Browsers `10em 10em 10em` **als ungültig ansieht:**

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
> Es ist nicht erforderlich, den `not` Operator auf oberster Ebene zwischen zwei Klammern zu setzen. Um ihn mit anderen Operatoren, wie `and` und `or`, zu kombinieren, sind die Klammern erforderlich.

### Der and-Operator

Der `and` Operator erstellt einen neuen Ausdruck aus der Verbindung von zwei kürzeren Ausdrücken. Er gibt nur dann wahr zurück, wenn **beide** der kürzeren Ausdrücke ebenfalls wahr sind. Das folgende Beispiel gibt dann und nur dann wahr zurück, wenn die beiden kürzeren Ausdrücke gleichzeitig wahr sind:

```css
@supports (display: table-cell) and (display: list-item) {
}
```

Mehrfache Konjunktionen können aneinandergereiht werden, ohne dass weitere Klammern benötigt werden. Die folgenden sind beide gleichwertig:

```css
@supports (display: table-cell) and (display: list-item) and (display: contents) {
}
@supports (display: table-cell) and
  ((display: list-item) and (display: contents)) {
}
```

### Der or-Operator

Der `or` Operator erstellt einen neuen Ausdruck aus der Disjunktion von zwei kürzeren Ausdrücken. Er gibt wahr zurück, wenn **einer oder beide** der kürzeren Ausdrücke ebenfalls wahr sind. Das folgende Beispiel gibt wahr zurück, wenn mindestens einer der beiden kürzeren Ausdrücke wahr ist:

```css
@supports (transform-style: preserve) or (-moz-transform-style: preserve) {
}
```

Mehrfache Disjunktionen können aneinandergereiht werden, ohne dass weitere Klammern benötigt werden. Die folgenden sind beide gleichwertig:

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
> Bei der Verwendung von sowohl `and` als auch `or` Operatoren müssen die Klammern verwendet werden, um die Reihenfolge zu definieren, in der sie angewendet werden. Andernfalls ist die Bedingung ungültig und die gesamte Regel wird ignoriert.

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

### Testen der Unterstützung einer gegebenen CSS-Eigenschaft oder einer präfigierten Version

```css
@supports (text-stroke: 10px) or (-webkit-text-stroke: 10px) {
  /* CSS applied when text-stroke, prefixed or not, is supported */
}
```

### Testen der Nichtunterstützung einer spezifischen CSS-Eigenschaft

```css
@supports not ((text-align-last: justify) or (-moz-text-align-last: justify)) {
  /* CSS to provide fallback alternative for text-align-last: justify */
}
```

### Testen der Unterstützung eines Selektors

CSS-bedingte Regeln bieten die Möglichkeit, die Unterstützung eines Selektors wie {{cssxref(":has",":has()")}} zu testen.

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
  p {
    font-family: "Bungee Spice", fantasy;
  }
}
```

Es ist auch möglich, die Unterstützung einer Schrifttechnologie zu testen, indem die `tech` Funktion innerhalb der {{CSSxRef("@font-face")}} At-Regel verwendet wird. Wenn ein Browser die Schrifttechnologie nicht unterstützt, kann stattdessen eine Ersatzschrift (`Bungee-fallback.otf`) verwendet werden.

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

- [Verwendung von Feature-Queries](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- [CSS At-Regel-Funktionen](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)
- [`CSSSupportsRule`](/de/docs/Web/API/CSSSupportsRule)
- [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static) Methode
