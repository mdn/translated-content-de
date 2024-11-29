---
title: Verwenden von CSS-Übergängen
slug: Web/CSS/CSS_transitions/Using_CSS_transitions
l10n:
  sourceCommit: dbc32052ef186252a1211d296ff60a9b5e3e8d74
---

{{CSSRef}}

**CSS-Übergänge** bieten eine Möglichkeit, die Animationsgeschwindigkeit zu steuern, wenn CSS-Eigenschaften geändert werden. Anstatt Veränderungen von Eigenschaften sofort umzusetzen, können Sie die Änderungen über einen bestimmten Zeitraum hinweg erfolgen lassen. Beispielsweise erfolgt normalerweise der Farbwechsel eines Elements von Weiß zu Schwarz sofort. Mit aktivierten CSS-Übergängen erfolgen die Änderungen in Intervallen, die einer Beschleunigungskurve folgen, die alle angepasst werden können.

Animationen, die den Übergang zwischen zwei Zuständen umfassen, werden oft _implizite Übergänge_ genannt, da die Zustände zwischen dem Anfangs- und dem Endzustand vom Browser implizit definiert werden.

![Ein CSS-Übergang weist den Browser an, die Zwischenzustände zwischen dem Anfangs- und dem Endzustand zu zeichnen und zeigt dem Benutzer eine fließende Übergangsanimation.](transitionsprinciple.png)

CSS-Übergänge ermöglichen es Ihnen, zu entscheiden, welche Eigenschaften animiert werden sollen (indem Sie [_sie explizit auflisten_](/de/docs/Web/CSS/transition-property)), wann die Animation beginnt (indem Sie eine [_Verzögerung_](/de/docs/Web/CSS/transition-delay) einstellen), wie lange der Übergang dauern soll (indem Sie eine [_Dauer_](/de/docs/Web/CSS/transition-duration) festlegen) und wie der Übergang ablaufen soll (indem Sie eine [_Easing-Funktion_](/de/docs/Web/CSS/transition-timing-function) definieren, z. B. linear oder zu Beginn schnell, am Ende langsam).

## Welche CSS-Eigenschaften können übergangsfähig gemacht werden?

Der Webautor kann festlegen, welche Eigenschaft animiert und auf welche Weise animiert werden soll. Dies ermöglicht die Erstellung komplexer Übergänge. Einige Eigenschaften sind jedoch [nicht animierbar](/de/docs/Web/CSS/CSS_animated_properties), da es keinen Sinn macht, sie zu animieren.

> [!NOTE]
> Der `auto`-Wert ist oft ein sehr komplexer Fall. Die Spezifikation empfiehlt, nicht von und zu `auto` zu animieren. Einige User Agents, wie die auf Gecko basierenden, implementieren diese Anforderung, während andere, wie die auf WebKit basierenden, weniger strikt sind. Die Verwendung von Animationen mit `auto` kann zu unvorhersehbaren Ergebnissen führen, abhängig vom Browser und seiner Version, und sollte vermieden werden.

## Definition von Übergängen

CSS-Übergänge werden mit der Kurznotation {{cssxref("transition")}} gesteuert. Dies ist die beste Möglichkeit, Übergänge zu konfigurieren, da es einfacher ist, asynchrone Parameter zu vermeiden, was sehr frustrierend sein kann, wenn man viel Zeit damit verbringen muss, diese in CSS zu debuggen.

Sie können die einzelnen Komponenten des Übergangs mit den folgenden Untereigenschaften steuern:

- {{cssxref("transition-property")}}
  - : Gibt den oder die Namen der CSS-Eigenschaften an, auf die Übergänge angewendet werden sollen. Nur die hier aufgelisteten Eigenschaften werden während der Übergänge animiert; Änderungen an allen anderen Eigenschaften erfolgen sofort wie gewohnt.
- {{cssxref("transition-duration")}}
  - : Gibt die Dauer an, über die Übergänge erfolgen sollen. Sie können eine einzige Dauer angeben, die für alle Eigenschaften während des Übergangs gilt, oder mehrere Werte festlegen, um jeder Eigenschaft einen anderen Übergangszeitraum zu ermöglichen.
- {{cssxref("transition-timing-function")}}
  - : Gibt eine Funktion an, um zu definieren, wie Zwischenwerte für Eigenschaften berechnet werden. _Easing-Funktionen_ bestimmen, wie Zwischenwerte des Übergangs berechnet werden. Die meisten [Easing-Funktionen](/de/docs/Web/CSS/easing-function) können angegeben werden, indem das Diagramm der entsprechenden Funktion bereitgestellt wird, das durch vier Punkte definiert wird, die eine kubische Bezier definieren. Sie können auch das [Easing functions cheat sheet](https://easings.net/) zur Auswahl heranziehen.
- {{cssxref("transition-delay")}}
  - : Definiert, wie lange zwischen dem Zeitpunkt gewartet wird, zu dem eine Eigenschaft geändert wird, und dem tatsächlichen Beginn des Übergangs.

Die Kurznotation `transition` in CSS wird wie folgt geschrieben:

```css
div {
  transition: <property> <duration> <timing-function> <delay>;
}
```

## Beispiele

### Einfaches Beispiel

Dieses Beispiel führt eine viersekündige Schriftgrößenübergang mit einer zweisekündigen Verzögerung zwischen der Zeit, in der der Benutzer mit der Maus über das Element fährt, und dem Beginn des Animationseffekts durch:

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

Wenn die Liste von Werten für eine Eigenschaft kürzer ist als die der anderen, werden ihre Werte wiederholt, um sie anzupassen. Beispielsweise:

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

Ähnlich, wenn die Werteliste einer Eigenschaft länger ist als die für {{cssxref("transition-property")}}, wird sie gekürzt, sodass wenn Sie folgendes CSS haben:

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

### Verwenden von Übergängen beim Hervorheben von Menüs

Eine häufige Verwendung von CSS besteht darin, Elemente in einem Menü hervorzuheben, wenn der Benutzer den Mauszeiger über sie bewegt. Es ist einfach, Übergänge zu verwenden, um den Effekt noch attraktiver zu machen.

Zuerst richten wir das Menü mit HTML ein:

```html
<nav>
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact Us</a>
  <a href="#">Links</a>
</nav>
```

Dann erstellen wir das CSS, um das Aussehen und das Gefühl unseres Menüs umzusetzen:

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

Dieses CSS legt das Aussehen des Menüs fest, wobei sowohl die Hintergrundfarbe als auch die Textfarbe sich ändern, wenn sich das Element in seinen {{cssxref(":hover")}}- und {{cssxref(":focus")}}-Zuständen befindet:

{{EmbedLiveSample("Using transitions when highlighting menus")}}

### Transition von `display` und `content-visibility`

Dieses Beispiel demonstriert, wie [`display`](/de/docs/Web/CSS/display) und [`content-visibility`](/de/docs/Web/CSS/content-visibility) übergangen werden können. Dieses Verhalten ist nützlich, um Ein- und Ausgangsanimationen zu erstellen, bei denen Sie beispielsweise einen Container mit `display: none` aus dem DOM entfernen möchten, ihn jedoch mit [`opacity`](/de/docs/Web/CSS/opacity) ausblenden, anstatt ihn sofort zu entfernen.

Unterstützende Browser übergehen `display` und `content-visibility` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Das bedeutet im Allgemeinen, dass Eigenschaften zwischen zwei Werten 50% der Animation wechseln.

Es gibt jedoch eine Ausnahme, nämlich beim Animieren zu/von `display: none` oder `content-visibility: hidden`. In diesem Fall wird der Browser die beiden Werte wechseln, sodass der Übergangsinhalt während der gesamten Animationsdauer angezeigt wird.

Also zum Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wechselt der Wert zu `block` bei `0%` der Animationsdauer, sodass er die gesamte Zeit sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wechselt der Wert zu `none` bei `100%` der Animationsdauer, sodass er die gesamte Zeit sichtbar ist.

Wenn diese Eigenschaften übergangen werden, muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) auf die Übergänge gesetzt werden. Dies aktiviert effektiv `display`/`content-visibility`-Übergänge.

Beim Übergehen von `display` ist [`@starting-style`](/de/docs/Web/CSS/@starting-style) erforderlich, um einen Satz von Anfangswerten für Eigenschaften bereitzustellen, die an einem Element festgelegt sind, von dem Sie möchten, dass es übergeht, wenn das Element das erste Mal aktualisiert wird. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden CSS-Übergänge bei den ersten Stilaktualisierungen von Elementen nicht ausgelöst, wenn sie das erste Mal im DOM erscheinen, einschließlich wenn das `display` von `none` in einen anderen Zustand wechselt. `content-visibility`-Animationen erfordern keine Anfangswerte, die in einem `@starting-style`-Block angegeben werden. Dies liegt daran, dass `content-visibility` ein Element nicht aus dem DOM ausblendet, wie es `display` tut: Es überspringt einfach das Rendern der Inhalte des Elements.

#### HTML

Das HTML enthält zwei {{htmlelement("p")}} Elemente mit einem {{htmlelement("div")}} dazwischen, welches wir von `display` `none` zu `block` animieren werden.

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

Beachten Sie den `@starting-style` Block, der verwendet wird, um den Startstil für den Übergang anzugeben, und die Einbeziehung der `display` Eigenschaft in die Übergangsliste, mit `allow-discrete` darauf gesetzt.

#### JavaScript

Schließlich fügen wir ein bisschen JavaScript hinzu, um Eventlistener einzirichten, die den Übergang über die `showing` Klasse auslösen.

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

Der Code wird wie folgt angezeigt:

{{ EmbedLiveSample("Transitioning display and content-visibility", "100%", "350") }}

## JavaScript-Beispiele

> [!NOTE]
> Es sollte Vorsicht geboten sein, wenn ein Übergang direkt nach:
>
> - dem Hinzufügen des Elements zum DOM über `.appendChild()`
> - dem Entfernen der Eigenschaft `display: none;` eines Elements.
>
> behandelt wird, als ob der Anfangszustand nie aufgetreten und das Element immer im Endzustand war. Der einfache Weg, diese Einschränkung zu überwinden, besteht darin, ein `setTimeout()` von ein paar Millisekunden anzuwenden, bevor die CSS-Eigenschaft geändert wird, die Sie zum Übergang beabsichtigen.

### Verwenden von Übergängen, um JavaScript-Funktionalität geschmeidiger zu machen

Übergänge sind ein großartiges Werkzeug, um Dinge viel flüssiger aussehen zu lassen, ohne irgendetwas an Ihrer JavaScript-Funktionalität ändern zu müssen. Nehmen Sie das folgende Beispiel.

```html live-sample___js-transitions
<p>Click anywhere to move the ball</p>
<div id="foo" class="ball"></div>

<script>
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
</script>
```

Mit CSS können Sie die über JavaScript angewandten Stile glätten. Fügen Sie dem Element einen Übergang hinzu, und jede Änderung erfolgt reibungslos:

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

### Erkennen des Beginns und des Abschlusses eines Übergangs

Sie können das [`transitionend`](/de/docs/Web/API/Element/transitionend_event)-Event verwenden, um zu erkennen, dass eine Animation abgeschlossen ist. Dies ist ein [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)-Objekt, das zwei zusätzliche Eigenschaften über ein übliches [`Event`](/de/docs/Web/API/Event)-Objekt verfügt:

- `propertyName`
  - : Ein String, der den Namen der CSS-Eigenschaft angibt, deren Übergang abgeschlossen ist.
- `elapsedTime`
  - : Eine Gleitkommazahl, die die Anzahl der Sekunden angibt, die der Übergang lief, als das Event ausgelöst wurde. Dieser Wert wird nicht von dem Wert von {{cssxref("transition-delay")}} beeinflusst.

Wie gewohnt können Sie die [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden, um dieses Event zu überwachen:

```js
el.addEventListener("transitionend", updateTransition, true);
```

Sie erkennen den Beginn eines Übergangs durch Verwendung von [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event) (wird vor jeder Verzögerung ausgelöst) und [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event) (wird nach jeder Verzögerung ausgelöst) auf dieselbe Art und Weise:

```js
el.addEventListener("transitionrun", signalStart, true);
el.addEventListener("transitionstart", signalStart, true);
```

> [!NOTE]
> Das `transitionend`-Event wird nicht ausgelöst, wenn der Übergang abgebrochen wird, bevor der Übergang abgeschlossen ist, weil entweder das Element {{cssxref("display", "display: none")}} gemacht wird oder der Wert der animierenden Eigenschaft geändert wird.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)-Interface und das [`transitionend`](/de/docs/Web/API/Element/transitionend_event)-Event
- [Verwenden von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
