---
title: ":empty"
slug: Web/CSS/:empty
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:empty`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes Element, das keine Kinder hat. Kinder können entweder Elementknoten oder Text (einschließlich Leerzeichen) sein. Kommentare, Verarbeitungshinweise und die CSS {{cssxref("content")}} beeinflussen nicht, ob ein Element als leer betrachtet wird.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-empty.html", "tabbed-shorter")}}

> [!NOTE]
> In [Selectors Level 4](https://drafts.csswg.org/selectors-4/#the-empty-pseudo) wurde die `:empty`-Pseudoklasse so geändert, dass sie wie {{CSSxRef(":-moz-only-whitespace")}} funktioniert, aber bislang unterstützt dies kein Browser.

## Syntax

```css
:empty {
  /* ... */
}
```

## Barrierefreiheit

Assistive Technologien wie Bildschirmleser können interaktive Inhalte, die leer sind, nicht verarbeiten. Alle interaktiven Inhalte müssen einen zugänglichen Namen haben, der erstellt wird, indem ein Textwert für das übergeordnete Element der interaktiven Steuerung ([Anker](/de/docs/Web/HTML/Element/a), [Buttons](/de/docs/Web/HTML/Element/button), usw.) bereitgestellt wird. Zugängliche Namen machen die interaktive Steuerung für den [Barrierefreiheitsbaum](/de/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis) zugänglich, eine API, die Informationen kommuniziert, die für assistive Technologien nützlich sind.

Der Text, der den zugänglichen Namen der interaktiven Steuerung bereitstellt, kann mit [einer Kombination von Eigenschaften](https://gomakethings.com/hidden-content-for-better-a11y/#hiding-the-link) verborgen werden, die ihn visuell vom Bildschirm entfernen, aber von assistiver Technologie weiterhin verarbeitet werden können. Dies wird häufig für Buttons verwendet, die sich ausschließlich auf ein Symbol verlassen, um den Zweck zu vermitteln.

- [Was ist ein zugänglicher Name? | The Paciello Group](https://www.tpgi.com/what-is-an-accessible-name/)
- [Verborgener Inhalt für bessere Barrierefreiheit | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN Verständnis der WCAG, Leitfaden 2.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verständnis des Erfolgskriteriums 2.4.4 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html)

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

- {{CSSxRef(":-moz-only-whitespace")}} – Die [geprefixt](/de/docs/Glossary/Vendor_Prefix) Implementierung der Änderungen in [Selectors Level 4](https://drafts.csswg.org/selectors-4/#the-empty-pseudo)
- {{CSSxRef(":blank")}}
