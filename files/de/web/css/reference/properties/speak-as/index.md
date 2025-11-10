---
title: speak-as
slug: Web/CSS/Reference/Properties/speak-as
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

Die **`speak-as`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um zu definieren, wie [HTML](/de/docs/Web/HTML) Inhalt gesprochen wird. Die ein bis drei aufgezählten Schlüsselbegriffe bestimmen die Art und Weise, wie Elemente und Texte durch Audio-Technologien wie {{Glossary("screen_reader", "Screenreader")}} und digitale Assistenten wiedergegeben werden.

Diese Eigenschaft gilt für alle Inhalte, einschließlich Pseudo-Elementen, mit der Ausnahme von {{cssxref("::marker")}} Pseudo-Elementen, die über einen {{cssxref("@counter-style")}} mit einem definierten [`speak-as`](/de/docs/Web/CSS/Reference/At-rules/@counter-style/speak-as) Deskriptor konstruiert sind, welcher Vorrang vor jedem geerbten `speak-as` Eigenschaftswert hat.

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
  - : Normale Aussprache-Regeln mit durch Pausen ersetzter Interpunktion. Zum Beispiel würde "Hello, world!" als "Hello (Pause) world (Pause)" ausgesprochen. Dies ist der Standardwert.
- `spell-out`
  - : Inhalt wird Buchstabe für Buchstabe buchstabiert. Zum Beispiel würde "role" als "r" "o" "l" "e" ausgesprochen.
- `literal-punctuation`
  - : Interpunktionszeichen werden buchstäblich ausgesprochen. Zum Beispiel würde "Hello, world!" als "Hello Komma world Ausrufezeichen" ausgesprochen.
- `digits`
  - : Zahlen werden als einzelne Ziffern ausgesprochen. Zum Beispiel würde "31" als "drei eins" ausgesprochen.
- `no-punctuation`
  - : Inhalt wird normal ohne jegliche Interpunktion ausgesprochen. Zum Beispiel würde "Hello, world!" als "Hello" "world" ausgesprochen.

> [!NOTE]
> Die Unterstützung der `speak-as` Eigenschaft ist begrenzt und wird inkonsistent über verschiedene unterstützende Technologien, wie Screenreader oder Sprachsynthesizer, implementiert. Um sicherzustellen, dass ausspracheabhängige kritische Informationen benutzerfreundlich und für ein breites Publikum zugänglich bleiben, sollten Sie sich nicht ausschließlich auf diese CSS-Eigenschaft verlassen, um zu definieren, wie diese Informationsinhalte auditiv präsentiert werden.

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

- {{cssxref("@counter-style")}} Regel {{cssxref("@counter-style/speak-as", "speak-as")}} Deskriptor
- [CSS-Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles) Modul
- [CSS-Listen und Zähler](/de/docs/Web/CSS/Guides/Lists) Modul
- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
