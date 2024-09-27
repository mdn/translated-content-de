---
title: list-style
slug: Web/CSS/list-style
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{CSSRef}}

Die **`list-style`** CSS-[Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) ermöglicht es Ihnen, alle Listengestileigenschaften auf einmal festzulegen.

{{EmbedInteractiveExample("pages/css/list-style.html")}}

Die Werte dieser Eigenschaft werden auf Listenelemente angewendet, einschließlich {{HTMLElement("li")}}-Elementen und Elementen mit `{{cssxref("display")}}: list-item;`. Da diese Eigenschaft vererbt wird, kann sie auf ein Elternelement (normalerweise {{HTMLElement("ol")}} oder {{HTMLElement("ul")}}) gesetzt werden, um das gleiche Listenstyling auf alle verschachtelten Elemente anzuwenden.

## Bestandteilende Eigenschaften

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

Die `list-style`-Eigenschaft wird als ein, zwei oder drei Werte in beliebiger Reihenfolge angegeben. Wenn {{cssxref("list-style-type")}} und {{cssxref("list-style-image")}} beide festgelegt sind, wird `list-style-type` als Fallback verwendet, wenn das Bild nicht verfügbar ist.

### Werte

- {{cssxref("list-style-type")}}
  - : Ein `<counter-style>`, {{cssxref("string")}}, oder `none`. Wenn es in der Kurzform weggelassen wird, wird der Standardwert `disc` verwendet. Siehe {{cssxref("list-style-type")}}.
- {{cssxref("list-style-image")}}
  - : Ein {{cssxref("image")}} oder `none`. Wenn es weggelassen wird, wird der Standardwert `none` verwendet. Siehe {{cssxref("list-style-image")}}.
- {{cssxref("list-style-position")}}
  - : Entweder `inside` oder `outside`. Wenn es weggelassen wird, wird der Standardwert `outside` verwendet. Siehe {{cssxref("list-style-position")}}.
- `none`
  - : Es wird kein Listenstil verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Safari erkennt geordnete oder ungeordnete Listen nicht als Listen im Barrierefreiheitsbaum, wenn sie einen `list-style`-Wert von `none` haben, es sei denn, die Liste ist innerhalb des {{HTMLElement("nav")}}-Navigations-Elements verschachtelt. Dieses [Verhalten ist beabsichtigt](https://webkit.org/b/170179#c1) und wird nicht als Fehler betrachtet.

Um sicherzustellen, dass Listen als Listen angekündigt werden, fügen Sie [`role="list"`](/de/docs/Web/Accessibility/ARIA/Roles/list_role) den {{HTMLElement("ol")}}- und {{HTMLElement("ul")}}-Elementen hinzu, insbesondere wenn die Liste nicht in einem `<nav>` verschachtelt ist. Dies stellt die Listensemantik ohne Beeinträchtigung des Designs wieder her:

```html
<ul role="list">
  <li>An item</li>
  <li>Another item</li>
</ul>
```

Wenn eine ARIA `role` keine Option für Ihren Code ist, kann stattdessen CSS verwendet werden. Das Hinzufügen von nicht-leerem [Pseudo-Content](/de/docs/Web/CSS/content) wie Text oder Bildern vor jedem Listenelement kann die Listensemantik wiederherstellen, beeinträchtigt jedoch das visuelle Erscheinungsbild. Safari bestimmt, ob der hinzugefügte Pseudo-Content als barrierefreier Inhalt ausreicht, und stellt die Listensemantik wieder her, wenn dies der Fall ist. Im Allgemeinen betrachtet Safari Text und Bilder als ausreichend, weshalb das `content: "+ ";` unten funktioniert (erfordert jedoch zusätzliche Stilgebung, um das Design nicht zu beeinträchtigen).

```css
ul {
  list-style: none;
}

ul li::before {
  content: "+ ";
}
```

Eine Deklaration von `content: "";` (ein leerer String) wird ignoriert, ebenso wie `content`-Werte, die nur Leerzeichen enthalten, wie `content: " ";`.

Diese CSS-Workarounds sollten nur verwendet werden, wenn eine HTML-Lösung nicht verfügbar ist, und nur nach Tests, um sicherzustellen, dass sie keine unerwarteten Verhaltensweisen hervorrufen, die das Benutzererlebnis negativ beeinflussen könnten.

- ['Fixing' Lists](https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html) (2023)
- [VoiceOver und list-style-type: none](https://gerardkcohen.me/writing/2017/voiceover-list-style-type.html) (2017)
- [WCAG verstehen: Erstellen von Inhalten, die auf verschiedene Arten präsentiert werden können](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.3_%E2%80%94_Create_content_that_can_be_presented_in_different_ways)
- [Erfolgskriterium 1.3.1 verstehen: Info und Beziehungen | WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)

## Beispiele

### Listenstiltyp und Position setzen

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

- Komponenteneigenschaften: {{Cssxref("list-style-type")}}, {{Cssxref("list-style-image")}}, und {{Cssxref("list-style-position")}}
- {{Cssxref("::marker")}} Pseudo-Element
- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
