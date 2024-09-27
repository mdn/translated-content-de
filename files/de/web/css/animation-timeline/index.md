---
title: animation-timeline
slug: Web/CSS/animation-timeline
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{CSSRef}}{{SeeCompatTable}}

Die **`animation-timeline`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt die Zeitleiste an, die verwendet wird, um den Fortschritt einer CSS-Animation zu steuern.

Die folgenden Arten von Zeitleisten können über `animation-timeline` festgelegt werden:

- Die Standard-Dokument-Zeitleiste, die durch den Zeitablauf seit dem ersten Laden des Dokuments im Browser voranschreitet. Dies ist die Zeitleiste, die traditionell mit CSS-Animationen verbunden ist und mit einem Wert von `auto` ausgewählt wird oder indem kein Wert für `animation-timeline` angegeben wird.
- Eine _Scroll-Fortschrittszeitleiste_, die durch das Scrollen eines scrollbaren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) voranschreitet. Die Position im Scrollbereich wird in einen Prozentsatz des Fortschritts umgewandelt — 0% am Anfang und 100% am Ende. Das Element, das die Scroll-Fortschrittszeitleiste bereitstellt, kann auf zwei Arten angegeben werden:
  - Eine _benannte Scroll-Fortschrittszeitleiste_ ist eine, bei der der Scroller, der die Scroll-Fortschrittszeitleiste bereitstellt, explizit unter Verwendung der {{cssxref("scroll-timeline-name")}} Eigenschaft (oder der {{cssxref("scroll-timeline")}} Kurzschreibweise) genannt wird. Der Name wird dann mit dem zu animierenden Element verknüpft, indem er als Wert der `animation-timeline` Eigenschaft dieses Elements angegeben wird.
  - Eine _anonyme Scroll-Fortschrittszeitleiste_ ist eine, bei der das zu animierende Element eine {{cssxref("animation-timeline/scroll", "scroll()")}} Funktion als `animation-timeline` Wert erhält, die den Scroller auswählt, der die Scroll-Fortschrittszeitleiste bereitstellt und die zu verwendende Scrollachse basierend auf den übergebenen Argumenten auswählt.
- Eine _Ansichtsfortschrittszeitleiste_, die basierend auf der Veränderung der Sichtbarkeit eines Elements (bekannt als das _Subjekt_) innerhalb eines Scrollers voranschreitet. Die Sichtbarkeit des Subjekts im Scroller wird verfolgt — standardmäßig ist die Zeitleiste bei 0%, wenn das Subjekt erstmals an einem Rand des Scrollers sichtbar wird, und bei 100%, wenn es den gegenüberliegenden Rand erreicht. Im Gegensatz zu Scroll-Fortschrittszeitleisten können Sie nicht den Scroller angeben — die Sichtbarkeit des Subjekts wird immer innerhalb seines nächsten Vorfahr-Scrollers verfolgt. Das Subjekt, das die Ansichtsfortschrittszeitleiste bereitstellt, kann auf zwei Arten angegeben werden:
  - Eine _benannte Ansichtsfortschrittszeitleiste_ ist eine, bei der das Subjekt explizit mit der {{cssxref("view-timeline-name")}} Eigenschaft (oder der {{cssxref("view-timeline")}} Kurzschreibweise) benannt wird. Der Name wird dann mit dem zu animierenden Element verknüpft, indem er als Wert der `animation-timeline` Eigenschaft dieses Elements angegeben wird. Dies ist ein wichtiger Punkt — bei benannten Ansichtsfortschrittszeitleisten muss das zu animierende Element nicht dasselbe wie das Subjekt sein.
  - Eine _anonyme Ansichtsfortschrittszeitleiste_ ist eine, bei der das Subjekt eine {{cssxref("animation-timeline/view", "view()")}} Funktion als `animation-timeline` Wert erhält, wodurch es basierend auf seiner Position innerhalb seines nächsten übergeordneten Scrollers animiert wird.

> **Note:** `animation-timeline` ist in dem {{cssxref("animation")}} Kurzschreibweise als Wert nur für Neustarts enthalten. Das bedeutet, dass die Einbeziehung von `animation` einen zuvor deklarierten `animation-timeline` Wert auf `auto` zurücksetzt, aber ein spezifischer Wert kann nicht über `animation` festgelegt werden. Beim Erstellen von [CSS scroll-gesteuerten Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) müssen Sie `animation-timeline` nach der Deklaration eines `animation` Kurzschreibweise deklarieren, damit es wirksam wird.

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

  - : Die Zeitleiste der Animation ist die Standard- [DocumentTimeline](/de/docs/Web/API/DocumentTimeline) des Dokuments.

- `scroll()`

  - : Eine anonyme Scroll-Fortschrittszeitleiste wird von einem Vorfahr-Scroller des aktuellen Elements bereitgestellt. Die Funktionsparameter ermöglichen es Ihnen, den Scroller auszuwählen, und die Scrollachse, entlang derer die Zeitleiste gemessen wird.

    Weitere Informationen finden Sie unter {{cssxref("animation-timeline/scroll", "scroll()")}}.

- `view()`

  - : Eine anonyme Ansichtsfortschrittszeitleiste wird von dem Subjekt bereitgestellt, auf dem `animation-timeline: view();` gesetzt ist. Die Funktionsparameter ermöglichen es Ihnen, die Scrollbalkenachse auszuwählen, entlang derer der Zeitleistenfortschritt verfolgt wird, und einen Einsatz, der die Position des Kastens anpasst, in dem das Subjekt als sichtbar erachtet wird.

    Weitere Informationen finden Sie unter {{cssxref("animation-timeline/view", "view()")}}.

- `<dashed-ident>`

  - : Ein {{cssxref('dashed-ident')}} zur Identifizierung einer benannten Zeitleiste, die zuvor mit der {{cssxref('scroll-timeline-name')}} oder {{cssxref('view-timeline-name')}} Eigenschaft (oder der {{cssxref('scroll-timeline')}} oder {{cssxref('view-timeline')}} Kurzschreibweise) deklariert wurde.

    > [!NOTE]
    > Wenn zwei oder mehr Zeitleisten denselben Namen teilen, wird die zuletzt in der Kaskade deklarierte verwendet. Wenn keine Zeitleiste gefunden wird, die dem angegebenen Namen entspricht, ist die Animation keiner Zeitleiste zugeordnet.

    > [!NOTE]
    > Die [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident) Werte müssen mit `--` beginnen. Dies hilft, Namenskollisionen mit Standard-CSS-Schlüsselwörtern zu vermeiden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen einer benannten Scroll-Fortschrittszeitleiste

Eine Scroll-Fortschrittszeitleiste mit dem Namen `--squareTimeline` wird unter Verwendung der `scroll-timeline-name` Eigenschaft auf einem Element mit der `id` `container` definiert.
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

Das CSS für den Container legt es als Quelle einer Scroll-Fortschrittszeitleiste mit dem Namen `--squareTimeline` unter Verwendung der `scroll-timeline-name` Eigenschaft fest (wir könnten explizit festlegen, welche Scrollbalkenachse mit {{cssxref("scroll-timeline-axis")}} verwendet werden soll, aber es gibt hier nur eine Blockrichtungs-Scrollbalkenrichtung, und diese wird standardmäßig verwendet).

Die Höhe des Containers wird auf 300px gesetzt, und wir stellen auch ein, dass der Container einen vertikalen Scrollbalken erstellt, wenn er überläuft (unten werden wir CSS auf das "Stretcher"-Element anwenden, um sicherzustellen, dass es tatsächlich überläuft).

```css
#container {
  height: 300px;
  overflow-y: scroll;
  scroll-timeline-name: --squareTimeline;
  position: relative;
}
```

Das CSS unten definiert ein Quadrat, das sich abwechselnd in verschiedene Richtungen dreht, entsprechend der Zeitleiste, die durch die `animation-timeline` Eigenschaft bereitgestellt wird, die auf die oben genannte `--squareTimeline`-Zeitleiste gesetzt ist.

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

Das "Stretcher"-CSS setzt die Blockhöhe auf 600px, was das Container-Element zum Überlaufen zwingt und Scrollbalken erzeugt.
Ohne dieses Element gäbe es keinen Scrollbalken und damit keine Scroll-Fortschrittszeitleiste, die mit der Animationszeitleiste verbunden werden könnte.

```css
#stretcher {
  height: 600px;
}
```

#### Ergebnis

Scrollen Sie, um das Quadrat-Element animiert zu sehen.

{{EmbedLiveSample("Setting a named scroll progress timeline", "100%", "320px")}}

### Festlegen einer anonymen Scroll-Fortschrittszeitleiste

In diesem Beispiel wird das `#square` Element unter Verwendung einer anonymen Scroll-Fortschrittszeitleiste animiert, die auf das zu animierende Element angewendet wird, indem die `scroll()` Funktion verwendet wird.
Die Zeitleiste in diesem speziellen Beispiel wird vom nächstgelegenen übergeordneten Element bereitgestellt, das (irgendwelche) Scrollbalken hat, aus dem Scrollbalken in Blockrichtung.

#### HTML

Das HTML für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das CSS unten definiert ein Quadrat, das sich abwechselnd in verschiedene Richtungen dreht, entsprechend der Zeitleiste, die durch die `animation-timeline` Eigenschaft bereitgestellt wird.
In diesem Fall wird die Zeitleiste durch `scroll(block nearest)` bereitgestellt, was bedeutet, dass sie den Scrollbalken in Blockrichtung des nächstgelegenen Vorfahr-Elements auswählt, das Scrollbalken hat; in diesem Fall der vertikale Scrollbalken des "containers"-Elements.

> **Note:** `block` und `nearest` sind tatsächlich die Standardparameterwerte, daher hätten wir einfach `scroll()` verwenden können.

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

Das CSS für den Container setzt seine Höhe auf 300px und wir stellen auch ein, dass der Container einen vertikalen Scrollbalken erstellt, wenn er überläuft.
Das "Stretcher"-CSS setzt die Blockhöhe auf 600px, was das Überlaufen des Container-Elements erzwingt.
Diese beiden zusammen sorgen dafür, dass der Container einen vertikalen Scrollbalken hat, der als Quelle der anonymen Scroll-Fortschrittszeitleiste verwendet werden kann.

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

Eine Ansichtsfortschrittszeitleiste mit dem Namen `--subjectReveal` wird unter Verwendung der `view-timeline-name` Eigenschaft auf einem Subjektelement mit einer `class` von `animation` definiert.
Diese wird dann als Zeitleiste für dasselbe Element mit `animation-timeline: --subjectReveal;` festgelegt. Das Ergebnis ist, dass das Subjektelement animiert wird, wenn es nach oben durch das Dokument bewegt wird, während es gescrollt wird.

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

Das `<div>` mit der Klasse `subject` erhält auch eine Klasse `animation` — hier wird die {{cssxref("view-timeline-name")}} gesetzt, um eine benannte Ansichtsfortschrittszeitleiste zu definieren. Sie erhält auch einen `animation-timeline` Namen mit demselben Wert, um anzugeben, dass dies das Element ist, das animiert wird, während die Ansichtsfortschrittszeitleiste fortschreitet.

Zuletzt wird eine Animation auf dem Element spezifiziert, das seine Opazität und Skalierung animiert, wodurch es ein- und aufgrößert, während es den Scroller nach oben bewegt.

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

Scrollen Sie, um das Subjektelement animiert zu sehen.

{{EmbedLiveSample("Setting a named view progress timeline", "100%", "480px")}}

### Festlegen einer anonymen Ansichtsfortschrittszeitleiste

Eine anonyme Ansichtsfortschrittszeitleiste wird auf einem Element mit der Klasse `subject` unter Verwendung von `animation-timeline: view()` festgelegt. Das Ergebnis ist, dass das `subject` Element animiert wird, wenn es sich nach oben durch das Dokument bewegt, während es gescrollt wird.

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

Das `<div>` mit der Klasse `subject` erhält auch eine Klasse `animation` — hier wird `animation-timeline: view()` gesetzt, um anzugeben, dass es animiert wird, während es durch die Ansichtsfortschrittszeitleiste fortschreitet, die von seinem scrollenden Vorfahren bereitgestellt wird (in diesem Fall dem Wurzelelement des Dokuments).

Zuletzt wird eine Animation auf dem Element spezifiziert, das seine Opazität und Skalierung animiert, wodurch es ein- und aufgrößert, während es den Scroller nach oben bewegt.

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

Scrollen Sie, um das Subjektelement animiert zu sehen.

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
