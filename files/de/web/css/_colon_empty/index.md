---
title: :empty
slug: Web/CSS/:empty
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`:empty`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes Element, das keine Kinder hat. Kinder können entweder Elemente oder Textknoten sein (einschließlich Leerraum). Kommentare, Verarbeitungsvorgänge und CSS {{cssxref("content")}} beeinflussen nicht, ob ein Element als leer betrachtet wird.

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
> In [Selectors Level 4](https://drafts.csswg.org/selectors-4/#the-empty-pseudo) wurde die `:empty` Pseudoklasse geändert, um wie {{CSSxRef(":-moz-only-whitespace")}} zu agieren, aber kein Browser unterstützt dies derzeit.

## Syntax

```css
:empty {
  /* ... */
}
```

## Barrierefreiheit

Hilfstechnologien wie Bildschirmlesegeräte können keine interaktiven Inhalte analysieren, die leer sind. Alle interaktiven Inhalte müssen einen zugänglichen Namen haben, der erstellt wird, indem einem übergeordneten Element des interaktiven Elements ([Anker](/de/docs/Web/HTML/Reference/Elements/a), [Schaltflächen](/de/docs/Web/HTML/Reference/Elements/button), etc.) ein Textwert zugewiesen wird. Zugängliche Namen machen das interaktive Steuerelement für den [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) zugänglich, eine API, die Informationen bereitstellt, die für Hilfstechnologien nützlich sind.

Der Text, der den zugänglichen Namen des interaktiven Steuerelements bereitstellt, kann mithilfe [einer Kombination von Eigenschaften](https://gomakethings.com/hidden-content-for-better-a11y/#hiding-the-link) verborgen werden, die es visuell vom Bildschirm entfernen, es aber für Hilfstechnologie analysierbar halten. Dies wird häufig für Schaltflächen verwendet, die sich ausschließlich auf ein Symbol zur Zweckbestimmung stützen.

- [What is an accessible name? | The Paciello Group](https://www.tpgi.com/what-is-an-accessible-name/)
- [Hidden content for better a11y | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN Understand WCAG, Leitfaden 2.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Understanding Success Criterion 2.4.4 | W3C Understand WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html)

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

- {{CSSxRef(":-moz-only-whitespace")}} – Die {{Glossary("Vendor_Prefix", "präfixierte")}} Implementierung der Änderungen in [Selectors Level 4](https://drafts.csswg.org/selectors-4/#the-empty-pseudo)
- {{CSSxRef(":blank")}}
