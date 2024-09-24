---
title: text-align
slug: Web/CSS/text-align
l10n:
  sourceCommit: 199b1ab9210af2da7306f2a034c70980c5b873b5
---

{{CSSRef}}

Die **`text-align`**-[CSS](/de/docs/Web/CSS)-Eigenschaft legt die horizontale Ausrichtung des Inline-Inhalts innerhalb eines Blockelements oder einer Tabellenzelle fest. Das heißt, sie funktioniert ähnlich wie {{cssxref("vertical-align")}}, jedoch in horizontaler Richtung.

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

Die `text-align`-Eigenschaft wird als einzelnes Schlüsselwort aus der folgenden Liste angegeben.

### Werte

- `start`
  - : Entspricht `left`, wenn die Richtung von links nach rechts ist, und `right`, wenn die Richtung von rechts nach links ist.
- `end`
  - : Entspricht `right`, wenn die Richtung von links nach rechts ist, und `left`, wenn die Richtung von rechts nach links ist.
- `left`
  - : Der Inline-Inhalt wird am linken Rand des Linienkastens ausgerichtet.
- `right`
  - : Der Inline-Inhalt wird am rechten Rand des Linienkastens ausgerichtet.
- `center`
  - : Der Inline-Inhalt wird innerhalb des Linienkastens zentriert.
- `justify`
  - : Der Inline-Inhalt wird gerechtfertigt. Verbreitert den Inhalt, sodass dessen linke und rechte Kanten mit den linken und rechten Kanten des Linienkastens übereinstimmen, mit Ausnahme der letzten Zeile.
- `match-parent`
  - : Ähnlich wie `inherit`, aber die Werte `start` und `end` werden gemäß der Elternrichtung {{cssxref("direction")}} berechnet und durch die entsprechenden Werte `left` oder `right` ersetzt.

## Barrierefreiheit

Der inkonsistente Abstand zwischen Wörtern, der durch gerechtfertigten Text entsteht, kann für Menschen mit kognitiven Beeinträchtigungen wie Dyslexie problematisch sein.

- [MDN Verständnis WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.8 | Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Start-Ausrichtung

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

Dieses Beispiel demonstriert die Verwendung von `text-align` bei {{htmlelement("table")}}-Elementen:

- Die {{htmlelement("caption")}} ist rechtsbündig ausgerichtet.
- Die ersten beiden {{htmlelement("th")}}-Elemente erben die linke Ausrichtung von der im {{htmlelement("thead")}} gesetzten `text-align: left`, während das dritte rechtsbündig ausgerichtet ist.
- Im Inneren des {{htmlelement("tbody")}}-Elements ist die erste Zeile rechtsbündig, die zweite zentriert, und die dritte nutzt die Standardausrichtung (links).
- Innerhalb jeder Zeile sind einige Zellen (c12, c31) so eingestellt, dass sie die Ausrichtung der Zeile überschreiben.

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
