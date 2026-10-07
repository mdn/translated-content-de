---
title: CSS-Funktion `steps()`
short-title: steps()
slug: Web/CSS/Reference/Values/easing-function/steps
l10n:
  sourceCommit: d78544a841b0e266a6efc169c044573f5e0b4e7d
---

Die [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) **`steps()`** definiert einen Übergang, der die Eingabezeit in eine festgelegte Anzahl gleich langer Intervalle unterteilt. Diese Untergruppe der Stufenfunktionen wird manchmal auch als _Treppenfunktionen_ bezeichnet.

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
  - : Gibt die Anzahl gleich langer Intervalle oder „Stufen“ an.
    Der Wert muss eine positive Ganzzahl größer als `0` sein. Wenn der zweite Parameter `jump-none` ist, muss er eine positive Ganzzahl größer als `1` sein.

- `<step-position>`
  - : Legt fest, wann der Sprung zwischen den Werten erfolgt.
    Wird der Parameter weggelassen, gilt standardmäßig `end`.
    Mögliche Schlüsselwortwerte sind:
    - `jump-start` oder `start`
      - : Gibt an, dass die erste Stufe zu Beginn der Animation erfolgt.
    - `jump-end` oder `end`
      - : Gibt an, dass die letzte Stufe am Ende der Animation erfolgt.
    - `jump-none`
      - : Gibt an, dass weder ein früher noch ein später Sprung erfolgt.
    - `jump-both`
      - : Gibt an, dass sowohl ein früher als auch ein später Sprung erfolgt.

## Beschreibung

Die Funktion `steps()` unterteilt die Dauer der Animation in gleich lange Intervalle.
Beispielsweise unterteilt `steps(4, end)` die Animation in vier gleich lange Intervalle. Die Werte ändern sich am Ende jedes Intervalls; die letzte Änderung erfolgt am Ende der Animation.

Wenn eine Animation mehrere Segmente enthält, gilt die angegebene Anzahl von Stufen für jedes Segment. Wenn eine Animation beispielsweise drei Segmente enthält und `steps(2)` verwendet, gibt es insgesamt sechs Stufen – zwei pro Segment.

Die folgende Abbildung zeigt, wie sich unterschiedliche `<step-position>`-Werte auf den Zeitpunkt der Sprünge auswirken:

```css
steps(2, jump-start)  /* Or steps(2, start) */
steps(4, jump-end)    /* Or steps(4, end) */
steps(5, jump-none)
steps(3, jump-both)
```

![Diagramme des Eingabefortschritts gegenüber dem Ausgabefortschritt: steps(2, jump-start) zeigt waagerechte Linien, die sich von (0, 0.5) und (0.5, 1) jeweils über 0.5 Einheiten erstrecken, mit offenen Kreisen am Ursprung und bei (0.5, 0.5); steps(4, jump-end) zeigt waagerechte Linien, die sich von (0, 0), (0.25, 0.25), (0.5, 0.5) und (0.75, 0.75) jeweils über 0.25 Einheiten erstrecken, mit offenen Kreisen bei (0.25, 0), (0.5, 0.25) und (0.75, 0.5) sowie einem ausgefüllten Kreis bei (1, 1); steps(5, jump-none) zeigt waagerechte Linien, die sich von (0, 0), (0.2, 0.25), (0.4, 0.5), (0.6, 0.75) und (0.8, 1) jeweils über 0.2 Einheiten erstrecken, mit offenen Kreisen bei (0.2, 0), (0.4, 0.25), (0.6, 0.5) und (0.8, 0.75); steps(3, jump-both) zeigt waagerechte Linien, die sich von (0, 0.25), (1/3, 0.5) und (2/3, 0.75) jeweils über 1/3 Einheit erstrecken, mit einem ausgefüllten Kreis bei (1, 1) und offenen Kreisen am Ursprung sowie bei (1/3, 0.25), (2/3, 0.5) und (1, 0.75).](jump.svg)

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung der Funktion `steps()`

Die folgenden `steps()`-Funktionen sind gültig:

```css example-good
/* Five steps with jump at the end */
steps(5, end)

/* Two steps with jump at the start */
steps(2, start)

/* Using default second parameter */
steps(2)
```

Die folgenden `steps()`-Funktionen sind ungültig:

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

- Weitere Easing-Funktionen: {{cssxref("easing-function/cubic-bezier", "cubic-bezier()")}} und {{cssxref("easing-function/linear", "linear()")}}
- Modul [CSS-Easing-Funktionen](/de/docs/Web/CSS/Guides/Easing_functions)
- [Stufenfunktion](https://en.wikipedia.org/wiki/Step_function) auf Wikipedia
