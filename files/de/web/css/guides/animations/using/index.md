---
title: Verwendung von CSS-Animationen
short-title: Verwendung von Animationen
slug: Web/CSS/Guides/Animations/Using
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

**CSS-Animationen** ermöglichen es, Übergänge von einer CSS-Stilkonfiguration zu einer anderen zu animieren. Animationen bestehen aus zwei Komponenten: einem Stil, der die CSS-Animation beschreibt und einer Reihe von Keyframes, die die Anfangs- und Endzustände des Animationsstils sowie mögliche Zwischenstationen anzeigen.

Es gibt drei wesentliche Vorteile von CSS-Animationen gegenüber herkömmlichen skriptgesteuerten Animationstechniken:

1. Sie sind einfach für grundlegende Animationen zu verwenden; Sie können sie erstellen, ohne JavaScript kennen zu müssen.
2. Die Animationen laufen gut, selbst bei mittlerer Systemlast. Einfache Animationen können in JavaScript oft schlecht performen. Die Rendering-Engine kann Techniken wie Frame-Skipping verwenden, um die Leistung so flüssig wie möglich zu halten.
3. Durch die Steuerung der Animationssequenz durch den Browser kann der Browser die Leistung und Effizienz optimieren, indem er beispielsweise die Aktualisierungsfrequenz von Animationen reduziert, die in nicht sichtbaren Tabs ablaufen.

## Konfigurieren einer Animation

Um eine CSS-Animationssequenz zu erstellen, stylen Sie das Element, das Sie animieren möchten, mit der {{cssxref("animation")}}-Eigenschaft oder ihren Untereigenschaften. Dies ermöglicht Ihnen die Konfiguration des Timings, der Dauer und anderer Details, wie die Animationssequenz ablaufen soll. Das tatsächliche Erscheinungsbild der Animation wird dabei **nicht** konfiguriert, dies erfolgt durch Verwendung der {{cssxref("@keyframes")}}-At-Regel, wie im Abschnitt [Definieren einer Animationssequenz mit Keyframes](#definieren_einer_animationssequenz_mit_keyframes) unten beschrieben.

Die Untereigenschaften der {{cssxref("animation")}}-Eigenschaft sind:

- {{cssxref("animation-composition")}}
  - : Gibt die {{Glossary("composite_operation", "Zusammensetzungsoperation")}} an, die verwendet werden soll, wenn mehrere Animationen gleichzeitig dieselbe Eigenschaft beeinflussen. Diese Eigenschaft ist nicht Teil der Kurzform `animation`.
- {{cssxref("animation-delay")}}
  - : Gibt die Verzögerung zwischen dem Laden eines Elements und dem Start einer Animationssequenz an und ob die Animation sofort oder teilweise starten soll.
- {{cssxref("animation-direction")}}
  - : Gibt an, ob die erste Iteration einer Animation vorwärts oder rückwärts sein soll und ob nachfolgende Iterationen bei jedem Durchlauf der Sequenz die Richtung wechseln oder zum Startpunkt zurückkehren und wiederholen sollen.
- {{cssxref("animation-duration")}}
  - : Gibt die Länge der Zeit an, in der eine Animation einen Zyklus abschließt.
- {{cssxref("animation-fill-mode")}}
  - : Gibt an, wie eine Animation Stile auf ihr Ziel vor und nach dem Ausführen anwendet.
    > [!NOTE]
    > Im Falle des Animations-[forwards](/de/docs/Web/CSS/Reference/Properties/animation-fill-mode#forwards) Füllmodus verhalten sich animierte Eigenschaften, als wären sie in einem {{cssxref("will-change")}}-Eigenschaftswert enthalten. Wenn während der Animation ein neuer Stacking-Kontext erstellt wurde, behält das Ziel-Element den Stacking-Kontext bei, nachdem die Animation abgeschlossen ist.
- {{cssxref("animation-iteration-count")}}
  - : Gibt an, wie oft eine Animation wiederholt werden soll.
- {{cssxref("animation-name")}}
  - : Gibt den Namen der {{cssxref("@keyframes")}}-At-Regel an, die die Keyframes einer Animation beschreibt.
- {{cssxref("animation-play-state")}}
  - : Gibt an, ob eine Animationssequenz angehalten oder abgespielt werden soll.
- {{cssxref("animation-timeline")}}
  - : Gibt die Zeitleiste an, die verwendet wird, um den Fortschritt einer CSS-Animation zu steuern.
- {{cssxref("animation-timing-function")}}
  - : Gibt an, wie eine Animation durch Keyframes übergeht, indem Beschleunigungskurven festgelegt werden.

## Definieren einer Animationssequenz mit Keyframes

Nachdem Sie das Timing der Animation konfiguriert haben, müssen Sie das Erscheinungsbild der Animation definieren. Dies geschieht durch das Festlegen von einem oder mehreren Keyframes mit der {{cssxref("@keyframes")}}-At-Regel. Jedes Keyframe beschreibt, wie das animierte Element zu einem bestimmten Zeitpunkt während der Animationssequenz gerendert werden soll.

Da das Timing der Animation im CSS-Stil definiert wird, der die Animation konfiguriert, verwenden Keyframes einen {{cssxref("percentage")}}, um den Zeitpunkt in der Animationssequenz anzugeben, an dem sie stattfinden. 0% gibt den ersten Moment der Animationssequenz an, während 100% den Endzustand der Animation angibt. Da diese beiden Zeiten so wichtig sind, haben sie spezielle Aliase: `from` und `to`. Beide sind optional. Wenn `from`/`0%` oder `to`/`100%` nicht angegeben ist, startet oder beendet der Browser die Animation mit den berechneten Werten aller Attribute.

Sie können optional zusätzliche Keyframes einfügen, die Zwischenschritte zwischen dem Anfang und dem Ende der Animation beschreiben.

## Verwendung der Animation-Kurzform

Die {{cssxref("animation")}}-Kurzform ist nützlich, um Platz zu sparen. Ein Beispiel für einige der Regeln, die wir in diesem Artikel verwenden:

```css
p {
  animation-duration: 3s;
  animation-name: slide-in;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

...könnte durch die Verwendung der `animation`-Kurzform ersetzt werden.

```css
p {
  animation: 3s infinite alternate slide-in;
}
```

Um mehr über die Reihenfolge zu erfahren, in der verschiedene Animations-Eigenschaftswerte mit der `animation`-Kurzform angegeben werden können, sehen Sie sich die {{cssxref("animation")}}-Referenzseite an.

## Festlegen mehrerer Animations-Eigenschaftswerte

Die CSS-Animation-Langform-Eigenschaften können mehrere Werte akzeptieren, die durch Kommas getrennt sind. Diese Funktion kann verwendet werden, wenn Sie mehrere Animationen in einer einzigen Regel anwenden und jeweils unterschiedliche Dauern, Iterationsanzahlen usw. festlegen möchten. Sehen wir uns einige schnelle Beispiele an, um die verschiedenen Kombinationen zu erklären.

In diesem ersten Beispiel gibt es drei Dauer- und drei Iterationszählwerte. Jede Animation erhält also einen Wert für Dauer und Iterationsanzahl, der der gleichen Position wie der Animationsname entspricht. Die `fadeInOut`-Animation erhält eine Dauer von `2.5s` und eine Iterationsanzahl von `2`, und die `bounce`-Animation erhält eine Dauer von `1s` und eine Iterationsanzahl von `5`.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s, 1s;
animation-iteration-count: 2, 1, 5;
```

In diesem zweiten Beispiel sind drei Animationsnamen festgelegt, aber es gibt nur eine Dauer und eine Iterationsanzahl. In diesem Fall erhalten alle drei Animationen dieselbe Dauer und Iterationsanzahl.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 3s;
animation-iteration-count: 1;
```

In diesem dritten Beispiel sind drei Animationen spezifiziert, aber nur zwei Dauern und Iterationszahlen. In solchen Fällen, in denen nicht genügend Werte in der Liste sind, um jedem Animation einen separaten zuzuweisen, erfolgt die Wertezuweisung vom ersten zum letzten Element in der verfügbaren Liste und dann wieder zurück zum ersten Element. So erhält `fadeInOut` eine Dauer von `2.5s`, und `moveLeft300px` eine Dauer von `5s`, dem letzten Wert in der Liste der Dauerwerte. Die Wertezuweisung für die Dauer setzt sich nun zurück auf den ersten Wert; `bounce` erhält daher eine Dauer von `2.5s`. Die Iterationszählerwerte (und alle anderen von Ihnen angegebenen Eigenschaftswerte) werden auf die gleiche Weise zugewiesen.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s;
animation-iteration-count: 2, 1;
```

Wenn der Mismatch in der Anzahl der Animationen und Animations-Eigenschaftswerte invertiert ist, sagen wir, es gibt fünf `animation-duration`-Werte für drei `animation-name`-Werte, dann gelten die zusätzlichen oder ungenutzten Animations-Eigenschaftswerte, in diesem Fall zwei `animation-duration`-Werte, auf keine Animation und werden ignoriert.

## Beispiele

### Text über das Browserfenster gleiten lassen

Dieses einfache Beispiel stylt ein {{HTMLElement("p")}}-Element, indem die {{cssxref("translate")}}- und {{cssxref("scale")}}-Transition-Eigenschaften verwendet werden, so dass der Text von außerhalb des rechten Randes des Browserfensters herein gleitet.

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

In diesem Beispiel gibt der Stil für das {{HTMLElement("p")}}-Element an, dass die Animation 3 Sekunden dauern soll, um von Anfang bis Ende abzuspielen, unter Verwendung der {{cssxref("animation-duration")}}-Eigenschaft und dass der Name der {{ cssxref("@keyframes")}}-At-Regel, die die Keyframes für die Animationssequenz definiert, `slide-in` ist.

In diesem Fall haben wir nur zwei Keyframes. Das erste tritt bei `0%` auf (unter Verwendung des Alias `from`). Hier konfigurieren wir die {{cssxref("translate")}}-Eigenschaft des Elements bei `150vw`(das heißt, über den rechten Rand des enthaltenen Elements hinaus) und die {{cssxref("scale")}} des Elements auf 200% (oder das Doppelte seiner Standard-Inline-Größe), was dazu führt, dass der Absatz doppelt so breit ist wie sein`<body>`-enthaltender Block. Dies führt dazu, dass das erste Frame der Animation den Header vom rechten Rand des Browserfensters gezeichnet wird.

Das zweite Keyframe tritt bei `100%` auf (unter Verwendung des Alias `to`). Die {{cssxref("translate")}}-Eigenschaft ist auf `0%`gesetzt und die {{cssxref("scale")}} des Elements auf`1`, also `100%`. Dies führt dazu, dass der Header seine Animation in seinem Standardzustand beendet, bündig am linken Rand des Inhaltsbereichs.

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

Fügen wir eine weitere Keyframe zur Animation des vorherigen Beispiels hinzu. Sagen wir, wir möchten, dass Alices Name sich rosa färbt und wächst und dann zu seiner ursprünglichen Größe und Farbe zurück schrumpft, während er sich von rechts nach links bewegt. Während wir die {{cssxref("font-size")}} ändern könnten, beeinträchtigt das Ändern von Eigenschaften, die den Box-Model beeinflussen, die Leistung negativ. Stattdessen umschließen wir ihren Namen mit einem {{htmlelement("span")}} und skalieren und weisen dann eine Farbe separat zu. Das erfordert das Hinzufügen einer zweiten Animation, die nur das `<span>` beeinflusst:

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

Dies sagt dem Browser, dass der Name in den ersten und letzten 25% der Animation normal sein soll, jedoch in der Mitte rosa wird, während er vergrößert und wieder zurück skaliert. Wir setzen die {{cssxref("display")}}-Eigenschaft des Spans auf `inline-block`, da die `transform`-Eigenschaften keinen Einfluss auf nicht ersetzte {{Glossary("inline-level_content", "inline-level content")}} haben.

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

Das ließ sie zwar wiederholen, aber es ist sehr seltsam, dass sie jedes Mal zurück zum Anfang springt, wenn sie beginnt zu animieren. Was wir wirklich wollen, ist, dass sie sich hin- und herbewegt über den Bildschirm. Dies lässt sich einfach durch das Setzen von {{cssxref("animation-direction")}} auf `alternate` erreichen:

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

Sie können zusätzliche Kontrolle über Animationen gewinnen — sowie nützliche Informationen über sie — durch die Nutzung von Animationsevents. Diese Events, vertreten durch das [`AnimationEvent`](/de/docs/Web/API/AnimationEvent) Objekt, können verwendet werden, um zu erkennen, wann Animationen gestartet, beendet und eine neue Iteration beginnen. Jedes Event enthält die Zeit, zu der es aufgetreten ist, sowie den Namen der Animation, die das Event ausgelöst hat.

Wir werden das gleitende Textbeispiel modifizieren, um einige Informationen über jedes Animationsevent auszugeben, wenn es auftritt, damit wir sehen können, wie sie funktionieren.

Wir haben die gleiche Keyframe-Animation wie im vorherigen Beispiel aufgenommen. Diese Animation wird 3 Sekunden dauern, "slide-in" genannt, 3 Mal wiederholen und bei jedem Durchlauf in einer alternierenden Richtung verlaufen. In den {{cssxref("@keyframes")}} werden die Skalierung und die Translation entlang der x-Achse manipuliert, um das Element über den Bildschirm gleiten zu lassen.

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

Wir verwenden JavaScript-Code, um alle drei möglichen Animationsevents zu überwachen. Dieser Code konfiguriert unsere Event-Listener; wir rufen ihn auf, wenn das Dokument erstmals geladen wird, um die Voraussetzungen zu schaffen.

```js
const element = document.getElementById("watch-me");
element.addEventListener("animationstart", listener);
element.addEventListener("animationend", listener);
element.addEventListener("animationiteration", listener);

element.className = "slide-in";
```

Dies ist ziemlich standardmäßiger Code; Sie können Details darüber, wie er funktioniert, in der Dokumentation zu [`eventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) erhalten. Das Letzte, was dieser Code tut, ist das Setzen der `class` auf das Element, das wir animieren werden, auf "slide-in"; wir tun dies, um die Animation zu starten.

Warum? Weil das `animationstart`-Event sofort ausgelöst wird, sobald die Animation startet, und in unserem Fall geschieht das, bevor unser Code läuft. Daher starten wir die Animation selbst, indem wir die Klasse des Elements auf den Stil setzen, der nachträglich animiert wird.

#### Empfang der Events

Die Events werden an die Funktion `listener()` geliefert, die unten gezeigt wird.

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

Auch dieser Code ist sehr einfach. Er schaut auf den [`event.type`](/de/docs/Web/API/Event/type), um zu ermitteln, welche Art von Animationsevent aufgetreten ist, und fügt dann eine entsprechende Notiz in die {{HTMLElement("ul")}} (ungeordnete Liste) ein, die wir zur Protokollierung dieser Events verwenden.

Das Ergebnis sieht in etwa so aus:

- Gestartet: verstrichene Zeit ist 0
- Neuer Durchlauf begann um Zeit 3.01200008392334
- Neuer Durchlauf begann um Zeit 6.00600004196167
- Beendet: verstrichene Zeit ist 9.234000205993652

Beachten Sie, dass die Zeiten sehr nahe an den zu erwartenden liegen, die beim Konfigurieren der Animation festgelegt wurden, aber nicht exakt. Beachten Sie auch, dass nach der letzten Wiederholung der Animation das `animationiteration`-Event nicht gesendet wird; stattdessen wird das `animationend`-Event gesendet.

Nur der Vollständigkeit halber, hier ist das HTML, das die Seiteninhalte darstellt, einschließlich der Liste, in die das Skript Informationen über die empfangenen Events einfügt:

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

### Animation von Anzeige und Inhalts-Sichtbarkeit

Dieses Beispiel zeigt, wie {{cssxref("display")}} und {{cssxref("content-visibility")}} animiert werden können. Dieses Verhalten ist nützlich für das Erstellen von Ein-/Ausblendeanimationen, bei denen Sie beispielsweise einen Container mit `display: none` aus dem DOM entfernen, aber mit {{cssxref("opacity")}} sanft ausblenden möchten, anstatt sofort zu verschwinden.

Unterstützende Browser animieren `display` und `content-visibility` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete). Dies bedeutet im Allgemeinen, dass Eigenschaften 50% des Weges zwischen zwei Werten während der Animation umschalten.

Es gibt jedoch eine Ausnahme, wenn von `display: none` oder `content-visibility: hidden` zu einem sichtbaren Wert animiert wird. In diesem Fall wird der Browser die Werte so umschalten, dass die animierten Inhalte für die gesamte Animationsdauer sichtbar sind.

Zum Beispiel:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert), wird der Wert bei `0%` der Animationsdauer auf `block` umgeschaltet, damit er während der gesamten Animation sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none`, wird der Wert bei `100%` der Animationsdauer auf `none` umgeschaltet, damit er während der gesamten Animation sichtbar ist.

#### HTML

Das HTML enthält zwei {{htmlelement("p")}}-Elemente mit einem {{htmlelement("div")}} dazwischen, das wir von `display` `none` auf `block` animieren werden.

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

Schließlich fügen wir ein wenig JavaScript hinzu, um Event-Listener einzurichten, um die Animationen auszulösen. Insbesondere fügen wir die `fade-in`-Klasse zu dem `<div>` hinzu, wenn es erscheinen soll, und `fade-out`, wenn es verschwinden soll.

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

#### Resultat

Der Code rendert wie folgt:

{{ EmbedLiveSample("Animating display and content-visibility", "100%", "350") }}

## Siehe auch

- [CSS-Animationsmodul](/de/docs/Web/CSS/Guides/Animations)
- [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
- [Verwendung von CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions/Using)
- [Verwendung der Web Animations API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
