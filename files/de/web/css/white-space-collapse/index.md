---
title: white-space-collapse
slug: Web/CSS/white-space-collapse
l10n:
  sourceCommit: 192737d41d098fd3f1b88265fcf1a841b6e9abe2
---

{{CSSRef}}

Die **`white-space-collapse`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, wie {{Glossary("whitespace", "weißraum")}} innerhalb eines Elements kollabiert wird.

> [!NOTE]
> Die `white-space-collapse` und {{CSSxRef("text-wrap")}} Eigenschaften können zusammen mit der {{CSSxRef("white-space")}} Kurzform-Eigenschaft deklariert werden.

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

Die `white-space-collapse` Eigenschaft wird als einzelnes Schlüsselwort angegeben, das aus der untenstehenden Liste von Werten ausgewählt wird.

### Werte

- `collapse`
  - : Weißraumsequenzen werden [kollabiert](#kollapsen_von_weißraum).
- `preserve`
  - : Weißraumsequenzen und Seg­ment­umbruchzeichen werden beibehalten.
- `preserve-breaks`
  - : Weißraumsequenzen werden kollabiert, während Seg­ment­umbruchzeichen beibehalten werden.
- `preserve-spaces`
  - : Weißraumsequenzen werden beibehalten, während Tabs und Seg­ment­umbruchzeichen in Leerzeichen umgewandelt werden.
- `break-spaces`
  - : Das Verhalten ist identisch zu `preserve`, mit der Ausnahme:
    - Jede Sequenz von beibehaltenem Weißraum nimmt Platz ein, einschließlich am Ende der Zeile.
    - Eine Zeilenumbruchmöglichkeit besteht nach jedem beibehaltenen Weißraumzeichen, auch zwischen Weißraumzeichen.
    - Beibehaltene Leerzeichen nehmen Platz ein und hängen nicht, was die intrinsischen Größen der Box beeinflusst ({{cssxref("min-content")}} Größe und {{cssxref("max-content")}} Größe).

> **Hinweis:** _Seg­ment­umbruchzeichen_ sind Zeichen wie Zeilenumbrüche, die dafür sorgen, dass der Text auf neue Zeilen umbricht.

> [!NOTE]
> Das [CSS Text](/de/docs/Web/CSS/CSS_text) Modul definiert einen `discard` Wert für die `white-space-collapse` Eigenschaft, um allen Weißraum im Element zu verwerfen, dies wird jedoch in keinem Browser unterstützt.

## Kollapsen von Weißraum

Benutzeragenten behandeln das Kollapsen von Weißraum wie folgt:

- Tabs werden in der Regel in Leerzeichen umgewandelt.
- Wenn Seg­ment­umbrüche kollabiert werden sollen:
  - Sequenzen von Seg­ment­umbrüchen werden auf einen einzelnen Seg­ment­umbruch reduziert.
  - Sie werden in Leerzeichen umgewandelt im Fall von Sprachen, die Wörter mit Leerzeichen trennen (wie Englisch), oder vollständig entfernt im Fall von Sprachen, die Wörter nicht mit Leerzeichen trennen (wie Chinesisch).
- Wenn Leerzeichen kollabiert werden sollen:
  - Leerzeichen oder Tabs vor oder nach Seg­ment­umbrüchen werden entfernt.
  - Sequenzen von Leerzeichen werden in ein einzelnes Leerzeichen umgewandelt, oder "kollabiert".
- Wenn Leerzeichen beibehalten werden, werden Sequenzen von Leerzeichen als nicht-umbrechend behandelt, es sei denn, sie enden mit einem weichen Umbruch am Ende jeder Sequenz – das heißt, die nächste Zeile beginnt immer mit dem nächsten Nicht-Leerzeichen-Zeichen. Im Fall des `break-spaces` Wertes kann jedoch ein weicher Umbruch nach jedem Leerzeichen erfolgen, sodass die nächste Zeile mit einem oder mehreren Leerzeichen beginnen kann.

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
  border-bottom: 1px dotted #ccc;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", "100%", 350)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Kurzform für `white-space-collapse` und {{CSSxRef("text-wrap")}}: Die {{CSSxRef("white-space")}} Eigenschaft.
- [CSS Text Modul](/de/docs/Web/CSS/CSS_text)
