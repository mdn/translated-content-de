---
title: Verwenden von CSS-Animationen
short-title: Verwendung von Animationen
slug: Web/CSS/Guides/Animations/Using
l10n:
  sourceCommit: ca5d9f9e63b460fc0c9e15ac57d9739e10e4ea0d
---

**CSS-Animationen** ermöglichen es, Übergänge von einer CSS-Stilkonfiguration zu einer anderen zu animieren. Animationen bestehen aus zwei Komponenten: einem Stil, der die CSS-Animation beschreibt, und einer Reihe von Keyframes, die die Start- und Endzustände des Animationsstils sowie mögliche Zwischenstationen angeben.

Es gibt drei wesentliche Vorteile von CSS-Animationen gegenüber traditionellen, scriptgesteuerten Animationstechniken:

1. Sie sind einfach zu verwenden für grundlegende Animationen; Sie können sie erstellen, ohne JavaScript kennen zu müssen.
2. Die Animationen laufen gut, selbst bei moderater Systembelastung. Einfache Animationen können in JavaScript oft schlecht performen. Die Rendering-Engine kann Frame-Skipping und andere Techniken verwenden, um die Performance so glatt wie möglich zu halten.
3. Indem der Browser die Animationssequenz kontrolliert, kann er die Performance und Effizienz optimieren, indem er beispielsweise die Aktualisierungsrate von Animationen reduziert, die in derzeit nicht sichtbaren Tabs laufen.

## Konfigurieren einer Animation

Um eine CSS-Animationssequenz zu erstellen, stylen Sie das Element, das Sie animieren möchten, mit der {{cssxref("animation")}}-Eigenschaft oder deren Untereigenschaften. Dies ermöglicht es Ihnen, das Timing, die Dauer und andere Details zu konfigurieren, wie die Animationssequenz ablaufen soll. Dies konfiguriert **nicht** das tatsächliche Aussehen der Animation, das mit der {{cssxref("@keyframes")}}-At-Regel konfiguriert wird, wie im Abschnitt [Definieren einer Animationssequenz mit Keyframes](#definieren_einer_animationssequenz_mit_keyframes) unten beschrieben.

Die Untereigenschaften der {{cssxref("animation")}}-Eigenschaft sind:

- {{cssxref("animation-composition")}}
  - : Gibt die {{Glossary("composite_operation", "composite operation")}} an, die verwendet werden soll, wenn mehrere Animationen dieselbe Eigenschaft gleichzeitig beeinflussen. Diese Eigenschaft ist nicht Teil der `animation`-Kurzschreibweise.
- {{cssxref("animation-delay")}}
  - : Gibt die Verzögerung zwischen dem Laden eines Elements und dem Start einer Animationssequenz an und ob die Animation sofort von Anfang an oder mittendrin starten soll.
- {{cssxref("animation-direction")}}
  - : Gibt an, ob die erste Iteration einer Animation vorwärts oder rückwärts verlaufen soll und ob nachfolgende Iterationen die Richtung bei jedem Durchlauf der Sequenz abwechseln oder auf den Startpunkt zurückgesetzt und wiederholt werden sollen.
- {{cssxref("animation-duration")}}
  - : Gibt die Länge der Zeit an, in der eine Animation einen Zyklus abschließt.
- {{cssxref("animation-fill-mode")}}
  - : Gibt an, wie eine Animation Stile auf ihr Ziel vor und nach dem Ausführen anwendet.
    > [!NOTE]
    > Im Fall des Animationsfüllmodus [forwards](/de/docs/Web/CSS/Reference/Properties/animation-fill-mode#forwards) verhalten sich die animierten Eigenschaften so, als ob sie in einem Wert der Eigenschaft [`will-change`](/de/docs/Web/CSS/Reference/Properties/will-change) enthalten wären. Wenn während der Animation ein neuer Stacking-Kontext erstellt wurde, behält das Zielelement den Stacking-Kontext bei, nachdem die Animation abgeschlossen ist.
- {{cssxref("animation-iteration-count")}}
  - : Gibt an, wie oft eine Animation wiederholt werden soll.
- {{cssxref("animation-name")}}
  - : Gibt den Namen der {{cssxref("@keyframes")}}-At-Regel an, die die Keyframes einer Animation beschreibt.
- {{cssxref("animation-play-state")}}
  - : Gibt an, ob eine Animationssequenz pausiert oder abgespielt werden soll.
- {{cssxref("animation-timeline")}}
  - : Gibt die Zeitleiste an, die zur Steuerung des Fortschritts einer CSS-Animation verwendet wird.
- {{cssxref("animation-timing-function")}}
  - : Gibt an, wie eine Animation durch Keyframes verläuft, indem Beschleunigungskurven festgelegt werden.

## Definieren einer Animationssequenz mit Keyframes

Nachdem Sie das Timing der Animation konfiguriert haben, müssen Sie das Aussehen der Animation definieren. Dies geschieht durch das Festlegen eines oder mehrerer Keyframes mit der {{cssxref("@keyframes")}}-At-Regel. Jedes Keyframe beschreibt, wie das animierte Element zu einem bestimmten Zeitpunkt während der Animationssequenz gerendert werden soll.

Da das Timing der Animation im CSS-Stil definiert ist, der die Animation konfiguriert, verwenden Keyframes einen {{cssxref("percentage")}}, um den Zeitpunkt während der Animationssequenz anzugeben, zu dem sie stattfinden. 0% bezeichnet den ersten Moment der Animationssequenz, während 100% den Endzustand der Animation angibt. Weil diese beiden Zeiten so wichtig sind, haben sie spezielle Aliase: `from` und `to`. Beide sind optional. Wenn `from`/`0%` oder `to`/`100%` nicht angegeben ist, beginnt oder endet der Browser die Animation mit den berechneten Werten aller Attribute.

Sie können optional zusätzliche Keyframes einfügen, die Zwischenstufen zwischen dem Anfang und dem Ende der Animation beschreiben.

## Verwendung der Animations-Kurzschreibweise

Die {{cssxref("animation")}}-Kurzschreibweise ist nützlich, um Platz zu sparen. Ein Beispiel, einige der Regeln, die wir in diesem Artikel verwenden:

```css
p {
  animation-duration: 3s;
  animation-name: slide-in;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

...könnten durch die Verwendung der `animation`-Kurzschreibweise ersetzt werden.

```css
p {
  animation: 3s infinite alternate slide-in;
}
```

Um mehr über die Reihenfolge zu erfahren, in der verschiedene Animationswerte mit der `animation`-Kurzschreibweise angegeben werden können, siehe die {{cssxref("animation")}}-Referenzseite.

## Festlegen mehrerer Animationswerte

Die CSS-Animations-Langschreib-Eigenschaften können mehrere Werte akzeptieren, die durch Kommas getrennt sind. Dieses Feature kann verwendet werden, wenn Sie mehrere Animationen in einer einzelnen Regel anwenden und für jede der Animationen verschiedene Dauern, Wiederholzahlen usw. festlegen möchten. Lassen Sie uns einige schnelle Beispiele ansehen, um die verschiedenen Permutationen zu erklären.

Im ersten Beispiel gibt es drei Werte für die Dauer und die Anzahl der Wiederholungen. Jede Animation wird mit einem Wert für die Dauer und die Wiederholungsanzahl an derselben Position wie der Animationsname zugewiesen. Die `fadeInOut`-Animation erhält eine Dauer von `2.5s` und eine Wiederholungsanzahl von `2`, und die `bounce`-Animation erhält eine Dauer von `1s` und eine Wiederholungsanzahl von `5`.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s, 1s;
animation-iteration-count: 2, 1, 5;
```

Im zweiten Beispiel sind drei Animationsnamen festgelegt, jedoch gibt es nur eine Dauer und eine Wiederholungsanzahl. In diesem Fall erhalten alle drei Animationen dieselbe Dauer und Wiederholungsanzahl.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 3s;
animation-iteration-count: 1;
```

Im dritten Beispiel werden drei Animationen angegeben, aber nur zwei Dauern und Wiederholungszahlen. In solchen Fällen, in denen nicht genügend Werte in der Liste vorhanden sind, um jedem eine eigene Animation zuzuweisen, wird die Wertezuweisung vom ersten bis zum letzten Element in der verfügbaren Liste durchlaufen und dann zum ersten Element zurückgekehrt. So erhält `fadeInOut` eine Dauer von `2.5s` und `moveLeft300px` eine Dauer von `5s`, was der letzte Wert in der Liste der Dauerwerte ist. Die Dauerwertzuweisung wird jetzt auf den ersten Wert zurückgesetzt; `bounce` erhält daher eine Dauer von `2.5s`. Die Wiederholungszahlen (und alle anderen von Ihnen angegebenen Eigenschaftswerte) werden auf die gleiche Weise zugewiesen.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s;
animation-iteration-count: 2, 1;
```

Wenn das Missverhältnis in der Anzahl der Animationen und der Animationswerte umgekehrt ist, sagen wir fünf `animation-duration`-Werte für drei `animation-name`-Werte, dann gelten die zusätzlichen oder ungenutzten Animationswerte, in diesem Fall zwei `animation-duration`-Werte, auf keine Animation und werden ignoriert.

## Beispiele

### Text über das Browserfenster gleiten lassen

Dieses grundlegende Beispiel gestaltet ein {{HTMLElement("p")}}-Element mit den Übergangseigenschaften {{cssxref("translate")}} und {{cssxref("scale")}}, sodass der Text von der rechten Rand des Browserfensters hinein gleitet.

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

In diesem Beispiel gibt der Stil für das {{HTMLElement("p")}}-Element an, dass die Animation 3 Sekunden dauern soll, um von Anfang bis Ende auszuführen, unter Verwendung der Eigenschaft {{cssxref("animation-duration")}}, und dass der Name der {{ cssxref("@keyframes")}}-At-Regel, die die Keyframes für die Animationssequenz definiert, `slide-in` ist.

In diesem Fall haben wir nur zwei Keyframes. Das erste tritt bei `0%` auf (unter Verwendung des Alias `from`). Hier konfigurieren wir die {{cssxref("translate")}}-Eigenschaft des Elements auf `150vw` (das ist jenseits des äußeren rechten Rands des enthaltenen Elements), und die {{cssxref("scale")}} des Elements auf 200% (oder das Doppelte der Standardbreite), wodurch der Absatz doppelt so breit wie sein `<body>`-Enthaltensblock wird. Dies führt dazu, dass der erste Frame der Animation die Kopfzeile außerhalb des rechten Randes des Browserfensters hat.

Das zweite Keyframe tritt bei `100%` auf (unter Verwendung des Alias `to`). Die {{cssxref("translate")}}-Eigenschaft wird auf `0%` festgelegt und die {{cssxref("scale")}} des Elements wird auf `1` gesetzt, was `100%` entspricht. Dies führt dazu, dass die Kopfzeile ihre Animation in ihrem Standardzustand abschließt, bündig am linken Rand des Inhaltsbereichs.

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

### Eine weitere Keyframe-Animation hinzufügen

Fügen wir der Animation aus dem vorherigen Beispiel ein weiteres Keyframe hinzu. Angenommen, wir möchten, dass Alices Name rosa wird und wächst und dann wieder auf seine ursprüngliche Größe und Farbe schrumpft, während er sich von rechts nach links bewegt. Während wir die {{cssxref("font-size")}} ändern könnten, wirkt sich das Ändern von Eigenschaften, die das Boxmodell beeinflussen, negativ auf die Leistung aus. Stattdessen wickeln wir ihren Namen in einen {{htmlelement("span")}} und skalieren dann und weisen eine Farbe nur diesem zu. Dazu muss eine zweite Animation hinzugefügt werden, die nur den `<span>` beeinflusst:

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

Wir haben einen {{htmlelement("span")}} um "Alice" hinzugefügt:

```html
<p>
  The Caterpillar and <span>Alice</span> looked at each other for some time in
  silence: at last the Caterpillar took the hookah out of its mouth, and
  addressed her in a languid, sleepy voice.
</p>
```

Dies teilt dem Browser mit, dass der Name für die ersten und letzten 25% der Animation normal sein soll, aber in der Mitte rosa werden soll, während er und wieder zurück skaliert wird. Wir setzen die {{cssxref("display")}}-Eigenschaft des span auf `inline-block`, da die `transform`-Eigenschaften den {{Glossary("inline-level_content", "inline-level content")}} nicht beeinflussen.

> [!NOTE]
> Laden Sie die Seite neu, um die Animation zu sehen.

{{EmbedLiveSample("Adding_another_keyframe","100%","250")}}

### Die Animation wiederholen

Um die Animation wiederholen zu lassen, verwenden Sie die {{cssxref("animation-iteration-count")}}-Eigenschaft, um anzugeben, wie oft die Animation wiederholt werden soll. In diesem Fall verwenden wir `infinite`, um die Animation unendlich oft wiederholen zu lassen:

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

Das machte es wiederholbar, aber es ist sehr seltsam, dass es bei jedem Start der Animation wieder zurück zum Anfang springt. Was wir wirklich wollen, ist, dass es sich hin- und her über den Bildschirm bewegt. Das wird einfach erreicht, indem {{cssxref("animation-direction")}} auf `alternate` gesetzt wird:

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

### Verwenden von Animationsereignissen

Sie können zusätzliche Kontrolle über Animationen erhalten – sowie nützliche Informationen über sie – indem Sie Animationsereignisse verwenden. Diese Ereignisse, dargestellt durch das [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)-Objekt, können verwendet werden, um zu erkennen, wann Animationen starten, enden und eine neue Iteration beginnen. Jedes Ereignis enthält die Zeit, zu der es auftrat, sowie den Namen der Animation, die das Ereignis ausgelöst hat.

Wir werden das Beispiel mit dem gleitenden Text ändern, um einige Informationen über jedes Animationsereignis auszugeben, wenn es auftritt, damit wir einen Eindruck davon bekommen, wie sie funktionieren.

Wir haben die gleiche Keyframe-Animation wie im vorherigen Beispiel aufgenommen. Diese Animation dauert 3 Sekunden, wird "slide-in" genannt, wiederholt 3-mal und bewegt sich in jeder Runde in einer alternativen Richtung. In der {{cssxref("@keyframes")}} werden die Skalierung und die Translation entlang der x-Achse manipuliert, um das Element über den Bildschirm gleiten zu lassen.

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

Wir verwenden JavaScript-Code, um alle drei möglichen Animationsereignisse zu überwachen. Dieser Code konfiguriert unsere Ereignis-Listener; wir rufen ihn auf, wenn das Dokument zum ersten Mal geladen wird, um die Dinge einzurichten.

```js
const element = document.getElementById("watch-me");
element.addEventListener("animationstart", listener);
element.addEventListener("animationend", listener);
element.addEventListener("animationiteration", listener);

element.className = "slide-in";
```

Dies ist ziemlich standardmäßiger Code; Sie können Details dazu, wie er funktioniert, in der Dokumentation für [`eventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) erhalten. Das Letzte, was dieser Code tut, ist, die `class` des Elements, das wir animieren werden, auf "slide-in" zu setzen; wir tun dies, um die Animation zu starten.

Warum? Weil das `animationstart`-Ereignis sofort ausgelöst wird, wenn die Animation startet, und in unserem Fall passiert das, bevor unser Code ausgeführt wird. Daher starten wir die Animation selbst, indem wir die Klasse des Elements auf den nachträglich animierten Stil setzen.

#### Empfang der Ereignisse

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

Auch dieser Code ist sehr einfach. Er schaut auf den [`event.type`](/de/docs/Web/API/Event/type), um zu bestimmen, welche Art von Animationsereignis auftrat, und fügt dann eine entsprechende Notiz zu der {{HTMLElement("ul")}} (ungeordnete Liste) hinzu, die wir zur Protokollierung dieser Ereignisse verwenden.

Die Ausgabe, wenn alles gesagt und getan ist, sieht ungefähr so aus:

- Gestartet: Verstrichene Zeit ist 0
- Neuer Loop startete zu Zeit 3.01200008392334
- Neuer Loop startete zu Zeit 6.00600004196167
- Beendet: Verstrichene Zeit ist 9.234000205993652

Beachten Sie, dass die Zeiten sehr nahe, aber nicht genau denen erwartet werden, die in der bei der Animation konfigurierten Zeit festgelegt wurden. Beachten Sie auch, dass nach der letzten Iteration der Animation das `animationiteration`-Ereignis nicht gesendet wird; stattdessen wird das `animationend`-Ereignis gesendet.

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
> Laden Sie die Seite neu, um die Animation zu sehen.

{{EmbedLiveSample('Using_animation_events', '600', '300')}}

### Animieren von Display und content-visibility

Dieses Beispiel zeigt, wie [`display`](/de/docs/Web/CSS/Reference/Properties/display) und [`content-visibility`](/de/docs/Web/CSS/Reference/Properties/content-visibility) animiert werden können. Dieses Verhalten ist nützlich, um Ein- und Ausstiegsanimationen zu erstellen, bei denen Sie beispielsweise einen Container aus dem DOM mit `display: none` entfernen möchten, aber ihn mit [`opacity`](/de/docs/Web/CSS/Reference/Properties/opacity) sanft ausblenden, anstatt sofort zu verschwinden.

Unterstützende Browser animieren `display` und `content-visibility` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete). Dies bedeutet im Allgemeinen, dass Eigenschaften 50% der gesamten Animationsdauer zwischen den beiden Werten umschalten.

Es gibt jedoch eine Ausnahme, und zwar beim Animieren von/zu `display: none` oder `content-visibility: hidden` zu einem sichtbaren Wert. In diesem Fall wird der Browser zwischen den beiden Werten so umschalten, dass der animierte Inhalt während der gesamten Animationsdauer angezeigt wird.

Zum Beispiel:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) wird der Wert bei `0%` der Animationsdauer auf `block` umgeschaltet, damit er die ganze Zeit sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` wird der Wert bei `100%` der Animationsdauer auf `none` umgeschaltet, damit er die ganze Zeit sichtbar ist.

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

Beachten Sie die Einbeziehung der `display`-Eigenschaft in die Keyframe-Animationen.

#### JavaScript

Schließlich fügen wir ein wenig JavaScript hinzu, um die Ereignis-Listener zu aktivieren, die die Animation auslösen. Insbesondere fügen wir die `fade-in`-Klasse zum `<div>` hinzu, wenn es erscheinen soll, und `fade-out`, wenn es verschwinden soll.

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

Der Code rendert wie folgt:

{{ EmbedLiveSample("Animating display and content-visibility", "100%", "350") }}

## Siehe auch

- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)-Modul
- [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
- [Verwenden von CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions/Using)
- [Verwendung der Web Animations API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
