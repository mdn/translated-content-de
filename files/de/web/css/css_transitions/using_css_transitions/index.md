---
title: Verwendung von CSS-Übergängen
short-title: Verwendung von Übergängen
slug: Web/CSS/CSS_transitions/Using_CSS_transitions
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

**CSS-Übergänge** bieten eine Möglichkeit, die Animationsgeschwindigkeit beim Ändern von CSS-Eigenschaften zu steuern. Anstatt dass sich Eigenschaftsänderungen sofort auswirken, können Sie die Änderungen einer Eigenschaft über einen bestimmten Zeitraum erfolgen lassen. Wenn Sie beispielsweise die Farbe eines Elements von Weiß zu Schwarz ändern, erfolgt die Änderung normalerweise sofort. Mit aktivierten CSS-Übergängen treten Änderungen in Zeitabständen auf, die einer Beschleunigungskurve folgen, die alle angepasst werden können.

Animationen, die das Übergehen zwischen zwei Zuständen beinhalten, werden oft als _implizite Übergänge_ bezeichnet, da die dazwischenliegenden Zustände vom Browser implizit definiert werden.

![Ein CSS-Übergang sagt dem Browser, dass er die Zwischenzustände zwischen den Anfangs- und Endzuständen zeichnen soll, und zeigt dem Benutzer einen sanften Übergang.](transitionsprinciple.png)

CSS-Übergänge ermöglichen es Ihnen zu entscheiden, welche Eigenschaften animiert werden sollen (indem sie [_explizit aufgelistet werden_](/de/docs/Web/CSS/Reference/Properties/transition-property)), wann die Animation starten soll (indem eine [_Verzögerung_](/de/docs/Web/CSS/Reference/Properties/transition-delay) festgelegt wird), wie lange der Übergang dauern soll (indem eine [_Dauer_](/de/docs/Web/CSS/Reference/Properties/transition-duration) festgelegt wird) und wie der Übergang ablaufen soll (indem eine [_Easing-Funktion_](/de/docs/Web/CSS/Reference/Properties/transition-timing-function) definiert wird, z. B. linear oder schnell am Anfang, langsam am Ende).

## Welche CSS-Eigenschaften können übergangen werden?

Der Webautor kann festlegen, welche Eigenschaft animiert werden soll und auf welche Weise. Dies ermöglicht die Erstellung komplexer Übergänge. Einige Eigenschaften sind jedoch [nicht animierbar](/de/docs/Web/CSS/CSS_animated_properties), da es keinen Sinn macht, sie zu animieren.

> [!NOTE]
> Der `auto`-Wert ist häufig ein sehr komplexer Fall. Die Spezifikation empfiehlt, nicht von und zu `auto` zu animieren. Einige User-Agents, wie die auf Gecko basierenden, implementieren diese Anforderung, während andere, wie die auf WebKit basierenden, weniger strikt sind. Die Verwendung von Animationen mit `auto` kann zu unvorhersehbaren Ergebnissen führen, abhängig vom Browser und seiner Version, und sollte vermieden werden.

## Definition von Übergängen

CSS-Übergänge werden mit der Kurzform {{cssxref("transition")}} Eigenschaft gesteuert. Dies ist die beste Möglichkeit, Übergänge zu konfigurieren, da sie es einfacher macht, nicht synchronisierte Parameter zu vermeiden, was sehr frustrierend sein kann, wenn man viel Zeit mit dem Debuggen in CSS verbringen muss.

Sie können die einzelnen Komponenten des Übergangs mit den folgenden Untereigenschaften steuern:

- {{cssxref("transition-property")}}
  - : Gibt den Namen oder die Namen der CSS-Eigenschaften an, auf die Übergänge angewendet werden sollen. Während der Übergänge werden nur die hier aufgeführten Eigenschaften animiert; Änderungen an allen anderen Eigenschaften erfolgen wie gewohnt sofort.
- {{cssxref("transition-duration")}}
  - : Gibt die Dauer an, über die Übergänge erfolgen sollen. Sie können eine einzelne Dauer angeben, die für alle Eigenschaften während des Übergangs gilt, oder mehrere Werte, damit jede Eigenschaft über einen anderen Zeitraum übergeht.
- {{cssxref("transition-timing-function")}}
  - : Gibt eine Funktion an, um zu definieren, wie Zwischenwerte für Eigenschaften berechnet werden. _Easing-Funktionen_ bestimmen, wie Zwischenwerte des Übergangs berechnet werden. Die meisten [Easing-Funktionen](/de/docs/Web/CSS/easing-function) können angegeben werden, indem man den Graphen der entsprechenden Funktion bereitstellt, definiert durch vier Punkte, die eine kubische Bezier definieren. Sie können auch die Easing-Funktionen aus dem [Easing-Funktionen Spickzettel](https://easings.net/) wählen.
- {{cssxref("transition-delay")}}
  - : Definiert, wie lange zu warten ist zwischen dem Zeitpunkt, an dem eine Eigenschaft geändert wird, und dem eigentlichen Beginn des Übergangs.

Die Kurzform-CSS-Syntax `transition` wird wie folgt geschrieben:

```plain
transition: <property> <duration> <timing-function> <delay>;
```

## Beispiele

### Einfaches Beispiel

Dieses Beispiel führt einen Schriftgrößenübergang über vier Sekunden mit einer zweisekündigen Verzögerung aus, die zwischen dem Zeitpunkt besteht, an dem der Benutzer mit der Maus über das Element fährt, und dem Beginn des Animationseffekts:

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

Ebenso, wenn die Werteliste einer Eigenschaft länger ist als die für {{cssxref("transition-property")}}, wird sie gekürzt. Wenn Sie also folgendes CSS haben:

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

### Übergänge beim Hervorheben von Menüs

Eine häufige Verwendung von CSS ist das Hervorheben von Elementen in einem Menü, wenn der Benutzer den Mauszeiger darüber bewegt. Es ist einfach, Übergänge zu verwenden, um den Effekt noch ansprechender zu gestalten.

Zuerst richten wir das Menü mit HTML ein:

```html
<nav>
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact Us</a>
  <a href="#">Links</a>
</nav>
```

Dann erstellen wir das CSS, um das Aussehen und Gefühl unseres Menüs umzusetzen:

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

Dieses CSS etabliert das Aussehen des Menüs, wobei sowohl die Hintergrund- als auch die Textfarben ändern, wenn sich das Element in seinen {{cssxref(":hover")}} und {{cssxref(":focus")}} Zuständen befindet:

{{EmbedLiveSample("Using transitions when highlighting menus")}}

### Übergänge von Anzeige und Inhalts-Sichtbarkeit

Dieses Beispiel demonstriert, wie [`display`](/de/docs/Web/CSS/Reference/Properties/display) und [`content-visibility`](/de/docs/Web/CSS/Reference/Properties/content-visibility) übergangen werden können. Dieses Verhalten ist nützlich für die Erstellung von Ein-/Ausgangsanimationen, bei denen Sie beispielsweise einen Container aus dem DOM mit `display: none` entfernen, ihn aber mit [`opacity`](/de/docs/Web/CSS/Reference/Properties/opacity) ausblenden möchten, anstatt sofort zu verschwinden.

Unterstützende Browser übergehen `display` und `content-visibility` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Dies bedeutet im Allgemeinen, dass Eigenschaften zwischen zwei Werten um 50% beim Animieren zwischen den beiden gewechselt werden.

Es gibt jedoch eine Ausnahme, nämlich bei der Animation zu/von `display: none` oder `content-visibility: hidden`. In diesem Fall wird der Browser die Werte so umschalten, dass der übergangene Inhalt während der gesamten Animationsdauer angezeigt wird.

Zum Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wechselt der Wert zu `block` bei `0%` der Animationsdauer, sodass er die gesamte Zeit sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wechselt der Wert zu `none` bei `100%` der Animationsdauer, sodass er die gesamte Zeit sichtbar ist.

Beim Übergang dieser Eigenschaften muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) für die Übergänge gesetzt sein. Dies aktiviert effektiv `display`/`content-visibility` Übergänge.

Wenn `display` übergangen wird, wird [`@starting-style`](/de/docs/Web/CSS/@starting-style) benötigt, um einen Satz von Startwerten für die Eigenschaften bereitzustellen, die auf ein Element gesetzt sind, von dem Sie beim ersten Stilupdate des Elements übergehen möchten. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden CSS-Übergänge nicht bei ersten Stilaktualisierungen von Elementen ausgelöst, wenn sie erstmals im DOM erscheinen, was auch dann zutrifft, wenn `display` von `none` in einen anderen Zustand wechselt. `content-visibility`-Animationen benötigen keine Startwerte, die in einem `@starting-style`-Block angegeben werden. Dies liegt daran, dass `content-visibility` ein Element nicht aus dem DOM verbirgt, wie es bei `display` der Fall ist: Es überspringt einfach das Rendern des Inhalts des Elements.

#### HTML

Das HTML enthält zwei {{htmlelement("p")}} Elemente mit einem {{htmlelement("div")}} dazwischen, das wir von `display` `none` zu `block` animieren werden.

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

Beachten Sie den `@starting-style` Block, der verwendet wird, um den Anfangsstil für den Übergang zu spezifizieren, sowie die Einbeziehung der `display`-Eigenschaft in die Übergangsliste, wobei `allow-discrete` darauf gesetzt ist.

#### JavaScript

Schließlich fügen wir ein wenig JavaScript hinzu, um Ereignis-Listener einzurichten, die den Übergang auslösen (über die `showing` Klasse).

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

Der Code rendert sich wie folgt:

{{ EmbedLiveSample("Transitioning display and content-visibility", "100%", "350") }}

## JavaScript-Beispiele

> [!NOTE]
> Beim sofortigen Verwenden eines Übergangs nach:
>
> - dem Hinzufügen des Elements zum DOM mit `.appendChild()`
> - dem Entfernen der Eigenschaft `display: none;` eines Elements
>
> sollte Vorsicht walten. Dies wird behandelt, als ob der Anfangszustand nie vorlag und das Element immer in seinem Endzustand war. Der einfache Weg, diese Einschränkung zu überwinden, besteht darin, ein `setTimeout()` mit einigen Millisekunden anzuwenden, bevor Sie die CSS-Eigenschaft ändern, zu der Sie übergehen möchten.

### Verwendung von Übergängen, um JavaScript-Funktionalität zu glätten

Übergänge sind ein großartiges Werkzeug, um Dinge viel glatter aussehen zu lassen, ohne etwas an Ihrer JavaScript-Funktionalität tun zu müssen. Nehmen Sie das folgende Beispiel.

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

Mit CSS können Sie die Stile glätten, die durch JavaScript angewendet werden. Fügen Sie dem Element einen Übergang hinzu, und alle Änderungen erfolgen reibungslos:

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

### Das Starten und Abschließen eines Übergangs erkennen

Sie können das [`transitionend`](/de/docs/Web/API/Element/transitionend_event) Ereignis verwenden, um zu erkennen, dass eine Animation zu Ende gelaufen ist. Dies ist ein [`TransitionEvent`](/de/docs/Web/API/TransitionEvent) Objekt, das zwei zusätzliche Eigenschaften über ein typisches [`Event`](/de/docs/Web/API/Event) Objekt hat:

- `propertyName`
  - : Ein String, der den Namen der CSS-Eigenschaft angibt, deren Übergang abgeschlossen ist.
- `elapsedTime`
  - : Eine Fließkommavariable, die die Anzahl der Sekunden angibt, in denen der Übergang lief, als das Ereignis ausgelöst wurde. Dieser Wert wird nicht von dem Wert von {{cssxref("transition-delay")}} beeinflusst.

Wie üblich können Sie die Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um dieses Ereignis zu überwachen:

```js
el.addEventListener("transitionend", updateTransition);
```

Sie erkennen den Beginn eines Übergangs mit [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event) (wird vor einer Verzögerung ausgelöst) und [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event) (wird nach einer Verzögerung ausgelöst) auf die gleiche Weise:

```js
el.addEventListener("transitionrun", signalStart);
el.addEventListener("transitionstart", signalStart);
```

> [!NOTE]
> Das `transitionend` Ereignis wird nicht ausgelöst, wenn der Übergang abgebrochen wird, bevor er abgeschlossen ist, weil entweder das Element auf {{cssxref("display", "display: none")}} gesetzt wird oder der Wert der animierenden Eigenschaft geändert wird.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das [`TransitionEvent`](/de/docs/Web/API/TransitionEvent) Interface und das [`transitionend`](/de/docs/Web/API/Element/transitionend_event) Ereignis
- [Verwenden von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
