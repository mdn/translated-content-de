---
title: Verwendung von CSS-Animationen
slug: Web/CSS/CSS_animations/Using_CSS_animations
l10n:
  sourceCommit: b17ca921175c0a92d21c6c4effbc7fa3dc348a8e
---

{{CSSRef}}

**CSS-Animationen** ermöglichen es, Übergänge von einer CSS-Stilkonfiguration zu einer anderen zu animieren. Animationen bestehen aus zwei Komponenten: einem Stil, der die CSS-Animation beschreibt, und einer Reihe von Keyframes, die die Start- und Endzustände des Animationsstils sowie mögliche Zwischenpunkte angeben.

Es gibt drei wesentliche Vorteile von CSS-Animationen gegenüber herkömmlichen skriptgesteuerten Animationstechniken:

1. Sie sind leicht für grundlegende Animationen zu verwenden; Sie können sie erstellen, ohne JavaScript zu kennen.
2. Die Animationen laufen gut, selbst bei mäßiger Systembelastung. Einfache Animationen können oft in JavaScript schlecht ausgeführt werden. Die Rendering-Engine kann Frame-Skipping und andere Techniken verwenden, um die Leistung so reibungslos wie möglich zu halten.
3. Wenn der Browser die Animationssequenz steuert, kann er die Leistung und Effizienz optimieren, indem er beispielsweise die Update-Frequenz von Animationen in nicht sichtbaren Tabs reduziert.

## Konfigurieren einer Animation

Um eine CSS-Animationssequenz zu erstellen, gestalten Sie das Element, das Sie animieren möchten, mit der {{cssxref("animation")}}-Eigenschaft oder deren Untereigenschaften. Dies ermöglicht es Ihnen, das Timing, die Dauer und andere Details zu konfigurieren, wie die Animationssequenz ablaufen soll. Dies konfiguriert **nicht** das eigentliche Aussehen der Animation, das mit der {{cssxref("@keyframes")}}-At-Regel wie im Abschnitt [Definieren einer Animationssequenz mit Keyframes](#definieren_einer_animationssequenz_mit_keyframes) unten beschrieben erfolgt.

Die Untereigenschaften der {{cssxref("animation")}}-Eigenschaft sind:

- {{cssxref("animation-composition")}}
  - : Gibt die {{Glossary("composite_operation", "Kompositionsoperation")}} an, die verwendet werden soll, wenn mehrere Animationen gleichzeitig dieselbe Eigenschaft beeinflussen. Diese Eigenschaft gehört nicht zur `animation` Kurzschreibweise.
- {{cssxref("animation-delay")}}
  - : Gibt die Verzögerung zwischen dem Laden eines Elements und dem Beginn einer Animationssequenz an und ob die Animation sofort von ihrem Anfang oder zwischendurch starten soll.
- {{cssxref("animation-direction")}}
  - : Gibt an, ob die erste Iteration einer Animation vorwärts oder rückwärts erfolgen soll und ob nachfolgende Iterationen die Richtung bei jedem Durchlauf der Sequenz abwechseln oder zum Startpunkt zurückkehren und wiederholen sollen.
- {{cssxref("animation-duration")}}
  - : Gibt die Zeitspanne an, in der eine Animation einen Zyklus abschließt.
- {{cssxref("animation-fill-mode")}}
  - : Gibt an, wie eine Animation Stile auf ihr Ziel vor und nach dem Ausführen anwendet.
    > [!NOTE]
    > Im Fall des Animations-[forwards](/de/docs/Web/CSS/animation-fill-mode#forwards) Füllmodus verhalten sich animierte Eigenschaften als ob sie in einem Satz [`will-change`](/de/docs/Web/CSS/will-change) Eigenschaftswert enthalten wären. Wenn während der Animation ein neuer Stacking-Kontext erstellt wurde, behält das Zielelement den Stacking-Kontext bei, nachdem die Animation beendet ist.
- {{cssxref("animation-iteration-count")}}
  - : Gibt die Anzahl der Wiederholungen einer Animation an.
- {{cssxref("animation-name")}}
  - : Gibt den Namen der {{cssxref("@keyframes")}}-At-Regel an, die die Keyframes einer Animation beschreibt.
- {{cssxref("animation-play-state")}}
  - : Gibt an, ob eine Animationssequenz pausiert oder abgespielt werden soll.
- {{cssxref("animation-timeline")}}
  - : Gibt die Zeitleiste an, die verwendet wird, um den Fortschritt einer CSS-Animation zu steuern.
- {{cssxref("animation-timing-function")}}
  - : Gibt an, wie eine Animation durch Keyframes übergangsweise durchläuft, indem Beschleunigungskurven erstellt werden.

## Definieren einer Animationssequenz mit Keyframes

Nachdem Sie das Timing der Animation konfiguriert haben, müssen Sie das Erscheinungsbild der Animation definieren. Dies geschieht durch Festlegen eines oder mehrerer Keyframes mit der {{cssxref("@keyframes")}}-At-Regel. Jedes Keyframe beschreibt, wie das animierte Element zu einem bestimmten Zeitpunkt während der Animationssequenz dargestellt werden soll.

Da das Timing der Animation im CSS-Stil definiert ist, der die Animation konfiguriert, verwenden Keyframes ein {{cssxref("percentage")}}, um den Zeitpunkt während der Animationssequenz anzuzeigen, zu dem sie stattfinden. 0% zeigt den ersten Moment der Animationssequenz an, während 100% den Endzustand der Animation angibt. Da diese beiden Zeiten so wichtig sind, haben sie spezielle Aliase: `from` und `to`. Beide sind optional. Wenn `from`/`0%` oder `to`/`100%` nicht angegeben ist, startet oder beendet der Browser die Animation mit den berechneten Werten aller Attribute.

Sie können optional zusätzliche Keyframes einfügen, die Zwischenschritte zwischen dem Anfang und Ende der Animation beschreiben.

## Verwendung der Kurzschreibweise für Animationen

Die Kurzschreibweise {{cssxref("animation")}} ist nützlich, um Platz zu sparen. Zum Beispiel könnten einige der Regeln, die wir in diesem Artikel verwendet haben:

```css
p {
  animation-duration: 3s;
  animation-name: slide-in;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

...durch die Verwendung der `animation` Kurzschreibweise ersetzt werden.

```css
p {
  animation: 3s infinite alternate slide-in;
}
```

Um mehr über die Reihenfolge zu erfahren, in der verschiedene Animations-Eigenschaftswerte mit der `animation` Kurzschreibweise angegeben werden können, siehe die {{cssxref("animation")}} Referenzseite.

## Festlegen mehrerer Werte für Animationseigenschaften

Die CSS-Animationen können mehrere Werte akzeptieren, die durch Kommata getrennt sind. Diese Funktion kann verwendet werden, wenn Sie mehrere Animationen in einer einzigen Regel anwenden und unterschiedliche Dauern, Iterationsanzahlen usw. für jede der Animationen festlegen möchten. Lassen Sie uns einige schnelle Beispiele anschauen, um die verschiedenen Permutationen zu erklären.

Im ersten Beispiel gibt es drei Werte für die Dauer und die Iterationsanzahl. So wird jeder Animation eine Dauer- und Iterationsanzahl zugewiesen, die dieselbe Position wie der Animationsname hat. Der `fadeInOut`-Animation wird eine Dauer von `2.5s` und eine Iterationsanzahl von `2` zugewiesen, und der `bounce`-Animation wird eine Dauer von `1s` und eine Iterationsanzahl von `5` zugewiesen.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s, 1s;
animation-iteration-count: 2, 1, 5;
```

Im zweiten Beispiel sind drei Animationsnamen festgelegt, es gibt jedoch nur eine Dauer und eine Iterationsanzahl. In diesem Fall erhalten alle drei Animationen die gleiche Dauer und Iterationsanzahl.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 3s;
animation-iteration-count: 1;
```

Im dritten Beispiel werden drei Animationen angegeben, aber nur zwei Dauern und Iterationsanzahlen. In solchen Fällen, bei denen es nicht genügend Werte in der Liste gibt, um jeder Animation einen separaten zuzuweisen, erfolgt die Wertzuweisung zyklisch vom ersten zum letzten Element in der verfügbaren Liste und dann wieder zurück zum ersten Element. So erhält `fadeInOut` eine Dauer von `2.5s`, und `moveLeft300px` erhält eine Dauer von `5s`, welche der letzte Wert in der Liste der Dauerwerte ist. Die Zuordnung der Dauerwerte wird nun auf den ersten Wert zurückgesetzt; `bounce` erhält daher eine Dauer von `2.5s`. Die Werte für die Iterationsanzahl (und alle anderen von Ihnen angegebenen Eigenschaftswerte) werden auf die gleiche Weise zugewiesen.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s;
animation-iteration-count: 2, 1;
```

Wenn die Diskrepanz in der Anzahl von Animationen und Animationswerteigenschaften invertiert wird, wenn also fünf `animation-duration`-Werte für drei `animation-name`-Werte vorhanden sind, gelten die zusätzlichen oder nicht verwendeten Eigenschaftswerte in diesem Fall nicht für eine Animation und werden ignoriert.

## Beispiele

### Text über das Browserfenster gleiten lassen

Dieses einfache Beispiel stylt ein {{HTMLElement("p")}}-Element mit den {{cssxref("translate")}}- und {{cssxref("scale")}}-Übergangseigenschaften, sodass der Text von rechts außerhalb des Browser-Fensters herein gleitet.

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

In diesem Beispiel gibt der Stil für das {{HTMLElement("p")}}-Element an, dass die Animation 3 Sekunden für die Ausführung von Anfang bis Ende benötigen soll, wobei die {{cssxref("animation-duration")}}-Eigenschaft verwendet wird und der Name der {{ cssxref("@keyframes")}}-At-Regel, die die Keyframes für die Animationssequenz definiert, `slide-in` ist.

In diesem Fall haben wir nur zwei Keyframes. Das erste tritt bei `0%` auf (unter Verwendung des Alias `from`). Hier konfigurieren wir die {{cssxref("translate")}}-Eigenschaft des Elements auf `150vw` (das heißt außerhalb des rechten Rands des enthaltenden Elements) und die {{cssxref("scale")}} des Elements auf 200% (oder das Zweifache seiner Standardgröße), wodurch der Absatz doppelt so breit wie sein `<body>`-Block ist. Dadurch wird der erste Frame der Animation außerhalb des rechten Randes des Browserfensters gezeichnet.

Das zweite Keyframe tritt bei `100%` auf (unter Verwendung des Alias `to`). Die {{cssxref("translate")}}-Eigenschaft wird auf `0%` gesetzt und die {{cssxref("scale")}} des Elements wird auf `1` oder `100%` gesetzt. Dadurch endet die Animation in ihrem Standardzustand, bündig am linken Rand des Inhaltsbereichs.

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

Lassen Sie uns der Animation des vorherigen Beispiels ein weiteres Keyframe hinzufügen. Nehmen wir an, wir möchten, dass Alices Name rosa wird, wächst und dann zu seiner ursprünglichen Größe und Farbe zurückkehrt, während er sich von rechts nach links bewegt. Obwohl wir die {{cssxref("font-size")}} ändern könnten, wirkt sich das Ändern von Eigenschaften, die das Box-Modell betreffen, negativ auf die Leistung aus. Stattdessen umhüllen wir ihren Namen mit einem {{htmlelement("span")}} und skalieren und hinterlegen eine Farbe separat. Das erfordert das Hinzufügen einer zweiten Animation, die nur das `<span>` betrifft:

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

Dies teilt dem Browser mit, dass der Name für die erste und letzte 25% der Animation normal sein soll, aber mittendrin rosa werden soll, während er skaliert wird und wieder zurück. Wir setzen die {{cssxref("display")}}-Eigenschaft des Spans auf `inline-block`, da die `transform`-Eigenschaften keinen Einfluss auf nicht ersetzte {{Glossary("inline-level_content", "Inline-Element-Inhalte")}} haben.

> [!NOTE]
> Seite neu laden, um die Animation zu sehen.

{{EmbedLiveSample("Adding_another_keyframe","100%","250")}}

### Wiederholen der Animation

Um die Animation zu wiederholen, verwenden Sie die {{cssxref("animation-iteration-count")}}-Eigenschaft, um anzugeben, wie oft die Animation wiederholt werden soll. In diesem Fall verwenden wir `infinite`, um die Animation unendlich oft zu wiederholen:

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

### Die Animation hin- und herbewegen

Diese Animation hat sie wiederholt, aber es ist sehr seltsam, dass sie jedes Mal, wenn sie beginnt, zum Start zurückspringt. Was wir wirklich wollen, ist, dass sie sich hin und her über den Bildschirm bewegt. Das kann leicht erreicht werden, indem {{cssxref("animation-direction")}} auf `alternate` gesetzt wird:

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

Sie können zusätzliche Kontrolle über Animationen erhalten — sowie nützliche Informationen über sie — indem Sie Animationsereignisse verwenden. Diese Ereignisse, die durch das [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)-Objekt dargestellt werden, können verwendet werden, um zu erkennen, wann Animationen starten, enden und eine neue Iteration beginnen. Jedes Ereignis enthält die Zeit, zu der es auftrat, sowie den Namen der Animation, die das Ereignis ausgelöst hat.

Wir werden das gleitende Textbeispiel ändern, um einige Informationen über jedes Animationsereignis auszugeben, wenn es auftritt, sodass wir sehen können, wie sie funktionieren.

Wir haben die gleichen Keyframe-Animationen wie im vorherigen Beispiel eingebaut. Diese Animation dauert 3 Sekunden, wird "slide-in" genannt, wiederholt sich 3 Mal und bewegt sich jedes Mal in wechselnder Richtung. In der {{cssxref("@keyframes")}} werden die Skalierung und die Translation entlang der X-Achse manipuliert, um das Element über den Bildschirm gleiten zu lassen.

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

#### Hinzufügen der Animationsereignis-Listener

Wir werden JavaScript-Code verwenden, um alle drei möglichen Animationsereignisse zu hören. Dieser Code konfiguriert unsere Event-Listener; wir rufen es auf, wenn das Dokument zuerst geladen wird, um alles einzurichten.

```js
const element = document.getElementById("watch-me");
element.addEventListener("animationstart", listener, false);
element.addEventListener("animationend", listener, false);
element.addEventListener("animationiteration", listener, false);

element.className = "slide-in";
```

Dies ist ziemlich standardmäßiger Code; Sie können Details darüber nachlesen, wie es funktioniert, in der Dokumentation zu [`eventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener). Das Letzte, was dieser Code tut, ist, die `class` des Elements, das wir animieren werden, auf "slide-in" zu setzen; wir tun dies, um die Animation zu starten.

Warum? Weil das `animationstart`-Ereignis feuert, sobald die Animation beginnt, und in unserem Fall passiert das, bevor unser Code ausgeführt wird. Deshalb starten wir die Animation selbst, indem wir die Klasse des Elements auf den Stil setzen, der nachträglich animiert wird.

#### Empfang der Ereignisse

Die Ereignisse werden an die Funktion `listener()` weitergeleitet, die unten gezeigt wird.

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

Auch dieser Code ist sehr einfach. Er schaut sich den [`event.type`](/de/docs/Web/API/Event/type) an, um zu bestimmen, welche Art von Animationsereignis aufgetreten ist, und fügt dann eine entsprechende Notiz zur {{HTMLElement("ul")}} (ungeordneten Liste) hinzu, die wir zur Ereignisprotokollierung verwenden.

Das Ergebnis sieht schließlich ungefähr so aus:

- Gestartet: vergangene Zeit ist 0
- Neue Schleife gestartet um Zeit 3.01200008392334
- Neue Schleife gestartet um Zeit 6.00600004196167
- Beendet: vergangene Zeit ist 9.234000205993652

Beachten Sie, dass die Zeiten sehr nahe an den erwarteten Werten für das Timing liegen, das bei der Konfiguration der Animation festgelegt wurde, jedoch nicht genau übereinstimmen. Beachten Sie auch, dass nach der letzten Iteration der Animation, das `animationiteration`-Ereignis nicht gesendet wird; stattdessen wird das `animationend`-Ereignis gesendet.

Nur der Vollständigkeit halber, hier ist das HTML, das den Seiteninhalt anzeigt, einschließlich der Liste, in die das Skript Informationen über die empfangenen Ereignisse einfügt:

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
> Seite neu laden, um die Animation zu sehen.

{{EmbedLiveSample('Using_animation_events', '600', '300')}}

### Animieren von Darstellung und Inhalts-Sichtbarkeit

Dieses Beispiel demonstriert, wie [`display`](/de/docs/Web/CSS/display) und [`content-visibility`](/de/docs/Web/CSS/content-visibility) animiert werden können. Dieses Verhalten ist nützlich für das Erstellen von Ein-/Ablaufanimationen, bei denen Sie beispielsweise einen Container mit `display: none` aus dem DOM entfernen möchten, ihn jedoch mit [`opacity`](/de/docs/Web/CSS/opacity) sanft ausblenden lassen wollen, anstatt sofort zu verschwinden.

Unterstützende Browser animieren `display` und `content-visibility` mit einer Variante des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Dies bedeutet im Allgemeinen, dass Eigenschaften während der Animation zwischen zwei Werten 50% der Zeit umschalten.

Es gibt jedoch eine Ausnahme, wenn von/zu `display: none` oder `content-visibility: hidden` zu einem sichtbaren Wert animiert wird. In diesem Fall wechselt der Browser zwischen den beiden Werten, sodass die animierten Inhalte für die gesamte Animationsdauer angezeigt werden.

Zum Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wechselt der Wert zu `block` bei `0%` der Animationsdauer, sodass es während der gesamten Zeit sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wechselt der Wert zu `none` bei `100%` der Animationsdauer, sodass es während der gesamten Zeit sichtbar ist.

#### HTML

Das HTML enthält zwei {{htmlelement("p")}}-Elemente mit einem {{htmlelement("div")}} dazwischen, das wir von `display` `none` zu `block` animieren.

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

Beachten Sie die Einbeziehung der `display`-Eigenschaft in die Keyframe-Animationen.

#### JavaScript

Schließlich fügen wir ein wenig JavaScript hinzu, um Ereignis-Listener zu konfigurieren, um die Animationen auszulösen. Insbesondere fügen wir die `fade-in`-Klasse zum `<div>` hinzu, wenn es erscheinen soll, und `fade-out`, wenn es verschwinden soll.

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
