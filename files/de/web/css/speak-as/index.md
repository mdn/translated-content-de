---
title: speak-as
slug: Web/CSS/speak-as
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{SeeCompatTable}}

Die **`speak-as`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um zu definieren, wie [HTML](/de/docs/Web/HTML) Inhalt gesprochen wird. Die ein bis drei aufgezählten Schlüsselbegriffe bestimmen die Art und Weise, wie Elemente und Text von audiovisuellen Technologien wie {{Glossary("screen_reader", "Screen Readern")}} und digitalen Assistenten wiedergegeben werden.

Diese Eigenschaft gilt für alle Inhalte, einschließlich Pseudo-Elementen, mit Ausnahme der {{cssxref("::marker")}} Pseudo-Elemente, die mittels eines {{cssxref("@counter-style")}} erzeugt werden und einen definierten [`speak-as`](/de/docs/Web/CSS/@counter-style/speak-as) Deskriptor besitzen, welcher Vorrang vor jedem geerbten Wert der `speak-as` Eigenschaft hat.

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
  - : Normale Ausspracheregeln mit durch Pausen ersetzter Interpunktion. Zum Beispiel wird "Hello, world!" als "Hello (Pause) world (Pause)" ausgesprochen. Dies ist der Standardwert.
- `spell-out`
  - : Inhalt wird buchstabiert. Zum Beispiel wird "role" als "r" "o" "l" "e" ausgesprochen.
- `literal-punctuation`
  - : Satzzeichen werden buchstäblich ausgesprochen. Zum Beispiel wird "Hello, world!" als "Hello comma world exclamation mark" ausgesprochen.
- `digits`
  - : Zahlen werden als einzelne Ziffern ausgesprochen. Zum Beispiel wird "31" als "three one" ausgesprochen.
- `no-punctuation`
  - : Inhalt wird normal ohne Satzzeichen ausgesprochen. Zum Beispiel wird "Hello, world!" als "Hello" "world" ausgesprochen.

> [!NOTE]
> Die Unterstützung der `speak-as` Eigenschaft ist begrenzt und wird in verschiedenen unterstützenden Technologien, wie Screen Readern oder Sprachsynthesizern, inkonsistent umgesetzt. Um sicherzustellen, dass jegliche von der Aussprache abhängige kritische Informationen benutzerfreundlich und für ein breites Publikum zugänglich bleiben, sollten Sie sich nicht ausschließlich auf diese CSS Eigenschaft verlassen, um die Präsentation von Informationen auditiv zu definieren.

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
- Modul [CSS counter styles](/de/docs/Web/CSS/CSS_counter_styles)
- Modul [CSS lists and counters](/de/docs/Web/CSS/CSS_lists)
- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
