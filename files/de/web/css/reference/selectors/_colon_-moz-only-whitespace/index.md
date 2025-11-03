---
title: :-moz-only-whitespace
slug: Web/CSS/Reference/Selectors/:-moz-only-whitespace
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{Non-standard_header}}

> [!NOTE]
> In [Selectors Level 4](https://drafts.csswg.org/selectors-4/#the-empty-pseudo), wurde der {{CSSxRef(":empty")}}-Selektor so geändert, dass er wie `:-moz-only-whitespace` funktioniert, aber derzeit unterstützt kein Browser dies.

Die **`:-moz-only-whitespace`** [CSS](/de/docs/Web/CSS) [Pseudo-Klasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) trifft auf Elemente zu, die nur Textknoten enthalten, die nur {{Glossary("whitespace", "Leerzeichen")}} enthalten. (Dies schließt Elemente mit leeren Textknoten und Elemente ohne Knoten ein.)

## Syntax

```css
:-moz-only-whitespace {
  /* ... */
}
```

## Beispiele

### Einfaches Beispiel für :-moz-only-whitespace

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

Kurz als `:blank` in [Selectors Level 4](https://drafts.csswg.org/selectors-4/#changes-2018-02) definiert, aber dann wurde die Funktionalität in {{CSSxRef(":empty")}} integriert und {{CSSxRef(":blank")}} neu definiert, um leere {{HTMLElement("input")}} zu bedeuten.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":blank")}}
- {{CSSxRef(":empty")}}
