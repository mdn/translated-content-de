---
title: animation-timeline
slug: Web/CSS/animation-timeline
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{CSSRef}}

Die **`animation-timeline`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert die Zeitleiste, die verwendet wird, um den Fortschritt einer CSS-Animation zu steuern.

Die folgenden Typen von Zeitleisten können über `animation-timeline` festgelegt werden:

- Die Standard-Dokumenten-Zeitleiste, die durch das Verstreichen der Zeit seit dem ersten Laden des Dokuments im Browser fortschreitet. Dies ist die Zeitleiste, die traditionell mit CSS-Animationen in Verbindung gebracht wird und mit einem Wert von `auto` ausgewählt wird, oder indem gar kein `animation-timeline` Wert angegeben wird.
- Eine _Scroll-Fortschritts-Zeitleiste_, die durch das Scrollen eines scrollbaren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) fortschreitet. Die Position im Scrollbereich wird in einen Prozentsatz des Fortschritts umgewandelt — 0% am Anfang und 100% am Ende. Das Element, das die Scroll-Fortschritts-Zeitleiste bereitstellt, kann auf zwei Arten angegeben werden:
  - Eine _benannte Scroll-Fortschritts-Zeitleiste_ ist eine, bei der der Scroller, der die Scroll-Fortschritts-Zeitleiste bereitstellt, explizit mithilfe der {{cssxref("scroll-timeline-name")}} Eigenschaft (oder der {{cssxref("scroll-timeline")}} Kurzform-Eigenschaft) benannt wird. Der Name wird dann verknüpft mit dem zu animierenden Element, indem er als Wert der `animation-timeline` Eigenschaft dieses Elements angegeben wird.
  - Eine _anonyme Scroll-Fortschritts-Zeitleiste_ ist eine, bei der dem zu animierenden Element eine {{cssxref("animation-timeline/scroll", "scroll()")}} Funktion als `animation-timeline` Wert gegeben wird, die den Scroller auswählt, der die Scroll-Fortschritts-Zeitleiste bereitstellt und die Scroll-Achse, die verwendet werden soll, basierend auf den übergebenen Argumenten.
- Eine _Ansichtsfortschritts-Zeitleiste_, die auf der Änderung der Sichtbarkeit eines Elements (bekannt als das _Subjekt_) innerhalb eines Scrollers basiert. Die Sichtbarkeit des Subjekts innerhalb des Scrollers wird verfolgt — standardmäßig ist die Zeitleiste bei 0%, wenn das Subjekt zuerst an einer Kante des Scrollers sichtbar ist, und bei 100%, wenn es die gegenüberliegende Kante erreicht. Anders als bei Scroll-Fortschritts-Zeitleisten, können Sie den Scroller nicht angeben — die Sichtbarkeit des Subjekts wird immer innerhalb seines nächstgelegenen Vorfahren-Scrollers verfolgt. Das Subjekt, das die Ansichtsfortschritts-Zeitleiste bereitstellt, kann auf zwei Weisen angegeben werden:
  - Eine _benannte Ansichtsfortschritts-Zeitleiste_ ist eine, bei der das Subjekt explizit mit der {{cssxref("view-timeline-name")}} Eigenschaft (oder der {{cssxref("view-timeline")}} Kurzform-Eigenschaft) benannt wird. Der Name wird dann mit dem zu animierenden Element verknüpft, indem er als Wert der `animation-timeline` Eigenschaft dieses Elements angegeben wird. Dies ist ein wichtiger Punkt — bei benannten Ansichtsfortschritts-Zeitleisten muss das zu animierende Element nicht dasselbe sein wie das Subjekt.
  - Eine _anonyme Ansichtsfortschritts-Zeitleiste_ ist eine, bei der dem Subjekt eine {{cssxref("animation-timeline/view", "view()")}} Funktion als `animation-timeline` Wert gesetzt wird, was bewirkt, dass es aufgrund seiner Position innerhalb seines nächstliegenden Eltern-Scrollers animiert wird.

> [!NOTE] > `animation-timeline` ist im {{cssxref("animation")}} Kurzform als ein Wert, der nur zurückgesetzt wird, enthalten. Das bedeutet, dass beim Einfügen von `animation` ein zuvor deklarierter `animation-timeline` Wert auf `auto` zurückgesetzt wird, aber ein spezifischer Wert kann nicht über `animation` gesetzt werden. Beim Erstellen von [CSS-Scroll-gesteuerten Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) müssen Sie `animation-timeline` nach der Deklaration eines `animation` Kurzform angeben, damit es wirksam wird.

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
  - : Die Animation ist keiner Zeitleiste zugeordnet.
- `auto`

  - : Die Zeitleiste der Animation ist die standardmäßige [DocumentTimeline](/de/docs/Web/API/DocumentTimeline) des Dokuments.

- `scroll()`

  - : Eine anonyme Scroll-Fortschritts-Zeitleiste wird von einem Vorfahren-Scroller des aktuellen Elements bereitgestellt. Die Funktionsparameter ermöglichen es, den Scroller auszuwählen und die Achse, entlang derer die Zeitleiste gemessen wird.

    Siehe {{cssxref("animation-timeline/scroll", "scroll()")}} für weitere Informationen.

- `view()`

  - : Eine anonyme Ansichtsfortschritts-Zeitleiste wird von dem Subjekt bereitgestellt, auf dem `animation-timeline: view();` gesetzt ist. Die Funktionsparameter ermöglichen es, die Scrollleisten-Achse auszuwählen, entlang der der Zeitleistenfortschritt verfolgt wird, und einen Versatz, der die Position der Box anpasst, in der das Subjekt sichtbar ist.

    Siehe {{cssxref("animation-timeline/view", "view()")}} für weitere Informationen.

- `<dashed-ident>`

  - : Ein {{cssxref('dashed-ident')}} der eine zuvor deklarierte benannte Zeitleiste mit der {{cssxref('scroll-timeline-name')}} oder {{cssxref('view-timeline-name')}} Eigenschaft (oder der {{cssxref('scroll-timeline')}} oder {{cssxref('view-timeline')}} Kurzform-Eigenschaft) identifiziert.

    > [!NOTE]
    > Wenn zwei oder mehr Zeitleisten denselben Namen teilen, wird die zuletzt innerhalb der Cascade deklarierte verwendet. Auch, wenn keine Zeitleiste gefunden wird, die zum angegebenen Namen passt, ist die Animation keiner Zeitleiste zugeordnet.

    > [!NOTE]
    > Die [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident) Werte müssen mit `--` beginnen. Dies hilft, Namenskonflikte mit Standard-CSS-Schlüsselwörtern zu vermeiden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen einer benannten Scroll-Fortschritts-Zeitleiste

Eine mit `--squareTimeline` benannte Scroll-Fortschritts-Zeitleiste wird mithilfe der `scroll-timeline-name` Eigenschaft auf einem Element mit einer `id` von `container` definiert.
Diese wird dann als Zeitleiste für die Animation des `#square` Elements mit `animation-timeline: --squareTimeline` festgelegt.

#### HTML

Der HTML-Code für das Beispiel ist unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das CSS für den Container setzt ihn als Quelle einer Scroll-Fortschritts-Zeitleiste, die mit `--squareTimeline` benannt ist, mit der `scroll-timeline-name` Eigenschaft (wir könnten explizit festlegen, welche Scrollleisten-Achse mit {{cssxref("scroll-timeline-axis")}} verwendet werden soll, aber es gibt hier nur eine Block-Richtung Scrollleiste, und diese wird standardmäßig verwendet).

Die Höhe des Containers wird auf 300px gesetzt und wir setzen den Container auch, um eine vertikale Scrollleiste zu erstellen, wenn er überläuft (unten werden wir CSS auf das "Stretcher"-Element anwenden, um sicherzustellen, dass er tatsächlich überläuft).

```css
#container {
  height: 300px;
  overflow-y: scroll;
  scroll-timeline-name: --squareTimeline;
  position: relative;
}
```

Das untenstehende CSS definiert ein Quadrat, das sich gemäß der durch `animation-timeline` bereitgestellten Zeitleiste in wechselnder Richtung dreht, die auf die oben genannte `--squareTimeline` Zeitleiste gesetzt ist.

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

Das "Stretcher"-CSS setzt die Blockhöhe auf 600px, was das Element erzwingt, um überzulaufen und Scrollleisten zu erstellen.
Ohne dieses Element gäbe es keine Scrollleiste und daher keine Scroll-Fortschritts-Zeitleiste, die mit der Animation-Zeitleiste verknüpft werden könnte.

```css
#stretcher {
  height: 600px;
}
```

#### Ergebnis

Scrollen Sie, um das animierte Quadrat-Element zu sehen.

{{EmbedLiveSample("Setting a named scroll progress timeline", "100%", "320px")}}

### Festlegen einer anonymen Scroll-Fortschritts-Zeitleiste

In diesem Beispiel wird das `#square` Element mithilfe einer anonymen Scroll-Fortschritts-Zeitleiste animiert, die auf das zu animierende Element mit der `scroll()` Funktion angewendet wird.
Die Zeitleiste in diesem speziellen Beispiel wird vom nächstgelegenen Elternelement bereitgestellt, das (irgendeine) Scrollleiste hat, aus der Scrollleiste in der Blockrichtung.

#### HTML

Der HTML-Code für das Beispiel ist unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das untenstehende CSS definiert ein Quadrat, das sich gemäß der durch `animation-timeline` bereitgestellten Zeitleiste in wechselnder Richtung dreht.
In diesem Fall wird die Zeitleiste durch `scroll(block nearest)` bereitgestellt, was bedeutet, dass sie die Scrollleiste in der Blockrichtung des nächstgelegenen Vorfahren-Elements auswählt, das Scrollleisten hat; in diesem Fall die vertikale Scrollleiste des "Container"-Elements.

> [!NOTE] > `block` und `nearest` sind tatsächlich die Standardparameterwerte, deshalb hätten wir auch einfach `scroll()` verwenden können.

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

Das CSS für den Container setzt seine Höhe auf 300px und wir setzen den Container auch, um eine vertikale Scrollleiste zu erstellen, wenn er überläuft.
Das "Stretcher"-CSS setzt die Blockhöhe auf 600px, was das Element erzwingt, um überzulaufen.
Diese beiden Elemente zusammen stellen sicher, dass der Container eine vertikale Scrollleiste hat, die es ermöglicht, sie als Quelle der anonymen Scroll-Fortschritts-Zeitleiste zu verwenden.

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

Scrollen Sie, um das animierte Quadrat-Element zu sehen.

{{EmbedLiveSample("Setting an anonymous scroll progress timeline", "100%", "320px")}}

### Festlegen einer benannten Ansichtsfortschritts-Zeitleiste

Eine Ansichtsfortschritts-Zeitleiste, die `--subjectReveal` genannt wird, wird mithilfe der `view-timeline-name` Eigenschaft auf einem Subjekt-Element mit einer `class` von `animation` definiert.
Diese wird dann als Zeitleiste für dasselbe Element festgelegt mit `animation-timeline: --subjectReveal;`. Das Ergebnis ist, dass das Subjekt-Element animiert wird, während es beim Scrollen durch das Dokument nach oben bewegt wird.

#### HTML

Der HTML-Code für das Beispiel ist unten gezeigt.

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

Das `subject` Element und sein enthaltendes `content` Element sind minimal gestylt, und der Textinhalt hat einige grundlegende Schriftart-Einstellungen erhalten:

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

Das `<div>` mit der Klasse `subject` hat auch die Klasse `animation` — hier wird {{cssxref("view-timeline-name")}} gesetzt, um eine benannte Ansichtsfortschritts-Zeitleiste zu definieren. Es wird auch ein `animation-timeline` Name mit demselben Wert gegeben, um zu erklären, dass dies das Element ist, welches animiert wird, während die Ansichtsfortschritts-Zeitleiste fortschreitet.

Zuletzt wird eine Animation auf dem Element spezifiziert, die dessen Deckkraft und Maßstab animiert, was es bewirkt, dass es ausblendet und vergrößert, während es den Scroller hinauf bewegt.

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

Scrollen Sie, um das animierte Subjekt-Element zu sehen.

{{EmbedLiveSample("Setting a named view progress timeline", "100%", "480px")}}

### Festlegen einer anonymen Ansichtsfortschritts-Zeitleiste

Eine anonyme Ansichtsfortschritts-Zeitleiste wird auf einem Element mit der Klasse `subject` mit `animation-timeline: view()` gesetzt. Das Ergebnis ist, dass das `subject` Element animiert wird, während es beim Scrollen durch das Dokument nach oben bewegt wird.

#### HTML

Der HTML-Code für das Beispiel ist unten gezeigt.

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

Das `subject` Element und sein enthaltendes `content` Element sind minimal gestylt, und der Textinhalt hat einige grundlegende Schriftart-Einstellungen erhalten:

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

Das `<div>` mit der Klasse `subject` hat auch die Klasse `animation` — hier wird `animation-timeline: view()` gesetzt, um zu erklären, dass es anhand der Ansichtsfortschritts-Zeitleiste animiert wird, die von seinem scrollenden Vorfahren bereitgestellt wird (in diesem Fall das Wurzelelement des Dokuments).

Zuletzt wird eine Animation auf dem Element spezifiziert, die dessen Deckkraft und Maßstab animiert, was es bewirkt, dass es ausblendet und vergrößert, während es den Scroller hinauf bewegt.

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

Scrollen Sie, um das animierte Subjekt-Element zu sehen.

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
- Das JavaScript-Äquivalent: Die `timeline` Eigenschaft verfügbar in [`Element.animate()`](/de/docs/Web/API/Element/animate) Aufrufen
- [CSS-Scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
