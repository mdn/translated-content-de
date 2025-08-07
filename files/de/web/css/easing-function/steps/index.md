---
title: steps()
slug: Web/CSS/easing-function/steps
l10n:
  sourceCommit: 861dc1b515e6dd9ff835b841cdba50388ffa746c
---

Die **`steps()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) definiert eine Transition, die die Eingabezeit in eine angegebene Anzahl von gleich langen Intervallen unterteilt. Diese Unterklasse von Stufenfunktionen wird manchmal auch als _Treppenstufenfunktionen_ bezeichnet.

## Syntax

```css
/* Different intervals */
steps(2, end)
steps(4, jump-end)
steps(12, end)

/* Different jump positions */
steps(3, jump-start)
steps(3, jump-end)
steps(3, jump-none)
steps(3, jump-both)
```

### Parameter

Die Funktion akzeptiert die folgenden Parameter:

- `<integer>`
  - : Gibt die Anzahl der gleich weit entfernten Intervalle oder 'Schritte' an.
    Es muss eine positive ganze Zahl größer als `0` sein, es sei denn, der zweite Parameter ist `jump-none`, in welchem Fall es eine positive ganze Zahl größer als `1` sein muss.

- `<step-position>`
  - : Gibt an, wann der Sprung zwischen den Werten erfolgt.
    Wenn weggelassen, ist der Standardwert `end`.
    Die möglichen Schlüsselwortwerte sind:
    - `jump-start` oder `start`
      - : Gibt an, dass der erste Schritt erfolgt, wenn die Animation beginnt.
    - `jump-end` oder `end`
      - : Gibt an, dass der letzte Schritt erfolgt, wenn die Animation endet.
    - `jump-none`
      - : Gibt an, dass weder frühe noch späte Sprünge erfolgen.
    - `jump-both`
      - : Gibt an, dass sowohl frühe als auch späte Sprünge erfolgen.

## Beschreibung

Die `steps()` Funktion teilt die Animationsdauer in gleiche Intervalle.
Beispielsweise teilt `steps(4, end)` die Animation in vier gleichmäßige Intervalle, wobei sich die Werte am Ende jedes Intervalls ändern, außer bei der letzten Änderung, die am Ende der Animation erfolgt.

Wenn eine Animation mehrere Segmente enthält, gilt die angegebene Anzahl von Schritten auf jedes Segment. Wenn eine Animation beispielsweise drei Segmente hat und `steps(2)` verwendet wird, gibt es insgesamt sechs Schritte, mit zwei Schritten pro Segment.

Das folgende Bild zeigt die Auswirkungen verschiedener `<step-position>`-Werte, wenn die Sprünge auftreten:

```css
steps(2, jump-start)  /* Or steps(2, start) */
steps(4, jump-end)    /* Or steps(4, end) */
steps(5, jump-none)
steps(3, jump-both)
```

![Grafiken des Eingabefortschritts zum Ausgabefortschritt, wobei steps(2, jump-start) horizontale Linien zeigt, die sich 0,5 Einheiten von (0, 0,5) und (0,5, 1) erstrecken, jeweils mit leeren Kreisen am Ursprung und (0,5, 0,5); steps(4, jump-end) zeigt horizontale Linien, die sich 0,25 Einheiten von (0, 0), (0,25, 0,25), (0,5, 0,5) und (0,75, 0,75) erstrecken, jeweils mit ungefüllten Kreisen bei (0,25, 0), (0,5, 0,25) und (0,75, 0,5) und einem ausgefüllten Kreis bei (1, 1); steps(5, jump-none) zeigt horizontale Linien, die sich 0,2 Einheiten von (0, 0), (0,2, 0,25), (0,4, 0,5), (0,6, 0,75) und (0,8, 1) erstrecken, jeweils mit ungefüllten Kreisen bei (0,2, 0), (0,4, 0,25), (0,6, 0,5) und (0,8, 0,75); steps(3, jump-both) zeigt horizontale Linien, die sich 1/3 Einheit von (0, 0,25), (1/3, 0,5) und (2/3, 0,75) erstrecken, jeweils mit einem ausgefüllten Kreis bei (1, 1) und ungefüllten Kreisen am Ursprung, (1/3, 0,25), (2/3, 0,5) und (1, 0,75).](jump.svg)

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung der steps() Funktion

Die folgenden `steps()` Funktionen sind gültig:

```css example-good
/* Five steps with jump at the end */
steps(5, end)

/* Two steps with jump at the start */
steps(2, start)

/* Using default second parameter */
steps(2)
```

Die folgenden `steps()` Funktionen sind ungültig:

```css example-bad
/* First parameter must be an <integer>, not a real value */
steps(2.0, jump-end)

/* Number of steps must be positive */
steps(-3, start)

/* Number of steps must be at least 1 */
steps(0, jump-none)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere Timing-Funktionen: {{cssxref("easing-function/cubic-bezier", "cubic-bezier()")}} und {{cssxref("easing-function/linear", "linear()")}}
- [CSS-Timing-Funktionen](/de/docs/Web/CSS/CSS_easing_functions) Modul
- [Stufenfunktion](https://en.wikipedia.org/wiki/Step_function) auf Wikipedia
