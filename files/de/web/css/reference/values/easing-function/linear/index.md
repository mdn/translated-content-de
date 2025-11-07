---
title: linear()
slug: Web/CSS/Reference/Values/easing-function/linear
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`linear()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) erzeugt eine Übergangskurve, die gleichmäßig zwischen Punkten verläuft. Als [`<easing-function>`](/de/docs/Web/CSS/Reference/Values/easing-function) erzeugt sie Übergänge, bei denen die {{Glossary("interpolation", "Interpolation")}} konstant von Anfang bis Ende erfolgt.

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
  - : Repräsentiert einen Zeitpunkt innerhalb der Dauer der Animation oder des Übergangs. Es müssen mindestens zwei Werte angegeben werden. Der Wert `0` repräsentiert den Beginn des Übergangs, und `1` das Ende. Werte außerhalb des Bereichs `0` bis `1` sind ebenfalls zulässig.

- {{cssxref("&lt;percentage&gt;")}} {{optional_inline}}
  - : Gibt an, wann der Fortschritt `<number>` während der Animationszeitachse erreicht wird. Er kann nach jedem `<number>` Wert außer dem ersten und letzten angegeben werden und kann bis zu zwei Werte annehmen. Wenn zwei Prozentwerte angegeben werden, definieren sie die Länge des Stopps: Der erste Prozentsatz gibt den Startpunkt an und der zweite Prozentsatz das Endpunkt für dieses Segment in der Animation oder dem Übergang. Wenn kein `<percentage>`-Wert angegeben wird, werden die Fortschrittswerte gleichmäßig über die Zeitachse verteilt.

## Beschreibung

Die `linear()` Funktion ermöglicht die Annäherung an komplexe Animationen und Übergänge, indem zwischen den angegebenen Punkten linear interpoliert wird. Eine typische Verwendung der `linear()` Funktion ist, viele Punkte bereitzustellen, um eine beliebige Kurve zu approximieren.

Die `linear()` Funktion erstellt Übergänge, bei denen der Fortschritt zwischen den angegebenen Punkten in einem konstanten Tempo erfolgt. Zum Beispiel hat `linear(0, 0.25, 1)` lineare Stopps bei `0`, `0.25` und `1`. Die Animation beginnt bei Punkt `0`, bewegt sich linear zu `0.25` und setzt sich dann linear zu Punkt `1` fort. Da kein Prozentsatz angegeben ist, wird die gleiche Dauer (`50%`) für jedes Segment verwendet, das heißt von `0` bis `0.25` und von `0.25` bis `1`.

![Grafiken des Eingabefortschritts bis zum Ausgabefortschritt, wobei linear(0, 0.25, 1) eine gebrochene Linie zeigt, die den Ursprung, (0.5, 0.25) und (1, 1) verbindet; und linear(0, 0.25 75%, 1) eine gebrochene Linie zeigt, die den Ursprung, (0.75, 0.25) und (1, 1) verbindet.](linear_function.svg)

Standardmäßig sind die Stopps äquidistant. Zum Beispiel, wenn es fünf Stopps gibt, werden sie bei 0%, 25%, 50%, 75% und 100% der Dauer stattfinden. Sie können optionale Prozentwerte verwenden, um eine feinere Kontrolle zu bieten, indem Sie festlegen, wann jeder Fortschrittswert auftreten soll, und eine besser kontrollierte Abfolge des Übergangs ermöglichen.

Betrachten Sie eine Animation mit einer Dauerzeit von 100 Sekunden und einer Änderung von 100 Pixeln. Sehen wir uns ein Szenario an, bei dem das 'Easing' der Animation als `linear(0, 0.25 75%, 1)` spezifiziert ist. In diesem Fall schreitet die Animation in den ersten 75 Sekunden (75% der Dauer) um 25 Pixel (25% der gesamten Änderung) voran. Die letzten 75 Pixel werden in den verbleibenden 25 Sekunden der Animation angewendet.

Für die gleiche Animation, nehmen wir an, die 'Easing'-Funktion ist als `linear(0, 0.5 25% 75%, 1)` spezifiziert. Hier erreicht die Animation in 25 Sekunden (25% der Dauer) 50 Pixel (50% ihrer gesamten Änderung) und bleibt dort für 50 Sekunden (75% - 25% der Dauer). Dann werden die letzten 50 Pixel in den verbleibenden 25 Sekunden der Dauer angewendet. Beachten Sie, dass `linear(0, 0.5 25% 75%, 1)` gleichbedeutend mit `linear(0, 0.5 25%, 0.5 75%, 1)` ist.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung der linear() Funktion

Die folgenden `linear()` Funktionen sind gültig zur Verwendung in CSS:

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
- [CSS Easing-Funktionen](/de/docs/Web/CSS/CSS_easing_functions) Modul
- [`linear()` Easing-Generator](https://linear-easing-generator.netlify.app/) von Jake Archibald
