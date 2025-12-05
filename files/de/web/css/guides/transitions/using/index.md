---
title: Verwenden von CSS-Transitions
short-title: Verwendung von Transitions
slug: Web/CSS/Guides/Transitions/Using
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

**CSS-Transitions** bieten eine Möglichkeit, die Animationsgeschwindigkeit beim Ändern von CSS-Eigenschaften zu steuern. Anstatt dass Änderungen sofort wirksam werden, können Sie die Änderungen einer Eigenschaft über einen bestimmten Zeitraum hinweg stattfinden lassen. Wenn Sie beispielsweise die Farbe eines Elements von Weiß auf Schwarz ändern, geschieht die Änderung normalerweise sofort. Mit aktivierten CSS-Transitions erfolgen Änderungen in Zeitintervallen, die einer Beschleunigungskurve folgen, die vollständig anpassbar ist.

Animationen, die den Übergang zwischen zwei Zuständen beinhalten, werden oft als _implizite Transitions_ bezeichnet, da die Zustände zwischen dem Start- und dem Endzustand implizit vom Browser definiert werden.

![Eine CSS-Transition weist den Browser an, die Zwischenzustände zwischen dem Anfangs- und dem Endzustand zu zeichnen, um dem Benutzer eine flüssige Transition zu zeigen.](transitionsprinciple.png)

CSS-Transitions ermöglichen es Ihnen, zu entscheiden, welche Eigenschaften animiert werden sollen (indem Sie [sie explizit auflisten](/de/docs/Web/CSS/Reference/Properties/transition-property)), wann die Animation beginnt (durch Festlegen einer [Verzögerung](/de/docs/Web/CSS/Reference/Properties/transition-delay)), wie lange die Transition dauert (durch Festlegen einer [Dauer](/de/docs/Web/CSS/Reference/Properties/transition-duration)) und wie die Transition abläuft (durch Definieren einer [Beschleunigungsfunktion](/de/docs/Web/CSS/Reference/Properties/transition-timing-function), z.B. linear oder schnell am Anfang, langsam am Ende).

## Welche CSS-Eigenschaften können transitioniert werden?

Der Webautor kann definieren, welche Eigenschaft animiert und in welcher Weise animiert werden soll. Dies ermöglicht die Erstellung komplexer Transitions. Einige Eigenschaften sind jedoch [nicht animierbar](/de/docs/Web/CSS/Guides/Animations/Animatable_properties), da es keinen Sinn macht, sie zu animieren.

> [!NOTE]
> Der Wert `auto` ist oft ein sehr komplexer Fall. Die Spezifikation empfiehlt, nicht von und zu `auto` zu animieren. Einige Benutzeragenten, wie diejenigen, die auf Gecko basieren, implementieren dieses Erfordernis, und andere, wie solche, die auf WebKit basieren, sind weniger strikt. Die Verwendung von Animationen mit `auto` kann zu unvorhersehbaren Ergebnissen führen, abhängig vom Browser und der Version, und sollte vermieden werden.

## Definition von Transitions

CSS-Transitions werden über die Kurzform-Eigenschaft {{cssxref("transition")}} gesteuert. Dies ist die beste Methode zur Konfiguration von Transitions, da es einfacher ist, nicht synchronisierte Parameter zu vermeiden, die sehr frustrierend sein können und viel Zeit beim Debuggen in CSS kosten.

Sie können die einzelnen Komponenten der Transition mit den folgenden Untereigenschaften steuern:

- {{cssxref("transition-property")}}
  - : Gibt den Namen oder die Namen der CSS-Eigenschaften an, auf die Transitions angewendet werden sollen. Nur die hier aufgelisteten Eigenschaften werden während der Transitions animiert; Änderungen an allen anderen Eigenschaften erfolgen wie gewohnt sofort.
- {{cssxref("transition-duration")}}
  - : Gibt die Dauer an, über die Transitions stattfinden sollen. Sie können eine einzige Dauer angeben, die während der Transition für alle Eigenschaften gilt, oder mehrere Werte, die es ermöglichen, dass jede Eigenschaft über einen anderen Zeitraum hinweg transitioniert.
- {{cssxref("transition-timing-function")}}
  - : Gibt eine Funktion an, die definiert, wie Zwischenwerte für Eigenschaften berechnet werden. _Beschleunigungsfunktionen_ bestimmen, wie Zwischenwerte der Transition berechnet werden. Die meisten [Beschleunigungsfunktionen](/de/docs/Web/CSS/Reference/Values/easing-function) können angegeben werden, indem Sie das Diagramm der entsprechenden Funktion angeben, wie es durch vier Punkte definiert ist, die eine kubische Bezier-Kurve definieren. Sie können auch aus dem [Beschleunigungsfunktionen-Spickzettel](https://easings.net/) wählen.
- {{cssxref("transition-delay")}}
  - : Definiert, wie lange gewartet werden muss, nachdem eine Eigenschaft geändert wurde, bevor die Transition tatsächlich beginnt.

Die Kurzsyntax für die CSS-Eigenschaft `transition` wird wie folgt geschrieben:

```plain
transition: <property> <duration> <timing-function> <delay>;
```

## Beispiele

### Einfaches Beispiel

In diesem Beispiel wird eine vier Sekunden lange Schriftgrößentransition mit einer zweisekündigen Verzögerung zwischen dem Zeitpunkt, an dem der Benutzer über das Element fährt, und dem Beginn des Animationseffekts durchgeführt:

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

Wenn die Liste der Werte einer Eigenschaft kürzer ist als die anderer, werden ihre Werte wiederholt, um sie anzupassen. Zum Beispiel:

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

### Verwendung von Transitions beim Hervorheben von Menüs

Eine häufige Verwendung von CSS ist das Hervorheben von Elementen in einem Menü, wenn der Benutzer den Mauszeiger darüber bewegt. Mit Transitions kann der Effekt noch ansprechender gestaltet werden.

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

Dieses CSS legt das Aussehen des Menüs fest, wobei sowohl die Hintergrund- als auch die Textfarben geändert werden, wenn sich das Element im {{cssxref(":hover")}}- und {{cssxref(":focus")}}-Zustand befindet:

{{EmbedLiveSample("Using transitions when highlighting menus")}}

### Transition von display und content-visibility

Dieses Beispiel demonstriert, wie {{cssxref("display")}} und {{cssxref("content-visibility")}} transitioniert werden können. Dieses Verhalten ist nützlich, um Ein-/Ausstiegsanimationen zu erstellen, bei denen Sie beispielsweise ein Container-Element mit `display: none` aus dem DOM entfernen, es jedoch mit {{cssxref("opacity")}} ausblenden möchten, anstatt unmittelbar zu verschwinden.

Unterstützende Browser transitionieren `display` und `content-visibility` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete). Dies bedeutet in der Regel, dass Eigenschaften während der Animation zwischen zwei Werten bei 50 % wechseln.

Es gibt jedoch eine Ausnahme, nämlich wenn das Animieren zu/von `display: none` oder `content-visibility: hidden` stattfindet. In diesem Fall wechselt der Browser zwischen den beiden Werten, sodass der transitionierte Inhalt für die gesamte Dauer der Animation angezeigt wird.

Beispielsweise:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) wechselt der Wert zu `block` bei `0 %` der Animationsdauer, sodass er während der gesamten Zeit sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none`, wechselt der Wert zu `none` bei `100 %` der Animationsdauer, sodass er während der gesamten Zeit sichtbar ist.

Beim Transitionieren dieser Eigenschaften muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) auf den Transitions gesetzt werden. Dies aktiviert effektiv `display`/`content-visibility`-Transitions.

Beim Transitionieren von `display` wird [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style) benötigt, um einen Satz Startwerte für Eigenschaften bereitzustellen, die auf ein Element gesetzt sind, das Sie transitionieren möchten, wenn das Element seine erste Stilaktualisierung erhält. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden CSS-Transitions nicht bei den ersten Stilaktualisierungen ausgelöst, wenn Elemente erstmals im DOM erscheinen, was auch den Wechsel von `display: none` zu einem anderen Zustand einschließt. `content-visibility`-Animationen benötigen keine Startwerte, die in einem `@starting-style`-Block angegeben sind. Der Grund dafür ist, dass `content-visibility` ein Element nicht wie `display` aus dem DOM versteckt; es überspringt lediglich das Rendern des Inhalts des Elements.

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

Beachten Sie den `@starting-style`-Block, der den Startstil für die Transition angibt, und die Aufnahme der `display`-Eigenschaft in die Transitionsliste, bei der `allow-discrete` gesetzt ist.

#### JavaScript

Schließlich fügen wir ein wenig JavaScript hinzu, um Ereignislistener einzurichten, die die Transition auslösen (über die `showing`-Klasse).

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

Der Code rendert wie folgt:

{{ EmbedLiveSample("Transitioning display and content-visibility", "100%", "350") }}

## JavaScript-Beispiele

> [!NOTE]
> Es sollte Vorsicht walten lassen, wenn eine Transition unmittelbar danach verwendet wird:
>
> - Hinzufügen des Elements zum DOM über `.appendChild()`
> - Entfernen der `display: none;`-Eigenschaft eines Elements.
>
> Dies wird so behandelt, als ob der Anfangszustand nie stattgefunden hätte und das Element immer in seinem Endzustand war. Der einfache Weg, diese Einschränkung zu überwinden, besteht darin, ein `setTimeout()` von ein paar Millisekunden zu verwenden, bevor die CSS-Eigenschaft geändert wird, zu der Sie übergehen möchten.

### Verwenden von Transitions, um JavaScript-Funktionalität zu glätten

Transitions sind ein großartiges Werkzeug, um Dinge viel glatter aussehen zu lassen, ohne etwas an Ihrer JavaScript-Funktionalität zu ändern. Nehmen Sie das folgende Beispiel.

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

Mit CSS können Sie die Stile, die über JavaScript angewendet werden, glätten. Fügen Sie dem Element eine Transition hinzu, und jede Änderung erfolgt reibungslos:

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

### Erkennunen des Beginns und Abschlusses einer Transition

Sie können das [`transitionend`](/de/docs/Web/API/Element/transitionend_event)-Ereignis verwenden, um zu erkennen, dass eine Animation fertig gelaufen ist. Dies ist ein [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)-Objekt, das zwei zusätzliche Eigenschaften gegenüber einem typischen [`Event`](/de/docs/Web/API/Event)-Objekt hat:

- `propertyName`
  - : Ein String, der den Namen der CSS-Eigenschaft angibt, deren Transition abgeschlossen wurde.
- `elapsedTime`
  - : Ein Float, der angibt, wie viele Sekunden die Transition zur Zeit des Ereignisfeuers lief. Dieser Wert wird nicht durch den Wert von {{cssxref("transition-delay")}} beeinflusst.

Wie gewohnt können Sie die [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden, um dieses Ereignis zu überwachen:

```js
el.addEventListener("transitionend", updateTransition);
```

Sie erkennen den Beginn einer Transition mit [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event) (wird vor einer Verzögerung ausgelöst) und [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event) (wird nach einer Verzögerung ausgelöst), auf ähnliche Weise:

```js
el.addEventListener("transitionrun", signalStart);
el.addEventListener("transitionstart", signalStart);
```

> [!NOTE]
> Das `transitionend`-Ereignis wird nicht ausgelöst, wenn die Transition abgebrochen wird, bevor sie abgeschlossen werden konnte, weil das Element auf {{cssxref("display", "display: none")}} gesetzt wird oder der Wert der animierten Eigenschaft geändert wird.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)-Interface und das [`transitionend`](/de/docs/Web/API/Element/transitionend_event)-Ereignis
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
