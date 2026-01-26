---
title: Verwendung von CSS-Animationen
short-title: Verwendung von Animationen
slug: Web/CSS/Guides/Animations/Using
l10n:
  sourceCommit: 32bdfdb82cf91ce9942b694286dec62be2cc20aa
---

**CSS-Animationen** ermöglichen es, Übergänge von einer CSS-Stilkonfiguration zu einer anderen zu animieren. Animationen bestehen aus zwei Komponenten: einem Stil, der die CSS-Animation beschreibt, und einer Reihe von Keyframes, die die Start- und Endzustände des Animationsstils sowie mögliche Zwischenpunkte angeben.

Es gibt drei Hauptvorteile von CSS-Animationen im Vergleich zu traditionellen skriptgesteuerten Animationstechniken:

1. Sie können einfache Animationen mit nur wenigen Zeilen CSS erstellen, ganz ohne JavaScript.
2. Die Animationen laufen gut, auch bei mäßiger Systemauslastung. Einfache Animationen können in JavaScript oft schlecht performen. Die Rendering-Engine kann Frame-Skipping und andere Techniken verwenden, um die Leistung so reibungslos wie möglich zu gestalten.
3. Wenn der Browser die Animationssequenz steuert, kann er die Leistung und Effizienz optimieren, indem er zum Beispiel die Aktualisierungsfrequenz von Animationen reduziert, die in Tabs ausgeführt werden, die derzeit nicht sichtbar sind.

## Konfigurieren einer Animation

Um eine CSS-Animationssequenz zu erstellen, stylen Sie das Element, das Sie animieren möchten, mit der {{cssxref("animation")}}-Eigenschaft oder deren Untereigenschaften. Damit können Sie das Timing, die Dauer und andere Details konfigurieren, wie sich die Animationssequenz entwickeln soll. Dies konfiguriert **nicht** das tatsächliche Aussehen der Animation, das mithilfe der {{cssxref("@keyframes")}}-At-Regel, wie im Abschnitt [Definieren einer Animationssequenz mit Keyframes](#definieren_einer_animationssequenz_mit_keyframes) unten beschrieben, festgelegt wird.

Die Untereigenschaften der {{cssxref("animation")}}-Eigenschaft sind:

- {{cssxref("animation-composition")}}
  - : Gibt die {{Glossary("composite_operation", "Kompositionsoperation")}} an, die verwendet werden soll, wenn mehrere Animationen dieselbe Eigenschaft gleichzeitig beeinflussen. Diese Eigenschaft ist nicht Teil der `animation`-Kurzschreibweise.
- {{cssxref("animation-delay")}}
  - : Gibt die Verzögerung zwischen dem Laden eines Elements und dem Start einer Animationssequenz an und ob die Animation sofort von Anfang an oder mitten in der Animation beginnen soll.
- {{cssxref("animation-direction")}}
  - : Gibt an, ob die erste Iteration einer Animation vorwärts oder rückwärts verlaufen soll und ob nachfolgende Iterationen die Richtung bei jedem Durchlauf der Sequenz wechseln oder zum Startpunkt zurücksetzen und wiederholen sollen.
- {{cssxref("animation-duration")}}
  - : Gibt die Zeitdauer an, in der eine Animation einen Zyklus abschließt.
- {{cssxref("animation-fill-mode")}}
  - : Gibt an, wie eine Animation Stile auf ihr Ziel anwendet, bevor und nachdem sie ausgeführt wird.
    > [!NOTE]
    > Im Fall des Animations-Fill-Modus [forwards](/de/docs/Web/CSS/Reference/Properties/animation-fill-mode#forwards) verhalten sich animierte Eigenschaften, als ob sie in einem {{cssxref("will-change")}}-Eigenschaftswert enthalten wären. Wenn ein neuer Stacking-Kontext während der Animation erstellt wurde, behält das Zielelement den Stacking-Kontext bei, nachdem die Animation beendet ist.
- {{cssxref("animation-iteration-count")}}
  - : Gibt die Anzahl der Wiederholungen einer Animation an.
- {{cssxref("animation-name")}}
  - : Gibt den Namen der {{cssxref("@keyframes")}}-At-Regel an, die die Keyframes einer Animation beschreibt.
- {{cssxref("animation-play-state")}}
  - : Gibt an, ob eine Animationssequenz angehalten oder abgespielt werden soll.
- {{cssxref("animation-timeline")}}
  - : Gibt die Zeitachse an, die verwendet wird, um den Fortschritt einer CSS-Animation zu steuern.
- {{cssxref("animation-timing-function")}}
  - : Gibt an, wie eine Animation durch Keyframes über Beschleunigungskurven verläuft.

## Definieren einer Animationssequenz mit Keyframes

Nachdem Sie das Timing der Animation konfiguriert haben, müssen Sie das Aussehen der Animation definieren. Dies geschieht durch die Erstellung von einem oder mehreren Keyframes mithilfe der {{cssxref("@keyframes")}}-At-Regel. Jedes Keyframe beschreibt, wie das animierte Element zu einem bestimmten Zeitpunkt während der Animationssequenz gerendert werden soll.

Da das Timing der Animation im CSS-Stil definiert ist, der die Animation konfiguriert, verwenden Keyframes einen {{cssxref("percentage")}}, um den Zeitpunkt in der Animationssequenz anzugeben, zu dem sie stattfinden. 0% gibt den ersten Moment der Animationssequenz an, während 100% den Endzustand der Animation darstellen. Da diese beiden Zeiten so wichtig sind, haben sie spezielle Aliase: `from` und `to`. Beide sind optional. Wenn `from`/`0%` oder `to`/`100%` nicht angegeben ist, startet oder beendet der Browser die Animation unter Verwendung der berechneten Werte aller Attribute.

Sie können optional zusätzliche Keyframes einfügen, die Zwischenschritte zwischen dem Beginn und dem Ende der Animation beschreiben.

## Verwendung der Animation-Kurzschreibweise

Die {{cssxref("animation")}}-Kurzschreibweise ist nützlich, um Platz zu sparen. Zum Beispiel können einige der Regeln, die wir in diesem Artikel verwendet haben:

```css
p {
  animation-duration: 3s;
  animation-name: slide-in;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

...mithilfe der `animation`-Kurzschreibweise ersetzt werden.

```css
p {
  animation: 3s infinite alternate slide-in;
}
```

Um mehr über die Reihenfolge zu erfahren, in der verschiedene Animations-Eigenschaftswerte mithilfe der `animation`-Kurzschreibweise angegeben werden können, siehe die {{cssxref("animation")}}-Referenzseite.

## Festlegen mehrerer Animations-Eigenschaftswerte

Die CSS-Animations-Langschreibeigenschaften können mehrere Werte akzeptieren, die durch Kommas getrennt sind. Diese Funktion kann verwendet werden, wenn Sie mehrere Animationen innerhalb einer Regel anwenden und unterschiedliche Dauer, Iterationsanzahlen usw. für jede der Animationen festlegen möchten. Werfen wir einen kurzen Blick auf einige Beispiele, um die verschiedenen Permutationen zu erklären.

In diesem ersten Beispiel gibt es drei Dauer- und drei Iterationsanzahlwerte. Also wird jeder Animation ein Wert für Dauer und Iterationsanzahl mit der gleichen Position wie der Animationsname zugewiesen. Die `fadeInOut`-Animation erhält eine Dauer von `2.5s` und eine Iterationsanzahl von `2`, und die `bounce`-Animation erhält eine Dauer von `1s` und eine Iterationsanzahl von `5`.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s, 1s;
animation-iteration-count: 2, 1, 5;
```

In diesem zweiten Beispiel sind drei Animationsnamen festgelegt, aber es gibt nur eine Dauer und eine Iterationsanzahl. In diesem Fall erhalten alle drei Animationen die gleiche Dauer und Iterationsanzahl.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 3s;
animation-iteration-count: 1;
```

In diesem dritten Beispiel sind drei Animationen angegeben, aber nur zwei Dauern und Iterationsanzahlen. In solchen Fällen, in denen es in der Liste nicht genügend Werte gibt, um jeder Animation einen separaten Wert zuzuweisen, erfolgt die Wertzuweisung von dem ersten zum letzten Element in der verfügbaren Liste und dann erneut vom ersten Element. So erhält `fadeInOut` eine Dauer von `2.5s`, und `moveLeft300px` erhält eine Dauer von `5s`, was der letzte Wert in der Liste der Dauerwerte ist. Die Zuweisung des Dauerwerts wird nun auf den ersten Wert zurückgesetzt; `bounce` erhält daher eine Dauer von `2.5s`. Die Iterationsanzahlwerte (und alle anderen von Ihnen spezifizierten Eigenschaftswerte) werden auf die gleiche Weise zugewiesen.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s;
animation-iteration-count: 2, 1;
```

Wenn das Missverhältnis in der Anzahl der Animationen und Animations-Eigenschaftswerte umgekehrt ist, das heißt, es gibt fünf `animation-duration`-Werte für drei `animation-name`-Werte, dann finden die zusätzlichen oder ungenutzten Animations-Eigenschaftswerte, in diesem Fall zwei `animation-duration`-Werte, keine Anwendung auf eine Animation und werden ignoriert.

## Beispiele

### Text über das Browserfenster gleiten lassen

Dieses grundlegende Beispiel stylt ein {{HTMLElement("p")}}-Element mithilfe der {{cssxref("translate")}}- und {{cssxref("scale")}}-Übergangseigenschaften so, dass der Text von außerhalb des rechten Randes des Browserfensters hereingleitet.

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

In diesem Beispiel gibt der Stil für das {{HTMLElement("p")}}-Element an, dass die Animation 3 Sekunden dauern soll, um von Anfang bis Ende ausgeführt zu werden, indem die {{cssxref("animation-duration")}}-Eigenschaft verwendet wird, und dass der Name der {{ cssxref("@keyframes")}}-At-Regel, die die Keyframes für die Animationssequenz definiert, `slide-in` ist.

In diesem Fall haben wir nur zwei Keyframes. Das erste tritt bei `0%` auf (unter Verwendung des Aliases `from`). Hier konfigurieren wir die {{cssxref("translate")}}-Eigenschaft des Elements auf `150vw` (das heißt, jenseits des rechten Randes des enthaltenen Elements), und die {{cssxref("scale")}} des Elements auf 200% (oder das Doppelte seiner Standardgröße), sodass der Absatz doppelt so breit ist wie sein `<body>`-Block. Dies führt dazu, dass der erste Frame der Animation die Überschrift außerhalb des rechten Randes des Browserfensters zeichnet.

Das zweite Keyframe tritt bei `100%` auf (unter Verwendung des Aliases `to`). Die {{cssxref("translate")}}-Eigenschaft wird auf `0%` gesetzt und die {{cssxref("scale")}} des Elements auf `1`, was `100%` entspricht. Dies führt dazu, dass die Überschrift ihre Animation in ihrem Standardzustand, bündig am linken Rand des Inhaltsbereichs, beendet.

```html
<p>
  The Caterpillar and Alice looked at each other for some time in silence: at
  last the Caterpillar took the hookah out of its mouth, and addressed her in a
  languid, sleepy voice.
</p>
```

> [!NOTE]
> Laden Sie die Seite neu, um die Animation zu sehen.

{{EmbedLiveSample("Making_text_slide_across_the_browser_window","100%","250")}}

### Hinzufügen einer weiteren Keyframe-Animation

Fügen wir der Animation aus dem vorherigen Beispiel ein weiteres Keyframe hinzu. Angenommen, wir möchten, dass Alices Name rosa wird, wächst und dann zurück zu seiner ursprünglichen Größe und Farbe schrumpft, während er sich von rechts nach links bewegt. Zwar könnten wir die {{cssxref("font-size")}} ändern, aber das Ändern von Eigenschaften, die das Boxmodell betreffen, wirkt sich negativ auf die Leistung aus. Stattdessen umschließen wir ihren Namen mit einem {{htmlelement("span")}} und skalieren und weisen diesem separat eine Farbe zu. Das erfordert das Hinzufügen einer zweiten Animation, die nur das `<span>` beeinflusst:

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

Der vollständige Code sieht jetzt so aus:

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

Wir haben ein {{htmlelement("span")}} um "Alice" hinzugefügt:

```html
<p>
  The Caterpillar and <span>Alice</span> looked at each other for some time in
  silence: at last the Caterpillar took the hookah out of its mouth, and
  addressed her in a languid, sleepy voice.
</p>
```

Dies sagt dem Browser, dass der Name für die ersten und letzten 25% der Animation normal sein soll, aber in der Mitte rosa wird und vergrößert und wieder verkleinert. Wir setzen die {{cssxref("display")}}-Eigenschaft des Span-Elements auf `inline-block`, da die `transform`-Eigenschaften nicht die nicht-ersetzte {{Glossary("inline-level_content", "inline-level content")}} beeinflussen.

> [!NOTE]
> Laden Sie die Seite neu, um die Animation zu sehen.

{{EmbedLiveSample("Adding_another_keyframe","100%","250")}}

### Die Animation wiederholen

Um die Animation so zu gestalten, dass sie sich selbst wiederholt, verwenden Sie die {{cssxref("animation-iteration-count")}}-Eigenschaft, um anzugeben, wie oft die Animation wiederholt werden soll. In diesem Fall verwenden wir `infinite`, um die Animation unendlich oft wiederholen zu lassen:

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

Das ließ die Animation sich wiederholen, aber es ist sehr seltsam, dass sie jedes Mal, wenn sie zu animieren beginnt, abrupt zum Anfang zurückspringt. Was wir wirklich wollen, ist, dass sie sich hin und her über den Bildschirm bewegt. Das lässt sich leicht erreichen, indem man {{cssxref("animation-direction")}} auf `alternate` setzt:

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

Sie können zusätzliche Kontrolle über Animationen erlangen — sowie nützliche Informationen über sie — indem Sie Animationsereignisse nutzen. Diese Ereignisse, dargestellt durch das [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)-Objekt, können verwendet werden, um zu erkennen, wann Animationen beginnen, enden und eine neue Iteration starten. Jedes Ereignis umfasst die Zeit, zu der es aufgetreten ist, sowie den Namen der Animation, die das Ereignis ausgelöst hat.

Wir werden das Beispiel mit dem gleitenden Text ändern, um einige Informationen über jedes Animationsereignis auszugeben, wenn es auftritt, damit wir sehen können, wie sie funktionieren.

Wir haben die gleiche Keyframe-Animation wie im vorherigen Beispiel eingebaut. Diese Animation wird 3 Sekunden dauern, "slide-in" genannt, 3-mal wiederholt und jedes Mal in einer alternativen Richtung reisen. In den {{cssxref("@keyframes")}} werden die Skalierung und die Verschiebung entlang der x-Achse manipuliert, um das Element über den Bildschirm gleiten zu lassen.

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

#### Hinzufügen der Animation-Event-Listener

Wir werden JavaScript-Code verwenden, um auf alle drei möglichen Animationsereignisse zu hören. Dieser Code konfiguriert unsere Event-Listener; wir rufen ihn auf, wenn das Dokument erstmals geladen wird, um alles einzurichten.

```js
const element = document.getElementById("watch-me");
element.addEventListener("animationstart", listener);
element.addEventListener("animationend", listener);
element.addEventListener("animationiteration", listener);

element.className = "slide-in";
```

Dies ist ein ziemlich Standardcode; Sie können Details dazu in der Dokumentation zu [`eventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) erhalten. Das letzte, was dieser Code tut, ist, die `class` auf dem Element, das wir animieren werden, auf "slide-in" zu setzen; wir tun dies, um die Animation zu starten.

Warum? Weil das `animationstart`-Ereignis sofort ausgelöst wird, sobald die Animation beginnt, und in unserem Fall passiert das, bevor unser Code ausgeführt wird. Also starten wir die Animation selbst, indem wir die Klasse des Elements nachträglich auf den Stil setzen, der animiert wird.

#### Empfangen der Ereignisse

Die Ereignisse werden an die `listener()`-Funktion geliefert, die unten gezeigt wird.

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

Dieser Code ist ebenfalls sehr einfach. Er prüft den [`event.type`](/de/docs/Web/API/Event/type), um zu bestimmen, welche Art von Animationsereignis aufgetreten ist, und fügt dann eine entsprechende Notiz zu der {{HTMLElement("ul")}} (ungeordneten Liste) hinzu, die wir verwenden, um diese Ereignisse zu protokollieren.

Die Ausgabe, wenn alles gesagt und getan ist, sieht etwa so aus:

- Gestartet: verstrichene Zeit ist 0
- Neue Schleife gestartet um Zeit 3.01200008392334
- Neue Schleife gestartet um Zeit 6.00600004196167
- Beendet: verstrichene Zeit ist 9.234000205993652

Beachten Sie, dass die Zeiten sehr nahe an, aber nicht genau denjenigen entsprechen, die aufgrund des Timings erwartet werden würden, das bei der Konfiguration der Animation festgelegt wurde. Beachten Sie auch, dass nach der letzten Iteration der Animation das `animationiteration`-Ereignis nicht gesendet wird, sondern stattdessen das `animationend`-Ereignis gesendet wird.

Nur der Vollständigkeit halber hier ist das HTML, das den Seiteninhalt anzeigt, einschließlich der Liste, in die das Skript Informationen zu den empfangenen Ereignissen einfügt:

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

Und hier ist die Live-Ausgabe.

> [!NOTE]
> Laden Sie die Seite neu, um die Animation zu sehen.

{{EmbedLiveSample('Using_animation_events', '600', '300')}}

### Animation von Anzeige und content-visibility

Dieses Beispiel zeigt, wie {{cssxref("display")}} und {{cssxref("content-visibility")}} animiert werden können. Dieses Verhalten ist nützlich für die Erstellung von Ein-/Ausblend-Animationen, bei denen Sie zum Beispiel einen Container mit `display: none` aus dem DOM entfernen, aber stattdessen mit {{cssxref("opacity")}} sanft ausblenden möchten, anstatt sofort zu verschwinden.

Unterstützende Browser animieren `display` und `content-visibility` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete). Das bedeutet im Allgemeinen, dass Eigenschaften etwa 50% des Weges durch die Animation zwischen zwei Werten wechseln.

Es gibt jedoch eine Ausnahme, nämlich wenn von/auf `display: none` oder `content-visibility: hidden` zu einem sichtbaren Wert animiert wird. In diesem Fall wird der Browser zwischen den beiden Werten umschalten, sodass der animierte Inhalt für die gesamte Animationsdauer sichtbar ist.

Zum Beispiel:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) wird der Wert zu `block`, bei `0%` der Animationsdauer umgeschaltet, sodass er die gesamte Dauer über sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` wird der Wert bei `100%` der Animationsdauer zu `none` umgeschaltet, sodass er die gesamte Dauer über sichtbar ist.

#### HTML

Das HTML enthält zwei {{htmlelement("p")}}-Elemente mit einem dazwischenliegenden {{htmlelement("div")}}, das von `display` `none` zu `block` animiert wird.

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

Beachten Sie die Aufnahme der `display`-Eigenschaft in die Keyframe-Animationen.

#### JavaScript

Schließlich fügen wir ein wenig JavaScript hinzu, um Event-Listener einzurichten, die die Animationen auslösen. Insbesondere fügen wir die `fade-in`-Klasse zum `<div>` hinzu, wenn wir möchten, dass es erscheint, und `fade-out`, wenn es verschwinden soll.

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

Der Code wird wie folgt gerendert:

{{ EmbedLiveSample("Animating display and content-visibility", "100%", "350") }}

## Siehe auch

- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) Modul
- [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
- [Verwendung von CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions/Using)
- [Verwendung der Web Animations API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
