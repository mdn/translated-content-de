---
title: Verwendung von CSS-Animationen
short-title: Verwendung von Animationen
slug: Web/CSS/CSS_animations/Using_CSS_animations
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**CSS-Animationen** ermöglichen es, Übergänge von einer CSS-Stilkonfiguration zu einer anderen zu animieren. Animationen bestehen aus zwei Komponenten: einem Stil, der die CSS-Animation beschreibt, und einer Reihe von Keyframes, die die Start- und Endzustände des Animationsstils sowie mögliche Zwischenhalte angeben.

Es gibt drei wesentliche Vorteile von CSS-Animationen gegenüber herkömmlichen skriptbasierten Animationstechniken:

1. Sie sind einfach für grundlegende Animationen zu verwenden; Sie können sie erstellen, ohne JavaScript kennen zu müssen.
2. Die Animationen laufen gut, selbst bei moderater Systembelastung. Einfache Animationen können in JavaScript oft schlecht abschneiden. Die Rendering-Engine kann Techniken wie das Überspringen von Frames verwenden, um die Leistung so flüssig wie möglich zu halten.
3. Wenn der Browser die Animationssequenz kontrolliert, kann er die Leistung und Effizienz optimieren, indem er beispielsweise die Aktualisierungsfrequenz von Animationen in derzeit nicht sichtbaren Tabs reduziert.

## Konfiguration einer Animation

Um eine CSS-Animationssequenz zu erstellen, stylen Sie das Element, das Sie animieren möchten, mit der {{cssxref("animation")}}-Eigenschaft oder ihren Untereigenschaften. Dies ermöglicht es Ihnen, das Timing, die Dauer und andere Details zu konfigurieren, wie die Animationssequenz ablaufen soll. Dies konfiguriert **nicht** das tatsächliche Aussehen der Animation, das mit der {{cssxref("@keyframes")}}-Regel wie im Abschnitt [Definieren einer Animationssequenz mit Keyframes](#definieren_einer_animationssequenz_mit_keyframes) unten beschrieben, erfolgt.

Die Untereigenschaften der {{cssxref("animation")}}-Eigenschaft sind:

- {{cssxref("animation-composition")}}
  - : Gibt die {{Glossary("composite_operation", "Kompositionsoperation")}} an, die verwendet wird, wenn mehrere Animationen gleichzeitig dieselbe Eigenschaft beeinflussen. Diese Eigenschaft ist nicht Teil der `animation`-Kurzformeigenschaft.
- {{cssxref("animation-delay")}}
  - : Gibt die Verzögerung zwischen dem Laden eines Elements und dem Start einer Animationssequenz an und ob die Animation sofort von Anfang an oder teilweise starten soll.
- {{cssxref("animation-direction")}}
  - : Gibt an, ob die erste Iteration einer Animation vorwärts oder rückwärts erfolgen soll und ob nachfolgende Iterationen die Richtung bei jedem Durchlauf der Sequenz ändern oder zum Startpunkt zurückgesetzt und wiederholt werden sollen.
- {{cssxref("animation-duration")}}
  - : Gibt die Zeitspanne an, in der eine Animation einen Zyklus abschließt.
- {{cssxref("animation-fill-mode")}}
  - : Gibt an, wie eine Animation ihre Stile auf ihr Ziel vor und nach ihrem Ablauf anwendet.
    > [!NOTE]
    > Im Fall des Animations-[forwards](/de/docs/Web/CSS/animation-fill-mode#forwards) Fill-Modus verhalten sich animierte Eigenschaften, als wären sie in einem Satz [`will-change`](/de/docs/Web/CSS/will-change) Eigenschaftswert enthalten. Wurde während der Animation ein neuer Stacking-Kontext erstellt, behält das Zielelement diesen Stacking-Kontext nach Abschluss der Animation bei.
- {{cssxref("animation-iteration-count")}}
  - : Gibt die Anzahl der Wiederholungen einer Animation an.
- {{cssxref("animation-name")}}
  - : Gibt den Namen der {{cssxref("@keyframes")}}-Regel an, die die Keyframes einer Animation beschreibt.
- {{cssxref("animation-play-state")}}
  - : Gibt an, ob eine Animationssequenz angehalten oder abgespielt werden soll.
- {{cssxref("animation-timeline")}}
  - : Gibt die Zeitleiste an, die zur Steuerung des Fortschritts einer CSS-Animation verwendet wird.
- {{cssxref("animation-timing-function")}}
  - : Gibt an, wie eine Animation durch Keyframes übergeht, indem Beschleunigungskurven definiert werden.

## Definieren einer Animationssequenz mit Keyframes

Nachdem Sie das Timing der Animation konfiguriert haben, müssen Sie das Erscheinungsbild der Animation definieren. Dies erfolgt durch die Festlegung von einem oder mehreren Keyframes mit der {{cssxref("@keyframes")}}-Regel. Jedes Keyframe beschreibt, wie das animierte Element zu einem bestimmten Zeitpunkt während der Animationssequenz gerendert werden soll.

Da das Timing der Animation im CSS-Stil definiert ist, der die Animation konfiguriert, verwenden Keyframes eine {{cssxref("percentage")}}, um den Zeitpunkt während der Animationssequenz anzugeben, zu dem sie stattfinden. 0 % zeigt den ersten Moment der Animationssequenz an, während 100 % den Endzustand der Animation anzeigt. Da diese beiden Zeiten so wichtig sind, haben sie spezielle Aliase: `from` und `to`. Beide sind optional. Wenn `from`/`0%` oder `to`/`100%` nicht angegeben ist, startet oder beendet der Browser die Animation unter Verwendung der berechneten Werte aller Attribute.

Zusätzliche Keyframes können optional hinzugefügt werden, um Zwischenschritte zwischen dem Anfang und dem Ende der Animation zu beschreiben.

## Verwendung der Kurzform der Animation

Die {{cssxref("animation")}}-Kurzform ist nützlich, um Platz zu sparen. Ein Beispiel sind einige der Regeln, die wir in diesem Artikel verwendet haben:

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

Um mehr über die Reihenfolge zu erfahren, in der verschiedene Animationszeigeigenschaftswerte mit der `animation`-Kurzform angegeben werden können, besuchen Sie die {{cssxref("animation")}}-Referenzseite.

## Festlegen mehrerer Animationszieleigenschaftswerte

Die CSS-Animationsuntereigenschaften können mehrere Werte, getrennt durch Kommas, akzeptieren. Diese Funktion kann verwendet werden, wenn Sie mehrere Animationen in einer einzigen Regel anwenden und unterschiedliche Dauer, Iterationszähler usw. für jede der Animationen festlegen möchten. Schauen wir uns einige kurze Beispiele an, um die verschiedenen Permutationen zu erklären.

Im ersten Beispiel gibt es drei Werte für die Dauer und den Iterationszähler. Jede Animation wird einer Dauer und einem Iterationszähler mit der gleichen Position wie der Animationsname zugewiesen. Die `fadeInOut`-Animation wird mit einer Dauer von `2.5s` und einem Iterationszähler von `2` zugewiesen, und der `bounce`-Animation wird eine Dauer von `1s` und ein Iterationszähler von `5` zugewiesen.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s, 1s;
animation-iteration-count: 2, 1, 5;
```

Im zweiten Beispiel sind drei Animationsnamen festgelegt, es gibt jedoch nur eine Dauer und einen Iterationszähler. In diesem Fall erhalten alle drei Animationen die gleiche Dauer und den gleichen Iterationszähler.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 3s;
animation-iteration-count: 1;
```

Im dritten Beispiel sind drei Animationen angegeben, jedoch nur zwei Dauer- und Iterationszähler. In solchen Fällen, in denen nicht genügend Werte in der Liste vorhanden sind, um jeder Animation einen separaten zuzuweisen, erfolgt die Wertzuweisung vom ersten bis zum letzten Element in der verfügbaren Liste und erfolgt dann wieder vom ersten Element. Somit erhält `fadeInOut` eine Dauer von `2.5s`, und `moveLeft300px` erhält eine Dauer von `5s`, was der letzte Wert in der Liste der Dauerwerte ist. Die Wertzuweisung für die Dauer wird jetzt auf den ersten Wert zurückgesetzt; `bounce` erhält daher eine Dauer von `2.5s`. Die Iterationszählerwerte (und alle anderen Property-Werte, die Sie angeben) werden auf die gleiche Weise zugewiesen.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s;
animation-iteration-count: 2, 1;
```

Wenn der Unterschied in der Anzahl der Animationen und der Animationszeigeigenschaftswerte umgekehrt ist, sagen wir, es gibt fünf `animation-duration`-Werte für drei `animation-name`-Werte, dann gelten die zusätzlichen oder unbenutzten Animationszeigeigenschaftswerte, in diesem Fall zwei `animation-duration`-Werte, nicht für eine Animation und werden ignoriert.

## Beispiele

### Text über das Browserfenster gleiten lassen

Dieses grundlegende Beispiel stylt ein {{HTMLElement("p")}}-Element mit den {{cssxref("translate")}}- und {{cssxref("scale")}}-Übergangseigenschaften, sodass der Text von außerhalb des rechten Rands des Browserfensters hereinrutscht.

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

In diesem Beispiel gibt der Stil für das {{HTMLElement("p")}}-Element an, dass die Animation 3 Sekunden dauern soll, bis sie von Anfang bis Ende ausgeführt wird, unter Verwendung der {{cssxref("animation-duration")}}-Eigenschaft und dass der Name der {{cssxref("@keyframes")}}-Regel, die die Keyframes für die Animationssequenz definiert, `slide-in` ist.

In diesem Fall haben wir nur zwei Keyframes. Das erste tritt bei `0%` auf (mit dem Alias `from`). Hier konfigurieren wir die {{cssxref("translate")}}-Eigenschaft des Elements auf `150vw` (d.h. über den rechten Rand des enthaltenden Elements hinaus) und die {{cssxref("scale")}} des Elements auf 200 % (oder zweimal so groß wie die standardmäßige Inline-Größe), wodurch der Absatz doppelt so breit wie sein `<body>`-block ist. Dadurch wird der erste Frame der Animation so gezeichnet, dass die Überschrift über den rechten Rand des Browserfensters hinausragt.

Das zweite Keyframe tritt bei `100%` auf (mit dem Alias `to`). Die {{cssxref("translate")}}-Eigenschaft ist auf `0%` gesetzt und die {{cssxref("scale")}} des Elements ist auf `1` gesetzt, was `100%` entspricht. Dadurch endet die Überschrift in ihrem Standardzustand, bündig am linken Rand des Inhaltsbereichs.

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

### Ein weiteres Keyframe zur Animation hinzufügen

Fügen wir dem vorherigen Beispiel ein weiteres Keyframe zur Animation hinzu. Nehmen wir an, wir möchten, dass Alices Name pink wird und wächst und dann wieder auf seine ursprüngliche Größe und Farbe schrumpft, während er sich von rechts nach links bewegt. Während wir die {{cssxref("font-size")}}-Eigenschaft ändern könnten, beeinträchtigt das Ändern von Eigenschaften, die das Box-Modell betreffen, negativ die Leistung. Stattdessen wickeln wir ihren Namen in ein {{htmlelement("span")}} und skalieren und weisen eine Farbe separat zu. Dies erfordert, dass eine zweite Animation hinzugefügt wird, die nur das `<span>` betrifft:

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

Der vollständige Code sieht nun wie folgt aus:

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

Dies gibt dem Browser an, dass der Name für die ersten und letzten 25 % der Animation normal sein sollte, jedoch in der Mitte pink und skaliert erscheinen und wieder zurückverwandelt werden soll. Wir setzen die {{cssxref("display")}}-Eigenschaft des Spans auf `inline-block`, da die `transform`-Eigenschaften keinen Effekt auf nicht ersetzte {{Glossary("inline-level_content", "Inline-Level-Inhalte")}} haben.

> [!NOTE]
> Seite neu laden, um die Animation zu sehen.

{{EmbedLiveSample("Adding_another_keyframe","100%","250")}}

### Die Animation wiederholen

Um die Animation wiederholen zu lassen, verwenden Sie die {{cssxref("animation-iteration-count")}}-Eigenschaft, um anzugeben, wie oft die Animation wiederholt werden soll. In diesem Fall verwenden wir `infinite`, um die Animation unendlich oft zu wiederholen:

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

### Die Animation vor- und zurückbewegen

Das hat sie wiederholt, aber es ist sehr seltsam, dass sie bei jedem Start wieder zum Anfang springt. Was wir wirklich wollen, ist, dass sie sich hin und her über den Bildschirm bewegt. Das erreichen Sie leicht, indem Sie {{cssxref("animation-direction")}} auf `alternate` setzen:

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

Sie können zusätzliche Kontrolle über Animationen erhalten — sowie nützliche Informationen über sie —, indem Sie Animationsereignisse verwenden. Diese Ereignisse, die durch das [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)-Objekt dargestellt werden, können genutzt werden, um zu erkennen, wann Animationen starten, abschließen und eine neue Iteration beginnen. Jedes Ereignis enthält den Zeitpunkt, zu dem es aufgetreten ist, sowie den Namen der Animation, die das Ereignis ausgelöst hat.

Wir werden das Schiebtextebeispiel so modifizieren, dass bei jedem Animationsereignis, wenn es auftritt, einige Informationen ausgegeben werden, sodass wir sehen können, wie sie funktionieren.

Wir haben dieselbe Keyframe-Animation wie im vorherigen Beispiel eingebaut. Diese Animation wird 3 Sekunden dauern, "slide-in" genannt, sich dreimal wiederholen und sich in jeder Runde in einer alternierenden Richtung bewegen. In den {{cssxref("@keyframes")}} werden die Skalierung und die Übersetzung entlang der x-Achse manipuliert, um das Element über den Bildschirm gleiten zu lassen.

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

Wir verwenden JavaScript-Code, um alle drei möglichen Animationsereignisse zu überwachen. Dieser Code konfiguriert unsere Event-Listener; wir rufen ihn auf, wenn das Dokument zuerst geladen wird, um die Dinge zu konfigurieren.

```js
const element = document.getElementById("watch-me");
element.addEventListener("animationstart", listener, false);
element.addEventListener("animationend", listener, false);
element.addEventListener("animationiteration", listener, false);

element.className = "slide-in";
```

Dieser Code ist recht standardmäßig; Sie können in der Dokumentation zu [`eventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) Details darüber erhalten, wie er funktioniert. Das Letzte, was dieser Code bewirkt, ist, dass die `class` des Elements, das wir animieren werden, auf "slide-in" gesetzt wird; wir machen dies, um die Animation zu starten.

Warum? Weil das `animationstart`-Ereignis ausgelöst wird, sobald die Animation startet, und in unserem Fall passiert das, bevor unser Code ausgeführt wird. Also starten wir die Animation selbst, indem wir nachträglich die Klasse des Elements auf den Stil setzen, der animiert wird.

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

Auch dieser Code ist sehr einfach. Er schaut auf den [`event.type`](/de/docs/Web/API/Event/type), um festzustellen, welche Art von Animationsereignis aufgetreten ist, und fügt der {{HTMLElement("ul")}} (ungeordneten Liste), die wir zum Protokollieren dieser Ereignisse verwenden, eine entsprechende Notiz hinzu.

Die Ausgabe sieht, wenn alles gesagt und getan ist, ungefähr so aus:

- Gestartet: Verstrichene Zeit beträgt 0
- Neuer Loop gestartet um Zeit 3.01200008392334
- Neuer Loop gestartet um Zeit 6.00600004196167
- Beendet: Verstrichene Zeit beträgt 9.234000205993652

Beachten Sie, dass die Zeiten sehr nahe an den erwarteten Werten liegen, aber nicht exakt den bei der Konfiguration der Animation festgelegten Zeitpunkten entsprechen. Beachten Sie außerdem, dass nach der letzten Iteration der Animation das `animationiteration`-Ereignis nicht gesendet wird; stattdessen wird das `animationend`-Ereignis gesendet.

Nur der Vollständigkeit halber, hier der HTML-Code, der den Seiteninhalt anzeigt, einschließlich der Liste, in die das Skript Informationen über die empfangenen Ereignisse einfügt:

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

### Animation von display und content-visibility

Dieses Beispiel zeigt, wie [`display`](/de/docs/Web/CSS/display) und [`content-visibility`](/de/docs/Web/CSS/content-visibility) animiert werden können. Dieses Verhalten ist nützlich, um Ein-/Ausgangsanimationen zu erstellen, bei denen Sie beispielsweise einen Container mit `display: none` aus dem DOM entfernen möchten, jedoch, dass er sanft mit [`opacity`](/de/docs/Web/CSS/opacity) ausfaded, anstatt sofort zu verschwinden.

Unterstützende Browser animieren `display` und `content-visibility` mit einer Variation des [diskreten Animationstyp](/de/docs/Web/CSS/CSS_animated_properties#discrete). Dies bedeutet im Allgemeinen, dass Eigenschaften 50 % der animierten Dauer zwischen zwei Werten wechseln.

Es gibt jedoch eine Ausnahme, die tritt ein, wenn `display: none` oder `content-visibility: hidden` zu einem sichtbaren Wert oder von einem sichtbaren Wert animiert wird. In diesem Fall wird der Browser zwischen den beiden Werten wechseln, sodass der animierte Inhalt während der gesamten Animationsdauer angezeigt wird.

Zum Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert, wechselt der Wert zu `block` bei `0%` der Animationsdauer, sodass er die gesamte Zeit sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert, wechselt der Wert zu `none` bei `100%` der Animationsdauer, sodass er die gesamte Zeit sichtbar ist.

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

Beachten Sie die Aufnahme der `display`-Eigenschaft in die Keyframe-Animationen.

#### JavaScript

Abschließend fügen wir ein bisschen JavaScript hinzu, um Ereignis-Listener einzurichten, die die Animationen auslösen. Insbesondere fügen wir die `fade-in`-Klasse dem `<div>` hinzu, wenn wir möchten, dass es erscheint, und `fade-out`, wenn wir möchten, dass es verschwindet.

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
- [Verwendung der Webanimations-API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
