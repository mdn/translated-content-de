---
title: ":empty"
slug: Web/CSS/:empty
l10n:
  sourceCommit: 33a12980eb49cc795a41f15ec7a0181270ad3048
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
<div><!-- Simple Comment --></div>

<p>Element with nested empty element:</p>
<div><p></p></div>
```

> [!NOTE]
> In [Selectors Level 4](https://drafts.csswg.org/selectors-4/#the-empty-pseudo) wurde die `:empty` Pseudoklasse geändert, um wie {{CSSxRef(":-moz-only-whitespace")}} zu agieren, aber bisher unterstützt kein Browser diese Änderung.

## Syntax

```css
:empty {
  /* ... */
}
```

## Barrierefreiheit

Hilfstechnologien wie Bildschirmlesegeräte können interaktive Inhalte, die leer sind, nicht analysieren. Alle interaktiven Inhalte müssen einen zugänglichen Namen haben, der durch die Angabe eines Textwertes für das übergeordnete Element der interaktiven Steuerung ([Anker](/de/docs/Web/HTML/Element/a), [Buttons](/de/docs/Web/HTML/Element/button), etc.) erstellt wird. Zugängliche Namen machen die interaktive Steuerung für den [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) zugänglich, eine API, die Informationen übermittelt, die für Hilfstechnologien nützlich sind.

Der Text, der den zugänglichen Namen der interaktiven Steuerung bereitstellt, kann mit [einer Kombination von Eigenschaften](https://gomakethings.com/hidden-content-for-better-a11y/#hiding-the-link) verborgen werden, die ihn visuell vom Bildschirm entfernt, ihn jedoch für Hilfstechnologien analysierbar hält. Dies wird häufig für Buttons verwendet, die ausschließlich auf ein Symbol angewiesen sind, um ihre Funktion zu vermitteln.

- [Was ist ein zugänglicher Name? | The Paciello Group](https://www.tpgi.com/what-is-an-accessible-name/)
- [Verborgene Inhalte für besserer Barrierefreiheit | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN Verständnis der WCAG, Erklärung der Richtlinie 2.4](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verständnis der Erfolgskriterien 2.4.4 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html)

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
