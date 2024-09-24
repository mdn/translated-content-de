---
title: Verwenden von CSS-Animationen
slug: Web/CSS/CSS_animations/Using_CSS_animations
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{CSSRef}}

**CSS-Animationen** ermöglichen es, Übergänge von einer CSS-Stilkonfiguration zu einer anderen zu animieren. Animationen bestehen aus zwei Komponenten: einem Stil, der die CSS-Animation beschreibt, und einer Reihe von Keyframes, die die Anfangs- und Endzustände des Animationsstils sowie mögliche Zwischenziele angeben.

Es gibt drei wesentliche Vorteile von CSS-Animationen gegenüber traditionellen scriptgesteuerten Animationstechniken:

1. Sie sind einfach zu verwenden für einfache Animationen; Sie können diese erstellen, ohne JavaScript kennen zu müssen.
2. Die Animationen laufen gut, selbst bei moderater Systemauslastung. Einfache Animationen können mit JavaScript oft schlecht performen. Die Render-Engine kann Frame-Skipping und andere Techniken verwenden, um die Performance so flüssig wie möglich zu halten.
3. Wenn der Browser die Animationssequenz steuert, kann er die Leistung und Effizienz optimieren, indem er zum Beispiel die Aktualisierungsrate von Animationen reduziert, die in Tabs laufen, die derzeit nicht sichtbar sind.

## Konfigurieren einer Animation

Um eine CSS-Animationssequenz zu erstellen, stylen Sie das Element, das Sie animieren möchten, mit der {{cssxref("animation")}}-Eigenschaft oder deren Untereigenschaften. Dadurch können Sie das Timing, die Dauer und andere Details festlegen, wie die Animationssequenz ablaufen soll. Dies konfiguriert **nicht** das tatsächliche Erscheinungsbild der Animation, welches mit Hilfe des {{cssxref("@keyframes")}}-At-Regelsatzes definiert wird, wie im Abschnitt [Definieren der Animationssequenz mit Keyframes](#definieren_einer_animationssequenz_mit_keyframes) unten beschrieben.

Die Untereigenschaften der {{cssxref("animation")}}-Eigenschaft sind:

- {{cssxref("animation-composition")}}
  - : Gibt die {{Glossary("composite operation")}} an, die verwendet werden soll, wenn mehrere Animationen gleichzeitig dieselbe Eigenschaft beeinflussen. Diese Eigenschaft ist nicht Teil der `animation`-Abkürzungseigenschaft.
- {{cssxref("animation-delay")}}
  - : Gibt die Verzögerung zwischen dem Laden eines Elements und dem Start einer Animationssequenz an und ob die Animation sofort von ihrem Anfang oder in der Mitte der Animation beginnen soll.
- {{cssxref("animation-direction")}}
  - : Gibt an, ob die erste Iteration einer Animation vorwärts oder rückwärts verlaufen soll und ob nachfolgende Iterationen die Richtung bei jedem Durchlauf der Sequenz abwechseln oder zum Startpunkt zurückkehren und wiederholen sollen.
- {{cssxref("animation-duration")}}
  - : Gibt die Zeitspanne an, in der eine Animation einen Zyklus abschließt.
- {{cssxref("animation-fill-mode")}}
  - : Gibt an, wie eine Animation Stile auf ihr Ziel vor und nach ihrer Ausführung anwendet.
    > [!NOTE]
    > Im Fall des [forwards](/de/docs/Web/CSS/animation-fill-mode#forwards) Fill-Modus, verhalten sich animierte Eigenschaften, als wären sie in einem [`will-change`](/de/docs/Web/CSS/will-change)-Eigenschaftswert enthalten. Wenn während der Animation ein neuer Stacking-Kontext erstellt wurde, behält das Zielelement den Stacking-Kontext, nachdem die Animation abgeschlossen ist.
- {{cssxref("animation-iteration-count")}}
  - : Gibt die Anzahl der Wiederholungen einer Animation an.
- {{cssxref("animation-name")}}
  - : Gibt den Namen des {{cssxref("@keyframes")}}-At-Regelsatzes an, der die Keyframes einer Animation beschreibt.
- {{cssxref("animation-play-state")}}
  - : Gibt an, ob eine Animationssequenz angehalten oder abgespielt werden soll.
- {{cssxref("animation-timeline")}}
  - : Gibt die Zeitleiste an, die verwendet wird, um den Fortschritt einer CSS-Animation zu steuern.
- {{cssxref("animation-timing-function")}}
  - : Gibt an, wie eine Animation durch Keyframes überführt wird, indem Beschleunigungskurven festgelegt werden.

## Definieren einer Animationssequenz mit Keyframes

Nachdem Sie das Timing der Animation konfiguriert haben, müssen Sie das Erscheinungsbild der Animation definieren. Dies erfolgt durch Festlegen eines oder mehrerer Keyframes mit der {{cssxref("@keyframes")}}-At-Regel. Jedes Keyframe beschreibt, wie das animierte Element zu einem bestimmten Zeitpunkt während der Animationssequenz dargestellt werden soll.

Da das Timing der Animation im CSS-Stil definiert wird, der die Animation konfiguriert, verwenden Keyframes einen {{cssxref("percentage")}}, um den Zeitpunkt in der Animationssequenz anzugeben, zu dem sie stattfinden. 0 % gibt den ersten Moment der Animationssequenz an, während 100 % den Endzustand der Animation kennzeichnen. Da diese beiden Zeitpunkte so wichtig sind, haben sie besondere Aliase: `from` und `to`. Beide sind optional. Wenn `from`/`0%` oder `to`/`100%` nicht angegeben ist, startet oder beendet der Browser die Animation mit den berechneten Werten aller Attribute.

Sie können optional zusätzliche Keyframes einfügen, die Zwischenschritte zwischen dem Anfang und Ende der Animation beschreiben.

## Verwenden der Animation-Abkürzung

Die {{cssxref("animation")}}-Abkürzung ist nützlich, um Platz zu sparen. Zum Beispiel könnten einige der Regeln, die wir in diesem Artikel verwendet haben:

```css
p {
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

... durch die Verwendung der `animation`-Abkürzung ersetzt werden.

```css
p {
  animation: 3s infinite alternate slidein;
}
```

Um mehr über die Reihenfolge zu erfahren, in der verschiedene Animationswerte mithilfe der `animation`-Abkürzung angegeben werden können, siehe die {{cssxref("animation")}}-Referenzseite.

## Festlegen mehrerer Animationswerte

Die CSS-Animations-Longhand-Eigenschaften können mehrere Werte akzeptieren, getrennt durch Kommas. Diese Funktion kann verwendet werden, wenn Sie mehrere Animationen in einer einzigen Regel anwenden möchten und unterschiedliche Dauern, Iterationsanzahlen usw. für jede der Animationen festlegen möchten. Lassen Sie uns einige schnelle Beispiele durchgehen, um die verschiedenen Permutationen zu erläutern.

Im ersten Beispiel gibt es drei Dauer- und drei Iterationsanzahl-Werte. Jede Animation wird mit einem Wert für Dauer und Iterationsanzahl mit derselben Position wie der Animationsname zugewiesen. Der `fadeInOut`-Animation wird eine Dauer von `2.5s` und eine Iterationsanzahl von `2` zugewiesen, und der `bounce`-Animation eine Dauer von `1s` und eine Iterationsanzahl von `5`.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s, 1s;
animation-iteration-count: 2, 1, 5;
```

Im zweiten Beispiel sind drei Animationsnamen festgelegt, aber es gibt nur eine Dauer und Iterationsanzahl. In diesem Fall erhalten alle drei Animationen die gleiche Dauer und Iterationsanzahl.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 3s;
animation-iteration-count: 1;
```

Im dritten Beispiel sind drei Animationen angegeben, aber nur zwei Dauern und Iterationsanzahlen. In solchen Fällen, in denen es nicht genügend Werte in der Liste gibt, um jedem eine separate zuzuweisen, wird die Wertzuweisung vom ersten bis zum letzten Element in der verfügbaren Liste durchlaufen und dann zum ersten Element zurückgesprungen. So erhält `fadeInOut` eine Dauer von `2.5s`, und `moveLeft300px` eine Dauer von `5s`, was der letzte Wert in der Liste der Dauerwerte ist. Die Dauerwertzuweisung wird nun auf den ersten Wert zurückgesetzt; `bounce` erhält daher eine Dauer von `2.5s`. Die Iterationsanzahlwerte (und alle anderen Eigenschaftswerte, die Sie angeben) werden auf die gleiche Weise zugewiesen.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s;
animation-iteration-count: 2, 1;
```

Wenn das Missverhältnis in der Anzahl der Animationen und Animationswerte umgekehrt ist, zum Beispiel wenn es fünf `animation-duration` Werte für drei `animation-name` Werte gibt, dann gelten die zusätzlichen oder ungenutzten Animationswerte, in diesem Fall zwei `animation-duration` Werte, für keine Animation und werden ignoriert.

## Beispiele

> [!NOTE]
> Einige ältere Browser (vor 2017) benötigen Präfixe; die Live-Beispiele, die Sie in Ihrem Browser ansehen können, beinhalten die `-webkit`-präfixierte Syntax.

### Text über das Browserfenster gleiten lassen

In diesem einfachen Beispiel wird ein {{HTMLElement("p")}}-Element mit den {{cssxref("translate")}}- und {{cssxref("scale")}}-Übergangseigenschaften formatiert, so dass der Text von außerhalb des rechten Randes des Browserfensters hereinrutscht.

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

In diesem Beispiel spezifiziert der Stil für das {{HTMLElement("p")}}-Element, dass die Animation 3 Sekunden dauern soll, um von Anfang bis Ende auszuführen, indem die {{cssxref("animation-duration")}}-Eigenschaft verwendet wird und dass der Name des {{ cssxref("@keyframes")}}-At-Regelsatzes, der die Keyframes für die Animationssequenz definiert, `slidein` ist.

In diesem Fall haben wir nur zwei Keyframes. Das erste tritt bei `0%` auf (unter Verwendung des Alias `from`). Hier konfigurieren wir die {{cssxref("translate")}}-Eigenschaft des Elements auf `150vw` (d. h. jenseits des rechten Randes des enthaltenen Elements) und die {{cssxref("scale")}} des Elements auf 200% (oder das Doppelte seiner Standardgröße), wodurch der Absatz doppelt so breit wie sein `<body>`-Block ist. Dies führt dazu, dass der erste Frame der Animation die Kopfzeile außerhalb des rechten Randes des Browserfensters zeichnet.

Das zweite Keyframe tritt bei `100%` auf (unter Verwendung des Alias `to`). Die {{cssxref("translate")}}-Eigenschaft ist auf `0%` gesetzt und die {{cssxref("scale")}} des Elements auf `1`, also `100%`. Dadurch endet die Kopfzeile ihre Animation in ihrem Standardzustand, bündig mit dem linken Rand des Inhaltsbereichs.

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

### Hinzufügen eines weiteren Keyframe-Animations

Lassen Sie uns der Animation des vorherigen Beispiels ein weiteres Keyframe hinzufügen. Nehmen wir an, wir möchten, dass Alices Name rosa wird und wächst und dann wieder seine ursprüngliche Größe und Farbe annimmt, während er sich von rechts nach links bewegt. Während wir die {{cssxref("font-size")}} ändern könnten, beeinträchtigt das Ändern von Eigenschaften, die das Box-Modell betreffen, die Leistung negativ. Stattdessen wickeln wir ihren Namen in eine {{htmlelement("span")}} und skalieren und weisen dieser separat eine Farbe zu. Das erfordert das Hinzufügen einer zweiten Animation, die nur das `<span>` beeinflusst:

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

Der vollständige Code sieht jetzt wie folgt aus:

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

Dies teilt dem Browser mit, dass der Name in den ersten und letzten 25 % der Animation normal sein soll, aber in der Mitte rosa wird, während er vergrößert und dann wieder auf die ursprüngliche Größe verkleinert wird. Wir setzen die {{cssxref("display")}}-Eigenschaft des Spans auf `inline-block`, da die `transform`-Eigenschaften den nicht ersetzten {{glossary("inline-level content")}} nicht beeinflussen.

> [!NOTE]
> Seite neu laden, um die Animation zu sehen.

{{EmbedLiveSample("Adding_another_keyframe","100%","250")}}

### Wiederholen der Animation

Um die Animation sich selbst wiederholen zu lassen, verwenden Sie die {{cssxref("animation-iteration-count")}}-Eigenschaft, um anzugeben, wie oft die Animation wiederholt werden soll. In diesem Fall verwenden wir `infinite`, um die Animation unendlich oft wiederholen zu lassen:

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

### Die Animation hin und her bewegen lassen

Das ließ sie sich wiederholen, jedoch ist es sehr merkwürdig, dass sie bei jeder neuen Animation zum Anfang zurückspringen. Was wir wirklich wollen, ist, dass sie sich hin und her über den Bildschirm bewegt. Das ist leicht erreicht, indem {{cssxref("animation-direction")}} auf `alternate` gesetzt wird:

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

### Verwenden von Animationsereignissen

Sie können zusätzliche Kontrolle über Animationen erhalten – sowie nützliche Informationen über sie – indem Sie Animationsereignisse verwenden. Diese Ereignisse, dargestellt durch das {{domxref("AnimationEvent")}}-Objekt, können verwendet werden, um zu erkennen, wann Animationen starten, enden und eine neue Iteration beginnen. Jedes Ereignis enthält die Zeit, zu der es auftrat, sowie den Namen der Animation, die das Ereignis auslöste.

Wir werden das Beispiel mit dem gleitenden Text ändern, um einige Informationen über jedes Animationsereignis auszugeben, wenn es auftritt, damit wir sehen können, wie sie funktionieren.

Wir haben dieselbe Keyframe-Animation wie im vorherigen Beispiel eingebaut. Diese Animation dauert 3 Sekunden, wird "slidein" genannt, wird 3 Mal wiederholt und bewegt sich bei jeder Wiederholung in einer alternierenden Richtung. In den {{cssxref("@keyframes")}} werden die Skalierung und die Translation entlang der x-Achse manipuliert, damit das Element über den Bildschirm gleitet.

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

Wir werden JavaScript-Code verwenden, um auf alle drei möglichen Animationsereignisse zu lauschen. Dieser Code konfiguriert unsere Ereignis-Listener; wir rufen ihn auf, wenn das Dokument zum ersten Mal geladen wird, um die Dinge einzurichten.

```js
const element = document.getElementById("watchme");
element.addEventListener("animationstart", listener, false);
element.addEventListener("animationend", listener, false);
element.addEventListener("animationiteration", listener, false);

element.className = "slidein";
```

Dieser Code ist ziemlich standardmäßig; Sie können Details dazu finden, wie er funktioniert, in der Dokumentation für {{domxref("eventTarget.addEventListener()")}}. Das Letzte, was dieser Code tut, ist, die `class` des Elements auf "slidein" zu setzen, welches wir animieren werden; wir tun dies, um die Animation selbst zu starten.

Warum? Weil das `animationstart`-Ereignis ausgelöst wird, sobald die Animation beginnt, und in unserem Fall geschieht das, bevor unser Code läuft. Also starten wir die Animation selbst, indem wir die Klasse des Elements nachträglich auf den zu animierenden Stil setzen.

#### Empfang der Ereignisse

Die Ereignisse werden an die `listener()`-Funktion geliefert, die nachfolgend gezeigt wird.

```js
function listener(event) {
  const l = document.createElement("li");
  switch (event.type) {
    case "animationstart":
      l.textContent = `Gestartet: verstrichene Zeit ist ${event.elapsedTime}`;
      break;
    case "animationend":
      l.textContent = `Beendet: verstrichene Zeit ist ${event.elapsedTime}`;
      break;
    case "animationiteration":
      l.textContent = `Neue Schleife gestartet bei Zeit ${event.elapsedTime}`;
      break;
  }
  document.getElementById("output").appendChild(l);
}
```

Auch dieser Code ist sehr einfach. Er schaut auf den {{domxref("event.type")}}, um zu bestimmen, welche Art von Animationsereignis aufgetreten ist, und fügt dann eine entsprechende Notiz zur {{HTMLElement("ul")}} (ungeordnete Liste) hinzu, die wir verwenden, um diese Ereignisse zu protokollieren.

Der Ausgang, wenn alles gesagt und getan ist, sieht etwa so aus:

- Gestartet: verstrichene Zeit ist 0
- Neue Schleife gestartet bei Zeit 3.01200008392334
- Neue Schleife gestartet bei Zeit 6.00600004196167
- Beendet: verstrichene Zeit ist 9.234000205993652

Beachten Sie, dass die Zeiten sehr nahe, aber nicht genau, denen entsprechen, die angesichts des beim Konfigurieren der Animation festgelegten Timings erwartet werden. Beachten Sie auch, dass nach der letzten Iteration der Animation das `animationiteration`-Ereignis nicht gesendet wird; stattdessen wird das `animationend`-Ereignis gesendet.

Nur der Vollständigkeit halber hier das HTML, das die Seiteninhalte anzeigt, einschließlich der Liste, in die das Skript Informationen über die empfangenen Ereignisse einfügt:

```html
<h1 id="watchme">Watch me move</h1>
<p>
  Dieses Beispiel zeigt, wie man mit CSS-Animationen <code>H1</code>
  -Elemente über die Seite bewegen lassen kann.
</p>
<p>
  Zusätzlich geben wir bei jedem animierten Ereignisanfang etwas Text aus, sodass Sie sie in Aktion sehen können.
</p>
<ul id="output"></ul>
```

Und hier ist die Live-Ausgabe.

> [!NOTE]
> Seite neu laden, um die Animation zu sehen.

{{EmbedLiveSample('Using_animation_events', '600', '300')}}

### Animieren von Display und Content-Visibility

Dieses Beispiel demonstriert, wie [`display`](/de/docs/Web/CSS/display) und [`content-visibility`](/de/docs/Web/CSS/content-visibility) animiert werden können. Dieses Verhalten ist nützlich, um Entry/Exit-Animationen zu erstellen, bei denen Sie beispielsweise einen Container mit `display: none` aus dem DOM entfernen möchten, aber ihn mit [`opacity`](/de/docs/Web/CSS/opacity) sanft ausblenden möchten, anstatt sofort zu verschwinden.

Unterstützende Browser animieren `display` und `content-visibility` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Dies bedeutet im Allgemeinen, dass Eigenschaften zwischen zwei Werten um 50 % des Animationsverlaufs umschalten.

Es gibt jedoch eine Ausnahme, nämlich beim Animieren zu/von `display: none` oder `content-visibility: hidden` zu einem sichtbaren Wert. In diesem Fall schaltet der Browser zwischen den beiden Werten um, so dass der animierte Inhalt die gesamte Animationsdauer über sichtbar ist.

Zum Beispiel:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) schaltet der Wert bei `0%` der Animationsdauer auf `block`, so dass er während der gesamten Zeit sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` schaltet der Wert bei `100%` der Animationsdauer auf `none`, so dass er während der gesamten Zeit sichtbar ist.

#### HTML

Das HTML enthält zwei {{htmlelement("p")}}-Elemente mit einem {{htmlelement("div")}} dazwischen, das wir von `display` `none` zu `block` animieren werden.

```html
<p>
  Klicken Sie irgendwo auf den Bildschirm oder drücken Sie eine Taste, um das
  <code>&lt;div&gt;</code> zwischen verborgen und sichtbar umzuschalten.
</p>

<div>
  Dies ist ein <code>&lt;div&gt;</code>-Element, das zwischen
  <code>display: none; opacity: 0</code> und
  <code>display: block; opacity: 1</code> animiert wird. Ziemlich cool, oder?
</div>

<p>
  Dies ist ein weiterer Absatz, um zu zeigen, dass <code>display: none;</code> auf das obige
  <code>&lt;div&gt;</code> angewendet und entfernt wird. Wenn nur
  die <code>opacity</code> geändert würde, würde es immer den Platz im
  DOM einnehmen.
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

/* Animationsklassen */

div.fade-in {
  display: block;
  animation: fade-in 0.7s ease-in forwards;
}

div.fade-out {
  animation: fade-out 0.7s ease-out forwards;
}

/* Animations-Keyframes */

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

Schließlich fügen wir etwas JavaScript hinzu, um Event-Listener einzurichten, die die Animationen auslösen. Konkret fügen wir die Klasse `fade-in` dem `<div>` hinzu, wenn wir es erscheinen lassen möchten, und `fade-out`, wenn wir es verschwinden lassen möchten.

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

- {{domxref("AnimationEvent", "AnimationEvent")}}
- [Verwenden von CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- [Verwenden der Web Animations API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
