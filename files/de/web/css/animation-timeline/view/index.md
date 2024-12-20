---
title: view()
slug: Web/CSS/animation-timeline/view
l10n:
  sourceCommit: c9f96f06d4fbd265808f298eb9b2773f739860c5
---

{{CSSRef}}{{SeeCompatTable}}

Die **`view()`** [CSS-Funktion](/de/docs/Web/CSS/CSS_Functions) kann mit {{cssxref("animation-timeline")}} verwendet werden, um ein Zielelement anzugeben, das eine anonyme Fortschritts-Timeline zur Animation bereitstellt. Die Fortschritts-Timeline wird durch eine Änderung der Sichtbarkeit des Zielelements innerhalb des nächstliegenden vorfahren Scrollers durchlaufen. Die Sichtbarkeit des Ziels innerhalb des Scrollers wird verfolgt – standardmäßig ist die Timeline bei 0 %, wenn das Ziel erstmals an einem Rand des Scrollers sichtbar ist, und bei 100 %, wenn es den gegenüberliegenden Rand erreicht.

Die Funktionsparameter können die Scrollbar-Achse angeben, entlang derer der Fortschritt der Timeline verfolgt wird, sowie einen Versatz, der die Position des Kastens anpasst, in dem das Ziel als sichtbar angesehen wird.

> [!NOTE]
> Wenn die angegebene Achse keine Scrollbar enthält, wird die Animation-Timeline inaktiv sein (d. h. keinen Fortschritt aufweisen).

> [!NOTE]
> Jede Verwendung von `view()` entspricht einer eigenen einzigartigen Instanz von [`ViewTimeline`](/de/docs/Web/API/ViewTimeline) in der [Web Animations API](/de/docs/Web/API/Web_Animations_API).

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

  - : Der Wert für die Scrollbar-Achse kann einer der folgenden sein:

    - `block`
      - : Die Scrollbar auf der Blockachse des Scroll-Containers, die die Achse in der Richtung senkrecht zum Textfluss innerhalb einer Zeile ist.
        Für horizontale Schreibrichtungen, wie das herkömmliche Englisch, entspricht dies `y`, während es für vertikale Schreibrichtungen `x` ist. Dies ist der Standardwert.
    - `inline`
      - : Die Scrollbar auf der Inline-Achse des Scroll-Containers, die die Achse in der Richtung parallel zum Textfluss in einer Zeile ist.
        Für horizontale Schreibrichtungen entspricht dies `x`, während es für vertikale Schreibrichtungen `y` ist.
    - `y`
      - : Die Scrollbar auf der vertikalen Achse des Scroll-Containers.
    - `x`
      - : Die Scrollbar auf der horizontalen Achse des Scroll-Containers.

- inset

  - : Der Wert für inset kann ein oder zwei Werte sein, die entweder `auto` oder eine {{cssxref("length-percentage")}} sein können. Es gibt eine Änderung (positiv) oder einen Ausstoß (negativ) des {{Glossary("Scroll_container#scrollport", "Scrollports")}} an. Der Versatz wird verwendet, um festzustellen, ob das Element im Sichtbereich ist, was die Länge der Animation-Timeline bestimmt. Mit anderen Worten, die Animation dauert so lange, wie das Element im durch den Versatz angepassten Sichtbereich ist.

    - start
      - : Eingehender Versatz vom Anfang des Scrollports.
    - end
      - : Eingehender Versatz vom Ende des Scrollports.

> [!NOTE]
> Die Scroller- und Versatzwerte können in beliebiger Reihenfolge angegeben werden.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Festlegen einer anonymen Fortschritts-Timeline

Eine anonyme Fortschritts-Timeline wird auf ein Element mit der Klasse `subject` gesetzt, indem `animation-timeline: view()` verwendet wird. Das Ergebnis ist, dass das `subject`-Element animiert wird, während es beim Scrollen im Dokument nach oben bewegt wird.

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

Die `subject`- und `content`-Elemente sind minimal gestylt und der Textinhalt erhält einige grundlegende Schriftarteneinstellungen:

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

Zur besseren Verständlichkeit des Ergebnisses wurden zusätzliche Elemente `subject-container`, `top` und `bottom` verwendet. Der `subject-container` zeigt die Begrenzungen der Animation. Halbtransparente `top`- und `bottom`-Overlays markieren den versetzten Sichtbereich.

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

Im folgenden Code erhält das `<div>` mit der Klasse `subject` auch eine Klasse `animation`. Die `grow`-Animation bewirkt, dass das `subject`-Element wächst oder schrumpft. Die `animation-timeline: view(block 55% 10%)` wird gesetzt, um anzugeben, dass es animiert wird, während es durch die Fortschritts-Timeline, die von seinem scrollenden Vorfahren bereitgestellt wird (in diesem Fall das Stamm-Element des Dokuments), fortschreitet.

Beim Scrollen nach unten beachten Sie, wie der Wert `50% 10%` für den Versatz bewirkt, dass die Animation bei 10% vom unteren Ende beginnt und bei 50% von oben endet. Während die Animation entlang der Timeline fortschreitet, wächst das `subject`. Umgekehrt verläuft die Animation beim Scrollen nach oben in umgekehrter Richtung, beginnt bei 50% von oben, bewegt sich rückwärts durch die Animation und endet bei 10% vom unteren Ende. Daher schrumpft das `subject`, wenn die Animation rückwärts abläuft.

Ein wichtiger Punkt ist, dass die Animation so lange dauert, wie sich das `subject`-Element im Sichtbereich befindet, der festgelegt und mit den `50% 10%` Versatzwerten angepasst wurde.

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

- [CSS scroll-driven animations](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
