---
title: Verwenden von CSS-Animationen
slug: Web/CSS/CSS_animations/Using_CSS_animations
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{CSSRef}}

**CSS-Animationen** ermöglichen es, Übergänge von einer CSS-Stilkonfiguration zu einer anderen zu animieren. Animationen bestehen aus zwei Komponenten: einem Stil, der die CSS-Animation beschreibt, und einem Satz von Keyframes, die die Start- und Endzustände des Animationsstils sowie mögliche Zwischenwegpunkte angeben.

Es gibt drei wesentliche Vorteile von CSS-Animationen gegenüber traditionellen, skriptgesteuerten Animationstechniken:

1. Sie sind einfach zu verwenden für einfache Animationen; Sie können sie erstellen, ohne JavaScript zu kennen.
2. Die Animationen laufen gut, selbst unter mittlerer Systemlast. Einfache Animationen können in JavaScript oft schlecht ausgeführt werden. Die Rendering-Engine kann Frame-Skipping und andere Techniken verwenden, um die Leistung so reibungslos wie möglich zu halten.
3. Wenn der Browser die Animationssequenz steuert, kann er die Leistung und Effizienz optimieren, indem er zum Beispiel die Update-Frequenz von Animationen in nicht sichtbaren Tabs reduziert.

## Eine Animation konfigurieren

Um eine CSS-Animationssequenz zu erstellen, stylen Sie das Element, das Sie animieren möchten, mit der {{cssxref("animation")}}-Eigenschaft oder ihren Untereigenschaften. Dies ermöglicht es Ihnen, das Timing, die Dauer und andere Details darüber, wie die Animationssequenz voranschreiten soll, zu konfigurieren. Dies konfiguriert jedoch **nicht** das tatsächliche Erscheinungsbild der Animation, das mittels der {{cssxref("@keyframes")}}-At-Regel wie im Abschnitt [Animierungssequenz mit Keyframes definieren](#animierungssequenz_mit_keyframes_definieren) beschrieben wird.

Die Untereigenschaften der {{cssxref("animation")}}-Eigenschaft sind:

- {{cssxref("animation-composition")}}
  - : Gibt die [Kompositionsoperation](/de/docs/Glossary/composite_operation) an, die verwendet werden soll, wenn mehrere Animationen dieselbe Eigenschaft gleichzeitig beeinflussen. Diese Eigenschaft ist nicht Teil der Kurzform `animation`.
- {{cssxref("animation-delay")}}
  - : Gibt die Verzögerung zwischen dem Laden eines Elements und dem Beginn einer Animationssequenz an und ob die Animation sofort von Anfang an oder mitten in der Animation beginnen soll.
- {{cssxref("animation-direction")}}
  - : Gibt an, ob die erste Iteration einer Animation vorwärts oder rückwärts erfolgen soll und ob nachfolgende Iterationen die Richtung bei jedem Durchlauf durch die Sequenz wechseln oder zum Startpunkt zurückkehren und wiederholen sollen.
- {{cssxref("animation-duration")}}
  - : Legt die Zeit fest, in der eine Animation einen Zyklus abschließt.
- {{cssxref("animation-fill-mode")}}
  - : Gibt an, wie eine Animation Stile auf ihr Ziel vor und nach dem Ausführen anwendet.
    > [!NOTE]
    > Im Fall des Animations-[vorwärts](/de/docs/Web/CSS/animation-fill-mode#forwards)-Fill-Modus verhalten sich animierte Eigenschaften so, als ob sie in einem `will-change`-Eigenschaftswert enthalten wären. Wenn während der Animation ein neuer Stacking-Kontext erstellt wurde, behält das Zielelement den Stacking-Kontext, nachdem die Animation abgeschlossen ist.
- {{cssxref("animation-iteration-count")}}
  - : Gibt die Anzahl der Wiederholungen einer Animation an.
- {{cssxref("animation-name")}}
  - : Gibt den Namen der {{cssxref("@keyframes")}}-At-Regel an, die die Keyframes einer Animation beschreibt.
- {{cssxref("animation-play-state")}}
  - : Gibt an, ob eine Animationssequenz pausiert oder abgespielt werden soll.
- {{cssxref("animation-timeline")}}
  - : Gibt die Zeitleiste an, die verwendet wird, um den Fortschritt einer CSS-Animation zu steuern.
- {{cssxref("animation-timing-function")}}
  - : Gibt an, wie eine Animation durch Keyframes mittels Beschleunigungskurven übergeht.

## Animierungssequenz mit Keyframes definieren

Nachdem Sie das Timing der Animation konfiguriert haben, müssen Sie das Erscheinungsbild der Animation definieren. Dies geschieht durch das Festlegen von einem oder mehreren Keyframes mit der {{cssxref("@keyframes")}}-At-Regel. Jedes Keyframe beschreibt, wie das animierte Element zu einem bestimmten Zeitpunkt während der Animationssequenz dargestellt werden soll.

Da das Timing der Animation im CSS-Stil definiert ist, der die Animation konfiguriert, verwenden Keyframes ein {{cssxref("percentage")}}, um den Zeitpunkt in der Animationssequenz anzugeben, zu dem sie stattfinden. 0% gibt den ersten Moment der Animationssequenz an, während 100% den Endstatus der Animation angibt. Da diese beiden Zeiten so wichtig sind, haben sie spezielle Aliase: `from` und `to`. Beide sind optional. Wenn `from`/`0%` oder `to`/`100%` nicht angegeben sind, beginnt oder endet der Browser die Animation unter Verwendung der berechneten Werte aller Attribute.

Sie können optional zusätzliche Keyframes hinzufügen, die Zwischenschritte zwischen dem Start und dem Ende der Animation beschreiben.

## Verwendung der Animation-Kurzform

Die {{cssxref("animation")}}-Kurzform ist nützlich, um Platz zu sparen. Als Beispiel können einige der Regeln, die wir in diesem Artikel verwendet haben:

```css
p {
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

... durch die Verwendung der `animation`-Kurzform ersetzt werden.

```css
p {
  animation: 3s infinite alternate slidein;
}
```

Um mehr über die Reihenfolge zu erfahren, in der verschiedene Animationseigenschaftswerte mit der `animation`-Kurzform angegeben werden können, siehe die {{cssxref("animation")}}-Referenzseite.

## Mehrere Werte für Animationseigenschaften setzen

Die CSS-Animations-Langeigenschaften können mehrere Werte akzeptieren, die durch Kommas getrennt sind. Diese Funktion kann verwendet werden, wenn Sie mehrere Animationen in einer einzelnen Regel anwenden und verschiedene Dauern, Iterationszahlen usw. für jede der Animationen festlegen möchten. Schauen wir uns einige schnelle Beispiele an, um die verschiedenen Permutationen zu erklären.

In diesem ersten Beispiel gibt es drei Dauer- und drei Iterationsanzahlwerte. Daher wird jeder Animation ein Wert für die Dauer und die Iterationsanzahl zugewiesen, die dieselbe Position wie der Animationsname hat. Die `fadeInOut`-Animation erhält eine Dauer von `2.5s` und eine Iterationsanzahl von `2`, und die `bounce`-Animation erhält eine Dauer von `1s` und eine Iterationsanzahl von `5`.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s, 1s;
animation-iteration-count: 2, 1, 5;
```

Im zweiten Beispiel werden drei Animationsnamen festgelegt, es gibt jedoch nur eine Dauer und Iterationsanzahl. In diesem Fall erhalten alle drei Animationen dieselbe Dauer und Iterationsanzahl.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 3s;
animation-iteration-count: 1;
```

Im dritten Beispiel werden drei Animationen angegeben, jedoch nur zwei Dauern und Iterationsanzahlen. In solchen Fällen, in denen es nicht genügend Werte in der Liste gibt, um jedem Animation eine separate zuzuweisen, zyklisch wird die Wertezuweisung von dem ersten bis zum letzten Element in der verfügbaren Liste und dann von vorne begonnen. So erhält `fadeInOut` eine Dauer von `2.5s` und `moveLeft300px` eine Dauer von `5s`, was der letzte Wert in der Liste der Dauerwerte ist. Die Dauerwertezuweisung wird nun auf den ersten Wert zurückgesetzt; `bounce` erhält daher eine Dauer von `2.5s`. Die Iterationsanzahlwerte (und alle anderen angegebenen Eigenschaftswerte) werden auf dieselbe Weise zugewiesen.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s;
animation-iteration-count: 2, 1;
```

Wenn das Missverhältnis in der Anzahl der Animationen und der Animationswerte invertiert ist, sagen wir es gibt fünf `animation-duration`-Werte für drei `animation-name`-Werte, dann gelten die zusätzlichen oder ungenutzten Animationswerte, in diesem Fall zwei `animation-duration`-Werte, für keine Animation und werden ignoriert.

## Beispiele

> [!NOTE]
> Einige ältere Browser (vor 2017) benötigen möglicherweise Präfixe; die Live-Beispiele, die Sie in Ihrem Browser anklicken können, umfassen die `-webkit`-gekennzeichnete Syntax.

### Text über das Browserfenster gleiten lassen

Dieses grundlegende Beispiel stylt ein {{HTMLElement("p")}}-Element mit den Übergangseigenschaften {{cssxref("translate")}} und {{cssxref("scale")}}, sodass der Text von außerhalb des rechten Rands des Browserfensters hereingleitet.

```css
p {
  animation-duration: 3s;
  animation-name: slidein;
}

@keyframes slidein {
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

In diesem Beispiel spezifiziert der Stil für das {{HTMLElement("p")}}-Element, dass die Animation 3 Sekunden dauern soll, um von Anfang bis Ende auszuführen, unter Verwendung der {{cssxref("animation-duration")}}-Eigenschaft, und dass der Name der {{cssxref("@keyframes")}}-At-Regel, die die Keyframes für die Animationssequenz definiert, `slidein` ist.

In diesem Fall haben wir nur zwei Keyframes. Das erste tritt bei `0%` auf (unter Verwendung des Alias `from`). Hier konfigurieren wir die {{cssxref("translate")}}-Eigenschaft des Elements auf `150vw` (das heißt, über den rechten Rand des enthaltenen Elements hinaus), und die {{cssxref("scale")}} des Elements auf 200% (oder zwei Mal seine Standardgröße), wodurch der Absatz doppelt so breit wie sein `<body>`-enthaltender Block ist. Dies führt dazu, dass der erste Frame der Animation den Header außerhalb des rechten Randes des Browserfensters hat.

Das zweite Keyframe tritt bei `100%` auf (unter Verwendung des Alias `to`). Die {{cssxref("translate")}}-Eigenschaft ist auf `0%` gesetzt und die {{cssxref("scale")}} des Elements ist auf `1`, also `100%` gesetzt. Dies führt dazu, dass der Header seine Animation in seinem Standardzustand beendet, direkt am linken Rand des Inhaltsbereichs.

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

Fügen wir der Animation des vorherigen Beispiels ein weiteres Keyframe hinzu. Nehmen wir an, wir möchten, dass Alices Name rosa wird und wächst, und dann auf seine ursprüngliche Größe und Farbe zurückschrumpft, während er sich von rechts nach links bewegt. Während wir die {{cssxref("font-size")}} ändern könnten, beeinträchtigt das Ändern von Eigenschaften, die das Boxmodell beeinflussen, die Leistung negativ. Stattdessen packen wir ihren Namen in ein {{htmlelement("span")}} und skalieren und weisen eine Farbe separat zu. Das erfordert das Hinzufügen einer zweiten Animation, die nur das `<span>` betrifft:

```css
@keyframes growshrink {
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

![](8-b5c1ea6.md)

Wir haben ein {{htmlelement("span")}} um "Alice" hinzugefügt:

```html
<p>
  The Caterpillar and <span>Alice</span> looked at each other for some time in
  silence: at last the Caterpillar took the hookah out of its mouth, and
  addressed her in a languid, sleepy voice.
</p>
```

Dies sagt dem Browser, dass der Name normal für die ersten und letzten 25% der Animation sein soll, aber rosa werden soll, während er in der Mitte vergrößert und wieder verkleinert wird. Wir setzen die {{cssxref("display")}}-Eigenschaft des Spans auf `inline-block`, da die `transform`-Eigenschaften sich nicht auf nicht-ersetzte [inline-level content](/de/docs/Glossary/inline-level_content) auswirken.

> [!NOTE]
> Seite neu laden, um die Animation zu sehen.

{{EmbedLiveSample("Adding_another_keyframe","100%","250")}}

### Wiederholen der Animation

Um die Animation sich wiederholen zu lassen, verwenden Sie die {{cssxref("animation-iteration-count")}}-Eigenschaft, um anzugeben, wie oft die Animation wiederholt werden soll. In diesem Fall verwenden wir `infinite`, um die Animation unbegrenzt wiederholen zu lassen:

```css
p {
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: infinite;
}
```

```css hidden
@keyframes slidein {
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

### Animation vor- und zurückbewegen lassen

Das führte dazu, dass sie sich wiederholt, aber es ist sehr seltsam, dass sie jedes Mal, wenn sie zu animieren beginnt, zurück zum Anfang springt. Was wir wirklich wollen, ist, dass sie sich hin und her über den Bildschirm bewegt. Das ist leicht erreicht, indem {{cssxref("animation-direction")}} auf `alternate` gesetzt wird:

```css
p {
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

```css hidden
@keyframes slidein {
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

Sie können zusätzliche Kontrolle über Animationen erhalten - ebenso wie nützliche Informationen über sie - durch die Nutzung von Animationsereignissen. Diese Ereignisse, dargestellt durch das [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)-Objekt, können verwendet werden, um zu erkennen, wann Animationen beginnen, enden und eine neue Iteration beginnen. Jedes Ereignis enthält den Zeitpunkt, zu dem es stattfand sowie den Namen der Animation, die das Ereignis ausgelöst hat.

Wir werden das Beispiel des gleitenden Texts modifizieren, um einige Informationen über jedes Animationsereignis auszugeben, wenn es stattfindet, damit wir sehen können, wie sie funktionieren.

Wir haben dieselbe Keyframe-Animation wie das vorherige Beispiel enthalten. Diese Animation wird 3 Sekunden dauern, den Namen "slidein" tragen, 3 Mal wiederholt werden und jedes Mal in einer alternativen Richtung verlaufen. In den {{cssxref("@keyframes")}} werden die Skalierung und Übersetzung entlang der x-Achse manipuliert, um das Element über den Bildschirm gleiten zu lassen.

```css
.slidein {
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: 3;
  animation-direction: alternate;
}
```

```css hidden
@keyframes slidein {
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

#### Hinzufügen der Animations-Ereignis-Listener

Wir werden JavaScript-Code verwenden, um alle drei möglichen Animations-Ereignisse abzuhören. Dieser Code konfiguriert unsere Ereignis-Listener; wir rufen ihn auf, wenn das Dokument zum ersten Mal geladen wird, um die Dinge einzurichten.

```js
const element = document.getElementById("watchme");
element.addEventListener("animationstart", listener, false);
element.addEventListener("animationend", listener, false);
element.addEventListener("animationiteration", listener, false);

element.className = "slidein";
```

Dieser Code ist ziemlich standardmäßig; Sie können in der Dokumentation von [`eventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) Details dazu erhalten, wie er funktioniert. Das letzte, was dieser Code tut, ist, die `class` des Elements, das wir animieren werden, auf "slidein" zu setzen; wir tun dies, um die Animation zu starten.

Warum? Weil das `animationstart`-Ereignis ausgelöst wird, sobald die Animation beginnt, was in unserem Fall vor dem läuft, bevor unser Code gestartet wird. Daher werden wir die Animation selbst starten, indem wir die Klasse des Elements nachträglich auf den zu animierenden Stil setzen.

#### Empfangen der Ereignisse

Die Ereignisse werden an die `listener()`-Funktion übermittelt, die unten gezeigt wird.

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

Dieser Code ist ebenfalls sehr einfach. Er überprüft den [`event.type`](/de/docs/Web/API/Event/type), um zu bestimmen, welche Art von Animationsereignis aufgetreten ist, und fügt eine entsprechende Notiz zur {{HTMLElement("ul")}} (ungeordnete Liste) hinzu, die wir verwenden, um diese Ereignisse zu protokollieren.

Die Ausgabe sieht dann etwa so aus:

- Gestartet: verstrichene Zeit ist 0
- Neue Schleife begann bei Zeit 3,01200008392334
- Neue Schleife begann bei Zeit 6,00600004196167
- Beendet: verstrichene Zeit ist 9,234000205993652

Beachten Sie, dass die Zeiten sehr nah an, aber nicht genau, denen liegen, die gemäß dem Timing erwartet wurden, als die Animation konfiguriert wurde. Beachten Sie auch, dass nach der letzten Iteration der Animation das `animationiteration`-Ereignis nicht gesendet wird; stattdessen wird das `animationend`-Ereignis gesendet.

Nur der Vollständigkeit halber, hier ist das HTML, das den Seiteninhalt anzeigt, einschließlich der Liste, in die das Skript Informationen über die empfangenen Ereignisse einfügt:

```html
<h1 id="watchme">Watch me move</h1>
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
> Seite neu laden, um die Animation zu sehen.

{{EmbedLiveSample('Using_animation_events', '600', '300')}}

### Animieren von `display` und `content-visibility`

Dieses Beispiel demonstriert, wie [`display`](/de/docs/Web/CSS/display) und [`content-visibility`](/de/docs/Web/CSS/content-visibility) animiert werden können. Dieses Verhalten ist nützlich, um Eintritts-/Austrittsanimationen zu erstellen, bei denen Sie beispielsweise einen Container aus dem DOM mit `display: none` entfernen möchten, aber ihn mit [`opacity`](/de/docs/Web/CSS/opacity) sanft ausblenden möchten, anstatt sofort zu verschwinden.

Unterstützende Browser animieren `display` und `content-visibility` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Dies bedeutet im Allgemeinen, dass Eigenschaften zwischen zwei Werten 50 % der Animationsdauer wechseln.

Es gibt jedoch eine Ausnahme, wenn zu/von `display: none` oder `content-visibility: hidden` zu einem sichtbaren Wert animiert wird. In diesem Fall wird der Browser die beiden Werte umschalten, sodass der animierte Inhalt während der gesamten Animationsdauer sichtbar ist.

Zum Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wird der Wert bei `0%` der Animationsdauer auf `block` umgeschaltet, sodass es die gesamte Zeit sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wird der Wert bei `100%` der Animationsdauer auf `none` umgeschaltet, sodass er die gesamte Zeit sichtbar ist.

#### HTML

Das HTML enthält zwei {{htmlelement("p")}}-Elemente mit einem {{htmlelement("div")}} dazwischen, das von `display` `none` zu `block` animiert wird.

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

Beachten Sie die Einbeziehung der `display`-Eigenschaft in den Keyframe-Animationen.

#### JavaScript

Schließlich fügen wir etwas JavaScript hinzu, um Ereignis-Listener einzurichten, die die Animationen auslösen. Insbesondere fügen wir die `fade-in`-Klasse zum `<div>` hinzu, wenn wir es erscheinen lassen wollen, und `fade-out`, wenn wir es verschwinden lassen wollen.

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

- [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
- [Verwendung von CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- [Verwendung der Web Animations API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
