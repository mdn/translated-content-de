---
title: white-space-collapse
slug: Web/CSS/white-space-collapse
l10n:
  sourceCommit: 4809e8217288dc7e1372d5c74140ca6661673206
---

{{CSSRef}}

Die **`white-space-collapse`** [CSS](/de/docs/Web/CSS)-Eigenschaft steuert, wie {{Glossary("whitespace", "white space")}} innerhalb eines Elements zusammengefasst wird.

> [!NOTE]
> Die Eigenschaften `white-space-collapse` und {{CSSxRef("text-wrap-mode")}} können zusammen mit der Kurzschreibweise {{CSSxRef("white-space")}} deklariert werden.

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

Die Eigenschaft `white-space-collapse` wird als ein einzelnes Stichwort von der unten stehenden Werteliste angegeben.

### Werte

- `collapse`
  - : White space-Sequenzen werden [zusammengefasst](#zusammenfassung_von_white_space).
- `preserve`
  - : White space-Sequenzen und Segmentumbruchzeichen werden beibehalten.
- `preserve-breaks`
  - : White space-Sequenzen werden zusammengefasst, während Segmentumbruchzeichen beibehalten werden.
- `preserve-spaces`
  - : White space-Sequenzen werden beibehalten, während Tabs und Segmentumbruchzeichen in Leerzeichen umgewandelt werden.
- `break-spaces`
  - : Das Verhalten ist identisch zu `preserve`, außer dass:
    - Jede beibehaltene White space-Sequenz immer Platz einnimmt, auch am Ende der Zeile.
    - Es nach jedem beibehaltenen White space-Zeichen eine Zeilenumbruchmöglichkeit gibt, auch zwischen White space-Zeichen.
    - Beibehaltene Leerzeichen Platz einnehmen und nicht herabhängen, was die intrinsische Größe der Box beeinflusst ({{cssxref("min-content")}}-Größe und {{cssxref("max-content")}}-Größe).

> **Hinweis:** _Segmentumbruchzeichen_ sind Zeichen wie Zeilenumbrüche, die dazu führen, dass der Text in neuen Zeilen beginnt.

> [!NOTE]
> Das [CSS-Text](/de/docs/Web/CSS/CSS_text)-Modul definiert einen `discard`-Wert für die `white-space-collapse`-Eigenschaft, um alle White spaces im Element zu verwerfen. Dies wird jedoch in keinem Browser unterstützt.

## Zusammenfassung von white space

Browservorrichtungen behandeln die Zusammenfassung von White space wie folgt:

- Tabs werden im Allgemeinen in Leerzeichen umgewandelt.
- Wenn Segmentumbruchzeichen zusammengafasst werden sollen:
  - Sequenzen von Segmentumbruchzeichen werden auf ein einzelnes Segmentumbruchzeichen reduziert.
  - Sie werden in Leerzeichen umgewandelt im Fall von Sprachen, die Wörter mit Leerzeichen trennen (wie Englisch), oder ganz entfernt im Fall von Sprachen, die Wörter nicht mit Leerzeichen trennen (wie Chinesisch).
- Wenn Leerzeichen zusammengafasst werden sollen:
  - Leerzeichen oder Tabs vor oder nach Segmentumbruchzeichen werden entfernt.
  - Sequenzen von Leerzeichen werden in ein einziges Leerzeichen umgewandelt oder "zusammengefasst".
- Wenn Leerzeichen beibehalten werden, werden Sequenzen von Leerzeichen als nicht-unterbrechend behandelt, außer dass sie am Ende jeder Sequenz weich umbrechen — d. h. die nächste Zeile beginnt immer mit dem nächsten Nicht-Leerzeichen-Zeichen. Im Fall des Wertes `break-spaces` könnte ein weicher Umbruch jedoch potenziell nach jedem Leerzeichen auftreten, sodass die nächste Zeile mit einem oder mehreren Leerzeichen beginnt.

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

- Kurzform für `white-space-collapse` und {{CSSxRef("text-wrap-mode")}}: Die {{CSSxRef("white-space")}}-Eigenschaft.
- [CSS-Textmodul](/de/docs/Web/CSS/CSS_text)
