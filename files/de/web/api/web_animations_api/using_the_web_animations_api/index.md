---
title: Verwendung der Web Animations API
slug: Web/API/Web_Animations_API/Using_the_Web_Animations_API
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{DefaultAPISidebar("Web Animations")}}

Mit der Web Animations API können wir Animationen erstellen und deren Wiedergabe mit JavaScript steuern. Dieser Artikel wird Sie mit unterhaltsamen Demos und Tutorials, die Alice im Wunderland präsentieren, in die richtige Richtung führen.

## Lernen Sie die Web Animations API kennen

Die [Web Animations API](/de/docs/Web/API/Web_Animations_API) öffnet die Animations-Engine des Browsers für Entwickler und deren Manipulation durch JavaScript. Diese API wurde so konzipiert, dass sie die Implementierungen von [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) und [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) unterstützt und die Tür für zukünftige Animationseffekte offen lässt. Es ist eine der leistungsfähigsten Methoden, Animationen im Web zu erstellen, da der Browser seine eigenen internen Optimierungen vornehmen kann, ohne Hacks, Zwang oder [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame).

Mit der Web Animations API können wir interaktive Animationen von Stylesheets nach JavaScript verschieben und so Präsentation und Verhalten trennen. Wir müssen uns nicht mehr auf DOM-intensive Techniken wie das Schreiben von CSS-Eigenschaften und das Anlegen von Klassen auf Elementen verlassen, um die Wiedergaberichtung zu steuern. Und im Gegensatz zu rein deklarativem CSS ermöglicht JavaScript es uns auch, Werte dynamisch von Eigenschaften bis hin zu Dauern festzulegen. Für den Aufbau benutzerdefinierter Animationsbibliotheken und die Erstellung interaktiver Animationen könnte die Web Animations API das perfekte Werkzeug sein. Sehen wir uns an, was sie leisten kann!

## Schreiben von CSS-Animationen mit der Web Animations API

Eine der bekannteren Möglichkeiten, die Web Animations API zu erlernen, ist es, mit etwas zu beginnen, womit die meisten Webentwickler bereits gespielt haben: CSS-Animationen. CSS-Animationen haben eine vertraute Syntax, die sich gut für Demonstrationszwecke eignet.

### Die CSS-Version

Hier ist eine stürzende Animation in CSS, die Alice zeigt, wie sie in den Kaninchenbau fällt, der nach Wunderland führt (sehen Sie sich den vollständigen [Code auf Codepen](https://codepen.io/rachelnabors/pen/QyOqqW) an):

[![Alice stürzt in den Kaninchenbau.](tumbling-alice_optimized.gif)](https://codepen.io/rachelnabors/pen/rxpmJL)

Beachten Sie, dass sich der Hintergrund bewegt, Alice sich dreht und ihre Farbe versetzt zu ihrer Drehung ändert. Wir konzentrieren uns in diesem Tutorial nur auf Alice. Hier ist das vereinfachte CSS, das Alices Animation steuert:

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

Dies ändert Alices Farbe und die Rotation ihres `transform` über 3 Sekunden mit einer konstanten (linearen) Geschwindigkeit und wiederholt sich unendlich. Im {{cssxref("@keyframes")}}-Block sehen wir, dass 30 % des Weges durch jede Schleife (etwa 0,9 Sekunden), Alices Farbe von Schwarz zu einem tiefen Burgunderrot wechselt und am Ende der Schleife wieder zurückwechselt.

### Umstellung auf JavaScript

Nun versuchen wir, die gleiche Animation mit der Web Animations API zu erstellen.

#### Keyframes darstellen

Das erste, was wir brauchen, ist die Erstellung eines [Keyframe-Objekts](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats) entsprechend unserem CSS-{{cssxref("@keyframes")}}-Block:

```js
const aliceTumbling = [
  { transform: "rotate(0) translate3D(-50%, -50%, 0)", color: "#000" },
  { color: "#431236", offset: 0.3 },
  { transform: "rotate(360deg) translate3D(-50%, -50%, 0)", color: "#000" },
];
```

Hier verwenden wir ein Array, das mehrere Objekte enthält. Jedes Objekt repräsentiert einen Schlüssel aus dem ursprünglichen CSS. Im Gegensatz zu CSS muss der Web Animations API jedoch nicht explizit mitgeteilt werden, bei welchen Prozentwerten die einzelnen Keys erscheinen sollen. Sie teilt die Animation automatisch in gleiche Teile auf, basierend auf der Anzahl der angegebenen Keys. Das bedeutet, dass ein Keyframe-Objekt mit drei Keys den mittleren Key auf 50 % des Weges durch jede Schleife der Animation abspielt, es sei denn, es wird anders angegeben.

Wenn wir explizit den Abstand eines Keys von den anderen Keys festlegen möchten, können wir einen `offset` direkt im Objekt angeben, der von der Deklaration durch ein Komma getrennt ist. Im obigen Beispiel geben wir für die Farbänderung `offset: 0.3` an, um sicherzustellen, dass Alices Farbe bei 30 % (nicht 50 %) wechselt.

Derzeit sollten mindestens zwei Keyframes angegeben sein (die Start- und Endzustände der Animationssequenz darstellen). Wenn Ihre Keyframe-Liste nur einen Eintrag enthält, könnte [`Element.animate()`](/de/docs/Web/API/Element/animate) in einigen Browsern einen `NotSupportedError`-[`DOMException`](/de/docs/Web/API/DOMException) werfen, bis sie aktualisiert werden.

Zusammenfassend lässt sich sagen, dass die Keys standardmäßig gleichmäßig verteilt sind, es sei denn, Sie geben einem Key einen `offset` an. Praktisch, oder?

#### Timing-Eigenschaften darstellen

Wir müssen auch ein Objekt mit Timing-Eigenschaften erstellen, das den Werten in Alices Animation entspricht:

```js
const aliceTiming = {
  duration: 3000,
  iterations: Infinity,
};
```

Sie werden einige Unterschiede feststellen, wie äquivalente Werte in CSS dargestellt werden:

- Zum einen ist die Dauer in Millisekunden anstelle von Sekunden — 3000 statt 3s. Wie [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) akzeptiert die Web Animations API nur Millisekunden.
- Außerdem werden `iterations` und nicht `iteration-count` verwendet.

> [!NOTE]
> Es gibt eine Reihe kleiner Unterschiede in der Terminologie, die in CSS-Animationen verwendet wird, im Vergleich zur Terminologie, die in Web-Animationen verwendet wird. Zum Beispiel verwendet Web Animations nicht den String `"infinite"`, sondern das JavaScript-Schlüsselwort `Infinity`. Und anstatt `timing-function` verwenden wir `easing`. Wir listen hier keinen `easing`-Wert auf, weil im Gegensatz zu CSS-Animationen, wo die Standard-{{cssxref("animation-timing-function")}} `ease` ist, in der Web Animations API das Standard-Easing `linear` ist — was wir hier wollen.

#### Die Teile zusammenführen

Nun ist es an der Zeit, sie mit der Methode [`Element.animate()`](/de/docs/Web/API/Element/animate) zusammenzuführen:

```js
document.getElementById("alice").animate(aliceTumbling, aliceTiming);
```

Und bumm: Die Animation beginnt zu spielen (sehen Sie sich die fertige [Version auf Codepen](https://codepen.io/rachelnabors/pen/rxpmJL) an).

Die `animate()`-Methode kann auf jedem DOM-Element aufgerufen werden, das mit CSS animiert werden könnte. Und es kann auf verschiedene Arten geschrieben werden. Anstatt Objekte für Keyframes und Timing-Eigenschaften zu erstellen, könnten wir ihre Werte direkt übergeben, so wie:

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

Mehr noch, wenn wir nur die Dauer der Animation und nicht deren Iterationen angeben wollten (standardmäßig wird die Animation einmal wiederholt), könnten wir nur die Millisekunden übergeben:

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

Während wir CSS-Animationen mit der Web Animations API schreiben können, wo die API wirklich nützlich ist, ist die Manipulation der Wiedergabe der Animation. Die Web Animations API bietet mehrere nützliche Methoden zur Wiedergabesteuerung. Schauen wir uns das Pausieren und Abspielen von Animationen im Spiel „Wachsend/Shrinkende Alice“ an (sehen Sie sich den [vollständigen Code auf Codepen](https://codepen.io/rachelnabors/pen/PNYGZQ) an):

[![Das wachsend und schrumpfend Spiel mit Alice spielen.](growing-shrinking_article_optimized.gif)](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010)

In diesem Spiel hat Alice eine Animation, die sie von klein zu groß wachsen lässt, welche wir über eine Flasche und einen Cupcake steuern. Beide haben ihre eigenen Animationen.

### Animationen pausieren und abspielen

Wir werden später mehr über Alices Animation sprechen, aber für den Moment werfen wir einen genaueren Blick auf die Animation des Cupcakes:

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

Die Methode [`Element.animate()`](/de/docs/Web/API/Element/animate) wird sofort nach ihrem Aufruf ausgeführt. Um zu verhindern, dass der Kuchen sich selbst verspeist, bevor der Nutzer die Möglichkeit hatte, darauf zu klicken, rufen wir [`Animation.pause()`](/de/docs/Web/API/Animation/pause) sofort nach der Definition auf, wie folgt:

```js
nommingCake.pause();
```

Wir können nun die Methode [`Animation.play()`](/de/docs/Web/API/Animation/play) verwenden, um sie auszuführen, wann immer wir bereit sind:

```js
nommingCake.play();
```

Insbesondere wollen wir sie mit Alices Animation verknüpfen, so dass sie größer wird, während der Cupcake aufgegessen wird. Dies können wir durch die folgende Funktion erreichen:

```js
const growAlice = () => {
  // Play Alice's animation.
  aliceChange.play();

  // Play the cake's animation.
  nommingCake.play();
};
```

Wenn ein Benutzer die Maus gedrückt hält oder seinen Finger auf dem Kuchen auf einem Touchscreen drückt, können wir jetzt `growAlice` aufrufen, um alle Animationen abzuspielen:

```js
cake.addEventListener("mousedown", growAlice, false);
cake.addEventListener("touchstart", growAlice, false);
```

### Andere nützliche Methoden

Zusätzlich zum Pausieren und Abspielen können wir die folgenden Methoden der `Animation` verwenden:

- [`Animation.finish()`](/de/docs/Web/API/Animation/finish) springt zum Ende der Animation.
- [`Animation.cancel()`](/de/docs/Web/API/Animation/cancel) bricht die Animation ab und entfernt deren Effekte.
- [`Animation.reverse()`](/de/docs/Web/API/Animation/reverse) setzt die Wiedergabegeschwindigkeit der Animation ([`Animation.playbackRate`](/de/docs/Web/API/Animation/playbackRate)) auf einen negativen Wert, damit sie rückwärts läuft.

Lassen Sie uns zunächst einen Blick auf `playbackRate` werfen — ein negativer `playbackRate` lässt eine Animation rückwärtslaufen. Wenn Alice von der Flasche trinkt, schrumpft sie. Dies liegt daran, dass die Flasche die Wiedergabegeschwindigkeit ihrer Animation von 1 auf -1 verändert:

```js
const shrinkAlice = () => {
  aliceChange.playbackRate = -1;
  aliceChange.play();
};

bottle.addEventListener("mousedown", shrinkAlice, false);
bottle.addEventListener("touchstart", shrinkAlice, false);
```

In [Hinter den Spiegeln](https://en.wikipedia.org/wiki/Through_the_Looking-Glass) reist Alice in eine Welt, in der sie rennen muss, um auf der Stelle zu bleiben — und doppelt so schnell rennen muss, um vorwärts zu kommen! Im Beispiel des Rennens mit der Roten Königin rennen Alice und die Rote Königin, um auf der Stelle zu bleiben (sehen Sie sich den [vollständigen Code auf Codepen](https://codepen.io/rachelnabors/pen/PNGGaV) an):

[![Alice und die Rote Königin rennen, um zum nächsten Quadrat in diesem Spiel zu gelangen.](red-queen-race_optimized.gif)](https://codepen.io/rachelnabors/pen/PNGGaV)

Da kleine Kinder im Gegensatz zu Automaton-Schachfiguren schnell müde werden, verlangsamt sich Alice ständig. Wir können dies durch eine Abnahme ihrer `playbackRate`-Animation bewerkstelligen. Wir verwenden `updatePlaybackRate()` anstelle der direkten Einstellung von `playbackRate`, da dies ein sanftes Update bewirkt:

```js
setInterval(() => {
  // Make sure the playback rate never falls below .4
  if (redQueen_alice.playbackRate > 0.4) {
    redQueen_alice.updatePlaybackRate(redQueen_alice.playbackRate * 0.9);
  }
}, 3000);
```

Aber durch Klicken oder Tippen können sie schneller laufen, indem ihre `playbackRate` multipliziert wird:

```js
const goFaster = () => {
  redQueen_alice.updatePlaybackRate(redQueen_alice.playbackRate * 1.1);
};

document.addEventListener("click", goFaster);
document.addEventListener("touchstart", goFaster);
```

Die Hintergrundelemente haben auch `playbackRate`s, die beim Klicken oder Tippen beeinflusst werden. Was passiert, wenn Sie Alice und die Rote Königin doppelt so schnell laufen lassen? Was passiert, wenn Sie sie verlangsamen lassen?

## Animationen dauerhaft machen

Beim Animieren von Elementen ist es ein häufiger Anwendungsfall, den Endzustand der Animation beizubehalten, nachdem die Animation beendet ist. Eine Methode, die manchmal dafür verwendet wird, ist das Setzen des `fill`-Modus der Animation auf `forwards`. Es wird jedoch nicht empfohlen, `fill`-Modi zu verwenden, um den Effekt einer Animation auf unbestimmte Zeit zu erhalten, aus zwei Gründen:

- Der Browser muss den Zustand der Animation beibehalten, solange sie noch aktiv ist, sodass die Animation weiterhin Ressourcen verbraucht, auch wenn sie nicht mehr animiert wird. Beachten Sie, dass dies durch die automatische Entfernung von Animationen durch den Browser [etwas gemildert](#automatisch_entfernte_Animationen) wird.
- Von Animationen angewendete Styles haben eine [höhere Priorität in der Kaskade](/de/docs/Web/CSS/Cascade#cascading_order) als spezifizierte Styles, daher kann es schwierig sein, sie bei Bedarf zu überschreiben.

Ein besserer Ansatz ist die Verwendung der Methode [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles). Diese schreibt die berechneten Werte der aktuellen Stile der Animation in das `style`-Attribut des Zielelements, wonach das Element normal umgestylt werden kann.

## Automatisch entferntes Füllen von Animationen

Es ist möglich, eine große Anzahl von Animationen auf demselben Element auszulösen. Wenn sie unbestimmt sind (d. h., mit `forwards`-Füllung), kann dies zu einer großen Liste von Animationen führen, die ein Speicherleck verursachen könnten. Aus diesem Grund entfernen Browser Füllen von Animationen automatisch, nachdem sie durch neuere Animationen ersetzt wurden, es sei denn, der Entwickler gibt ausdrücklich an, sie beizubehalten.

Animationen werden entfernt, wenn alle folgenden Bedingungen zutreffen:

- Die Animation wird aufgefüllt (ihr `fill` ist `forwards`, wenn sie vorwärts gespielt wird, `backwards`, wenn sie rückwärts gespielt wird, oder `both`).
- Die Animation ist beendet. (Beachten Sie, dass sie aufgrund des `fill` immer noch in Kraft ist.)
- Die Zeitleiste der Animation ist monoton steigend. (Dies ist immer der Fall für [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline); andere Zeitleisten wie {{cssxref("scroll-timeline")}} können rückwärts ausgeführt werden.)
- Die Animation wird nicht durch deklaratives Markup wie CSS gesteuert.
- Jeder Stileffekt des [`AnimationEffect`](/de/docs/Web/API/AnimationEffect) der Animation wird durch eine andere Animation überschrieben, die ebenfalls alle oben genannten Bedingungen erfüllt. (In der Regel ersetzt die zuletzt erstellte Animation die andere, wenn zwei Animationen dieselbe Stil-Eigenschaft desselben Elements setzen würden.)

Die ersten vier Bedingungen stellen sicher, dass die Wirkung der Animation ohne Eingreifen von JavaScript-Code sich niemals ändern oder enden wird. Die letzte Bedingung stellt sicher, dass die Animation keinen Stil eines Elements mehr beeinflusst: Sie wurde vollständig ersetzt.

Wenn die Animation automatisch entfernt wird, wird das Event [`remove`](/de/docs/Web/API/Animation/remove_event) der Animation ausgelöst.

Um zu verhindern, dass der Browser Animationen automatisch entfernt, rufen Sie die Methode [`persist()`](/de/docs/Web/API/Animation/persist) der Animation auf.

Die Eigenschaft [`replaceState`](/de/docs/Web/API/Animation/replaceState) der Animation hat den Wert `removed`, wenn die Animation entfernt wurde, `persisted`, wenn Sie [`persist()`](/de/docs/Web/API/Animation/persist) auf die Animation aufgerufen haben, oder `active` andernfalls.

## Informationen aus Animationen erhalten

Stellen Sie sich andere Möglichkeiten vor, wie wir `playbackRate` verwenden könnten, zum Beispiel um die Barrierefreiheit für Nutzer mit vestibulären Störungen zu verbessern, indem wir ihnen ermöglichen, Animationen auf einer ganzen Website zu verlangsamen. Das ist mit CSS unmöglich, ohne die Dauer in jeder CSS-Regel neu zu berechnen, aber mit der Web Animations API könnten wir die Methode [`Document.getAnimations`](/de/docs/Web/API/Document/getAnimations) verwenden, um über jede Animation auf der Seite zu iterieren und deren `playbackRate` zu halbieren, so:

```js
document.getAnimations().forEach((animation) => {
  animation.updatePlaybackRate(animation.playbackRate * 0.5);
});
```

Mit der Web Animations API müssen Sie lediglich eine kleine Eigenschaft ändern!

Eine weitere Herausforderung bei reinem CSS ist das Erstellen von Abhängigkeiten von Werten, die von anderen Animationen bereitgestellt werden. Im Beispiel des Spiels „Wachsend und Schrumpfend Alice“ haben Sie vielleicht etwas Seltsames an der Dauer des Kuchens bemerkt:

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

Alices Animation bringt sie von der Hälfte ihrer Größe auf die doppelte Größe über 8 Sekunden. Dann pausieren wir sie:

```js
aliceChange.pause();
```

Wenn wir sie zu Beginn ihrer Animation pausiert lassen würden, würde sie mit der Hälfte ihrer vollen Größe starten, als ob sie bereits die ganze Flasche getrunken hätte! Wir möchten ihren Animations-"Playhead" in die Mitte setzen, damit sie bereits halb fertig ist. Wir könnten das tun, indem wir ihre [`Animation.currentTime`](/de/docs/Web/API/Animation/currentTime) auf 4 Sekunden setzen, so:

```js
aliceChange.currentTime = 4000;
```

Beim Arbeiten an dieser Animation könnten wir Alices Dauer häufig ändern. Wäre es nicht besser, wenn wir ihre `currentTime` dynamisch festlegen, damit wir nicht jedes Mal zwei Updates vornehmen müssen? Tatsächlich können wir dies tun, indem wir Alices [`Animation.effect`](/de/docs/Web/API/Animation/effect)-Eigenschaft referenzieren, die ein Objekt zurückgibt, das alle Details der auf Alice aktiven Effekte enthält:

```js
aliceChange.currentTime = aliceChange.effect.getComputedTiming().duration / 2;
```

`effect` ermöglicht uns den Zugriff auf die Keyframes und Timing-Eigenschaften der Animation — `aliceChange.effect.getComputedTiming()` verweist auf Alices Zeitobjekt — dies enthält ihre [`duration`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect). Wir können ihre Dauer halbieren, um den Mittelpunkt ihrer Animationszeitleiste zu erhalten und sie auf normale Höhe zu setzen. Nun können wir ihre Animation in beide Richtungen umkehren und abspielen, um sie schrumpfen oder größer werden zu lassen!

Und wir können das gleiche tun, wenn wir die Kuchen- und Flaschendauern festlegen:

```js
const drinking = document
  .getElementById("liquid")
  .animate([{ height: "100%" }, { height: "0" }], {
    fill: "forwards",
    duration: aliceChange.effect.getComputedTiming().duration / 2,
  });
drinking.pause();
```

Nun sind alle drei Animationen an genau eine Dauer gebunden, die wir problemlos ändern können.

Mit der Web Animations API können wir auch die aktuelle Zeit der Animation herausfinden. Das Spiel endet, wenn Sie keinen Kuchen mehr zu essen oder die Flasche geleert haben. Welche Vignette den Spielern präsentiert wird, hängt davon ab, wie weit Alice in ihrer Animation fortgeschritten war, ob sie zu groß geworden ist und nicht mehr durch die winzige Tür passt, oder zu klein und den Schlüssel nicht erreichen kann, um die Tür zu öffnen. Wir können herausfinden, ob sie am großen oder kleinen Ende ihrer Animation ist, indem wir die [`currentTime`](/de/docs/Web/API/Animation/currentTime) ihrer Animation abrufen und durch ihre `activeDuration` dividieren:

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

CSS-Animationen und -Übergänge haben ihre eigenen Ereignis-Listener, und diese sind auch mit der Web Animations API möglich:

- [`onfinish`](/de/docs/Web/API/Animation/finish_event) ist der Ereignis-Handler für das `finish`-Ereignis und kann manuell mit [`finish()`](/de/docs/Web/API/Animation/finish) ausgelöst werden.
- [`oncancel`](/de/docs/Web/API/Animation/cancel_event) ist der Ereignis-Handler für das `cancel`-Ereignis und kann mit [`cancel()`](/de/docs/Web/API/Animation/cancel) ausgelöst werden.

Hier setzen wir die Rückrufe für den Kuchen, die Flasche und Alice, um die Funktion `endGame` zu aktivieren:

```js
// When the cake or bottle runs out
nommingCake.onfinish = endGame;
drinking.onfinish = endGame;

// Alice reaches the end of her animation
aliceChange.onfinish = endGame;
```

Noch besser, die Web Animations API bietet auch ein [`finished`](/de/docs/Web/API/Animation/finished)-Versprechen, das aufgelöst wird, wenn die Animation endet, oder abgelehnt wird, wenn sie abgebrochen wird.

## Fazit

Dies sind die grundlegenden Funktionen der Web Animations API. Bis jetzt sollten Sie bereit sein, "in den Kaninchenbau" der Animation im Browser hinabzusteigen und bereit sein, Ihre eigenen Animationsexperimente zu schreiben!

## Siehe auch

- Die [vollständige Suite von Alice-im-Wunderland-Demos](https://codepen.io/collection/nqNJvD) auf CodePen für Sie zum Ausprobieren, Kopieren und Teilen.
- [Animating like you just don't care with Element.animate](https://hacks.mozilla.org/2016/08/animating-like-you-just-dont-care-with-element-animate/) (2016) Erklärt den Hintergrund der Web Animations API und warum sie leistungsfähiger als andere Web-Animationsmethoden ist.
