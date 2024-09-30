---
title: Using feature queries
slug: Web/CSS/CSS_conditional_rules/Using_feature_queries
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

**Feature-Queries** sind konditionale Gruppenregeln, die testen, ob der User-Agent eine oder mehrere CSS-Funktionen unterstützt oder nicht, wie z.B. CSS-Eigenschaften und -Eigenschaftswerte. Feature-Queries bieten Webentwicklern eine Möglichkeit, zu testen, ob ein Browser eine bestimmte Funktion unterstützt, und darauf basierend CSS bereitzustellen, das nur ausgeführt wird, basierend auf dem Ergebnis dieses Tests. In diesem Leitfaden erfahren Sie, wie Sie progressive Verbesserung mit Hilfe von Feature-Queries implementieren.

Feature-Queries werden mit der CSS-At-Regel [`@supports`](/de/docs/Web/CSS/@supports) (oder der `supports()`-Funktion innerhalb von [`@import`](/de/docs/Web/CSS/@import) At-Regeln) erstellt.

## Syntax

CSS-Feature-Queries sind Teil des [CSS-Bedingungsregel-Moduls](/de/docs/Web/CSS/CSS_conditional_rules), das auch die Medienabfrage-At-Regel [`@media`](/de/docs/Web/CSS/@media) definiert. Feature-Queries verhalten sich ähnlich wie [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries). Der Unterschied besteht darin, dass bei einer Medienabfrage etwas über die Umgebung getestet wird, in der die Webseite läuft, während bei Feature-Queries die Browserunterstützung für CSS-Funktionen getestet wird.

Eine Feature-Query besteht aus der `@supports` At-Regel, gefolgt von der Unterstützungsbedingung oder einer `supports()`-Funktion und einem Deklarationsparameter innerhalb einer `@import`-At-Regel-Deklaration:

```css
/* `@supports` at-rule */
@supports <support-condition> {
  CSS rules to apply
}

/* `supports()` function */
@import url_to_import supports(<declaration>);
```

Zum Beispiel können wir einen Satz von Stilen anwenden oder ein komplettes Stylesheet importieren, wenn der User-Agent `red` als gültigen Wert für die CSS-Eigenschaft {{cssxref("color")}} unterstützt:

```css
/* `@supports` at-rule */
@supports (color: red) {
  CSS rules to apply
}

/* `supports()` function */
@import `/css/styles.css` supports(color: red);
```

Ein weiteres Beispiel, wenn Sie prüfen möchten, ob ein Browser die `row-gap`-Eigenschaft unterstützt, würden Sie die folgende Feature-Query schreiben. In vielen Fällen spielt es keine Rolle, welchen Wert Sie verwenden: Wenn Sie nur überprüfen möchten, ob der Browser diese Eigenschaft unterstützt, reicht jeder gültige Wert.

{{EmbedGHLiveSample("css-examples/feature-queries/simple.html", '100%', 600)}}

Der Wertteil des Eigenschafts-Wert-Paares spielt eine größere Rolle, wenn Sie neue Werte einer bestimmten Eigenschaft testen. Alle Browser unterstützen `color: red`: das geht auf CSS1 zurück. Es werden jedoch oft zusätzliche Werte zu Eigenschaften in CSS hinzugefügt, wie [relative Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors), die möglicherweise nicht unterstützt werden. Feature-Queries ermöglichen das Testen von Eigenschafts- und Wertpaaren, sodass wir Unterstützung für Werte erkennen können.

Erweiternd auf das oben genannte Beispiel der `color`-Eigenschaft prüfen wir hier, ob der Browser die `color: AccentColor`-Deklaration unterstützt:

```css
/* `@supports` at-rule */
@supports (color: AccentColor) {
  CSS rules to apply
}

/* `supports()` function */
@import `/css/styles.css` supports(color: AccentColor);
```

In diesen Beispielen haben wir Feature-Queries verwendet, um zu prüfen, ob der User-Agent einen bestimmten Wert einer CSS-Eigenschaft unterstützt, indem die einzelne Deklaration in Klammern aufgeführt wird. Sie können auf mehrere Eigenschaftswerte oder den Mangel an Unterstützung testen.

## Testen auf fehlende Unterstützung

Neben der Frage an den Browser, ob ein Feature unterstützt wird, können Sie mithilfe des `not`-Schlüsselworts das Gegenteil testen:

```css
/* `@supports` at-rule with `not` */
@supports not (property: value) {
  CSS rules to apply
}
```

Das CSS in der folgenden Beispiel-Feature-Query wird ausgeführt, wenn der Browser `row-gap` nicht unterstützt.

{{EmbedGHLiveSample("css-examples/feature-queries/not.html", '100%', 600)}}

## Testen auf mehr als ein Feature

Gegebenenfalls müssen Sie die Unterstützung für mehr als eine Eigenschaft in Ihrer Feature-Query testen. Dazu können Sie eine Liste von zu testenden Funktionen einschließen, die durch `and`-Schlüsselwörter getrennt sind:

```css
/* multiple feature `@supports` at-rule */
@supports (property1: value) and (property2: value) {
  CSS rules to apply
}
```

Zum Beispiel, wenn das CSS, das Sie ausführen möchten, erfordert, dass der Browser CSS Shapes und CSS Grid unterstützt, können Sie eine Regel erstellen, die die Browserunterstützung für beide dieser Features testet. Die folgende Regel gibt nur true zurück, wenn sowohl `shape-outside: circle()` als auch `display: grid` vom Browser unterstützt werden.

{{EmbedGHLiveSample("css-examples/feature-queries/and.html", '100%', 600)}}

## Testen auf mindestens eines von mehreren Features

Sie können auch `or` verwenden, um CSS nur anzuwenden, wenn eine oder mehrere Deklarationen unterstützt werden:

```css
/* any feature `@supports` at-rule */
@supports (property1: value) or (property2: value) {
  CSS rules to apply
}
```

Dies kann besonders nützlich sein, wenn ein Feature Anbieterpräfixe hat, da Sie das standardmäßige Property sowie alle Anbieter-Präfixe testen können.

{{EmbedGHLiveSample("css-examples/feature-queries/or.html", '100%', 600)}}

## Weitere Optionen für Feature-Queries

Feature-Queries sind nicht auf Eigenschafts-Wert-Paare beschränkt. Sie können [`font-tech()`](/de/docs/Web/CSS/@supports#font-tech), [`font-format()`](/de/docs/Web/CSS/@supports#font-format) und [`selector()`](/de/docs/Web/CSS/@supports#function_syntax) Funktionen in Ihre Feature-Queries einbeziehen, um CSS selektiv anzuwenden, basierend darauf, ob der User-Agent die angegebene Schrifttechnologie, das Schriftformat oder die Selektorsyntax unterstützt.

Zum Beispiel kann die `selector()`-Funktion verwendet werden, um ein Stylesheet für Browser zu importieren, die ein Anbieterpräfix-Pseudoelement unterstützen:

```css
/* A `selector()` query within a `supports()` function */
@import `/css/webkitShadowStyles.css`
  supports(selector(::-webkit-inner-spin-button));
```

## Beispiele

### Browser-Unterstützungstest

In diesem Beispiel prüfen wir, ob der Browser die `AccentColor` {{cssxref("system-color")}} unterstützt und verwenden `display: none`, um die Standardmeldung „nicht unterstützt“ in eine Nachricht „unterstützt“ zu ändern, wenn der Farbtyp unterstützt wird.

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

{{EmbedLiveSample("Browser support test", "600", "50")}}

## Einschränkungen von Feature-Queries

Die `@supports`-Regel testet, ob Browser ein oder mehrere Eigenschafts-/Wertpaare parsen können und dementsprechend behaupten, das zugehörige Feature zu unterstützen. Wenn die Eigenschafts-/Wertpaare von einem Browser verstanden werden, gibt er eine positive Antwort zurück. Feature-Queries überprüfen, ob Deklarationen von einem Browser als gültig betrachtet werden, können jedoch nicht verwendet werden, um zu prüfen, ob er ein Feature korrekt ohne Bugs oder Spezifikationsverletzungen unterstützt. Feature-Queries können nicht für _teilweise Implementierungen_ testen.

## Zusammenfassung

Feature-Queries sind ein nützliches Werkzeug zur progressiven Verbesserung einer Website. Sie ermöglichen es Ihnen, eine gute Lösung für alle Browser bereitzustellen und eine verbesserte Lösung für Browser, die neuere Eigenschaften und Werte unterstützen.

Sie müssen Feature-Queries nicht verwenden, um neue CSS-Features zu beginnen; Die CSS-Fehlerbehandlung bedeutet, dass der Browser einfach CSS ignoriert, das er noch nicht erkennt. Feature-Queries sind jedoch eine nützliche Alternative zu Fallback-Deklarationen und ermöglichen es, Code einmal zu schreiben, der irgendwann überall unterstützt werden kann.

### Siehe auch

- [CSS-Bedingungsregeln](/de/docs/Web/CSS/CSS_conditional_rules) Modul
- [Verwendung von CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Unterstützung älterer Browser: Feature-Queries](/de/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers#feature_queries)
- [Browser-Funktionserkennung: CSS `@supports`](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection#supports)
