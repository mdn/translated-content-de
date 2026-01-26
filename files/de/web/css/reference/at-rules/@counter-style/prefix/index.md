---
title: prefix
slug: Web/CSS/Reference/At-rules/@counter-style/prefix
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Der **`prefix`** Deskriptor der {{cssxref('@counter-style')}} Regel spezifiziert Inhalte, die dem Anfang der Markerdarstellung des Zählers hinzugefügt werden.

Wenn der Zählerwert negativ ist, kommt der `prefix` vor dem Minuszeichen und allen anderen `<symbol>`en, die durch den {{cssxref("@counter-style/negative", "negative")}} Deskriptor hinzugefügt werden.

## Syntax

```css
/* <symbol> value: string, image, or identifier */
prefix: "»";
prefix: "Page ";
prefix: url("bullet.png");
```

### Werte

Der **`prefix`** Deskriptor nimmt als Wert ein einziges `<symbol>`:

- `<symbol>`
  - : Spezifiziert ein `<symbol>` — eine {{cssxref("&lt;string&gt;")}}, ein {{cssxref("image")}} oder ein {{cssxref("&lt;custom-ident&gt;")}} — das der Markerdarstellung vorangestellt wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Hinzufügen eines Präfixes zu einem Zähler

In diesem Beispiel wird jeder Zählernummer "Buch " (mit einem Leerzeichen) vorangestellt und ein Doppelpunkt (`:`) angehängt. Der Doppelpunkt wird mit dem {{cssxref("@counter-style/suffix", "suffix")}} Deskriptor hinzugefügt.

#### HTML

```html
<ol class="books">
  <li>Flamer, by Mike Curato</li>
  <li>Gender Queer: A Memoir, by Maia Kobabe</li>
  <li>Tricks, by Ellen Hopkins</li>
  <li>The Handmaid's Tale: The Graphic Novel, by Margaret Atwood</li>
  <li>Crank, by Ellen Hopkins</li>
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

- Andere {{cssxref("@counter-style")}} Deskriptoren: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}} und {{cssxref("@counter-style/fallback", "fallback")}}
- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols()")}}: die funktionale Notation zur Erstellung anonymer Zählerstile
- [CSS-Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles) Modul
- [CSS-Listen und Zähler](/de/docs/Web/CSS/Guides/Lists) Modul
