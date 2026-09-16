---
title: "`list-style-image` CSS property"
short-title: list-style-image
slug: Web/CSS/Reference/Properties/list-style-image
l10n:
  sourceCommit: 880c2c4b113c6fe127ca3ae3603a56ef7a2eb9a6
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`list-style-image`** legt ein Bild fest, das als Markierung für Listenelemente verwendet wird.

Oft ist es praktischer, die Kurzform {{ cssxref("list-style") }} zu verwenden.

{{InteractiveExample("CSS Demo: list-style-image")}}

```css interactive-example-choice
list-style-image: url("/shared-assets/images/examples/rocket.svg");
```

```css interactive-example-choice
list-style-image: none;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div>
    <p>NASA Notable Missions</p>
    <ul class="transition-all unhighlighted" id="example-element">
      <li>Apollo</li>
      <li>Hubble</li>
      <li>Chandra</li>
      <li>Cassini-Huygens</li>
      <li>Spitzer</li>
    </ul>
  </div>
</section>
```

```css interactive-example
.default-example {
  font-size: 1.2rem;
}

#example-element {
  width: 100%;
  background: #be094b;
  color: white;
}

section {
  text-align: left;
  flex-direction: column;
}

hr {
  width: 50%;
  color: lightgray;
  margin: 0.5em;
}

.note {
  font-size: 0.8rem;
}

.note a {
  color: #009e5f;
}

@counter-style space-counter {
  symbols: "\1F680" "\1F6F8" "\1F6F0" "\1F52D";
  suffix: " ";
}
```

> [!NOTE]
> Diese Eigenschaft wird auf Listenelemente angewendet, d.h. auf Elemente mit `{{cssxref("display")}}: list-item;`; [standardmäßig](https://html.spec.whatwg.org/multipage/rendering.html#lists) umfasst dies {{HTMLElement("li")}}-Elemente. Da diese Eigenschaft vererbt wird, kann sie auf dem übergeordneten Element (normalerweise {{HTMLElement("ol")}} oder {{HTMLElement("ul")}}) festgelegt werden, damit sie auf alle Listenelemente angewendet wird.

## Syntax

```css
/* Keyword value */
list-style-image: none;

/* <url> values */
list-style-image: url("star-solid.gif");

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

Diese Eigenschaft wird als einzelner Wert aus der folgenden Liste angegeben:

- {{cssxref("image")}}
  - : Ein gültiges Bild, das als Markierung verwendet werden soll.
- `none`
  - : Gibt an, dass kein Bild als Markierung verwendet wird. Wenn dieser Wert festgelegt ist, wird stattdessen die in {{ Cssxref("list-style-type") }} definierte Markierung verwendet. Dies ist der Standardwert für {{cssxref("list-style")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwenden eines url-Werts

Dieses Beispiel verwendet einen Stern als Markierung, den wir mithilfe der Bildfunktion {{cssxref("url_value", "&lt;url&gt;")}} einfügen.

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
  list-style-image: url("star-solid.gif");
}
```

#### Ergebnis

{{ EmbedLiveSample('Using_a_url_value') }}

### Verwenden eines Farbverlaufs

Dieses Beispiel verwendet einen [CSS-Farbverlauf](/de/docs/Web/CSS/Guides/Images/Using_gradients) als Markierung, den wir mithilfe der Bildfunktion {{cssxref("gradient/linear-gradient", "linear-gradient()")}} erstellen.

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

- Kurzform {{Cssxref("list-style")}}
- Eigenschaft {{Cssxref("list-style-type")}}
- Eigenschaft {{Cssxref("list-style-position")}}
- Pseudoelement {{cssxref("::marker")}}
- Modul [CSS-Listen und -Zähler](/de/docs/Web/CSS/Guides/Lists)
- Modul [CSS-Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles)
