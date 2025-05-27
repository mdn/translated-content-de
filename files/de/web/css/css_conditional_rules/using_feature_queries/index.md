---
title: Verwenden von Feature-Abfragen
slug: Web/CSS/CSS_conditional_rules/Using_feature_queries
l10n:
  sourceCommit: edb16c0a662d7e719efe67561389a7a087c1ace9
---

{{CSSRef}}

**Feature-Abfragen** sind bedingte Gruppenregeln, die testen, ob der User-Agent eine oder mehrere CSS-Funktionen unterstützt oder nicht, wie z.B. CSS-Eigenschaften und Eigenschaftswerte. Feature-Abfragen geben Webentwicklern die Möglichkeit, zu testen, ob ein Browser eine bestimmte Funktion unterstützt, und dann CSS bereitzustellen, das nur basierend auf dem Ergebnis dieses Tests ausgeführt wird. In diesem Leitfaden lernen Sie, wie Sie progressives Enhancement mit Feature-Abfragen umsetzen.

Feature-Abfragen werden mit der CSS At-Regel [`@supports`](/de/docs/Web/CSS/@supports) (oder der `supports()` Funktion innerhalb von [`@import`](/de/docs/Web/CSS/@import) At-Regeln) erstellt.

## Syntax

CSS-Feature-Abfragen sind Teil des [CSS bedingten Regelwerks](/de/docs/Web/CSS/CSS_conditional_rules) Moduls, welches auch die Media Query [`@media`](/de/docs/Web/CSS/@media) At-Regel definiert. Feature-Abfragen verhalten sich ähnlich wie [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries). Der Unterschied besteht darin, dass bei einer Media Query etwas über die Umgebung getestet wird, in der die Webseite ausgeführt wird, während bei Feature-Abfragen die Unterstützung von CSS-Funktionen durch den Browser getestet wird.

Eine Feature-Abfrage besteht aus der `@supports` At-Regel, gefolgt von der Unterstützungsbedingung oder einer `supports()` Funktion und Deklarationsparameter innerhalb einer `@import` At-Regel-Deklaration:

```css
/* `@supports` at-rule */
@supports <support-condition> {
  /* CSS rules to apply */
}

/* `supports()` function */
@import url_to_import supports(<declaration>);
```

Zum Beispiel können wir einen Satz von Stilen anwenden oder ein komplettes Stylesheet importieren, wenn der User-Agent `red` als gültigen Wert für die CSS {{cssxref("color")}} Eigenschaft unterstützt:

```css
/* `@supports` at-rule */
@supports (color: red) {
  /* CSS rules to apply */
}

/* `supports()` function */
@import "/css/styles.css" supports(color: red);
```

Ein weiteres Beispiel: Wenn Sie prüfen möchten, ob ein Browser die `row-gap`-Eigenschaft unterstützt, würden Sie die folgende Feature-Abfrage schreiben. In vielen Fällen spielt es keine Rolle, welchen Wert Sie verwenden: Wenn Sie nur prüfen möchten, ob der Browser diese Eigenschaft unterstützt, reicht jeder gültige Wert aus.

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

Der Wertteil des Eigenschaft-Wert-Paares ist wichtiger, wenn Sie neue Werte für eine bestimmte Eigenschaft testen. Alle Browser unterstützen `color: red`: dies geht auf CSS1 zurück. Es gibt jedoch oft zusätzliche Werte, die in CSS-Eigenschaften hinzugefügt werden, wie [Relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors), die möglicherweise nicht unterstützt werden. Feature-Abfragen ermöglichen das Testen von Eigenschafts- und Werte-Paaren, was bedeutet, dass wir die Unterstützung für Werte erkennen können.

Erweitern wir das obige Beispiel der `color`-Eigenschaft, prüfen wir hier, ob der Browser die `color: AccentColor` Deklaration unterstützt:

```css
/* `@supports` at-rule */
@supports (color: AccentColor) {
  /* CSS rules to apply */
}

/* `supports()` function */
@import "/css/styles.css" supports(color: AccentColor);
```

In diesen Beispielen haben wir Feature-Abfragen genutzt, um zu prüfen, ob der User-Agent einen bestimmten Wert einer CSS-Eigenschaft unterstützt, indem wir die einzelne Deklaration in Klammern gesetzt haben. Sie können für mehrere Eigenschaftswerte oder den Mangel an Unterstützung testen.

## Prüfen auf fehlende Unterstützung

Zusätzlich dazu, den Browser zu fragen, ob er eine Funktion unterstützt, können Sie auch das Gegenteil testen, indem Sie das `not` Schlüsselwort hinzufügen:

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

## Testen von mehr als einem Feature

Möglicherweise müssen Sie in Ihrer Feature-Abfrage die Unterstützung für mehr als eine Eigenschaft testen. Dazu können Sie eine Liste von zu testenden Funktionen einfügen, getrennt durch `and` Schlüsselwörter:

```css
/* multiple feature `@supports` at-rule */
@supports (property1: value) and (property2: value) {
  /* CSS rules to apply */
}
```

Zum Beispiel, wenn das CSS, das Sie ausführen möchten, erfordert, dass der Browser CSS Shapes und CSS Grid unterstützt, könnten Sie eine Regel erstellen, die den Browser-Support für beide dieser Funktionen testet. Die folgende Regel wird nur dann wahr, wenn `shape-outside: circle()` und `display: grid` beide vom Browser unterstützt werden.

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

Dies kann besonders nützlich sein, wenn eine Funktion mit einem Vendor-Präfix versehen ist, da Sie das Standard-Property sowie alle Vendor-Präfixe testen können.

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

Feature-Abfragen sind nicht auf Eigenschafts-Wert-Paare beschränkt. Sie können [`font-tech()`](/de/docs/Web/CSS/@supports#font-tech), [`font-format()`](/de/docs/Web/CSS/@supports#font-format) und [`selector()`](/de/docs/Web/CSS/@supports#function_syntax) Funktionen in Ihre Feature-Abfragen einbeziehen, um CSS selektiv anzuwenden, basierend auf der Unterstützung der Benutzer-Agenten für eine bestimmte Schrifttechnologie, ein Schriftformat oder eine Selektor-Syntax.

Zum Beispiel kann die `selector()` Funktion verwendet werden, um ein Stylesheet für Browser zu importieren, die ein Vendor-Präfixes Pseudo-Element unterstützen:

```css
/* A `selector()` query within a `supports()` function */
@import "/css/webkitShadowStyles.css"
  supports(selector(::-webkit-inner-spin-button));
```

## Beispiele

### Browser-Unterstützungstest

In diesem Beispiel prüfen wir, ob der Browser die `AccentColor` {{cssxref("system-color")}} unterstützt und verwenden `display: none`, um die Standard-„nicht unterstützt“-Nachricht zu einer „unterstützt“-Nachricht zu ändern, wenn der Farbtyp unterstützt wird.

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

Die `@supports` Regel testet, ob Browser eines oder mehrere Eigenschafts/Wert-Paare parsen können und dementsprechend, ob sie behaupten, das assoziierte Feature zu unterstützen. Wenn die Eigenschafts/Wert-Paare von einem Browser verstanden werden, gibt es eine positive Antwort. Feature-Abfragen prüfen, dass Deklarationen von einem Browser als gültig angesehen werden, können aber nicht verwendet werden, um zu prüfen, ob eine Funktion ohne Fehler oder Spezifikationsverletzungen richtig unterstützt wird. Feature-Abfragen können keine _teilweisen Implementierungen_ testen.

## Zusammenfassung

Feature-Abfragen sind ein nützliches Werkzeug für die progressive Verbesserung einer Website. Sie ermöglichen es, eine gute Lösung für alle Browser zu bieten und eine erweiterte Lösung für Browser, die neuere Eigenschaften und Werte unterstützen.

Sie müssen keine Feature-Abfragen verwenden, um mit der Nutzung neuer CSS-Funktionen zu beginnen; das CSS-Fehlerhandling bedeutet, dass der Browser CSS, das er noch nicht erkennt, einfach ignoriert. Allerdings sind Feature-Abfragen eine nützliche Alternative zu Fallback-Deklarationen und ermöglichen es, Code einmal zu schreiben, der schließlich überall unterstützt werden kann.

## Siehe auch

- [CSS bedingte Regeln](/de/docs/Web/CSS/CSS_conditional_rules) Modul
- [Verwendung von CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Unterstützung älterer Browser: Feature-Abfragen](/de/docs/Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers#feature_queries)
- [Browser-Feature-Erkennung: CSS `@supports`](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection#supports)
