---
title: Verwenden von Feature-Queries
slug: Web/CSS/CSS_conditional_rules/Using_feature_queries
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**Feature-Queries** sind bedingte Gruppierungsregeln, die testen, ob der Benutzer-Agent eine oder mehrere CSS-Funktionen unterstützt oder nicht, wie z.B. CSS-Eigenschaften und Eigenschaftswerte. Feature-Queries bieten Webentwicklern die Möglichkeit, zu prüfen, ob ein Browser eine bestimmte Funktion unterstützt, und dann CSS bereitzustellen, das nur basierend auf dem Ergebnis dieses Tests ausgeführt wird. In diesem Leitfaden erfahren Sie, wie Sie Progressive Enhancement mit Feature-Queries implementieren.

Feature-Queries werden mit der CSS-Regel [`@supports`](/de/docs/Web/CSS/@supports) (oder der `supports()`-Funktion innerhalb von [`@import`](/de/docs/Web/CSS/@import)-Regeln) erstellt.

## Syntax

CSS-Feature-Queries sind Teil des Moduls [CSS Conditional Rules](/de/docs/Web/CSS/CSS_conditional_rules), das auch die Medienabfrage [`@media`](/de/docs/Web/CSS/@media) definiert. Feature-Queries verhalten sich ähnlich wie [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries). Der Unterschied besteht darin, dass Sie mit einer Media Query etwas über die Umgebung testen, in der die Webseite ausgeführt wird, während Sie mit Feature-Queries die Browser-Unterstützung für CSS-Funktionen testen.

Eine Feature-Query besteht aus der `@supports`-Regel, gefolgt von der Support-Bedingung oder einer `supports()`-Funktion und Deklarationsparameter innerhalb einer `@import`-Regel:

```plain
/* `@supports` at-rule */
@supports <support-condition> {
  /* CSS rules to apply */
}

/* `supports()` function */
@import url_to_import supports(<declaration>);
```

Zum Beispiel können wir einen Satz von Stilen anwenden oder ein ganzes Stylesheet importieren, wenn der Benutzer-Agent `red` als gültigen Wert für die CSS-Eigenschaft {{cssxref("color")}} unterstützt:

```css
/* `@supports` at-rule */
@supports (color: red) {
  /* CSS rules to apply */
}

/* `supports()` function */
@import "/css/styles.css" supports(color: red);
```

Ein weiteres Beispiel: Wenn Sie prüfen möchten, ob ein Browser die Eigenschaft `row-gap` unterstützt, schreiben Sie die folgende Feature-Query. In vielen Fällen spielt es keine Rolle, welchen Wert Sie verwenden: Wenn Sie nur prüfen möchten, ob der Browser diese Eigenschaft unterstützt, dann reicht jeder gültige Wert aus.

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

Der Wertteil des Eigenschafts-Werte-Paares ist wichtiger, wenn Sie auf neue Werte einer bestimmten Eigenschaft testen. Alle Browser unterstützen `color: red`: dies geht auf CSS1 zurück. Oft werden jedoch zusätzliche Werte zu Eigenschaften in CSS hinzugefügt, wie z.B. [Relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors), die möglicherweise nicht unterstützt werden. Feature-Queries ermöglichen das Testen von Eigenschafts- und Wertpaaren, sodass wir die Unterstützung für Werte erkennen können.

Um das obige Beispiel der Eigenschaft `color` zu erweitern, prüfen wir hier, ob der Browser die `color: AccentColor`-Deklaration unterstützt:

```css
/* `@supports` at-rule */
@supports (color: AccentColor) {
  /* CSS rules to apply */
}

/* `supports()` function */
@import "/css/styles.css" supports(color: AccentColor);
```

In diesen Beispielen haben wir Feature-Queries verwendet, um zu prüfen, ob der Benutzer-Agent einen bestimmten Wert einer CSS-Eigenschaft unterstützt, und dabei die einzelne Deklaration in Klammern gesetzt. Sie können auf mehrere Eigenschaftswerte oder das Fehlen von Unterstützung testen.

## Testen auf fehlende Unterstützung

Zusätzlich zum Abfragen, ob der Browser eine Funktion unterstützt, können Sie das Gegenteil durch Hinzufügen des `not`-Schlüsselworts testen:

```css
/* `@supports` at-rule with `not` */
@supports not (property: value) {
  /* CSS rules to apply */
}
```

Das CSS in der folgenden Beispiel-Feature-Query wird ausgeführt, wenn der Browser `row-gap` nicht unterstützt.

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

Es kann notwendig sein, die Unterstützung für mehr als eine Eigenschaft in Ihrer Feature-Query zu testen. Dazu können Sie eine Liste von Funktionen einfügen, getrennt durch `and`-Schlüsselwörter:

```css
/* multiple feature `@supports` at-rule */
@supports (property1: value) and (property2: value) {
  /* CSS rules to apply */
}
```

Zum Beispiel, wenn das CSS, das Sie ausführen möchten, erfordert, dass der Browser CSS Shapes und CSS Grid unterstützt, können Sie eine Regel erstellen, die die Browserunterstützung für beide dieser Funktionen testet. Die folgende Regel wird nur wahr, wenn `shape-outside: circle()` und `display: grid` vom Browser unterstützt werden.

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

Dies kann besonders nützlich sein, wenn ein Feature mit einem Vendor-Präfix versehen ist, da Sie die Standard-Eigenschaft und alle Vendor-Präfixe testen können.

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

Feature-Queries sind nicht auf Eigenschafts-Werte-Paare beschränkt. Sie können [`font-tech()`](/de/docs/Web/CSS/@supports#font-tech), [`font-format()`](/de/docs/Web/CSS/@supports#font-format) und [`selector()`](/de/docs/Web/CSS/@supports#function_syntax)-Funktionen in Ihren Feature-Queries einbeziehen, um CSS basierend darauf selektiv anzuwenden, ob der Benutzer-Agent eine bestimmte Schriftartentechnologie, ein Schriftformat oder eine Selektorsyntax unterstützt.

Zum Beispiel kann die `selector()`-Funktion verwendet werden, um ein Stylesheet für Browser zu importieren, die ein vendor-präfixiertes Pseudo-Element unterstützen:

```css
/* A `selector()` query within a `supports()` function */
@import "/css/webkitShadowStyles.css"
  supports(selector(::-webkit-inner-spin-button));
```

## Beispiele

### Test der Browser-Unterstützung

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

## Einschränkungen von Feature-Queries

Die `@supports`-Regel testet, ob Browser ein oder mehrere Eigenschaft-/Werte-Paare analysieren können, und daher ob sie behaupten, die zugehörige(n) Funktion(en) zu unterstützen. Wenn die Eigenschafts-/Werte-Paare von einem Browser verstanden werden, gibt er eine positive Antwort zurück. Feature-Queries überprüfen, ob Deklarationen von einem Browser als gültig angesehen werden, können jedoch nicht verwendet werden, um zu überprüfen, ob eine Funktion ohne Bugs oder Spezifikationsverletzungen korrekt unterstützt wird. Feature-Queries können nicht auf _teilweise Implementierungen_ testen.

## Zusammenfassung

Feature-Queries sind ein nützliches Werkzeug für die progressive Verbesserung einer Website. Sie ermöglichen es Ihnen, eine gute Lösung für alle Browser bereitzustellen und eine erweiterte Lösung für Browser, die neuere Eigenschaften und Werte unterstützen.

Sie müssen keine Feature-Queries verwenden, um neue CSS-Funktionen zu nutzen; das Fehlerbehandlungssystem von CSS bedeutet, dass der Browser einfach CSS ignoriert, das er noch nicht erkennt. Feature-Queries sind jedoch eine nützliche Alternative zu Fallback-Deklarationen und ermöglichen es, Code zu schreiben, der letztendlich überall unterstützt werden kann.

## Siehe auch

- [Modul CSS Conditional Rules](/de/docs/Web/CSS/CSS_conditional_rules)
- [Verwenden von CSS-Media-Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Unterstützung älterer Browser: Feature-Queries](/de/docs/Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers#feature_queries)
- [Browser Feature Detection: CSS `@supports`](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection#supports)
