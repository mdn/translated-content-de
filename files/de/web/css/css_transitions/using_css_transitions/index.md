---
title: Verwendung von CSS-Übergängen
short-title: Verwenden von Übergängen
slug: Web/CSS/CSS_transitions/Using_CSS_transitions
l10n:
  sourceCommit: 7615562a3689a3e23a2b6b623597f4391740a53e
---

**CSS-Übergänge** bieten eine Möglichkeit, die Animationsgeschwindigkeit bei der Änderung von CSS-Eigenschaften zu steuern. Anstatt dass sich Eigenschaftsänderungen sofort auswirken, können Sie die Änderungen einer Eigenschaft über einen Zeitraum hinweg stattfinden lassen. Wenn Sie zum Beispiel die Farbe eines Elements von Weiß nach Schwarz ändern, erfolgt die Änderung normalerweise sofort. Mit aktivierten CSS-Übergängen erfolgen die Änderungen in Zeitintervallen, die einer Beschleunigungskurve folgen, die alle angepasst werden können.

Animationen, die den Wechsel zwischen zwei Zuständen beinhalten, werden oft als _implizite Übergänge_ bezeichnet, da die Zustände zwischen dem Start- und dem Endzustand implizit vom Browser definiert werden.

![Ein CSS-Übergang weist den Browser an, die Zwischenzustände zwischen den Anfangs- und den Endzuständen zu zeichnen, wodurch dem Benutzer eine reibungslose Übergänge angezeigt werden.](transitionsprinciple.png)

CSS-Übergänge lassen Sie entscheiden, welche Eigenschaften animiert werden sollen (indem Sie [_diese ausdrücklich auflisten_](/de/docs/Web/CSS/transition-property)), wann die Animation beginnen soll (indem Sie eine [_Verzögerung_](/de/docs/Web/CSS/transition-delay) einstellen), wie lange der Übergang dauern wird (indem Sie eine [_Dauer_](/de/docs/Web/CSS/transition-duration) einstellen), und wie der Übergang ablaufen soll (indem Sie eine [_Beschleunigungsfunktion_](/de/docs/Web/CSS/transition-timing-function) definieren, z.B. linear oder schnell am Anfang, langsam am Ende).

## Welche CSS-Eigenschaften können übergangen werden?

Der Webautor kann definieren, welche Eigenschaft animiert werden soll und auf welche Weise. Dies ermöglicht die Erstellung komplexer Übergänge. Einige Eigenschaften sind jedoch [nicht animierbar](/de/docs/Web/CSS/CSS_animated_properties), da es keinen Sinn ergibt, sie zu animieren.

> [!NOTE]
> Der Wert `auto` ist oft ein sehr komplexer Fall. Die Spezifikation empfiehlt, nicht von und zu `auto` zu animieren. Einige Benutzeragenten, wie die auf Gecko basierenden, implementieren diese Anforderung, während andere, wie die auf WebKit basierenden, weniger streng sind. Die Verwendung von Animationen mit `auto` kann je nach Browser und Version zu unvorhersehbaren Ergebnissen führen und sollte vermieden werden.

## Definieren von Übergängen

CSS-Übergänge werden mittels der Kurzformeigenschaft {{cssxref("transition")}} gesteuert. Dies ist der beste Weg, um Übergänge zu konfigurieren, da es einfacher ist, asynchrone Parameter zu vermeiden, die sehr frustrierend sein können und viel Zeit zum Debuggen in CSS erfordern.

Sie können die einzelnen Komponenten des Übergangs mit den folgenden Untereigenschaften steuern:

- {{cssxref("transition-property")}}
  - : Gibt den Namen oder die Namen der CSS-Eigenschaften an, auf die Übergänge angewendet werden sollen. Nur die hier aufgeführten Eigenschaften werden während der Übergänge animiert; Änderungen an allen anderen Eigenschaften erfolgen wie gewohnt sofort.
- {{cssxref("transition-duration")}}
  - : Gibt die Dauer an, über die die Übergänge stattfinden sollen. Sie können eine einzelne Dauer angeben, die für alle Eigenschaften während des Übergangs gilt, oder mehrere Werte, um jeder Eigenschaft zu ermöglichen, über einen anderen Zeitraum zu wechseln.
- {{cssxref("transition-timing-function")}}
  - : Gibt eine Funktion an, um zu definieren, wie Zwischenwerte für Eigenschaften berechnet werden. _Beschleunigungsfunktionen_ bestimmen, wie Zwischenwerte des Übergangs berechnet werden. Die meisten [Beschleunigungsfunktionen](/de/docs/Web/CSS/easing-function) können angegeben werden, indem Sie das Diagramm der entsprechenden Funktion bereitstellen, wie es durch vier Punkte definiert ist, die eine kubische Bezier definieren. Sie können auch eine Auswahl aus dem [Easing functions cheat sheet](https://easings.net/) treffen.
- {{cssxref("transition-delay")}}
  - : Bestimmt, wie lange gewartet werden soll, bis eine Eigenschaft geändert wird und der Übergang tatsächlich beginnt.

Die CSS-Syntax der Kurzform `transition` wird wie folgt geschrieben:

```plain
transition: <property> <duration> <timing-function> <delay>;
```

## Beispiele

### Einfaches Beispiel

Dieses Beispiel führt eine viersekündige Schriftgrößenänderung mit einer zweisekündigen Verzögerung aus, zwischen dem Zeitpunkt, an dem der Benutzer das Element mit der Maus überfährt, und dem Beginn des Animationseffekts:

```css
#delay {
  font-size: 14px;
  transition-property: font-size;
  transition-duration: 4s;
  transition-delay: 2s;
}

#delay:hover {
  font-size: 36px;
}
```

### Beispiel für mehrere animierte Eigenschaften

```html hidden
<body>
  <p>
    The box below combines transitions for: width, height, background-color,
    rotate. Hover over the box to see these properties animated.
  </p>
  <div class="box">Sample</div>
</body>
```

#### CSS

```css
.box {
  border-style: solid;
  border-width: 1px;
  display: block;
  width: 100px;
  height: 100px;
  background-color: blue;
  transition:
    width 2s,
    height 2s,
    background-color 2s,
    rotate 2s;
}

.box:hover {
  background-color: #ffcccc;
  width: 200px;
  height: 200px;
  rotate: 180deg;
}
```

{{EmbedLiveSample('Multiple_animated_properties_example', 600, 300)}}

### Wenn Eigenschaftswerte-Listen unterschiedliche Längen haben

Falls die Liste der Werte einer Eigenschaft kürzer ist als die anderer, werden ihre Werte wiederholt, um sie abzugleichen. Zum Beispiel:

```css
div {
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s;
}
```

Dies wird so behandelt, als ob es wäre:

```css
div {
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s, 3s, 5s;
}
```

Ebenso wird, wenn die Werteliste einer Eigenschaft länger ist als die für {{cssxref("transition-property")}}, diese abgeschnitten, sodass der folgende CSS-Code:

```css
div {
  transition-property: opacity, left;
  transition-duration: 3s, 5s, 2s, 1s;
}
```

wie folgt interpretiert wird:

```css
div {
  transition-property: opacity, left;
  transition-duration: 3s, 5s;
}
```

### Verwendung von Übergängen beim Hervorheben von Menüs

Eine häufige Verwendung von CSS ist das Hervorheben von Elementen in einem Menü, wenn der Benutzer den Mauszeiger darüber bewegt. Es ist einfach, Übergänge zu nutzen, um den Effekt noch attraktiver zu gestalten.

Zuerst richten wir das Menü mit HTML ein:

```html
<nav>
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact Us</a>
  <a href="#">Links</a>
</nav>
```

Dann erstellen wir das CSS, um das Aussehen und Verhalten unseres Menüs zu implementieren:

```css
nav {
  display: flex;
  gap: 0.5rem;
}

a {
  flex: 1;
  background-color: #333333;
  color: white;
  border: 1px solid;
  padding: 0.5rem;
  text-align: center;
  text-decoration: none;
  transition: all 0.5s ease-out;
}

a:hover,
a:focus {
  background-color: white;
  color: #333333;
}
```

Dieses CSS legt das Aussehen des Menüs fest, wobei die Hintergrund- und Textfarben sich ändern, wenn sich das Element in seinen {{cssxref(":hover")}} und {{cssxref(":focus")}} Zuständen befindet:

{{EmbedLiveSample("Using transitions when highlighting menus")}}

### Übergang der Darstellung und Inhalts-Sichtbarkeit

Dieses Beispiel zeigt, wie [`display`](/de/docs/Web/CSS/display) und [`content-visibility`](/de/docs/Web/CSS/content-visibility) übergangen werden können. Dieses Verhalten ist nützlich, um Eintritts-/Austrittsanimationen zu erstellen, bei denen Sie beispielsweise einen Container aus dem DOM mit `display: none` entfernen möchten, jedoch mit [`opacity`](/de/docs/Web/CSS/opacity) verblassen, anstatt sofort zu verschwinden.

Unterstützende Browser verwenden einen Übergang für `display` und `content-visibility` mit einer Variante des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Dies bedeutet im Allgemeinen, dass Eigenschaften zwischen zwei Werten 50% durch die Animation wechseln.

Es gibt jedoch eine Ausnahme, nämlich wenn zu/von `display: none` oder `content-visibility: hidden` animiert wird. In diesem Fall wechselt der Browser zwischen den beiden Werten, sodass der Übergangsinhalt während der gesamten Animationsdauer angezeigt wird.

Zum Beispiel:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) wird der Wert bei `0%` der Animationsdauer auf `block` umgeschaltet, sodass es durchgehend sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` wird der Wert bei `100%` der Animationsdauer auf `none` umgeschaltet, sodass es durchgehend sichtbar ist.

Beim Übergang dieser Eigenschaften muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) auf die Übergänge angewendet werden. Dies aktiviert effektiv `display`/`content-visibility` Übergänge.

Beim Übergang von `display` wird [`@starting-style`](/de/docs/Web/CSS/@starting-style) benötigt, um einen Satz Anfangswerte für Eigenschaften bereitzustellen, die auf ein Element gesetzt sind, von dem Sie möchten, dass es ab dem ersten Stil-Update übergeht. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden CSS-Übergänge nicht bei den ersten Stil-Updates von Elementen ausgelöst, wenn sie erstmals im DOM erscheinen, was den Fall einschließt, wenn `display` von `none` zu einem anderen Zustand wechselt. `content-visibility` Animationen benötigen keine Anfangswerte, die in einem `@starting-style` Block angegeben werden. Das liegt daran, dass `content-visibility` ein Element nicht wie `display` aus dem DOM versteckt: es überspringt nur das Rendern des Inhalts des Elements.

#### HTML

Das HTML enthält zwei {{htmlelement("p")}} Elemente mit einem {{htmlelement("div")}} dazwischen, das wir von `display` `none` zu `block` animieren werden.

```html
<p>
  Click anywhere on the screen or press any key to toggle the
  <code>&lt;div&gt;</code> between hidden and showing.
</p>

<div>
  This is a <code>&lt;div&gt;</code> element that transitions between
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

  display: none;
  opacity: 0;
  transition:
    opacity 1s,
    display 1s allow-discrete;
  /* Equivalent to
  transition: all 1s allow-discrete; */
}

.showing {
  opacity: 1;
  display: block;
}

@starting-style {
  .showing {
    opacity: 0;
  }
}
```

Beachten Sie den `@starting-style` Block, der verwendet wird, um den Anfangsstil für den Übergang anzugeben, und die Aufnahme der `display` Eigenschaft in die Übergangsliste, mit `allow-discrete` darauf gesetzt.

#### JavaScript

Abschließend fügen wir etwas JavaScript hinzu, um Ereignislistener einzurichten, die den Übergang auslösen (über die `showing` Klasse).

```js
const divElem = document.querySelector("div");
const htmlElem = document.querySelector(":root");

htmlElem.addEventListener("click", showHide);
document.addEventListener("keydown", showHide);

function showHide() {
  divElem.classList.toggle("showing");
}
```

#### Ergebnis

Der Code wird wie folgt gerendert:

{{ EmbedLiveSample("Transitioning display and content-visibility", "100%", "350") }}

## JavaScript-Beispiele

> [!NOTE]
> Vorsicht ist geboten, wenn ein Übergang unmittelbar nachfolgend verwendet wird:
>
> - Hinzufügen des Elements zum DOM mittels `.appendChild()`
> - Entfernen der `display: none;` Eigenschaft eines Elements.
>
> Dies wird so behandelt, als ob der Anfangszustand nie aufgetreten und das Element immer im Endzustand gewesen wäre. Die einfache Möglichkeit, diese Einschränkung zu überwinden, besteht darin, ein `setTimeout()` von einigen Millisekunden anzuwenden, bevor die CSS-Eigenschaft geändert wird, die Sie übergehen möchten.

### Verwenden von Übergängen, um JavaScript-Funktionalität reibungslos zu gestalten

Übergänge sind ein großartiges Werkzeug, um Dinge viel glatter aussehen zu lassen, ohne etwas an der JavaScript-Funktionalität ändern zu müssen. Nehmen Sie das folgende Beispiel.

```html live-sample___js-transitions
<p>Click anywhere to move the ball</p>
<div id="foo" class="ball"></div>
```

```js live-sample___js-transitions
// Make the ball move to a certain position:
const f = document.getElementById("foo");
document.addEventListener("click", (ev) => {
  f.style.transform = `translateY(${ev.clientY - 25}px)`;
  f.style.transform += `translateX(${ev.clientX - 25}px)`;
});
```

Mit CSS können Sie die durch JavaScript angewandten Stile glätten. Fügen Sie dem Element einen Übergang hinzu und jede Änderung wird reibungslos erfolgen:

```css hidden live-sample___js-transitions
body {
  background-color: white;
  color: #333333;
  font:
    1.2em / 1.5 "Helvetica Neue",
    "Helvetica",
    "Arial",
    sans-serif;
  padding: 0;
  margin: 0;
}

p {
  margin-top: 3em;
}

main {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 660px;
  height: 400px;
  border: 1px solid #cccccc;
  padding: 20px;
}
```

```css live-sample___js-transitions
.ball {
  border-radius: 25px;
  width: 50px;
  height: 50px;
  background: #cc0000;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 1s;
}
```

{{EmbedLiveSample("js-transitions", "", "400px")}}

### Erkennen des Beginns und des Abschlusses eines Übergangs

Sie können das [`transitionend`](/de/docs/Web/API/Element/transitionend_event) Ereignis verwenden, um zu erkennen, dass eine Animation abgeschlossen ist. Dies ist ein [`TransitionEvent`](/de/docs/Web/API/TransitionEvent) Objekt, das zwei zusätzliche Eigenschaften jenseits eines typischen [`Event`](/de/docs/Web/API/Event) Objekts hat:

- `propertyName`
  - : Ein String, der den Namen der CSS-Eigenschaft angibt, deren Übergang abgeschlossen ist.
- `elapsedTime`
  - : Ein Float, der die Anzahl der Sekunden angibt, die der Übergang zu dem Zeitpunkt lief, als das Ereignis ausgelöst wurde. Dieser Wert wird nicht durch den Wert von {{cssxref("transition-delay")}} beeinflusst.

Wie üblich können Sie die Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um für dieses Ereignis zu lauschen:

```js
el.addEventListener("transitionend", updateTransition);
```

Sie erkennen den Beginn eines Übergangs mit [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event) (wird vor einer Verzögerung ausgelöst) und [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event) (wird nach einer Verzögerung ausgelöst), auf die gleiche Weise:

```js
el.addEventListener("transitionrun", signalStart);
el.addEventListener("transitionstart", signalStart);
```

> [!NOTE]
> Das `transitionend` Ereignis wird nicht ausgelöst, wenn der Übergang abgebrochen wird, bevor der Übergang abgeschlossen ist, weil entweder das Element auf {{cssxref("display", "display: none")}} gesetzt wird oder der Wert der animierenden Eigenschaft geändert wird.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das [`TransitionEvent`](/de/docs/Web/API/TransitionEvent) Interface und das [`transitionend`](/de/docs/Web/API/Element/transitionend_event) Ereignis
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
