---
title: view()
slug: Web/CSS/animation-timeline/view
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{CSSRef}}

Die **`view()`** [CSS-Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) kann mit {{cssxref("animation-timeline")}} verwendet werden, um ein Subjektelement zu kennzeichnen, das eine anonyme Fortschrittszeitachse zur Ansicht bereitstellt, um Animationen zu steuern. Die Fortschrittszeitachse der Ansicht wird durch eine Änderung der Sichtbarkeit des Subjektelements innerhalb des nächstgelegenen Scrollers fortgeschritten. Die Sichtbarkeit des Subjekts innerhalb des Scrollers wird verfolgt – standardmäßig ist die Zeitleiste bei 0 %, wenn das Subjekt erstmals an einem Rand des Scrollers sichtbar ist, und bei 100 %, wenn es den gegenüberliegenden Rand erreicht.

Die Parameter der Funktion können die Scrollbalkenachse angeben, entlang der die Fortschritte der Zeitleiste verfolgt werden, sowie einen Versatz, der die Position des Kastens anpasst, in dem das Subjekt sichtbar ist.

> [!NOTE]
> Wenn die angegebene Achse keinen Scrollbalken enthält, wird die Animationszeitleiste inaktiv sein (kein Fortschritt aufweisen).

> [!NOTE]
> Jede Verwendung von `view()` entspricht einer eigenen, eindeutigen Instanz von [`ViewTimeline`](/de/docs/Web/API/ViewTimeline) in der [Web Animations API](/de/docs/Web/API/Web_Animations_API).

## Syntax

```css
/* Function with no parameters set */
animation-timeline: view();

/* Values for selecting the axis */
animation-timeline: view(block); /* Default */
animation-timeline: view(inline);
animation-timeline: view(y);
animation-timeline: view(x);

/* Values for the inset */
animation-timeline: view(auto); /* Default */
animation-timeline: view(20%);
animation-timeline: view(200px);
animation-timeline: view(20% 40%);
animation-timeline: view(20% 200px);
animation-timeline: view(100px 200px);
animation-timeline: view(auto 200px);

/* Examples that specify axis and inset */
animation-timeline: view(block auto); /* Default */
animation-timeline: view(inline 20%);
animation-timeline: view(x 200px auto);
```

### Parameter

- axis

  - : Der Wert der Scrollbalkenachse kann einer der folgenden sein:

    - `block`
      - : Der Scrollbalken auf der Blockachse des Scrollcontainers, also die Achse in der Richtung, die senkrecht zum Textfluss innerhalb einer Zeile verläuft.
        Für horizontale Schreibmodi, wie das Standard-Englisch, ist dies dasselbe wie `y`, während es für vertikale Schreibmodi dasselbe wie `x` ist. Dies ist der Standardwert.
    - `inline`
      - : Der Scrollbalken auf der Inline-Achse des Scrollcontainers, also die Achse in der Richtung, die parallel zum Textfluss in einer Zeile verläuft.
        Für horizontale Schreibmodi ist dies dasselbe wie `x`, während es für vertikale Schreibmodi dasselbe wie `y` ist.
    - `y`
      - : Der Scrollbalken auf der Vertikalachse des Scrollcontainers.
    - `x`
      - : Der Scrollbalken auf der Horizontalachse des Scrollcontainers.

- inset

  - : Der Wert des Versatzes kann ein oder zwei Werte sein, die entweder `auto` oder eine {{cssxref("length-percentage")}} sein können. Er gibt einen Versatz (positiv) oder ein Ausmaß (negativ) der Anpassung des {{Glossary("Scroll_container#scrollport", "Scrollports")}} an. Der Versatz wird verwendet, um zu bestimmen, ob das Element im Sichtbereich ist, was die Länge der Animationszeitleiste bestimmt. Mit anderen Worten: Die Animation dauert so lange, wie das Element im an den Versatz angepassten Sichtbereich ist.

    - start
      - : Nach innen gerichteter Versatz vom Anfang des Scrollports.
    - end
      - : Nach innen gerichteter Versatz vom Ende des Scrollports.

> [!NOTE]
> Die Werte für Scroller und Versatz können in beliebiger Reihenfolge angegeben werden.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Festlegen einer anonymen Fortschrittszeitachse der Ansicht

Eine anonyme Fortschrittszeitachse der Ansicht wird auf ein Element mit der Klasse `subject` durch `animation-timeline: view()` festgelegt. Das Ergebnis ist, dass das Element `subject` animiert wird, während es beim Scrollen nach oben durch das Dokument bewegt wird.

#### HTML

Das HTML für das Beispiel wird unten gezeigt.

```html
<div class="content">
  <h1>Content</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam
    quisque id. Et ligula ullamcorper malesuada proin libero nunc consequat
    interdum varius. Elit ullamcorper dignissim cras tincidunt lobortis feugiat
    vivamus at augue.
  </p>

  <p>
    Dolor sed viverra ipsum nunc aliquet. Sed sed risus pretium quam vulputate
    dignissim. Tortor aliquam nulla facilisi cras. A erat nam at lectus urna
    duis convallis convallis. Nibh ipsum consequat nisl vel pretium lectus.
    Sagittis aliquam malesuada bibendum arcu vitae elementum. Malesuada bibendum
    arcu vitae elementum curabitur vitae nunc sed velit.
  </p>

  <div class="subject-container">
    <div class="subject animation"></div>
  </div>

  <p>
    Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Arcu
    cursus vitae congue mauris rhoncus aenean vel. Sit amet cursus sit amet
    dictum. Augue neque gravida in fermentum et. Gravida rutrum quisque non
    tellus orci ac auctor augue mauris. Risus quis varius quam quisque id diam
    vel quam elementum. Nibh praesent tristique magna sit amet purus gravida
    quis. Duis ultricies lacus sed turpis tincidunt id aliquet. In egestas erat
    imperdiet sed euismod nisi. Eget egestas purus viverra accumsan in nisl nisi
    scelerisque. Netus et malesuada fames ac.
  </p>
</div>
<div class="overlay top">inset start 50%</div>
<div class="overlay bottom">inset end 10%</div>
```

#### CSS

Die Elemente `subject` und `content` sind minimal gestylt, und dem Textinhalt werden einige grundlegende Schriftarteneinstellungen zugewiesen:

```css
.subject {
  width: 300px;
  height: 200px;
  background-color: deeppink;
}

.content {
  width: 75%;
  max-width: 800px;
  margin: 0 auto;
}

p {
  font-size: 1.5rem;
  line-height: 1.8;
}
```

Um das Verständnis des Ergebnisses zu erleichtern, wurden zusätzliche Elemente `subject-container`, `top` und `bottom` verwendet. Der `subject-container` zeigt die Grenzen der Animation. Halbtransparente `top` und `bottom` Overlays markieren den Versatz im versetzten Scrollport.

```css
.subject-container {
  border: 2px dashed black;
  width: 300px;
  margin: 0 auto;
}

.overlay {
  position: fixed;
  width: 100%;
  background-color: #f5deb3aa;
  display: flex;
  font-size: 1.2rem;
  font-weight: bold;
  color: red;
  justify-content: flex-end;
}

.top {
  top: 0;
  height: 244px;
  align-items: end;
}

.bottom {
  top: 432px;
  height: 48px;
}
```

Im folgenden Code wird dem `<div>` mit der Klasse `subject` auch eine Klasse `animation` gegeben. Die `grow`-Animation bewirkt, dass das `subject`-Element wächst oder schrumpft. Das `animation-timeline: view(block 55% 10%)` ist gesetzt, um anzugeben, dass es animiert wird, sobald es die Fortschrittszeitachse der Ansicht durchläuft, die von seinem scrollenden Vorfahren bereitgestellt wird (in diesem Fall das Wurzelelement des Dokuments).

Beim Scrollen nach unten beachten Sie, wie der Versatzwert von `50% 10%` dazu führt, dass die Animation bei 10 % vom unteren Rand beginnt und bei 50 % vom oberen Rand endet. Während die Animation entlang der Zeitleiste voranschreitet, wächst das `subject`. Umgekehrt, wenn nach oben gescrollt wird, verläuft die Animation in umgekehrter Richtung, beginnend bei 50 % vom oberen Rand, rückwärts durch die Animation und endet bei 10 % vom unteren Rand. Wenn die Animation rückwärts abläuft, schrumpft das `subject`.

Ein wichtiger Punkt, den man sich merken sollte, ist, dass die Animation so lange dauert, wie das `subject`-Element in dem Sichtbereich bleibt, der festgelegt wurde und mit `50% 10%` Werte versetzt ist.

```css
.animation {
  animation-timeline: view(block 50% 10%);

  animation-name: grow;
  animation-fill-mode: both;
  animation-duration: 1ms; /* Firefox requires this to apply the animation */
  animation-timing-function: linear;
}

@keyframes grow {
  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
}
```

#### Ergebnis

Scrollen Sie, um das animierte Subjektelement zu sehen.

{{EmbedLiveSample("Setting an anonymous view progress timeline", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
