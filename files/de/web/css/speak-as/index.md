---
title: speak-as
slug: Web/CSS/speak-as
l10n:
  sourceCommit: fa090092cae2116d93022b9e2a0194c744556aba
---

{{CSSRef}}

Die **`speak-as`** [CSS](/de/docs/Web/CSS)-Eigenschaft wird verwendet, um festzulegen, wie [HTML](/de/docs/Web/HTML)-Inhalte gesprochen werden. Die ein bis drei aufgezählten Schlüsselbegriffe bestimmen die Art und Weise, wie Elemente und Text von audiellen Technologien wie {{Glossary("screen_reader", "Screenreadern")}} und digitalen Assistenten wiedergegeben werden.

Diese Eigenschaft gilt für alle Inhalte, einschließlich Pseudo-Elemente, mit Ausnahme der {{cssxref("::marker")}} Pseudo-Elemente, die über eine {{cssxref("@counter-style")}} mit einem definierten [`speak-as`](/de/docs/Web/CSS/@counter-style/speak-as)-Deskriptor erstellt wurden, dieser hat Vorrang vor jedem geerbten `speak-as`-Eigenschaftswert.

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
  - : Normale Ausspracheregeln mit Satzzeichen, die durch Pausen ersetzt werden. Zum Beispiel würde "Hello, world!" als "Hello (Pause) world (Pause)" ausgesprochen. Dies ist der Standardwert.
- `spell-out`
  - : Inhalt wird buchstabiert. Zum Beispiel würde "role" als "r" "o" "l" "e" ausgesprochen.
- `literal-punctuation`
  - : Satzzeichen werden buchstäblich ausgesprochen. Zum Beispiel würde "Hello, world!" als "Hello Komma world Ausrufezeichen" ausgesprochen.
- `digits`
  - : Zahlen werden als einzelne Ziffern ausgesprochen. Zum Beispiel würde "31" als "drei eins" ausgesprochen.
- `no-punctuation`
  - : Inhalt wird normal ohne Satzzeichen ausgesprochen. Zum Beispiel würde "Hello, world!" als "Hello" "world" ausgesprochen.

> [!NOTE]
> Die Unterstützung der `speak-as`-Eigenschaft ist begrenzt und inkonsistent in verschiedenen assistiven Technologien, wie Screenreadern oder Sprachsynthesizern, implementiert. Um sicherzustellen, dass alle ausspracheabhängigen kritischen Informationen benutzerfreundlich und für ein breites Publikum zugänglich bleiben, verlassen Sie sich nicht ausschließlich auf diese CSS-Eigenschaft, um festzulegen, wie diese Informationen audiovisuell präsentiert werden.

## Formale Definition

{{CSSInfo}}

## Formaler Syntax

{{CSSSyntax}}

## Beispiele

### HTML

```HTML
  <p class="normal">Hello, world! I'm 25.</p>
  <p class="spell-out">Hello, world! I'm 25.</p>
  <p class="literal-punctuation">Hello, world! I'm 25.</p>
  <p class="no-punctuation">Hello, world! I'm 25.</p>
  <p class="digits">Hello, world! I'm 25.</p>
  <p class="multi">Hello, world! I'm 25.</p>
```

### CSS

```CSS
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
