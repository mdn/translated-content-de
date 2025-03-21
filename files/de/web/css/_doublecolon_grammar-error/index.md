---
title: ::grammar-error
slug: Web/CSS/::grammar-error
l10n:
  sourceCommit: ce3d0ad5d83759e6551829b40da159fe2bb6bcfc
---

{{CSSRef}}

Das **`::grammar-error`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert ein Textsegment, das vom {{Glossary("user_agent", "User-Agent")}} als grammatikalisch falsch gekennzeichnet wurde.

## Zulässige Eigenschaften

Nur eine kleine Teilmenge von CSS-Eigenschaften kann in einer Regel mit `::grammar-error` im Selektor verwendet werden:

- {{cssxref("color")}}
- {{cssxref("background-color")}}
- {{cssxref("cursor")}}
- {{cssxref("caret-color")}}
- {{cssxref("outline")}} und seine Langformen
- {{cssxref("text-decoration")}} und die zugehörigen Eigenschaften
- {{cssxref("text-emphasis-color")}}
- {{cssxref("text-shadow")}}

## Syntax

```css
::grammar-error {
  /* ... */
}
```

## Beispiele

### Grundlegende Dokument-Grammatikprüfung

In diesem Beispiel sollten unterstützende Browser alle als fehlerhaft gekennzeichneten grammatikalischen Fehler mit den gezeigten Stilen hervorheben.

#### HTML

```html
<p contenteditable spellcheck="true">
  My friends is coming to the party tonight.
</p>
```

#### CSS

```css
::grammar-error {
  text-decoration: underline red;
  color: red;
}
```

#### Ergebnis

{{EmbedLiveSample('Basic_document_grammar_check', '100%', 60)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("::spelling-error")}}
- {{cssxref("text-decoration-line")}}
