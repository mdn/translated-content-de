---
title: Verwenden von Feature-Queries
slug: Web/CSS/Guides/Conditional_rules/Using_feature_queries
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

**Feature-Queries** sind bedingte Gruppenregeln, die testen, ob der User-Agent eine oder mehrere CSS-Funktionen, wie CSS-Eigenschaften und Eigenschaftswerte, unterstützt oder nicht. Feature-Queries bieten Webentwicklern eine Möglichkeit zu testen, ob ein Browser eine bestimmte Funktion unterstützt, und dann CSS bereitzustellen, das basierend auf dem Testergebnis ausgeführt wird. In diesem Leitfaden lernen Sie, wie Sie Progressive Enhancement mit Feature-Queries implementieren können.

Feature-Queries werden mit der CSS-At-Regel [`@supports`](/de/docs/Web/CSS/Reference/At-rules/@supports) (oder der `supports()`-Funktion innerhalb von [`@import`](/de/docs/Web/CSS/Reference/At-rules/@import)-At-Regeln) erstellt.

## Syntax

CSS Feature-Queries sind Teil des Moduls [CSS conditional rules](/de/docs/Web/CSS/Guides/Conditional_rules), welches auch die Media-Query-At-Regel [`@media`](/de/docs/Web/CSS/Reference/At-rules/@media) definiert. Feature-Queries verhalten sich ähnlich wie [Media-Queries](/de/docs/Web/CSS/Guides/Media_queries/Using). Der Unterschied besteht darin, dass bei einer Media-Query etwas über die Umgebung, in der die Webseite läuft, getestet wird, während bei Feature-Queries die Unterstützung von CSS-Funktionen im Browser getestet wird.

Eine Feature-Query besteht aus der `@supports`-At-Regel gefolgt von der Support-Bedingung oder einer `supports()`-Funktion und einem Deklarationsparameter innerhalb einer `@import`-At-Regel-Deklaration:

```plain
/* `@supports` at-rule */
@supports <support-condition> {
  /* CSS rules to apply */
}

/* `supports()` function */
@import url_to_import supports(<declaration>);
```

Zum Beispiel können wir eine Reihe von Stilen anwenden oder ein gesamtes Stylesheet importieren, wenn der User-Agent `red` als gültigen Wert für die CSS-Eigenschaft {{cssxref("color")}} unterstützt:

```css
/* `@supports` at-rule */
@supports (color: red) {
  /* CSS rules to apply */
}

/* `supports()` function */
@import "/css/styles.css" supports(color: red);
```

Als weiteres Beispiel, wenn Sie überprüfen möchten, ob ein Browser die Eigenschaft `row-gap` unterstützt, würden Sie die folgende Feature-Query schreiben. Es spielt oft keine Rolle, welchen Wert Sie verwenden: Wenn Sie nur überprüfen möchten, ob der Browser diese Eigenschaft unterstützt, genügt jeder gültige Wert.

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

Der Wertteil des Eigenschaft-Wert-Paares spielt eine größere Rolle, wenn Sie auf neue Werte einer bestimmten Eigenschaft testen. Alle Browser unterstützen `color: red`: dies geht auf CSS1 zurück. Es werden jedoch häufig zusätzliche Werte zu den Eigenschaften in CSS hinzugefügt, wie [relative Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors), die möglicherweise nicht unterstützt werden. Feature-Queries ermöglichen es, Eigenschafts- und Wertpaare zu testen, sodass wir die Unterstützung für Werte erkennen können.

Ausbauend auf dem obigen Beispiel der `color`-Eigenschaft, überprüfen wir hier, ob der Browser die Deklaration `color: AccentColor` unterstützt:

```css
/* `@supports` at-rule */
@supports (color: AccentColor) {
  /* CSS rules to apply */
}

/* `supports()` function */
@import "/css/styles.css" supports(color: AccentColor);
```

In diesen Beispielen haben wir Feature-Queries verwendet, um zu überprüfen, ob der User-Agent einen bestimmten Wert einer CSS-Eigenschaft unterstützt und die einzelne Deklaration innerhalb von Klammern aufgelistet. Sie können auf mehrere Eigenschaftswerte oder das Fehlen von Unterstützung testen.

## Testen auf fehlende Unterstützung

Zusätzlich dazu, den Browser zu fragen, ob er eine Funktion unterstützt, können Sie das Gegenteil testen, indem Sie das Schlüsselwort `not` hinzufügen:

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

## Testen auf mehr als eine Funktion

Es kann notwendig sein, die Unterstützung für mehr als eine Eigenschaft in Ihrer Feature-Query zu testen. Dazu können Sie eine Liste von Funktionen einschließen, die getestet werden sollen, getrennt durch das `and`-Schlüsselwort:

```css
/* multiple feature `@supports` at-rule */
@supports (property1: value) and (property2: value) {
  /* CSS rules to apply */
}
```

Zum Beispiel, wenn das CSS, das Sie ausführen möchten, erfordert, dass der Browser CSS Shapes und CSS Grid unterstützt, könnten Sie eine Regel erstellen, die die Browserunterstützung für beide dieser Funktionen testet. Die folgende Regel wird nur zurückgegeben, um true, wenn sowohl `shape-outside: circle()` als auch `display: grid` vom Browser unterstützt werden.

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

## Testen auf mindestens eine aus mehreren Funktionen

Sie können auch `or` verwenden, um CSS nur anzuwenden, wenn eine oder mehrere Deklarationen unterstützt werden:

```css
/* any feature `@supports` at-rule */
@supports (property1: value) or (property2: value) {
  /* CSS rules to apply */
}
```

Dies kann besonders nützlich sein, wenn eine Funktion anbieterpräfixiert ist, da Sie die Standard-Eigenschaft sowie alle Anbieterpräfixe testen können.

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

## Zusätzliche Feature-Query-Optionen

Feature-Queries sind nicht auf Eigenschaft-Wert-Paare beschränkt. Sie können [`font-tech()`](/de/docs/Web/CSS/Reference/At-rules/@supports#font-tech), [`font-format()`](/de/docs/Web/CSS/Reference/At-rules/@supports#font-format) und [`selector()`](/de/docs/Web/CSS/Reference/At-rules/@supports#function_syntax)-Funktionen in Ihre Feature-Queries einbinden, um CSS selektiv anzuwenden, basierend darauf, ob der User-Agent eine angegebene Schrifttechnologie, ein Schriftformat oder eine Selektorsyntax unterstützt.

Zum Beispiel kann die `selector()`-Funktion verwendet werden, um ein Stylesheet für Browser zu importieren, die ein anbieterpräfixiertes Pseudoelement unterstützen:

```css
/* A `selector()` query within a `supports()` function */
@import "/css/webkitShadowStyles.css"
  supports(selector(::-webkit-inner-spin-button));
```

## Beispiele

### Browser-Unterstützungstest

In diesem Beispiel überprüfen wir, ob der Browser die `AccentColor` {{cssxref("system-color")}} unterstützt und verwenden `display: none`, um die Standardmeldung "nicht unterstützt" in eine "unterstützt"-Meldung zu ändern, wenn der Farbtyp unterstützt wird.

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

Die `@supports`-Regel überprüft, ob Browser ein oder mehrere Eigenschaft/Wert-Paare parsen können, und somit, ob sie behaupten, die zugehörige(n) Funktion(en) zu unterstützen. Wenn die Eigenschaft/Wert-Paare von einem Browser verstanden werden, erzeugt dies eine positive Antwort. Feature-Queries überprüfen, ob Deklarationen von einem Browser als gültig betrachtet werden, können jedoch nicht verwendet werden, um zu prüfen, ob eine Funktion korrekt ohne Bugs oder Spezifikationsverletzungen unterstützt wird. Feature-Queries können nicht auf _partielle Implementierungen_ testen.

## Zusammenfassung

Feature-Queries sind ein nützliches Werkzeug, um eine Website progressiv zu verbessern. Sie ermöglichen es, eine gute Lösung für alle Browser bereitzustellen und eine erweiterte Lösung für Browser, die neuere Eigenschaften und Werte unterstützen.

Sie müssen keine Feature-Queries verwenden, um neue CSS-Funktionen zu nutzen; das Fehlerbehandlungssystem von CSS sorgt dafür, dass der Browser einfach CSS ignoriert, das er noch nicht erkennt. Dennoch sind Feature-Queries eine nützliche Alternative zu Fallback-Deklarationen und ermöglichen das Schreiben von Code, der irgendwann überall unterstützt werden kann.

## Siehe auch

- [CSS conditional rules](/de/docs/Web/CSS/Guides/Conditional_rules) Modul
- [Verwenden von CSS-Media-Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [Unterstützung älterer Browser: Feature-Queries](/de/docs/Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers#feature_queries)
- [Erkennung von Browserfunktionen: CSS `@supports`](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection#supports)
