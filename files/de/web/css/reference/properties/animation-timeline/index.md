---
title: animation-timeline
slug: Web/CSS/Reference/Properties/animation-timeline
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`animation-timeline`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Zeitleiste fest, die verwendet wird, um den Fortschritt einer CSS-Animation zu steuern.

Die folgenden Arten von Zeitleisten können über `animation-timeline` festgelegt werden:

- Die Standard-Dokument-Zeitleiste, die durch das Verstreichen der Zeit seit dem ersten Laden des Dokuments im Browser voranschreitet. Dies ist die Zeitleiste, die traditionell mit CSS-Animationen in Verbindung gebracht wird und mit einem Wert von `auto` ausgewählt wird oder indem kein `animation-timeline` Wert angegeben wird.
- Eine _Scroll-Fortschritts-Zeitleiste_, die durch das Scrollen eines scrollbaren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) voranschreitet. Die Position im Scrollbereich wird in einen Prozentsatz des Fortschritts umgewandelt — 0% am Anfang und 100% am Ende. Das Element, das die Scroll-Fortschritts-Zeitleiste bereitstellt, kann auf zwei Arten spezifiziert werden:
  - Eine _benannte Scroll-Fortschritts-Zeitleiste_ ist eine, bei der der Scroller, der die Scroll-Fortschritts-Zeitleiste bereitstellt, explizit mit der Eigenschaft {{cssxref("scroll-timeline-name")}} (oder der Kurzform-Eigenschaft {{cssxref("scroll-timeline")}}) benannt wird. Der Name wird dann dem zu animierenden Element zugeordnet, indem er als Wert der `animation-timeline` Eigenschaft dieses Elements angegeben wird.
  - Eine _anonyme Scroll-Fortschritts-Zeitleiste_ ist eine, bei der das zu animierende Element eine {{cssxref("animation-timeline/scroll", "scroll()")}} Funktion als `animation-timeline` Wert erhält, die den Scroller auswählt, der die Scroll-Fortschritts-Zeitleiste bereitstellt und die zu verwendende Scrollachse basierend auf den übergebenen Argumenten bestimmt.
- Eine _View-Fortschritts-Zeitleiste_, die auf der Veränderung der Sichtbarkeit eines Elements (bekannt als _Subject_) in einem Scroller basiert. Die Sichtbarkeit des Subjects im Scroller wird verfolgt — standardmäßig befindet sich die Zeitleiste bei 0%, wenn das Subject zum ersten Mal an einem Rand des Scrollers sichtbar ist, und bei 100%, wenn es den gegenüberliegenden Rand erreicht. Im Gegensatz zu den Scroll-Fortschritts-Zeitleisten können Sie den Scroller nicht festlegen — die Sichtbarkeit des Subjects wird immer innerhalb seines nächsten Vorfahren-Scrollers verfolgt. Das Subject, das die View-Fortschritts-Zeitleiste bereitstellt, kann auf zwei Arten spezifiziert werden:
  - Eine _benannte View-Fortschritts-Zeitleiste_ ist eine, bei der das Subject explizit mit der Eigenschaft {{cssxref("view-timeline-name")}} (oder der Kurzform-Eigenschaft {{cssxref("view-timeline")}}) benannt wird. Der Name wird dann dem zu animierenden Element zugeordnet, indem er als Wert der `animation-timeline` Eigenschaft dieses Elements angegeben wird. Dies ist ein wichtiger Punkt — bei benannten View-Fortschritts-Zeitleisten muss das zu animierende Element nicht mit dem Subject identisch sein.
  - Eine _anonyme View-Fortschritts-Zeitleiste_ ist eine, bei der das Subject eine {{cssxref("animation-timeline/view", "view()")}} Funktion als `animation-timeline` Wert erhält, was dazu führt, dass es basierend auf seiner Position innerhalb seines nächstliegenden Eltern-Scrollers animiert wird.

> [!NOTE]
> `animation-timeline` ist als ein Wert, der nur zurückgesetzt wird, in der {{cssxref("animation")}} Kurzform enthalten. Das bedeutet, dass das Einfügen von `animation` einen zuvor deklarierten `animation-timeline` Wert auf `auto` zurücksetzt, aber ein spezifischer Wert kann nicht über `animation` gesetzt werden. Beim Erstellen von [CSS scroll-gesteuerten Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) müssen Sie `animation-timeline` nach jeder `animation` Kurzform deklarieren, damit es wirksam wird.

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
animation-timeline: --progress-bar-timeline, --carousel-timeline;
animation-timeline: none, --sliding-timeline;

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
  - : Die Zeitleiste der Animation ist die Standard-[DocumentTimeline](/de/docs/Web/API/DocumentTimeline) des Dokuments.

- `scroll()`
  - : Eine anonyme Scroll-Fortschritts-Zeitleiste wird von einem Vorfahren-Scroller des aktuellen Elements bereitgestellt. Die Funktionsparameter ermöglichen die Auswahl des Scrollers und der Scrollachse, entlang derer die Zeitleiste gemessen wird.

    Siehe {{cssxref("animation-timeline/scroll", "scroll()")}} für weitere Informationen.

- `view()`
  - : Eine anonyme View-Fortschritts-Zeitleiste wird von dem Subject bereitgestellt, auf das `animation-timeline: view();` gesetzt ist. Die Funktionsparameter ermöglichen die Auswahl der Scrollleistenachse, entlang der die Zeitleistenfortschritte verfolgt werden, und eines Insets, das die Position der Box anpasst, in der das Subject als sichtbar gilt.

    Siehe {{cssxref("animation-timeline/view", "view()")}} für weitere Informationen.

- `<dashed-ident>`
  - : Ein {{cssxref('dashed-ident')}}, das eine benannte Zeitleiste identifiziert, die zuvor mit der Eigenschaft {{cssxref('scroll-timeline-name')}} oder {{cssxref('view-timeline-name')}} (oder der Kurzform-Eigenschaft {{cssxref('scroll-timeline')}} oder {{cssxref('view-timeline')}}) deklariert wurde.

    > [!NOTE]
    > Wenn zwei oder mehr Zeitleisten denselben Namen haben, wird die zuletzt in der Kaskade deklarierte verwendet. Wenn keine Zeitleiste gefunden wird, die dem gegebenen Namen entspricht, ist die Animation nicht mit einer Zeitleiste verknüpft.

    > [!NOTE]
    > Die [`<dashed-ident>`](/de/docs/Web/CSS/Reference/Values/dashed-ident) Werte müssen mit `--` beginnen. Dies hilft, Namenskonflikte mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegung einer benannten Scroll-Fortschritts-Zeitleiste

Eine Scroll-Fortschritts-Zeitleiste mit dem Namen `--square-timeline` wird unter Verwendung der Eigenschaft `scroll-timeline-name` auf einem Element mit der ID `container` definiert.
Dies wird dann als Zeitleiste für die Animation auf dem `#square` Element mit `animation-timeline: --square-timeline` festgelegt.

#### HTML

Das HTML für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das CSS für den Container setzt ihn als Quelle einer Scroll-Fortschritts-Zeitleiste mit dem Namen `--square-timeline` mithilfe der Eigenschaft `scroll-timeline-name` (wir könnten explizit festlegen, welche Scrollbarenachse mit {{cssxref("scroll-timeline-axis")}} verwendet werden soll, aber es gibt hier nur eine Blockrichtungs-Scrollleiste, und diese wird standardmäßig verwendet).

Die Höhe des Containers ist auf 300px eingestellt und wir setzen auch den Container so, dass er eine vertikale Scrollleiste erstellt, wenn er überläuft (unten verwenden wir CSS beim "Stretcher"-Element, um sicherzustellen, dass es überläuft).

```css
#container {
  height: 300px;
  overflow-y: scroll;
  scroll-timeline-name: --square-timeline;
  position: relative;
}
```

Das untenstehende CSS definiert ein Quadrat, das sich in entgegengesetzte Richtungen dreht, entsprechend der Zeitleiste, die durch die `animation-timeline` Eigenschaft bereitgestellt wird, die auf die oben genannte `--square-timeline` Zeitleiste gesetzt ist.

```css
#square {
  background-color: deeppink;
  width: 100px;
  height: 100px;
  margin-top: 100px;
  animation-name: rotateAnimation;
  animation-duration: 1ms; /* Firefox requires this to apply the animation */
  animation-direction: alternate;
  animation-timeline: --square-timeline;

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

Das "Stretcher"-CSS setzt die Blockhöhe auf 600px, was das Container-Element zwingt, zu überlaufen und Scrollleisten zu erstellen.
Ohne dieses Element gäbe es keine Scrollleiste und daher keine Scroll-Fortschritts-Zeitleiste, die mit der Animationszeitleiste verknüpft wäre.

```css
#stretcher {
  height: 600px;
}
```

#### Ergebnis

Scrollen Sie, um zu sehen, wie das Quadrat-Element animiert wird.

{{EmbedLiveSample("Setting a named scroll progress timeline", "100%", "320px")}}

### Festlegung einer anonymen Scroll-Fortschritts-Zeitleiste

In diesem Beispiel wird das `#square` Element mit einer anonymen Scroll-Fortschritts-Zeitleiste animiert, die auf das zu animierende Element mit der Funktion `scroll()` angewendet wird.
Die Zeitleiste in diesem speziellen Beispiel wird vom nächsten übergeordneten Element bereitgestellt, das eine (beliebige) Scrollleiste hat, von der Scrollleiste in der Blockrichtung.

#### HTML

Das HTML für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das untenstehende CSS definiert ein Quadrat, das sich in entgegengesetzte Richtungen dreht, entsprechend der Zeitleiste, die durch die `animation-timeline` Eigenschaft bereitgestellt wird.
In diesem Fall wird die Zeitleiste durch `scroll(block nearest)` bereitgestellt, was bedeutet, dass sie die Scrollleiste in der Blockrichtung des nächsten Vorfahren-Elements auswählt, das Scrollleisten hat; in diesem Fall die vertikale Scrollleiste des "Container"-Elements.

> [!NOTE]
> `block` und `nearest` sind eigentlich die Standardparameterwerte, daher hätten wir einfach `scroll()` verwenden können.

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

Das CSS für den Container setzt seine Höhe auf 300px und wir setzen auch den Container so, dass er eine vertikale Scrollleiste erstellt, wenn er überläuft.
Das "Stretcher"-CSS setzt die Blockhöhe auf 600px, was das Container-Element zwingt, zu überlaufen.
Diese beiden zusammen stellen sicher, dass der Container eine vertikale Scrollleiste hat, die es ermöglicht, als Quelle der anonymen Scroll-Fortschritts-Zeitleiste verwendet zu werden.

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

Scrollen Sie, um zu sehen, wie das Quadrat-Element animiert wird.

{{EmbedLiveSample("Setting an anonymous scroll progress timeline", "100%", "320px")}}

### Festlegung einer benannten View-Fortschritts-Zeitleiste

Eine View-Fortschritts-Zeitleiste mit dem Namen `--subject-reveal` wird unter Verwendung der Eigenschaft `view-timeline-name` auf einem Subject-Element mit der Klasse `animation` definiert.
Dies wird dann als Zeitleiste für dasselbe Element mit `animation-timeline: --subject-reveal;` festgelegt. Das Ergebnis ist, dass das Subject-Element animiert wird, während es aufwärts durch das Dokument bewegt wird, wenn es gescrollt wird.

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

Das `subject` Element und sein enthaltenes `content` Element sind minimal gestaltet, und der Textinhalt erhält einige grundlegende Schriftarteinstellungen:

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
  font-family: "Helvetica", "Arial", sans-serif;
}

h1 {
  font-size: 3rem;
}

p {
  font-size: 1.5rem;
  line-height: 1.5;
}
```

Das `<div>` mit der Klasse `subject` erhält auch die Klasse `animation` — hier wird die {{cssxref("view-timeline-name")}} festgelegt, um eine benannte View-Fortschritts-Zeitleiste zu definieren. Es erhält auch einen `animation-timeline` Namen mit demselben Wert, um zu erklären, dass dies das Element ist, das animiert wird, wenn die View-Fortschritts-Zeitleiste fortschreitet.

Zuletzt wird eine Animation auf dem Element spezifiziert, die seine Opazität und Größe animiert und dazu führt, dass es einblendet und sich vergrößert, während es den Scroller hinaufbewegt.

```css
.animation {
  view-timeline-name: --subject-reveal;
  animation-timeline: --subject-reveal;

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

Scrollen Sie, um zu sehen, wie das Subject-Element animiert wird.

{{EmbedLiveSample("Setting a named view progress timeline", "100%", "480px")}}

### Festlegung einer anonymen View-Fortschritts-Zeitleiste

Eine anonyme View-Fortschritts-Zeitleiste wird auf einem Element mit der Klasse `subject` gesetzt, indem `animation-timeline: view()` verwendet wird. Das Ergebnis ist, dass das `subject` Element animiert wird, während es aufwärts durch das Dokument bewegt wird, wenn es gescrollt wird.

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

Das `subject` Element und sein enthaltenes `content` Element sind minimal gestaltet, und der Textinhalt erhält einige grundlegende Schriftarteinstellungen:

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
  font-family: "Helvetica", "Arial", sans-serif;
}

h1 {
  font-size: 3rem;
}

p {
  font-size: 1.5rem;
  line-height: 1.5;
}
```

Das `<div>` mit der Klasse `subject` erhält auch die Klasse `animation` — hier wird `animation-timeline: view()` gesetzt, um zu erklären, dass es animiert wird, wenn es durch die View-Fortschritts-Zeitleiste fortschreitet, die von seinem scrollenden Vorfahren bereitgestellt wird (in diesem Fall das Stamm-Element des Dokuments).

Zuletzt wird eine Animation auf dem Element spezifiziert, die seine Opazität und Größe animiert und dazu führt, dass es einblendet und sich vergrößert, während es den Scroller hinaufbewegt.

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

Scrollen Sie, um zu sehen, wie das Subject-Element animiert wird.

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
- Das JavaScript-Äquivalent: Die `timeline` Eigenschaft, die in [`Element.animate()`](/de/docs/Web/API/Element/animate) Aufrufen verfügbar ist
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
