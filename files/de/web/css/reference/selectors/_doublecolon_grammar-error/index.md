---
title: ::grammar-error
slug: Web/CSS/Reference/Selectors/::grammar-error
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Das **`::grammar-error`** [CSS](/de/docs/Web/CSS)-[Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) repräsentiert ein Textsegment, das vom {{Glossary("user_agent", "User Agent")}} als grammatikalisch inkorrekt markiert wurde.

Das `::grammar-error`-Pseudoelement folgt einem speziellen Vererbungsmodell, das für alle Highlight-Pseudoelemente üblich ist. Weitere Details zur Funktionsweise dieser Vererbung finden Sie im Abschnitt [Vererbung von Highlight-Pseudoelementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#highlight_pseudo-elements_inheritance).

## Erlaubte Eigenschaften

Nur eine kleine Untermenge von CSS-Eigenschaften kann in einer Regel mit `::grammar-error` im Selektor verwendet werden:

- {{cssxref("color")}}
- {{cssxref("background-color")}}
- {{cssxref("cursor")}}
- {{cssxref("caret-color")}}
- {{cssxref("outline")}} und seine Langformen
- {{cssxref("text-decoration")}} und seine zugehörigen Eigenschaften
- {{cssxref("text-emphasis-color")}}
- {{cssxref("text-shadow")}}

## Syntax

```css
::grammar-error {
  /* ... */
}
```

## Beispiele

### Grundlegende Dokumenten-Grammatikprüfung

In diesem Beispiel sollten unterstützende Browser alle als grammatikalisch falsch markierten Fehler mit den gezeigten Stilen hervorheben.

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
