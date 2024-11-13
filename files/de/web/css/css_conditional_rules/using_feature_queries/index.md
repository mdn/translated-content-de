---
title: Verwenden von Feature Queries
slug: Web/CSS/CSS_conditional_rules/Using_feature_queries
l10n:
  sourceCommit: c6e02b5aa7c12f9e64f80a62f75ede8f5cb5ec21
---

{{CSSRef}}

**Feature Queries** sind bedingte Gruppenregeln, die testen, ob der User-Agent eine oder mehrere CSS-Funktionen unterstützt oder nicht unterstützt, wie z. B. CSS-Eigenschaften und Eigenschaftswerte. Feature Queries bieten Webentwicklern eine Möglichkeit, zu testen, ob ein Browser eine bestimmte Funktion unterstützt, und dann CSS bereitzustellen, das nur basierend auf dem Ergebnis dieses Tests ausgeführt wird. In diesem Leitfaden lernen Sie, wie Sie Progressive Enhancement mit Feature Queries implementieren.

Feature Queries werden mit der CSS-At-Regel [`@supports`](/de/docs/Web/CSS/@supports) (oder der `supports()`-Funktion innerhalb von [`@import`](/de/docs/Web/CSS/@import)-At-Regeln) erstellt.

## Syntax

CSS-Feature-Queries sind Teil des Moduls für [CSS-bedingte Regeln](/de/docs/Web/CSS/CSS_conditional_rules), das auch die Media Query [`@media`](/de/docs/Web/CSS/@media)-At-Regel definiert. Feature Queries verhalten sich ähnlich wie [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries). Der Unterschied besteht darin, dass Sie bei einer Media Query etwas über die Umgebung testen, in der die Webseite ausgeführt wird, während Sie bei Feature Queries die Browser-Unterstützung für CSS-Funktionen testen.

Eine Feature Query besteht aus der `@supports`-At-Regel, gefolgt von der Unterstützungsbedingung oder einer `supports()`-Funktion und Deklarationsparameter innerhalb einer `@import`-At-Regel-Deklaration:

```css
/* `@supports` at-rule */
@supports <support-condition> {
  CSS rules to apply
}

/* `supports()` function */
@import url_to_import supports(<declaration>);
```

Zum Beispiel können wir einen Satz von Stilen anwenden oder ein vollständiges Stylesheet importieren, wenn der User-Agent `red` als gültigen Wert für die CSS-{{cssxref("color")}}-Eigenschaft unterstützt:

```css
/* `@supports` at-rule */
@supports (color: red) {
  CSS rules to apply
}

/* `supports()` function */
@import `/css/styles.css` supports(color: red);
```

Ein weiteres Beispiel: Wenn Sie überprüfen möchten, ob ein Browser die `row-gap`-Eigenschaft unterstützt, würden Sie die folgende Feature Query schreiben. In vielen Fällen spielt es keine Rolle, welchen Wert Sie verwenden: Wenn Sie nur überprüfen möchten, ob der Browser diese Eigenschaft unterstützt, reicht jeder gültige Wert aus.

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

Der Wertteil des Eigenschafts-Wert-Paares ist wichtiger, wenn Sie neue Werte einer bestimmten Eigenschaft testen. Alle Browser unterstützen `color: red`: Das geht auf CSS1 zurück. Allerdings werden häufig zusätzliche Werte zu Eigenschaften in CSS hinzugefügt, wie z. B. [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors), die möglicherweise nicht unterstützt werden. Feature Queries ermöglichen das Testen von Eigenschafts- und Wert-Paaren, wodurch wir die Unterstützung für Werte erkennen können.

Erweiterung des obigen Beispiels zur `color`-Eigenschaft: Hier prüfen wir, ob der Browser die `color: AccentColor`-Deklaration unterstützt:

```css
/* `@supports` at-rule */
@supports (color: AccentColor) {
  CSS rules to apply
}

/* `supports()` function */
@import `/css/styles.css` supports(color: AccentColor);
```

In diesen Beispielen haben wir Feature Queries verwendet, um zu überprüfen, ob der User-Agent einen bestimmten Wert einer CSS-Eigenschaft unterstützt, indem wir die einzelne Deklaration in Klammern auflisten. Sie können mehrere Eigenschaftswerte oder das Fehlen von Unterstützung testen.

## Testen auf fehlende Unterstützung

Zusätzlich zur Frage, ob der Browser eine Funktion unterstützt, können Sie das Gegenteil testen, indem Sie das Schlüsselwort `not` hinzufügen:

```css
/* `@supports` at-rule with `not` */
@supports not (property: value) {
  CSS rules to apply
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

Es kann erforderlich sein, den Support für mehr als eine Eigenschaft in Ihrer Feature Query zu testen. Dazu können Sie eine Liste von Features einschließen, die getestet werden sollen, getrennt durch `and`-Schlüsselwörter:

```css
/* multiple feature `@supports` at-rule */
@supports (property1: value) and (property2: value) {
  CSS rules to apply
}
```

Zum Beispiel: Wenn das CSS, das Sie ausführen möchten, erfordert, dass der Browser CSS Shapes und CSS Grid unterstützt, könnten Sie eine Regel erstellen, die den Browser-Support für beide dieser Funktionen testet. Die folgende Regel gibt nur dann "true" zurück, wenn `shape-outside: circle()` und `display: grid` beide vom Browser unterstützt werden.

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

Dies kann besonders nützlich sein, wenn eine Funktion vendor-präfixiert ist, da Sie für die Standard-Eigenschaft plus alle Vendor-Präfixe testen können.

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

Feature Queries sind nicht auf Eigenschafts-Wert-Paare beschränkt. Sie können [`font-tech()`](/de/docs/Web/CSS/@supports#font-tech), [`font-format()`](/de/docs/Web/CSS/@supports#font-format) und [`selector()`](/de/docs/Web/CSS/@supports#function_syntax)-Funktionen in Ihre Feature Queries einbeziehen, um CSS selektiv anzuwenden, basierend darauf, ob der User-Agent eine bestimmte Schrifttechnologie, ein Schriftformat oder eine Selektorsyntax unterstützt.

Zum Beispiel kann die `selector()`-Funktion verwendet werden, um ein Stylesheet für Browser zu importieren, die ein vendor-präfixiertes Pseudoelement unterstützen:

```css
/* A `selector()` query within a `supports()` function */
@import `/css/webkitShadowStyles.css`
  supports(selector(::-webkit-inner-spin-button));
```

## Beispiele

### Browser-Unterstützungstest

In diesem Beispiel prüfen wir, ob der Browser die `AccentColor`-{{cssxref("system-color")}} unterstützt und verwenden `display: none`, um die Standardmeldung "nicht unterstützt" in eine "unterstützt"-Meldung zu ändern, wenn der Farbtyp unterstützt wird.

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

Die `@supports`-Regel testet, ob Browser ein oder mehrere Eigenschafts-/Wertpaare parsen können und ob sie die damit verbundenen Funktion(en) zu unterstützen behaupten. Wenn die Eigenschafts-/Wert-Paare von einem Browser verstanden werden, gibt sie eine positive Antwort zurück. Feature Queries überprüfen, ob Deklarationen von einem Browser als gültig angesehen werden, können jedoch nicht verwendet werden, um zu überprüfen, ob es eine Funktion ordnungsgemäß ohne Fehler oder Spezifikationsverletzungen unterstützt. Feature Queries können keine _teilweisen Implementierungen_ testen.

## Zusammenfassung

Feature Queries sind ein nützliches Werkzeug zur schrittweisen Verbesserung einer Website. Sie ermöglichen es Ihnen, eine gute Lösung für alle Browser bereitzustellen und eine erweiterte Lösung für Browser, die neuere Eigenschaften und Werte unterstützen.

Sie müssen keine Feature Queries verwenden, um neue CSS-Funktionen zu nutzen; Die Fehlerbehandlung von CSS bedeutet, dass der Browser CSS, das er noch nicht erkennt, einfach ignoriert. Feature Queries sind jedoch eine nützliche Alternative zu Fallback-Deklarationen und ermöglichen es, Code einmal zu schreiben, der schließlich überall unterstützt werden kann.

### Siehe auch

- [CSS-bedingte Regeln](/de/docs/Web/CSS/CSS_conditional_rules)-Modul
- [Verwendung von CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Unterstützung älterer Browser: Feature Queries](/de/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers#feature_queries)
- [Browser Feature-Erkennung: CSS `@supports`](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection#supports)
