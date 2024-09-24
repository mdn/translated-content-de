---
title: Präfix
slug: Web/CSS/@counter-style/prefix
l10n:
  sourceCommit: 6deab4bdc0b2563d1e32047c4f5b25c3a8f02850
---

{{CSSRef}}

Der **`prefix`**-Deskriptor der {{cssxref('@counter-style')}}-Regel legt fest, welcher Inhalt am Anfang der Markerdarstellung des Zählers hinzugefügt wird.

Wenn der Zählerwert negativ ist, kommt das `prefix` vor dem Minuszeichen und allen anderen `<symbol>`en, die durch den {{cssxref("@counter-style/negative", "negative")}}-Deskriptor hinzugefügt werden.

## Syntax

```css
/* <symbol> Wert: string, image oder identifier */
prefix: "»";
prefix: "Page ";
prefix: url(bullet.png);
```

### Werte

Der **`prefix`**-Deskriptor nimmt als Wert ein einzelnes `<symbol>` an:

- `<symbol>`
  - : Gibt ein `<symbol>` an — ein {{cssxref("&lt;string&gt;")}}, {{cssxref("&lt;image&gt;")}}, oder {{cssxref("&lt;custom-ident&gt;")}} — das der Markerdarstellung vorangestellt wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Hinzufügen eines Präfixes zu einem Zähler

In diesem Beispiel wird jede Zählernummer mit "Book " (mit einem Leerzeichen) vorangestellt und gefolgt von einem Doppelpunkt (`:`). Der Doppelpunkt wird mit dem {{cssxref("@counter-style/suffix", "suffix")}}-Deskriptor hinzugefügt.

#### HTML

```html
<ol class="books">
  <li>Flamer, von Mike Curato</li>
  <li>Gender Queer: A Memoir, von Maia Kobabe</li>
  <li>Tricks, von Ellen Hopkins</li>
  <li>The Handmaid's Tale: The Graphic Novel, von Margaret Atwood</li>
  <li>Crank, von Ellen Hopkins</li>
</ol>
```

#### CSS

```css
@counter-style books {
  system: numeric;
  symbols: "0" "1" "2" "3" "4" "5" "6" "7" "8" "9";
  prefix: "Book ";
  suffix: ": ";
}

.books {
  list-style: books;
  padding-left: 15ch;
}
```

#### Ergebnis

{{ EmbedLiveSample('Adding_a_prefix_to_a_counter') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere {{cssxref("@counter-style")}}-Deskriptoren: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}}, und {{cssxref("@counter-style/fallback", "fallback")}}
- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}: die funktionale Notation zum Erstellen anonymer Zählerstile
- [CSS Counter Styles](/de/docs/Web/CSS/CSS_counter_styles) Modul
- [CSS Lists and Counters](/de/docs/Web/CSS/CSS_lists) Modul
