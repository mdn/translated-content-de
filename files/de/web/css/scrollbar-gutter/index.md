---
title: scrollbar-gutter
slug: Web/CSS/scrollbar-gutter
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`scrollbar-gutter`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Autoren, Platz für die Scrollbar zu reservieren, um unerwünschte Layout-Änderungen zu verhindern, während der Inhalt wächst, und gleichzeitig unnötige visuelle Elemente zu vermeiden, wenn das Scrollen nicht erforderlich ist.

Die _Scrollbar-Nut_ eines Elements ist der Raum zwischen der inneren Randkante und der äußeren Auffüllungskante, wo der Browser möglicherweise eine Scrollbar anzeigt. Wenn keine Scrollbar vorhanden ist, wird die Nut als Erweiterung der Auffüllung dargestellt.

Der Browser bestimmt, ob _klassische_ Scrollbars oder _Overlay_ Scrollbars verwendet werden:

- Klassische Scrollbars sind immer in einer Nut platziert und nehmen Platz ein, wenn sie vorhanden sind.
- Overlay Scrollbars werden über dem Inhalt platziert, nicht in einer Nut, und sind normalerweise teilweise transparent.

## Syntax

```css
/* Initialwert */
scrollbar-gutter: auto;

/* "stable"-Schlüsselwort, mit optionalem Zusatz */
scrollbar-gutter: stable;
scrollbar-gutter: stable both-edges;

/* Globale Werte */
scrollbar-gutter: inherit;
scrollbar-gutter: initial;
scrollbar-gutter: revert;
scrollbar-gutter: revert-layer;
scrollbar-gutter: unset;
```

### Werte

- `auto`
  - : Der Initialwert. Klassische Scrollbars erzeugen eine Nut, wenn `overflow` auf `scroll` steht oder wenn `overflow` auf `auto` steht und die Box überläuft. Overlay Scrollbars verbrauchen keinen Platz.
- `stable`
  - : Bei Verwendung von klassischen Scrollbars wird die Nut vorhanden sein, wenn `overflow` auf `auto`, `scroll` oder `hidden` steht, selbst wenn die Box nicht überläuft. Bei der Verwendung von Overlay Scrollbars wird die Nut nicht vorhanden sein.
- `both-edges`
  - : Wenn eine Nut an einem der Inline-Start/End-Kanten der Box vorhanden wäre, ist eine weitere Nut auch an der gegenüberliegenden Kante vorhanden.

## Formale Definition

{{cssinfo}}

## Formaler Syntax

{{csssyntax}}

## Beispiele

Die folgenden Beispiele zeigen, wie die unterschiedlichen Werte der `scrollbar-gutter`-Eigenschaft ein scrollbares `div`-Element (`.container`) mit einem oder mehreren Absätzen beeinflussen würden.

> [!NOTE]
> In den Bildern der Beispiele sind die Systemeinstellungen des Benutzers auf klassische Scrollbars (immer sichtbar) eingestellt.

### Beispiel 1

Um unnötige Layout-Änderungen zu verhindern, da das Wachsen oder Schrumpfen des Inhalts das Erscheinen oder Verschwinden der Scrollbar verursacht, wird ein Platz dafür reserviert.

```css
.container {
  scrollbar-gutter: stable;
}
```

![Ein enthaltendes div-Element mit einem Textabschnitt und einem Platz rechts, wo sich die Scrollbar befindet](stable-no-scroll.png)

### Beispiel 2

Fügen Sie symmetrischen Abstand auf beiden Seiten der Box hinzu, damit der Inhalt zentriert ist:

```css
.container {
  scrollbar-gutter: stable both-edges;
}
```

![Ein enthaltendes div-Element mit einem Textabschnitt, einem Platz rechts, wo die Scrollbar ist und einem passenden leeren Raum links](stable-both-edges.png)

### Beispiel 3

Ausrichten des Inhalts eines nicht scrollenden Elements und eines scrollenden Elements daneben:
Dieses Beispiel zeigt zwei divs nebeneinander. Das linke hat keine Scrollfunktion, aber das rechte schon. Beide haben `scrollbar-gutter` angewendet, was auch für das linke div Platz reserviert, das keinen scrollbaren Inhalt hat. Dies ist eine gute Technik, um die Breite des Inhalts konsistent zu halten.

```css
.container1 {
  overflow: hidden;
  scrollbar-gutter: stable;
}

.container2 {
  scrollbar-gutter: stable;
}
```

![Zwei nebeneinanderliegende divs mit Text, beide mit Platz für eine Scrollbar](side-by-side.png)

### Overlay Scrollbars

Zur Referenz zeigt dieses Bild dasselbe div wie oben, jedoch mit den Systemeinstellungen des Benutzers auf Overlay Scrollbars eingestellt. Beachten Sie hier, dass die Scrollbar nur angezeigt wird, wenn der Benutzer scrollt und über dem Inhalt liegt, sodass kein Platz dafür reserviert wird und die `scrollbar-gutter`-Eigenschaft keine Wirkung hat.

![Ein div mit Text, keine sichtbare Scrollbar](for-ref-no-scroll.png)

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
