---
title: animation-timeline
slug: Web/CSS/animation-timeline
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

Die **`animation-timeline`**- [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert die Timeline, die zur Steuerung des Fortschritts einer CSS-Animation verwendet wird.

Die folgenden Arten von Timelines können über `animation-timeline` festgelegt werden:

- Die Standard-Dokument-Timeline, die durch den Zeitablauf seit dem ersten Laden des Dokuments im Browser voranschreitet. Diese ist die traditionell mit CSS-Animationen verbundene Timeline und wird mit einem Wert von `auto` ausgewählt oder indem kein `animation-timeline`-Wert angegeben wird.
- Eine _Scroll-Fortschritts-Timeline_, die durch das Scrollen eines scrollbareren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) voranschreitet. Die Position im Scrollbereich wird in einen Fortschrittsprozentsatz umgewandelt — 0% am Anfang und 100% am Ende. Das Element, das die Scroll-Fortschritts-Timeline bereitstellt, kann auf zwei Arten angegeben werden:
  - Eine _benannte Scroll-Fortschritts-Timeline_ ist eine, bei der der Scroller, der die Scroll-Fortschritts-Timeline bereitstellt, explizit mit der {{cssxref("scroll-timeline-name")}} Eigenschaft (oder der {{cssxref("scroll-timeline")}} Kurzschreibweise) benannt wird. Der Name wird dann dem animierenden Element zugeordnet, indem er als Wert der `animation-timeline`-Eigenschaft dieses Elements angegeben wird.
  - Eine _anonyme Scroll-Fortschritts-Timeline_ ist eine, bei der das zu animierende Element eine {{cssxref("animation-timeline/scroll", "scroll()")}} Funktion als `animation-timeline`-Wert erhält, die den Scroller auswählt, der die Scroll-Fortschritts-Timeline bereitstellt, und die Scroll-Achse, die basierend auf den von Ihnen übergebenen Argumenten verwendet werden soll.
- Eine _View-Fortschritts-Timeline_, die basierend auf der Veränderung der Sichtbarkeit eines Elements (bekannt als das _Subjekt_) in einem Scroller voranschreitet. Die Sichtbarkeit des Subjekts in dem Scroller wird verfolgt — standardmäßig ist die Timeline bei 0%, wenn das Subjekt zum ersten Mal am einen Rand des Scrollers sichtbar ist, und bei 100%, wenn es den gegenüberliegenden Rand erreicht. Anders als bei Scroll-Fortschritts-Timelines kann der Scroller nicht angegeben werden — die Sichtbarkeit des Subjekts wird immer innerhalb seines nächsten übergeordneten Scrollers verfolgt. Das Subjekt, das die View-Fortschritts-Timeline bereitstellt, kann auf zwei Arten angegeben werden:
  - Eine _benannte View-Fortschritts-Timeline_ ist eine, bei der das Subjekt explizit mit der {{cssxref("view-timeline-name")}} Eigenschaft (oder der {{cssxref("view-timeline")}} Kurzschreibweise) benannt wird. Der Name wird dann dem animierenden Element zugeordnet, indem er als Wert der `animation-timeline`-Eigenschaft dieses Elements angegeben wird. Dies ist ein wichtiger Punkt — bei benannten View-Fortschritts-Timelines muss das animierende Element nicht dasselbe wie das Subjekt sein.
  - Eine _anonyme View-Fortschritts-Timeline_ ist eine, bei der das Subjekt eine {{cssxref("animation-timeline/view", "view()")}} Funktion als `animation-timeline`-Wert erhält, wodurch es basierend auf seiner Position innerhalb seines nächsten übergeordneten Scrollers animiert wird.

> [!NOTE]
> `animation-timeline` ist in der {{cssxref("animation")}} Kurzschreibweise als ein reiner Reset-Wert enthalten. Das bedeutet, dass die Einbeziehung von `animation` einen zuvor deklarierten `animation-timeline`-Wert auf `auto` zurücksetzt, aber ein spezifischer Wert kann nicht über `animation` festgelegt werden. Beim Erstellen von [CSS scrollbasierte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) muss `animation-timeline` nach jeder `animation`-Kurzschreibweise deklariert werden, damit es wirksam wird.

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
  - : Die Animation ist nicht mit einer Timeline verbunden.
- `auto`
  - : Die Timeline der Animation ist die Standard-[DocumentTimeline](/de/docs/Web/API/DocumentTimeline) des Dokuments.

- `scroll()`
  - : Eine anonyme Scroll-Fortschritts-Timeline wird von einem übergeordneten Scroller des aktuellen Elements bereitgestellt. Die Funktionsparameter ermöglichen es Ihnen, den Scroller und die Scroll-Achse zu wählen, entlang der die Timeline gemessen wird.

    Siehe {{cssxref("animation-timeline/scroll", "scroll()")}} für weitere Informationen.

- `view()`
  - : Eine anonyme View-Fortschritts-Timeline wird von dem Subjekt bereitgestellt, auf dem `animation-timeline: view();` gesetzt ist. Die Funktionsparameter ermöglichen es Ihnen, die Scrollbar-Achse zu wählen, entlang der der Timeline-Fortschritt verfolgt wird, und einen Versatz, der die Position der Box anpasst, in der das Subjekt als sichtbar gilt.

    Siehe {{cssxref("animation-timeline/view", "view()")}} für weitere Informationen.

- `<dashed-ident>`
  - : Ein {{cssxref('dashed-ident')}} zur Identifizierung einer benannten Timeline, die zuvor mit der {{cssxref('scroll-timeline-name')}} oder {{cssxref('view-timeline-name')}} Eigenschaft (oder der {{cssxref('scroll-timeline')}} oder {{cssxref('view-timeline')}} Kurzschreibweise) deklariert wurde.

    > [!NOTE]
    > Wenn zwei oder mehr Timelines denselben Namen teilen, wird die zuletzt in der Kaskade deklarierte verwendet. Auch wenn keine Timeline gefunden wird, die mit dem angegebenen Namen übereinstimmt, ist die Animation nicht mit einer Timeline verbunden.

    > [!NOTE]
    > Die [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident) Werte müssen mit `--` beginnen. Dies hilft, Namenskonflikte mit standardmäßigen CSS-Stichwörtern zu vermeiden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen einer benannten Scroll-Fortschritts-Timeline

Eine Scroll-Fortschritts-Timeline mit dem Namen `--square-timeline` wird mithilfe der Eigenschaft `scroll-timeline-name` auf einem Element mit einer `id` von `container` definiert.
Dies wird dann als Timeline für die Animation auf dem `#square` Element mit `animation-timeline: --square-timeline` festgelegt.

#### HTML

Der HTML-Code für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das CSS für den Container legt fest, dass er als Quelle einer Scroll-Fortschritts-Timeline mit dem Namen `--square-timeline` mithilfe der Eigenschaft `scroll-timeline-name` dient (wir könnten explizit festlegen, welche Scroll-Achse mit {{cssxref("scroll-timeline-axis")}} verwendet werden soll, aber hier gibt es nur eine Scrollbar in Blockrichtung, und diese wird standardmäßig verwendet).

Die Höhe des Containers wird auf 300px gesetzt, und wir legen auch fest, dass der Container eine vertikale Scrollbar erstellt, wenn er überläuft (unten verwenden wir CSS auf dem "Stretcher"-Element, um sicherzustellen, dass er überläuft).

```css
#container {
  height: 300px;
  overflow-y: scroll;
  scroll-timeline-name: --square-timeline;
  position: relative;
}
```

Das untenstehende CSS definiert ein Quadrat, das sich in abwechselnden Richtungen gemäß der von der `animation-timeline`-Eigenschaft bereitgestellten Timeline dreht, die auf die oben benannte `--square-timeline` Timeline festgelegt ist.

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

Das "Stretcher"-CSS setzt die Blockhöhe auf 600px, was das Überlaufen des Container-Elements erzwingt und Scrollbars erstellt.
Ohne dieses Element gäbe es keine Scrollbar und folglich keine Scroll-Fortschritts-Timeline, die der Animationstimeline zugeordnet werden könnte.

```css
#stretcher {
  height: 600px;
}
```

#### Ergebnis

Scrollen Sie, um zu sehen, wie das Quadrat-Element animiert wird.

{{EmbedLiveSample("Festlegen einer benannten Scroll-Fortschritts-Timeline", "100%", "320px")}}

### Festlegen einer anonymen Scroll-Fortschritts-Timeline

In diesem Beispiel wird das `#square` Element mit einer anonymen Scroll-Fortschritts-Timeline animiert, die auf das zu animierende Element mit der `scroll()` Funktion angewendet wird.
Die Timeline in diesem bestimmten Beispiel wird vom nächsten übergeordneten Element bereitgestellt, das (irgendwelche) Scrollbars hat, von der Scrollbar in Blockrichtung.

#### HTML

Der HTML-Code für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das untenstehende CSS definiert ein Quadrat, das sich in abwechselnden Richtungen gemäß der von der `animation-timeline`-Eigenschaft bereitgestellten Timeline dreht.
In diesem Fall wird die Timeline von `scroll(block nearest)` bereitgestellt, was bedeutet, dass sie die Scrollbar in Blockrichtung des nächsten übergeordneten Elements wählt, das Scrollbars hat; in diesem Fall die vertikale Scrollbar des "Container"-Elements.

> [!NOTE]
> `block` und `nearest` sind tatsächlich die Standardparameterwerte, daher hätten wir einfach `scroll()` verwenden können.

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

Das CSS für den Container setzt seine Höhe auf 300px, und wir legen auch fest, dass der Container eine vertikale Scrollbar erstellt, wenn er überläuft.
Das "Stretcher"-CSS setzt die Blockhöhe auf 600px, was das Überlaufen des Container-Elements erzwingt.
Diese beiden zusammen sorgen dafür, dass der Container eine vertikale Scrollbar hat, die als Quelle der anonymen Scroll-Fortschritts-Timeline verwendet werden kann.

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

{{EmbedLiveSample("Festlegen einer anonymen Scroll-Fortschritts-Timeline", "100%", "320px")}}

### Festlegen einer benannten View-Fortschritts-Timeline

Eine View-Fortschritts-Timeline mit dem Namen `--subject-reveal` wird mithilfe der `view-timeline-name`-Eigenschaft auf einem Subjektelement mit einer `class` von `animation` definiert.
Dies wird dann als Timeline für dasselbe Element mit `animation-timeline: --subject-reveal;` festgelegt. Das Ergebnis ist, dass das Subjektelement animiert wird, während es nach oben durch das Dokument bewegt wird, während es gescrollt wird.

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

Das `subject` Element und sein enthaltenes `content` Element werden minimal gestylt, und der Textinhalt erhält einige grundlegende Schriftart-Einstellungen:

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

Das `<div>` mit der Klasse `subject` erhält auch eine Klasse `animation` — hier wird die {{cssxref("view-timeline-name")}} gesetzt, um eine benannte View-Fortschritts-Timeline zu definieren. Es erhält auch einen `animation-timeline` Namen mit demselben Wert, um zu deklarieren, dass dies das zu animierende Element ist, während die View-Fortschritts-Timeline fortschreitet.

Zuletzt wird eine Animation auf dem Element angegeben, die dessen Transparenz und Skala animiert, sodass es ein- und ausblendet und sich vergrößert, während es den Scroller hochbewegt.

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

Scrollen Sie, um zu sehen, wie das Subjektelement animiert wird.

{{EmbedLiveSample("Festlegen einer benannten View-Fortschritts-Timeline", "100%", "480px")}}

### Festlegen einer anonymen View-Fortschritts-Timeline

Eine anonyme View-Fortschritts-Timeline wird auf ein Element mit der Klasse `subject` mit `animation-timeline: view()` gesetzt. Das Ergebnis ist, dass das `subject` Element animiert wird, während es nach oben durch das Dokument bewegt wird, während es gescrollt wird.

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

Das `subject` Element und sein enthaltenes `content` Element werden minimal gestylt, und der Textinhalt erhält einige grundlegende Schriftart-Einstellungen:

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

Das `<div>` mit der Klasse `subject` erhält auch eine Klasse `animation` — hier wird `animation-timeline: view()` gesetzt, um zu deklarieren, dass es animiert wird, während es durch die View-Fortschritts-Timeline fortschreitet, die von seinem scrollbaren Vorfahren bereitgestellt wird (in diesem Fall das Wurzelelement des Dokuments).

Zuletzt wird eine Animation auf dem Element angegeben, die dessen Transparenz und Skala animiert, sodass es ein- und ausblendet und sich vergrößert, während es den Scroller hochbewegt.

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

Scrollen Sie, um zu sehen, wie das Subjektelement animiert wird.

{{EmbedLiveSample("Festlegen einer anonymen View-Fortschritts-Timeline", "100%", "480px")}}

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
- [CSS scrollbasierte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
