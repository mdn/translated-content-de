---
title: resize
slug: Web/CSS/resize
l10n:
  sourceCommit: 2251b205631a0bfa4db91f3be794ce30054b8749
---

{{CSSRef}}

Die **`resize`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob ein Element größenveränderbar ist und, falls ja, in welche Richtungen.

{{EmbedInteractiveExample("pages/css/resize.html")}}

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

Die `resize`-Eigenschaft wird als einzelner Schlüsselwortwert aus der folgenden Liste angegeben.

### Werte

- `none`
  - : Das Element bietet keine benutzerkontrollierte Methode zum Ändern seiner Größe.
- `both`
  - : Das Element zeigt einen Mechanismus an, der dem Benutzer erlaubt, es sowohl horizontal als auch vertikal zu vergrößern oder zu verkleinern.
- `horizontal`
  - : Das Element zeigt einen Mechanismus an, der dem Benutzer erlaubt, es in horizontaler Richtung zu vergrößern oder zu verkleinern.
- `vertical`
  - : Das Element zeigt einen Mechanismus an, der dem Benutzer erlaubt, es in vertikaler Richtung zu vergrößern oder zu verkleinern.
- `block`
  - : Das Element zeigt einen Mechanismus an, der dem Benutzer erlaubt, es in der Block-Richtung (entweder horizontal oder vertikal, abhängig vom {{cssxref("writing-mode")}}- und {{cssxref("direction")}}-Wert) zu vergrößern oder zu verkleinern.
- `inline`
  - : Das Element zeigt einen Mechanismus an, der dem Benutzer erlaubt, es in der Inline-Richtung (entweder horizontal oder vertikal, abhängig vom {{cssxref("writing-mode")}}- und {{cssxref("direction")}}-Wert) zu vergrößern oder zu verkleinern.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivierung der Größenänderbarkeit von Textbereichen

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

{{EmbedLiveSample("Disabling_resizability_of_textareas","200","100")}}

### Verwendung von resize mit beliebigen Elementen

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
