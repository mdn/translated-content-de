---
title: CSS-Eigenschaft `text-emphasis`
short-title: text-emphasis
slug: Web/CSS/Reference/Properties/text-emphasis
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

Die [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`text-emphasis`** versieht Text mit Hervorhebungszeichen (außer Leerzeichen und Steuerzeichen).

{{InteractiveExample("CSS Demo: text-emphasis")}}

```css interactive-example-choice
text-emphasis: none;
```

```css interactive-example-choice
text-emphasis: filled red;
```

```css interactive-example-choice
text-emphasis: "x";
```

```css interactive-example-choice
text-emphasis: filled double-circle #ffb703;
```

```html interactive-example
<section id="default-example">
  <p>
    I'd far rather be
    <span class="transition-all" id="example-element">happy than right</span>
    any day.
  </p>
</section>
```

```css interactive-example
p {
  font: 1.5em sans-serif;
}
```

Die Eigenschaft `text-emphasis` unterscheidet sich deutlich von {{cssxref("text-decoration")}}. Die Eigenschaft `text-decoration` wird nicht vererbt, und die angegebene Dekoration wird auf das gesamte Element angewendet. `text-emphasis` wird dagegen vererbt. Dadurch können die Hervorhebungszeichen für Nachfahren geändert werden.

Die Größe der Hervorhebungszeichen beträgt, ähnlich wie bei Ruby-Zeichen, etwa 50 % der Schriftgröße. Wenn der aktuelle Zeilenabstand nicht genügend Platz für die Zeichen bietet, kann `text-emphasis` die Zeilenhöhe beeinflussen.

> [!NOTE]
> `text-emphasis` setzt den Wert von {{cssxref("text-emphasis-position")}} nicht zurück. Denn auch wenn Stil und Farbe der Hervorhebungszeichen innerhalb eines Textes variieren, ist es äußerst unwahrscheinlich, dass sich ihre Position ändert. In den sehr seltenen Fällen, in denen dies nötig ist, verwenden Sie die Eigenschaft {{cssxref("text-emphasis-position")}}.

## Zugehörige Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("text-emphasis-color")}}
- {{cssxref("text-emphasis-style")}}

## Syntax

```css
/* Initial value */
text-emphasis: none; /* No emphasis marks */

/* <string> value */
text-emphasis: "x";
text-emphasis: "点";
text-emphasis: "\25B2";
text-emphasis: "*" #555555;
text-emphasis: "foo"; /* Should NOT use. It may be computed to or rendered as 'f' only */

/* Keywords value */
text-emphasis: filled;
text-emphasis: open;
text-emphasis: filled sesame;
text-emphasis: open sesame;

/* Keywords value combined with a color */
text-emphasis: filled sesame #555555;

/* Global values */
text-emphasis: inherit;
text-emphasis: initial;
text-emphasis: revert;
text-emphasis: revert-layer;
text-emphasis: unset;
```

### Werte

- `none`
  - : Keine Hervorhebungszeichen.
- `filled`
  - : Die Form ist einfarbig ausgefüllt. Wenn weder `filled` noch `open` angegeben ist, ist dies der Standardwert.
- `open`
  - : Die Form ist nicht ausgefüllt.
- `dot`
  - : Zeigt kleine Kreise als Hervorhebungszeichen an. Der ausgefüllte Punkt ist `'•'` (`U+2022`), der nicht ausgefüllte Punkt ist `'◦'` (`U+25E6`).
- `circle`
  - : Zeigt große Kreise als Hervorhebungszeichen an. Der ausgefüllte Kreis ist `'●'` (`U+25CF`), der nicht ausgefüllte Kreis ist `'○'` (`U+25CB`). Dies ist die Standardform bei horizontalen Schreibrichtungen, wenn keine andere Form angegeben ist.
- `double-circle`
  - : Zeigt Doppelkreise als Hervorhebungszeichen an. Der ausgefüllte Doppelkreis ist `'◉'` (`U+25C9`), der nicht ausgefüllte Doppelkreis ist `'◎'` (`U+25CE`).
- `triangle`
  - : Zeigt Dreiecke als Hervorhebungszeichen an. Das ausgefüllte Dreieck ist `'▲'` (`U+25B2`), das nicht ausgefüllte Dreieck ist `'△'` (`U+25B3`).
- `sesame`
  - : Zeigt sesamförmige Zeichen als Hervorhebungszeichen an. Das ausgefüllte Zeichen ist `'﹅'` (`U+FE45`), das nicht ausgefüllte Zeichen ist `'﹆'` (`U+FE46`). Dies ist die Standardform bei vertikalen Schreibrichtungen, wenn keine andere Form angegeben ist.
- `<string>`
  - : Zeigt die angegebene Zeichenfolge als Hervorhebungszeichen an. Autoren sollten in `<string>` nicht mehr als ein _Zeichen_ angeben. Der User Agent kann Zeichenfolgen, die aus mehr als einem Graphemcluster bestehen, abschneiden oder ignorieren.
- `<color>`
  - : Legt die Farbe der Hervorhebungszeichen fest. Wenn keine Farbe angegeben ist, wird standardmäßig `currentColor` verwendet.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Überschrift mit Hervorhebungsform und -farbe

Dieses Beispiel zeigt eine Überschrift, bei der jedes Zeichen durch ein Dreieck hervorgehoben wird.

#### HTML

```html
<h2>This is important!</h2>
```

#### CSS

```css
h2 {
  text-emphasis: triangle #dd5555;
}
```

#### Ergebnis

{{EmbedLiveSample("A_heading_with_emphasis_shape_and_color", 500, 90)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Einzeleigenschaften {{cssxref('text-emphasis-style')}} und {{cssxref('text-emphasis-color')}}.
- Die Eigenschaft {{cssxref('text-emphasis-position')}}, mit der Sie die Position der Hervorhebungszeichen festlegen können.
