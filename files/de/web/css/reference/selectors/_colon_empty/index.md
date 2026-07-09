---
title: "`:empty` CSS-Pseudoklasse"
short-title: :empty
slug: Web/CSS/Reference/Selectors/:empty
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

Die **`:empty`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert jedes Element, das keine Kinder hat. Kinder können entweder Elementknoten oder Text sein (einschließlich Leerzeichen). Kommentare, Verarbeitungshinweise und CSS {{cssxref("content")}} beeinflussen nicht, ob ein Element als leer angesehen wird.

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
> In [Selectors Level 4](https://drafts.csswg.org/selectors-4/#the-empty-pseudo) wurde die `:empty` Pseudoklasse so geändert, dass sie sich wie {{CSSxRef(":-moz-only-whitespace")}} verhält, aber derzeit unterstützt kein Browser diese Änderung.

## Syntax

```css
:empty {
  /* ... */
}
```

## Barrierefreiheit

Assistive Technologien wie Screenreader können interaktive Inhalte, die leer sind, nicht parsen. Alle interaktiven Inhalte müssen einen zugänglichen Namen haben, der durch das Bereitstellen eines Textwertes für das übergeordnete Element der interaktiven Steuerung ([Anker](/de/docs/Web/HTML/Reference/Elements/a), [Schaltflächen](/de/docs/Web/HTML/Reference/Elements/button), etc.) geschaffen wird. Zugängliche Namen machen die interaktive Steuerung für den [Zugangsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) verfügbar, eine API, die Informationen liefert, die für assistive Technologien nützlich sind.

Der Text, der den zugänglichen Namen der interaktiven Steuerung bereitstellt, kann mithilfe [einer Kombination von Eigenschaften](https://gomakethings.com/articles/hidden-content-for-better-a11y/#hiding-the-link) verborgen werden, die ihn visuell vom Bildschirm entfernt, aber über assistive Technologien weiterhin parsbar hält. Dies wird häufig für Schaltflächen verwendet, die sich ausschließlich auf ein Icon zur Zweckvermittlung stützen.

- [Was ist ein zugänglicher Name? | Vispero](https://vispero.com/resources/what-is-an-accessible-name/)
- [Verborgener Inhalt für bessere Barrierefreiheit | Go Make Things](https://gomakethings.com/articles/hidden-content-for-better-a11y/)
- [MDN Verständnis der WCAG, Leitfaden 2.4-Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verständnis des Erfolgskriteriums 2.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html)

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

- {{CSSxRef(":-moz-only-whitespace")}} – Die {{Glossary("Vendor_Prefix", "geprefixede")}} Implementierung der Änderungen in [Selectors Level 4](https://drafts.csswg.org/selectors-4/#the-empty-pseudo)
- {{CSSxRef(":blank")}}
