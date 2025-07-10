---
title: Nutzung der Web Animations API
slug: Web/API/Web_Animations_API/Using_the_Web_Animations_API
l10n:
  sourceCommit: 594ae0d4ffb6326a9529fe366d30ca633309ee30
---

{{DefaultAPISidebar("Web Animations")}}

Die Web Animations API ermöglicht es uns, Animationen zu erstellen und deren Wiedergabe mit JavaScript zu steuern. Dieser Artikel wird Sie in die richtige Richtung mit unterhaltsamen Demos und Tutorials mit Alice im Wunderland führen.

## Einführung in die Web Animations API

Die [Web Animations API](/de/docs/Web/API/Web_Animations_API) öffnet das Animations-Engine des Browsers für Entwickler und die Manipulation durch JavaScript. Diese API wurde entwickelt, um Implementierungen von sowohl [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) als auch [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) zu unterstützen und lässt die Tür für zukünftige Animationseffekte offen. Sie ist eine der performantesten Methoden, um im Web zu animieren, da der Browser interne Optimierungen ohne Tricks, Zwang oder [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) durchführen kann.

Mit der Web Animations API können wir interaktive Animationen von Stylesheets in JavaScript verschieben, sodass Präsentation und Verhalten getrennt sind. Wir müssen nicht mehr auf aufwendige DOM-Techniken zurückgreifen, wie das Schreiben von CSS-Eigenschaften und das Zuweisen von Klassen zu Elementen, um die Wiedergaberichtung zu steuern. Und im Gegensatz zu rein deklarativem CSS ermöglicht es uns JavaScript, Werte dynamisch von Eigenschaften bis zu Dauer zu setzen. Für den Aufbau von benutzerdefinierten Animationsbibliotheken und die Erstellung interaktiver Animationen könnte die Web Animations API das perfekte Werkzeug sein. Schauen wir uns an, was sie kann!

## Schreiben von CSS-Animationen mit der Web Animations API

Eine der vertrauteren Methoden, die Web Animations API zu erlernen, besteht darin, mit etwas zu beginnen, mit dem die meisten Webentwickler bereits gespielt haben: CSS-Animationen. CSS-Animationen haben eine vertraute Syntax, die sich gut für Demonstrationszwecke eignet.

### Die CSS-Version

Hier ist eine taumelnde Animation, die in CSS geschrieben wurde und Alice zeigt, die in das Kaninchenloch fällt, das ins Wunderland führt (sehen Sie sich den vollständigen [Code auf CodePen](https://codepen.io/rachelnabors/pen/QyOqqW) an):

[![Alice Tumbling down the rabbit's hole.](tumbling-alice_optimized.gif)](https://codepen.io/rachelnabors/pen/rxpmJL)

Beachten Sie, dass sich der Hintergrund bewegt, Alice sich dreht und ihre Farbe sich versetzt zu ihrer Drehung ändert. In diesem Tutorial konzentrieren wir uns nur auf Alice. Hier ist das vereinfachte CSS, das Alices Animation steuert:

```css
#alice {
  animation: aliceTumbling infinite 3s linear;
}

@keyframes aliceTumbling {
  0% {
    color: #000;
    transform: rotate(0) translate3d(-50%, -50%, 0);
  }
  30% {
    color: #431236;
  }
  100% {
    color: #000;
    transform: rotate(360deg) translate3d(-50%, -50%, 0);
  }
}
```

Dies ändert Alices Farbe und die Rotation ihrer Transformation über 3 Sekunden mit einer konstanten (linearen) Geschwindigkeit und läuft unendlich. Im {{cssxref("@keyframes")}} Block sehen wir, dass 30% durch jede Schleife (etwa 0,9 Sekunden), Alices Farbe von Schwarz zu einem tiefen Burgund wechselt und wieder zurück bis zum Ende der Schleife.

### Verschieben in JavaScript

Nun versuchen wir, dieselbe Animation mit der Web Animations API zu erstellen.

#### Keyframes darstellen

Das erste, was wir brauchen, ist ein [Keyframe-Objekt](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats) zu erstellen, das unserem CSS {{cssxref("@keyframes")}} Block entspricht:

```js
const aliceTumbling = [
  { transform: "rotate(0) translate3d(-50%, -50%, 0)", color: "#000" },
  { color: "#431236", offset: 0.3 },
  { transform: "rotate(360deg) translate3d(-50%, -50%, 0)", color: "#000" },
];
```

Hier verwenden wir ein Array, das mehrere Objekte enthält. Jedes Objekt repräsentiert einen Schlüssel aus dem ursprünglichen CSS. Im Gegensatz zu CSS muss die Web Animations API jedoch nicht explizit angeben, bei welchem Prozentsatz der Animation jeder Schlüssel erscheinen soll. Sie teilt die Animation automatisch in gleiche Teile basierend auf der Anzahl der angegebenen Schlüssel auf. Das bedeutet, dass ein Keyframe-Objekt mit drei Schlüsseln den mittleren Schlüssel in der Mitte jedes Animationsdurchlaufs abspielen wird, sofern nicht anders angegeben.

Wenn wir explizit den Versatz eines Schlüssels von den anderen Schlüsseln festlegen möchten, können wir direkt im Objekt einen Versatz angeben, getrennt von der Deklaration durch ein Komma. Im obigen Beispiel, um sicherzustellen, dass sich Alices Farbe bei 30% (nicht 50%) für die Farbänderung ändert, geben wir `offset: 0.3` an.

Derzeit sollten mindestens zwei Keyframes spezifiziert werden (die Start- und Endzustände der Animationssequenz darstellen). Wenn Ihre Keyframe-Liste nur einen Eintrag enthält, könnte [`Element.animate()`](/de/docs/Web/API/Element/animate) in einigen Browsern einen `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException) werfen, bis sie aktualisiert werden.

Zusammengefasst sind die Schlüssel standardmäßig gleichmäßig verteilt, es sei denn, Sie geben einen Offset bei einem Schlüssel an. Praktisch, oder?

#### Timing-Eigenschaften darstellen

Wir müssen auch ein Objekt von Timing-Eigenschaften erstellen, das den Werten in Alices Animation entspricht:

```js
const aliceTiming = {
  duration: 3000,
  iterations: Infinity,
};
```

Sie werden einige Unterschiede feststellen, wie äquivalente Werte in CSS dargestellt sind:

- Zum einen ist die Dauer in Millisekunden statt Sekunden — 3000 statt 3s. Wie [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), nimmt die Web Animations API nur Millisekunden.
- Das andere, das Sie bemerken werden, ist, dass es `iterations` ist, nicht `iteration-count`.

> [!NOTE]
> Es gibt einige kleine Unterschiede zwischen der in CSS-Animationen verwendeten Terminologie und der in Web Animationen verwendeten Terminologie. Zum Beispiel verwendet Web Animations nicht den String `"infinite"`, sondern stattdessen das JavaScript-Schlüsselwort `Infinity`. Und statt `timing-function` verwenden wir `easing`. Wir führen hier keinen `easing`-Wert auf, weil, im Gegensatz zu CSS-Animationen, wo der Standardwert für {{cssxref("animation-timing-function")}} `ease` ist, ist das Standard-`Easing` in der Web Animations API `linear` — was hier erwünscht ist.

#### Die Teile zusammenbringen

Jetzt ist es an der Zeit, sie beide mit der [`Element.animate()`](/de/docs/Web/API/Element/animate) Methode zusammenzubringen:

```js
document.getElementById("alice").animate(aliceTumbling, aliceTiming);
```

Und boom: die Animation beginnt zu spielen (sehen Sie sich die fertige [Version auf CodePen](https://codepen.io/rachelnabors/pen/rxpmJL) an).

Die `animate()` Methode kann auf jedes DOM-Element aufgerufen werden, das mit CSS animiert werden kann. Und sie kann auf mehrere Arten geschrieben werden. Anstatt Objekte für Keyframes und Timing-Eigenschaften zu erstellen, könnten wir ihre Werte direkt übergeben, so:

```js
document.getElementById("alice").animate(
  [
    { transform: "rotate(0) translate3d(-50%, -50%, 0)", color: "#000" },
    { color: "#431236", offset: 0.3 },
    { transform: "rotate(360deg) translate3d(-50%, -50%, 0)", color: "#000" },
  ],
  {
    duration: 3000,
    iterations: Infinity,
  },
);
```

Außerdem, wenn wir nur die Dauer der Animation und nicht ihre Iterationen angeben möchten (standardmäßig iterieren Animationen einmal), könnten wir einfach die Millisekunden allein übergeben:

```js
document.getElementById("alice").animate(
  [
    { transform: "rotate(0) translate3d(-50%, -50%, 0)", color: "#000" },
    { color: "#431236", offset: 0.3 },
    { transform: "rotate(360deg) translate3d(-50%, -50%, 0)", color: "#000" },
  ],
  3000,
);
```

## Steuerung der Wiedergabe mit play(), pause(), reverse() und updatePlaybackRate()

Während wir CSS-Animationen mit der Web Animations API schreiben können, ist die API wirklich nützlich, wenn es um die Manipulation der Wiedergabe der Animation geht. Die Web Animations API bietet mehrere nützliche Methoden zur Steuerung der Wiedergabe. Werfen wir einen Blick auf das Pausieren und Spielen von Animationen im Wachsenden/Schrumpfenden Alice-Spiel (sehen Sie sich den [vollen Code auf CodePen](https://codepen.io/rachelnabors/pen/PNYGZQ) an):

[![Playing the growing and shrinking game with Alice.](growing-shrinking_article_optimized.gif)](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010)

In diesem Spiel hat Alice eine Animation, die sie von klein zu groß macht, die wir über eine Flasche und einen Cupcake steuern. Beide haben ihre eigenen Animationen.

### Pausieren und Abspielen von Animationen

Wir werden später mehr über Alices Animation sprechen, aber lassen Sie uns zunächst die Animation des Cupcakes näher ansehen:

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

Die [`Element.animate()`](/de/docs/Web/API/Element/animate) Methode wird sofort nach ihrer Aufrufung ausgeführt. Um zu verhindern, dass der Kuchen sich selbst aufisst, bevor der Nutzer die Gelegenheit hatte, darauf zu klicken, rufen wir sofort nach der Definition [`Animation.pause()`](/de/docs/Web/API/Animation/pause) auf, so:

```js
nommingCake.pause();
```

Wir können jetzt die [`Animation.play()`](/de/docs/Web/API/Animation/play) Methode verwenden, um es zu starten, wann immer wir bereit sind:

```js
nommingCake.play();
```

Wir möchten es speziell mit Alices Animation verknüpfen, sodass sie größer wird, während der Cupcake gegessen wird. Dies können wir durch die folgende Funktion erreichen:

```js
const growAlice = () => {
  // Play Alice's animation.
  aliceChange.play();

  // Play the cake's animation.
  nommingCake.play();
};
```

Wenn ein Benutzer seine Maus gedrückt hält oder seinen Finger auf den Kuchen auf einem Touchscreen drückt, können wir jetzt `growAlice` aufrufen, um alle Animationen abzuspielen:

```js
cake.addEventListener("mousedown", growAlice, false);
cake.addEventListener("touchstart", growAlice, false);
```

### Weitere nützliche Methoden

Zusätzlich zum Pausieren und Abspielen können wir die folgenden Animationsmethoden verwenden:

- [`Animation.finish()`](/de/docs/Web/API/Animation/finish) springt zum Ende der Animation.
- [`Animation.cancel()`](/de/docs/Web/API/Animation/cancel) bricht die Animation ab und entfernt ihre Effekte.
- [`Animation.reverse()`](/de/docs/Web/API/Animation/reverse) setzt die Wiedergabegeschwindigkeit der Animation ([`Animation.playbackRate`](/de/docs/Web/API/Animation/playbackRate)) auf einen negativen Wert, sodass sie rückwärts läuft.

Sehen wir uns zuerst `playbackRate` an – eine negative playbackRate lässt eine Animation rückwärts laufen. Wenn Alice aus der Flasche trinkt, wird sie kleiner. Dies liegt daran, dass die Flasche ihre Wiedergabegeschwindigkeit von 1 auf -1 ändert:

```js
const shrinkAlice = () => {
  aliceChange.playbackRate = -1;
  aliceChange.play();
};

bottle.addEventListener("mousedown", shrinkAlice, false);
bottle.addEventListener("touchstart", shrinkAlice, false);
```

Im [Hinter den Spiegeln](https://en.wikipedia.org/wiki/Through_the_Looking-Glass) reist Alice in eine Welt, in der sie rennen muss, um an Ort und Stelle zu bleiben — und doppelt so schnell rennen muss, um sich fortzubewegen! Im Beispiel des Rennens der Roten Königin rennen Alice und die Rote Königin, um an Ort und Stelle zu bleiben (sehen Sie sich den [vollen Code auf CodePen](https://codepen.io/rachelnabors/pen/PNGGaV) an):

[![Alice und die Rote Königin rennen, um das nächste Feld in diesem Spiel zu erreichen.](red-queen-race_optimized.gif)](https://codepen.io/rachelnabors/pen/PNGGaV)

Da kleine Kinder im Gegensatz zu automatischen Schachfiguren leicht ermüden, wird Alice ständig langsamer. Wir können dies tun, indem wir einen Verfall auf ihrer Wiedergabegeschwindigkeit `playbackRate` setzen. Wir verwenden `updatePlaybackRate()` anstelle der direkten Einstellung der Wiedergabegeschwindigkeit, da dies ein sanftes Update bewirkt:

```js
setInterval(() => {
  // Make sure the playback rate never falls below .4
  if (redQueen_alice.playbackRate > 0.4) {
    redQueen_alice.updatePlaybackRate(redQueen_alice.playbackRate * 0.9);
  }
}, 3000);
```

Aber sie durch Klicken oder Tippen anzutreiben, lässt sie schneller laufen, indem ihre Wiedergabegeschwindigkeit multipliziert wird:

```js
const goFaster = () => {
  redQueen_alice.updatePlaybackRate(redQueen_alice.playbackRate * 1.1);
};

document.addEventListener("click", goFaster);
document.addEventListener("touchstart", goFaster);
```

Die Hintergrundelemente haben auch `playbackRate`s, die beim Klicken oder Tippen beeinflusst werden. Was passiert, wenn Sie Alice und die Rote Königin doppelt so schnell laufen lassen? Was passiert, wenn Sie sie langsamer werden lassen?

## Persistente Animationsstile

Beim Animieren von Elementen ist ein häufiger Anwendungsfall, den Endzustand der Animation nach ihrem Ende zu erhalten. Eine Methode, die manchmal hierfür verwendet wird, besteht darin, den [Füllmodus der Animation](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) auf `forwards` zu setzen. Allerdings wird nicht empfohlen, Füllmodi zu verwenden, um den Effekt einer Animation auf unbestimmte Zeit zu erhalten, aus zwei Gründen:

- Der Browser muss den Zustand der Animation aufrechterhalten, solange sie noch aktiv ist, sodass die Animation weiterhin Ressourcen verbraucht, obwohl sie nicht mehr animiert wird. Beachten Sie, dass dies durch das automatische Entfernen von Füllanimationsen durch den Browser [automatisch entfernen von Füllanimationsen](#automatisches_entfernen_von_füllanimationsen) etwas gelindert wird.
- Von Animationen angewendete Stile haben eine [höhere Priorität in der Wasserfallkaskade](/de/docs/Web/CSS/CSS_cascade/Cascade#cascading_order) als spezifizierte Stile, daher kann es schwierig sein, sie bei Bedarf zu überschreiben.

Ein besserer Ansatz ist die Verwendung der Methode [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles). Diese schreibt die berechneten Werte der aktuellen Stile der Animation in das [`style`](/de/docs/Web/HTTP/Reference/Global_attributes/style) Attribut ihres Zielelements, nach dem das Element normal umgestylt werden kann.

## Automatisches Entfernen von Füllanimationsen

Es ist möglich, eine große Anzahl von Animationen auf demselben Element auszulösen. Wenn diese unbestimmt sind (d.h. vorwärtsfüllend), kann dies zu einer riesigen Animationsliste führen, die ein Speicherleck verursachen könnte. Aus diesem Grund entfernen Browser Füllanimationsen automatisch, nachdem sie von neueren Animationen ersetzt wurden, es sei denn, der Entwickler gibt explizit an, sie beizubehalten.

Animationen werden entfernt, wenn alle der folgenden Bedingungen erfüllt sind:

- Die Animation ist füllend (ihr `fill` ist `forwards`, wenn sie vorwärts spielt, `backwards`, wenn sie rückwärts spielt, oder `both`).
- Die Animation ist beendet. (Beachten Sie, dass sie wegen des `fill` immer noch in Kraft ist.)
- Die Zeitleiste der Animation ist monoton steigend. (Dies ist immer wahr für [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline); andere Zeitleisten wie {{cssxref("scroll-timeline")}} können rückwärts laufen.)
- Die Animation wird nicht von deklarativem Markup wie CSS gesteuert.
- Jeder Stileffekt des [`AnimationEffect`](/de/docs/Web/API/AnimationEffect) der Animation wird von einer anderen Animation überschrieben, die ebenfalls alle oben genannten Bedingungen erfüllt. (Normalerweise wird, wenn zwei Animationen dieselbe Stileigenschaft desselben Elements setzen würden, die zuletzt erstellte die andere überschreiben.)

Die ersten vier Bedingungen stellen sicher, dass sich der Effekt der Animation ohne Eingriff durch JavaScript-Code niemals ändern oder enden wird. Die letzte Bedingung stellt sicher, dass die Animation niemals tatsächlich den Stil eines Elements beeinflussen wird: sie wurde vollständig ersetzt.

Wenn die Animation automatisch entfernt wird, wird das [`remove`](/de/docs/Web/API/Animation/remove_event) Ereignis der Animation ausgelöst.

Um zu verhindern, dass der Browser Animationen automatisch entfernt, rufen Sie die [`persist()`](/de/docs/Web/API/Animation/persist) Methode der Animation auf.

Die Eigenschaft [`replaceState`](/de/docs/Web/API/Animation/replaceState) der Animation wird `removed` sein, wenn die Animation entfernt wurde, `persisted`, wenn Sie [`persist()`](/de/docs/Web/API/Animation/persist) auf die Animation aufgerufen haben, oder `active` sonst.

## Informationen aus Animationen abrufen

Stellen Sie sich vor, wir könnten `playbackRate` auf andere Weise nutzen, beispielsweise um die Barrierefreiheit für Nutzer mit Vestibulärstörungen zu verbessern, indem wir ihnen ermöglichen, Animationen auf einer ganzen Website zu verlangsamen. Das ist mit CSS unmöglich zu tun, ohne die Dauer in jeder CSS-Regel neu zu berechnen, aber mit der Web Animations API könnten wir die [`Document.getAnimations`](/de/docs/Web/API/Document/getAnimations) Methode verwenden, um jede Animation auf der Seite durchzugehen und ihre `playbackRate`s zu halbieren, wie folgt:

```js
document.getAnimations().forEach((animation) => {
  animation.updatePlaybackRate(animation.playbackRate * 0.5);
});
```

Mit der Web Animations API müssen Sie nur eine kleine Eigenschaft ändern!

Ein weiteres, das schwer allein mit CSS-Animationen zu machen ist, ist das Erstellen von Abhängigkeiten von Werten, die von anderen Animationen bereitgestellt werden. Im Beispiel des Wachsenden und Schrumpfenden Alice-Spiels haben Sie vielleicht etwas Seltsames an der Dauer des Kuchens bemerkt:

```js
document.getElementById("eat-me_sprite").animate([], {
  duration: aliceChange.effect.timing.duration / 2,
});
```

Um zu verstehen, was hier passiert, werfen wir einen Blick auf Alices Animation:

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

Alices Animation lässt sie über 8 Sekunden von halber auf doppelte Größe gehen. Dann pausieren wir sie:

```js
aliceChange.pause();
```

Wenn wir sie am Anfang ihrer Animation pausiert hätten, würde sie mit der Hälfte ihrer Größe beginnen, als ob sie die ganze Flasche bereits getrunken hätte! Wir möchten ihren Animations-„Abspielkopf“ in der Mitte setzen, damit sie bereits zur Hälfte beendet ist. Wir könnten dies tun, indem wir ihre [`Animation.currentTime`](/de/docs/Web/API/Animation/currentTime) auf 4 Sekunden setzen, wie so:

```js
aliceChange.currentTime = 4000;
```

Aber während wir an dieser Animation arbeiten, könnten wir Alices Dauer oft ändern. Wäre es nicht besser, wenn wir ihre `currentTime` dynamisch setzen, damit wir nicht zwei Updates gleichzeitig machen müssen? Wir können dies tatsächlich tun, indem wir die Eigenschaft [`Animation.effect`](/de/docs/Web/API/Animation/effect) von aliceChange verweisen, die ein Objekt mit allen Details der auf Alice aktiven Effekte zurückgibt:

```js
aliceChange.currentTime = aliceChange.effect.getComputedTiming().duration / 2;
```

`effect` lässt uns auf die Keyframes und die Timing-Eigenschaften der Animation zugreifen - `aliceChange.effect.getComputedTiming()` verweist auf Alices Timing-Objekt - dies enthält ihre [`duration`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect). Wir können ihre Dauer halbieren, um den Mittelpunkt auf ihrer Animationszeitleiste zu erhalten und sie normal groß zu setzen. Jetzt können wir ihre Animation in beide Richtungen umkehren und abspielen lassen, um sie kleiner oder größer werden zu lassen!

Und wir können dasselbe tun, wenn wir die Dauer von Kuchen und Flasche setzen:

```js
const drinking = document
  .getElementById("liquid")
  .animate([{ height: "100%" }, { height: "0" }], {
    fill: "forwards",
    duration: aliceChange.effect.getComputedTiming().duration / 2,
  });
drinking.pause();
```

Jetzt sind alle drei Animationen mit nur einer Dauer verknüpft, die wir leicht von einem Ort aus ändern können.

Wir können die Web Animations API auch verwenden, um die aktuelle Zeit der Animation herauszufinden. Das Spiel endet, wenn Ihnen der Kuchen ausgeht, den Sie essen können, oder die Flasche leer ist. Welches Vignettenspiel den Spielern präsentiert wird, hängt davon ab, wie weit Alice in ihrer Animation war, ob sie zu groß geworden ist und nicht mehr durch die winzige Tür passt oder zu klein geworden ist und den Schlüssel nicht erreichen kann, um die Tür zu öffnen. Wir können herausfinden, ob sie am großen oder kleinen Ende ihrer Animation ist, indem wir die [`currentTime`](/de/docs/Web/API/Animation/currentTime) ihrer Animation erhalten und sie durch ihre `activeDuration` teilen:

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

- [`onfinish`](/de/docs/Web/API/Animation/finish_event) ist der Event-Handler für das `finish` Ereignis und kann manuell mit [`finish()`](/de/docs/Web/API/Animation/finish) ausgelöst werden.
- [`oncancel`](/de/docs/Web/API/Animation/cancel_event) ist der Event-Handler für das `cancel` Ereignis und kann mit [`cancel()`](/de/docs/Web/API/Animation/cancel) ausgelöst werden.

Hier setzen wir die Rückrufe für den Kuchen, die Flasche und Alice, um die `endGame` Funktion auszulösen:

```js
// When the cake or bottle runs out
nommingCake.onfinish = endGame;
drinking.onfinish = endGame;

// Alice reaches the end of her animation
aliceChange.onfinish = endGame;
```

Noch besser, die Web Animations API bietet auch ein [`finished`](/de/docs/Web/API/Animation/finished) Versprechen, das aufgelöst wird, wenn die Animation endet, oder verworfen wird, wenn sie abgebrochen wird.

## Fazit

Dies sind die grundlegenden Funktionen der Web Animations API. Jetzt sollten Sie bereit sein, "ins Kaninchenloch" der Animationen im Browser zu springen und bereit sein, Ihre eigenen Animationsexperimente zu schreiben!

## Siehe auch

- Die [vollständige Suite der Alice im Wunderland-Demos](https://codepen.io/collection/nqNJvD) auf CodePen, die Sie spielen, kopieren und teilen können.
- [Mit Element.animate animieren wie Sie sich keine Sorgen machen](https://hacks.mozilla.org/2016/08/animating-like-you-just-dont-care-with-element-animate/) (2016) erklärt den Hintergrund der Web Animations API und warum sie performanter ist als andere Web-Animationsmethoden.
