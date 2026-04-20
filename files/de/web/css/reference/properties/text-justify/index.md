---
title: "`text-justify` CSS property"
short-title: text-justify
slug: Web/CSS/Reference/Properties/text-justify
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`text-justify`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, welche Art der Ausrichtung auf Text angewendet werden soll, wenn auf einem Element {{cssxref("text-align", "text-align: justify;")}} gesetzt ist.

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
  - : Die Textausrichtung ist deaktiviert. Dies hat denselben Effekt, als würde {{cssxref("text-align")}} überhaupt nicht gesetzt, ist jedoch nützlich, wenn Sie aus irgendeinem Grund die Ausrichtung ein- und ausschalten müssen.
- `auto`
  - : Der Browser wählt die am besten geeignete Art der Ausrichtung für die aktuelle Situation basierend auf einem Ausgleich zwischen Leistung und Qualität, sowie auf das, was für die Sprache des Textes am geeignetsten ist (z.B. Englisch, CJK-Sprachen usw.). Diese Ausrichtung ist die Standardeinstellung, wenn `text-justify` überhaupt nicht gesetzt ist.
- `inter-word`
  - : Der Text wird durch Hinzufügen von Leerraum zwischen Wörtern ausgerichtet (effektiv durch Variieren von {{cssxref("word-spacing")}}), was am besten für Sprachen geeignet ist, die Wörter mit Leerzeichen trennen, wie Englisch oder Koreanisch.
- `inter-character`
  - : Der Text wird durch Hinzufügen von Leerraum zwischen Zeichen ausgerichtet (effektiv durch Variieren von {{cssxref("letter-spacing")}}), was am besten für Sprachen wie Japanisch geeignet ist.
- `distribute`
  - : Zeigt dasselbe Verhalten wie `inter-character`; dieser Wert wird aus Gründen der Abwärtskompatibilität beibehalten.

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
