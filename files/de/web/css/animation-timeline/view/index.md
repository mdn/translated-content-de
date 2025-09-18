---
title: view()
slug: Web/CSS/animation-timeline/view
l10n:
  sourceCommit: 1fbe66fcace012c782f18c429d77381e1912c665
---

Die **`view()`** [CSS-Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) kann mit {{cssxref("animation-timeline")}} verwendet werden, um ein Subjektelement anzugeben, das eine anonyme Sichtfortschritts-Timeline zum Animieren bereitstellt. Die Sichtfortschritts-Timeline wird durch Änderungen der Sichtbarkeit des Subjektelements innerhalb des nächstgelegenen Vorfahren-Scrollers fortschreiten. Die Sichtbarkeit des Subjekts im Scroller wird verfolgt — standardmäßig steht die Timeline bei 0 %, wenn das Subjekt zuerst an einem Rand des Scrollers sichtbar ist, und bei 100 %, wenn es den gegenüberliegenden Rand erreicht.

Die Funktionsparameter können die Scrollbalkenachse angeben, entlang derer der Timeline-Fortschritt verfolgt wird und eine Einrückung, die die Position des Kastens anpasst, in dem das Subjekt als sichtbar angesehen wird.

> [!NOTE]
> Wenn die angegebene Achse keinen Scrollbalken enthält, ist die Animation-Timeline inaktiv (hat keinen Fortschritt).

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
  - : Der Wert der Scrollbalkenachse kann einer der folgenden sein:
    - `block`
      - : Der Scrollbalken auf der Blockachse des Scrollcontainers, der senkrecht zur Textrichtung innerhalb einer Zeile verläuft.
        Für horizontale Schreibmodi, wie im Standardenglisch, ist dies dasselbe wie `y`, während es in vertikalen Schreibmodi dasselbe wie `x` ist. Dies ist der Standardwert.
    - `inline`
      - : Der Scrollbalken auf der Inline-Achse des Scrollcontainers, der parallel zur Textrichtung in einer Zeile verläuft.
        Für horizontale Schreibmodi ist dies dasselbe wie `x`, während es in vertikalen Schreibmodi dasselbe wie `y` ist.
    - `y`
      - : Der Scrollbalken auf der vertikalen Achse des Scrollcontainers.
    - `x`
      - : Der Scrollbalken auf der horizontalen Achse des Scrollcontainers.

- inset
  - : Der Einrückungswert kann ein oder zwei Werte sein, die entweder `auto` oder eine {{cssxref("length-percentage")}} sein können. Er gibt eine Einwärts- (positiv) oder Auswärtsjustierung (negativ) des {{Glossary("Scroll_container#scrollport", "Scrollports")}} an. Der Einrückungswert wird verwendet, um zu bestimmen, ob das Element im Sichtbereich ist, was die Länge der Animation-Timeline bestimmt. Mit anderen Worten, die Animation dauert so lange, wie das Element im durch die Einrückung angepassten Sichtbereich ist.
    - start
      - : Einwärtsversatz vom Beginn des Scrollports.
    - end
      - : Einwärtsversatz vom Ende des Scrollports.

> [!NOTE]
> Die Scroller- und Einrückungswerte können in beliebiger Reihenfolge angegeben werden.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Eine anonyme Sichtfortschritts-Timeline einstellen

Eine anonyme Sichtfortschritts-Timeline wird auf einem Element mit der Klasse `subject` gesetzt, indem `animation-timeline: view()` verwendet wird. Das Ergebnis ist, dass das `subject`-Element animiert wird, während es nach oben durch das Dokument bewegt wird, wenn es gescrollt wird.

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

Das `subject`-Element und `content`-Elemente sind minimal gestaltet und der Textinhalt erhält einige grundlegende Schriftarteneinstellungen:

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

Um das Verständnis des Ergebnisses zu erleichtern, wurden zusätzliche Elemente `subject-container`, `top` und `bottom` verwendet. Der `subject-container` zeigt die Grenzen der Animation. Und halbtransparente `top` und `bottom` Overlays markieren den durch die Einrückung versetzten Scrollport.

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

Im folgenden Code wird das `<div>` mit der Klasse `subject` auch mit einer Klasse `animation` versehen. Die `grow`-Animation bewirkt, dass das `subject`-Element größer oder kleiner wird. Das `animation-timeline: view(block 55% 10%)` wird gesetzt, um zu erklären, dass es animiert wird, während es durch die Sichtfortschritts-Timeline fortschreitet, die von seinem scrollenden Vorfahren bereitgestellt wird (in diesem Fall das Root-Element des Dokuments).

Während des Scrollens nach unten, beachten Sie, wie der Einrückungswert von `50% 10%` bewirkt, dass die Animation bei 10 % vom unteren Rand beginnt und bei 50 % vom oberen Rand endet. Während die Animation entlang der Timeline fortschreitet, wächst das `subject`. Umgekehrt, beim Scrollen nach oben, verläuft die Animation in umgekehrter Richtung, beginnend bei 50 % vom oberen Rand, rückwärts durch die Animation, und endet bei 10 % vom unteren Rand. Wenn die Animation also rückwärts abläuft, schrumpft das `subject`.

Ein wichtiger Punkt zu beachten ist, dass die Animation so lange dauert, wie sich das `subject`-Element im festgelegten Sichtbereich befindet, und mit `50% 10%` Einrückungswerten versetzt wird.

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

Scrollen Sie, um zu sehen, wie das Subjekt-Element animiert wird.

{{EmbedLiveSample("Setting an anonymous view progress timeline", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS scrollgesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
