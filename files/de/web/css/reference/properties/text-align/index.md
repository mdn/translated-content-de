---
title: "`text-align` CSS property"
short-title: text-align
slug: Web/CSS/Reference/Properties/text-align
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`text-align`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die horizontale Ausrichtung des Inline-Inhalts innerhalb eines Blockelements oder einer Tabellzellen-Box fest. Das bedeutet, dass sie wie {{cssxref("vertical-align")}} funktioniert, aber in der horizontalen Richtung.

{{InteractiveExample("CSS Demo: text-align")}}

```css interactive-example-choice
text-align: start;
```

```css interactive-example-choice
text-align: end;
```

```css interactive-example-choice
text-align: center;
```

```css interactive-example-choice
text-align: justify;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </div>
</section>
```

```css interactive-example
section {
  font-size: 1.5em;
}

#default-example > div {
  width: 250px;
}
```

## Syntax

```css
/* Keyword values */
text-align: start;
text-align: end;
text-align: left;
text-align: right;
text-align: center;
text-align: justify;
text-align: match-parent;

/* Block alignment values (Non-standard syntax) */
text-align: -moz-center;
text-align: -webkit-center;

/* Global values */
text-align: inherit;
text-align: initial;
text-align: revert;
text-align: revert-layer;
text-align: unset;
```

Die `text-align`-Eigenschaft wird als einzelnes Schlüsselwort aus der folgenden Liste angegeben.

### Werte

- `start`
  - : Entspricht `left`, wenn die Richtung von links nach rechts ist, und `right`, wenn die Richtung von rechts nach links verläuft.
- `end`
  - : Entspricht `right`, wenn die Richtung von links nach rechts ist, und `left`, wenn die Richtung von rechts nach links verläuft.
- `left`
  - : Der Inline-Inhalt wird am linken Rand der Linienbox ausgerichtet.
- `right`
  - : Der Inline-Inhalt wird am rechten Rand der Linienbox ausgerichtet.
- `center`
  - : Der Inline-Inhalt wird innerhalb der Linienbox zentriert.
- `justify`
  - : Der Inline-Inhalt wird im Blocksatz ausgerichtet. Der Inhalt wird derart verteilt, dass die linken und rechten Ränder mit den linken und rechten Rändern der Linienbox übereinstimmen, mit Ausnahme der letzten Zeile.
- `match-parent`
  - : Ähnlich wie `inherit`, aber die Werte `start` und `end` werden gemäß der {{cssxref("direction")}} des übergeordneten Elements berechnet und durch den entsprechenden Wert `left` oder `right` ersetzt.

## Barrierefreiheit

Der ungleichmäßige Abstand zwischen Wörtern, der durch Blocksatz entsteht, kann problematisch für Personen mit kognitiven Einschränkungen wie Legasthenie sein.

- [MDN Verständnis WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.8 | Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Anfangsausrichtung

#### HTML

```html
<p class="example">
  Integer elementum massa at nulla placerat varius. Suspendisse in libero risus,
  in interdum massa. Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
</p>
```

#### CSS

```css
.example {
  text-align: start;
  border: solid;
}
```

#### Ergebnis

{{EmbedLiveSample("Start_alignment","100%","100%")}}

### Zentrierter Text

#### HTML

```html
<p class="example">
  Integer elementum massa at nulla placerat varius. Suspendisse in libero risus,
  in interdum massa. Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
</p>
```

#### CSS

```css
.example {
  text-align: center;
  border: solid;
}
```

#### Ergebnis

{{EmbedLiveSample("Centered_text", "100%", "100%")}}

### Beispiel mit "justify"

#### HTML

```html
<p class="example">
  Integer elementum massa at nulla placerat varius. Suspendisse in libero risus,
  in interdum massa. Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
</p>
```

#### CSS

```css
.example {
  text-align: justify;
  border: solid;
}
```

#### Ergebnis

{{EmbedLiveSample('Example using "justify"',"100%","100%")}}

### Tabellenausrichtung

Dieses Beispiel zeigt die Verwendung von `text-align` bei {{htmlelement("table")}}-Elementen:

- Der {{htmlelement("caption")}} ist rechtsbündig ausgerichtet.
- Die ersten beiden {{htmlelement("th")}}-Elemente erben die linke Ausrichtung von der `text-align: left`-Einstellung im {{htmlelement("thead")}}, während das dritte rechtsbündig ausgerichtet ist.
- Im {{htmlelement("tbody")}}-Element ist die erste Reihe rechtsbündig, die zweite zentriert, und die dritte verwendet die Standardausrichtung (links).
- Innerhalb jeder Reihe sind einige Zellen (c12, c31) so eingestellt, dass sie die Ausrichtung der Reihe überschreiben.

#### HTML

```html
<table>
  <caption>
    Example table
  </caption>
  <thead>
    <tr>
      <th>Col 1</th>
      <th>Col 2</th>
      <th class="right">Col 3</th>
    </tr>
  </thead>
  <tbody>
    <tr class="right">
      <td>11</td>
      <td class="center">12</td>
      <td>13</td>
    </tr>
    <tr class="center">
      <td>21</td>
      <td>22</td>
      <td>23</td>
    </tr>
    <tr id="r3">
      <td class="right">31</td>
      <td>32</td>
      <td>33</td>
    </tr>
  </tbody>
</table>
```

#### CSS

```css
table {
  border-collapse: collapse;
  border: solid black 1px;
  width: 250px;
  height: 150px;
}

thead {
  text-align: left;
}

td,
th {
  border: solid 1px black;
}

.center {
  text-align: center;
}

.right,
caption {
  text-align: right;
}
```

#### Ergebnis

{{EmbedLiveSample('Table alignment', "100%", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("margin","margin: auto")}}, {{Cssxref("margin-left","margin-left: auto")}}, {{Cssxref("vertical-align")}}
