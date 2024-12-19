---
title: ":empty"
slug: Web/CSS/:empty
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Die **`:empty`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes Element, das keine Kinder hat. Kinder können entweder Element-Knoten oder Text sein (einschließlich Leerzeichen). Kommentare, Verarbeitungsanweisungen und CSS {{cssxref("content")}} beeinflussen nicht, ob ein Element als leer betrachtet wird.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-empty.html", "tabbed-shorter")}}

> [!NOTE]
> In [Selectors Level 4](https://drafts.csswg.org/selectors-4/#the-empty-pseudo) wurde die `:empty` Pseudoklasse geändert, um wie {{CSSxRef(":-moz-only-whitespace")}} zu funktionieren, aber kein Browser unterstützt dies derzeit.

## Syntax

```css
:empty {
  /* ... */
}
```

## Barrierefreiheit

Assistive Technologien wie Bildschirmlesegeräte können keine interaktiven Inhalte verarbeiten, die leer sind. Alle interaktiven Inhalte müssen einen zugänglichen Namen haben, der erstellt wird, indem ein Textwert für das übergeordnete Element des interaktiven Elements bereitgestellt wird ([Anker](/de/docs/Web/HTML/Element/a), [Schaltflächen](/de/docs/Web/HTML/Element/button), etc.). Zugängliche Namen machen das interaktive Element für den [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) sichtbar, eine API, die Informationen zur Verfügung stellt, die für assistive Technologien nützlich sind.

Der Text, der den zugänglichen Namen des interaktiven Elements bereitstellt, kann mit [einer Kombination von Eigenschaften](https://gomakethings.com/hidden-content-for-better-a11y/#hiding-the-link) versteckt werden, die ihn visuell vom Bildschirm entfernt, ihn aber für assistive Technologien weiterhin lesbar hält. Dies wird häufig für Schaltflächen verwendet, die ausschließlich auf ein Symbol zur Zweckvermittlung angewiesen sind.

- [Was ist ein zugänglicher Name? | The Paciello Group](https://www.tpgi.com/what-is-an-accessible-name/)
- [Versteckte Inhalte für bessere Barrierefreiheit | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN Verständnis von WCAG, Leitfaden 2.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Erklärung zum Erfolgskriterium 2.4.4 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html)

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

- {{CSSxRef(":-moz-only-whitespace")}} – Die {{Glossary("Vendor_Prefix", "vorfixierte")}} Implementierung der Änderungen in [Selectors Level 4](https://drafts.csswg.org/selectors-4/#the-empty-pseudo)
- {{CSSxRef(":blank")}}
