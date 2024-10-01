---
title: ":-moz-only-whitespace"
slug: Web/CSS/:-moz-only-whitespace
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}{{Non-standard_header}}

> [!NOTE]
> In [Selectors Level 4](https://drafts.csswg.org/selectors-4/#the-empty-pseudo), der {{CSSxRef(":empty")}}-Selektor wurde geändert, um wie `:-moz-only-whitespace` zu funktionieren, aber derzeit unterstützt kein Browser dies.

Die **`:-moz-only-whitespace`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wählt Elemente aus, die nur Textknoten enthalten, die nur {{Glossary("whitespace", "Leerraum")}} enthalten. (Dies schließt Elemente mit leeren Textknoten und Elemente ohne Kindknoten ein.)

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

{{EmbedLiveSample('Simple_-moz-only-whitespace_example', '100%', 50)}}

## Spezifikationen

Kurz als `:blank` in [Selectors Level 4](https://drafts.csswg.org/selectors-4/#changes-2018-02) definiert, wurde die Funktionalität dann in {{CSSxRef(":empty")}} integriert und {{CSSxRef(":blank")}} neu definiert, um leere {{HTMLElement("input")}} zu bedeuten.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":blank")}}
- {{CSSxRef(":empty")}}
