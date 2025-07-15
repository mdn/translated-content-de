---
title: Verwenden von CSS-Übergängen
short-title: Verwendung von Übergängen
slug: Web/CSS/CSS_transitions/Using_CSS_transitions
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**CSS-Übergänge** bieten eine Möglichkeit, die Animationsgeschwindigkeit beim Ändern von CSS-Eigenschaften zu steuern. Anstatt dass sich Eigenschaftsänderungen sofort auswirken, können Sie die Änderungen einer Eigenschaft über einen Zeitraum hinweg erfolgen lassen. Zum Beispiel, wenn Sie die Farbe eines Elements von Weiß zu Schwarz ändern, erfolgt die Änderung normalerweise sofort. Mit aktivierten CSS-Übergängen erfolgen die Änderungen in Zeitintervallen, die einer Beschleunigungskurve folgen, wobei alle diese angepasst werden können.

Animationen, die einen Übergang zwischen zwei Zuständen beinhalten, werden oft als _implizite Übergänge_ bezeichnet, da die Zwischenzustände zwischen Anfangs- und Endzustand vom Browser implizit definiert werden.

![Ein CSS-Übergang weist den Browser an, die Zwischenzustände zwischen den Anfangs- und Endzuständen zu zeichnen, um dem Benutzer einen sanften Übergang zu zeigen.](transitionsprinciple.png)

CSS-Übergänge ermöglichen es Ihnen zu entscheiden, welche Eigenschaften animiert werden sollen (durch [_explizite Auflistung_](/de/docs/Web/CSS/transition-property)), wann die Animation startet (durch Festlegung einer [_Verzögerung_](/de/docs/Web/CSS/transition-delay)), wie lange der Übergang dauert (durch Festlegung einer [_Dauer_](/de/docs/Web/CSS/transition-duration)) und wie der Übergang abläuft (durch Definition einer [_Easing-Funktion_](/de/docs/Web/CSS/transition-timing-function), z.B. linear oder schnell am Anfang, langsam am Ende).

## Welche CSS-Eigenschaften können übergangen werden?

Der Webautor kann definieren, welche Eigenschaft animiert werden soll und auf welche Weise. Dies ermöglicht die Erstellung komplexer Übergänge. Einige Eigenschaften sind jedoch [nicht animierbar](/de/docs/Web/CSS/CSS_animated_properties), da es keinen Sinn macht, sie zu animieren.

> [!NOTE]
> Der `auto`-Wert ist oft ein sehr komplexer Fall. Die Spezifikation empfiehlt, nicht von und zu `auto` zu animieren. Einige Benutzeragenten, wie diejenigen, die auf Gecko basieren, implementieren diese Anforderung, während andere, die auf WebKit basieren, weniger strikt sind. Die Verwendung von Animationen mit `auto` kann zu unvorhersehbaren Ergebnissen führen, abhängig vom Browser und seiner Version, und sollte vermieden werden.

## Definition von Übergängen

CSS-Übergänge werden über die Kurzform {{cssxref("transition")}} gesteuert. Dies ist die beste Möglichkeit, Übergänge zu konfigurieren, da es einfacher ist, asynchrone Parameter zu vermeiden, was sehr frustrierend sein kann, wenn man viel Zeit mit der Fehlersuche in CSS verbringen muss.

Sie können die einzelnen Komponenten des Übergangs mit den folgenden Untereigenschaften steuern:

- {{cssxref("transition-property")}}
  - : Gibt den Namen oder die Namen der CSS-Eigenschaften an, auf die Übergänge angewendet werden sollen. Nur hier aufgeführte Eigenschaften werden während der Übergänge animiert; Änderungen an allen anderen Eigenschaften erfolgen wie gewohnt sofort.
- {{cssxref("transition-duration")}}
  - : Legt die Dauer fest, über die Übergänge erfolgen sollen. Sie können eine einzelne Dauer angeben, die für alle Eigenschaften während des Übergangs gilt, oder mehrere Werte, um jeder Eigenschaft einen unterschiedlichen Zeitraum für den Übergang zu erlauben.
- {{cssxref("transition-timing-function")}}
  - : Gibt eine Funktion an, die definiert, wie Zwischenwerte für Eigenschaften berechnet werden. _Easing-Funktionen_ bestimmen, wie Zwischenwerte des Übergangs berechnet werden. Die meisten [Easing-Funktionen](/de/docs/Web/CSS/easing-function) können durch Bereitstellung des Diagramms der entsprechenden Funktion angegeben werden, wie durch vier Punkte definiert, die eine kubische Bezierkurve definieren. Sie können auch Easing aus dem [Easing-Funktionen-Spickzettel](https://easings.net/) auswählen.
- {{cssxref("transition-delay")}}
  - : Definiert, wie lange gewartet werden soll, bis eine Eigenschaft geändert wird und der Übergang tatsächlich beginnt.

Die CSS-Kurzsyntax `transition` wird folgendermaßen geschrieben:

```plain
transition: <property> <duration> <timing-function> <delay>;
```

## Beispiele

### Einfaches Beispiel

Dieses Beispiel führt einen viersekündigen Schriftgrößenübergang mit einer zweisekündigen Verzögerung zwischen dem Zeitpunkt, zu dem der Benutzer das Element mit der Maus überfährt, und dem Beginn des Animationseffekts durch:

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
  background-color: #0000ff;
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

Ebenso, wenn die Werteliste einer Eigenschaft länger ist als die für {{cssxref("transition-property")}}, wird sie abgeschnitten. Wenn Sie folgendes CSS haben:

```css
div {
  transition-property: opacity, left;
  transition-duration: 3s, 5s, 2s, 1s;
}
```

Wird dies interpretiert als:

```css
div {
  transition-property: opacity, left;
  transition-duration: 3s, 5s;
}
```

### Übergänge beim Hervorheben von Menüs verwenden

Eine häufige Verwendung von CSS besteht darin, Elemente in einem Menü hervorzuheben, wenn der Benutzer den Mauszeiger darüber bewegt. Es ist einfach, Übergänge zu verwenden, um den Effekt noch attraktiver zu machen.

Zuerst richten wir das Menü mit HTML ein:

```html
<nav>
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact Us</a>
  <a href="#">Links</a>
</nav>
```

Dann erstellen wir das CSS, um das Erscheinungsbild unseres Menüs zu implementieren:

```css
nav {
  display: flex;
  gap: 0.5rem;
}

a {
  flex: 1;
  background-color: #333;
  color: #fff;
  border: 1px solid;
  padding: 0.5rem;
  text-align: center;
  text-decoration: none;
  transition: all 0.5s ease-out;
}

a:hover,
a:focus {
  background-color: #fff;
  color: #333;
}
```

Dieses CSS legt das Erscheinungsbild des Menüs fest, wobei sich Hintergrund- und Textfarben sowohl im {{cssxref(":hover")}}- als auch im {{cssxref(":focus")}}-Zustand des Elements ändern:

{{EmbedLiveSample("Using transitions when highlighting menus")}}

### Übergang von Display und Content-Visibility

Dieses Beispiel zeigt, wie [`display`](/de/docs/Web/CSS/display) und [`content-visibility`](/de/docs/Web/CSS/content-visibility) übergangen werden können. Dieses Verhalten ist nützlich für die Erstellung von Ein-/Ausblende-Animationen, bei denen Sie beispielsweise ein Container-Element mit `display: none` aus dem DOM entfernen möchten, aber es mit [`opacity`](/de/docs/Web/CSS/opacity) ausblenden, anstatt sofort zu verschwinden.

Unterstützende Browser übergehen `display` und `content-visibility` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Dies bedeutet im Allgemeinen, dass Eigenschaften zwischen zwei Werten umschalten, während sie zwischen den beiden animieren.

Es gibt jedoch eine Ausnahme, nämlich wenn Sie zu/von `display: none` oder `content-visibility: hidden` animieren. In diesem Fall wird der Browser die beiden Werte so umschalten, dass der übergangene Inhalt während der gesamten Animationsdauer angezeigt wird.

Also zum Beispiel:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) wechselt der Wert bei `0%` der Animationsdauer zu `block`, sodass er die gesamte Zeit über sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` wechselt der Wert bei `100%` der Animationsdauer zu `none`, sodass er die gesamte Zeit über sichtbar ist.

Beim Übergehen dieser Eigenschaften muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) für die Übergänge gesetzt werden. Dies ermöglicht effektiv Übergänge von `display`/`content-visibility`.

Beim Übergehen von `display` wird [`@starting-style`](/de/docs/Web/CSS/@starting-style) benötigt, um eine Reihe von Ausgangswerten für Eigenschaften bereitzustellen, die auf einem Element gesetzt sind, von denen Sie beim ersten Stilupdate des Elements aus übergehen möchten. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden CSS-Übergänge nicht bei den ersten Stilupdates eines Elements ausgelöst, wenn sie erstmals im DOM erscheinen, was auch den Wechsel von `display` von `none` zu einem anderen Zustand umfasst. `content-visibility`-Animationen benötigen keine Startwerte, die in einem `@starting-style`-Block angegeben sind, da `content-visibility` ein Element nicht aus dem DOM verbirgt wie `display`: es überspringt nur das Rendern des Inhalts des Elements.

#### HTML

Das HTML enthält zwei {{htmlelement("p")}}-Elemente mit einem {{htmlelement("div")}} dazwischen, den wir von `display` `none` zu `block` animieren werden.

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

Beachten Sie den `@starting-style`-Block zum Festlegen des Anfangsstils für den Übergang und die Aufnahme der `display`-Eigenschaft in die Übergangsliste, mit `allow-discrete`, das darauf gesetzt ist.

#### JavaScript

Schließlich fügen wir ein wenig JavaScript hinzu, um Ereignislistener einzurichten, die den Übergang (über die `showing`-Klasse) auslösen.

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
> - dem Hinzufügen des Elements zum DOM mit `.appendChild()`
> - dem Entfernen der `display: none;`-Eigenschaft eines Elements
>
> Dies wird behandelt, als ob der Anfangszustand nie stattgefunden hätte und das Element immer in seinem Endzustand war. Der einfache Weg, diese Einschränkung zu überwinden, besteht darin, vor dem Ändern der CSS-Eigenschaft, zu der Sie übergehen möchten, ein `setTimeout()` von einigen Millisekunden anzuwenden.

### Übergänge verwenden, um JavaScript-Funktionalität sanft zu gestalten

Übergänge sind ein großartiges Werkzeug, um Dinge viel glatter aussehen zu lassen, ohne etwas an Ihrer JavaScript-Funktionalität ändern zu müssen. Nehmen Sie das folgende Beispiel.

```html live-sample___js-transitions
<p>Click anywhere to move the ball</p>
<div id="foo" class="ball"></div>
```

```js live-sample___js-transitions
// Make the ball move to a certain position:
const f = document.getElementById("foo");
document.addEventListener(
  "click",
  (ev) => {
    f.style.transform = `translateY(${ev.clientY - 25}px)`;
    f.style.transform += `translateX(${ev.clientX - 25}px)`;
  },
  false,
);
```

Mit CSS können Sie die durch JavaScript angewendeten Stile sanft gestalten. Fügen Sie dem Element einen Übergang hinzu und jede Änderung erfolgt sanft:

```css hidden live-sample___js-transitions
body {
  background-color: #fff;
  color: #333;
  font:
    1.2em / 1.5 Helvetica Neue,
    Helvetica,
    Arial,
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
  border: 1px solid #ccc;
  padding: 20px;
}
```

```css live-sample___js-transitions
.ball {
  border-radius: 25px;
  width: 50px;
  height: 50px;
  background: #c00;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 1s;
}
```

{{EmbedLiveSample("js-transitions", "", "400px")}}

### Den Beginn und das Ende eines Übergangs erkennen

Sie können das [`transitionend`](/de/docs/Web/API/Element/transitionend_event)-Ereignis verwenden, um zu erkennen, dass eine Animation beendet ist. Dies ist ein [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)-Objekt, das zwei zusätzliche Eigenschaften neben einem typischen [`Event`](/de/docs/Web/API/Event)-Objekt hat:

- `propertyName`
  - : Eine Zeichenkette, die den Namen der CSS-Eigenschaft angibt, deren Übergang abgeschlossen ist.
- `elapsedTime`
  - : Ein Float-Wert, der die Anzahl der Sekunden angibt, die der Übergang bis zum Zeitpunkt des Ereignisses lief. Dieser Wert wird nicht von {{cssxref("transition-delay")}} beeinflusst.

Wie üblich können Sie die Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um dieses Ereignis zu überwachen:

```js
el.addEventListener("transitionend", updateTransition, true);
```

Sie erkennen den Beginn eines Übergangs mit [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event) (wird vor einer Verzögerung ausgelöst) und [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event) (wird nach einer Verzögerung ausgelöst) auf die gleiche Weise:

```js
el.addEventListener("transitionrun", signalStart, true);
el.addEventListener("transitionstart", signalStart, true);
```

> [!NOTE]
> Das `transitionend`-Ereignis wird nicht ausgelöst, wenn der Übergang vor der Fertigstellung abgebrochen wird, weil das Element entweder zu {{cssxref("display", "display: none")}} gemacht wird oder sich der Wert der animierten Eigenschaft ändert.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)-Interface und das [`transitionend`](/de/docs/Web/API/Element/transitionend_event)-Ereignis
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
