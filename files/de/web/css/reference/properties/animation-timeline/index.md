---
title: animation-timeline
slug: Web/CSS/Reference/Properties/animation-timeline
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`animation-timeline`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert die Zeitleiste, die zur Steuerung des Fortschritts einer CSS-Animation verwendet wird.

Die folgenden Arten von Zeitleisten können über `animation-timeline` festgelegt werden:

- Die Standard-Dokumentzeitleiste, die durch den Zeitverlauf seit dem ersten Laden des Dokuments im Browser fortschreitet. Diese ist die Zeitleiste, die traditionell mit CSS-Animationen verbunden ist, und wird mit einem Wert von `auto` ausgewählt, oder indem kein `animation-timeline` Wert überhaupt angegeben wird.
- Eine _Scroll-Fortschrittszeitleiste_, die durch das Scrollen eines scrollbaren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) fortschreitet. Die Position im Scroll-Bereich wird in einen Prozentsatz des Fortschritts umgewandelt — 0 % am Anfang und 100 % am Ende. Das Element, das die Scroll-Fortschrittszeitleiste bereitstellt, kann auf zwei Arten angegeben werden:
  - Eine _benannte Scroll-Fortschrittszeitleiste_ ist eine, bei der der Scroller, der die Scroll-Fortschrittszeitleiste bereitstellt, explizit mit der {{cssxref("scroll-timeline-name")}} Eigenschaft (oder der Kurzform {{cssxref("scroll-timeline")}}) benannt wird. Der Name wird dann mit dem Element verknüpft, das animiert werden soll, indem er als Wert der `animation-timeline` Eigenschaft dieses Elements angegeben wird.
  - Eine _anonyme Scroll-Fortschrittszeitleiste_ ist eine, bei der das zu animierende Element mit einer {{cssxref("animation-timeline/scroll", "scroll()")}} Funktion als `animation-timeline` Wert angegeben wird, die den Scroller auswählt, der die Scroll-Fortschrittszeitleiste bereitstellt und die Scroll-Achse, die basierend auf den übergebenen Argumenten verwendet wird.
- Eine _Ansichtsfortschrittszeitleiste_, die auf der Änderung der Sichtbarkeit eines Elements (bekannt als das _Subjekt_) innerhalb eines Scrollers basiert. Die Sichtbarkeit des Subjekts innerhalb des Scrollers wird verfolgt — standardmäßig ist die Zeitleiste bei 0 %, wenn das Subjekt an einem Rand des Scrollers erstmals sichtbar ist, und 100 %, wenn es den gegenüberliegenden Rand erreicht. Im Gegensatz zu den Scroll-Fortschrittszeitleisten können Sie den Scroller nicht angeben — die Sichtbarkeit des Subjekts wird immer innerhalb des nächstgelegenen Vorfahren-Scrollers verfolgt. Das Subjekt, das die Ansichtsfortschrittszeitleiste bereitstellt, kann auf zwei Arten angegeben werden:
  - Eine _benannte Ansichtsfortschrittszeitleiste_ ist eine, bei der das Subjekt explizit mit der {{cssxref("view-timeline-name")}} Eigenschaft (oder der Kurzform {{cssxref("view-timeline")}}) benannt wird. Der Name wird dann mit dem Element verknüpft, das animiert werden soll, indem er als Wert der `animation-timeline` Eigenschaft dieses Elements angegeben wird. Dies ist ein wesentlicher Punkt — bei benannten Ansichtsfortschrittszeitleisten muss das zu animierende Element nicht dasselbe wie das Subjekt sein.
  - Eine _anonyme Ansichtsfortschrittszeitleiste_ ist eine, bei der dem Subjekt eine {{cssxref("animation-timeline/view", "view()")}} Funktion als `animation-timeline` Wert zugeordnet ist, wodurch es basierend auf seiner Position innerhalb seines nächstgelegenen Eltern-Scrollers animiert wird.

> [!NOTE] > `animation-timeline` ist im {{cssxref("animation")}} Kurzbefehl als nur-zurücksetzbarer Wert enthalten. Dies bedeutet, dass das Einschließen von `animation` einen zuvor deklarierten `animation-timeline` Wert auf `auto` zurücksetzt, aber ein spezifischer Wert kann nicht über `animation` festgelegt werden. Beim Erstellen von [CSS scrollbasierten Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) müssen Sie `animation-timeline` nach der Deklaration eines `animation` Kurzbefehl angeben, damit es wirksam wird.

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

  - : Die Zeitleiste der Animation ist die Standardsichtbarkeitszeitleiste des Dokuments.

- `scroll()`

  - : Eine anonyme Scroll-Fortschrittszeitleiste wird von einem beliebigen Vorfahren-Scroller des aktuellen Elements bereitgestellt. Die Funktionsparameter ermöglichen es Ihnen, den Scroller und die Scroll-Achse auszuwählen, entlang derer die Zeitleiste gemessen wird.

    Weitere Informationen finden Sie unter {{cssxref("animation-timeline/scroll", "scroll()")}}.

- `view()`

  - : Eine anonyme Ansichtsfortschrittszeitleiste wird durch das Subjekt bereitgestellt, auf dem `animation-timeline: view();` gesetzt ist. Die Funktionsparameter ermöglichen es Ihnen, die Scrollbar-Achse auszuwählen, entlang derer der Fortschritt der Zeitleiste verfolgt wird, und einen Einzug, der die Position der Box anpasst, in der das Subjekt als sichtbar betrachtet wird.

    Weitere Informationen finden Sie unter {{cssxref("animation-timeline/view", "view()")}}.

- `<dashed-ident>`

  - : Ein {{cssxref('dashed-ident')}} identifiziert eine benannte, zuvor deklarierte Zeitleiste mit der {{cssxref('scroll-timeline-name')}} oder {{cssxref('view-timeline-name')}} Eigenschaft (oder der Kurzform {{cssxref('scroll-timeline')}} oder {{cssxref('view-timeline')}}).

    > [!NOTE]
    > Wenn zwei oder mehr Zeitleisten denselben Namen teilen, wird die zuletzt in der Kaskade deklarierte verwendet. Auch wenn keine Zeitleiste gefunden wird, die dem angegebenen Namen entspricht, wird die Animation nicht mit einer Zeitleiste verknüpft.

    > [!NOTE]
    > Die [`<dashed-ident>`](/de/docs/Web/CSS/Reference/Values/dashed-ident) Werte müssen mit `--` beginnen. Dies hilft, Namenskollisionen mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen einer benannten Scroll-Fortschrittszeitleiste

Eine Scroll-Fortschrittszeitleiste mit dem Namen `--square-timeline` wird unter Verwendung der `scroll-timeline-name` Eigenschaft an einem Element mit der `id` von `container` definiert.
Diese wird dann als Zeitleiste für die Animation auf dem `#square` Element mithilfe von `animation-timeline: --square-timeline` gesetzt.

#### HTML

Das HTML für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das CSS für den Container legt ihn als Quelle für eine Scroll-Fortschrittszeitleiste mit dem Namen `--square-timeline` unter Verwendung der `scroll-timeline-name` Eigenschaft fest (wir könnten explizit festlegen, welche Scrollbar-Achse mit {{cssxref("scroll-timeline-axis")}} verwendet werden soll, aber hier gibt es nur eine Scrollbar in Blockrichtung, die standardmäßig verwendet wird).

Die Höhe des Containers wird auf 300px gesetzt und wir legen auch fest, dass der Container eine vertikale Scrollbar erstellt, wenn er überläuft (unten verwenden wir CSS auf dem "Stretcher"-Element, um sicherzustellen, dass er tatsächlich überläuft).

```css
#container {
  height: 300px;
  overflow-y: scroll;
  scroll-timeline-name: --square-timeline;
  position: relative;
}
```

Das untenstehende CSS definiert ein Quadrat, das sich in abwechselnde Richtungen entsprechend der Zeitleiste dreht, die durch die `animation-timeline` Eigenschaft bereitgestellt wird, die auf die oben genannte `--square-timeline` Zeitleiste gesetzt ist.

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

Das "Stretcher" CSS setzt die Blockhöhe auf 600px, was das Containerelement dazu zwingt, überzulaufen und Scrollbars zu erstellen.
Ohne dieses Element gäbe es keine Scrollbar und daher keine Scroll-Fortschrittszeitleiste, die mit der Animation-Zeitleiste verknüpft werden könnte.

```css
#stretcher {
  height: 600px;
}
```

#### Ergebnis

Scrollen Sie, um das animierte Quadrat-Element zu sehen.

{{EmbedLiveSample("Festlegen einer benannten Scroll-Fortschrittszeitleiste", "100%", "320px")}}

### Festlegen einer anonymen Scroll-Fortschrittszeitleiste

In diesem Beispiel wird das `#square` Element mit einer anonymen Scroll-Fortschrittszeitleiste animiert, die dem zu animierenden Element über die `scroll()` Funktion zugeordnet wird.
Die Zeitleiste in diesem speziellen Beispiel wird vom nächstgelegenen Eltern-Element mit (beliebiger) Scrollbar bereitgestellt, von der Scrollbar in Blockrichtung.

#### HTML

Das HTML für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das untenstehende CSS definiert ein Quadrat, das sich in abwechselnde Richtungen entsprechend der Zeitleiste dreht, die durch die `animation-timeline` Eigenschaft bereitgestellt wird.
In diesem Fall wird die Zeitleiste durch `scroll(block nearest)` bereitgestellt, was bedeutet, dass sie die Scrollbar in Blockrichtung des nächstgelegenen Vorfahren-Elements auswählt, das Scrollbars hat; in diesem Fall die vertikale Scrollbar des "containers"-Elements.

> [!NOTE] > `block` und `nearest` sind tatsächlich die Standardparameterwerte, so dass wir einfach `scroll()` verwenden könnten.

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

Das CSS für den Container legt seine Höhe auf 300px fest und wir legen auch fest, dass der Container eine vertikale Scrollbar erstellt, wenn er überläuft.
Das "Stretcher" CSS setzt die Blockhöhe auf 600px, was das Containerelement dazu zwingt, überzulaufen.
Diese beiden Einstellungen zusammen stellen sicher, dass der Container eine vertikale Scrollbar hat, die als Quelle für die anonyme Scroll-Fortschrittszeitleiste verwendet werden kann.

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

{{EmbedLiveSample("Festlegen einer anonymen Scroll-Fortschrittszeitleiste", "100%", "320px")}}

### Festlegen einer benannten Ansichtsfortschrittszeitleiste

Eine Ansicht-Zeitleiste mit dem Namen `--subject-reveal` wird durch die `view-timeline-name` Eigenschaft an einem Subjekt-Element mit einer `class` von `animation` definiert.
Diese wird dann als Zeitleiste für dasselbe Element mithilfe von `animation-timeline: --subject-reveal;` gesetzt. Das Ergebnis ist, dass das Subjekt-Element animiert wird, während es nach oben durch das Dokument bewegt wird, während gescrollt wird.

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

Das `subject` Element und sein enthaltenes `content` Element sind minimal gestylt, und der Textinhalt erhält einige grundlegende Schriftsatzeinstellungen:

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

Das `<div>` mit der Klasse `subject` erhält auch die Klasse `animation` — das ist, wo das {{cssxref("view-timeline-name")}} gesetzt wird, um eine benannte Ansicht-Zeitleiste zu definieren. Es erhält auch einen `animation-timeline` Namen mit demselben Wert, um zu deklarieren, dass dies das Element sein wird, das animiert wird, während die Ansicht-Zeitleiste fortschreitet.

Zuletzt wird eine Animation auf dem Element spezifiziert, die seine Opazität und Skalierung animiert, wodurch es beim Aufwärtsbewegen des Scrollers verblasst und größer wird.

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

{{EmbedLiveSample("Festlegen einer benannten Ansichtsfortschrittszeitleiste", "100%", "480px")}}

### Festlegen einer anonymen Ansichtsfortschrittszeitleiste

Eine anonyme Ansicht-Zeitleiste wird auf ein Element mit der Klasse `subject` über `animation-timeline: view()` gesetzt. Das Ergebnis ist, dass das `subject` Element animiert wird, während es nach oben durch das Dokument bewegt wird, während gescrollt wird.

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

Das `subject` Element und sein enthaltenes `content` Element sind minimal gestylt, und der Textinhalt erhält einige grundlegende Schriftsatzeinstellungen:

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

Das `<div>` mit der Klasse `subject` erhält auch die Klasse `animation` — das ist, wo `animation-timeline: view()` gesetzt wird, um zu deklarieren, dass es animiert wird, während es durch die Ansicht-Zeitleiste fortschreitet, die von seinem scrollenden Vorfahren (in diesem Fall das Stamm-Element des Dokuments) bereitgestellt wird.

Zuletzt wird eine Animation auf dem Element spezifiziert, die seine Opazität und Skalierung animiert, wodurch es beim Aufwärtsbewegen des Scrollers verblasst und größer wird.

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

{{EmbedLiveSample("Festlegen einer anonymen Ansichtsfortschrittszeitleiste", "100%", "480px")}}

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
- [CSS scrollbasierten Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
