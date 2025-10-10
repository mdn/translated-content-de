---
title: linear()
slug: Web/CSS/easing-function/linear
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Die **`linear()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) erstellt eine Übergangskurve, die gleichmäßig zwischen Punkten verläuft. Als [`<easing-function>`](/de/docs/Web/CSS/easing-function) erzeugt sie Übergänge, bei denen die {{Glossary("interpolation", "Interpolation")}} von Anfang bis Ende mit einer konstanten Rate erfolgt.

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
  - : Repräsentiert einen Zeitpunkt innerhalb der Dauer der Animation oder des Übergangs. Es müssen mindestens zwei Werte angegeben werden. Der Wert `0` repräsentiert den Beginn des Übergangs und `1` das Ende. Werte außerhalb des Bereichs `0` bis `1` sind ebenfalls erlaubt.

- {{cssxref("&lt;percentage&gt;")}} {{optional_inline}}
  - : Gibt an, wann der Fortschritt `<number>` während der Animationstimeline erreicht wird. Es kann nach jedem `<number>`-Wert außer dem ersten und letzten angegeben werden und kann bis zu zwei Werte annehmen. Wenn zwei Prozentwerte angegeben werden, definieren sie die Länge des Stops: Der erste Prozentwert gibt den Startpunkt und der zweite Prozentwert den Endpunkt für dieses Segment der Animation oder des Übergangs an. Wird kein `<percentage>`-Wert angegeben, werden die Fortschrittswerte gleichmäßig entlang der Timeline verteilt.

## Beschreibung

Die `linear()` Funktion ermöglicht die Annäherung an komplexe Animationen und Übergänge, indem sie linear zwischen den angegebenen Punkten interpoliert. Eine typische Verwendung der `linear()` Funktion besteht darin, viele Punkte bereitzustellen, um eine beliebige Kurve zu approximieren.

Die `linear()` Funktion erstellt Übergänge, bei denen der Fortschritt mit einer konstanten Rate zwischen den angegebenen Punkten erfolgt. Zum Beispiel hat `linear(0, 0.25, 1)` lineare Stops bei `0`, `0.25` und `1`. Die Animation beginnt bei Punkt `0`, bewegt sich linear zu `0.25` und dann weiter linear zu Punkt `1`. Da kein Prozentsatz angegeben ist, wird die gleiche Dauer (`50%`) für jedes Segment verwendet, das heißt von `0` bis `0.25` und von `0.25` bis `1`.

![Grafiken des Eingangsfortschritts zum Ausgangsfortschritt, von denen linear(0, 0.25, 1) eine gebrochene Linie zeigt, die den Ursprung, (0.5, 0.25) und (1, 1) verbindet; und linear(0, 0.25 75%, 1) eine gebrochene Linie zeigt, die den Ursprung, (0.75, 0.25) und (1, 1) verbindet.](linear_function.svg)

Standardmäßig sind die Stops gleichmäßig verteilt. Beispielsweise, wenn es fünf Stops gibt, treten sie bei 0%, 25%, 50%, 75% und 100% der Dauer auf. Sie können optionale Prozentwerte verwenden, um genauere Kontrolle zu bieten und zu definieren, wann jeder Fortschrittswert auftreten soll, was eine kontrolliertere Progression des Übergangs ermöglicht.

Betrachten Sie eine Animation mit einer Dauer von 100 Sekunden und einer Änderung von 100 Pixeln. Schauen wir uns ein Szenario an, bei dem die Beschleunigung der Animation als `linear(0, 0.25 75%, 1)` angegeben ist. In diesem Fall schreitet die Animation in den ersten 75 Sekunden (75% der Dauer) zu 25 Pixeln (25% ihrer Gesamtänderung) voran. Die letzten 75 Pixel werden in den verbleibenden 25 Sekunden der Animation angewendet.

Für die gleiche Animation nehmen wir an, die Beschleunigungsfunktion ist als `linear(0, 0.5 25% 75%, 1)` angegeben. Hier erreicht die Animation 50 Pixel (50% ihrer Gesamtänderung) in 25 Sekunden (25% der Dauer) und verbleibt dort für 50 Sekunden (75% - 25% der Dauer). Dann werden die letzten 50 Pixel in den verbleibenden 25 Sekunden der Dauer angewendet. Beachten Sie, dass `linear(0, 0.5 25% 75%, 1)` gleichwertig zu `linear(0, 0.5 25%, 0.5 75%, 1)` ist.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung der linear() Funktion

Die folgenden `linear()` Funktionen sind gültig für die Verwendung in CSS:

```css example-good
/* Three evenly distributed progress points */
linear(0, 0.25, 1)

/* Custom timing with percentage values */
linear(0, 0.5 25% 75%, 1)
```

Die folgenden `linear()` Definitionen sind ungültig:

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

- Andere Beschleunigungsfunktionen: {{cssxref("easing-function/cubic-bezier", "cubic-bezier()")}} und {{cssxref("easing-function/steps", "steps()")}}
- [CSS Beschleunigungsfunktionen](/de/docs/Web/CSS/CSS_easing_functions) Modul
- [`linear()` Beschleunigungsgenerator](https://linear-easing-generator.netlify.app/) von Jake Archibald
