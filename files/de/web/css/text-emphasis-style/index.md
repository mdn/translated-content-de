---
title: text-emphasis-style
slug: Web/CSS/text-emphasis-style
l10n:
  sourceCommit: 5a0e89bad2e2bbbd32ce22b0c2bb419ae3b7c962
---

{{CSSRef}}

Die **`text-emphasis-style`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Erscheinungsbild von Betonungszeichen fest. Sie kann auch über den Kurzbefehl {{cssxref("text-emphasis")}} gesetzt und zurückgesetzt werden.

{{EmbedInteractiveExample("pages/css/text-emphasis-style.html")}}

## Syntax

```css
/* Initial value */
text-emphasis-style: none; /* No emphasis marks */

/* <string> values */
text-emphasis-style: "x";
text-emphasis-style: "\25B2";
text-emphasis-style: "*";

/* Keyword values */
text-emphasis-style: filled;
text-emphasis-style: open;
text-emphasis-style: dot;
text-emphasis-style: circle;
text-emphasis-style: double-circle;
text-emphasis-style: triangle;
text-emphasis-style: filled sesame;
text-emphasis-style: open sesame;

/* Global values */
text-emphasis-style: inherit;
text-emphasis-style: initial;
text-emphasis-style: revert;
text-emphasis-style: revert-layer;
text-emphasis-style: unset;
```

### Werte

- `none`
  - : Keine Betonungszeichen.
- `filled`
  - : Die Form ist mit einer Vollfarbe ausgefüllt. Falls weder `filled` noch `open` vorhanden ist, ist dies der Standard.
- `open`
  - : Die Form ist hohl.
- `dot`
  - : Zeigt kleine Kreise als Zeichen an. Der gefüllte Punkt ist `'•'` (`U+2022`), und der offene Punkt ist `'◦'` (`U+25E6`).
- `circle`
  - : Zeigt große Kreise als Zeichen an. Der gefüllte Kreis ist `'●'` (`U+25CF`), und der offene Kreis ist `'○'` (`U+25CB`).
- `double-circle`
  - : Zeigt doppelte Kreise als Zeichen an. Der gefüllte Doppelkreis ist `'◉'` (`U+25C9`), und der offene Doppelkreis ist `'◎'` (`U+25CE`).
- `triangle`
  - : Zeigt Dreiecke als Zeichen an. Das gefüllte Dreieck ist `'▲'` (`U+25B2`), und das offene Dreieck ist `'△'` (`U+25B3`).
- `sesame`
  - : Zeigt Sesamzeichen an. Der gefüllte Sesam ist `'﹅'` (`U+FE45`), und der offene Sesam ist `'﹆'` (`U+FE46`).
- `<string>`
  - : Zeigt die angegebene Zeichenfolge als Zeichen an. Autoren sollten nicht mehr als ein _Zeichen_ in `<string>` angeben. Das UA kann Zeichenfolgen, die aus mehr als einem Graphem-Cluster bestehen, abschneiden oder ignorieren.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

```css
h2 {
  -webkit-text-emphasis-style: sesame;
  text-emphasis-style: sesame;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die verwandten Eigenschaften {{cssxref('text-emphasis-color')}}, {{cssxref('text-emphasis')}}.
- Die {{cssxref('text-emphasis-position')}} Eigenschaft, die es ermöglicht, die Position der Betonungszeichen zu definieren.
