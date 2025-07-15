---
title: view()
slug: Web/CSS/animation-timeline/view
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`view()`** [CSS-Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) kann mit {{cssxref("animation-timeline")}} verwendet werden, um ein Subjektelement anzugeben, das eine anonyme Fortschritts-Timeline bereitstellt, um Animationen zu erstellen. Die Fortschritts-Timeline wird durch eine Veränderung der Sichtbarkeit des Subjektelements innerhalb des nächstgelegenen Vorfahren-Scrollers fortgeschritten. Die Sichtbarkeit des Subjekts im Scroller wird verfolgt — standardmäßig befindet sich die Timeline bei 0%, wenn das Subjekt zunächst an einem Rand des Scrollers sichtbar ist, und bei 100%, wenn es den gegenüberliegenden Rand erreicht.

Die Funktionsparameter können die Scrollbalkenachse angeben, entlang derer der Fortschritt der Timeline verfolgt wird, und einen Einsatz, der die Position des Kastens anpasst, in dem das Subjekt als sichtbar angesehen wird.

> [!NOTE]
> Wenn die angegebene Achse keinen Scrollbalken enthält, ist die Animationstimeline inaktiv (hat keinen Fortschritt).

> [!NOTE]
> Jede Nutzung von `view()` entspricht einer eigenen einzigartigen Instanz von [`ViewTimeline`](/de/docs/Web/API/ViewTimeline) in der [Web Animations API](/de/docs/Web/API/Web_Animations_API).

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
      - : Der Scrollbalken auf der Blockachse des Scrollcontainers, die Achse in der Richtung senkrecht zum Textfluss innerhalb einer Zeile.
        Für horizontale Schriftsysteme, wie z.B. im Standard-Englisch, ist dies dasselbe wie `y`, während es für vertikale Schriftsysteme dasselbe wie `x` ist. Dies ist der Standardwert.
    - `inline`
      - : Der Scrollbalken auf der Inline-Achse des Scrollcontainers, die Achse in der Richtung parallel zum Textfluss in einer Zeile.
        Für horizontale Schriftsysteme ist dies dasselbe wie `x`, während es für vertikale Schriftsysteme dasselbe wie `y` ist.
    - `y`
      - : Der Scrollbalken auf der vertikalen Achse des Scrollcontainers.
    - `x`
      - : Der Scrollbalken auf der horizontalen Achse des Scrollcontainers.

- inset
  - : Der Einsatzwert kann ein oder zwei Werte umfassen, die entweder `auto` oder ein {{cssxref("length-percentage")}} sein können. Es spezifiziert eine Einlage (positiv) oder einen Ausstoß (negativ) der {{Glossary("Scroll_container#scrollport", "Scrollport")}}. Der Einsatz wird verwendet, um zu bestimmen, ob das Element im Sichtbereich ist, was die Länge der Animationstimeline bestimmt. Mit anderen Worten, die Animation dauert so lange, wie das Element im durch Einsatz angepassten Sichtbereich ist.
    - start
      - : Innere Verschiebung vom Anfang des Scrollports.
    - end
      - : Innere Verschiebung vom Ende des Scrollports.

> [!NOTE]
> Die Werte für Scroller und Einsatz können in beliebiger Reihenfolge angegeben werden.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Festlegen einer anonymen Fortschritts-Timeline der Ansicht

Eine anonyme Fortschritts-Timeline der Ansicht wird auf einem Element mit der Klasse `subject` mit `animation-timeline: view()` festgelegt. Das Ergebnis ist, dass das `subject`-Element animiert wird, wenn es beim Scrollen nach oben durch das Dokument bewegt wird.

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

Um das Verständnis des Ergebnisses zu erleichtern, wurden zusätzliche Elemente `subject-container`, `top` und `bottom` verwendet. Der `subject-container` zeigt die Grenzen der Animation. Und halbtransparente `top` und `bottom` Overlays markieren den durch Einsatz versetzten Scrollport.

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

Im folgenden Code wird das `<div>` mit der Klasse `subject` zusätzlich mit der Klasse `animation` versehen. Die `grow`-Animation bewirkt, dass das `subject`-Element wächst oder schrumpft. Die `animation-timeline: view(block 55% 10%)` ist so eingestellt, dass sie angibt, dass es animiert wird, während es sich durch die Fortschritts-Timeline der Ansicht bewegt, die von seinem scrollenden Vorfahren bereitgestellt wird (in diesem Fall das Wurzelelement des Dokuments).

Beim Herunterscrollen beachten Sie, wie der Einsatzwert von `50% 10%` bewirkt, dass die Animation bei 10% vom unteren Rand startet und bei 50% vom oberen Rand endet. Wenn die Animation entlang der Timeline voranschreitet, wächst das `subject`. Umgekehrt, wenn nach oben gescrollt wird, verläuft die Animation in die entgegengesetzte Richtung, beginnend bei 50% vom oberen Rand, rückwärts durch die Animation bewegend und endet bei 10% vom unteren Rand. Wenn die Animation rückwärts verläuft, schrumpft das `subject`.

Ein wichtiger Punkt, an den Sie sich erinnern sollten, ist, dass die Animation so lange dauert, wie das `subject`-Element im zugewiesenen und mit `50% 10%` versetzten Sichtbereich bleibt.

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

- [Scrollabhängige CSS-Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
