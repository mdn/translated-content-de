---
title: Verwenden von CSS-Transitions
short-title: Verwenden von Transitions
slug: Web/CSS/CSS_transitions/Using_CSS_transitions
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

**CSS-Transitions** bieten eine Möglichkeit, die Animationsgeschwindigkeit beim Ändern von CSS-Eigenschaften zu steuern. Anstatt dass Änderungen an Eigenschaften sofort wirksam werden, können Sie festlegen, dass die Änderungen einer Eigenschaft über einen bestimmten Zeitraum hinweg stattfinden. Beispielsweise erfolgt normalerweise die Änderung der Farbe eines Elements von Weiß zu Schwarz sofort. Mit aktivierten CSS-Transitions erfolgen die Änderungen in Zeitintervallen, die einer Beschleunigungskurve folgen, die alle angepasst werden können.

Animationen, die den Übergang zwischen zwei Zuständen beinhalten, werden oft als _implizite Übergänge_ bezeichnet, da die Zustände zwischen dem Anfangs- und Endzustand vom Browser implizit definiert werden.

![Eine CSS-Transition teilt dem Browser mit, die Zwischenzustände zwischen den Anfangs- und Endzuständen zu zeichnen und dem Benutzer glatte Übergänge zu zeigen.](transitionsprinciple.png)

CSS-Transitions ermöglichen Ihnen, zu entscheiden, welche Eigenschaften animiert werden sollen (indem Sie [_sie explizit auflisten_](/de/docs/Web/CSS/transition-property)), wann die Animation beginnt (durch Festlegen einer [_Verzögerung_](/de/docs/Web/CSS/transition-delay)), wie lange die Transition dauert (durch Festlegen einer [_Dauer_](/de/docs/Web/CSS/transition-duration)), und wie die Transition ablaufen soll (durch Definieren einer [_Easing-Funktion_](/de/docs/Web/CSS/transition-timing-function), z.B. linear oder schnell am Anfang, langsam am Ende).

## Welche CSS-Eigenschaften können überblendet werden?

Der Webautor kann definieren, welche Eigenschaft animiert werden soll und auf welche Weise. Dies ermöglicht die Erstellung komplexer Übergänge. Einige Eigenschaften sind jedoch [nicht animierbar](/de/docs/Web/CSS/CSS_animated_properties), da es keinen Sinn ergibt, sie zu animieren.

> [!NOTE]
> Der `auto`-Wert ist oft ein sehr komplexer Fall. Die Spezifikation empfiehlt, nicht von und zu `auto` zu animieren. Einige Benutzeragenten, wie solche, die auf Gecko basieren, implementieren diese Anforderung, während andere, wie auf WebKit basierende, weniger streng sind. Die Verwendung von Animationen mit `auto` kann zu unvorhersehbaren Ergebnissen führen, je nach Browser und dessen Version, und sollte vermieden werden.

## Definieren von Transitions

CSS-Transitions werden mit der Kurzform-Eigenschaft {{cssxref("transition")}} gesteuert. Dies ist der beste Weg, um Transitions zu konfigurieren, da es einfacher ist, nicht synchronisierte Parameter zu vermeiden, was sehr frustrierend sein kann, wenn man viel Zeit mit Debugging in CSS verbringen muss.

Sie können die einzelnen Komponenten der Transition mit den folgenden Untereigenschaften steuern:

- {{cssxref("transition-property")}}
  - : Gibt den Namen oder die Namen der CSS-Eigenschaften an, auf die Transitions angewendet werden sollen. Nur hier aufgeführte Eigenschaften werden während der Transitions animiert; Änderungen an allen anderen Eigenschaften erfolgen wie gewohnt sofort.
- {{cssxref("transition-duration")}}
  - : Bestimmt die Dauer, über die Transitions erfolgen sollen. Sie können eine einzelne Dauer angeben, die für alle Eigenschaften während der Transition gilt, oder mehrere Werte, um jeder Eigenschaft zu ermöglichen, über einen anderen Zeitraum hinweg zu überblenden.
- {{cssxref("transition-timing-function")}}
  - : Gibt eine Funktion an, um zu definieren, wie Zwischenwerte für Eigenschaften berechnet werden. _Easing-Funktionen_ bestimmen, wie Zwischenwerte der Transition berechnet werden. Die meisten [Easing-Funktionen](/de/docs/Web/CSS/easing-function) können durch Angabe des Diagramms der entsprechenden Funktion angegeben werden, definiert durch vier Punkte, die eine kubische Bezierkurve definieren. Sie können auch Easing aus dem [Easing-Funktionen-Spickzettel](https://easings.net/) wählen.
- {{cssxref("transition-delay")}}
  - : Definiert, wie lange zwischen dem Zeitpunkt, an dem eine Eigenschaft geändert wird, und dem tatsächlichen Beginn der Transition gewartet werden soll.

Die Kurzform-CSS-Syntax für `transition` wird wie folgt geschrieben:

```plain
transition: <property> <duration> <timing-function> <delay>;
```

## Beispiele

### Einfaches Beispiel

Dieses Beispiel führt eine viersekündige Schriftgrößentransition mit einer zweisekündigen Verzögerung zwischen dem Zeitpunkt aus, an dem der Benutzer das Element übermalt und dem Beginn des Animationseffekts:

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

### Wenn die Wertelisten der Eigenschaften unterschiedliche Längen haben

Wenn die Werteliste einer Eigenschaft kürzer ist als die der anderen, werden ihre Werte wiederholt, um sie anzupassen. Zum Beispiel:

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

Ähnlich, wenn die Werteliste einer Eigenschaft länger ist als die für {{cssxref("transition-property")}}, wird sie abgeschnitten, sodass, wenn Sie das folgende CSS haben:

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

### Verwenden von Transitions beim Hervorheben von Menüs

Ein häufiger Einsatz von CSS ist das Hervorheben von Elementen in einem Menü, wenn der Benutzer den Mauszeiger darüber bewegt. Es ist einfach, Transitions zu verwenden, um den Effekt noch attraktiver zu machen.

Zuerst richten wir das Menü mit HTML ein:

```html
<nav>
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact Us</a>
  <a href="#">Links</a>
</nav>
```

Dann erstellen wir das CSS, um das Aussehen und Gefühl unseres Menüs zu implementieren:

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

### Übergang von Display und Content-Visibility

Dieses Beispiel zeigt, wie [`display`](/de/docs/Web/CSS/display) und [`content-visibility`](/de/docs/Web/CSS/content-visibility) überblendet werden können. Dieses Verhalten ist nützlich für die Erstellung von Ein- und Ausblendeanimationen, bei denen Sie z. B. ein Container aus dem DOM mit `display: none` entfernen möchten, aber es mit [`opacity`](/de/docs/Web/CSS/opacity) ausblenden statt sofort verschwinden lassen möchten.

Unterstützende Browser überblenden `display` und `content-visibility` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Dies bedeutet im Allgemeinen, dass Eigenschaften zwischen zwei Werten umschalten werden, wenn 50 % zwischen der Animation der beiden liegen.

Es gibt jedoch eine Ausnahme, wenn zu/von `display: none` oder `content-visibility: hidden` animiert wird. Hierbei wird der Browser zwischen den beiden Werten umschalten, sodass der überblendete Inhalt die gesamte Dauer der Animation angezeigt wird.

Beispielsweise:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert), wird der Wert bei `0 %` der Animationsdauer auf `block` umgeschaltet, damit es die gesamte Zeit sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none`, wird der Wert bei `100 %` der Animationsdauer auf `none` umgeschaltet, sodass es die gesamte Zeit sichtbar ist.

Beim Übergang dieser Eigenschaften muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) auf den Transitions festgelegt werden. Dies ermöglicht effektiv `display`/`content-visibility`-Transitions.

Wenn `display` überblendet wird, muss [`@starting-style`](/de/docs/Web/CSS/@starting-style) verwendet werden, um eine Reihe von Startwerten für die auf ein Element angewendeten Eigenschaften bereitzustellen, von denen Sie überblenden möchten, wenn das Element sein erstes Stil-Update erhält. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden CSS-Transitions nicht bei den ersten Stil-Updates eines Elements ausgelöst, wenn sie zuerst im DOM erscheinen, was geschieht, wenn `display` von `none` zu einem anderen Zustand wechselt. `content-visibility`-Animationen benötigen keine Startwerte, die in einem `@starting-style`-Block angegeben werden. Dies liegt daran, dass `content-visibility` ein Element nicht aus dem DOM verbirgt wie `display`: Es überspringt lediglich das Rendern des Inhalts des Elements.

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

Beachten Sie den `@starting-style`-Block, der verwendet wird, um den Anfangsstil für die Transition anzugeben, und die Einbeziehung der `display`-Eigenschaft in die Transitions-Liste, mit `allow-discrete` darauf eingestellt.

#### JavaScript

Schließlich fügen wir ein wenig JavaScript hinzu, um Event-Listener einzurichten, die die Transition (über die `showing`-Klasse) auslösen.

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
> Vorsicht ist geboten, wenn eine Transition direkt nachfolgend verwendet wird:
>
> - beim Hinzufügen eines Elements zum DOM mit `.appendChild()`
> - beim Entfernen der `display: none;`-Eigenschaft eines Elements.
>
> Dies wird behandelt, als ob der Anfangszustand nie eingetreten wäre und das Element immer in seinem Endzustand gewesen wäre. Der einfache Weg, diese Einschränkung zu überwinden, besteht darin, ein `setTimeout()` von einigen Millisekunden zu setzen, bevor Sie die CSS-Eigenschaft ändern, zu der Sie überblenden möchten.

### Transitions verwenden, um JavaScript-Funktionalität glatt zu machen

Transitions sind ein großartiges Werkzeug, um Dinge viel glatter aussehen zu lassen, ohne etwas an Ihrer JavaScript-Funktionalität ändern zu müssen. Nehmen Sie das folgende Beispiel.

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

Mit CSS können Sie die durch JavaScript angewandten Stile glätten. Fügen Sie dem Element eine Transition hinzu und jede Änderung wird reibungslos geschehen:

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

### Das Starten und Beenden einer Transition feststellen

Sie können das [`transitionend`](/de/docs/Web/API/Element/transitionend_event)-Ereignis verwenden, um zu erkennen, dass eine Animation abgeschlossen ist. Dies ist ein [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)-Objekt, das zwei zusätzliche Eigenschaften über ein typisches [`Event`](/de/docs/Web/API/Event)-Objekt hinaus aufweist:

- `propertyName`
  - : Ein String, der den Namen der CSS-Eigenschaft angibt, deren Transition abgeschlossen ist.
- `elapsedTime`
  - : Eine Fließkommazahl, die die Anzahl der Sekunden angibt, die die Transition lief, als das Ereignis ausgelöst wurde. Dieser Wert wird nicht von dem Wert von {{cssxref("transition-delay")}} beeinflusst.

Wie üblich können Sie die [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden, um dieses Ereignis zu überwachen:

```js
el.addEventListener("transitionend", updateTransition, true);
```

Sie können den Beginn einer Transition mit [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event) (wird vor einer Verzögerung ausgelöst) und [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event) (wird nach einer Verzögerung ausgelöst) auf ähnliche Weise erkennen:

```js
el.addEventListener("transitionrun", signalStart, true);
el.addEventListener("transitionstart", signalStart, true);
```

> [!NOTE]
> Das `transitionend`-Ereignis wird nicht ausgelöst, wenn die Transition abgebrochen wird, bevor die Transition abgeschlossen ist, weil entweder das Element {{cssxref("display", "display: none")}} gemacht wird oder der Wert der animierten Eigenschaft geändert wird.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Die [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)-Schnittstelle und das [`transitionend`](/de/docs/Web/API/Element/transitionend_event)-Ereignis
- [Verwenden von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
