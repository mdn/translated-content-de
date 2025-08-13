---
title: white-space-collapse
slug: Web/CSS/white-space-collapse
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Die **`white-space-collapse`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, wie {{Glossary("whitespace", "Leerraum")}} innerhalb eines Elements reduziert wird.

> [!NOTE]
> Die Eigenschaften `white-space-collapse` und {{CSSxRef("text-wrap-mode")}} können gemeinsam mit der {{CSSxRef("white-space")}} Kurzform-Eigenschaft deklariert werden.

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

Die Eigenschaft `white-space-collapse` wird als einzelnes Schlüsselwort aus der untenstehenden Werteliste angegeben.

### Werte

- `collapse`
  - : Leerraumsequenzen werden [zusammengefasst](#reduzierung_von_leerraum).
- `preserve`
  - : Leerraumsequenzen und Segmentumbruchzeichen bleiben erhalten.
- `preserve-breaks`
  - : Leerraumsequenzen werden reduziert, während Segmentumbruchzeichen erhalten bleiben.
- `preserve-spaces`
  - : Leerraumsequenzen bleiben erhalten, während Tabs und Segmentumbruchzeichen in Leerzeichen umgewandelt werden.
- `break-spaces`
  - : Das Verhalten ist identisch mit `preserve`, außer dass:
    - Jede Sequenz von erhaltenem Leerraum immer Platz einnimmt, auch am Ende der Zeile.
    - Eine Zeilenumbruchmöglichkeit nach jedem erhaltenen Leerraumzeichen besteht, auch zwischen Leerraumzeichen.
    - Erhaltene Leerzeichen nehmen Platz ein und hängen nicht, was somit die intrinsischen Größen der Box beeinflusst ({{cssxref("min-content")}} Größe und {{cssxref("max-content")}} Größe).

> [!NOTE]
> _Segmentumbruchzeichen_ sind Zeichen wie Zeilenumbrüche, die den Text auf neue Zeilen brechen lassen.

> [!NOTE]
> Das [CSS text](/de/docs/Web/CSS/CSS_text) Modul definiert einen `discard` Wert für die Eigenschaft `white-space-collapse`, um allen Leerraum im Element zu verwerfen. Dies wird jedoch von keinem Browser unterstützt.

## Reduzierung von Leerraum

Benutzeragenten behandeln die Reduzierung von Leerraum wie folgt:

- Tabs werden im Allgemeinen in Leerzeichen umgewandelt.
- Wenn Segmentumbrüche reduziert werden sollen:
  - Sequenzen von Segmentumbrüchen werden auf einen einzigen Segmentumbruch reduziert.
  - Sie werden in Leerzeichen umgewandelt im Fall von Sprachen, die Wörter mit Leerzeichen trennen (wie Englisch), oder ganz entfernt im Fall von Sprachen, die Wörter nicht mit Leerzeichen trennen (wie Chinesisch).
- Wenn Leerzeichen reduziert werden sollen:
  - Leerzeichen oder Tabs vor oder nach Segmentumbrüchen werden entfernt.
  - Sequenzen von Leerzeichen werden in ein einzelnes Leerzeichen umgewandelt oder "reduziert".
- Wenn Leerzeichen erhalten bleiben, werden Leerraumsequenzen als nicht umbrechend behandelt, außer dass sie am Ende jeder Sequenz weich umbrochen werden können — d.h. die nächste Zeile beginnt immer mit dem nächsten Nicht-Leerzeichen-Zeichen. Im Fall des Wertes `break-spaces` könnte ein weicher Umbruch jedoch nach jedem Leerzeichen auftreten, sodass die nächste Zeile mit einem oder mehreren Leerzeichen beginnen kann.

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

- Kurzform für `white-space-collapse` und {{CSSxRef("text-wrap-mode")}}: Die {{CSSxRef("white-space")}} Eigenschaft.
- [CSS-Textmodul](/de/docs/Web/CSS/CSS_text)
