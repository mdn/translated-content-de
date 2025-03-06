---
title: text-align
slug: Web/CSS/text-align
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{CSSRef}}

Die **`text-align`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die horizontale Ausrichtung des Inline-Inhalts innerhalb eines Blockelements oder einer Tabellenzelle fest. Das bedeutet, dass sie ähnlich wie {{cssxref("vertical-align")}} arbeitet, jedoch in horizontaler Richtung.

{{EmbedInteractiveExample("pages/css/text-align.html")}}

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

Die `text-align` Eigenschaft wird als ein einzelnes Schlüsselwort aus der folgenden Liste angegeben.

### Werte

- `start`
  - : Entspricht `left`, wenn die Richtung von links nach rechts ist, und `right`, wenn die Richtung von rechts nach links ist.
- `end`
  - : Entspricht `right`, wenn die Richtung von links nach rechts ist, und `left`, wenn die Richtung von rechts nach links ist.
- `left`
  - : Der Inline-Inhalt wird am linken Rand der Linienbox ausgerichtet.
- `right`
  - : Der Inline-Inhalt wird am rechten Rand der Linienbox ausgerichtet.
- `center`
  - : Der Inline-Inhalt wird innerhalb der Linienbox zentriert.
- `justify`
  - : Der Inline-Inhalt wird ausgerichtet. Der Inhalt wird so verteilt, dass seine linken und rechten Ränder mit den linken und rechten Rändern der Linienbox übereinstimmen, außer bei der letzten Zeile.
- `match-parent`
  - : Ähnlich wie `inherit`, jedoch werden die Werte `start` und `end` gemäß der {{cssxref("direction")}} des Elternelements berechnet und durch den passenden Wert `left` oder `right` ersetzt.

## Barrierefreiheit

Der ungleichmäßige Abstand zwischen Wörtern, der durch ausgerichteten Text entsteht, kann problematisch für Menschen mit kognitiven Beeinträchtigungen wie Legasthenie sein.

- [MDN Verständnis der WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.8 | Verständnis der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formelle Definition

{{CSSInfo}}

## Formelle Syntax

{{csssyntax}}

## Beispiele

### Startausrichtung

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

Dieses Beispiel demonstriert die Verwendung von `text-align` auf {{htmlelement("table")}} Elementen:

- Die {{htmlelement("caption")}} ist rechtsbündig ausgerichtet.
- Die ersten beiden {{htmlelement("th")}}-Elemente erben die linke Ausrichtung von `text-align: left`, das auf {{htmlelement("thead")}} gesetzt ist, während das dritte rechtsbündig ausgerichtet ist.
- Innerhalb des {{htmlelement("tbody")}}-Elements ist die erste Reihe rechtsbündig, die zweite zentriert und die dritte verwendet die Standardausrichtung (links).
- Innerhalb jeder Reihe sind einige Zellen (c12, c31) so gesetzt, dass sie die Ausrichtung der Reihe überschreiben.

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
