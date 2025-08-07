---
title: linear()
slug: Web/CSS/easing-function/linear
l10n:
  sourceCommit: 861dc1b515e6dd9ff835b841cdba50388ffa746c
---

Die **`linear()`** [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) erzeugt eine Übergangskurve, die gleichmäßig zwischen Punkten verläuft. Als [`<easing-function>`](/de/docs/Web/CSS/easing-function) erstellt sie Übergänge, bei denen die {{Glossary("interpolation", "Interpolation")}} mit konstanter Geschwindigkeit von Anfang bis Ende erfolgt.

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
  - : Repräsentiert einen Zeitpunkt innerhalb der Dauer der Animation oder des Übergangs.
    Mindestens zwei Werte müssen angegeben werden.
    Der Wert `0` repräsentiert den Beginn des Übergangs und `1` das Ende.
    Werte außerhalb des Bereichs `0` bis `1` sind ebenfalls erlaubt.

- {{cssxref("&lt;percentage&gt;")}} {{optional_inline}}
  - : Gibt an, wann der Fortschritts-`<number>` während der Animationszeitleiste erreicht wird.
    Er kann nach jedem `<number>`-Wert angegeben werden, außer nach dem ersten und letzten, und kann bis zu zwei Werte annehmen.
    Wenn zwei Prozentwerte angegeben werden, definieren sie die Länge des Halts: Der erste Prozentwert gibt den Startpunkt und der zweite Prozentwert den Endpunkt für dieses Segment in der Animation oder im Übergang an. Wenn kein `<percentage>`-Wert angegeben ist, werden die Fortschrittswerte gleichmäßig entlang der Zeitachse verteilt.

## Beschreibung

Die Funktion `linear()` ermöglicht die Annäherung an komplexe Animationen und Übergänge, indem sie linear zwischen den angegebenen Punkten interpoliert. Ein typischer Anwendungsfall der Funktion `linear()` besteht darin, viele Punkte zu liefern, um eine beliebige Kurve zu approximieren.

Die Funktion `linear()` erzeugt Übergänge, bei denen Fortschritte mit konstanter Geschwindigkeit zwischen den angegebenen Punkten erfolgen. Zum Beispiel hat `linear(0, 0.25, 1)` lineare Stopps von `0`, `0.25` und `1`. Die Animation beginnt bei Punkt `0`, bewegt sich linear zu `0.25` und setzt sich dann linear zu Punkt `1` fort. Da kein Prozentsatz angegeben ist, wird die gleiche Dauer (`50%`) für jedes Segment verwendet, also von `0` bis `0.25` und von `0.25` bis `1`.

![Diagramme des Eingabenfortschritts zum Ausgabenfortschritt, wobei linear(0, 0.25, 1) eine gebrochene Linie zeigt, die den Ursprung, (0.5, 0.25) und (1, 1) verbindet; und linear(0, 0.25 75%, 1) eine gebrochene Linie zeigt, die den Ursprung, (0.75, 0.25) und (1, 1) verbindet.](linear_function.svg)

Standardmäßig sind die Stopps gleichmäßig verteilt. Zum Beispiel, wenn es fünf Stopps gibt, treten sie bei 0%, 25%, 50%, 75% und 100% der Dauer auf. Sie können optionale Prozentwerte verwenden, um eine feinere Steuerung zu ermöglichen und zu definieren, wann jeder Fortschrittswert auftreten soll, wodurch ein kontrollierterer Übergang ermöglicht wird.

Betrachten Sie eine Animation mit einer Dauerzeit von 100 Sekunden und einer Änderung von 100 Pixeln. Betrachten wir ein Szenario, in dem das Easing der Animation als `linear(0, 0.25 75%, 1)` angegeben ist. In diesem Fall schreitet die Animation zu 25 Pixeln (25% seiner gesamten Änderung) in den ersten 75 Sekunden (75% der Dauer) vor. Die letzten 75 Pixel werden in den verbleibenden 25 Sekunden der Animation angewendet.

Für dieselbe Animation nehmen wir an, dass die `easing`-Funktion als `linear(0, 0.5 25% 75%, 1)` angegeben ist. Hier erreicht die Animation 50 Pixel (50% seiner gesamten Änderung) in 25 Sekunden (25% der Dauer) und bleibt dort für 50 Sekunden (75% - 25% der Dauer). Dann werden die letzten 50 Pixel in den verbleibenden 25 Sekunden der Dauer angewendet. Beachten Sie, dass `linear(0, 0.5 25% 75%, 1)` gleichwertig ist mit `linear(0, 0.5 25%, 0.5 75%, 1)`.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung der Funktion linear()

Die folgenden `linear()`-Funktionen sind gültig zur Verwendung in CSS:

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
- [CSS-Easing-Funktionen](/de/docs/Web/CSS/CSS_easing_functions) Modul
- [`linear()` easing generator](https://linear-easing-generator.netlify.app/) von Jake Archibald
