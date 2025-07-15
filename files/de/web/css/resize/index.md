---
title: resize
slug: Web/CSS/resize
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`resize`**-Eigenschaft [CSS](/de/docs/Web/CSS) legt fest, ob ein Element größenveränderbar ist und, wenn ja, in welche Richtungen.

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
- Block-Elemente, bei denen die Eigenschaft {{cssxref("overflow")}} auf `visible` oder `clip` gesetzt ist

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

Die `resize`-Eigenschaft wird als Schlüsselwortwert aus der unten stehenden Liste angegeben.

### Werte

- `none`
  - : Das Element bietet keine benutzerkontrollierbare Methode zur Größenänderung.
- `both`
  - : Das Element zeigt einen Mechanismus an, der es dem Benutzer erlaubt, es sowohl horizontal als auch vertikal zu vergrößern.
- `horizontal`
  - : Das Element zeigt einen Mechanismus an, der es dem Benutzer erlaubt, es in _horizontaler_ Richtung zu vergrößern.
- `vertical`
  - : Das Element zeigt einen Mechanismus an, der es dem Benutzer erlaubt, es in _vertikaler_ Richtung zu vergrößern.
- `block`
  - : Das Element zeigt einen Mechanismus an, der es dem Benutzer erlaubt, es in der _Block_-Richtung (entweder horizontal oder vertikal, abhängig von den Werten für {{cssxref("writing-mode")}} und {{cssxref("direction")}}) zu vergrößern.
- `inline`
  - : Das Element zeigt einen Mechanismus an, der es dem Benutzer erlaubt, es in der _Inline_-Richtung (entweder horizontal oder vertikal, abhängig von den Werten für {{cssxref("writing-mode")}} und {{cssxref("direction")}}) zu vergrößern.

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

### Verwendung von Resize mit beliebigen Elementen

Sie können die `resize`-Eigenschaft verwenden, um beliebige Elemente größenveränderbar zu machen. Im folgenden Beispiel enthält ein größenveränderbares {{HTMLElement("div")}} einen größenveränderbaren Absatz ({{HTMLElement("p")}}-Element).

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
