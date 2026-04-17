---
title: "`:-moz-only-whitespace` CSS-Pseudoklasse"
short-title: :-moz-only-whitespace
slug: Web/CSS/Reference/Selectors/:-moz-only-whitespace
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

{{Non-standard_header}}

> [!NOTE]
> In [Selectors Level 4](https://drafts.csswg.org/selectors-4/#the-empty-pseudo) wurde der {{CSSxRef(":empty")}}-Selektor dahingehend geändert, dass er wie `:-moz-only-whitespace` funktioniert, aber derzeit unterstützt kein Browser dies.

Die **`:-moz-only-whitespace`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) selektiert Elemente, die nur Textknoten enthalten, die ausschließlich {{Glossary("whitespace", "Leerzeichen")}} enthalten. (Dies schließt Elemente mit leeren Textknoten und Elemente ohne Kindknoten ein.)

## Syntax

```css
:-moz-only-whitespace {
  /* ... */
}
```

## Beispiele

### Einfaches `:-moz-only-whitespace`-Beispiel

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

Kurz als `:blank` in [Selectors Level 4](https://drafts.csswg.org/selectors-4/#changes-2018-02) definiert, aber dann wurde die Funktionalität in {{CSSxRef(":empty")}} integriert und {{CSSxRef(":blank")}} umdefiniert, sodass es leere {{HTMLElement("input")}} bedeutet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":blank")}}
- {{CSSxRef(":empty")}}
