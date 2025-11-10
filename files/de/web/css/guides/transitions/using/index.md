---
title: Verwendung von CSS-Übergängen
short-title: Verwendung von Übergängen
slug: Web/CSS/Guides/Transitions/Using
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**CSS-Übergänge** bieten eine Möglichkeit, die Animationsgeschwindigkeit beim Ändern von CSS-Eigenschaften zu steuern. Anstatt dass Eigenschaftsänderungen sofort wirksam werden, können Sie die Änderungen einer Eigenschaft über einen bestimmten Zeitraum hinweg erfolgen lassen. Wenn Sie beispielsweise die Farbe eines Elements von Weiß zu Schwarz ändern, geschieht die Änderung normalerweise sofort. Mit aktivierten CSS-Übergängen erfolgen die Änderungen in Zeitintervallen, die einer Beschleunigungskurve folgen, die alle angepasst werden können.

Animationen, die den Übergang zwischen zwei Zuständen beinhalten, werden oft als _implizite Übergänge_ bezeichnet, da die Zustände zwischen dem Start- und Endzustand vom Browser implizit definiert werden.

![Ein CSS-Übergang weist den Browser an, die Zwischenzustände zwischen dem Anfangs- und Endzustand zu zeichnen, was dem Benutzer einen reibungslosen Übergang zeigt.](transitionsprinciple.png)

CSS-Übergänge ermöglichen es Ihnen, zu entscheiden, welche Eigenschaften animiert werden sollen (indem Sie [sie explizit auflisten](/de/docs/Web/CSS/Reference/Properties/transition-property)), wann die Animation beginnen soll (indem Sie eine [Verzögerung einstellen](/de/docs/Web/CSS/Reference/Properties/transition-delay)), wie lange der Übergang dauern soll (indem Sie eine [Dauer einstellen](/de/docs/Web/CSS/Reference/Properties/transition-duration)), und wie der Übergang ablaufen soll (indem Sie eine [Easing-Funktion](/de/docs/Web/CSS/Reference/Properties/transition-timing-function) definieren, z. B. linear oder schnell am Anfang, langsam am Ende).

## Welche CSS-Eigenschaften können übergangsweise geändert werden?

Der Webautor kann definieren, welche Eigenschaft animiert werden soll und auf welche Weise. Dies ermöglicht die Erstellung komplexer Übergänge. Einige Eigenschaften sind jedoch [nicht animierbar](/de/docs/Web/CSS/Guides/Animations/Animatable_properties), da es keinen Sinn macht, sie zu animieren.

> [!NOTE]
> Der `auto`-Wert ist oft ein sehr komplexer Fall. Die Spezifikation empfiehlt, nicht von und zu `auto` zu animieren. Einige Benutzeragenten, wie die auf Gecko basierenden, implementieren diese Anforderung, und andere, wie die auf WebKit basierenden, sind weniger strikt. Die Verwendung von Animationen mit `auto` kann zu unvorhersehbaren Ergebnissen führen, abhängig vom Browser und dessen Version, und sollte vermieden werden.

## Definition von Übergängen

CSS-Übergänge werden mit der Kurzform-Eigenschaft {{cssxref("transition")}} gesteuert. Dies ist der beste Weg, um Übergänge zu konfigurieren, da es einfacher macht, nicht synchronisierte Parameter zu vermeiden, was sehr frustrierend sein kann, wenn man viel Zeit mit der Fehlersuche in CSS verbringen muss.

Sie können die einzelnen Komponenten des Übergangs mit den folgenden Untereigenschaften steuern:

- {{cssxref("transition-property")}}
  - : Gibt den Namen oder die Namen der CSS-Eigenschaften an, auf die Übergänge angewendet werden sollen. Nur hier aufgelistete Eigenschaften werden während Übergängen animiert; Änderungen an allen anderen Eigenschaften erfolgen wie gewohnt sofort.
- {{cssxref("transition-duration")}}
  - : Gibt die Dauer an, über die Übergänge erfolgen sollen. Sie können eine einzelne Dauer angeben, die für alle Eigenschaften während des Übergangs gilt, oder mehrere Werte, um jeder Eigenschaft eine andere Dauer zuzuweisen.
- {{cssxref("transition-timing-function")}}
  - : Gibt eine Funktion an, um zu definieren, wie Zwischenwerte für Eigenschaften berechnet werden. _Easing-Funktionen_ bestimmen, wie Zwischenwerte des Übergangs berechnet werden. Die meisten [Easing-Funktionen](/de/docs/Web/CSS/Reference/Values/easing-function) können angegeben werden, indem der Graph der entsprechenden Funktion bereitgestellt wird, definiert durch vier Punkte, die eine kubische Bézierkurve definieren. Sie können auch Easing aus dem [Easing-Funktionen-Spickzettel](https://easings.net/) wählen.
- {{cssxref("transition-delay")}}
  - : Definiert, wie lange gewartet werden soll, zwischen der Änderung einer Eigenschaft und dem tatsächlichen Beginn des Übergangs.

Die Kurzform-Syntax für `transition` in CSS wird wie folgt geschrieben:

```plain
transition: <property> <duration> <timing-function> <delay>;
```

## Beispiele

### Einfaches Beispiel

Dieses Beispiel führt einen viersekündigen Schriftgrößenübergang mit einer zweisekündigen Verzögerung zwischen dem Zeitpunkt aus, an dem der Benutzer mit der Maus über das Element fährt, und dem Beginn des Animationseffekts:

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

### Wenn Eigenschaftswertlisten unterschiedliche Längen haben

Wenn die Werteliste einer Eigenschaft kürzer ist als die der anderen, werden ihre Werte wiederholt, um sie anzupassen. Zum Beispiel:

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

Ähnlich wird, wenn die Werteliste einer Eigenschaft länger ist als die für {{cssxref("transition-property")}}, sie abgeschnitten, so dass wenn Sie das folgende CSS haben:

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

### Verwenden von Übergängen beim Hervorheben von Menüs

Eine häufige Verwendung von CSS ist das Hervorheben von Elementen in einem Menü, wenn der Benutzer den Mauszeiger über sie bewegt. Es ist einfach, Übergänge zu nutzen, um den Effekt noch attraktiver zu gestalten.

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

Dieses CSS legt das Erscheinungsbild des Menüs fest, wobei sowohl die Hintergrund- als auch die Textfarben geändert werden, wenn sich das Element in seinem {{cssxref(":hover")}}- und {{cssxref(":focus")}}-Zustand befindet:

{{EmbedLiveSample("Using transitions when highlighting menus")}}

### Übergänge von Anzeige und content-visibility

Dieses Beispiel zeigt, wie [`display`](/de/docs/Web/CSS/Reference/Properties/display) und [`content-visibility`](/de/docs/Web/CSS/Reference/Properties/content-visibility) übergangsweise geändert werden können. Dieses Verhalten ist nützlich, um Ein- und Ausstiegsanimationen zu erstellen, bei denen Sie zum Beispiel einen Container aus dem DOM mit `display: none` entfernen möchten, aber möchten, dass er mit [`opacity`](/de/docs/Web/CSS/Reference/Properties/opacity) ausblendet, anstatt sofort zu verschwinden.

Unterstützende Browser ändern `display` und `content-visibility` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete). Dies bedeutet im Allgemeinen, dass Eigenschaften zwischen zwei Werten 50 % während der Animation zwischen den beiden umgeschaltet werden.

Es gibt jedoch eine Ausnahme, nämlich wenn zu/ab `display: none` oder `content-visibility: hidden` animiert wird. In diesem Fall wird der Browser zwischen den beiden Werten so umschalten, dass der übergangene Inhalt während der gesamten Animationsdauer angezeigt wird.

Für Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wird der Wert bei `0%` der Animationsdauer auf `block` gesetzt, damit er die gesamte Zeit sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wird der Wert bei `100%` der Animationsdauer auf `none` gesetzt, so dass er die ganze Zeit sichtbar ist.

Beim Übergang dieser Eigenschaften muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) auf den Übergängen gesetzt werden. Dies aktiviert effektiv `display`/`content-visibility`-Übergänge.

Beim Übergang von `display` wird [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style) benötigt, um einen Satz von Startwerten für Eigenschaften bereitzustellen, die auf ein Element gesetzt sind, von dem Sie beim ersten Style-Update des Elements ausgehen möchten. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden CSS-Übergänge bei den ersten Style-Updates von Elementen, wenn sie erstmals im DOM erscheinen, nicht ausgelöst, was auch dann gilt, wenn `display` von `none` zu einem anderen Zustand wechselt. `content-visibility`-Animationen benötigen keine Startwerte, die in einem `@starting-style`-Block angegeben sind, da `content-visibility` ein Element nicht aus dem DOM ausblendet wie `display`: es überspringt lediglich das Rendern des Inhalts des Elements.

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

Beachten Sie den `@starting-style`-Block, der den Startstil für den Übergang festlegt, und die Aufnahme der `display`-Eigenschaft in die Übergangsliste, mit `allow-discrete` darauf gesetzt.

#### JavaScript

Zum Schluss fügen wir etwas JavaScript hinzu, um Ereignis-Listener einzurichten, die den Übergang auslösen (über die `showing`-Klasse).

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

Der Code wird wie folgt dargestellt:

{{ EmbedLiveSample("Transitioning display and content-visibility", "100%", "350") }}

## JavaScript-Beispiele

> [!NOTE]
> Es sollte darauf geachtet werden, wenn ein Übergang unmittelbar nach:
>
> - dem Hinzufügen des Elements zum DOM mittels `.appendChild()`
> - dem Entfernen der `display: none;`-Eigenschaft eines Elements.
>
> Dies wird so behandelt, als ob der anfängliche Zustand nie aufgetreten ist und das Element immer im Endzustand war. Der einfache Weg, diese Einschränkung zu umgehen, besteht darin, ein `setTimeout()` von ein paar Millisekunden anzuwenden, bevor Sie die CSS-Eigenschaft ändern, die Sie übergangsweise ändern möchten.

### Übergänge nutzen, um JavaScript-Funktionen glatt zu machen

Übergänge sind ein großartiges Werkzeug, um Dinge viel glatter erscheinen zu lassen, ohne etwas an Ihrer JavaScript-Funktionalität ändern zu müssen. Nehmen Sie folgendes Beispiel.

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

Mit CSS können Sie die durch JavaScript angewandten Styles glätten. Fügen Sie dem Element einen Übergang hinzu und jede Änderung wird sanft umgesetzt:

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

Sie können das [`transitionend`](/de/docs/Web/API/Element/transitionend_event)-Ereignis verwenden, um zu erkennen, dass eine Animation abgeschlossen ist. Dies ist ein [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)-Objekt, das zwei zusätzliche Eigenschaften gegenüber einem typischen [`Event`](/de/docs/Web/API/Event)-Objekt hat:

- `propertyName`
  - : Ein String, der den Namen der CSS-Eigenschaft angibt, deren Übergang abgeschlossen ist.
- `elapsedTime`
  - : Ein Float, der die Anzahl der Sekunden angibt, die der Übergang lief, als das Ereignis ausgelöst wurde. Dieser Wert wird nicht durch den Wert von {{cssxref("transition-delay")}} beeinflusst.

Wie üblich können Sie die [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden, um auf dieses Ereignis zu lauschen:

```js
el.addEventListener("transitionend", updateTransition);
```

Sie erkennen den Beginn eines Übergangs mit [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event) (wird vor jeder Verzögerung ausgelöst) und [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event) (wird nach jeder Verzögerung ausgelöst), auf ähnliche Weise:

```js
el.addEventListener("transitionrun", signalStart);
el.addEventListener("transitionstart", signalStart);
```

> [!NOTE]
> Das `transitionend`-Ereignis wird nicht ausgelöst, wenn der Übergang abgebrochen wird, bevor der Übergang abgeschlossen ist, weil entweder das Element als {{cssxref("display", "display: none")}} festgelegt wird oder der Wert der animierten Eigenschaft geändert wird.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Die [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)-Schnittstelle und das [`transitionend`](/de/docs/Web/API/Element/transitionend_event)-Ereignis
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
