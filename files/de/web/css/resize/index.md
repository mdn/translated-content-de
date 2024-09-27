---
title: resize
slug: Web/CSS/resize
l10n:
  sourceCommit: 2251b205631a0bfa4db91f3be794ce30054b8749
---

{{CSSRef}}

Die **`resize`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob ein Element skalierbar ist und, falls ja, in welche Richtungen.

{{EmbedInteractiveExample("pages/css/resize.html")}}

`resize` gilt nicht für:

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

Die `resize`-Eigenschaft wird als ein einzelner Schlüsselwortwert aus der unten stehenden Liste angegeben.

### Werte

- `none`
  - : Das Element bietet keine vom Benutzer kontrollierbare Möglichkeit, es zu skalieren.
- `both`
  - : Das Element zeigt einen Mechanismus, der dem Benutzer erlaubt, es sowohl horizontal als auch vertikal zu skalieren.
- `horizontal`
  - : Das Element zeigt einen Mechanismus, der dem Benutzer erlaubt, es in _horizontaler_ Richtung zu skalieren.
- `vertical`
  - : Das Element zeigt einen Mechanismus, der dem Benutzer erlaubt, es in _vertikaler_ Richtung zu skalieren.
- `block`
  - : Das Element zeigt einen Mechanismus, der dem Benutzer erlaubt, es in der _Block_-Richtung zu skalieren (entweder horizontal oder vertikal, abhängig vom {{cssxref("writing-mode")}} und {{cssxref("direction")}} Wert).
- `inline`
  - : Das Element zeigt einen Mechanismus, der dem Benutzer erlaubt, es in der _Inline_-Richtung zu skalieren (entweder horizontal oder vertikal, abhängig vom {{cssxref("writing-mode")}} und {{cssxref("direction")}} Wert).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivieren der Skalierbarkeit von Textareas

In vielen Browsern sind {{HTMLElement("textarea")}}-Elemente standardmäßig skalierbar. Sie können dieses Verhalten mit der `resize`-Eigenschaft überschreiben.

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

{{EmbedLiveSample("Disabling_resizability_of_textareas","200","100")}}

### Verwendung von `resize` mit beliebigen Elementen

Sie können die `resize`-Eigenschaft verwenden, um jedes Element skalierbar zu machen. Im folgenden Beispiel enthält ein skalierbares {{HTMLElement("div")}} ein skalierbares Absatz-Element ({{HTMLElement("p")}}).

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
