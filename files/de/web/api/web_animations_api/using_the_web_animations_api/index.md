---
title: Verwendung der Web Animations API
slug: Web/API/Web_Animations_API/Using_the_Web_Animations_API
l10n:
  sourceCommit: 6afda999d054c2ba12d13d129b13eb35952b4fbe
---

{{DefaultAPISidebar("Web Animations")}}

Die Web Animations API ermöglicht es uns, Animationen zu erstellen und deren Wiedergabe mit JavaScript zu kontrollieren. Dieser Artikel wird Ihnen mit unterhaltsamen Demos und Tutorials, die Alice im Wunderland präsentieren, den richtigen Einstieg geben.

## Einführung in die Web Animations API

Die [Web Animations API](/de/docs/Web/API/Web_Animations_API) öffnet die Animations-Engine des Browsers für Entwickler und ermöglicht die Manipulation durch JavaScript. Diese API wurde entwickelt, um die Implementierungen von sowohl [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) als auch [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) zu unterstützen und lässt zukünftigen Animationseffekten Raum. Sie ist eine der leistungsfähigsten Methoden, um im Web zu animieren, da der Browser seine eigenen internen Optimierungen vornehmen kann, ohne dass Hacks, Zwangsmittel oder [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) erforderlich sind.

Mit der Web Animations API können wir interaktive Animationen aus Stylesheets in JavaScript verlagern, wodurch Präsentation und Verhalten getrennt werden. Wir müssen nicht mehr auf DOM-intensive Techniken zurückgreifen, wie das Schreiben von CSS-Eigenschaften und das Zuweisen von Klassen zu Elementen, um die Wiedergaberichtung zu steuern. Und im Gegensatz zu rein deklarativem CSS ermöglicht es JavaScript auch, dynamisch Werte von Eigenschaften bis hin zu Dauern festzulegen. Für den Aufbau von benutzerdefinierten Animationsbibliotheken und die Erstellung interaktiver Animationen könnte die Web Animations API das perfekte Werkzeug sein. Lassen Sie uns sehen, was sie kann!

Diese Seite enthält eine Reihe von Beispielen zur Nutzung der [Web Animations API](/de/docs/Web/API/Web_Animations_API), inspiriert von [Alice im Wunderland](https://en.wikipedia.org/wiki/Alice%27s_Adventures_in_Wonderland). Diese Beispiele wurden von [Rachel Nabors](https://nearestnabors.com/) erstellt und geteilt. Die [vollständige Sammlung von Beispielen](https://codepen.io/collection/nqNJvD) ist auf CodePen verfügbar; hier präsentieren wir die für unsere Dokumentation relevanten.

## CSS-Animationen mit der Web Animations API schreiben

Eine der bekannteren Möglichkeiten, sich der Web Animations API zu nähern, besteht darin, mit etwas zu beginnen, das die meisten Webentwickler schon einmal benutzt haben: CSS-Animationen. CSS-Animationen haben eine vertraute Syntax, die sich gut zur Demonstration eignet.

### Die CSS-Version

Hier ist eine drehende Animation, die Alice zeigt, wie sie in das Kaninchenloch fällt, das ins Wunderland führt:

{{EmbedLiveSample("animations_css_version", "", 300)}}

```html hidden live-sample___animations_css_version live-sample___animations_api_version
<div class="wrapper">
  <div id="tunnel"></div>
  <div id="alice">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
      <path
        d="M110.1 2.7h8.9c3.4.4 6.7.8 10.1 1.3 9.8 1.5 17.8 6.4 24.5 13.7.4.5 1.9.6 2.5.3 6.8-4.4 13.9-8.2 21.9-9.9 1.3-.3 3.4-1.2 3.7 1.5.6 4.9 1.4 9.9 1.7 14.8.3 4.4.1 8.7.1 12.2 2.1 1.5 4.6 2.3 5.5 4 4.2 8.4 3.2 17.6 3.1 26.6 0 1.2-.4 3.3.1 3.6 10.3 4.9 20.7 9.6 31.1 14.4 2.5-4.9-2.3-16-15.8-14.4.6-.5 1.4-1.1 2.2-1.1 2.5.1 4.9.4 7.4.7 6 .8 10.9 3.7 14.6 8.4 1.2 1.5 1.6 4.2 1.1 6.1-.7 3.2-3.7 4-7.1 4.1 4.5 3.5 6.5 8.1 6.8 13.3.6 9.4-1.1 18.6-4.8 27.1-3.9 8.8-5.2 17.5-3.3 26.8.6 3.2 1.2 7 .2 9.9-2 6.2-7.8 8.6-13.4 10.9-3 1.2-7.4 1.2-6.3 6.3.8 3.7-.4 4 .2 4.5 5.8 5.8 11.8 11.5 17.6 17.3 1.7 1.7 3 3.8 4.3 5.5-1.1.4-1.8.7-2.4 1 7.5 5.8 14.9 11.6 22.4 17.4 4.3-4.3 8.6-9 13.3-13.2 8.1-7.3 16.7-14 24.5-21.7 3.3-3.3 4.9-8.2 7.4-12.3.3-.4 1.3-.9 1.6-.7 4.6 2.7 6.8 7.2 7.9 12.1 1.3 5.7 1.6 11.6 2.3 17.1 4.2-.2 8.8-.8 13.4-.4 2 .1 4.6 1.8 5.5 3.5 2.2 4.3 3.8 8.9 5.3 13.5 3.7 11.5 6.9 23.2 10.7 34.7 1.7 5.1 3.4 10.4 8.6 13.4.5.3.5 2.7 0 3.1-3.3 2.5-6.9 4.6-10.5 7 2 5.8 4.3 12.6 6.7 19.6.7-.8 1.4-1.6 2.1-2.3 1.9-1.9 3.5-1.6 4.2 1.2.7 3 1.3 6.2 1.5 9.3.3 7.3.4 14.6.6 21.9 0 .4.2.8.5 1.2 3.6 4.7 7.1 9.3 10.7 14 1.7 2.3 3 5.4 5.3 6.6 5.5 2.7 11.5 4.4 17.3 6.6v.7c-.4.3-.7.8-1.2 1-5.8 2.1-11.6 4.3-17.5 6.2-4.2 1.3-8.4 2-12.4-1.2-1.8-1.5-3.9-2.6-5.8-3.8 0 2.3.1 4.4-.1 6.4-.1.8-.7 2.2-1.2 2.2-2.6.2-5.3.1-7.9.1-1.1 0-2.7.3-3.2-.3-1-1.2-2.1-2.9-2.1-4.4-.1-5.2.1-10.4.3-15.6.1-1.8 1.5-3.9.9-5.4-1.7-4.3-4-8.4-6.1-12.5-2.4-4.6-6.4-9.1-1.2-14.3.3-.3.3-1.3 0-1.7-4.7-6.5-9.5-13.1-14.4-19.5-1.2-1.5-2.9-3.7-4.4-3.7-6.7.1-13.4.8-20.1 1.3-.7.1-1.6.2-1.9.6-7.1 9.1-14 18.3-21.1 27.4-1.3 1.7-2.9 3.4-4.3 5 1.7.6 3.3 1.1 4.8 1.7.6.2 1.3.5 1.6 1 .2.3-.1 1.1-.4 1.5-2 2.6-4.1 5.2-6.1 7.8-4.3 5.3-8.7 10.5-13 15.9-.8 1-1.5 2.4-1.6 3.6-.2 5.4-.1 10.7-.1 16.1 0 1.5-.7 3.6.1 4.5 2.4 3 5.3 5.5 7.9 8.2 1.6 1.7 3 3.5 4.6 5.5-2.6.2-4.5.3-6.4.4h-3.7c-4.8-1.4-9.8-2.5-14.5-4.3-3.5-1.4-7.8-2.5-8-7.7-.1-2.1-.2-4.3-.4-6.7-1 1.1-1.7 2.1-2.6 2.9-.3.3-1 .4-1.3.2-1.9-1.1-3.7-2.2-5.5-3.4-1.7-1.1-4.5-1.6-3.5-4.5 2.3-6.5 6.4-11.6 12.7-14.9.6-.3 1.3-.9 1.6-1.5 3.9-8.2 7.8-16.4 11.8-24.6.7-1.5.4-4.5 3.8-3.8.2.1 1.2-3.1 1.8-4.9-2.8 1.5-5 2.9-7.4 3.9-7.4 3-14.7 6.4-23.1 5.6-8.5-.7-16.2-3.4-23.2-8-9.9-6.7-14.2-17-17.5-27.9-.5-1.7-.5-5.1-3.5-1.6-.1.2-.4.2-.6.3-2.5 1.7-5.4 3-6 6.5-.4 2.3-1 4.6-1.5 7-2.9 13.2-4.2 26.4-2.5 39.9 1.7 13.1 9.2 21.3 21 26.3 2.4 1 4.9 1.9 7.5 2.9-2.1.9-3.9 1.9-5.8 2.3-10.2 2.5-20.5 4.9-30.8 7.1-1.9.4-4.9.7-5.9-.3-6.4-6.5-8.9-14.8-8.3-23.7.7-9.6 2.1-19.2 3.9-28.6 2.2-11.5 6.1-22.5 11.7-32.9.7-1.3 2-3.1 1.6-4.1-1.8-4.6-4.5-8.9-6.2-13.6-2-5.7-4.2-11.6-1.2-17.8.1-.1-.3-.5-.5-.8 7.6.7 12.8 5.3 17.7 10.2-1.3-8.5-2.6-17.2-3.9-25.8 0-.3-.2-.7-.4-.9-6.7-5.5-13.3-11.2-17-19.2-2.6-5.7-4.3-11.8-6.3-17.7-.6-1.6.2-3.4-2.2-4.8-5.9-3.5-10.3-8.6-10.3-16 0-1.8 1.2-5 2.2-5.1 8.3-1.2 16.4-.1 23.8 4.2 2.4 1.4 4.9 2.7 8.1 4.4-.4-8.8-.8-16.2-1.2-23.6-4.2.9-8.6.9-11.5-2-3.3-3.3-5.4-7.8-7.9-11.8-1.1-1.7-2-3.6-3.5-6.4-3.8 10.3-7.4 19.9-10.8 29.1-.3-.6-1.1-1.7-1.5-2.9-3.5-10-2.8-20.2-1.1-30.3 1.2-7.4 4.3-14.6 3.1-22.4-.2-1.1.2-2.3.3-3.4-22.1 17.6-38.8 38.4-42.9 67.4-4 28-2.8 54.8 13.5 79.1-36.3-13.8-53-48.6-58.3-84.1-3 8-15 16.3-22.4 16.6v-.2c2.1-2.9 11.1-10.6 7-30.2-1.3-10.7-4.1-21.2-5.1-31.9-1-10.9-1-21.9-.5-32.9.3-11.6 3.8-22.7 8.6-33.2 5.7-12.5 13.5-23.8 23-33.6 5.6-5.8 11.9-11 18.2-16.1 8.6-6.8 17.7-12.9 28.2-16.5 5.1-1.9 10.4-3 15.7-4.5zm96.4 221.9c-.4.9-1.2 2-1.1 3 .5 7.6 1.2 15.2 2 22.7.2 2.1 0 4.8 3.3 5.5 3.3.7 6.6 1.8 9.9 2.6.3.1.9-.1 1.1-.4 3.8-4.8 7.5-9.6 10.9-14-8.4-6.1-17.1-12.6-26.1-19.4zm-23.1-42.5v6.3c1.9-2 3.6-3.9 5.3-5.7-1.7-.2-3.5-.4-5.3-.6z" />
    </svg>
  </div>
</div>
```

Beachten Sie, dass sich der Hintergrund bewegt, Alice sich dreht und ihre Farbe versetzt zu ihrer Drehung ändert. Wir konzentrieren uns in diesem Tutorial nur auf Alice. Den gesamten Quellcode können Sie durch Klicken auf "Play" im Codeblock ansehen. Hier ist der vereinfachte CSS-Code, der Alices Animation steuert:

```css live-sample___animations_css_version
#alice {
  animation: alice-tumbling infinite 3s linear;
}

@keyframes alice-tumbling {
  0% {
    color: black;
    transform: rotate(0) translate3d(-50%, -50%, 0);
  }
  30% {
    color: #431236;
  }
  100% {
    color: black;
    transform: rotate(360deg) translate3d(-50%, -50%, 0);
  }
}
```

```css hidden live-sample___animations_css_version
#tunnel {
  animation: tunnel-fly 1s linear infinite;
}

@keyframes tunnel-fly {
  100% {
    transform: translate3d(0, -300px, 0);
  }
}
```

```css hidden live-sample___animations_css_version live-sample___animations_api_version
#alice {
  color: #431236;
  width: 25%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: 0 0;
  transform: rotate(0) translate3d(-50%, -50%, 0);
  backface-visibility: hidden;
  will-change: transform, color;
}

path {
  fill: currentColor;
}

#tunnel {
  background:
    url("/shared-assets/images/examples/web-animations/bg-tunnel-border-left.svg")
      repeat-y,
    url("/shared-assets/images/examples/web-animations/bg-tunnel-border-right.svg")
      repeat-y 100% 100%,
    url("/shared-assets/images/examples/web-animations/bg-tunnel-specks.png"),
    #6c373f;
  margin: 0 auto;
  height: calc(100% + 300px);
  width: 60%;
  min-width: 400px;
  backface-visibility: hidden;
  will-change: transform;
}

.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

body {
  background: black;
}

html,
body {
  height: 100%;
}
```

Dies ändert Alices Farbe und die Drehung ihrer Transformation über 3 Sekunden mit konstanter (linearer) Geschwindigkeit und wiederholt sich unendlich. Im {{cssxref("@keyframes")}}-Block sehen wir, dass 30% des Weges durch jede Schleife (etwa 0,9 Sekunden) Alices Farbe von Schwarz zu einem tiefen Burgunder-Rot wechselt und dann am Ende der Schleife zurückwechselt.

### Überführung in JavaScript

Nun versuchen wir, die gleiche Animation mit der Web Animations API zu erstellen.

#### Repräsentation von Keyframes

Das erste, was wir brauchen, ist ein [Keyframe Object](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats), das unserem CSS-{{cssxref("@keyframes")}}-Block entspricht:

```js live-sample___animations_api_version
const aliceTumbling = [
  { transform: "rotate(0) translate3d(-50%, -50%, 0)", color: "black" },
  { color: "#431236", offset: 0.3 },
  { transform: "rotate(360deg) translate3d(-50%, -50%, 0)", color: "black" },
];
```

Hier verwenden wir ein Array, das mehrere Objekte enthält. Jedes Objekt repräsentiert einen Schlüssel aus dem ursprünglichen CSS. Im Gegensatz zu CSS muss der Web Animations API jedoch nicht explizit mitgeteilt werden, welche Prozentsätze entlang der Animation für jeden Schlüssel erscheinen sollen. Es teilt die Animation automatisch in gleiche Teile basierend auf der Anzahl der gegebenen Schlüssel auf. Das bedeutet, dass ein Keyframe-Objekt mit drei Schlüsseln den mittleren Schlüssel 50% des Weges durch jede Schleife der Animation abspielen wird, es sei denn, es wird anders angewiesen.

Wenn wir explizit den Versatz eines Schlüssels von den anderen Schlüsseln festlegen möchten, können wir direkt im Objekt einen Versatz angeben, der durch ein Komma von der Deklaration getrennt ist. Im obigen Beispiel geben wir, um sicherzustellen, dass sich Alices Farbe bei 30% (nicht 50%) ändert, `offset: 0.3` an.

Derzeit sollten mindestens zwei Keyframes angegeben werden (die die Start- und Endzustände der Animationssequenz darstellen). Wenn Ihre Keyframe-Liste nur einen Eintrag hat, kann [`Element.animate()`](/de/docs/Web/API/Element/animate) in einigen Browsern möglicherweise einen `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException) auslösen, bis sie aktualisiert werden.

Zusammengefasst: Die Schlüssel sind standardmäßig gleichmäßig verteilt, es sei denn, Sie geben einen Versatz auf einem Schlüssel an. Praktisch, oder?

#### Repräsentation von Zeiteigenschaften

Wir müssen auch ein Objekt für Zeiteigenschaften erstellen, das den Werten in Alices Animation entspricht:

```js live-sample___animations_api_version
const aliceTiming = {
  duration: 3000,
  iterations: Infinity,
};
```

Es gibt einige Unterschiede hier im Vergleich zu CSS:

- Zum einen ist die Dauer in Millisekunden anstelle von Sekunden — 3000 statt 3s. Wie bei [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) akzeptiert die Web Animations API nur Millisekunden.
- Ein weiterer Unterschied ist, dass es `iterations` und nicht `iteration-count` ist.

> [!NOTE]
> Es gibt einige kleine Unterschiede zwischen der Terminologie von CSS-Animationen und der Terminologie von Web-Animationen. Zum Beispiel verwendet Web Animations nicht den String `"infinite"`, sondern das JavaScript-Schlüsselwort `Infinity`. Und anstelle von `timing-function` verwenden wir `easing`. Wir listen hier keinen `easing`-Wert auf, denn im Gegensatz zu CSS-Animationen, bei denen die Standard-{{cssxref("animation-timing-function")}} `ease` ist, ist in der Web Animations API das Standard-`easing` `linear` — genau das, was wir hier wollen.

#### Zusammensetzen der Teile

Jetzt ist es Zeit, beide mit der [`Element.animate()`](/de/docs/Web/API/Element/animate)-Methode zusammenzubringen:

```js live-sample___animations_api_version
document.getElementById("alice").animate(aliceTumbling, aliceTiming);
```

Und boom: Die Animation beginnt zu laufen:

```js hidden live-sample___animations_api_version
document
  .getElementById("tunnel")
  .animate(
    [
      { transform: "translate3d(0, 0, 0)" },
      { transform: "translate3d(0, -300px, 0)" },
    ],
    {
      duration: 1000,
      iterations: Infinity,
    },
  );
```

{{EmbedLiveSample("animations_api_version", "", 300)}}

Die `animate()`-Methode kann auf jedes DOM-Element angewendet werden, das mit CSS animiert werden könnte. Und sie kann auf verschiedene Arten geschrieben werden. Anstatt Objekte für Keyframes und Zeiteigenschaften zu erstellen, könnten wir ihre Werte direkt übergeben, zum Beispiel:

```js
document.getElementById("alice").animate(
  [
    { transform: "rotate(0) translate3d(-50%, -50%, 0)", color: "black" },
    { color: "#431236", offset: 0.3 },
    { transform: "rotate(360deg) translate3d(-50%, -50%, 0)", color: "black" },
  ],
  {
    duration: 3000,
    iterations: Infinity,
  },
);
```

Was noch mehr ist, wenn wir nur die Dauer der Animation angeben wollten und nicht ihre Wiederholungen (Standardmäßig läuft eine Animation einmal), könnten wir alleine die Millisekunden übergeben:

```js
document.getElementById("alice").animate(
  [
    { transform: "rotate(0) translate3d(-50%, -50%, 0)", color: "black" },
    { color: "#431236", offset: 0.3 },
    { transform: "rotate(360deg) translate3d(-50%, -50%, 0)", color: "black" },
  ],
  3000,
);
```

## Steuerung der Wiedergabe mit play(), pause(), reverse() und updatePlaybackRate()

Während wir CSS-Animationen mit der Web Animations API schreiben können, liegt der wirkliche Nutzen der API in der Manipulation der Wiedergabe der Animation. Die Web Animations API bietet mehrere nützliche Methoden zur Steuerung der Wiedergabe. Werfen wir einen Blick auf das Pausieren und Abspielen von Animationen im Beispiel "Follow the White Rabbit":

In diesem Beispiel hat das weiße Kaninchen eine Animation, die es in ein Kaninchenloch hinuntergehen lässt. Sie wird nur ausgelöst, wenn der Benutzer darauf klickt.

```html hidden live-sample___follow_the_white_rabbit
<div class="wrapper">
  <div class="page">
    <div class="background"></div>
    <div id="rabbit">Click the rabbit's ears!</div>
    <div class="foreground"></div>
    <p>
      She was just in time to see him pop down a hole between a great tree's
      roots.
    </p>
  </div>
</div>
```

```css hidden live-sample___follow_the_white_rabbit
#rabbit {
  background: url("/shared-assets/images/examples/web-animations/park5_rabbit.png")
    0 0 / 100% 100%;
  cursor: pointer;
  position: absolute;
  top: 15%;
  left: 60%;
  width: 14.64844%;
  padding-top: 31.00586%;
}

body {
  background: black;
}
.wrapper {
  max-width: 133.33vh;
  margin: 0 auto;
}
.page {
  background: #431236;
  height: 0;
  overflow: hidden;
  padding-top: 75%;
  position: relative;
  text-indent: 100%;
  white-space: nowrap;
}

.foreground {
  height: 100%;
  background: url("/shared-assets/images/examples/web-animations/bg_park5_2.png")
    no-repeat 100% 100% / 100% auto;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  pointer-events: none;
}

.background {
  background: url("/shared-assets/images/examples/web-animations/bg_park5_1.png")
    no-repeat 0 0 / 100% auto;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
```

### Pausieren und Abspielen von Animationen

Wir können das Kaninchen mit der `animate()`-Methode wie gewohnt animieren:

```js live-sample___follow_the_white_rabbit
const whiteRabbit = document.getElementById("rabbit");

const rabbitDownAnimation = whiteRabbit.animate(
  [{ transform: "translateY(0%)" }, { transform: "translateY(100%)" }],
  { duration: 3000, fill: "forwards" },
);
```

Die [`Element.animate()`](/de/docs/Web/API/Element/animate)-Methode wird sofort ausgeführt, nachdem sie aufgerufen wurde. Um zu verhindern, dass der Kuchen sich vor dem Benutzer selbst verzehrt, rufen wir [`Animation.pause()`](/de/docs/Web/API/Animation/pause) direkt nach der Definition auf, etwa so:

```js live-sample___follow_the_white_rabbit
rabbitDownAnimation.pause();
```

> [!NOTE]
> Alternativ können Sie `rabbitDownAnimation` mit dem [`Animation()`](/de/docs/Web/API/Animation/Animation)-Konstruktor definieren, der nicht abspielt, bis Sie `play()` aufrufen.

Wir können nun die [`Animation.play()`](/de/docs/Web/API/Animation/play)-Methode aufrufen, wann immer wir bereit sind. Konkret möchten wir sie mit einer Klickaktion verknüpfen. Das erreichen wir wie folgt:

```js live-sample___follow_the_white_rabbit
whiteRabbit.addEventListener("click", downHeGoes);
whiteRabbit.addEventListener("touchstart", downHeGoes);

function downHeGoes(event) {
  whiteRabbit.removeEventListener("click", downHeGoes);
  whiteRabbit.removeEventListener("touchstart", downHeGoes);

  rabbitDownAnimation.play();
}
```

Wenn ein Benutzer auf das Kaninchen klickt oder es berührt, können wir nun `downHeGoes` aufrufen, um alle Animationen abzuspielen.

{{EmbedLiveSample("follow_the_white_rabbit", "", 400)}}

### Andere nützliche Methoden

Zusätzlich zum Pausieren und Abspielen können wir die folgenden Animation-Methoden verwenden:

- [`Animation.finish()`](/de/docs/Web/API/Animation/finish) springt zum Ende der Animation.
- [`Animation.cancel()`](/de/docs/Web/API/Animation/cancel) bricht die Animation ab und entfernt ihre Effekte.
- [`Animation.reverse()`](/de/docs/Web/API/Animation/reverse) setzt die Abspielrate der Animation ([`Animation.playbackRate`](/de/docs/Web/API/Animation/playbackRate)) auf einen negativen Wert, sodass sie rückwärts läuft.

Sehen wir uns zuerst `playbackRate` an – ein negativer `playbackRate` führt dazu, dass eine Animation rückwärts abläuft. In [Durch den Spiegel](https://en.wikipedia.org/wiki/Through_the_Looking-Glass) reist Alice in eine Welt, in der sie rennen muss, um auf der Stelle zu bleiben – und doppelt so schnell zu laufen, um vorwärts zu kommen! Im Beispiel des Rennens der Roten Königin rennen Alice und die Rote Königin, um auf der Stelle zu bleiben:

```html hidden live-sample___red_queen_race
<div class="wrapper">
  <div class="sky"></div>
  <div class="earth">
    <div id="red-queen-and-alice">
      <img
        id="red-queen-and-alice-sprite"
        src="/shared-assets/images/examples/web-animations/sprite_running-alice-queen_small.png"
        srcset="
          /shared-assets/images/examples/web-animations/sprite_running-alice-queen.png 2x
        "
        alt="Alice and the Red Queen running to stay in place." />
    </div>
  </div>
  <div class="scenery" id="foreground1">
    <img
      id="palm3"
      src="/shared-assets/images/examples/web-animations/palm3_small.png"
      srcset="/shared-assets/images/examples/web-animations/palm3.png 2x"
      alt="" />
  </div>
  <div class="scenery" id="foreground2">
    <img
      id="bush"
      src="/shared-assets/images/examples/web-animations/bush_small.png"
      srcset="/shared-assets/images/examples/web-animations/bush.png 2x"
      alt="" />
    <img
      id="w_rook_upright"
      src="/shared-assets/images/examples/web-animations/w_rook_upright_small.png"
      srcset="
        /shared-assets/images/examples/web-animations/w_rook_upright.png 2x
      "
      alt="" />
  </div>
  <div class="scenery" id="background1">
    <img
      id="r_pawn_upright"
      src="/shared-assets/images/examples/web-animations/r_pawn_upright_small.png"
      srcset="
        /shared-assets/images/examples/web-animations/r_pawn_upright.png 2x
      "
      alt="" />
    <img
      id="w_rook"
      src="/shared-assets/images/examples/web-animations/w_rook_small.png"
      srcset="/shared-assets/images/examples/web-animations/w_rook.png 2x"
      alt="" />
    <img
      id="palm1"
      src="/shared-assets/images/examples/web-animations/palm1_small.png"
      srcset="/shared-assets/images/examples/web-animations/palm1.png 2x"
      alt="" />
  </div>
  <div class="scenery" id="background2">
    <img
      id="r_pawn"
      src="/shared-assets/images/examples/web-animations/r_pawn_small.png"
      srcset="/shared-assets/images/examples/web-animations/r_pawn.png 2x"
      alt="" />

    <img
      id="r_knight"
      src="/shared-assets/images/examples/web-animations/r_knight_small.png"
      srcset="/shared-assets/images/examples/web-animations/r_knight.png 2x"
      alt="" />
    <img
      id="palm2"
      src="/shared-assets/images/examples/web-animations/palm2_small.png"
      srcset="/shared-assets/images/examples/web-animations/palm2.png 2x"
      alt="" />
  </div>
</div>
```

```css hidden live-sample___red_queen_race
* {
  user-select: none;
}

img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.scenery {
  width: 100%;
  height: 50%;
  position: absolute;
  bottom: 0;
  left: 0;
}

#foreground1,
#foreground2 {
  z-index: 1;
}

#foreground2,
#background2 {
  transform: translateX(100%);
}

#palm3 {
  top: 0;
  left: 10%;
}

#w_rook_upright {
  top: 30%;
  left: 75%;
}

#r_pawn {
  top: 10%;
  left: 15%;
}

#w_rook {
  top: 10%;
  left: 80%;
}

#r_pawn_upright {
  top: 5%;
  left: 30%;
}

#r_knight {
  top: 0;
  left: 70%;
}

#palm2 {
  top: -15%;
  left: 90%;
}

#palm1 {
  top: -15%;
  left: 40%;
}

#bush {
  top: 55%;
  left: 20%;
}

#red-queen-and-alice {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  width: 80%;
  max-width: 450px;
  z-index: 1;
}

#red-queen-and-alice::before {
  content: " ";
  display: block;
  padding-top: 87%;
}

#red-queen-and-alice img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.sky,
.earth {
  position: absolute;
  left: 0;
  height: 50vh;
  width: 100%;
}

.earth {
  background: #eb125d
    url("/shared-assets/images/examples/web-animations/bg_earth.jpg") repeat-x 0
    0 / 100% auto;
  bottom: 0;
}

.sky {
  background: #246e89
    url("/shared-assets/images/examples/web-animations/bg_sky.jpg") repeat-x
    100% 100% / auto 100%;
  top: 0;
}

html,
body {
  width: 100%;
  height: 100%;
}

.wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
```

```js hidden live-sample___red_queen_race
const background1 = document.getElementById("background1");
const background2 = document.getElementById("background2");

const foreground1 = document.getElementById("foreground1");
const foreground2 = document.getElementById("foreground2");

const redQueenAliceSprite = document.getElementById(
  "red-queen-and-alice-sprite",
);

/* Background animations */
const sceneryFrames = [
  { transform: "translateX(100%)" },
  { transform: "translateX(-100%)" },
];

const sceneryTimingBackground = {
  duration: 36000,
  iterations: Infinity,
};

const sceneryTimingForeground = {
  duration: 12000,
  iterations: Infinity,
};

const background1Movement = background1.animate(
  sceneryFrames,
  sceneryTimingBackground,
);
background1Movement.currentTime =
  background1Movement.effect.getComputedTiming().duration / 2;

const background2Movement = background2.animate(
  sceneryFrames,
  sceneryTimingBackground,
);

const foreground1Movement = foreground1.animate(
  sceneryFrames,
  sceneryTimingForeground,
);
foreground1Movement.currentTime =
  foreground1Movement.effect.getComputedTiming().duration / 2;

const foreground2Movement = foreground2.animate(
  sceneryFrames,
  sceneryTimingForeground,
);

const spriteFrames = [
  { transform: "translateY(0)" },
  { transform: "translateY(-100%)" },
];

const redQueenAlice = redQueenAliceSprite.animate(spriteFrames, {
  easing: "steps(7, end)",
  direction: "reverse",
  duration: 600,
  playbackRate: 1,
  iterations: Infinity,
});
```

{{EmbedLiveSample("red_queen_race", "", 400)}}

Da sich kleine Kinder leicht ermüden, anders als robotische Schachfiguren, verlangsamt sich Alice ständig. Wir können dies tun, indem wir ein Abklingen ihrer Animation `playbackRate` festlegen. Wir verwenden `updatePlaybackRate()` anstelle der direkten Einstellung des `playbackRate`, da dies eine reibungslose Aktualisierung ermöglicht:

```js live-sample___red_queen_race
setInterval(() => {
  // Make sure the playback rate never falls below .4
  if (redQueenAlice.playbackRate > 0.4) {
    redQueenAlice.updatePlaybackRate(redQueenAlice.playbackRate * 0.9);
  }
  adjustBackgroundPlayback();
}, 1000);
```

Aber wenn man sie durch Klicken oder Tippen ermutigt, beschleunigen sie sich, indem sie ihre `playbackRate` multiplizieren:

```js live-sample___red_queen_race
function goFaster() {
  // But you can speed them up by giving the screen a click or a tap.
  redQueenAlice.updatePlaybackRate(redQueenAlice.playbackRate * 1.1);
  adjustBackgroundPlayback();
}

document.addEventListener("click", goFaster);
document.addEventListener("touchstart", goFaster);
```

Auch die Hintergrundelemente haben `playbackRate`s, die beim Klicken oder Tippen beeinflusst werden. Ihre Wiedergaberaten werden von der von Alice abgeleitet, die unten gezeigt wird. Was passiert, wenn Sie Alice und die Rote Königin dazu bringen, doppelt so schnell zu rennen? Was passiert, wenn Sie sie verlangsamen?

```js live-sample___red_queen_race
/* Alice tires so easily! 
  Every so many seconds, reduce their playback rate so they slow a little. 
*/
const sceneries = [
  foreground1Movement,
  foreground2Movement,
  background1Movement,
  background2Movement,
];

function adjustBackgroundPlayback() {
  // If Alice and the Red Queen are running at a speed of 0.8–1.2,
  // the background doesn't move.
  // But if they fall under 0.8, the background slides backwards
  if (redQueenAlice.playbackRate < 0.8) {
    sceneries.forEach((anim) => {
      anim.updatePlaybackRate(-redQueenAlice.playbackRate / 2);
    });
  } else if (redQueenAlice.playbackRate > 1.2) {
    sceneries.forEach((anim) => {
      anim.updatePlaybackRate(redQueenAlice.playbackRate / 2);
    });
  } else {
    sceneries.forEach((anim) => {
      anim.updatePlaybackRate(0);
    });
  }
}
adjustBackgroundPlayback();
```

## Persistieren von Animationsstilen

Beim Animieren von Elementen ist ein häufiges Szenario, den Endzustand der Animation beizubehalten, nachdem die Animation beendet ist. Eine Methode, die dafür manchmal verwendet wird, ist das Setzen des [fill mode](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) der Animation auf `forwards`. Es wird jedoch nicht empfohlen, Fill-Modi zu verwenden, um den Effekt einer Animation unbefristet beizubehalten, aus zwei Gründen:

- Der Browser muss den Zustand der Animation beibehalten, während sie noch aktiv ist, sodass die Animation weiterhin Ressourcen verbraucht, obwohl sie nicht mehr animiert. Beachten Sie, dass dies etwas gemildert wird, indem der Browser [automatisch füllende Animationen entfernt](#automatisches_entfernen_füllender_animationen).
- Von Animationen angewendete Stile haben eine [höhere Priorität in der Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade#cascading_order) als spezifizierte Stile, sodass es schwierig sein kann, sie nach Bedarf zu überschreiben.

Ein besserer Ansatz ist die Verwendung der Methode [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles). Diese schreibt die berechneten Werte der aktuellen Stile der Animation in das [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut ihres Zielelements, wonach das Element normal umgestaltet werden kann.

## Automatisches Entfernen füllender Animationen

Es ist möglich, eine große Anzahl von Animationen für dasselbe Element auszulösen. Wenn sie unbegrenzt (d.h. forwards-füllend) sind, kann dies zu einer riesigen Animationsliste führen, die ein Speicherleck erzeugen könnte. Aus diesem Grund entfernen Browser füllende Animationen automatisch, nachdem sie durch neuere Animationen ersetzt wurden, es sei denn, der Entwickler legt ausdrücklich fest, dass sie behalten werden sollen.

Animationen werden entfernt, wenn alle folgenden Bedingungen zutreffen:

- Die Animation füllt (ihre `fill`-Eigenschaft ist `forwards`, wenn sie vorwärts abspielt, `backwards`, wenn sie rückwärts abspielt, oder `both`).
- Die Animation ist beendet. (Beachtest, dass aufgrund des `fill` sie weiterhin in Kraft ist.)
- Die Zeitleiste der Animation ist monoton steigend. (Dies ist immer bei der [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) der Fall; andere Zeitleisten wie {{cssxref("scroll-timeline")}} können rückwärts laufen.)
- Die Animation wird nicht durch deklaratives Markup wie CSS gesteuert.
- Jeder Styling-Effekt des [`AnimationEffect`](/de/docs/Web/API/AnimationEffect) der Animation wird durch eine andere Animation überschrieben, die ebenfalls alle oben genannten Bedingungen erfüllt. (Typischerweise, wenn zwei Animationen dieselbe Stil-Eigenschaft desselben Elements setzen würden, überschreibt die zuletzt erstellte die andere.)

Die ersten vier Bedingungen stellen sicher, dass, ohne Eingriff von JavaScript, der Effekt der Animation niemals ändert oder endet. Die letzte Bedingung stellt sicher, dass die Animation tatsächlich niemals den Stil eines Elements beeinflusst: Sie wurde vollständig ersetzt.

Wenn die Animation automatisch entfernt wird, wird das [`remove`](/de/docs/Web/API/Animation/remove_event)-Ereignis der Animation ausgelöst.

Um zu verhindern, dass der Browser Animationen automatisch entfernt, rufen Sie die [`persist()`](/de/docs/Web/API/Animation/persist)-Methode der Animation auf.

Die Eigenschaft [`replaceState`](/de/docs/Web/API/Animation/replaceState) der Animation wird `removed` sein, wenn die Animation entfernt wurde, `persisted`, wenn Sie [`persist()`](/de/docs/Web/API/Animation/persist) auf der Animation aufgerufen haben, oder `active` andererseits.

## Informationen aus Animationen abrufen

Stellen Sie sich andere Möglichkeiten vor, wie wir `playbackRate` verwenden könnten, z.B. um die Zugänglichkeit für Benutzer mit vestibulären Störungen zu verbessern, indem Sie ihnen ermöglichen, Animationen auf einer gesamten Website zu verlangsamen. Das ist mit CSS allein nicht möglich, ohne die Dauern in jeder CSS-Regel neu zu berechnen, aber mit der Web Animations API könnten wir die Methode [`Document.getAnimations`](/de/docs/Web/API/Document/getAnimations) verwenden, um jede Animation auf der Seite zu durchlaufen und ihre `playbackRate`s zu halbieren, wie folgt:

```js
document.getAnimations().forEach((animation) => {
  animation.updatePlaybackRate(animation.playbackRate * 0.5);
});
```

Mit der Web Animations API müssen Sie nur eine kleine Eigenschaft ändern!

Eine andere Sache, die mit CSS-Animationen allein schwer zu erreichen ist, ist das Erstellen von Abhängigkeiten von Werten, die von anderen Animationen bereitgestellt werden. Zum Beispiel im Beispiel des Spiels "Wachsende und Schrumpfende Alice" haben Sie vielleicht etwas Merkwürdiges an der Dauern des Kuchens bemerkt:

```js
document.getElementById("eat-me-sprite").animate([], {
  duration: aliceChange.effect.getComputedTiming().duration / 2,
});
```

Um zu verstehen, was hier passiert, schauen wir uns Alices Animation an:

```js
const aliceChange = document
  .getElementById("alice")
  .animate(
    [
      { transform: "translate(-50%, -50%) scale(.5)" },
      { transform: "translate(-50%, -50%) scale(2)" },
    ],
    {
      duration: 8000,
      easing: "ease-in-out",
      fill: "both",
    },
  );
```

Alices Animation lässt sie von der Hälfte ihrer Größe auf das Doppelte ihrer Größe über 8 Sekunden anwachsen. Dann pausieren wir sie:

```js
aliceChange.pause();
```

Wenn wir sie zu Beginn ihrer Animation pausiert hätten, würde sie mit halber Größe starten, als hätte sie die gesamte Flasche schon getrunken! Wir wollen die "Abspielzeit" ihrer Animation auf die Mitte setzen, sodass sie bereits halb fertig ist. Wir könnten das tun, indem wir ihre [`Animation.currentTime`](/de/docs/Web/API/Animation/currentTime) auf 4 Sekunden setzen, wie folgt:

```js
aliceChange.currentTime = 4000;
```

Aber während wir an dieser Animation arbeiten, könnten wir Alices Dauer oft ändern. Wäre es nicht besser, wenn wir ihre `currentTime` dynamisch setzen, sodass wir nicht zwei Updates gleichzeitig vornehmen müssen? Tatsächlich können wir das tun, indem wir die Eigenschaft [`Animation.effect`](/de/docs/Web/API/Animation/effect) von aliceChange referenzieren, die ein Objekt zurückgibt, das alle Details der auf Alice aktiven Effekte enthält:

```js
aliceChange.currentTime = aliceChange.effect.getComputedTiming().duration / 2;
```

`effect` lässt uns auf die Keyframes und Zeiteigenschaften der Animation zugreifen — `aliceChange.effect.getComputedTiming()` zeigt auf Alices Zeitobjekt — dies enthält ihre [`duration`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect). Wir können ihre Dauer halbieren, um den Mittelpunkt ihrer Animationszeitleiste zu erhalten und sie auf normale Höhe einzustellen. Nun können wir ihre Animation in beide Richtungen umkehren und abspielenlassen, damit sie kleiner oder größer wird!

Und wir können dasselbe tun, wenn wir die Dauern von Kuchen und Flasche einstellen:

```js
const drinking = document
  .getElementById("liquid")
  .animate([{ height: "100%" }, { height: "0" }], {
    fill: "forwards",
    duration: aliceChange.effect.getComputedTiming().duration / 2,
  });
drinking.pause();
```

Jetzt sind alle drei Animationen mit nur einer Dauer verknüpft, die wir einfach von einem Ort aus ändern können.

Wir können auch die Web Animations API verwenden, um die aktuelle Zeit der Animation herauszufinden. Das Spiel endet, wenn Sie keinen Kuchen mehr zum Essen haben oder die Flasche leer ist. Welches Szenario den Spielern präsentiert wird, hängt davon ab, wie weit Alice in ihrer Animation fortgeschritten ist, ob sie zu groß geworden ist und nicht mehr durch die winzige Tür passt oder zu klein ist und den Schlüssel zur Tür nicht erreichen kann. Wir können herausfinden, ob sie sich am großen oder kleinen Ende ihrer Animation befindet, indem wir die [`currentTime`](/de/docs/Web/API/Animation/currentTime) ihrer Animation erhalten und durch ihre `activeDuration` teilen:

```js
const endGame = () => {
  // get Alice's timeline's playhead location
  const alicePlayhead = aliceChange.currentTime;
  const aliceTimeline = aliceChange.effect.getComputedTiming().activeDuration;

  // stops Alice's and other animations
  stopPlayingAlice();

  // depending on which third it falls into
  const aliceHeight = alicePlayhead / aliceTimeline;

  if (aliceHeight <= 0.333) {
    // Alice got smaller!
    // …
  } else if (aliceHeight >= 0.666) {
    // Alice got bigger!
    // …
  } else {
    // Alice didn't change significantly
    // …
  }
};
```

## Callbacks und Versprechen

CSS-Animationen und Übergänge haben ihre eigenen Ereignislistener, und diese sind auch mit der Web Animations API möglich:

- [`onfinish`](/de/docs/Web/API/Animation/finish_event) ist der Ereignishandler für das `finish`-Ereignis und kann manuell mit [`finish()`](/de/docs/Web/API/Animation/finish) ausgelöst werden.
- [`oncancel`](/de/docs/Web/API/Animation/cancel_event) ist der Ereignishandler für das `cancel`-Ereignis und kann mit [`cancel()`](/de/docs/Web/API/Animation/cancel) ausgelöst werden.

Hier setzen wir die Rückrufe für den Kuchen, die Flasche und Alice, um die Funktion `endGame` auszuführen:

```js
// When the cake or bottle runs out
nommingCake.onfinish = endGame;
drinking.onfinish = endGame;

// Alice reaches the end of her animation
aliceChange.onfinish = endGame;
```

Noch besser, die Web Animations API bietet auch ein [`finished`](/de/docs/Web/API/Animation/finished)-Promise, das aufgelöst wird, wenn die Animation endet, oder abgelehnt wird, wenn sie abgebrochen wird.

## Fazit

Dies sind die grundlegenden Funktionen der Web Animations API. Bis jetzt sollten Sie bereit sein, "ins Kaninchenloch zu springen", um im Browser zu animieren und Ihre eigenen Animationsexperimente zu schreiben!

## Siehe auch

- Die [vollständige Suite von Alice im Wunderland-Demos](https://codepen.io/collection/nqNJvD) auf CodePen zum Spielen, Forken und Teilen.
- [Animieren, als wäre es egal mit Element.animate](https://hacks.mozilla.org/2016/08/animating-like-you-just-dont-care-with-element-animate/) (2016) Erklärt den Hintergrund der Web Animations API und warum sie leistungsfähiger ist als andere Web-Animationsmethoden.
