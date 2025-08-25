---
title: ::spelling-error
slug: Web/CSS/::spelling-error
l10n:
  sourceCommit: 37482c6bb0894d047a225c24f102352f89788523
---

Das **`::spelling-error`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert einen Textabschnitt, der vom {{Glossary("user_agent", "User Agent")}} als falsch geschrieben markiert wurde.

Das `::spelling-error` Pseudo-Element folgt einem speziellen Vererbungsmodell, das für alle Hervorhebungs-Pseudo-Elemente üblich ist. Weitere Details dazu, wie diese Vererbung funktioniert, finden Sie im Abschnitt [Vererbung von Highlight-Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements#highlight_pseudo-elements_inheritance).

## Erlaubte Eigenschaften

Nur eine kleine Teilmenge von CSS-Eigenschaften kann in einer Regel mit `::spelling-error` im Selektor verwendet werden:

- {{cssxref("color")}}
- {{cssxref("background-color")}}
- {{cssxref("cursor")}}
- {{cssxref("caret-color")}}
- {{cssxref("outline")}} und deren Langformen
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

### Grundlegende Dokument-Rechtschreibprüfung

In diesem Beispiel sollten unterstützende Browser eventuell markierte Rechtschreibfehler mit den gezeigten Stilen hervorheben.

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
