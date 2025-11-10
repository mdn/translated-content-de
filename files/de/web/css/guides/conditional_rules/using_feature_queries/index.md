---
title: Verwenden von Feature Queries
slug: Web/CSS/Guides/Conditional_rules/Using_feature_queries
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**Feature Queries** sind bedingte Gruppenregeln, die testen, ob der User-Agent eine oder mehrere CSS-Funktionen, wie CSS-Eigenschaften und Eigenschaftswerte, unterstützt oder nicht. Feature Queries bieten Webentwicklern eine Möglichkeit zu überprüfen, ob ein Browser eine bestimmte Funktion unterstützt, und dann CSS bereitzustellen, das basierend auf dem Testergebnis nur ausgeführt wird. In diesem Leitfaden lernen Sie, wie Sie progressive Verbesserung mit Hilfe von Feature Queries implementieren.

Feature Queries werden mit der CSS-At-Regel [`@supports`](/de/docs/Web/CSS/Reference/At-rules/@supports) (oder der `supports()` Funktion innerhalb von [`@import`](/de/docs/Web/CSS/Reference/At-rules/@import) At-Regeln) erstellt.

## Syntax

CSS-Feature-Queries sind Teil des [CSS-Bedingungsregelmoduls](/de/docs/Web/CSS/Guides/Conditional_rules), das auch die Media Query-At-Regel [`@media`](/de/docs/Web/CSS/Reference/At-rules/@media) definiert. Feature Queries verhalten sich ähnlich wie [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using). Der Unterschied besteht darin, dass Sie mit einer Media Query etwas über die Umgebung testen, in der die Webseite läuft, während Sie mit Feature Queries die Browser-Unterstützung für CSS-Funktionen testen.

Eine Feature Query besteht aus der `@supports` At-Regel, gefolgt von der Support-Bedingung oder einer `supports()` Funktion und Deklarationsparameter innerhalb einer `@import` At-Regeldarstellung:

```plain
/* `@supports` at-rule */
@supports <support-condition> {
  /* CSS rules to apply */
}

/* `supports()` function */
@import url_to_import supports(<declaration>);
```

Zum Beispiel können wir einen Satz von Stilen anwenden oder ein gesamtes Stylesheet importieren, wenn der User-Agent `red` als gültigen Wert für die CSS {{cssxref("color")}} Eigenschaft unterstützt:

```css
/* `@supports` at-rule */
@supports (color: red) {
  /* CSS rules to apply */
}

/* `supports()` function */
@import "/css/styles.css" supports(color: red);
```

Als weiteres Beispiel, wenn Sie prüfen möchten, ob ein Browser die `row-gap` Eigenschaft unterstützt, würden Sie die folgende Feature Query schreiben. In vielen Fällen spielt es keine Rolle, welchen Wert Sie verwenden: Wenn Sie lediglich prüfen möchten, ob der Browser diese Eigenschaft unterstützt, genügt jeder gültige Wert.

```html live-sample___simple
<div class="box">
  If your browser supports the row-gap property, the border will be dashed and
  text will be red.
</div>
```

```css live-sample___simple
body {
  font: 1.2em / 1.5 sans-serif;
}
.box {
  border: 4px solid blue;
  color: blue;
  padding: 1em;
}
@supports (row-gap: 10px) {
  .box {
    border: 4px dashed darkgreen;
    color: red;
  }
}
```

{{EmbedLiveSample("simple")}}

Der Wertteil des Eigenschafts-Wert-Paares ist wichtiger, wenn Sie neue Werte einer bestimmten Eigenschaft testen. Alle Browser unterstützen `color: red`: Dies geht auf CSS1 zurück. Es gibt jedoch oft zusätzliche Werte, die zu Eigenschaften in CSS hinzugefügt werden, wie [relative Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors), die möglicherweise nicht unterstützt werden. Feature Queries ermöglichen das Testen von Eigenschafts- und Werte-Paaren, was bedeutet, dass wir die Unterstützung für Werte erkennen können.

Um das obige Beispiel der `color` Eigenschaft zu erweitern, prüfen wir hier, ob der Browser die `color: AccentColor` Deklaration unterstützt:

```css
/* `@supports` at-rule */
@supports (color: AccentColor) {
  /* CSS rules to apply */
}

/* `supports()` function */
@import "/css/styles.css" supports(color: AccentColor);
```

In diesen Beispielen haben wir Feature Queries verwendet, um zu prüfen, ob der User-Agent einen bestimmten Wert einer CSS-Eigenschaft unterstützt, indem wir die einzelne Deklaration in Klammern gesetzt haben. Sie können für mehrere Eigenschaftswerte oder das Fehlen einer Unterstützung testen.

## Testen des Mangels an Unterstützung

Zusätzlich zu der Frage, ob der Browser eine Funktion unterstützt, können Sie mit dem `not` Schlüsselwort das Gegenteil testen:

```css
/* `@supports` at-rule with `not` */
@supports not (property: value) {
  /* CSS rules to apply */
}
```

Das CSS innerhalb der folgenden Beispiel-Feature Query wird ausgeführt, wenn der Browser `row-gap` nicht unterstützt.

```html live-sample___not
<div class="box">
  If your browser does not support row-gap, the content will be darkgreen with a
  dashed border.
</div>
```

```css live-sample___not
body {
  font: 1.2em / 1.5 sans-serif;
}
.box {
  border: 4px solid blue;
  color: blue;
  padding: 1em;
}
@supports not (row-gap: 10px) {
  .box {
    border: 4px dashed darkgreen;
    color: darkgreen;
  }
}
```

{{EmbedLiveSample("not")}}

## Testen für mehr als eine Funktion

Möglicherweise müssen Sie in Ihrer Feature Query die Unterstützung für mehr als eine Eigenschaft testen. Dazu können Sie eine Liste von Funktionen einfügen, die durch `and` Schlüsselwörter getrennt sind:

```css
/* multiple feature `@supports` at-rule */
@supports (property1: value) and (property2: value) {
  /* CSS rules to apply */
}
```

Zum Beispiel, wenn das CSS, das Sie ausführen möchten, erfordert, dass der Browser CSS Shapes und CSS Grid unterstützt, könnten Sie eine Regel erstellen, die die Browserunterstützung für beide dieser Funktionen testet. Die folgende Regel gibt nur true zurück, wenn `shape-outside: circle()` und `display: grid` beide vom Browser unterstützt werden.

```html live-sample___and
<div class="box">
  If your browser supports <code>display: grid</code> and
  <code>shape-outside: circle()</code>, the content will be darkgreen with a
  dashed border.
</div>
```

```css live-sample___and
body {
  font: 1.2em / 1.5 sans-serif;
}
.box {
  border: 4px solid blue;
  color: blue;
  padding: 1em;
}
@supports (display: grid) and (shape-outside: circle()) {
  .box {
    border: 4px dashed darkgreen;
    color: darkgreen;
  }
}
```

{{EmbedLiveSample("and")}}

## Testen auf mindestens eine von mehreren Funktionen

Sie können auch `or` verwenden, um CSS nur anzuwenden, wenn eine oder mehrere Deklarationen unterstützt werden:

```css
/* any feature `@supports` at-rule */
@supports (property1: value) or (property2: value) {
  /* CSS rules to apply */
}
```

Dies kann besonders nützlich sein, wenn eine Funktion mit einem Vendorspezifischen Präfix versehen ist, da Sie für die Standard-Eigenschaft sowie alle Vendorspezifischen Präfixe testen können.

```html live-sample___or
<div class="box">
  The text and border will be green if your browser supports font smoothing.
</div>
```

```css live-sample___or
body {
  font: 1.2em / 1.5 sans-serif;
}
.box {
  border: 4px solid blue;
  color: blue;
  padding: 1em;
}
@supports (font-smooth: always) or (-webkit-font-smoothing: antialiased) {
  .box {
    border: 4px dashed darkgreen;
    color: darkgreen;
  }
}
```

{{EmbedLiveSample("or")}}

## Zusätzliche Optionen für Feature Queries

Feature Queries sind nicht auf Eigenschaft-Wert-Paare beschränkt. Sie können [`font-tech()`](/de/docs/Web/CSS/Reference/At-rules/@supports#font-tech), [`font-format()`](/de/docs/Web/CSS/Reference/At-rules/@supports#font-format), und [`selector()`](/de/docs/Web/CSS/Reference/At-rules/@supports#function_syntax) Funktionen in Ihren Feature Queries einfügen, um CSS selektiv anzuwenden, basierend darauf, ob der User-Agent eine bestimmte Schrifttechnologie, ein Schriftformat oder eine Selektorsyntax unterstützt.

Zum Beispiel kann die `selector()` Funktion verwendet werden, um ein Stylesheet für Browser zu importieren, die ein vendorspezifisches Pseudo-Element unterstützen:

```css
/* A `selector()` query within a `supports()` function */
@import "/css/webkitShadowStyles.css"
  supports(selector(::-webkit-inner-spin-button));
```

## Beispiele

### Browser-Unterstützungstest

In diesem Beispiel prüfen wir, ob der Browser die `AccentColor` {{cssxref("system-color")}} unterstützt und verwenden `display: none`, um die standardmäßige "nicht unterstützt" Nachricht in eine "unterstützt" Nachricht zu ändern, wenn der Farbtyp unterstützt wird.

#### HTML

```html
<p class="accentcolor">
  Your browser does <span>not</span> support <code>AccentColor</code> as a color
  value.
</p>
```

#### CSS

```css
body {
  font: 1.2em / 1.5 sans-serif;
}
p {
  padding: 1em;
}
@supports (color: AccentColor) {
  p {
    color: green;
    border: 2px solid;
  }
  span {
    display: none;
  }
}
@supports not (color: AccentColor) {
  p {
    color: red;
  }
}
```

#### Ergebnis

{{EmbedLiveSample("Browser support test")}}

## Einschränkungen von Feature Queries

Die `@supports` Regel prüft, ob Browser in der Lage sind, ein oder mehrere Eigenschafts-/Wertpaare zu parsen, und damit, ob sie behaupten, die zugehörige(n) Funktion(en) zu unterstützen. Wenn die Eigenschafts-/Wertpaare von einem Browser verstanden werden, gibt es eine positive Antwort zurück. Feature Queries prüfen, ob Deklarationen von einem Browser als gültig betrachtet werden, können aber nicht verwendet werden, um zu prüfen, ob eine Funktion ordnungsgemäß ohne Fehler oder Spezifikationsverletzungen unterstützt wird. Feature Queries können nicht für _partielle Implementierungen_ testen.

## Zusammenfassung

Feature Queries sind ein nützliches Werkzeug zur progressiven Verbesserung einer Website. Sie ermöglichen es Ihnen, eine gute Lösung für alle Browser und eine erweiterte Lösung für Browser, die neuere Eigenschaften und Werte unterstützen, bereitzustellen.

Sie müssen keine Feature Queries verwenden, um neue CSS-Funktionen zu verwenden; das CSS-Fehlerhandling bedeutet, dass der Browser einfach CSS ignoriert, das er noch nicht erkennt. Allerdings sind Feature Queries eine nützliche Alternative zu Fallback-Deklarationen und ermöglichen das Schreiben von Code, der letztendlich überall unterstützt werden kann.

## Siehe auch

- [CSS-Bedingungsregelmodul](/de/docs/Web/CSS/Guides/Conditional_rules)
- [Verwenden von CSS-Media-Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [Unterstützung älterer Browser: Feature Queries](/de/docs/Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers#feature_queries)
- [Erkennung von Browserfunktionen: CSS `@supports`](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection#supports)
