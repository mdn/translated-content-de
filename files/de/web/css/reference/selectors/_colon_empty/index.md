---
title: "`:empty` CSS-Pseudoklasse"
short-title: :empty
slug: Web/CSS/Reference/Selectors/:empty
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

Die **`:empty`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert jedes Element, das keine Kinder hat. Kinder können entweder Element-Knoten oder Text (einschließlich Leerzeichen) sein. Kommentare, Verarbeitungshinweise und CSS {{cssxref("content")}} beeinflussen nicht, ob ein Element als leer betrachtet wird.

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
> In [Selectors Level 4](https://drafts.csswg.org/selectors-4/#the-empty-pseudo) wurde die `:empty` Pseudoklasse verändert, um wie {{CSSxRef(":-moz-only-whitespace")}} zu agieren, aber kein Browser unterstützt dies derzeit.

## Syntax

```css
:empty {
  /* ... */
}
```

## Barrierefreiheit

Unterstützende Technologien wie Screenreader können interaktiven Inhalt, der leer ist, nicht parsen. Alle interaktiven Inhalte müssen einen zugänglichen Namen haben, der erzeugt wird, indem ein Textwert für das Elternelement des interaktiven Steuerungselements bereitgestellt wird ([Anker](/de/docs/Web/HTML/Reference/Elements/a), [Buttons](/de/docs/Web/HTML/Reference/Elements/button), etc.). Zugängliche Namen machen das interaktive Steuerungselement für den [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) zugänglich, eine API, die Informationen überträgt, die für unterstützende Technologien nützlich sind.

Der Text, der den zugänglichen Namen des interaktiven Steuerungselements bereitstellt, kann mittels [einer Kombination von Eigenschaften](https://gomakethings.com/hidden-content-for-better-a11y/#hiding-the-link) versteckt werden, die ihn visuell vom Bildschirm entfernt, ihn aber für unterstützende Technologien parsbar hält. Dies wird häufig für Buttons verwendet, die ausschließlich auf ein Icon setzen, um ihren Zweck zu vermitteln.

- [Was ist ein zugänglicher Name? | Vispero](https://vispero.com/resources/what-is-an-accessible-name/)
- [Versteckter Inhalt für bessere Barrierefreiheit | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN Verständnis der WCAG, Erklärung der Richtlinie 2.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verständnis des Erfolgskriteriums 2.4.4 | W3C Verständnis der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html)

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
