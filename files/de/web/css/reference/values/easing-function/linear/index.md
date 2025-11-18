---
title: linear()
slug: Web/CSS/Reference/Values/easing-function/linear
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`linear()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) erstellt eine Übergangskurve, die sich gleichmäßig zwischen Punkten bewegt.
Als [`<easing-function>`](/de/docs/Web/CSS/Reference/Values/easing-function) erstellt sie Übergänge, bei denen die {{Glossary("interpolation", "Interpolation")}} mit konstanter Geschwindigkeit von Anfang bis Ende erfolgt.

## Syntax

```css
linear(0, 1)
linear(0, 0.25, 1)
linear(0, 0.25 75%, 1)
linear(0, 0.5 25% 75%, 1)
```

### Parameter

Die Funktion akzeptiert zwei oder mehr der folgenden Werte, die Fortschrittspunkte in der Animationstimeline darstellen:

- {{cssxref("&lt;number&gt;")}}
  - : Repräsentiert einen Zeitpunkt in der Dauer der Animation oder des Übergangs.
    Mindestens zwei Werte müssen angegeben werden.
    Der Wert `0` repräsentiert den Beginn des Übergangs, und `1` repräsentiert das Ende.
    Werte außerhalb des Bereichs von `0` bis `1` sind ebenfalls erlaubt.

- {{cssxref("&lt;percentage&gt;")}} {{optional_inline}}
  - : Gibt an, wann der Fortschritt `<number>` während der Animationstimeline erreicht wird.
    Er kann nach jedem `<number>`-Wert außer dem ersten und letzten angegeben werden und kann bis zu zwei Werte annehmen.
    Wenn zwei Prozentwerte angegeben sind, definieren sie die Länge des Halts: der erste Prozentwert gibt den Startpunkt an, und der zweite Prozentwert gibt den Endpunkt für diesen Abschnitt in der Animation oder dem Übergang an. Wenn kein `<percentage>`-Wert angegeben ist, werden die Fortschrittswerte gleichmäßig entlang der Timeline verteilt.

## Beschreibung

Die `linear()`-Funktion ermöglicht die Annäherung an komplexe Animationen und Übergänge durch lineare Interpolation zwischen den angegebenen Punkten.
Eine typische Verwendung der `linear()`-Funktion ist das Bereitstellen vieler Punkte zur Annäherung an eine beliebige Kurve.

Die `linear()`-Funktion erstellt Übergänge, bei denen der Fortschritt mit konstanter Geschwindigkeit zwischen den angegebenen Punkten erfolgt.
Zum Beispiel hat `linear(0, 0.25, 1)` lineare Haltepunkte von `0`, `0.25` und `1`.
Die Animation beginnt bei Punkt `0`, bewegt sich linear zu `0.25` und setzt dann linear bis Punkt `1` fort.
Da kein Prozentsatz angegeben ist, wird dieselbe Dauer (`50%`) für jedes Segment verwendet, das heißt von `0` bis `0.25` und von `0.25` bis `1`.

![Diagramme des Eingabefortschritts zum Ausgabefortschritt, wobei linear(0, 0.25, 1) eine gebrochene Linie zeigt, die den Ursprung, (0.5, 0.25) und (1, 1) verbindet, und linear(0, 0.25 75%, 1) eine gebrochene Linie zeigt, die den Ursprung, (0.75, 0.25) und (1, 1) verbindet.](linear_function.svg)

Standardmäßig sind die Haltepunkte gleichmäßig verteilt. Zum Beispiel, wenn es fünf Haltepunkte gibt, werden sie bei 0 %, 25 %, 50 %, 75 % und 100 % der Dauer auftreten. Sie können optionale Prozentwerte verwenden, um eine genauere Steuerung zu bieten, indem Sie festlegen, wann jeder Fortschrittswert erfolgen soll, und so ein kontrollierteres Fortschreiten des Übergangs ermöglichen.

Betrachten Sie eine Animation mit einer Dauer von 100 Sekunden und einer Änderung von 100 Pixeln. Schauen wir uns ein Szenario an, bei dem das Timing der Animation als `linear(0, 0.25 75%, 1)` angegeben ist. In diesem Fall schreitet die Animation in den ersten 75 Sekunden (75 % der Dauer) zu 25 Pixeln (25 % der Gesamtänderung) fort. Die letzten 75 Pixel werden in den verbleibenden 25 Sekunden der Animation angewendet.

Für dieselbe Animation nehmen wir an, die Timing-Funktion ist als `linear(0, 0.5 25% 75%, 1)` angegeben. Hier erreicht die Animation 50 Pixel (50 % der Gesamtänderung) in 25 Sekunden (25 % der Dauer) und bleibt dort für 50 Sekunden (75 % - 25 % der Dauer). Dann werden die letzten 50 Pixel in den verbleibenden 25 Sekunden der Dauer angewendet. Beachten Sie, dass `linear(0, 0.5 25% 75%, 1)` gleichbedeutend ist mit `linear(0, 0.5 25%, 0.5 75%, 1)`.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung der linear()-Funktion

Die folgenden `linear()`-Funktionen sind für die Verwendung in CSS gültig:

```css example-good
/* Three evenly distributed progress points */
linear(0, 0.25, 1)

/* Custom timing with percentage values */
linear(0, 0.5 25% 75%, 1)
```

Die folgenden `linear()`-Definitionen sind ungültig:

```css example-bad
/* At least two parameters are required */
linear(0.5)

/* Percentages must be in ascending order */
linear(0, 0.25 80%, 0.5 60%, 1)

/* Values must be numbers */
linear(start, middle, end)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere Timing-Funktionen: {{cssxref("easing-function/cubic-bezier", "cubic-bezier()")}} und {{cssxref("easing-function/steps", "steps()")}}
- [CSS-Timing-Funktionen](/de/docs/Web/CSS/Guides/Easing_functions) Modul
- [`linear()` Timing-Generator](https://linear-easing-generator.netlify.app/) von Jake Archibald
