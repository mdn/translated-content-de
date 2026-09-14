---
title: "`@supports` CSS at-rule"
short-title: "@supports"
slug: Web/CSS/Reference/At-rules/@supports
l10n:
  sourceCommit: ef4050055cbb6ba03fc245947b47d35252bd2376
---

Die **`@supports`**-[CSS](/de/docs/Web/CSS)-[At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) ermöglicht es Ihnen, CSS-Deklarationen anzugeben, die von der Unterstützung von CSS-Funktionen durch einen Browser abhängen.
Die Verwendung dieser At-Regel wird üblicherweise als _Feature Query_ bezeichnet.
Die Regel muss auf der obersten Ebene Ihres Codes platziert oder in einer anderen bedingten Gruppen-At-Regel verschachtelt werden.

In JavaScript kann über die CSS-Objektmodell-Schnittstelle [`CSSSupportsRule`](/de/docs/Web/API/CSSSupportsRule) auf `@supports` zugegriffen werden.

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

Die `@supports`-At-Regel besteht aus einem Anweisungsblock mit einer _Supports-Bedingung_.
Die Bedingungen können durch Konjunktionen (`and`), Disjunktionen (`or`) und/oder Negationen (`not`) kombiniert werden.
Die Operatorpriorität kann mit Klammern festgelegt werden.

Supports-Bedingungen können entweder eine Deklarationssyntax `<property>: <value>` oder eine Syntax `<function()>` verwenden.
In den folgenden Abschnitten wird die Verwendung jedes Typs von Supports-Bedingung beschrieben.

### Deklarationssyntax

Die Deklarationssyntax prüft, ob ein Browser die angegebene Deklaration `<property>: <value>` unterstützt.
Die Deklaration muss von Klammern umgeben sein.
Das folgende Beispiel ergibt true, wenn der Browser den Ausdruck `transform-origin: 5% 5%` unterstützt:

```css
@supports (transform-origin: 5% 5%) {
}
```

### Funktionssyntax

Die Funktionssyntax prüft, ob ein Browser Werte oder Ausdrücke innerhalb der Funktion unterstützt.
Die von der Funktionssyntax unterstützten Funktionen werden in den folgenden Abschnitten beschrieben.

#### `at-rule()`

Diese Funktion prüft, ob ein Browser die angegebene [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) unterstützt.
Das folgende Beispiel ergibt true und wendet die enthaltenen CSS-Stile an, wenn der Browser die {{cssxref("@keyframes")}}-At-Regel unterstützt:

```css
@supports at-rule(@keyframes) {
}
```

#### `selector()`

Diese Funktion wertet aus, ob ein Browser die angegebene Selektorsyntax unterstützt.
Das folgende Beispiel ergibt true und wendet die enthaltenen CSS-Stile an, wenn der Browser den [Kind-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Child_combinator) unterstützt:

```css
@supports selector(h2 > p) {
}
```

#### `font-tech()`

Diese Funktion prüft, ob ein Browser die angegebene Schrifttechnologie für Layout und Rendering unterstützt.
Das folgende Beispiel ergibt true und wendet die enthaltenen CSS-Stile an, wenn der Browser die Schrifttechnologie `COLRv1` unterstützt:

```css
@supports font-tech(color-COLRv1) {
}
```

Die folgende Tabelle beschreibt die Schrifttechnologien (`<font-tech>`), einschließlich Farb-Schrifttechnologien (`<color-font-tech>`), Schriftfunktions-Technologien (`<font-features-tech>`) sowie anderer verfügbarer Schrifttechnologien, die mit der Funktion `font-tech()` abgefragt werden können:

| Technologie                    | Unterstützt                                                                                                        |
| :----------------------------- | :----------------------------------------------------------------------------------------------------------------- |
| **`<color-font-tech>`**        |                                                                                                                    |
| `color-colrv0`                 | Mehrfarbige Glyphen über die COLR-Version-0-Tabelle                                                                |
| `color-colrv1`                 | Mehrfarbige Glyphen über die COLR-Version-1-Tabelle                                                                |
| `color-svg`                    | Mehrfarbige SVG-Tabellen                                                                                           |
| `color-sbix`                   | Standard-Bitmap-Grafiktabellen                                                                                     |
| `color-cbdt`                   | Farb-Bitmap-Datentabellen                                                                                          |
| **`<font-features-tech>`**     |                                                                                                                    |
| `features-opentype`            | OpenType-Tabellen `GSUB` und `GPOS`                                                                                |
| `features-aat`                 | TrueType-Tabellen `morx` und `kerx`                                                                                |
| `features-graphite`            | Graphite-Funktionen, nämlich die Tabellen `Silf`, `Glat`, `Gloc`, `Feat` und `Sill`                                |
| **Andere `<font-tech>`-Werte** |                                                                                                                    |
| `incremental-patch`            | Inkrementelles Laden von Schriftarten mit der Patch-Subset-Methode                                                 |
| `incremental-range`            | Inkrementelles Laden von Schriftarten mit der Range-Request-Methode                                                |
| `incremental-auto`             | Inkrementelles Laden von Schriftarten mittels Methodenaushandlung                                                  |
| `variations`                   | Schriftvariationen in TrueType- und OpenType-Schriftarten zur Steuerung der Schriftachse, Gewichtung, Glyphen usw. |
| `palettes`                     | Schriftpaletten mittels `font-palette`, um eine von vielen Farbpaletten in der Schriftart auszuwählen              |

#### `font-format()`

Diese Funktion prüft, ob ein Browser das angegebene Schriftformat für Layout und Rendering unterstützt.
Das folgende Beispiel ergibt true und wendet die enthaltenen CSS-Stile an, wenn der Browser das Schriftformat `opentype` unterstützt:

```css
@supports font-format(opentype) {
}
```

Die folgende Tabelle beschreibt die verfügbaren Formate (`<font-format>`-Werte), die mit dieser Funktion abgefragt werden können:

| Format              | Beschreibung                    | Dateierweiterungen |
| :------------------ | :------------------------------ | :----------------- |
| `collection`        | OpenType Collection             | `.otc`, `.ttc`     |
| `embedded-opentype` | Eingebettetes OpenType          | `.eot`             |
| `opentype`          | OpenType                        | `.ttf`, `.otf`     |
| `svg`               | SVG-Schriftart (veraltet)       | `.svg`, `.svgz`    |
| `truetype`          | TrueType                        | `.ttf`             |
| `woff`              | WOFF 1.0 (Web Open Font Format) | `.woff`            |
| `woff2`             | WOFF 2.0 (Web Open Font Format) | `.woff2`           |

#### `named-feature()`

Diese Funktion akzeptiert ein vordefiniertes Schlüsselwort und wertet aus, ob ein Browser die angegebene benannte Funktion unterstützt. Dies ermöglicht die Prüfung der Funktionsunterstützung, die nicht mit den anderen `@supports`-Funktionen getestet werden kann.

```css
@supports named-feature(anchor-position-follows-transform) {
}
```

> [!NOTE]
> Weitere Funktionen werden nur selten und nur dann hinzugefügt, wenn ein tatsächlicher Bedarf besteht, etwas Spezifisches auf Funktionsunterstützung zu testen, das nicht durch allgemeinere Testmethoden abgedeckt würde.

- `anchor-position-follows-transforms`
  - : Diese `named-feature()` prüft, ob der Browser transformationsbewusste [Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) unterstützt.
- `single-axis-scroll-container`
  - : Diese `named-feature()` prüft, ob der Browser einachsige Scroll-Container unterstützt, bei denen eine Achse entweder {{cssxref("overflow", "scroll", "#scroll")}}, {{cssxref("overflow", "auto", "#auto")}} oder {{cssxref("overflow", "hidden", "#hidden")}} und die andere {{cssxref("overflow", "clip", "#clip")}} ist.

### Der Operator `not`

Der Operator `not` steht vor einem Ausdruck und negiert dessen Ergebnis.
Das Folgende ergibt true, wenn die Eigenschaft {{CSSxRef("transform-origin")}} des Browsers `10em 10em 10em` **als ungültig betrachtet:**

```css
@supports not (transform-origin: 10em 10em 10em) {
}
```

Wie jeder Operator kann auch der Operator `not` auf eine Deklaration beliebiger Komplexität angewendet werden.
Die folgenden Beispiele sind beide gültig:

```css
@supports not (not (transform-origin: 2px)) {
}
@supports (display: grid) and (not (display: inline-grid)) {
}
```

> [!NOTE]
> Es ist nicht erforderlich, den Operator `not` auf der obersten Ebene in zwei Klammern einzuschließen.
> Um ihn mit anderen Operatoren wie `and` und `or` zu kombinieren, sind die Klammern erforderlich.

### Der Operator `and`

Der Operator `and` erstellt aus der Konjunktion zweier kürzerer Ausdrücke einen neuen Ausdruck. Er ergibt nur dann true, wenn **beide** kürzeren Ausdrücke ebenfalls true ergeben. Das folgende Beispiel ergibt genau dann true, wenn die beiden kürzeren Ausdrücke gleichzeitig true sind:

```css
@supports (display: table-cell) and (display: list-item) {
}
```

Mehrere Konjunktionen können ohne zusätzliche Klammern aneinandergereiht werden. Die folgenden Ausdrücke sind äquivalent:

```css
@supports (display: table-cell) and (display: list-item) and (display: contents) {
}
@supports (display: table-cell) and
  ((display: list-item) and (display: contents)) {
}
```

### Der Operator `or`

Der Operator `or` erstellt aus der Disjunktion zweier kürzerer Ausdrücke einen neuen Ausdruck. Er ergibt true, wenn **einer oder beide** der kürzeren Ausdrücke ebenfalls true ergeben. Das folgende Beispiel ergibt true, wenn mindestens einer der beiden kürzeren Ausdrücke true ist:

```css
@supports (transform-style: preserve) or (-moz-transform-style: preserve) {
}
```

Mehrere Disjunktionen können ohne zusätzliche Klammern aneinandergereiht werden. Die folgenden Ausdrücke sind äquivalent:

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
> Bei der gleichzeitigen Verwendung der Operatoren `and` und `or` müssen Klammern verwendet werden, um die Reihenfolge ihrer Anwendung festzulegen. Andernfalls ist die Bedingung ungültig und die gesamte Regel wird ignoriert.

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

### Testen der Unterstützung einer bestimmten CSS-Eigenschaft oder einer Version mit Präfix

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

Bedingte CSS-Regeln bieten die Möglichkeit, die Unterstützung eines Selektors wie {{cssxref(":has",":has()")}} zu testen.

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

Das folgende Beispiel wendet die Farb-Schriftart [Bungee Spice](https://fonts.google.com/specimen/Bungee+Spice) an, wenn der Browser die Schrifttechnologie `COLRv1` unterstützt:

```css
@supports font-tech(color-COLRv1) {
  body {
    font-family: "Bungee Spice", fantasy;
  }
}
```

Es ist auch möglich, die Unterstützung einer Schrifttechnologie mithilfe der Funktion `tech` innerhalb der {{CSSxRef("@font-face")}}-At-Regel zu testen.
Wenn ein Browser im folgenden Beispiel die Farb-Schrifttechnologie in der Schriftart [`bungee-spice.woff2`](https://fonts.google.com/specimen/Bungee+Spice) nicht unterstützt, wird stattdessen eine reguläre Schriftart [`bungee.woff2`](https://fonts.google.com/specimen/Bungee) verwendet.

```css
@font-face {
  font-family: "Bungee Spice";
  src:
    url("bungee-spice.woff2") tech(color-COLRv1) format("woff2"),
    url("bungee.woff2") format("woff2");
}
```

### Testen der Unterstützung eines Schriftformats

Das folgende Beispiel verwendet die WOFF2-Version der Schriftart, wenn der Browser dieses Schriftformat unterstützt; andernfalls wird auf die zuvor angegebene WOFF-Version zurückgegriffen:

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

Eine effizientere Methode zum Angeben mehrerer Schriftformate besteht jedoch darin, sie im Deskriptor `src` einer einzelnen {{cssxref("@font-face")}}-At-Regel in der Reihenfolge vom bevorzugtesten zum am wenigsten bevorzugten Format aufzulisten:

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

### Testen der Unterstützung einer At-Regel

Das folgende Beispiel wendet einen Satz bereichsbezogener Farb-Schema-Stile an, wenn der Browser die {{cssxref("@scope")}}-At-Regel unterstützt:

```css
@supports at-rule(@scope) {
  @scope (.light-scheme) {
    :scope {
      background-color: plum;
    }

    a {
      color: darkmagenta;
    }
  }

  @scope (.dark-scheme) {
    :scope {
      background-color: darkmagenta;
      color: antiquewhite;
    }

    a {
      color: plum;
    }
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Feature Queries](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
- [CSS-At-Regel-Funktionen](/de/docs/Web/CSS/Reference/At-rules/At-rule_functions)
- [`CSSSupportsRule`](/de/docs/Web/API/CSSSupportsRule)
- Methode [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static)
