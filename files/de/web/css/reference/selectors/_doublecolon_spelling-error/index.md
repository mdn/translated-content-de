---
title: "`::spelling-error` CSS pseudo-element"
short-title: ::spelling-error
slug: Web/CSS/Reference/Selectors/::spelling-error
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

Das **`::spelling-error`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) repräsentiert ein Textsegment, das von der {{Glossary("user_agent", "Benutzer-Agent")}} als falsch geschrieben markiert wurde.

Das `::spelling-error`-Pseudoelement folgt einem speziellen Vererbungsmodell, das allen Hervorhebungs-Pseudoelementen gemeinsam ist. Weitere Einzelheiten zur Funktionsweise dieser Vererbung finden Sie im Abschnitt [Vererbung von Hervorhebungs-Pseudoelementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#highlight_pseudo-elements_inheritance).

## Zulässige Eigenschaften

Nur eine kleine Teilmenge von CSS-Eigenschaften kann in einer Regel mit `::spelling-error` im Selektor verwendet werden:

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

### Grundlegende Dokument-Rechtschreibprüfung

In diesem Beispiel sollten unterstützende Browser jegliche markierten Rechtschreibfehler mit den gezeigten Stilen hervorheben.

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
