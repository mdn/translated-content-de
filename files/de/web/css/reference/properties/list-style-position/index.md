---
title: "`list-style-position` CSS property"
short-title: list-style-position
slug: Web/CSS/Reference/Properties/list-style-position
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`list-style-position`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Position des {{cssxref("::marker")}} relativ zu einem Listenelement fest.

{{InteractiveExample("CSS Demo: list-style-position")}}

```css interactive-example-choice
list-style-position: inside;
```

```css interactive-example-choice
list-style-position: outside;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div>
    <p>NASA Notable Missions</p>
    <ul class="transition-all" id="example-element">
      <li>Apollo 11: First Human Landing</li>
      <li>City in Space: The International Space Station</li>
      <li>Great Observatory: The Hubble Space Telescope</li>
      <li>Everlasting Mars Rovers</li>
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

## Syntax

```css
/* Keyword values */
list-style-position: inside;
list-style-position: outside;

/* Global values */
list-style-position: inherit;
list-style-position: initial;
list-style-position: revert;
list-style-position: revert-layer;
list-style-position: unset;
```

Die `list-style-position` Eigenschaft wird als einer der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `inside`
  - : Der {{cssxref("::marker")}} ist das erste Element unter dem Inhalt des Listenelements.
- `outside`
  - : Der {{cssxref("::marker")}} befindet sich außerhalb des Hauptblockelements. Dies ist der Standardwert für {{cssxref("list-style")}}.

## Beschreibung

Diese Eigenschaft wird auf Listenelemente angewendet, d.h. Elemente mit `{{cssxref("display")}}: list-item;`. [Standardmäßig](https://html.spec.whatwg.org/multipage/rendering.html#lists) umfasst dies {{HTMLElement("li")}} Elemente. Da diese Eigenschaft vererbt wird, kann sie auf dem Elternelement (normalerweise {{HTMLElement("ol")}} oder {{HTMLElement("ul")}}) gesetzt werden, damit sie auf alle Listenelemente angewendet wird.

Wenn ein Blockelement das erste Kind eines Listenelements ist, das als `list-style-position: inside` deklariert wird, wird das Blockelement in der Zeile nach dem Marker-Box platziert.

Es ist oft bequemer, die Kurzschreibweise {{cssxref("list-style")}} zu verwenden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Position des Listenelements festlegen

#### HTML

```html
<p>List 1</p>
<ul class="inside">
  <li>List Item 1-1</li>
  <li>List Item 1-2</li>
  <li>List Item 1-3</li>
  <li>List Item 1-4</li>
</ul>
<p>List 2</p>
<ul class="outside">
  <li>List Item 2-1</li>
  <li>List Item 2-2</li>
  <li>List Item 2-3</li>
  <li>List Item 2-4</li>
</ul>
<p>List 3</p>
<ul class="inside-img">
  <li>List Item 3-1</li>
  <li>List Item 3-2</li>
  <li>List Item 3-3</li>
  <li>List Item 3-4</li>
</ul>
```

#### CSS

```css
.inside {
  list-style-position: inside;
  list-style-type: square;
}

.outside {
  list-style-position: outside;
  list-style-type: circle;
}

.inside-img {
  list-style-position: inside;
  list-style-image: url("star-solid.gif");
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_list_item_position", 200, 420)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("list-style")}} Kurzschreibweise
- {{Cssxref("list-style-type")}} Eigenschaft
- {{Cssxref("list-style-image")}} Eigenschaft
- {{cssxref("::marker")}} Pseudo-Element
- [CSS Lists und Counters](/de/docs/Web/CSS/Guides/Lists) Modul
- [CSS Counter Styles](/de/docs/Web/CSS/Guides/Counter_styles) Modul
