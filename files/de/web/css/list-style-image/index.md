---
title: list-style-image
slug: Web/CSS/list-style-image
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

Die **`list-style-image`** [CSS](/de/docs/Web/CSS) Eigenschaft legt ein Bild fest, das als Aufzählungszeichen verwendet wird.

Es ist oft bequemer, die Kurzform {{ cssxref("list-style") }} zu verwenden.

{{EmbedInteractiveExample("pages/css/list-style-image.html")}}

> [!NOTE]
> Diese Eigenschaft wird auf Listenelemente angewendet, d. h. Elemente mit `{{cssxref("display")}}: list-item;` [standardmäßig](https://html.spec.whatwg.org/multipage/rendering.html#lists) gehören dazu {{HTMLElement("li")}}-Elemente. Da diese Eigenschaft vererbt wird, kann sie auf dem Elternelement festgelegt werden (normalerweise {{HTMLElement("ol")}} oder {{HTMLElement("ul")}}), um auf alle Listenelemente angewendet zu werden.

## Syntax

```css
/* Keyword values */
list-style-image: none;

/* <url> values */
list-style-image: url("starsolid.gif");

/* valid image values */
list-style-image: linear-gradient(to left bottom, red, blue);

/* Global values */
list-style-image: inherit;
list-style-image: initial;
list-style-image: revert;
list-style-image: revert-layer;
list-style-image: unset;
```

### Werte

- {{cssxref("&lt;image&gt;")}}
  - : Ein gültiges Bild, das als Markierung verwendet werden soll.
- `none`
  - : Gibt an, dass kein Bild als Markierung verwendet wird. Wenn dieser Wert festgelegt ist, wird stattdessen die im {{ Cssxref("list-style-type") }} definierte Markierung verwendet. Dies ist der Standardwert für {{cssxref("list-style")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung eines url-Wertes

Dieses Beispiel hat einen Stern als Markierung, den wir mit der {{cssxref("url_value", "&lt;url&gt;")}} Bildfunktion einbinden.

#### HTML

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

#### CSS

```css
ul {
  list-style-image: url("starsolid.gif");
}
```

#### Ergebnis

{{ EmbedLiveSample('Using_a_url_value') }}

### Verwendung eines Gradienten

Dieses Beispiel hat einen [CSS-Gradienten](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) als Markierung, den wir mit der {{cssxref("gradient/linear-gradient", "linear-gradient()")}} Bildfunktion erstellen.

#### HTML

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

#### CSS

```css
ul {
  font-size: 200%;
  list-style-image: linear-gradient(to left bottom, red, blue);
}
```

#### Ergebnis

{{ EmbedLiveSample('Using_a_gradient') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("list-style")}} Kurzform
- {{Cssxref("list-style-type")}} Eigenschaft
- {{Cssxref("list-style-position")}} Eigenschaft
- {{cssxref("::marker")}} Pseudo-Element
- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
