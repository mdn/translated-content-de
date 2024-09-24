---
title: Größe ändern
slug: Web/CSS/resize
l10n:
  sourceCommit: 05a463a3bc1af6e1b1e0d6a273582d954ae00ed0
---

{{CSSRef}}

Die **`resize`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob ein Element anpassbar ist und, falls ja, in welche Richtungen.

{{EmbedInteractiveExample("pages/css/resize.html")}}

`resize` gilt nicht für die folgenden:

- Inline-Elemente
- Block-Elemente, deren {{cssxref("overflow")}} Eigenschaft auf `visible` gesetzt ist

## Syntax

```css
/* Schlüsselwortwerte */
resize: none;
resize: both;
resize: horizontal;
resize: vertical;
resize: block;
resize: inline;

/* Globale Werte */
resize: inherit;
resize: initial;
resize: revert;
resize: revert-layer;
resize: unset;
```

Die `resize` Eigenschaft wird als einzelner Schlüsselwortwert aus der untenstehenden Liste angegeben.

### Werte

- `none`
  - : Das Element bietet keine benutzergesteuerte Methode zur Größenänderung.
- `both`
  - : Das Element zeigt einen Mechanismus, der es dem Benutzer erlaubt, es sowohl horizontal als auch vertikal zu vergrößern.
- `horizontal`
  - : Das Element zeigt einen Mechanismus, der es dem Benutzer erlaubt, es in _horizontaler_ Richtung zu vergrößern.
- `vertical`
  - : Das Element zeigt einen Mechanismus, der es dem Benutzer erlaubt, es in _vertikaler_ Richtung zu vergrößern.
- `block`
  - : Das Element zeigt einen Mechanismus, der es dem Benutzer erlaubt, es in Blockrichtung (entweder horizontal oder vertikal, abhängig von {{cssxref("writing-mode")}} und {{cssxref("direction")}} Wert) zu vergrößern.
- `inline`
  - : Das Element zeigt einen Mechanismus, der es dem Benutzer erlaubt, es in Inline-Richtung (entweder horizontal oder vertikal, abhängig von {{cssxref("writing-mode")}} und {{cssxref("direction")}} Wert) zu vergrößern.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivieren der Größenänderung von Textbereichen

In vielen Browsern sind {{HTMLElement("textarea")}} Elemente standardmäßig anpassbar. Sie können dieses Verhalten mit der `resize` Eigenschaft überschreiben.

#### HTML

```html
<textarea>Type some text here.</textarea>
```

#### CSS

```css
textarea {
  resize: none; /* Deaktiviert die Größenänderung */
}
```

#### Ergebnis

{{EmbedLiveSample("Disabling_resizability_of_textareas","200","100")}}

### Verwendung von resize mit beliebigen Elementen

Sie können die `resize` Eigenschaft verwenden, um jedes Element anpassbar zu machen. Im untenstehenden Beispiel enthält ein anpassbares {{HTMLElement("div")}} einen anpassbaren Absatz ({{HTMLElement("p")}} Element).

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
