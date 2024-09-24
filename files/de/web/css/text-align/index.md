---
title: text-align
slug: Web/CSS/text-align
l10n:
  sourceCommit: eeabc0774ceb0b7447febce6f9743b903815b95b
---

{{CSSRef}}

Die **`text-align`** [CSS](/de/docs/Web/CSS) Eigenschaft setzt die horizontale Ausrichtung des Inline-Inhalts innerhalb eines Blockelements oder eines Tabellenzellenkastens. Dies bedeutet, dass sie wie {{cssxref("vertical-align")}} funktioniert, jedoch in horizontaler Richtung.

{{EmbedInteractiveExample("pages/css/text-align.html")}}

## Syntax

```css
/* Schlüsselwortwerte */
text-align: start;
text-align: end;
text-align: left;
text-align: right;
text-align: center;
text-align: justify;
text-align: justify-all;
text-align: match-parent;

/* Blockausrichtungswerte (Nicht-standardisierte Syntax) */
text-align: -moz-center;
text-align: -webkit-center;

/* Globale Werte */
text-align: inherit;
text-align: initial;
text-align: revert;
text-align: revert-layer;
text-align: unset;
```

Die `text-align` Eigenschaft wird als ein einzelnes Schlüsselwort aus der folgenden Liste angegeben.

### Werte

- `start`
  - : Entspricht `left` bei linksläufiger Richtung und `right` bei rechtsläufiger Richtung.
- `end`
  - : Entspricht `right` bei linksläufiger Richtung und `left` bei rechtsläufiger Richtung.
- `left`
  - : Der Inline-Inhalt ist am linken Rand des Zeilenkastens ausgerichtet.
- `right`
  - : Der Inline-Inhalt ist am rechten Rand des Zeilenkastens ausgerichtet.
- `center`
  - : Der Inline-Inhalt ist innerhalb des Zeilenkastens zentriert.
- `justify`
  - : Der Inline-Inhalt ist im Blocksatz. Der Inhalt wird so aufgeteilt, dass die linken und rechten Ränder an den Rand des Zeilenkastens angepasst werden, mit Ausnahme der letzten Zeile.
- `justify-all`
  - : Gleiche wie `justify`, erzwingt jedoch auch, dass die letzte Zeile im Blocksatz ist.
- `match-parent`
  - : Ähnlich wie `inherit`, aber die Werte `start` und `end` werden entsprechend der Eltern-{{cssxref("direction")}} berechnet und durch den passenden `left` oder `right` Wert ersetzt.

## Zugänglichkeit

Der unregelmäßige Abstand zwischen Wörtern, der durch Blocksatz entsteht, kann problematisch für Menschen mit kognitiven Beeinträchtigungen wie Legasthenie sein.

- [MDN Verständnis von WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.8 | Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Beginn-Ausrichtung

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

### Tabellen-Ausrichtung

Dieses Beispiel demonstriert die Verwendung von `text-align` bei {{htmlelement("table")}} Elementen:

- Die {{htmlelement("caption")}} ist rechtsbündig ausgerichtet.
- Die ersten beiden {{htmlelement("th")}} Elemente erben die Links-Ausrichtung vom `text-align: left`, das auf den {{htmlelement("thead")}} gesetzt ist, während das dritte rechtsbündig ausgerichtet ist.
- Innerhalb des {{htmlelement("tbody")}} Elements ist die erste Zeile rechtsbündig, die zweite zentriert und die dritte verwendet die Standard (linke) Ausrichtung.
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
