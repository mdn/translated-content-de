---
title: Verwendung von Feature-Abfragen
slug: Web/CSS/CSS_conditional_rules/Using_feature_queries
l10n:
  sourceCommit: b2c8dcdae36907a87d1d1b9393ca4a35ebc765d6
---

{{CSSRef}}

**Feature-Abfragen** sind bedingte Gruppenregeln, die testen, ob der Benutzeragent eine oder mehrere CSS-Funktionen unterstützt oder nicht, wie z.B. CSS-Eigenschaften und Eigenschaftswerte. Feature-Abfragen geben Webentwicklern die Möglichkeit zu überprüfen, ob ein Browser eine bestimmte Funktion unterstützt, und dann CSS bereitzustellen, das nur basierend auf dem Ergebnis dieses Tests ausgeführt wird. In diesem Leitfaden lernen Sie, wie Sie progressive Verbesserung mit Feature-Abfragen implementieren.

Feature-Abfragen werden mit der CSS-At-Regel [`@supports`](/de/docs/Web/CSS/@supports) (oder der `supports()`-Funktion innerhalb von [`@import`](/de/docs/Web/CSS/@import) At-Regeln) erstellt.

## Syntax

CSS-Feature-Abfragen sind Teil des [CSS-Bedingungsregel](/de/docs/Web/CSS/CSS_conditional_rules) Moduls, das auch die Medienabfrage-At-Regel [`@media`](/de/docs/Web/CSS/@media) definiert. Feature-Abfragen verhalten sich ähnlich wie [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries). Der Unterschied besteht darin, dass Sie bei einer Medienabfrage etwas über die Umgebung testen, in der die Webseite ausgeführt wird, während Sie bei Feature-Abfragen die Unterstützung von CSS-Funktionen im Browser testen.

Eine Feature-Abfrage besteht aus der `@supports`-At-Regel, gefolgt von der Support-Bedingung oder einer `supports()`-Funktion und einem Deklarationsparameter innerhalb einer `@import`-At-Regel-Deklaration:

```css
/* `@supports` at-rule */
@supports <support-condition> {
  /* CSS rules to apply */
}

/* `supports()` function */
@import url_to_import supports(<declaration>);
```

Zum Beispiel können wir einen Satz von Stilen anwenden oder ein gesamtes Stylesheet importieren, wenn der Benutzeragent `red` als gültigen Wert für die CSS-{{cssxref("color")}}-Eigenschaft unterstützt:

```css
/* `@supports` at-rule */
@supports (color: red) {
  /* CSS rules to apply */
}

/* `supports()` function */
@import "/css/styles.css" supports(color: red);
```

Ein weiteres Beispiel: Wenn Sie überprüfen möchten, ob ein Browser die Eigenschaft `row-gap` unterstützt, würden Sie die folgende Feature-Abfrage schreiben. Es spielt in vielen Fällen keine Rolle, welchen Wert Sie verwenden: Wenn Sie nur überprüfen möchten, ob der Browser diese Eigenschaft unterstützt, reicht jeder gültige Wert aus.

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

Der Wertteil des Eigenschafts-Wert-Paares ist wichtiger, wenn Sie neue Werte einer bestimmten Eigenschaft testen. Alle Browser unterstützen `color: red`: das stammt noch von CSS1. Es gibt jedoch oft zusätzliche Werte, die Eigenschaften in CSS hinzugefügt werden, wie [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors), die möglicherweise nicht unterstützt werden. Feature-Abfragen ermöglichen das Testen von Eigenschafts- und Werte-Paaren, was bedeutet, dass wir die Unterstützung für Werte erkennen können.

Das obige Beispiel zur `color`-Eigenschaft fortführend, überprüfen wir hier, ob der Browser die `color: AccentColor`-Deklaration unterstützt:

```css
/* `@supports` at-rule */
@supports (color: AccentColor) {
  /* CSS rules to apply */
}

/* `supports()` function */
@import "/css/styles.css" supports(color: AccentColor);
```

In diesen Beispielen haben wir Feature-Abfragen verwendet, um zu prüfen, ob der Benutzeragent einen bestimmten Wert einer CSS-Eigenschaft unterstützt und die einzelne Deklaration in Klammern aufgelistet. Sie können auf mehrere Eigenschaftswerte oder das Fehlen der Unterstützung testen.

## Testen auf fehlende Unterstützung

Zusätzlich zur Frage, ob der Browser eine Funktion unterstützt, können Sie das Gegenteil testen, indem Sie das Keyword `not` hinzufügen:

```css
/* `@supports` at-rule with `not` */
@supports not (property: value) {
  /* CSS rules to apply */
}
```

Das CSS innerhalb der folgenden Beispiel-Feature-Abfrage wird ausgeführt, wenn der Browser `row-gap` nicht unterstützt.

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

## Testen auf mehr als ein Feature

Sie müssen möglicherweise die Unterstützung für mehr als eine Eigenschaft in Ihrer Feature-Abfrage testen. Dazu können Sie eine Liste von zu testenden Funktionen einfügen, getrennt durch `and`-Schlüsselwörter:

```css
/* multiple feature `@supports` at-rule */
@supports (property1: value) and (property2: value) {
  /* CSS rules to apply */
}
```

Zum Beispiel: Wenn das CSS, das Sie ausführen möchten, erfordert, dass der Browser CSS Shapes und CSS Grid unterstützt, könnten Sie eine Regel erstellen, die die Unterstützung für beide Funktionen im Browser testet. Die folgende Regel wird nur dann wahr, wenn sowohl `shape-outside: circle()` als auch `display: grid` im Browser unterstützt werden.

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

Sie können auch `or` verwenden, um CSS nur anzuwenden, wenn eine oder mehrere Deklarationen unterstützt werden:

```css
/* any feature `@supports` at-rule */
@supports (property1: value) or (property2: value) {
  /* CSS rules to apply */
}
```

Dies kann besonders nützlich sein, wenn eine Funktion mit einem Anbieter-Präfix versehen ist, da Sie die Standard-Eigenschaft plus alle Anbieter-Präfixe testen können.

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

## Zusätzliche Optionen für Feature-Abfragen

Feature-Abfragen sind nicht nur auf Eigenschafts-Wert-Paare beschränkt. Sie können [`font-tech()`](/de/docs/Web/CSS/@supports#font-tech), [`font-format()`](/de/docs/Web/CSS/@supports#font-format) und [`selector()`](/de/docs/Web/CSS/@supports#function_syntax)-Funktionen in Ihren Feature-Abfragen einbeziehen, um CSS selektiv anzuwenden, basierend darauf, ob der Benutzeragent eine angegebene Schriftarttechnologie, ein Schriftformat oder eine Selektorsyntax unterstützt.

Zum Beispiel kann die `selector()`-Funktion verwendet werden, um ein Stylesheet für Browser zu importieren, die ein Anbieter-präfixiertes Pseudo-Element unterstützen:

```css
/* A `selector()` query within a `supports()` function */
@import `/css/webkitShadowStyles.css`
  supports(selector(::-webkit-inner-spin-button));
```

## Beispiele

### Browser-Unterstützungstest

In diesem Beispiel überprüfen wir, ob der Browser die `AccentColor` {{cssxref("system-color")}} unterstützt und verwenden `display: none`, um die Standardnachricht "nicht unterstützt" in eine "unterstützt"-Nachricht zu ändern, wenn der Farbtyp unterstützt wird.

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

## Einschränkungen von Feature-Abfragen

Die `@supports`-Regel testet, ob Browser ein oder mehrere Eigenschafts-/Wert-Paare parsen können, und daher, ob sie behaupten, die zugehörige(n) Funktion(en) zu unterstützen. Wenn die Eigenschafts-/Wert-Paare von einem Browser verstanden werden, gibt es eine positive Antwort zurück. Feature-Abfragen prüfen, ob Deklarationen von einem Browser als gültig angesehen werden, können jedoch nicht verwendet werden, um zu überprüfen, ob eine Funktion ohne Fehler oder Spezifikationsverletzungen ordnungsgemäß unterstützt wird. Feature-Abfragen können keine _teilweisen Implementierungen_ prüfen.

## Zusammenfassung

Feature-Abfragen sind ein nützliches Werkzeug zur progressiven Verbesserung einer Website. Sie ermöglichen Ihnen, eine gute Lösung für alle Browser bereitzustellen und eine verbesserte Lösung für Browser, die neuere Eigenschaften und Werte unterstützen.

Sie müssen keine Feature-Abfragen verwenden, um neue CSS-Funktionen zu nutzen; das CSS-Fehlerhandling bedeutet, dass der Browser einfach CSS ignoriert, das er noch nicht erkennt. Feature-Abfragen sind jedoch eine nützliche Alternative zu Fallback-Deklarationen und ermöglichen das Schreiben von Code, der schließlich überall unterstützt wird.

## Siehe auch

- [CSS-Bedingungsregel](/de/docs/Web/CSS/CSS_conditional_rules) Modul
- [Verwendung von CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Unterstützung älterer Browser: Feature-Abfragen](/de/docs/Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers#feature_queries)
- [Browser-Funktionsprüfung: CSS `@supports`](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection#supports)
