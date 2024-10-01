---
title: "::spelling-error"
slug: Web/CSS/::spelling-error
l10n:
  sourceCommit: d6defd737678e99d62bf838ad12eba532567fba5
---

{{CSSRef}}

Das **`::spelling-error`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert ein Textsegment, das vom {{Glossary("user_agent", "Benutzeragenten")}} als falsch geschrieben markiert wurde.

## Zulässige Eigenschaften

Nur eine kleine Teilmenge von CSS-Eigenschaften kann in einer Regel mit `::spelling-error` im Selektor verwendet werden:

- {{cssxref("color")}}
- {{cssxref("background-color")}}
- {{cssxref("cursor")}}
- {{cssxref("caret-color")}}
- {{cssxref("outline")}} und seine Untereigenschaften
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

### Einfache Rechtschreibprüfung im Dokument

In diesem Beispiel sollten unterstützte Browser alle markierten Rechtschreibfehler mit den gezeigten Stilen hervorheben.

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

{{EmbedLiveSample('Simple_document_spell_check', '100%', 60)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("::grammar-error")}}
