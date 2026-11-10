---
title: CSS-Animationen verwenden
short-title: Animationen verwenden
slug: Web/CSS/Guides/Animations/Using
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

**CSS-Animationen** ermöglichen es, Übergänge zwischen verschiedenen CSS-Stilkonfigurationen zu animieren. Animationen bestehen aus zwei Komponenten: einer Stildefinition, die die CSS-Animation beschreibt, und einer Reihe von Keyframes, die den Anfangs- und Endzustand sowie mögliche Zwischenzustände festlegen.

CSS-Animationen bieten gegenüber herkömmlichen skriptgesteuerten Animationstechniken drei wesentliche Vorteile:

1. Einfache Animationen lassen sich mit wenigen Zeilen CSS erstellen; JavaScript ist nicht erforderlich.
2. Die Animationen laufen auch bei mäßiger Systemauslastung gut. Einfache Animationen können in JavaScript oft eine schlechte Leistung aufweisen. Die Rendering-Engine kann Frames überspringen und andere Techniken einsetzen, um die Darstellung möglichst flüssig zu halten.
3. Wenn der Browser den Animationsablauf steuert, kann er Leistung und Effizienz optimieren. Beispielsweise kann er die Aktualisierungshäufigkeit von Animationen in Tabs reduzieren, die gerade nicht sichtbar sind.

## Eine Animation konfigurieren

Um eine CSS-Animationssequenz zu erstellen, weisen Sie dem Element, das Sie animieren möchten, die Eigenschaft {{cssxref("animation")}} oder deren Untereigenschaften zu. Damit legen Sie das Timing, die Dauer und weitere Einzelheiten des Animationsablaufs fest. Das tatsächliche Erscheinungsbild der Animation wird dadurch **nicht** festgelegt. Dafür verwenden Sie die At-Regel {{cssxref("@keyframes")}}, wie im folgenden Abschnitt [Eine Animationssequenz mit Keyframes definieren](#eine_animationssequenz_mit_keyframes_definieren) beschrieben.

Die Untereigenschaften von {{cssxref("animation")}} sind:

- {{cssxref("animation-composition")}}
  - : Legt die {{Glossary("composite_operation", "Kompositionsoperation")}} fest, die verwendet wird, wenn mehrere Animationen gleichzeitig dieselbe Eigenschaft beeinflussen. Diese Eigenschaft gehört nicht zur Kurzschreibweise `animation`.
- {{cssxref("animation-delay")}}
  - : Legt die Verzögerung zwischen dem Laden eines Elements und dem Beginn einer Animationssequenz fest. Sie bestimmt außerdem, ob die Animation an ihrem Anfang oder an einer späteren Stelle beginnen soll.
- {{cssxref("animation-direction")}}
  - : Legt fest, ob die erste Iteration einer Animation vorwärts oder rückwärts ablaufen soll und ob nachfolgende Iterationen jeweils die Richtung wechseln oder zum Ausgangspunkt zurückkehren und sich wiederholen sollen.
- {{cssxref("animation-duration")}}
  - : Legt fest, wie lange ein Durchlauf der Animation dauert.
- {{cssxref("animation-fill-mode")}}
  - : Legt fest, wie eine Animation vor und nach ihrer Ausführung Stile auf ihr Zielelement anwendet.
    > [!NOTE]
    > Beim Fill-Mode [forwards](/de/docs/Web/CSS/Reference/Properties/animation-fill-mode#forwards) verhalten sich animierte Eigenschaften so, als wären sie in einem Wert der Eigenschaft {{cssxref("will-change")}} enthalten. Wird während der Animation ein neuer Stacking-Kontext erstellt, behält das Zielelement ihn auch nach Abschluss der Animation.
- {{cssxref("animation-iteration-count")}}
  - : Legt fest, wie oft eine Animation wiederholt werden soll.
- {{cssxref("animation-name")}}
  - : Legt den Namen der At-Regel {{cssxref("@keyframes")}} fest, die die Keyframes einer Animation beschreibt.
- {{cssxref("animation-play-state")}}
  - : Legt fest, ob eine Animationssequenz pausiert oder abgespielt werden soll.
- {{cssxref("animation-timeline")}}
  - : Legt die Timeline fest, mit der der Fortschritt einer CSS-Animation gesteuert wird.
- {{cssxref("animation-timing-function")}}
  - : Legt mithilfe von Beschleunigungskurven fest, wie eine Animation zwischen Keyframes übergeht.

## Eine Animationssequenz mit Keyframes definieren

Nachdem Sie das Timing der Animation konfiguriert haben, müssen Sie ihr Erscheinungsbild festlegen. Dazu definieren Sie mit der At-Regel {{cssxref("@keyframes")}} einen oder mehrere Keyframes. Jeder Keyframe beschreibt, wie das animierte Element zu einem bestimmten Zeitpunkt der Animationssequenz dargestellt werden soll.

Da das Timing der Animation im CSS-Stil festgelegt wird, der die Animation konfiguriert, verwenden Keyframes einen {{cssxref("percentage")}}-Wert, um ihren Zeitpunkt innerhalb der Animationssequenz anzugeben. 0% bezeichnet den ersten Moment der Animationssequenz, 100% ihren Endzustand. Weil diese beiden Zeitpunkte besonders wichtig sind, haben sie eigene Aliasse: `from` und `to`. Beide Angaben sind optional. Wenn `from`/`0%` oder `to`/`100%` nicht angegeben ist, beginnt beziehungsweise beendet der Browser die Animation mit den berechneten Werten aller Attribute.

Optional können Sie weitere Keyframes hinzufügen, die Zwischenzustände zwischen Anfang und Ende der Animation beschreiben.

## Die Kurzschreibweise für Animationen verwenden

Mit der Kurzschreibweise {{cssxref("animation")}} lässt sich Platz sparen. Beispielsweise könnten einige der Regeln, die wir in diesem Artikel verwenden:

```css
p {
  animation-duration: 3s;
  animation-name: slide-in;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

... durch die Kurzschreibweise `animation` ersetzt werden.

```css
p {
  animation: 3s infinite alternate slide-in;
}
```

Weitere Informationen zur Reihenfolge, in der die verschiedenen Werte für Animationseigenschaften in der Kurzschreibweise `animation` angegeben werden können, finden Sie auf der Referenzseite zu {{cssxref("animation")}}.

## Mehrere Werte für Animationseigenschaften festlegen

Die ausgeschriebenen CSS-Animationseigenschaften können mehrere durch Kommas getrennte Werte annehmen. Das ist nützlich, wenn Sie mit einer einzigen Regel mehrere Animationen anwenden und für jede Animation unterschiedliche Dauern, Iterationszahlen usw. festlegen möchten. Die folgenden kurzen Beispiele zeigen die verschiedenen Möglichkeiten.

Im ersten Beispiel gibt es drei Werte für die Dauer und drei für die Iterationszahl. Jeder Animation wird für beide Eigenschaften der Wert zugewiesen, der an derselben Position wie ihr Animationsname steht. Die Animation `fadeInOut` erhält eine Dauer von `2.5s` und eine Iterationszahl von `2`, die Animation `bounce` eine Dauer von `1s` und eine Iterationszahl von `5`.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s, 1s;
animation-iteration-count: 2, 1, 5;
```

Im zweiten Beispiel sind drei Animationsnamen festgelegt, aber jeweils nur ein Wert für Dauer und Iterationszahl. In diesem Fall erhalten alle drei Animationen dieselbe Dauer und Iterationszahl.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 3s;
animation-iteration-count: 1;
```

Im dritten Beispiel sind drei Animationen angegeben, aber jeweils nur zwei Werte für Dauer und Iterationszahl. Wenn die Liste nicht genügend Werte enthält, um jeder Animation einen eigenen Wert zuzuweisen, beginnt die Zuordnung nach dem letzten verfügbaren Wert wieder beim ersten. `fadeInOut` erhält also eine Dauer von `2.5s`, und `moveLeft300px` erhält eine Dauer von `5s`, dem letzten Wert in der Liste. Danach beginnt die Zuordnung wieder beim ersten Wert: `bounce` erhält daher eine Dauer von `2.5s`. Die Werte für die Iterationszahl und alle anderen angegebenen Eigenschaften werden auf dieselbe Weise zugewiesen.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s;
animation-iteration-count: 2, 1;
```

Wenn umgekehrt mehr Eigenschaftswerte als Animationen vorhanden sind, etwa fünf `animation-duration`-Werte für drei `animation-name`-Werte, werden die überschüssigen Werte keiner Animation zugewiesen und ignoriert. In diesem Fall betrifft das zwei `animation-duration`-Werte.

## Beispiele

### Text durch das Browserfenster gleiten lassen

Dieses einfache Beispiel gestaltet ein {{HTMLElement("p")}}-Element mit den Eigenschaften {{cssxref("translate")}} und {{cssxref("scale")}} so, dass der Text von außerhalb des rechten Rands des Browserfensters hereingleitet.

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

In diesem Beispiel legt der Stil des {{HTMLElement("p")}}-Elements mit {{cssxref("animation-duration")}} fest, dass die Animation von Anfang bis Ende 3 Sekunden dauert. Außerdem legt er fest, dass die At-Regel {{ cssxref("@keyframes")}}, die die Keyframes der Animationssequenz definiert, `slide-in` heißt.

Hier verwenden wir nur zwei Keyframes. Der erste liegt bei `0%` (angegeben mit dem Alias `from`). Darin setzen wir die Eigenschaft {{cssxref("translate")}} des Elements auf `150vw` (also über den äußersten rechten Rand des umgebenden Elements hinaus) und {{cssxref("scale")}} auf 200% (das Doppelte seiner standardmäßigen Inline-Größe). Dadurch ist der Absatz doppelt so breit wie der umgebende `<body>`-Block. Im ersten Frame der Animation wird die Überschrift somit außerhalb des rechten Rands des Browserfensters gezeichnet.

Der zweite Keyframe liegt bei `100%` (angegeben mit dem Alias `to`). Die Eigenschaft {{cssxref("translate")}} wird auf `0%` und {{cssxref("scale")}} auf `1`, also `100%`, gesetzt. Damit endet die Animation der Überschrift in ihrem Standardzustand, bündig mit dem linken Rand des Inhaltsbereichs.

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

Fügen wir der Animation aus dem vorherigen Beispiel eine weitere Keyframe-Animation hinzu. Angenommen, Alices Name soll rosa werden und wachsen, bevor er beim Gleiten von rechts nach links wieder auf seine ursprüngliche Größe und Farbe zurückkehrt. Wir könnten zwar {{cssxref("font-size")}} ändern, aber Änderungen an Eigenschaften, die das Box-Modell beeinflussen, wirken sich negativ auf die Leistung aus. Stattdessen umschließen wir ihren Namen mit einem {{htmlelement("span")}} und skalieren und färben dieses separat. Dafür ist eine zweite Animation erforderlich, die nur das `<span>` beeinflusst:

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

```css live-sample___adding-another-keyframe-animation
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

Wir haben „Alice“ mit einem {{htmlelement("span")}} umschlossen:

```html live-sample___adding-another-keyframe-animation
<p>
  The Caterpillar and <span>Alice</span> looked at each other for some time in
  silence: at last the Caterpillar took the hookah out of its mouth, and
  addressed her in a languid, sleepy voice.
</p>
```

Dadurch weiß der Browser, dass der Name während der ersten und letzten 25% der Animation unverändert bleiben soll, dazwischen aber rosa wird, größer wird und wieder auf seine ursprüngliche Größe zurückkehrt. Wir setzen die Eigenschaft {{cssxref("display")}} des span-Elements auf `inline-block`, da `transform`-Eigenschaften keine Auswirkungen auf nicht ersetzte {{Glossary("inline-level_content", "Inline-Level-Inhalte")}} haben.

> [!NOTE]
> Laden Sie die Seite neu, um die Animation zu sehen.

{{EmbedLiveSample("adding-another-keyframe-animation","100%","250")}}

### Die Animation wiederholen

Damit sich die Animation wiederholt, geben Sie mit der Eigenschaft {{cssxref("animation-iteration-count")}} an, wie oft sie ablaufen soll. Hier verwenden wir `infinite`, damit sie sich unbegrenzt wiederholt:

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

### Die Animation hin- und herlaufen lassen

Die Animation wiederholt sich jetzt, springt aber bei jedem neuen Durchlauf abrupt an den Anfang zurück. Stattdessen soll sie sich auf dem Bildschirm hin- und herbewegen. Das erreichen wir, indem wir {{cssxref("animation-direction")}} auf `alternate` setzen:

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

### Animationsereignisse verwenden

Animationsereignisse geben Ihnen zusätzliche Kontrolle über Animationen und liefern nützliche Informationen über sie. Mit diesen Ereignissen, die durch das Objekt [`AnimationEvent`](/de/docs/Web/API/AnimationEvent) repräsentiert werden, können Sie erkennen, wann Animationen beginnen, enden oder eine neue Iteration starten. Jedes Ereignis enthält den Zeitpunkt seines Auftretens und den Namen der Animation, die es ausgelöst hat.

Wir ändern das Beispiel mit dem gleitenden Text so, dass es beim Auftreten jedes Animationsereignisses Informationen darüber ausgibt. So können wir sehen, wie diese Ereignisse funktionieren.

Wir verwenden dieselbe Keyframe-Animation wie im vorherigen Beispiel. Sie dauert 3 Sekunden, heißt „slide-in“, wird 3-mal ausgeführt und wechselt bei jedem Durchlauf die Richtung. In {{cssxref("@keyframes")}} werden Skalierung und Verschiebung entlang der x-Achse verändert, damit das Element über den Bildschirm gleitet.

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

#### Event-Listener für die Animation hinzufügen

Wir verwenden JavaScript-Code, um auf alle drei möglichen Animationsereignisse zu reagieren. Der folgende Code richtet die Event-Listener ein. Wir rufen ihn auf, sobald das Dokument geladen ist.

```js
const element = document.getElementById("watch-me");
element.addEventListener("animationstart", listener);
element.addEventListener("animationend", listener);
element.addEventListener("animationiteration", listener);

element.className = "slide-in";
```

Dieser Code ist recht üblich. Einzelheiten zu seiner Funktionsweise finden Sie in der Dokumentation zu [`eventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener). Zum Schluss setzt der Code die `class` des zu animierenden Elements auf „slide-in“. Damit starten wir die Animation.

Warum ist das nötig? Das Ereignis `animationstart` wird ausgelöst, sobald die Animation beginnt. In unserem Fall wäre das schon vor der Ausführung unseres Codes. Deshalb starten wir die Animation selbst, indem wir dem Element erst nachträglich die Klasse zuweisen, deren Stil animiert wird.

#### Die Ereignisse empfangen

Die Ereignisse werden an die unten gezeigte Funktion `listener()` übergeben.

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

Auch dieser Code ist sehr einfach. Er prüft [`event.type`](/de/docs/Web/API/Event/type), um die Art des Animationsereignisses zu bestimmen, und fügt dann eine passende Notiz zum {{HTMLElement("ul")}} (einer ungeordneten Liste) hinzu, in der wir die Ereignisse protokollieren.

Die Ausgabe sieht ungefähr so aus:

- Gestartet: Vergangene Zeit ist 0
- Neuer Durchlauf gestartet zum Zeitpunkt 3.01200008392334
- Neuer Durchlauf gestartet zum Zeitpunkt 6.00600004196167
- Beendet: Vergangene Zeit ist 9.234000205993652

Beachten Sie, dass die Zeitangaben sehr nahe an den Werten liegen, die aufgrund des konfigurierten Timings zu erwarten wären, ihnen aber nicht exakt entsprechen. Beachten Sie außerdem, dass nach der letzten Iteration der Animation kein `animationiteration`-Ereignis gesendet wird, sondern ein `animationend`-Ereignis.

Der Vollständigkeit halber folgt hier das HTML für den Seiteninhalt, einschließlich der Liste, in die das Skript Informationen über die empfangenen Ereignisse einfügt:

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

### display und content-visibility animieren

Dieses Beispiel zeigt, wie {{cssxref("display")}} und {{cssxref("content-visibility")}} animiert werden können. Das ist nützlich für Animationen beim Ein- und Ausblenden: Sie können beispielsweise einen Container mit `display: none` aus der Darstellung entfernen, ihn aber zuvor mit {{cssxref("opacity")}} sanft ausblenden, statt ihn sofort verschwinden zu lassen.

Unterstützende Browser animieren `display` und `content-visibility` mit einer Variante des [diskreten Animationstyps](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete). Im Allgemeinen bedeutet das, dass die Eigenschaften nach 50% der Animationsdauer zwischen zwei Werten umschalten.

Eine Ausnahme gilt für Animationen zwischen `display: none` oder `content-visibility: hidden` und einem sichtbaren Wert. In diesem Fall schaltet der Browser so zwischen den Werten um, dass der animierte Inhalt während der gesamten Animationsdauer sichtbar bleibt.

Zum Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wechselt der Wert bei `0%` der Animationsdauer zu `block`. So bleibt der Inhalt durchgehend sichtbar.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wechselt der Wert erst bei `100%` der Animationsdauer zu `none`. So bleibt der Inhalt bis zum Ende sichtbar.

#### HTML

Das HTML enthält zwei {{htmlelement("p")}}-Elemente und dazwischen ein {{htmlelement("div")}}-Element, dessen `display`-Wert wir von `none` zu `block` animieren.

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

Beachten Sie, dass die Eigenschaft `display` in den Keyframe-Animationen enthalten ist.

#### JavaScript

Abschließend fügen wir etwas JavaScript hinzu, um Event-Listener einzurichten, die die Animationen auslösen. Insbesondere fügen wir dem `<div>` die Klasse `fade-in` hinzu, wenn es erscheinen soll, und `fade-out`, wenn es verschwinden soll.

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

- Modul [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
- [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
- [CSS-Übergänge verwenden](/de/docs/Web/CSS/Guides/Transitions/Using)
- [Die Web Animations API verwenden](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
