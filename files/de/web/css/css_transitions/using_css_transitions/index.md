---
title: Verwenden von CSS-Übergängen
slug: Web/CSS/CSS_transitions/Using_CSS_transitions
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{CSSRef}}

**CSS-Übergänge** bieten eine Möglichkeit, die Animationsgeschwindigkeit beim Ändern von CSS-Eigenschaften zu steuern. Anstatt dass Eigenschaftsänderungen sofort wirksam werden, können Sie bewirken, dass die Änderungen einer Eigenschaft über einen gewissen Zeitraum hinweg erfolgen. Zum Beispiel ist der Wechsel der Farbe eines Elements von Weiß zu Schwarz in der Regel sofort. Mit aktivierten CSS-Übergängen erfolgen die Änderungen in Zeitintervallen, die einer Beschleunigungskurve folgen, die alle anpassbar sind.

Animationen, die den Übergang zwischen zwei Zuständen beinhalten, werden oft als _implizite Übergänge_ bezeichnet, da die Zustände zwischen dem Anfangs- und dem Endzustand implizit vom Browser definiert werden.

![Ein CSS-Übergang weist den Browser an, die Zwischenzustände zwischen dem Anfangs- und dem Endzustand zu zeichnen, und zeigt dem Benutzer sanfte Übergänge.](transitionsprinciple.png)

CSS-Übergänge ermöglichen es Ihnen zu entscheiden, welche Eigenschaften animiert werden sollen (indem Sie [_sie explizit auflisten_](/de/docs/Web/CSS/transition-property)), wann die Animation beginnt (indem Sie eine [_Verzögerung_](/de/docs/Web/CSS/transition-delay) festlegen), wie lange der Übergang dauern soll (indem Sie eine [_Dauer_](/de/docs/Web/CSS/transition-duration) festlegen), und wie der Übergang ablaufen soll (indem Sie eine [_Easing-Funktion_](/de/docs/Web/CSS/transition-timing-function) definieren, z.B. linear oder schnell am Anfang, langsam am Ende).

## Welche CSS-Eigenschaften können übergangsweise geändert werden?

Der Webautor kann definieren, welche Eigenschaft animiert werden soll und auf welche Weise. Dies ermöglicht die Erstellung komplexer Übergänge. Einige Eigenschaften sind jedoch [nicht animierbar](/de/docs/Web/CSS/CSS_animated_properties), da es keinen Sinn ergibt, sie zu animieren.

> [!NOTE]
> Der `auto` Wert ist oft ein sehr komplexer Fall. Die Spezifikation empfiehlt, nicht von und zu `auto` zu animieren. Einige Benutzeragenten, wie diejenigen, die auf Gecko basieren, setzen diese Anforderung um, während andere, wie die auf WebKit basierenden, weniger strikt sind. Die Verwendung von Animationen mit `auto` kann zu unvorhersehbaren Ergebnissen führen, abhängig vom Browser und dessen Version, und sollte vermieden werden.

## Übergänge definieren

CSS-Übergänge werden mit der Kurzform {{cssxref("transition")}} Eigenschaft gesteuert. Dies ist die beste Möglichkeit, Übergänge zu konfigurieren, da es das Risiko von nicht synchronisierten Parametern verringert, die sehr frustrierend sind und viel Zeit beim Debuggen in CSS kosten können.

Sie können die einzelnen Komponenten des Übergangs mit den folgenden Untereigenschaften steuern:

- {{cssxref("transition-property")}}
  - : Gibt den Namen oder die Namen der CSS-Eigenschaften an, auf die Übergänge angewendet werden sollen. Nur hier aufgeführte Eigenschaften werden während der Übergänge animiert; Änderungen an allen anderen Eigenschaften erfolgen wie gewöhnlich sofort.
- {{cssxref("transition-duration")}}
  - : Gibt die Dauer an, über die Übergänge erfolgen sollen. Sie können eine einzelne Dauer angeben, die für alle Eigenschaften während des Übergangs gilt, oder mehrere Werte, um jeder Eigenschaft zu erlauben, über einen anderen Zeitraum zu wechseln.
- {{cssxref("transition-timing-function")}}
  - : Gibt eine Funktion an, die definiert, wie Zwischenwerte für Eigenschaften berechnet werden. _Easing-Funktionen_ bestimmen, wie Zwischenwerte des Übergangs berechnet werden. Die meisten [Easing-Funktionen](/de/docs/Web/CSS/easing-function) können durch Bereitstellung des Graphen der entsprechenden Funktion angegeben werden, wie durch vier Punkte definiert, die eine kubische Bezierkurve bilden. Sie können auch Easing aus dem [Easing functions cheat sheet](https://easings.net/) wählen.
- {{cssxref("transition-delay")}}
  - : Definiert, wie lange gewartet werden soll, nachdem eine Eigenschaft geändert wurde, bis der Übergang tatsächlich beginnt.

Die Kurzform-CSS-Syntax für `transition` wird folgendermaßen geschrieben:

```css
div {
  transition: <property> <duration> <timing-function> <delay>;
}
```

## Beispiele

### Einfaches Beispiel

Dieses Beispiel führt eine viersekündige Schriftgrößenübergang mit einer zweisekündigen Verzögerung zwischen dem Zeitpunkt, zu dem der Benutzer über das Element fährt, und dem Anfang des Animationseffekts aus:

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
    Das Feld unten kombiniert Übergänge für: Breite, Höhe, Hintergrundfarbe, Rotation. Fahren Sie mit der Maus über das Feld, um diese Eigenschaften animiert zu sehen.
  </p>
  <div class="box">Beispiel</div>
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

Wenn eine Eigenschaftswertliste kürzer ist als die anderen, werden ihre Werte wiederholt, um sie anzupassen. Zum Beispiel:

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

Ähnlich wird, wenn die Werteliste einer Eigenschaft länger ist als die für {{cssxref("transition-property")}}, sie abgeschnitten. Wenn Sie also das folgende CSS haben:

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

### Verwendung von Übergängen beim Hervorheben von Menüs

Ein häufiger Anwendungsfall von CSS ist das Hervorheben von Elementen in einem Menü, wenn der Benutzer den Mauszeiger über sie bewegt. Es ist einfach, Übergänge zu verwenden, um den Effekt noch attraktiver zu machen.

Zuerst richten wir das Menü mit HTML ein:

```html
<nav>
  <a href="#">Startseite</a>
  <a href="#">Über uns</a>
  <a href="#">Kontakt</a>
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

Dieses CSS legt das Erscheinungsbild des Menüs fest, wobei sich Hintergrund- und Textfarben ändern, wenn sich das Element in seinen {{cssxref(":hover")}} und {{cssxref(":focus")}} Zuständen befindet:

{{EmbedLiveSample("Using transitions when highlighting menus")}}

### Übergang von display und content-visibility

Dieses Beispiel zeigt, wie [`display`](/de/docs/Web/CSS/display) und [`content-visibility`](/de/docs/Web/CSS/content-visibility) übergangsweise geändert werden können. Dieses Verhalten ist nützlich, um Ein-/Ausblendeffekte zu erstellen, bei denen Sie beispielsweise einen Container mit `display: none` aus dem DOM entfernen möchten, aber mit [`opacity`](/de/docs/Web/CSS/opacity) ausblenden, anstatt sofort zu verschwinden.

Unterstützende Browser ändern `display` und `content-visibility` mit einer Variante des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Dies bedeutet in der Regel, dass Eigenschaften während der Animation zwischen zwei Werten bei 50% umschalten.

Es gibt jedoch eine Ausnahme, die besteht, wenn von/an `display: none` oder `content-visibility: hidden` animiert wird. In diesem Fall wechselt der Browser zwischen den beiden Werten, sodass der übergangene Inhalt für die gesamte Animationsdauer angezeigt wird.

Also zum Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wechselt der Wert bei `0%` der Animationsdauer zu `block`, damit er die ganze Zeit sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wechselt der Wert bei `100%` der Animationsdauer zu `none`, damit er die ganze Zeit sichtbar ist.

Beim Übergang dieser Eigenschaften muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) auf den Übergängen gesetzt werden. Dies aktiviert effektiv `display`/`content-visibility`-Übergänge.

Beim Übergang von `display` wird [`@starting-style`](/de/docs/Web/CSS/@starting-style) benötigt, um einen Satz Anfangswerte für die auf einem Element festgelegten Eigenschaften bereitzustellen, von denen Sie möchten, dass der Übergang erfolgt, wenn das Element seine erste Stilaktualisierung erhält. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig werden CSS-Übergänge nicht bei den ersten Stilaktualisierungen eines Elements ausgelöst, wenn sie zum ersten Mal im DOM erscheinen, was auch der Fall ist, wenn `display` von `none` zu einem anderen Zustand wechselt. `content-visibility`-Animationen benötigen keine Startwerte, die in einem `@starting-style`-Block angegeben sind. Dies liegt daran, dass `content-visibility` ein Element nicht aus dem DOM entfernt, wie es `display` tut: Es überspringt lediglich das Rendern des Inhaltes des Elements.

#### HTML

Das HTML enthält zwei {{htmlelement("p")}}-Elemente mit einem {{htmlelement("div")}} dazwischen, das von `display` `none` zu `block` animiert wird.

```html
<p>
  Klicken Sie irgendwo auf den Bildschirm oder drücken Sie eine Taste, um das
  <code>&lt;div&gt;</code> zwischen versteckt und sichtbar umzuschalten.
</p>

<div>
  Dies ist ein <code>&lt;div&gt;</code>-Element, das zwischen
  <code>display: none; opacity: 0</code> und
  <code>display: block; opacity: 1</code> übergeht. Toll, oder?
</div>

<p>
  Dies ist ein weiterer Absatz, um zu zeigen, dass <code>display: none;</code>
  auf das obige <code>&lt;div&gt; </code> angewendet und entfernt wird. Wenn nur
  seine <code>opacity</code> geändert würde, würde es immer den Raum im DOM
  einnehmen.
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

Beachten Sie den `@starting-style` Block, der verwendet wird, um den Startstil für den Übergang anzugeben, und die Aufnahme der `display`-Eigenschaft in die Übergangsliste mit `allow-discrete`.

#### JavaScript

Schließlich fügen wir einen kleinen JavaScript-Code hinzu, um Ereignislistener einzurichten, die den Übergang (über die `showing`-Klasse) auslösen.

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
> Es sollte darauf geachtet werden, wenn Sie einen Übergang sofort nach folgenden Aktionen verwenden:
>
> - Hinzufügen des Elements zum DOM mit `.appendChild()`
> - Entfernen einer Eigenschaft `display: none;` eines Elements.
>
> Dies wird behandelt, als ob der Anfangszustand nie eingetreten wäre und das Element sich immer im Endzustand befand. Der einfache Weg, diese Einschränkung zu überwinden, besteht darin, einen `setTimeout()` von einigen Millisekunden anzuwenden, bevor Sie die CSS-Eigenschaft ändern, zu der Sie den Übergang beabsichtigen.

### Übergänge verwenden, um JavaScript-Funktionalität sanfter zu gestalten

Übergänge sind ein großartiges Werkzeug, um Dinge viel reibungsloser aussehen zu lassen, ohne dass Ihre JavaScript-Funktionalität geändert werden muss. Betrachten Sie das folgende Beispiel.

```html
<p>Klicken Sie überall, um den Ball zu bewegen</p>
<div id="foo" class="ball"></div>
```

Mit JavaScript können Sie den Effekt erzielen, den Ball an eine bestimmte Position zu bewegen:

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

Mit CSS können Sie es ohne zusätzlichen Aufwand glatt gestalten. Fügen Sie dem Element einen Übergang hinzu und jede Veränderung erfolgt reibungslos:

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

### Erkennung des Beginns und Abschlusses eines Übergangs

Sie können das {{domxref("Element/transitionend_event", "transitionend")}}-Ereignis verwenden, um zu erkennen, dass eine Animation abgeschlossen ist. Dies ist ein {{domxref("TransitionEvent")}}-Objekt, das zwei zusätzliche Eigenschaften gegenüber einem typischen {{domxref("Event")}}-Objekt hat:

- `propertyName`
  - : Ein String, der den Namen der CSS-Eigenschaft angibt, dessen Übergang abgeschlossen ist.
- `elapsedTime`
  - : Ein Fließkommawert, der angibt, wie viele Sekunden der Übergang bereits lief, als das Ereignis ausgelöst wurde. Dieser Wert wird nicht durch den Wert von {{cssxref("transition-delay")}} beeinflusst.

Wie üblich, können Sie die Methode {{domxref("EventTarget.addEventListener", "addEventListener()")}} verwenden, um diesem Ereignis zu lauschen:

```js
el.addEventListener("transitionend", updateTransition, true);
```

Sie können den Beginn eines Übergangs mit dem {{domxref("Element/transitionrun_event", "transitionrun")}} (ausgelöst vor jeder Verzögerung) und dem {{domxref("Element/transitionstart_event", "transitionstart")}} (ausgelöst nach jeder Verzögerung) auf ähnliche Weise erkennen:

```js
el.addEventListener("transitionrun", signalStart, true);
el.addEventListener("transitionstart", signalStart, true);
```

> [!NOTE]
> Das `transitionend`-Ereignis wird nicht ausgelöst, wenn der Übergang abgebrochen wird, bevor er abgeschlossen ist, z.B. wenn das Element {{cssxref("display", "display: none")}} gesetzt wird oder der Wert der animierten Eigenschaft geändert wird.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{domxref("TransitionEvent")}}-Interface und das {{domxref("Element/transitionend_event", "transitionend")}}-Ereignis
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
