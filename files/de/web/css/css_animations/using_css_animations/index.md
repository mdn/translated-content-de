---
title: Verwenden von CSS-Animationen
slug: Web/CSS/CSS_animations/Using_CSS_animations
l10n:
  sourceCommit: 50c8e290f11b061bbf2267e1a3279f28180a5fcb
---

{{CSSRef}}

**CSS-Animationen** ermöglichen es, Übergänge von einer CSS-Stilkonfiguration zu einer anderen zu animieren. Animationen bestehen aus zwei Komponenten: einem Stil, der die CSS-Animation beschreibt, und einem Satz von Keyframes, die den Start- und Endzustand des Animationsstils sowie mögliche Zwischenstationen angeben.

Es gibt drei wesentliche Vorteile von CSS-Animationen gegenüber traditionellen skriptgesteuerten Animationstechniken:

1. Sie sind für einfache Animationen leicht zu verwenden; Sie können sie erstellen, ohne JavaScript zu kennen.
2. Die Animationen laufen gut, selbst bei moderater Systembelastung. Einfache Animationen können in JavaScript oft schlecht ausgeführt werden. Die Rendering-Engine kann Frame-Skipping und andere Techniken verwenden, um die Leistung so fließend wie möglich zu halten.
3. Wenn der Browser die Animationssequenz steuert, kann er die Leistung und Effizienz optimieren, indem er beispielsweise die Aktualisierungsfrequenz von Animationen reduziert, die in derzeit nicht sichtbaren Tabs laufen.

## Konfigurieren einer Animation

Um eine CSS-Animationssequenz zu erstellen, gestalten Sie das zu animierende Element mit der {{cssxref("animation")}}-Eigenschaft oder deren Untereigenschaften. Dadurch können Sie das Timing, die Dauer und andere Details konfigurieren, wie die Animationssequenz ablaufen soll. Dies konfiguriert **nicht** das tatsächliche Erscheinungsbild der Animation, welches mithilfe der {{cssxref("@keyframes")}}-At-Regel erfolgt, wie im Abschnitt [Animationssequenz mithilfe von Keyframes definieren](#animationssequenz_mithilfe_von_keyframes_definieren) beschrieben.

Die Untereigenschaften der {{cssxref("animation")}}-Eigenschaft sind:

- {{cssxref("animation-composition")}}
  - : Gibt die {{Glossary("composite_operation", "Zusammensetzungsoperation")}} an, die verwendet werden soll, wenn mehrere Animationen gleichzeitig dieselbe Eigenschaft beeinflussen. Diese Eigenschaft ist nicht Teil der `animation`-Kurzschreibweise.
- {{cssxref("animation-delay")}}
  - : Gibt die Verzögerung zwischen dem Laden eines Elements und dem Start einer Animationssequenz an und ob die Animation sofort von Anfang an oder mitten in der Animation beginnen soll.
- {{cssxref("animation-direction")}}
  - : Gibt an, ob die erste Iteration einer Animation vorwärts oder rückwärts sein soll und ob nachfolgende Iterationen die Richtung bei jedem Durchlauf der Sequenz ändern oder zum Startpunkt zurückkehren und erneut ablaufen sollen.
- {{cssxref("animation-duration")}}
  - : Gibt die Dauer an, in der eine Animation einen Zyklus abschließt.
- {{cssxref("animation-fill-mode")}}
  - : Gibt an, wie eine Animation ihre Stile auf das Ziel anwendet, bevor und nachdem sie ausgeführt wurde.
    > [!NOTE]
    > Im Fall des Animationsfüllmodus [forwards](/de/docs/Web/CSS/animation-fill-mode#forwards) verhalten sich animierte Eigenschaften, als wären sie in einem Satz[`will-change`](/de/docs/Web/CSS/will-change)-Eigenschaftswerte enthalten. Wenn während der Animation ein neuer Stapelkontext erstellt wurde, behält das Zielelement den Stapelkontext nach Abschluss der Animation bei.
- {{cssxref("animation-iteration-count")}}
  - : Gibt an, wie oft eine Animation wiederholt werden soll.
- {{cssxref("animation-name")}}
  - : Gibt den Namen der {{cssxref("@keyframes")}}-At-Regel an, die die Keyframes einer Animation beschreibt.
- {{cssxref("animation-play-state")}}
  - : Gibt an, ob eine Animationssequenz angehalten oder abgespielt werden soll.
- {{cssxref("animation-timeline")}}
  - : Gibt die Zeitleiste an, die zur Steuerung des Fortschritts einer CSS-Animation verwendet wird.
- {{cssxref("animation-timing-function")}}
  - : Gibt an, wie eine Animation durch Keyframes übergeht, indem Beschleunigungskurven festgelegt werden.

## Animationssequenz mithilfe von Keyframes definieren

Nachdem Sie das Timing der Animation konfiguriert haben, müssen Sie das Erscheinungsbild der Animation definieren. Dies erfolgt durch die Erstellung eines oder mehrerer Keyframes mit der {{cssxref("@keyframes")}}-At-Regel. Jedes Keyframe beschreibt, wie das animierte Element zu einem bestimmten Zeitpunkt während der Animationssequenz dargestellt werden soll.

Da das Timing der Animation im CSS-Stil definiert ist, der die Animation konfiguriert, verwenden Keyframes ein {{cssxref("percentage")}}, um die Zeit in der Animationssequenz anzugeben, zu der sie stattfinden. 0% gibt den ersten Moment der Animationssequenz an, während 100% den Endzustand der Animation anzeigen. Da diese beiden Zeiten so wichtig sind, haben sie spezielle Aliase: `from` und `to`. Beide sind optional. Wenn `from`/`0%` oder `to`/`100%` nicht angegeben wird, beginnt oder endet der Browser die Animation mit den berechneten Werten aller Attribute.

Sie können optional zusätzliche Keyframes einschließen, die Zwischenstufen zwischen dem Start und dem Ende der Animation beschreiben.

## Verwenden der Animation-Kurzschreibweise

Die {{cssxref("animation")}}-Kurzschreibweise eignet sich hervorragend, um Platz zu sparen. Beispielsweise können einige der Regeln, die wir in diesem Artikel verwendet haben:

```css
p {
  animation-duration: 3s;
  animation-name: slide-in;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

...durch die Verwendung der `animation`-Kurzschreibweise ersetzt werden.

```css
p {
  animation: 3s infinite alternate slide-in;
}
```

Um mehr über die Reihenfolge zu erfahren, in der verschiedene AnimationsEigenschaften mithilfe der `animation`-Kurzschreibweise angegeben werden können, siehe die {{cssxref("animation")}}-Referenzseite.

## Festlegen mehrerer AnimationsEigenschaftenwerte

Die CSS-AnimationsLangschreibEigenschaften können mehrere Werte akzeptieren, die durch Kommas getrennt sind. Diese Funktion kann verwendet werden, wenn Sie mehrere Animationen in einer einzigen Regel anwenden und für jede der Animationen unterschiedliche Dauern, Wiederholungsanzahlen usw. festlegen möchten. Lassen Sie uns einige schnelle Beispiele betrachten, um die verschiedenen Permutationen zu erklären.

Im ersten Beispiel gibt es drei Dauer- und drei Wiederholungswerte. Jede Animation wird einem Dauer- und Wiederholungswert mit der gleichen Position wie der Animationsname zugeordnet. Die `fadeInOut`-Animation erhält eine Dauer von `2.5s` und eine Wiederholungsanzahl von `2`, und die `bounce`-Animation erhält eine Dauer von `1s` und eine Wiederholungsanzahl von `5`.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s, 1s;
animation-iteration-count: 2, 1, 5;
```

Im zweiten Beispiel sind drei Animationsnamen festgelegt, aber es gibt nur eine Dauer und Wiederholungsanzahl. In diesem Fall erhalten alle drei Animationen die gleiche Dauer und Wiederholungsanzahl.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 3s;
animation-iteration-count: 1;
```

Im dritten Beispiel sind drei Animationen angegeben, aber nur zwei Dauern und Wiederholungsanzahlen. In solchen Fällen, in denen nicht genügend Werte in der Liste vorhanden sind, um jeder Animation einen separaten zuzuweisen, wird die Wertzuweisung von dem ersten bis zum letzten Element in der verfügbaren Liste durchgeführt und dann zum ersten Element zurückgängig gemacht. Daher erhält `fadeInOut` eine Dauer von `2.5s`, und `moveLeft300px` erhält eine Dauer von `5s`, was der letzte Wert in der Liste der DauerWerte ist. Die Zuordnung der DauerWerte wird nun auf den ersten Wert zurückgesetzt; `bounce` erhält daher eine Dauer von `2.5s`. Die Wiederholungswerte (und alle anderen von Ihnen angegebenen Eigenschaftswerte) werden auf die gleiche Weise zugewiesen.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s;
animation-iteration-count: 2, 1;
```

Wenn das Missverhältnis in der Anzahl der Animationen und AnimationsEigenschaftswerte umgekehrt ist, dass beispielsweise fünf `animation-duration`-Werte für drei `animation-name`-Werte vorhanden sind, dann gelten die zusätzlichen oder ungenutzten AnimationsEigenschaftswerte, in diesem Fall zwei `animation-duration`-Werte, nicht für eine Animation und werden ignoriert.

## Beispiele

> [!NOTE]
> Einige ältere Browser (vor 2017) benötigen möglicherweise Präfixe; die Live-Beispiele, auf die Sie klicken können, um sie in Ihrem Browser zu sehen, enthalten die `-webkit`-präfixierte Syntax.

### Text über das Browserfenster gleiten lassen

Dieses grundlegende Beispiel stylt ein {{HTMLElement("p")}}-Element mit den Übergangseigenschaften {{cssxref("translate")}} und {{cssxref("scale")}}, sodass der Text von außerhalb des rechten Rands des Browserfensters hereinrutscht.

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

In diesem Beispiel gibt der Stil für das {{HTMLElement("p")}}-Element an, dass die Animation 3 Sekunden dauern soll, um von Anfang bis Ende ausgeführt zu werden, mithilfe der {{cssxref("animation-duration")}}-Eigenschaft und dass der Name der {{ cssxref("@keyframes")}}-At-Regel, die die Keyframes für die Animationssequenz definiert, `slide-in` ist.

In diesem Fall haben wir nur zwei Keyframes. Das erste tritt bei `0%` (unter Verwendung des Alias `from`) auf. Hier konfigurieren wir die {{cssxref("translate")}}-Eigenschaft des Elements auf `150vw` (das heißt, über den rechten Rand des enthaltenen Elements hinaus), und die {{cssxref("scale")}} des Elements auf 200% (oder doppelt so groß wie seine Standard-Inlinegröße), wodurch der Absatz doppelt so breit wie sein `<body>`-enthältender Block ist. Dies führt dazu, dass der erste Frame der Animation den Header über den rechten Rand des Browserfensters hinauszeichnet.

Das zweite Keyframe tritt bei `100%` (unter Verwendung des Alias `to`) auf. Die {{cssxref("translate")}}-Eigenschaft ist auf `0%` gesetzt und die {{cssxref("scale")}} des Elements ist auf `1` gesetzt, was `100%` entspricht. Dies führt dazu, dass der Header seine Animation in seinem Standardzustand abschließt, bündig am linken Rand des Inhaltsbereichs.

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

Fügen wir der Animation des vorherigen Beispiels noch ein weiteres Keyframe hinzu. Angenommen, wir möchten, dass Alice's Name rosa wird und wächst und dann wieder auf seine ursprüngliche Größe und Farbe schrumpft, während er sich von rechts nach links bewegt. Zwar könnten wir die {{cssxref("font-size")}} ändern, doch wirkt sich das Ändern von Eigenschaften, die das Boxmodell betreffen, negativ auf die Leistung aus. Stattdessen wickeln wir ihren Namen in ein {{htmlelement("span")}}, skalieren und weisen separat eine Farbe zu. Das erfordert das Hinzufügen einer zweiten Animation, die nur das `<span>` betrifft:

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

Wir haben ein {{htmlelement("span")}} um "Alice" hinzugefügt:

```html
<p>
  The Caterpillar and <span>Alice</span> looked at each other for some time in
  silence: at last the Caterpillar took the hookah out of its mouth, and
  addressed her in a languid, sleepy voice.
</p>
```

Dies teilt dem Browser mit, dass der Name die ersten und letzten 25% der Animation normal sein soll, aber in der Mitte rosa wird, während er skaliert wird und zurückgeht. Wir setzen die {{cssxref("display")}}-Eigenschaft des Spans auf `inline-block`, da die `transform`-Eigenschaften nicht ersetzte {{Glossary("inline-level_content", "Inline-Level-Inhalte")}} nicht beeinflussen.

> [!NOTE]
> Laden Sie die Seite neu, um die Animation zu sehen.

{{EmbedLiveSample("Adding_another_keyframe","100%","250")}}

### Wiederholen der Animation

Um die Animation wiederholen zu lassen, verwenden Sie die {{cssxref("animation-iteration-count")}}-Eigenschaft, um anzugeben, wie oft die Animation wiederholt werden soll. In diesem Fall verwenden wir `infinite`, um die Animation unbegrenzt wiederholen zu lassen:

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

Das ließ sie sich wiederholen, aber es ist sehr seltsam, sie jedes Mal an den Start springen zu sehen, wenn sie beginnt, zu animieren. Was wir wirklich wollen, ist, dass sie sich hin und her über den Bildschirm bewegt. Das lässt sich leicht durch Einstellen von {{cssxref("animation-direction")}} auf `alternate` erreichen:

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

Sie können zusätzliche Kontrolle über Animationen sowie nützliche Informationen darüber erhalten, indem Sie Animationsereignisse verwenden. Diese Ereignisse, dargestellt durch das [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)-Objekt, können verwendet werden, um zu erkennen, wann Animationen starten, enden und eine neue Iteration beginnen. Jedes Ereignis enthält die Zeit, zu der es aufgetreten ist, sowie den Namen der Animation, die das Ereignis ausgelöst hat.

Wir werden das Beispiel des gleitenden Textes modifizieren, um einige Informationen über jedes Animationsereignis auszugeben, wenn es auftritt, sodass wir einen Einblick in ihre Funktionsweise erhalten.

Wir haben die gleiche Keyframe-Animation wie im vorherigen Beispiel enthalten. Diese Animation dauert 3 Sekunden, wird "slide-in" genannt, wiederholt sich 3 Mal und bewegt sich bei jedem Mal in einer alternativen Richtung. In den {{cssxref("@keyframes")}} werden die Skala und die Übersetzung entlang der X-Achse manipuliert, um das Element über den Bildschirm gleiten zu lassen.

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

Wir werden JavaScript-Code verwenden, um alle drei möglichen Animationsereignisse zu überwachen. Dieser Code konfiguriert unsere Ereignis-Listener; wir rufen ihn auf, wenn das Dokument zum ersten Mal geladen wird, um die Dinge einzurichten.

```js
const element = document.getElementById("watch-me");
element.addEventListener("animationstart", listener, false);
element.addEventListener("animationend", listener, false);
element.addEventListener("animationiteration", listener, false);

element.className = "slide-in";
```

Dies ist ziemlich standardmäßiger Code; Sie können Details dazu in der Dokumentation zu [`eventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) erhalten. Das Letzte, was dieser Code tut, ist das Setzen der `class` auf das Element, das wir animieren werden, auf "slide-in"; wir tun dies, um die Animation zu starten.

Warum? Weil das `animationstart`-Ereignis sofort ausgelöst wird, sobald die Animation beginnt, und in unserem Fall passiert das, bevor unser Code ausgeführt wird. Also starten wir die Animation selbst, indem wir die Klasse des Elements auf den Stil setzen, der nachträglich animiert wird.

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

Auch dieser Code ist sehr einfach. Er betrachtet den [`event.type`](/de/docs/Web/API/Event/type), um zu bestimmen, welche Art von Animationsereignis aufgetreten ist, und fügt dann eine entsprechende Notiz zu dem {{HTMLElement("ul")}} (ungeordnete Liste) hinzu, die wir zum Protokollieren dieser Ereignisse verwenden.

Der Ausgang sieht letztendlich etwa so aus:

- Angefangen: die verstrichene Zeit beträgt 0
- Neuer Loop begann zur Zeit 3.01200008392334
- Neuer Loop begann zur Zeit 6.00600004196167
- Beendet: Die verstrichene Zeit beträgt 9.234000205993652

Beachten Sie, dass die Zeiten den erwarteten Angabezeiten, die beim Konfigurieren der Animation festgelegt wurden, sehr nahe sind, aber nicht genau entsprechen. Beachten Sie auch, dass nach der letzten Iteration der Animation das `animationiteration`-Ereignis nicht gesendet wird; stattdessen wird das `animationend`-Ereignis gesendet.

Nur der Vollständigkeit halber ist hier das HTML, das den Seiteninhalt darstellt, einschließlich der Liste, in die das Skript Informationen über die empfangenen Ereignisse einfügt:

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

### Animieren von Anzeige und Inhalts-Sichtbarkeit

Dieses Beispiel zeigt, wie [`display`](/de/docs/Web/CSS/display) und [`content-visibility`](/de/docs/Web/CSS/content-visibility) animiert werden können. Dieses Verhalten ist nützlich, um Ein- und Austrittsanimationen zu erstellen, bei denen Sie beispielsweise einen Container aus dem DOM mit `display: none` entfernen, aber möchten, dass er mit [`opacity`](/de/docs/Web/CSS/opacity) sanft ausblendet, anstatt sofort zu verschwinden.

Unterstützende Browser animieren `display` und `content-visibility` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Dies bedeutet im Allgemeinen, dass Eigenschaften während der Animation etwa nach 50% der Animation zwischen zwei Werten umschalten.

Es gibt jedoch eine Ausnahme, wenn von `display: none` oder `content-visibility: hidden` zu einem sichtbaren Wert animiert wird. In diesem Fall wird der Browser zwischen die beiden Werte wechseln, sodass der animierte Inhalt für die gesamte Animationsdauer sichtbar bleibt.

Beispielsweise:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) wechselt der Wert bei `0%` der Animationsdauer zu `block`, damit er während der gesamten Animation sichtbar bleibt.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` wechselt der Wert bei `100%` der Animationsdauer zu `none`, sodass er während der gesamten Animation sichtbar bleibt.

#### HTML

Das HTML enthält zwei {{htmlelement("p")}}-Elemente mit einem {{htmlelement("div")}} dazwischen, welches wir von `display` `none` zu `block` animieren werden.

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

Schließlich fügen wir ein wenig JavaScript hinzu, um Ereignis-Listener einzurichten, die die Animationen auslösen. Konkret fügen wir die `fade-in`-Klasse dem `<div>` hinzu, wenn wir möchten, dass es erscheint, und `fade-out`, wenn wir möchten, dass es verschwindet.

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
- [Verwenden der Web Animations API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
