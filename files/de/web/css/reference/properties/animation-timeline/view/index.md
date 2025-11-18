---
title: view()
slug: Web/CSS/Reference/Properties/animation-timeline/view
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`view()`** [CSS-Funktion](/de/docs/Web/CSS/Reference/Values/Functions) kann mit {{cssxref("animation-timeline")}} verwendet werden, um ein Subjektelement anzugeben, das eine anonyme View-Progress-Timeline zur Animation bereitstellen wird. Die View-Progress-Timeline wird durch eine Änderung der Sichtbarkeit des Subjektelements innerhalb des nächstgelegenen Vorfahren-Scrollers vorangetrieben. Die Sichtbarkeit des Subjekts innerhalb des Scrollers wird verfolgt — standardmäßig ist die Timeline bei 0 %, wenn das Subjekt zunächst an einem Rand des Scrollers sichtbar ist, und bei 100 %, wenn es den gegenüberliegenden Rand erreicht.

Die Funktionsparameter können die Scrollbalkenachse angeben, entlang der der Fortschritt der Timeline verfolgt wird, sowie einen Rand, der die Position der Box, in der das Subjekt als sichtbar gilt, anpasst.

> [!NOTE]
> Wenn die angegebene Achse keinen Scrollbalken enthält, bleibt die Animation-Timeline inaktiv (ohne Fortschritt).

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
      - : Der Scrollbalken auf der Blockachse des Scrollcontainers, die Achse in der Richtung senkrecht zur Textflussrichtung innerhalb einer Zeile.
        Für horizontale Schriftmodi, wie etwa Standardenglisch, entspricht dies `y`, während es für vertikale Schriftmodi `x` entspricht. Dies ist der Standardwert.
    - `inline`
      - : Der Scrollbalken auf der Inline-Achse des Scrollcontainers, die Achse in der Richtung parallel zur Textflussrichtung in einer Zeile.
        Für horizontale Schriftmodi ist dies dasselbe wie `x`, während es für vertikale Schriftmodi dasselbe wie `y` ist.
    - `y`
      - : Der Scrollbalken auf der vertikalen Achse des Scrollcontainers.
    - `x`
      - : Der Scrollbalken auf der horizontalen Achse des Scrollcontainers.

- inset
  - : Der Einfügewert kann ein oder zwei Werte sein, die entweder `auto` oder ein {{cssxref("length-percentage")}} sein können. Es spezifiziert eine Einfüge- (positive) oder Ausfüge- (negative) Anpassung des {{Glossary("Scroll_container#scrollport", "Scrollports")}}. Die Einfügung wird verwendet, um zu bestimmen, ob das Element sichtbar ist, was die Länge der Animation-Timeline bestimmt. Mit anderen Worten, die Animation dauert so lange, wie das Element in der einfügungsangepassten Ansicht ist.
    - start
      - : Nach innen gerichteter Abstand vom Anfang des Scrollports.
    - end
      - : Nach innen gerichteter Abstand vom Ende des Scrollports.

> [!NOTE]
> Die Scroller- und Einfügewerte können in beliebiger Reihenfolge angegeben werden.

## Formaler Syntax

{{CSSSyntax}}

## Beispiele

### Einstellen einer anonymen View-Progress-Timeline

Eine anonyme View-Progress-Timeline wird auf ein Element mit der Klasse `subject` mit `animation-timeline: view()` eingestellt. Das Ergebnis ist, dass das `subject`-Element animiert wird, wenn es beim Scrollen durch das Dokument nach oben bewegt wird.

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

Das `subject`-Element und die `content`-Elemente sind minimal gestylt und der Textinhalt erhält einige grundlegende Schriftarteneinstellungen:

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

Zur Verdeutlichung des Ergebnisses wurden zusätzliche Elemente `subject-container`, `top` und `bottom` verwendet. Der `subject-container` zeigt die Grenzen der Animation. Halbtransparente `top`- und `bottom`-Overlays markieren den versetzten Scrollport.

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

Im folgenden Code wird dem `<div>` mit der Klasse `subject` auch die Klasse `animation` zugewiesen. Die `grow`-Animation bewirkt, dass das `subject`-Element wächst oder schrumpft. Die `animation-timeline: view(block 55% 10%)` wird eingestellt, um zu deklarieren, dass es animiert wird, während es durch die von seinem scrollenden Vorfahren (in diesem Fall das Wurzelelement des Dokuments) bereitgestellte View-Progress-Timeline fortschreitet.

Während des Herunterscrollens beachten Sie, wie der Einfügewert von `50% 10%` dazu führt, dass die Animation bei 10% vom unteren Rand beginnt und bei 50% vom oberen Rand endet. Wenn die Animation entlang der Timeline voranschreitet, wächst das `subject`. Umgekehrt, beim Hochscrollen verläuft die Animation in umgekehrter Richtung, beginnend bei 50% vom oberen Rand, rückwärts durch die Animation, endend bei 10% vom unteren Rand. Während die Animation rückwärts abläuft, schrumpft das `subject`.

Ein wichtiger Punkt ist, dass die Animation so lange dauert, wie das `subject`-Element in der eingestellten und mit `50% 10%` versetzten Ansicht ist.

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

Scrollen Sie, um zu sehen, wie das Subjektelement animiert wird.

{{EmbedLiveSample("Setting an anonymous view progress timeline", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Scroll-getriebene CSS-Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- [`animation-timeline`](/de/docs/Web/CSS/Reference/Properties/animation-timeline)
