---
title: view()
slug: Web/CSS/animation-timeline/view
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Die **`view()`**-Funktion [CSS function](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) kann mit {{cssxref("animation-timeline")}} verwendet werden, um ein Subjektelement anzugeben, das eine anonyme Ansichtsfortschritts-Timeline zur Animation bereitstellt. Die Ansichtsfortschritts-Timeline wird durch eine Veränderung der Sichtbarkeit des Subjektelements in dem nächstgelegenen Vorfahren-Scroller fortgesetzt. Die Sichtbarkeit des Subjekts im Scroller wird verfolgt — standardmäßig ist die Timeline bei 0%, wenn das Subjekt erstmals an einem Rand des Scrollers sichtbar ist, und 100%, wenn es den gegenüberliegenden Rand erreicht.

Die Funktionsparameter können die Scrollleistenachse festlegen, entlang der der Verlauf der Timeline verfolgt wird, sowie einen Versatz, der die Position des Kastens anpasst, in dem das Subjekt als sichtbar erachtet wird.

> [!NOTE]
> Wenn die angegebene Achse keine Scrollleiste enthält, wird die Animationstimeline inaktiv sein (hat keinen Fortschritt).

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
  - : Der Wert der Scrollleistenachse kann einer der folgenden sein:
    - `block`
      - : Die Scrollleiste auf der Blockachse des scrollbaren Containers, die die Achse in der Richtung ist, die senkrecht zum Textfluss innerhalb einer Zeile verläuft.
        Für horizontale Schreibrichtungen wie Standard-Englisch ist dies identisch mit `y`, während es für vertikale Schreibrichtungen `x` entspricht. Dies ist der Standardwert.
    - `inline`
      - : Die Scrollleiste auf der Inlineachse des scrollbaren Containers, die die Achse in der Richtung parallel zum Textfluss in einer Zeile ist.
        Für horizontale Schreibrichtungen ist dies identisch mit `x`, während es für vertikale Schreibrichtungen `y` ist.
    - `y`
      - : Die Scrollleiste auf der vertikalen Achse des scrollbaren Containers.
    - `x`
      - : Die Scrollleiste auf der horizontalen Achse des scrollbaren Containers.

- inset
  - : Der Eingabewert kann ein oder zwei Werte sein, die entweder `auto` oder ein {{cssxref("length-percentage")}} sein können. Er gibt einen inneren (positiven) oder äußeren (negativen) Anpassungswert des {{Glossary("Scroll_container#scrollport", "Scrollport")}} an. Der Versatz wird verwendet, um zu bestimmen, ob das Element im Sichtfeld ist, was die Dauer der Animationstimeline bestimmt. Mit anderen Worten, die Animation dauert so lange, wie das Element im durch den Versatz angepassten Sichtfeld ist.
    - start
      - : Innerer Versatz vom Anfang des Scrollports.
    - end
      - : Innerer Versatz vom Ende des Scrollports.

> [!NOTE]
> Die Werte für die Scrollleiste und den Versatz können in beliebiger Reihenfolge angegeben werden.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Einstellen einer anonymen Ansichtsfortschritts-Timeline

Eine anonyme Ansichtsfortschritts-Timeline wird auf einem Element mit der Klasse `subject` unter Verwendung von `animation-timeline: view()` eingestellt. Das Ergebnis ist, dass das `subject`-Element animiert wird, während es nach oben durch das Dokument bewegt wird, wenn es gescrollt wird.

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

Das `subject`-Element und `content`-Elemente sind minimal gestylt, und der Textinhalt erhält einige grundlegende Schriftarteinstellungen:

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

Um das Verständnis des Ergebnisses zu erleichtern, wurden zusätzliche Elemente `subject-container`, `top` und `bottom` verwendet. Der `subject-container` zeigt die Begrenzungen der Animation. Halbtransparente `top` und `bottom` Überlagerungen markieren den versetzten Scrollport.

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

Im folgenden Code wird das `<div>` mit der Klasse `subject` auch mit der Klasse `animation` ausgestattet. Die `grow`-Animation bewirkt, dass das `subject`-Element wächst oder schrumpft. Die Einstellung `animation-timeline: view(block 55% 10%)` gibt an, dass es animiert wird, während es entlang der durch seinen scrollenden Vorfahren bereitgestellten Ansichtsvortschritts-Timeline voranschreitet (in diesem Fall das Wurzelelement des Dokuments).

Während des Herunterscrollens beachten Sie, wie der Versatzwert `50% 10%` dazu führt, dass die Animation bei 10% vom unteren Rand beginnt und bei 50% vom oberen Rand endet. Wenn die Animation entlang der Timeline voranschreitet, wächst das `subject`. Umgekehrt läuft die Animation beim Hochscrollen in umgekehrter Richtung, beginnend bei 50% vom oberen Rand, rückwärts durch die Animation und endend bei 10% vom unteren Rand. Da die Animation rückwärts läuft, schrumpft das `subject`.

Ein wichtiger Punkt, den Sie sich merken sollten, ist, dass die Animation so lange dauert, wie das `subject`-Element in dem Sichtfeld ist, welches eingestellt wurde, und mit `50% 10%` Versatzwerten angepasst wird.

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

Scrollen Sie, um das `subject`-Element animiert zu sehen.

{{EmbedLiveSample("Setting an anonymous view progress timeline", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS scroll-getriebene Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
