---
title: view()
slug: Web/CSS/Reference/Properties/animation-timeline/view
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`view()`** [CSS-Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) kann mit {{cssxref("animation-timeline")}} verwendet werden, um ein Zielelement anzugeben, das eine anonyme Ansichts-Fortschritts-Timeline zum Animieren bereitstellt. Die Fortschritts-Timeline der Ansicht wird durch eine Änderung der Sichtbarkeit des Zielelements innerhalb des nächstgelegenen Vorfahren-Scrollers fortgeschrieben. Die Sichtbarkeit des Ziels innerhalb des Scrollers wird verfolgt — standardmäßig ist die Timeline bei 0 %, wenn das Ziel erstmals an einem Rand des Scrollers sichtbar ist, und bei 100 %, wenn es den gegenüberliegenden Rand erreicht.

Die Funktionsparameter können die Scrollbalken-Achse angeben, entlang der der Fortschritt der Timeline verfolgt wird, sowie einen Versatz, der die Position des Kastens anpasst, in dem das Ziel als sichtbar gilt.

> [!NOTE]
> Wenn die angegebene Achse keinen Scrollbalken enthält, ist die Animationstimeline inaktiv (hat keinen Fortschritt).

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
  - : Der Scrollbalken-Achsenwert kann einer der folgenden sein:
    - `block`
      - : Der Scrollbalken auf der Block-Achse des Scroll-Containers, welche die Achse ist, die senkrecht zum Fluss des Textes innerhalb einer Zeile verläuft. Für horizontale Schreibrichtungen, wie z.B. im Standardenglisch, ist dies dasselbe wie `y`, während es für vertikale Schreibrichtungen dasselbe wie `x` ist. Dies ist der Standardwert.
    - `inline`
      - : Der Scrollbalken auf der Inline-Achse des Scroll-Containers, welche die Achse in der Richtung parallel zum Fluss des Textes innerhalb einer Zeile ist. Für horizontale Schreibrichtungen ist dies dasselbe wie `x`, während es für vertikale Schreibrichtungen dasselbe wie `y` ist.
    - `y`
      - : Der Scrollbalken auf der vertikalen Achse des Scroll-Containers.
    - `x`
      - : Der Scrollbalken auf der horizontalen Achse des Scroll-Containers.

- inset
  - : Der Versatzwert kann ein oder zwei Werte sein, die entweder `auto` oder ein {{cssxref("length-percentage")}} sind. Er spezifiziert eine Einrückung (positiv) oder einen Abstand (negativ) des {{Glossary("Scroll_container#scrollport", "Scrollports")}}. Der Versatz wird verwendet, um zu bestimmen, ob das Element im Sichtbereich ist, was die Länge der Animationstimeline bestimmt. Mit anderen Worten, die Animation dauert so lange, wie das Element im versetzten Sichtbereich ist.
    - start
      - : Inwärts-Versatz vom Anfang des Scrollports.
    - end
      - : Inwärts-Versatz vom Ende des Scrollports.

> [!NOTE]
> Die Scroller- und Versatzwerte können in beliebiger Reihenfolge angegeben werden.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Eine anonyme Ansichts-Fortschritts-Timeline festlegen

Eine anonyme Ansichts-Fortschritts-Timeline wird auf einem Element mit der Klasse `subject` mithilfe von `animation-timeline: view()` festgelegt. Das Ergebnis ist, dass das `subject`-Element animiert wird, während es beim Scrollen nach oben durch das Dokument bewegt wird.

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

Das `subject`-Element und die `content`-Elemente sind minimal gestylt, und der Textinhalt erhält einige grundlegende Schriftart-Einstellungen:

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

Um das Verständnis des Ergebnisses zu erleichtern, wurden zusätzliche Elemente `subject-container`, `top` und `bottom` verwendet. Der `subject-container` zeigt die Grenzen der Animation. Und halbtransparente `top`- und `bottom`-Overlays markieren den von der Scrollport versetzten Versatz.

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

Im folgenden Code erhält das `<div>` mit der Klasse `subject` auch eine Klasse `animation`. Die `grow`-Animation bewirkt, dass das `subject`-Element wächst oder schrumpft. Die `animation-timeline: view(block 55% 10%)` wird gesetzt, um zu erklären, dass es animiert wird, während es durch die von seinem scrollenden Vorfahren bereitgestellte Fortschritts-Timeline (in diesem Fall das Wurzelelement des Dokuments) voranschreitet.

Während des Scrollens nach unten beachten Sie, wie der Versatzwert von `50% 10%` die Animation veranlasst, bei 10 % vom unteren Rand zu beginnen und bei 50 % vom oberen Rand zu enden. Während die Animation entlang der Timeline voranschreitet, wächst das `subject`. Umgekehrt fährt beim Scrollen nach oben die Animation in umgekehrter Richtung fort, beginnt bei 50 % vom oberen Rand, bewegt sich rückwärts durch die Animation und endet bei 10 % vom unteren Rand. Also, während die Animation rückwärts abläuft, schrumpft das `subject`.

Ein wichtiger Punkt, den Sie sich merken sollten, ist, dass die Animation so lange dauert, wie das `subject`-Element im festgelegten und mit `50% 10%` versetzten Sichtbereich ist.

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

Scrollen Sie, um das animierte Elemente zu sehen.

{{EmbedLiveSample("Setting an anonymous view progress timeline", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Scroll-gesteuerte CSS-Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [`animation-timeline`](/de/docs/Web/CSS/Reference/Properties/animation-timeline)
