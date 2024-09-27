---
title: view()
slug: Web/CSS/animation-timeline/view
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}{{SeeCompatTable}}

Die **`view()`** [CSS Funktion](/de/docs/Web/CSS/CSS_Functions) kann mit {{cssxref("animation-timeline")}} verwendet werden, um ein Zielelement anzugeben, das eine anonyme Fortschrittszeitleiste bereitstellt, um Animationen zu steuern. Die Fortschrittszeitleiste wird durch eine Änderung der Sichtbarkeit des Zielelements innerhalb des nächsten Vorfahr-Scrollers vorangetrieben. Die Sichtbarkeit des Ziels im Scroller wird verfolgt — standardmäßig steht die Zeitleiste bei 0 %, wenn das Ziel erstmals an einem Rand des Scrollers sichtbar ist, und bei 100 %, wenn es den gegenüberliegenden Rand erreicht.

Mit den Funktionsparametern kann die Scrollbalkenachse spezifiziert werden, entlang der der Fortschritt der Zeitleiste verfolgt wird, sowie ein Versatz, der die Position des Rahmens anpasst, in dem das Ziel als sichtbar gilt.

> [!NOTE]
> Wenn die angegebene Achse keinen Scrollbalken enthält, ist die Animationszeitleiste inaktiv (hat keinen Fortschritt).

> [!NOTE]
> Jede Nutzung von `view()` entspricht einer eigenen Instanz von [`ViewTimeline`](/de/docs/Web/API/ViewTimeline) in der [Web Animations API](/de/docs/Web/API/Web_Animations_API).

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
      - : Der Scrollbalken auf der Blockachse des Scrollcontainers, die Achse in der Richtung senkrecht zum Fluss des Textes innerhalb einer Zeile.
        Bei horizontalen Schreibmodi, wie standardmäßig im Englischen, ist dies gleich `y`, während es bei vertikalen Schreibmodi gleich `x` ist. Dies ist der Standardwert.
    - `inline`
      - : Der Scrollbalken auf der Inline-Achse des Scrollcontainers, die Achse in der Richtung parallel zum Textfluss in einer Zeile.
        Bei horizontalen Schreibmodi ist dies gleich `x`, während es bei vertikalen Schreibmodi gleich `y` ist.
    - `y`
      - : Der Scrollbalken auf der vertikalen Achse des Scrollcontainers.
    - `x`
      - : Der Scrollbalken auf der horizontalen Achse des Scrollcontainers.

- inset

  - : Der Wert des Versatzes kann ein oder zwei Werte sein, entweder `auto` oder ein {{cssxref("length-percentage")}}. Er gibt eine Einstellung (positiv) oder Ausdehnung (negativ) des [Scrollport](/de/docs/Glossary/Scroll_container#scrollport) an. Der Versatz wird verwendet, um festzustellen, ob das Element im Sichtbereich ist, was die Länge der Animationszeitleiste bestimmt. Mit anderen Worten, die Animation dauert so lange, wie das Element im angepasst sichtbaren Bereich ist.

    - start
      - : Inward-Offset vom Anfang des Scrollports.
    - end
      - : Inward-Offset vom Ende des Scrollports.

> [!NOTE]
> Die Werte für Scroller und Versatz können in beliebiger Reihenfolge angegeben werden.

### Formale Syntax

{{CSSSyntax}}

## Beispiele

### Einstellen einer anonymen Fortschrittszeitleiste

Eine anonyme Fortschrittszeitleiste wird auf einem Element mit der Klasse `subject` unter Verwendung von `animation-timeline: view()` gesetzt. Das Ergebnis ist, dass das `subject`-Element animiert wird, während es sich beim Scrollen durch das Dokument nach oben bewegt.

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

Das `subject`-Element und die `content`-Elemente sind minimal gestylt, und der Textinhalt erhält einige grundlegende Schriftarteinstellungen:

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

Zur besseren Verständlichkeit des Ergebnisses wurden zusätzliche Elemente `subject-container`, `top` und `bottom` verwendet. Der `subject-container` zeigt die Grenzen der Animation. Und halbtransparente `top`- und `bottom`-Überlagerungen markieren den versetzten Scrollport.

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

Im folgenden Code wird dem `<div>` mit der Klasse `subject` auch die Klasse `animation` zugewiesen. Die `grow`-Animation bewirkt, dass das `subject`-Element wächst oder schrumpft. Der `animation-timeline: view(block 55% 10%)`-Wert wird gesetzt, um anzugeben, dass es animiert wird, während es die Fortschrittszeitleiste durchläuft, die von seinem scrollenden Vorfahr bereitgestellt wird (in diesem Fall das Wurzelelement des Dokuments).

Beim Herunterscrollen beachten Sie, wie der Versatzwert von `50% 10%` dazu führt, dass die Animation bei 10 % vom unteren Rand beginnt und bei 50 % vom oberen Rand endet. Während die Animation vorwärts entlang der Zeitleiste läuft, wächst das `subject`. Umgekehrt wird beim Hochscrollen die Animation in die entgegengesetzte Richtung ausgeführt, beginnend bei 50 % vom oberen Rand, sich rückwärts durch die Animation bewegend und bei 10 % vom unteren Rand endend. Somit schrumpft das `subject`, während die Animation rückwärts abläuft.

Ein wichtiger Punkt ist, dass die Animation so lange dauert, wie das `subject`-Element im definierten Sichtbereich ist, der durch `50% 10%` Versatzwerte festgelegt wurde.

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

Scrollen Sie, um zu sehen, wie das Zielelement animiert wird.

{{EmbedLiveSample("Setting an anonymous view progress timeline", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS scrollgetriebene Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
