---
title: Verwenden von Feature Queries
slug: Web/CSS/CSS_conditional_rules/Using_feature_queries
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

**Feature Queries** sind bedingte Gruppierungsregeln, die testen, ob der User Agent eine oder mehrere CSS-Funktionen, wie CSS-Eigenschaften und Eigenschaftswerte, unterstützt oder nicht. Feature Queries bieten Webentwicklern eine Möglichkeit, zu testen, ob ein Browser eine bestimmte Funktion unterstützt und dann CSS bereitzustellen, das nur basierend auf dem Ergebnis dieses Tests ausgeführt wird. In diesem Leitfaden lernen Sie, wie Sie mithilfe von Feature Queries eine progressive Verbesserung implementieren.

Feature Queries werden mit der CSS-At-Regel [`@supports`](/de/docs/Web/CSS/@supports) (oder der `supports()`-Funktion innerhalb von [`@import`](/de/docs/Web/CSS/@import)-At-Regeln) erstellt.

## Syntax

CSS-Feature Queries sind Teil des [Moduls CSS-Bedingungsregeln](/de/docs/Web/CSS/CSS_conditional_rules), welches auch die Media Query [`@media`](/de/docs/Web/CSS/@media) At-Regel definiert. Feature Queries verhalten sich ähnlich wie [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries). Der Unterschied besteht darin, dass Sie bei einer Media Query etwas über die Umgebung testen, in der die Webseite läuft, während Sie mit Feature Queries die Unterstützung von CSS-Features durch den Browser testen.

Eine Feature Query besteht aus der `@supports` At-Regel, gefolgt von der Unterstützungsbedingung oder einer `supports()`-Funktion und Deklarationsparameter innerhalb einer `@import` At-Regel-Deklaration:

```css
/* `@supports` at-rule */
@supports <support-condition> {
  CSS rules to apply
}

/* `supports()` function */
@import url_to_import supports(<declaration>);
```

Zum Beispiel können wir einen Satz von Stilen anwenden oder ein gesamtes Stylesheet importieren, wenn der User-Agent `red` als gültigen Wert für die CSS {{cssxref("color")}} Eigenschaft unterstützt:

```css
/* `@supports` at-rule */
@supports (color: red) {
  CSS rules to apply
}

/* `supports()` function */
@import `/css/styles.css` supports(color: red);
```

Ein weiteres Beispiel: Wenn Sie prüfen möchten, ob ein Browser die Eigenschaft `row-gap` unterstützt, würden Sie die folgende Feature Query schreiben. In vielen Fällen ist es egal, welchen Wert Sie verwenden: Wenn Sie nur überprüfen möchten, dass der Browser diese Eigenschaft unterstützt, reicht ein beliebiger gültiger Wert aus.

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

Der Wertteil des Eigenschaft-Wert-Paares ist wichtiger, wenn Sie auf neue Werte einer bestimmten Eigenschaft testen. Alle Browser unterstützen `color: red`: Dies stammt aus CSS1. Es gibt jedoch oft zusätzliche Werte, die zu Eigenschaften in CSS hinzugefügt werden, wie [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors), die möglicherweise nicht unterstützt werden. Feature Queries ermöglichen das Testen von Eigenschafts- und Werte-Paaren, was bedeutet, dass wir die Unterstützung für Werte erkennen können.

Aufbauend auf dem obigen Beispiel der `color`-Eigenschaft prüfen wir hier, ob der Browser die Deklaration `color: AccentColor` unterstützt:

```css
/* `@supports` at-rule */
@supports (color: AccentColor) {
  CSS rules to apply
}

/* `supports()` function */
@import `/css/styles.css` supports(color: AccentColor);
```

In diesen Beispielen haben wir Feature Queries verwendet, um zu überprüfen, ob der User-Agent einen bestimmten Wert einer CSS-Eigenschaft unterstützt, indem wir die einzelne Deklaration in Klammern aufführen. Sie können auf mehrere Eigenschaftswerte oder das Fehlen von Unterstützung testen.

## Testen auf fehlende Unterstützung

Zusätzlich zur Frage, ob der Browser eine Funktion unterstützt, können Sie das Gegenteil testen, indem Sie das `not` Schlüsselwort hinzufügen:

```css
/* `@supports` at-rule with `not` */
@supports not (property: value) {
  CSS rules to apply
}
```

Das CSS innerhalb des folgenden Beispiel-Feature-Query wird ausgeführt, wenn der Browser `row-gap` nicht unterstützt.

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

Möglicherweise müssen Sie in Ihrer Feature Query die Unterstützung für mehr als eine Eigenschaft überprüfen. Dazu können Sie eine Liste von Funktionen einfügen, die Sie überprüfen möchten, getrennt durch `and` Schlüsselwörter:

```css
/* multiple feature `@supports` at-rule */
@supports (property1: value) and (property2: value) {
  CSS rules to apply
}
```

Zum Beispiel: Wenn das CSS, das Sie ausführen möchten, erfordert, dass der Browser CSS Shapes und CSS Grid unterstützt, könnten Sie eine Regel erstellen, die die Unterstützung des Browsers für beide Funktionen testet. Die folgende Regel wird nur wahr zurückgeben, wenn `shape-outside: circle()` und `display: grid` beide vom Browser unterstützt werden.

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
  CSS rules to apply
}
```

Das kann besonders nützlich sein, wenn eine Funktion mit einem Anbieterpräfix versehen ist, da Sie das Standardproperty sowie alle Anbieterpräfixe testen können.

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

Feature Queries sind nicht auf Eigenschaft-Wert-Paare beschränkt. Sie können Funktionen wie [`font-tech()`](/de/docs/Web/CSS/@supports#font-tech), [`font-format()`](/de/docs/Web/CSS/@supports#font-format), und [`selector()`](/de/docs/Web/CSS/@supports#function_syntax) in Ihren Feature Queries verwenden, um CSS selektiv anzuwenden, basierend darauf, ob der User-Agent eine bestimmte Schrifttechnologie, Schriftformat oder Selektorsyntax unterstützt.

Zum Beispiel kann die `selector()`-Funktion verwendet werden, um ein Stylesheet für Browser zu importieren, die ein Anbieterpräfix-Pseudoelement unterstützen:

```css
/* A `selector()` query within a `supports()` function */
@import `/css/webkitShadowStyles.css`
  supports(selector(::-webkit-inner-spin-button));
```

## Beispiele

### Browser-Unterstützungstest

In diesem Beispiel prüfen wir, ob der Browser die `AccentColor` {{cssxref("system-color")}} unterstützt und verwenden `display: none`, um die Standardmeldung "nicht unterstützt" in eine "unterstützt"-Meldung zu ändern, wenn der Farbtyp unterstützt wird.

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

Die `@supports`-Regel testet, ob Browser ein oder mehrere Eigenschaft/Wert-Paare parsen können und daher behaupten, die zugehörige(n) Funktion(en) zu unterstützen. Wenn die Eigenschaft/Wert-Paare von einem Browser verstanden werden, gibt es eine positive Antwort. Feature Queries überprüfen, ob Deklarationen von einem Browser als gültig betrachtet werden, können aber nicht verwendet werden, um zu überprüfen, ob eine Funktion ohne Fehler oder Spezifikationsverletzungen richtig unterstützt wird. Feature Queries können nicht auf _teilweise Implementierungen_ testen.

## Zusammenfassung

Feature Queries sind ein nützliches Werkzeug zur progressiven Verbesserung einer Website. Sie ermöglichen es Ihnen, eine gute Lösung für alle Browser bereitzustellen und eine verbesserte Lösung für Browser, die neuere Eigenschaften und Werte unterstützen.

Sie müssen keine Feature Queries verwenden, um neue CSS-Funktionen zu nutzen; dank des Fehlermanagements in CSS ignoriert der Browser einfach CSS, das er noch nicht erkennt. Feature Queries sind jedoch eine nützliche Alternative zu Fallback-Deklarationen und ermöglichen das einmalige Schreiben von Code, der schließlich überall unterstützt werden kann.

### Siehe auch

- [CSS-Bedingungsregeln](/de/docs/Web/CSS/CSS_conditional_rules) Modul
- [Verwendung von CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Unterstützung älterer Browser: Feature Queries](/de/docs/Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers#feature_queries)
- [Erkennung von Browser-Funktionen: CSS `@supports`](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection#supports)
