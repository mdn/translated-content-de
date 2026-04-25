---
title: "`white-space-collapse` CSS property"
short-title: white-space-collapse
slug: Web/CSS/Reference/Properties/white-space-collapse
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`white-space-collapse`**-[CSS](/de/docs/Web/CSS)-Eigenschaft steuert, wie {{Glossary("whitespace", "Leerraum")}} innerhalb eines Elements zusammengestrichen wird.

> [!NOTE]
> Die Eigenschaften `white-space-collapse` und {{CSSxRef("text-wrap-mode")}} können zusammen unter Verwendung der {{CSSxRef("white-space")}} Kurzschreibweise deklariert werden.

## Syntax

```css
/* Keyword values */
white-space-collapse: collapse;
white-space-collapse: preserve;
white-space-collapse: preserve-breaks;
white-space-collapse: preserve-spaces;
white-space-collapse: break-spaces;

/* Global values */
white-space-collapse: inherit;
white-space-collapse: initial;
white-space-collapse: revert;
white-space-collapse: revert-layer;
white-space-collapse: unset;
```

Die `white-space-collapse` Eigenschaft wird als ein einzelnes Schlüsselwort angegeben, das aus der untenstehenden Liste von Werten ausgewählt wird.

### Werte

- `collapse`
  - : Leerraumsequenzen werden [zusammengestrichen](/de/docs/Web/CSS/Guides/Text/Whitespace#collapsing_and_transformation).
- `preserve`
  - : Leerraumsequenzen und Segmentsumbruchzeichen bleiben erhalten.
- `preserve-breaks`
  - : Leerraumsequenzen werden zusammengestrichen, während Segmentsumbruchzeichen erhalten bleiben.
- `preserve-spaces`
  - : Leerraumsequenzen bleiben erhalten, während Tabs und Segmentsumbruchzeichen in Leerzeichen umgewandelt werden.
- `break-spaces`
  - : Das Verhalten entspricht `preserve`, mit den folgenden Ausnahmen:
    - Jede Sequenz von erhaltenem Leerraum nimmt immer Platz ein, auch am Ende der Zeile.
    - Eine Zeilenbruchmöglichkeit besteht nach jedem erhaltenen Leerzeichen, auch zwischen Leerzeichen.
    - Erhaltene Leerzeichen nehmen Platz ein und hängen nicht, was sich auf die intrinsischen Größen der Box auswirkt ({{cssxref("min-content")}} Größe und {{cssxref("max-content")}} Größe).

> [!NOTE]
> _Segmentsumbruchzeichen_ sind Zeichen wie Zeilenumbrüche, die Text auf neue Zeilen umbrechen lassen.

> [!NOTE]
> Das [CSS-Text](/de/docs/Web/CSS/Guides/Text)-Modul definiert einen `discard`-Wert für die `white-space-collapse`-Eigenschaft, um allen Leerraum im Element zu verwerfen, wird jedoch in keinem Browser unterstützt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### HTML

<!-- prettier-ignore-start -->
```html
<h2 class="collapse">Default behavior;
  all   whitespace   is   collapsed
  in    the          heading       .</h2>

<h2 class="preserve">In this case
  all   whitespace   is   preserved
  in    the          heading       .</h2>

<h2 class="preserve-breaks">In this case only
  the   line breaks  are  preserved
  in    the          heading       .</h2>

<h2 class="preserve-spaces">In this case only
  the   spaces       are  preserved
  in    the          heading       .</h2>
```
<!-- prettier-ignore-end -->

### CSS

```css
.collapse {
  white-space-collapse: collapse;
}

.preserve {
  white-space-collapse: preserve;
}

.preserve-breaks {
  white-space-collapse: preserve-breaks;
}

.preserve-spaces {
  white-space-collapse: preserve-spaces;
}

h2 {
  font-size: 1.6rem;
  font-family: monospace;
  border-bottom: 1px dotted #cccccc;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", "100%", 350)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Kurzform für `white-space-collapse` und {{CSSxRef("text-wrap-mode")}}: Die {{CSSxRef("white-space")}}-Eigenschaft.
- [CSS-Textmodul](/de/docs/Web/CSS/Guides/Text)
- [Umgang mit Leerraum in CSS](/de/docs/Web/CSS/Guides/Text/Whitespace)
