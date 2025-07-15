---
title: white-space-collapse
slug: Web/CSS/white-space-collapse
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`white-space-collapse`**-Eigenschaft von [CSS](/de/docs/Web/CSS) steuert, wie {{Glossary("whitespace", "Leerraum")}} innerhalb eines Elements zusammengefasst wird.

> [!NOTE]
> Die Eigenschaften `white-space-collapse` und {{CSSxRef("text-wrap-mode")}} können zusammen mit der Abkürzungseigenschaft {{CSSxRef("white-space")}} erklärt werden.

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

Die `white-space-collapse`-Eigenschaft wird als ein einzelnes Stichwort aus der untenstehenden Werteliste angegeben.

### Werte

- `collapse`
  - : Leerraumsequenzen werden [zusammengefasst](#zusammenfassen_von_leerraum).
- `preserve`
  - : Leerraumsequenzen und Segmentumbruchzeichen werden beibehalten.
- `preserve-breaks`
  - : Leerraumsequenzen werden zusammengefasst, während Segmentumbruchzeichen beibehalten werden.
- `preserve-spaces`
  - : Leerraumsequenzen werden beibehalten, während Tabulatoren und Segmentumbruchzeichen in Leerzeichen umgewandelt werden.
- `break-spaces`
  - : Das Verhalten ist identisch zu `preserve`, außer dass:
    - Jede Sequenz von beibehaltenem Leerraum nimmt immer Platz ein, auch am Ende der Zeile.
    - Eine Umbruchsmöglichkeit besteht nach jedem beibehaltenen Leerraumzeichen, auch zwischen Leerraumzeichen.
    - Beibehaltene Leerzeichen nehmen Platz ein und hängen nicht, was die intrinsischen Größen der Box beeinflusst ({{cssxref("min-content")}}-Größe und {{cssxref("max-content")}}-Größe).

> [!NOTE]
> _Segmentumbruchzeichen_ sind Zeichen wie Zeilenumbrüche, die dazu führen, dass der Text auf neue Zeilen umbricht.

> [!NOTE]
> Das [CSS-Text](/de/docs/Web/CSS/CSS_text)-Modul definiert einen `discard`-Wert für die `white-space-collapse`-Eigenschaft, welcher allen Leerraum im Element verwirft, allerdings wird dies von keinem Browser unterstützt.

## Zusammenfassen von Leerraum

Benutzeragenten handhaben das Zusammenfassen von Leerraum wie folgt:

- Tabulatoren werden im Allgemeinen in Leerzeichen umgewandelt.
- Wenn Segmentumbrüche zusammengefasst werden sollen:
  - Sequenzen von Segmentumbrüchen werden zu einem einzigen Segmentumbruch zusammengefasst.
  - Sie werden in Sprachen, die Wörter mit Leerzeichen trennen (wie Englisch), in Leerzeichen umgewandelt oder in Sprachen, die Wörter nicht mit Leerzeichen trennen (wie Chinesisch), komplett entfernt.
- Wenn Leerzeichen zusammengefasst werden sollen:
  - Leerzeichen oder Tabulatoren vor oder nach Segmentumbrüchen werden entfernt.
  - Sequenzen von Leerzeichen werden in ein einziges Leerzeichen "zusammengefasst".
- Wenn Leerzeichen beibehalten werden, werden Sequenzen von Leerzeichen als nicht-umbruchend behandelt, außer dass sie am Ende jeder Sequenz weich umgebrochen werden — d.h. die nächste Zeile beginnt immer mit dem nächsten Nicht-Leerzeichen-Zeichen. Im Fall des `break-spaces`-Werts könnte jedoch ein weicher Umbruch nach jedem Leerzeichen auftreten, sodass die nächste Zeile mit einem oder mehreren Leerzeichen beginnen kann.

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

- Abkürzung für `white-space-collapse` und {{CSSxRef("text-wrap-mode")}}: Die {{CSSxRef("white-space")}}-Eigenschaft.
- [CSS-Textmodul](/de/docs/Web/CSS/CSS_text)
