---
title: list-style
slug: Web/CSS/list-style
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die **`list-style`** CSS-[Kurzschreibweiseigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) ermöglicht es Ihnen, alle Listeneigenschaften auf einmal festzulegen.

{{EmbedInteractiveExample("pages/css/list-style.html")}}

Die Werte dieser Eigenschaft werden auf Listenelemente angewendet, einschließlich {{HTMLElement("li")}}-Elementen und Elementen mit `{{cssxref("display")}}: list-item;`. Da diese Eigenschaft vererbt wird, kann sie auf einem Elternelement (normalerweise {{HTMLElement("ol")}} oder {{HTMLElement("ul")}}) gesetzt werden, um den gleichen Listenstil auf alle verschachtelten Elemente anzuwenden.

## Bestandeigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`list-style-image`](/de/docs/Web/CSS/list-style-image)
- [`list-style-position`](/de/docs/Web/CSS/list-style-position)
- [`list-style-type`](/de/docs/Web/CSS/list-style-type)

## Syntax

```css
/* type */
list-style: square;

/* image */
list-style: url("../img/shape.png");

/* position */
list-style: inside;

/* two values */
list-style: georgian outside;
list-style: url("img/pip.svg") inside;

/* three values */
list-style: lower-roman url("img/shape.png") outside;

/* Keyword value */
list-style: none;

/* Global values */
list-style: inherit;
list-style: initial;
list-style: revert;
list-style: revert-layer;
list-style: unset;
```

Die `list-style`-Eigenschaft wird als ein, zwei oder drei Werte in beliebiger Reihenfolge angegeben. Wenn sowohl {{cssxref("list-style-type")}} als auch {{cssxref("list-style-image")}} gesetzt sind, wird `list-style-type` als Fallback verwendet, falls das Bild nicht verfügbar ist.

### Werte

- {{cssxref("list-style-type")}}
  - : Ein `<counter-style>`, {{cssxref("string")}}, oder `none`. Wenn in der Kurzschreibweise ausgelassen, wird der Standardwert `disc` verwendet. Siehe {{cssxref("list-style-type")}}.
- {{cssxref("list-style-image")}}
  - : Ein {{cssxref("image")}} oder `none`. Wenn ausgelassen, wird der Standardwert `none` verwendet. Siehe {{cssxref("list-style-image")}}.
- {{cssxref("list-style-position")}}
  - : Entweder `inside` oder `outside`. Wenn ausgelassen, wird der Standardwert `outside` verwendet. Siehe {{cssxref("list-style-position")}}.
- `none`
  - : Es wird kein Listenstil verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Safari erkennt geordnete oder ungeordnete Listen nicht als Listen im Barrierefreiheitsbaum an, wenn sie einen `list-style`-Wert von `none` haben, es sei denn, die Liste ist innerhalb des {{HTMLElement("nav")}}-Navigationselements verschachtelt. Dieses [Verhalten ist beabsichtigt](https://webkit.org/b/170179#c1) und wird nicht als Fehler betrachtet.

Um sicherzustellen, dass Listen als Listen angekündigt werden, fügen Sie [`role="list"`](/de/docs/Web/Accessibility/ARIA/Roles/list_role) zu {{HTMLElement("ol")}} und {{HTMLElement("ul")}}-Elementen hinzu, insbesondere wenn die Liste nicht innerhalb eines `<nav>` verschachtelt ist. Dies stellt die Listensemantik wieder her, ohne das Design zu beeinflussen:

```html
<ul role="list">
  <li>An item</li>
  <li>Another item</li>
</ul>
```

Wenn eine ARIA-`role` keine Option für Ihren Code ist, kann stattdessen CSS verwendet werden. Das Hinzufügen von nicht-leeren [Pseudoinhalten](/de/docs/Web/CSS/content) wie Text oder Bildern vor jedem Listenelement kann die Listensemantik wiederherstellen, beeinträchtigt jedoch das visuelle Erscheinungsbild. Safari bestimmt, ob der hinzugefügte Pseudoinhalt als barrierefreier Inhalt ausreichend ist und stellt gegebenenfalls die Listensemantik wieder her. Im Allgemeinen betrachtet Safari Text und Bilder als ausreichend, weshalb das `content: "+ ";`-Beispiel funktioniert (benötigt jedoch zusätzliche Styles, um das Design nicht zu beeinflussen).

```css
ul {
  list-style: none;
}

ul li::before {
  content: "+ ";
}
```

Eine Deklaration von `content: "";` (eine leere Zeichenkette) wird ignoriert, ebenso wie `content`-Werte, die nur Leerzeichen enthalten, wie `content: " ";`.

Diese CSS-Workarounds sollten nur verwendet werden, wenn keine HTML-Lösung verfügbar ist, und nur nach Tests, um sicherzustellen, dass sie keine unerwarteten Verhaltensweisen ergeben, die die Benutzererfahrung negativ beeinflussen könnten.

- ['Fixing' Lists](https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html) (2023)
- [VoiceOver and list-style-type: none](https://gerardkcohen.me/writing/2017/voiceover-list-style-type.html) (2017)
- [Verständnis der WCAG: Erstellen von Inhalten, die auf unterschiedliche Weisen dargestellt werden können](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Verständnis des Erfolgskriteriums 1.3.1: Information und Beziehungen | WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)

## Beispiele

### List style type und position festlegen

#### HTML

```html
List 1
<ul class="one">
  <li>List Item1</li>
  <li>List Item2</li>
  <li>List Item3</li>
</ul>
List 2
<ul class="two">
  <li>List Item A</li>
  <li>List Item B</li>
  <li>List Item C</li>
</ul>
```

#### CSS

```css
.one {
  list-style: circle;
}

.two {
  list-style: square inside;
}
```

#### Ergebnis

{{EmbedLiveSample('Setting_list_style_type_and_position', 'auto', 240)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Komponenten-Eigenschaften: {{Cssxref("list-style-type")}}, {{Cssxref("list-style-image")}}, und {{Cssxref("list-style-position")}}
- {{Cssxref("::marker")}} Pseudoelement
- [CSS-Listen und -Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
