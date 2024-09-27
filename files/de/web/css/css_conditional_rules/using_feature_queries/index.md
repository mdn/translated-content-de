---
title: Verwendung von Feature Queries
slug: Web/CSS/CSS_conditional_rules/Using_feature_queries
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

**Feature Queries** sind bedingte Gruppenregeln, die testen, ob der Benutzeragent eine oder mehrere CSS-Funktionen unterstützt oder nicht, wie zum Beispiel CSS-Eigenschaften und Eigenschaftswerte. Feature Queries bieten Webentwicklern eine Möglichkeit, zu testen, ob ein Browser eine bestimmte Funktion unterstützt, und dann CSS bereitzustellen, das nur basierend auf dem Ergebnis dieses Tests ausgeführt wird. In diesem Leitfaden lernen Sie, wie Sie Progressive Enhancement mit Feature Queries umsetzen können.

Feature Queries werden mit der CSS-Regel [`@supports`](/de/docs/Web/CSS/@supports) (oder der `supports()`-Funktion innerhalb von [`@import`](/de/docs/Web/CSS/@import)-Regeln) erstellt.

## Syntax

CSS Feature Queries sind Teil des [CSS Conditional Rules](/de/docs/Web/CSS/CSS_conditional_rules) Moduls, das auch die Media Query [`@media`](/de/docs/Web/CSS/@media) definiert. Feature Queries verhalten sich ähnlich wie [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries). Der Unterschied besteht darin, dass bei einer Media Query etwas über die Umgebung getestet wird, in der die Webseite läuft, während bei Feature Queries die Browser-Unterstützung für CSS-Funktionen getestet wird.

Eine Feature Query besteht aus der `@supports`-Regel, gefolgt von der Unterstützungskondition oder einer `supports()`-Funktion und einer Deklarationsparameter innerhalb einer `@import`-Regelerklärung:

```css
/* `@supports` at-rule */
@supports <support-condition> {
  CSS rules to apply
}

/* `supports()` function */
@import url_to_import supports(<declaration>);
```

Zum Beispiel können wir eine Reihe von Stilen anwenden oder ein ganzes Stylesheet importieren, wenn der Benutzeragent `red` als gültigen Wert für die CSS-Eigenschaft {{cssxref("color")}} unterstützt:

```css
/* `@supports` at-rule */
@supports (color: red) {
  CSS rules to apply
}

/* `supports()` function */
@import `/css/styles.css` supports(color: red);
```

Ein weiteres Beispiel: Wenn Sie prüfen wollen, ob ein Browser die Eigenschaft `row-gap` unterstützt, würden Sie die folgende Feature Query schreiben. In vielen Fällen spielt es keine Rolle, welchen Wert Sie verwenden: Wenn Sie nur prüfen möchten, ob der Browser diese Eigenschaft unterstützt, ist jeder gültige Wert ausreichend.

{{EmbedGHLiveSample("css-examples/feature-queries/simple.html", '100%', 600)}}

Der Wertteil des Eigenschaft-Wert-Paares ist wichtiger, wenn Sie auf neue Werte einer bestimmten Eigenschaft testen. Alle Browser unterstützen `color: red`: Dies geht auf CSS1 zurück. Es gibt jedoch oft zusätzliche Werte, die zu Eigenschaften in CSS hinzugefügt werden, wie [relative colors](/de/docs/Web/CSS/CSS_colors/Relative_colors), die möglicherweise nicht unterstützt werden. Feature Queries ermöglichen das Testen von Eigenschafts- und Wertpaaren, was bedeutet, dass wir die Unterstützung für Werte erkennen können.

Ausgehend vom obigen Beispiel der `color`-Eigenschaft prüfen wir hier, ob der Browser die Deklaration `color: AccentColor` unterstützt:

```css
/* `@supports` at-rule */
@supports (color: AccentColor) {
  CSS rules to apply
}

/* `supports()` function */
@import `/css/styles.css` supports(color: AccentColor);
```

In diesen Beispielen haben wir Feature Queries verwendet, um zu prüfen, ob der Benutzeragent einen spezifischen Wert einer CSS-Eigenschaft unterstützt, wobei die einzelne Deklaration in Klammern aufgeführt wird. Sie können auf mehrere Eigenschaftswerte oder den Mangel an Unterstützung testen.

## Testen des Mangels an Unterstützung

Neben der Frage an den Browser, ob er eine Funktion unterstützt, können Sie auch mit dem `not`-Schlüsselwort das Gegenteil testen:

```css
/* `@supports` at-rule with `not` */
@supports not (property: value) {
  CSS rules to apply
}
```

Der CSS-Code innerhalb der folgenden Beispiel-Feature Query wird ausgeführt, wenn der Browser `row-gap` nicht unterstützt.

{{EmbedGHLiveSample("css-examples/feature-queries/not.html", '100%', 600)}}

## Testen mehrerer Funktionen

Es kann notwendig sein, die Unterstützung für mehr als eine Eigenschaft in Ihrer Feature Query zu testen. Dazu können Sie eine Liste von zu testenden Funktionen angeben, die durch das `and`-Schlüsselwort getrennt werden:

```css
/* multiple feature `@supports` at-rule */
@supports (property1: value) and (property2: value) {
  CSS rules to apply
}
```

Zum Beispiel, wenn der CSS-Code, den Sie ausführen möchten, erfordert, dass der Browser CSS Shapes und CSS Grid unterstützt, könnten Sie eine Regel erstellen, die die Browserunterstützung für beide dieser Funktionen testet. Die folgende Regel gibt nur dann wahr zurück, wenn `shape-outside: circle()` und `display: grid` beide vom Browser unterstützt werden.

{{EmbedGHLiveSample("css-examples/feature-queries/and.html", '100%', 600)}}

## Testen auf mindestens eine von mehreren Funktionen

Sie können auch `or` verwenden, um CSS nur anzuwenden, wenn eine oder mehrere Deklarationen unterstützt werden:

```css
/* any feature `@supports` at-rule */
@supports (property1: value) or (property2: value) {
  CSS rules to apply
}
```

Dies kann besonders nützlich sein, wenn eine Funktion anbieterpräfixiert ist, da Sie für die Standard-Eigenschaft plus alle Anbieterpräfixe testen können.

{{EmbedGHLiveSample("css-examples/feature-queries/or.html", '100%', 600)}}

## Zusätzliche Optionen für Feature Queries

Feature Queries sind nicht auf Eigenschaft-Wert-Paare beschränkt. Sie können [`font-tech()`](/de/docs/Web/CSS/@supports#font-tech), [`font-format()`](/de/docs/Web/CSS/@supports#font-format) und [`selector()`](/de/docs/Web/CSS/@supports#function_syntax)-Funktionen in Ihre Feature Queries aufnehmen, um CSS selektiv anzuwenden, basierend darauf, ob der Benutzeragent eine bestimmte Font-Technologie, ein Font-Format oder eine Selektor-Syntax unterstützt.

Zum Beispiel kann die `selector()`-Funktion verwendet werden, um für Browser, die ein anbieterpräfixiertes Pseudo-Element unterstützen, ein Stylesheet zu importieren:

```css
/* A `selector()` query within a `supports()` function */
@import `/css/webkitShadowStyles.css`
  supports(selector(::-webkit-inner-spin-button));
```

## Beispiele

### Test der Browser-Unterstützung

In diesem Beispiel prüfen wir, ob der Browser die `AccentColor` {{cssxref("system-color")}} unterstützt und verwenden `display: none`, um die Standardmeldung "nicht unterstützt" in eine "unterstützt"-Meldung zu ändern, wenn der Farbtype unterstützt wird.

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

## Einschränkungen von Feature Queries

Die `@supports`-Regel prüft, ob Browser ein oder mehrere Eigenschafts-/Wertepaare analysieren können und daher behaupten, die zugehörige(n) Funktion(en) zu unterstützen. Wenn die Eigenschafts-/Wertepaare von einem Browser verstanden werden, gibt es eine positive Antwort. Feature Queries prüfen, ob Deklarationen von einem Browser als gültig angesehen werden, können jedoch nicht verwendet werden, um zu überprüfen, ob eine Funktion ordnungsgemäß ohne Fehler oder Spezifikationsverletzungen unterstützt wird. Feature Queries können keine _teilweisen Implementierungen_ testen.

## Zusammenfassung

Feature Queries sind ein nützliches Werkzeug für die progressive Verbesserung einer Website. Sie ermöglichen es Ihnen, eine gute Lösung für alle Browser bereitzustellen und eine verbesserte Lösung für Browser, die neuere Eigenschaften und Werte unterstützen.

Sie müssen keine Feature Queries verwenden, um neue CSS-Funktionen zu nutzen; das CSS-Fehlerhandling bedeutet, dass der Browser einfach CSS ignoriert, das er noch nicht erkennt. Feature Queries sind jedoch eine nützliche Alternative zu Fallback-Deklarationen und ermöglichen das Schreiben von Code, der schließlich überall unterstützt werden kann.

### Siehe auch

- [CSS Conditional Rules](/de/docs/Web/CSS/CSS_conditional_rules) Modul
- [Verwendung von CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Unterstützung älterer Browser: Feature Queries](/de/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers#feature_queries)
- [Browserfunktions-Erkennung: CSS `@supports`](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection#supports)
