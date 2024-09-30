---
title: Verwendung der Web Animations API
slug: Web/API/Web_Animations_API/Using_the_Web_Animations_API
l10n:
  sourceCommit: d5ded97c6b75937767410359c9d2b4afa8387798
---

{{DefaultAPISidebar("Web Animations")}}

Die Web Animations API ermöglicht es uns, Animationen zu erstellen und ihre Wiedergabe mit JavaScript zu steuern. Dieser Artikel führt Sie mit unterhaltsamen Demos und Tutorials mit Alice im Wunderland in die richtige Richtung.

## Lernen Sie die Web Animations API kennen

Die [Web Animations API](/de/docs/Web/API/Web_Animations_API) öffnet die Animations-Engine des Browsers für Entwickler und die Manipulation durch JavaScript. Diese API wurde entwickelt, um sowohl [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) als auch [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) zu implementieren, und lässt Raum für zukünftige Animationseffekte. Sie ist eine der leistungsfähigsten Möglichkeiten, Animationen im Web zu erstellen, da der Browser seine eigenen internen Optimierungen vornehmen kann, ohne Tricks, Zwang oder [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame).

Mit der Web Animations API können wir interaktive Animationen von Stylesheets nach JavaScript verschieben und somit die Präsentation vom Verhalten trennen. Wir müssen uns nicht mehr auf DOM-intensive Techniken wie das Schreiben von CSS-Eigenschaften und das Setzen von Klassen auf Elemente verlassen, um die Wiedergaberichtung zu steuern. Und im Gegensatz zum rein deklarativen CSS ermöglicht uns JavaScript auch, dynamisch Werte von Eigenschaften bis hin zu Dauern festzulegen. Für die Erstellung benutzerdefinierter Animationsbibliotheken und interaktiver Animationen könnte die Web Animations API das perfekte Werkzeug sein. Sehen wir uns an, was sie kann!

## Schreiben von CSS-Animationen mit der Web Animations API

Eine der vertrauteren Möglichkeiten, den Einstieg in die Web Animations API zu finden, ist der Beginn mit etwas, das die meisten Webentwickler bereits kennen: CSS-Animationen. CSS-Animationen haben eine vertraute Syntax, die sich gut für Demonstrationszwecke eignet.

### Die CSS-Version

Hier ist eine Tumble-Animation in CSS, die Alice zeigt, wie sie in den Kaninchenbau fällt, der ins Wunderland führt (siehe den vollständigen [Code auf Codepen](https://codepen.io/rachelnabors/pen/QyOqqW)):

[![Alice stürzt in den Kaninchenbau.](tumbling-alice_optimized.gif)](https://codepen.io/rachelnabors/pen/rxpmJL)

Beachten Sie, dass sich der Hintergrund bewegt, Alice sich dreht und ihre Farbe sich versetzt zu ihrer Drehung ändert. Wir werden uns in diesem Tutorial nur auf Alice konzentrieren. Hier ist das vereinfachte CSS, das Alices Animation steuert:

```css
#alice {
  animation: aliceTumbling infinite 3s linear;
}

@keyframes aliceTumbling {
  0% {
    color: #000;
    transform: rotate(0) translate3D(-50%, -50%, 0);
  }
  30% {
    color: #431236;
  }
  100% {
    color: #000;
    transform: rotate(360deg) translate3D(-50%, -50%, 0);
  }
}
```

Dies ändert Alices Farbe und die Rotation ihrer Transformation über 3 Sekunden mit einer konstanten (linearen) Rate und wiederholt sich unendlich. Im [@keyframes](/de/docs/Web/CSS/@keyframes)-Block sehen wir, dass sich Alices Farbe nach 30% jedes Durchlaufs (etwa nach 0,9 Sekunden) von schwarz in ein tiefes Burgunderrot ändert und am Ende des Durchlaufs zurückwechselt.

### Verschieben nach JavaScript

Nun versuchen wir, die gleiche Animation mit der Web Animations API zu erstellen.

#### Repräsentation von Keyframes

Das erste, was wir brauchen, ist die Erstellung eines [Keyframe-Objekts](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats), das unserem CSS [@keyframes](/de/docs/Web/CSS/@keyframes)-Block entspricht:

```js
const aliceTumbling = [
  { transform: "rotate(0) translate3D(-50%, -50%, 0)", color: "#000" },
  { color: "#431236", offset: 0.3 },
  { transform: "rotate(360deg) translate3D(-50%, -50%, 0)", color: "#000" },
];
```

Hier verwenden wir ein Array, das mehrere Objekte enthält. Jedes Objekt repräsentiert einen Schlüssel aus dem ursprünglichen CSS. Anders als bei CSS muss die Web Animations API jedoch nicht explizit die Prozentsätze angeben, zu denen die Schlüssel in der Animation angezeigt werden sollen. Sie teilt die Animation automatisch in gleiche Teile basierend auf der Anzahl der angegebenen Schlüssel auf. Dies bedeutet, dass ein Keyframe-Objekt mit drei Schlüsseln den mittleren Schlüssel bei 50% jedes Animationsdurchlaufs abspielen wird, sofern nichts anderes angegeben ist.

Wenn wir explizit einen Versatz eines Schlüssels von den anderen angeben möchten, können wir ihn direkt im Objekt spezifizieren, getrennt von der Deklaration durch ein Komma. Im obigen Beispiel, um sicherzustellen, dass sich Alices Farbe bei 30% (nicht 50%) für die Farbänderung ändert, geben wir ihm `offset: 0.3`.

Derzeit sollten mindestens zwei Keyframes angegeben werden (die Start- und Endzustände der Animationssequenz darstellen). Wenn Ihre Keyframe-Liste nur einen Eintrag hat, kann [`Element.animate()`](/de/docs/Web/API/Element/animate) in einigen Browsern einen `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException) auslösen, bis sie aktualisiert werden.

Zusammenfassend: Die Schlüssel sind standardmäßig gleichmäßig verteilt, es sei denn, Sie geben einen Versatz an einem Schlüssel an. Praktisch, oder?

#### Repräsentation von Zeiteigenschaften

Wir müssen auch ein Objekt mit Zeiteigenschaften erstellen, das den Werten in Alices Animation entspricht:

```js
const aliceTiming = {
  duration: 3000,
  iterations: Infinity,
};
```

Sie werden einige Unterschiede bemerken, wie äquivalente Werte in CSS dargestellt werden:

- Zum einen ist die Dauer in Millisekunden statt in Sekunden — 3000 statt 3s. Genau wie bei [`setTimeout()`](/de/docs/Web/API/SetTimeout) und [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) akzeptiert die Web Animations API nur Millisekunden.
- Des Weiteren fällt auf, dass es `iterations` statt `iteration-count` ist.

> [!NOTE]
> Es gibt eine Reihe von kleinen Unterschieden zwischen der in CSS-Animationen verwendeten Terminologie und der in Web-Animationen verwendeten Terminologie. Beispielsweise verwendet Web Animations den String `"infinite"` nicht, sondern stattdessen das JavaScript-Schlüsselwort `Infinity`. Und anstelle von `timing-function` verwenden wir `easing`. Wir geben hier keinen `easing`-Wert an, weil, anders als bei CSS-Animationen, wo die Standard-[animation-timing-function](/de/docs/Web/CSS/animation-timing-function) `ease` ist, das Standard-Easing bei der Web Animations API `linear` ist — was wir hier wollen.

#### Die Teile zusammenfügen

Jetzt ist es Zeit, beides mit der [`Element.animate()`](/de/docs/Web/API/Element/animate)-Methode zusammenzubringen:

```js
document.getElementById("alice").animate(aliceTumbling, aliceTiming);
```

Und bumm: Die Animation beginnt zu spielen (sehen Sie sich die fertige [Version auf Codepen](https://codepen.io/rachelnabors/pen/rxpmJL) an).

Die `animate()`-Methode kann bei jedem DOM-Element aufgerufen werden, das mit CSS animiert werden könnte. Und sie kann auf verschiedene Arten geschrieben werden. Anstatt Objekte für Keyframes und Zeiteigenschaften zu erstellen, könnten wir ihre Werte direkt übergeben, so:

```js
document.getElementById("alice").animate(
  [
    { transform: "rotate(0) translate3D(-50%, -50%, 0)", color: "#000" },
    { color: "#431236", offset: 0.3 },
    { transform: "rotate(360deg) translate3D(-50%, -50%, 0)", color: "#000" },
  ],
  {
    duration: 3000,
    iterations: Infinity,
  },
);
```

Außerdem, wenn wir nur die Dauer der Animation und nicht ihre Iterationen angeben möchten (standardmäßig wiederholen sich Animationen einmal), könnten wir nur die Millisekunden übergeben:

```js
document.getElementById("alice").animate(
  [
    { transform: "rotate(0) translate3D(-50%, -50%, 0)", color: "#000" },
    { color: "#431236", offset: 0.3 },
    { transform: "rotate(360deg) translate3D(-50%, -50%, 0)", color: "#000" },
  ],
  3000,
);
```

## Steuerung der Wiedergabe mit play(), pause(), reverse() und updatePlaybackRate()

Während wir CSS-Animationen mit der Web Animations API schreiben können, liegt der eigentliche Nutzen der API in der Manipulation der Anspielung der Animation. Die Web Animations API bietet mehrere nützliche Methoden zur Steuerung der Wiedergabe. Werfen wir einen Blick darauf, wie Sie Animationen im Spiel "Wachsend/Schrumpfend Alice" anhalten und abspielen (sehen Sie sich den [vollständigen Code auf Codepen](https://codepen.io/rachelnabors/pen/PNYGZQ) an):

[![Das Wachstum- und Schrumpfspiel mit Alice spielen.](growing-shrinking_article_optimized.gif)](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010)

In diesem Spiel hat Alice eine Animation, die sie von klein zu groß macht, was wir über eine Flasche und einen Cupcake steuern. Beide haben ihre eigenen Animationen.

### Anhalten und Abspielen von Animationen

Wir werden später mehr über Alices Animation sprechen, aber vorerst schauen wir uns die Animation des Cupcakes genauer an:

```js
const nommingCake = document
  .getElementById("eat-me_sprite")
  .animate(
    [{ transform: "translateY(0)" }, { transform: "translateY(-80%)" }],
    {
      fill: "forwards",
      easing: "steps(4, end)",
      duration: aliceChange.effect.getComputedTiming().duration / 2,
    },
  );
```

Die [`Element.animate()`](/de/docs/Web/API/Element/animate)-Methode wird sofort ausgeführt, nachdem sie aufgerufen wurde. Um zu verhindern, dass der Kuchen sich selbst ausführt, bevor der Benutzer die Gelegenheit hat, darauf zu klicken, rufen wir [`Animation.pause()`](/de/docs/Web/API/Animation/pause) sofort darauf auf, nachdem sie definiert ist, wie folgt:

```js
nommingCake.pause();
```

Wir können jetzt die Methode [`Animation.play()`](/de/docs/Web/API/Animation/play) verwenden, um sie zu jedem gewünschten Zeitpunkt auszuführen:

```js
nommingCake.play();
```

Speziell möchten wir es mit Alices Animation verknüpfen, damit sie größer wird, während der Cupcake gegessen wird. Dies können wir mit der folgenden Funktion erreichen:

```js
const growAlice = () => {
  // Play Alice's animation.
  aliceChange.play();

  // Play the cake's animation.
  nommingCake.play();
};
```

Wenn ein Benutzer seine Maus gedrückt hält oder seinen Finger auf dem Kuchen auf einem Touchscreen drückt, können wir jetzt `growAlice` aufrufen, um alle Animationen abzuspielen:

```js
cake.addEventListener("mousedown", growAlice, false);
cake.addEventListener("touchstart", growAlice, false);
```

### Andere nützliche Methoden

Zusätzlich zu Pause und Play können wir die folgenden Animationsmethoden verwenden:

- [`Animation.finish()`](/de/docs/Web/API/Animation/finish) überspringt zum Ende der Animation.
- [`Animation.cancel()`](/de/docs/Web/API/Animation/cancel) bricht die Animation ab und entfernt ihre Effekte.
- [`Animation.reverse()`](/de/docs/Web/API/Animation/reverse) setzt die Wiedergabegeschwindigkeit der Animation ([`Animation.playbackRate`](/de/docs/Web/API/Animation/playbackRate)) auf einen negativen Wert, sodass sie rückwärts läuft.

Sehen wir uns zuerst `playbackRate` an — ein negativer `playbackRate` lässt eine Animation rückwärts ablaufen. Wenn Alice aus der Flasche trinkt, wird sie kleiner. Dies liegt daran, dass die Flasche ihre Wiedergabegeschwindigkeit von 1 auf -1 ändert:

```js
const shrinkAlice = () => {
  aliceChange.playbackRate = -1;
  aliceChange.play();
};

bottle.addEventListener("mousedown", shrinkAlice, false);
bottle.addEventListener("touchstart", shrinkAlice, false);
```

In [Through the Looking-Glass](https://en.wikipedia.org/wiki/Through_the_Looking-Glass) reist Alice in eine Welt, in der sie rennen muss, um an Ort und Stelle zu bleiben — und doppelt so schnell rennen muss, um sich vorwärts zu bewegen! Im Beispiel des Rennens der Roten Königin rennen Alice und die Rote Königin, um an Ort und Stelle zu bleiben (siehe den [vollständigen Code auf Codepen](https://codepen.io/rachelnabors/pen/PNGGaV)):

[![Alice und die Rote Königin rennen, um das nächste Quadrat zu erreichen, in diesem Spiel.](red-queen-race_optimized.gif)](https://codepen.io/rachelnabors/pen/PNGGaV)

Da kleine Kinder im Gegensatz zu Automaten-Schachfiguren leicht ermüden, verlangsamt sich Alice ständig. Dies können wir tun, indem wir einen Abfall bei ihrer Wiedergabegeschwindigkeit einstellen. Wir verwenden `updatePlaybackRate()` anstelle der direkten Einstellung der Wiedergabegeschwindigkeit, da dies ein sanftes Update ermöglicht:

```js
setInterval(() => {
  // Make sure the playback rate never falls below .4
  if (redQueen_alice.playbackRate > 0.4) {
    redQueen_alice.updatePlaybackRate(redQueen_alice.playbackRate * 0.9);
  }
}, 3000);
```

Aber das Anfeuern durch Klicken oder Tippen führt dazu, dass sie durch das Multiplizieren ihrer Wiedergabe-Ablaufgeschwindigkeit schneller werden:

```js
const goFaster = () => {
  redQueen_alice.updatePlaybackRate(redQueen_alice.playbackRate * 1.1);
};

document.addEventListener("click", goFaster);
document.addEventListener("touchstart", goFaster);
```

Die Hintergrundelemente haben ebenfalls `playbackRate`s, die beim Klicken oder Tippen beeinflusst werden. Was passiert, wenn Sie Alice und die Rote Königin doppelt so schnell laufen lassen? Was passiert, wenn Sie sie langsamer werden lassen?

## Persistieren von Animationsstilen

Beim Animieren von Elementen ist es ein häufiger Anwendungsfall, den Endzustand der Animation beizubehalten, nachdem die Animation abgeschlossen ist. Eine Methode, die manchmal dafür verwendet wird, ist das Setzen des [fill mode](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) der Animation auf `forwards`. Es wird jedoch nicht empfohlen, Fill-Modi zu verwenden, um den Effekt einer Animation unbegrenzt zu behalten, aus zwei Gründen:

- Der Browser muss den Zustand der Animation beibehalten, während sie noch aktiv ist, sodass die Animation weiterhin Ressourcen verbraucht, auch wenn sie nicht mehr animiert. Beachten Sie, dass dies etwas abgemildert wird, indem der Browser [automatisch Füll-Animationen entfernt](#automatisches_entfernen_von_füll-animationen).
- Von Animationen angewendete Stile haben eine [höhere Priorität in der Kaskade](/de/docs/Web/CSS/Cascade#cascading_order) als festgelegte Stile, sodass es schwierig sein kann, sie bei Bedarf zu überschreiben.

Ein besserer Ansatz ist die Verwendung der Methode [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles). Diese schreibt die berechneten Werte der aktuellen Stile der Animation in das [`style`](/de/docs/Web/HTML/Global_attributes#style)-Attribut ihres Zielelements, danach kann das Element normal neu gestylt werden.

## Automatisches Entfernen von Füll-Animationen

Es ist möglich, eine große Anzahl von Animationen auf demselben Element auszulösen. Wenn sie unbegrenzt sind (d.h. mit Vorwärtsfüllung), kann dies zu einer enormen Animationsliste führen, die ein Speicherleck verursachen könnte. Aus diesem Grund entfernen Browser automatisch Füll-Animationen, nachdem sie durch neuere Animationen ersetzt werden, es sei denn, der Entwickler gibt ausdrücklich an, sie beizubehalten.

Animationen werden entfernt, wenn alle folgenden Bedingungen erfüllt sind:

- Die Animation füllt (ihr `fill` ist `forwards`, wenn sie vorwärts läuft, `backwards`, wenn sie rückwärts läuft, oder `both`).
- Die Animation ist abgeschlossen. (Beachten Sie, dass sie aufgrund des `fill` weiterhin wirksam ist.)
- Die Animationstimeline steigt monoton an. (Dies ist immer wahr für [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline); andere Timelines wie {{cssxref("scroll-timeline")}} können rückwärts laufen.)
- Die Animation wird nicht durch deklarative Markup wie CSS gesteuert.
- Jede Styling-Wirkung des [`AnimationEffect`](/de/docs/Web/API/AnimationEffect) der Animation wird von einer anderen Animation überschrieben, die ebenfalls alle oben genannten Bedingungen erfüllt. (Typischerweise, wenn zwei Animationen dieselbe Stileigenschaft des gleichen Elements setzen würden, überschreibt die später erstellte die andere.)

Die ersten vier Bedingungen stellen sicher, dass sich der Effekt der Animation ohne Eingreifen durch JavaScript-Code niemals ändern oder enden wird. Die letzte Bedingung stellt sicher, dass die Animation niemals tatsächlich den Stil eines Elements beeinflussen wird: Sie wurde vollständig ersetzt.

Wenn die Animation automatisch entfernt wird, wird das [`remove`](/de/docs/Web/API/Animation/remove_event) Ereignis der Animation ausgelöst.

Um zu verhindern, dass der Browser Animationen automatisch entfernt, rufen Sie die [`persist()`](/de/docs/Web/API/Animation/persist)-Methode der Animation auf.

Die [`animation.replaceState`](/de/docs/Web/API/Animation/replaceState)-Eigenschaft der Animation wird `removed` sein, wenn die Animation entfernt wurde, `persisted`, wenn Sie [`persist()`](/de/docs/Web/API/Animation/persist) auf die Animation aufgerufen haben, oder `active` sonst.

## Informationen aus Animationen abrufen

Stellen Sie sich andere Möglichkeiten vor, wie wir `playbackRate` nutzen könnten, z. B. um die Zugänglichkeit für Benutzer mit vestibulären Störungen zu verbessern, indem wir ihnen erlauben, Animationen auf einer gesamten Website zu verlangsamen. Das ist mit CSS nicht möglich, ohne die Dauern in jeder CSS-Regel neu zu berechnen, aber mit der Web Animations API könnten wir die [`Document.getAnimations`](/de/docs/Web/API/Document/getAnimations)-Methode verwenden, um über jede Animation auf der Seite zu gehen und ihre `playbackRate`s zu halbieren, wie folgt:

```js
document.getAnimations().forEach((animation) => {
  animation.updatePlaybackRate(animation.playbackRate * 0.5);
});
```

Mit der Web Animations API müssen Sie nur eine kleine Eigenschaft ändern!

Ein weiteres Problem, das mit CSS-Animationen allein schwer zu lösen ist, ist das Erstellen von Abhängigkeiten von Werten, die von anderen Animationen bereitgestellt werden. Zum Beispiel in dem Spielbeispiel "Wachsend und Schrumpfend Alice" könnten Sie etwas Seltsames an der Dauer des Kuchens bemerkt haben:

```js
document.getElementById("eat-me_sprite").animate([], {
  duration: aliceChange.effect.timing.duration / 2,
});
```

Um zu verstehen, was passiert, werfen wir einen Blick auf Alices Animation:

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

Alices Animation lässt sie von der halben Größe zur doppelten Größe über 8 Sekunden anwachsen. Dann pausieren wir sie:

```js
aliceChange.pause();
```

Wenn wir sie am Anfang ihrer Animation pausiert hätten, wäre sie am Anfang ihrer Animation auf halber Höhe, als ob sie bereits die ganze Flasche getrunken hätte! Wir möchten, dass ihre Animation im mittleren Zustand startet, sodass sie bereits auf halber Höhe ist. Wir könnten dies tun, indem wir ihre [`Animation.currentTime`](/de/docs/Web/API/Animation/currentTime) auf 4 Sekunden setzen:

```js
aliceChange.currentTime = 4000;
```

Aber während der Arbeit an dieser Animation könnten wir Alices Dauer oft ändern. Wäre es nicht besser, ihre `currentTime` dynamisch festzulegen, damit wir nicht zwei Updates gleichzeitig vornehmen müssen? Wir können dies tatsächlich tun, indem wir auf die [`Animation.effect`](/de/docs/Web/API/Animation/effect)-Eigenschaft von aliceChange verweisen, die ein Objekt mit allen Details zu den auf Alice aktiven Effekten zurückgibt:

```js
aliceChange.currentTime = aliceChange.effect.getComputedTiming().duration / 2;
```

`effect` ermöglicht es uns, auf die Keyframes und Zeiteigenschaften der Animation zuzugreifen — `aliceChange.effect.getComputedTiming()` zeigt auf Alices Timing-Objekt — dies enthält ihre [`duration`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect). Wir können ihre Dauer in zwei Teile teilen, um den Mittelpunkt ihrer Animationstimeline zu erreichen, wodurch sie auf normale Größe gesetzt wird. Jetzt können wir ihre Animation in beide Richtungen umkehren und abspielen, um sie kleiner oder größer zu machen!

Und wir können dasselbe tun, wenn wir die Dauer des Kuchens und der Flasche festlegen:

```js
const drinking = document
  .getElementById("liquid")
  .animate([{ height: "100%" }, { height: "0" }], {
    fill: "forwards",
    duration: aliceChange.effect.getComputedTiming().duration / 2,
  });
drinking.pause();
```

Jetzt sind alle drei Animationen nur an eine Dauer gebunden, die wir leicht an einer Stelle ändern können.

Wir können auch die Web Animations API verwenden, um die aktuelle Zeit der Animation herauszufinden. Das Spiel endet, wenn Sie keinen Kuchen mehr haben oder die Flasche leer sind. Welche Szene den Spielern präsentiert wird, hängt davon ab, wie weit Alice in ihrer Animation fortgeschritten ist, ob sie zu groß geworden ist und nicht mehr durch die kleine Tür passt oder zu klein geworden ist und den Schlüssel nicht erreichen kann, um die Tür zu öffnen. Wir können herausfinden, ob sie am Ende ihrer Animation groß oder klein ist, indem wir die [`currentTime`](/de/docs/Web/API/Animation/currentTime) ihrer Animation holen und durch ihre `activeDuration` teilen:

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

## Rückrufe und Versprechen

CSS-Animationen und -Übergänge haben ihre eigenen Event-Listener, und diese sind auch mit der Web Animations API möglich:

- [`onfinish`](/de/docs/Web/API/Animation/finish_event) ist der Event-Handler für das `finish`-Ereignis und kann manuell mit [`finish()`](/de/docs/Web/API/Animation/finish) ausgelöst werden.
- [`oncancel`](/de/docs/Web/API/Animation/cancel_event) ist der Event-Handler für das `cancel`-Ereignis und kann mit [`cancel()`](/de/docs/Web/API/Animation/cancel) ausgelöst werden.

Hier setzen wir die Rückrufe für den Kuchen, die Flasche und Alice, um die `endGame`-Funktion auszuführen:

```js
// When the cake or bottle runs out
nommingCake.onfinish = endGame;
drinking.onfinish = endGame;

// Alice reaches the end of her animation
aliceChange.onfinish = endGame;
```

Noch besser, die Web Animations API bietet auch ein [`finished`](/de/docs/Web/API/Animation/finished) Versprechen, das aufgelöst wird, wenn die Animation abgeschlossen ist, oder abgelehnt wird, wenn sie abgebrochen wird.

## Fazit

Dies sind die Grundfunktionen der Web Animations API. Sie sollten nun bereit sein, "den Kaninchenbau hinunterzuspringen" und im Browser Animationen zu erstellen und Ihre eigenen Animationsexperimente zu schreiben!

## Siehe auch

- Die [vollständige Suite von Alice im Wunderland Demos](https://codepen.io/collection/nqNJvD) auf CodePen zum Spielen, Forken und Teilen.
- [Animating like you just don't care with Element.animate](https://hacks.mozilla.org/2016/08/animating-like-you-just-dont-care-with-element-animate/) (2016) Erklärt den Hintergrund der Web Animations API und warum sie leistungsfähiger als andere Web-Animationenmethoden ist.
