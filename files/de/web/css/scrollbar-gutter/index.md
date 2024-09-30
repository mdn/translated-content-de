---
title: scrollbar-gutter
slug: Web/CSS/scrollbar-gutter
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die CSS-Eigenschaft **`scrollbar-gutter`** erlaubt es Autoren, Platz für die Scrollleiste zu reservieren, um unerwünschte Layout-Änderungen zu vermeiden, wenn der Inhalt wächst, während auch unnötige visuelle Elemente vermieden werden, wenn kein Scrollen erforderlich ist.

Die _scrollbar gutter_ eines Elements ist der Raum zwischen dem inneren Rand und der äußeren Auffüllkante, wo der Browser eine Scrollleiste anzeigen kann. Wenn keine Scrollleiste vorhanden ist, wird der Gutter als Erweiterung der Auffüllung dargestellt.

Der Browser bestimmt, ob _klassische_ oder _Overlay_-Scrollleisten verwendet werden:

- Klassische Scrollleisten werden immer in einem Gutter platziert und nehmen Platz ein, wenn sie vorhanden sind.
- Overlay-Scrollleisten werden über dem Inhalt platziert, nicht in einem Gutter, und sind normalerweise teilweise transparent.

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
  - : Der anfängliche Wert. Klassische Scrollleisten erzeugen einen Gutter, wenn `overflow` auf `scroll` gesetzt ist oder wenn `overflow` auf `auto` gesetzt ist und die Box überläuft. Overlay-Scrollleisten beanspruchen keinen Platz.
- `stable`
  - : Bei Verwendung klassischer Scrollleisten wird der Gutter vorhanden sein, wenn `overflow` auf `auto`, `scroll` oder `hidden` gesetzt ist, selbst wenn die Box nicht überläuft. Bei Verwendung von Overlay-Scrollleisten ist der Gutter nicht vorhanden.
- `both-edges`
  - : Wenn ein Gutter auf einer der Inline-Start-/Endkanten der Box vorhanden wäre, wird ein weiterer auf der gegenüberliegenden Kante ebenfalls vorhanden sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Die folgenden Beispiele zeigen, wie die verschiedenen Werte für die `scrollbar-gutter`-Eigenschaft ein scrollbares `div`-Element (`.container`) mit einem oder mehreren darin enthaltenen Absätzen beeinflussen würden.

> [!NOTE]
> In den Bildern für die Beispiele sind die Systemeinstellungen des Benutzers auf klassische Scrollleisten eingestellt (immer angezeigt).

### Beispiel 1

Verhindern unnotwendiger Layout-Änderungen, da das Wachsen oder Schrumpfen des Inhalts das Erscheinen/Verschwinden der Scrollleiste verursacht, wird ein Platz dafür reserviert.

```css
.container {
  scrollbar-gutter: stable;
}
```

![Ein enthaltendes div-Element mit einem Absatz Text darin und einem Platz rechts, wo die Scrollleiste ist](stable-no-scroll.png)

### Beispiel 2

Fügen Sie symmetrischen Abstand auf beiden Seiten der Box hinzu, damit der Inhalt zentriert ist:

```css
.container {
  scrollbar-gutter: stable both-edges;
}
```

![Ein enthaltendes div-Element mit einem Absatz Text darin, einem Platz rechts, wo die Scrollleiste ist und einem übereinstimmenden leeren Raum links](stable-both-edges.png)

### Beispiel 3

Richten Sie den Inhalt eines nicht scrollenden Elements und eines benachbart scrollenden Elements aus:
Dieses Beispiel zeigt zwei nebeneinander liegende divs. Das auf der linken Seite hat keinen Scroll, aber das auf der rechten Seite schon. Beide haben `scrollbar-gutter` angewendet, was auch Platz für das div auf der linken Seite reserviert, welches keinen scrollbaren Inhalt hat. Dies ist eine gute Technik, um die Breite des Inhalts konsistent zu halten.

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

Zum Vergleich zeigt dieses Bild dasselbe div wie oben, aber mit den System-Einstellungen des Benutzers auf Overlay-Scrollleisten. Beachten Sie hier, dass die Scrollleiste nur angezeigt wird, wenn der Benutzer scrollt und über dem Inhalt liegt, weshalb kein Platz dafür reserviert wird und die `scrollbar-gutter`-Eigenschaft keine Wirkung hat.

![Ein div mit Text, keine sichtbare Scrollleiste](for-ref-no-scroll.png)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Scrollleisten-Styling](/de/docs/Web/CSS/CSS_scrollbars_styling) Modul
- {{CSSxRef("overflow")}}
- {{CSSxRef("scrollbar-width")}}
- {{CSSxRef("scrollbar-color")}}
