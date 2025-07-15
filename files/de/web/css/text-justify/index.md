---
title: text-justify
slug: Web/CSS/text-justify
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`text-justify`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, welcher Typ der Ausrichtung auf Text angewendet werden soll, wenn {{cssxref("text-align", "text-align: justify;")}} auf ein Element gesetzt ist.

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

- `none`
  - : Die Textausrichtung ist deaktiviert. Dies hat den gleichen Effekt wie das Nichtsetzen von {{cssxref("text-align")}}, obwohl es nützlich sein kann, wenn Sie die Ausrichtung aus irgendeinem Grund ein- und ausschalten müssen.
- `auto`
  - : Der Browser wählt die beste Art der Ausrichtung für die aktuelle Situation basierend auf einem Gleichgewicht zwischen Leistung und Qualität und darauf, was für die Sprache des Textes am besten geeignet ist (z. B. Englisch, CJK-Sprachen usw.). Dies ist die Standardausrichtung, die verwendet wird, wenn `text-justify` überhaupt nicht gesetzt ist.
- `inter-word`
  - : Der Text wird durch Hinzufügen von Leerzeichen zwischen den Wörtern ausgerichtet (effektiv variierend {{cssxref("word-spacing")}}), was für Sprachen am besten geeignet ist, die Worte mit Leerzeichen trennen, wie Englisch oder Koreanisch.
- `inter-character`
  - : Der Text wird durch Hinzufügen von Leerzeichen zwischen den Zeichen ausgerichtet (effektiv variierend {{cssxref("letter-spacing")}}), was für Sprachen wie Japanisch am besten geeignet ist.
- `distribute`
  - : Zeigt das gleiche Verhalten wie `inter-character`; dieser Wert wird aus Gründen der Rückwärtskompatibilität beibehalten.

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
