---
title: animation-timeline
slug: Web/CSS/animation-timeline
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{CSSRef}}{{SeeCompatTable}}

Die **`animation-timeline`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt die Timeline an, die verwendet wird, um den Fortschritt einer CSS-Animation zu steuern.

Die folgenden Arten von Timelines können über `animation-timeline` festgelegt werden:

- Die standardmäßige Dokuments-Timeline, die durch den Ablauf der Zeit fortschreitet, seit das Dokument erstmals im Browser geladen wurde. Dies ist die Timeline, die traditionell mit CSS-Animationen assoziiert ist und mit einem Wert von `auto` ausgewählt wird, oder indem kein Wert für `animation-timeline` angegeben wird.
- Eine _scroll progress timeline_ (Scroll-Fortschritts-Timeline), die durch das Scrollen eines scrollbaren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) fortschreitet. Die Position im Scrollbereich wird in einen Prozentsatz des Fortschritts umgewandelt — 0% am Anfang und 100% am Ende. Das Element, das die Scroll-Fortschritts-Timeline bereitstellt, kann auf zwei Arten angegeben werden:
  - Eine _benannte Scroll-Fortschritts-Timeline_ ist eine, bei der der Scroller, der die Scroll-Fortschritts-Timeline bereitstellt, explizit mit der {{cssxref("scroll-timeline-name")}} Eigenschaft (oder der {{cssxref("scroll-timeline")}} Kurzschrift-Eigenschaft) benannt wird. Der Name wird dann mit dem Element, das animiert werden soll, verbunden, indem er als Wert der `animation-timeline` Eigenschaft dieses Elements angegeben wird.
  - Eine _anonyme Scroll-Fortschritts-Timeline_ ist eine, bei der das animierte Element eine {{cssxref("animation-timeline/scroll", "scroll()")}} Funktion als `animation-timeline` Wert erhält, die den Scroller, der die Scroll-Fortschritts-Timeline bereitstellt, auswählt und die Scrollachse, die verwendet werden soll, basierend auf den übergebenen Argumenten festlegt.
- Eine _view progress timeline_ (Sichtfortschritts-Timeline), die auf dem Sichtbarkeitswechsel eines Elements (bekannt als das _Subjekt_) in einem Scroller basiert. Die Sichtbarkeit des Subjekts innerhalb des Scrollers wird verfolgt — standardmäßig ist die Timeline bei 0%, wenn das Subjekt an einem Rand des Scrollers erstmals sichtbar ist, und bei 100%, wenn es den gegenüberliegenden Rand erreicht. Im Gegensatz zu Scroll-Fortschritts-Timelines können Sie hier den Scroller nicht angeben — die Sichtbarkeit des Subjekts wird immer innerhalb seines nächstgelegenen Vorfahren-Scrollers verfolgt. Das Subjekt, das die Sichtfortschritts-Timeline bereitstellt, kann auf zwei Arten angegeben werden:
  - Eine _benannte Sichtfortschritts-Timeline_ ist eine, bei der das Subjekt explizit mit der {{cssxref("view-timeline-name")}} Eigenschaft (oder der {{cssxref("view-timeline")}} Kurzschrift-Eigenschaft) benannt wird. Der Name wird dann mit dem Element, das animiert werden soll, verbunden, indem er als Wert der `animation-timeline` Eigenschaft dieses Elements angegeben wird. Dies ist ein wichtiger Punkt — bei benannten Sichtfortschritts-Timelines muss das Element, das animiert werden soll, nicht dasselbe wie das Subjekt sein.
  - Eine _anonyme Sichtfortschritts-Timeline_ ist eine, bei der das Subjekt eine {{cssxref("animation-timeline/view", "view()")}} Funktion als `animation-timeline` Wert erhält, wodurch es basierend auf seiner Position im nächstgelegenen Eltern-Scroller animiert wird.

> **Note:** `animation-timeline` ist als nur-Reset-Wert im {{cssxref("animation")}} Kurzschriftsatz enthalten. Das bedeutet, dass die Einbeziehung von `animation` einen zuvor deklarierten `animation-timeline` Wert auf `auto` zurücksetzt, aber ein spezifischer Wert kann nicht über `animation` eingestellt werden. Bei der Erstellung von [CSS-Scroll-gesteuerten Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) müssen Sie `animation-timeline` nach der Deklaration eines Kurzschriftsatzes von `animation` festlegen, damit es wirksam wird.

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
  - : Die Animation ist keiner Timeline zugeordnet.
- `auto`

  - : Die Timeline der Animation ist die standardmäßige [DocumentTimeline](/de/docs/Web/API/DocumentTimeline).

- `scroll()`

  - : Eine anonyme Scroll-Fortschritts-Timeline wird von einem übergeordneten Scroller des aktuellen Elements bereitgestellt. Die Funktionsparameter ermöglichen es Ihnen, den Scroller auszuwählen und die Scrollachse festzulegen, entlang der die Timeline gemessen wird.

    Siehe {{cssxref("animation-timeline/scroll", "scroll()")}} für mehr Informationen.

- `view()`

  - : Eine anonyme Sichtfortschritts-Timeline wird bereitgestellt vom Subjekt, auf dem `animation-timeline: view();` gesetzt ist. Die Funktionsparameter erlauben es Ihnen, die Scrollbar-Achse zu wählen, entlang der der Fortschritt der Timeline verfolgt wird, und eine Einfügung, die die Position der Box anpasst, in der das Subjekt als sichtbar gilt.

    Siehe {{cssxref("animation-timeline/view", "view()")}} für mehr Informationen.

- `<dashed-ident>`

  - : Ein {{cssxref('dashed-ident')}} der eine zuvor mit der Eigenschaft {{cssxref('scroll-timeline-name')}} oder {{cssxref('view-timeline-name')}} deklarierte benannte Timeline identifiziert (oder die Kurzschrift-Eigenschaft {{cssxref('scroll-timeline')}} oder {{cssxref('view-timeline')}}).

    > [!NOTE]
    > Wenn zwei oder mehr Timelines denselben Namen teilen, wird die zuletzt in der Kaskade deklarierte verwendet. Auch, wenn keine Timeline gefunden wird, die mit dem angegebenen Namen übereinstimmt, ist die Animation keiner Timeline zugeordnet.

    > [!NOTE]
    > Die [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident) Werte müssen mit `--` beginnen. Dies hilft, Namenskonflikte mit Standard-CSS-Schlüsselwörtern zu vermeiden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine benannte Scroll-Fortschritts-Timeline festlegen

Eine Scroll-Fortschritts-Timeline mit dem Namen `--squareTimeline` wird mithilfe der `scroll-timeline-name` Eigenschaft auf einem Element mit einer `id` von `container` definiert.
Diese wird dann als Timeline für die Animation auf dem `#square` Element mit `animation-timeline: --squareTimeline` gesetzt.

#### HTML

Der HTML-Code für das Beispiel wird unten angezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das CSS für den Container setzt ihn als Quelle einer Scroll-Fortschritts-Timeline mit dem Namen `--squareTimeline` fest, indem die `scroll-timeline-name` Eigenschaft verwendet wird (wir könnten explizit festlegen, welche Scrollbar-Achse mit {{cssxref("scroll-timeline-axis")}} verwendet werden soll, aber hier gibt es nur eine Blockrichtung-Scrollbar, die standardmäßig verwendet wird).

Die Höhe des Containers ist auf 300px gesetzt und wir setzen auch den Container, um eine vertikale Scrollbar zu erstellen, wenn er überläuft (unten verwenden wir CSS auf dem "Stretcher"-Element, um sicherzustellen, dass es überläuft).

```css
#container {
  height: 300px;
  overflow-y: scroll;
  scroll-timeline-name: --squareTimeline;
  position: relative;
}
```

Das untenstehende CSS definiert ein Quadrat, das sich entsprechend der Timeline dreht, die durch die `animation-timeline` Eigenschaft bereitgestellt wird, die auf die oben genannte Timeline `--squareTimeline` gesetzt ist.

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

Das "Stretcher"-CSS setzt die Blockhöhe auf 600px, was das Überlaufen des Container-Elements erzwingt und Scrollbars erstellt.
Ohne dieses Element gäbe es keine Scrollbar und folglich keine Scroll-Fortschritts-Timeline, die mit der Animationstimeline verbunden werden könnte.

```css
#stretcher {
  height: 600px;
}
```

#### Ergebnis

Scrollen Sie, um das animierte Quadrat-Element zu sehen.

{{EmbedLiveSample("Setting a named scroll progress timeline", "100%", "320px")}}

### Eine anonyme Scroll-Fortschritts-Timeline festlegen

In diesem Beispiel wird das Element `#square` mit einer anonymen Scroll-Fortschritts-Timeline animiert, die auf das zu animierende Element mithilfe der `scroll()` Funktion angewendet wird.
Die Timeline in diesem speziellen Beispiel wird von dem nächstgelegenen übergeordneten Element bereitgestellt, das über eine Scrollbar verfügt, von der Scrollbar in Blockrichtung.

#### HTML

Der HTML-Code für das Beispiel wird unten angezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das untenstehende CSS definiert ein Quadrat, das sich entsprechend der Timeline dreht, die durch die `animation-timeline` Eigenschaft bereitgestellt wird.
In diesem Fall wird die Timeline durch `scroll(block nearest)` bereitgestellt, was bedeutet, dass sie die Scrollbar in der Blockrichtung des nächstgelegenen übergeordneten Elements auswählt, das Scrollbars hat; in diesem Fall die vertikale Scrollbar des "container" Elements.

> **Note:** `block` und `nearest` sind tatsächlich die Standardparameterwerte, sodass wir einfach `scroll()` hätten verwenden können.

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

Das CSS für den Container setzt seine Höhe auf 300px und wir setzen auch den Container, um eine vertikale Scrollbar zu erstellen, wenn er überläuft.
Das "Stretcher"-CSS setzt die Blockhöhe auf 600px, was das Überlaufen des Container-Elements erzwingt.
Diese beiden zusammen stellen sicher, dass der Container eine vertikale Scrollbar hat, die als Quelle der anonymen Scroll-Fortschritts-Timeline verwendet werden kann.

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

### Eine benannte Sichtfortschritts-Timeline festlegen

Eine Sichtfortschritts-Timeline mit dem Namen `--subjectReveal` wird mithilfe der `view-timeline-name` Eigenschaft auf einem Subjekt-Element mit der `class` von `animation` definiert.
Diese wird dann als Timeline für dasselbe Element mit `animation-timeline: --subjectReveal;` gesetzt. Das Ergebnis ist, dass das Subjekt-Element animiert wird, während es beim Scrollen nach oben durch das Dokument bewegt wird.

#### HTML

Der HTML-Code für das Beispiel wird unten angezeigt.

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

Das `subject` Element und sein enthaltendes `content` Element sind minimal gestylt und der Textinhalt erhält einige grundlegende Schriftarten-Einstellungen:

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

Das `<div>` mit der Klasse `subject` erhält auch eine Klasse `animation` — hier wird die {{cssxref("view-timeline-name")}} gesetzt, um eine benannte Sichtfortschritts-Timeline zu definieren. Es wird auch ein `animation-timeline` Name mit dem gleichen Wert zugeordnet, um zu deklarieren, dass dies das animierte Element sein wird, wenn die Sichtfortschritts-Timeline fortschreitet.

Zuletzt wird eine Animation auf dem Element spezifiziert, die seine Opazität und Skalierung animiert, wodurch es verblasst und größer wird, während es den Scroller hochbewegt.

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

### Eine anonyme Sichtfortschritts-Timeline festlegen

Eine anonyme Sichtfortschritts-Timeline wird auf ein Element mit der Klasse `subject` gesetzt, indem `animation-timeline: view()` verwendet wird. Das Ergebnis ist, dass das `subject`-Element animiert wird, während es beim Scrollen nach oben durch das Dokument bewegt wird.

#### HTML

Der HTML-Code für das Beispiel wird unten angezeigt.

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

Das `subject` Element und sein enthaltendes `content` Element sind minimal gestylt und der Textinhalt erhält einige grundlegende Schriftarten-Einstellungen:

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

Das `<div>` mit der Klasse `subject` erhält auch Klasse `animation` — hier wird `animation-timeline: view()` gesetzt, um zu deklarieren, dass es animiert wird, wenn es die Sichtfortschritts-Timeline durchläuft, die von seinem scrollenden Vorfahren bereitgestellt wird (in diesem Fall das Hauptelement des Dokuments).

Zuletzt wird eine Animation auf dem Element spezifiziert, die seine Opazität und Skalierung animiert, wodurch es verblasst und größer wird, während es den Scroller hochbewegt.

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
- Das JavaScript-Äquivalent: Die `timeline` Eigenschaft, verfügbar in [`Element.animate()`](/de/docs/Web/API/Element/animate) Aufrufen
- [CSS-Scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
