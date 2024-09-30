---
title: Verwendung von CSS-Animationen
slug: Web/CSS/CSS_animations/Using_CSS_animations
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{CSSRef}}

**CSS-Animationen** ermöglichen es, Übergänge von einer CSS-Style-Konfiguration zu einer anderen zu animieren. Animationen bestehen aus zwei Komponenten: einem Stil, der die CSS-Animation beschreibt, und einer Reihe von Keyframes, die die Start- und Endzustände des Animationsstils sowie mögliche Zwischenpunkte angeben.

Es gibt drei wesentliche Vorteile von CSS-Animationen gegenüber herkömmlichen skriptgesteuerten Animationstechniken:

1. Sie sind einfach zu verwenden für einfache Animationen; Sie können diese erstellen, ohne JavaScript kennen zu müssen.
2. Die Animationen laufen gut, auch bei mittlerer Systemauslastung. Einfache Animationen können in JavaScript oft schlecht performen. Die Rendering-Engine kann Frame-Springen und andere Techniken verwenden, um die Leistung so flüssig wie möglich zu halten.
3. Wenn der Browser die Animationssequenz steuert, kann er die Leistung und Effizienz optimieren, indem er beispielsweise die Aktualisierungsrate von Animationen, die in aktuell nicht sichtbaren Tabs laufen, reduziert.

## Konfiguration einer Animation

Um eine CSS-Animationssequenz zu erstellen, stylen Sie das Element, das Sie animieren möchten, mit der {{cssxref("animation")}}-Eigenschaft oder deren Untereigenschaften. Dies ermöglicht die Konfiguration der Zeitabläufe, der Dauer und anderer Details, wie die Animationssequenz ablaufen soll. Dies konfiguriert **nicht** das tatsächliche Erscheinungsbild der Animation, das mit der {{cssxref("@keyframes")}}-At-Regel, wie im Abschnitt [Definition einer Animationssequenz mithilfe von Keyframes](#definition_einer_animationssequenz_mit_keyframes) beschrieben, erfolgt.

Die Untereigenschaften der {{cssxref("animation")}}-Eigenschaft sind:

- {{cssxref("animation-composition")}}
  - : Gibt die [Kombinationsoperation](/de/docs/Glossary/composite_operation) an, die verwendet werden soll, wenn mehrere Animationen dieselbe Eigenschaft gleichzeitig beeinflussen. Diese Eigenschaft ist nicht Teil der `animation`-Kurzform.
- {{cssxref("animation-delay")}}
  - : Gibt die Verzögerung zwischen dem Laden eines Elements und dem Beginn einer Animationssequenz an und ob die Animation sofort zu Beginn oder in einer anderen Animation starten soll.
- {{cssxref("animation-direction")}}
  - : Legt fest, ob die erste Iteration einer Animation vorwärts oder rückwärts verlaufen soll und ob nachfolgende Iterationen die Richtung bei jedem Durchlauf der Sequenz ändern oder zum Startpunkt zurückkehren und wiederholen sollen.
- {{cssxref("animation-duration")}}
  - : Bestimmt die Zeitdauer, in der eine Animation einen Zyklus abschließt.
- {{cssxref("animation-fill-mode")}}
  - : Gibt an, wie eine Animation Stile auf ihr Ziel vor und nach ihrem Ablauf anwendet.
    > [!NOTE]
    > Im Fall des `forwards`-Füllmodus bei Animationen verhalten sich animierte Eigenschaften, als wären sie in einem [`will-change`](/de/docs/Web/CSS/will-change)-Eigenschaftswert enthalten. Wenn während der Animation ein neuer Stapelkontext erstellt wurde, behält das Zielelement den Stapelkontext bei, nachdem die Animation abgeschlossen ist.
- {{cssxref("animation-iteration-count")}}
  - : Gibt die Anzahl der Wiederholungen einer Animation an.
- {{cssxref("animation-name")}}
  - : Gibt den Namen der {{cssxref("@keyframes")}}-At-Regel an, die die Keyframes einer Animation beschreibt.
- {{cssxref("animation-play-state")}}
  - : Gibt an, ob eine Animationssequenz pausiert oder abgespielt werden soll.
- {{cssxref("animation-timeline")}}
  - : Gibt die Zeitleiste an, die zur Steuerung des Fortschritts einer CSS-Animation verwendet wird.
- {{cssxref("animation-timing-function")}}
  - : Legt fest, wie eine Animation durch Keyframes über Beschleunigungskurven verläuft.

## Definition einer Animationssequenz mit Keyframes

Nachdem Sie das Timing der Animation konfiguriert haben, müssen Sie das Erscheinungsbild der Animation definieren. Dies erfolgt durch die Erstellung eines oder mehrerer Keyframes mit der {{cssxref("@keyframes")}}-At-Regel. Jedes Keyframe beschreibt, wie das animierte Element zu einem bestimmten Zeitpunkt während der Animationssequenz aussehen soll.

Da das Timing der Animation im CSS-Stil definiert wird, der die Animation konfiguriert, verwenden Keyframes einen {{cssxref("percentage")}}, um den Zeitpunkt in der Animationssequenz anzugeben, zu dem sie stattfinden. 0% zeigt den ersten Moment der Animationssequenz an, während 100% den Endzustand der Animation angibt. Da diese beiden Zeitpunkte so wichtig sind, haben sie spezielle Aliasse: `from` und `to`. Beide sind optional. Wenn `from`/`0%` oder `to`/`100%` nicht angegeben wird, startet oder beendet der Browser die Animation mit den berechneten Werten aller Attribute.

Sie können optional zusätzliche Keyframes einfügen, die Zwischenschritte zwischen dem Start und Ende der Animation beschreiben.

## Verwendung der Animation-Kurzform

Die {{cssxref("animation")}}-Kurzform ist nützlich, um Platz zu sparen. Zum Beispiel können einige der Regeln, die wir in diesem Artikel verwendet haben:

```css
p {
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

...durch die Verwendung der `animation`-Kurzform ersetzt werden.

```css
p {
  animation: 3s infinite alternate slidein;
}
```

Um mehr über die Reihenfolge zu erfahren, in der verschiedene Animationswerte mit der `animation`-Kurzform angegeben werden können, sehen Sie sich die {{cssxref("animation")}}-Referenzseite an.

## Festlegen mehrerer Animationswerte

Die CSS-Animations-Langform-Eigenschaften können mehrere Werte akzeptieren, die durch Kommas getrennt sind. Diese Funktion kann verwendet werden, wenn Sie mehrere Animationen in einer einzigen Regel anwenden und unterschiedliche Dauer, Iterationszählungen usw. für jede der Animationen festlegen möchten. Schauen wir uns einige schnelle Beispiele an, um die verschiedenen Permutationen zu erklären.

In diesem ersten Beispiel gibt es drei Dauern und drei Iterationszählwerte. Jede Animation wird einem Dauer- und Iterationszählwert mit derselben Position wie der Animationsname zugewiesen. Die `fadeInOut`-Animation erhält eine Dauer von `2.5s` und eine Iterationszählung von `2`, und die `bounce`-Animation erhält eine Dauer von `1s` und eine Iterationszählung von `5`.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s, 1s;
animation-iteration-count: 2, 1, 5;
```

Im zweiten Beispiel werden drei Animationsnamen festgelegt, es gibt jedoch nur eine Dauer und Iterationszählung. In diesem Fall erhalten alle drei Animationen dieselbe Dauer und Iterationsanzahl.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 3s;
animation-iteration-count: 1;
```

Im dritten Beispiel werden drei Animationen angegeben, jedoch nur zwei Dauern und Iterationszählwerte. In solchen Fällen, in denen nicht genügend Werte in der Liste vorhanden sind, um jedem Animation eine separate zuzuweisen, beginnt die Wertzuweisung mit dem ersten und endet mit dem letzten Element in der verfügbaren Liste und zykelt dann zum ersten Element zurück. So erhält `fadeInOut` eine Dauer von `2.5s` und `moveLeft300px` erhält eine Dauer von `5s`, was der letzte Wert in der Liste der Dauerwerte ist. Die Dauervaluezuweisung wird nun auf den ersten Wert zurückgesetzt; `bounce` erhält daher eine Dauer von `2.5s`. Die Iterationszählwerte (sowie alle anderen von Ihnen angegebenen Eigenschaftswerte) werden auf dieselbe Weise zugewiesen.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s;
animation-iteration-count: 2, 1;
```

Wenn das Missverhältnis in der Anzahl der Animationen und Animationswerte umgekehrt ist, z.B. gibt es fünf `animation-duration`-Werte bei drei `animation-name`-Werten, sind die zusätzlichen oder ungenutzten Animationswerte, in diesem Fall zwei `animation-duration`-Werte, bei keiner Animation anwendbar und werden ignoriert.

## Beispiele

> [!NOTE]
> Einige ältere Browser (vor 2017) benötigen möglicherweise Präfixe; die Live-Beispiele, die Sie in Ihrem Browser anklicken können, enthalten die `-webkit`-präfixierte Syntax.

### Text über das Browserfenster gleiten lassen

Dieses grundlegende Beispiel stylt ein {{HTMLElement("p")}}-Element mit den {{cssxref("translate")}}- und {{cssxref("scale")}}-Übergangseigenschaften, sodass der Text von außerhalb des rechten Randes des Browserfensters hereingeschoben wird.

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

In diesem Beispiel gibt der Stil für das {{HTMLElement("p")}}-Element an, dass die Animation 3 Sekunden dauern soll, um von Anfang bis Ende abzulaufen, unter Verwendung der {{cssxref("animation-duration")}}-Eigenschaft, und dass der Name der {{ cssxref("@keyframes")}}-At-Regel, die die Keyframes für die Animationssequenz definiert, `slidein` ist.

In diesem Fall haben wir nur zwei Keyframes. Das erste tritt bei `0%` auf (mithilfe des Alias `from`). Hier konfigurieren wir die {{cssxref("translate")}}-Eigenschaft des Elements so, dass es bei `150vw` liegt (das ist über den rechten Rand des enthaltenen Elements hinaus), und die {{cssxref("scale")}} des Elements auf 200% (oder das Zweifache seiner Standardgröße), was dazu führt, dass der Absatz doppelt so breit ist wie sein `<body>` enthaltender Block. Dies bewirkt, dass der erste Frame der Animation das Header über den rechten Rand des Browserfensters hinaus gezeichnet hat.

Das zweite Keyframe tritt bei `100%` (mithilfe des Alias `to`) auf. Die {{cssxref("translate")}}-Eigenschaft ist auf `0%` gesetzt und die {{cssxref("scale")}} des Elements ist auf `1`, was `100%` ist. Dies bewirkt, dass das Header seine Animation in seinem Standardzustand, bündig an der linken Kante des Inhaltsbereichs, beendet.

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

Lassen Sie uns der Animation im vorherigen Beispiel ein weiteres Keyframe hinzufügen. Angenommen, wir möchten, dass Alices Name rosa wird und wächst und dann zu seiner ursprünglichen Größe und Farbe zurückkehrt, während er von rechts nach links bewegt wird. Obwohl wir die {{cssxref("font-size")}} ändern könnten, beeinträchtigt die Änderung von Eigenschaften, die das Boxmodell beeinflussen, die Leistung negativ. Stattdessen umschließen wir ihren Namen mit einem {{htmlelement("span")}} und skalieren und weisen ihm eine separate Farbe zu. Das erfordert das Hinzufügen einer zweiten Animation, die nur das `<span>` betrifft:

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

```css
p {
  animation-duration: 3s;
  animation-name: slidein;
}
p span {
  display: inline-block;
  animation-duration: 3s;
  animation-name: growshrink;
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

Wir haben ein {{htmlelement("span")}} um "Alice" hinzugefügt:

```html
<p>
  The Caterpillar and <span>Alice</span> looked at each other for some time in
  silence: at last the Caterpillar took the hookah out of its mouth, and
  addressed her in a languid, sleepy voice.
</p>
```

Dies teilt dem Browser mit, dass der Name für die ersten und letzten 25% der Animation normal sein soll, aber in der Mitte rosa wird, während er hoch- und wieder zurückskaliert wird. Wir setzen die {{cssxref("display")}}-Eigenschaft des Spans auf `inline-block`, da die `transform`-Eigenschaften keinen Einfluss auf nicht ersetzte [inhaltsstufen Inhalt](/de/docs/Glossary/inline-level_content) haben.

> [!NOTE]
> Laden Sie die Seite neu, um die Animation zu sehen.

{{EmbedLiveSample("Adding_another_keyframe","100%","250")}}

### Wiederholung der Animation

Um die Animation zu wiederholen, verwenden Sie die {{cssxref("animation-iteration-count")}}-Eigenschaft, um anzugeben, wie oft die Animation wiederholt werden soll. In diesem Fall verwenden wir `infinite`, um die Animation unendlich oft wiederholen zu lassen:

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

### Die Animation vor- und zurücklaufen lassen

Das ließ sie sich wiederholen, aber es ist sehr merkwürdig, wenn sie nach jedem Anfang zur Startposition springt. Was wir wirklich wollen, ist, dass sie über den Bildschirm hin und her bewegt. Das wird einfach erreicht, indem {{cssxref("animation-direction")}} auf `alternate` gesetzt wird:

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

Sie können zusätzliche Kontrolle über Animationen erhalten — sowie nützliche Informationen darüber — indem Sie Animationsereignisse nutzen. Diese Ereignisse, dargestellt durch das [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)-Objekt, können verwendet werden, um zu erkennen, wann Animationen starten, enden und eine neue Iteration beginnen. Jedes Ereignis beinhaltet die Zeit, zu der es aufgetreten ist, sowie den Namen der Animation, die das Ereignis ausgelöst hat.

Wir werden das Beispiel mit dem gleitenden Text ändern, um bei jedem Animationsereignis Informationen auszugeben, wenn es auftritt, damit wir uns ansehen können, wie sie funktionieren.

Wir haben dieselbe Keyframe-Animation wie im vorherigen Beispiel aufgenommen. Diese Animation dauert 3 Sekunden, heißt "slidein", wiederholt sich 3 Mal und bewegt sich bei jeder Wiederholung in einer alternativen Richtung. In den {{cssxref("@keyframes")}} werden die Skalierung und die Translation entlang der x-Achse manipuliert, um das Element über den Bildschirm gleiten zu lassen.

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

#### Hinzufügen der Animationsereignis-Listener

Wir werden JavaScript-Code verwenden, um auf alle drei möglichen Animationsereignisse zu hören. Dieser Code konfiguriert unsere Event-Listener; wir rufen ihn auf, wenn das Dokument zum ersten Mal geladen wird, um die Dinge einzurichten.

```js
const element = document.getElementById("watchme");
element.addEventListener("animationstart", listener, false);
element.addEventListener("animationend", listener, false);
element.addEventListener("animationiteration", listener, false);

element.className = "slidein";
```

Dies ist ein ziemlich standardmäßiger Code; Details zur Funktionsweise finden Sie in der Dokumentation zu [`eventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener). Das Letzte, was dieser Code tut, ist, die `class` auf dem Element zu setzen, das wir animieren werden, auf "slidein"; wir tun dies, um die Animation zu starten.

Warum? Weil das `animationstart`-Ereignis sofort ausgelöst wird, wenn die Animation startet, und in unserem Fall passiert das, bevor unser Code ausgeführt wird. Also starten wir die Animation selbst, indem wir die Klasse des Elements auf den Stil setzen, der nachträglich animiert wird.

#### Empfang der Ereignisse

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

Auch dieser Code ist sehr einfach. Er überprüft den [`event.type`](/de/docs/Web/API/Event/type), um zu bestimmen, welche Art von Animationsereignis aufgetreten ist, und fügt dann eine entsprechende Notiz zur {{HTMLElement("ul")}} (unsortierte Liste) hinzu, die wir verwenden, um diese Ereignisse zu protokollieren.

Das Ergebnis sieht ungefähr so aus:

- Gestartet: verstrichene Zeit ist 0
- Neuer Loop begann zur Zeit 3.01200008392334
- Neuer Loop begann zur Zeit 6.00600004196167
- Beendet: verstrichene Zeit ist 9.234000205993652

Beachten Sie, dass die Zeiten sehr nah an den erwarteten liegen, die bei der Konfiguration der Animation festgelegt wurden, jedoch nicht genau dort. Beachten Sie auch, dass nach der letzten Iteration der Animation das `animationiteration`-Ereignis nicht gesendet wird; stattdessen wird das `animationend`-Ereignis gesendet.

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
> Laden Sie die Seite neu, um die Animation zu sehen.

{{EmbedLiveSample('Using_animation_events', '600', '300')}}

### Animation von Anzeige und Inhalts-Sichtbarkeit

Dieses Beispiel zeigt, wie [`display`](/de/docs/Web/CSS/display) und [`content-visibility`](/de/docs/Web/CSS/content-visibility) animiert werden können. Dieses Verhalten ist nützlich für die Erstellung von Ein/Ausblendeffekten, bei denen Sie beispielsweise einen Container mit `display: none` aus dem DOM entfernen möchten, aber ihn mit [`opacity`](/de/docs/Web/CSS/opacity) sanft ausblenden, anstatt sofort zu verschwinden.

Unterstützende Browser animieren `display` und `content-visibility` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Dies bedeutet im Allgemeinen, dass Eigenschaften mitten im Animationsverlauf zwischen zwei Werten wechseln.

Es gibt jedoch eine Ausnahme, wenn zu/von `display: none` oder `content-visibility: hidden` zu einem sichtbaren Wert animiert wird. In diesem Fall wird der Browser zwischen den beiden Werten so wechseln, dass der animierte Inhalt während der gesamten Animationsdauer sichtbar ist.

So zum Beispiel:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) wird der Wert bei `0%` der Animationsdauer zu `block` schalten, sodass er während der gesamten Dauer sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` wechselt der Wert bei `100%` der Animationsdauer zu `none`, sodass er während der gesamten Dauer sichtbar ist.

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

Beachten Sie die Einbeziehung der `display`-Eigenschaft in den Keyframe-Animationen.

#### JavaScript

Schließlich fügen wir ein wenig JavaScript hinzu, um Event-Listener einzurichten, die die Animationen auslösen. Insbesondere fügen wir die `fade-in`-Klasse dem `<div>` hinzu, wenn wir möchten, dass es erscheint, und `fade-out`, wenn es verschwinden soll.

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
- [Verwendung der Web Animationen-API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
