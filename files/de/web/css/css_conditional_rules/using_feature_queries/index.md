---
title: Verwendung von Feature Queries
slug: Web/CSS/CSS_conditional_rules/Using_feature_queries
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

**Feature Queries** sind bedingte Gruppenregeln, die testen, ob der User-Agent eine oder mehrere CSS-Funktionen unterstützt oder nicht unterstützt, wie z. B. CSS-Eigenschaften und Eigenschaftswerte. Feature Queries bieten Webentwicklern eine Möglichkeit, zu prüfen, ob ein Browser eine bestimmte Funktion unterstützt, und dann CSS bereitzustellen, das nur basierend auf dem Testergebnis ausgeführt wird. In diesem Leitfaden lernen Sie, wie man progressive Verbesserung mithilfe von Feature Queries implementiert.

Feature Queries werden mit der CSS-Regel [`@supports`](/de/docs/Web/CSS/Reference/At-rules/@supports) (oder der `supports()`-Funktion innerhalb der [`@import`](/de/docs/Web/CSS/Reference/At-rules/@import) at-rule) erstellt.

## Syntax

CSS-Feature Queries sind Teil des [CSS Conditional Rules](/de/docs/Web/CSS/CSS_conditional_rules)-Moduls, das auch die Medienabfrage [`@media`](/de/docs/Web/CSS/Reference/At-rules/@media) at-rule definiert. Feature Queries verhalten sich ähnlich wie [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries). Der Unterschied besteht darin, dass Sie bei einer Medienabfrage etwas über die Umgebung testen, in der die Webseite ausgeführt wird, während Sie mit Feature Queries die Unterstützung von CSS-Funktionen im Browser testen.

Eine Feature Query besteht aus der `@supports` at-rule, gefolgt von der Support-Bedingung oder einer `supports()`-Funktion und einem Deklarationsparameter innerhalb einer `@import`-at-rule-Deklaration:

```plain
/* `@supports` at-rule */
@supports <support-condition> {
  /* CSS rules to apply */
}

/* `supports()` function */
@import url_to_import supports(<declaration>);
```

Zum Beispiel können wir eine Reihe von Stilen anwenden oder ein komplettes Stylesheet importieren, wenn der User-Agent `red` als gültigen Wert für die CSS {{cssxref("color")}}-Eigenschaft unterstützt:

```css
/* `@supports` at-rule */
@supports (color: red) {
  /* CSS rules to apply */
}

/* `supports()` function */
@import "/css/styles.css" supports(color: red);
```

Ein weiteres Beispiel: Wenn Sie prüfen möchten, ob ein Browser die `row-gap`-Eigenschaft unterstützt, würden Sie die folgende Feature Query schreiben. Es spielt keine Rolle, welchen Wert Sie in vielen Fällen verwenden: Wenn Sie nur prüfen möchten, ob der Browser diese Eigenschaft unterstützt, reicht jeder gültige Wert aus.

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

Der Wertebereich des Eigenschaft-Wert-Paars ist wichtiger, wenn Sie für neue Werte einer bestimmten Eigenschaft testen. Alle Browser unterstützen `color: red`: Dies reicht bis zu CSS1 zurück. Es gibt jedoch oft zusätzliche Werte, die zu Eigenschaften in CSS hinzugefügt werden, wie [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors), die möglicherweise nicht unterstützt werden. Feature Queries ermöglichen das Testen von Eigenschafts- und Werte-Paaren, was bedeutet, dass wir die Unterstützung für Werte erkennen können.

Um das obige Beispiel der `color`-Eigenschaft zu erweitern, prüfen wir hier, ob der Browser die `color: AccentColor`-Deklaration unterstützt:

```css
/* `@supports` at-rule */
@supports (color: AccentColor) {
  /* CSS rules to apply */
}

/* `supports()` function */
@import "/css/styles.css" supports(color: AccentColor);
```

In diesen Beispielen haben wir Feature Queries verwendet, um zu prüfen, ob der User-Agent einen spezifischen Wert einer CSS-Eigenschaft unterstützt, indem die einzelne Deklaration in Klammern angegeben wird. Sie können für mehrere Eigenschaftswerte oder die fehlende Unterstützung testen.

## Testen auf fehlende Unterstützung

Zusätzlich zur Abfrage, ob der Browser eine Funktion unterstützt, können Sie das Gegenteil testen, indem Sie das `not`-Schlüsselwort hinzufügen:

```css
/* `@supports` at-rule with `not` */
@supports not (property: value) {
  /* CSS rules to apply */
}
```

Das CSS in der folgenden Beispiel-Feature Query wird ausgeführt, wenn der Browser `row-gap` nicht unterstützt.

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

Möglicherweise müssen Sie die Unterstützung für mehr als eine Eigenschaft in Ihrer Feature Query testen. Um dies zu tun, können Sie eine Liste von Features einfügen, die getestet werden sollen, getrennt durch `and`-Schlüsselwörter:

```css
/* multiple feature `@supports` at-rule */
@supports (property1: value) and (property2: value) {
  /* CSS rules to apply */
}
```

Zum Beispiel, wenn das CSS, das Sie ausführen möchten, erfordert, dass der Browser CSS Shapes und CSS Grid unterstützt, könnten Sie eine Regel erstellen, die die Browserunterstützung für beide dieser Features testet. Die folgende Regel gibt nur dann `true` zurück, wenn `shape-outside: circle()` und `display: grid` beide vom Browser unterstützt werden.

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
  /* CSS rules to apply */
}
```

Dies kann besonders nützlich sein, wenn eine Funktion mit einem Anbieterpräfix versehen ist, da Sie für die Standard-Eigenschaft und alle Anbieterpräfixe testen können.

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

Feature Queries sind nicht auf Eigenschaft-Wert-Paare beschränkt. Sie können [`font-tech()`](/de/docs/Web/CSS/Reference/At-rules/@supports#font-tech), [`font-format()`](/de/docs/Web/CSS/Reference/At-rules/@supports#font-format) und [`selector()`](/de/docs/Web/CSS/Reference/At-rules/@supports#function_syntax) Funktionen in Ihre Feature Queries einbeziehen, um CSS basierend darauf selektiv anzuwenden, ob der User-Agent eine bestimmte Schrifttechnologie, ein Schriftformat oder eine Selektorsyntax unterstützt.

Zum Beispiel kann die `selector()`-Funktion verwendet werden, um ein Stylesheet für Browser zu importieren, die ein Anbieter-präfixiertes Pseudo-Element unterstützen:

```css
/* A `selector()` query within a `supports()` function */
@import "/css/webkitShadowStyles.css"
  supports(selector(::-webkit-inner-spin-button));
```

## Beispiele

### Test der Browserunterstützung

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

Die `@supports`-Regel testet, ob Browser in der Lage sind, eines oder mehrere Eigenschafts-/Werte-Paare zu parsen, und somit ob sie behaupten, die zugehörige(n) Funktion(en) zu unterstützen. Wenn die Eigenschafts-/Werte-Paare von einem Browser verstanden werden, gibt es eine positive Antwort. Feature Queries prüfen, ob Deklarationen von einem Browser als gültig angesehen werden, können jedoch nicht verwendet werden, um zu prüfen, ob er eine Funktion ohne Bugs oder Spezifikationsverletzungen ordnungsgemäß unterstützt. Feature Queries können nicht für _partielle Implementierungen_ testen.

## Zusammenfassung

Feature Queries sind ein nützliches Werkzeug für die progressive Verbesserung einer Seite. Sie ermöglichen es, eine gute Lösung für alle Browser bereitzustellen sowie eine verbesserte Lösung für Browser, die neuere Eigenschaften und Werte unterstützen.

Es ist nicht notwendig, Feature Queries zu verwenden, um neue CSS-Funktionen zu verwenden; CSS-Fehlerbehandlung bedeutet, dass der Browser CSS einfach ignoriert, das er noch nicht erkennt. Dennoch sind Feature Queries eine nützliche Alternative zu Fallback-Deklarationen und ermöglichen es, Code zu schreiben, der letztendlich überall unterstützt werden kann.

## Siehe auch

- [CSS Conditional Rules](/de/docs/Web/CSS/CSS_conditional_rules) Modul
- [Verwendung von CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Unterstützung älterer Browser: Feature Queries](/de/docs/Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers#feature_queries)
- [Browser Feature-Erkennung: CSS `@supports`](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection#supports)
