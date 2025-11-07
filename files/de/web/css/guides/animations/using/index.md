---
title: Verwenden von CSS-Animationen
short-title: Verwendung von Animationen
slug: Web/CSS/Guides/Animations/Using
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Mit **CSS-Animationen** ist es möglich, Übergänge von einer CSS-Stilkonfiguration zu einer anderen zu animieren. Animationen bestehen aus zwei Komponenten: einem Stil, der die CSS-Animation beschreibt, und einer Reihe von Keyframes, die die Start- und Endzustände des Animationsstils sowie mögliche Zwischenpunkte angeben.

CSS-Animationen bieten drei wesentliche Vorteile gegenüber herkömmlichen skriptgesteuerten Animationstechniken:

1. Sie sind einfach zu verwenden für grundlegende Animationen; Sie können sie erstellen, ohne JavaScript zu kennen.
2. Die Animationen laufen gut, selbst bei mittlerer Systemlast. Einfache Animationen können in JavaScript oft schlecht performen. Die Rendering-Engine kann Rahmenskipping und andere Techniken verwenden, um die Leistung so reibungslos wie möglich zu halten.
3. Wenn der Browser die Animationssequenz steuert, kann er die Leistung und Effizienz optimieren, indem er beispielsweise die Aktualisierungsfrequenz von Animationen verringert, die in derzeit nicht sichtbaren Registerkarten ausgeführt werden.

## Konfigurieren einer Animation

Um eine CSS-Animationssequenz zu erstellen, stylen Sie das Element, das Sie animieren möchten, mit der {{cssxref("animation")}}-Eigenschaft oder deren Untereigenschaften. Dies ermöglicht es Ihnen, das Timing, die Dauer und andere Details zu konfigurieren, wie die Animationssequenz verlaufen soll. Dies konfiguriert **nicht** das tatsächliche Erscheinungsbild der Animation, was mit der {{cssxref("@keyframes")}} at-rule erfolgt, wie im Abschnitt [Definieren einer Animationssequenz mit Keyframes](#definieren_einer_animationssequenz_mit_keyframes) unten beschrieben.

Die Untereigenschaften der {{cssxref("animation")}}-Eigenschaft sind:

- {{cssxref("animation-composition")}}
  - : Gibt die {{Glossary("composite_operation", "Kompositionsoperation")}} an, die verwendet werden soll, wenn mehrere Animationen gleichzeitig dieselbe Eigenschaft beeinflussen. Diese Eigenschaft ist nicht Teil der `animation`-Kurznotiz.
- {{cssxref("animation-delay")}}
  - : Gibt die Verzögerung zwischen dem Laden eines Elements und dem Start einer Animationssequenz an und ob die Animation sofort von Anfang an oder mittendrin beginnen soll.
- {{cssxref("animation-direction")}}
  - : Gibt an, ob die erste Iteration einer Animation vorwärts oder rückwärts erfolgen soll und ob nachfolgende Iterationen die Richtung bei jedem Durchlauf abwechseln oder zum Startpunkt zurücksetzen und wiederholen sollen.
- {{cssxref("animation-duration")}}
  - : Gibt die Zeitdauer an, in der eine Animation einen Zyklus abschließt.
- {{cssxref("animation-fill-mode")}}
  - : Gibt an, wie eine Animation Stile auf ihr Ziel anwendet, bevor und nachdem sie ausgeführt wird.
    > [!NOTE]
    > Im Fall des Animationsfüllmodus [forwards](/de/docs/Web/CSS/Reference/Properties/animation-fill-mode#forwards) verhalten sich animierte Eigenschaften, als ob sie in einem Satz [`will-change`](/de/docs/Web/CSS/Reference/Properties/will-change)-Eigenschaftswert enthalten wären. Wenn während der Animation ein neuer Stapelkontext erstellt wurde, behält das Zielelement den Stapelkontext bei, nachdem die Animation abgeschlossen ist.
- {{cssxref("animation-iteration-count")}}
  - : Gibt die Anzahl der Wiederholungen einer Animation an.
- {{cssxref("animation-name")}}
  - : Gibt den Namen der {{cssxref("@keyframes")}}-Regel an, die die Keyframes einer Animation beschreibt.
- {{cssxref("animation-play-state")}}
  - : Gibt an, ob eine Animationssequenz angehalten oder abgespielt werden soll.
- {{cssxref("animation-timeline")}}
  - : Gibt die Timeline an, die zur Steuerung des Fortschritts einer CSS-Animation verwendet wird.
- {{cssxref("animation-timing-function")}}
  - : Gibt an, wie eine Animation durch Keyframes übergeht, indem Beschleunigungskurven festgelegt werden.

## Definieren einer Animationssequenz mit Keyframes

Nachdem Sie das Timing der Animation konfiguriert haben, müssen Sie das Erscheinungsbild der Animation definieren. Dies geschieht durch das Festlegen eines oder mehrerer Keyframes mithilfe der {{cssxref("@keyframes")}}-Regel. Jedes Keyframe beschreibt, wie das animierte Element zu einem bestimmten Zeitpunkt während der Animationssequenz gerendert werden soll.

Da das Timing der Animation im CSS-Stil definiert ist, der die Animation konfiguriert, verwenden Keyframes ein {{cssxref("percentage")}}, um den Zeitpunkt anzugeben, zu dem sie während der Animationssequenz stattfinden. 0% entspricht dem ersten Moment der Animationssequenz, während 100% den Endzustand der Animation angeben. Da diese beiden Zeiten so wichtig sind, haben sie spezielle Aliase: `from` und `to`. Beide sind optional. Wenn `from`/`0%` oder `to`/`100%` nicht angegeben ist, startet oder beendet der Browser die Animation unter Verwendung der berechneten Werte aller Attribute.

Optional können Sie zusätzliche Keyframes einfügen, die Zwischenschritte zwischen dem Anfang und Ende der Animation beschreiben.

## Verwendung der Animations-Kurzschreibweise

Die {{cssxref("animation")}}-Kurzschreibweise ist nützlich, um Platz zu sparen. Zum Beispiel könnten einige der in diesem Artikel verwendeten Regeln:

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

Um mehr über die Reihenfolge zu erfahren, in der verschiedene Animations-Eigenschaftswerte mit der `animation`-Kurzschreibweise angegeben werden können, siehe die {{cssxref("animation")}}-Referenzseite.

## Festlegen mehrerer Animations-Eigenschaftswerte

Die CSS-Animations-Langeigenschaften können mehrere Werte akzeptieren, die durch Kommas getrennt sind. Diese Funktion kann verwendet werden, wenn Sie mehrere Animationen in einer einzigen Regel anwenden möchten und unterschiedliche Dauer, Wiederholungsanzahl usw. für jede der Animationen festlegen möchten. Schauen wir uns einige schnelle Beispiele an, um die verschiedenen Permutationen zu erklären.

Im ersten Beispiel gibt es drei Dauer- und drei Werte für die Wiederholungsanzahl. So erhält jede Animation eine Dauer und eine Wiederholungsanzahl mit der gleichen Position wie der Animationsname. Die `fadeInOut`-Animation erhält eine Dauer von `2,5s` und eine Wiederholungsanzahl von `2`, und die `bounce`-Animation erhält eine Dauer von `1s` und eine Wiederholungsanzahl von `5`.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s, 1s;
animation-iteration-count: 2, 1, 5;
```

Im zweiten Beispiel werden drei Animationsnamen festgelegt, aber es gibt nur eine Dauer und eine Wiederholungsanzahl. In diesem Fall erhalten alle drei Animationen die gleiche Dauer und Wiederholungsanzahl.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 3s;
animation-iteration-count: 1;
```

Im dritten Beispiel werden drei Animationen angegeben, aber nur zwei Dauer- und Wiederholungsanzahlwerte. In Fällen, in denen nicht genügend Werte in der Liste vorhanden sind, um jedem Animation einen separaten zuzuordnen, wird die Wertzuweisung von dem ersten zum letzten Element in der verfügbaren Liste durchlaufen und dann zum ersten Element zurückgesetzt. So erhält `fadeInOut` eine Dauer von `2,5s`, und `moveLeft300px` bekommt eine Dauer von `5s`, was der letzte Wert in der Liste der Dauerwerte ist. Die Dauerwertzuweisung wird jetzt auf den ersten Wert zurückgesetzt; `bounce` erhält daher eine Dauer von `2,5s`. Die Werte der Iterationsanzahl (und alle anderen von Ihnen angegebenen Eigenschaftswerte) werden auf die gleiche Weise zugewiesen.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s;
animation-iteration-count: 2, 1;
```

Wenn die Diskrepanz in der Anzahl der Animationen und Animations-Eigenschaftswerte umgekehrt ist, sagen wir, es gibt fünf `animation-duration`-Werte für drei `animation-name`-Werte, dann gelten die zusätzlichen oder ungenutzten Animations-Eigenschaftswerte in diesem Fall, zwei `animation-duration`-Werte, für keine Animation und werden ignoriert.

## Beispiele

### Text über das Browserfenster schieben

Dieses einfache Beispiel stylt ein {{HTMLElement("p")}}-Element mit den Übergangseigenschaften {{cssxref("translate")}} und {{cssxref("scale")}}, sodass der Text von rechts außerhalb des Browserfensters hereinschiebt.

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

In diesem Beispiel gibt der Stil des {{HTMLElement("p")}}-Elements an, dass die Animation 3 Sekunden benötigen soll, um von Anfang bis Ende ausgeführt zu werden, und verwendet die {{cssxref("animation-duration")}}-Eigenschaft, und dass der Name der {{ cssxref("@keyframes")}}-Regel, die die Keyframes für die Animationssequenz definiert, `slide-in` ist.

In diesem Fall haben wir nur zwei Keyframes. Das erste tritt bei `0%` auf (unter Verwendung des Alias `from`). Hier konfigurieren wir die {{cssxref("translate")}}-Eigenschaft des Elements auf `150vw` (d.h. jenseits des rechten Rands des enthaltenden Elements) und die {{cssxref("scale")}} des Elements auf 200% (oder das Doppelte seiner Standardgröße in Zeilen), wodurch der Absatz doppelt so breit ist wie sein `<body>`-Block. Dies führt dazu, dass der erste Frame der Animation die Überschrift außerhalb des rechten Randes des Browserfensters zieht.

Das zweite Schlüsselbild tritt bei `100%` auf (unter Verwendung des Alias `to`). Die {{cssxref("translate")}}-Eigenschaft wird auf `0%` gesetzt und die {{cssxref("scale")}} des Elements wird auf `1` gesetzt, was `100%` ist. Dies führt dazu, dass die Überschrift ihre Animation in ihrem Standardzustand abschließt, direkt am linken Rand des Inhaltsbereiches.

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

Lassen Sie uns dem Animationsbeispiel einen weiteren Keyframe hinzufügen. Sagen wir, wir möchten, dass Alices Name pink wird und wächst, und dann auf seine ursprüngliche Größe und Farbe schrumpft, während er sich von rechts nach links bewegt. Während wir die {{cssxref("font-size")}} ändern könnten, wirkt sich das Ändern von Eigenschaften, die das Boxmodell beeinflussen, negativ auf die Leistung aus. Stattdessen umschließen wir ihren Namen in einem {{htmlelement("span")}} und skalieren und weisen separat eine Farbe zu. Das erfordert das Hinzufügen einer zweiten Animation, die nur den `<span>` beeinflusst:

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

Dies weist den Browser an, den Namen für die ersten und letzten 25% der Animation normal anzuzeigen, ihn jedoch in der Mitte rosa zu machen, während er skaliert wird und wieder zurück. Wir setzen die {{cssxref("display")}}-Eigenschaft des Spans auf `inline-block`, da die `transform`-Eigenschaften keinen Einfluss auf nicht ersetzte {{Glossary("inline-level_content", "inline-level content")}} haben.

> [!NOTE]
> Seite neu laden, um die Animation zu sehen.

{{EmbedLiveSample("Adding_another_keyframe","100%","250")}}

### Die Animation wiederholen

Um die Animation sich selbst wiederholen zu lassen, verwenden Sie die {{cssxref("animation-iteration-count")}}-Eigenschaft, um anzugeben, wie oft die Animation wiederholt werden soll. In diesem Fall verwenden wir `infinite`, um die Animation unendlich oft zu wiederholen:

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

Das hat sie wiederholt, aber es ist sehr seltsam, dass sie bei jedem Start der Animation zum Anfang springt. Was wir wirklich möchten, ist, dass sie sich über den Bildschirm hin und her bewegt. Dies ist leicht durch das Festlegen von {{cssxref("animation-direction")}} auf `alternate` zu erreichen:

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

Sie können zusätzliche Kontrolle über Animationen erhalten – sowie nützliche Informationen über sie – durch die Verwendung von Animationsereignissen. Diese Ereignisse, dargestellt durch das [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)-Objekt, können verwendet werden, um zu erkennen, wann Animationen beginnen, enden und eine neue Iteration starten. Jedes Ereignis beinhaltet die Zeit, zu der es aufgetreten ist, sowie den Namen der Animation, die das Ereignis ausgelöst hat.

Wir werden das Beispiel des gleitenden Textes modifizieren, um einige Informationen über jedes Animationsereignis auszugeben, wenn es auftritt, damit wir sehen können, wie sie funktionieren.

Wir haben dieselbe Keyframe-Animation wie im vorherigen Beispiel enthalten. Diese Animation dauert 3 Sekunden, heißt "slide-in", wird 3 mal wiederholt und bewegt sich jedes Mal in einer alternierenden Richtung. In den {{cssxref("@keyframes")}} werden die Skalierung und die Übersetzung entlang der x-Achse manipuliert, um das Element über den Bildschirm gleiten zu lassen.

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

Wir werden JavaScript-Code verwenden, um alle drei möglichen Animationsereignisse zu überwachen. Dieser Code konfiguriert unsere Event-Listener; wir rufen ihn auf, wenn das Dokument zuerst geladen wird, um die Dinge einzurichten.

```js
const element = document.getElementById("watch-me");
element.addEventListener("animationstart", listener);
element.addEventListener("animationend", listener);
element.addEventListener("animationiteration", listener);

element.className = "slide-in";
```

Dies ist ziemlich standardmäßiger Code; Sie können Details darüber, wie es funktioniert, in der Dokumentation zu [`eventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) finden. Das Letzte, was dieser Code tut, ist das Setzen des `class`-Attributs des Elements, das wir animieren werden, auf "slide-in"; wir tun dies, um die Animation zu starten.

Warum? Weil das `animationstart`-Ereignis feuert, sobald die Animation startet, und in unserem Fall passiert das, bevor unser Code ausgeführt wird. Also starten wir die Animation selbst, indem wir die Klasse des Elements auf den Stil setzen, der nachträglich animiert wird.

#### Empfang der Ereignisse

Die Ereignisse werden an die `listener()`-Funktion gesendet, die unten gezeigt wird.

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

Auch dieser Code ist sehr einfach. Er überprüft den [`event.type`](/de/docs/Web/API/Event/type), um zu bestimmen, welche Art von Animationsereignis aufgetreten ist, und fügt dann eine entsprechende Notiz in die {{HTMLElement("ul")}} (ungeordnete Liste) ein, die wir zum Protokollieren dieser Ereignisse verwenden.

Das Endergebnis sieht etwa so aus:

- Gestartet: vergangene Zeit ist 0
- Neue Schleife gestartet bei Zeit 3.01200008392334
- Neue Schleife gestartet bei Zeit 6.00600004196167
- Beendet: vergangene Zeit ist 9.234000205993652

Beachten Sie, dass die Zeiten sehr nahe an, aber nicht genau den erwarteten Zeiten sind, die durch das Timing festgelegt wurden, als die Animation konfiguriert wurde. Beachten Sie auch, dass nach der letzten Iteration der Animation das `animationiteration`-Ereignis nicht gesendet wird; stattdessen wird das `animationend`-Ereignis gesendet.

Nur der Vollständigkeit halber folgt hier das HTML, das den Seiteninhalt anzeigt, einschließlich der Liste, in die das Skript Informationen über die empfangenen Ereignisse einfügt:

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

### Animieren von Anzeige und content-visibility

Dieses Beispiel zeigt, wie [`display`](/de/docs/Web/CSS/Reference/Properties/display) und [`content-visibility`](/de/docs/Web/CSS/Reference/Properties/content-visibility) animiert werden können. Dieses Verhalten ist nützlich, um Ein- und Ausblendeanimationen zu erstellen, bei denen Sie beispielsweise einen Container mit `display: none` aus dem DOM entfernen möchten, aber ihn mit [`opacity`](/de/docs/Web/CSS/Reference/Properties/opacity) sanft ausblenden, anstatt sofort zu verschwinden.

Unterstützende Browser animieren `display` und `content-visibility` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete). Dies bedeutet im Allgemeinen, dass Eigenschaften während der Animation zwischen zwei Werten umschalten.

Es gibt jedoch eine Ausnahme, wenn zu/von `display: none` oder `content-visibility: hidden` zu einem sichtbaren Wert animiert wird. In diesem Fall wird der Browser zwischen den beiden Werten umschalten, sodass der animierte Inhalt über die gesamte Animationsdauer sichtbar ist.

Zum Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wird der Wert bei `0%` der Animationsdauer auf `block` umgeschaltet, sodass er die gesamte Dauer sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wird der Wert bei `100%` der Animationsdauer auf `none` umgeschaltet, sodass er die gesamte Dauer sichtbar ist.

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

Abschließend fügen wir ein wenig JavaScript hinzu, um Event-Listener einzurichten, die die Animationen auslösen. Genauer gesagt fügen wir die `fade-in`-Klasse dem `<div>` hinzu, wenn wir möchten, dass es erscheint, und `fade-out`, wenn wir möchten, dass es verschwindet.

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

Der Code wird wie folgt dargestellt:

{{ EmbedLiveSample("Animating display and content-visibility", "100%", "350") }}

## Siehe auch

- [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
- [Verwenden von CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions/Using)
- [Verwenden der Web-Animations-API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
