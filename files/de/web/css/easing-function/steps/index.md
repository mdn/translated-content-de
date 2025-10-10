---
title: steps()
slug: Web/CSS/easing-function/steps
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Die **`steps()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) definiert eine Transition, die die Eingabezeit in eine bestimmte Anzahl von gleich langen Intervallen unterteilt. Diese Unterklasse der Schrittfunktionen wird manchmal auch _Treppenfunktionen_ genannt.

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
  - : Repräsentiert die Anzahl der gleichmäßig verteilten Intervalle oder 'Schritte'.
    Es muss eine positive ganze Zahl größer als `0` sein, es sei denn, der zweite Parameter ist `jump-none`. In diesem Fall muss es eine positive ganze Zahl größer als `1` sein.

- `<step-position>`
  - : Gibt an, wann der Sprung zwischen den Werten erfolgt.
    Wenn weggelassen, ist der Standardwert `end`.
    Die möglichen Schlüsselwortwerte sind:
    - `jump-start` oder `start`
      - : Gibt an, dass der erste Schritt zu Beginn der Animation erfolgt.
    - `jump-end` oder `end`
      - : Gibt an, dass der letzte Schritt am Ende der Animation erfolgt.
    - `jump-none`
      - : Gibt an, dass weder frühe noch späte Sprünge erfolgen.
    - `jump-both`
      - : Gibt an, dass sowohl frühe als auch späte Sprünge erfolgen.

## Beschreibung

Die Funktion `steps()` teilt die Animationsdauer in gleiche Intervalle auf.
Zum Beispiel teilt `steps(4, end)` die Animation in vier gleiche Intervalle, wobei sich die Werte am Ende jedes Intervalls ändern, außer die letzte Änderung, die am Ende der Animation erfolgt.

Wenn eine Animation mehrere Segmente enthält, gilt die angegebene Anzahl an Schritten für jedes Segment. Wenn eine Animation zum Beispiel drei Segmente hat und `steps(2)` verwendet, gibt es insgesamt sechs Schritte, mit zwei Schritten pro Segment.

Das folgende Bild zeigt die Auswirkungen verschiedener `<step-position>` Werte, wenn die Sprünge auftreten:

```css
steps(2, jump-start)  /* Or steps(2, start) */
steps(4, jump-end)    /* Or steps(4, end) */
steps(5, jump-none)
steps(3, jump-both)
```

![Diagramme des Eingabefortschritts zum Ausgabefortschritt, wobei steps(2, jump-start) horizontale Linien zeigt, die sich 0,5 Einheiten von (0, 0,5) und (0,5, 1) erstrecken, mit leeren Kreisen am Ursprung und (0,5, 0,5); steps(4, jump-end) horizontale Linien zeigt, die sich jeweils 0,25 Einheiten von (0, 0), (0,25, 0,25), (0,5, 0,5) und (0,75, 0,75) erstrecken, mit ungefüllten Kreisen bei (0,25, 0), (0,5, 0,25) und (0,75, 0,5), und einem gefüllten Kreis bei (1, 1); steps(5, jump-none) horizontale Linien zeigt, die sich jeweils 0,2 Einheiten von (0, 0), (0,2, 0,25), (0,4, 0,5), (0,6, 0,75) und (0,8, 1) erstrecken, mit ungefüllten Kreisen bei (0,2, 0), (0,4, 0,25), (0,6, 0,5) und (0,8, 0,75); steps(3, jump-both) horizontale Linien zeigt, die sich jeweils 1/3 Einheiten von (0, 0,25), (1/3, 0,5) und (2/3, 0,75) erstrecken, mit einem gefüllten Kreis bei (1, 1) und ungefüllten Kreisen am Ursprung, (1/3, 0,25), (2/3, 0,5) und (1, 0,75).](jump.svg)

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung der Funktion steps()

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

- Andere Easing-Funktionen: {{cssxref("easing-function/cubic-bezier", "cubic-bezier()")}} und {{cssxref("easing-function/linear", "linear()")}}
- [CSS Easing-Funktionen](/de/docs/Web/CSS/CSS_easing_functions) Modul
- [Schritt-Funktion](https://en.wikipedia.org/wiki/Step_function) auf Wikipedia
