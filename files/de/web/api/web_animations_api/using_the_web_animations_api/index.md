---
title: Verwenden der Web Animations API
slug: Web/API/Web_Animations_API/Using_the_Web_Animations_API
l10n:
  sourceCommit: d5ded97c6b75937767410359c9d2b4afa8387798
---

{{DefaultAPISidebar("Web Animations")}}

Die Web Animations API ermöglicht es uns, Animationen zu erstellen und deren Wiedergabe mit JavaScript zu steuern. Dieser Artikel wird Ihnen mit unterhaltsamen Demos und Tutorials rund um Alice im Wunderland den richtigen Einstieg geben.

## Lernen Sie die Web Animations API kennen

Die [Web Animations API](/de/docs/Web/API/Web_Animations_API) öffnet die Animations-Engine des Browsers für Entwickler und ermöglicht die Manipulation durch JavaScript. Diese API wurde entwickelt, um Implementierungen sowohl von [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) als auch von [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) zu unterstützen und bietet die Möglichkeit für zukünftige Animationseffekte. Sie ist eine der leistungsfähigsten Möglichkeiten, Animationen im Web zu erstellen, da sie dem Browser erlaubt, eigene interne Optimierungen vorzunehmen, ohne Hacks, Zwang oder [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame).

Mit der Web Animations API können wir interaktive Animationen von Stylesheets in JavaScript verschieben und so Präsentation von Verhalten trennen. Wir müssen uns nicht länger auf DOM-intensive Techniken verlassen, wie das Schreiben von CSS-Eigenschaften und das Setzen von Klassen auf Elemente, um die Wiedergaberichtung zu steuern. Und anders als bei rein deklarativem CSS ermöglicht es JavaScript uns auch, Werte dynamisch von Eigenschaften bis zu Laufzeiten festzulegen. Zum Erstellen von benutzerdefinierten Animationsbibliotheken und interaktiven Animationen könnte die Web Animations API das perfekte Werkzeug sein. Lassen Sie uns sehen, was sie kann!

## CSS-Animationen mit der Web Animations API schreiben

Ein vertrauterer Ansatz, die Web Animations API zu erlernen, ist, mit etwas zu beginnen, das die meisten Webentwickler schon ausprobiert haben: CSS-Animationen. CSS-Animationen haben eine vertraute Syntax, die sich gut für Demonstrationszwecke eignet.

### Die CSS-Version

Hier ist eine stürzende Animation, die in CSS geschrieben ist und Alice zeigt, wie sie in das Kaninchenloch fällt, das ins Wunderland führt (siehe den gesamten [Code auf Codepen](https://codepen.io/rachelnabors/pen/QyOqqW)):

[![Alice stürzt in das Kaninchenloch.](tumbling-alice_optimized.gif)](https://codepen.io/rachelnabors/pen/rxpmJL)

Beachten Sie, dass sich der Hintergrund bewegt, Alice dreht sich und ihre Farbe sich versetzt zu ihrer Drehung ändert. Wir werden uns in diesem Tutorial nur auf Alice konzentrieren. Hier ist das vereinfachte CSS, das Alice' Animation steuert:

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

Dies ändert Alices Farbe und die Drehung ihrer Transformation über 3 Sekunden mit einer konstanten (linearen) Rate und wiederholt sich unendlich. Im [@keyframes](/de/docs/Web/CSS/@keyframes)-Block können wir sehen, dass sich 30 % der Schleifenzeit (etwa 0,9 Sekunden) Alices Farbe von Schwarz zu einem tiefen Burgunderrot ändert und dann bis zum Ende der Schleife zurückändert.

### Umsetzen in JavaScript

Versuchen wir nun, die gleiche Animation mit der Web Animations API zu erstellen.

#### Keyframes darstellen

Das erste, was wir brauchen, ist ein [Keyframe Object](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats), das unserem CSS [@keyframes](/de/docs/Web/CSS/@keyframes)-Block entspricht:

```js
const aliceTumbling = [
  { transform: "rotate(0) translate3D(-50%, -50%, 0)", color: "#000" },
  { color: "#431236", offset: 0.3 },
  { transform: "rotate(360deg) translate3D(-50%, -50%, 0)", color: "#000" },
];
```

Hier verwenden wir ein Array, das mehrere Objekte enthält. Jedes Objekt stellt einen Schlüssel aus dem ursprünglichen CSS dar. Anders als CSS muss die Web Animations API jedoch nicht explizit über die Prozentsätze informiert werden, wann jeder Schlüssel erscheinen soll. Sie teilt die Animation automatisch in gleiche Teile basierend auf der Anzahl der gegebenen Schlüssel. Das bedeutet, dass ein Keyframe-Objekt mit drei Schlüsseln den mittleren Schlüssel bei 50 % der Animationsschleife abspielt, es sei denn, es wird anders angegeben.

Wenn wir explizit den Abstand eines Schlüssels von den anderen Schlüsseln festlegen möchten, können wir einen `offset` direkt im Objekt angeben, getrennt von der Deklaration durch ein Komma. Im obigen Beispiel stellen wir sicher, dass sich Alices Farbe bei 30 % (nicht 50 %) ändert, indem wir ihm `offset: 0.3` geben.

Derzeit sollten mindestens zwei Keyframes angegeben werden (die den Start- und Endzustand der Animationssequenz darstellen). Wenn Ihre Keyframe-Liste nur einen Eintrag enthält, kann [`Element.animate()`](/de/docs/Web/API/Element/animate) in einigen Browsern einen `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException) auslösen, bis diese aktualisiert sind.

Zusammengefasst: Die Schlüssel sind standardmäßig gleichmäßig verteilt, es sei denn, Sie legen einen Offset auf einem Schlüssel fest. Praktisch, nicht wahr?

#### Timing-Eigenschaften darstellen

Wir werden auch ein Objekt mit Timing-Eigenschaften erstellen müssen, das den Werten in Alices Animation entspricht:

```js
const aliceTiming = {
  duration: 3000,
  iterations: Infinity,
};
```

Sie werden einige Unterschiede zu der Darstellung entsprechender Werte in CSS bemerken:

- Zum einen ist die Dauer in Millisekunden anstatt in Sekunden — 3000 statt 3s. Wie bei [`setTimeout()`](/de/docs/Web/API/SetTimeout) und [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) nimmt die Web Animations API nur Millisekunden an.
- Der andere Unterschied ist, dass es `iterations` ist, nicht `iteration-count`.

> [!NOTE]
> Es gibt eine Reihe kleiner Unterschiede zwischen der in CSS-Animationen verwendeten Terminologie und der in Web Animations verwendeten Terminologie. Beispielsweise verwendet Web Animations den JavaScript-Schlüsselbegriff `Infinity` anstelle der Zeichenfolge `"infinite"`. Und anstelle von `timing-function` verwenden wir `easing`. Wir geben hier keinen `easing`-Wert an, weil, anders als bei CSS-Animationen, wo die Standard-[animation-timing-function](/de/docs/Web/CSS/animation-timing-function) `ease` ist, in der Web Animations API die Standardeasing `linear` ist — was wir hier wollen.

#### Die Teile zusammenbringen

Jetzt ist es an der Zeit, beides mit der [`Element.animate()`](/de/docs/Web/API/Element/animate)-Methode zusammenzuführen:

```js
document.getElementById("alice").animate(aliceTumbling, aliceTiming);
```

Und boom: Die Animation beginnt zu spielen (siehe die fertige [Version auf Codepen](https://codepen.io/rachelnabors/pen/rxpmJL)).

Die `animate()`-Methode kann auf jedes DOM-Element angewendet werden, das mit CSS animiert werden könnte. Und sie kann auf verschiedene Arten geschrieben werden. Anstatt Objekte für Keyframes und Timing-Eigenschaften zu erstellen, könnten wir ihre Werte direkt übergeben, so:

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

Noch mehr, wenn wir nur die Dauer der Animation und nicht deren Iterationen angeben wollten (standardmäßig iterieren Animationen einmal), könnten wir die Millisekunden allein übergeben:

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

Während wir mit der Web Animations API CSS-Animationen schreiben können, ist es besonders nützlich, die Wiedergabe der Animation zu manipulieren. Die Web Animations API bietet mehrere nützliche Methoden zur Steuerung der Wiedergabe. Lassen Sie uns einen Blick darauf werfen, Animationen im Alice-im-Wunderland-Spiel "Wachsen/Shrumpfen" zu pausieren und abzuspielen (sehen Sie sich den [vollständigen Code auf Codepen an](https://codepen.io/rachelnabors/pen/PNYGZQ)):

[![Das Wachsen und Schrumpfen Spiel mit Alice spielen.](growing-shrinking_article_optimized.gif)](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010)

In diesem Spiel hat Alice eine Animation, die sie von klein zu groß werden lässt, was wir über eine Flasche und einen Cupcake steuern. Beide haben ihre eigenen Animationen.

### Animationen pausieren und abspielen

Wir werden später mehr über Alices Animation sprechen, aber für den Moment schauen wir uns die Animation des Cupcakes näher an:

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

Die [`Element.animate()`](/de/docs/Web/API/Element/animate)-Methode wird sofort ausgeführt, nachdem sie aufgerufen wurde. Um zu verhindern, dass der Kuchen sich selbst aufisst, bevor der Benutzer die Chance hatte, darauf zu klicken, rufen wir [`Animation.pause()`](/de/docs/Web/API/Animation/pause) direkt nach der Definition auf, wie folgt:

```js
nommingCake.pause();
```

Wir können nun die [`Animation.play()`](/de/docs/Web/API/Animation/play)-Methode verwenden, um sie auszuführen, wenn wir bereit sind:

```js
nommingCake.play();
```

Insbesondere wollen wir sie mit Alices Animation verknüpfen, sodass sie größer wird, während der Cupcake gegessen wird. Wir können dies über die folgende Funktion erreichen:

```js
const growAlice = () => {
  // Play Alice's animation.
  aliceChange.play();

  // Play the cake's animation.
  nommingCake.play();
};
```

Wenn ein Benutzer die Maus gedrückt hält oder mit dem Finger auf den Kuchen auf einem Touchscreen drückt, können wir jetzt `growAlice` aufrufen, um alle Animationen abzuspielen:

```js
cake.addEventListener("mousedown", growAlice, false);
cake.addEventListener("touchstart", growAlice, false);
```

### Andere nützliche Methoden

Neben dem Pausieren und Abspielen können wir die folgenden Animationsmethoden verwenden:

- [`Animation.finish()`](/de/docs/Web/API/Animation/finish) überspringt zum Ende der Animation.
- [`Animation.cancel()`](/de/docs/Web/API/Animation/cancel) bricht die Animation ab und entfernt deren Effekte.
- [`Animation.reverse()`](/de/docs/Web/API/Animation/reverse) setzt den Wiedergaberate der Animation ([`Animation.playbackRate`](/de/docs/Web/API/Animation/playbackRate)) auf einen negativen Wert, sodass sie rückwärts läuft.

Werfen wir zunächst einen Blick auf `playbackRate` — ein negativer playbackRate bewirkt, dass eine Animation rückwärts läuft. Wenn Alice aus der Flasche trinkt, wird sie kleiner. Dies liegt daran, dass die Flasche ihre Wiedergaberate von 1 auf -1 ändert:

```js
const shrinkAlice = () => {
  aliceChange.playbackRate = -1;
  aliceChange.play();
};

bottle.addEventListener("mousedown", shrinkAlice, false);
bottle.addEventListener("touchstart", shrinkAlice, false);
```

In [Through the Looking-Glass](https://en.wikipedia.org/wiki/Through_the_Looking-Glass) reist Alice in eine Welt, in der sie rennen muss, um an Ort und Stelle zu bleiben — und doppelt so schnell rennen muss, um sich vorwärts zu bewegen! Im Red Queen's Race-Beispiel rennen Alice und die Rote Königin, um an Ort und Stelle zu bleiben (sehen Sie sich den [vollständigen Code auf Codepen an](https://codepen.io/rachelnabors/pen/PNGGaV)):

[![Alice und die Rote Königin rennen, um ins nächste Quadrat zu gelangen in diesem Spiel.](red-queen-race_optimized.gif)](https://codepen.io/rachelnabors/pen/PNGGaV)

Da kleine Kinder leicht ermüden, im Gegensatz zu Automaten-Schachfiguren, bremst Alice ständig ab. Wir können dies tun, indem wir eine Abnahme auf ihre Wiedergaberate setzen. Wir verwenden `updatePlaybackRate()` anstatt die Wiedergaberate direkt zu setzen, da dies ein reibungsloses Update produziert:

```js
setInterval(() => {
  // Make sure the playback rate never falls below .4
  if (redQueen_alice.playbackRate > 0.4) {
    redQueen_alice.updatePlaybackRate(redQueen_alice.playbackRate * 0.9);
  }
}, 3000);
```

Durch Klicken oder Tippen können wir sie jedoch anfeuern, wodurch ihre Wiedergaberate durch Multiplikation erhöht wird:

```js
const goFaster = () => {
  redQueen_alice.updatePlaybackRate(redQueen_alice.playbackRate * 1.1);
};

document.addEventListener("click", goFaster);
document.addEventListener("touchstart", goFaster);
```

Die Hintergrundelemente haben ebenfalls `playbackRate`s, die beim Klicken oder Tippen beeinträchtigt werden. Was passiert, wenn Sie Alice und die Rote Königin doppelt so schnell laufen lassen? Was passiert, wenn Sie sie verlangsamen lassen?

## Animation-Stile beibehalten

Beim Animieren von Elementen ist ein häufiges Anwendungsszenario, den Endzustand der Animation beizubehalten, nachdem die Animation abgeschlossen ist. Eine Methode, die manchmal hierfür verwendet wird, besteht darin, den [fill mode](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) der Animation auf `forwards` zu setzen. Es wird jedoch nicht empfohlen, Fill-Modi dauerhaft zu verwenden, da:

- Der Browser den Zustand der Animation aufrechterhalten muss, während sie noch aktiv ist, sodass die Animation weiterhin Ressourcen verbraucht, obwohl sie nicht mehr animiert wird. Beachten Sie, dass dies weitgehend durch die automatische Entfernung von Animationen mit Fill-Modi durch den Browser erleichtert wird (siehe unten).
- Von Animationen angewendete Stile haben eine [höhere Priorität in der Kaskade](/de/docs/Web/CSS/Cascade#cascading_order) als spezifizierte Stile, sodass es schwierig sein kann, sie bei Bedarf zu überschreiben.

Ein besserer Ansatz ist es, die [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles)-Methode zu verwenden. Dies schreibt die berechneten Werte der aktuellen Stile der Animation in das [`style`](/de/docs/Web/HTML/Global_attributes#style)-Attribut des Ziel-Elements, danach kann das Element normal gestylt werden.

## Automatische Entfernung von Animationen mit Fill-Modi

Es ist möglich, eine große Anzahl von Animationen auf demselben Element auszulösen. Wenn sie unbegrenzt sind (d.h. Fill-Forward), kann dies zu einer großen Liste von Animationen führen, die ein Speicherleck verursachen könnte. Aus diesem Grund entfernen Browser automatisch Animationen mit Fill-Modi, nachdem sie durch neuere Animationen ersetzt wurden, es sei denn, der Entwickler gibt explizit an, sie beizubehalten.

Animationen werden entfernt, wenn alle folgenden Bedingungen erfüllt sind:

- Die Animation wird gefüllt (ihr `fill` ist `forwards`, wenn sie vorwärts abspielt, `backwards`, wenn sie rückwärts abspielt, oder `both`).
- Die Animation ist abgeschlossen. (Beachten Sie, dass sie aufgrund des `fill` noch in Kraft sein wird.)
- Die Zeitleiste der Animation verläuft monoton steigend. (Dies ist immer für [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) der Fall; andere Zeitlinien wie {{cssxref("scroll-timeline")}} können rückwärts laufen.)
- Die Animation wird nicht von deklarativem Markup wie CSS gesteuert.
- Jeder Stilisierungseffekt der [`AnimationEffect`](/de/docs/Web/API/AnimationEffect) der Animation wird durch eine andere Animation überschrieben, die ebenfalls alle obigen Bedingungen erfüllt. (In der Regel überschreibt eine neuere Animation die Stilisierungseffekte einer vorhandenen Animation, wenn sie dieselbe Stil-Eigenschaft des gleichen Elements definiert.)

Die ersten vier Bedingungen stellen sicher, dass ohne Eingreifen durch JavaScript-Code der Effekt der Animation sich nie ändern oder enden wird. Die letzte Bedingung stellt sicher, dass die Animation nie tatsächlich den Stil eines Elements beeinflusst: Sie wurde vollständig ersetzt.

Wenn die Animation automatisch entfernt wird, wird das [`remove`](/de/docs/Web/API/Animation/remove_event)-Ereignis der Animation ausgelöst.

Um zu verhindern, dass der Browser Animationen automatisch entfernt, rufen Sie die [`persist()`](/de/docs/Web/API/Animation/persist)-Methode der Animation auf.

Die [`animation.replaceState`](/de/docs/Web/API/Animation/replaceState)-Eigenschaft der Animation wird `removed` sein, wenn die Animation entfernt wurde, `persisted`, wenn Sie [`persist()`](/de/docs/Web/API/Animation/persist) auf der Animation aufgerufen haben, oder `active` andernfalls.

## Informationen aus Animationen ziehen

Stellen Sie sich andere Möglichkeiten vor, wie wir `playbackRate` nutzen könnten, um beispielsweise den Zugang für Benutzer mit vestibulären Störungen zu verbessern, indem sie Animationen über eine gesamte Website langsamer machen können. Das ist mit CSS ohne Neuberechnung von Laufzeiten in jeder CSS-Regel unmöglich, aber mit der Web Animations API könnten wir die Methode [`Document.getAnimations`](/de/docs/Web/API/Document/getAnimations) verwenden, um über jede Animation auf der Seite zu schleifen und deren `playbackRate` zu halbieren, so:

```js
document.getAnimations().forEach((animation) => {
  animation.updatePlaybackRate(animation.playbackRate * 0.5);
});
```

Mit der Web Animations API müssen Sie nur eine kleine Eigenschaft ändern!

Eine weitere Sache, die alleine mit CSS-Animationen schwierig zu erreichen ist, ist das Erstellen von Abhängigkeiten von Werten, die von anderen Animationen bereitgestellt werden. Zum Beispiel könnten Sie im Beispiel des Wachsen und Schrumpfen Alice-Spiels etwas Merkwürdiges bei der Dauer des Kuchens bemerkt haben:

```js
document.getElementById("eat-me_sprite").animate([], {
  duration: aliceChange.effect.timing.duration / 2,
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

Alices Animation lässt sie von der halben Größe bis zur doppelten Größe über 8 Sekunden wachsen. Dann pausieren wir sie:

```js
aliceChange.pause();
```

Hätten wir sie am Anfang ihrer Animation pausiert, würde sie bei halber Größe beginnen, als hätte sie bereits die ganze Flasche getrunken! Wir wollen ihre Animation im Mittelteil positionieren, damit sie bereits auf halber Größe ist. Wir könnten dies tun, indem wir ihre [`Animation.currentTime`](/de/docs/Web/API/Animation/currentTime) auf 4 Sekunden setzen, so:

```js
aliceChange.currentTime = 4000;
```

Aber während wir an dieser Animation arbeiten, könnten wir Alices Dauer häufig ändern. Wäre es nicht besser, wenn wir ihre `currentTime` dynamisch setzen, sodass wir nicht jedes Mal zwei Änderungen vornehmen müssen? Tatsächlich können wir, indem wir auf die Eigenschaft [`Animation.effect`](/de/docs/Web/API/Animation/effect) von aliceChange verweisen, die ein Objekt zurückgibt, das alle Details der auf Alice aktiven Effekte enthält:

```js
aliceChange.currentTime = aliceChange.effect.getComputedTiming().duration / 2;
```

`effect` ermöglicht uns den Zugriff auf die Keyframes und Timing-Eigenschaften der Animation — `aliceChange.effect.getComputedTiming()` verweist auf Alices Timing-Objekt — dies enthält ihre [`duration`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect). Wir können ihre Dauer halbieren, um den Mittelteil ihrer Animationszeitleiste zu erhalten, sie auf Normalgröße einzustellen. Jetzt können wir ihre Animation in beide Richtungen rückgängig machen und abspielen, um sie wachsen oder schrumpfen zu lassen!

Und wir können das Gleiche tun, wenn wir die Dauer von Kuchen und Flasche einstellen:

```js
const drinking = document
  .getElementById("liquid")
  .animate([{ height: "100%" }, { height: "0" }], {
    fill: "forwards",
    duration: aliceChange.effect.getComputedTiming().duration / 2,
  });
drinking.pause();
```

Jetzt sind alle drei Animationen mit nur einer Dauer verknüpft, die wir problemlos an einem Ort ändern können.

Wir können auch die Web Animations API verwenden, um die aktuelle Zeit der Animation herauszufinden. Das Spiel endet, wenn Ihnen der Kuchen zum Essen ausgeht oder die Flasche leer ist. Das Vignette, das Spielern präsentiert wird, hängt davon ab, wie weit Alice in ihrer Animation war, ob sie zu groß wurde und nicht mehr durch die kleine Tür passt oder zu klein wurde und den Schlüssel nicht erreicht, um die Tür zu öffnen. Wir können herausfinden, ob sie sich am großen oder kleinen Ende ihrer Animation befindet, indem wir die [`currentTime`](/de/docs/Web/API/Animation/currentTime) ihrer Animation erhalten und durch ihre `activeDuration` teilen:

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

CSS-Animationen und Transitionen haben ihre eigenen Ereignis-Listener, und diese sind auch mit der Web Animations API möglich:

- [`onfinish`](/de/docs/Web/API/Animation/finish_event) ist der Ereignis-Handler für das `finish`-Ereignis und kann manuell mit [`finish()`](/de/docs/Web/API/Animation/finish) ausgelöst werden.
- [`oncancel`](/de/docs/Web/API/Animation/cancel_event) ist der Ereignis-Handler für das `cancel`-Ereignis und kann mit [`cancel()`](/de/docs/Web/API/Animation/cancel) ausgelöst werden.

Hier setzen wir die Rückrufe für Kuchen, Flasche und Alice, um die `endGame`-Funktion auszulösen:

```js
// When the cake or bottle runs out
nommingCake.onfinish = endGame;
drinking.onfinish = endGame;

// Alice reaches the end of her animation
aliceChange.onfinish = endGame;
```

Noch besser ist, dass die Web Animations API auch ein Versprechen [`finished`](/de/docs/Web/API/Animation/finished) bietet, das erfüllt wird, wenn die Animation endet, oder abgelehnt wird, wenn sie abgebrochen wird.

## Fazit

Dies sind die grundlegenden Funktionen der Web Animations API. Sie sollten nun bereit sein, "ins Kaninchenloch zu springen" und im Browser Animationen zu erstellen und eigene Animationsexperimente zu schreiben!

## Siehe auch

- Die [vollständige Sammlung von Alice im Wunderland Demos](https://codepen.io/collection/nqNJvD) auf CodePen, mit denen Sie spielen, sie forken und teilen können.
- [Animieren, als wäre es Ihnen egal mit Element.animate](https://hacks.mozilla.org/2016/08/animating-like-you-just-dont-care-with-element-animate/) (2016) Erklärt den Hintergrund der Web Animations API und warum sie leistungsfähiger ist als andere Methoden zur Webanimation.
