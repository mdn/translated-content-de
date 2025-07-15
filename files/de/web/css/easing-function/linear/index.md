---
title: linear()
slug: Web/CSS/easing-function/linear
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`linear()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) erzeugt eine Übergangskurve, die gleichmäßig zwischen Punkten verläuft.
Als [`<easing-function>`](/de/docs/Web/CSS/easing-function) erstellt sie Übergänge, bei denen die {{Glossary("interpolation", "Interpolation")}} von Anfang bis Ende mit konstanter Geschwindigkeit erfolgt.

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
  - : Stellt einen Zeitpunkt innerhalb der Dauer der Animation oder des Übergangs dar.
    Es müssen mindestens zwei Werte angegeben werden.
    Der Wert `0` repräsentiert den Beginn des Übergangs, und `1` repräsentiert das Ende.
    Werte außerhalb des Bereichs von `0` bis `1` sind ebenfalls erlaubt.

- {{cssxref("&lt;percentage&gt;")}} {{optional_inline}}
  - : Gibt an, wann der Fortschritt `<number>` während der Animationszeitleiste erreicht wird.
    Er kann nach jedem `<number>`-Wert außer dem ersten und letzten angegeben werden und kann bis zu zwei Werte annehmen.
    Wenn zwei Prozentwerte angegeben sind, definieren sie die Länge des Stopps: Der erste Prozentsatz gibt den Startpunkt und der zweite Prozentsatz den Endpunkt für dieses Segment in der Animation oder dem Übergang an. Wenn kein `<percentage>`-Wert angegeben ist, werden die Fortschrittswerte gleichmäßig entlang der Zeitleiste verteilt.

## Beschreibung

Die `linear()`-Funktion ermöglicht die Annäherung komplexer Animationen und Übergänge, indem sie linear zwischen den angegebenen Punkten interpoliert.
Ein typischer Einsatz der `linear()`-Funktion besteht darin, viele Punkte bereitzustellen, um jede Kurve zu approximieren.

Die `linear()`-Funktion erstellt Übergänge, bei denen der Fortschritt zwischen den angegebenen Punkten mit konstanter Geschwindigkeit erfolgt.
Zum Beispiel hat `linear(0, 0.25, 1)` lineare Stops von `0`, `0.25` und `1`.
Die Animation beginnt bei Punkt `0`, bewegt sich linear zu `0.25` und setzt sich dann linear bis Punkt `1` fort.
Da kein Prozentsatz angegeben ist, wird die gleiche Dauer (`50%`) für jedes Segment verwendet, also von `0` bis `0.25` und von `0.25` bis `1`.

![Diagramme des Eingabefortschritts zum Ausgabefortschritt, bei denen linear(0, 0.25, 1) eine gebrochene Linie zeigt, die den Ursprung, (0.5, 0.25) und (1, 1) verbindet; und linear(0, 0.25 75%, 1) eine gebrochene Linie zeigt, die den Ursprung, (0.75, 0.25) und (1, 1) verbindet.](linear_function.svg)

Standardmäßig sind die Stops gleichmäßig verteilt. Zum Beispiel, wenn es fünf Stops gibt, treten sie bei 0%, 25%, 50%, 75% und 100% der Dauer auf. Sie können optionale Prozentwerte verwenden, um eine genauere Steuerung bereitzustellen, indem Sie definieren, wann jeder Fortschrittswert auftreten soll und so eine kontrolliertere Progression des Übergangs ermöglichen.

Betrachten wir eine Animation mit einer Dauer von 100 Sekunden und einer Änderung von 100 Pixel. Lassen Sie uns ein Szenario betrachten, bei dem die Beschleunigung der Animation als `linear(0, 0.25 75%, 1)` angegeben ist. In diesem Fall schreitet die Animation in den ersten 75 Sekunden (75% der Dauer) auf 25 Pixel (25% ihrer gesamten Änderung) voran. Die letzten 75 Pixel werden in den verbleibenden 25 Sekunden der Animation angewendet.

Verwenden wir dieselbe Animation, nehme man an, die Beschleunigungsfunktion ist als `linear(0, 0.5 25% 75%, 1)` angegeben. Hier erreicht die Animation 50 Pixel (50% ihrer gesamten Änderung) in 25 Sekunden (25% der Dauer) und bleibt dort für 50 Sekunden (75% - 25% der Dauer). Dann werden die letzten 50 Pixel in den verbleibenden 25 Sekunden der Dauer angewendet. Beachten Sie, dass `linear(0, 0.5 25% 75%, 1)` gleichwertig ist mit `linear(0, 0.5 25%, 0.5 75%, 1)`.

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

- Andere Beschleunigungsfunktionen: {{cssxref("easing-function/cubic-bezier", "cubic-bezier()")}} und {{cssxref("easing-function/steps", "steps()")}}
- [`linear()` Easing-Generator](https://linear-easing-generator.netlify.app/) von Jake Archibald
