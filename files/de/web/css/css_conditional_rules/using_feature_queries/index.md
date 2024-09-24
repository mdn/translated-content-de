---
title: Verwendung von Feature-Abfragen
slug: Web/CSS/CSS_conditional_rules/Using_feature_queries
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

**Feature-Abfragen** sind bedingte Gruppenregeln, die testen, ob ein User-Agent eine oder mehrere CSS-Funktionen unterstützt oder nicht unterstützt, wie z.B. CSS-Eigenschaften und Eigenschaftswerte. Feature-Abfragen geben Webentwicklern eine Möglichkeit zu überprüfen, ob ein Browser eine bestimmte Funktion unterstützt, und dann CSS bereitzustellen, das basierend auf dem Ergebnis dieses Tests nur ausgeführt wird. In diesem Leitfaden lernen Sie, wie Sie eine progressive Verbesserung mit Hilfe von Feature-Abfragen implementieren können.

Feature-Abfragen werden mit der CSS-At-Regel [`@supports`](/de/docs/Web/CSS/@supports) (oder der `supports()`-Funktion innerhalb der [`@import`](/de/docs/Web/CSS/@import) At-Regeln) erstellt.

## Syntax

CSS-Feature-Abfragen sind Teil des [CSS-Bedingungsregelmoduls](/de/docs/Web/CSS/CSS_conditional_rules), das auch die Medienabfrage-At-Regel [`@media`](/de/docs/Web/CSS/@media) definiert. Feature-Abfragen verhalten sich ähnlich wie [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries). Der Unterschied besteht darin, dass Sie bei einer Medienabfrage etwas über die Umgebung prüfen, in der die Webseite läuft, während Sie bei Feature-Abfragen die Browserunterstützung für CSS-Funktionen testen.

Eine Feature-Abfrage besteht aus der `@supports`-At-Regel, gefolgt von der Unterstützungskondition oder einer `supports()`-Funktion und Deklarationsparameter innerhalb einer `@import`-At-Regel-Deklaration:

```css
/* `@supports` At-Regel */
@supports <support-condition> {
  anzuwendende CSS-Regeln
}

/* `supports()` Funktion */
@import url_to_import supports(<declaration>);
```

Zum Beispiel können wir ein Set von Stilen anwenden oder ein komplettes Stylesheet importieren, falls der User-Agent `red` als gültigen Wert für die CSS-Eigenschaft {{cssxref("color")}} unterstützt:

```css
/* `@supports` At-Regel */
@supports (color: red) {
  anzuwendende CSS-Regeln
}

/* `supports()` Funktion */
@import `/css/styles.css` supports(color: red);
```

Als ein weiteres Beispiel, wenn Sie prüfen möchten, ob ein Browser die Eigenschaft `row-gap` unterstützt, würden Sie die folgende Feature-Abfrage schreiben. In vielen Fällen ist es egal, welchen Wert Sie verwenden: Wenn Sie lediglich prüfen wollen, ob der Browser diese Eigenschaft unterstützt, dann ist jeder gültige Wert ausreichend.

{{EmbedGHLiveSample("css-examples/feature-queries/simple.html", '100%', 600)}}

Der Wertteil des Eigenschaft-Wert-Paares ist wichtiger, wenn Sie nach neuen Werten für eine bestimmte Eigenschaft suchen. Alle Browser unterstützen `color: red`: dies stammt aus CSS1. Es gibt jedoch oft zusätzliche Werte, die Eigenschaften in CSS hinzugefügt werden, wie [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors), die möglicherweise nicht unterstützt werden. Feature-Abfragen ermöglichen das Testen von Eigenschafts- und Wertpaaren, was bedeutet, dass wir die Unterstützung für Werte erkennen können.

Basierend auf dem obigen Beispiel der `color`-Eigenschaft testen wir hier, ob der Browser die Deklaration `color: AccentColor` unterstützt:

```css
/* `@supports` At-Regel */
@supports (color: AccentColor) {
  anzuwendende CSS-Regeln
}

/* `supports()` Funktion */
@import `/css/styles.css` supports(color: AccentColor);
```

In diesen Beispielen haben wir Feature-Abfragen verwendet, um zu prüfen, ob der User-Agent einen bestimmten Wert einer CSS-Eigenschaft unterstützt und die einzelne Deklaration in Klammern aufgeführt. Sie können auch für mehrere Eigenschaftswerte oder den Mangel an Unterstützung testen.

## Testen auf fehlende Unterstützung

Zusätzlich zum Fragen des Browsers, ob er eine Funktion unterstützt, können Sie das Gegenteil testen, indem Sie das `not`-Schlüsselwort hinzufügen:

```css
/* `@supports` At-Regel mit `not` */
@supports not (property: value) {
  anzuwendende CSS-Regeln
}
```

Das CSS innerhalb der folgenden Beispiel-Feature-Abfrage wird ausgeführt, wenn der Browser `row-gap` nicht unterstützt.

{{EmbedGHLiveSample("css-examples/feature-queries/not.html", '100%', 600)}}

## Testen auf mehr als ein Feature

Möglicherweise müssen Sie die Unterstützung für mehrere Eigenschaften in Ihrer Feature-Abfrage testen. Dazu können Sie eine Liste von Funktionen testweise einfügen, die durch `and`-Schlüsselwörter getrennt sind:

```css
/* multiple feature `@supports` At-Regel */
@supports (property1: value) and (property2: value) {
  anzuwendende CSS-Regeln
}
```

Zum Beispiel, wenn das CSS, das Sie ausführen möchten, benötigt, dass der Browser CSS Shapes und CSS Grid unterstützt, könnten Sie eine Regel erstellen, die die Browserunterstützung für beide dieser Funktionen testet. Die folgende Regel wird nur wahr, wenn `shape-outside: circle()` und `display: grid` beide vom Browser unterstützt werden.

{{EmbedGHLiveSample("css-examples/feature-queries/and.html", '100%', 600)}}

## Testen auf mindestens eines von mehreren Features

Sie können auch `or` verwenden, um CSS nur dann anzuwenden, wenn eine oder mehrere Deklarationen unterstützt werden:

```css
/* any feature `@supports` At-Regel */
@supports (property1: value) or (property2: value) {
  anzuwendende CSS-Regeln
}
```

Dies kann besonders nützlich sein, wenn ein Feature mit Anbieterpräfix versehen ist, da Sie die Standard-Eigenschaft sowie alle Anbieterpräfixe testen können.

{{EmbedGHLiveSample("css-examples/feature-queries/or.html", '100%', 600)}}

## Zusätzliche Optionen für Feature-Abfragen

Feature-Abfragen sind nicht auf Eigenschafts-Wert-Paare beschränkt. Sie können die Funktionen [`font-tech()`](/de/docs/Web/CSS/@supports#font-tech), [`font-format()`](/de/docs/Web/CSS/@supports#font-format) und [`selector()`](/de/docs/Web/CSS/@supports#function_syntax) in Ihren Feature-Abfragen einfügen, um CSS selektiv anzuwenden, basierend auf der Unterstützung einer bestimmten Schrifttechnologie, eines Schriftformats oder einer Selektorsyntax durch den Benutzer-Agent.

Zum Beispiel kann die `selector()`-Funktion verwendet werden, um ein Stylesheet für Browser zu importieren, die ein Anbieter-vorfixiertes Pseudo-Element unterstützen:

```css
/* Eine `selector()`-Abfrage innerhalb einer `supports()`-Funktion */
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

#### Ergebnisse

{{EmbedLiveSample("Browser-Unterstützungstest", "600", "50")}}

## Einschränkungen von Feature-Abfragen

Die `@supports`-Regel testet, ob Browser ein oder mehrere Eigenschafts-/Wertpaare parsen können und ob sie somit die Unterstützung für die zugehörigen Funktion(en) beanspruchen. Wenn die Eigenschafts-/Wertpaare von einem Browser verstanden werden, wird eine positive Antwort zurückgegeben. Feature-Abfragen prüfen, ob Deklarationen von einem Browser als gültig betrachtet werden, können aber nicht verwendet werden, um zu testen, ob eine Funktion ordnungsgemäß ohne Fehler oder Verstöße gegen Spezifikationen unterstützt wird. Feature-Abfragen können nicht auf _teilweise Implementierungen_ testen.

## Zusammenfassung

Feature-Abfragen sind ein nützliches Werkzeug zur schrittweisen Verbesserung einer Website. Sie ermöglichen es Ihnen, eine gute Lösung für alle Browser zu bieten und eine verbesserte Lösung für Browser, die neuere Eigenschaften und Werte unterstützen.

Sie müssen keine Feature-Abfragen verwenden, um neue CSS-Funktionen zu nutzen; durch das CSS-Fehlerhandling ignoriert der Browser einfach das CSS, das er noch nicht erkennt. Allerdings sind Feature-Abfragen eine nützliche Alternative zu Fallback-Deklarationen und ermöglichen das Schreiben von Code, der schließlich überall unterstützt werden kann.

### Siehe auch

- [CSS-Bedingungsregelmodul](/de/docs/Web/CSS/CSS_conditional_rules)
- [Verwendung von CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Unterstützung älterer Browser: Feature-Abfragen](/de/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers#feature_queries)
- [Browser-Feature-Erkennung: CSS `@supports`](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection#supports)
