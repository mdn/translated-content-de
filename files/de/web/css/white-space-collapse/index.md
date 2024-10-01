---
title: white-space-collapse
slug: Web/CSS/white-space-collapse
l10n:
  sourceCommit: 63e23080dd90d7802be807ac9beca286f6f31f7f
---

{{CSSRef}}

Die **`white-space-collapse`** [CSS](/de/docs/Web/CSS)-Eigenschaft steuert, wie {{Glossary("whitespace", "Leerzeichen")}} innerhalb eines Elements reduziert werden.

> [!NOTE]
> Die Eigenschaften `white-space-collapse` und {{CSSxRef("text-wrap")}} können gemeinsam mit der Abkürzungseigenschaft {{CSSxRef("white-space")}} deklariert werden.

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

Die `white-space-collapse`-Eigenschaft wird als ein einzelnes Schlüsselwort aus der unten stehenden Werteliste angegeben.

### Werte

- `collapse`
  - : Leerzeichensequenzen werden [reduziert](#reduzierung_von_leerzeichen).
- `preserve`
  - : Leerzeichensequenzen und Segmentumbruch-Zeichen werden beibehalten.
- `preserve-breaks`
  - : Leerzeichensequenzen werden reduziert, während Segmentumbruch-Zeichen beibehalten werden.
- `preserve-spaces`
  - : Leerzeichensequenzen werden beibehalten, während Tabs und Segmentumbruch-Zeichen in Leerzeichen umgewandelt werden.
- `break-spaces`
  - : Das Verhalten ist identisch zu `preserve`, außer dass:
    - Jede Folge von beibehaltenen Leerzeichen immer Platz beansprucht, einschließlich am Ende der Zeile.
    - Eine Zeilenumbruchmöglichkeit nach jedem beibehaltenen Leerzeichen besteht, auch zwischen Leerzeichen.
    - Beibehaltene Leerzeichen Platz beanspruchen und nicht hängen, was somit die intrinsischen Größen der Box beeinflusst ({{cssxref("min-content")}}-Größe und {{cssxref("max-content")}}-Größe).

> **Hinweis:** _Segmentumbruch-Zeichen_ sind Zeichen wie Zeilenumbrüche, die bewirken, dass der Text auf neue Zeilen wechselt.

## Reduzierung von Leerzeichen

Benutzeragenten handhaben die Reduzierung von Leerzeichen wie folgt:

- Tabs werden in der Regel in Leerzeichen umgewandelt.
- Wenn Segmentumbrüche reduziert werden sollen:
  - Folgen von Segmentumbrüchen werden auf einen einzigen Segmentumbruch reduziert.
  - Sie werden in Sprachen, die Wörter mit Leerzeichen trennen (wie Englisch), in Leerzeichen umgewandelt oder bei Sprachen, die keine Leerzeichen verwenden (wie Chinesisch), vollständig entfernt.
- Wenn Leerzeichen reduziert werden sollen:
  - Leerzeichen oder Tabs vor oder nach Segmentumbrüchen werden entfernt.
  - Folgen von Leerzeichen werden in ein einzelnes Leerzeichen umgewandelt oder "reduziert".
- Wenn Leerzeichen beibehalten werden, werden Folgen von Leerzeichen als nicht-umbruchend behandelt, außer dass sie am Ende jeder Sequenz weich umbrochen werden — d.h. die nächste Zeile beginnt immer mit dem nächsten Nicht-Leerzeichen-Zeichen. Im Fall des `break-spaces`-Werts kann ein weicher Umbruch jedoch potenziell nach jedem Leerzeichen auftreten, sodass die nächste Zeile mit einem oder mehreren Leerzeichen beginnen kann.

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

- Abkürzung für `white-space-collapse` und {{CSSxRef("text-wrap")}}: Die {{CSSxRef("white-space")}}-Eigenschaft.
- [CSS Textmodul](/de/docs/Web/CSS/CSS_text)
