---
title: "`resize` CSS property"
short-title: resize
slug: Web/CSS/Reference/Properties/resize
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`resize`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, ob ein Element größenveränderbar ist und, wenn ja, in welche Richtungen.

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

`resize` wirkt nicht auf die folgenden:

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

Die `resize`-Eigenschaft wird als ein Schlüsselwortwert aus der unten stehenden Liste angegeben.

### Werte

- `none`
  - : Das Element bietet keine benutzerkontrollierte Methode, um es zu vergrößern.
- `both`
  - : Das Element zeigt einen Mechanismus, der es dem Benutzer erlaubt, es sowohl horizontal als auch vertikal zu vergrößern.
- `horizontal`
  - : Das Element zeigt einen Mechanismus, der es dem Benutzer erlaubt, es in horizontaler Richtung zu vergrößern.
- `vertical`
  - : Das Element zeigt einen Mechanismus, der es dem Benutzer erlaubt, es in vertikaler Richtung zu vergrößern.
- `block`
  - : Das Element zeigt einen Mechanismus, der es dem Benutzer erlaubt, es in der Block-Richtung zu vergrößern (entweder horizontal oder vertikal, abhängig vom {{cssxref("writing-mode")}} und {{cssxref("direction")}} Wert).
- `inline`
  - : Das Element zeigt einen Mechanismus, der es dem Benutzer erlaubt, es in der Inline-Richtung zu vergrößern (entweder horizontal oder vertikal, abhängig vom {{cssxref("writing-mode")}} und {{cssxref("direction")}} Wert).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivieren der Größenzuveränderbarkeit von Textbereichen

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

Sie können die `resize`-Eigenschaft verwenden, um jedes Element größenveränderbar zu machen. Im unten stehenden Beispiel enthält ein größenveränderbares {{HTMLElement("div")}} ein größenveränderbares Absatz-Element ({{HTMLElement("p")}}).

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
