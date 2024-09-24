---
title: text-justify
slug: Web/CSS/text-justify
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{CSSRef}}

Die **`text-justify`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, welcher Typ der Ausrichtung angewendet werden soll, wenn {{cssxref("text-align", "text-align: justify;")}} auf ein Element gesetzt ist.

## Syntax

```css
text-justify: none;
text-justify: auto;
text-justify: inter-word;
text-justify: inter-character;
text-justify: distribute; /* Veralteter Wert */

/* Globale Werte */
text-justify: inherit;
text-justify: initial;
text-justify: revert;
text-justify: revert-layer;
text-justify: unset;
```

### Werte

- `none`
  - : Die Textausrichtung ist deaktiviert. Dies hat den gleichen Effekt wie das Nichtsetzen von {{cssxref("text-align")}}, obwohl es nützlich ist, wenn Sie die Ausrichtung aus irgendeinem Grund ein- und ausschalten müssen.
- `auto`
  - : Der Browser wählt den besten Typ der Ausrichtung für die aktuelle Situation basierend auf einem Gleichgewicht zwischen Leistung und Qualität, aber auch darauf, was für die Sprache des Textes am geeignetsten ist (z.B. Englisch, CJK-Sprachen, etc.). Dies ist die Standardausrichtung, die verwendet wird, wenn `text-justify` überhaupt nicht gesetzt ist.
- `inter-word`
  - : Der Text wird durch Hinzufügen von Leerraum zwischen Wörtern ausgerichtet (effektiv {{cssxref("word-spacing")}} variierend), was am geeignetsten für Sprachen ist, die Wörter mit Leerzeichen trennen, wie Englisch oder Koreanisch.
- `inter-character`
  - : Der Text wird durch Hinzufügen von Leerraum zwischen Zeichen ausgerichtet (effektiv {{cssxref("letter-spacing")}} variierend), was am geeignetsten für Sprachen wie Japanisch ist.
- `distribute`
  - : Zeigt dasselbe Verhalten wie `inter-character`; dieser Wert wird für die Rückwärtskompatibilität beibehalten.

## Formale Definition

{{CSSInfo}}

## Formaler Syntax

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
