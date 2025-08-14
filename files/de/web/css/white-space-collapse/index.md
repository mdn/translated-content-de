---
title: white-space-collapse
slug: Web/CSS/white-space-collapse
l10n:
  sourceCommit: d4a50b63d9afd826e61eb8833e8e6337b5059e8a
---

Die **`white-space-collapse`**-Eigenschaft von [CSS](/de/docs/Web/CSS) steuert, wie {{Glossary("whitespace", "Leerraum")}} innerhalb eines Elements zusammengefasst wird.

> [!NOTE]
> Die Eigenschaften `white-space-collapse` und {{CSSxRef("text-wrap-mode")}} können zusammen mit der Kurzform-Eigenschaft {{CSSxRef("white-space")}} angegeben werden.

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

Die `white-space-collapse`-Eigenschaft wird als einzelnes Schlüsselwort, das aus der untenstehenden Liste ausgewählt wurde, angegeben.

### Werte

- `collapse`
  - : Leerraumsequenzen werden [zusammengefasst](/de/docs/Web/CSS/CSS_text/Whitespace#collapsing_and_transformation).
- `preserve`
  - : Leerraumsequenzen und Segmentumbruchzeichen bleiben erhalten.
- `preserve-breaks`
  - : Leerraumsequenzen werden zusammengefasst, während Segmentumbruchzeichen erhalten bleiben.
- `preserve-spaces`
  - : Leerraumsequenzen bleiben erhalten, während Tabs und Segmentumbruchzeichen in Leerzeichen umgewandelt werden.
- `break-spaces`
  - : Das Verhalten ist identisch zu `preserve`, außer dass:
    - Jede Sequenz von erhaltenem Leerraum immer Platz einnimmt, auch am Ende der Zeile.
    - Eine Zeilenumbruchmöglichkeit nach jedem erhaltenen Leerraumzeichen besteht, auch zwischen Leerraumzeichen.
    - Erhaltene Leerzeichen Platz einnehmen und nicht "hängen", wodurch sie die intrinsischen Größen des Rahmens ({{cssxref("min-content")}}-Größe und {{cssxref("max-content")}}-Größe) beeinflussen.

> [!NOTE]
> _Segmentumbruchzeichen_ sind Zeichen wie Zeilenumbrüche, die dazu führen, dass Text auf neue Zeilen umbricht.

> [!NOTE]
> Das [CSS Textmodul](/de/docs/Web/CSS/CSS_text) definiert einen Wert `discard` für die `white-space-collapse`-Eigenschaft, um allen Leerraum im Element zu verwerfen. Dies wird jedoch in keinem Browser unterstützt.

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
- [CSS Textmodul](/de/docs/Web/CSS/CSS_text)
- [Umgang mit Leerraum in CSS](/de/docs/Web/CSS/CSS_text/Whitespace)
