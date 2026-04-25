---
title: "`::grammar-error` CSS pseudo-element"
short-title: ::grammar-error
slug: Web/CSS/Reference/Selectors/::grammar-error
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

Das **`::grammar-error`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) repräsentiert einen Textabschnitt, den der {{Glossary("user_agent", "User-Agent")}} als grammatikalisch inkorrekt markiert hat.

Das `::grammar-error` Pseudoelement folgt einem speziellen Vererbungsmuster, das für alle Hervorhebungs-Pseudoelemente gilt. Weitere Details zur Funktionsweise dieser Vererbung finden Sie im Abschnitt [Vererbung von Hervorhebungs-Pseudoelementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#highlight_pseudo-elements_inheritance).

## Zulässige Eigenschaften

Nur eine kleine Teilmenge von CSS-Eigenschaften kann in einer Regel mit `::grammar-error` im Selektor verwendet werden:

- {{cssxref("color")}}
- {{cssxref("background-color")}}
- {{cssxref("cursor")}}
- {{cssxref("caret-color")}}
- {{cssxref("outline")}} und seine Einzelheiten
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

### Grundlegende Dokumentengrammatikprüfung

In diesem Beispiel sollten unterstützende Browser jegliche markierten grammatikalischen Fehler mit den gezeigten Stilen hervorheben.

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
