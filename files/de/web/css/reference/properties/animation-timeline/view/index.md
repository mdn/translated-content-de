---
title: view()
slug: Web/CSS/Reference/Properties/animation-timeline/view
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`view()`** [CSS-Funktion](/de/docs/Web/CSS/Reference/Values/Functions) kann mit {{cssxref("animation-timeline")}} verwendet werden, um ein Bezugselement anzugeben, das eine anonyme Fortschrittszeitleiste zur Animation bereitstellt. Die Fortschrittszeitleiste des Sichtbereichs wird durch eine Änderung der Sichtbarkeit des Bezugselements innerhalb des nächstgelegenen Vorfahren-Scrollers fortschreiten. Die Sichtbarkeit des Elements innerhalb des Scrollers wird verfolgt — standardmäßig steht die Zeitleiste bei 0%, wenn das Element an einem Rand des Scrollers erstmals sichtbar ist, und bei 100%, wenn es den gegenüberliegenden Rand erreicht.

Die Funktionsparameter können die Achse der Bildlaufleiste angeben, entlang derer der Zeitleistenfortschritt verfolgt wird, sowie einen Versatz, der die Position des Bereichs anpasst, in dem das Bezugselement als sichtbar betrachtet wird.

> [!NOTE]
> Wenn die angegebene Achse keine Bildlaufleiste enthält, ist die Animationszeitleiste inaktiv (hat keinen Fortschritt).

> [!NOTE]
> Jede Verwendung von `view()` entspricht einer eigenen Instanz von [`ViewTimeline`](/de/docs/Web/API/ViewTimeline) in der [Web Animations API](/de/docs/Web/API/Web_Animations_API).

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
  - : Der Wert für die Bildlaufleistachse kann einer der folgenden sein:
    - `block`
      - : Die Bildlaufleiste auf der Block-Achse des Scroll-Containers, die im rechten Winkel zur Fließrichtung des Textes innerhalb einer Zeile liegt.
        Für horizontale Schreibmodi, wie sie im Standardenglisch verwendet werden, entspricht dies `y`, während es für vertikale Schreibmodi `x` entspricht. Dies ist der Standardwert.
    - `inline`
      - : Die Bildlaufleiste auf der Inline-Achse des Scroll-Containers, die parallel zur Fließrichtung des Textes in einer Zeile liegt.
        Für horizontale Schreibmodi entspricht dies `x`, während es für vertikale Schreibmodi `y` entspricht.
    - `y`
      - : Die Bildlaufleiste auf der vertikalen Achse des Scroll-Containers.
    - `x`
      - : Die Bildlaufleiste auf der horizontalen Achse des Scroll-Containers.

- inset
  - : Der Inset-Wert kann ein oder zwei Werte sein, die entweder `auto` oder ein {{cssxref("length-percentage")}} sein können. Er gibt eine Einfügung (positiv) oder Ausfügung (negativ) des {{Glossary("Scroll_container#scrollport", "Scrollport")}} an. Der Inset wird verwendet, um zu bestimmen, ob das Element im Sichtbereich ist, was die Länge der Animationszeitleiste bestimmt. Mit anderen Worten, die Animation dauert so lange, wie das Element im angepassten Sichtbereich ist.
    - start
      - : Einwärtsversatz vom Beginn des Scrollports.
    - end
      - : Einwärtsversatz vom Ende des Scrollports.

> [!NOTE]
> Die Werte für Scroller und Inset können in beliebiger Reihenfolge angegeben werden.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Festlegen einer anonymen Fortschrittszeitleiste

Eine anonyme Fortschrittszeitleiste wird auf ein Element mit der Klasse `subject` gesetzt, indem `animation-timeline: view()` verwendet wird. Das Ergebnis ist, dass das `subject`-Element animiert wird, während es sich aufwärts durch das Dokument bewegt, während es gescrollt wird.

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

Das `subject`-Element und die `content`-Elemente sind minimal gestylt, und dem Textinhalt werden einige grundlegende Schrifteinstellungen gegeben:

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

Um das Verständnis des Ergebnisses zu erleichtern, wurden zusätzliche Elemente wie `subject-container`, `top` und `bottom` verwendet. Der `subject-container` zeigt die Grenzen der Animation. Und halbtransparente `top` und `bottom` Overlays markieren den mit Inset versetzten Scrollport.

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
  height: 50%;
  align-items: end;
}

.bottom {
  bottom: 0;
  height: 10%;
}
```

Im folgenden Code wird dem `<div>` mit der Klasse `subject` auch eine Klasse `animation` zugewiesen. Die `grow`-Animation bewirkt, dass das `subject`-Element wächst oder schrumpft. Das `animation-timeline: view(block 55% 10%)` wird gesetzt, um anzugeben, dass es animiert wird, während es durch die Fortschrittszeitleiste fortschreitet, die von seinem scrollenden Vorfahren bereitgestellt wird (in diesem Fall das Wurzelelement des Dokuments).

Beim Herunterscrollen beachten Sie, wie der Inset-Wert von `50% 10%` bewirkt, dass die Animation bei 10% vom unteren Rand beginnt und bei 50% vom oberen Rand endet. Während die Animation entlang der Zeitleiste voranschreitet, wächst das `subject`. Umgekehrt, beim Hochscrollen, verläuft die Animation in umgekehrter Richtung, beginnend bei 50% vom oberen Rand, rückwärts durch die Animation gehend, und endet bei 10% vom unteren Rand. So schrumpft das `subject` beim zurücklaufenden Animationsverlauf.

Ein wichtiger Punkt zu beachten ist, dass die Animation so lange dauert, wie das `subject`-Element im Sichtbereich ist, der mit `50% 10%` Inset-Werten eingestellt und versetzt wurde.

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

Scrollen Sie, um zu sehen, wie das `subject`-Element animiert wird.

{{EmbedLiveSample("Setting an anonymous view progress timeline", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Scrollgesteuerte Animationen in CSS](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
- [CSS-Animationen verwenden](/de/docs/Web/CSS/Guides/Animations/Using)
- {{cssxref("animation-timeline")}}
