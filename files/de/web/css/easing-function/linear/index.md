---
title: linear()
slug: Web/CSS/easing-function/linear
l10n:
  sourceCommit: 4f470ce128d50dc3568ddf03b313f420055d9799
---

{{CSSRef}}

Die **`linear()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) erzeugt eine Übergangskurve, die gleichmäßig zwischen den Punkten verläuft.
Als [`<easing-function>`](/de/docs/Web/CSS/easing-function) schafft sie Übergänge, bei denen die {{Glossary("interpolation", "Interpolation")}} mit einer konstanten Geschwindigkeit von Anfang bis Ende erfolgt.

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

  - : Repräsentiert einen Zeitpunkt entlang der Dauer der Animation oder des Übergangs.
    Mindestens zwei Werte müssen angegeben werden.
    Der Wert `0` repräsentiert den Beginn des Übergangs, und `1` das Ende.
    Werte außerhalb des Bereichs `0` bis `1` sind ebenfalls erlaubt.

- {{cssxref("&lt;percentage&gt;")}} {{optional_inline}}

  - : Gibt an, wann der Fortschritt `<number>` während der Animationszeitleiste erreicht wird.
    Es kann nach jedem `<number>`-Wert außer dem ersten und letzten angegeben werden und kann bis zu zwei Werte aufnehmen.
    Wenn zwei Prozentwerte angegeben werden, definieren sie die Länge des Stopps: Der erste Prozentsatz gibt den Startpunkt an und der zweite Prozentsatz den Endpunkt für dieses Segment in der Animation oder dem Übergang. Wenn kein `<percentage>`-Wert angegeben wird, werden die Fortschrittswerte gleichmäßig entlang der Zeitleiste verteilt.

## Beschreibung

Die `linear()`-Funktion ermöglicht die Annäherung an komplexe Animationen und Übergänge, indem sie linear zwischen den angegebenen Punkten interpoliert.
Ein typischer Einsatz der `linear()`-Funktion besteht darin, viele Punkte bereitzustellen, um jede Kurve zu approximieren.

Die `linear()`-Funktion erzeugt Übergänge, bei denen der Fortschritt mit einer konstanten Geschwindigkeit zwischen den angegebenen Punkten erfolgt.
Zum Beispiel hat `linear(0, 0.25, 1)` lineare Stops bei `0`, `0.25` und `1`.
Die Animation beginnt bei Punkt `0`, bewegt sich linear zu `0.25`, und dann linear weiter zu Punkt `1`.
Da kein Prozentsatz angegeben ist, wird für jedes Segment die gleiche Dauer (`50%`) verwendet, das heißt, von `0` bis `0.25` und von `0.25` bis `1`.

![Diagramme des Fortschritts von Eingang zu Ausgang, bei denen `linear(0, 0.25, 1)` eine gebrochene Linie zeigt, die den Ursprung, (0.5, 0.25) und (1, 1) verbindet; und `linear(0, 0.25 75%, 1)` eine gebrochene Linie zeigt, die den Ursprung, (0.75, 0.25) und (1, 1) verbindet.](linear_function.svg)

Standardmäßig sind die Stops äquidistant. Wenn es zum Beispiel fünf Stops gibt, treten sie bei 0%, 25%, 50%, 75% und 100% der Dauer auf. Optional können Sie Prozentwerte verwenden, um eine feinere Steuerung zu ermöglichen, indem Sie festlegen, wann jeder Fortschrittswert auftreten soll, und so einen kontrollierteren Übergang der Transition ermöglichen.

Betrachten Sie eine Animation mit einer Dauer von 100 Sekunden und einer Veränderung von 100 Pixeln. Schauen wir uns ein Szenario an, in dem das Easing der Animation als `linear(0, 0.25 75%, 1)` festgelegt ist. In diesem Fall schreitet die Animation auf 25 Pixel (25% ihrer Gesamtveränderung) in den ersten 75 Sekunden (75% der Dauer) fort. Die letzten 75 Pixel werden in den verbleibenden 25 Sekunden der Animation angewendet.

Für dieselbe Animation nehmen wir an, dass die Easing-Funktion als `linear(0, 0.5 25% 75%, 1)` festgelegt ist. Hier erreicht die Animation 50 Pixel (50% ihrer Gesamtveränderung) in 25 Sekunden (25% der Dauer) und bleibt dort für 50 Sekunden (75% - 25% der Dauer). Dann werden die letzten 50 Pixel in den verbleibenden 25 Sekunden der Dauer angewendet. Beachten Sie, dass `linear(0, 0.5 25% 75%, 1)` gleichwertig zu `linear(0, 0.5 25%, 0.5 75%, 1)` ist.

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

- Andere `easing`-Funktionen: {{cssxref("easing-function/cubic-bezier", "cubic-bezier()")}} und {{cssxref("easing-function/steps", "steps()")}}
- [`linear()` Easing-Generator](https://linear-easing-generator.netlify.app/) von Jake Archibald
