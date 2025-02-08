---
title: Verwendung von Feature Queries
slug: Web/CSS/CSS_conditional_rules/Using_feature_queries
l10n:
  sourceCommit: dedba82f11d06e50a2742ed285a321820baf4977
---

{{CSSRef}}

**Feature Queries** sind bedingte Gruppierungsregeln, die testen, ob der Benutzeragent eine oder mehrere CSS-Funktionen, wie CSS-Eigenschaften und Eigenschaftswerte, unterstützt oder nicht unterstützt. Feature Queries geben Webentwicklern eine Möglichkeit, zu überprüfen, ob ein Browser eine bestimmte Funktion unterstützt, und dann CSS bereitzustellen, das nur auf der Grundlage des Ergebnisses dieses Tests ausgeführt wird. In diesem Leitfaden lernen Sie, wie Sie Progressive Enhancement mit Feature Queries implementieren.

Feature Queries werden mit der CSS-At-Regel [`@supports`](/de/docs/Web/CSS/@supports) (oder der Funktion `supports()` innerhalb von [`@import`](/de/docs/Web/CSS/@import)-At-Regeln) erstellt.

## Syntax

CSS Feature Queries sind Teil des Moduls [CSS Conditional Rules](/de/docs/Web/CSS/CSS_conditional_rules), das auch die Media Query-At-Regel [`@media`](/de/docs/Web/CSS/@media) definiert. Feature Queries verhalten sich ähnlich wie [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries). Der Unterschied besteht darin, dass bei einer Media Query etwas über die Umgebung getestet wird, in der die Webseite ausgeführt wird, während bei Feature Queries die Browser-Unterstützung für CSS-Funktionen getestet wird.

Eine Feature Query besteht aus der `@supports`-At-Regel, gefolgt von der Support-Bedingung oder einer `supports()`-Funktion und einem Deklarationsparameter innerhalb einer `@import`-At-Regel-Deklaration:

```css
/* `@supports` at-rule */
@supports <support-condition> {
  CSS rules to apply
}

/* `supports()` function */
@import url_to_import supports(<declaration>);
```

Zum Beispiel können wir einen Satz von Stilen anwenden oder ein gesamtes Stylesheet importieren, wenn der Benutzeragent `red` als gültigen Wert für die CSS-{{cssxref("color")}}-Eigenschaft unterstützt:

```css
/* `@supports` at-rule */
@supports (color: red) {
  CSS rules to apply
}

/* `supports()` function */
@import `/css/styles.css` supports(color: red);
```

Ein weiteres Beispiel: Wenn Sie überprüfen möchten, ob ein Browser die Eigenschaft `row-gap` unterstützt, würden Sie die folgende Feature Query schreiben. In vielen Fällen spielt es keine Rolle, welchen Wert Sie verwenden: Wenn Sie nur überprüfen möchten, ob der Browser diese Eigenschaft unterstützt, genügt jeder gültige Wert.

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

Der Wert des Eigenschaften-Wert-Paares ist wichtiger, wenn Sie für neue Werte einer bestimmten Eigenschaft testen. Alle Browser unterstützen `color: red`: das stammt noch aus CSS1. Es gibt jedoch oft zusätzliche Werte, die Eigenschaften in CSS hinzugefügt werden, wie [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors), die möglicherweise nicht unterstützt werden. Feature Queries ermöglichen das Testen von Eigenschafts- und Wertpaaren, was bedeutet, dass wir die Unterstützung von Werten erkennen können.

Erweiternd auf das Beispiel der `color`-Eigenschaft überprüfen wir hier, ob der Browser die Deklaration `color: AccentColor` unterstützt:

```css
/* `@supports` at-rule */
@supports (color: AccentColor) {
  CSS rules to apply
}

/* `supports()` function */
@import `/css/styles.css` supports(color: AccentColor);
```

In diesen Beispielen haben wir Feature Queries verwendet, um zu überprüfen, ob der Benutzeragent einen bestimmten Wert einer CSS-Eigenschaft unterstützt, indem wir die einzelne Deklaration in Klammern gesetzt haben. Sie können die Unterstützung für mehrere Eigenschaftswerte oder den Mangel an Unterstützung testen.

## Testen auf fehlende Unterstützung

Zusätzlich zur Frage, ob der Browser eine Funktion unterstützt, können Sie das Gegenteil testen, indem Sie das Schlüsselwort `not` hinzufügen:

```css
/* `@supports` at-rule with `not` */
@supports not (property: value) {
  CSS rules to apply
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

## Testen mehrerer Funktionen

Sie müssen möglicherweise die Unterstützung für mehr als eine Eigenschaft in Ihrer Feature Query testen. Dazu können Sie eine Liste von zu testenden Funktionen angeben, getrennt durch `and`-Schlüsselwörter:

```css
/* multiple feature `@supports` at-rule */
@supports (property1: value) and (property2: value) {
  CSS rules to apply
}
```

Zum Beispiel könnten Sie, wenn das CSS, das Sie ausführen möchten, erfordert, dass der Browser CSS Shapes und CSS Grid unterstützt, eine Regel erstellen, die die Browser-Unterstützung für beide dieser Funktionen testet. Die folgende Regel wird nur dann als "wahr" zurückgegeben, wenn `shape-outside: circle()` und `display: grid` beide vom Browser unterstützt werden.

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

Sie können auch `or` verwenden, um CSS nur dann anzuwenden, wenn eine oder mehrere Deklarationen unterstützt werden:

```css
/* any feature `@supports` at-rule */
@supports (property1: value) or (property2: value) {
  CSS rules to apply
}
```

Dies kann besonders nützlich sein, wenn eine Funktion mit einem Vendor-Präfix versehen ist, da Sie auf die Standard-Eigenschaft und alle Vendor-Präfixe testen können.

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

Feature Queries sind nicht auf Eigenschafts-Wert-Paare beschränkt. Sie können Funktionen wie [`font-tech()`](/de/docs/Web/CSS/@supports#font-tech), [`font-format()`](/de/docs/Web/CSS/@supports#font-format) und [`selector()`](/de/docs/Web/CSS/@supports#function_syntax) in Ihren Feature Queries verwenden, um CSS selektiv anzuwenden, basierend darauf, ob der Benutzeragent eine bestimmte Schriftart-Technologie, ein bestimmtes Schriftart-Format oder eine bestimmte Selektorsyntax unterstützt.

Zum Beispiel kann die `selector()`-Funktion verwendet werden, um ein Stylesheet für Browser zu importieren, die ein Vendor-Präfix-Pseudoelement unterstützen:

```css
/* A `selector()` query within a `supports()` function */
@import `/css/webkitShadowStyles.css`
  supports(selector(::-webkit-inner-spin-button));
```

## Beispiele

### Browser-Unterstützungstest

In diesem Beispiel überprüfen wir, ob der Browser das `AccentColor`-{{cssxref("system-color")}} unterstützt, und verwenden `display: none`, um die Standardnachricht "nicht unterstützt" in eine Nachricht "unterstützt" zu ändern, falls der Farbtyp unterstützt wird.

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

Die `@supports`-Regel überprüft, ob Browser eine oder mehrere Eigenschafts-/Wertepaare parsen können und ob sie beanspruchen, die zugehörige(n) Funktion(en) zu unterstützen. Wenn die Eigenschafts-/Wertepaare von einem Browser verstanden werden, gibt er eine positive Rückmeldung zurück. Feature Queries überprüfen, ob Deklarationen von einem Browser als gültig angesehen werden, aber sie können nicht verwendet werden, um zu prüfen, ob eine Funktion ordnungsgemäß ohne Fehler oder Spezifikationsverletzungen unterstützt wird. Feature Queries können nicht auf _teilweise Implementierungen_ testen.

## Zusammenfassung

Feature Queries sind ein nützliches Werkzeug zur schrittweisen Verbesserung einer Website. Sie ermöglichen es, eine gute Lösung für alle Browser bereitzustellen und eine erweiterte Lösung für Browser, die neuere Eigenschaften und Werte unterstützen.

Sie müssen Feature Queries nicht verwenden, um neue CSS-Funktionen zu verwenden; die Fehlerbehandlung von CSS bedeutet, dass der Browser einfach CSS ignoriert, das er noch nicht erkennt. Feature Queries sind jedoch eine nützliche Alternative zu Fallback-Deklarationen und ermöglichen das Schreiben von Code, der schließlich überall unterstützt werden kann.

## Siehe auch

- [Modul CSS Conditional Rules](/de/docs/Web/CSS/CSS_conditional_rules)
- [Verwendung von CSS-Media-Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Unterstützung älterer Browser: Feature Queries](/de/docs/Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers#feature_queries)
- [Feature-Erkennung im Browser: CSS `@supports`](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection#supports)
