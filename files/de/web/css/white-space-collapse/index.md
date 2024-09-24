---
title: white-space-collapse
slug: Web/CSS/white-space-collapse
l10n:
  sourceCommit: 63e23080dd90d7802be807ac9beca286f6f31f7f
---

{{CSSRef}}

Die **`white-space-collapse`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, wie {{Glossary("whitespace", "Leerraum")}} innerhalb eines Elements reduziert wird.

> [!NOTE]
> Die Eigenschaften `white-space-collapse` und {{CSSxRef("text-wrap")}} können zusammen mit der Kurzform-Eigenschaft {{CSSxRef("white-space")}} deklariert werden.

## Syntax

```css
/* Schlüsselwort-Werte */
white-space-collapse: collapse;
white-space-collapse: preserve;
white-space-collapse: preserve-breaks;
white-space-collapse: preserve-spaces;
white-space-collapse: break-spaces;

/* Globale Werte */
white-space-collapse: inherit;
white-space-collapse: initial;
white-space-collapse: revert;
white-space-collapse: revert-layer;
white-space-collapse: unset;
```

Die Eigenschaft `white-space-collapse` wird als einzelnes Schlüsselwort aus der unten stehenden Werteliste festgelegt.

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
  - : Das Verhalten ist identisch zu `preserve`, außer dass:
    - Jede Folge von erhaltenem Leerraum immer Platz beansprucht, einschließlich am Ende der Zeile.
    - Es nach jedem beibehaltenen Leerraumzeichen eine Zeilenumbruchmöglichkeit gibt, einschließlich zwischen Leerraumzeichen.
    - Beibehaltene Leerzeichen beanspruchen Platz und hängen nicht, was die intrinsischen Größen der Box beeinflusst ({{cssxref("min-content")}} Größe und {{cssxref("max-content")}} Größe).

> **Hinweis:** _Segmentumbruchzeichen_ sind Zeichen wie Zeilenumbrüche, die bewirken, dass Text auf neue Zeilen umbricht.

## Zusammenfassen von Leerraum

Benutzeragenten handhaben das Zusammenfassen von Leerraum wie folgt:

- Tabs werden im Allgemeinen in Leerzeichen umgewandelt.
- Wenn Segmentumbrüche zusammengefasst werden sollen:
  - Folgen von Segmentumbrüchen werden auf einen einzigen Segmentumbruch reduziert.
  - Sie werden in den Fällen von Sprachen, die Wörter mit Leerzeichen trennen (wie Englisch), in Leerzeichen umgewandelt oder bei Sprachen, die Wörter nicht mit Leerzeichen trennen (wie Chinesisch), ganz entfernt.
- Wenn Leerzeichen zusammengefasst werden sollen:
  - Leerzeichen oder Tabs vor oder nach Segmentumbrüchen werden entfernt.
  - Sequenzen von Leerzeichen werden in ein einzelnes Leerzeichen umgewandelt oder „zusammengefasst“.
- Wenn Leerzeichen beibehalten werden, werden Sequenzen von Leerzeichen als nicht trennend behandelt, außer dass sie am Ende jeder Sequenz weich umbrochen werden - d.h. die nächste Zeile beginnt immer mit dem nächsten Nicht-Leerzeichen-Zeichen. Im Fall des `break-spaces`-Wertes könnte jedoch ein weicher Umbruch nach jedem Leerzeichen auftreten, sodass die nächste Zeile mit einem oder mehreren Leerzeichen beginnen kann.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### HTML

<!-- prettier-ignore-start -->
```html
<h2 class="collapse">Standardverhalten;
  alle   Leerzeichen   werden   zusammengefasst
  in    der          Überschrift       .</h2>

<h2 class="preserve">In diesem Fall
  werden   alle   Leerzeichen   beibehalten
  in    der          Überschrift       .</h2>

<h2 class="preserve-breaks">In diesem Fall werden nur
  die   Zeilenumbrüche  beibehalten
  in    der          Überschrift       .</h2>
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

- Kurzform für `white-space-collapse` und {{CSSxRef("text-wrap")}}: Die {{CSSxRef("white-space")}} Eigenschaft.
- [CSS Textmodul](/de/docs/Web/CSS/CSS_text)
