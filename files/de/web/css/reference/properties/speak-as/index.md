---
title: "`speak-as` CSS property"
short-title: speak-as
slug: Web/CSS/Reference/Properties/speak-as
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{SeeCompatTable}}

Die **`speak-as`** [CSS](/de/docs/Web/CSS)-Eigenschaft wird verwendet, um zu definieren, wie [HTML](/de/docs/Web/HTML)-Inhalte gesprochen werden. Die ein bis drei aufgeführten Schlüsselbegriffe bestimmen die Art und Weise, wie Elemente und Text von auditiven Technologien, wie {{Glossary("screen_reader", "Screenreadern")}} und digitalen Assistenten, wiedergegeben werden.

Diese Eigenschaft gilt für alle Inhalte, einschließlich Pseudo-Elementen, mit Ausnahme der {{cssxref("::marker")}}-Pseudo-Elemente, die über ein {{cssxref("@counter-style")}}-Stylesheet mit einem definierten [`speak-as`](/de/docs/Web/CSS/Reference/At-rules/@counter-style/speak-as)-Deskriptor konstruiert sind. Dieser Deskriptor hat Vorrang vor jedem geerbten `speak-as`-Eigenschaftswert.

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
  - : Normale Ausspracheregeln mit durch Pausen ersetzter Interpunktion. Zum Beispiel würde "Hallo, Welt!" als "Hallo (Pause) Welt (Pause)" ausgesprochen. Dies ist der Standardwert.
- `spell-out`
  - : Inhalt wird buchstabenweise buchstabiert. Zum Beispiel würde "Rolle" als "r" "o" "l" "e" ausgesprochen.
- `literal-punctuation`
  - : Interpunktionszeichen werden wörtlich buchstabiert. Zum Beispiel würde "Hallo, Welt!" als "Hallo Komma Welt Ausrufezeichen" ausgesprochen.
- `digits`
  - : Zahlen werden als einzelne Ziffern ausgesprochen. Zum Beispiel würde "31" als "drei eins" ausgesprochen.
- `no-punctuation`
  - : Inhalt wird normal ohne jegliche Interpunktion ausgesprochen. Zum Beispiel würde "Hallo, Welt!" als "Hallo" "Welt" ausgesprochen.

> [!NOTE]
> Die Unterstützung der `speak-as`-Eigenschaft ist begrenzt und in verschiedenen assistiven Technologien, wie Screenreadern oder Sprachsynthesizern, uneinheitlich implementiert. Um sicherzustellen, dass alle von der Aussprache abhängigen wichtigen Informationen benutzerfreundlich und für ein breites Publikum zugänglich bleiben, verlassen Sie sich nicht ausschließlich auf diese CSS-Eigenschaft, um festzulegen, wie diese Information akustisch präsentiert wird.

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
- [CSS Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles) Modul
- [CSS Listen und Zähler](/de/docs/Web/CSS/Guides/Lists) Modul
- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
