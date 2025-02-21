---
title: linear()
slug: Web/CSS/easing-function/linear
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

Die **`linear()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) erstellt eine Übergangskurve, die gleichmäßig zwischen Punkten verläuft.
Als [`<easing-function>`](/de/docs/Web/CSS/easing-function) erzeugt sie Übergänge, bei denen die {{Glossary("interpolation", "Interpolation")}} gleichmäßig von Anfang bis Ende verläuft.

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

  - : Stellt einen Zeitpunkt während der Dauer der Animation oder des Übergangs dar.
    Es müssen mindestens zwei Werte angegeben werden.
    Der Wert `0` repräsentiert den Beginn des Übergangs und `1` das Ende.
    Werte außerhalb des Bereichs von `0` bis `1` sind ebenfalls zulässig.

- {{cssxref("&lt;percentage&gt;")}} {{optional_inline}}

  - : Gibt an, wann der Fortschritt `<number>` während der Animationszeitachse erreicht wird.
    Kann nach jedem `<number>`-Wert außer dem ersten und letzten angegeben werden und kann bis zu zwei Werte annehmen.
    Wenn zwei Prozentwerte angegeben werden, definieren sie die Länge des Stops: Der erste Prozentsatz gibt den Startpunkt und der zweite Prozentsatz den Endpunkt für dieses Segment in der Animation oder im Übergang an. Wenn kein `<percentage>` Wert angegeben wird, werden die Fortschrittswerte gleichmäßig entlang der Zeitachse verteilt.

## Beschreibung

Die `linear()` Funktion ermöglicht die Annäherung komplexer Animationen und Übergänge durch lineare Interpolation zwischen den angegebenen Punkten.
Ein typischer Einsatz der `linear()` Funktion ist das Bereitstellen vieler Punkte, um eine beliebige Kurve zu approximieren.

Die `linear()` Funktion erzeugt Übergänge, bei denen der Fortschritt zwischen den angegebenen Punkten konstant erfolgt.
Zum Beispiel hat `linear(0, 0.25, 1)` lineare Stops bei `0`, `0.25` und `1`.
Die Animation beginnt bei Punkt `0`, bewegt sich linear zu `0.25` und setzt sich dann linear zu Punkt `1` fort.
Da kein Prozentsatz angegeben ist, wird für jedes Segment die gleiche Dauer (`50%`) verwendet, das heißt von `0` bis `0.25` und von `0.25` bis `1`.

![Graphen des Eingabe- zu Ausgabe-Fortschritts, wobei linear(0, 0.25, 1) eine gebrochene Linie zeigt, die den Ursprung, (0.5, 0.25) und (1, 1) verbindet; und linear(0, 0.25 75%, 1) eine gebrochene Linie zeigt, die den Ursprung, (0.75, 0.25) und (1, 1) verbindet.](linear_function.svg)

Standardmäßig sind die Stops gleichmäßig verteilt. Wenn es zum Beispiel fünf Stops gibt, treten sie bei 0%, 25%, 50%, 75% und 100% der Dauer auf. Sie können optionale Prozentwerte verwenden, um eine feinere Kontrolle zu bieten und zu definieren, wann jeder Fortschrittswert auftreten soll, was einen kontrollierteren Verlauf des Übergangs ermöglicht.

Betrachten Sie eine Animation mit einer Dauer von 100 Sekunden und einer Änderung von 100 Pixel. Schauen wir uns ein Szenario an, bei dem das Easing der Animation als `linear(0, 0.25 75%, 1)` angegeben ist. In diesem Fall schreitet die Animation in den ersten 75 Sekunden (75% der Dauer) zu 25 Pixeln (25% ihrer gesamten Änderung) voran. Die letzten 75 Pixel werden in den verbleibenden 25 Sekunden der Animation angewendet.

Für die gleiche Animation nehmen wir an, die Easing-Funktion wird als `linear(0, 0.5 25% 75%, 1)` angegeben. Hier erreicht die Animation 50 Pixel (50% ihrer gesamten Änderung) in 25 Sekunden (25% der Dauer) und bleibt dort für 50 Sekunden (75% - 25% der Dauer). Dann werden die letzten 50 Pixel in den verbleibenden 25 Sekunden der Dauer angewendet. Beachten Sie, dass `linear(0, 0.5 25% 75%, 1)` gleichbedeutend mit `linear(0, 0.5 25%, 0.5 75%, 1)` ist.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung der linear() Funktion

Die folgenden `linear()` Funktionen sind zur Verwendung in CSS gültig:

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

- Andere Easing-Funktionen: {{cssxref("easing-function/cubic-bezier", "cubic-bezier()")}} und {{cssxref("easing-function/steps", "steps()")}}
- [`linear()` Easing-Generator](https://linear-easing-generator.netlify.app/) von Jake Archibald
