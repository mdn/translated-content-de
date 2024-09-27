---
title: list-style-position
slug: Web/CSS/list-style-position
l10n:
  sourceCommit: 0c649a51088092a95277943ce3f572b149decd25
---

{{CSSRef}}

Die **`list-style-position`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Position des {{cssxref("::marker")}} relativ zu einem Listenelement fest.

{{EmbedInteractiveExample("pages/css/list-style-position.html")}}

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
  - : Der {{cssxref("::marker")}} ist das erste Element unter den Inhalten des Listenelements.
- `outside`
  - : Der {{cssxref("::marker")}} ist außerhalb der Hauptblockbox. Dies ist der Standardwert für {{cssxref("list-style")}}.

## Beschreibung

Diese Eigenschaft wird auf Listenelemente angewendet, d.h. Elemente mit `{{cssxref("display")}}: list-item;`. [Standardmäßig](https://html.spec.whatwg.org/multipage/rendering.html#lists) schließt dies {{HTMLElement("li")}} Elemente ein. Da diese Eigenschaft vererbt wird, kann sie auf dem Elternelement (normalerweise {{HTMLElement("ol")}} oder {{HTMLElement("ul")}}) gesetzt werden, um auf alle Listenelemente angewendet zu werden.

Wenn ein Blockelement das erste Kind eines Listenelements ist, das als `list-style-position: inside` deklariert ist, wird das Blockelement auf der Linie nach der Marker-Box platziert.

Es ist oft bequemer, die Kurzform {{cssxref("list-style")}} zu verwenden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Position des Listenelements einstellen

#### HTML

```html
<ul class="inside">
  List 1
  <li>List Item 1-1</li>
  <li>List Item 1-2</li>
  <li>List Item 1-3</li>
  <li>List Item 1-4</li>
</ul>
<ul class="outside">
  List 2
  <li>List Item 2-1</li>
  <li>List Item 2-2</li>
  <li>List Item 2-3</li>
  <li>List Item 2-4</li>
</ul>
<ul class="inside-img">
  List 3
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
  list-style-image: url("starsolid.gif");
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_list_item_position", 200, 420)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("list-style")}} Kurzform
- {{Cssxref("list-style-type")}} Eigenschaft
- {{Cssxref("list-style-image")}} Eigenschaft
- {{cssxref("::marker")}} Pseudoelement
- [CSS lists and counters](/de/docs/Web/CSS/CSS_lists) Modul
- [CSS counter styles](/de/docs/Web/CSS/CSS_counter_styles) Modul
