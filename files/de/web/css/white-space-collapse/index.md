---
title: white-space-collapse
slug: Web/CSS/white-space-collapse
l10n:
  sourceCommit: d3453722e52404b39afdf2a8d874d0600d85db30
---

{{CSSRef}}

Die **`white-space-collapse`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, wie {{Glossary("whitespace", "Leerzeichen")}} innerhalb eines Elements reduziert werden.

> [!NOTE]
> Die `white-space-collapse` und {{CSSxRef("text-wrap")}} Eigenschaften können zusammen mit der Kurzschreibweise {{CSSxRef("white-space")}} deklariert werden.

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

Die Eigenschaft `white-space-collapse` wird als ein einzelnes Schlüsselwort aus der unten stehenden Liste von Werten angegeben.

### Werte

- `collapse`
  - : Leerzeichen-Sequenzen werden [reduziert](#reduzierung_von_leerzeichen).
- `preserve`
  - : Leerzeichen-Sequenzen und Segment-Trennzeichen werden beibehalten.
- `preserve-breaks`
  - : Leerzeichen-Sequenzen werden reduziert, während Segment-Trennzeichen beibehalten werden.
- `preserve-spaces`
  - : Leerzeichen-Sequenzen werden beibehalten, während Tabs und Segment-Trennzeichen in Leerzeichen umgewandelt werden.
- `break-spaces`
  - : Das Verhalten ist identisch zu `preserve`, mit der Ausnahme, dass:
    - Jede Sequenz von erhaltenen Leerzeichen nimmt immer Platz ein, auch am Ende der Zeile.
    - Eine Zeilenumbruchmöglichkeit besteht nach jedem erhaltenen Leerzeichen, auch zwischen Leerzeichen.
    - Erhaltene Leerzeichen nehmen Platz ein und hängen nicht, was somit die intrinsischen Größen des Kastens beeinflusst ({{cssxref("min-content")}} Größe und {{cssxref("max-content")}} Größe).

> **Hinweis:** _Segment-Trennzeichen_ sind Zeichen wie Zeilenumbrüche, die den Text auf neue Zeilen brechen lassen.

## Reduzierung von Leerzeichen

Browser-Agenten handhaben die Reduzierung von Leerzeichen wie folgt:

- Tabs werden im Allgemeinen in Leerzeichen umgewandelt.
- Wenn Segment-Trennzeichen reduziert werden sollen:
  - Sequenzen von Segment-Trennzeichen werden auf ein einzelnes Segment-Trennzeichen reduziert.
  - Sie werden in Sprachen, die Wörter mit Leerzeichen trennen (wie Englisch), in Leerzeichen umgewandelt oder bei Sprachen, die Wörter nicht mit Leerzeichen trennen (wie Chinesisch), vollständig entfernt.
- Wenn Leerzeichen reduziert werden sollen:
  - Leerzeichen oder Tabs vor oder nach Segment-Trennzeichen werden entfernt.
  - Sequenzen von Leerzeichen werden in ein einzelnes Leerzeichen umgewandelt oder "reduziert".
- Wenn Leerzeichen beibehalten werden, werden Sequenzen von Leerzeichen als Untrennbar behandelt, außer dass sie am Ende jeder Sequenz weich umbrochen werden — d.h. die nächste Zeile beginnt immer mit dem nächsten Nicht-Leerzeichen-Zeichen. Im Fall des `break-spaces` Wertes könnte jedoch ein weicher Umbruch nach jedem Leerzeichen potenziell auftreten, sodass die nächste Zeile mit einem oder mehreren Leerzeichen beginnen kann.

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

- Kurzschreibweise für `white-space-collapse` und {{CSSxRef("text-wrap")}}: Die {{CSSxRef("white-space")}} Eigenschaft.
- [CSS Textmodul](/de/docs/Web/CSS/CSS_text)
