---
title: "`scroll()` CSS-Funktion"
short-title: scroll()
slug: Web/CSS/Reference/Properties/animation-timeline/scroll
l10n:
  sourceCommit: a8b7faffbd3fdeae5c0be97793d963d8a31cd1cf
---

Die **`scroll()`** [CSS-Funktion](/de/docs/Web/CSS/Reference/Values/Functions) kann mit der {{cssxref("animation-timeline")}}-Eigenschaft verwendet werden, um eine [anonyme Scroll-Fortschritts-Zeitachse](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_scroll_progress_timelines) zu erstellen, die den Scroller und die Achse der Zeitachse definiert.

## Syntax

```css
/* No arguments */
animation-timeline: scroll();

/* <scroller> argument only */
animation-timeline: scroll(nearest);
animation-timeline: scroll(root);
animation-timeline: scroll(self);

/*`<axis>` argument only */
animation-timeline: scroll(block);
animation-timeline: scroll(inline);
animation-timeline: scroll(y);
animation-timeline: scroll(x);

/* <scroller> and <axis> */
animation-timeline: scroll(block nearest);
animation-timeline: scroll(inline root);
animation-timeline: scroll(x self);
```

### Parameter

- `<scroller>`
  - : Das Scroller-Element, das die Scroll-Fortschritts-Zeitachse bereitstellen wird. Gültige Werte umfassen:
    - `nearest`
      - : Der nächste Vorfahre des aktuellen Elements, der Bildlaufleisten in einer der Achsen hat. Dies ist der Standardwert.
    - `root`
      - : Das Wurzelelement des Dokuments.
    - `self`
      - : Das aktuelle Element selbst.

- `<axis>`
  - : Ein {{ cssxref("axis") }} Schlüsselwortwert, der die Richtung oder Achse des Scrollports beschreibt, der die scrollgesteuerte Animation steuert. Der Standardwert ist `block`.

## Beschreibung

Die `scroll()` CSS-Funktion kann als Einzelwert innerhalb der durch Kommas getrennten {{cssxref("animation-timeline")}}-Eigenschaft verwendet werden, um eine Scroll-Fortschritts-Zeitachse für eine {{cssxref("@keyframes")}}-Animation festzulegen. Sie definiert das scrollbare Element (_scroller_) und die Bildlaufleistenachse, die die Animations-Zeitachse bereitstellen wird.

Standardmäßig bezieht sich `scroll()` auf die `block`-Achse des `nearest` Vorfahre-Scrollcontainers. Die Scroller- und Achsenwerte können in beliebiger Reihenfolge angegeben werden.

Die folgenden fünf Deklarationen sind gleichwertig:

```css
animation-timeline: scroll();
animation-timeline: scroll(block);
animation-timeline: scroll(nearest);
animation-timeline: scroll(block nearest);
animation-timeline: scroll(nearest block);
```

Die Scroll-Fortschritts-Zeitachse wird durch horizontalen oder vertikalen Scrollen des Scrollers durchlaufen, abhängig von der `<axis>` und dem [Schriftsystem](/de/docs/Web/CSS/Guides/Writing_modes/Writing_mode_systems). Wenn die angegebene Achse keine Bildlaufleiste enthält, bleibt die Animations-Zeitachse inaktiv.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Anonyme Scroll-Fortschritts-Zeitachse festlegen

In diesem Beispiel wird das `#square` Element mit einer anonymen Scroll-Fortschritts-Zeitachse animiert, die auf das zu animierende Element mit der `scroll()`-Funktion angewendet wird. Die Zeitachse in diesem speziellen Beispiel wird durch das nächste Elternelement mit (irgendeiner) Bildlaufleiste bereitgestellt, und zwar der Bildlaufleiste in der Blockrichtung.

#### HTML

Der HTML-Code für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Der CSS-Code unten definiert ein Quadrat, das sich abwechselnd nach den Richtungen der durch die `animation-timeline`-Eigenschaft bereitgestellten Zeitachse dreht. In diesem Fall wird die Zeitachse durch `scroll(block nearest)` bereitgestellt, was bedeutet, dass sie die Bildlaufleiste in der Blockrichtung des nächsten Vorfahre-Elements auswählt, das Bildlaufleisten hat; in diesem Fall die vertikale Bildlaufleiste des "Container"-Elements.

> [!NOTE]
> `block` und `nearest` sind tatsächlich die Standardparameterwerte, daher hätten wir nur `scroll()` verwenden können.

```css
#square {
  background-color: deeppink;
  width: 100px;
  height: 100px;
  margin-top: 100px;
  position: absolute;
  bottom: 0;

  animation-name: rotateAnimation;
  animation-duration: 1ms; /* Firefox requires this to apply the animation */
  animation-direction: alternate;
  animation-timeline: scroll(block nearest);
}

@keyframes rotateAnimation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

Der CSS-Code für den Container setzt seine Höhe auf 300px und wir setzen den Container so, dass er eine vertikale Bildlaufleiste erzeugt, wenn er überläuft. Der "Stretcher"-CSS setzt die Blockhöhe auf 600px, was das Überlaufen des Containerelements erzwingt. Diese beiden zusammen sorgen dafür, dass der Container eine vertikale Bildlaufleiste hat, was erlaubt, ihn als Quelle der anonymen Scroll-Fortschritts-Zeitachse zu verwenden.

```css
#container {
  height: 300px;
  overflow-y: scroll;
  position: relative;
}

#stretcher {
  height: 600px;
}
```

```css hidden
@layer no-support {
  @supports not (animation-timeline: scroll()) {
    body::before {
      content: "Your browser doesn't support the CSS `scroll()` function.";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

#### Ergebnis

Scrollen Sie, um zu sehen, wie das quadratische Element animiert wird.

{{EmbedLiveSample("Setting an anonymous scroll progress timeline", "100%", "320px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- [CSS-Animations-Modul](/de/docs/Web/CSS/Guides/Animations)
- [CSS scrollgesteuerte Animationen-Modul](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
- [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline)
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
