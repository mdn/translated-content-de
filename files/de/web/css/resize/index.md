---
title: resize
slug: Web/CSS/resize
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`resize`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, ob ein Element größenveränderbar ist und, falls ja, in welchen Richtungen.

{{InteractiveExample("CSS Demo: resize")}}

```css interactive-example-choice
resize: both;
```

```css interactive-example-choice
resize: horizontal;
```

```css interactive-example-choice
resize: vertical;
```

```css interactive-example-choice
resize: none;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div id="example-element">Try resizing this element.</div>
</section>
```

```css interactive-example
#example-element {
  background: linear-gradient(135deg, #0ff 0%, #0ff 94%, #fff 95%);
  border: 3px solid #c5c5c5;
  overflow: auto;
  width: 250px;
  height: 250px;
  font-weight: bold;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
```

`resize` gilt nicht für folgende:

- Inline-Elemente
- Blockelemente, für die die {{cssxref("overflow")}}-Eigenschaft auf `visible` oder `clip` gesetzt ist

## Syntax

```css
/* Keyword values */
resize: none;
resize: both;
resize: horizontal;
resize: vertical;
resize: block;
resize: inline;

/* Global values */
resize: inherit;
resize: initial;
resize: revert;
resize: revert-layer;
resize: unset;
```

Die `resize`-Eigenschaft wird als einzelner Schlüsselwortwert aus der Liste unten angegeben.

### Werte

- `none`
  - : Das Element bietet keine vom Benutzer kontrollierbare Methode zur Größenänderung.
- `both`
  - : Das Element zeigt einen Mechanismus, der es dem Benutzer erlaubt, es sowohl horizontal als auch vertikal zu vergrößern oder zu verkleinern.
- `horizontal`
  - : Das Element zeigt einen Mechanismus, der es dem Benutzer erlaubt, es in der _horizontalen_ Richtung zu vergrößern oder zu verkleinern.
- `vertical`
  - : Das Element zeigt einen Mechanismus, der es dem Benutzer erlaubt, es in der _vertikalen_ Richtung zu vergrößern oder zu verkleinern.
- `block`
  - : Das Element zeigt einen Mechanismus, der es dem Benutzer erlaubt, es in der _block_ Richtung (entweder horizontal oder vertikal, abhängig vom {{cssxref("writing-mode")}} und {{cssxref("direction")}} Wert) zu vergrößern oder zu verkleinern.
- `inline`
  - : Das Element zeigt einen Mechanismus, der es dem Benutzer erlaubt, es in der _inline_ Richtung (entweder horizontal oder vertikal, abhängig vom {{cssxref("writing-mode")}} und {{cssxref("direction")}} Wert) zu vergrößern oder zu verkleinern.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivieren der Größenänderbarkeit von Textbereichen

In vielen Browsern sind {{HTMLElement("textarea")}}-Elemente standardmäßig größenveränderbar. Sie können dieses Verhalten mit der `resize`-Eigenschaft überschreiben.

#### HTML

```html
<textarea>Type some text here.</textarea>
```

#### CSS

```css
textarea {
  resize: none; /* Disables resizability */
}
```

#### Ergebnis

{{EmbedLiveSample("Disabling_resizability_of_text_areas","200","100")}}

### Verwendung von resize mit beliebigen Elementen

Sie können die `resize`-Eigenschaft verwenden, um jedes Element größenveränderbar zu machen. Im Beispiel unten enthält ein größenveränderbares {{HTMLElement("div")}} einen größenveränderbaren Absatz ({{HTMLElement("p")}}-Element).

#### HTML

```html
<div class="resizable">
  <p class="resizable">
    This paragraph is resizable in all directions, because the CSS `resize`
    property is set to `both` on this element.
  </p>
</div>
```

#### CSS

```css
.resizable {
  resize: both;
  overflow: scroll;
  border: 1px solid black;
}

div {
  height: 300px;
  width: 300px;
}

p {
  height: 200px;
  width: 200px;
}
```

#### Ergebnis

{{EmbedLiveSample("Using_resize_with_arbitrary_elements","450","450")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("textarea")}}
