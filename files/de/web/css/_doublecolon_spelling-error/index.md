---
title: "::Rechtschreibfehler"
slug: Web/CSS/::spelling-error
l10n:
  sourceCommit: d6defd737678e99d62bf838ad12eba532567fba5
---

{{CSSRef}}

Das **`::spelling-error`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert einen Textabschnitt, den der {{glossary("user agent")}} als falsch geschrieben markiert hat.

## Erlaubte Eigenschaften

Nur eine kleine Untermenge von CSS-Eigenschaften kann in einer Regel mit `::spelling-error` im Selektor verwendet werden:

- {{cssxref("color")}}
- {{cssxref("background-color")}}
- {{cssxref("cursor")}}
- {{cssxref("caret-color")}}
- {{cssxref("outline")}} und seine Langformen
- {{cssxref("text-decoration")}} und die dazugehörigen Eigenschaften
- {{cssxref("text-emphasis-color")}}
- {{cssxref("text-shadow")}}

## Syntax

```css
::spelling-error {
  /* ... */
}
```

## Beispiele

### Einfache Dokumenten-Rechtschreibprüfung

In diesem Beispiel sollten unterstützende Browser alle markierten Rechtschreibfehler mit den gezeigten Stilen hervorheben.

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
