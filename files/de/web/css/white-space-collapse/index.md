---
title: white-space-collapse
slug: Web/CSS/white-space-collapse
l10n:
  sourceCommit: 63e23080dd90d7802be807ac9beca286f6f31f7f
---

{{CSSRef}}

Die **`white-space-collapse`**-Eigenschaft von [CSS](/de/docs/Web/CSS) steuert, wie [Leerraum](/de/docs/Glossary/whitespace) innerhalb eines Elements reduziert wird.

> [!NOTE]
> Die Eigenschaften `white-space-collapse` und {{CSSxRef("text-wrap")}} können zusammen mit der Kurzschreibweise {{CSSxRef("white-space")}} deklariert werden.

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

Die `white-space-collapse`-Eigenschaft wird als Schlüsselwort aus der folgenden Liste von Werten angegeben.

### Werte

- `collapse`
  - : Leerraumsequenzen werden [reduziert](#reduzierung_von_leerraum).
- `preserve`
  - : Leerraumsequenzen und Segmentabbruchzeichen bleiben bestehen.
- `preserve-breaks`
  - : Leerraumsequenzen werden reduziert, während Segmentabbruchzeichen erhalten bleiben.
- `preserve-spaces`
  - : Leerraumsequenzen bleiben erhalten, während Tabs und Segmentabbruchzeichen in Leerzeichen umgewandelt werden.
- `break-spaces`
  - : Das Verhalten ist identisch mit `preserve`, außer dass:
    - Jede Folge von erhaltenem Leerraum nimmt immer Platz ein, auch am Ende der Zeile.
    - Eine Gelegenheit zum Zeilenumbruch besteht nach jedem erhaltenen Leerzeichen, auch zwischen Leerzeichen.
    - Erhaltene Leerzeichen nehmen Platz ein und hängen nicht herunter, was die intrinsischen Größen der Box beeinflusst ({{cssxref("min-content")}}-Größe und {{cssxref("max-content")}}-Größe).

> **Hinweis:** _Segmentabbruchzeichen_ sind Zeichen wie Zeilenenden, die Text dazu bringen, in neuen Zeilen fortzufahren.

## Reduzierung von Leerraum

Benutzeragenten behandeln die Reduzierung von Leerraum wie folgt:

- Tabs werden im Allgemeinen in Leerzeichen umgewandelt.
- Wenn Segmentumbrüche reduziert werden sollen:
  - Folgen von Segmentumbrüchen werden auf einen einzigen Segmentumbruch reduziert.
  - Sie werden in Sprachen, die Wörter mit Leerzeichen trennen (wie Englisch), in Leerzeichen umgewandelt oder in Sprachen, die Wörter nicht mit Leerzeichen trennen (wie Chinesisch), ganz entfernt.
- Wenn Leerzeichen reduziert werden sollen:
  - Leerzeichen oder Tabs vor oder nach Segmentumbrüchen werden entfernt.
  - Folgen von Leerzeichen werden in ein einziges Leerzeichen umgewandelt oder "reduziert".
- Wenn Leerzeichen erhalten bleiben, werden Folgen von Leerzeichen als nicht umbrechend behandelt, außer dass sie am Ende jeder Folge weich umgebrochen werden — d.h. die nächste Zeile beginnt immer mit dem nächsten Nicht-Leerzeichen-Zeichen. Im Fall des `break-spaces`-Werts könnte jedoch ein weicher Umbruch nach jedem Leerzeichen auftreten, sodass die nächste Zeile mit einem oder mehreren Leerzeichen beginnen kann.

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

h2 {
  font-size: 1.6rem;
  font-family: monospace;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", "100%", 350)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Kurzschreibweise für `white-space-collapse` und {{CSSxRef("text-wrap")}}: Die Eigenschaft {{CSSxRef("white-space")}}.
- [CSS-Textmodul](/de/docs/Web/CSS/CSS_text)
