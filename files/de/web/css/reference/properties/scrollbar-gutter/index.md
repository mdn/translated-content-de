---
title: scrollbar-gutter
slug: Web/CSS/Reference/Properties/scrollbar-gutter
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`scrollbar-gutter`**-[CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es Autoren, Platz für die Scrollleiste zu reservieren und unerwünschte Layout-Änderungen zu verhindern, wenn der Inhalt wächst. Gleichzeitig werden unnötige visuelle Elemente vermieden, wenn kein Scrollen erforderlich ist.

Die _scrollbar gutter_ eines Elements ist der Bereich zwischen der inneren Randlinie und der äußeren Polsterungslinie, in dem der Browser eine Scrollleiste anzeigen kann. Ist keine Scrollleiste vorhanden, wird der Gutter als Erweiterung der Polsterung dargestellt.

Der Browser bestimmt, ob _klassische_ oder _Overlay_-Scrollleisten verwendet werden:

- Klassische Scrollleisten befinden sich immer in einem Gutter und verbrauchen Platz, wenn sie vorhanden sind.
- Overlay-Scrollleisten werden über den Inhalt gelegt, nicht in einem Gutter, und sind normalerweise teilweise transparent.

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
  - : Der Anfangswert. Klassische Scrollleisten erzeugen einen Gutter, wenn `overflow` auf `scroll` gesetzt ist oder wenn `overflow` auf `auto` steht und die Box überläuft. Overlay-Scrollleisten verbrauchen keinen Platz.
- `stable`
  - : Bei Verwendung klassischer Scrollleisten wird der Gutter vorhanden sein, wenn `overflow` auf `auto`, `scroll` oder `hidden` gesetzt ist, auch wenn die Box nicht überläuft. Bei Verwendung von Overlay-Scrollleisten wird der Gutter nicht vorhanden sein.
- `both-edges`
  - : Wenn ein Gutter an einem der Inline-Anfangs-/Endränder der Box vorhanden wäre, wird ein weiterer auch auf der gegenüberliegenden Seite vorhanden sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Die folgenden Beispiele zeigen, wie die unterschiedlichen Werte der `scrollbar-gutter`-Eigenschaft ein scrollbares `div`-Element (`.container`) mit einem oder mehreren enthaltenen Absätzen beeinflussen würden.

> [!NOTE]
> In den Bildern zu den Beispielen sind die Systemeinstellungen des Benutzers auf klassische Scrollleisten eingestellt (immer sichtbar).

### Beispiel 1

Um unnötige Layout-Änderungen zu verhindern, wenn das Wachstum oder Schrumpfen des Inhalts dazu führt, dass die Scrollleiste erscheint oder verschwindet, wird Platz dafür reserviert.

```css
.container {
  scrollbar-gutter: stable;
}
```

![Ein umschließendes div-Element mit einem Absatz Text darin und einem Bereich rechts, in dem sich die Scrollleiste befindet](stable-no-scroll.png)

### Beispiel 2

Symmetrischer Abstand zu beiden Seiten der Box hinzufügen, damit der Inhalt zentriert ist:

```css
.container {
  scrollbar-gutter: stable both-edges;
}
```

![Ein umschließendes div-Element mit einem Absatz Text darin, einem Bereich rechts, in dem sich die Scrollleiste befindet, und einem passenden leeren Bereich links](stable-both-edges.png)

### Beispiel 3

Den Inhalt eines nicht scrollenden Elements und eines daran anschließenden scrollenden Elements ausrichten: Dieses Beispiel zeigt zwei divs nebeneinander. Das linke hat keinen Scroll, aber das rechte schon. Beide haben `scrollbar-gutter` angewendet, was auch für das linke div, das keinen scrollbaren Inhalt hat, Platz reserviert. Dies ist eine gute Technik, um die Breite des Inhalts konsistent zu halten.

```css
.container1 {
  overflow: hidden;
  scrollbar-gutter: stable;
}

.container2 {
  scrollbar-gutter: stable;
}
```

![Zwei nebeneinander liegende divs mit Text, beide mit Platz für eine Scrollleiste](side-by-side.png)

### Overlay-Scrollleisten

Zur Referenz zeigt dieses Bild dasselbe div wie oben, jedoch mit den Systemeinstellungen des Benutzers auf Overlay-Scrollleisten eingestellt. Hier wird die Scrollleiste nur angezeigt, wenn der Benutzer scrollt und über dem Inhalt liegt, sodass kein Platz dafür reserviert ist und die `scrollbar-gutter`-Eigenschaft keine Wirkung hat.

![Ein div mit Text, keine sichtbare Scrollleiste](for-ref-no-scroll.png)

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
