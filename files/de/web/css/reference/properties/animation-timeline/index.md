---
title: animation-timeline
slug: Web/CSS/Reference/Properties/animation-timeline
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`animation-timeline`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert die Zeitleiste, die verwendet wird, um den Fortschritt einer CSS-Animation zu steuern.

Die folgenden Arten von Zeitleisten können über `animation-timeline` festgelegt werden:

- Die Standard-Dokumentzeitleiste, die durch den Zeitverlauf seit dem ersten Laden des Dokuments im Browser vorangetrieben wird. Dies ist die Zeitleiste, die üblicherweise mit CSS-Animationen verbunden wird und mit einem Wert von `auto` ausgewählt wird oder indem überhaupt kein `animation-timeline` Wert angegeben wird.
- Eine _Scroll-Fortschritt-Zeitleiste_, die durch Scrollen eines scrollbaren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) vorangetrieben wird. Die Position im Scrollbereich wird in einen Prozentsatz des Fortschritts umgewandelt — 0% am Anfang und 100% am Ende. Das Element, das die Scroll-Fortschritts-Zeitleiste bereitstellt, kann auf zwei Arten spezifiziert werden:
  - Eine _benannte Scroll-Fortschritt-Zeitleiste_ ist eine, bei der der Scroller, der die Scroll-Fortschritts-Zeitleiste bereitstellt, explizit unter Verwendung der {{cssxref("scroll-timeline-name")}} Eigenschaft (oder der {{cssxref("scroll-timeline")}} Kurzbeschreibung) benannt wird. Der Name wird dann mit dem zu animierenden Element verknüpft, indem er als Wert der `animation-timeline` Eigenschaft dieses Elements angegeben wird.
  - Eine _anonyme Scroll-Fortschritt-Zeitleiste_ ist eine, bei der das zu animierende Element eine {{cssxref("animation-timeline/scroll", "scroll()")}} Funktion als `animation-timeline` Wert erhält, die den Scroller auswählt, der die Scroll-Fortschritts-Zeitleiste bereitstellt, und die zu verwendende Scrollachse basierend auf den übergebenen Argumenten auswählt.
- Eine _View-Fortschritt-Zeitleiste_, die basierend auf der Änderung der Sichtbarkeit eines Elements (bekannt als _Subjekt_) innerhalb eines Scrollers vorangetrieben wird. Die Sichtbarkeit des Subjekts innerhalb des Scrollers wird verfolgt — standardmäßig ist die Zeitleiste bei 0%, wenn das Subjekt erstmals an einem Rand des Scrollers sichtbar ist und bei 100%, wenn es den gegenüberliegenden Rand erreicht. Anders als bei Scroll-Fortschritts-Zeitleisten kann der Scroller nicht spezifiziert werden — die Sichtbarkeit des Subjekts wird immer innerhalb seines nächstgelegenen Vorfahren-Scrollers verfolgt. Das Subjekt, das die View-Fortschritt-Zeitleiste bereitstellt, kann auf zwei Arten spezifiziert werden:
  - Eine _benannte View-Fortschritt-Zeitleiste_ ist eine, bei der das Subjekt explizit unter Verwendung der {{cssxref("view-timeline-name")}} Eigenschaft (oder der {{cssxref("view-timeline")}} Kurzbeschreibung) benannt wird. Der Name wird dann mit dem zu animierenden Element verknüpft, indem er als Wert der `animation-timeline` Eigenschaft dieses Elements angegeben wird. Dies ist ein wichtiger Punkt — bei benannten View-Fortschritt-Zeitleisten muss das zu animierende Element nicht dasselbe wie das Subjekt sein.
  - Eine _anonyme View-Fortschritt-Zeitleiste_ ist eine, bei der dem Subjekt eine {{cssxref("animation-timeline/view", "view()")}} Funktion als `animation-timeline` Wert gegeben wird, wodurch das Subjekt basierend auf seiner Position innerhalb seines nächstgelegenen Elternscrollers animiert wird.

> [!NOTE]
> `animation-timeline` ist in der {{cssxref("animation")}} Kurzbeschreibung als nur-zurücksetzbarer Wert enthalten. Dies bedeutet, dass das Einbeziehen von `animation` einen zuvor deklarierten `animation-timeline` Wert auf `auto` zurücksetzt, aber ein spezifischer Wert nicht über `animation` gesetzt werden kann. Wenn Sie [CSS Scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) erstellen, müssen Sie `animation-timeline` deklarieren, nachdem Sie eine beliebige `animation` Kurzbeschreibung deklariert haben, damit es wirksam wird.

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
  - : Die Animation ist keiner Zeitleiste zugeordnet.
- `auto`
  - : Die Zeitleiste der Animation ist die Standard- [DocumentTimeline](/de/docs/Web/API/DocumentTimeline) des Dokuments.

- `scroll()`
  - : Eine anonyme Scroll-Fortschritt-Zeitleiste wird von einem Vorfahren-Scroller des aktuellen Elements bereitgestellt. Die Funktionsparameter ermöglichen es Ihnen, den Scroller und die Scrollachse auszuwählen, entlang derer die Zeitleiste gemessen wird.

    Sehen Sie {{cssxref("animation-timeline/scroll", "scroll()")}} für mehr Informationen.

- `view()`
  - : Eine anonyme View-Fortschritt-Zeitleiste wird von dem Subjekt bereitgestellt, auf dem `animation-timeline: view();` gesetzt ist. Die Funktionsparameter ermöglichen es Ihnen, die Scrollbalkenachse auszuwählen, entlang derer der Zeitleistenfortschritt verfolgt wird, und einen Rand, der die Position des Kastens anpasst, in dem das Subjekt als sichtbar angesehen wird.

    Sehen Sie {{cssxref("animation-timeline/view", "view()")}} für mehr Informationen.

- `<dashed-ident>`
  - : Ein {{cssxref('dashed-ident')}} zur Identifizierung einer benannten Zeitleiste, die zuvor mit der {{cssxref('scroll-timeline-name')}} oder {{cssxref('view-timeline-name')}} Eigenschaft (oder der {{cssxref('scroll-timeline')}} oder {{cssxref('view-timeline')}} Kurzbeschreibung) deklariert wurde.

    > [!NOTE]
    > Wenn zwei oder mehr Zeitleisten denselben Namen teilen, wird die zuletzt deklarierte innerhalb der Kaskade verwendet. Auch wenn keine Zeitleiste gefunden wird, die dem angegebenen Namen entspricht, ist die Animation keiner Zeitleiste zugeordnet.

    > [!NOTE]
    > Die [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident) Werte müssen mit `--` beginnen. Dies hilft, Namenskonflikte mit Standard-CSS-Schlüsselwörtern zu vermeiden.

## Formale Definition

{{cssinfo}}

## Formaler Syntax

{{csssyntax}}

## Beispiele

### Festlegen einer benannten Scroll-Fortschritt-Zeitleiste

Eine Scroll-Fortschritt-Zeitleiste mit dem Namen `--square-timeline` wird mithilfe der `scroll-timeline-name` Eigenschaft auf einem Element mit einer `id` von `container` definiert. Diese wird dann als Zeitleiste für die Animation des `#square` Elements festgelegt, indem `animation-timeline: --square-timeline` verwendet wird.

#### HTML

Das HTML für das Beispiel wird unten angezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das CSS für den Container legt ihn als Quelle einer Scroll-Fortschritt-Zeitleiste mit dem Namen `--square-timeline` unter Verwendung der `scroll-timeline-name` Eigenschaft fest (wir könnten explizit festlegen, welche Scrollbalkenachse mit {{cssxref("scroll-timeline-axis")}} verwendet werden soll, aber hier gibt es nur eine Blockrichtung und sie wird standardmäßig verwendet).

Die Höhe des Containers wird auf 300px gesetzt und wir setzen auch den Container so, dass ein vertikaler Scrollbalken erstellt wird, falls er überläuft (unten werden wir CSS auf das "Stretcher"-Element anwenden, um sicherzustellen, dass er überläuft).

```css
#container {
  height: 300px;
  overflow-y: scroll;
  scroll-timeline-name: --square-timeline;
  position: relative;
}
```

Das untenstehende CSS definiert ein Quadrat, das sich in abwechselnde Richtungen dreht, gemäß der von der `animation-timeline` Eigenschaft bereitgestellten Zeitleiste, die auf die oben genannte `--square-timeline` Zeitleiste gesetzt ist.

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

Das "Stretcher" CSS setzt die Blockhöhe auf 600px, wodurch das Containerelement gezwungen wird, überzulaufen und Scrollbalken zu erstellen. Ohne dieses Element gäbe es keinen Scrollbalken und somit keine Scroll-Fortschritt-Zeitleiste, die der Animationszeitleiste zugeordnet werden kann.

```css
#stretcher {
  height: 600px;
}
```

#### Ergebnis

Scrollen Sie, um das Quadrat-Element in Animation zu sehen.

{{EmbedLiveSample("Festlegen einer benannten Scroll-Fortschritt-Zeitleiste", "100%", "320px")}}

### Festlegen einer anonymen Scroll-Fortschritt-Zeitleiste

In diesem Beispiel wird das `#square` Element mit einer anonymen Scroll-Fortschritt-Zeitleiste animiert, die mithilfe der `scroll()` Funktion auf das zu animierende Element angewendet wird. Die Zeitleiste in diesem speziellen Beispiel wird von dem nächstgelegenen übergeordneten Element bereitgestellt, das (beliebige) Scrollbalken hat, aus dem Scrollbalken in Blockrichtung.

#### HTML

Das HTML für das Beispiel wird unten angezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das untenstehende CSS definiert ein Quadrat, das sich in abwechselnde Richtungen dreht, gemäß der von der `animation-timeline` Eigenschaft bereitgestellten Zeitleiste. In diesem Fall wird die Zeitleiste durch `scroll(block nearest)` bereitgestellt, was bedeutet, dass es den Scrollbalken in der Blockrichtung des nächstgelegenen übergeordneten Elements auswählt, das Scrollbalken hat; in diesem Fall der vertikale Scrollbalken des "Container"-Elements.

> [!NOTE]
> `block` und `nearest` sind tatsächlich die Standardparameterwerte, sodass wir auch einfach `scroll()` hätten verwenden können.

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

Das CSS für den Container setzt seine Höhe auf 300px und wir setzen auch den Container so, dass ein vertikaler Scrollbalken erstellt wird, falls er überläuft. Das "Stretcher" CSS setzt die Blockhöhe auf 600px, wodurch das Containerelement gezwungen wird, überzulaufen. Diese beiden zusammen gewährleisten, dass der Container einen vertikalen Scrollbalken hat, der als Quelle der anonymen Scroll-Fortschritt-Zeitleiste verwendet werden kann.

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

Scrollen Sie, um das Quadrat-Element in Animation zu sehen.

{{EmbedLiveSample("Festlegen einer anonymen Scroll-Fortschritt-Zeitleiste", "100%", "320px")}}

### Festlegen einer benannten View-Fortschritt-Zeitleiste

Eine View-Fortschritt-Zeitleiste mit dem Namen `--subject-reveal` wird mithilfe der `view-timeline-name` Eigenschaft auf einem Subjekt-Element mit einer `class` von `animation` definiert. Diese wird dann als Zeitleiste für dasselbe Element unter Verwendung von `animation-timeline: --subject-reveal;` festgelegt. Das Ergebnis ist, dass das Subjekt-Element animiert wird, während es sich nach oben durch das Dokument bewegt, während es gescrollt wird.

#### HTML

Das HTML für das Beispiel wird unten angezeigt.

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

Das `subject` Element und das es enthaltende `content` Element sind minimal gestylt, und der Textinhalt erhält einige grundlegende Schriftarteinstellungen:

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

Das `<div>` mit der Klasse `subject` bekommt ebenfalls eine Klasse `animation` — hier wird das {{cssxref("view-timeline-name")}} gesetzt, um eine benannte View-Fortschritt-Zeitleiste zu definieren. Es wird auch ein `animation-timeline` Name mit demselben Wert gegeben, um zu erklären, dass dies das Element sein wird, das animiert wird, während die View-Fortschritt-Zeitleiste voranschreitet.

Zuletzt wird eine Animation auf dem Element spezifiziert, die seine Deckkraft und Größe animiert, wodurch es verblasst und sich vergrößert, während es den Scroller nach oben bewegt.

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

Scrollen Sie, um das Subjekt-Element in Animation zu sehen.

{{EmbedLiveSample("Festlegen einer benannten View-Fortschritt-Zeitleiste", "100%", "480px")}}

### Festlegen einer anonymen View-Fortschritt-Zeitleiste

Eine anonyme View-Fortschritt-Zeitleiste wird auf einem Element mit der Klasse `subject` unter Verwendung von `animation-timeline: view()` festgelegt. Das Ergebnis ist, dass das `subject` Element animiert wird, während es sich nach oben durch das Dokument bewegt, während es gescrollt wird.

#### HTML

Das HTML für das Beispiel wird unten angezeigt.

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

Das `subject` Element und das es enthaltende `content` Element sind minimal gestylt, und der Textinhalt erhält einige grundlegende Schriftarteinstellungen:

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

Das `<div>` mit der Klasse `subject` bekommt ebenfalls eine Klasse `animation` — hier wird `animation-timeline: view()` gesetzt, um zu erklären, dass es animiert wird, während es den View-Fortschritt-Zeitleistenfortschritt durchläuft, der von seinem scrollenden Vorfahren bereitgestellt wird (in diesem Fall das Stammdokumentelement).

Zuletzt wird eine Animation auf dem Element spezifiziert, die seine Deckkraft und Größe animiert, wodurch es verblasst und sich vergrößert, während es den Scroller nach oben bewegt.

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

Scrollen Sie, um das Subjekt-Element in Animation zu sehen.

{{EmbedLiveSample("Festlegen einer anonymen View-Fortschritt-Zeitleiste", "100%", "480px")}}

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
- [CSS Scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
