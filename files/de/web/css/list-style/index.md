---
title: list-style
slug: Web/CSS/list-style
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{CSSRef}}

Die **`list-style`** CSS-[Kurzschrift-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) ermöglicht es, alle Listeneigenschaften auf einmal festzulegen.

{{EmbedInteractiveExample("pages/css/list-style.html")}}

Die Werte dieser Eigenschaft werden auf Listeneinträge angewendet, einschließlich {{HTMLElement("li")}}-Elementen und Elementen mit `{{cssxref("display")}}: list-item;`. Da diese Eigenschaft vererbt wird, kann sie auf einem Elternelement (normalerweise {{HTMLElement("ol")}} oder {{HTMLElement("ul")}}) festgelegt werden, um das gleiche Listenstyling auf alle verschachtelten Elemente anzuwenden.

## Zusammenfassende Eigenschaften

Diese Eigenschaft ist eine Kurzschrift für die folgenden CSS-Eigenschaften:

- [`list-style-image`](/de/docs/Web/CSS/list-style-image)
- [`list-style-position`](/de/docs/Web/CSS/list-style-position)
- [`list-style-type`](/de/docs/Web/CSS/list-style-type)

## Syntax

```css
/* Typ */
list-style: square;

/* Bild */
list-style: url("../img/shape.png");

/* Position */
list-style: inside;

/* Zwei Werte */
list-style: georgian outside;
list-style: url("img/pip.svg") inside;

/* Drei Werte */
list-style: lower-roman url("img/shape.png") outside;

/* Schlüsselwortwert */
list-style: none;

/* Globale Werte */
list-style: inherit;
list-style: initial;
list-style: revert;
list-style: revert-layer;
list-style: unset;
```

Die `list-style`-Eigenschaft wird mit einem, zwei oder drei Werten in beliebiger Reihenfolge angegeben. Wenn {{cssxref("list-style-type")}} und {{cssxref("list-style-image")}} beide festgelegt sind, wird der `list-style-type` als Fallback verwendet, falls das Bild nicht verfügbar ist.

### Werte

- {{cssxref("list-style-type")}}
  - : Ein `<counter-style>`, {{cssxref("string")}}, oder `none`. Wenn in der Kurzschrift weggelassen, wird der Standardwert `disc` verwendet. Siehe {{cssxref("list-style-type")}}.
- {{cssxref("list-style-image")}}
  - : Ein {{cssxref("image")}} oder `none`. Wenn weggelassen, wird der Standardwert `none` verwendet. Siehe {{cssxref("list-style-image")}}.
- {{cssxref("list-style-position")}}
  - : Entweder `inside` oder `outside`. Wenn weggelassen, wird der Standardwert `outside` verwendet. Siehe {{cssxref("list-style-position")}}.
- `none`
  - : Es wird kein Listenstil verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Safari erkennt geordnete oder ungeordnete Listen im Barrierefreiheitsbaum nicht als Listen, wenn sie einen `list-style`-Wert von `none` haben, es sei denn, die Liste ist innerhalb des Navigations-Elements {{HTMLElement("nav")}} verschachtelt. Dieses [Verhalten ist beabsichtigt](https://webkit.org/b/170179#c1) und wird nicht als Fehler betrachtet.

Um sicherzustellen, dass Listen als Listen angesagt werden, fügen Sie [`role="list"`](/de/docs/Web/Accessibility/ARIA/Roles/list_role) zu {{HTMLElement("ol")}} und {{HTMLElement("ul")}}-Elementen hinzu, insbesondere wenn die Liste nicht in einem `<nav>` verschachtelt ist. Dies stellt die Listensemantik wieder her, ohne das Design zu beeinflussen:

```html
<ul role="list">
  <li>Ein Eintrag</li>
  <li>Ein weiterer Eintrag</li>
</ul>
```

Wenn eine ARIA-`role`-Lösung für Ihren Code keine Option ist, kann stattdessen CSS verwendet werden. Das Hinzufügen von nicht-leeren [Pseudo-Inhalten](/de/docs/Web/CSS/content) wie Text oder Bildern vor jedem Listeneintrag kann die Listensemantik wiederherstellen, beeinflusst jedoch das visuelle Erscheinungsbild. Safari bestimmt, ob der hinzugefügte Pseudo-Inhalt als zugänglicher Inhalt ausreicht und stellt die Listensemantik wieder her, wenn ja. Im Allgemeinen erachtet Safari Text und Bilder als ausreichend, weshalb `content: "+ ";` unten funktioniert (erfordert jedoch zusätzliche Stilgebung, um das Design nicht zu beeinflussen).

```css
ul {
  list-style: none;
}

ul li::before {
  content: "+ ";
}
```

Eine Deklaration von `content: "";` (ein leerer String) wird ignoriert, ebenso wie `content`-Werte, die nur Leerzeichen enthalten, wie `content: " ";`.

Diese CSS-Workarounds sollten nur verwendet werden, wenn eine HTML-Lösung nicht verfügbar ist, und nur nach Tests, um sicherzustellen, dass sie nicht zu unerwartetem Verhalten führen, das die Benutzererfahrung negativ beeinflussen könnte.

- ['Fixing' Lists](https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html) (2023)
- [VoiceOver and list-style-type: none](https://gerardkcohen.me/writing/2017/voiceover-list-style-type.html) (2017)
- [WCAG verstehen: Erstellen Sie Inhalte, die auf verschiedene Arten dargestellt werden können](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.3_%E2%80%94_Create_content_that_can_be_presented_in_different_ways)
- [Erklärung des Erfolgskriteriums 1.3.1: Informationen und Beziehungen | WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)

## Beispiele

### Festlegung des Listentyp- und der Position

#### HTML

```html
Liste 1
<ul class="one">
  <li>Listeneintrag 1</li>
  <li>Listeneintrag 2</li>
  <li>Listeneintrag 3</li>
</ul>
Liste 2
<ul class="two">
  <li>Listeneintrag A</li>
  <li>Listeneintrag B</li>
  <li>Listeneintrag C</li>
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
