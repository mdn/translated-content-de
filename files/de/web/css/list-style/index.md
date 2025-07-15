---
title: list-style
slug: Web/CSS/list-style
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`list-style`** CSS-[Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) ermöglicht es Ihnen, alle Listenstil-Eigenschaften auf einmal festzulegen.

{{InteractiveExample("CSS Demo: list-style")}}

```css interactive-example-choice
list-style: square;
```

```css interactive-example-choice
list-style: inside;
```

```css interactive-example-choice
list-style: url("/shared-assets/images/examples/rocket.svg");
```

```css interactive-example-choice
list-style: none;
```

```css interactive-example-choice
list-style: georgian inside url("/shared-assets/images/examples/rocket.svg");
```

```css interactive-example-choice
list-style: georgian outside url("/non-existent.svg");
```

```html interactive-example
<section class="default-example" id="default-example">
  <div>
    <p>NASA Notable Missions</p>
    <ul class="transition-all" id="example-element">
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

Die Werte dieser Eigenschaft werden auf Listenelemente angewendet, einschließlich {{HTMLElement("li")}}-Elementen und Elementen mit `{{cssxref("display")}}: list-item;`. Da diese Eigenschaft vererbt wird, kann sie auf einem übergeordneten Element (normalerweise {{HTMLElement("ol")}} oder {{HTMLElement("ul")}}) festgelegt werden, um denselben Listenstil auf alle verschachtelten Elemente anzuwenden.

## Zusammengesetzte Eigenschaften

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

Die `list-style`-Eigenschaft wird als ein, zwei oder drei Werte in beliebiger Reihenfolge angegeben. Wenn sowohl {{cssxref("list-style-type")}} als auch {{cssxref("list-style-image")}} festgelegt sind, wird `list-style-type` als Fallback verwendet, falls das Bild nicht verfügbar ist.

### Werte

- {{cssxref("list-style-type")}}
  - : Ein `<counter-style>`, {{cssxref("string")}} oder `none`. Wenn es in der Kurzschreibweise weggelassen wird, wird der Standardwert `disc` verwendet. Siehe {{cssxref("list-style-type")}}.
- {{cssxref("list-style-image")}}
  - : Ein {{cssxref("image")}} oder `none`. Wenn weggelassen, wird der Standardwert `none` verwendet. Siehe {{cssxref("list-style-image")}}.
- {{cssxref("list-style-position")}}
  - : Entweder `inside` oder `outside`. Wird der Wert weggelassen, wird `outside` als Standardwert verwendet. Siehe {{cssxref("list-style-position")}}.
- `none`
  - : Es wird kein Listenstil verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Safari erkennt geordnete oder ungeordnete Listen nicht als Listen im Barrierefreiheitsbaum, wenn sie einen `list-style`-Wert von `none` haben, es sei denn, die Liste ist im {{HTMLElement("nav")}}-Navigationselement verschachtelt. Dieses [Verhalten ist beabsichtigt](https://webkit.org/b/170179#c1) und wird nicht als Fehler betrachtet.

Um sicherzustellen, dass Listen als Listen angesagt werden, fügen Sie [`role="list"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role) zu {{HTMLElement("ol")}} und {{HTMLElement("ul")}}-Elementen hinzu, insbesondere wenn die Liste nicht in einem `<nav>` verschachtelt ist. Dies stellt die Listensemantik wieder her, ohne das Design zu beeinträchtigen:

```html
<ul role="list">
  <li>An item</li>
  <li>Another item</li>
</ul>
```

Wenn ein ARIA `role` keine Option für Ihren Code ist, kann stattdessen CSS verwendet werden. Das Hinzufügen von nicht-leerem [Pseudo-Inhalt](/de/docs/Web/CSS/content) wie Text oder Bildern vor jedem Listenelement kann die Listensemantik wiederherstellen, beeinträchtigt jedoch das visuelle Erscheinungsbild. Safari entscheidet, ob der hinzugefügte Pseudo-Inhalt als zugänglicher Inhalt ausreichend ist und stellt die Listensemantik wieder her, wenn ja. Im Allgemeinen betrachtet Safari Text und Bilder als ausreichend, weshalb das `content: "+ ";` unten funktioniert (benötigt jedoch zusätzliche Stile, um das Design nicht zu beeinflussen).

```css
ul {
  list-style: none;
}

ul li::before {
  content: "+ ";
}
```

Eine Deklaration von `content: "";` (ein leerer String) wird ignoriert, ebenso wie `content`-Werte, die nur Leerzeichen enthalten, wie `content: " ";`.

Diese CSS-Workarounds sollten nur verwendet werden, wenn eine HTML-Lösung nicht verfügbar ist, und erst nach Tests, um sicherzustellen, dass sie nicht zu unerwarteten Verhaltensweisen führen, die die Benutzererfahrung negativ beeinflussen könnten.

- ['Fixing' Lists](https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html) (2023)
- [VoiceOver and list-style-type: none](https://gerardkcohen.me/writing/2017/voiceover-list-style-type.html) (2017)
- [Verständnis von WCAG: Erstellen Sie Inhalte, die auf unterschiedliche Weisen präsentiert werden können](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Verständnis des Erfolgskriteriums 1.3.1: Informationen und Beziehungen | WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)

## Beispiele

### Listenstil-Typ und -Position festlegen

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
- {{Cssxref("::marker")}} Pseudo-Element
- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
