---
title: Verwendung von CSS-Animationen
short-title: Verwendung von Animationen
slug: Web/CSS/CSS_animations/Using_CSS_animations
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

**CSS-Animationen** ermöglichen es, Übergänge von einer CSS-Stilkonfiguration zu einer anderen zu animieren. Animationen bestehen aus zwei Komponenten: einem Stil, der die CSS-Animation beschreibt, und einer Reihe von Keyframes, die die Start- und Endzustände des Animiersstils sowie mögliche Zwischenpunkte angeben.

Es gibt drei wesentliche Vorteile von CSS-Animationen gegenüber herkömmlichen scriptgesteuerten Animationstechniken:

1. Sie sind einfach für grundlegende Animationen zu verwenden; man kann sie erstellen, ohne JavaScript kennen zu müssen.
2. Die Animationen laufen gut, selbst bei moderater Systemlast. Einfache Animationen können in JavaScript oft schlecht ausgeführt werden. Die Rendering-Engine kann Frame-Skipping und andere Techniken verwenden, um die Leistung so reibungslos wie möglich zu halten.
3. Wenn der Browser die Animationssequenz steuert, kann er die Leistung und Effizienz optimieren, indem er z.B. die Aktualisierungsfrequenz von Animationen reduziert, die in derzeit nicht sichtbaren Tabs ausgeführt werden.

## Konfiguration einer Animation

Um eine CSS-Animationssequenz zu erstellen, stylen Sie das Element, das Sie animieren möchten, mit der {{cssxref("animation")}}-Eigenschaft oder deren Untereigenschaften. Dies ermöglicht Ihnen, das Timing, die Dauer und andere Details zu konfigurieren, wie die Animationssequenz ablaufen soll. Dies konfiguriert **nicht** die tatsächliche Erscheinung der Animation, welche mit der {{cssxref("@keyframes")}}-At-Regel, wie im Abschnitt [Definieren einer Animationssequenz mit Keyframes](#definieren_einer_animationssequenz_mit_keyframes) unten beschrieben, erledigt wird.

Die Untereigenschaften der {{cssxref("animation")}}-Eigenschaft sind:

- {{cssxref("animation-composition")}}
  - : Gibt das {{Glossary("composite_operation", "composite operation")}} an, das verwendet werden soll, wenn mehrere Animationen dieselbe Eigenschaft gleichzeitig beeinflussen. Diese Eigenschaft ist nicht Teil der `animation`-Kurzform.
- {{cssxref("animation-delay")}}
  - : Gibt die Verzögerung zwischen dem Laden eines Elements und dem Start einer Animationssequenz an und ob die Animation sofort zu ihrem Beginn oder im Verlauf der Animation starten soll.
- {{cssxref("animation-direction")}}
  - : Gibt an, ob die erste Iteration einer Animation vorwärts oder rückwärts verlaufen soll und ob nachfolgende Iterationen bei jedem Durchlauf der Sequenz die Richtung wechseln oder zum Startpunkt zurückkehren und wiederholen sollen.
- {{cssxref("animation-duration")}}
  - : Gibt die Dauer an, in der eine Animation einen Zyklus abschließt.
- {{cssxref("animation-fill-mode")}}
  - : Gibt an, wie eine Animation ihre Zielstile vor und nach ihrer Ausführung anwendet.
    > [!NOTE]
    > Im Fall des Animation [forwards](/de/docs/Web/CSS/Reference/Properties/animation-fill-mode#forwards) Fill-Modus, verhalten sich animierte Eigenschaften so, als ob sie in einem Set von [`will-change`](/de/docs/Web/CSS/Reference/Properties/will-change) Eigenschaftswerten enthalten wären. Wenn während der Animation ein neuer Stacking-Kontext erstellt wurde, behält das Zielelement den Stacking-Kontext nach Beendigung der Animation bei.
- {{cssxref("animation-iteration-count")}}
  - : Gibt die Anzahl der Wiederholungen einer Animation an.
- {{cssxref("animation-name")}}
  - : Gibt den Namen der {{cssxref("@keyframes")}}-At-Regel an, die die Keyframes einer Animation beschreibt.
- {{cssxref("animation-play-state")}}
  - : Gibt an, ob eine Animationssequenz pausiert oder abgespielt werden soll.
- {{cssxref("animation-timeline")}}
  - : Gibt die Zeitleiste an, die zur Steuerung des Fortschritts einer CSS-Animation verwendet wird.
- {{cssxref("animation-timing-function")}}
  - : Gibt an, wie eine Animation durch die Keyframes geht und erstellt Beschleunigungskurven.

## Definieren einer Animationssequenz mit Keyframes

Nachdem Sie das Timing der Animation konfiguriert haben, müssen Sie das Aussehen der Animation definieren. Dies geschieht durch Festlegen eines oder mehrerer Keyframes unter Verwendung der {{cssxref("@keyframes")}}-At-Regel. Jedes Keyframe beschreibt, wie das animierte Element zu einem bestimmten Zeitpunkt während der Animationssequenz gerendert werden soll.

Da das Timing der Animation im CSS-Stil definiert ist, der die Animation konfiguriert, verwenden Keyframes ein {{cssxref("percentage")}}, um die Zeit während der Animationssequenz zu kennzeichnen, zu der sie stattfinden. 0% gibt den ersten Moment der Animationssequenz an, während 100% den Endzustand der Animation anzeigt. Da diese beiden Zeiten so wichtig sind, haben sie spezielle Aliase: `from` und `to`. Beide sind optional. Wenn `from`/`0%` oder `to`/`100%` nicht angegeben sind, startet oder beendet der Browser die Animation unter Verwendung der berechneten Werte aller Attribute.

Sie können optional zusätzliche Keyframes hinzufügen, die die Zwischenstufen zwischen dem Start und dem Ende der Animation beschreiben.

## Verwendung der Animation-Kurzform

Die {{cssxref("animation")}}-Kurzform ist nützlich, um Platz zu sparen. Ein Beispiel, einige der Regeln, die wir in diesem Artikel verwenden:

```css
p {
  animation-duration: 3s;
  animation-name: slide-in;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

...könnten durch die Verwendung der `animation`-Kurzform ersetzt werden.

```css
p {
  animation: 3s infinite alternate slide-in;
}
```

Um mehr über die Reihenfolge zu erfahren, in der verschiedene Animationswerte durch die `animation`-Kurzform angegeben werden können, siehe die {{cssxref("animation")}}-Referenzseite.

## Festlegen mehrerer Animationswerte

Die CSS-Animation-Langform-Eigenschaften können mehrere Werte akzeptieren, die durch Kommas getrennt sind. Diese Funktion kann verwendet werden, wenn Sie mehrere Animationen in einer einzigen Regel anwenden und verschiedene Dauern, Iterationsanzahlen usw. für jede der Animationen festlegen möchten. Werfen wir einen kurzen Blick auf einige Beispiele, um die verschiedenen Permutationen zu erklären.

Im ersten Beispiel gibt es drei Dauer- und drei Iterationszählwerte. Jede Animation wird mit einer Dauer- und Iterationszahl zugewiesen, die dieselbe Position wie der Animationsname hat. Die `fadeInOut`-Animation wird mit einer Dauer von `2,5s` und einer Iterationsanzahl von `2` zugewiesen, und die `bounce`-Animation erhält eine Dauer von `1s` und eine Iterationsanzahl von `5`.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s, 1s;
animation-iteration-count: 2, 1, 5;
```

Im zweiten Beispiel sind drei Animationsnamen festgelegt, es gibt jedoch nur eine Dauer und Iterationsanzahl. In diesem Fall erhalten alle drei Animationen die gleiche Dauer und Iterationsanzahl.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 3s;
animation-iteration-count: 1;
```

Im dritten Beispiel sind drei Animationen angegeben, aber nur zwei Dauer- und Iterationszahlen. In solchen Fällen, in denen nicht genügend Werte in der Liste vorhanden sind, um jedem Animation einen eigenen zuzuweisen, erfolgt die Wertzuweisung vom ersten bis zum letzten Element in der verfügbaren Liste und geht dann wieder zum ersten Element zurück. `fadeInOut` erhält also eine Dauer von `2,5s` und `moveLeft300px` eine Dauer von `5s`, was der letzte Wert in der Liste der Dauern ist. Die Dauerwerteinstellung wird jetzt auf den ersten Wert zurückgesetzt; `bounce` erhält daher eine Dauer von `2,5s`. Die Iterationszählwerte (und alle anderen von Ihnen angegebenen Eigenschaftswerte) werden auf die gleiche Weise zugewiesen.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s;
animation-iteration-count: 2, 1;
```

Wenn die Anzahl der Animationen und Animationswerte umgekehrt ist, beispielsweise es gibt fünf `animation-duration`-Werte für drei `animation-name`-Werte, dann werden die zusätzlichen oder nicht genutzten Animationswerte in diesem Fall, zwei `animation-duration`-Werte, auf keine Animation angewendet und werden ignoriert.

## Beispiele

### Text quer über das Browserfenster bewegen

Dieses einfache Beispiel gestaltet ein {{HTMLElement("p")}}-Element mit den {{cssxref("translate")}}- und {{cssxref("scale")}}-Übergangseigenschaften so, dass der Text von der rechten Kante des Browserfensters hereinschiebt.

```css
p {
  animation-duration: 3s;
  animation-name: slide-in;
}

@keyframes slide-in {
  from {
    translate: 150vw 0;
    scale: 200% 1;
  }

  to {
    translate: 0 0;
    scale: 100% 1;
  }
}
```

In diesem Beispiel gibt der Stil für das {{HTMLElement("p")}}-Element an, dass die Animation 3 Sekunden von Anfang bis Ende dauert, unter Verwendung der {{cssxref("animation-duration")}}-Eigenschaft, und dass der Name der {{ cssxref("@keyframes")}}-At-Regel, die die Keyframes für die Animationssequenz definiert, `slide-in` ist.

In diesem Fall haben wir nur zwei Keyframes. Das erste tritt bei `0%` auf (unter Verwendung des Alias `from`). Hier konfigurieren wir die {{cssxref("translate")}}-Eigenschaft des Elements auf `150vw` (d.h. über den rechten Rand des enthaltenen Elements hinaus), und das {{cssxref("scale")}} des Elements auf 200% (oder zwei Mal die Standardgröße), wodurch der Absatz doppelt so breit ist wie sein `<body>`-Behälterblock. Dies führt dazu, dass der erste Frame der Animation die Überschrift außerhalb des rechten Randes des Browserfensters zeichnet.

Das zweite Keyframe tritt bei `100%` auf (unter Verwendung des Alias `to`). Die {{cssxref("translate")}}-Eigenschaft ist auf `0%` gesetzt und das {{cssxref("scale")}} des Elements ist auf `1` gesetzt, was `100%` ist. Dies führt dazu, dass die Überschrift ihre Animation im Ausgangszustand, bündig gegen den linken Rand des Inhaltsbereichs, abschließt.

```html
<p>
  The Caterpillar and Alice looked at each other for some time in silence: at
  last the Caterpillar took the hookah out of its mouth, and addressed her in a
  languid, sleepy voice.
</p>
```

> [!NOTE]
> Seite neu laden, um die Animation zu sehen.

{{EmbedLiveSample("Making_text_slide_across_the_browser_window","100%","250")}}

### Hinzufügen einer weiteren Keyframe-Animation

Fügen wir der Animation des vorherigen Beispiels ein weiteres Keyframe hinzu. Sagen wir, wir wollen, dass Alices Name pink wird und wächst und dann zu seiner ursprünglichen Größe und Farbe schrumpft, während er sich von rechts nach links bewegt. Während wir die {{cssxref("font-size")}} ändern könnten, beeinträchtigt das Ändern von Eigenschaften, die das Boxmodell betreffen, die Leistung negativ. Stattdessen umschließen wir ihren Namen in einem {{htmlelement("span")}} und skalieren und weisen ihm separat eine Farbe zu. Das erfordert das Hinzufügen einer zweiten Animation, die nur den `<span>` betrifft:

```css
@keyframes grow-shrink {
  25%,
  75% {
    scale: 100%;
  }

  50% {
    scale: 200%;
    color: magenta;
  }
}
```

Der vollständige Code sieht nun so aus:

```css
p {
  animation-duration: 3s;
  animation-name: slide-in;
}
p span {
  display: inline-block;
  animation-duration: 3s;
  animation-name: grow-shrink;
}

@keyframes slide-in {
  from {
    translate: 150vw 0;
    scale: 200% 1;
  }

  to {
    translate: 0 0;
    scale: 100% 1;
  }
}

@keyframes grow-shrink {
  25%,
  75% {
    scale: 100%;
  }

  50% {
    scale: 200%;
    color: magenta;
  }
}
```

Wir haben einen {{htmlelement("span")}} um "Alice" hinzugefügt:

```html
<p>
  The Caterpillar and <span>Alice</span> looked at each other for some time in
  silence: at last the Caterpillar took the hookah out of its mouth, and
  addressed her in a languid, sleepy voice.
</p>
```

Dies teilt dem Browser mit, dass der Name während der ersten und letzten 25% der Animation normal sein soll, aber während er in der Mitte skaliert wird und wieder zurück wird pink. Wir setzen die {{cssxref("display")}}-Eigenschaft der Spanne auf `inline-block`, da die `transform`-Eigenschaften nicht beeinflussen {{Glossary("inline-level_content", "inline-level content")}}.

> [!NOTE]
> Seite neu laden, um die Animation zu sehen.

{{EmbedLiveSample("Adding_another_keyframe","100%","250")}}

### Die Animation wiederholen

Um die Animation zu wiederholen, verwenden Sie die {{cssxref("animation-iteration-count")}}-Eigenschaft, um anzugeben, wie oft die Animation wiederholt werden soll. In diesem Fall verwenden wir `infinite`, damit die Animation unendlich oft wiederholt wird:

```css
p {
  animation-duration: 3s;
  animation-name: slide-in;
  animation-iteration-count: infinite;
}
```

```css hidden
@keyframes slide-in {
  from {
    translate: 150vw 0;
    scale: 200% 1;
  }

  to {
    translate: 0 0;
    scale: 100% 1;
  }
}
```

```html hidden
<p>
  The Caterpillar and Alice looked at each other for some time in silence: at
  last the Caterpillar took the hookah out of its mouth, and addressed her in a
  languid, sleepy voice.
</p>
```

{{EmbedLiveSample("Repeating_the_animation","100%","250")}}

### Die Animation hin und her bewegen

Das hat sie wiederholt, aber es ist sehr seltsam, dass sie jedes Mal zum Anfang springt, wenn sie mit dem Animieren beginnt. Was wir wirklich wollen, ist, dass sie sich hin und her über den Bildschirm bewegt. Das wird einfach erreicht, indem {{cssxref("animation-direction")}} auf `alternate` gesetzt wird:

```css
p {
  animation-duration: 3s;
  animation-name: slide-in;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

```css hidden
@keyframes slide-in {
  from {
    translate: 150vw 0;
    scale: 200% 1;
  }

  to {
    translate: 0 0;
    scale: 100% 1;
  }
}
```

```html hidden
<p>
  The Caterpillar and Alice looked at each other for some time in silence: at
  last the Caterpillar took the hookah out of its mouth, and addressed her in a
  languid, sleepy voice.
</p>
```

{{EmbedLiveSample("Making_the_animation_move_back_and_forth","100%","250")}}

### Verwendung von Animationsereignissen

Sie können zusätzliche Kontrolle über Animationen erhalten – sowie nützliche Informationen über sie – durch die Verwendung von Animationsereignissen. Diese Ereignisse, dargestellt durch das [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)-Objekt, können verwendet werden, um zu erkennen, wann Animationen starten, enden und eine neue Iteration beginnen. Jedes Ereignis enthält die Zeit, zu der es auftrat, sowie den Namen der Animation, die das Ereignis ausgelöst hat.

Wir werden das Beispiel mit dem gleitenden Text modifizieren, um einige Informationen über jedes Animationsereignis auszugeben, wenn es auftritt, damit wir einen Blick darauf werfen können, wie sie funktionieren.

Wir haben die gleiche Keyframe-Animation wie das vorherige Beispiel eingefügt. Diese Animation dauert 3 Sekunden, wird "slide-in" genannt, wiederholt sich 3 Mal und reist jedes Mal in einer alternierenden Richtung. In der {{cssxref("@keyframes")}}, werden die Skalierung und die Übersetzung entlang der x-Achse manipuliert, um das Element über den Bildschirm zu schieben.

```css
.slide-in {
  animation-duration: 3s;
  animation-name: slide-in;
  animation-iteration-count: 3;
  animation-direction: alternate;
}
```

```css hidden
@keyframes slide-in {
  from {
    translate: 150vw 0;
    scale: 200% 1;
  }

  to {
    translate: 0 0;
    scale: 100% 1;
  }
}
```

#### Hinzufügen der Animation-Ereignishörer

Wir verwenden JavaScript-Code, um auf alle drei möglichen Animationsereignisse zu achten. Dieser Code konfiguriert unsere Ereignishörer; wir rufen ihn auf, wenn das Dokument zum ersten Mal geladen wird, um Dinge einzurichten.

```js
const element = document.getElementById("watch-me");
element.addEventListener("animationstart", listener);
element.addEventListener("animationend", listener);
element.addEventListener("animationiteration", listener);

element.className = "slide-in";
```

Dies ist ziemlich standardmäßiger Code; Sie können in der Dokumentation für [`eventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) Details dazu finden, wie er funktioniert. Das Letzte, was dieser Code tut, ist, die `class` an dem Element, das wir animieren werden, auf "slide-in" zu setzen; wir tun dies, um die Animation zu starten.

Warum? Weil das `animationstart`-Ereignis sofort ausgelöst wird, sobald die Animation startet, und in unserem Fall passiert das, bevor unser Code ausgeführt wird. Also werden wir die Animation selbst starten, indem wir die Klasse des Elements auf den Stil setzen, der nachträglich animiert wird.

#### Die Ereignisse empfangen

Die Ereignisse werden der `listener()`-Funktion übergeben, die unten gezeigt wird.

```js
function listener(event) {
  const l = document.createElement("li");
  switch (event.type) {
    case "animationstart":
      l.textContent = `Started: elapsed time is ${event.elapsedTime}`;
      break;
    case "animationend":
      l.textContent = `Ended: elapsed time is ${event.elapsedTime}`;
      break;
    case "animationiteration":
      l.textContent = `New loop started at time ${event.elapsedTime}`;
      break;
  }
  document.getElementById("output").appendChild(l);
}
```

Auch dieser Code ist sehr einfach. Er schaut das [`event.type`](/de/docs/Web/API/Event/type) an, um festzustellen, welche Art von Animationsereignis aufgetreten ist, fügt dann eine passende Notiz zur {{HTMLElement("ul")}} (ungeordneten Liste) hinzu, die wir verwenden, um diese Ereignisse zu protokollieren.

Das Output sieht am Ende so aus:

- Gestartet: Verstrichene Zeit ist 0
- Neuer Loop begann um 3.01200008392334
- Neuer Loop begann um 6.00600004196167
- Beendet: Verstrichene Zeit ist 9.234000205993652

Beachten Sie, dass die Zeiten den erwarteten Zeiten, die beim Konfigurieren der Animation festgelegt wurden, sehr nahe, aber nicht genau, sind. Beachten Sie auch, dass nach der letzten Iteration der Animation das `animationiteration`-Ereignis nicht gesendet wird; stattdessen wird das `animationend`-Ereignis gesendet.

Nur der Vollständigkeit halber hier der HTML-Code, der die Seiteninhalte anzeigt, einschließlich der Liste, in die das Skript Informationen über die empfangenen Ereignisse einfügt:

```html
<h1 id="watch-me">Watch me move</h1>
<p>
  This example shows how to use CSS animations to make <code>H1</code>
  elements move across the page.
</p>
<p>
  In addition, we output some text each time an animation event fires, so you
  can see them in action.
</p>
<ul id="output"></ul>
```

Und hier das Live-Ergebnis.

> [!NOTE]
> Seite neu laden, um die Animation zu sehen.

{{EmbedLiveSample('Using_animation_events', '600', '300')}}

### Animation von `display` und `content-visibility`

Dieses Beispiel zeigt, wie [`display`](/de/docs/Web/CSS/Reference/Properties/display) und [`content-visibility`](/de/docs/Web/CSS/Reference/Properties/content-visibility) animiert werden können. Dieses Verhalten ist nützlich, um Ein-/Austritts-Animationen zu erstellen, bei denen beispielsweise ein Container mit `display: none` aus dem DOM entfernt werden soll, jedoch sanft mit [`opacity`](/de/docs/Web/CSS/Reference/Properties/opacity) ausgeblendet werden soll, anstatt sofort zu verschwinden.

Unterstützende Browser animieren `display` und `content-visibility` mit einer Variation des [diskreten Animations-Typs](/de/docs/Web/CSS/CSS_animated_properties#discrete). Dies bedeutet im Allgemeinen, dass Eigenschaften 50% des Weges durch die Animation zwischen den beiden Werten wechseln.

Es gibt jedoch eine Ausnahme, wenn von/zu `display: none` oder `content-visibility: hidden` zu einem sichtbaren Wert animiert wird. In diesem Fall schaltet der Browser zwischen den beiden Werten so um, dass der animierte Inhalt während der gesamten Animationsdauer angezeigt wird.

Zum Beispiel:

- Bei der Animation von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) wechselt der Wert bei `0%` der Animationsdauer zu `block`, sodass er die ganze Zeit sichtbar ist.
- Bei der Animation von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` wechselt der Wert bei `100%` der Animationsdauer zu `none`, sodass er die ganze Zeit sichtbar ist.

#### HTML

Das HTML enthält zwei {{htmlelement("p")}}-Elemente mit einem {{htmlelement("div")}} dazwischen, das wir von `display` `none` zu `block` animieren werden.

```html
<p>
  Click anywhere on the screen or press any key to toggle the
  <code>&lt;div&gt;</code> between hidden and showing.
</p>

<div>
  This is a <code>&lt;div&gt;</code> element that animates between
  <code>display: none; opacity: 0</code> and
  <code>display: block; opacity: 1</code>. Neat, huh?
</div>

<p>
  This is another paragraph to show that <code>display: none;</code> is being
  applied and removed on the above <code>&lt;div&gt; </code>. If only its
  <code>opacity</code> was being changed, it would always take up the space in
  the DOM.
</p>
```

#### CSS

```css
html {
  height: 100vh;
}

div {
  font-size: 1.6rem;
  padding: 20px;
  border: 3px solid red;
  border-radius: 20px;
  width: 480px;
  opacity: 0;
  display: none;
}

/* Animation classes */

div.fade-in {
  display: block;
  animation: fade-in 0.7s ease-in forwards;
}

div.fade-out {
  animation: fade-out 0.7s ease-out forwards;
}

/* Animation keyframes */

@keyframes fade-in {
  0% {
    opacity: 0;
    display: none;
  }

  100% {
    opacity: 1;
    display: block;
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
    display: block;
  }

  100% {
    opacity: 0;
    display: none;
  }
}
```

Beachten Sie die Aufnahme der `display`-Eigenschaft in den Keyframe-Animationen.

#### JavaScript

Schließlich fügen wir ein wenig JavaScript hinzu, um Ereignishörer einzurichten, um die Animationen auszulösen. Insbesondere fügen wir die `fade-in`-Klasse dem `<div>` hinzu, wenn wir möchten, dass es erscheint, und die `fade-out`-Klasse, wenn wir möchten, dass es verschwindet.

```js
const divElem = document.querySelector("div");
const htmlElem = document.querySelector(":root");

htmlElem.addEventListener("click", showHide);
document.addEventListener("keydown", showHide);

function showHide() {
  if (divElem.classList[0] === "fade-in") {
    divElem.classList.remove("fade-in");
    divElem.classList.add("fade-out");
  } else {
    divElem.classList.remove("fade-out");
    divElem.classList.add("fade-in");
  }
}
```

#### Ergebnis

Der Code sieht wie folgt aus:

{{ EmbedLiveSample("Animating display and content-visibility", "100%", "350") }}

## Siehe auch

- [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
- [Verwendung von CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- [Verwendung der Web Animations API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
