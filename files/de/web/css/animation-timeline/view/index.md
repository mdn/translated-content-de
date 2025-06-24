---
title: view()
slug: Web/CSS/animation-timeline/view
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`view()`** [CSS-Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) kann mit {{cssxref("animation-timeline")}} verwendet werden, um ein Subjektelement anzugeben, das eine anonyme View-Progress-Timeline zur Animation bereitstellt. Die View-Progress-Timeline schreitet durch eine Änderung der Sichtbarkeit des Subjektelements innerhalb des nächstgelegenen übergeordneten Scrollers voran. Die Sichtbarkeit des Subjekts innerhalb des Scrollers wird verfolgt – standardmäßig ist die Timeline bei 0 %, wenn das Subjekt zuerst an einem Rand des Scrollers sichtbar ist, und bei 100 %, wenn es den gegenüberliegenden Rand erreicht.

Die Funktionsparameter können die Scrollbalkenachse angeben, entlang derer der Fortschritt der Timeline verfolgt wird, und einen Versatz, der die Position der Box anpasst, in der das Subjekt als sichtbar gilt.

> [!NOTE]
> Wenn die angegebene Achse keinen Scrollbalken enthält, ist die Animationstimeline inaktiv (hat keinen Fortschritt).

> [!NOTE]
> Jede Verwendung von `view()` entspricht einer eigenen eindeutigen Instanz von [`ViewTimeline`](/de/docs/Web/API/ViewTimeline) in der [Web Animations API](/de/docs/Web/API/Web_Animations_API).

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
      - : Der Scrollbalken auf der Blockachse des Scroll-Containers, der die Achse in der Richtung ist, die senkrecht zum Textfluss innerhalb einer Zeile verläuft.
        Für horizontale Schreibmodi, wie zum Beispiel Standardenglisch, ist dies dasselbe wie `y`, während es für vertikale Schreibmodi dasselbe wie `x` ist. Dies ist der Standardwert.
    - `inline`
      - : Der Scrollbalken auf der Inline-Achse des Scroll-Containers, der die Achse in der Richtung parallel zum Textfluss innerhalb einer Zeile ist.
        Für horizontale Schreibmodi ist dies dasselbe wie `x`, während es für vertikale Schreibmodi dasselbe wie `y` ist.
    - `y`
      - : Der Scrollbalken auf der vertikalen Achse des Scroll-Containers.
    - `x`
      - : Der Scrollbalken auf der horizontalen Achse des Scroll-Containers.

- inset
  - : Der Inset-Wert kann ein oder zwei Werte sein, die entweder `auto` oder ein {{cssxref("length-percentage")}} sein können. Er gibt eine Einwärts- (positiv) oder Auswärtsanpassung (negativ) des {{Glossary("Scroll_container#scrollport", "Scrollports")}} an. Das Inset wird verwendet, um zu bestimmen, ob das Element im Sichtbereich ist, was die Länge der Animationstimeline bestimmt. Mit anderen Worten, die Animation dauert so lange, wie das Element im durch das Inset angepassten Sichtbereich ist.
    - start
      - : Einwärts-Versatz vom Beginn des Scrollports.
    - end
      - : Einwärts-Versatz vom Ende des Scrollports.

> [!NOTE]
> Die Scroller- und Inset-Werte können in beliebiger Reihenfolge angegeben werden.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Einstellen einer anonymen View-Progress-Timeline

Eine anonyme View-Progress-Timeline wird auf einem Element mit der Klasse `subject` unter Verwendung von `animation-timeline: view()` eingestellt. Das Ergebnis ist, dass das `subject`-Element animiert wird, während es nach oben durch das Dokument scrollt.

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

Die `subject`- und `content`-Elemente sind minimal gestylt, und der Textinhalt erhält einige grundlegende Schriftarteinstellungen:

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

Um das Verständnis des Ergebnisses zu erleichtern, wurden zusätzliche Elemente `subject-container`, `top` und `bottom` verwendet. Der `subject-container` zeigt die Grenzen der Animation. Halbtransparente `top`- und `bottom`-Overlays markieren den Versatz des Scrollports.

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

Im folgenden Code wird dem `<div>` mit der Klasse `subject` auch eine Klasse `animation` zugewiesen. Die `grow`-Animation lässt das `subject`-Element wachsen oder schrumpfen. Die `animation-timeline: view(block 55% 10%)` wird gesetzt, um anzugeben, dass es animiert wird, während es die View-Progress-Timeline seines scrollenden Vorfahren (in diesem Fall das Dokumentwurzelelement) durchläuft.

Beim Scrollen nach unten beachten Sie, wie der Inset-Wert von `50% 10%` die Animation veranlasst, bei 10 % vom Boden zu starten und bei 50 % von oben zu enden. Während die Animation entlang der Timeline voranschreitet, wächst das `subject`. Umgekehrt schreitet die Animation beim Scrollen nach oben in umgekehrter Richtung voran, beginnend bei 50 % von oben, rückwärts durch die Animation und endet bei 10 % vom Boden. Da die Animation rückwärts abläuft, schrumpft das `subject`.

Ein wichtiger Punkt ist, dass die Animation so lange dauert, wie sich das `subject`-Element im Sichtbereich befindet, der gesetzt und mit `50% 10%` Versatzwerten nachjustiert wurde.

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

{{EmbedLiveSample("Einstellen einer anonymen View-Progress-Timeline", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-scrollgesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [Verwenden von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
