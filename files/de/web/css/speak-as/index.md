---
title: speak-as
slug: Web/CSS/speak-as
l10n:
  sourceCommit: 012af99134ac4fd55f94005ca379ccd9f8f43c6e
---

{{CSSRef}}

Die **`speak-as`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um zu definieren, wie [HTML](/de/docs/Web/HTML) Inhalte gesprochen werden. Die ein bis drei enumerierten Schlüsselkategorien bestimmen die Art und Weise, wie Elemente und Texte von auralen Technologien, wie zum Beispiel {{Glossary("screen_reader", "Screenreadern")}} und digitalen Assistenten, wiedergegeben werden.

Diese Eigenschaft gilt für alle Inhalte, einschließlich Pseudoelementen, mit Ausnahme von {{cssxref("::marker")}} Pseudoelementen, die über eine {{cssxref("@counter-style")}} mit einem definierten [`speak-as`](/de/docs/Web/CSS/@counter-style/speak-as) Deskriptor erstellt werden. Diese haben Vorrang vor einem geerbten `speak-as` Eigenschaftswert.

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
  - : Normale Ausspracheregeln mit durch Pausen ersetzten Satzzeichen. Zum Beispiel würde "Hello, world!" als "Hello (Pause) world (Pause)" ausgesprochen. Dies ist der Standardwert.
- `spell-out`
  - : Der Inhalt wird buchstabiert. Zum Beispiel würde "role" als "r" "o" "l" "e" ausgesprochen.
- `literal-punctuation`
  - : Satzzeichen werden wörtlich ausgesprochen. Zum Beispiel würde "Hello, world!" als "Hello Komma world Ausrufezeichen." ausgesprochen.
- `digits`
  - : Zahlen werden als einzelne Ziffern ausgesprochen. Zum Beispiel würde "31" als "drei eins" ausgesprochen.
- `no-punctuation`
  - : Inhalt wird normal, ohne jegliche Satzzeichen, ausgesprochen. Zum Beispiel würde "Hello, world!" als "Hello" "world" ausgesprochen.

> [!NOTE]
> Die Unterstützung der `speak-as` Eigenschaft ist begrenzt und uneinheitlich über verschiedene unterstützende Technologien, wie Screenreader oder Sprachsynthesizer, implementiert. Damit alle von der Aussprache abhängigen wichtigen Informationen benutzerfreundlich und für ein breites Publikum zugänglich bleiben, verlassen Sie sich nicht ausschließlich auf diese CSS-Eigenschaft, um festzulegen, wie diese Informationsinhalte auditiv präsentiert werden.

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
- [CSS Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
- [CSS Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
