---
title: Verwendung von CSS-Übergängen
short-title: Verwendung von Übergängen
slug: Web/CSS/CSS_transitions/Using_CSS_transitions
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

**CSS-Übergänge** bieten eine Möglichkeit, die Animationsgeschwindigkeit beim Ändern von CSS-Eigenschaften zu steuern. Anstatt dass Eigenschaftsänderungen sofort wirksam werden, können Sie erreichen, dass die Änderungen über einen bestimmten Zeitraum hinweg stattfinden. Zum Beispiel, wenn Sie die Farbe eines Elements von Weiß in Schwarz ändern, erfolgt die Änderung normalerweise sofort. Mit aktivierten CSS-Übergängen finden die Änderungen in Zeitabständen statt, die einer Beschleunigungskurve folgen, die alle angepasst werden können.

Animationen, die den Übergang zwischen zwei Zuständen umfassen, werden oft als _implizite Übergänge_ bezeichnet, da die Zustände zwischen dem Anfangs- und dem Endzustand implizit vom Browser definiert werden.

![Ein CSS-Übergang sagt dem Browser, dass er die Zwischenzustände zwischen den Anfangs- und Endzuständen zeichnen soll, um dem Benutzer einen reibungslosen Übergang zu zeigen.](transitionsprinciple.png)

CSS-Übergänge ermöglichen es Ihnen zu entscheiden, welche Eigenschaften animiert werden sollen (indem Sie [sie explizit auflisten](/de/docs/Web/CSS/Reference/Properties/transition-property)), wann die Animation beginnt (indem Sie eine [_Verzögerung_](/de/docs/Web/CSS/Reference/Properties/transition-delay) festlegen), wie lange der Übergang dauern wird (indem Sie eine [_Dauer_](/de/docs/Web/CSS/Reference/Properties/transition-duration) festlegen) und wie der Übergang ablaufen soll (indem Sie eine [_Easing-Funktion_](/de/docs/Web/CSS/Reference/Properties/transition-timing-function) definieren, z.B. linear oder schnell am Anfang, langsam am Ende).

## Welche CSS-Eigenschaften können übergangen werden?

Der Webentwickler kann festlegen, welche Eigenschaft animiert werden soll und wie. Dies ermöglicht die Erstellung komplexer Übergänge. Allerdings sind einige Eigenschaften [nicht animierbar](/de/docs/Web/CSS/Guides/Animations/Animatable_properties), da es keinen Sinn macht, sie zu animieren.

> [!NOTE]
> Der Wert `auto` ist oft ein sehr komplexer Fall. Die Spezifikation empfiehlt, nicht von und zu `auto` zu animieren. Einige User Agents, wie solche auf der Basis von Gecko, implementieren diese Anforderung, während andere, wie solche auf der Basis von WebKit, weniger strikt sind. Die Verwendung von Animationen mit `auto` kann zu unvorhersehbaren Ergebnissen führen, abhängig vom Browser und seiner Version, und sollte vermieden werden.

## Definition von Übergängen

CSS-Übergänge werden mit der Kurzschrift-Eigenschaft {{cssxref("transition")}} gesteuert. Dies ist der beste Weg, um Übergänge zu konfigurieren, da es einfacher ist, unsynchronisierte Parameter zu vermeiden, die sehr frustrierend sein können, wenn man viel Zeit mit der Fehlersuche in CSS verbringen muss.

Sie können die einzelnen Komponenten des Übergangs mit den folgenden Untereigenschaften steuern:

- {{cssxref("transition-property")}}
  - : Legt die Namen der CSS-Eigenschaften fest, auf die Übergänge angewendet werden sollen. Nur die hier aufgelisteten Eigenschaften werden während der Übergänge animiert; Änderungen aller anderen Eigenschaften erfolgen wie gewohnt sofort.
- {{cssxref("transition-duration")}}
  - : Bestimmt die Dauer, über die Übergänge stattfinden sollen. Sie können eine einzelne Dauer angeben, die während des Übergangs für alle Eigenschaften gilt, oder mehrere Werte, damit jede Eigenschaft über einen anderen Zeitraum hinweg übergeht.
- {{cssxref("transition-timing-function")}}
  - : Gibt eine Funktion an, um zu definieren, wie Zwischenwerte für Eigenschaften berechnet werden. _Easing-Funktionen_ bestimmen, wie Zwischenwerte des Übergangs berechnet werden. Die meisten [Easing-Funktionen](/de/docs/Web/CSS/Reference/Values/easing-function) können angegeben werden, indem das Diagramm der entsprechenden Funktion bereitgestellt wird, wie es durch vier Punkte definiert wird, die eine kubische Bezier definieren. Sie können auch Easing aus dem [Easing functions cheat sheet](https://easings.net/) wählen.
- {{cssxref("transition-delay")}}
  - : Definiert, wie lange gewartet werden soll, bis eine Eigenschaft geändert wird und der Übergang tatsächlich beginnt.

Die Kurzschriftsyntax für `transition` in CSS wird wie folgt geschrieben:

```plain
transition: <property> <duration> <timing-function> <delay>;
```

## Beispiele

### Einfaches Beispiel

Dieses Beispiel führt eine viersekündige Schriftgrößen-Übergang mit einer zweisekündigen Verzögerung zwischen dem Zeitpunkt, an dem der Benutzer über das Element fährt, und dem Beginn des Animationseffekts aus:

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

Wenn die Werteliste einer Eigenschaft kürzer als die der anderen ist, werden ihre Werte wiederholt, um sie abzugleichen. Zum Beispiel:

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

Ebenso, wenn die Werteliste einer Eigenschaft länger ist als die für {{cssxref("transition-property")}}, wird sie gekürzt, sodass, wenn Sie das folgende CSS haben:

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

### Verwendung von Übergängen beim Hervorheben von Menüs

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

Dieses CSS legt das Erscheinungsbild des Menüs fest, wobei sowohl die Hintergrund- als auch die Textfarben geändert werden, wenn sich das Element in seinen {{cssxref(":hover")}} und {{cssxref(":focus")}} Zuständen befindet:

{{EmbedLiveSample("Using transitions when highlighting menus")}}

### Übergänge von Anzeige und Inhalts-Sichtbarkeit

Dieses Beispiel demonstriert, wie [`display`](/de/docs/Web/CSS/Reference/Properties/display) und [`content-visibility`](/de/docs/Web/CSS/Reference/Properties/content-visibility) übergangen werden können. Dieses Verhalten ist nützlich für das Erstellen von Ein-/Ausblenden-Animationen, bei denen Sie beispielsweise einen Container mit `display: none` aus dem DOM entfernen möchten, aber mit [`opacity`](/de/docs/Web/CSS/Reference/Properties/opacity) ausblenden möchten, anstatt sofort zu verschwinden.

Unterstützende Browser übergehen `display` und `content-visibility` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete). Dies bedeutet im Allgemeinen, dass Eigenschaften zwischen zwei Werten wechseln, während sie zu 50 % zwischen den beiden animieren.

Es gibt jedoch eine Ausnahme, nämlich wenn zu/von `display: none` oder `content-visibility: hidden` animiert wird. In diesem Fall wechselt der Browser zwischen den beiden Werten, sodass der übergehende Inhalt während der gesamten Animationsdauer angezeigt wird.

Zum Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wechselt der Wert bei `0%` der Animationsdauer zu `block`, sodass er während der gesamten Zeit sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wechselt der Wert bei `100%` der Animationsdauer zu `none`, sodass er während der gesamten Zeit sichtbar ist.

Beim Übergang dieser Eigenschaften muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) auf den Übergängen gesetzt werden. Dies ermöglicht effektiv `display`/`content-visibility` Übergänge.

Beim Übergang von `display` wird [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style) benötigt, um eine Reihe von Startwerten für die auf ein Element gesetzten Eigenschaften anzugeben, von denen Sie übergehen möchten, wenn das Element sein erstes Style-Update erhält. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden CSS-Übergänge nicht ausgelöst, wenn ein Element seine ersten Style-Updates erhält und zum ersten Mal im DOM erscheint, was beinhaltet, wenn `display` von `none` zu einem anderen Zustand wechselt. `content-visibility` Animationen müssen keine Startwerte in einem `@starting-style`-Block angeben. Dies liegt daran, dass `content-visibility` kein Element aus dem DOM verbirgt wie `display`: es überspringt einfach das Rendern des Inhalts des Elements.

#### HTML

Das HTML enthält zwei {{htmlelement("p")}} Elemente mit einem {{htmlelement("div")}} dazwischen, den wir von `display` `none` zu `block` animieren werden.

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

Beachten Sie den `@starting-style` Block, der verwendet wird, um den Ausgangsstil für den Übergang festzulegen, und die Einbeziehung der `display` Eigenschaft in die Übergangsliste, mit `allow-discrete` darauf gesetzt.

#### JavaScript

Schließlich fügen wir ein wenig JavaScript hinzu, um Ereignislistener einzurichten, die den Übergang (über die `showing` Klasse) auslösen.

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
> - Hinzufügen des Elements zum DOM mit `.appendChild()`
> - Entfernen einer `display: none;` Eigenschaft von einem Element.
>
> Dies wird so behandelt, als wäre der Anfangszustand nie aufgetreten und das Element war immer in seinem Endzustand. Der einfache Weg, diese Einschränkung zu überwinden, besteht darin, einen `setTimeout()` von ein paar Millisekunden anzuwenden, bevor Sie die CSS-Eigenschaft ändern, die Sie übergehen möchten.

### Verwendung von Übergängen, um JavaScript-Funktionalität reibungsloser zu gestalten

Übergänge sind ein großartiges Werkzeug, um Dinge viel glatter aussehen zu lassen, ohne etwas an Ihrer JavaScript-Funktionalität ändern zu müssen. Sehen Sie sich das folgende Beispiel an.

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

Mit CSS können Sie die durch JavaScript angewendeten Stile glätten. Fügen Sie dem Element einen Übergang hinzu und jede Änderung erfolgt reibungslos:

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

Sie können das [`transitionend`](/de/docs/Web/API/Element/transitionend_event) Ereignis verwenden, um zu erkennen, dass eine Animation beendet ist. Dies ist ein [`TransitionEvent`](/de/docs/Web/API/TransitionEvent) Objekt, das zwei zusätzliche Eigenschaften über ein typisches [`Event`](/de/docs/Web/API/Event) Objekt hinaus besitzt:

- `propertyName`
  - : Ein String, der den Namen der CSS-Eigenschaft angibt, deren Übergang abgeschlossen ist.
- `elapsedTime`
  - : Ein Float, der die Anzahl der Sekunden angibt, die der Übergang lief, als das Ereignis ausgelöst wurde. Dieser Wert wird nicht von dem Wert von {{cssxref("transition-delay")}} beeinflusst.

Wie üblich können Sie die [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) Methode verwenden, um dieses Ereignis zu überwachen:

```js
el.addEventListener("transitionend", updateTransition);
```

Sie erkennen den Beginn eines Übergangs mit [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event) (wird vor einer Verzögerung ausgelöst) und [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event) (wird nach einer Verzögerung ausgelöst), in ähnlicher Weise:

```js
el.addEventListener("transitionrun", signalStart);
el.addEventListener("transitionstart", signalStart);
```

> [!NOTE]
> Das `transitionend` Ereignis wird nicht ausgelöst, wenn der Übergang abgebrochen wird, bevor er abgeschlossen ist, weil entweder das Element {{cssxref("display", "display: none")}} gemacht oder der Wert der animierenden Eigenschaft geändert wird.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das [`TransitionEvent`](/de/docs/Web/API/TransitionEvent) Interface und das [`transitionend`](/de/docs/Web/API/Element/transitionend_event) Ereignis
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
