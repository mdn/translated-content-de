---
title: animation-timeline
slug: Web/CSS/animation-timeline
l10n:
  sourceCommit: bb52c01c1534149f1e3e4755e2576ef7828ecc0f
---

Die **`animation-timeline`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt die Timeline an, die zur Steuerung des Fortschritts einer CSS-Animation verwendet wird.

Die folgenden Arten von Timelines können über `animation-timeline` festgelegt werden:

- Die Standard-Dokument-Timeline, die durch die Zeit fortschreitet, die seit dem ersten Laden des Dokuments im Browser vergangen ist. Dies ist die Timeline, die traditionell mit CSS-Animationen in Verbindung gebracht wird und mit einem Wert von `auto` ausgewählt wird oder indem überhaupt kein `animation-timeline`-Wert angegeben wird.
- Eine _Scroll-Fortschritts-Timeline_, die durch das Scrollen eines scrollbaren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) fortschreitet. Die Position im Scrollbereich wird in einen Prozentsatz des Fortschritts umgewandelt — 0% am Anfang und 100% am Ende. Das Element, das die Scroll-Fortschritts-Timeline bereitstellt, kann auf zwei Arten angegeben werden:
  - Eine _benannte Scroll-Fortschritts-Timeline_ ist eine, bei der der Scroller, der die Scroll-Fortschritts-Timeline bereitstellt, explizit mit der {{cssxref("scroll-timeline-name")}} Eigenschaft (oder der {{cssxref("scroll-timeline")}} Kurzschreib-Eigenschaft) benannt wird. Der Name wird dann mit dem zu animierenden Element durch Angabe als Wert der `animation-timeline`-Eigenschaft dieses Elements verknüpft.
  - Eine _anonyme Scroll-Fortschritts-Timeline_ ist eine, bei der das zu animierende Element eine {{cssxref("animation-timeline/scroll", "scroll()")}} Funktion als `animation-timeline`-Wert erhält, die den Scroller auswählt, der die Scroll-Fortschritts-Timeline bereitstellt, und die Scrollachse, die auf Grundlage der an sie übergebenen Argumente verwendet werden soll.
- Eine _View-Fortschritts-Timeline_, die basierend auf der Änderung der Sichtbarkeit eines Elements (bekannt als _Subjekt_) innerhalb eines Scrollers fortschreitet. Die Sichtbarkeit des Subjekts innerhalb des Scrollers wird verfolgt — standardmäßig ist die Timeline bei 0%, wenn das Subjekt erstmals an einem Rand des Scrollers sichtbar ist, und bei 100%, wenn es den gegenüberliegenden Rand erreicht. Im Gegensatz zu Scroll-Fortschritts-Timelines können Sie den Scroller nicht angeben — die Sichtbarkeit des Subjekts wird immer innerhalb des nächstgelegenen Vorfahr-Scrollers verfolgt. Das Subjekt, das die View-Fortschritts-Timeline bereitstellt, kann auf zwei Arten festgelegt werden:
  - Eine _benannte View-Fortschritts-Timeline_ ist eine, bei der das Subjekt explizit mit der {{cssxref("view-timeline-name")}} Eigenschaft (oder der {{cssxref("view-timeline")}} Kurzschreib-Eigenschaft) benannt wird. Der Name wird dann mit dem zu animierenden Element durch Angabe als Wert der `animation-timeline`-Eigenschaft dieses Elements verknüpft. Dies ist ein wichtiger Punkt — bei benannten View-Fortschritt-Timelines muss das zu animierende Element nicht dasselbe wie das Subjekt sein.
  - Eine _anonyme View-Fortschritts-Timeline_ ist eine, bei der dem Subjekt eine {{cssxref("animation-timeline/view", "view()")}} Funktion als `animation-timeline`-Wert zugewiesen wird, wodurch es basierend auf seiner Position innerhalb seines nächstgelegenen Eltern-Scrollers animiert wird.

> [!NOTE]
> `animation-timeline` ist als ein Rücksetz-Only-Wert in der {{cssxref("animation")}} Kurzschreibweise enthalten. Dies bedeutet, dass das Einfügen von `animation` einen zuvor deklarierten `animation-timeline`-Wert auf `auto` zurücksetzt, aber ein spezifischer Wert kann nicht über `animation` festgelegt werden. Beim Erstellen von [CSS scrollgetriebenen Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) müssen Sie `animation-timeline` nach der Deklaration einer beliebigen `animation` Kurzschreibweise deklarieren, damit es wirksam wird.

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
  - : Die Animation ist keiner Timeline zugeordnet.
- `auto`
  - : Die Timeline der Animation ist die Standard- [DocumentTimeline](/de/docs/Web/API/DocumentTimeline) des Dokuments.

- `scroll()`
  - : Eine anonyme Scroll-Fortschritts-Timeline wird von einem Ahnen-Scroller des aktuellen Elements bereitgestellt. Die Funktionsparameter erlauben es Ihnen, den Scroller auszuwählen, und die Scrollachse, entlang der die Timeline gemessen wird.

    Siehe {{cssxref("animation-timeline/scroll", "scroll()")}} für mehr Informationen.

- `view()`
  - : Eine anonyme View-Fortschritts-Timeline wird vom Subjekt bereitgestellt, auf dem `animation-timeline: view();` gesetzt ist. Die Funktionsparameter erlauben es Ihnen, die Scrollbalkenachse auszuwählen, entlang der die Fortschritte der Timeline verfolgt werden, und einen Rand, der die Position des Kastens anpasst, in dem das Subjekt als sichtbar erachtet wird.

    Siehe {{cssxref("animation-timeline/view", "view()")}} für mehr Informationen.

- `<dashed-ident>`
  - : Ein {{cssxref('dashed-ident')}} identifiziert eine zuvor mit der {{cssxref('scroll-timeline-name')}} oder {{cssxref('view-timeline-name')}} Eigenschaft (oder der {{cssxref('scroll-timeline')}} oder {{cssxref('view-timeline')}} Kurzschreib-Eigenschaft) deklarierte benannte Timeline.

    > [!NOTE]
    > Wenn zwei oder mehr Timelines denselben Namen teilen, wird die zuletzt innerhalb der Cascade deklarierte verwendet. Außerdem, wenn keine Timeline gefunden wird, die dem angegebenen Namen entspricht, ist die Animation keiner Timeline zugeordnet.

    > [!NOTE]
    > Die [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident) Werte müssen mit `--` beginnen. Dies hilft, Namenskonflikte mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen einer benannten Scroll-Fortschritts-Timeline

Eine Scroll-Fortschritts-Timeline mit dem Namen `--square-timeline` wird mit der Eigenschaft `scroll-timeline-name` auf einem Element mit einer `id` von `container` definiert.
Diese wird dann als Timeline für die Animation auf dem `#square`-Element festgelegt, indem `animation-timeline: --square-timeline` verwendet wird.

#### HTML

Der HTML-Code für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Der CSS-Code für den Container legt ihn als Quelle einer Scroll-Fortschritts-Timeline mit dem Namen `--square-timeline` unter Verwendung der Eigenschaft `scroll-timeline-name` fest (wir könnten explizit einstellen, welche Scrollbalkenachse mit {{cssxref("scroll-timeline-axis")}} verwendet werden soll, aber hier gibt es nur einen Block-Richtungs-Scrollbalken, und er wird standardmäßig verwendet).

Die Höhe des Containers wird auf 300px festgelegt und wir setzen den Container auch so, dass er einen vertikalen Scrollbalken erstellt, wenn er überläuft (unten werden wir CSS auf das "Stretcher"-Element anwenden, um sicherzustellen, dass es überläuft).

```css
#container {
  height: 300px;
  overflow-y: scroll;
  scroll-timeline-name: --square-timeline;
  position: relative;
}
```

Der untenstehende CSS-Code definiert ein Quadrat, das sich in wechselnden Richtungen dreht entsprechend der Timeline, die durch die Eigenschaft `animation-timeline` vorgegeben wird, welche auf die oben benannte Timeline `--square-timeline` eingestellt ist.

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

Das "Stretcher"-CSS setzt die Blockhöhe auf 600px, was das Containerelement zum Überlaufen zwingt und damit Scrollbalken erzeugt.
Ohne dieses Element gäbe es keinen Scrollbalken und folglich keine Scroll-Fortschritts-Timeline, die mit der Animation-Timeline verbunden werden könnte.

```css
#stretcher {
  height: 600px;
}
```

#### Ergebnis

Scrollen Sie, um das Quadrat-Element animiert zu sehen.

{{EmbedLiveSample("Setting a named scroll progress timeline", "100%", "320px")}}

### Festlegen einer anonymen Scroll-Fortschritts-Timeline

In diesem Beispiel wird das `#square`-Element mit einer anonymen Scroll-Fortschritts-Timeline animiert, die auf das zu animierende Element mit der `scroll()` Funktion angewendet wird.
Die Timeline in diesem speziellen Beispiel wird vom nächstgelegenen Elternelement bereitgestellt, das (irgendwelche) Scrollbalken hat, aus dem Scrollbalken in Blockrichtung.

#### HTML

Der HTML-Code für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Der untenstehende CSS-Code definiert ein Quadrat, das sich in wechselnden Richtungen dreht entsprechend der Timeline, die durch die Eigenschaft `animation-timeline` vorgegeben wird.
In diesem Fall wird die Timeline durch `scroll(block nearest)` bereitgestellt, was bedeutet, dass sie den Scrollbalken in der Blockrichtung des nächstgelegenen Vorfahr-Elements auswählen wird, das Scrollbalken hat; in diesem Fall der vertikale Scrollbalken des "container"-Elements.

> [!NOTE]
> `block` und `nearest` sind tatsächlich die Standard-Parameterwerte, wir hätten also nur `scroll()` verwenden können.

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

Der CSS-Code für den Container setzt seine Höhe auf 300px und wir setzen den Container auch so, dass er einen vertikalen Scrollbalken erstellt, wenn er überläuft.
Das "Stretcher"-CSS setzt die Blockhöhe auf 600px, was das Containerelement zum Überlaufen zwingt.
Diese beiden zusammenstellen sicher, dass der Container einen vertikalen Scrollbalken hat, was es erlaubt, ihn als Quelle der anonymen Scroll-Fortschritts-Timeline zu verwenden.

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

### Festlegen einer benannten View-Fortschritts-Timeline

Eine View-Fortschritts-Timeline mit dem Namen `--subject-reveal` wird mit der `view-timeline-name` Eigenschaft auf einem Subjektelement mit einer `class` von `animation` definiert.
Diese wird dann als die Timeline für dasselbe Element mit `animation-timeline: --subject-reveal;` festgelegt. Das Ergebnis ist, dass das Subjektelement animiert wird, während es nach oben durch das Dokument bewegt wird, während es gescrollt wird.

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

Das `subject`-Element und sein enthaltenes `content`-Element werden minimal gestylt und der Textinhalt erhält einige grundlegende Schrift-Einstellungen:

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

Das `<div>` mit der Klasse `subject` erhält außerdem eine Klasse `animation` — hier wird die {{cssxref("view-timeline-name")}} eingestellt, um eine benannte View-Fortschritts-Timeline zu definieren. Es erhält auch einen `animation-timeline` Namen mit demselben Wert, um zu erklären, dass dies das zu animierende Element ist, während die View-Fortschritts-Timeline fortschreitet.

Zuletzt wird auf dem Element eine Animation spezifiziert, die dessen Opazität und Maßstab animiert, sodass es einfadet und sich vergrößert, während es den Scroller hinauf bewegt wird.

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

Scrollen Sie, um das Subjekt-Element animiert zu sehen.

{{EmbedLiveSample("Setting a named view progress timeline", "100%", "480px")}}

### Festlegen einer anonymen View-Fortschritts-Timeline

Eine anonyme View-Fortschritts-Timeline wird auf einem Element mit der Klasse `subject` festgelegt, indem `animation-timeline: view()` verwendet wird. Das Ergebnis ist, dass das `subject`-Element animiert wird, während es nach oben durch das Dokument bewegt wird, während es gescrollt wird.

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

Das `subject`-Element und sein enthaltenes `content`-Element werden minimal gestylt und der Textinhalt erhält einige grundlegende Schrift-Einstellungen:

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

Das `<div>` mit der Klasse `subject` erhält außerdem eine Klasse `animation` — hier wird `animation-timeline: view()` eingestellt, um zu deklarieren, dass es animiert wird, während es durch die View-Fortschritts-Timeline fortschreitet, die von seinem scrollbaren Vorfahren bereitgestellt wird (in diesem Fall das Root-Element des Dokuments).

Zuletzt wird auf dem Element eine Animation spezifiziert, die dessen Opazität und Maßstab animiert, sodass es einfadet und sich vergrößert, während es den Scroller hinauf bewegt wird.

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
- Der JavaScript-Äquivalent: Die `timeline` Eigenschaft verfügbar in [`Element.animate()`](/de/docs/Web/API/Element/animate) Aufrufen
- [CSS scrollgesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
