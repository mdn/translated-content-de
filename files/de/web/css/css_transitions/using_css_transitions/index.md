---
title: Verwendung von CSS transitions
slug: Web/CSS/CSS_transitions/Using_CSS_transitions
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{CSSRef}}

**CSS transitions** bieten eine Möglichkeit, die Animationsgeschwindigkeit bei der Änderung von CSS-Eigenschaften zu steuern. Anstatt dass Eigenschaftsänderungen sofort wirksam werden, können Sie die Änderungen einer Eigenschaft über einen Zeitraum erfolgen lassen. Zum Beispiel, wenn Sie die Farbe eines Elements von weiß zu schwarz ändern, ist die Änderung normalerweise unmittelbar. Mit aktivierten CSS transitions erfolgen die Änderungen in Zeitintervallen, die einer Beschleunigungskurve folgen, die alle angepasst werden können.

Animationen, die einen Übergang zwischen zwei Zuständen beinhalten, werden oft als _implizite Übergänge_ bezeichnet, da die Zwischenzustände zwischen dem Start- und dem Endzustand implizit vom Browser definiert werden.

![Ein CSS-Übergang teilt dem Browser mit, die Zwischenzustände zwischen dem Ausgangs- und dem Endzustand zu zeichnen, wodurch dem Benutzer ein reibungsloser Übergang gezeigt wird.](transitionsprinciple.png)

CSS transitions ermöglichen Ihnen zu entscheiden, welche Eigenschaften animiert werden sollen (indem Sie sie [explizit auflisten](/de/docs/Web/CSS/transition-property)), wann die Animation beginnt (indem Sie eine [Verzögerung](/de/docs/Web/CSS/transition-delay) festlegen), wie lange der Übergang dauert (indem Sie eine [Dauer](/de/docs/Web/CSS/transition-duration) festlegen) und wie der Übergang abläuft (indem Sie eine [Easing-Funktion](/de/docs/Web/CSS/transition-timing-function) definieren, z. B. linear oder schnell am Anfang, langsam am Ende).

## Welche CSS-Eigenschaften können übergangen werden?

Der Web-Autor kann definieren, welche Eigenschaft animiert werden muss und auf welche Weise. Dies ermöglicht die Erstellung komplexer Übergänge. Einige Eigenschaften sind jedoch [nicht animierbar](/de/docs/Web/CSS/CSS_animated_properties), da es keinen Sinn ergibt, sie zu animieren.

> [!NOTE]
> Der `auto`-Wert ist oft ein sehr komplexer Fall. Die Spezifikation empfiehlt, nicht von und zu `auto` zu animieren. Einige User Agents, wie die auf Gecko basierenden, implementieren diese Anforderung, während andere, wie die auf WebKit basierenden, weniger streng sind. Der Einsatz von Animationen mit `auto` kann zu unvorhersehbaren Ergebnissen führen, je nach Browser und seiner Version, und sollte vermieden werden.

## Definition von Übergängen

CSS transitions werden durch die Kurznotation {{cssxref("transition")}} gesteuert. Dies ist die beste Möglichkeit, Übergänge zu konfigurieren, da es erleichtert, asynchrone Parameter zu vermeiden, deren Debugging in CSS sehr frustrierend sein kann.

Sie können die individuellen Komponenten des Übergangs mit den folgenden Untereigenschaften steuern:

- {{cssxref("transition-property")}}
  - : Gibt den Namen oder die Namen der CSS-Eigenschaften an, auf die Übergänge angewendet werden sollen. Nur die hier aufgelisteten Eigenschaften werden während der Übergänge animiert; Änderungen an allen anderen Eigenschaften erfolgen wie üblich sofort.
- {{cssxref("transition-duration")}}
  - : Gibt die Dauer an, über die Übergänge erfolgen sollen. Sie können eine einzelne Dauer angeben, die auf alle Eigenschaften während des Übergangs angewendet wird, oder mehrere Werte, um jeder Eigenschaft zu ermöglichen, über einen anderen Zeitraum hinweg zu übergehen.
- {{cssxref("transition-timing-function")}}
  - : Gibt eine Funktion an, um zu definieren, wie Zwischenwerte für Eigenschaften berechnet werden. _Easing-Funktionen_ bestimmen, wie Zwischenwerte des Übergangs berechnet werden. Die meisten [Easing-Funktionen](/de/docs/Web/CSS/easing-function) können angegeben werden, indem das Diagramm der entsprechenden Funktion angegeben wird, wie durch vier Punkte definiert, die eine kubische Bezier definieren. Sie können auch Easing aus dem [Easing-Funktionen-Spickzettel](https://easings.net/) wählen.
- {{cssxref("transition-delay")}}
  - : Definiert, wie lange gewartet werden soll, bis der Übergang tatsächlich beginnt, nachdem eine Eigenschaft geändert wurde.

Die Kurznotation `transition` wird wie folgt geschrieben:

```css
div {
  transition: <property> <duration> <timing-function> <delay>;
}
```

## Beispiele

### Einfaches Beispiel

Dieses Beispiel führt eine viersekündige Schriftgrößenänderung mit einer zweisekündigen Verzögerung zwischen dem Zeitpunkt, an dem der Benutzer mit der Maus über das Element fährt, und dem Beginn des Animationseffekts aus:

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

Wenn eine Liste von Eigenschaftswerten kürzer ist als die anderen, werden ihre Werte wiederholt, um sie anzugleichen. Beispiel:

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

Ebenso, wenn die Werteliste einer Eigenschaft länger ist als die für {{cssxref("transition-property")}}, wird sie abgeschnitten, daher wenn Sie folgendes CSS haben:

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

Ein häufiger Einsatz von CSS ist das Hervorheben von Elementen in einem Menü, wenn der Benutzer den Mauszeiger darüber bewegt. Es ist einfach, Übergänge zu verwenden, um den Effekt noch attraktiver zu gestalten.

Zuerst richten wir das Menü mit HTML ein:

```html
<nav>
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact Us</a>
  <a href="#">Links</a>
</nav>
```

Dann erstellen wir das CSS, um das Erscheinungsbild und Gefühl unseres Menüs zu implementieren:

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

Dieses CSS legt das Erscheinungsbild des Menüs fest, indem sowohl die Hintergrund- als auch die Textfarben sich ändern, wenn das Element sich in seinem {{cssxref(":hover")}}- und {{cssxref(":focus")}}-Zustand befindet:

{{EmbedLiveSample("Using transitions when highlighting menus")}}

### Übergang von display und content-visibility

Dieses Beispiel zeigt, wie [`display`](/de/docs/Web/CSS/display) und [`content-visibility`](/de/docs/Web/CSS/content-visibility) übergangen werden können. Dieses Verhalten ist nützlich für das Erstellen von Ein-/Ausblendeanimationen, bei denen Sie zum Beispiel ein Container-Element mit `display: none` aus dem DOM entfernen möchten, es jedoch mit [`opacity`](/de/docs/Web/CSS/opacity) ausblenden lassen, anstatt es sofort verschwinden zu lassen.

Unterstützende Browser übergehen `display` und `content-visibility` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Dies bedeutet im Allgemeinen, dass die Eigenschaften während des Animierens zwischen den beiden Werten zu 50% umschalten werden.

Es gibt jedoch eine Ausnahme, wenn Sie zu/von `display: none` oder `content-visibility: hidden` animieren. In diesem Fall wechselt der Browser zwischen den beiden Werten so, dass der übergangene Inhalt die gesamte Animationsdauer über angezeigt wird.

Zum Beispiel:

- Wenn `display` von `none` auf `block` (oder ein anderer sichtbarer `display`-Wert) animiert wird, wird der Wert zu Beginn der Animationsdauer auf `block` umgeschaltet, sodass er die ganze Zeit sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none`, wird der Wert am Ende der Animationsdauer auf `none` umgeschaltet.

Beim Übergang dieser Eigenschaften muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) auf den Übergängen gesetzt werden. Dies ermöglicht effektiv `display`/`content-visibility` Übergänge.

Beim Übergang von `display` wird [`@starting-style`](/de/docs/Web/CSS/@starting-style) benötigt, um einen Satz von Startwerten für Eigenschaften bereitzustellen, die auf ein Element gesetzt werden, von denen Sie ausgehen möchten, wenn das Element sein erstes Stil-Update erhält. Dies ist nötig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden CSS-Übergänge bei den ersten Stil-Updates von Elementen nicht ausgelöst, wenn sie erstmals im DOM erscheinen, was auch der Fall ist, wenn `display` von `none` zu einem anderen Zustand wechselt. `content-visibility`-Animationen benötigen keine Startwerte, die in einem `@starting-style` Block angegeben sind. Dies liegt daran, dass `content-visibility` ein Element nicht aus dem DOM verbirgt wie `display`: es überspringt nur das Rendern des Inhalts des Elements.

#### HTML

Das HTML enthält zwei {{htmlelement("p")}}-Elemente mit einem dazwischenliegenden {{htmlelement("div")}}, das wir von `display` `none` nach `block` animieren werden.

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

Beachten Sie den `@starting-style` Block, um den Startstil für den Übergang festzulegen, sowie die Aufnahme der `display`-Eigenschaft in die Übergangsliste, mit `allow-discrete` darauf gesetzt.

#### JavaScript

Abschließend fügen wir ein bisschen JavaScript hinzu, um Event-Listener einzurichten, die den Übergang (über die `showing`-Klasse) auslösen.

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

Der Code wird folgendermaßen dargestellt:

{{ EmbedLiveSample("Transitioning display and content-visibility", "100%", "350") }}

## JavaScript-Beispiele

> [!NOTE]
> Vorsicht ist geboten, wenn Sie einen Übergang unmittelbar nach:
>
> - dem Hinzufügen des Elements zum DOM mithilfe von `.appendChild()`
> - dem Entfernen der `display: none;`-Eigenschaft eines Elements.
>
> Dies wird behandelt, als wäre der ursprüngliche Zustand nie aufgetreten und das Element immer im Endzustand gewesen. Der einfache Weg, diese Einschränkung zu überwinden, besteht darin, ein `setTimeout()` von ein paar Millisekunden zu verwenden, bevor Sie die CSS-Eigenschaft ändern, die Sie aufrufen möchten.

### Verwendung von Übergängen, um JavaScript-Funktionalität sanfter zu gestalten

Übergänge sind ein großartiges Werkzeug, um Dinge flüssiger aussehen zu lassen, ohne dass Sie etwas an Ihrer JavaScript-Funktionalität ändern müssen. Nehmen Sie das folgende Beispiel.

```html
<p>Click anywhere to move the ball</p>
<div id="foo" class="ball"></div>
```

Mithilfe von JavaScript können Sie bewirken, dass der Ball zu einer bestimmten Position bewegt wird:

```js
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

Mit CSS können Sie dies glatt gestalten, ohne zusätzlichen Aufwand. Fügen Sie dem Element einen Übergang hinzu, und jede Änderung wird reibungslos ablaufen:

```css
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

{{EmbedGHLiveSample("css-examples/transitions/js-transitions.html", '100%', 500)}}

### Erkennen des Beginns und Abschlusses eines Übergangs

Sie können das [`transitionend`](/de/docs/Web/API/Element/transitionend_event) Ereignis verwenden, um zu erkennen, dass eine Animation fertig ist. Dies ist ein [`TransitionEvent`](/de/docs/Web/API/TransitionEvent) Objekt, das zwei zusätzliche Eigenschaften über ein typisches [`Event`](/de/docs/Web/API/Event) Objekt hinaus hat:

- `propertyName`
  - : Ein String, der den Namen der CSS-Eigenschaft angibt, deren Übergang abgeschlossen wurde.
- `elapsedTime`
  - : Ein Float, der die Anzahl der Sekunden angibt, die der Übergang zum Zeitpunkt des Ereignisauslösens lief. Dieser Wert wird nicht von dem Wert von {{cssxref("transition-delay")}} beeinflusst.

Wie üblich können Sie die Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um auf dieses Ereignis zu überwachen:

```js
el.addEventListener("transitionend", updateTransition, true);
```

Sie können den Beginn eines Übergangs mithilfe von [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event) (wird vor einer Verzögerung ausgelöst) und [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event) (wird nach einer Verzögerung ausgelöst) auf ähnliche Weise erkennen:

```js
el.addEventListener("transitionrun", signalStart, true);
el.addEventListener("transitionstart", signalStart, true);
```

> [!NOTE]
> Das `transitionend`-Ereignis wird nicht ausgelöst, wenn der Übergang abgebrochen wird, bevor der Übergang abgeschlossen ist, da entweder das Element {{cssxref("display", "display: none")}} gesetzt wird oder der animierte Eigenschaftswert geändert wird.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Die [`TransitionEvent`](/de/docs/Web/API/TransitionEvent) Schnittstelle und das [`transitionend`](/de/docs/Web/API/Element/transitionend_event) Ereignis
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
