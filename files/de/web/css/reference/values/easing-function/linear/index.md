---
title: "`linear()` CSS-Funktion"
short-title: linear()
slug: Web/CSS/Reference/Values/easing-function/linear
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

Die **`linear()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) erzeugt eine Übergangskurve, die gleichmäßig zwischen Punkten verläuft.
Als {{cssxref("easing-function")}} erzeugt sie Übergänge, bei denen die {{Glossary("interpolation", "Interpolation")}} mit konstanter Geschwindigkeit vom Anfang bis zum Ende erfolgt.

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
  - : Repräsentiert einen Punkt in der Zeit während der Dauer der Animation oder des Übergangs.
    Es müssen mindestens zwei Werte angegeben werden.
    Der Wert `0` repräsentiert den Beginn des Übergangs und `1` das Ende.
    Werte außerhalb des Bereichs von `0` bis `1` sind ebenfalls erlaubt.

- {{cssxref("&lt;percentage&gt;")}} {{optional_inline}}
  - : Gibt an, wann der Fortschritt `<number>` während der Animationstimeline erreicht wird.
    Er kann nach jedem `<number>`-Wert außer dem ersten und letzten angegeben werden und kann bis zu zwei Werte annehmen.
    Wenn zwei Prozentwerte angegeben werden, definieren sie die Länge des Haltepunkts: Der erste Prozentsatz gibt den Startpunkt an und der zweite Prozentsatz den Endpunkt für dieses Segment in der Animation oder im Übergang. Wenn kein `<percentage>`-Wert angegeben wird, werden die Fortschrittswerte gleichmäßig entlang der Timeline verteilt.

## Beschreibung

Die `linear()`-Funktion ermöglicht die Annäherung komplexer Animationen und Übergänge, indem sie linear zwischen den angegebenen Punkten interpoliert.
Eine typische Nutzung der `linear()`-Funktion ist es, viele Punkte bereitzustellen, um eine beliebige Kurve anzunähern.

Die `linear()`-Funktion erzeugt Übergänge, bei denen der Fortschritt mit einer konstanten Geschwindigkeit zwischen den angegebenen Punkten erfolgt.
Zum Beispiel hat `linear(0, 0.25, 1)` lineare Stops bei `0`, `0.25` und `1`.
Die Animation beginnt bei Punkt `0`, bewegt sich linear zu `0.25` und fährt dann linear zu Punkt `1` fort.
Da kein Prozentsatz angegeben ist, wird für jedes Segment dieselbe Dauer (`50%`) verwendet, das heißt von `0` zu `0.25` und von `0.25` zu `1`.

![Diagramme des Eingabefortschritts zum Ausgabefortschritt, von denen linear(0, 0.25, 1) eine unterbrochene Linie zeigt, die den Ursprung, (0.5, 0.25) und (1, 1) verbindet; und linear(0, 0.25 75%, 1) eine unterbrochene Linie zeigt, die den Ursprung, (0.75, 0.25) und (1, 1) verbindet.](linear_function.svg)

Standardmäßig sind die Stops äquidistant. Wenn es beispielsweise fünf Stops gibt, treten sie bei 0%, 25%, 50%, 75% und 100% der Dauer auf. Sie können optionale Prozentwerte verwenden, um eine feinere Kontrolle zu ermöglichen, indem Sie definieren, wann jeder Fortschrittswert erfolgen soll, und so ein kontrollierteres Fortschreiten des Übergangs ermöglichen.

Betrachten Sie eine Animation mit einer Dauer von 100 Sekunden und einer Änderung von 100 Pixeln. Sehen wir uns ein Szenario an, in dem das Easing der Animation als `linear(0, 0.25 75%, 1)` angegeben ist. In diesem Fall schreitet die Animation in den ersten 75 Sekunden (75% der Dauer) zu 25 Pixeln (25% der Gesamtänderung) voran. Die letzten 75 Pixel werden in den verbleibenden 25 Sekunden der Animation angewendet.

Bei derselben Animation wird die Easing-Funktion als `linear(0, 0.5 25% 75%, 1)` angegeben. Hier erreicht die Animation 50 Pixel (50% der Gesamtänderung) in 25 Sekunden (25% der Dauer) und bleibt dort für 50 Sekunden (75% - 25% der Dauer). Dann werden die letzten 50 Pixel in den verbleibenden 25 Sekunden der Dauer angewendet. Beachten Sie, dass `linear(0, 0.5 25% 75%, 1)` gleichbedeutend mit `linear(0, 0.5 25%, 0.5 75%, 1)` ist.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung der linear() Funktion

Die folgenden `linear()`-Funktionen sind zur Verwendung in CSS gültig:

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
- [CSS-Easing-Funktionen](/de/docs/Web/CSS/Guides/Easing_functions) Modul
- [`linear()` Easing-Generator](https://linear-easing-generator.netlify.app/) von Jake Archibald
