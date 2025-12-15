---
title: Verwendung von CSS-Übergängen
short-title: Verwendung von Übergängen
slug: Web/CSS/Guides/Transitions/Using
l10n:
  sourceCommit: 32bdfdb82cf91ce9942b694286dec62be2cc20aa
---

**CSS-Übergänge** bieten eine Möglichkeit, die Animationsgeschwindigkeit bei Änderungen von CSS-Eigenschaften zu steuern. Anstatt dass Eigenschaftenänderungen sofort wirksam werden, können Sie die Änderungen einer Eigenschaft über einen bestimmten Zeitraum hinweg erfolgen lassen. Zum Beispiel, wenn Sie die Farbe eines Elements von weiß zu schwarz ändern, erfolgt die Änderung normalerweise sofort. Mit aktivierten CSS-Übergängen erfolgen die Änderungen in Zeitintervallen, die einer Beschleunigungskurve folgen, die alle angepasst werden können.

Animationen, die den Übergang zwischen zwei Zuständen beinhalten, werden oft als _implizite Übergänge_ bezeichnet, da die Zwischenzustände zwischen dem Start- und dem Endzustand implizit vom Browser definiert werden.

![Ein CSS-Übergang weist den Browser an, die Zwischenzustände zwischen den Anfangs- und Endzuständen zu zeichnen, was dem Benutzer einen fließenden Übergang zeigt.](transitionsprinciple.png)

Mit CSS-Übergängen können Sie entscheiden, welche Eigenschaften animiert werden sollen (indem Sie [diese explizit auflisten](/de/docs/Web/CSS/Reference/Properties/transition-property)), wann die Animation startet (indem Sie eine [Verzögerung festlegen](/de/docs/Web/CSS/Reference/Properties/transition-delay)), wie lange der Übergang dauern soll (indem Sie eine [Dauer festlegen](/de/docs/Web/CSS/Reference/Properties/transition-duration)) und wie der Übergang abläuft (indem Sie eine [Easing-Funktion definieren](/de/docs/Web/CSS/Reference/Properties/transition-timing-function), z. B. linear oder schnell am Anfang, langsam am Ende).

## Welche CSS-Eigenschaften können übergangen werden?

Der Web-Autor kann definieren, welche Eigenschaft animiert werden soll und auf welche Weise. Dies ermöglicht die Erstellung komplexer Übergänge. Einige Eigenschaften sind jedoch [nicht animierbar](/de/docs/Web/CSS/Guides/Animations/Animatable_properties), da es keinen Sinn macht, sie zu animieren.

> [!NOTE]
> Der `auto`-Wert ist oft ein sehr komplexer Fall. Die Spezifikation empfiehlt, nicht von und zu `auto` zu animieren. Einige Benutzeragenten, wie diejenigen, die auf Gecko basieren, implementieren diese Anforderung, und andere, wie diejenigen, die auf WebKit basieren, sind weniger streng. Die Verwendung von Animationen mit `auto` kann zu unvorhersehbaren Ergebnissen führen, abhängig vom Browser und dessen Version, und sollte vermieden werden.

## Definition von Übergängen

CSS-Übergänge werden mit der Kurzschrift-Eigenschaft {{cssxref("transition")}} gesteuert. Dies ist der beste Weg, um Übergänge zu konfigurieren, da es einfacher ist, asynchrone Parameter zu vermeiden, was sehr frustrierend sein kann, wenn man viel Zeit mit dem Debuggen in CSS verbringen muss.

Sie können die individuellen Komponenten des Übergangs mit den folgenden Untereigenschaften steuern:

- {{cssxref("transition-property")}}
  - : Gibt den Namen oder die Namen der CSS-Eigenschaften an, auf die Übergänge angewendet werden sollen. Nur die hier aufgeführten Eigenschaften werden während der Übergänge animiert; Änderungen an allen anderen Eigenschaften erfolgen wie gewohnt sofort.
- {{cssxref("transition-duration")}}
  - : Gibt die Dauer an, über die Übergänge erfolgen sollen. Sie können eine einzige Dauer angeben, die für alle Eigenschaften während des Übergangs gilt, oder mehrere Werte, um jede Eigenschaft über einen unterschiedlichen Zeitraum hinweg zu übergehen.
- {{cssxref("transition-timing-function")}}
  - : Gibt eine Funktion an, um zu definieren, wie Zwischenwerte für Eigenschaften berechnet werden. _Easing-Funktionen_ bestimmen, wie Zwischenwerte des Übergangs berechnet werden. Die meisten [Easing-Funktionen](/de/docs/Web/CSS/Reference/Values/easing-function) können angegeben werden, indem das Diagramm der entsprechenden Funktion bereitgestellt wird, wie es durch vier Punkte definiert ist, die eine kubische Bezierkurve definieren. Sie können auch Easing aus dem [Easing functions cheat sheet](https://easings.net/).
- {{cssxref("transition-delay")}}
  - : Definiert, wie lange gewartet wird, bis die Änderung einer Eigenschaft erfolgt und der Übergang tatsächlich beginnt.

Die CSS-Kurzschrift-Syntax für `transition` wird wie folgt geschrieben:

```plain
transition: <property> <duration> <timing-function> <delay>;
```

## Beispiele

### Grundlegendes Beispiel

Dieses Beispiel führt einen Übergang der Schriftgröße über vier Sekunden aus, mit einer Verzögerung von zwei Sekunden zwischen dem Zeitpunkt, an dem der Benutzer über das Element fährt, und dem Beginn des Animationseffekts:

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

### Beispiel mit mehreren animierten Eigenschaften

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

### Wenn die Wertelisten von Eigenschaften unterschiedliche Längen haben

Wenn die Werteliste einer Eigenschaft kürzer ist als die anderen, werden ihre Werte wiederholt, um sie anzugleichen. Zum Beispiel:

```css
div {
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s;
}
```

Dies wird behandelt, als ob es wäre:

```css
div {
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s, 3s, 5s;
}
```

Wenn die Werteliste einer Eigenschaft länger ist als die für {{cssxref("transition-property")}}, wird sie abgeschnitten, sodass wenn Sie folgendes CSS haben:

```css
div {
  transition-property: opacity, left;
  transition-duration: 3s, 5s, 2s, 1s;
}
```

Dies wird interpretiert als:

```css
div {
  transition-property: opacity, left;
  transition-duration: 3s, 5s;
}
```

### Verwendung von Übergängen bei der Hervorhebung von Menüs

Eine häufige Verwendung von CSS ist es, Elemente in einem Menü hervorzuheben, wenn der Benutzer den Mauszeiger darüber bewegt. Es ist einfach, Übergänge zu verwenden, um den Effekt noch attraktiver zu gestalten.

Zuerst richten wir das Menü mit HTML ein:

```html
<nav>
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact Us</a>
  <a href="#">Links</a>
</nav>
```

Dann erstellen wir das CSS, um das Aussehen und das Verhalten unseres Menüs zu implementieren:

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

Dieses CSS legt das Aussehen des Menüs fest, bei dem sich sowohl die Hintergrund- als auch die Textfarben ändern, wenn sich das Element in seinen {{cssxref(":hover")}}- und {{cssxref(":focus")}}-Zuständen befindet:

{{EmbedLiveSample("Using transitions when highlighting menus")}}

### Übergänge bei `display` und `content-visibility`

Dieses Beispiel demonstriert, wie {{cssxref("display")}} und {{cssxref("content-visibility")}} übergangen werden können. Dieses Verhalten ist nützlich für die Erstellung von Ein- und Ausblendeanimationen, bei denen Sie beispielsweise ein Container-Element aus dem DOM mit `display: none` entfernen möchten, es aber mit {{cssxref("opacity")}} ausblenden lassen möchten, anstatt dass es sofort verschwindet.

Unterstützende Browser übergehen `display` und `content-visibility` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete). Dies bedeutet in der Regel, dass Eigenschaften während der Animation zwischen zwei Werten zu 50% umgeschaltet werden.

Es gibt jedoch eine Ausnahme, nämlich wenn von/zu `display: none` oder `content-visibility: hidden` animiert wird. In diesem Fall schaltet der Browser zwischen den beiden Werten um, sodass der übergangene Inhalt für die gesamte Animationsdauer angezeigt wird.

Zum Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wird der Wert zu `block` bei `0%` der Animationsdauer umgeschaltet, sodass er während der gesamten Animation sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wird der Wert zu `none` bei `100%` der Animationsdauer umgeschaltet, sodass er während der gesamten Animation sichtbar ist.

Wenn diese Eigenschaften übergegangen werden, muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) auf den Übergängen gesetzt werden. Dies aktiviert effektiv `display`/`content-visibility` Übergänge.

Beim Übergang von `display` wird [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style) benötigt, um eine Reihe von Anfangswerten für Eigenschaften bereitzustellen, die an einem Element festgelegt sind, von dem Sie aus beim ersten Stilaktualisierung des Elements übergehen möchten. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden CSS-Übergänge nicht bei den ersten Stilaktualisierungen von Elementen ausgelöst, wenn sie erstmals im DOM erscheinen, was auch den Wechsel von `display` von `none` zu einem anderen Zustand einschließt. `content-visibility` Animationen benötigen keine Anfangswerte, die in einem `@starting-style`-Block angegeben sind. Dies liegt daran, dass `content-visibility` ein Element nicht aus dem DOM ausblendet wie `display`: Es überspringt einfach das Rendering des Inhalts des Elements.

#### HTML

Das HTML enthält zwei {{htmlelement("p")}}-Elemente mit einem {{htmlelement("div")}} dazwischen, das wir von `display` `none` zu `block` animieren werden.

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

Beachten Sie den `@starting-style`-Block, der den Anfangsstil für den Übergang angibt, und die Aufnahme der `display`-Eigenschaft in die Übergangsliste, wobei `allow-discrete` darauf gesetzt ist.

#### JavaScript

Schließlich fügen wir etwas JavaScript hinzu, um Event-Listener einzurichten, die den Übergang auslösen (über die `showing`-Klasse).

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

{{EmbedLiveSample("Transitioning display and content-visibility", "100%", "350")}}

## JavaScript-Beispiele

> [!NOTE]
> Es ist Vorsicht geboten, wenn ein Übergang unmittelbar nach folgenden Ereignissen erfolgt:
>
> - Hinzufügen des Elements zum DOM mittels `.appendChild()`
> - Entfernen der Eigenschaft `display: none;` eines Elements.
>
> Dies wird so behandelt, als ob der Anfangszustand niemals aufgetreten wäre und das Element immer in seinem Endzustand gewesen wäre. Eine Möglichkeit, diese Einschränkung zu überwinden, besteht darin, `setTimeout()` um einige Millisekunden zu verzögern, bevor Sie die CSS-Eigenschaft ändern, zu der Sie übergehen möchten.

### Verwendung von Übergängen zur Optimierung von JavaScript-Funktionalitäten

Übergänge sind ein großartiges Werkzeug, um Dinge viel flüssiger aussehen zu lassen, ohne etwas an Ihrer JavaScript-Funktionalität ändern zu müssen. Sehen wir uns folgendes Beispiel an.

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

Mit CSS können Sie die durch JavaScript angewandten Stile glätten. Fügen Sie dem Element einen Übergang hinzu, und jede Änderung erfolgt nahtlos:

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

### Erkennen des Beginns und Abschlusses eines Übergangs

Sie können das [`transitionend`](/de/docs/Web/API/Element/transitionend_event)-Ereignis verwenden, um zu erkennen, dass eine Animation zu Ende ist. Dies ist ein [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)-Objekt, das zwei zusätzliche Eigenschaften über ein typisches [`Event`](/de/docs/Web/API/Event)-Objekt hinaus hat:

- `propertyName`
  - : Ein String, der den Namen der CSS-Eigenschaft angibt, deren Übergang abgeschlossen ist.
- `elapsedTime`
  - : Eine Float-Zahl, die angibt, wie viele Sekunden der Übergang lief, sobald das Ereignis ausgelöst wurde. Dieser Wert wird nicht von dem Wert von {{cssxref("transition-delay")}} beeinflusst.

Wie gewohnt können Sie die Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um auf dieses Ereignis zu achten:

```js
el.addEventListener("transitionend", updateTransition);
```

Sie erkennen den Beginn eines Übergangs anhand von [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event) (wird vor jeder Verzögerung ausgelöst) und [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event) (wird nach jeder Verzögerung ausgelöst), auf dieselbe Art und Weise:

```js
el.addEventListener("transitionrun", signalStart);
el.addEventListener("transitionstart", signalStart);
```

> [!NOTE]
> Das `transitionend`-Ereignis wird nicht ausgelöst, wenn der Übergang abgebrochen wird, bevor der Übergang abgeschlossen ist, weil entweder das Element auf {{cssxref("display", "display: none")}} gesetzt wird oder der animierte Eigenschaftswert geändert wird.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Die [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)-Schnittstelle und das [`transitionend`](/de/docs/Web/API/Element/transitionend_event)-Ereignis
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
