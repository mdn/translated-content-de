---
title: :empty
slug: Web/CSS/Reference/Selectors/:empty
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Die **`:empty`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert jedes Element, das keine Kinder hat. Kinder können entweder Elementknoten oder Text (einschließlich Leerzeichen) sein. Kommentare, Verarbeitungshinweise und CSS {{cssxref("content")}} beeinflussen nicht, ob ein Element als leer betrachtet wird.

{{InteractiveExample("CSS Demo: :empty", "tabbed-shorter")}}

```css interactive-example
div:empty {
  outline: 2px solid deeppink;
  height: 1em;
}
```

```html interactive-example
<p>Element with no content:</p>
<div></div>

<p>Element with comment:</p>
<div><!-- A comment --></div>

<p>Element with nested empty element:</p>
<div><p></p></div>
```

> [!NOTE]
> In [Selectors Level 4](https://drafts.csswg.org/selectors-4/#the-empty-pseudo) wurde die `:empty` Pseudoklasse geändert, um wie {{CSSxRef(":-moz-only-whitespace")}} zu fungieren, aber derzeit unterstützt dies kein Browser.

## Syntax

```css
:empty {
  /* ... */
}
```

## Barrierefreiheit

Assistierende Technologien wie Bildschirmleser können interaktive Inhalte nicht interpretieren, die leer sind. Alle interaktiven Inhalte müssen einen zugänglichen Namen haben, der erstellt wird, indem ein Textwert für das übergeordnete Element des interaktiven Steuerelements ([Anker](/de/docs/Web/HTML/Reference/Elements/a), [Buttons](/de/docs/Web/HTML/Reference/Elements/button), etc.) bereitgestellt wird. Zugängliche Namen machen das interaktive Steuerelement dem [Zugänglichkeitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) zugänglich, einer API, die assistierenden Technologien nützliche Informationen zur Verfügung stellt.

Der Text, der den zugänglichen Namen des interaktiven Steuerelements bereitstellt, kann mithilfe [einer Kombination aus Eigenschaften](https://gomakethings.com/hidden-content-for-better-a11y/#hiding-the-link) ausgeblendet werden, die ihn visuell vom Bildschirm entfernen, aber dennoch für assistierende Technologien interpretierbar halten. Dies wird häufig für Buttons verwendet, die ausschließlich auf ein Symbol angewiesen sind, um den Zweck zu vermitteln.

- [Was ist ein zugänglicher Name? | The Paciello Group](https://www.tpgi.com/what-is-an-accessible-name/)
- [Versteckter Inhalt für bessere Barrierefreiheit | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN Understanding WCAG, Leitfaden 2.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Understanding Success Criterion 2.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html)

## Beispiele

### HTML

```html
<div class="box"><!-- I will be lime. --></div>
<div class="box">I will be pink.</div>
<div class="box">
  <!-- I will be pink in older browsers because of the whitespace around this comment. -->
</div>
<div class="box">
  <p>
    <!-- I will be pink in all browsers because of the non-collapsible whitespace and elements around this comment. -->
  </p>
</div>
```

### CSS

```css hidden
body {
  display: flex;
  justify-content: space-around;
}
```

```css
.box {
  background: pink;
  height: 80px;
  width: 80px;
}

.box:empty {
  background: lime;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", 300, 80)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":-moz-only-whitespace")}} – Die {{Glossary("Vendor_Prefix", "präsentierte")}} Implementierung der Änderungen in [Selectors Level 4](https://drafts.csswg.org/selectors-4/#the-empty-pseudo)
- {{CSSxRef(":blank")}}
