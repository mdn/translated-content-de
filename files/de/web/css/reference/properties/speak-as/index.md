---
title: speak-as
slug: Web/CSS/Reference/Properties/speak-as
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{SeeCompatTable}}

Die **`speak-as`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um zu definieren, wie [HTML](/de/docs/Web/HTML) Inhalte gesprochen werden. Die ein bis drei aufgezählten Schlüsselbegriffe bestimmen die Art und Weise, wie Elemente und Texte von auralen Technologien wie {{Glossary("screen_reader", "Screenreadern")}} und digitalen Assistenten wiedergegeben werden.

Diese Eigenschaft gilt für alle Inhalte, einschließlich Pseudo-Elemente, mit der Ausnahme von {{cssxref("::marker")}} Pseudo-Elementen, die über eine {{cssxref("@counter-style")}} mit einem definierten [`speak-as`](/de/docs/Web/CSS/@counter-style/speak-as) Deskriptor konstruiert werden, welcher den Vorrang vor jedem geerbten `speak-as` Eigenschaftswert hat.

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
  - : Normale Ausspracheregeln mit Satzzeichen, die durch Pausen ersetzt werden. Zum Beispiel wird "Hello, world!" als "Hello (Pause) world (Pause)" ausgesprochen. Dies ist der Standardwert.
- `spell-out`
  - : Inhalt wird buchstabenweise buchstabiert. Zum Beispiel wird "role" als "r" "o" "l" "e" ausgesprochen.
- `literal-punctuation`
  - : Satzzeichen werden buchstäblich ausgesprochen. Zum Beispiel wird "Hello, world!" als "Hello comma world exclamation mark." ausgesprochen.
- `digits`
  - : Zahlen werden als einzelne Ziffern ausgesprochen. Zum Beispiel wird "31" als "three one" ausgesprochen.
- `no-punctuation`
  - : Inhalt wird normal ohne jegliche Satzzeichen ausgesprochen. Zum Beispiel wird "Hello, world!" als "Hello" "world" ausgesprochen.

> [!NOTE]
> Die Unterstützung der `speak-as` Eigenschaft ist begrenzt und inkonsistent über verschiedene unterstützende Technologien hinweg implementiert, wie z.B. Screenreader oder Sprachsynthesizer. Um sicherzustellen, dass ausspracheabhängige kritische Informationen benutzerfreundlich und für ein breites Publikum zugänglich bleiben, sollte nicht ausschließlich auf diese CSS-Eigenschaft vertraut werden, um zu definieren, wie diese Information aural präsentiert wird.

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

- {{cssxref("@counter-style")}} At-Regel {{cssxref("@counter-style/speak-as", "speak-as")}} Deskriptor
- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
- [CSS-Listen und -Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
