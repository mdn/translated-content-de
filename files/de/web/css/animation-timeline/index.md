---
title: animation-timeline
slug: Web/CSS/animation-timeline
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`animation-timeline`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Zeitleiste fest, die verwendet wird, um den Fortschritt einer CSS-Animation zu steuern.

Die folgenden Arten von Zeitleisten können über `animation-timeline` festgelegt werden:

- Die standardmäßige Dokumentzeitleiste, die durch den Zeitablauf seit dem ersten Laden des Dokuments im Browser fortschreitet. Diese Zeitleiste ist traditionell mit CSS-Animationen verbunden und wird mit einem Wert von `auto` ausgewählt oder indem kein `animation-timeline` Wert spezifiziert wird.
- Eine _Scroll-Fortschrittszeitleiste_, die durch das Scrollen eines scrollbaren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) fortschreitet. Die Position im Scrollbereich wird in einen Prozentsatz des Fortschritts umgewandelt — 0 % am Anfang und 100 % am Ende. Das Element, das die Scroll-Fortschrittszeitleiste bietet, kann auf zwei Arten angegeben werden:
  - Eine _benannte Scroll-Fortschrittszeitleiste_ ist eine, bei der der Scroller, der die Scroll-Fortschrittszeitleiste bereitstellt, explizit unter Verwendung der {{cssxref("scroll-timeline-name")}} Eigenschaft (oder der {{cssxref("scroll-timeline")}} Kurzschreibweise) benannt wird. Der Name wird dann mit dem zu animierenden Element durch Angabe als Wert der `animation-timeline` Eigenschaft dieses Elements verknüpft.
  - Eine _anonyme Scroll-Fortschrittszeitleiste_ ist eine, bei der das zu animierende Element eine {{cssxref("animation-timeline/scroll", "scroll()")}} Funktion als `animation-timeline` Wert erhält, die den Scroller auswählt, der die Scroll-Fortschrittszeitleiste bereitstellt, und die Scroll-Achse, die verwendet werden soll, basierend auf den an sie übergebenen Argumenten.
- Eine _Ansichtsfortschrittszeitleiste_, die basierend auf der Änderung der Sichtbarkeit eines Elements (bekannt als das _Subjekt_) innerhalb eines Scrollers Fortschritte macht. Die Sichtbarkeit des Subjekts innerhalb des Scrollers wird verfolgt — standardmäßig befindet sich die Zeitleiste bei 0 %, wenn das Subjekt zuerst an einem Rand des Scrollers sichtbar ist, und bei 100 %, wenn es den gegenüberliegenden Rand erreicht. Im Gegensatz zu Scroll-Fortschrittszeitleisten können Sie den Scroller nicht angeben — die Sichtbarkeit des Subjekts wird immer innerhalb des nächstgelegenen Vorfahren-Scrollers verfolgt. Das Subjekt, das die Ansichtsfortschrittszeitleiste bereitstellt, kann auf zwei Arten angegeben werden:
  - Eine _benannte Ansichtsfortschrittszeitleiste_ ist eine, bei der das Subjekt explizit unter Verwendung der {{cssxref("view-timeline-name")}} Eigenschaft (oder der {{cssxref("view-timeline")}} Kurzschreibweise) benannt wird. Der Name wird dann mit dem zu animierenden Element durch Angabe als Wert der `animation-timeline` Eigenschaft dieses Elements verknüpft. Dies ist ein entscheidender Punkt — bei benannten Ansichtsfortschrittszeitleisten muss das zu animierende Element nicht dasselbe wie das Subjekt sein.
  - Eine _anonyme Ansichtsfortschrittszeitleiste_ ist eine, bei der dem Subjekt eine {{cssxref("animation-timeline/view", "view()")}} Funktion als `animation-timeline` Wert gegeben wird, wodurch es basierend auf seiner Position innerhalb seines nächstliegenden übergeordneten Scrollers animiert wird.

> [!NOTE]
> `animation-timeline` ist in der {{cssxref("animation")}} Kurzform als reiner Reset-Wert enthalten. Dies bedeutet, dass das Einschließen von `animation` einen zuvor deklarierten `animation-timeline` Wert auf `auto` zurücksetzt, aber ein spezifischer Wert kann nicht über `animation` festgelegt werden. Beim Erstellen von [CSS scroll-gesteuerten Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) müssen Sie `animation-timeline` nach der Angabe einer `animation` Kurzform deklarieren, damit es wirksam wird.

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
  - : Die Animation ist nicht mit einer Zeitleiste verbunden.
- `auto`
  - : Die Zeitleiste der Animation ist die standardmäßige [DocumentTimeline](/de/docs/Web/API/DocumentTimeline) des Dokuments.

- `scroll()`
  - : Eine anonyme Scroll-Fortschrittszeitleiste wird von einem übergeordneten Scroller des aktuellen Elements bereitgestellt. Die Funktionsparameter ermöglichen es Ihnen, den Scroller auszuwählen und die Scroll-Achse, entlang der die Zeitleiste gemessen wird.

    Siehe {{cssxref("animation-timeline/scroll", "scroll()")}} für weitere Informationen.

- `view()`
  - : Eine anonyme Ansichtsfortschrittszeitleiste wird von dem Subjekt bereitgestellt, auf das `animation-timeline: view();` angewendet wird. Die Funktionsparameter ermöglichen es Ihnen, die Scroll-Achse auszuwählen, entlang der der Zeitleistenfortschritt verfolgt wird, und einen Einschnitt einzustellen, der die Position der Box anpasst, in der das Subjekt als sichtbar betrachtet wird.

    Siehe {{cssxref("animation-timeline/view", "view()")}} für weitere Informationen.

- `<dashed-ident>`
  - : Ein {{cssxref('dashed-ident')}} zur Identifizierung einer benannten Zeitleiste, die zuvor mit der {{cssxref('scroll-timeline-name')}} oder {{cssxref('view-timeline-name')}} Eigenschaft (oder der {{cssxref('scroll-timeline')}} oder {{cssxref('view-timeline')}} Kurzform) deklariert wurde.

    > [!NOTE]
    > Wenn zwei oder mehr Zeitleisten den gleichen Namen teilen, wird die zuletzt deklarierte innerhalb der Kaskade verwendet. Außerdem, wenn keine Zeitleiste gefunden wird, die mit dem angegebenen Namen übereinstimmt, ist die Animation nicht mit einer Zeitleiste verbunden.

    > [!NOTE]
    > Die [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident) Werte müssen mit `--` beginnen. Dies hilft, Namenskollisionen mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden.

## Formale Definition

{{cssinfo}}

## Formaler Syntax

{{csssyntax}}

## Beispiele

### Festlegen einer benannten Scroll-Fortschrittszeitleiste

Eine Scroll-Fortschrittszeitleiste mit dem Namen `--squareTimeline` wird unter Verwendung der `scroll-timeline-name` Eigenschaft auf einem Element mit einer `id` von `container` definiert.
Diese wird dann als Zeitleiste für die Animation auf dem `#square` Element mit `animation-timeline: --squareTimeline` festgelegt.

#### HTML

Das HTML für das Beispiel ist unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das CSS für den Container setzt es als die Quelle einer Scroll-Fortschrittszeitleiste, die `--squareTimeline` genannt wird, unter Verwendung der `scroll-timeline-name` Eigenschaft (wir könnten explizit festlegen, welche Scroll-Achse mit {{cssxref("scroll-timeline-axis")}} verwendet werden soll, aber es gibt hier nur einen Blockrichtungs-Scrollbar, und er wird standardmäßig verwendet).

Die Höhe des Containers wird auf 300px gesetzt und wir setzen den Container auch so, dass er einen vertikalen Scrollbar erstellt, wenn er überläuft (unten werden wir CSS für das "Stretcher"-Element verwenden, um sicherzustellen, dass es überläuft).

```css
#container {
  height: 300px;
  overflow-y: scroll;
  scroll-timeline-name: --squareTimeline;
  position: relative;
}
```

Das folgende CSS definiert ein Quadrat, das sich gemäß der von der `animation-timeline` Eigenschaft bereitgestellten Zeitleiste in alternativen Richtungen dreht, die auf die oben genannte `--squareTimeline` Zeitleiste gesetzt ist.

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

Das "Stretcher"-CSS setzt die Blockhöhe auf 600px, was das Container-Element zum Überlaufen und zur Erstellung von Scrollbars zwingt.
Ohne dieses Element gäbe es keinen Scrollbar und daher keine Scroll-Fortschrittszeitleiste, die mit der Animation-Zeitleiste verknüpft werden könnte.

```css
#stretcher {
  height: 600px;
}
```

#### Ergebnis

Scrollen Sie, um das Quadrat-Element animiert zu sehen.

{{EmbedLiveSample("Setting a named scroll progress timeline", "100%", "320px")}}

### Festlegen einer anonymen Scroll-Fortschrittszeitleiste

In diesem Beispiel wird das `#square` Element unter Verwendung einer anonymen Scroll-Fortschrittszeitleiste animiert, die auf das zu animierende Element unter Verwendung der `scroll()` Funktion angewendet wird.
Die Zeitleiste in diesem speziellen Beispiel wird vom nächstgelegenen übergeordneten Element bereitgestellt, das (irgendeinen) Scrollbar hat, von dem Scrollbar in der Blockrichtung.

#### HTML

Das HTML für das Beispiel ist unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das folgende CSS definiert ein Quadrat, das sich gemäß der von der `animation-timeline` Eigenschaft bereitgestellten Zeitleiste in alternativen Richtungen dreht.
In diesem Fall wird die Zeitleiste durch `scroll(block nearest)` bereitgestellt, was bedeutet, dass sie den Scrollbar in der Blockrichtung des nächstgelegenen übergeordneten Elements auswählt, das Scrollbars hat; in diesem Fall der vertikale Scrollbar des "Container"-Elements.

> [!NOTE]
> `block` und `nearest` sind tatsächlich die Standard-Parameterwerte, daher könnten wir einfach `scroll()` verwenden.

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

Das CSS für den Container setzt seine Höhe auf 300px und wir setzen den Container auch so, dass er einen vertikalen Scrollbar erstellt, wenn er überläuft.
Das "Stretcher"-CSS setzt die Blockhöhe auf 600px, was das Container-Element zum Überlaufen zwingt.
Diese beiden zusammen stellen sicher, dass der Container einen vertikalen Scrollbar hat, der es ermöglicht, ihn als Quelle der anonymen Scroll-Fortschrittszeitleiste zu verwenden.

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

Scrollen Sie, um das Quadrat-Element animiert zu sehen.

{{EmbedLiveSample("Setting an anonymous scroll progress timeline", "100%", "320px")}}

### Festlegen einer benannten Ansichtsfortschrittszeitleiste

Eine Ansichtsfortschrittszeitleiste mit dem Namen `--subjectReveal` wird mit der `view-timeline-name` Eigenschaft auf einem Subjekt-Element mit der `class` `animation` definiert.
Diese wird dann als Zeitleiste für dasselbe Element mit `animation-timeline: --subjectReveal;` festgelegt. Das Ergebnis ist, dass das Subjekt-Element animiert wird, während es sich nach oben durch das Dokument bewegt, wenn es gescrollt wird.

#### HTML

Das HTML für das Beispiel ist unten gezeigt.

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

Das `<div>` mit der Klasse `subject` erhält auch die Klasse `animation` — hier wird die {{cssxref("view-timeline-name")}} gesetzt, um eine benannte Ansichtsfortschrittszeitleiste zu definieren. Es wird auch eine `animation-timeline` Name mit demselben Wert gegeben, um zu erklären, dass dies das Element sein wird, das animiert wird, während die Ansichtsfortschrittszeitleiste fortschreitet.

Schließlich wird dem Element eine Animation zugewiesen, die seine Deckkraft und Skalierung animiert, wodurch es beim Nach-oben-Scrollen im Scroller ein- und ausblendet.

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

Scrollen Sie, um das Subjekt-Element animiert zu sehen.

{{EmbedLiveSample("Setting a named view progress timeline", "100%", "480px")}}

### Festlegen einer anonymen Ansichtsfortschrittszeitleiste

Eine anonyme Ansichtsfortschrittszeitleiste wird auf ein Element mit der Klasse `subject` mit `animation-timeline: view()` angewendet. Das Ergebnis ist, dass das `subject` Element animiert wird, während es sich nach oben durch das Dokument bewegt, wenn es gescrollt wird.

#### HTML

Das HTML für das Beispiel ist unten gezeigt.

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

Das `<div>` mit der Klasse `subject` erhält auch die Klasse `animation` — hier wird `animation-timeline: view()` festgelegt, um zu erklären, dass es animiert wird, während es durch die vom scrollenden Vorfahren bereitgestellte Ansichtsfortschrittszeitleiste fortschreitet (in diesem Fall dem Wurzelelement des Dokuments).

Schließlich wird dem Element eine Animation zugewiesen, die seine Deckkraft und Skalierung animiert, wodurch es beim Nach-oben-Scrollen im Scroller ein- und ausblendet.

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

Scrollen Sie, um das Subjekt-Element animiert zu sehen.

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
- Das JavaScript Äquivalent: Die `timeline` Eigenschaft, verfügbar in [`Element.animate()`](/de/docs/Web/API/Element/animate) Aufrufen
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
