---
title: Verwenden von Feature Queries
slug: Web/CSS/Guides/Conditional_rules/Using_feature_queries
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**Feature Queries** sind bedingte Gruppierungsregeln, die testen, ob der Benutzeragent eine oder mehrere CSS-Features, wie CSS-Eigenschaften und Eigenschaftswerte, unterstützt oder nicht. Feature Queries geben Webentwicklern die Möglichkeit, zu testen, ob ein Browser eine bestimmte Funktion unterstützt, und dann CSS bereitzustellen, das nur basierend auf dem Ergebnis dieses Tests ausgeführt wird. In diesem Leitfaden erfahren Sie, wie Sie progressive Verbesserung mit Feature Queries implementieren.

Feature Queries werden mit der CSS-At-Regel {{cssxref("@supports")}} (oder der `supports()`-Funktion innerhalb von {{cssxref("@import")}}-At-Regeln) erstellt.

## Syntax

CSS Feature Queries sind Teil des [CSS-Bedingungsregeln](/de/docs/Web/CSS/Guides/Conditional_rules)-Moduls, das auch die Medienabfrage {{cssxref("@media")}}-At-Regel definiert. Feature Queries verhalten sich ähnlich wie [Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries/Using). Der Unterschied besteht darin, dass Sie bei einer Medienabfrage etwas über die Umgebung testen, in der die Webseite läuft, während Sie bei Feature Queries die Unterstützung für CSS-Features im Browser testen.

Eine Feature Query besteht aus der `@supports`-At-Regel, gefolgt von der Unterstützungsbedingung oder einer `supports()`-Funktion und Deklarationsparameter innerhalb einer `@import`-At-Regel-Deklaration:

```plain
/* `@supports` at-rule */
@supports <support-condition> {
  /* CSS rules to apply */
}

/* `supports()` function */
@import url_to_import supports(<declaration>);
```

Zum Beispiel können wir eine Reihe von Stilen anwenden oder ein vollständiges Stylesheet importieren, wenn der Benutzeragent `red` als gültigen Wert für die CSS-Eigenschaft {{cssxref("color")}} unterstützt:

```css
/* `@supports` at-rule */
@supports (color: red) {
  /* CSS rules to apply */
}

/* `supports()` function */
@import "/css/styles.css" supports(color: red);
```

Ein weiteres Beispiel: Wenn Sie prüfen möchten, ob ein Browser die Eigenschaft `row-gap` unterstützt, würden Sie die folgende Feature Query schreiben. In vielen Fällen ist es egal, welchen Wert Sie verwenden: Wenn Sie nur überprüfen möchten, ob der Browser diese Eigenschaft unterstützt, reicht jeder gültige Wert aus.

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

Der Wertebereich des Eigenschafts-Wert-Paares ist wichtiger, wenn Sie auf neue Werte einer bestimmten Eigenschaft testen. Alle Browser unterstützen `color: red`: Dies reicht bis zu CSS1 zurück. Es werden jedoch häufig zusätzliche Werte zu Eigenschaften in CSS hinzugefügt, wie [relative Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors), die möglicherweise nicht unterstützt werden. Feature Queries ermöglichen das Testen von Eigenschafts- und Wertepaaren, sodass wir die Unterstützung für Werte erkennen können.

Im obigen Beispiel der `color`-Eigenschaft erweitern wir dies und prüfen, ob der Browser die Deklaration `color: AccentColor` unterstützt:

```css
/* `@supports` at-rule */
@supports (color: AccentColor) {
  /* CSS rules to apply */
}

/* `supports()` function */
@import "/css/styles.css" supports(color: AccentColor);
```

In diesen Beispielen haben wir Feature Queries verwendet, um zu überprüfen, ob der Benutzeragent einen bestimmten Wert einer CSS-Eigenschaft unterstützt, indem wir die einzelne Deklaration in Klammern aufgelistet haben. Sie können für mehrere Eigenschaftswerte oder das Fehlen der Unterstützung testen.

## Testen auf fehlende Unterstützung

Neben der Frage, ob der Browser eine Funktion unterstützt, können Sie das Gegenteil testen, indem Sie das `not`-Schlüsselwort hinzufügen:

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

## Testen auf mehr als eine Funktion

Möglicherweise müssen Sie die Unterstützung für mehr als eine Eigenschaft in Ihrer Feature Query testen. Dazu können Sie eine Liste von Features aufnehmen, die durch `and`-Schlüsselwörter getrennt sind:

```css
/* multiple feature `@supports` at-rule */
@supports (property1: value) and (property2: value) {
  /* CSS rules to apply */
}
```

Wenn das CSS, das Sie verwenden möchten, erfordert, dass der Browser CSS Shapes und CSS Grid unterstützt, könnten Sie eine Regel erstellen, die die Unterstützung des Browsers für beide dieser Funktionen testet. Die folgende Regel gibt nur dann "true" zurück, wenn `shape-outside: circle()` und `display: grid` von dem Browser unterstützt werden.

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

## Testen auf mindestens eines von mehreren Features

Sie können auch `or` verwenden, um CSS nur dann anzuwenden, wenn eine oder mehrere Deklarationen unterstützt werden:

```css
/* any feature `@supports` at-rule */
@supports (property1: value) or (property2: value) {
  /* CSS rules to apply */
}
```

Dies kann besonders nützlich sein, wenn ein Feature von Anbietern vorangestellt ist, da Sie für die Standard-Eigenschaft sowie für beliebige Anbieter-Präfixe testen können.

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

## Zusätzliche Feature Query-Optionen

Feature Queries sind nicht auf Eigenschaft-Wert-Paare beschränkt. Sie können die Funktionen [`font-tech()`](/de/docs/Web/CSS/Reference/At-rules/@supports#font-tech), [`font-format()`](/de/docs/Web/CSS/Reference/At-rules/@supports#font-format) und [`selector()`](/de/docs/Web/CSS/Reference/At-rules/@supports#function_syntax) in Ihren Feature Queries einbeziehen, um CSS selektiv anzuwenden, basierend darauf, ob der Benutzeragent eine bestimmte Schriftechnologie, Schriftformat oder Selektorsyntax unterstützt.

Zum Beispiel kann die `selector()`-Funktion verwendet werden, um ein Stylesheet für Browser zu importieren, die ein Anbieter-Präfix-Pseudoelement unterstützen:

```css
/* A `selector()` query within a `supports()` function */
@import "/css/webkitShadowStyles.css"
  supports(selector(::-webkit-inner-spin-button));
```

## Beispiele

### Browser-Unterstützungs-Test

In diesem Beispiel prüfen wir, ob der Browser das `AccentColor` {{cssxref("system-color")}} unterstützt und verwenden `display: none`, um die Standardnachricht "nicht unterstützt" in eine "unterstützt"-Nachricht zu ändern, wenn der Farbtyp unterstützt wird.

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

Die `@supports`-Regel testet, ob Browser ein oder mehrere Eigenschaft/Wert-Paare analysieren können und daher vorgeben, die zugehörige(n) Funktion(en) zu unterstützen. Wenn die Eigenschaft/Wert-Paare von einem Browser verstanden werden, gibt dieser eine positive Antwort zurück. Feature Queries prüfen, ob Deklarationen von einem Browser als gültig angesehen werden, können jedoch nicht verwendet werden, um zu überprüfen, ob sie eine Funktion ohne Fehler oder Spezifikationsverletzungen richtig unterstützen. Feature Queries können keine _teilweisen Implementierungen_ testen.

## Zusammenfassung

Feature Queries sind ein nützliches Werkzeug für die progressive Verbesserung einer Website. Sie ermöglichen es, eine gute Lösung für alle Browser bereitzustellen und eine verbesserte Lösung für Browser, die neuere Eigenschaften und Werte unterstützen.

Sie müssen keine Feature Queries verwenden, um neue CSS-Eigenschaften zu verwenden; das Fehlerhandling von CSS bedeutet, dass der Browser CSS einfach ignoriert, das er noch nicht erkennt. Feature Queries sind jedoch eine nützliche Alternative zu Fallback-Deklarationen und ermöglichen das Schreiben von Code, der schließlich überall unterstützt werden kann.

## Siehe auch

- [CSS-Bedingungsregeln](/de/docs/Web/CSS/Guides/Conditional_rules) Modul
- [Verwenden von CSS-Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [Unterstützung älterer Browser: Feature Queries](/de/docs/Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers#feature_queries)
- [Browser-Funktionserkennung: CSS `@supports`](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection#supports)
