---
title: "`scrollbar-gutter` CSS property"
short-title: scrollbar-gutter
slug: Web/CSS/Reference/Properties/scrollbar-gutter
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`scrollbar-gutter`** [CSS](/de/docs/Web/CSS) Eigenschaft erlaubt es den Autoren, Platz für die Scrollleiste zu reservieren, um unerwünschte Layoutänderungen zu vermeiden, wenn der Inhalt wächst, gleichzeitig werden unnötige visuelle Elemente vermieden, wenn kein Scrollen benötigt wird.

Der _scrollbar gutter_ eines Elements ist der Raum zwischen dem inneren Rand und dem äußeren Padding-Rand, in dem der Browser möglicherweise eine Scrollleiste anzeigt. Wenn keine Scrollleiste vorhanden ist, wird der Gutter als Erweiterung des Paddings angezeigt.

Der Browser entscheidet, ob _klassische_ Scrollleisten oder _überlagerte_ Scrollleisten verwendet werden:

- Klassische Scrollleisten werden immer in einem Gutter platziert und nehmen bei Vorhandensein Platz ein.
- Überlagerte Scrollleisten werden über den Inhalt gelegt, nicht in einem Gutter, und sind normalerweise teilweise transparent.

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
  - : Der Anfangswert. Klassische Scrollleisten erzeugen einen Gutter, wenn `overflow` auf `scroll` gesetzt ist, oder wenn `overflow` auf `auto` gesetzt ist und die Box überläuft. Überlagerte Scrollleisten verbrauchen keinen Platz.
- `stable`
  - : Bei Verwendung klassischer Scrollleisten ist der Gutter präsent, wenn `overflow` auf `auto`, `scroll` oder `hidden` gesetzt ist, selbst wenn die Box nicht überläuft. Bei überlagerten Scrollleisten ist der Gutter nicht vorhanden.
- `both-edges`
  - : Wenn ein Gutter an einem der Anfangs-/Endränder der Box vorhanden wäre, wird ein weiterer Gutter auf der gegenüberliegenden Seite vorhanden sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Die folgenden Beispiele zeigen, wie die verschiedenen Werte der Eigenschaft `scrollbar-gutter` ein scrollbares `div`-Element (`.container`) mit einem oder mehreren Absatz(en) darin beeinflussen würden.

> [!NOTE]
> In den Bildern zu den Beispielen sind die Systemeinstellungen des Benutzers auf klassische Scrollleisten eingestellt (immer sichtbar).

### Beispiel 1

Verhindern Sie unnötige Layoutänderungen, da das Wachsen oder Schrumpfen des Inhalts das Auftauchen/Verschwinden der Scrollleiste verursacht. Ein Platz wird dafür reserviert.

```css
.container {
  scrollbar-gutter: stable;
}
```

![Ein enthaltendes div-Element mit einem Absatz von Text darin und einem Raum rechts, wo die Scrollleiste ist](stable-no-scroll.png)

### Beispiel 2

Fügen Sie symmetrischen Abstand zu beiden Seiten der Box hinzu, sodass der Inhalt zentriert ist:

```css
.container {
  scrollbar-gutter: stable both-edges;
}
```

![Ein enthaltendes div-Element mit einem Absatz von Text darin, einem Raum rechts, wo die Scrollleiste ist, und einem entsprechenden leeren Raum links](stable-both-edges.png)

### Beispiel 3

Richten Sie die Inhalte eines nicht-scrollenden Elements und eines scrollenden daneben aus:
Dieses Beispiel zeigt zwei `divs` nebeneinander. Das linke hat keinen Scroll, aber das rechte schon. Beide haben `scrollbar-gutter` angewendet, was auch Platz für das linke `div` reserviert, das keinen scrollbaren Inhalt hat. Dies ist eine gute Technik, um die Breite des Inhalts konsistent zu halten.

```css
.container1 {
  overflow: hidden;
  scrollbar-gutter: stable;
}

.container2 {
  scrollbar-gutter: stable;
}
```

![Zwei angrenzende divs, die Text enthalten, beide mit Platz für eine Scrollleiste](side-by-side.png)

### Überlagerte Scrollleisten

Zum Referenzieren zeigt dieses Bild das gleiche `div` wie oben, jedoch mit den Systemeinstellungen des Benutzers auf überlagerte Scrollleisten gesetzt. Beachten Sie hier, dass die Scrollleiste nur angezeigt wird, wenn der Benutzer scrollt und über dem Inhalt liegt, sodass kein Platz dafür reserviert wird und die `scrollbar-gutter`-Eigenschaft keinen Effekt hat.

![Ein div mit Text, keine sichtbare Scrollleiste](for-ref-no-scroll.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Überlauf](/de/docs/Web/CSS/Guides/Overflow) Modul
- [CSS-Scrollleisten-Styling](/de/docs/Web/CSS/Guides/Scrollbars_styling) Modul
- {{CSSxRef("overflow")}}
- {{CSSxRef("scrollbar-width")}}
- {{CSSxRef("scrollbar-color")}}
