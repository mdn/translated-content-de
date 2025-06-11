---
title: Verwenden von CSS-Animationen
short-title: Verwendung von Animationen
slug: Web/CSS/CSS_animations/Using_CSS_animations
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

**CSS-Animationen** ermöglichen es, Übergänge von einer CSS-Stilkonfiguration zu einer anderen zu animieren. Animationen bestehen aus zwei Komponenten: einem Stil, der die CSS-Animation beschreibt, und einer Reihe von Keyframes, die die Start- und Endzustände des Animationsstils sowie mögliche Zwischenstationen angeben.

Es gibt drei wesentliche Vorteile von CSS-Animationen gegenüber traditionellen skriptgesteuerten Animationstechniken:

1. Sie sind einfach zu verwenden für grundlegende Animationen; Sie können sie erstellen, ohne JavaScript kennen zu müssen.
2. Die Animationen laufen gut, selbst unter moderater Systemlast. Einfache Animationen können in JavaScript oft schlecht abschneiden. Die Rendering-Engine kann Techniken wie Frame-Skipping verwenden, um die Leistung so reibungslos wie möglich zu halten.
3. Wenn der Browser die Animationssequenz steuert, kann er die Leistung und Effizienz optimieren, indem er beispielsweise die Aktualisierungsfrequenz von Animationen reduziert, die in derzeit nicht sichtbaren Tabs laufen.

## Konfigurieren einer Animation

Um eine CSS-Animationssequenz zu erstellen, stylen Sie das Element, das Sie animieren möchten, mit der {{cssxref("animation")}}-Eigenschaft oder ihren Untereigenschaften. Damit können Sie das Timing, die Dauer und andere Details konfigurieren, wie die Animationssequenz ablaufen soll. Dies konfiguriert **nicht** das tatsächliche Erscheinungsbild der Animation, welches mit der {{cssxref("@keyframes")}}-At-Regel beschrieben wird, wie im Abschnitt [Definieren einer Animationssequenz mit Keyframes](#definieren_einer_animationssequenz_mit_keyframes) unten beschrieben.

Die Untereigenschaften der {{cssxref("animation")}}-Eigenschaft sind:

- {{cssxref("animation-composition")}}
  - : Gibt die {{Glossary("composite_operation", "Kompositionsoperation")}} an, die verwendet wird, wenn mehrere Animationen gleichzeitig dieselbe Eigenschaft beeinflussen. Diese Eigenschaft ist kein Teil der `animation`-Kurzschreibweise.
- {{cssxref("animation-delay")}}
  - : Gibt die Verzögerung zwischen dem Laden eines Elements und dem Start einer Animationssequenz an und ob die Animation sofort von ihrem Beginn oder irgendwo in der Animation starten soll.
- {{cssxref("animation-direction")}}
  - : Gibt an, ob die erste Iteration einer Animation vorwärts oder rückwärts sein soll und ob nachfolgende Iterationen die Richtung bei jedem Durchlauf alternieren oder zum Ausgangspunkt zurückkehren und wiederholen sollen.
- {{cssxref("animation-duration")}}
  - : Gibt die Zeitspanne an, in der eine Animation einen Zyklus abschließt.
- {{cssxref("animation-fill-mode")}}
  - : Gibt an, wie eine Animation ihre Stile auf das Ziel vor und nach dem Ablaufen anwendet.
    > [!NOTE]
    > Im Fall des Animation-[Forwards](/de/docs/Web/CSS/animation-fill-mode#forwards)-Fill-Modus verhalten sich animierte Eigenschaften, als wären sie in einem [`will-change`](/de/docs/Web/CSS/will-change)-Eigenschaftswert enthalten. Wenn während der Animation ein neuer Stapelkontext erstellt wurde, behält das Zielelement den Stapelkontext nach Abschluss der Animation bei.
- {{cssxref("animation-iteration-count")}}
  - : Gibt die Anzahl an, wie oft eine Animation wiederholt werden soll.
- {{cssxref("animation-name")}}
  - : Gibt den Namen der {{cssxref("@keyframes")}}-At-Regel an, die die Keyframes einer Animation beschreibt.
- {{cssxref("animation-play-state")}}
  - : Gibt an, ob eine Animationssequenz angehalten oder abgespielt werden soll.
- {{cssxref("animation-timeline")}}
  - : Gibt die Zeitleiste an, die verwendet wird, um den Fortschritt einer CSS-Animation zu steuern.
- {{cssxref("animation-timing-function")}}
  - : Gibt an, wie eine Animation durch Keyframes über Übergangskurven beschleunigt.

## Definieren einer Animationssequenz mit Keyframes

Nachdem Sie das Timing der Animation konfiguriert haben, müssen Sie das Erscheinungsbild der Animation definieren. Dies geschieht, indem Sie ein oder mehrere Keyframes unter Verwendung der {{cssxref("@keyframes")}}-At-Regel erstellen. Jedes Keyframe beschreibt, wie das animierte Element zu einem bestimmten Zeitpunkt während der Animationssequenz gerendert werden soll.

Da das Timing der Animation im CSS-Stil definiert ist, der die Animation konfiguriert, verwenden Keyframes ein {{cssxref("percentage")}}, um den Zeitpunkt während der Animationssequenz anzugeben, zu dem sie stattfinden. 0% gibt den ersten Moment der Animationssequenz an, während 100% den Endzustand der Animation anzeigt. Da diese beiden Zeiten so wichtig sind, haben sie spezielle Aliase: `from` und `to`. Beide sind optional. Wenn `from`/`0%` oder `to`/`100%` nicht angegeben ist, startet oder endet die Animation im Browser mit den berechneten Werten aller Attribute.

Sie können optional zusätzliche Keyframes einfügen, die Zwischenschritte zwischen dem Anfang und dem Ende der Animation beschreiben.

## Verwendung der Kurzschreibweise für Animationen

Die {{cssxref("animation")}}-Kurzschreibweise ist nützlich, um Platz zu sparen. Als Beispiel können einige der Regeln, die wir in diesem Artikel bisher verwendet haben:

```css
p {
  animation-duration: 3s;
  animation-name: slide-in;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

...durch die Verwendung der `animation`-Kurze Schreibweise ersetzt werden.

```css
p {
  animation: 3s infinite alternate slide-in;
}
```

Um mehr über die Reihenfolge zu erfahren, in der verschiedene Werte der Animations-Eigenschaften unter Verwendung der `animation`-Kurzschreibweise angegeben werden können, lesen Sie die {{cssxref("animation")}}-Referenzseite.

## Festlegen mehrerer Wert-Eigenschaften für Animationen

Die Langform-Eigenschaften für CSS-Animationen können mehrere Werte akzeptieren, die durch Kommas getrennt sind. Diese Funktion kann verwendet werden, wenn Sie mehrere Animationen in einer einzigen Regel anwenden und für jede der Animationen unterschiedliche Laufzeiten, Wiederholungszahlen usw. festlegen möchten. Lassen Sie uns einige schnelle Beispiele durchgehen, um die verschiedenen Permutationen zu erklären.

In diesem ersten Beispiel gibt es drei Dauer- und drei Wiederholungsanzahlwerte. Daher wird jeder Animation ein Wert für die Dauer und die Wiederholungszahl mit derselben Position wie der Animationsname zugewiesen. Die `fadeInOut`-Animation erhält eine Dauer von `2,5s` und eine Wiederholungsanzahl von `2`, und die `bounce`-Animation erhält eine Dauer von `1s` und eine Wiederholungsanzahl von `5`.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s, 1s;
animation-iteration-count: 2, 1, 5;
```

In diesem zweiten Beispiel werden drei Animationsnamen festgelegt, jedoch gibt es nur eine Dauer und eine Wiederholungsanzahl. In diesem Fall erhalten alle drei Animationen dieselbe Dauer und Wiederholungsanzahl.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 3s;
animation-iteration-count: 1;
```

In diesem dritten Beispiel werden drei Animationen angegeben, aber nur zwei Dauer- und Wiederholungsanzahlen. In solchen Fällen, in denen es nicht genügend Werte in der Liste gibt, um jedem Animation eine separate zuzuweisen, wird die Wertzuweisung vom ersten bis zum letzten Element der verfügbaren Liste durchlaufen und dann wieder zum ersten Element zurück. So erhält `fadeInOut` eine Dauer von `2,5s`, und `moveLeft300px` erhält eine Dauer von `5s`, was der letzte Wert in der Liste der Dauern ist. Die Dauerwertzuweisung wird nun auf den ersten Wert zurückgesetzt; `bounce` erhält daher eine Dauer von `2,5s`. Die Wiederholungsanzahlwerte (und alle anderen von Ihnen angegebenen Eigenschaftswerte) werden auf die gleiche Weise zugewiesen.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s;
animation-iteration-count: 2, 1;
```

Wenn die Diskrepanz in der Anzahl der Animationen und Animationswerte invertiert ist, sagen wir, es gibt fünf `animation-duration`-Werte für drei `animation-name`-Werte, dann werden die zusätzlichen oder nicht verwendeten Eigenschaftswerte, in diesem Fall zwei `animation-duration`-Werte, auf keine Animation angewendet und werden ignoriert.

## Beispiele

### Text über das Browserfenster gleiten lassen

Dieses einfache Beispiel stylt ein {{HTMLElement("p")}}-Element mit den Übergangseigenschaften {{cssxref("translate")}} und {{cssxref("scale")}}, sodass der Text von außerhalb des rechten Randes des Browserfensters hineinrutscht.

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

In diesem Beispiel gibt der Stil für das {{HTMLElement("p")}}-Element an, dass die Animation 3 Sekunden von Anfang bis Ende dauern soll, unter Verwendung der Eigenschaft {{cssxref("animation-duration")}}, und dass der Name der {{ cssxref("@keyframes")}}-At-Regel, die die Keyframes für die Animationssequenz definiert, `slide-in` ist.

In diesem Fall haben wir nur zwei Keyframes. Das erste tritt bei `0%` auf (als Alias `from` verwendet). Hier konfigurieren wir die {{cssxref("translate")}}-Eigenschaft des Elements auf `150vw` (das heißt, jenseits des rechten Randes des enthaltenden Elements), und die {{cssxref("scale")}} des Elements auf 200% (oder zweimal seine Standardgröße in der Zeile), wodurch der Absatz doppelt so breit wie sein `<body>`-Block ist. Dadurch wird der erste Frame der Animation so gezeichnet, dass die Überschrift außerhalb des rechten Randes des Browserfensters ist.

Das zweite Keyframe tritt bei `100%` auf (als Alias `to` verwendet). Die {{cssxref("translate")}}-Eigenschaft wird auf `0%` gesetzt und die {{cssxref("scale")}} des Elements wird auf `1` gesetzt, was `100%` bedeutet. Dies führt dazu, dass die Überschrift ihre Animation in ihrem Standardzustand, bündig am linken Rand des Inhaltsbereichs, beendet.

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

Lassen Sie uns der vorherigen Animation ein weiteres Keyframe hinzufügen. Nehmen wir an, wir möchten, dass Alices Name rosa wird und wächst und dann zu seiner ursprünglichen Größe und Farbe zurückkehrt, während er sich von rechts nach links bewegt. Während wir die {{cssxref("font-size")}} ändern könnten, beeinträchtigt das Ändern von Eigenschaften, die das Boxmodell beeinflussen, die Leistung negativ. Stattdessen umschließen wir ihren Namen mit einem {{htmlelement("span")}} und skalieren und weisen diesem separat eine Farbe zu. Das erfordert das Hinzufügen einer zweiten Animation, die nur das `<span>` betrifft:

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

Dies teilt dem Browser mit, dass der Name für die ersten und letzten 25% der Animation normal sein sollte, aber in der Mitte rosa wird und vergrößert und dann wieder verkleinert wird. Wir setzen die {{cssxref("display")}}-Eigenschaft des span auf `inline-block`, da die `transform`-Eigenschaften keinen Effekt auf nicht ersetzte {{Glossary("inline-level_content", "Inline-Inhaltselemente")}} haben.

> [!NOTE]
> Seite neu laden, um die Animation zu sehen.

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

### Die Animation hin und her bewegen

Das ließ die Animation wiederholen, aber es ist sehr seltsam, dass sie bei jedem Startpunkt der Animation zurückspringt. Was wir wirklich wollen, ist, dass sie sich hin und her über den Bildschirm bewegt. Das ist einfach zu erreichen, indem man {{cssxref("animation-direction")}} auf `alternate` setzt:

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

Sie können zusätzliche Kontrolle über Animationen erhalten — sowie nützliche Informationen über sie — indem Sie Animationsereignisse verwenden. Diese Ereignisse, die durch das [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)-Objekt repräsentiert werden, können verwendet werden, um zu erkennen, wann Animationen starten, enden und eine neue Iteration beginnen. Jedes Ereignis beinhaltet die Zeit, zu der es auftrat, sowie den Namen der Animation, die das Ereignis ausgelöst hat.

Wir werden das Beispiel der gleitenden Texte abändern, um einige Informationen über jedes Animationsereignis auszugeben, wenn es auftritt, damit wir sehen können, wie sie funktionieren.

Wir haben dieselbe Keyframe-Animation wie im vorherigen Beispiel. Diese Animation dauert 3 Sekunden, wird "slide-in" genannt, wird dreimal wiederholt und bewegt sich bei jeder Wiederholung in eine andere Richtung. Im {{cssxref("@keyframes")}} werden Skalierung und Übersetzung entlang der X-Achse manipuliert, um das Element über den Bildschirm gleiten zu lassen.

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

Wir werden JavaScript-Code verwenden, um alle drei möglichen Animationsereignisse zu überwachen. Dieser Code konfiguriert unsere Event-Listener; wir rufen ihn auf, wenn das Dokument zuerst geladen wird, um alles einzurichten.

```js
const element = document.getElementById("watch-me");
element.addEventListener("animationstart", listener, false);
element.addEventListener("animationend", listener, false);
element.addEventListener("animationiteration", listener, false);

element.className = "slide-in";
```

Dies ist ziemlich standardmäßiger Code; Sie können Details darüber finden, wie er funktioniert, in der Dokumentation zu [`eventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener). Das letzte, was dieser Code tut, ist das `class` auf dem Element, das wir animieren werden, auf "slide-in" zu setzen; wir tun dies, um die Animation zu starten.

Warum? Weil das `animationstart`-Ereignis sofort ausgelöst wird, wenn die Animation startet, und in unserem Fall passiert das, bevor unser Code läuft. Also starten wir die Animation manuell, indem wir die Klasse des Elements nachträglich auf den Stil setzen, der animiert wird.

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

Auch dieser Code ist sehr einfach. Er schaut sich den [`event.type`](/de/docs/Web/API/Event/type) an, um zu bestimmen, welches Animationsereignis aufgetreten ist, und fügt dann eine entsprechende Notiz zur {{HTMLElement("ul")}}- (nicht geordnete Liste) hinzu, die wir verwenden, um diese Ereignisse zu protokollieren.

Die Ausgabe, wenn alles gesagt und getan ist, sieht so aus:

- Gestartet: verstrichene Zeit ist 0
- Neuer Loop gestartet um Zeit 3.01200008392334
- Neuer Loop gestartet um Zeit 6.00600004196167
- Beendet: verstrichene Zeit ist 9.234000205993652

Beachten Sie, dass die Zeiten sehr nah an, aber nicht genau die erwarteten sind, die durch das Timing festgelegt wurden, als die Animation konfiguriert wurde. Beachten Sie auch, dass nach der letzten Iteration der Animation das `animationiteration`-Ereignis nicht gesendet wird; stattdessen wird das `animationend`-Ereignis gesendet.

Nur der Vollständigkeit halber: Hier ist das HTML, das den Seiteninhalt anzeigt, einschließlich der Liste, in die das Skript Informationen über die empfangenen Ereignisse einfügt:

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

### Anzeigen und Inhalts-Sichtbarkeit animieren

Dieses Beispiel zeigt, wie [`display`](/de/docs/Web/CSS/display) und [`content-visibility`](/de/docs/Web/CSS/content-visibility) animiert werden können. Dieses Verhalten ist nützlich, um Ein- und Ausstiegsanimationen zu erstellen, bei denen Sie beispielsweise ein Container mit `display: none` aus dem DOM entfernen möchten, aber es mit [`opacity`](/de/docs/Web/CSS/opacity) anstelle des sofortigen Verschwindens sanft ausblenden lassen möchten.

Unterstützende Browser animieren `display` und `content-visibility` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Dies bedeutet im Allgemeinen, dass Eigenschaften zwischen zwei Werten in der Hälfte der Animation hin und her blättern.

Es gibt jedoch eine Ausnahme, nämlich wenn von/to `display: none` oder `content-visibility: hidden` zu einem sichtbaren Wert animiert wird. In diesem Fall wird der Browser zwischen den beiden Werten umschalten, sodass der animierte Inhalt die gesamte Animationsdauer über sichtbar ist.

Ein Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, schaltet der Wert bei `0%` der Animationsdauer zu `block`, sodass er während der gesamten Zeit sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, schaltet der Wert bei `100%` der Animationsdauer zu `none`, sodass er während der gesamten Zeit sichtbar ist.

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

Beachten Sie die Aufnahme der Eigenschaft `display` in die Keyframe-Animationen.

#### JavaScript

Zum Schluss fügen wir ein bisschen JavaScript hinzu, um Event-Listener einzurichten, um die Animationen auszulösen. Insbesondere fügen wir die `fade-in`-Klasse zum `<div>` hinzu, wenn wir es erscheinen lassen möchten, und `fade-out`, wenn wir es verschwinden lassen möchten.

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
