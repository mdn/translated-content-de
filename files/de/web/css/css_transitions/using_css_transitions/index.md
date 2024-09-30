---
title: CSS-Übergänge verwenden
slug: Web/CSS/CSS_transitions/Using_CSS_transitions
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{CSSRef}}

**CSS-Übergänge** bieten eine Möglichkeit, die Animationsgeschwindigkeit beim Ändern von CSS-Eigenschaften zu steuern. Anstatt dass sich Eigenschaftsänderungen sofort auswirken, können Sie bewirken, dass sich die Änderungen einer Eigenschaft über einen bestimmten Zeitraum erstrecken. Zum Beispiel, wenn Sie die Farbe eines Elements von Weiß zu Schwarz ändern, geschieht die Änderung normalerweise sofort. Mit aktivierten CSS-Übergängen erfolgen die Änderungen in Zeitintervallen, die einer Beschleunigungskurve folgen, die alle angepasst werden können.

Animationen, die den Übergang zwischen zwei Zuständen beinhalten, werden oft als _implizite Übergänge_ bezeichnet, da die Zustände zwischen dem Anfangs- und dem Endzustand implizit vom Browser definiert werden.

![Ein CSS-Übergang veranlasst den Browser, die Zwischenzustände zwischen dem Anfangs- und dem Endzustand zu zeichnen und zeigt dem Benutzer sanfte Übergänge.](transitionsprinciple.png)

CSS-Übergänge ermöglichen es Ihnen, zu entscheiden, welche Eigenschaften animiert werden sollen (indem Sie [_sie explizit auflisten_](/de/docs/Web/CSS/transition-property)), wann die Animation beginnt (indem Sie eine [_Verzögerung_](/de/docs/Web/CSS/transition-delay) einstellen), wie lange der Übergang dauert (indem Sie eine [_Dauer_](/de/docs/Web/CSS/transition-duration) festlegen) und wie der Übergang ausgeführt wird (indem Sie eine [_Easing-Funktion_](/de/docs/Web/CSS/transition-timing-function) definieren, z.B. linear oder schnell am Anfang, langsam am Ende).

## Welche CSS-Eigenschaften können übergangen werden?

Der Web-Autor kann definieren, welche Eigenschaft animiert werden soll und auf welche Weise. Dies ermöglicht die Erstellung komplexer Übergänge. Einige Eigenschaften sind jedoch [nicht animierbar](/de/docs/Web/CSS/CSS_animated_properties), da es keinen Sinn ergibt, sie zu animieren.

> [!NOTE]
> Der `auto`-Wert ist oft ein sehr komplexer Fall. Die Spezifikation empfiehlt, nicht von und zu `auto` zu animieren. Einige User Agents, wie die auf Gecko basierenden, implementieren diese Anforderung, und andere, wie die auf WebKit basierenden, sind weniger streng. Das Verwenden von Animationen mit `auto` kann zu unvorhersehbaren Ergebnissen führen, abhängig vom Browser und seiner Version, und sollte vermieden werden.

## Übergänge definieren

CSS-Übergänge werden mit der Kurzform {{cssxref("transition")}} gesteuert. Dies ist der beste Weg, um Übergänge zu konfigurieren, da es einfacher ist, nicht synchronisierte Parameter zu vermeiden, was sehr frustrierend sein kann, wenn man viel Zeit mit dem Debuggen in CSS verbringt.

Sie können die einzelnen Komponenten des Übergangs mit den folgenden Untereigenschaften steuern:

- {{cssxref("transition-property")}}
  - : Gibt den Namen oder die Namen der CSS-Eigenschaften an, auf die Übergänge angewendet werden sollen. Nur die hier aufgeführten Eigenschaften werden während der Übergänge animiert; Änderungen an allen anderen Eigenschaften erfolgen wie gewohnt sofort.
- {{cssxref("transition-duration")}}
  - : Gibt die Dauer an, über die Übergänge stattfinden sollen. Sie können eine einzelne Dauer angeben, die für alle Eigenschaften während des Übergangs gilt, oder mehrere Werte, die es jeder Eigenschaft ermöglichen, über einen anderen Zeitraum hinweg zu wechseln.
- {{cssxref("transition-timing-function")}}
  - : Gibt eine Funktion an, um zu definieren, wie Zwischenwerte für Eigenschaften berechnet werden. _Easing-Funktionen_ bestimmen, wie die Zwischenwerte des Übergangs berechnet werden. Die meisten [Easing-Funktionen](/de/docs/Web/CSS/easing-function) können angegeben werden, indem das Diagramm der entsprechenden Funktion bereitgestellt wird, wie durch vier Punkte eines kubischen Bezierverlaufs definiert. Sie können auch Easing aus dem [Easing functions Cheat Sheet](https://easings.net/) wählen.
- {{cssxref("transition-delay")}}
  - : Definiert, wie lange gewartet wird, bevor die Änderung einer Eigenschaft tatsächlich beginnt.

Die Kurzform-Syntax für `transition` wird wie folgt geschrieben:

```css
div {
  transition: <property> <duration> <timing-function> <delay>;
}
```

## Beispiele

### Einfaches Beispiel

Dieses Beispiel führt eine viersekündige Schriftgrößen-Übergang mit einer zweisekündigen Verzögerung zwischen dem Zeitpunkt durch, an dem der Benutzer mit der Maus über das Element fährt, und dem Beginn des Animationseffekts:

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

Ähnlich wird, wenn die Werteliste einer Eigenschaft länger ist als die für {{cssxref("transition-property")}}, sie abgeschnitten, sodass, wenn Sie das folgende CSS haben:

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

### Übergänge verwenden, um Menüs hervorzuheben

Ein häufiger Einsatz von CSS besteht darin, Elemente in einem Menü hervorzuheben, wenn der Benutzer den Mauszeiger über sie bewegt. Es ist einfach, Übergänge zu verwenden, um den Effekt noch ansprechender zu gestalten.

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

Dieses CSS stellt das Erscheinungsbild des Menüs her, wobei sich die Hintergrund- und Textfarben ändern, wenn sich das Element im {{cssxref(":hover")}}- und {{cssxref(":focus")}}-Zustand befindet:

{{EmbedLiveSample("Using transitions when highlighting menus")}}

### Übergang von Anzeige und Inhaltssichtbarkeit

Dieses Beispiel zeigt, wie [`display`](/de/docs/Web/CSS/display) und [`content-visibility`](/de/docs/Web/CSS/content-visibility) übergangsweise verwendet werden können. Dieses Verhalten ist nützlich, um Ein- und Ausgangsanimationen zu erstellen, bei denen Sie beispielsweise ein Container aus dem DOM mit `display: none` entfernen möchten, aber es mit [`opacity`](/de/docs/Web/CSS/opacity) ausblenden möchten, anstatt sofort zu verschwinden.

Unterstützende Browser machen `display` und `content-visibility` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete) übergangsfähig. Dies bedeutet im Allgemeinen, dass Eigenschaften während des Animationsübergangs der beiden Werte 50% dazwischen wechseln.

Es gibt jedoch eine Ausnahme, wenn zu/from `display: none` oder `content-visibility: hidden` animiert wird. In diesem Fall wechselt der Browser zwischen den beiden Werten, sodass der übergangene Inhalt für die gesamte Animationsdauer sichtbar ist.

Zum Beispiel:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) wechselt der Wert zu `block` bei `0%` der Animationsdauer, sodass er die ganze Zeit sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none`, wechselt der Wert zu `none` bei `100%` der Animationsdauer, sodass er die ganze Zeit sichtbar ist.

Beim Übergang dieser Eigenschaften muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) auf den Übergängen eingestellt werden. Dies aktiviert effektiv `display`/`content-visibility`-Übergänge.

Beim Übergang von `display` muss [`@starting-style`](/de/docs/Web/CSS/@starting-style) verwendet werden, um einen Satz von Anfangswerten für die auf ein Element angewendeten Eigenschaften bereitzustellen, von dem aus Sie übergehen möchten, wenn das Element seine erste Stilaktualisierung erhält. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden CSS-Übergänge nicht bei der ersten Stilaktualisierung eines Elements im DOM ausgelöst, was einschließt, wenn `display` von `none` auf einen anderen Zustand ändert. `content-visibility`-Animationen benötigen keine Anfangswerte, die in einem `@starting-style`-Block spezifiziert werden. Dies liegt daran, dass `content-visibility` ein Element nicht wie `display` aus dem DOM verbirgt: es überspringt nur das Rendern des Inhalts des Elements.

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

Beachten Sie den `@starting-style`-Block, der verwendet wird, um den Anfangsstil für den Übergang anzugeben, und die Einbeziehung der `display`-Eigenschaft in die Übergangsliste, wobei `allow-discrete` darauf gesetzt ist.

#### JavaScript

Schließlich fügen wir ein wenig JavaScript hinzu, um Ereignislistener einzurichten, die den Übergang auslösen (über die Klasse `showing`).

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
> Vorsicht ist geboten, wenn Sie einen Übergang unmittelbar danach verwenden:
>
> - das Element mit `.appendChild()` zum DOM hinzufügen
> - die Entfernung der `display: none;`-Eigenschaft eines Elements.
>
> Dies wird behandelt, als hätte der Anfangszustand nie stattgefunden und das Element wäre immer im Endzustand gewesen. Der einfache Weg, dieses Problem zu umgehen, besteht darin, ein `setTimeout()` von ein paar Millisekunden anzuwenden, bevor Sie die CSS-Eigenschaft ändern, zu der Sie übergehen möchten.

### Übergänge verwenden, um JavaScript-Funktionalität zu glätten

Übergänge sind ein großartiges Werkzeug, um die Dinge viel geschmeidiger aussehen zu lassen, ohne etwas an Ihrer JavaScript-Funktionalität ändern zu müssen. Nehmen Sie das folgende Beispiel.

```html
<p>Click anywhere to move the ball</p>
<div id="foo" class="ball"></div>
```

Mit JavaScript können Sie den Effekt erreichen, den Ball an eine bestimmte Position zu bewegen:

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

Mit CSS können Sie es ohne zusätzlichen Aufwand geschmeidig machen. Fügen Sie dem Element einen Übergang hinzu und jede Änderung wird reibungslos erfolgen:

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

### Erkennen des Starts und Abschlusses eines Übergangs

Sie können das [`transitionend`](/de/docs/Web/API/Element/transitionend_event)-Ereignis verwenden, um zu erkennen, dass eine Animation beendet ist. Dies ist ein [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)-Objekt, das zwei zusätzliche Eigenschaften neben einem typischen [`Event`](/de/docs/Web/API/Event)-Objekt hat:

- `propertyName`
  - : Ein String, der den Namen der CSS-Eigenschaft angibt, deren Übergang abgeschlossen ist.
- `elapsedTime`
  - : Eine Fließkommazahl, die angibt, wie viele Sekunden der Übergang zum Zeitpunkt des Auslösens des Ereignisses gelaufen ist. Dieser Wert wird nicht von dem Wert von {{cssxref("transition-delay")}} beeinflusst.

Wie üblich können Sie die Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um dieses Ereignis zu überwachen:

```js
el.addEventListener("transitionend", updateTransition, true);
```

Sie erkennen den Beginn eines Übergangs mit [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event) (wird vor jeder Verzögerung ausgelöst) und [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event) (wird nach jeder Verzögerung ausgelöst), auf die gleiche Weise:

```js
el.addEventListener("transitionrun", signalStart, true);
el.addEventListener("transitionstart", signalStart, true);
```

> [!NOTE]
> Das `transitionend`-Ereignis wird nicht ausgelöst, wenn der Übergang abgebrochen wird, bevor der Übergang abgeschlossen ist, weil entweder das Element {{cssxref("display", "display: none")}} gemacht wird oder sich der Wert der animierten Eigenschaft ändert.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Die [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)-Schnittstelle und das [`transitionend`](/de/docs/Web/API/Element/transitionend_event)-Ereignis
- [CSS-Animationen verwenden](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
