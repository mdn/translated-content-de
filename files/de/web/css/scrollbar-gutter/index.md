---
title: scrollbar-gutter
slug: Web/CSS/scrollbar-gutter
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`scrollbar-gutter`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Autoren, Platz für die Scrollleiste zu reservieren, um unerwünschte Layoutänderungen zu verhindern, während der Inhalt wächst, und vermeidet unnötige visuelle Darstellungen, wenn kein Scrollen erforderlich ist.

Der _scrollbar gutter_ eines Elements ist der Raum zwischen dem inneren Rand und dem äußeren Polsterrand, in dem der Browser eine Scrollleiste anzeigen kann. Wenn keine Scrollleiste vorhanden ist, wird die Leiste als Erweiterung der Polsterung dargestellt.

Der Browser entscheidet, ob _klassische_ oder _Overlay_-Scrollleisten verwendet werden:

- Klassische Scrollleisten befinden sich immer in einer Leiste und verbrauchen Platz, wenn sie vorhanden sind.
- Overlay-Scrollleisten liegen über dem Inhalt, nicht in einer Leiste, und sind normalerweise teilweise transparent.

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
  - : Der Initialwert. Klassische Scrollleisten erzeugen eine Leiste, wenn `overflow` `scroll` ist oder wenn `overflow` `auto` ist und der Kasten überläuft. Overlay-Scrollleisten verbrauchen keinen Platz.
- `stable`
  - : Bei Verwendung klassischer Scrollleisten wird die Leiste vorhanden sein, wenn `overflow` `auto`, `scroll` oder `hidden` ist, auch wenn der Kasten nicht überläuft. Bei Verwendung von Overlay-Scrollleisten wird die Leiste nicht vorhanden sein.
- `both-edges`
  - : Wenn eine Leiste an einem der Inline-Start-/Ende-Ränder des Kastens vorhanden wäre, wird auch auf der gegenüberliegenden Seite eine vorhanden sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Die folgenden Beispiele zeigen, wie die verschiedenen Werte der `scrollbar-gutter` Eigenschaft ein scrollbares `div` Element (`.container`) mit einem oder mehreren enthaltenen Absätzen beeinflussen würden.

> [!NOTE]
> In den Bildern für die Beispiele sind die Systemeinstellungen des Benutzers auf klassische Scrollleisten eingestellt (immer sichtbar).

### Beispiel 1

Um unnötige Layoutänderungen zu verhindern, wenn der Inhalt wächst oder schrumpft und die Scrollleiste erscheint oder verschwindet, wird Platz für sie reserviert.

```css
.container {
  scrollbar-gutter: stable;
}
```

![Ein enthaltendes div-Element mit einem Textabsatz darin und einem Platz rechts, wo die Scrollleiste ist](stable-no-scroll.png)

### Beispiel 2

Fügen Sie symmetrisches Leerzeichen auf beiden Seiten des Kastens hinzu, damit der Inhalt zentriert ist:

```css
.container {
  scrollbar-gutter: stable both-edges;
}
```

![Ein enthaltendes div-Element mit einem Textabsatz darin, einem Platz rechts, wo die Scrollleiste ist, und einem passenden leeren Platz links](stable-both-edges.png)

### Beispiel 3

Die Inhalte eines nicht scrollenden Elements und eines daneben liegenden scrollenden Elements ausrichten:
Dieses Beispiel zeigt zwei divs nebeneinander. Das linke hat keinen Scroll, aber das rechte schon. Beide haben `scrollbar-gutter` angewendet, was auch Platz für das linke div reserviert, das keinen scrollbaren Inhalt hat. Dies ist eine gute Technik, um die Breite des Inhalts konsistent zu halten.

```css
.container1 {
  overflow: hidden;
  scrollbar-gutter: stable;
}

.container2 {
  scrollbar-gutter: stable;
}
```

![Zwei angrenzende divs mit Text, beide mit Platz für eine Scrollleiste](side-by-side.png)

### Overlay-Scrollleisten

Zur Referenz zeigt dieses Bild das gleiche div wie oben, aber mit den Systemeinstellungen des Benutzers auf Overlay-Scrollleisten eingestellt. Beachten Sie hier, dass die Scrollleiste nur angezeigt wird, wenn der Benutzer scrollt und über dem Inhalt liegt, sodass kein Platz für sie reserviert wird und die `scrollbar-gutter` Eigenschaft keine Wirkung hat.

![Ein div mit Text, keine sichtbare Scrollleiste](for-ref-no-scroll.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Scrollleisten-Styling](/de/docs/Web/CSS/CSS_scrollbars_styling) Modul
- {{CSSxRef("overflow")}}
- {{CSSxRef("scrollbar-width")}}
- {{CSSxRef("scrollbar-color")}}
