---
title: linear()
slug: Web/CSS/easing-function/linear
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`linear()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) erstellt eine Übergangskurve, die gleichmäßig zwischen den Punkten verläuft. Als [`<easing-function>`](/de/docs/Web/CSS/easing-function) erzeugt sie Übergänge, bei denen die {{Glossary("interpolation", "Interpolation")}} konstant vom Anfang bis zum Ende erfolgt.

## Syntax

```css
linear(0, 1)
linear(0, 0.25, 1)
linear(0, 0.25 75%, 1)
linear(0, 0.5 25% 75%, 1)
```

### Parameter

Die Funktion akzeptiert zwei oder mehr der folgenden Werte, die Fortschrittspunkte in der Animationszeitleiste darstellen:

- {{cssxref("&lt;number&gt;")}}

  - : Stellt einen Zeitpunkt in der Dauer der Animation oder des Übergangs dar. Mindestens zwei Werte müssen angegeben werden. Der Wert `0` repräsentiert den Beginn des Übergangs und `1` das Ende. Werte außerhalb des Bereichs von `0` bis `1` sind ebenfalls zulässig.

- {{cssxref("&lt;percentage&gt;")}} {{optional_inline}}
  - : Gibt an, wann der Fortschritt `<number>` während der Animationszeitleiste erreicht wird. Es kann nach jedem `<number>`-Wert angegeben werden, außer dem ersten und letzten, und kann bis zu zwei Werte annehmen. Wenn zwei Prozentwerte angegeben sind, definieren sie die Länge des Stopps: der erste Prozentwert gibt den Startpunkt und der zweite den Endpunkt für diesen Abschnitt der Animation oder des Übergangs an. Wenn kein `<percentage>`-Wert angegeben ist, werden die Fortschrittswerte gleichmäßig entlang der Zeitleiste verteilt.

## Beschreibung

Die `linear()` Funktion ermöglicht die Annäherung komplexer Animationen und Übergänge, indem sie linear zwischen den angegebenen Punkten interpoliert. Eine typische Verwendung der `linear()` Funktion besteht darin, viele Punkte bereitzustellen, um eine beliebige Kurve zu approximieren.

Die `linear()` Funktion erstellt Übergänge, bei denen der Fortschritt mit konstanter Geschwindigkeit zwischen den angegebenen Punkten abläuft. Zum Beispiel hat `linear(0, 0.25, 1)` lineare Stopps bei `0`, `0.25` und `1`. Die Animation beginnt bei Punkt `0`, bewegt sich linear zu `0.25` und dann weiter linear zu Punkt `1`. Da kein Prozentwert angegeben ist, wird die gleiche Dauer (`50%`) für jedes Segment verwendet, also von `0` bis `0.25` und von `0.25` bis `1`.

![Diagramme des Eingangs- und Ausgangsfortschritts, von denen linear(0, 0.25, 1) eine gebrochene Linie zeigt, die den Ursprung, (0.5, 0.25) und (1, 1) verbindet; und linear(0, 0.25 75%, 1) eine gebrochene Linie zeigt, die den Ursprung, (0.75, 0.25) und (1, 1) verbindet.](linear_function.svg)

Standardmäßig sind die Stopps gleich weit entfernt. Wenn es beispielsweise fünf Stopps gibt, treten sie bei 0%, 25%, 50%, 75% und 100% der Dauer auf. Sie können optionale Prozentwerte verwenden, um eine feinere Kontrolle zu ermöglichen, indem Sie definieren, wann jeder Fortschrittswert auftreten soll, und so eine kontrolliertere Progression des Übergangs ermöglichen.

Betrachten Sie eine Animation mit einer Dauert von 100 Sekunden und einer Änderung von 100 Pixeln. Lassen Sie uns ein Szenario betrachten, bei dem die Abmilderung der Animation als `linear(0, 0.25 75%, 1)` angegeben ist. In diesem Fall schreitet die Animation in den ersten 75 Sekunden (75% der Dauer) um 25 Pixel (25% ihrer Gesamtänderung) voran. Die letzten 75 Pixel werden in den verbleibenden 25 Sekunden der Animation angewendet.

Für die gleiche Animation, nehmen wir an, die Abmilderungsfunktion wird als `linear(0, 0.5 25% 75%, 1)` angegeben. Hier erreicht die Animation 50 Pixel (50% ihrer Gesamtänderung) in 25 Sekunden (25% der Dauer) und bleibt dort für 50 Sekunden (75% - 25% der Dauer) stehen. Dann werden die letzten 50 Pixel in den verbleibenden 25 Sekunden der Dauer angewendet. Beachten Sie, dass `linear(0, 0.5 25% 75%, 1)` äquivalent zu `linear(0, 0.5 25%, 0.5 75%, 1)` ist.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung der linear() Funktion

Die folgenden `linear()` Funktionen sind gültig für den Einsatz in CSS:

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

- Andere Abmilderungsfunktionen: {{cssxref("easing-function/cubic-bezier", "cubic-bezier()")}} und {{cssxref("easing-function/steps", "steps()")}}
- [`linear()` easing generator](https://linear-easing-generator.netlify.app/) von Jake Archibald
