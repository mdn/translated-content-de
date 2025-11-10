---
title: scrollbar-gutter
slug: Web/CSS/Reference/Properties/scrollbar-gutter
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`scrollbar-gutter`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Autoren, Platz für die Scrollleiste zu reservieren, um unerwünschte Layout-Änderungen zu verhindern, während sich der Inhalt vergrößert, und vermeidet unnötige visuelle Elemente, wenn kein Scrollen benötigt wird.

Die _Scrollleistenmulde_ eines Elements ist der Raum zwischen dem inneren Rand des Rahmens und dem äußeren Rand der Polsterung, wo der Browser eine Scrollleiste anzeigen kann. Wenn keine Scrollleiste vorhanden ist, wird die Mulde als Erweiterung der Polsterung dargestellt.

Der Browser bestimmt, ob _klassische_ oder _Überlagerungs-Scrollleisten_ verwendet werden:

- Klassische Scrollleisten werden immer in einer Mulde platziert und nehmen Raum ein, wenn sie vorhanden sind.
- Überlagerungs-Scrollleisten werden über dem Inhalt platziert, nicht in einer Mulde, und sind in der Regel teilweise transparent.

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
  - : Der Initialwert. Klassische Scrollleisten erzeugen eine Mulde, wenn `overflow` auf `scroll` gesetzt ist oder wenn `overflow` auf `auto` gesetzt ist und die Box überläuft. Überlagerungs-Scrollleisten verbrauchen keinen Raum.
- `stable`
  - : Bei Verwendung von klassischen Scrollleisten wird die Mulde vorhanden sein, wenn `overflow` auf `auto`, `scroll` oder `hidden` gesetzt ist, selbst wenn die Box nicht überläuft. Bei Verwendung von Überlagerungs-Scrollleisten wird die Mulde nicht vorhanden sein.
- `both-edges`
  - : Wenn auf einer der inline start/end-Kanten der Box eine Mulde vorhanden wäre, wird auch auf der gegenüberliegenden Kante eine vorhanden sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Die unten stehenden Beispiele zeigen, wie die verschiedenen Werte der `scrollbar-gutter` Eigenschaft ein scrollbares `div` Element (`.container`) mit einem oder mehreren darin enthaltenen Absätzen beeinflussen würden.

> [!NOTE]
> In den Bildern für die Beispiele sind die Systemeinstellungen des Benutzers auf klassische Scrollleisten eingestellt (immer sichtbar).

### Beispiel 1

Verhindern von unnötigen Layout-Änderungen, da der Inhalt durch das Erscheinen/Verschwinden der Scrollleiste wächst oder schrumpft. Ein Platz wird dafür reserviert.

```css
.container {
  scrollbar-gutter: stable;
}
```

![Ein enthaltendes div-Element mit einem Absatz Text und einem Platz rechts, wo die Scrollleiste ist](stable-no-scroll.png)

### Beispiel 2

Symmetrischen Abstand zu beiden Seiten der Box hinzufügen, sodass der Inhalt zentriert ist:

```css
.container {
  scrollbar-gutter: stable both-edges;
}
```

![Ein enthaltendes div-Element mit einem Absatz Text, einem Platz rechts, wo die Scrollleiste ist, und einem entsprechenden leeren Raum links](stable-both-edges.png)

### Beispiel 3

Ausrichten der Inhalte eines nicht scrollenden Elements und eines daneben liegenden, scrollenden Elements:
Dieses Beispiel zeigt zwei divs nebeneinander. Das linke hat keinen Scroll, das rechte schon. Beide haben `scrollbar-gutter` angewendet, was auch Platz für das linke div reserviert, das keinen scrollbaren Inhalt hat. Dies ist eine gute Technik, um die Breite des Inhalts konsistent zu halten.

```css
.container1 {
  overflow: hidden;
  scrollbar-gutter: stable;
}

.container2 {
  scrollbar-gutter: stable;
}
```

![Zwei nebeneinanderliegende divs mit Text, beide mit Platz für eine Scrollleiste](side-by-side.png)

### Überlagerungs-Scrollleisten

Zum Vergleich zeigt dieses Bild dasselbe div wie oben, jedoch mit den Systemeinstellungen des Benutzers auf Überlagerungs-Scrollleisten gesetzt. Beachten Sie, dass die Scrollleiste nur angezeigt wird, wenn der Benutzer scrollt und sie über dem Inhalt liegt, sodass kein Platz dafür reserviert wird und die `scrollbar-gutter` Eigenschaft keine Wirkung hat.

![Ein div mit Text, keine sichtbare Scrollleiste](for-ref-no-scroll.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS overflow](/de/docs/Web/CSS/Guides/Overflow) Modul
- [CSS scrollbars styling](/de/docs/Web/CSS/Guides/Scrollbars_styling) Modul
- {{CSSxRef("overflow")}}
- {{CSSxRef("scrollbar-width")}}
- {{CSSxRef("scrollbar-color")}}
