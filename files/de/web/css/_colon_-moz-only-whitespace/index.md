---
title: :-moz-only-whitespace
slug: Web/CSS/:-moz-only-whitespace
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}{{Non-standard_header}}

> [!NOTE]
> In [Selectors Level 4](https://drafts.csswg.org/selectors-4/#the-empty-pseudo) wurde der {{CSSxRef(":empty")}} Selektor so geändert, dass er wie `:-moz-only-whitespace` funktioniert. Allerdings unterstützt derzeit kein Browser diese Funktionalität.

Die **`:-moz-only-whitespace`** [CSS](/de/docs/Web/CSS) [Pseudo-Klasse](/de/docs/Web/CSS/Pseudo-classes) selektiert Elemente, die nur Textknoten enthalten, die ausschließlich {{Glossary("whitespace", "Leerraum")}} enthalten. (Dies schließt Elemente mit leeren Textknoten und Elemente ohne Knoten-Kinder ein.)

## Syntax

```css
:-moz-only-whitespace {
  /* ... */
}
```

## Beispiele

### Einfaches :-moz-only-whitespace-Beispiel

#### HTML

```html-nolint
<div> </div>
```

#### CSS

```css
div {
  border: 4px solid red;
}

:-moz-only-whitespace {
  border-color: lime;
}
```

#### Ergebnis

{{EmbedLiveSample('Basic_-moz-only-whitespace_example', '100%', 50)}}

## Spezifikationen

Kurzzeitig als `:blank` in [Selectors Level 4](https://drafts.csswg.org/selectors-4/#changes-2018-02) definiert, wurde die Funktionalität anschließend in {{CSSxRef(":empty")}} integriert, und {{CSSxRef(":blank")}} wurde neu definiert, um leere {{HTMLElement("input")}} zu bezeichnen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":blank")}}
- {{CSSxRef(":empty")}}
