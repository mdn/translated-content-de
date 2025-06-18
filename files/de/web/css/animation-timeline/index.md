---
title: animation-timeline
slug: Web/CSS/animation-timeline
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{CSSRef}}

Die **`animation-timeline`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt die Zeitleiste an, die zur Steuerung des Fortschritts einer CSS-Animation verwendet wird.

Folgende Arten von Zeitleisten können über `animation-timeline` festgelegt werden:

- Die standardmäßige Dokument-Zeitleiste, die durch den Zeitablauf seit dem ersten Laden des Dokuments im Browser voranschreitet. Dies ist die Zeitleiste, die traditionell mit CSS-Animationen verbunden ist und mit einem Wert von `auto` ausgewählt wird, oder indem gar kein Wert für `animation-timeline` angegeben wird.
- Eine _Scroll-Fortschritts-Zeitleiste_, die durch das Scrollen eines scrollbaren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) voranschreitet. Die Position im Scrollbereich wird in einen Prozentsatz des Fortschritts umgewandelt — 0% am Anfang und 100% am Ende. Das Element, das die Scroll-Fortschritts-Zeitleiste bereitstellt, kann auf zwei Arten angegeben werden:
  - Eine _benannte Scroll-Fortschritts-Zeitleiste_ ist eine, bei der der Scroller, der die Scroll-Fortschritts-Zeitleiste bereitstellt, explizit mit der {{cssxref("scroll-timeline-name")}}-Eigenschaft (oder der {{cssxref("scroll-timeline")}}-Kurzform) benannt wird. Der Name wird dann mit dem zu animierenden Element verknüpft, indem er als Wert der `animation-timeline`-Eigenschaft dieses Elements angegeben wird.
  - Eine _anonyme Scroll-Fortschritts-Zeitleiste_ ist eine, bei der das zu animierende Element eine {{cssxref("animation-timeline/scroll", "scroll()")}}-Funktion als `animation-timeline`-Wert erhält, die den Scroller auswählt, der die Scroll-Fortschritts-Zeitleiste bereitstellt, und die Scroll-Achse basierend auf den übergebenen Argumenten auswählt.
- Eine _Ansichts-Fortschritts-Zeitleiste_, die sich durch die Änderung der Sichtbarkeit eines Elements (bekannt als das _Subjekt_) innerhalb eines Scrollers fortschreitet. Die Sichtbarkeit des Subjekts innerhalb des Scrollers wird verfolgt — standardmäßig ist die Zeitleiste bei 0%, wenn das Subjekt zuerst am einen Rand des Scrollers sichtbar ist, und bei 100%, wenn es den gegenüberliegenden Rand erreicht. Im Gegensatz zu Scroll-Fortschritts-Zeitleisten können Sie den Scroller nicht angeben — die Sichtbarkeit des Subjekts wird immer innerhalb seines nächstgelegenen Scroller-Vorfahren verfolgt. Das Subjekt, das die Ansichts-Fortschritts-Zeitleiste bereitstellt, kann auf zwei Arten angegeben werden:
  - Eine _benannte Ansichts-Fortschritts-Zeitleiste_ ist eine, bei der das Subjekt explizit mit der {{cssxref("view-timeline-name")}}-Eigenschaft (oder der {{cssxref("view-timeline")}}-Kurzform) benannt wird. Der Name wird dann mit dem zu animierenden Element verknüpft, indem er als Wert der `animation-timeline`-Eigenschaft dieses Elements angegeben wird. Dies ist ein wichtiger Punkt — bei benannten Ansichts-Fortschritts-Zeitleisten muss das zu animierende Element nicht dasselbe wie das Subjekt sein.
  - Eine _anonyme Ansichts-Fortschritts-Zeitleiste_ ist eine, bei der das Subjekt eine {{cssxref("animation-timeline/view", "view()")}}-Funktion als `animation-timeline`-Wert erhält, die bewirkt, dass es basierend auf seiner Position innerhalb seines nächstgelegenen Scroller-Vorfahren animiert wird.

> **Note:** `animation-timeline` ist im {{cssxref("animation")}}-Kurzform als alleiniger Reset-Wert enthalten. Das bedeutet, dass das Einfügen von `animation` einen zuvor deklarierten `animation-timeline`-Wert auf `auto` zurücksetzt, aber ein spezifischer Wert nicht über `animation` gesetzt werden kann. Beim Erstellen von [CSS scroll-gesteuerten Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) müssen Sie `animation-timeline` nach der Deklaration einer `animation`-Kurzform angeben, damit es wirksam wird.

<!-- {{EmbedInteractiveExample("pages/css/animation-name.html")}} -->

## Syntax

```css
/* Keyword */
animation-timeline: none;
animation-timeline: auto;

/* Single animation named timeline */
animation-timeline: --timeline_name;

/* Single animation anonymous scroll progress timeline */
animation-timeline: scroll();
animation-timeline: scroll(scroller axis);

/* Single animation anonymous view progress timeline */
animation-timeline: view();
animation-timeline: view(axis inset);

/* Multiple animations */
animation-timeline: --progressBarTimeline, --carouselTimeline;
animation-timeline: none, --slidingTimeline;

/* Global values */
animation-timeline: inherit;
animation-timeline: initial;
animation-timeline: revert;
animation-timeline: revert-layer;
animation-timeline: unset;
```

### Werte

- `none`
  - : Die Animation ist nicht mit einer Zeitleiste verknüpft.
- `auto`

  - : Die Zeitleiste der Animation ist die standardmäßige [DocumentTimeline](/de/docs/Web/API/DocumentTimeline) des Dokuments.

- `scroll()`

  - : Eine anonyme Scroll-Fortschritts-Zeitleiste wird von einem Vorfahren-Scroller des aktuellen Elements bereitgestellt. Die Funktionsparameter erlauben es Ihnen, den Scroller und die Scroll-Achse auszuwählen, entlang derer die Zeitleiste gemessen wird.

    Siehe {{cssxref("animation-timeline/scroll", "scroll()")}} für weitere Informationen.

- `view()`

  - : Eine anonyme Ansichts-Fortschritts-Zeitleiste wird von dem Subjekt bereitgestellt, auf dem `animation-timeline: view();` gesetzt ist. Die Funktionsparameter erlauben es Ihnen, die Scrollbalkenachse auszuwählen, entlang derer der Fortschritt der Zeitleiste verfolgt wird, und einen Versatz, der die Position der Box anpasst, in der das Subjekt als sichtbar gilt.

    Siehe {{cssxref("animation-timeline/view", "view()")}} für weitere Informationen.

- `<dashed-ident>`

  - : Eine {{cssxref('dashed-ident')}}, die eine benannte Zeitleiste identifiziert, die zuvor mit der {{cssxref('scroll-timeline-name')}}- oder {{cssxref('view-timeline-name')}}-Eigenschaft (oder der {{cssxref('scroll-timeline')}}- oder {{cssxref('view-timeline')}}-Kurzform) deklariert wurde.

    > [!NOTE]
    > Wenn zwei oder mehr Zeitleisten denselben Namen teilen, wird die zuletzt deklarierte innerhalb der Reihenfolge verwendet. Außerdem, wenn keine Zeitleiste gefunden wird, die dem gegebenen Namen entspricht, ist die Animation nicht mit einer Zeitleiste verknüpft.

    > [!NOTE]
    > Die [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident) Werte müssen mit `--` beginnen. Dies hilft, Namenskonflikte mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen einer benannten Scroll-Fortschritts-Zeitleiste

Eine Scroll-Fortschritts-Zeitleiste mit dem Namen `--squareTimeline` wird mit der `scroll-timeline-name`-Eigenschaft auf einem Element mit der `id` `container` definiert.
Diese wird dann als Zeitleiste für die Animation auf dem `#square` Element mit `animation-timeline: --squareTimeline` gesetzt.

#### HTML

Das HTML für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das CSS für den Container legt fest, dass er die Quelle einer Scroll-Fortschritts-Zeitleiste mit dem Namen `--squareTimeline` ist, indem die `scroll-timeline-name`-Eigenschaft verwendet wird (wir könnten explizit festlegen, welche Scrollbalkenachse mit {{cssxref("scroll-timeline-axis")}} verwendet werden soll, aber hier gibt es nur einen Scrollbalken in Blockrichtung, und dieser wird standardmäßig verwendet).

Die Höhe des Containers wird auf 300px gesetzt und wir legen auch fest, dass der Container einen vertikalen Scrollbalken erzeugt, wenn er überläuft (unten verwenden wir CSS auf dem "Stretcher"-Element, um sicherzustellen, dass er überläuft).

```css
#container {
  height: 300px;
  overflow-y: scroll;
  scroll-timeline-name: --squareTimeline;
  position: relative;
}
```

Das untenstehende CSS definiert ein Quadrat, das sich entsprechend der Zeitleiste, die von der `animation-timeline`-Eigenschaft bereitgestellt wird, in abwechselnden Richtungen dreht, welche auf die oben genannte `--squareTimeline`-Zeitleiste gesetzt ist.

```css
#square {
  background-color: deeppink;
  width: 100px;
  height: 100px;
  margin-top: 100px;
  animation-name: rotateAnimation;
  animation-duration: 1ms; /* Firefox requires this to apply the animation */
  animation-direction: alternate;
  animation-timeline: --squareTimeline;

  position: absolute;
  bottom: 0;
}

@keyframes rotateAnimation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

Das "Stretcher"-CSS setzt die Blockhöhe auf 600px, was das Überlaufen des Containerelements erzwingt und Scrollbalken erzeugt.
Ohne dieses Element gäbe es keine Scrollbalken und daher keine Scroll-Fortschritts-Zeitleiste, die mit der Animations-Zeitleiste verknüpft werden könnte.

```css
#stretcher {
  height: 600px;
}
```

#### Ergebnis

Scrollen Sie, um das animierte Quadrat zu sehen.

{{EmbedLiveSample("Setting a named scroll progress timeline", "100%", "320px")}}

### Festlegen einer anonymen Scroll-Fortschritts-Zeitleiste

In diesem Beispiel wird das `#square` Element mit einer anonymen Scroll-Fortschritts-Zeitleiste animiert, die auf das zu animierende Element durch die `scroll()`-Funktion angewendet wird.
In diesem speziellen Beispiel wird die Zeitleiste vom nächstgelegenen Elternelement bereitgestellt, das irgendeinen Scrollbalken hat, und zwar vom Scrollbalken in Blockrichtung.

#### HTML

Das HTML für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das untenstehende CSS definiert ein Quadrat, das sich gemäß der von der `animation-timeline`-Eigenschaft bereitgestellten Zeitleiste in abwechselnden Richtungen dreht.
In diesem Fall wird die Zeitleiste von `scroll(block nearest)` bereitgestellt, was bedeutet, dass es den Scrollbalken in Blockrichtung des nächsten Vorfahrenelements auswählt, das Scrollbalken hat; in diesem Fall den vertikalen Scrollbalken des "container"-Elements.

> **Note:** `block` und `nearest` sind tatsächlich die Standardparameterwerte, sodass wir einfach `scroll()` verwenden könnten.

```css
#square {
  background-color: deeppink;
  width: 100px;
  height: 100px;
  margin-top: 100px;
  position: absolute;
  bottom: 0;

  animation-name: rotateAnimation;
  animation-duration: 1ms; /* Firefox requires this to apply the animation */
  animation-direction: alternate;
  animation-timeline: scroll(block nearest);
}

@keyframes rotateAnimation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

Das CSS für den Container setzt seine Höhe auf 300px und wir legen auch fest, dass der Container einen vertikalen Scrollbalken erzeugt, wenn er überläuft.
Das "Stretcher"-CSS setzt die Blockhöhe auf 600px, was das Überlaufen des Containerelements erzwingt.
Diese beiden zusammen gewährleisten, dass der Container einen vertikalen Scrollbalken hat, wodurch er als Quelle der anonymen Scroll-Fortschritts-Zeitleiste verwendet werden kann.

```css
#container {
  height: 300px;
  overflow-y: scroll;
  position: relative;
}

#stretcher {
  height: 600px;
}
```

#### Ergebnis

Scrollen Sie, um das animierte Quadrat zu sehen.

{{EmbedLiveSample("Setting an anonymous scroll progress timeline", "100%", "320px")}}

### Festlegen einer benannten Ansichts-Fortschritts-Zeitleiste

Eine Ansichts-Fortschritts-Zeitleiste mit dem Namen `--subjectReveal` wird mithilfe der `view-timeline-name`-Eigenschaft auf einem Subjektelement mit einer `class` von `animation` definiert.
Diese wird dann als Zeitleiste für dasselbe Element mit `animation-timeline: --subjectReveal;` gesetzt. Das Ergebnis ist, dass das Subjektelement animiert wird, wenn es beim Scrollen nach oben durch das Dokument bewegt wird.

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

  <div class="subject animation"></div>

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
```

#### CSS

Das `subject` Element und sein enthaltenes `content` Element sind minimal gestylt, und der Textinhalt erhält einige grundlegende Schrifteinstellungen:

```css
.subject {
  width: 300px;
  height: 200px;
  margin: 0 auto;
  background-color: deeppink;
}

.content {
  width: 75%;
  max-width: 800px;
  margin: 0 auto;
}

p,
h1 {
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  font-size: 3rem;
}

p {
  font-size: 1.5rem;
  line-height: 1.5;
}
```

Das `<div>` mit der Klasse `subject` erhält ebenfalls eine Klasse `animation` — hier wird die {{cssxref("view-timeline-name")}} festgelegt, um eine benannte Ansichts-Fortschritts-Zeitleiste zu definieren. Es wird auch ein `animation-timeline`-Name mit demselben Wert angegeben, um zu erklären, dass dies das zu animierende Element ist, während die Ansichts-Fortschritts-Zeitleiste fortschreitet.

Schließlich wird eine Animation für das Element spezifiziert, die seine Deckkraft und Größe animiert und es beim Hochscrollen des Scrollers verblassen und vergrößern lässt.

```css
.animation {
  view-timeline-name: --subjectReveal;
  animation-timeline: --subjectReveal;

  animation-name: appear;
  animation-fill-mode: both;
  animation-duration: 1ms; /* Firefox requires this to apply the animation */
}

@keyframes appear {
  from {
    opacity: 0;
    transform: scaleX(0);
  }

  to {
    opacity: 1;
    transform: scaleX(1);
  }
}
```

#### Ergebnis

Scrollen Sie, um das animierte Subjektelement zu sehen.

{{EmbedLiveSample("Setting a named view progress timeline", "100%", "480px")}}

### Festlegen einer anonymen Ansichts-Fortschritts-Zeitleiste

Eine anonyme Ansichts-Fortschritts-Zeitleiste wird auf ein Element mit der Klasse `subject` gesetzt, indem `animation-timeline: view()` verwendet wird. Das Ergebnis ist, dass das `subject` Element animiert wird, während es beim Scrollen nach oben durch das Dokument bewegt wird.

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

  <div class="subject animation"></div>

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
```

#### CSS

Das `subject` Element und sein enthaltenes `content` Element sind minimal gestylt, und der Textinhalt erhält einige grundlegende Schrifteinstellungen:

```css
.subject {
  width: 300px;
  height: 200px;
  margin: 0 auto;
  background-color: deeppink;
}

.content {
  width: 75%;
  max-width: 800px;
  margin: 0 auto;
}

p,
h1 {
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  font-size: 3rem;
}

p {
  font-size: 1.5rem;
  line-height: 1.5;
}
```

Das `<div>` mit der Klasse `subject` erhält ebenfalls eine Klasse `animation` — hier wird `animation-timeline: view()` gesetzt, um zu erklären, dass es animiert wird, während es durch die von seinem scrollenden Vorfahren bereitgestellte Ansichts-Fortschritts-Zeitleiste läuft (in diesem Fall das Wurzelelement des Dokuments).

Schließlich wird eine Animation für das Element spezifiziert, die seine Deckkraft und Größe animiert und es beim Hochscrollen des Scrollers verblassen und vergrößern lässt.

```css
.animation {
  animation-timeline: view();

  animation-name: appear;
  animation-fill-mode: both;
  animation-duration: 1ms; /* Firefox requires this to apply the animation */
}

@keyframes appear {
  from {
    opacity: 0;
    transform: scaleX(0);
  }

  to {
    opacity: 1;
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

- {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}}
- {{cssxref("scroll-timeline-name")}}, {{cssxref("scroll-timeline-axis")}}, {{cssxref("scroll-timeline")}}
- {{cssxref("timeline-scope")}}
- {{cssxref("view-timeline-name")}}, {{cssxref("view-timeline-axis")}}, {{cssxref("view-timeline")}}, {{cssxref("view-timeline-inset")}}
- Das JavaScript-Äquivalent: Die `timeline`-Eigenschaft, die in [`Element.animate()`](/de/docs/Web/API/Element/animate)-Aufrufen verfügbar ist
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
