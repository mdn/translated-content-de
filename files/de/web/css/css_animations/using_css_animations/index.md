---
title: Verwenden von CSS-Animationen
slug: Web/CSS/CSS_animations/Using_CSS_animations
l10n:
  sourceCommit: f3b150a20cb2c71f6b5dbeb5e86697c670a99555
---

{{CSSRef}}

**CSS-Animationen** ermöglichen es, Übergänge von einer CSS-Stilkonfiguration zu einer anderen zu animieren. Animationen bestehen aus zwei Komponenten: einem Stil, der die CSS-Animation beschreibt, und einem Satz von Keyframes, die die Anfangs- und Endzustände des Animationsstils sowie mögliche Zwischenstationen angeben.

Es gibt drei Hauptvorteile von CSS-Animationen gegenüber traditionellen skriptgesteuerten Animationstechniken:

1. Sie sind einfach zu verwenden für einfache Animationen; Sie können sie erstellen, ohne JavaScript kennen zu müssen.
2. Die Animationen laufen gut, selbst bei mäßiger Systemlast. Einfache Animationen können in JavaScript oft schlecht abschneiden. Die Rendering-Engine kann Frame-Skipping und andere Techniken verwenden, um die Leistung so reibungslos wie möglich zu halten.
3. Wenn der Browser die Animationssequenz steuert, kann er die Leistung und Effizienz optimieren, indem er beispielsweise die Aktualisierungsfrequenz von Animationen reduziert, die in momentan nicht sichtbaren Tabs laufen.

## Konfigurieren einer Animation

Um eine CSS-Animationssequenz zu erstellen, stylen Sie das Element, das Sie animieren möchten, mit der {{cssxref("animation")}}-Eigenschaft oder deren Untereigenschaften. Dadurch können Sie das Timing, die Dauer und andere Details der Animationssequenz konfigurieren. Dies konfiguriert **nicht** das tatsächliche Erscheinungsbild der Animation, das mit der {{cssxref("@keyframes")}}-Regel, wie im Abschnitt [Definieren einer Animationssequenz mit Keyframes](#definieren_einer_animationssequenz_mit_keyframes) unten beschrieben, festgelegt wird.

Die Untereigenschaften der {{cssxref("animation")}}-Eigenschaft sind:

- {{cssxref("animation-composition")}}
  - : Bestimmt die {{Glossary("composite_operation", "Komposit-Operation")}}, die verwendet wird, wenn mehrere Animationen gleichzeitig dieselbe Eigenschaft beeinflussen. Diese Eigenschaft ist nicht Teil der `animation`-Kurznotation.
- {{cssxref("animation-delay")}}
  - : Bestimmt die Verzögerung zwischen dem Laden eines Elements und dem Start einer Animationssequenz und ob die Animation unmittelbar von Anfang an oder in der Mitte der Animation starten soll.
- {{cssxref("animation-direction")}}
  - : Bestimmt, ob die erste Iteration einer Animation vorwärts oder rückwärts verlaufen sollte und ob nachfolgende Iterationen die Richtung mit jedem Durchlauf der Sequenz wechseln oder zum Startpunkt zurücksetzen und wiederholen sollen.
- {{cssxref("animation-duration")}}
  - : Bestimmt die Dauer, in der eine Animation einen Zyklus abschließt.
- {{cssxref("animation-fill-mode")}}
  - : Bestimmt, wie eine Animation vor und nach ihrer Ausführung Stil auf ihr Ziel anwendet.
    > [!NOTE]
    > Im Fall des [forwards](/de/docs/Web/CSS/animation-fill-mode#forwards) Fill-Modus verhalten sich animierte Eigenschaften so, als ob sie in einem [`will-change`](/de/docs/Web/CSS/will-change)-Eigenschaftswert enthalten wären. Wenn ein neuer Stapelkontext während der Animation erstellt wurde, behält das Zielelement den Stapelkontext bei, nachdem die Animation beendet ist.
- {{cssxref("animation-iteration-count")}}
  - : Bestimmt, wie oft eine Animation wiederholt werden soll.
- {{cssxref("animation-name")}}
  - : Bestimmt den Namen der {{cssxref("@keyframes")}}-Regel, die die Keyframes einer Animation beschreibt.
- {{cssxref("animation-play-state")}}
  - : Bestimmt, ob eine Animationssequenz pausiert oder abgespielt werden soll.
- {{cssxref("animation-timeline")}}
  - : Bestimmt die Zeitleiste, die verwendet wird, um den Fortschritt einer CSS-Animation zu steuern.
- {{cssxref("animation-timing-function")}}
  - : Bestimmt, wie eine Animation durch Keyframes übergeht, indem Beschleunigungskurven festgelegt werden.

## Definieren einer Animationssequenz mit Keyframes

Nachdem Sie das Timing der Animation konfiguriert haben, müssen Sie das Erscheinungsbild der Animation definieren. Dies geschieht durch die Erstellung eines oder mehrerer Keyframes mit der {{cssxref("@keyframes")}}-Regel. Jedes Keyframe beschreibt, wie das animierte Element zu einem bestimmten Zeitpunkt während der Animationssequenz gerendert werden sollte.

Da das Timing der Animation in dem CSS-Stil definiert ist, der die Animation konfiguriert, verwenden Keyframes einen {{cssxref("percentage")}}, um die Zeit während der Animationssequenz anzugeben, zu der sie stattfinden sollen. 0% gibt den ersten Moment der Animationssequenz an, während 100% den Endzustand der Animation angeben. Da diese beiden Zeiten so wichtig sind, haben sie spezielle Aliase: `from` und `to`. Beide sind optional. Wenn `from`/`0%` oder `to`/`100%` nicht angegeben ist, beginnt oder beendet der Browser die Animation mit den berechneten Werten aller Attribute.

Zusätzlich können Sie weitere Keyframes einfügen, die Zwischenstufen zwischen dem Beginn und dem Ende der Animation beschreiben.

## Verwenden der Kurznotation von Animation

Die {{cssxref("animation")}} Kurznotation ist nützlich, um Platz zu sparen. Als Beispiel können einige der Regeln, die wir in diesem Artikel verwendet haben:

```css
p {
  animation-duration: 3s;
  animation-name: slide-in;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

...durch die Verwendung der `animation` Kurznotation ersetzt werden.

```css
p {
  animation: 3s infinite alternate slide-in;
}
```

Um mehr über die Reihenfolge zu erfahren, in der unterschiedliche Animations-Eigenschaftswerte mit der `animation` Kurznotation angegeben werden können, siehe die {{cssxref("animation")}} Referenzseite.

## Festlegen mehrerer Animations-Eigenschaftswerte

Die langen CSS-Animationseigenschaften können mehrere Werte akzeptieren, die durch Kommas getrennt sind. Diese Funktion kann verwendet werden, wenn Sie mehrere Animationen in einer einzigen Regel anwenden und unterschiedliche Dauern, Wiederholungsanzahlen usw. für jede der Animationen festlegen möchten. Schauen wir uns einige schnelle Beispiele an, um die verschiedenen Permutationen zu erklären.

In diesem ersten Beispiel gibt es drei Dauer- und drei Wiederholungsanzahlwerte. Jede Animation wird einem Dauer- und Wiederholungsanzahlwert mit derselben Position wie der Animationsname zugewiesen. Die `fadeInOut`-Animation erhält eine Dauer von `2.5s` und eine Wiederholungsanzahl von `2`, und die `bounce`-Animation erhält eine Dauer von `1s` und eine Wiederholungsanzahl von `5`.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s, 1s;
animation-iteration-count: 2, 1, 5;
```

In diesem zweiten Beispiel werden drei Animationsnamen festgelegt, aber es gibt nur eine Dauer und eine Wiederholungsanzahl. In diesem Fall erhalten alle drei Animationen die gleiche Dauer und Wiederholungsanzahl.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 3s;
animation-iteration-count: 1;
```

In diesem dritten Beispiel werden drei Animationen angegeben, aber nur zwei Dauern und Wiederholungsanzahlen. In solchen Fällen, in denen es nicht genügend Werte in der Liste gibt, um jedem Animation eine separate zuzuweisen, erfolgt die Wertezuweisung zyklisch von dem ersten bis zum letzten Element in der verfügbaren Liste und kehrt dann zum ersten Element zurück. Somit erhält `fadeInOut` eine Dauer von `2.5s`, und `moveLeft300px` erhält eine Dauer von `5s`, was der letzte Wert in der Liste der Dauern ist. Die Zuweisung des Dauernwerts wird nun auf den ersten Wert zurückgesetzt; `bounce` erhält daher eine Dauer von `2.5s`. Die Wiederholungsanzahl Werte (und alle anderen von Ihnen festgelegten Eigenschaftswerte) werden auf gleiche Weise zugewiesen.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s;
animation-iteration-count: 2, 1;
```

Wenn das Missverhältnis in der Anzahl der Animationen und der Animations-Eigenschaftswerte umgekehrt ist, zum Beispiel wenn es fünf `animation-duration`-Werte für drei `animation-name`-Werte gibt, dann sind die zusätzlichen oder ungenutzten Animations-Eigenschaftswerte, in diesem Fall zwei `animation-duration`-Werte, auf keine Animation anwendbar und werden ignoriert.

## Beispiele

### Text über das Browserfenster gleiten lassen

Dieses einfache Beispiel stylt ein {{HTMLElement("p")}} Element mithilfe der {{cssxref("translate")}} und {{cssxref("scale")}} Übergangseigenschaften, sodass der Text von außerhalb des rechten Randes des Browserfensters hereinrutscht.

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

In diesem Beispiel gibt der Stil für das {{HTMLElement("p")}} Element an, dass die Animation 3 Sekunden dauern soll und dass der Name der {{cssxref("@keyframes")}} Regel, die die Keyframes für die Animationssequenz definiert, `slide-in` ist.

In diesem Fall haben wir nur zwei Keyframes. Das erste tritt bei `0%` auf (mit dem Alias `from`). Hier konfigurieren wir die {{cssxref("translate")}} Eigenschaft des Elements auf `150vw` (also über den rechten Rand des enthaltenen Elements hinaus), und die {{cssxref("scale")}} des Elements auf 200% (oder doppelt so groß wie seine Standardgrößeneinstellung im Inline-Format), sodass der Absatz doppelt so breit wie sein `<body>` enthaltender Block ist. Dadurch wird der erste Frame der Animation mit dem Header, der außerhalb des rechten Randes des Browserfensters gezeichnet wird, erstellt.

Das zweite Keyframe tritt bei `100%` auf (mit dem Alias `to`). Die {{cssxref("translate")}} Eigenschaft wird auf `0%` gesetzt und die {{cssxref("scale")}} des Elements auf `1`, was `100%` entspricht. Dadurch wird der Header nach Abschluss seiner Animation in seinem Standardzustand fertig, bündig an der linken Kante des Inhaltsbereichs.

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

Fügen wir dem Beispiel der vorherigen Animation ein weiteres Keyframe hinzu. Angenommen, wir wollen, dass Alices Name rosa wird und dann wächst und anschließend wieder auf seine ursprüngliche Größe und Farbe zurückschrumpft, während er sich von rechts nach links bewegt. Obwohl wir die {{cssxref("font-size")}} ändern könnten, beeinträchtigt das Ändern von Eigenschaften, die das Boxmodell betreffen, die Leistung negativ. Stattdessen umwickeln wir ihren Namen in einem {{htmlelement("span")}} und skalieren und weisen diesem separat eine Farbe zu. Das erfordert das Hinzufügen einer zweiten Animation, die nur den `<span>` betrifft:

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

Dies sagt dem Browser, dass der Name für die ersten und letzten 25% der Animation normal sein soll, aber in der Mitte rosa werden soll, während er skaliert wird und wieder zurück. Wir setzen die {{cssxref("display")}}-Eigenschaft der Spanne auf `inline-block`, da die `transform` Eigenschaften keinen Einfluss auf nicht-ersetzte {{Glossary("inline-level_content", "Inline-Level-Inhalte")}} haben.

> [!NOTE]
> Seite neu laden, um die Animation zu sehen.

{{EmbedLiveSample("Adding_another_keyframe","100%","250")}}

### Wiederholen der Animation

Um die Animation wiederholen zu lassen, verwenden Sie die {{cssxref("animation-iteration-count")}}-Eigenschaft, um anzuzeigen, wie oft die Animation wiederholt werden soll. In diesem Fall verwenden wir `infinite`, um die Animation unendlich oft wiederholen zu lassen:

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

### Die Animation vor und zurück bewegen lassen

Das hat die Animation wiederholt, aber es ist sehr seltsam, dass sie bei jedem Beginn der Animation zurück zum Start springt. Was wir wirklich wollen, ist, dass sie vor und zurück über den Bildschirm bewegt. Das lässt sich einfach erreichen, indem man {{cssxref("animation-direction")}} auf `alternate` setzt:

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

Sie können zusätzliche Kontrolle über Animationen erhalten — sowie nützliche Informationen über sie — indem Sie Animationsereignisse verwenden. Diese Ereignisse, die durch das [`AnimationEvent`](/de/docs/Web/API/AnimationEvent) Objekt dargestellt werden, können verwendet werden, um zu erkennen, wann Animationen starten, enden und eine neue Iteration beginnen. Jedes Ereignis enthält die Zeit, zu der es aufgetreten ist, sowie den Namen der Animation, die das Ereignis ausgelöst hat.

Wir werden das Gleittext-Beispiel modifizieren, um einige Informationen über jedes Animationsereignis auszugeben, wenn es auftritt, sodass wir sehen können, wie sie funktionieren.

Wir haben dieselbe Keyframe-Animation wie im vorherigen Beispiel hinzugefügt. Diese Animation wird 3 Sekunden dauern, "slide-in" genannt, sich 3 Mal wiederholen und bei jedem Mal eine alternative Richtung einnehmen. In den {{cssxref("@keyframes")}}, werden die Skalierung und die Übersetzung entlang der x-Achse manipuliert, um das Element über den Bildschirm gleiten zu lassen.

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

#### Hinzufügen der Animationsereignislistener

Wir werden JavaScript-Code verwenden, um auf alle drei möglichen Animationsereignisse zu lauschen. Dieser Code konfiguriert unsere Ereignislistener; wir rufen ihn auf, wenn das Dokument zum ersten Mal geladen wird, um alles einzurichten.

```js
const element = document.getElementById("watch-me");
element.addEventListener("animationstart", listener, false);
element.addEventListener("animationend", listener, false);
element.addEventListener("animationiteration", listener, false);

element.className = "slide-in";
```

Das ist ein ziemlich standardmäßiger Code; Sie können Details dazu finden, wie er funktioniert, in der Dokumentation zu [`eventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener). Das Letzte, was dieser Code macht, ist, die `class` des Elements, das wir animieren möchten, auf "slide-in" zu setzen; wir tun dies, um die Animation zu starten.

Warum? Weil das `animationstart`-Ereignis sofort feuert, sobald die Animation startet, und in unserem Fall passiert das, bevor unser Code ausgeführt wird. Daher starten wir die Animation selbst, indem wir die Klasse des Elements auf den Stil setzen, der animiert wird, nachdem der Fakt.

#### Empfang der Ereignisse

Die Ereignisse werden an die `listener()` Funktion geliefert, die unten gezeigt wird.

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

Dieser Code ist auch sehr einfach. Er prüft den [`event.type`](/de/docs/Web/API/Event/type), um zu bestimmen, welche Art von Animationsereignis aufgetreten ist, und fügt einen passenden Hinweis zur {{HTMLElement("ul")}} (ungeordnete Liste) hinzu, die wir verwenden, um diese Ereignisse zu protokollieren.

Die Ausgabe sieht, wenn alles gesagt und getan ist, etwa so aus:

- Gestartet: verstrichene Zeit ist 0
- Neuer Durchlauf startet bei Zeit 3.01200008392334
- Neuer Durchlauf startet bei Zeit 6.00600004196167
- Beendet: verstrichene Zeit ist 9.234000205993652

Beachten Sie, dass die Zeiten sehr nahe an, aber nicht genau den erwarteten Zeiten gemessen an den Timing-Einstellungen sind, die beim Konfigurieren der Animation festgelegt wurden. Beachten Sie auch, dass nach der letzten Iteration der Animation das `animationiteration`-Ereignis nicht gesendet wird; stattdessen wird das `animationend`-Ereignis gesendet.

Nur der Vollständigkeit halber hier das HTML, das den Seiteninhalt anzeigt, einschließlich der Liste, in die das Skript Informationen über die erhaltenen Ereignisse einfügt:

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

### Animation von `display` und `content-visibility`

Dieses Beispiel demonstriert, wie [`display`](/de/docs/Web/CSS/display) und [`content-visibility`](/de/docs/Web/CSS/content-visibility) animiert werden können. Dieses Verhalten ist nützlich für das Erstellen von Ein-/Ausstiegsanimationen, bei denen Sie beispielsweise einen Container mit `display: none` aus dem DOM entfernen möchten, aber möchten, dass er mit [`opacity`](/de/docs/Web/CSS/opacity) sanft ausblendet, anstatt sofort zu verschwinden.

Unterstützende Browser animieren `display` und `content-visibility` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Dies bedeutet im Allgemeinen, dass Eigenschaften zwischen zwei Werten zur Hälfte der Animation zwischen den beiden hin- und herspringen.

Es gibt jedoch eine Ausnahme, und zwar bei der Animation von/nach `display: none` oder `content-visibility: hidden` zu einem sichtbaren Wert. In diesem Fall wird der Browser zwischen den beiden Werten umschalten, sodass der animierte Inhalt für die gesamte Animationsdauer sichtbar ist.

Also zum Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display` Wert) animiert wird, wird der Wert zu `block` bei `0%` der Animationsdauer umschalten, sodass er die gesamte Zeit sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display` Wert) zu `none` animiert wird, wird der Wert bei `100%` der Animationsdauer zu `none` umschalten, sodass er die gesamte Zeit sichtbar ist.

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

Schließlich fügen wir ein wenig JavaScript hinzu, um Ereignislistener auszulösen, die die Animationen auslösen. Genauer gesagt, fügen wir die `fade-in` Klasse zu dem `<div>` hinzu, wenn wir es sichtbar machen wollen, und `fade-out`, wenn wir es unsichtbar machen möchten.

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
- [Verwenden von CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- [Verwendung der Web-Animations-API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
