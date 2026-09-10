---
title: CSS-Eigenschaft `list-style`
short-title: list-style
slug: Web/CSS/Reference/Properties/list-style
l10n:
  sourceCommit: c2375c58cf5a6f0fd7053f3cee7cba8bd88a2bbe
---

Die [CSS](/de/docs/Web/CSS)-[Kurzform](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties)-Eigenschaft **`list-style`** ermöglicht es Ihnen, alle Eigenschaften für den Listenstil auf einmal festzulegen.

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

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("list-style-image")}}
- {{cssxref("list-style-position")}}
- {{cssxref("list-style-type")}}

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

Die Eigenschaft `list-style` wird als ein, zwei oder drei Werte in beliebiger Reihenfolge angegeben. Wenn sowohl {{cssxref("list-style-type")}} als auch {{cssxref("list-style-image")}} festgelegt sind, wird `list-style-type` als Fallback verwendet, falls das Bild nicht verfügbar ist.

### Werte

- {{cssxref("list-style-type")}}
  - : Ein `<counter-style>`, {{cssxref("string")}} oder `none`. Wenn in der Kurzform ausgelassen, ist der Standardwert `disc`. Siehe {{cssxref("list-style-type")}}.
- {{cssxref("list-style-image")}}
  - : Ein {{cssxref("image")}} oder `none`. Wenn ausgelassen, ist der Standardwert `none`. Siehe {{cssxref("list-style-image")}}.
- {{cssxref("list-style-position")}}
  - : Entweder `inside` oder `outside`. Wenn ausgelassen, ist der Standardwert `outside`. Siehe {{cssxref("list-style-position")}}.
- `none`
  - : Es wird kein Listenstil verwendet.

## Beschreibung

Die Eigenschaft `list-style` ermöglicht Ihnen, das Erscheinungsbild von Listenelementen anzupassen. Die Werte dieser Eigenschaft werden auf Listenelemente angewendet, einschließlich {{HTMLElement("li")}}-Elementen und Elementen mit `{{cssxref("display")}}: list-item;`.

### Vererbung des Listenstils

Da die Langform-Eigenschaft {{cssxref("list-style-type")}} vererbt wird, kann `list-style` für ein übergeordnetes Element (normalerweise {{HTMLElement("ol")}} oder {{HTMLElement("ul")}}) festgelegt werden, damit dieselbe Listengestaltung auf dessen Listenelemente angewendet wird. User-Agent-Stylesheets legen jedoch `list-style-type` für `<ul>`, `<ol>` und {{HTMLElement("menu")}}-Elemente fest, sodass verschachtelte Listen diese Standardwerte verwenden, anstatt den `list-style` der übergeordneten Liste zu erben. Die Werte von {{cssxref("list-style-position")}} und {{cssxref("list-style-image")}} werden normalerweise in verschachtelte Listen vererbt. Damit verschachtelte Listen auch den Markierungstyp erben, setzen Sie `list-style` oder `list-style-type` für die verschachtelten Listenelemente auf `inherit`.

Beispielsweise in Fällen wie diesem:

```html live-sample___list-style-inherit
<ul>
  <li>One</li>
  <li>Two</li>
  <li>
    Three
    <ul>
      <li>Four</li>
      <li>Five</li>
      <li>Six</li>
    </ul>
  </li>
</ul>
```

Bei denen für die äußere Liste ein benutzerdefinierter Stil festgelegt ist:

```css live-sample___list-style-inherit
body > ul {
  list-style: square;
}
```

Die innere Liste erbt den benutzerdefinierten Stil nicht, sofern Sie sie nicht auf Vererbung setzen:

```css live-sample___list-style-inherit
ul ul {
  list-style: inherit;
}
```

{{embedlivesample("list-style-inherit", "100%", "200")}}

## Barrierefreiheit

Safari erkennt geordnete oder ungeordnete Listen im Barrierefreiheitsbaum nicht als Listen, wenn sie einen `list-style`-Wert von `none` haben, es sei denn, die Liste ist innerhalb des Navigationselements {{HTMLElement("nav")}} verschachtelt. Dieses [Verhalten ist beabsichtigt](https://webkit.org/b/170179#c1) und wird nicht als Fehler betrachtet.

Um sicherzustellen, dass Listen als Listen angesagt werden, fügen Sie [`role="list"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role) zu {{HTMLElement("ol")}}- und {{HTMLElement("ul")}}-Elementen hinzu, insbesondere wenn die Liste nicht in einem `<nav>` verschachtelt ist. Dadurch wird die Listensemantik wiederhergestellt, ohne das Design zu beeinflussen:

```html
<ul role="list">
  <li>An item</li>
  <li>Another item</li>
</ul>
```

Wenn eine ARIA-`role` für Ihren Code keine Option ist, kann stattdessen CSS verwendet werden. Das Hinzufügen von nicht leerem [Pseudo-Inhalt](/de/docs/Web/CSS/Reference/Properties/content) wie Text oder Bildern vor jedem Listenelement kann die Listensemantik wiederherstellen, wirkt sich jedoch auf das visuelle Erscheinungsbild aus. Safari bestimmt, ob der hinzugefügte Pseudo-Inhalt als barrierefreier Inhalt ausreicht, und stellt die Listensemantik wieder her, wenn dies der Fall ist. Im Allgemeinen betrachtet Safari Text und Bilder als ausreichend, weshalb das unten gezeigte `content: "+ ";` funktioniert (jedoch zusätzliches Styling erfordert, damit das Design nicht beeinträchtigt wird).

```css
ul {
  list-style: none;
}

ul li::before {
  content: "+ ";
}
```

Eine Deklaration von `content: "";` (eine leere Zeichenfolge) wird ignoriert, ebenso wie `content`-Werte, die nur Leerzeichen enthalten, etwa `content: " ";`.

Diese CSS-Workarounds sollten nur verwendet werden, wenn keine HTML-Lösung verfügbar ist, und erst nach Tests, um sicherzustellen, dass sie nicht zu unerwarteten Verhaltensweisen führen, die sich negativ auf die Benutzererfahrung auswirken können.

- ['Fixing' Lists](https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html) (2023)
- [VoiceOver und list-style-type: none](https://gerardkcohen.me/writing/2017/voiceover-list-style-type.html) (2017)
- [WCAG verstehen: Inhalte erstellen, die auf verschiedene Arten präsentiert werden können](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Erfolgskriterium 1.3.1 verstehen: Informationen und Beziehungen | WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Listenstiltyp und -position festlegen

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

- Komponenten-Eigenschaften: {{Cssxref("list-style-type")}}, {{Cssxref("list-style-image")}} und {{Cssxref("list-style-position")}}
- Pseudo-Element {{Cssxref("::marker")}}
- Modul [CSS-Listen und -Zähler](/de/docs/Web/CSS/Guides/Lists)
- Modul [CSS-Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles)
