---
title: ":-moz-only-whitespace"
slug: Web/CSS/:-moz-only-whitespace
l10n:
  sourceCommit: 0326d9301650304ef67a56e88b542b160093042e
---

{{CSSRef}}{{Non-standard_header}}

> [!NOTE]
> In [Selectors Level 4](https://drafts.csswg.org/selectors-4/#the-empty-pseudo) wurde der {{CSSxRef(":empty")}} Selektor geändert, um wie `:-moz-only-whitespace` zu funktionieren, aber bislang unterstützt kein Browser diese Änderung.

Die **`:-moz-only-whitespace`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wählt Elemente aus, die nur Textknoten enthalten, welche ausschließlich {{Glossary("whitespace", "Leerzeichen")}} beinhalten. (Dies schließt Elemente mit leeren Textknoten und Elemente ohne Kindelemente ein.)

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

Kurz als `:blank` in [Selectors Level 4](https://drafts.csswg.org/selectors-4/#changes-2018-02) definiert, wurde die Funktionalität dann in {{CSSxRef(":empty")}} integriert und {{CSSxRef(":blank")}} neu definiert, um ein leeres {{HTMLElement("input")}} zu bedeuten.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":blank")}}
- {{CSSxRef(":empty")}}
