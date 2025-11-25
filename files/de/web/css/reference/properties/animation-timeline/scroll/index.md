---
title: scroll()
slug: Web/CSS/Reference/Properties/animation-timeline/scroll
l10n:
  sourceCommit: c7337a0656edf573bd7e0185049dab7f0fb1e398
---

Die **`scroll()`** [CSS-Funktion](/de/docs/Web/CSS/Reference/Values/Functions) kann verwendet werden, um den Scroller und die Achse einer [anonymen Scroll-Fortschrittszeitachse](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_scroll_progress_timelines) zu definieren.

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
  - : Das Scroller-Element, das die Scroll-Fortschrittszeitachse bereitstellen wird. Gültige Werte sind:
    - `nearest`
      - : Der nächste Vorfahre des aktuellen Elements, der auf einer der Achsen Rollbalken hat. Dies ist der Standardwert.
    - `root`
      - : Das Wurzelelement des Dokuments.
    - `self`
      - : Das aktuelle Element selbst.

- `<axis>`
  - : Ein {{ cssxref("axis") }} Schlüsselwortwert, der die Richtung oder Achse des Scrollbereichs beschreibt, der die scrollgesteuerte Animation steuert. Der Standardwert ist `block`.

## Beschreibung

Die `scroll()`-CSS-Funktion kann als Wert innerhalb der durch Kommas getrennten {{cssxref("animation-timeline")}} Eigenschaft verwendet werden, um eine Scroll-Fortschrittszeitachse für eine {{cssxref("@keyframes")}} Animation festzulegen. Sie definiert das scrollbare Element (_Scroller_) und die Rollbalkenachse, die die Animationszeitachse bereitstellen wird.

Standardmäßig bezieht sich `scroll()` auf die `block`-Achse des `nearest` Vorfahren-Scroll-Containers. Die Scroller- und Achsenwerte können in beliebiger Reihenfolge angegeben werden.

Die folgenden fünf Deklarationen sind gleichwertig:

```css
animation-timeline: scroll();
animation-timeline: scroll(block);
animation-timeline: scroll(nearest);
animation-timeline: scroll(block nearest);
animation-timeline: scroll(nearest block);
```

Die Fortschrittszeitachse des Scrollens wird durch horizontales oder vertikales Scrollen des Scrollers durchlaufen, abhängig von der `<axis>` und dem [Schreibmodus](/de/docs/Web/CSS/Guides/Writing_modes/Writing_mode_systems). Wenn die angegebene Achse keinen Rollbalken enthält, ist die Animationszeitachse inaktiv.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Festlegen einer anonymen Scroll-Fortschrittszeitachse

In diesem Beispiel wird das `#square`-Element mit einer anonymen Scroll-Fortschrittszeitachse animiert, die mithilfe der `scroll()`-Funktion auf das zu animierende Element angewendet wird.
Die Zeitleiste in diesem speziellen Beispiel wird durch das nächstgelegene übergeordnete Element bereitgestellt, das (irgendeinen) Rollbalken hat, vom Rollbalken in Blockrichtung.

#### HTML

Das HTML für das Beispiel ist unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das CSS unten definiert ein Quadrat, das sich gemäß der durch die `animation-timeline`-Eigenschaft bereitgestellten Zeitleiste in abwechselnden Richtungen dreht.
In diesem Fall wird die Zeitleiste durch `scroll(block nearest)` bereitgestellt, was bedeutet, dass sie den Rollbalken in der Blockrichtung des nächsten Vorfahrenelements auswählt, das Rollbalken hat; in diesem Fall der vertikale Rollbalken des "container"-Elements.

> [!NOTE]
> `block` und `nearest` sind tatsächlich die Standardparameterwerte, also hätten wir einfach `scroll()` verwenden können.

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

Das CSS für den Container setzt seine Höhe auf 300px und wir stellen auch ein, dass der Container einen vertikalen Rollbalken erstellt, wenn er überläuft.
Das "stretcher"-CSS setzt die Blockhöhe auf 600px, was den Container zwingt, überzulaufen.
Diese beiden zusammen sorgen dafür, dass der Container einen vertikalen Rollbalken hat, was es ermöglicht, ihn als Quelle der anonymen Scroll-Fortschrittszeitachse zu verwenden.

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

Scrollen Sie, um zu sehen, wie das Quadratelement animiert wird.

{{EmbedLiveSample("Setting an anonymous scroll progress timeline", "100%", "320px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- [CSS-Animationsmodul](/de/docs/Web/CSS/Guides/Animations)
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline)
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
