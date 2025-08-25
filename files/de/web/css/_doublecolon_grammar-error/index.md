---
title: ::grammar-error
slug: Web/CSS/::grammar-error
l10n:
  sourceCommit: 37482c6bb0894d047a225c24f102352f89788523
---

Das **`::grammar-error`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert ein Textsegment, das der {{Glossary("user_agent", "User-Agent")}} als grammatikalisch inkorrekt markiert hat.

Das `::grammar-error` Pseudo-Element folgt einem speziellen Vererbungsmodell, das allen Hervorhebungs-Pseudo-Elementen gemeinsam ist. Weitere Details dazu, wie diese Vererbung funktioniert, finden Sie im Abschnitt [Hervorhebungs-Pseudo-Elemente Vererbung](/de/docs/Web/CSS/Pseudo-elements#highlight_pseudo-elements_inheritance).

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

### Grundlegende Dokumenten-Grammatikprüfung

In diesem Beispiel sollten unterstützende Browser eventuell grammatikalische Fehler mit den gezeigten Stilen hervorheben.

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
