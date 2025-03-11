---
title: ":empty"
slug: Web/CSS/:empty
l10n:
  sourceCommit: b17ca921175c0a92d21c6c4effbc7fa3dc348a8e
---

{{CSSRef}}

Die **`:empty`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes Element, das keine Kinder hat. Kinder können entweder Elementknoten oder Text (einschließlich Leerzeichen) sein. Kommentare, Verarbeitungshinweise und CSS {{cssxref("content")}} beeinflussen nicht, ob ein Element als leer betrachtet wird.

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
> In [Selectors Level 4](https://drafts.csswg.org/selectors-4/#the-empty-pseudo) wurde die `:empty` Pseudoklasse so geändert, dass sie wie {{CSSxRef(":-moz-only-whitespace")}} funktioniert, aber derzeit unterstützt kein Browser dies.

## Syntax

```css
:empty {
  /* ... */
}
```

## Barrierefreiheit

Assistive Technologien wie Screenreader können keine interaktiven Inhalte parsen, die leer sind. Alle interaktiven Inhalte müssen einen zugänglichen Namen haben, der erstellt wird, indem ein Textwert für das übergeordnete Element der interaktiven Steuerung bereitgestellt wird ([Anker](/de/docs/Web/HTML/Element/a), [Buttons](/de/docs/Web/HTML/Element/button) usw.). Zugängliche Namen machen die interaktive Steuerung dem [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) zugänglich, einer API, die Informationen bereitstellt, die für assistive Technologien nützlich sind.

Der Text, der den zugänglichen Namen der interaktiven Steuerung bereitstellt, kann mit [einer Kombination von Eigenschaften](https://gomakethings.com/hidden-content-for-better-a11y/#hiding-the-link) versteckt werden, die ihn visuell vom Bildschirm entfernt, aber für assistive Technologien parsbar hält. Dies wird häufig bei Buttons verwendet, die ausschließlich auf ein Symbol zur Zweckvermittlung vertrauen.

- [Was ist ein zugänglicher Name? | The Paciello Group](https://www.tpgi.com/what-is-an-accessible-name/)
- [Versteckte Inhalte für bessere Barrierefreiheit | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN Verstehen der WCAG, Richtlinie 2.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verstehen des Erfolgskriteriums 2.4.4 | W3C Verstehen der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html)

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

- {{CSSxRef(":-moz-only-whitespace")}} – Die {{Glossary("Vendor_Prefix", "Prefix")}} Implementierung der Änderungen in [Selectors Level 4](https://drafts.csswg.org/selectors-4/#the-empty-pseudo)
- {{CSSxRef(":blank")}}
