---
title: Verwendung von CSS-Übergängen
short-title: Nutzung von Übergängen
slug: Web/CSS/CSS_transitions/Using_CSS_transitions
l10n:
  sourceCommit: 26f9fbee05fb92b584d44fba4359e86796484aa6
---

{{CSSRef}}

**CSS-Übergänge** bieten eine Möglichkeit, die Geschwindigkeit von Animationen zu steuern, wenn CSS-Eigenschaften geändert werden. Anstatt dass Eigenschaftenänderungen sofort wirksam werden, können Sie festlegen, dass die Änderungen einer Eigenschaft über einen bestimmten Zeitraum hinweg erfolgen. Beispielsweise, wenn Sie die Farbe eines Elements von Weiß zu Schwarz ändern, erfolgt die Änderung normalerweise sofort. Mit aktivierten CSS-Übergängen erfolgen die Änderungen in Zeitintervallen, die einer Beschleunigungskurve folgen, und alle diese können angepasst werden.

Animationen, die den Übergang zwischen zwei Zuständen beinhalten, werden oft als _implizite Übergänge_ bezeichnet, da die Zustände zwischen dem Anfangs- und dem Endzustand implizit vom Browser definiert sind.

![Ein CSS-Übergang weist den Browser an, die Zwischenzustände zwischen den Anfangs- und Endzuständen zu zeichnen, was dem Benutzer flüssige Übergänge zeigt.](transitionsprinciple.png)

CSS-Übergänge lassen Sie entscheiden, welche Eigenschaften animiert werden sollen (indem Sie sie [_explizit auflisten_](/de/docs/Web/CSS/transition-property)), wann die Animation beginnen soll (indem Sie eine [_Verzögerung_](/de/docs/Web/CSS/transition-delay) einstellen), wie lange der Übergang dauern soll (indem Sie eine [_Dauer_](/de/docs/Web/CSS/transition-duration) einstellen), und wie der Übergang ablaufen soll (indem Sie eine [_Easing-Funktion_](/de/docs/Web/CSS/transition-timing-function) definieren, z. B. linear oder schnell am Anfang, langsam am Ende).

## Welche CSS-Eigenschaften können übergangsweise geändert werden?

Der Webentwickler kann definieren, welche Eigenschaft animiert werden soll und auf welche Weise. Dies ermöglicht die Erstellung komplexer Übergänge. Einige Eigenschaften sind jedoch [nicht animierbar](/de/docs/Web/CSS/CSS_animated_properties), da es keinen Sinn ergibt, sie zu animieren.

> [!NOTE]
> Der Wert `auto` stellt oft einen sehr komplexen Fall dar. Die Spezifikation empfiehlt, nicht von und zu `auto` zu animieren. Einige User Agents, wie die auf Gecko basierenden, setzen diese Anforderung um, während andere, wie die auf WebKit basierenden, weniger streng sind. Die Verwendung von Animationen mit `auto` kann je nach Browser und dessen Version zu unvorhersehbaren Ergebnissen führen und sollte vermieden werden.

## Definition von Übergängen

CSS-Übergänge werden mithilfe der Kurznotationseigenschaft {{cssxref("transition")}} gesteuert. Dies ist der beste Weg, um Übergänge zu konfigurieren, da es einfacher ist, asynchrone Parameter zu vermeiden, was sehr frustrierend sein kann, wenn man viel Zeit mit der Fehlersuche in CSS verbringen muss.

Sie können die einzelnen Komponenten des Übergangs mit den folgenden Untereigenschaften steuern:

- {{cssxref("transition-property")}}
  - : Gibt den Namen oder die Namen der CSS-Eigenschaften an, auf die Übergänge angewendet werden sollen. Nur die hier aufgeführten Eigenschaften werden während der Übergänge animiert; Änderungen an allen anderen Eigenschaften erfolgen wie gewohnt sofort.
- {{cssxref("transition-duration")}}
  - : Gibt die Dauer an, über die Übergänge erfolgen sollen. Sie können eine einzelne Dauer angeben, die auf alle Eigenschaften während des Übergangs angewendet wird, oder mehrere Werte, sodass jede Eigenschaft über eine andere Zeitspanne hinweg übergehen kann.
- {{cssxref("transition-timing-function")}}
  - : Gibt eine Funktion an, um zu definieren, wie Zwischenwerte für Eigenschaften berechnet werden. _Easing-Funktionen_ bestimmen, wie die Zwischenwerte des Übergangs berechnet werden. Die meisten [Easing-Funktionen](/de/docs/Web/CSS/easing-function) können angegeben werden, indem das Diagramm der entsprechenden Funktion bereitgestellt wird, wie durch vier Punkte definiert, die eine kubische Bezierkurve definieren. Sie können auch Easing von [Easing functions cheat sheet](https://easings.net/) wählen.
- {{cssxref("transition-delay")}}
  - : Definiert, wie lange gewartet werden soll, bis eine Eigenschaft geändert wird und der Übergang tatsächlich beginnt.

Die `transition`-Kurznotation wird wie folgt geschrieben:

```plain
transition: <property> <duration> <timing-function> <delay>;
```

## Beispiele

### Grundlegendes Beispiel

Dieses Beispiel führt eine viersekündige Schriftgrößenübergang mit einer zweisekündigen Verzögerung zwischen dem Zeitpunkt aus, an dem der Benutzer den Mauszeiger über das Element bewegt, und dem Beginn des Animationseffekts:

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

### Wenn Eigenschaftswerte-Listen unterschiedliche Längen haben

Wenn die Werteliste einer Eigenschaft kürzer ist als die der anderen, werden ihre Werte wiederholt, um sie anzupassen. Zum Beispiel:

```css
div {
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s;
}
```

Dies wird behandelt, als ob es wäre:

```css
div {
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s, 3s, 5s;
}
```

Ebenso, wenn die Werteliste einer Eigenschaft länger ist als die für {{cssxref("transition-property")}}, wird sie abgeschnitten. Wenn Sie also das folgende CSS haben:

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

Eine häufige Verwendung von CSS besteht darin, Elemente in einem Menü hervorzuheben, während der Benutzer den Mauszeiger darüber bewegt. Übergänge können einfach verwendet werden, um den Effekt noch attraktiver zu machen.

Zuerst richten wir das Menü mit HTML ein:

```html
<nav>
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact Us</a>
  <a href="#">Links</a>
</nav>
```

Dann erstellen wir das CSS, um das Aussehen unseres Menüs umzusetzen:

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

Dieses CSS legt das Erscheinungsbild des Menüs fest, wobei sich sowohl die Hintergrund- als auch die Textfarben ändern, wenn sich das Element in seinen {{cssxref(":hover")}}- und {{cssxref(":focus")}}-Zuständen befindet:

{{EmbedLiveSample("Using transitions when highlighting menus")}}

### Übergang von `display` und `content-visibility`

Dieses Beispiel zeigt, wie [`display`](/de/docs/Web/CSS/display) und [`content-visibility`](/de/docs/Web/CSS/content-visibility) übergangsweise geändert werden können. Dieses Verhalten ist nützlich für Eingangs-/Ausgangsanimationen, bei denen Sie beispielsweise einen Container aus dem DOM mit `display: none` entfernen möchten, jedoch möchten, dass er mit [`opacity`](/de/docs/Web/CSS/opacity) ausblendet, anstatt sofort zu verschwinden.

Unterstützende Browser ändern `display` und `content-visibility` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Dies bedeutet im Allgemeinen, dass Eigenschaften zwischen zwei Werten umschalten, wenn 50% der Animation zwischen den beiden abgelaufen ist.

Es gibt jedoch eine Ausnahme, wenn von/nach `display: none` oder `content-visibility: hidden` animiert wird. In diesem Fall wird der Browser zwischen den beiden Werten umschalten, sodass der übergangene Inhalt für die gesamte Animationsdauer angezeigt wird.

Also zum Beispiel:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) wechselt der Wert zu `block` bei `0%` der Animationsdauer, sodass er während der gesamten Zeit sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none`, wechselt der Wert zu `none` bei `100%` der Animationsdauer, sodass er während der gesamten Zeit sichtbar ist.

Beim Übergang dieser Eigenschaften muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) auf die Übergänge gesetzt werden. Dies ermöglicht effektiv `display`/`content-visibility`-Übergänge.

Beim Übergang von `display`, muss [`@starting-style`](/de/docs/Web/CSS/@starting-style) verwendet werden, um eine Reihe von Startwerten für Eigenschaften bereitzustellen, die auf ein Element gesetzt sind, von dem Sie beim ersten Stilupdate des Elements ausgehen möchten. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden CSS-Übergänge nicht bei den ersten Stilupdates von Elementen ausgelöst, wenn sie erstmals im DOM erscheinen, was auch gilt, wenn `display` von `none` in einen anderen Zustand wechselt. `content-visibility`-Animationen benötigen keine Startwerte, die in einem `@starting-style`-Block angegeben sind. Dies liegt daran, dass `content-visibility` kein Element aus dem DOM verbirgt, wie `display` es tut: Es überspringt nur das Rendern des Inhalts des Elements.

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

Beachten Sie den `@starting-style`-Block, der verwendet wird, um den Anfangsstil für den Übergang anzugeben, und die Einbeziehung der `display`-Eigenschaft in die Übergangsliste, mit `allow-discrete` darauf gesetzt.

#### JavaScript

Schließlich fügen wir ein wenig JavaScript hinzu, um Ereignislistener zu setzen, die den Übergang auslösen (über die `showing`-Klasse).

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
> Vorsicht ist geboten, wenn ein Übergang unmittelbar nach den folgenden Aktionen verwendet wird:
>
> - Hinzufügen des Elements zum DOM mit `.appendChild()`
> - Entfernen der `display: none;`-Eigenschaft eines Elements.
>
> Dies wird so behandelt, als ob der ursprüngliche Zustand nie aufgetreten wäre und das Element sich immer im Endzustand befunden hätte. Die einfache Möglichkeit, diese Einschränkung zu umgehen, besteht darin, eine `setTimeout()`-Funktion von ein paar Millisekunden zu verwenden, bevor die CSS-Eigenschaft geändert wird, zu der Sie übergehen möchten.

### Verwendung von Übergängen zur Glättung von JavaScript-Funktionalität

Übergänge sind ein großartiges Werkzeug, um Dinge viel glatter aussehen zu lassen, ohne etwas an Ihrer JavaScript-Funktionalität ändern zu müssen. Nehmen Sie das folgende Beispiel.

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

Mit CSS können Sie die durch JavaScript angewandten Stile glätten. Fügen Sie dem Element einen Übergang hinzu, und jede Änderung wird reibungslos erfolgen:

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

Sie können das [`transitionend`](/de/docs/Web/API/Element/transitionend_event)-Ereignis verwenden, um zu erkennen, dass eine Animation zu Ende gelaufen ist. Dies ist ein [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)-Objekt, das zwei zusätzliche Eigenschaften im Vergleich zu einem typischen [`Event`](/de/docs/Web/API/Event)-Objekt hat:

- `propertyName`
  - : Ein String, der den Namen der CSS-Eigenschaft angibt, deren Übergang abgeschlossen ist.
- `elapsedTime`
  - : Eine Gleitkommazahl, die die Anzahl der Sekunden angibt, die der Übergang gelaufen ist, als das Ereignis ausgelöst wurde. Dieser Wert wird nicht von dem Wert von {{cssxref("transition-delay")}} beeinflusst.

Wie üblich können Sie die [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden, um auf dieses Ereignis zu hören:

```js
el.addEventListener("transitionend", updateTransition, true);
```

Sie erkennen den Beginn eines Übergangs mithilfe von [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event) (wird vor einer Verzögerung ausgelöst) und [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event) (wird nach einer Verzögerung ausgelöst), in ähnlicher Weise:

```js
el.addEventListener("transitionrun", signalStart, true);
el.addEventListener("transitionstart", signalStart, true);
```

> [!NOTE]
> Das `transitionend`-Ereignis wird nicht ausgelöst, wenn der Übergang abgebrochen wird, bevor er abgeschlossen ist, weil entweder das Element auf {{cssxref("display", "display: none")}} gesetzt wird oder der Wert der animierten Eigenschaft geändert wird.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Die [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)-Schnittstelle und das [`transitionend`](/de/docs/Web/API/Element/transitionend_event)-Ereignis
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
