---
title: resize
slug: Web/CSS/resize
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{CSSRef}}

Die **`resize`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob ein Element skalierbar ist, und wenn ja, in welche Richtungen.

{{EmbedInteractiveExample("pages/css/resize.html")}}

`resize` gilt nicht für die folgenden:

- Inline-Elemente
- Block-Elemente, für die die {{cssxref("overflow")}} Eigenschaft auf `visible` oder `clip` gesetzt ist

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

Die `resize` Eigenschaft wird als einzelner Schlüsselwert aus der untenstehenden Liste angegeben.

### Werte

- `none`
  - : Das Element bietet keine benutzerkontrollierte Möglichkeit zur Größenänderung an.
- `both`
  - : Das Element zeigt einen Mechanismus, der es dem Benutzer ermöglicht, es sowohl horizontal als auch vertikal zu skalieren.
- `horizontal`
  - : Das Element zeigt einen Mechanismus zur Skalierung in _horizontaler_ Richtung an.
- `vertical`
  - : Das Element zeigt einen Mechanismus zur Skalierung in _vertikaler_ Richtung an.
- `block`
  - : Das Element zeigt einen Mechanismus zur Skalierung in _block_-Richtung an (entweder horizontal oder vertikal, abhängig vom Wert der {{cssxref("writing-mode")}} und {{cssxref("direction")}}).
- `inline`
  - : Das Element zeigt einen Mechanismus zur Skalierung in _inline_-Richtung an (entweder horizontal oder vertikal, abhängig vom Wert der {{cssxref("writing-mode")}} und {{cssxref("direction")}}).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivieren der Skalierbarkeit von Textbereichen

In vielen Browsern sind {{HTMLElement("textarea")}} Elemente standardmäßig skalierbar. Sie können dieses Verhalten mit der `resize` Eigenschaft überschreiben.

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

Sie können die `resize` Eigenschaft verwenden, um jedes Element skalierbar zu machen. Im folgenden Beispiel enthält ein skalierbares {{HTMLElement("div")}} einen skalierbaren Absatz ({{HTMLElement("p")}} Element).

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
