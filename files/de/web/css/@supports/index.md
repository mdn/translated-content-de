---
title: "@supports"
slug: Web/CSS/@supports
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

Die **`@supports`** [CSS](/de/docs/Web/CSS) [@-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) ermöglicht es Ihnen, CSS-Deklarationen zu definieren, die von der Unterstützung einer CSS-Funktion durch den Browser abhängen.   
Die Verwendung dieser @-Regel wird allgemein als _Feature Query_ bezeichnet.  
Die Regel muss auf der obersten Ebene Ihres Codes oder innerhalb einer anderen bedingten Gruppenregel verschachtelt sein.

{{EmbedInteractiveExample("pages/tabbed/at-rule-supports.html", "tabbed-standard")}}

In JavaScript kann auf `@supports` über die CSS-Objektmodell-Schnittstelle [`CSSSupportsRule`](/de/docs/Web/API/CSSSupportsRule) zugegriffen werden.

## Syntax

Die `@supports`-Regel besteht aus einem Block von Anweisungen mit einer _Supports-Bedingung._  
Die Supports-Bedingung ist eine Menge aus einem oder mehreren Name-Wert-Paaren (z. B. `<property>: <value>`).

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

Die Reihenfolge der Operatoren kann mit Klammern definiert werden.  
Supports-Bedingungen können entweder eine `<property>: <value>`-Deklarationssyntax oder eine `<function()>`-Syntax verwenden.  
Im Folgenden werden die Verwendung der jeweiligen Supports-Bedingung beschrieben.

### Deklarationssyntax

Die Deklarationssyntax prüft, ob ein Browser die angegebene `<property>: <value>`-Deklaration unterstützt.  
Die Deklaration muss von Klammern umgeben sein. Im folgenden Beispiel wird true zurückgegeben, wenn der Browser den Ausdruck `transform-origin: 5% 5%` unterstützt:

```css
@supports (transform-origin: 5% 5%) {
}
```

### Funktionssyntax

Die Funktionssyntax überprüft, ob ein Browser Werte oder Ausdrücke innerhalb der Funktion unterstützt.  
Die unterstützten Funktionen der Funktionssyntax werden in den nachfolgenden Abschnitten beschrieben.

#### `selector()`

Diese Funktion bewertet, ob ein Browser die angegebene Selektorsyntax unterstützt.  
Das folgende Beispiel gibt true zurück und wendet den CSS-Stil an, wenn der Browser den [Kind-Kombinator](/de/docs/Web/CSS/Child_combinator) unterstützt:

```css
@supports selector(h2 > p) {
}
```

#### `font-tech()`

Diese Funktion prüft, ob ein Browser die angegebene Schrifttechnologie für Layout und Rendering unterstützt.  
Das folgende Beispiel gibt true zurück und wendet den CSS-Stil an, wenn der Browser die `COLRv1`-Schrifttechnologie unterstützt:

```css
@supports font-tech(color-COLRv1) {
}
```

Die folgende Tabelle beschreibt die Schrifttechnologien (`<font-tech>`), einschließlich farbiger Schrifttechnologien (`<color-font-tech>`), Schriftfunktions-Technologien (`<font-features-tech>`) sowie weiteren verfügbaren Schrifttechnologien, die mit der `font-tech()`-Funktion abgefragt werden können:

| Technologie                     | Unterstützt                                                                             |
| :----------------------------- | :------------------------------------------------------------------------------------- |
| **`<color-font-tech>`**        |                                                                                       |
| `color-colrv0`                 | Mehrfarbige Glyphen über die COLR-Version-0-Tabelle                                   |
| `color-colrv1`                 | Mehrfarbige Glyphen über die COLR-Version-1-Tabelle                                   |
| `color-svg`                    | SVG-mehrfarbige Tabellen                                                              |
| `color-sbix`                   | Standard-Bitmap-Grafik-Tabellen                                                      |
| `color-cbdt`                   | Farb-Bitmap-Daten-Tabellen                                                           |
| **`<font-features-tech>`**     |                                                                                       |
| `features-opentype`            | OpenType `GSUB`- und `GPOS`-Tabellen                                                 |
| `features-aat`                 | TrueType `morx`- und `kerx`-Tabellen                                                 |
| `features-graphite`            | Graphite-Funktionen, beispielsweise `Silf`, `Glat`, `Gloc`, `Feat` und `Sill`-Tabellen |
| **Andere `<font-tech>`-Werte** |                                                                                       |
| `incremental-patch`            | Inkrementelles Schrift-Laden mit der Patch-Subset-Methode                            |
| `incremental-range`            | Inkrementelles Schrift-Laden mit der Range-Request-Methode                           |
| `incremental-auto`             | Inkrementelles Schrift-Laden mit Aushandlungsmethode                                 |
| `variations`                   | Schriftvariationen in TrueType- und OpenType-Schriften zur Steuerung der Achsen, Gewichte, Glyphen usw. |
| `palettes`                     | Schriftpaletten mit Hilfe von `font-palette`, um aus mehreren Farbschemata im Font zu wählen |

#### `font-format()`

Diese Funktion prüft, ob ein Browser das angegebene Schriftformat für Layout und Rendering unterstützt.  
Das folgende Beispiel gibt true zurück und wendet den CSS-Stil an, wenn der Browser das `opentype`-Schriftformat unterstützt:

```css
@supports font-format(opentype) {
}
```

Die folgende Tabelle beschreibt die verfügbaren Formate (`<font-format>`-Werte), die mit dieser Funktion abgefragt werden können:

| Format              | Beschreibung                       | Dateiendungen   |
| :------------------ | :---------------------------------- | :-------------- |
| `collection`        | OpenType-Sammlung                  | `.otc`, `.ttc`  |
| `embedded-opentype` | Eingebettetes OpenType             | `.eot`          |
| `opentype`          | OpenType                           | `.ttf`, `.otf`  |
| `svg`               | SVG-Font (veraltet)                | `.svg`, `.svgz` |
| `truetype`          | TrueType                           | `.ttf`          |
| `woff`              | WOFF 1.0 (Web Open Font Format)    | `.woff`         |
| `woff2`             | WOFF 2.0 (Web Open Font Format)    | `.woff2`        |

### Der not-Operator

Der `not`-Operator geht einem Ausdruck voran und führt zur Negation des Ausdrucks.  
Das folgende Beispiel gibt true zurück, wenn die {{CSSxRef("transform-origin")}}-Eigenschaft des Browsers `10em 10em 10em` **als ungültig** ansieht:

```css
@supports not (transform-origin: 10em 10em 10em) {
}
```

Wie bei jedem Operator kann der `not`-Operator auf eine Deklaration jeder Komplexitätsstufe angewendet werden.  
Die folgenden Beispiele sind beide gültig:

```css
@supports not (not (transform-origin: 2px)) {
}
@supports (display: grid) and (not (display: inline-grid)) {
}
```

> [!NOTE]  
> Es ist nicht erforderlich, den `not`-Operator auf oberster Ebene zwischen zwei Klammern zu setzen.  
> Um ihn jedoch mit anderen Operatoren wie `and` und `or` zu kombinieren, sind Klammern erforderlich.

### Der and-Operator

Der `and`-Operator erstellt einen neuen Ausdruck aus der Konjunktion zweier kürzerer Ausdrücke.  
Er gibt nur dann true zurück, wenn **beide** kürzeren Ausdrücke ebenfalls true sind.  
Das folgende Beispiel gibt true zurück, wenn und nur wenn die beiden kürzeren Ausdrücke gleichzeitig true sind:

```css
@supports (display: table-cell) and (display: list-item) {
}
```

Mehrere Konjunktionen können ohne zusätzliche Klammern aneinandergereiht werden.  
Die folgenden Beispiele sind beide gleichwertig:

```css
@supports (display: table-cell) and (display: list-item) and (display: contents) {
}
@supports (display: table-cell) and
  ((display: list-item) and (display: contents)) {
}
```

### Der or-Operator

Der `or`-Operator erstellt einen neuen Ausdruck aus der Disjunktion zweier kürzerer Ausdrücke.  
Er gibt true zurück, wenn **einer oder beide** der kürzeren Ausdrücke ebenfalls true sind.  
Das folgende Beispiel gibt true zurück, wenn mindestens einer der beiden kürzeren Ausdrücke true ist:

```css
@supports (transform-style: preserve) or (-moz-transform-style: preserve) {
}
```

Mehrere Disjunktionen können ohne zusätzlichen Bedarf an Klammern aneinandergereiht werden.  
Die folgenden Beispiele sind beide gleichwertig:

```css
@supports (transform-style: preserve) or (-moz-transform-style: preserve) or (-webkit-transform-style: preserve) {}

@supports (transform-style: preserve-3d) or ((-moz-transform-style: preserve-3d) or (-webkit-transform-style: preserve-3d))) {}
```

> [!NOTE]  
> Wenn sowohl `and`- als auch `or`-Operatoren verwendet werden, müssen Klammern verwendet werden, um die Reihenfolge ihrer Anwendung zu definieren.  
> Andernfalls ist die Bedingung ungültig und die gesamte Regel wird ignoriert.

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

### Testen der Unterstützung einer CSS-Eigenschaft oder einer präfixierten Version

```css
@supports (text-stroke: 10px) or (-webkit-text-stroke: 10px) {
  /* CSS applied when text-stroke, prefixed or not, is supported */
}
```

### Testen der Nicht-Unterstützung einer spezifischen CSS-Eigenschaft

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

Das folgende Beispiel wendet den CSS-Stil an, wenn der Browser die `COLRv1`-Schrifttechnologie unterstützt:

```css
@import url("https://fonts.googleapis.com/css2?family=Bungee+Spice");

@supports font-tech(color-COLRv1) {
  font-family: "Bungee Spice";
}
```

Es ist auch möglich, die Unterstützung einer Schrifttechnologie mit der `tech`-Funktion innerhalb der {{CSSxRef("@font-face")}}-Regel zu testen.  
Falls ein Browser die Schrifttechnologie nicht unterstützt, kann eine Ersatzschriftart (`Bungee-fallback.otf`) verwendet werden.

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

Das folgende Beispiel wendet den CSS-Stil an, wenn der Browser das `woff2`-Schriftformat unterstützt:

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

- [Feature Queries verwenden](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- Die CSSOM-Klasse [`CSSSupportsRule`](/de/docs/Web/API/CSSSupportsRule) und die Methode [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static), um dieselbe Prüfung über JavaScript durchzuführen.
