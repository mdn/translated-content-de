---
title: view()
slug: Web/CSS/animation-timeline/view
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}{{SeeCompatTable}}

Die **`view()`** [CSS-Funktion](/de/docs/Web/CSS/CSS_Functions) kann mit {{cssxref("animation-timeline")}} verwendet werden, um ein Subjektelement anzugeben, das eine anonyme Fortschrittszeitleiste bereitstellt, die animiert wird. Die Fortschrittszeitleiste des Ansichtsverlaufs wird durch eine Änderung der Sichtbarkeit des Subjektelements innerhalb des nächsten übergeordneten Scrollers fortgeschritten. Die Sichtbarkeit des Subjekts innerhalb des Scrollers wird verfolgt – standardmäßig befindet sich die Zeitleiste bei 0%, wenn das Subjekt erstmals an einem Rand des Scrollers sichtbar ist, und bei 100%, wenn es den gegenüberliegenden Rand erreicht.

Die Funktionsparameter können die Scrollbalkenachse angeben, entlang derer der Fortschritt der Zeitleiste verfolgt wird, und einen Einsatz, der die Position des Kästchens anpasst, in dem das Subjekt als sichtbar angesehen wird.

> [!NOTE]
> Wenn die angegebene Achse keinen Scrollbalken enthält, bleibt die Animationszeitleiste inaktiv (kein Fortschritt).

> [!NOTE]
> Jede Verwendung von `view()` entspricht einer eigenen Instanz von {{domxref("ViewTimeline")}} in der [Web Animations API](/de/docs/Web/API/Web_Animations_API).

## Syntax

```css
/* Funktion ohne gesetzte Parameter */
animation-timeline: view();

/* Werte zur Auswahl der Achse */
animation-timeline: view(block); /* Standard */
animation-timeline: view(inline);
animation-timeline: view(y);
animation-timeline: view(x);

/* Werte für den Einsatz */
animation-timeline: view(auto); /* Standard */
animation-timeline: view(20%);
animation-timeline: view(200px);
animation-timeline: view(20% 40%);
animation-timeline: view(20% 200px);
animation-timeline: view(100px 200px);
animation-timeline: view(auto 200px);

/* Beispiele, die Achse und Einsatz spezifizieren */
animation-timeline: view(block auto); /* Standard */
animation-timeline: view(inline 20%);
animation-timeline: view(x 200px auto);
```

### Parameter

- axis

  - : Der Wert der Scrollbalkenachse kann einer der folgenden sein:

    - `block`
      - : Der Scrollbalken auf der Blockachse des Scrollcontainers, die die Achse in der Richtung senkrecht zum Fluss des Textes innerhalb einer Zeile ist.
        Für horizontale Schreibrichtungen, wie standardmäßiges Englisch, ist dies dasselbe wie `y`, während es für vertikale Schreibrichtungen dasselbe wie `x` ist. Dies ist der Standardwert.
    - `inline`
      - : Der Scrollbalken auf der Inline-Achse des Scrollcontainers, die die Achse in der Richtung parallel zum Textfluss in einer Zeile ist.
        Für horizontale Schreibrichtungen ist dies dasselbe wie `x`, während es für vertikale Schreibrichtungen dasselbe wie `y` ist.
    - `y`
      - : Der Scrollbalken auf der vertikalen Achse des Scrollcontainers.
    - `x`
      - : Der Scrollbalken auf der horizontalen Achse des Scrollcontainers.

- inset

  - : Der Einsatzwert kann ein oder zwei Werte sein, die entweder `auto` oder ein {{cssxref("length-percentage")}} sein können. Es gibt eine Einrückung (positiv) oder Ausrückung (negativ) des [Scrollports](/de/docs/Glossary/Scroll_container#scrollport) an. Der Einsatz wird verwendet, um zu bestimmen, ob das Element sichtbar ist, was die Länge der Animationszeitleiste bestimmt. Mit anderen Worten, die Animation dauert so lange, wie das Element im durch den Einsatz angepassten Sichtbereich ist.

    - start
      - : Innerer Offset vom Beginn des Scrollports.
    - end
      - : Innerer Offset vom Ende des Scrollports.

> [!NOTE]
> Die Werte für Scroller und Einsatz können in beliebiger Reihenfolge angegeben werden.

### Formale Syntax

{{CSSSyntax}}

## Beispiele

### Einstellen einer anonymen Fortschrittszeitleiste

Eine anonyme Fortschrittszeitleiste wird auf einem Element mit der Klasse `subject` mit `animation-timeline: view()` festgelegt. Das Ergebnis ist, dass das `subject`-Element animiert wird, während es nach oben durch das Dokument bewegt wird, während gescrollt wird.

#### HTML

Der HTML-Code für das Beispiel wird unten gezeigt.

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

Das `subject`-Element und die `content`-Elemente sind minimal gestaltet und der Textinhalt erhält einige grundlegende Schriftart-Einstellungen:

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

Um das Verständnis des Ergebnisses zu erleichtern, wurden zusätzliche Elemente `subject-container`, `top` und `bottom` verwendet. Der `subject-container` zeigt die Begrenzungen der Animation. Und halbtransparente `top`- und `bottom`-Overlays markieren den versetzten Scrollport.

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

Im folgenden Code wird dem `<div>` mit der Klasse `subject` ebenfalls eine Klasse `animation` zugewiesen. Die `grow`-Animation bewirkt, dass das `subject`-Element wächst oder schrumpft. Die `animation-timeline: view(block 55% 10%)` wird gesetzt, um zu erklären, dass es animiert wird, während es die Fortschrittszeitleiste durchläuft, die von seinem scrollenden Vorfahren bereitgestellt wird (in diesem Fall das Stamm-Element des Dokuments).

Während des Herunterscrollens beachten Sie, wie der Einsatzwert von `50% 10%` bewirkt, dass die Animation bei 10% vom Boden startet und bei 50% von der Oberkante endet. Wenn die Animation entlang der Zeitleiste voranschreitet, wächst das `subject`. Umgekehrt, während des Hochscrollens, verläuft die Animation in umgekehrter Richtung, beginnend bei 50% von oben, rückwärts durch die Animation laufend und endend bei 10% von unten. So schrumpft das `subject`, während die Animation rückwärts läuft.

Ein wichtiger Punkt zu beachten ist, dass die Animation so lange dauert, wie sich das `subject`-Element im Sichtbereich befindet, der festgesetzt wurde und mit `50% 10%` Einsatzwerten versetzt wird.

```css
.animation {
  animation-timeline: view(block 50% 10%);

  animation-name: grow;
  animation-fill-mode: both;
  animation-duration: 1ms; /* Firefox erfordert dies, um die Animation anzuwenden */
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

Scrollen Sie, um zu sehen, wie das Subjektelement animiert wird.

{{EmbedLiveSample("Setting an anonymous view progress timeline", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
