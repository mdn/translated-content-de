---
title: view()
slug: Web/CSS/Reference/Properties/animation-timeline/view
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`view()`** [CSS-Funktion](/de/docs/Web/CSS/Reference/Values/Functions) kann mit {{cssxref("animation-timeline")}} verwendet werden, um ein Zielelement anzugeben, das eine anonyme View-Progress-Timeline zur Animation bereitstellt. Die View-Progress-Timeline wird durch eine Änderung der Sichtbarkeit des Zielelements im nächstgelegenen übergeordneten Scroller fortschreitend durchlaufen. Die Sichtbarkeit des Ziels im Scroller wird verfolgt – standardmäßig ist die Timeline bei 0%, wenn das Ziel zuerst an einem Rand des Scrollers sichtbar ist, und bei 100%, wenn es den gegenüberliegenden Rand erreicht.

Die Funktionsparameter können die Scroll-Leistenachse angeben, entlang der der Zeitlinienfortschritt verfolgt wird, und einen Rahmen, der die Position des Kastens anpasst, in dem das Ziel als sichtbar gilt.

> [!NOTE]
> Wenn die angegebene Achse keine Scrolleiste enthält, ist die Animationstimeline inaktiv (hat keinen Fortschritt).

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
  - : Der Wert der Scroll-Leistenachse kann einer der folgenden sein:
    - `block`
      - : Die Scrolleiste auf der Blockachse des Scroll-Containers, das ist die Achse in Richtung senkrecht zum Textfluss innerhalb einer Zeile.
        Für horizontale Schreibrichtungen, wie standardmäßiges Englisch, entspricht dies `y`, während es für vertikale Schreibrichtungen `x` entspricht. Dies ist der Standardwert.
    - `inline`
      - : Die Scrolleiste auf der Inline-Achse des Scroll-Containers, das ist die Achse in Richtung parallel zum Textfluss in einer Zeile.
        Für horizontale Schreibrichtungen entspricht dies `x`, während es für vertikale Schreibrichtungen `y` entspricht.
    - `y`
      - : Die Scrolleiste auf der vertikalen Achse des Scroll-Containers.
    - `x`
      - : Die Scrolleiste auf der horizontalen Achse des Scroll-Containers.

- inset
  - : Der Insets-Wert kann ein oder zwei Werte haben, die entweder `auto` oder ein {{cssxref("length-percentage")}} sein können. Er gibt eine Einfassung (positiv) oder Ausweitung (negativ) des {{Glossary("Scroll_container#scrollport", "Scrollbereichs")}} an. Das Inset wird verwendet, um zu bestimmen, ob das Element in Sicht ist, was die Länge der Animationstimeline bestimmt. Mit anderen Worten, die Animation dauert so lange, wie das Element im inset-adjustierten Sichtbereich ist.
    - start
      - : Einwärts Versatz vom Anfang des Scrollbereichs.
    - end
      - : Einwärts Versatz vom Ende des Scrollbereichs.

> [!NOTE]
> Die Werte für Scroller und Insets können in beliebiger Reihenfolge angegeben werden.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Einrichten einer anonymen View-Progress-Timeline

Eine anonyme View-Progress-Timeline wird auf einem Element mit der Klasse `subject` unter Verwendung von `animation-timeline: view()` eingerichtet. Das Ergebnis ist, dass das `subject`-Element animiert wird, während es sich beim Scrollen nach oben durch das Dokument bewegt.

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

Die `subject`- und `content`-Elemente sind minimal gestylt und dem Textinhalt werden einige grundlegende Schriftarteneinstellungen gegeben:

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

Um das Verständnis des Ergebnisses zu unterstützen, wurden zusätzliche Elemente `subject-container`, `top` und `bottom` verwendet. Der `subject-container` zeigt die Grenzen der Animation. Und halbtransparente `top`- und `bottom`-Überlagerungen markieren den versetzten Scrollbereich.

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

Im folgenden Code wird dem `<div>` mit der Klasse `subject` auch eine Klasse `animation` zugewiesen. Die `grow`-Animation bewirkt, dass das `subject`-Element wächst oder schrumpft. Die `animation-timeline: view(block 55% 10%)` wird festgelegt, um zu erklären, dass es animiert wird, während es sich durch die von seinem scrollenden Vorgänger bereitgestellte View-Progress-Timeline bewegt (in diesem Fall das Hauptelement des Dokuments).

Beim Scrollen nach unten beachten Sie, wie der Inset-Wert von `50% 10%` die Animation bei 10% vom Boden und 50% von der Oberseite beendet. Während sich die Animation entlang der Zeitachse vorwärts bewegt, wächst das `subject`. Umgekehrt, wenn Sie nach oben scrollen, erfolgt die Animation in umgekehrter Richtung und beginnt bei 50% von der Oberseite, bewegt sich rückwärts durch die Animation und endet bei 10% vom Boden. Wenn die Animation rückwärts abläuft, schrumpft das `subject`.

Ein wichtiger Punkt zu beachten ist, dass die Animation so lange dauert, wie das `subject`-Element im Sichtbereich ist, der festgelegt wurde, und versetzt wird, indem `50% 10%` Inset-Werte verwendet werden.

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

Scrollen Sie, um zu sehen, wie das Subject-Element animiert wird.

{{EmbedLiveSample("Setting an anonymous view progress timeline", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Scrollgesteuerte CSS-Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [`animation-timeline`](/de/docs/Web/CSS/Reference/Properties/animation-timeline)
