---
title: "`text-justify` CSS property"
short-title: text-justify
slug: Web/CSS/Reference/Properties/text-justify
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

Die **`text-justify`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, welche Art der Blockausrichtung für Text angewendet werden soll, wenn {{cssxref("text-align", "text-align: justify;")}} auf ein Element gesetzt ist.

## Syntax

```css
text-justify: none;
text-justify: auto;
text-justify: inter-word;
text-justify: inter-character;
text-justify: distribute; /* Deprecated value */

/* Global values */
text-justify: inherit;
text-justify: initial;
text-justify: revert;
text-justify: revert-layer;
text-justify: unset;
```

### Werte

Diese Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben:

- `none`
  - : Die Textausrichtung ist deaktiviert. Dies hat denselben Effekt, als hätte man {{cssxref("text-align")}} überhaupt nicht gesetzt, ist jedoch nützlich, wenn Sie die Ausrichtung aus einem bestimmten Grund ein- und ausschalten müssen.
- `auto`
  - : Der Browser wählt die beste Art der Ausrichtung für die aktuelle Situation basierend auf einem Gleichgewicht zwischen Performance und Qualität sowie auf dem, was für die Sprache des Textes (z.B. Englisch, CJK-Sprachen usw.) am angemessensten ist. Dies ist die standardmäßig verwendete Ausrichtung, wenn `text-justify` überhaupt nicht gesetzt ist.
- `inter-word`
  - : Der Text wird durch das Hinzufügen von Abständen zwischen den Wörtern ausgerichtet (effektiv wird {{cssxref("word-spacing")}} variiert), was am besten für Sprachen geeignet ist, die Wörter mithilfe von Leerzeichen trennen, wie Englisch oder Koreanisch.
- `inter-character`
  - : Der Text wird durch das Hinzufügen von Abständen zwischen den Zeichen ausgerichtet (effektiv wird {{cssxref("letter-spacing")}} variiert), was am besten für Sprachen wie Japanisch geeignet ist.
- `distribute`
  - : Zeigt dasselbe Verhalten wie `inter-character`; dieser Wert wird für die Abwärtskompatibilität beibehalten.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Demonstration der verschiedenen Werte von text-justify

```html hidden
<p class="none">
  <code>text-justify: none</code> —<br />Lorem ipsum dolor sit amet, consectetur
  adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit, dictum id
  mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar, consequat
  justo id, feugiat leo. Cras eu elementum dui.
</p>
<p class="auto">
  <code>text-justify: auto</code> —<br />Lorem ipsum dolor sit amet, consectetur
  adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit, dictum id
  mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar, consequat
  justo id, feugiat leo. Cras eu elementum dui.
</p>
<p class="dist">
  <code>text-justify: distribute</code> —<br />Lorem ipsum dolor sit amet,
  consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit,
  dictum id mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar,
  consequat justo id, feugiat leo. Cras eu elementum dui.
</p>
<p class="word">
  <code>text-justify: inter-word</code> —<br />Lorem ipsum dolor sit amet,
  consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit,
  dictum id mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar,
  consequat justo id, feugiat leo. Cras eu elementum dui.
</p>
<p class="char">
  <code>text-justify: inter-character</code> —<br />Lorem ipsum dolor sit amet,
  consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit,
  dictum id mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar,
  consequat justo id, feugiat leo. Cras eu elementum dui.
</p>
```

```css
p {
  font-size: 1.5em;
  border: 1px solid black;
  padding: 10px;
  width: 95%;
  margin: 10px auto;
  text-align: justify;
}

.none {
  text-justify: none;
}

.auto {
  text-justify: auto;
}

.dist {
  text-justify: distribute;
}

.word {
  text-justify: inter-word;
}

.char {
  text-justify: inter-character;
}
```

{{EmbedLiveSample("Examples","100%",400)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-align")}}
