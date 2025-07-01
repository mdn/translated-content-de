---
title: Verwendung von CSS-Übergängen
short-title: Verwendung von Übergängen
slug: Web/CSS/CSS_transitions/Using_CSS_transitions
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{CSSRef}}

**CSS-Übergänge** bieten eine Möglichkeit, die Animationsgeschwindigkeit bei Änderungen von CSS-Eigenschaften zu steuern. Anstatt dass Änderungen von Eigenschaften sofort wirksam werden, können Sie die Änderungen einer Eigenschaft über einen Zeitraum hinweg stattfinden lassen. Wenn Sie beispielsweise die Farbe eines Elements von Weiß zu Schwarz ändern, erfolgt die Änderung normalerweise sofort. Mit aktivierten CSS-Übergängen erfolgen Änderungen in Zeitintervallen, die einer Beschleunigungskurve folgen, die alle angepasst werden können.

Animationen, die zwischen zwei Zuständen wechseln, werden oft als _implizite Übergänge_ bezeichnet, da die Zustände zwischen dem Anfangs- und dem Endzustand implizit vom Browser definiert werden.

![Ein CSS-Übergang sagt dem Browser, dass er die Zwischenzustände zwischen den Anfangs- und Endzuständen zeichnen soll, um dem Benutzer fließende Übergänge anzuzeigen.](transitionsprinciple.png)

CSS-Übergänge ermöglichen es Ihnen zu entscheiden, welche Eigenschaften animiert werden sollen (indem Sie sie [_explizit auflisten_](/de/docs/Web/CSS/transition-property)), wann die Animation beginnen soll (indem Sie eine [_Verzögerung_](/de/docs/Web/CSS/transition-delay) einstellen), wie lange der Übergang dauern soll (indem Sie eine [_Dauer_](/de/docs/Web/CSS/transition-duration) festlegen) und wie der Übergang ablaufen soll (indem Sie eine [_Easing-Funktion_](/de/docs/Web/CSS/transition-timing-function) definieren, z.B. linear oder schnell am Anfang, langsam am Ende).

## Welche CSS-Eigenschaften können übergangen werden?

Der Webautor kann definieren, welche Eigenschaft animiert werden soll und auf welche Weise. Dies ermöglicht die Erstellung komplexer Übergänge. Einige Eigenschaften sind jedoch [nicht animierbar](/de/docs/Web/CSS/CSS_animated_properties), da es keinen Sinn ergibt, sie zu animieren.

> [!NOTE]
> Der `auto`-Wert ist oft ein sehr komplexer Fall. Die Spezifikation empfiehlt, nicht von und zu `auto` zu animieren. Einige Benutzeragenten, wie diejenigen, die auf Gecko basieren, implementieren diese Anforderung, während andere, basierend auf WebKit, weniger streng sind. Die Verwendung von Animationen mit `auto` kann zu unvorhersehbaren Ergebnissen führen, abhängig vom Browser und seiner Version, und sollte vermieden werden.

## Definition von Übergängen

CSS-Übergänge werden mit der Kurzform-Eigenschaft {{cssxref("transition")}} gesteuert. Dies ist der beste Weg, um Übergänge zu konfigurieren, da es einfacher ist, unzusammenhängende Parameter zu vermeiden, die sehr frustrierend sein können, wenn man viel Zeit in das Debuggen in CSS investieren muss.

Sie können die einzelnen Komponenten des Übergangs mit den folgenden Untereigenschaften steuern:

- {{cssxref("transition-property")}}
  - : Gibt den oder die Namen der CSS-Eigenschaften an, auf die Übergänge angewendet werden sollen. Nur die hier aufgeführten Eigenschaften werden während der Übergänge animiert; Änderungen an allen anderen Eigenschaften erfolgen wie gewohnt sofort.
- {{cssxref("transition-duration")}}
  - : Gibt die Dauer an, über die Übergänge stattfinden sollen. Sie können entweder eine einzige Dauer angeben, die für alle Eigenschaften während des Übergangs gilt, oder mehrere Werte, die es jeder Eigenschaft ermöglichen, über einen anderen Zeitraum zu wechseln.
- {{cssxref("transition-timing-function")}}
  - : Gibt eine Funktion an, um zu definieren, wie Zwischenwerte für Eigenschaften berechnet werden. _Easing-Funktionen_ bestimmen, wie Zwischenwerte des Übergangs berechnet werden. Die meisten [Easing-Funktionen](/de/docs/Web/CSS/easing-function) können angegeben werden, indem Sie das Diagramm der entsprechenden Funktion bereitstellen, definiert durch vier Punkte, die eine kubische Bezierkurve definieren. Sie können auch aus dem [Easing Functions Cheat Sheet](https://easings.net/) auswählen.
- {{cssxref("transition-delay")}}
  - : Definiert, wie lange gewartet werden soll, nachdem eine Eigenschaft geändert wurde und bevor der Übergang tatsächlich beginnt.

Die CSS-Kurzform-Syntax für `transition` wird folgendermaßen geschrieben:

```plain
transition: <property> <duration> <timing-function> <delay>;
```

## Beispiele

### Einfaches Beispiel

Dieses Beispiel führt einen viersekündigen Schriftgrößenübergang mit einer zweisekündigen Verzögerung zwischen dem Zeitpunkt, an dem der Benutzer über das Element fährt, und dem Beginn des Animationseffekts aus:

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

Ebenso wird, wenn die Werteliste einer Eigenschaft länger ist als die für {{cssxref("transition-property")}}, sie abgeschnitten. Wenn Sie also das folgende CSS haben:

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

Eine übliche Verwendung von CSS besteht darin, Elemente in einem Menü hervorzuheben, wenn der Benutzer den Mauszeiger darüber bewegt. Es ist einfach, Übergänge zu verwenden, um den Effekt noch ansprechender zu gestalten.

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

Dieses CSS stellt das Aussehen des Menüs dar, wobei sich die Hintergrund- und Textfarben ändern, wenn sich das Element im Zustand {{cssxref(":hover")}} und {{cssxref(":focus")}} befindet:

{{EmbedLiveSample("Using transitions when highlighting menus")}}

### Übergang von Display und Content-Visibility

Dieses Beispiel zeigt, wie [`display`](/de/docs/Web/CSS/display) und [`content-visibility`](/de/docs/Web/CSS/content-visibility) übergegangen werden können. Dieses Verhalten ist nützlich für das Erstellen von Ein-/Ausblendungsanimationen, bei denen Sie beispielsweise einen Container mit `display: none` aus dem DOM entfernen, ihn jedoch mit [`opacity`](/de/docs/Web/CSS/opacity) ausblenden möchten, anstatt ihn sofort verschwinden zu lassen.

Unterstützende Browser übergehen `display` und `content-visibility` mit einer Variation des [diskrete Animationstyp](/de/docs/Web/CSS/CSS_animated_properties#discrete). Dies bedeutet in der Regel, dass Eigenschaften 50 % der Animation zwischen zwei Werten wechseln.

Es gibt jedoch eine Ausnahme, und zwar wenn zwischen `display: none` oder `content-visibility: hidden` animiert wird. In diesem Fall schaltet der Browser zwischen den beiden Werten um, sodass der übergangene Inhalt für die gesamte Animationsdauer angezeigt wird.

Zum Beispiel:

- Beim Animieren von `display` von `none` auf `block` (oder einem anderen sichtbaren `display`-Wert) wird der Wert bei `0%` der Animationsdauer auf `block` umgeschaltet, sodass er die gesamte Zeit sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) auf `none` wird der Wert bei `100%` der Animationsdauer auf `none` umgeschaltet, sodass er die gesamte Zeit sichtbar ist.

Beim Übergehen dieser Eigenschaften muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) für die Übergänge gesetzt werden. Dies ermöglicht effektiv das Übergängen von `display`/`content-visibility`.

Wenn `display` übergangen wird, muss [`@starting-style`](/de/docs/Web/CSS/@starting-style) verwendet werden, um einen Satz von Startwerten für Eigenschaften bereitzustellen, die für ein Element gesetzt werden, von dem Sie aus übergehen möchten, wenn das Element seine erste Stilaktualisierung erhält. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden CSS-Übergänge nicht bei den ersten Stilaktualisierungen von Elementen ausgelöst, wenn sie erstmals im DOM erscheinen, was auch dann der Fall ist, wenn `display` von `none` zu einem anderen Zustand wechselt. `content-visibility`-Animationen müssen keine Startwerte in einem `@starting-style`-Block angeben. Dies liegt daran, dass `content-visibility` ein Element nicht wie `display` aus dem DOM ausblendet: es überspringt nur das Rendern des Inhalts des Elements.

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

Beachten Sie den `@starting-style`-Block, der verwendet wird, um den Startstil für den Übergang festzulegen, und das Einschließen der `display`-Eigenschaft in der Liste der Übergänge mit `allow-discrete` darauf.

#### JavaScript

Schließlich fügen wir ein wenig JavaScript hinzu, um Ereignis-Listener einzurichten, die den Übergang auslösen (über die `showing`-Klasse).

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

Der Code wird wie folgt wiedergegeben:

{{ EmbedLiveSample("Transitioning display and content-visibility", "100%", "350") }}

## JavaScript-Beispiele

> [!NOTE]
> Es sollte darauf geachtet werden, wenn ein Übergang unmittelbar nach folgendem verwendet wird:
>
> - Hinzufügen eines Elements zum DOM mittels `.appendChild()`
> - Entfernen der Eigenschaft `display: none;` von einem Element.
>
> Dies wird so behandelt, als wäre der Anfangszustand nie aufgetreten und das Element wäre immer in seinem Endzustand gewesen. Die einfache Methode, diese Einschränkung zu überwinden, besteht darin, ein `setTimeout()` von ein paar Millisekunden anzuwenden, bevor Sie die CSS-Eigenschaft ändern, auf die Sie den Übergang anwenden möchten.

### Verwendung von Übergängen, um JavaScript-Funktionalität zu glätten

Übergänge sind ein großartiges Werkzeug, um Dinge viel glatter aussehen zu lassen, ohne etwas an Ihrer JavaScript-Funktionalität zu ändern. Nehmen Sie das folgende Beispiel.

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

Mit CSS können Sie die mit JavaScript angewendeten Stile glätten. Fügen Sie dem Element einen Übergang hinzu, und jede Änderung erfolgt reibungslos:

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

### Erkennen des Beginns und der Fertigstellung eines Übergangs

Sie können das [`transitionend`](/de/docs/Web/API/Element/transitionend_event)-Ereignis verwenden, um zu erkennen, dass eine Animation zu Ende gelaufen ist. Dies ist ein [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)-Objekt, das zwei zusätzliche Eigenschaften im Vergleich zu einem typischen [`Event`](/de/docs/Web/API/Event)-Objekt hat:

- `propertyName`
  - : Ein String, der den Namen der CSS-Eigenschaft angibt, deren Übergang abgeschlossen ist.
- `elapsedTime`
  - : Ein float, der die Anzahl der Sekunden angibt, die der Übergang zum Zeitpunkt des Ereignisses gelaufen ist. Dieser Wert wird nicht durch den Wert von {{cssxref("transition-delay")}} beeinflusst.

Wie üblich können Sie die Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um dieses Ereignis zu überwachen:

```js
el.addEventListener("transitionend", updateTransition, true);
```

Sie können den Beginn eines Übergangs mit [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event) (wird vor einer Verzögerung ausgelöst) und [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event) (wird nach einer Verzögerung ausgelöst) auf die gleiche Weise erkennen:

```js
el.addEventListener("transitionrun", signalStart, true);
el.addEventListener("transitionstart", signalStart, true);
```

> [!NOTE]
> Das `transitionend`-Ereignis wird nicht ausgelöst, wenn der Übergang abgebrochen wird, bevor der Übergang abgeschlossen ist, entweder weil das Element {{cssxref("display", "display: none")}} oder der Wert der animierten Eigenschaft geändert wird.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Die [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)-Schnittstelle und das [`transitionend`](/de/docs/Web/API/Element/transitionend_event)-Ereignis
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
