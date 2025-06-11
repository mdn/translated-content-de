---
title: Verwenden von CSS-Übergängen
short-title: Verwendung von Übergängen
slug: Web/CSS/CSS_transitions/Using_CSS_transitions
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

**CSS-Übergänge** bieten eine Möglichkeit, die Animationsgeschwindigkeit beim Ändern von CSS-Eigenschaften zu steuern. Anstatt dass Eigenschaftsänderungen sofort wirksam werden, können Sie die Änderungen einer Eigenschaft über einen Zeitraum hinweg erfolgen lassen. Zum Beispiel, wenn Sie die Farbe eines Elements von Weiß zu Schwarz ändern, erfolgt die Änderung normalerweise sofort. Mit aktivierten CSS-Übergängen treten Änderungen in Zeitintervallen auf, die einer Beschleunigungskurve folgen, die vollständig angepasst werden kann.

Animationen, die den Übergang zwischen zwei Zuständen beinhalten, werden oft als _implizite Übergänge_ bezeichnet, da die Zustände zwischen dem Anfangs- und Endzustand implizit vom Browser definiert werden.

![Ein CSS-Übergang weist den Browser an, die Zwischenzustände zwischen dem Anfangs- und Endzustand zu zeichnen, um dem Benutzer glatte Übergänge zu zeigen.](transitionsprinciple.png)

CSS-Übergänge lassen Sie entscheiden, welche Eigenschaften animiert werden sollen (indem Sie sie [_explizit auflisten_](/de/docs/Web/CSS/transition-property)), wann die Animation beginnen soll (durch Festlegen einer [_Verzögerung_](/de/docs/Web/CSS/transition-delay)), wie lange der Übergang dauern soll (durch Festlegen einer [_Dauer_](/de/docs/Web/CSS/transition-duration)) und wie der Übergang verlaufen soll (durch Definieren einer [_Beschleunigungsfunktion_](/de/docs/Web/CSS/transition-timing-function), z.B. linear oder am Anfang schnell, am Ende langsam).

## Welche CSS-Eigenschaften können übergangen werden?

Der Webautor kann definieren, welche Eigenschaft animiert werden soll und in welcher Weise. Dies ermöglicht die Erstellung komplexer Übergänge. Es gibt jedoch einige Eigenschaften, die [nicht animierbar](/de/docs/Web/CSS/CSS_animated_properties) sind, da es keinen Sinn macht, sie zu animieren.

> [!NOTE]
> Der Wert `auto` ist oft ein sehr komplexer Fall. Die Spezifikation empfiehlt, nicht von und zu `auto` zu animieren. Einige Benutzeragenten, wie die auf Gecko basierenden, implementieren diese Anforderung, während andere, wie die auf WebKit basierenden, weniger strikt sind. Die Verwendung von Animationen mit `auto` kann zu unvorhersehbaren Ergebnissen führen, abhängig vom Browser und seiner Version, und sollte vermieden werden.

## Definition von Übergängen

CSS-Übergänge werden mit der Kurzschreibweise der {{cssxref("transition")}}-Eigenschaft gesteuert. Dies ist die beste Methode zur Konfiguration von Übergängen, da es einfacher ist, unsynchronisierte Parameter zu vermeiden, die sehr frustrierend sein können und viel Zeit beim Debuggen in CSS erfordern.

Sie können die einzelnen Komponenten des Übergangs mit den folgenden Untereigenschaften steuern:

- {{cssxref("transition-property")}}
  - : Gibt den Namen oder die Namen der CSS-Eigenschaften an, auf die Übergänge angewendet werden sollen. Nur die hier aufgeführten Eigenschaften werden während der Übergänge animiert; Änderungen an allen anderen Eigenschaften erfolgen wie gewohnt sofort.
- {{cssxref("transition-duration")}}
  - : Gibt die Dauer an, über die Übergänge stattfinden sollen. Sie können eine einzelne Dauer angeben, die für alle Eigenschaften während des Übergangs gilt, oder mehrere Werte, um jeder Eigenschaft einen Übergang über einen unterschiedlichen Zeitraum zu ermöglichen.
- {{cssxref("transition-timing-function")}}
  - : Gibt eine Funktion an, um zu definieren, wie Zwischenwerte für Eigenschaften berechnet werden. _Easing-Funktionen_ bestimmen, wie Zwischenwerte des Übergangs berechnet werden. Die meisten [Easing-Funktionen](/de/docs/Web/CSS/easing-function) können spezifiziert werden, indem das Diagramm der entsprechenden Funktion bereitgestellt wird, wie durch vier Punkte definiert, die eine kubische Bezier definieren. Sie können auch eine Easing-Funktion aus dem [Easing Functions Cheat Sheet](https://easings.net/) auswählen.
- {{cssxref("transition-delay")}}
  - : Definiert, wie lange gewartet werden soll, bis eine Eigenschaft geändert wird und der Übergang tatsächlich beginnt.

Die Kurzschreibweise der `transition`-Syntax in CSS wird wie folgt geschrieben:

```css
div {
  transition: <property> <duration> <timing-function> <delay>;
}
```

## Beispiele

### Einfaches Beispiel

Dieses Beispiel führt einen viersekündigen Font-Size-Übergang mit einer zweisekündigen Verzögerung zwischen dem Zeitpunkt, an dem der Benutzer über das Element fährt, und dem Beginn des Animationseffekts durch:

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

Ähnlich wird, wenn eine Liste von Eigenschaftswerten länger ist als die für {{cssxref("transition-property")}}, sie abgeschnitten, sodass Sie beim folgenden CSS:

```css
div {
  transition-property: opacity, left;
  transition-duration: 3s, 5s, 2s, 1s;
}
```

Dies so interpretiert wird:

```css
div {
  transition-property: opacity, left;
  transition-duration: 3s, 5s;
}
```

### Übergänge beim Hervorheben von Menüs verwenden

Eine häufige Verwendung von CSS ist das Hervorheben von Elementen in einem Menü, wenn der Benutzer den Mauszeiger darüber bewegt. Es ist einfach, Übergänge zu nutzen, um den Effekt noch ansprechender zu gestalten.

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

Dieses CSS bestimmt das Aussehen des Menüs, wobei sowohl die Hintergrundfarbe als auch die Textfarbe sich ändern, wenn sich das Element in seinen {{cssxref(":hover")}}- und {{cssxref(":focus")}}-Zuständen befindet:

{{EmbedLiveSample("Using transitions when highlighting menus")}}

### Übergang von `display` und `content-visibility`

Dieses Beispiel zeigt, wie [`display`](/de/docs/Web/CSS/display) und [`content-visibility`](/de/docs/Web/CSS/content-visibility) übergangen werden können. Dieses Verhalten ist nützlich, um Ein-/Ausblendeffekte zu erstellen, bei denen Sie beispielsweise einen Container aus dem DOM mit `display: none` entfernen möchten, ihn jedoch mit [`opacity`](/de/docs/Web/CSS/opacity) ausblenden lassen möchten, anstatt sofort zu verschwinden.

Unterstützende Browser ermöglichen den Übergang von `display` und `content-visibility` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Das bedeutet im Allgemeinen, dass Eigenschaften zwischen zwei Werten umschalten, die 50% des Übergangs zwischen den zweien liegen.

Es gibt jedoch eine Ausnahme, wenn zu/von `display: none` oder `content-visibility: hidden` animiert wird. In diesem Fall schaltet der Browser zwischen den beiden Werten um, sodass der übergangene Inhalt für die gesamte Animationsdauer angezeigt wird.

Zum Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wechselt der Wert zu `block` bei `0%` der Animationsdauer, sodass er durchgehend sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wechselt der Wert zu `none` bei `100%` der Animationsdauer, sodass er durchgehend sichtbar ist.

Beim Übergang dieser Eigenschaften muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) auf den Übergängen gesetzt werden. Dies ermöglicht effektiv die Übergänge von `display`/`content-visibility`.

Beim Übergehen von `display` wird [`@starting-style`](/de/docs/Web/CSS/@starting-style) benötigt, um eine Reihe von Ausgangswerten für auf einem Element festgelegte Eigenschaften bereitzustellen, von denen Sie beim ersten Stil-Update des Elements übergehen möchten. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden CSS-Übergänge bei den ersten Stil-Updates von Elementen, wenn sie erstmals im DOM erscheinen, nicht ausgelöst, einschließlich wenn sich `display` von `none` zu einem anderen Zustand ändert. `content-visibility`-Animationen benötigen keine Startwerte, die in einem `@starting-style`-Block angegeben werden. Das liegt daran, dass `content-visibility` ein Element nicht aus dem DOM ausblendet wie `display`: es überspringt lediglich das Rendern des Inhalts des Elements.

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

Beachten Sie den `@starting-style`-Block, der verwendet wird, um den Anfangsstil für den Übergang anzugeben, und die Einbindung der `display`-Eigenschaft in die Übergangsliste, mit `allow-discrete`, das darauf gesetzt ist.

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
> Vorsicht ist geboten, wenn ein Übergang unmittelbar danach verwendet wird:
>
> - Hinzufügen des Elements zum DOM mit `.appendChild()`
> - Entfernen der Eigenschaft `display: none;` eines Elements.
>
> Dies wird so behandelt, als sei der Anfangszustand nie aufgetreten und das Element befände sich immer in seinem Endzustand. Die einfache Möglichkeit, diese Einschränkung zu überwinden, besteht darin, einen `setTimeout()` von ein paar Millisekunden zu verwenden, bevor Sie die CSS-Eigenschaft ändern, zu der Sie übergehen möchten.

### Übergänge verwenden, um JavaScript-Funktionalitäten sanft zu gestalten

Übergänge sind ein großartiges Werkzeug, um Dinge viel sanfter aussehen zu lassen, ohne etwas an Ihrer JavaScript-Funktionalität ändern zu müssen. Nehmen Sie das folgende Beispiel.

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

Mit CSS können Sie die durch JavaScript angewendeten Stile sanfter gestalten. Fügen Sie dem Element einen Übergang hinzu und jede Änderung wird sanft ablaufen:

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

### Erkennen des Starts und Abschlusses eines Übergangs

Sie können das [`transitionend`](/de/docs/Web/API/Element/transitionend_event)-Ereignis verwenden, um zu erkennen, dass eine Animation zu Ende gelaufen ist. Dies ist ein [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)-Objekt, das zwei zusätzliche Eigenschaften gegenüber einem typischen [`Event`](/de/docs/Web/API/Event)-Objekt hat:

- `propertyName`
  - : Ein String, der den Namen der CSS-Eigenschaft angibt, deren Übergang abgeschlossen ist.
- `elapsedTime`
  - : Ein Fließkommawert, der die Anzahl der Sekunden angibt, die der Übergang zum Zeitpunkt des Ereignisauslösens abgelaufen war. Dieser Wert wird nicht von dem Wert von {{cssxref("transition-delay")}} beeinflusst.

Wie üblich können Sie die [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden, um dieses Ereignis zu überwachen:

```js
el.addEventListener("transitionend", updateTransition, true);
```

Sie erkennen den Beginn eines Übergangs, indem Sie [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event) (wird vor jeder Verzögerung ausgelöst) und [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event) (wird nach jeder Verzögerung ausgelöst) auf die gleiche Weise verwenden:

```js
el.addEventListener("transitionrun", signalStart, true);
el.addEventListener("transitionstart", signalStart, true);
```

> [!NOTE]
> Das `transitionend`-Ereignis wird nicht ausgelöst, wenn der Übergang abgebrochen wird, bevor der Übergang abgeschlossen ist, weil entweder das Element {{cssxref("display", "display: none")}} gesetzt ist oder der Wert der animierten Eigenschaft geändert wird.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)-Interface und das [`transitionend`](/de/docs/Web/API/Element/transitionend_event)-Ereignis
- [Verwenden von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
