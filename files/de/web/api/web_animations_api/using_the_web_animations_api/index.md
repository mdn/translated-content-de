---
title: Verwendung der Web Animations API
slug: Web/API/Web_Animations_API/Using_the_Web_Animations_API
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{DefaultAPISidebar("Web Animations")}}

Die Web Animations API ermöglicht es uns, Animationen zu erstellen und deren Wiedergabe mit JavaScript zu steuern. Dieser Artikel wird Sie mit unterhaltsamen Demos und Tutorials, die von "Alice im Wunderland" inspiriert sind, in die richtige Richtung lenken.

## Lernen Sie die Web Animations API kennen

Die [Web Animations API](/de/docs/Web/API/Web_Animations_API) öffnet das Animations-Engine des Browsers für Entwickler und Manipulationen durch JavaScript. Diese API wurde entwickelt, um sowohl [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) als auch [CSS-Übergänge](/de/docs/Web/CSS/Guides/Transitions) zu implementieren und lässt Raum für zukünftige Animationseffekte. Es ist eine der leistungsfähigsten Möglichkeiten, im Web zu animieren, da der Browser seine eigenen internen Optimierungen ohne Tricks, Zwang oder [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) vornehmen kann.

Mit der Web Animations API können wir interaktive Animationen aus Stylesheets nach JavaScript verlagern und Präsentation von Verhalten trennen. Wir müssen uns nicht mehr auf DOM-lastige Techniken wie das Schreiben von CSS-Eigenschaften und das Scoping von Klassen auf Elemente verlassen, um die Wiedergaberichtung zu steuern. Und im Gegensatz zu rein deklarativem CSS ermöglicht JavaScript es uns, Werte von Eigenschaften bis hin zu Dauern dynamisch festzulegen. Für den Aufbau benutzerdefinierter Animationsbibliotheken und die Erstellung interaktiver Animationen könnte die Web Animations API das perfekte Werkzeug sein. Schauen wir uns an, was sie leisten kann!

Diese Seite enthält eine Reihe von Beispielen, die die [Web Animations API](/de/docs/Web/API/Web_Animations_API) nutzen und von [Alice im Wunderland](https://en.wikipedia.org/wiki/Alice%27s_Adventures_in_Wonderland) inspiriert sind. Diese Beispiele werden mit freundlicher Genehmigung von [Rachel Nabors](https://nearestnabors.com/) erstellt und geteilt. Die [vollständige Suite von Beispielen](https://codepen.io/collection/nqNJvD) ist auf CodePen verfügbar; hier präsentieren wir die für unsere Dokumentation relevanten.

## Schreiben von CSS-Animationen mit der Web Animations API

Eine der bekannteren Möglichkeiten, um in die Web Animations API einzusteigen, ist der Start mit etwas, das die meisten Webentwickler schon einmal verwendet haben: CSS-Animationen. CSS-Animationen haben eine vertraute Syntax, die sich gut zu Demonstrationszwecken eignet.

### Die CSS-Version

Hier ist eine fallende Animation, die in CSS geschrieben wurde und Alice zeigt, wie sie in das Kaninchenloch fällt, das nach Wunderland führt:

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

Beachten Sie, dass sich der Hintergrund bewegt, Alice sich dreht und ihre Farbe sich versetzt zu ihrer Drehung ändert. In diesem Tutorial konzentrieren wir uns nur auf Alice. Sie können den vollständigen Quellcode überprüfen, indem Sie auf "Play" im Codeblock klicken. Hier ist das vereinfachte CSS, das Alices Animation steuert:

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

Dies ändert Alices Farbe und ihre Transformationsdrehung über 3 Sekunden mit einer konstanten (linearen) Rate und wiederholt sich unendlich. Im {{cssxref("@keyframes")}}-Block sehen wir, dass sich Alices Farbe 30 % des Weges durch jede Schleife (etwa nach 0,9 Sekunden) von Schwarz zu einem tiefen Burgunderrot ändert und dann bis zum Ende der Schleife wieder zurück wechselt.

### Verschiebung zu JavaScript

Jetzt versuchen wir die gleiche Animation mit der Web Animations API zu erstellen.

#### Darstellung von Keyframes

Das Erste, was wir brauchen, ist die Erstellung eines [Keyframe Object](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats) entsprechend unserem CSS-{{cssxref("@keyframes")}}-Block:

```js live-sample___animations_api_version
const aliceTumbling = [
  { transform: "rotate(0) translate3d(-50%, -50%, 0)", color: "black" },
  { color: "#431236", offset: 0.3 },
  { transform: "rotate(360deg) translate3d(-50%, -50%, 0)", color: "black" },
];
```

Hier verwenden wir ein Array, das mehrere Objekte enthält. Jedes Objekt repräsentiert einen Key aus dem ursprünglichen CSS. Im Gegensatz zu CSS muss die Web Animations API jedoch nicht explizit über die Prozentsätze entlang der Animation für jedes erscheinende Key informiert werden. Sie wird die Animation automatisch in gleiche Teile basierend auf der Anzahl der angegebenen Keys unterteilen. Das bedeutet, dass ein Keyframe-Objekt mit drei Keys den mittleren Key 50 % des Weges durch jede Schleife der Animation abspielt, sofern nicht anders angegeben.

Wenn wir explizit den Versatz eines Keys von den anderen Keys festlegen möchten, können wir einen Offset direkt im Objekt spezifizieren, getrennt von der Deklaration durch ein Komma. Im obigen Beispiel, um sicherzustellen, dass Alices Farbänderung bei 30% (nicht 50%) erfolgt, geben wir `offset: 0.3` an.

Derzeit sollten mindestens zwei Keyframes spezifiziert sein (die Start- und Endzustände der Animationssequenz darstellend). Wenn Ihre Keyframe-Liste nur einen Eintrag hat, kann [`Element.animate()`](/de/docs/Web/API/Element/animate) in einigen Browsern einen `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException) werfen, bis sie aktualisiert werden.

Zusammenfassend sind die Keys standardmäßig gleichmäßig verteilt, es sei denn, Sie spezifizieren einen Offset auf einem Key. Praktisch, nicht wahr?

#### Darstellung von Timingeigenschaften

Wir müssen auch ein Objekt von Timingeigenschaften erstellen, das den Werten in Alices Animation entspricht:

```js live-sample___animations_api_version
const aliceTiming = {
  duration: 3000,
  iterations: Infinity,
};
```

Hier sind einige Unterschiede zu erkennen, wie äquivalente Werte in CSS repräsentiert werden:

- Zum einen erfolgt die Dauer in Millisekunden anstelle von Sekunden — 3000 nicht 3s. Wie bei [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), akzeptiert die Web Animations API nur Millisekunden.
- Das Andere, was Sie bemerken werden, ist, dass es `iterations` und nicht `iteration-count` heißt.

> [!NOTE]
> Es gibt eine Reihe kleiner Unterschiede zwischen der in CSS-Animationen verwendeten Terminologie und der in Web-Animationen verwendeten. Beispielsweise verwendet Web Animations nicht den String `"infinite"`, sondern stattdessen das JavaScript-Schlüsselwort `Infinity`. Und anstelle von `timing-function` verwenden wir `easing`. Hier geben wir keinen `easing`-Wert an, weil, im Gegensatz zu CSS-Animationen, bei denen der Standardwert der {{cssxref("animation-timing-function")}} `ease` ist, bei der Web Animations API das Standard-`easing` `linear` — also das, was wir hier wollen.

#### Die Einzelteile zusammenfügen

Jetzt ist es Zeit, sie beide mit der Methode [`Element.animate()`](/de/docs/Web/API/Element/animate) zusammenzuführen:

```js live-sample___animations_api_version
document.getElementById("alice").animate(aliceTumbling, aliceTiming);
```

Und boom: Die Animation beginnt zu spielen:

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

Die `animate()`-Methode kann auf jedem DOM-Element aufgerufen werden, das mit CSS animiert werden könnte. Und sie kann auf verschiedene Weisen geschrieben werden. Anstatt Objekte für Keyframes und Timingeigenschaften zu erstellen, könnten wir ihre Werte direkt übergeben, so wie hier:

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

Noch mehr, wenn wir nur die Dauer der Animation und nicht ihre Iterationen angeben wollten (standardmäßig iteriert eine Animation einmal), könnten wir einfach die Millisekunden allein übergeben:

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

## Wiedergabesteuerung mit play(), pause(), reverse() und updatePlaybackRate()

Während wir CSS-Animationen mit der Web Animations API schreiben können, liegt der wahre Nutzen der API in der Manipulation der Wiedergabe der Animation. Die Web Animations API bietet mehrere nützliche Methoden zur Steuerung der Wiedergabe. Lassen Sie uns einen Blick auf das Pausieren und Spielen von Animationen im "Follow the White Rabbit"-Beispiel werfen:

In diesem Beispiel hat der weiße Hase eine Animation, die ihn in ein Kaninchenloch lässt. Sie wird nur ausgelöst, wenn der Benutzer darauf klickt.

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

### Animationen pausieren und abspielen

Wir können den Hasen wie gewohnt mit der `animate()`-Methode animieren:

```js live-sample___follow_the_white_rabbit
const whiteRabbit = document.getElementById("rabbit");

const rabbitDownAnimation = whiteRabbit.animate(
  [{ transform: "translateY(0%)" }, { transform: "translateY(100%)" }],
  { duration: 3000, fill: "forwards" },
);
```

Die Methode [`Element.animate()`](/de/docs/Web/API/Element/animate) wird sofort ausgeführt, nachdem sie aufgerufen wurde. Um zu verhindern, dass der Kuchen sich selbst isst, bevor der Benutzer die Möglichkeit hatte, darauf zu klicken, rufen wir sofort nach der Definition [`Animation.pause()`](/de/docs/Web/API/Animation/pause) darauf auf, wie folgt:

```js live-sample___follow_the_white_rabbit
rabbitDownAnimation.pause();
```

> [!NOTE]
> Alternativ können Sie `rabbitDownAnimation` mit dem [`Animation()`](/de/docs/Web/API/Animation/Animation)-Konstruktor definieren, das nicht spielt, bis Sie `play()` aufrufen.

Wir können jetzt die Methode [`Animation.play()`](/de/docs/Web/API/Animation/play) verwenden, um sie auszuführen, wann immer wir bereit sind. Speziell wollen wir es mit einer Klickaktion verknüpfen. Wir können dies über folgendes erreichen:

```js live-sample___follow_the_white_rabbit
whiteRabbit.addEventListener("click", downHeGoes);
whiteRabbit.addEventListener("touchstart", downHeGoes);

function downHeGoes(event) {
  whiteRabbit.removeEventListener("click", downHeGoes);
  whiteRabbit.removeEventListener("touchstart", downHeGoes);

  rabbitDownAnimation.play();
}
```

Wenn ein Benutzer auf den Hasen klickt oder mit dem Finger darauf drückt, können wir jetzt `downHeGoes` aufrufen, um alle Animationen abzuspielen.

{{EmbedLiveSample("follow_the_white_rabbit", "", 400)}}

### Andere nützliche Methoden

Zusätzlich zum Pausieren und Abspielen können wir die folgenden Animation-Methoden verwenden:

- [`Animation.finish()`](/de/docs/Web/API/Animation/finish) springt zum Ende der Animation.
- [`Animation.cancel()`](/de/docs/Web/API/Animation/cancel) bricht die Animation ab und entfernt deren Effekte.
- [`Animation.reverse()`](/de/docs/Web/API/Animation/reverse) setzt die Wiedergaberate (`Animation.playbackRate`](/de/docs/Web/API/Animation/playbackRate)) der Animation auf einen negativen Wert, sodass sie rückwärts läuft.

Schauen wir uns zuerst `playbackRate` an — eine negative `playbackRate` lässt eine Animation rückwärts laufen.
In [Durch den Spiegel](https://en.wikipedia.org/wiki/Through_the_Looking-Glass) reist Alice zu einer Welt, in der sie laufen muss, um an Ort und Stelle zu bleiben — und doppelt so schnell laufen muss, um sich vorwärts zu bewegen! Im Beispiel "Red Queen's Race" laufen Alice und die Rote Königin, um an Ort und Stelle zu bleiben:

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

Da kleine Kinder im Gegensatz zu automatisierten Schachfiguren schnell ermüden, verlangsamt sich Alice ständig. Wir können dies tun, indem wir ein Abklingen auf ihre `playbackRate` der Animation einstellen. Wir verwenden `updatePlaybackRate()` anstelle von `playbackRate` direkt zu setzen, da dies ein reibungsloses Update erzeugt:

```js live-sample___red_queen_race
setInterval(() => {
  // Make sure the playback rate never falls below .4
  if (redQueenAlice.playbackRate > 0.4) {
    redQueenAlice.updatePlaybackRate(redQueenAlice.playbackRate * 0.9);
  }
  adjustBackgroundPlayback();
}, 1000);
```

Aber wenn man auf sie klickt oder tippt, werden sie durch Multiplikation ihrer `playbackRate` beschleunigt:

```js live-sample___red_queen_race
function goFaster() {
  // But you can speed them up by giving the screen a click or a tap.
  redQueenAlice.updatePlaybackRate(redQueenAlice.playbackRate * 1.1);
  adjustBackgroundPlayback();
}

document.addEventListener("click", goFaster);
document.addEventListener("touchstart", goFaster);
```

Auch die Hintergrundelemente haben `playbackRate`s, die beim Klick oder Tap beeinflusst werden. Ihre Wiedergaberaten werden aus Alice's abgeleitet, siehe unten. Was passiert, wenn Sie Alice und die Rote Königin doppelt so schnell laufen lassen? Was passiert, wenn sie langsamer werden?

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

## Animation Styles beibehalten

Ein häufiger Anwendungsfall beim Animieren von Elementen ist, den Endzustand der Animation nach deren Abschluss beizubehalten. Eine manchmal verwendete Methode dafür ist das Setzen des [fill mode](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) der Animation auf `forwards`. Es wird jedoch nicht empfohlen, Fill-Modi zu verwenden, um den Effekt einer Animation unbegrenzt beizubehalten, aus zwei Gründen:

- Der Browser muss den Zustand der Animation aufrechterhalten, während sie noch aktiv ist, sodass die Animation weiterhin Ressourcen verbraucht, obwohl sie nicht mehr animiert. Beachten Sie, dass dies etwas dadurch gemildert wird, dass der Browser [Füllanimations automatisch entfernt](#automatisch_entfernung_von_fill_animations).
- Von Animationen angewendete Stile haben eine [höhere Priorität in der Cascade](/de/docs/Web/CSS/Guides/Cascade/Introduction#cascading_order) als angegebene Stile, sodass es schwierig sein kann, sie nach Bedarf zu überschreiben.

Ein besserer Ansatz ist die Verwendung der Methode [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles). Dies schreibt die berechneten Werte der aktuellen Stile der Animation in das [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut ihres Zielelements, danach kann das Element normal umgestylt werden.

## Automatische Entfernung von Fill-Animationen

Es ist möglich, eine große Anzahl von Animationen auf demselben Element auszulösen. Wenn sie unbegrenzt sind (d.h. forward-filling), kann dies zu einer riesigen Animationsliste führen, die ein Speicherleck verursachen könnte. Aus diesem Grund entfernen Browser automatisch füllende Animationen, nachdem sie durch neuere Animationen ersetzt wurden, es sei denn, der Entwickler gibt ausdrücklich an, sie zu behalten.

Animationen werden entfernt, wenn alle folgenden Bedingungen erfüllt sind:

- Die Animation füllt (Ihr `fill` ist `forwards`, wenn sie vorwärts läuft, `backwards`, wenn sie rückwärts läuft, oder `both`).
- Die Animation ist beendet. (Beachten Sie, dass sie aufgrund des `fill` trotzdem noch in Kraft ist.)
- Die Zeitleiste der Animation ist monoton steigend. (Dies ist immer wahr für [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline); andere Zeitleisten wie {{cssxref("scroll-timeline")}} können rückwärts laufen.)
- Die Animation wird nicht durch deklarative Markup wie CSS gesteuert.
- Jeder Stileffekt des [`AnimationEffect`](/de/docs/Web/API/AnimationEffect) der Animation wird durch eine andere Animation überschrieben, die ebenfalls alle obigen Bedingungen erfüllt. (Typischerweise, wenn zwei Animationen die gleiche Stileigenschaft des gleichen Elements setzen, überschreibt die zuletzt erstellte die andere.)

Die ersten vier Bedingungen stellen sicher, dass ohne Eingreifen durch JavaScript-Code der Effekt der Animation sich nie ändern oder enden wird. Die letzte Bedingung stellt sicher, dass die Animation nie tatsächlich den Stil eines Elements beeinflussen wird: sie wurde vollständig ersetzt.

Wenn die Animation automatisch entfernt wird, wird das [`remove`](/de/docs/Web/API/Animation/remove_event)-Ereignis der Animation ausgelöst.

Um zu verhindern, dass der Browser Animationen automatisch entfernt, rufen Sie die Methode [`persist()`](/de/docs/Web/API/Animation/persist) der Animation auf.

Die Eigenschaft [`replaceState`](/de/docs/Web/API/Animation/replaceState) der Animation wird `removed` sein, wenn die Animation entfernt wurde, `persisted`, wenn Sie [`persist()`](/de/docs/Web/API/Animation/persist) auf die Animation angewendet haben, oder `active`, andernfalls.

## Informationen aus Animationen herausholen

Stellen Sie sich andere Möglichkeiten vor, wie wir `playbackRate` verwenden könnten, z. B. zur Verbesserung der Barrierefreiheit für Benutzer mit vestibulären Störungen, indem wir ihnen ermöglichen, Animationen auf einer gesamten Website zu verlangsamen. Das ist mit CSS ohne Neuberechnung der Dauern in jeder CSS-Regel unmöglich, aber mit der Web Animations API können wir die Methode [`Document.getAnimations`](/de/docs/Web/API/Document/getAnimations) verwenden, um jede Animation auf der Seite zu durchlaufen und ihre `playbackRate`s zu halbieren, so wie hier:

```js
document.getAnimations().forEach((animation) => {
  animation.updatePlaybackRate(animation.playbackRate * 0.5);
});
```

Mit der Web Animations API müssen Sie nur eine kleine Eigenschaft ändern!

Ein weiteres Problem, das mit CSS-Animationen allein schwer zu lösen ist, ist die Schaffung von Abhängigkeiten von Werten, die von anderen Animationen bereitgestellt werden. Im Beispiel des "Growing and Shrinking Alice"-Spiels haben Sie vielleicht bemerkt, dass die Dauer des Kuchens etwas merkwürdig ist:

```js
document.getElementById("eat-me-sprite").animate([], {
  duration: aliceChange.effect.getComputedTiming().duration / 2,
});
```

Um zu verstehen, was hier passiert, schauen wir uns die Animation von Alice an:

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

Wenn wir sie am Anfang ihrer Animation pausiert gelassen hätten, würde sie bei der Hälfte ihrer vollen Größe beginnen, als ob sie die ganze Flasche schon ausgetrunken hätte! Wir wollen den "Abspielkopf" ihrer Animation in der Mitte setzen, also ist sie schon zur Hälfte fertig. Wir könnten dies tun, indem wir ihre [`Animation.currentTime`](/de/docs/Web/API/Animation/currentTime) auf 4 Sekunden einstellen, so wie hier:

```js
aliceChange.currentTime = 4000;
```

Aber während wir an dieser Animation arbeiten, könnten wir Alices Dauer oft ändern. Wäre es nicht besser, wenn wir ihre `currentTime` dynamisch einstellen, damit wir nicht zwei Änderungen gleichzeitig vornehmen müssen? Tatsächlich können wir dies tun, indem wir auf die Eigenschaft [`Animation.effect`](/de/docs/Web/API/Animation/effect) von aliceChange verweisen, die ein Objekt mit allen Details des/der Effekte(s), die auf Alice aktiv sind, zurückgibt:

```js
aliceChange.currentTime = aliceChange.effect.getComputedTiming().duration / 2;
```

`effect` ermöglicht es uns, auf die Keyframes und Timingeigenschaften der Animation zuzugreifen — `aliceChange.effect.getComputedTiming()` zeigt auf Alices Timing-Objekt — das enthält ihre [`duration`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect). Wir können ihre Dauer halbieren, um den Mittelpunkt ihrer Animationszeitleiste zu erhalten, und sie auf normale Größe setzen. Jetzt können wir ihre Animation in beide Richtungen umkehren und abspielen, um sie wachsen oder schrumpfen zu lassen!

Und wir können dasselbe tun, wenn wir die Dauer von Kuchen und Flasche einstellen:

```js
const drinking = document
  .getElementById("liquid")
  .animate([{ height: "100%" }, { height: "0" }], {
    fill: "forwards",
    duration: aliceChange.effect.getComputedTiming().duration / 2,
  });
drinking.pause();
```

Jetzt sind alle drei Animationen mit nur einer Dauer verknüpft, die wir leicht an einem Ort ändern können.

Wir können auch die Web Animations API verwenden, um die aktuelle Zeit der Animation zu ermitteln. Das Spiel endet, wenn Ihnen der Kuchen zum Essen oder die Flasche leer geht. Welche Vignette den Spielern präsentiert wird, hängt davon ab, wie weit Alice in ihrer Animation war, ob sie zu groß wird und nicht mehr durch die kleine Tür passen kann oder zu klein ist und nicht den Schlüssel zur Tür erreichen kann. Wir können herausfinden, ob sie am großen oder kleinen Ende ihrer Animation ist, indem wir die [`currentTime`](/de/docs/Web/API/Animation/currentTime) ihrer Animation erhalten und sie durch ihre `activeDuration` teilen:

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

## Callbacks und Promises

CSS-Animationen und -Übergänge haben ihre eigenen Ereignis-Listener, und diese sind auch mit der Web Animations API möglich:

- [`onfinish`](/de/docs/Web/API/Animation/finish_event) ist der Ereignishandler für das `finish`-Ereignis und kann manuell mit [`finish()`](/de/docs/Web/API/Animation/finish) ausgelöst werden.
- [`oncancel`](/de/docs/Web/API/Animation/cancel_event) ist der Ereignishandler für das `cancel`-Ereignis und kann mit [`cancel()`](/de/docs/Web/API/Animation/cancel) ausgelöst werden.

Hier setzen wir die Callbacks für den Kuchen, die Flasche und Alice, um die Funktion `endGame` auszulösen:

```js
// When the cake or bottle runs out
nommingCake.onfinish = endGame;
drinking.onfinish = endGame;

// Alice reaches the end of her animation
aliceChange.onfinish = endGame;
```

Noch besser, die Web Animations API bietet auch ein [`finished`](/de/docs/Web/API/Animation/finished) Promise, das erfüllt wird, wenn die Animation abgeschlossen ist, oder abgelehnt, wenn sie abgebrochen wird.

## Schlussfolgerung

Dies sind die grundlegenden Funktionen der Web Animations API. Jetzt sollten Sie bereit sein, "ins Kaninchenloch" des Animierens im Browser zu springen und bereit sein, Ihre eigenen Animationsexperimente zu schreiben!

## Siehe auch

- Die [vollständige Suite der Alice-im-Wunderland-Demos](https://codepen.io/collection/nqNJvD) auf CodePen zum Spielen, Forken und Teilen.
- [Animating like you just don't care with Element.animate](https://hacks.mozilla.org/2016/08/animating-like-you-just-dont-care-with-element-animate/) (2016) erklärt den Hintergrund der Web Animations API und warum sie leistungsfähiger ist als andere Web-Animationsmethoden.
