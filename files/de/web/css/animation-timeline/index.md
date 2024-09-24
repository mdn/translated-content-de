---
title: animation-timeline
slug: Web/CSS/animation-timeline
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{CSSRef}}{{SeeCompatTable}}

Die **`animation-timeline`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Zeitleiste fest, die zur Steuerung des Fortschritts einer CSS-Animation verwendet wird.

Die folgenden Arten von Zeitleisten können über `animation-timeline` festgelegt werden:

- Die Standard-Dokumentzeitleiste, die durch den Zeitablauf seit dem ersten Laden des Dokuments im Browser fortschreitet. Dies ist die Zeitleiste, die traditionell mit CSS-Animationen verbunden ist und mit einem Wert von `auto` ausgewählt wird, oder indem überhaupt kein `animation-timeline`-Wert angegeben wird.
- Eine _Scroll-Fortschritt-Zeitleiste_, die fortschreitet, indem ein scrollbareres Element (Scroller) zwischen oben und unten (oder links und rechts) gescrollt wird. Die Position im Scrollbereich wird in einen Prozentsatz des Fortschritts umgewandelt — 0 % am Anfang und 100 % am Ende. Das Element, das die Scroll-Fortschritt-Zeitleiste bereitstellt, kann auf zwei Arten festgelegt werden:
  - Eine _benannte Scroll-Fortschritt-Zeitleiste_ ist eine, bei der der Scroller, der die Scroll-Fortschritt-Zeitleiste bereitstellt, explizit mit der {{cssxref("scroll-timeline-name")}} Eigenschaft (oder der {{cssxref("scroll-timeline")}} Kurzschreibweise) benannt wird. Der Name wird dann mit dem zu animierenden Element verknüpft, indem er als Wert der `animation-timeline`-Eigenschaft dieses Elements angegeben wird.
  - Eine _anonyme Scroll-Fortschritt-Zeitleiste_ ist eine, bei der dem zu animierenden Element eine {{cssxref("animation-timeline/scroll", "scroll()")}} Funktion als `animation-timeline`-Wert gegeben wird, die den Scroller auswählt, der die Scroll-Fortschritt-Zeitleiste bereitstellt, und die Scrollachse, die basierend auf den übergebenen Argumenten verwendet werden soll.
- Eine _Ansichtsfortschritt-Zeitleiste_, die fortschreitet, basierend auf der Änderung der Sichtbarkeit eines Elements (bekannt als das _Subjekt_) innerhalb eines Scrollers. Die Sichtbarkeit des Subjekts innerhalb des Scrollers wird verfolgt — standardmäßig ist die Zeitleiste bei 0 %, wenn das Subjekt zuerst an einem Rand des Scrollers sichtbar ist, und bei 100 %, wenn es den gegenüberliegenden Rand erreicht. Im Gegensatz zu Scroll-Fortschritt-Zeitleisten können Sie den Scroller nicht spezifizieren — die Sichtbarkeit des Subjekts wird immer innerhalb seines nächstgelegenen Vorfahren-Scrollers verfolgt. Das Subjekt, das die Ansichtsfortschritt-Zeitleiste bereitstellt, kann auf zwei Arten festgelegt werden:
  - Eine _benannte Ansichtsfortschritt-Zeitleiste_ ist eine, bei der das Subjekt explizit mit der {{cssxref("view-timeline-name")}} Eigenschaft (oder der {{cssxref("view-timeline")}} Kurzschreibweise) benannt wird. Der Name wird dann mit dem zu animierenden Element verknüpft, indem er als Wert der `animation-timeline`-Eigenschaft dieses Elements angegeben wird. Dies ist ein wichtiger Punkt — bei benannten Ansichtsfortschritt-Zeitleisten muss das zu animierende Element nicht dasselbe wie das Subjekt sein.
  - Eine _anonyme Ansichtsfortschritt-Zeitleiste_ ist eine, bei der dem Subjekt eine {{cssxref("animation-timeline/view", "view()")}} Funktion als `animation-timeline`-Wert gegeben wird, wodurch es basierend auf seiner Position innerhalb seines nächstgelegenen Eltern-Scrollers animiert wird.

> **Hinweis:** `animation-timeline` ist in der {{cssxref("animation")}} Kurzschreibweise als reiner Reset-Wert enthalten. Das bedeutet, dass das Einfügen von `animation` einen zuvor deklarierten `animation-timeline`-Wert auf `auto` zurücksetzt, aber ein spezifischer Wert nicht über `animation` gesetzt werden kann. Beim Erstellen von [CSS scroll-gesteuerten Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations), müssen Sie `animation-timeline` nach der Deklaration einer `animation` Kurzschreibweise angeben, damit es wirkt.

<!-- {{EmbedInteractiveExample("pages/css/animation-name.html")}} -->

## Syntax

```css
/* Schlüsselwort */
animation-timeline: none;
animation-timeline: auto;

/* Einzelne Animation benannte Zeitleiste */
animation-timeline: --timeline_name;

/* Einzelne Animation anonyme Scroll-Fortschritt-Zeitleiste */
animation-timeline: scroll();
animation-timeline: scroll(scroller axis);

/* Einzelne Animation anonyme Ansichtsfortschritt-Zeitleiste */
animation-timeline: view();
animation-timeline: view(axis inset);

/* Mehrere Animationen */
animation-timeline: --progressBarTimeline, --carouselTimeline;
animation-timeline: none, --slidingTimeline;

/* Globale Werte */
animation-timeline: inherit;
animation-timeline: initial;
animation-timeline: revert;
animation-timeline: revert-layer;
animation-timeline: unset;
```

### Werte

- `none`
  - : Die Animation ist nicht mit einer Zeitleiste verbunden.
- `auto`

  - : Die Zeitleiste der Animation ist die Standard-Dokumentzeitleiste [DocumentTimeline](/de/docs/Web/API/DocumentTimeline).

- `scroll()`

  - : Eine anonyme Scroll-Fortschritt-Zeitleiste wird von einem Vorfahren-Scroller des aktuellen Elements bereitgestellt. Die Funktionsparameter ermöglichen es Ihnen, den Scroller und die Scrollachse auszuwählen, entlang derer die Zeitleiste gemessen wird.

    Siehe {{cssxref("animation-timeline/scroll", "scroll()")}} für weitere Informationen.

- `view()`

  - : Eine anonyme Ansichtsfortschritt-Zeitleiste wird vom Subjekt bereitgestellt, auf dem `animation-timeline: view();` gesetzt ist. Die Funktionsparameter ermöglichen es Ihnen, die Scrollachse auszuwählen, entlang derer der Zeitleistenfortschritt verfolgt wird, und einen Inset, der die Position der Box anpasst, in der das Subjekt als sichtbar betrachtet wird.

    Siehe {{cssxref("animation-timeline/view", "view()")}} für weitere Informationen.

- `<dashed-ident>`

  - : Ein {{cssxref('dashed-ident')}} identifiziert eine benannte Zeitleiste, die zuvor mit der {{cssxref('scroll-timeline-name')}} oder {{cssxref('view-timeline-name')}} Eigenschaft (oder der {{cssxref('scroll-timeline')}} oder {{cssxref('view-timeline')}} Kurzschreibweise) deklariert wurde.

    > [!NOTE]
    > Wenn zwei oder mehr Zeitleisten denselben Namen teilen, wird die innerhalb des Kaskaden zuletzt deklarierte verwendet. Außerdem, wenn keine Zeitleiste gefunden wird, die mit dem gegebenen Namen übereinstimmt, ist die Animation nicht mit einer Zeitleiste verbunden.

    > [!NOTE]
    > Die [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident) Werte müssen mit `--` beginnen. Dies hilft, Namenskonflikte mit Standard-CSS-Schlüsselwörtern zu vermeiden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen einer benannten Scroll-Fortschritt-Zeitleiste

Eine Scroll-Fortschritt-Zeitleiste mit dem Namen `--squareTimeline` wird mithilfe der `scroll-timeline-name` Eigenschaft auf einem Element mit einer `id` von `container` definiert.
Diese wird dann als Zeitleiste für die Animation auf dem `#square` Element mit `animation-timeline: --squareTimeline` festgelegt.

#### HTML

Das HTML für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das CSS für den Container legt diesen als Quelle einer Scroll-Fortschritt-Zeitleiste mit dem Namen `--squareTimeline` fest, indem die `scroll-timeline-name` Eigenschaft verwendet wird (wir könnten explizit festlegen, welche Scrollachse mit {{cssxref("scroll-timeline-axis")}} verwendet werden soll, aber hier gibt es nur eine Blockrichtung-Scrollbar, und sie wird standardmäßig verwendet).

Die Höhe des Containers wird auf 300px eingestellt und wir setzen den Container ebenfalls, um einen vertikalen Scrollbalken zu erstellen, wenn er überläuft (unten verwenden wir CSS auf dem "stretcher"-Element, um sicherzustellen, dass es überläuft).

```css
#container {
  height: 300px;
  overflow-y: scroll;
  scroll-timeline-name: --squareTimeline;
  position: relative;
}
```

Das folgende CSS definiert ein Quadrat, das sich in wechselnden Richtungen dreht, entsprechend der Zeitleiste, die durch die `animation-timeline`-Eigenschaft bereitgestellt wird, die auf die oben genannte `--squareTimeline` Zeitleiste eingestellt ist.

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

Das "stretcher"-CSS setzt die Blockhöhe auf 600px, was das Container-Element zum Überlaufen zwingt und Scrollbalken erstellt.
Ohne dieses Element gäbe es keinen Scrollbalken und daher keine Scroll-Fortschritt-Zeitleiste, um sie mit der Animationszeitleiste zu verbinden.

```css
#stretcher {
  height: 600px;
}
```

#### Ergebnis

Scrollen Sie, um das animierte Quadrat-Element zu sehen.

{{EmbedLiveSample("Setting a named scroll progress timeline", "100%", "320px")}}

### Festlegen einer anonymen Scroll-Fortschritt-Zeitleiste

In diesem Beispiel wird das `#square`-Element mit einer anonymen Scroll-Fortschritt-Zeitleiste animiert, die auf das zu animierende Element mit der `scroll()`-Funktion angewendet wird.
Die Zeitleiste in diesem speziellen Beispiel wird vom nächstgelegenen Elternelement bereitgestellt, das (alle) Scrollbalken hat, von einem Scrollbalken in Blockrichtung.

#### HTML

Das HTML für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das folgende CSS definiert ein Quadrat, das sich in wechselnden Richtungen dreht, entsprechend der Zeitleiste, die durch die `animation-timeline`-Eigenschaft bereitgestellt wird.
In diesem Fall wird die Zeitleiste von `scroll(block nearest)` bereitgestellt, was bedeutet, dass sie den Scrollbalken in Blockrichtung des nächstgelegenen Vorfahrenelements auswählt, das Scrollbalken hat; in diesem Fall der vertikale Scrollbalken des "container"-Elements.

> **Hinweis:** `block` und `nearest` sind tatsächlich die Standardparameterwerte, sodass wir auch einfach `scroll()` verwenden könnten.

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

Das CSS für den Container setzt seine Höhe auf 300px und wir setzen auch den Container, um einen vertikalen Scrollbalken zu erstellen, wenn er überläuft.
Das "stretcher"-CSS setzt die Blockhöhe auf 600px, was das Container-Element zum Überlaufen zwingt.
Diese beiden zusammen stellen sicher, dass der Container einen vertikalen Scrollbalken hat, der es ermöglicht, ihn als Quelle der anonymen Scroll-Fortschritt-Zeitleiste zu verwenden.

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

### Festlegen einer benannten Ansichtsfortschritt-Zeitleiste

Eine Ansichtsfortschritt-Zeitleiste mit dem Namen `--subjectReveal` wird mit der `view-timeline-name` Eigenschaft auf einem Subjektelement mit einer `class` von `animation` definiert.
Diese wird dann als Zeitleiste für dasselbe Element mit `animation-timeline: --subjectReveal;` festgelegt. Das Ergebnis ist, dass das Subjektelement animiert wird, während es beim Scrollen durch das Dokument nach oben bewegt wird.

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

Das `subject` Element und sein enthaltenes `content` Element werden minimal gestylt, und dem Textinhalt werden einige grundlegende Schriftarteinstellungen gegeben:

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

Das `<div>` mit der Klasse `subject` wird auch mit einer Klasse `animation` versehen — hier wird die {{cssxref("view-timeline-name")}} gesetzt, um eine benannte Ansichtsfortschritt-Zeitleiste zu definieren. Es wird auch ein `animation-timeline` Name mit demselben Wert gegeben, um zu deklarieren, dass dies das animierte Element sein wird, während die Ansichtsfortschritt-Zeitleiste fortschreitet.

Zuletzt wird eine Animation auf dem Element spezifiziert, die ihre Deckkraft und Skalierung animiert, wodurch es einblendet und vergrößert, während es den Scroller hinaufbewegt.

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

### Festlegen einer anonymen Ansichtsfortschritt-Zeitleiste

Eine anonyme Ansichtsfortschritt-Zeitleiste wird auf ein Element mit der Klasse `subject` mit `animation-timeline: view()` gesetzt. Das Ergebnis ist, dass das `subject`-Element animiert wird, während es beim Scrollen durch das Dokument nach oben bewegt wird.

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

Das `subject` Element und sein enthaltenes `content` Element werden minimal gestylt, und dem Textinhalt werden einige grundlegende Schriftarteinstellungen gegeben:

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

Das `<div>` mit der Klasse `subject` wird auch mit einer Klasse `animation` versehen — hier wird `animation-timeline: view()` gesetzt, um zu deklarieren, dass es animiert wird, während es durch die Ansichtsfortschritt-Zeitleiste fortschreitet, die von seinem scrollenden Vorfahren bereitgestellt wird (in diesem Fall das Stamm-Element des Dokuments).

Zuletzt wird eine Animation auf dem Element spezifiziert, die seine Deckkraft und Skalierung animiert, wodurch es einblendet und vergrößert, während es den Scroller hinaufbewegt.

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
- Das JavaScript-Äquivalent: Die `timeline`-Eigenschaft verfügbar in {{domxref("Element.animate()")}} Aufrufen
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
