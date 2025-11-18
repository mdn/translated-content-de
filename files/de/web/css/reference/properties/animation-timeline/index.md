---
title: animation-timeline
slug: Web/CSS/Reference/Properties/animation-timeline
l10n:
  sourceCommit: 1bfe630bd8538b64c97c7f684f5ee647a76c1a28
---

Die **`animation-timeline`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Zeitleiste fest, die verwendet wird, um den Fortschritt einer CSS-Animation zu steuern.

Die folgenden Arten von Zeitleisten können über `animation-timeline` festgelegt werden:

- Die Standard-Dokumentzeitleiste, die durch den Zeitverlauf seit dem ersten Laden des Dokuments im Browser fortschreitet. Diese Zeitleiste ist traditionell mit CSS-Animationen verbunden und wird durch den Wert `auto` ausgewählt oder indem kein `animation-timeline` Wert angegeben wird.
- Eine _Scroll-Fortschrittszeitleiste_, die durch das Scrollen eines scrollbaren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) fortschreitet. Die Position im Scrollbereich wird in einen Prozentsatz des Fortschritts umgewandelt — 0% am Anfang und 100% am Ende. Das Element, das die Scroll-Fortschrittszeitleiste bereitstellt, kann auf zwei Arten angegeben werden:
  - Eine _benannte Scroll-Fortschrittszeitleiste_ ist eine, bei der der Scroller, der die Scroll-Fortschrittszeitleiste bereitstellt, ausdrücklich mit der Eigenschaft {{cssxref("scroll-timeline-name")}} (oder der Kurzform {{cssxref("scroll-timeline")}}) benannt wird. Der Name wird dann mit dem Element verknüpft, das animiert werden soll, indem es als Wert der `animation-timeline` Eigenschaft dieses Elements angegeben wird.
  - Eine _anonyme Scroll-Fortschrittszeitleiste_ ist eine, bei der das zu animierende Element eine {{cssxref("animation-timeline/scroll", "scroll()")}} Funktion als `animation-timeline` Wert erhält, die den Scroller auswählt, der die Scroll-Fortschrittszeitleiste bereitstellt, und die Scrollachse, die verwendet werden soll, basierend auf den Argumenten, die Sie übergeben.
- Eine _Ansichtsfortschrittszeitleiste_, die basierend auf der Änderung der Sichtbarkeit eines Elements (bekannt als das _Subjekt_) innerhalb eines Scrollers fortschreitet. Die Sichtbarkeit des Subjekts innerhalb des Scrollers wird verfolgt — standardmäßig ist die Zeitleiste bei 0%, wenn das Subjekt am einen Rand des Scrollers zum ersten Mal sichtbar ist, und bei 100%, wenn es den gegenüberliegenden Rand erreicht. Im Gegensatz zu Scroll-Fortschrittszeitleisten können Sie den Scroller nicht angeben — die Sichtbarkeit des Subjekts wird immer innerhalb seines nächsten Vorfahren-Scrollers verfolgt. Das Subjekt, das die Ansichtsfortschrittszeitleiste bereitstellt, kann auf zwei Arten angegeben werden:
  - Eine _benannte Ansichtsfortschrittszeitleiste_ ist eine, bei der das Subjekt ausdrücklich mit der Eigenschaft {{cssxref("view-timeline-name")}} (oder der Kurzform {{cssxref("view-timeline")}}) benannt wird. Der Name wird dann mit dem Element verknüpft, das animiert werden soll, indem es als Wert der `animation-timeline` Eigenschaft dieses Elements angegeben wird. Dies ist ein wichtiger Punkt — bei benannten Ansichtsfortschrittszeitleisten muss das zu animierende Element nicht dasselbe sein wie das Subjekt.
  - Eine _anonyme Ansichtsfortschrittszeitleiste_ ist eine, bei der das Subjekt eine {{cssxref("animation-timeline/view", "view()")}} Funktion als `animation-timeline` Wert erhält, wodurch es basierend auf seiner Position innerhalb seines nächsten Eltern-Scrollers animiert wird.

> [!NOTE]
> `animation-timeline` ist in der {{cssxref("animation")}} Kurzform als reiner Rücksetzungswert enthalten. Das bedeutet, dass die Einbeziehung von `animation` einen zuvor deklarierten `animation-timeline` Wert auf `auto` zurücksetzt, aber ein spezifischer Wert nicht über `animation` festgelegt werden kann. Beim Erstellen von [CSS-scrollgesteuerten Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) müssen Sie `animation-timeline` nach der Deklaration einer `animation` Kurzform deklarieren, damit es wirksam wird.

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
  - : Die Animation ist nicht mit einer Zeitleiste verbunden.
- `auto`
  - : Die Zeitleiste der Animation ist die Standard-[DocumentTimeline](/de/docs/Web/API/DocumentTimeline) des Dokuments.

- `scroll()`
  - : Eine anonyme Scroll-Fortschrittszeitleiste wird von einem Vorfahren-Scroller des aktuellen Elements bereitgestellt. Die Funktionsparameter ermöglichen Ihnen, den Scroller und die Scrollachse auszuwählen, entlang derer die Zeitleiste gemessen wird.

    Weitere Informationen finden Sie unter {{cssxref("animation-timeline/scroll", "scroll()")}}.

- `view()`
  - : Eine anonyme Ansichtsfortschrittszeitleiste wird von dem Subjekt bereitgestellt, auf dem `animation-timeline: view();` gesetzt ist. Die Funktionsparameter ermöglichen Ihnen, die Scrollbalkenachse auszuwählen, entlang derer der Zeitleistenfortschritt verfolgt wird, sowie einen Einsatz, der die Position des Kastens anpasst, in dem das Subjekt als sichtbar gilt.

    Weitere Informationen finden Sie unter {{cssxref("animation-timeline/view", "view()")}}.

- `<dashed-ident>`
  - : Ein {{cssxref('dashed-ident')}} der eine benannte Zeitleiste identifiziert, die zuvor mit der Eigenschaft {{cssxref('scroll-timeline-name')}} oder {{cssxref('view-timeline-name')}} (oder der Kurzform {{cssxref('scroll-timeline')}} oder {{cssxref('view-timeline')}}) deklariert wurde.

    > [!NOTE]
    > Wenn zwei oder mehr Zeitleisten denselben Namen teilen, wird die zuletzt im Kaskadenstil deklarierte verwendet. Außerdem wird, wenn keine Zeitleiste gefunden wird, die dem angegebenen Namen entspricht, die Animation nicht mit einer Zeitleiste verbunden.

    > [!NOTE]
    > Die [`<dashed-ident>`](/de/docs/Web/CSS/Reference/Values/dashed-ident) Werte müssen mit `--` beginnen. Dies hilft, Kollisionen mit Standard-CSS-Schlüsselwörtern zu vermeiden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Setzen einer benannten Scroll-Fortschrittszeitleiste

Eine Scroll-Fortschrittszeitleiste mit dem Namen `--square-timeline` wird unter Verwendung der Eigenschaft `scroll-timeline-name` auf einem Element mit einer `id` von `container` definiert.
Diese wird dann als Zeitleiste für die Animation des `#square` Elements mit `animation-timeline: --square-timeline` gesetzt.

#### HTML

Das HTML für das Beispiel ist unten dargestellt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Der CSS-Code für das Container-Element legt es als Quelle einer Scroll-Fortschrittszeitleiste mit dem Namen `--square-timeline` unter Verwendung der Eigenschaft `scroll-timeline-name` fest (wir könnten explizit festlegen, welche Scrollbalkenachse mit {{cssxref("scroll-timeline-axis")}} verwendet werden soll, aber es gibt hier nur eine Scrollbalkenachse in Blockrichtung und diese wird standardmäßig verwendet).

Die Höhe des Containers wird auf 300px festgelegt und wir setzen auch den Container, um einen vertikalen Scrollbalken zu erstellen, falls er überläuft (unten verwenden wir CSS auf dem "Stretcher"-Element, um sicherzustellen, dass er überläuft).

```css
#container {
  height: 300px;
  overflow-y: scroll;
  scroll-timeline-name: --square-timeline;
  position: relative;
}
```

Der folgende CSS-Code definiert ein Quadrat, das sich in entgegengesetzte Richtungen dreht, entsprechend der von der `animation-timeline` Eigenschaft bereitgestellten Zeitleiste, die auf die oben benannte `--square-timeline` Zeitleiste gesetzt ist.

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

Der "Stretcher"-CSS setzt die Blockhöhe auf 600px, was das Containerelement zwingt, überzulaufen und Scrollleisten zu erstellen.
Ohne dieses Element gäbe es keinen Scrollbalken und folglich keine Scroll-Fortschrittszeitleiste, die mit der Animationszeitleiste verbunden werden könnte.

```css
#stretcher {
  height: 600px;
}
```

#### Ergebnis

Scrollen Sie, um zu sehen, wie das Quadratelement animiert wird.

{{EmbedLiveSample("Setting a named scroll progress timeline", "100%", "320px")}}

### Setzen einer anonymen Scroll-Fortschrittszeitleiste

In diesem Beispiel wird das `#square` Element mit einer anonymen Scroll-Fortschrittszeitleiste animiert, die auf das zu animierende Element unter Verwendung der `scroll()` Funktion angewendet wird.
Die Zeitleiste in diesem speziellen Beispiel wird von dem nächstgelegenen übergeordneten Element bereitgestellt, das (irgendeinen) Scrollbalken hat, und zwar vom Scrollbalken in Blockrichtung.

#### HTML

Das HTML für das Beispiel ist unten dargestellt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Der untenstehende CSS-Code definiert ein Quadrat, das sich in entgegengesetzte Richtungen dreht, entsprechend der von der `animation-timeline` Eigenschaft bereitgestellten Zeitleiste.
In diesem Fall wird die Zeitleiste von `scroll(block nearest)` bereitgestellt, was bedeutet, dass der Scrollbalken in Blockrichtung des nächsten Vorfahrenelements mit Scrollleisten ausgewählt wird; in diesem Fall der vertikale Scrollbalken des "container" Elements.

> [!NOTE]
> `block` und `nearest` sind tatsächlich die Standardparameterwerte, daher hätten wir auch einfach `scroll()` verwenden können.

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

Der CSS-Code für den Container setzt seine Höhe auf 300px und wir setzen auch den Container, um einen vertikalen Scrollbalken zu erstellen, falls er überläuft.
Der "Stretcher"-CSS setzt die Blockhöhe auf 600px, was das Containerelement zwingt, überzulaufen.
Diese beiden zusammen sorgen dafür, dass der Container einen vertikalen Scrollbalken hat, was es ermöglicht, ihn als Quelle der anonymen Scroll-Fortschrittszeitleiste zu verwenden.

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

Scrollen Sie, um zu sehen, wie das Quadratelement animiert wird.

{{EmbedLiveSample("Setting an anonymous scroll progress timeline", "100%", "320px")}}

### Setzen einer benannten Ansichtsfortschrittszeitleiste

Eine Ansichtsfortschrittszeitleiste mit dem Namen `--subject-reveal` wird unter Verwendung der Eigenschaft `view-timeline-name` auf einem Subjektelement mit einer `class` von `animation` definiert.
Diese wird dann als Zeitleiste für das gleiche Element mit `animation-timeline: --subject-reveal;` gesetzt. Das Ergebnis ist, dass das Subjektelement animiert wird, wenn es sich nach oben durch das Dokument bewegt, während es gescrollt wird.

#### HTML

Das HTML für das Beispiel ist unten dargestellt.

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

Das `subject` Element und sein enthaltenes `content` Element werden minimal gestylt, und der Textinhalt erhält einige grundlegende Schriftarteneinstellungen:

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

Das `<div>` mit der Klasse `subject` erhält auch eine Klasse `animation` — hier wird {{cssxref("view-timeline-name")}} gesetzt, um eine benannte Ansichtsfortschrittszeitleiste zu definieren. Es wird auch ein `animation-timeline` Name mit dem gleichen Wert hinzugefügt, um zu erklären, dass dies das Element ist, das animiert wird, während die Ansichtsfortschrittszeitleiste fortschreitet.

Schließlich wird eine Animation auf dem Element spezifiziert, die seine Deckkraft und Skalierung animiert, wodurch es verblasst und vergrößert wird, während es sich nach oben durch den Scroller bewegt.

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

{{EmbedLiveSample("Setting a named view progress timeline", "100%", "480px")}}

### Setzen einer anonymen Ansichtsfortschrittszeitleiste

Eine anonyme Ansichtsfortschrittszeitleiste wird auf einem Element mit der Klasse `subject` unter Verwendung von `animation-timeline: view()` gesetzt. Das Ergebnis ist, dass das `subject` Element animiert wird, während es sich nach oben durch das Dokument bewegt, während es gescrollt wird.

#### HTML

Das HTML für das Beispiel ist unten dargestellt.

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

Das `subject` Element und sein enthaltenes `content` Element werden minimal gestylt, und der Textinhalt erhält einige grundlegende Schriftarteneinstellungen:

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

Das `<div>` mit der Klasse `subject` erhält auch eine Klasse `animation` — hier wird `animation-timeline: view()` gesetzt, um zu erklären, dass es animiert wird, während es durch die von seinem scrollenden Vorfahren bereitgestellte Ansichtsfortschrittszeitleiste fortschreitet (in diesem Fall das Wurzelelement des Dokuments).

Zuletzt wird eine Animation auf dem Element spezifiziert, die seine Deckkraft und Skalierung animiert, wodurch es verblasst und vergrößert wird, während es sich nach oben durch den Scroller bewegt.

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
- [CSS-scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
- [Verwenden von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
