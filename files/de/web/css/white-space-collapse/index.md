---
title: white-space-collapse
slug: Web/CSS/white-space-collapse
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{CSSRef}}

Die **`white-space-collapse`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, wie {{Glossary("whitespace", "Leerraum")}} innerhalb eines Elements zusammengefasst wird.

> [!NOTE]
> Die Eigenschaften `white-space-collapse` und {{CSSxRef("text-wrap-mode")}} können zusammen mit der {{CSSxRef("white-space")}} Kurzschrift-Eigenschaft deklariert werden.

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

Die `white-space-collapse` Eigenschaft wird als ein einzelnes Schlüsselwort angegeben, das aus der unten stehenden Liste von Werten ausgewählt wird.

### Werte

- `collapse`
  - : Leerraumsequenzen werden [zusammengefasst](#zusammenfassen_von_leerraum).
- `preserve`
  - : Leerraumsequenzen und Segmentumbruchzeichen werden beibehalten.
- `preserve-breaks`
  - : Leerraumsequenzen werden zusammengefasst, während Segmentumbruchzeichen beibehalten werden.
- `preserve-spaces`
  - : Leerraumsequenzen werden beibehalten, während Tabs und Segmentumbruchzeichen in Leerzeichen umgewandelt werden.
- `break-spaces`
  - : Das Verhalten ist identisch mit `preserve`, außer dass:
    - Jede Sequenz von beibehaltetem Leerraum nimmt immer Platz ein, auch am Ende der Zeile.
    - Eine Zeilenumbruchmöglichkeit besteht nach jedem beibehaltetem Leerzeichen, auch zwischen Leerzeichen.
    - Beibehaltene Leerzeichen nehmen Platz ein und "hängen" nicht, was die intrinsischen Größen der Box beeinflusst ({{cssxref("min-content")}} und {{cssxref("max-content")}} Größe).

> [!NOTE] > _Segmentumbruchzeichen_ sind Zeichen wie Zeilenumbrüche, die verursachen, dass der Text in neue Zeilen umbricht.

> [!NOTE]
> Das [CSS text](/de/docs/Web/CSS/CSS_text) Modul definiert einen `discard` Wert für die `white-space-collapse` Eigenschaft, um jeglichen Leerraum im Element zu entfernen. Dies wird jedoch in keinem Browser unterstützt.

## Zusammenfassen von Leerraum

Benutzeragenten handhaben das Zusammenfassen von Leerraum wie folgt:

- Tabs werden im Allgemeinen in Leerzeichen umgewandelt.
- Wenn Segmentumbrüche zusammengefügt werden sollen:
  - Sequenzen von Segmentumbrüchen werden zu einem einzigen Segmentumbruch zusammengeführt.
  - Sie werden in Leerzeichen umgewandelt im Fall von Sprachen, die Wörter mit Leerzeichen trennen (wie Englisch), oder ganz entfernt im Fall von Sprachen, die Wörter nicht mit Leerzeichen trennen (wie Chinesisch).
- Wenn Leerzeichen zusammengeführt werden sollen:
  - Leerzeichen oder Tabs vor oder nach Segmentumbrüchen werden entfernt.
  - Sequenzen von Leerzeichen werden in ein einzelnes Leerzeichen umgewandelt oder "zusammengefasst".
- Wenn Leerzeichen beibehalten werden, werden Sequenzen von Leerzeichen als nicht-unterbrechend behandelt, außer dass sie am Ende jeder Sequenz soft-wrapen — d.h. die nächste Zeile beginnt immer mit dem nächsten Nicht-Leerzeichen-Zeichen. Im Fall des Wertes `break-spaces` kann ein soft wrap jedoch potenziell nach jedem Leerzeichen auftreten, sodass die nächste Zeile mit einem oder mehreren Leerzeichen beginnen kann.

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

- Kurzschreibweise für `white-space-collapse` und {{CSSxRef("text-wrap-mode")}}: Die {{CSSxRef("white-space")}} Eigenschaft.
- [CSS Text Modul](/de/docs/Web/CSS/CSS_text)
