---
title: ":empty"
slug: Web/CSS/:empty
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Die **`:empty`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes Element, das keine Kinder hat. Kinder können entweder Elementknoten oder Text (einschließlich Leerzeichen) sein. Kommentare, Verarbeitungshinweise und CSS {{cssxref("content")}} beeinflussen nicht, ob ein Element als leer betrachtet wird.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-empty.html", "tabbed-shorter")}}

> [!NOTE]
> In [Selectors Level 4](https://drafts.csswg.org/selectors-4/#the-empty-pseudo) wurde die `:empty`-Pseudoklasse so geändert, dass sie sich wie {{CSSxRef(":-moz-only-whitespace")}} verhält, aber derzeit unterstützt kein Browser dies.

## Syntax

```css
:empty {
  /* ... */
}
```

## Barrierefreiheit

Hilfstechnologien wie Screenreader können keine interaktiven Inhalte analysieren, die leer sind. Alle interaktiven Inhalte müssen einen zugänglichen Namen haben, der durch die Bereitstellung eines Textwerts für das übergeordnete Element der interaktiven Steuerung ([Anker](/de/docs/Web/HTML/Element/a), [Buttons](/de/docs/Web/HTML/Element/button) usw.) erstellt wird. Zugängliche Namen machen die interaktive Steuerung im [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) sichtbar, einer API, die Informationen für Hilfstechnologien bereitstellt.

Der Text, der den zugänglichen Namen der interaktiven Steuerung bereitstellt, kann mithilfe [einer Kombination von Eigenschaften](https://gomakethings.com/hidden-content-for-better-a11y/#hiding-the-link) versteckt werden, die ihn visuell vom Bildschirm entfernt, ihn aber für Hilfstechnologien weiterhin analysierbar hält. Dies wird häufig für Buttons verwendet, die sich ausschließlich auf ein Symbol zur Zweckvermittlung stützen.

- [Was ist ein zugänglicher Name? | The Paciello Group](https://www.tpgi.com/what-is-an-accessible-name/)
- [Versteckter Inhalt für bessere Barrierefreiheit | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN erklärt WCAG, Richtlinie 2.4](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Erklärung des Erfolgskriteriums 2.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html)

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
