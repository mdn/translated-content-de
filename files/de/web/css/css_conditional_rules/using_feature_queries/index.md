---
title: Verwendung von Feature-Queries
slug: Web/CSS/CSS_conditional_rules/Using_feature_queries
l10n:
  sourceCommit: 26f9fbee05fb92b584d44fba4359e86796484aa6
---

{{CSSRef}}

**Feature-Queries** sind bedingte Gruppenregeln, die testen, ob der User Agent eine oder mehrere CSS-Funktionen unterstützt oder nicht, wie z.B. CSS-Eigenschaften und Eigenschaftswerte. Feature-Queries geben Webentwicklern eine Möglichkeit, zu testen, ob ein Browser eine bestimmte Funktion unterstützt, und dann CSS bereitzustellen, das basierend auf dem Ergebnis dieses Tests ausgeführt wird. In diesem Leitfaden lernen Sie, wie Sie progressive Erweiterung mit Feature-Queries implementieren.

Feature-Queries werden mit der CSS-At-Regel [`@supports`](/de/docs/Web/CSS/@supports) (oder der `supports()` Funktion innerhalb von [`@import`](/de/docs/Web/CSS/@import)-At-Regeln) erstellt.

## Syntax

CSS-Feature-Queries sind Teil des [CSS-Bedingte Regeln](/de/docs/Web/CSS/CSS_conditional_rules) Moduls, das auch die Medienabfrage [`@media`](/de/docs/Web/CSS/@media) At-Regel definiert. Feature-Queries verhalten sich ähnlich wie [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries). Der Unterschied besteht darin, dass Sie bei einer Medienabfrage etwas über die Umgebung testen, in der die Webseite läuft, während Sie bei Feature-Queries die Unterstützung von CSS-Funktionen durch den Browser testen.

Eine Feature-Query besteht aus der `@supports`-At-Regel, gefolgt von der Unterstützungsbedingung oder einer `supports()` Funktion und Deklarationsparameter innerhalb einer `@import`-At-Regelerklärung:

```plain
/* `@supports` at-rule */
@supports <support-condition> {
  /* CSS rules to apply */
}

/* `supports()` function */
@import url_to_import supports(<declaration>);
```

Zum Beispiel können wir einen Satz von Stilen anwenden oder ein ganzes Stylesheet importieren, wenn der User-Agent `red` als gültigen Wert für die CSS-{{cssxref("color")}}-Eigenschaft unterstützt:

```css
/* `@supports` at-rule */
@supports (color: red) {
  /* CSS rules to apply */
}

/* `supports()` function */
@import "/css/styles.css" supports(color: red);
```

Ein weiteres Beispiel: Wenn Sie überprüfen möchten, ob ein Browser die `row-gap`-Eigenschaft unterstützt, würden Sie folgende Feature-Query schreiben. Es ist in vielen Fällen egal, welchen Wert Sie verwenden: Wenn Sie lediglich überprüfen möchten, ob der Browser diese Eigenschaft unterstützt, reicht jeder gültige Wert aus.

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

Der Wertteil des Eigenschaft-Wert-Paares ist wichtiger, wenn Sie neue Werte für eine bestimmte Eigenschaft testen. Alle Browser unterstützen `color: red`: Dies stammt aus CSS1. Es gibt jedoch oft zusätzliche Werte, die zu Eigenschaften in CSS hinzugefügt werden, wie [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors), die möglicherweise nicht unterstützt werden. Feature-Queries ermöglichen das Testen von Eigenschafts- und Wertpaaren, was bedeutet, dass wir die Unterstützung für Werte erkennen können.

In Erweiterung des obigen `color`-Eigenschaft-Beispiels überprüfen wir hier, ob der Browser die `color: AccentColor`-Deklaration unterstützt:

```css
/* `@supports` at-rule */
@supports (color: AccentColor) {
  /* CSS rules to apply */
}

/* `supports()` function */
@import "/css/styles.css" supports(color: AccentColor);
```

In diesen Beispielen haben wir Feature-Queries verwendet, um zu prüfen, ob der User-Agent einen bestimmten Wert einer CSS-Eigenschaft unterstützt, wobei die einzelne Deklaration in Klammern aufgeführt wird. Sie können für mehrere Eigenschaftswerte oder das Fehlen von Unterstützung testen.

## Testen des Fehlens von Unterstützung

Zusätzlich zur Frage, ob der Browser eine Funktion unterstützt, können Sie das Gegenteil testen, indem Sie das `not`-Schlüsselwort hinzufügen:

```css
/* `@supports` at-rule with `not` */
@supports not (property: value) {
  /* CSS rules to apply */
}
```

Das CSS innerhalb der folgenden Beispiel-Feature-Query wird ausgeführt, wenn der Browser `row-gap` nicht unterstützt.

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

## Testen von mehr als einer Funktion

Es kann erforderlich sein, die Unterstützung für mehr als eine Eigenschaft in Ihrer Feature-Query zu testen. Dazu können Sie eine Liste von Funktionen einfügen, die getestet werden sollen, getrennt durch `and`-Schlüsselwörter:

```css
/* multiple feature `@supports` at-rule */
@supports (property1: value) and (property2: value) {
  /* CSS rules to apply */
}
```

Wenn z. B. das CSS, das Sie ausführen möchten, erfordert, dass der Browser CSS Shapes und CSS Grid unterstützt, könnten Sie eine Regel erstellen, die die Unterstützung für beide Funktionen durch den Browser testet. Die folgende Regel wird nur dann als wahr zurückgegeben, wenn sowohl `shape-outside: circle()` als auch `display: grid` vom Browser unterstützt werden.

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

## Testen von mindestens einer von mehreren Funktionen

Sie können auch `or` verwenden, um CSS nur dann anzuwenden, wenn eine oder mehrere Deklarationen unterstützt werden:

```css
/* any feature `@supports` at-rule */
@supports (property1: value) or (property2: value) {
  /* CSS rules to apply */
}
```

Dies kann besonders nützlich sein, wenn eine Funktion Anbieterpräfixe hat, da Sie die standardmäßige Eigenschaft plus alle Anbieterpräfixe testen können.

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

## Zusätzliche Optionen für Feature-Queries

Feature-Queries sind nicht auf Eigenschaft-Wert-Paare beschränkt. Sie können [`font-tech()`](/de/docs/Web/CSS/@supports#font-tech), [`font-format()`](/de/docs/Web/CSS/@supports#font-format), und [`selector()`](/de/docs/Web/CSS/@supports#function_syntax)-Funktionen in Ihre Feature-Queries aufnehmen, um selektiv CSS auf Grundlage der Unterstützung durch den User Agent für eine bestimmte Schrifttechnologie, ein Schriftformat oder eine Selektorsyntax anzuwenden.

Zum Beispiel kann die `selector()`-Funktion verwendet werden, um ein Stylesheet für Browser zu importieren, die ein Anbieterpräfix für Pseudoelemente unterstützen:

```css
/* A `selector()` query within a `supports()` function */
@import "/css/webkitShadowStyles.css"
  supports(selector(::-webkit-inner-spin-button));
```

## Beispiele

### Browser-Unterstützungstest

In diesem Beispiel prüfen wir, ob der Browser die `AccentColor` {{cssxref("system-color")}} unterstützt und verwenden `display: none`, um die Standardmeldung „nicht unterstützt“ in eine „unterstützt“-Nachricht zu ändern, wenn der Farbtyp unterstützt wird.

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

## Einschränkungen von Feature-Queries

Die `@supports`-Regel testet, ob Browser ein oder mehrere Eigenschaft/Wert-Paare analysieren können, und daher ob sie behaupten, die damit verbundene(n) Funktion(en) zu unterstützen. Wenn die Eigenschaft/Wert-Paare von einem Browser verstanden werden, wird eine positive Antwort zurückgegeben. Feature-Queries überprüfen, ob Deklarationen von einem Browser als gültig angesehen werden, können jedoch nicht verwendet werden, um zu überprüfen, ob eine Funktion ohne Fehler oder Spezifikationsabweichungen richtig unterstützt wird. Feature-Queries können nicht für _teilweise Implementierungen_ testen.

## Zusammenfassung

Feature-Queries sind ein nützliches Werkzeug zur progressiven Verbesserung einer Website. Sie ermöglichen es Ihnen, eine gute Lösung für alle Browser bereitzustellen sowie eine erweiterte Lösung für Browser, die neuere Eigenschaften und Werte unterstützen.

Sie müssen Feature-Queries nicht verwenden, um neue CSS-Funktionen zu nutzen; das Fehlermanagement von CSS bedeutet, dass der Browser CSS, das er noch nicht erkennt, einfach ignoriert. Feature-Queries sind jedoch eine nützliche Alternative zu Fallback-Deklarationen und ermöglichen es, einmal geschriebenen Code zu verwenden, der schließlich überall unterstützt wird.

## Siehe auch

- [CSS-Bedingte Regeln](/de/docs/Web/CSS/CSS_conditional_rules) Modul
- [Verwendung von CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Unterstützung älterer Browser: Feature-Queries](/de/docs/Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers#feature_queries)
- [Browser-Feature-Erkennung: CSS `@supports`](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection#supports)
