---
title: ::spelling-error
slug: Web/CSS/::spelling-error
l10n:
  sourceCommit: ce3d0ad5d83759e6551829b40da159fe2bb6bcfc
---

{{CSSRef}}

Das **`::spelling-error`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert ein Textsegment, das vom {{Glossary("user_agent", "User Agent")}} als falsch geschrieben markiert wurde.

## Erlaubte Eigenschaften

Nur ein kleiner Teil der CSS-Eigenschaften kann in einer Regel mit `::spelling-error` im Selektor verwendet werden:

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
::spelling-error {
  /* ... */
}
```

## Beispiele

### Grundlegende Dokument Rechtschreibprüfung

In diesem Beispiel sollten unterstützende Browser eventuelle markierte Rechtschreibfehler mit den gezeigten Stilen hervorheben.

#### HTML

```html
<p contenteditable spellcheck="true">
  My friends are coegdfgfddffbgning to the party tonight.
</p>
```

#### CSS

```css
::spelling-error {
  text-decoration: wavy red underline;
}
```

#### Ergebnis

{{EmbedLiveSample('Basic_document_spell_check', '100%', 60)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("::grammar-error")}}
- {{cssxref("text-decoration-line")}}
