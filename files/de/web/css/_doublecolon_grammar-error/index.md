---
title: "::Grammatikfehler"
slug: Web/CSS/::grammar-error
l10n:
  sourceCommit: d6defd737678e99d62bf838ad12eba532567fba5
---

{{CSSRef}}

Das **`::grammar-error`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert einen Textabschnitt, den der {{glossary("user agent")}} als grammatisch inkorrekt markiert hat.

## Erlaubte Eigenschaften

Nur ein kleiner Teil der CSS-Eigenschaften kann in einer Regel mit `::grammar-error` im Selektor verwendet werden:

- {{cssxref("color")}}
- {{cssxref("background-color")}}
- {{cssxref("cursor")}}
- {{cssxref("caret-color")}}
- {{cssxref("outline")}} und seine Langformen
- {{cssxref("text-decoration")}} und die damit verbundenen Eigenschaften
- {{cssxref("text-emphasis-color")}}
- {{cssxref("text-shadow")}}

## Syntax

```css
::grammar-error {
  /* ... */
}
```

## Beispiele

### Einfache Dokumenten-Grammatikprüfung

In diesem Beispiel sollten unterstützende Browser alle markierten grammatikalischen Fehler mit den gezeigten Stilen hervorheben.

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

{{EmbedLiveSample('Simple_document_grammar_check', '100%', 60)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("::spelling-error")}}
