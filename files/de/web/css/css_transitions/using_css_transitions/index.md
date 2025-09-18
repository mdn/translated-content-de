---
title: Verwendung von CSS-Übergängen
short-title: Verwendung von Übergängen
slug: Web/CSS/CSS_transitions/Using_CSS_transitions
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

**CSS-Übergänge** bieten eine Möglichkeit, die Animationsgeschwindigkeit zu steuern, wenn CSS-Eigenschaften geändert werden. Anstatt Änderungen von Eigenschaften sofort wirksam werden zu lassen, können Sie diese Änderungen über einen bestimmten Zeitraum hinweg stattfinden lassen. Wenn Sie beispielsweise die Farbe eines Elements von Weiß zu Schwarz ändern, erfolgt die Änderung normalerweise sofort. Mit aktivierten CSS-Übergängen treten Änderungen in Zeitintervallen auf, die einer Beschleunigungskurve folgen, die alle angepasst werden können.

Animationen, die den Übergang zwischen zwei Zuständen beinhalten, werden oft als _implizite Übergänge_ bezeichnet, da die Zustände zwischen den Start- und Endzuständen implizit durch den Browser definiert werden.

![Ein CSS-Übergang teilt dem Browser mit, die Zwischenzustände zwischen den Anfangs- und Endzuständen zu zeichnen, wodurch dem Benutzer ein sanfter Übergang gezeigt wird.](transitionsprinciple.png)

CSS-Übergänge lassen Sie entscheiden, welche Eigenschaften animiert werden (indem Sie [diese explizit auflisten](/de/docs/Web/CSS/transition-property)), wann die Animation beginnt (durch Festlegung einer [Verzögerung](/de/docs/Web/CSS/transition-delay)), wie lange der Übergang dauert (durch Festlegung einer [Dauer](/de/docs/Web/CSS/transition-duration)), und wie der Übergang abläuft (durch Definition einer [Übergangstiming-Funktion](/de/docs/Web/CSS/transition-timing-function), z. B. linear oder am Anfang schnell, am Ende langsam).

## Welche CSS-Eigenschaften können übergangen werden?

Der Webautor kann definieren, welche Eigenschaft animiert werden muss und auf welche Weise. Dies ermöglicht die Erstellung komplexer Übergänge. Einige Eigenschaften sind jedoch [nicht animierbar](/de/docs/Web/CSS/CSS_animated_properties), da es keinen Sinn macht, sie zu animieren.

> [!NOTE]
> Der Wert `auto` ist oft ein sehr komplexer Fall. Die Spezifikation empfiehlt, nicht von und zu `auto` zu animieren. Einige Benutzeragenten, wie die auf Gecko basierenden, implementieren diese Anforderung, während andere, wie die auf WebKit basierenden, weniger strikt sind. Die Verwendung von Animationen mit `auto` kann je nach Browser und Version zu unvorhersehbaren Ergebnissen führen und sollte vermieden werden.

## Definition von Übergängen

CSS-Übergänge werden über die Kurzform {{cssxref("transition")}} gesteuert. Dies ist die beste Möglichkeit, Übergänge zu konfigurieren, da es einfacher ist, asynchrone Parameter zu vermeiden, was sehr frustrierend sein kann, wenn man viel Zeit beim Debuggen in CSS verbringen muss.

Sie können die einzelnen Komponenten des Übergangs mit den folgenden Untereigenschaften steuern:

- {{cssxref("transition-property")}}
  - : Gibt den Namen oder die Namen der CSS-Eigenschaften an, auf die Übergänge angewendet werden sollen. Nur hier aufgeführte Eigenschaften werden während der Übergänge animiert; Änderungen an allen anderen Eigenschaften erfolgen wie gewohnt sofort.
- {{cssxref("transition-duration")}}
  - : Gibt die Dauer an, über die Übergänge stattfinden sollen. Sie können eine einzelne Dauer angeben, die für alle Eigenschaften während des Übergangs gilt, oder mehrere Werte, um jeder Eigenschaft eine andere Dauer zuzuweisen.
- {{cssxref("transition-timing-function")}}
  - : Gibt eine Funktion an, um zu definieren, wie Zwischenwerte für Eigenschaften berechnet werden. _Easing-Funktionen_ bestimmen, wie Zwischenwerte des Übergangs berechnet werden. Die meisten [Easing-Funktionen](/de/docs/Web/CSS/easing-function) können angegeben werden, indem der Graph der entsprechenden Funktion bereitgestellt wird, wie durch vier Punkte definiert, die eine kubische Bezier definieren. Sie können auch Easing aus dem [Easing Functions Cheat Sheet](https://easings.net/) wählen.
- {{cssxref("transition-delay")}}
  - : Definiert, wie lange gewartet wird, bis eine Änderung an einer Eigenschaft vorgenommen wird und der Übergang tatsächlich beginnt.

Die Kurzsyntax `transition` in CSS wird wie folgt geschrieben:

```plain
transition: <property> <duration> <timing-function> <delay>;
```

## Beispiele

### Einfache Beispiele

Dieses Beispiel führt einen viersekündigen Übergang der Schriftgröße mit einer zweisekündigen Verzögerung zwischen dem Zeitpunkt aus, zu dem der Benutzer über das Element fährt, und dem Beginn des Animationseffekts:

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

In ähnlicher Weise, wenn die Werteliste einer Eigenschaft länger ist als die von {{cssxref("transition-property")}}, wird sie abgeschnitten, sodass wenn Sie das folgende CSS haben:

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

### Verwendung von Übergängen zum Hervorheben von Menüs

Eine häufige Verwendung von CSS ist das Hervorheben von Elementen in einem Menü, wenn der Benutzer mit dem Mauszeiger darüber fährt. Es ist einfach, Übergänge zu verwenden, um den Effekt noch attraktiver zu machen.

Zuerst richten wir das Menü mit HTML ein:

```html
<nav>
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact Us</a>
  <a href="#">Links</a>
</nav>
```

Dann erstellen wir das CSS, um das Aussehen und Erscheinungsbild unseres Menüs zu implementieren:

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

Dieses CSS legt das Aussehen des Menüs fest, wobei sich die Hintergrund- und Textfarben ändern, wenn sich das Element in seinen {{cssxref(":hover")}}- und {{cssxref(":focus")}}-Zuständen befindet:

{{EmbedLiveSample("Using transitions when highlighting menus")}}

### Übergang von display und content-visibility

Dieses Beispiel zeigt, wie [`display`](/de/docs/Web/CSS/display) und [`content-visibility`](/de/docs/Web/CSS/content-visibility) übergegangen werden können. Dieses Verhalten ist nützlich für die Erstellung von Ein-/Ausgangsanimationen, bei denen Sie beispielsweise ein Container aus dem DOM mit `display: none` entfernen möchten, ihn aber mit [`opacity`](/de/docs/Web/CSS/opacity) ausblenden möchten, anstatt sofort zu verschwinden.

Unterstützende Browser übergehen `display` und `content-visibility` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Das bedeutet im Allgemeinen, dass Eigenschaften während des Übergangs zwischen zwei Werten bei 50% umschalten.

Es gibt jedoch eine Ausnahme, wenn zu/von `display: none` oder `content-visibility: hidden` animiert wird. In diesem Fall schaltet der Browser zwischen den beiden Werten um, sodass der übergangene Inhalt für die gesamte Animationsdauer angezeigt wird.

Zum Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wird der Wert zu `block` bei `0%` der Animationsdauer umgeschaltet, sodass er während der gesamten Zeit sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wird der Wert bei `100%` der Animationsdauer zu `none` umgeschaltet, sodass er während der gesamten Zeit sichtbar ist.

Beim Übergang dieser Eigenschaften muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) auf den Übergängen festgelegt werden. Dies aktiviert effektiv `display`/`content-visibility`-Übergänge.

Beim Übergang von `display` wird [`@starting-style`](/de/docs/Web/CSS/@starting-style) benötigt, um eine Sammlung von Ausgangswerten für Eigenschaften festzulegen, die auf ein Element angewendet werden, von dem aus Sie übergehen möchten, wenn das Element seinen ersten Stil-Update erhält. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden CSS-Übergänge nicht auf Elemente angewendet, die bei ihrem ersten Erscheinen im DOM ein Stil-Update erhalten, was auch dann der Fall ist, wenn `display` von `none` zu einem anderen Zustand wechselt. `content-visibility`-Animationen benötigen keine Anfangswerte, die in einem `@starting-style`-Block angegeben sind. Dies liegt daran, dass `content-visibility` ein Element nicht wie `display` aus dem DOM entfernt: es überspringt einfach das Rendern des Inhalts des Elements.

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

Beachten Sie den `@starting-style`-Block, der verwendet wird, um den Ausgangsstil für den Übergang festzulegen, und die Aufnahme der `display`-Eigenschaft in die Übergangsliste, wobei `allow-discrete` darauf eingestellt ist.

#### JavaScript

Schließlich fügen wir ein bisschen JavaScript hinzu, um Event-Listener einzurichten, die den Übergang auslösen (über die `showing`-Klasse).

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
> Bei der Verwendung eines Übergangs sollte Vorsicht geboten sein, wenn dieser unmittelbar nach:
>
> - dem Hinzufügen des Elements zum DOM mittels `.appendChild()`
> - dem Entfernen einer `display: none;`-Eigenschaft von einem Element
>
> verwendet wird.
>
> Dies wird so behandelt, als ob der Anfangszustand nie eingetreten wäre und das Element immer in seinem Endzustand gewesen wäre. Der einfache Weg, diese Einschränkung zu umgehen, besteht darin, ein `setTimeout()` von einigen Millisekunden anzuwenden, bevor Sie die CSS-Eigenschaft ändern, zu der Sie übergehen möchten.

### Verwendung von Übergängen, um JavaScript-Funktionalität zu glätten

Übergänge sind ein großartiges Werkzeug, um Dinge viel glatter aussehen zu lassen, ohne etwas an Ihrer JavaScript-Funktionalität ändern zu müssen. Nehmen Sie das folgende Beispiel.

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

Mit CSS können Sie die durch JavaScript angewandten Stile glätten. Fügen Sie dem Element einen Übergang hinzu und jede Änderung erfolgt fließend:

```css hidden live-sample___js-transitions
body {
  background-color: white;
  color: #333333;
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

### Erkennen des Starts und des Abschlusses eines Übergangs

Sie können das [`transitionend`](/de/docs/Web/API/Element/transitionend_event) Ereignis verwenden, um zu erkennen, dass eine Animation fertig ausgeführt wurde. Dies ist ein [`TransitionEvent`](/de/docs/Web/API/TransitionEvent) Objekt, das zwei zusätzliche Eigenschaften gegenüber einem typischen [`Event`](/de/docs/Web/API/Event) Objekt hat:

- `propertyName`
  - : Ein String, der den Namen der CSS-Eigenschaft angibt, deren Übergang abgeschlossen ist.
- `elapsedTime`
  - : Ein Float, der die Anzahl der Sekunden angibt, die der Übergang zum Zeitpunkt des Ereignisses lief. Dieser Wert wird nicht durch den Wert von {{cssxref("transition-delay")}} beeinflusst.

Wie üblich können Sie die Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um für dieses Ereignis zu überwachen:

```js
el.addEventListener("transitionend", updateTransition);
```

Sie können den Beginn eines Übergangs mit [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event) (löst vor jeglicher Verzögerung aus) und [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event) (löst nach jeglicher Verzögerung aus) auf ähnliche Weise erkennen:

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
