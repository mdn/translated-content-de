---
title: speak-as
slug: Web/CSS/speak-as
l10n:
  sourceCommit: 9cc1f40340f37fa05d6573cc519c9844fa4940be
---

{{CSSRef}}{{SeeCompatTable}}

Die **`speak-as`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um zu definieren, wie [HTML](/de/docs/Web/HTML) Inhalte gesprochen werden. Die ein bis drei enumerierten Schlüsselbegriffe bestimmen die Art und Weise, wie Elemente und Text von auralen Technologien, wie z.B. {{Glossary("screen_reader", "Screenreadern")}} und digitalen Assistenten, wiedergegeben werden.

Diese Eigenschaft gilt für alle Inhalte, einschließlich Pseudo-Elemente, mit Ausnahme von {{cssxref("::marker")}} Pseudo-Elementen, die über eine {{cssxref("@counter-style")}} mit einem definierten [`speak-as`](/de/docs/Web/CSS/@counter-style/speak-as) Deskriptor konstruiert wurden, welches Vorrang vor jedem geerbten `speak-as` Eigenschaftswert hat.

## Syntax

```css
/* single value syntax */
speak-as: normal;
speak-as: spell-out;
speak-as: literal-punctuation;
speak-as: digits;
speak-as: no-punctuation;

/* multiple value syntax */
speak-as: spell-out literal-punctuation;
speak-as: spell-out no-punctuation;
speak-as: digits literal-punctuation;
speak-as: digits no-punctuation;
speak-as: spell-out digits literal-punctuation;
speak-as: spell-out digits no-punctuation;
```

### Werte

- `normal`
  - : Normale Ausspracheregeln mit durch Pausen ersetzter Interpunktion. Zum Beispiel würde "Hello, world!" als "Hello (Pause) world (Pause)" ausgesprochen werden. Dies ist der Standardwert.
- `spell-out`
  - : Inhalte werden buchstabenweise buchstabiert. Zum Beispiel würde "role" als "r" "o" "l" "e" ausgesprochen werden.
- `literal-punctuation`
  - : Satzzeichen werden buchstäblich ausgesprochen. Zum Beispiel würde "Hello, world!" als "Hello comma world exclamation mark." ausgesprochen werden.
- `digits`
  - : Zahlen werden als einzelne Ziffern ausgesprochen. Zum Beispiel würde "31" als "three one" ausgesprochen werden.
- `no-punctuation`
  - : Inhalte werden normal ohne jegliche Interpunktion ausgesprochen. Zum Beispiel würde "Hello, world!" als "Hello" "world" ausgesprochen werden.

> [!NOTE]
> Die Unterstützung der `speak-as` Eigenschaft ist begrenzt und in verschiedenen assistiven Technologien, wie z.B. Screenreadern oder Sprachsynthesizern, inkonsistent implementiert. Um sicherzustellen, dass alle auf der Aussprache basierenden kritischen Informationen benutzerfreundlich und einem breiten Publikum zugänglich bleiben, sollten Sie nicht ausschließlich auf diese CSS-Eigenschaft vertrauen, um festzulegen, wie diese Informationsinhalte aurally präsentiert werden.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### HTML

```html
<p class="normal">Hello, world! I'm 25.</p>
<p class="spell-out">Hello, world! I'm 25.</p>
<p class="literal-punctuation">Hello, world! I'm 25.</p>
<p class="no-punctuation">Hello, world! I'm 25.</p>
<p class="digits">Hello, world! I'm 25.</p>
<p class="multi">Hello, world! I'm 25.</p>
```

### CSS

```css
.normal {
  speak-as: normal;
}

.spell-out {
  speak-as: spell-out;
}

.literal-punctuation {
  speak-as: literal-punctuation;
}

.no-punctuation {
  speak-as: no-punctuation;
}

.digits {
  speak-as: digits;
}
.multi {
  speak-as: literal-punctuation digits;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@counter-style")}} at-rule {{cssxref("@counter-style/speak-as", "speak-as")}} Deskriptor
- [CSS counter styles](/de/docs/Web/CSS/CSS_counter_styles) Modul
- [CSS lists and counters](/de/docs/Web/CSS/CSS_lists) Modul
- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
