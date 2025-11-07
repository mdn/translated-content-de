---
title: speak-as
slug: Web/CSS/Reference/Properties/speak-as
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

{{SeeCompatTable}}

Die **`speak-as`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um zu definieren, wie [HTML](/de/docs/Web/HTML) Inhalt gesprochen wird. Die ein bis drei enumerierten Schlüsselbegriffe bestimmen die Art und Weise, wie Elemente und Text von auditiven Technologien, wie z. B. {{Glossary("screen_reader", "Screenreadern")}} und digitalen Assistenten, wiedergegeben werden.

Diese Eigenschaft gilt für alle Inhalte, einschließlich Pseudoelemente, mit der Ausnahme von {{cssxref("::marker")}} Pseudoelementen, die über eine {{cssxref("@counter-style")}} mit einem definierten [`speak-as`](/de/docs/Web/CSS/Reference/At-rules/@counter-style/speak-as) Deskriptor erstellt werden, welcher den Vorrang vor einem geerbten `speak-as` Eigenschaftswert hat.

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
  - : Inhalt wird normal ohne jegliche Satzzeichen ausgesprochen. Zum Beispiel würde "Hello, world!" als "Hello" "world" ausgesprochen.

> [!NOTE]
> Die Unterstützung der `speak-as` Eigenschaft ist begrenzt und wird uneinheitlich über verschiedene unterstützende Technologien wie Screenreader oder Sprachsynthesizer implementiert. Um sicherzustellen, dass pronunciation-abhängige kritische Informationen nutzerfreundlich und für ein breites Publikum zugänglich bleiben, sollten Sie sich nicht ausschließlich auf diese CSS-Eigenschaft verlassen, um die Präsentation dieser Informationen auditiv zu definieren.

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
- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
