---
title: linear()
slug: Web/CSS/Reference/Values/easing-function/linear
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`linear()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) erzeugt eine Übergangskurve, die gleichmäßig zwischen Punkten verläuft. Als {{cssxref("easing-function")}} erstellt sie Übergänge, bei denen die {{Glossary("interpolation", "Interpolation")}} mit konstanter Geschwindigkeit vom Anfang bis zum Ende erfolgt.

## Syntax

```css
linear(0, 1)
linear(0, 0.25, 1)
linear(0, 0.25 75%, 1)
linear(0, 0.5 25% 75%, 1)
```

### Parameter

Die Funktion akzeptiert zwei oder mehr der folgenden Werte, die Fortschrittspunkte in der Animationszeitachse darstellen:

- {{cssxref("&lt;number&gt;")}}
  - : Repräsentiert einen Zeitpunkt während der Dauer der Animation oder des Übergangs. Es müssen mindestens zwei Werte angegeben werden. Der Wert `0` steht für den Beginn des Übergangs und `1` für das Ende. Werte außerhalb des Bereichs von `0` bis `1` sind ebenfalls erlaubt.

- {{cssxref("&lt;percentage&gt;")}} {{optional_inline}}
  - : Gibt an, wann der Fortschritt `<number>` während der Animationszeitleiste erreicht wird. Er kann nach jedem `<number>`-Wert außer dem ersten und letzten angegeben werden und kann bis zu zwei Werte annehmen. Wenn zwei Prozentwerte angegeben sind, definieren sie die Länge des Stops: Der erste Prozentsatz gibt den Startpunkt und der zweite Prozentsatz das Ende des Segments in der Animation oder dem Übergang an. Wenn kein `<percentage>`-Wert angegeben wird, werden die Fortschrittswerte gleichmäßig entlang der Zeitleiste verteilt.

## Beschreibung

Die Funktion `linear()` ermöglicht die Annäherung komplexer Animationen und Übergänge durch lineare Interpolation zwischen den angegebenen Punkten. Eine typische Verwendung der Funktion `linear()` ist es, viele Punkte bereitzustellen, um eine beliebige Kurve zu approximieren.

Die Funktion `linear()` erstellt Übergänge, bei denen der Fortschritt mit konstanter Geschwindigkeit zwischen den angegebenen Punkten erfolgt. Zum Beispiel hat `linear(0, 0.25, 1)` lineare Stops bei `0`, `0.25` und `1`. Die Animation beginnt bei Punkt `0`, verläuft linear zu `0.25` und setzt sich dann linear bis Punkt `1` fort. Da kein Prozentwert angegeben ist, wird die gleiche Dauer (`50%`) für jedes Segment verwendet, d.h. von `0` bis `0.25` und von `0.25` bis `1`.

![Diagramme des Eingabefortschritts zum Ausgabefortschritt, wobei linear(0, 0.25, 1) eine gebrochene Linie zeigt, die den Ursprung, (0.5, 0.25) und (1, 1) verbindet; und linear(0, 0.25 75%, 1) zeigt eine gebrochene Linie, die den Ursprung, (0.75, 0.25) und (1, 1) verbindet.](linear_function.svg)

Standardmäßig sind die Stops äquidistant. Wenn es beispielsweise fünf Stops gibt, treten sie bei 0%, 25%, 50%, 75% und 100% der Dauer auf. Sie können optionale Prozentwerte verwenden, um eine genauere Kontrolle zu bieten, indem Sie definieren, wann jeder Fortschrittswert auftreten soll, und eine kontrolliertere Progression des Übergangs ermöglichen.

Betrachten Sie eine Animation mit einer Dauer von 100 Sekunden und einer Veränderung von 100 Pixeln. Schauen wir uns ein Szenario an, in dem das Easing der Animation als `linear(0, 0.25 75%, 1)` angegeben ist. In diesem Fall schreitet die Animation in den ersten 75 Sekunden (75% der Dauer) zu 25 Pixeln (25% ihrer gesamten Veränderung) voran. Die letzten 75 Pixel werden in den verbleibenden 25 Sekunden der Animation angewendet.

Für die gleiche Animation nehmen wir an, dass die Easing-Funktion als `linear(0, 0.5 25% 75%, 1)` angegeben ist. Hier erreicht die Animation in 25 Sekunden (25% der Dauer) 50 Pixel (50% ihrer gesamten Veränderung) und bleibt dort für 50 Sekunden (75% - 25% der Dauer). Dann werden die letzten 50 Pixel in den verbleibenden 25 Sekunden der Dauer angewendet. Beachten Sie, dass `linear(0, 0.5 25% 75%, 1)` äquivalent zu `linear(0, 0.5 25%, 0.5 75%, 1)` ist.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung der linear() Funktion

Die folgenden `linear()`-Funktionen sind gültig für die Verwendung in CSS:

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

- Andere Easing-Funktionen: {{cssxref("easing-function/cubic-bezier", "cubic-bezier()")}} und {{cssxref("easing-function/steps", "steps()")}}
- [CSS Easing-Funktionen](/de/docs/Web/CSS/Guides/Easing_functions) Modul
- [`linear()` Easing-Generator](https://linear-easing-generator.netlify.app/) von Jake Archibald
