---
title: "`resize` CSS property"
short-title: resize
slug: Web/CSS/Reference/Properties/resize
l10n:
  sourceCommit: c0c85c3dc0d6ff4247c85b0144149e584d74b625
---

Die **`resize`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, ob ein Element veränderbar ist und, falls ja, in welchen Richtungen.

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
  background: linear-gradient(135deg, cyan 0%, cyan 94%, white 95%);
  border: 3px solid #c5c5c5;
  overflow: auto;
  width: 250px;
  height: 250px;
  font-weight: bold;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
```

`resize` gilt nicht für die folgenden:

- Inline-Elemente
- Block-Elemente, für die die {{cssxref("overflow")}}-Eigenschaft auf `visible` oder `clip` gesetzt ist

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

### Werte

Diese Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben:

- `none`
  - : Das Element bietet keine benutzerkontrollierbare Methode zu seiner Größenänderung.
- `both`
  - : Das Element zeigt einen Mechanismus an, der es dem Benutzer erlaubt, es sowohl horizontal als auch vertikal zu ändern.
- `horizontal`
  - : Das Element zeigt einen Mechanismus an, der es dem Benutzer erlaubt, es in der _horizontalen_ Richtung zu ändern.
- `vertical`
  - : Das Element zeigt einen Mechanismus an, der es dem Benutzer erlaubt, es in der _vertikalen_ Richtung zu ändern.
- `block`
  - : Das Element zeigt einen Mechanismus an, der es dem Benutzer erlaubt, es in der _Block_-Richtung (entweder horizontal oder vertikal, abhängig vom {{cssxref("writing-mode")}} und dem {{cssxref("direction")}}-Wert) zu ändern.
- `inline`
  - : Das Element zeigt einen Mechanismus an, der es dem Benutzer erlaubt, es in der _Inline_-Richtung (entweder horizontal oder vertikal, abhängig vom {{cssxref("writing-mode")}} und dem {{cssxref("direction")}}-Wert) zu ändern.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivieren der Änderbarkeit von Textbereichen

In vielen Browsern sind {{HTMLElement("textarea")}}-Elemente standardmäßig veränderbar. Sie können dieses Verhalten mit der `resize`-Eigenschaft überschreiben.

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

### Verwenden von `resize` mit beliebigen Elementen

Sie können die `resize`-Eigenschaft verwenden, um jedes Element veränderbar zu machen. Im unten stehenden Beispiel enthält ein veränderbares {{HTMLElement("div")}} einen veränderbaren Absatz ({{HTMLElement("p")}}-Element).

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
