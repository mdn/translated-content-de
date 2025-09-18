---
title: Verwendung von CSS-Animationen
short-title: Verwendung von Animationen
slug: Web/CSS/CSS_animations/Using_CSS_animations
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

**CSS-Animationen** ermöglichen den Übergang von einer CSS-Stilkonfiguration zu einer anderen. Animationen bestehen aus zwei Komponenten: einem Stil, der die CSS-Animation beschreibt, und einem Satz von Keyframes, die den Anfangs- und Endzustand des Animationsstils sowie mögliche Zwischenpunkte angeben.

Es gibt drei Hauptvorteile von CSS-Animationen gegenüber traditionellen, skriptgesteuerten Animationstechniken:

1. Sie sind einfach für grundlegende Animationen zu verwenden; Sie können sie erstellen, ohne JavaScript kennen zu müssen.
2. Die Animationen laufen gut, selbst bei moderater Systembelastung. Einfache Animationen können in JavaScript oft schlecht performen. Die Rendering-Engine kann Techniken wie Frame-Skipping verwenden, um die Leistung so flüssig wie möglich zu halten.
3. Wenn der Browser die Animationssequenz steuert, kann er die Leistung und Effizienz optimieren, indem er z. B. die Aktualisierungsfrequenz von Animationen in nicht sichtbaren Tabs reduziert.

## Konfigurieren einer Animation

Um eine CSS-Animationssequenz zu erstellen, gestalten Sie das zu animierende Element mit der {{cssxref("animation")}}-Eigenschaft oder deren Untereigenschaften. Dies ermöglicht Ihnen, das Timing, die Dauer und andere Details der Abfolge der Animationssequenz zu konfigurieren. Dies konfiguriert **nicht** das tatsächliche Erscheinungsbild der Animation, welches mit der {{cssxref("@keyframes")}}-Regel konfiguriert wird, wie im Abschnitt [Definieren einer Animationssequenz mit Keyframes](#definieren_einer_animationssequenz_mit_keyframes) unten beschrieben.

Die Untereigenschaften der {{cssxref("animation")}}-Eigenschaft sind:

- {{cssxref("animation-composition")}}
  - : Legt die {{Glossary("composite_operation", "Zusammensetzungsoperation")}} fest, die verwendet wird, wenn mehrere Animationen gleichzeitig dieselbe Eigenschaft beeinflussen. Diese Eigenschaft ist nicht Teil der `animation`-Kurzform-Eigenschaft.
- {{cssxref("animation-delay")}}
  - : Bestimmt die Verzögerung zwischen dem Laden eines Elements und dem Beginn einer Animationssequenz und ob die Animation sofort von Anfang an oder in der Mitte beginnen soll.
- {{cssxref("animation-direction")}}
  - : Bestimmt, ob die erste Iteration einer Animation vorwärts oder rückwärts sein soll und ob nachfolgende Iterationen die Richtung bei jeder Ausführung wechseln oder zum Ausgangspunkt zurückkehren und wiederholen sollen.
- {{cssxref("animation-duration")}}
  - : Gibt die Zeitspanne an, in der eine Animation einen Zyklus abschließt.
- {{cssxref("animation-fill-mode")}}
  - : Bestimmt, wie eine Animation Stile auf ihr Ziel vor und nach ihrer Ausführung anwendet.
    > [!NOTE]
    > Im Fall des Animations-[forwards](/de/docs/Web/CSS/animation-fill-mode#forwards)-Fill-Modus verhalten sich animierte Eigenschaften, als ob sie in einer Menge von [`will-change`](/de/docs/Web/CSS/will-change)-Eigenschaftswerten enthalten wären. Wenn während der Animation ein neuer Stacking-Kontext erstellt wurde, behält das Ziel-Element nach Beendigung der Animation den Stacking-Kontext.
- {{cssxref("animation-iteration-count")}}
  - : Gibt an, wie oft eine Animation wiederholt werden soll.
- {{cssxref("animation-name")}}
  - : Gibt den Namen der {{cssxref("@keyframes")}}-Regel an, die die Keyframes einer Animation beschreibt.
- {{cssxref("animation-play-state")}}
  - : Gibt an, ob eine Animationssequenz pausiert oder abgespielt werden soll.
- {{cssxref("animation-timeline")}}
  - : Bestimmt die Zeitleiste, die verwendet wird, um den Fortschritt einer CSS-Animation zu steuern.
- {{cssxref("animation-timing-function")}}
  - : Bestimmt, wie eine Animation durch Keyframes über Beschleunigungskurven hinweg übergeht.

## Definieren einer Animationssequenz mit Keyframes

Nachdem Sie das Timing der Animation konfiguriert haben, müssen Sie das Erscheinungsbild der Animation definieren. Dies geschieht durch das Erstellen von einem oder mehreren Keyframes mit der {{cssxref("@keyframes")}}-Regel. Jedes Keyframe beschreibt, wie das animierte Element zu einem bestimmten Zeitpunkt während der Animationssequenz gerendert werden soll.

Da das Timing der Animation im CSS-Stil definiert wird, der die Animation konfiguriert, verwenden Keyframes eine {{cssxref("percentage")}}, um die Zeit während der Animationssequenz anzugeben, zu der sie stattfinden. 0 % gibt den ersten Moment der Animationssequenz an, während 100 % den Endzustand der Animation angibt. Da diese beiden Zeiten so wichtig sind, haben sie spezielle Aliase: `from` und `to`. Beide sind optional. Wenn `from`/`0%` oder `to`/`100%` nicht angegeben ist, startet oder beendet der Browser die Animation mit den berechneten Werten aller Attribute.

Sie können optional zusätzliche Keyframes einfügen, die Zwischenschritte zwischen dem Anfang und dem Ende der Animation beschreiben.

## Verwendung der Kurzform `animation`

Die {{cssxref("animation")}}-Kurzform ist nützlich, um Platz zu sparen. Zum Beispiel können einige der Regeln, die wir im Verlauf dieses Artikels verwendet haben:

```css
p {
  animation-duration: 3s;
  animation-name: slide-in;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

... durch die Verwendung der `animation`-Kurzform ersetzt werden.

```css
p {
  animation: 3s infinite alternate slide-in;
}
```

Um mehr über die Reihenfolge zu erfahren, in der verschiedene Animations-Eigenschaftswerte mit der `animation`-Kurzform angegeben werden können, sehen Sie sich die {{cssxref("animation")}}-Referenzseite an.

## Festlegen mehrerer Animations-Eigenschaftswerte

Die langen CSS-Animations-Eigenschaften können mehrere Werte akzeptieren, die durch Kommas getrennt sind. Diese Funktion kann verwendet werden, wenn Sie mehrere Animationen in einer einzigen Regel anwenden und unterschiedliche Dauern, Iterationszahlen usw. für jede der Animationen festlegen möchten. Sehen wir uns einige schnelle Beispiele an, um die verschiedenen Permutationen zu erklären.

Im ersten Beispiel gibt es drei Dauer- und drei Iterationszahlwerte. So wird jeder Animation ein Dauer- und ein Iterationszahlenwert mit der gleichen Position wie der Animationsname zugewiesen. Der `fadeInOut`-Animation wird eine Dauer von `2.5s` und eine Iterationszahl von `2` zugewiesen, und der `bounce`-Animation wird eine Dauer von `1s` und eine Iterationszahl von `5` zugewiesen.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s, 1s;
animation-iteration-count: 2, 1, 5;
```

Im zweiten Beispiel sind drei Animationsnamen festgelegt, aber es gibt nur eine Dauer und Iterationszahl. In diesem Fall erhalten alle drei Animationen die gleiche Dauer und Iterationszahl.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 3s;
animation-iteration-count: 1;
```

Im dritten Beispiel sind drei Animationen angegeben, aber es gibt nur zwei Dauern und Iterationszahlen. In solchen Fällen, in denen nicht genügend Werte in der Liste vorhanden sind, um jedem Animation eine separate zuzuweisen, erfolgt die Wertzuweisung ausgehend vom ersten bis zum letzten Element in der verfügbaren Liste und dann wieder zurück zum ersten Element. So erhält `fadeInOut` eine Dauer von `2.5s`, und `moveLeft300px` erhält eine Dauer von `5s`, was der letzte Wert in der Liste der Dauerwerte ist. Die Zuordnung der Dauerwerte wird nun auf den ersten Wert zurückgesetzt; daher erhält `bounce` eine Dauer von `2.5s`. Die Iterationszahlen (und alle anderen angegebenen Eigenschaftswerte) werden in der gleichen Weise zugewiesen.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s;
animation-iteration-count: 2, 1;
```

Wenn das Ungleichgewicht in der Anzahl der Animationen und Animations-Eigenschaftswerte umgekehrt ist, sagen wir es gibt fünf `animation-duration`-Werte für drei `animation-name`-Werte, dann gelten die zusätzlichen oder unbenutzten Animations-Eigenschaftswerte, in diesem Fall zwei `animation-duration`-Werte, für keine Animation und werden ignoriert.

## Beispiele

### Text über das Browser-Fenster gleiten lassen

Dieses einfache Beispiel stylt ein {{HTMLElement("p")}}-Element, das die {{cssxref("translate")}}- und {{cssxref("scale")}}-Übergangseigenschaften verwendet, so dass der Text von der rechten Kante des Browserfensters herein gleitet.

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

In diesem Beispiel gibt der Stil für das {{HTMLElement("p")}}-Element an, dass die Animation 3 Sekunden dauern soll, um von Anfang bis Ende ausgeführt zu werden, wobei die {{cssxref("animation-duration")}}-Eigenschaft verwendet wird, und dass der Name der {{cssxref("@keyframes")}}-Regel, die die Keyframes der Animationssequenz definiert, `slide-in` ist.

In diesem Fall haben wir nur zwei Keyframes. Das erste tritt bei `0%` auf (mit dem Alias `from`). Hier konfigurieren wir die {{cssxref("translate")}}-Eigenschaft des Elements auf `150vw` (das heißt, jenseits des rechten Randes des enthaltenen Elements) und die {{cssxref("scale")}} des Elements auf 200% (oder das Doppelte seiner standardmäßigen Inline-Größe), was dazu führt, dass der Absatz doppelt so breit wie sein `<body>`-Enthaltender-Block ist. Dies führt dazu, dass das erste Frame der Animation den Header außerhalb der rechten Kante des Browserfensters zieht.

Das zweite Keyframe tritt bei `100%` auf (mit dem Alias `to`). Die {{cssxref("translate")}}-Eigenschaft wird auf `0%` gesetzt und die {{cssxref("scale")}} des Elements auf `1` gesetzt, was `100%` entspricht. Dies führt dazu, dass der Header seine Animation in seinem Standardzustand, bündig mit der linken Kante des Inhaltsbereichs, abschließt.

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

Lassen Sie uns dem vorherigen Beispiel eine weitere Keyframe-Animation hinzufügen. Nehmen wir an, wir möchten, dass Alices Name pink wird und größer wird und dann zu seiner ursprünglichen Größe und Farbe schrumpft, während er von rechts nach links wandert. Während wir die {{cssxref("font-size")}} ändern könnten, wirkt sich die Änderung von Eigenschaften, die das Boxmodell beeinflussen, negativ auf die Leistung aus. Stattdessen umschließen wir ihren Namen mit einem {{htmlelement("span")}} und skalieren dies und weisen separat eine Farbe zu. Das erfordert das Hinzufügen einer zweiten Animation, die nur das `<span>` betrifft:

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

Der vollständige Code sieht nun folgendermaßen aus:

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

Dies teilt dem Browser mit, dass der Name für die ersten und letzten 25% der Animation normal sein soll, in der Mitte jedoch pink wird und vergrößert und dann zurückvergrößert werden soll. Wir setzen die `display`-Eigenschaft des Spans auf `inline-block`, da die `transform`-Eigenschaften keine nicht-ersetzte {{Glossary("inline-level_content", "inline-level content")}} betreffen.

> [!NOTE]
> Seite neu laden, um die Animation zu sehen.

{{EmbedLiveSample("Adding_another_keyframe","100%","250")}}

### Wiederholung der Animation

Um die Animation sich wiederholen zu lassen, verwenden Sie die {{cssxref("animation-iteration-count")}}-Eigenschaft, um anzugeben, wie oft die Animation wiederholt werden soll. In diesem Fall verwenden wir `infinite`, um die Animation unendlich oft wiederholen zu lassen:

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

Das ließ sie sich wiederholen, aber es ist sehr seltsam, das jedes Mal zum Startpunkt zurückspringen zu lassen, wenn sie beginnt zu animieren. Was wir wirklich wollen, ist, dass sie sich hin- und her über den Bildschirm bewegt. Das ist leicht zu erreichen, indem Sie {{cssxref("animation-direction")}} auf `alternate` setzen:

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

### Verwendung von Animationsevents

Sie können zusätzliche Kontrolle über Animationen erlangen – sowie nützliche Informationen über sie – indem Sie Animationsevents nutzen. Diese Events, dargestellt durch das [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)-Objekt, können verwendet werden, um zu erkennen, wann Animationen beginnen, enden und eine neue Iteration beginnen. Jedes Event enthält die Zeit, zu der es auftrat, sowie den Namen der Animation, die das Event auslöste.

Wir werden das schiebbare Textbeispiel so modifizieren, dass einige Informationen über jedes Animationsevent ausgegeben werden, wenn es auftritt, damit wir sehen können, wie sie funktionieren.

Wir haben die gleiche Keyframe-Animation wie im vorherigen Beispiel aufgenommen. Diese Animation dauert 3 Sekunden, wird "slide-in" genannt, wiederholt sich dreimal und bewegt sich bei jeder Wiederholung in eine andere Richtung. Im {{cssxref("@keyframes")}} werden das Skalieren und das Übersetzen entlang der x-Achse manipuliert, um das Element über den Bildschirm gleiten zu lassen.

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

#### Hinzufügen der Animationsevent-Listener

Wir werden JavaScript-Code verwenden, um auf alle drei möglichen Animationsevents zu lauschen. Dieser Code konfiguriert unsere Event-Listener; wir rufen ihn auf, wenn das Dokument zum ersten Mal geladen wird, um die Dinge einzurichten.

```js
const element = document.getElementById("watch-me");
element.addEventListener("animationstart", listener);
element.addEventListener("animationend", listener);
element.addEventListener("animationiteration", listener);

element.className = "slide-in";
```

Dies ist ziemlich standardmäßiger Code; Sie können Details dazu, wie er funktioniert, in der Dokumentation zu [`eventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) finden. Das Letzte, was dieser Code tut, ist, die `class`-Eigenschaft auf dem Element zu setzen, das wir animieren werden, auf "slide-in"; wir machen das, um die Animation selbst zu starten.

Warum? Weil das `animationstart`-Event sofort nach dem Start der Animation ausgelöst wird, und in unserem Fall passiert das, bevor unser Code ausgeführt wird. Also starten wir die Animation selbst, indem wir die Klasse des Elements auf den Stil setzen, der nachträglich animiert wird.

#### Empfang der Events

Die Events werden der `listener()`-Funktion übergeben, die unten gezeigt wird.

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

Dieser Code ist ebenfalls sehr einfach. Er prüft den [`event.type`](/de/docs/Web/API/Event/type), um zu bestimmen, welche Art von Animationsevent aufgetreten ist, und fügt dann eine entsprechende Notiz zu der {{HTMLElement("ul")}} (ungeordnete Liste) hinzu, die wir zur Protokollierung dieser Events verwenden.

Das Ergebnis sieht am Ende etwa so aus:

- Gestartet: vergangene Zeit ist 0
- Neue Schleife gestartet um 3.01200008392334
- Neue Schleife gestartet um 6.00600004196167
- Beendet: vergangene Zeit ist 9.234000205993652

Beachten Sie, dass die Zeiten sehr nahe an, aber nicht genau die erwarteten sind, die beim Konfigurieren der Animation festgelegt wurden. Beachten Sie auch, dass nach der letzten Iteration der Animation das `animationiteration`-Event nicht gesendet wird; stattdessen wird das `animationend`-Event gesendet.

Nur der Vollständigkeit halber hier der HTML-Code, der den Seiteninhalt anzeigt, einschließlich der Liste, in die das Skript Informationen über die empfangenen Events einfügt:

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

Und hier sind die Live-Ergebnisse.

> [!NOTE]
> Seite neu laden, um die Animation zu sehen.

{{EmbedLiveSample('Using_animation_events', '600', '300')}}

### Animation von `display` und `content-visibility`

Dieses Beispiel demonstriert, wie [`display`](/de/docs/Web/CSS/display) und [`content-visibility`](/de/docs/Web/CSS/content-visibility) animiert werden können. Dieses Verhalten ist nützlich für das Erstellen von Ein- und Ausstiegsanimationen, bei denen Sie z. B. einen Container aus dem DOM mit `display: none` entfernen möchten, ihn jedoch sanft mit [`opacity`](/de/docs/Web/CSS/opacity) ausblenden lassen möchten, anstatt sofort zu verschwinden.

Unterstützende Browser animieren `display` und `content-visibility` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). In der Regel bedeutet dies, dass Eigenschaften zwischen zwei Werten 50% des Weges durch das Animieren zwischen den beiden umschalten.

Es gibt jedoch eine Ausnahme, die beim Animieren von/zu `display: none` oder `content-visibility: hidden` zu einem sichtbaren Wert auftritt. In diesem Fall schaltet der Browser zwischen den beiden Werten um, sodass der animierte Inhalt die gesamte Dauer der Animation sichtbar ist.

Zum Beispiel:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) schaltet der Wert bei `0%` der Animationsdauer zu `block`, sodass er während der gesamten Dauer sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` schaltet der Wert bei `100%` der Animationsdauer zu `none`, sodass er die gesamte Dauer sichtbar ist.

#### HTML

Das HTML enthält zwei {{htmlelement("p")}}-Elemente mit einem {{htmlelement("div")}} dazwischen, das wir vom `display` `none` zu `block` animieren.

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

Schließlich fügen wir ein wenig JavaScript hinzu, um Event-Listener einzurichten, die die Animationen auslösen. Insbesondere fügen wir die `fade-in`-Klasse dem `<div>` hinzu, wenn es erscheinen soll, und `fade-out`, wenn es verschwinden soll.

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
- [Verwendung der Web-Animations-API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
