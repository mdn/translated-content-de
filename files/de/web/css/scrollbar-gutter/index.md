---
title: scrollbar-gutter
slug: Web/CSS/scrollbar-gutter
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`scrollbar-gutter`** [CSS](/de/docs/Web/CSS) Eigenschaft erlaubt es Autoren, Platz für die Scrollleiste zu reservieren. Dadurch werden unerwünschte Layoutänderungen verhindert, wenn der Inhalt wächst, ohne unnötige visuelle Elemente anzuzeigen, wenn kein Scrollen erforderlich ist.

Die _scrollbar gutter_ eines Elements ist der Raum zwischen dem inneren Rand und dem äußeren Padding-Rand, in dem der Browser eine Scrollleiste anzeigen kann. Wenn keine Scrollleiste vorhanden ist, wird der Gutter als Erweiterung des Paddings dargestellt.

Der Browser bestimmt, ob _klassische_ Scrollleisten oder _Overlay_ Scrollleisten verwendet werden:

- Klassische Scrollleisten werden immer in einem Gutter platziert und nehmen Platz ein, wenn sie vorhanden sind.
- Overlay Scrollleisten werden über dem Inhalt platziert, nicht in einem Gutter, und sind normalerweise teilweise transparent.

## Syntax

```css
/* Initial value */
scrollbar-gutter: auto;

/* "stable" keyword, with optional modifier */
scrollbar-gutter: stable;
scrollbar-gutter: stable both-edges;

/* Global values */
scrollbar-gutter: inherit;
scrollbar-gutter: initial;
scrollbar-gutter: revert;
scrollbar-gutter: revert-layer;
scrollbar-gutter: unset;
```

### Werte

- `auto`
  - : Der Anfangswert. Klassische Scrollleisten erzeugen einen Gutter, wenn `overflow` auf `scroll` gesetzt ist, oder wenn `overflow` `auto` ist und der Block überläuft. Overlay Scrollleisten nehmen keinen Platz ein.
- `stable`
  - : Bei der Verwendung von klassischen Scrollleisten ist der Gutter vorhanden, wenn `overflow` `auto`, `scroll` oder `hidden` ist, selbst wenn der Block nicht überläuft. Bei der Verwendung von Overlay Scrollleisten ist der Gutter nicht vorhanden.
- `both-edges`
  - : Wenn ein Gutter an einer der Inline-Start-/Endkanten des Blocks vorhanden wäre, wird ein weiterer auch auf der gegenüberliegenden Kante vorhanden sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Die folgenden Beispiele zeigen, wie die verschiedenen Werte der Eigenschaft `scrollbar-gutter` ein scrollbares `div`-Element (`.container`) mit einem oder mehreren Absätzen darin beeinflussen würden.

> [!NOTE]
> In den Bildern der Beispiele sind die Systemeinstellungen des Benutzers auf klassische Scrollleisten gesetzt (immer angezeigt).

### Beispiel 1

Verhindern Sie unnötige Layoutänderungen, da durch Vergrößern oder Verkleinern des Inhalts die Scrollleiste erscheint/verschwindet, wird Platz dafür reserviert.

```css
.container {
  scrollbar-gutter: stable;
}
```

![Ein enthaltenes div-Element mit einem Textabsatz darin und einem Raum rechts, wo die Scrollleiste ist](stable-no-scroll.png)

### Beispiel 2

Fügen Sie symmetrische Abstände zu beiden Seiten des Kastens hinzu, damit der Inhalt zentriert ist:

```css
.container {
  scrollbar-gutter: stable both-edges;
}
```

![Ein enthaltenes div-Element mit einem Textabsatz darin, einem Raum rechts, wo die Scrollleiste ist, und einem passenden leeren Raum links](stable-both-edges.png)

### Beispiel 3

Richten Sie die Inhalte eines nicht scrollbaren Elements und eines scrollbaren Elements nebeneinander aus:
Dieses Beispiel zeigt zwei Divs nebeneinander. Das linke hat keinen Scroll, das rechte schon. Beide haben `scrollbar-gutter` angewendet, welches auch Platz für das linke Div reserviert, das keinen scrollbaren Inhalt hat. Dies ist eine gute Technik, um die Breite des Inhalts konsistent zu halten.

```css
.container1 {
  overflow: hidden;
  scrollbar-gutter: stable;
}

.container2 {
  scrollbar-gutter: stable;
}
```

![Zwei nebeneinander liegende Divs, die Text enthalten, beide mit Platz für eine Scrollleiste](side-by-side.png)

### Overlay Scrollleisten

Zur Referenz zeigt dieses Bild dasselbe div wie oben, jedoch mit den Systemeinstellungen des Benutzers auf Overlay Scrollleisten eingestellt. Beachten Sie hier, dass die Scrollleiste nur angezeigt wird, wenn der Benutzer scrollt und über dem Inhalt ist. Daher wird kein Platz für sie reserviert und die Eigenschaft `scrollbar-gutter` hat keine Auswirkung.

![Ein Div mit Text, keine sichtbare Scrollleiste](for-ref-no-scroll.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS scrollbars styling](/de/docs/Web/CSS/CSS_scrollbars_styling) Modul
- {{CSSxRef("overflow")}}
- {{CSSxRef("scrollbar-width")}}
- {{CSSxRef("scrollbar-color")}}
