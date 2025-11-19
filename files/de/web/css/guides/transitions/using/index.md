---
title: Verwendung von CSS-Übergängen
short-title: Verwendung von Übergängen
slug: Web/CSS/Guides/Transitions/Using
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

**CSS-Übergänge** bieten eine Möglichkeit, die Animationsgeschwindigkeit beim Ändern von CSS-Eigenschaften zu kontrollieren. Anstatt dass sich Eigenschaftsänderungen sofort auswirken, können Sie die Änderungen einer Eigenschaft über einen Zeitraum stattfinden lassen. Wenn Sie zum Beispiel die Farbe eines Elements von weiß zu schwarz ändern, erfolgt die Änderung normalerweise sofort. Mit aktivierten CSS-Übergängen erfolgen die Änderungen in Zeitintervallen, die einer Beschleunigungskurve folgen, die alle anpassbar sind.

Animationen, die den Übergang zwischen zwei Zuständen umfassen, werden häufig als _implizite Übergänge_ bezeichnet, da die Zustände zwischen den Anfangs- und Endzuständen implizit durch den Browser definiert sind.

![Ein CSS-Übergang weist den Browser an, die Zwischenzustände zwischen den Anfangs- und Endzuständen zu zeichnen und zeigt dem Benutzer einen reibungslosen Übergang.](transitionsprinciple.png)

CSS-Übergänge ermöglichen Ihnen, zu entscheiden, welche Eigenschaften animiert werden sollen (indem Sie [_sie explizit auflisten_](/de/docs/Web/CSS/Reference/Properties/transition-property)), wann die Animation startet (durch das Setzen einer [_Verzögerung_](/de/docs/Web/CSS/Reference/Properties/transition-delay)), wie lange der Übergang dauern soll (durch das Festlegen einer [_Dauer_](/de/docs/Web/CSS/Reference/Properties/transition-duration)) und wie der Übergang abläuft (durch das Definieren einer [_Easing-Funktion_](/de/docs/Web/CSS/Reference/Properties/transition-timing-function), z.B. linear oder schnell am Anfang, langsam am Ende).

## Welche CSS-Eigenschaften können übergeglitten werden?

Der Webentwickler kann definieren, welche Eigenschaft animiert werden muss und in welcher Weise. Dies ermöglicht die Erstellung komplexer Übergänge. Einige Eigenschaften sind jedoch [nicht animierbar](/de/docs/Web/CSS/Guides/Animations/Animatable_properties), da es keinen Sinn ergibt, sie zu animieren.

> [!NOTE]
> Der Wert `auto` ist oft ein sehr komplexer Fall. Die Spezifikation empfiehlt, nicht von und zu `auto` zu animieren. Einige Benutzeragenten, wie die auf Gecko basierenden, implementieren diese Anforderung, während andere, wie die auf WebKit basierenden, weniger streng sind. Die Verwendung von Animationen mit `auto` kann zu unvorhersehbaren Ergebnissen führen, abhängig vom Browser und seiner Version, und sollte vermieden werden.

## Definition von Übergängen

CSS-Übergänge werden mit der Kurzformeigenschaft {{cssxref("transition")}} gesteuert. Dies ist der beste Weg, um Übergänge zu konfigurieren, da es einfacher ist, asynchrone Parameter zu vermeiden, was sehr frustrierend sein kann, wenn viel Zeit mit dem Debuggen in CSS verbracht werden muss.

Sie können die einzelnen Komponenten des Übergangs mit den folgenden Untereigenschaften steuern:

- {{cssxref("transition-property")}}
  - : Gibt den oder die Namen der CSS-Eigenschaften an, auf die Übergänge angewendet werden sollen. Nur die hier aufgeführten Eigenschaften werden während der Übergänge animiert; Änderungen an allen anderen Eigenschaften erfolgen wie gewohnt sofort.
- {{cssxref("transition-duration")}}
  - : Gibt die Dauer an, über die Übergänge erfolgen sollen. Sie können eine einzige Dauer angeben, die für alle Eigenschaften während des Übergangs gilt, oder mehrere Werte, um jeder Eigenschaft zu ermöglichen, über einen anderen Zeitraum zu übergehen.
- {{cssxref("transition-timing-function")}}
  - : Gibt eine Funktion an, um zu definieren, wie Zwischenwerte für Eigenschaften berechnet werden. _Easing-Funktionen_ bestimmen, wie Zwischenwerte des Übergangs berechnet werden. Die meisten [Easing-Funktionen](/de/docs/Web/CSS/Reference/Values/easing-function) können durch Angabe des Graphen der entsprechenden Funktion spezifiziert werden, wie sie durch vier Punkte definiert ist, die eine kubische Bezier-Kurve definieren. Sie können auch Easing aus dem [Easing functions cheat sheet](https://easings.net/) wählen.
- {{cssxref("transition-delay")}}
  - : Definiert, wie lange gewartet wird, zwischen dem Zeitpunkt, an dem eine Eigenschaft geändert wird und dem eigentlichen Beginn des Übergangs.

Die Kurzformsyntax von `transition` in CSS wird wie folgt geschrieben:

```plain
transition: <property> <duration> <timing-function> <delay>;
```

## Beispiele

### Einfaches Beispiel

Dieses Beispiel führt einen viersekündigen Schriftgrößenübergang mit einer zweisekündigen Verzögerung zwischen dem Zeitpunkt, an dem der Benutzer über das Element fährt, und dem Beginn des Animationseffekts aus:

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

### Wenn Listen von Eigenschaftswerten unterschiedlich lang sind

Wenn die Werteliste einer Eigenschaft kürzer ist als die anderer, werden ihre Werte wiederholt, um sie anzupassen. Zum Beispiel:

```css
div {
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s;
}
```

Dies wird behandelt, als wäre es:

```css
div {
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s, 3s, 5s;
}
```

Wenn umgekehrt die Werteliste einer Eigenschaft länger ist als die von {{cssxref("transition-property")}}, wird sie gekürzt, so dass folgende CSS:

```css
div {
  transition-property: opacity, left;
  transition-duration: 3s, 5s, 2s, 1s;
}
```

so interpretiert wird:

```css
div {
  transition-property: opacity, left;
  transition-duration: 3s, 5s;
}
```

### Verwendung von Übergängen beim Hervorheben von Menüs

Eine häufige Verwendung von CSS besteht darin, Elemente in einem Menü zu hervorheben, wenn der Benutzer den Mauszeiger über sie bewegt. Es ist einfach, Übergänge zu verwenden, um den Effekt noch attraktiver zu gestalten.

Zuerst richten wir das Menü mit HTML ein:

```html
<nav>
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact Us</a>
  <a href="#">Links</a>
</nav>
```

Dann erstellen wir das CSS, um das Aussehen und Verhalten unseres Menüs umzusetzen:

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

Dieses CSS bestimmt das Aussehen des Menüs, wobei sich Hintergrund- und Textfarben ändern, wenn sich das Element in seinen {{cssxref(":hover")}}- und {{cssxref(":focus")}}-Zuständen befindet:

{{EmbedLiveSample("Using transitions when highlighting menus")}}

### Übergang von `display` und `content-visibility`

Dieses Beispiel demonstriert, wie [`display`](/de/docs/Web/CSS/Reference/Properties/display) und [`content-visibility`](/de/docs/Web/CSS/Reference/Properties/content-visibility) übergeglitten werden können. Dieses Verhalten ist nützlich, um Ein-/Austrittsanimationen zu erstellen, bei denen Sie beispielsweise einen Container aus dem DOM mit `display: none` entfernen möchten, aber ihn mit [`opacity`](/de/docs/Web/CSS/Reference/Properties/opacity) ausblenden möchten, anstatt sofort zu verschwinden.

Unterstützende Browser übergleiten `display` und `content-visibility` mit einer Variation der [diskreten Animationstypen](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete). Dies bedeutet im Allgemeinen, dass Eigenschaften zwischen zwei Werten wechseln, bei 50 % des Animationszeitraums zwischen den beiden.

Es gibt jedoch eine Ausnahme, wenn zu/von `display: none` oder `content-visibility: hidden` animiert wird. In diesem Fall wechselt der Browser zwischen den beiden Werten, sodass der übergangene Inhalt während der gesamten Animationsdauer angezeigt wird.

Ein Beispiel:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) wird der Wert zu `block` bei `0%` der Animationsdauer umgeschaltet, damit er die ganze Zeit sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` wird der Wert zu `none` bei `100%` der Animationsdauer umgeschaltet, damit er die ganze Zeit sichtbar ist.

Beim Übergehen dieser Eigenschaften muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) für die Übergänge festgelegt werden. Dies aktiviert effektiv `display`/`content-visibility`-Übergänge.

Beim Übergehen von `display` wird [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style) benötigt, um einen Satz von Startwerten für Eigenschaften bereitzustellen, die auf ein Element gesetzt sind, von dem Sie übergehen möchten, wenn das Element seine erste Stilaktualisierung erhält. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden CSS-Übergänge nicht bei den ersten Stilaktualisierungen eines Elements ausgelöst, wenn sie erstmals im DOM erscheinen, was auch die Änderung von `display` von `none` zu einem anderen Zustand umfasst. `content-visibility`-Animationen benötigen keine Startwerte, die in einem `@starting-style`-Block spezifiziert sind. Das liegt daran, dass `content-visibility` ein Element nicht wie `display` aus dem DOM entfernt: Es wird lediglich das Rendern des Inhalts des Elements übersprungen.

#### HTML

Das HTML enthält zwei {{htmlelement("p")}}-Elemente mit einem {{htmlelement("div")}} dazwischen, das wir von `display` `none` auf `block` animieren werden.

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

Beachten Sie den `@starting-style`-Block, der verwendet wird, um den Startstil für den Übergang anzugeben, und die Einbeziehung der `display`-Eigenschaft in der Übergangsliste mit `allow-discrete` darauf gesetzt.

#### JavaScript

Schließlich fügen wir etwas JavaScript hinzu, um Ereignislistener einzurichten, die den Übergang (über die `showing`-Klasse) auslösen.

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
> Es sollte Vorsicht geboten sein, wenn ein Übergang unmittelbar nach:
>
> - dem Hinzufügen des Elements zum DOM mit `.appendChild()`
> - dem Entfernen einer `display: none;`-Eigenschaft eines Elements.
>
> behandelt wird, als wäre der Anfangszustand niemals aufgetreten und das Element wäre immer im Endzustand gewesen. Der einfache Weg, diese Einschränkung zu überwinden, besteht darin, `setTimeout()` um einige Millisekunden zu verzögern, bevor Sie die CSS-Eigenschaft ändern, zu der Sie übergehen möchten.

### Übergänge verwenden, um JavaScript-Funktionalität angenehm zu gestalten

Übergänge sind ein großartiges Werkzeug, um Dinge ohne großen Aufwand für Ihre JavaScript-Funktionalität viel angenehmer erscheinen zu lassen. Schauen Sie sich das folgende Beispiel an.

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

Mit CSS können Sie die über JavaScript angewendeten Stile glätten. Fügen Sie dem Element einen Übergang hinzu, und jede Änderung erfolgt sanft:

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

### Beginn und Abschluss eines Übergangs erkennen

Sie können das [`transitionend`](/de/docs/Web/API/Element/transitionend_event)-Ereignis verwenden, um festzustellen, dass eine Animation fertig ist. Dies ist ein [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)-Objekt, das zwei zusätzliche Eigenschaften hat, die über ein typisches [`Event`](/de/docs/Web/API/Event)-Objekt hinausgehen:

- `propertyName`
  - : Ein String, der den Namen der CSS-Eigenschaft angibt, deren Übergang abgeschlossen ist.
- `elapsedTime`
  - : Eine Gleitkommazahl, die die Anzahl der Sekunden angibt, die der Übergang zum Zeitpunkt des Ereignisauslösens lief. Dieser Wert wird nicht von der {{cssxref("transition-delay")}}-Eigenschaft beeinflusst.

Wie üblich können Sie die [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden, um dieses Ereignis zu überwachen:

```js
el.addEventListener("transitionend", updateTransition);
```

Sie erkennen den Beginn eines Übergangs mit [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event) (wird vor einer Verzögerung ausgelöst) und [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event) (wird nach einer Verzögerung ausgelöst) in ähnlicher Weise:

```js
el.addEventListener("transitionrun", signalStart);
el.addEventListener("transitionstart", signalStart);
```

> [!NOTE]
> Das `transitionend`-Ereignis wird nicht ausgelöst, wenn der Übergang abgebrochen wird, bevor der Übergang abgeschlossen ist, entweder weil das Element auf {{cssxref("display", "display: none")}} gesetzt wird oder der animierte Eigenschaftenwert geändert wird.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Die [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)-Schnittstelle und das [`transitionend`](/de/docs/Web/API/Element/transitionend_event)-Ereignis
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
