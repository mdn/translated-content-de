---
title: ::spelling-error
slug: Web/CSS/Reference/Selectors/::spelling-error
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Der **`::spelling-error`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) repräsentiert ein Textsegment, das vom {{Glossary("user_agent", "User-Agent")}} als falsch geschrieben markiert wurde.

Das `::spelling-error` Pseudo-Element folgt einem speziellen Vererbungsmodell, das allen Hervorhebungs-Pseudo-Elementen gemein ist. Weitere Details dazu, wie diese Vererbung funktioniert, finden Sie im Abschnitt [Hervorhebungs-Pseudo-Elemente Vererbung](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#highlight_pseudo-elements_inheritance).

## Erlaubte Eigenschaften

Nur eine kleine Teilmenge von CSS-Eigenschaften kann in einer Regel mit `::spelling-error` im Selektor verwendet werden:

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

### Grundlegende Dokumenten-Rechtschreibprüfung

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

{{EmbedLiveSample('Basic_document_spell_check', '100%', 60)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("::grammar-error")}}
- {{cssxref("text-decoration-line")}}
