---
title: scroll()
slug: Web/CSS/Reference/Properties/animation-timeline/scroll
l10n:
  sourceCommit: b7534af9f369a80fe12556cba781890e87a171d9
---

Die **`scroll()`** [CSS-Funktion](/de/docs/Web/CSS/Reference/Values/Functions) kann mit der {{cssxref("animation-timeline")}}-Eigenschaft verwendet werden, um eine [anonyme Scroll-Fortschritt-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_scroll_progress_timelines) zu erstellen, die den Scroller und die Achse der Timeline definiert.

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
  - : Das Scroller-Element, das die Scroll-Fortschritt-Timeline bereitstellt. Gültige Werte schließen ein:
    - `nearest`
      - : Der nächstgelegene Vorfahre des aktuellen Elements, der auf einer der Achsen Bildlaufleisten hat. Dies ist der Standardwert.
    - `root`
      - : Das Wurzelelement des Dokuments.
    - `self`
      - : Das aktuelle Element selbst.

- `<axis>`
  - : Ein {{ cssxref("axis") }} Schlüsselwortwert, der die Richtung oder Achse des Scrollports beschreibt, der die scrollgesteuerte Animation steuert. Der Standardwert ist `block`.

## Beschreibung

Die `scroll()` CSS-Funktion kann als Einzelwert innerhalb der durch Kommas getrennten {{cssxref("animation-timeline")}}-Eigenschaft verwendet werden, um eine Scroll-Fortschritt-Timeline für eine {{cssxref("@keyframes")}}-Animation anzugeben. Sie definiert das scrollbare Element (_scroller_) und die Bildlaufleistenachse, die die Animationstimeline bereitstellen wird.

Standardmäßig bezieht sich `scroll()` auf die `block`-Achse des `nearest` Vorfahren-Scrollcontainers. Die Scroller- und Achsenwerte können in beliebiger Reihenfolge angegeben werden.

Die folgenden fünf Deklarationen sind gleichwertig:

```css
animation-timeline: scroll();
animation-timeline: scroll(block);
animation-timeline: scroll(nearest);
animation-timeline: scroll(block nearest);
animation-timeline: scroll(nearest block);
```

Die Scroll-Fortschritt-Timeline wird durch das horizontale oder vertikale Scrollen des Scrollers vorangetrieben, abhängig von der `<axis>` und dem [Schriftsystem](/de/docs/Web/CSS/Guides/Writing_modes/Writing_mode_systems). Wenn die angegebene Achse keine Bildlaufleiste enthält, wird die Animationstimeline inaktiv sein.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Eine anonyme Scroll-Fortschritt-Timeline festlegen

In diesem Beispiel wird das `#square` Element mit einer anonymen Scroll-Fortschritt-Timeline animiert, die auf das zu animierende Element mit der `scroll()`-Funktion angewendet wird. Die Timeline in diesem speziellen Beispiel wird vom nächstgelegenen Elternelement bereitgestellt, das (eine beliebige) Bildlaufleiste hat, von der Bildlaufleiste in der Blockrichtung.

#### HTML

Das HTML für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das untenstehende CSS definiert ein Quadrat, das sich in abwechselnden Richtungen entsprechend der durch die `animation-timeline`-Eigenschaft bereitgestellten Timeline dreht. In diesem Fall wird die Timeline durch `scroll(block nearest)` bereitgestellt, was bedeutet, dass sie die Bildlaufleiste in der Blockrichtung des nächstgelegenen Vorfahr-Elements auswählt, das Bildlaufleisten hat; in diesem Fall die vertikale Bildlaufleiste des "container"-Elements.

> [!NOTE]
> `block` und `nearest` sind tatsächlich die Standardparameterwerte, daher könnten wir einfach `scroll()` verwenden.

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

Das CSS für den Container setzt seine Höhe auf 300px und wir setzen den Container so, dass er eine vertikale Bildlaufleiste erstellt, wenn er überläuft. Das "stretcher" CSS setzt die Blockhöhe auf 600px, was das Containerelement zum Überlaufen zwingt. Diese beiden zusammen stellen sicher, dass der Container eine vertikale Bildlaufleiste hat, die als Quelle der anonymen Scroll-Fortschritt-Timeline verwendet werden kann.

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
      padding: 1em;
    }
  }
}
```

#### Ergebnis

Scrollen Sie, um das animierte Quadrat-Element zu sehen.

{{EmbedLiveSample("Setting an anonymous scroll progress timeline", "100%", "320px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- [CSS-Animations](/de/docs/Web/CSS/Guides/Animations) Modul
- [CSS-scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline)
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
