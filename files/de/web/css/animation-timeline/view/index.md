---
title: view()
slug: Web/CSS/animation-timeline/view
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}{{SeeCompatTable}}

Die **`view()`** [CSS Funktion](/de/docs/Web/CSS/CSS_Functions) kann mit {{cssxref("animation-timeline")}} verwendet werden, um ein Zielelement anzugeben, das eine anonyme Sichtfortschritts-Zeitleiste zum Animieren bereitstellen wird. Die Sichtfortschritts-Zeitleiste wird durch eine Änderung der Sichtbarkeit des Zielelements innerhalb des nächstgelegenen vorfahren Scrollers fortgeschritten. Die Sichtbarkeit des Ziels innerhalb des Scrollers wird verfolgt — standardmäßig befindet sich die Zeitleiste bei 0 %, wenn das Ziel zuerst an einem Rand des Scrollers sichtbar ist, und bei 100 %, wenn es den gegenüberliegenden Rand erreicht.

Die Funktionsparameter können die Scrollachsen angeben, entlang derer der Zeitleistenfortschritt verfolgt wird, und einen Versatz, der die Position des Rahmens anpasst, in dem das Ziel als sichtbar erachtet wird.

> [!NOTE]
> Wenn die angegebene Achse keine Scrollleiste enthält, dann bleibt die Animationszeitleiste inaktiv (ohne Fortschritt).

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

  - : Der Wert der Scrollachsen kann einer der folgenden sein:

    - `block`
      - : Die Scrollleiste auf der Block-Achse des Scrollcontainers, welche die Achse in die Richtung senkrecht zum Fluss des Textes innerhalb einer Zeile darstellt.
        Für horizontale Schreibrichtungen, wie Standard-Englisch, ist dies dasselbe wie `y`, während es für vertikale Schreibrichtungen dasselbe wie `x` ist. Dies ist der Standardwert.
    - `inline`
      - : Die Scrollleiste auf der Inline-Achse des Scrollcontainers, welche die Achse in der Richtung parallel zum Fluss des Textes in einer Zeile darstellt.
        Für horizontale Schreibrichtungen ist dies dasselbe wie `x`, während es für vertikale Schreibrichtungen dasselbe wie `y` ist.
    - `y`
      - : Die Scrollleiste auf der vertikalen Achse des Scrollcontainers.
    - `x`
      - : Die Scrollleiste auf der horizontalen Achse des Scrollcontainers.

- inset

  - : Der Wert des Versatzes kann ein oder zwei Werte sein, die entweder `auto` oder ein {{cssxref("length-percentage")}} sein können. Es gibt eine Einfügung (positiv) oder Herausziehung (negativ) des [Scrollport](/de/docs/Glossary/Scroll_container#scrollport) an. Der Versatz wird verwendet, um zu bestimmen, ob sich das Element im Sichtbereich befindet, was die Länge der Animationszeitleiste bestimmt. Mit anderen Worten, die Animation dauert so lange wie das Element im durch den Versatz angepassten Sichtbereich ist.

    - start
      - : Nach innen gerichtete Einfügung vom Beginn des Scrollports.
    - end
      - : Nach innen gerichtete Einfügung vom Ende des Scrollports.

> [!NOTE]
> Die Scroll- und Versatzwerte können in beliebiger Reihenfolge angegeben werden.

### Formale Syntax

{{CSSSyntax}}

## Beispiele

### Festlegen einer anonymen Sichtfortschritts-Zeitleiste

Eine anonyme Sichtfortschritts-Zeitleiste wird auf ein Element mit der Klasse `subject` unter Verwendung von `animation-timeline: view()` festgelegt. Das Ergebnis ist, dass das `subject`-Element animiert, während es nach oben durch das Dokument bewegt wird, während es gescrollt wird.

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

Die `subject`-Elemente und `content`-Elemente sind minimal gestylt und der Textinhalt erhält einige grundlegende Schriftarteneinstellungen:

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

Um das Verständnis des Ergebnisses zu erleichtern, wurden zusätzliche Elemente `subject-container`, `top` und `bottom` verwendet. Der `subject-container` zeigt die Grenzen der Animation. Und halbtransparente `top` und `bottom` Überlagerungen kennzeichnen den versetzten Scrollport.

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

Im folgenden Code wird dem `<div>` mit der Klasse `subject` auch eine Klasse `animation` gegeben. Die `grow`-Animation bewirkt, dass das `subject`-Element wächst oder schrumpft. Die `animation-timeline: view(block 55% 10%)` ist gesetzt, um zu erklären, dass es animiert wird, während es durch die Sichtfortschritts-Zeitleiste fortschreitet, die von seinem scrollenden Vorfahren bereitgestellt wird (in diesem Fall das Wurzelelement des Dokuments).

Beim Herunterscrollen beachten Sie, wie der Versatzwert von `50% 10%` bewirkt, dass die Animation bei 10 % von unten beginnt und bei 50 % von oben endet. Während sich die Animation entlang der Zeitleiste vorwärts bewegt, wächst das `subject`. Umgekehrt, wenn nach oben gescrollt wird, verläuft die Animation in umgekehrter Richtung, beginnend bei 50 % von oben, sich rückwärts durch die Animation bewegend und endend bei 10 % von unten. Während also die Animation rückwärts abläuft, schrumpft das `subject`.

Ein wichtiger Punkt, an den man sich erinnern sollte, ist, dass die Animation so lange dauert, wie das `subject`-Element im sichtbaren Bereich ist, der eingestellt wurde, und versetzt mit `50% 10%` wurde.

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

Scrollen Sie, um das animierte Zielelement zu sehen.

{{EmbedLiveSample("Setting an anonymous view progress timeline", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
