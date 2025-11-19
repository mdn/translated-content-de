---
title: Verwendung von CSS-Animationen
short-title: Verwendung von Animationen
slug: Web/CSS/Guides/Animations/Using
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

**CSS-Animationen** ermöglichen es, Übergänge von einer CSS-Stilkonfiguration zu einer anderen zu animieren. Animationen bestehen aus zwei Komponenten: einem Stil, der die CSS-Animation beschreibt, und einer Reihe von Keyframes, die den Start- und Endzustand des Animationsstils sowie mögliche Zwischenstationen angeben.

Es gibt drei entscheidende Vorteile von CSS-Animationen gegenüber herkömmlichen skriptgesteuerten Animationstechniken:

1. Sie sind einfach zu verwenden für grundlegende Animationen; Sie können sie erstellen, ohne JavaScript kennen zu müssen.
2. Die Animationen laufen gut, selbst bei moderater Systemlast. Einfache Animationen können in JavaScript oft schlecht abschneiden. Die Rendering-Engine kann Methoden wie Frame-Skipping und andere Techniken verwenden, um die Leistung so geschmeidig wie möglich zu halten.
3. Wenn der Browser die Animationssequenz steuert, kann er die Leistung und Effizienz optimieren, indem er zum Beispiel die Aktualisierungsfrequenz von Animationen reduziert, die in nicht sichtbaren Tabs ausgeführt werden.

## Konfigurieren einer Animation

Um eine CSS-Animationssequenz zu erstellen, stylen Sie das Element, das Sie animieren möchten, mit der {{cssxref("animation")}}-Eigenschaft oder deren Untereigenschaften. Damit können Sie das Timing, die Dauer und andere Details konfigurieren, wie die Animationssequenz ablaufen soll. Dies konfiguriert **nicht** das tatsächliche Erscheinungsbild der Animation, das mit der {{cssxref("@keyframes")}}-At-Regel, wie im Abschnitt [Definieren einer Animationssequenz mit Keyframes](#definieren_einer_animationssequenz_mit_keyframes) beschrieben, erfolgt.

Die Untereigenschaften der {{cssxref("animation")}}-Eigenschaft sind:

- {{cssxref("animation-composition")}}
  - : Gibt die {{Glossary("composite_operation", "Kompositionsoperation")}} an, die verwendet werden soll, wenn mehrere Animationen gleichzeitig dieselbe Eigenschaft beeinflussen. Diese Eigenschaft ist nicht Teil der `animation`-Kurznotation.
- {{cssxref("animation-delay")}}
  - : Gibt die Verzögerung zwischen dem Laden eines Elements und dem Start einer Animationssequenz an und ob die Animation sofort von ihrem Anfang oder teilweise durch die Animation starten soll.
- {{cssxref("animation-direction")}}
  - : Gibt an, ob die erste Wiederholung einer Animation vorwärts oder rückwärts ausgeführt werden soll und ob nachfolgende Wiederholungen die Richtung bei jedem Durchlauf alternieren sollen oder ob sie zum Startpunkt zurücksetzen und wiederholen sollen.
- {{cssxref("animation-duration")}}
  - : Gibt die Zeitlänge an, in der eine Animation einen Zyklus abschließt.
- {{cssxref("animation-fill-mode")}}
  - : Gibt an, wie eine Animation Stile auf ihr Ziel vor und nach ihrer Ausführung anwendet.
    > [!NOTE]
    > Im Fall des [forwards](/de/docs/Web/CSS/Reference/Properties/animation-fill-mode#forwards) Füllmodus der Animation verhalten sich animierte Eigenschaften, als ob sie in einem Satz [`will-change`](/de/docs/Web/CSS/Reference/Properties/will-change)-Eigenschaftswert enthalten wären. Wenn während der Animation ein neuer Stapelkontext erstellt wurde, behält das Zielelement den Stapelkontext bei, nachdem die Animation abgeschlossen ist.
- {{cssxref("animation-iteration-count")}}
  - : Gibt die Anzahl der Wiederholungen an, die eine Animation ausführen soll.
- {{cssxref("animation-name")}}
  - : Gibt den Namen der {{cssxref("@keyframes")}}-At-Regel an, die die Keyframes einer Animation beschreibt.
- {{cssxref("animation-play-state")}}
  - : Gibt an, ob eine Animationssequenz pausiert oder abgespielt werden soll.
- {{cssxref("animation-timeline")}}
  - : Gibt die Zeitleiste an, die verwendet wird, um den Fortschritt einer CSS-Animation zu steuern.
- {{cssxref("animation-timing-function")}}
  - : Gibt an, wie eine Animation durch Keyframes übergeht, indem Beschleunigungskurven festgelegt werden.

## Definieren einer Animationssequenz mit Keyframes

Nachdem Sie das Timing der Animation konfiguriert haben, müssen Sie das Erscheinungsbild der Animation definieren. Dies geschieht durch das Festlegen eines oder mehrerer Keyframes mit der {{cssxref("@keyframes")}}-At-Regel. Jedes Keyframe beschreibt, wie das animierte Element zu einem bestimmten Zeitpunkt während der Animationssequenz dargestellt werden soll.

Da das Timing der Animation im CSS-Stil definiert ist, der die Animation konfiguriert, verwenden Keyframes ein {{cssxref("percentage")}}, um den Zeitpunkt während der Animationssequenz anzugeben, zu dem sie stattfinden. 0% gibt den ersten Moment der Animationssequenz an, während 100% den Endzustand der Animation anzeigen. Da diese beiden Zeitpunkte so wichtig sind, haben sie spezielle Aliasnamen: `from` und `to`. Beide sind optional. Wenn `from`/`0%` oder `to`/`100%` nicht angegeben sind, startet oder beendet der Browser die Animation unter Verwendung der berechneten Werte aller Attribute.

Optional können Sie zusätzliche Keyframes einfügen, die Zwischenstufen zwischen dem Anfang und dem Ende der Animation beschreiben.

## Verwendung der Animation-Kurznotation

Die {{cssxref("animation")}}-Kurznotation ist nützlich, um Platz zu sparen. Ein Beispiel hierfür: Einige der Regeln, die wir in diesem Artikel verwendet haben:

```css
p {
  animation-duration: 3s;
  animation-name: slide-in;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

...könnten durch die Verwendung der `animation`-Kurznotation ersetzt werden.

```css
p {
  animation: 3s infinite alternate slide-in;
}
```

Um mehr über die Reihenfolge zu erfahren, in der verschiedene Animationswerte mit der `animation`-Kurznotation angegeben werden können, sehen Sie auf der {{cssxref("animation")}}-Referenzseite nach.

## Festlegen mehrerer Animationswerte

Die CSS-Animation-Einzeleigenschaften können mehrere Werte akzeptieren, die durch Kommas getrennt sind. Diese Funktion kann verwendet werden, wenn Sie mehrere Animationen in einer einzigen Regel anwenden und unterschiedliche Dauern, Wiederholungszahlen usw. für jede der Animationen festlegen möchten. Schauen wir uns einige schnelle Beispiele an, um die verschiedenen Permutationen zu erklären.

Im ersten Beispiel gibt es drei Dauer- und drei Wiederholungswertangaben. Jede Animation erhält eine Dauer- und Wiederholungszahl, die die gleiche Position wie der Animationsname hat. Die `fadeInOut`-Animation erhält eine Dauer von `2.5s` und eine Wiederholungszahl von `2`, und die `bounce`-Animation erhält eine Dauer von `1s` und eine Wiederholungszahl von `5`.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s, 1s;
animation-iteration-count: 2, 1, 5;
```

Im zweiten Beispiel sind drei Animationsnamen festgelegt, es gibt jedoch nur eine Dauer und eine Wiederholungszahl. In diesem Fall erhalten alle drei Animationen dieselbe Dauer und Wiederholungszahl.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 3s;
animation-iteration-count: 1;
```

Im dritten Beispiel sind drei Animationen angegeben, jedoch nur zwei Dauern und Wiederholungszahlen. In solchen Fällen, in denen nicht genug Werte in der Liste vorhanden sind, um jeder Animation einen separaten zuzuweisen, durchläuft die Wertzuweisung die Liste der verfügbaren Werte von Anfang bis Ende und beginnt dann wieder von vorne. So erhält `fadeInOut` eine Dauer von `2.5s`, und `moveLeft300px` erhält eine Dauer von `5s`, was der letzte Wert in der Liste der Dauerwerte ist. Die Dauerwertzuweisung wird dann zurückgesetzt; `bounce` erhält daher erneut eine Dauer von `2.5s`. Die Wiederholungswerte (und alle anderen von Ihnen angegebenen Eigenschaftswerte) werden auf die gleiche Weise zugewiesen.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s;
animation-iteration-count: 2, 1;
```

Wenn die Anzahl der Animationen und der Animationswerte umgekehrt ist, also beispielsweise fünf `animation-duration`-Werte für drei `animation-name`-Werte vorhanden sind, dann gelten die zusätzlichen oder ungenutzten Animationswerte, in diesem Fall zwei `animation-duration`-Werte, nicht für eine Animation und werden ignoriert.

## Beispiele

### Text über das Browserfenster gleiten lassen

Dieses grundlegende Beispiel stylt ein {{HTMLElement("p")}}-Element mit den {{cssxref("translate")}} und {{cssxref("scale")}} Übergangseigenschaften, sodass der Text von der rechten Kante des Browserfensters aus herein gleitet.

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

In diesem Beispiel gibt der Stil für das {{HTMLElement("p")}}-Element an, dass die Animation 3 Sekunden benötigt, um von Anfang bis zum Ende auszuführen, unter Verwendung der {{cssxref("animation-duration")}}-Eigenschaft, und dass der Name der {{cssxref("@keyframes")}}-At-Regel, die die Keyframes für die Animationssequenz definiert, `slide-in` ist.

In diesem Fall haben wir nur zwei Keyframes. Das erste tritt bei `0%` (unter Verwendung des Alias `from`) auf. Hier konfigurieren wir die {{cssxref("translate")}}-Eigenschaft des Elements bei `150vw` (das heißt, jenseits des rechten Rands des enthaltenen Elements), und die {{cssxref("scale")}} des Elements auf 200% (oder zwei Mal so breit wie seine standardmäßige Inline-Größe), wodurch der Absatz doppelt so breit wie sein `<body>` enthaltender Block wird. Dies bewirkt, dass der erste Frame der Animation die Überschrift außerhalb des rechten Rands des Browserfensters zeichnet.

Das zweite Keyframe tritt bei `100%` (unter Verwendung des Alias `to`) auf. Die {{cssxref("translate")}}-Eigenschaft ist auf `0%` eingestellt und die {{cssxref("scale")}} des Elements auf `1`, was `100%` ist. Dies bewirkt, dass die Überschrift ihre Animation im Standardzustand, bündig mit der linken Kante des Inhaltsbereichs, abschließt.

```html
<p>
  The Caterpillar and Alice looked at each other for some time in silence: at
  last the Caterpillar took the hookah out of its mouth, and addressed her in a
  languid, sleepy voice.
</p>
```

> [!NOTE]
> Laden Sie die Seite neu, um die Animation zu sehen.

{{EmbedLiveSample("Making_text_slide_across_the_browser_window", "100%", "250")}}

### Hinzufügen einer weiteren Keyframe-Animation

Fügen wir eine weitere Keyframe zur Animation aus dem vorherigen Beispiel hinzu. Angenommen, wir möchten, dass Alices Name pink wird und wächst, dann zurück auf seine Originalgröße und Farbe schrumpft, während er sich von rechts nach links bewegt. Während wir die {{cssxref("font-size")}} ändern könnten, wirkt sich das Ändern von Eigenschaften, die das Boxmodell beeinflussen, negativ auf die Leistung aus. Stattdessen umschließen wir ihren Namen mit einem {{htmlelement("span")}}, und skalieren und weisen dieser gesondert eine Farbe zu. Das erfordert, eine zweite Animation nur für das `<span>` hinzuzufügen:

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

Dies teilt dem Browser mit, dass der Name für die ersten und letzten 25% der Animation normal bleiben soll, aber zwischendurch pink werden und dabei größer und kleiner werden soll. Wir setzen die {{cssxref("display")}}-Eigenschaft des Spans auf `inline-block`, da die `transform`-Eigenschaften keinen Einfluss auf nicht ersetzte {{Glossary("inline-level_content", "inline-level content")}} haben.

> [!NOTE]
> Laden Sie die Seite neu, um die Animation zu sehen.

{{EmbedLiveSample("Adding_another_keyframe", "100%", "250")}}

### Animation wiederholen

Um die Animation sich selbst wiederholen zu lassen, verwenden Sie die {{cssxref("animation-iteration-count")}}-Eigenschaft, um anzugeben, wie oft die Animation wiederholt werden soll. In diesem Fall verwenden wir `infinite`, um die Animation unendlich oft wiederholen zu lassen:

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

{{EmbedLiveSample("Repeating_the_animation", "100%", "250")}}

### Animation hin- und herbewegen

Das lässt die Animation sich wiederholen, aber es ist sehr merkwürdig, wenn sie jedes Mal, wenn sie zu animieren beginnt, zu ihrem Anfang springt. Was wir wirklich wollen, ist, dass sie sich auf dem Bildschirm hin- und herbewegt. Das ist leicht zu erreichen, indem {{cssxref("animation-direction")}} auf `alternate` gesetzt wird:

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

{{EmbedLiveSample("Making_the_animation_move_back_and_forth", "100%", "250")}}

### Verwendung von Animationsereignissen

Sie können zusätzliche Kontrolle über Animationen erhalten — sowie nützliche Informationen über sie — indem Sie Animationsereignisse verwenden. Diese Ereignisse, die durch das [`AnimationEvent`](/de/docs/Web/API/AnimationEvent) Objekt repräsentiert werden, können verwendet werden, um zu erkennen, wann Animationen beginnen, enden und eine neue Wiederholung starten. Jedes Ereignis beinhaltet die Zeit, zu der es aufgetreten ist, sowie den Namen der Animation, die das Ereignis ausgelöst hat.

Wir werden das Beispiel des gleitenden Texts modifizieren, um einige Informationen über jedes Animationsereignis auszugeben, wenn es auftritt, damit wir sehen können, wie sie arbeiten.

Wir haben die gleiche Keyframe-Animation wie im vorherigen Beispiel eingebaut. Diese Animation wird 3 Sekunden dauern, "slide-in" genannt werden, sich 3 mal wiederholen und jedes Mal in einer alternativen Richtung ablaufen. In den {{cssxref("@keyframes")}} werden die Skala und die Translation entlang der X-Achse manipuliert, um das Element über den Bildschirm gleiten zu lassen.

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

Wir werden JavaScript-Code verwenden, um allen drei möglichen Animationsereignissen zuzuhören. Dieser Code konfiguriert unsere Ereignis-Listener; wir rufen ihn auf, wenn das Dokument zunächst geladen wird, um die Dinge einzurichten.

```js
const element = document.getElementById("watch-me");
element.addEventListener("animationstart", listener);
element.addEventListener("animationend", listener);
element.addEventListener("animationiteration", listener);

element.className = "slide-in";
```

Das ist ziemlich standardmäßiger Code; Details dazu, wie er funktioniert, finden Sie in der Dokumentation zu [`eventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener). Das Letzte, was dieser Code tut, ist, das `class` des Elements, das wir animieren werden, auf "slide-in" zu setzen; wir tun dies, um die Animation zu starten.

Warum? Weil das `animationstart`-Ereignis auslöst, sobald die Animation startet, und in unserem Fall passiert das, bevor unser Code läuft. Also starten wir die Animation selbst, indem wir das Klasse des Elements nachträglich auf den Stil setzen, der animiert wird.

#### Empfang der Ereignisse

Die Ereignisse werden an die `listener()`-Funktion übergeben, die unten gezeigt wird.

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

Auch dieser Code ist sehr einfach. Er betrachtet den [`event.type`](/de/docs/Web/API/Event/type), um zu bestimmen, welche Art von Animationsereignis aufgetreten ist, und fügt dann eine entsprechende Notiz zur {{HTMLElement("ul")}} (ungeordnete Liste) hinzu, die wir verwenden, um diese Ereignisse zu protokollieren.

Das Ergebnis sieht am Ende etwa so aus:

- Gestartet: Die verstrichene Zeit ist 0
- Ein neuer Loop startete bei Zeit 3.01200008392334
- Ein neuer Loop startete bei Zeit 6.00600004196167
- Beendet: Die verstrichene Zeit ist 9.234000205993652

Beachten Sie, dass die Zeiten sehr nahe, aber nicht genau denen entsprechen, die gemäß dem Timing erwartet werden, das bei der Konfiguration der Animation festgelegt wurde. Beachten Sie auch, dass nach der letzten Wiederholung der Animation kein `animationiteration`-Ereignis gesendet wird; stattdessen wird das `animationend`-Ereignis gesendet.

Nur der Vollständigkeit halber hier der HTML-Code, der den Seiteninhalt anzeigt, einschließlich der Liste, in die das Skript Informationen über die empfangenen Ereignisse einfügt:

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

Dieses Beispiel zeigt, wie [`display`](/de/docs/Web/CSS/Reference/Properties/display) und [`content-visibility`](/de/docs/Web/CSS/Reference/Properties/content-visibility) animiert werden können. Dieses Verhalten ist nützlich, um Ein- und Ausblenden-Animationen zu erstellen, bei denen Sie beispielsweise einen Container aus dem DOM mit `display: none` entfernen möchten, ihn aber sanft mit [`opacity`](/de/docs/Web/CSS/Reference/Properties/opacity) ausblenden wollen, anstatt ihn sofort verschwinden zu lassen.

Unterstützende Browser animieren `display` und `content-visibility` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete). Dies bedeutet im Allgemeinen, dass Eigenschaften während der Animation zwischen zwei Werten 50% der Zeit hin- und herwechseln.

Es gibt jedoch eine Ausnahme, die auftritt, wenn von/zu `display: none` oder `content-visibility: hidden` zu einem sichtbaren Wert animiert wird. In diesem Fall wechselt der Browser zwischen den beiden Werten, sodass der animierte Inhalt während der gesamten Animationsdauer angezeigt wird.

Beispielsweise:

- Bei der Animation von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) wechselt der Wert bei `0%` der Animationsdauer zu `block`, sodass er während der gesamten Animation sichtbar ist.
- Bei der Animation von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` wechselt der Wert bei `100%` der Animationsdauer zu `none`, sodass er während der gesamten Animation sichtbar ist.

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

Abschließend fügen wir etwas JavaScript hinzu, um Ereignis-Listener hinzuzufügen, die die Animationen auslösen. Konkret fügen wir die `fade-in`-Klasse zum `<div>` hinzu, wenn wir wollen, dass es erscheint, und `fade-out`, wenn wir wollen, dass es verschwindet.

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

Der Code wird wie folgt wiedergegeben:

{{ EmbedLiveSample("Animating display and content-visibility", "100%", "350") }}

## Siehe auch

- [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
- [CSS-Übergänge verwenden](/de/docs/Web/CSS/Guides/Transitions/Using)
- [Web Animations API verwenden](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
