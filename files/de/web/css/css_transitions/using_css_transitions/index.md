---
title: Verwendung von CSS-Übergängen
short-title: Verwendung von Übergängen
slug: Web/CSS/CSS_transitions/Using_CSS_transitions
l10n:
  sourceCommit: 39a17e10bc078c6e76717683b26a5b20d9d9c574
---

**CSS-Übergänge** bieten eine Möglichkeit, die Animationsgeschwindigkeit beim Ändern von CSS-Eigenschaften zu steuern. Anstatt dass Änderungen von Eigenschaften sofort wirksam werden, können Sie die Änderungen über einen bestimmten Zeitraum hinweg stattfinden lassen. Wenn Sie beispielsweise die Farbe eines Elements von Weiß auf Schwarz ändern, erfolgt die Änderung normalerweise sofort. Mit aktivierten CSS-Übergängen erfolgen die Änderungen in Zeitintervallen, die einer Beschleunigungskurve folgen, die alle anpassbar sind.

Animationen, die den Übergang zwischen zwei Zuständen betreffen, werden oft als _implizite Übergänge_ bezeichnet, da die Zustände zwischen dem Start- und Endzustand implizit vom Browser definiert werden.

![Ein CSS-Übergang weist den Browser an, die Zwischenzustände zwischen den Anfangs- und den Endzuständen zu zeichnen und dem Benutzer einen reibungslosen Übergang zu zeigen.](transitionsprinciple.png)

Mit CSS-Übergängen können Sie entscheiden, welche Eigenschaften animiert werden sollen (indem Sie [_diese ausdrücklich auflisten_](/de/docs/Web/CSS/transition-property)), wann die Animation beginnen soll (indem Sie eine [_Verzögerung festlegen_](/de/docs/Web/CSS/transition-delay)), wie lange der Übergang dauern soll (indem Sie eine [_Dauer einstellen_](/de/docs/Web/CSS/transition-duration)) und wie der Übergang ablaufen soll (indem Sie eine [_Easing-Funktion definieren_](/de/docs/Web/CSS/transition-timing-function), z. B. linear oder schnell am Anfang, langsam am Ende).

## Welche CSS-Eigenschaften können überblendet werden?

Der Webautor kann definieren, welche Eigenschaft animiert werden soll und in welcher Weise. Dies ermöglicht die Erstellung komplexer Übergänge. Einige Eigenschaften sind jedoch [nicht animierbar](/de/docs/Web/CSS/CSS_animated_properties), da es keinen Sinn macht, sie zu animieren.

> [!NOTE]
> Der Wert `auto` ist oft ein sehr komplexer Fall. Die Spezifikation empfiehlt, nicht von und zu `auto` zu animieren. Einige Benutzeragenten, wie die auf Gecko basierenden, implementieren diese Anforderung, während andere, wie die auf WebKit basierenden, weniger streng sind. Die Verwendung von Animationen mit `auto` kann zu unvorhersehbaren Ergebnissen führen, abhängig vom Browser und seiner Version, und sollte vermieden werden.

## Definition von Übergängen

CSS-Übergänge werden mit der Kurzform-Eigenschaft {{cssxref("transition")}} gesteuert. Dies ist der beste Weg, um Übergänge zu konfigurieren, da es so einfacher ist, unsynchronisierte Parameter zu vermeiden, was sehr frustrierend sein kann, wenn man viel Zeit mit Debuggen in CSS verbringen muss.

Sie können die einzelnen Komponenten des Übergangs mit den folgenden Untereigenschaften steuern:

- {{cssxref("transition-property")}}
  - : Gibt den Namen oder die Namen der CSS-Eigenschaften an, auf die Übergänge angewendet werden sollen. Nur hier aufgeführte Eigenschaften werden während der Übergänge animiert; Änderungen an allen anderen Eigenschaften erfolgen wie gewohnt sofort.
- {{cssxref("transition-duration")}}
  - : Legt die Dauer fest, über die Übergänge stattfinden sollen. Sie können eine einzelne Dauer angeben, die für alle Eigenschaften während des Übergangs gilt, oder mehrere Werte, um jeder Eigenschaft die Möglichkeit zu geben, über einen anderen Zeitraum zu wechseln.
- {{cssxref("transition-timing-function")}}
  - : Gibt eine Funktion an, um zu definieren, wie Zwischenwerte für Eigenschaften berechnet werden. _Easing-Funktionen_ bestimmen, wie die Zwischenwerte des Übergangs berechnet werden. Die meisten [Easing-Funktionen](/de/docs/Web/CSS/easing-function) können angegeben werden, indem das Diagramm der entsprechenden Funktion bereitgestellt wird, das durch vier Punkte definiert ist, die eine kubische Bezierkurve definieren. Sie können auch Easing aus dem [Easing functions cheat sheet](https://easings.net/) auswählen.
- {{cssxref("transition-delay")}}
  - : Definiert, wie lange gewartet werden soll, bis ein Übergang tatsächlich beginnt, nachdem eine Eigenschaft geändert wurde.

Die `transition`-Kurzform-CSS-Syntax wird wie folgt geschrieben:

```plain
transition: <property> <duration> <timing-function> <delay>;
```

## Beispiele

### Einfaches Beispiel

Dieses Beispiel führt einen viersekündigen Schriftgrößenübergang mit einer zweisekündigen Verzögerung zwischen dem Zeitpunkt, zu dem der Benutzer über das Element fährt, und dem Beginn des Animationseffekts aus:

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

### Wenn die Listenlänge der Eigenschaftenwerte unterschiedlich ist

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

Ebenso wird jede Werteliste, die länger ist als die für {{cssxref("transition-property")}}, gekürzt. Wenn Sie beispielsweise folgendes CSS haben:

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

### Verwendung von Übergängen bei der Hervorhebung von Menüs

Eine häufige Verwendung von CSS besteht darin, Elemente in einem Menü hervorzuheben, wenn der Benutzer den Mauszeiger darüber bewegt. Es ist einfach, Übergänge zu verwenden, um den Effekt noch ansprechender zu machen.

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
  background-color: #333;
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
  color: #333;
}
```

Dieses CSS definiert das Aussehen des Menüs, wobei sich die Hintergrund- und Textfarben ändern, wenn sich das Element in seinen {{cssxref(":hover")}} und {{cssxref(":focus")}} Zuständen befindet:

{{EmbedLiveSample("Using transitions when highlighting menus")}}

### Übergang von Anzeige und Inhalts-Sichtbarkeit

Dieses Beispiel demonstriert, wie [`display`](/de/docs/Web/CSS/display) und [`content-visibility`](/de/docs/Web/CSS/content-visibility) überblendet werden können. Dieses Verhalten ist nützlich für das Erstellen von Ein-/Aus-Animationen, bei denen Sie beispielsweise einen Container mit `display: none` aus dem DOM entfernen möchten, aber möchten, dass es mit [`opacity`](/de/docs/Web/CSS/opacity) ausblendet, anstatt sofort zu verschwinden.

Unterstützende Browser überblenden `display` und `content-visibility` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Dies bedeutet im Allgemeinen, dass Eigenschaften während des Übergangs zwischen zwei Werten 50% wechseln.

Es gibt jedoch eine Ausnahme, nämlich beim Animieren zu/von `display: none` oder `content-visibility: hidden`. In diesem Fall wechselt der Browser zwischen den zwei Werten, sodass der Übergangsinhalt die gesamte Dauer der Animation sichtbar ist.

Zum Beispiel:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) wechselt der Wert am `0%` der Animationsdauer zu `block`, sodass er während der gesamten Dauer sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none`, wechselt der Wert am `100%` der Animationsdauer zu `none`, sodass er während der gesamten Dauer sichtbar ist.

Beim Überblenden dieser Eigenschaften muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) auf den Übergängen gesetzt werden. Dies aktiviert effektiv `display`/`content-visibility` Übergänge.

Beim Übergang von `display` wird [`@starting-style`](/de/docs/Web/CSS/@starting-style) benötigt, um einen Satz von Ausgangswerten für die Eigenschaften bereitzustellen, die auf einem Element festgelegt sind, von dem Sie beim ersten Stilupdate des Elements überblenden möchten. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden CSS-Übergänge nicht bei den ersten Stilupdates von Elementen ausgelöst, wenn diese erstmals im DOM erscheinen, einschließlich wenn sich `display` von `none` in einen anderen Zustand ändert. `content-visibility`-Animationen benötigen keine Ausgangswerte, die in einem `@starting-style` Block angegeben werden müssen, da `content-visibility` ein Element nicht aus dem DOM entfernt wie `display`: es überspringt einfach das Rendering des Inhalts des Elements.

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

Beachten Sie den `@starting-style`-Block, der verwendet wird, um den Startstil für den Übergang anzugeben, und die Einbeziehung der `display`-Eigenschaft in die Übergangsliste, wobei `allow-discrete` darauf gesetzt ist.

#### JavaScript

Schließlich fügen wir ein wenig JavaScript hinzu, um Ereignislistener einzurichten, um den Übergang (über die `showing`-Klasse) auszulösen.

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
> Vorsicht ist geboten, wenn ein Übergang unmittelbar nach folgendem verwendet wird:
>
> - Hinzufügen des Elements zum DOM mit `.appendChild()`
> - Entfernen der `display: none;` Eigenschaft eines Elements.
>
> Dies wird so behandelt, als ob der Anfangszustand nie aufgetreten wäre und das Element immer in seinem Endzustand war. Der einfache Weg, diese Einschränkung zu überwinden, besteht darin, `setTimeout()` um einige Millisekunden zu verwenden, bevor Sie die CSS-Eigenschaft ändern, zu der Sie überblenden möchten.

### Verwendung von Übergängen, um JavaScript-Funktionalität flüssig zu machen

Übergänge sind ein großartiges Werkzeug, um Dinge deutlich flüssiger aussehen zu lassen, ohne irgendetwas an Ihrer JavaScript-Funktionalität ändern zu müssen. Nehmen Sie das folgende Beispiel.

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

Mit CSS können Sie die über JavaScript angewendeten Stile glätten. Fügen Sie dem Element einen Übergang hinzu und jede Änderung wird glatt durchgeführt:

```css hidden live-sample___js-transitions
body {
  background-color: white;
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

### Erkennen des Anfangs und der Vollendung eines Übergangs

Sie können das [`transitionend`](/de/docs/Web/API/Element/transitionend_event) Ereignis verwenden, um zu erkennen, dass eine Animation beendet ist. Dies ist ein [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)-Objekt, das zwei zusätzliche Eigenschaften über ein typisches [`Event`](/de/docs/Web/API/Event)-Objekt hinaus besitzt:

- `propertyName`
  - : Ein String, der den Namen der CSS-Eigenschaft angibt, deren Übergang abgeschlossen ist.
- `elapsedTime`
  - : Ein Float, der die Anzahl der Sekunden angibt, die der Übergang zum Zeitpunkt des Ereignisauslösens lief. Dieser Wert ist nicht durch den Wert von {{cssxref("transition-delay")}} beeinflusst.

Wie üblich können Sie die [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden, um dieses Ereignis zu überwachen:

```js
el.addEventListener("transitionend", updateTransition, true);
```

Sie erkennen den Beginn eines Übergangs, indem Sie [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event) (feuert vor jeder Verzögerung) und [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event) (feuert nach jeder Verzögerung) in ähnlicher Weise verwenden:

```js
el.addEventListener("transitionrun", signalStart, true);
el.addEventListener("transitionstart", signalStart, true);
```

> [!NOTE]
> Das `transitionend`-Ereignis wird nicht ausgelöst, wenn der Übergang abgebrochen wird, bevor der Übergang abgeschlossen ist, weil entweder das Element {{cssxref("display", "display: none")}} gemacht wird oder der animierende Eigenschaftswert geändert wird.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Die [`TransitionEvent`](/de/docs/Web/API/TransitionEvent) Schnittstelle und das [`transitionend`](/de/docs/Web/API/Element/transitionend_event) Ereignis
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
