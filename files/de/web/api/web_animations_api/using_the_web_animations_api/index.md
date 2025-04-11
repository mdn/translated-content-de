---
title: Verwendung der Web Animations API
slug: Web/API/Web_Animations_API/Using_the_Web_Animations_API
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{DefaultAPISidebar("Web Animations")}}

Die Web Animations API ermöglicht es uns, Animationen zu erstellen und ihre Wiedergabe mit JavaScript zu steuern. Dieser Artikel wird Ihnen mit unterhaltsamen Demos und Tutorials mit Alice im Wunderland einen guten Start ermöglichen.

## Lernen Sie die Web Animations API kennen

Die [Web Animations API](/de/docs/Web/API/Web_Animations_API) öffnet die Animations-Engine des Browsers für Entwickler und die Manipulation durch JavaScript. Diese API wurde entwickelt, um Implementierungen sowohl von [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) als auch von [CSS-Transitionen](/de/docs/Web/CSS/CSS_transitions) zu unterstützen und lässt die Tür für zukünftige Animationseffekte offen. Es ist eine der performantesten Möglichkeiten, Animationen im Web zu erstellen, da der Browser seine eigenen internen Optimierungen vornimmt, ohne Tricksereien, Zwang oder [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame).

Mit der Web Animations API können wir interaktive Animationen von Stylesheets zu JavaScript verschieben, wodurch Präsentation von Verhalten getrennt wird. Wir müssen nicht mehr auf DOM-intensive Techniken zurückgreifen, wie das Schreiben von CSS-Eigenschaften und das Zuweisen von Klassen zu Elementen, um die Wiedergaberichtung zu steuern. Und im Gegensatz zu rein deklarativem CSS ermöglicht es JavaScript auch, Werte dynamisch von Eigenschaften bis zu Dauern festzulegen. Für den Aufbau benutzerdefinierter Animationsbibliotheken und die Erstellung interaktiver Animationen könnte die Web Animations API das perfekte Werkzeug sein. Sehen wir uns an, was sie kann!

## Schreiben von CSS-Animationen mit der Web Animations API

Eine der vertrauteren Methoden, um die Web Animations API zu erlernen, besteht darin, mit etwas zu beginnen, mit dem die meisten Webentwickler bereits gearbeitet haben: CSS-Animationen. CSS-Animationen haben eine vertraute Syntax, die sich gut für Demonstrationszwecke eignet.

### Die CSS-Version

Hier ist eine tumbelnde Animation, die in CSS geschrieben wurde und Alice zeigt, wie sie in das Kaninchenloch fällt, das ins Wunderland führt (sehen Sie den vollständigen [Code auf CodePen](https://codepen.io/rachelnabors/pen/QyOqqW)):

[![Alice fällt in das Kaninchenloch.](tumbling-alice_optimized.gif)](https://codepen.io/rachelnabors/pen/rxpmJL)

Beachten Sie, dass sich der Hintergrund bewegt, Alice dreht sich und ihre Farbe ändert sich versetzt zu ihrer Drehung. In diesem Tutorial konzentrieren wir uns nur auf Alice. Hier ist das vereinfachte CSS, das Alice’s Animation steuert:

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

Dies ändert Alice's Farbe und die Rotation ihres Transformations über 3 Sekunden mit einem konstanten (linearen) Tempo und lässt sie unendlich oft wiederholen. Im {{cssxref("@keyframes")}}-Block sehen wir, dass Alice's Farbe 30% durch jede Schleife (etwa .9 Sekunden) von Schwarz in ein tiefes Burgunderrot wechselt und bis zum Ende der Schleife wieder zurückgeht.

### Übertragung nach JavaScript

Versuchen wir nun, die gleiche Animation mit der Web Animations API zu erstellen.

#### Darstellung von Keyframes

Das Erste, was wir brauchen, ist das Erstellen eines [Keyframe Objects](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats) entsprechend unserem CSS {{cssxref("@keyframes")}}-Block:

```js
const aliceTumbling = [
  { transform: "rotate(0) translate3D(-50%, -50%, 0)", color: "#000" },
  { color: "#431236", offset: 0.3 },
  { transform: "rotate(360deg) translate3D(-50%, -50%, 0)", color: "#000" },
];
```

Hier verwenden wir ein Array, das mehrere Objekte enthält. Jedes Objekt repräsentiert einen Schlüssel aus dem ursprünglichen CSS. Im Gegensatz zu CSS muss der Web Animations API jedoch nicht explizit mitgeteilt werden, bei welchem Prozentsatz der Animation jeder Schlüssel erscheinen soll. Es teilt die Animation automatisch in gleiche Teile basierend auf der Anzahl der Schlüssel, die Sie ihm geben. Das bedeutet, dass ein Keyframe-Objekt mit drei Schlüsseln den mittleren Schlüssel bei 50% der Schleifen jeder Animation abspielen wird, es sei denn, Sie geben etwas anderes an.

Wenn wir den Abstand eines Schlüssels von den anderen Schlüsseln explizit festlegen möchten, können wir ihn direkt im Objekt mit einem Komma von der Deklaration getrennt angeben. Im obigen Beispiel, um sicherzustellen, dass Alice's Farbe bei 30% (nicht 50%) für den Farbwechsel ändert, geben wir `offset: 0.3` an.

Derzeit sollten mindestens zwei Keyframes angegeben werden (die Start- und Endzustände der Animationssequenz darstellend). Wenn Ihre Keyframe-Liste nur einen Eintrag enthält, kann [`Element.animate()`](/de/docs/Web/API/Element/animate) in einigen Browsern einen `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException) werfen, bis sie aktualisiert werden.

Zusammenfassend sind die Schlüssel standardmäßig gleichmäßig verteilt, es sei denn, Sie geben einen Offset an einem Schlüssel an. Praktisch, nicht wahr?

#### Darstellung von Timing-Eigenschaften

Wir müssen auch ein Objekt von Timing-Eigenschaften erstellen, das den Werten in Alice's Animation entspricht:

```js
const aliceTiming = {
  duration: 3000,
  iterations: Infinity,
};
```

Sie werden einige Unterschiede feststellen, wie gleichwertige Werte in CSS repräsentiert werden:

- Zum einen ist die Dauer in Millisekunden anstelle von Sekunden — 3000 statt 3s. Wie [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) nimmt die Web Animations API nur Millisekunden.
- Das andere, was Sie bemerken werden, ist, dass es `iterations` und nicht `iteration-count` ist.

> [!NOTE]
> Es gibt eine Reihe kleiner Unterschiede zwischen der Terminologie, die in CSS-Animationen und die in Web-Animationen verwendet wird. Beispielsweise verwendet Web-Animationen nicht den String `"infinite"`, sondern das JavaScript-Schlüsselwort `Infinity`. Und anstelle von `timing-function` verwenden wir `easing`. Wir geben hier keinen `easing`-Wert an, da im Gegensatz zu CSS-Animationen, bei denen die Standard-{{cssxref("animation-timing-function")}} `ease` ist, das Standard-Easing in der Web Animations API `linear` ist — was genau das ist, was wir hier wollen.

#### Die Teile zusammenbringen

Nun ist es Zeit, sie beide mit der [`Element.animate()`](/de/docs/Web/API/Element/animate)-Methode zusammenzubringen:

```js
document.getElementById("alice").animate(aliceTumbling, aliceTiming);
```

Und boom: Die Animation beginnt zu spielen (siehe die fertige [Version auf CodePen](https://codepen.io/rachelnabors/pen/rxpmJL)).

Die `animate()`-Methode kann bei jedem DOM-Element aufgerufen werden, das mit CSS animiert werden könnte. Und es kann auf verschiedene Weise geschrieben werden. Anstatt Objekte für Keyframes und Timing-Eigenschaften zu erstellen, könnten wir deren Werte direkt übergeben, wie folgt:

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

Was noch mehr ist, wenn wir nur die Dauer der Animation und nicht deren Iterationen angeben wollten (standardmäßig iterieren Animationen einmal), könnten wir einfach die Millisekunden übergeben:

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

Während wir mit der Web Animations API CSS-Animationen schreiben können, ist die API wirklich praktisch, wenn es darum geht, die Wiedergabe der Animation zu manipulieren. Die Web Animations API bietet mehrere nützliche Methoden zur Steuerung der Wiedergabe. Schauen wir uns das Pausieren und Abspielen von Animationen im Wachsen/Shrinking Alice-Spiel an (schauen Sie sich den [vollständigen Code auf CodePen](https://codepen.io/rachelnabors/pen/PNYGZQ)):

[![Alice spielt das Wachsen- und Schrumpfen-Spiel.](growing-shrinking_article_optimized.gif)](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010)

In diesem Spiel hat Alice eine Animation, die sie von klein zu groß werden lässt, die wir über eine Flasche und einen Cupcake steuern. Beide haben ihre eigenen Animationen.

### Pausieren und Abspielen von Animationen

Wir werden später mehr über Alice's Animation sprechen, aber jetzt schauen wir uns die Animation des Cupcakes genauer an:

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

Die [`Element.animate()`](/de/docs/Web/API/Element/animate)-Methode wird unmittelbar nachdem sie aufgerufen wurde ausgeführt. Um zu verhindern, dass der Kuchen sich selbst isst, bevor der Benutzer die Gelegenheit hatte, darauf zu klicken, rufen wir [`Animation.pause()`](/de/docs/Web/API/Animation/pause) unmittelbar nachdem sie definiert wurde:

```js
nommingCake.pause();
```

Wir können jetzt die [`Animation.play()`](/de/docs/Web/API/Animation/play)-Methode verwenden, um sie abzuspielen, wann immer wir bereit sind:

```js
nommingCake.play();
```

Insbesondere möchten wir es mit Alice's Animation verknüpfen, so dass sie größer wird, wenn der Cupcake gegessen wird. Wir können dies über die folgende Funktion erreichen:

```js
const growAlice = () => {
  // Play Alice's animation.
  aliceChange.play();

  // Play the cake's animation.
  nommingCake.play();
};
```

Wenn ein Benutzer seine Maus gedrückt hält oder seinen Finger auf dem Kuchen auf einem Touchscreen drückt, können wir jetzt `growAlice` aufrufen, um alle Animationen abspielen zu lassen:

```js
cake.addEventListener("mousedown", growAlice, false);
cake.addEventListener("touchstart", growAlice, false);
```

### Andere nützliche Methoden

Zusätzlich zum Pausieren und Abspielen können wir die folgenden Animation Methoden verwenden:

- [`Animation.finish()`](/de/docs/Web/API/Animation/finish) springt zum Ende der Animation.
- [`Animation.cancel()`](/de/docs/Web/API/Animation/cancel) bricht die Animation ab und entfernt ihre Effekte.
- [`Animation.reverse()`](/de/docs/Web/API/Animation/reverse) setzt die Abspielrate der Animation ([`Animation.playbackRate`](/de/docs/Web/API/Animation/playbackRate)) auf einen negativen Wert, damit sie rückwärts läuft.

Lassen Sie uns zuerst `playbackRate` betrachten — eine negative playbackRate lässt eine Animation rückwärts laufen. Wenn Alice aus der Flasche trinkt, wird sie kleiner. Dies liegt daran, dass die Flasche die Abspielrate ihrer Animation von 1 auf -1 ändert:

```js
const shrinkAlice = () => {
  aliceChange.playbackRate = -1;
  aliceChange.play();
};

bottle.addEventListener("mousedown", shrinkAlice, false);
bottle.addEventListener("touchstart", shrinkAlice, false);
```

In [Hinter den Spiegeln](https://en.wikipedia.org/wiki/Through_the_Looking-Glass), reist Alice zu einer Welt, in der sie rennen muss, um an Ort und Stelle zu bleiben — und doppelt so schnell rennt, um vorwärts zu kommen! Im Rennen der Roten Königin-Beispiel rennen Alice und die Rote Königin, um an Ort und Stelle zu bleiben (schauen Sie sich den [vollständigen Code auf CodePen](https://codepen.io/rachelnabors/pen/PNGGaV)):

[![Alice und die Rote Königin rennen, um im nächsten Raum zu gelangen, in diesem Spiel.](red-queen-race_optimized.gif)](https://codepen.io/rachelnabors/pen/PNGGaV)

Da kleine Kinder schnell müde werden, im Gegensatz zu Automaten-Schachstücken, verlangsamt sich Alice ständig. Wir können dies tun, indem wir einen Zerfall auf ihre `playbackRate`-Animation setzen. Wir verwenden `updatePlaybackRate()` anstelle der direkten Einstellung der playbackRate, da das ein sanftes Update erzeugt:

```js
setInterval(() => {
  // Make sure the playback rate never falls below .4
  if (redQueen_alice.playbackRate > 0.4) {
    redQueen_alice.updatePlaybackRate(redQueen_alice.playbackRate * 0.9);
  }
}, 3000);
```

Das Drängen auf sie durch Klicken oder Tippen lässt sie jedoch schneller laufen, indem ihre playbackRate multipliziert wird:

```js
const goFaster = () => {
  redQueen_alice.updatePlaybackRate(redQueen_alice.playbackRate * 1.1);
};

document.addEventListener("click", goFaster);
document.addEventListener("touchstart", goFaster);
```

Die Hintergrundelemente haben auch `playbackRate`s, die durch Klicken oder Tippen beeinflusst werden. Was passiert, wenn Sie Alice und die Rote Königin doppelt so schnell laufen lassen? Was geschieht, wenn Sie sie langsamer werden lassen?

## Persistieren von Animationsstilen

Beim Animieren von Elementen besteht ein häufiger Anwendungsfall darin, den Endzustand der Animation beizubehalten, nachdem die Animation beendet ist. Eine Methode, die hierfür manchmal verwendet wird, besteht darin, den Füllmodus der Animation [fill mode](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) auf `forwards` zu setzen. Es wird jedoch nicht empfohlen, Füllmodi zur dauerhaften Beibehaltung der Wirkung einer Animation zu verwenden, aus zwei Gründen:

- Der Browser muss den Zustand der Animation beibehalten, während sie noch aktiv ist, sodass die Animation weiterhin Ressourcen verbraucht, selbst wenn sie nicht mehr animiert wird. Beachten Sie, dass dies etwas dadurch gemildert wird, dass der Browser [füllende Animationen automatisch entfernt](#automatisches_entfernen_von_füllenden_animationen).
- Durch Animationen angewendete Styles haben eine [höhere Priorität in der Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade#cascading_order) als spezifizierte Styles, was es schwierig machen kann, sie bei Bedarf zu überschreiben.

Ein besserer Ansatz ist es, die Methode [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles) zu verwenden. Diese schreibt die berechneten Werte der aktuellen Stile der Animation in das [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut ihres Zielelements, woraufhin das Element normal gestylt werden kann.

## Automatisches Entfernen von füllenden Animationen

Es ist möglich, eine große Anzahl von Animationen auf demselben Element auszulösen. Wenn sie unbefristet sind (d.h. vorwärtsfüllend), kann dies zu einer riesigen Animationsliste führen, die ein Speicherleck verursachen könnte. Aus diesem Grund entfernen Browser automatisch füllende Animationen, nachdem sie durch neuere Animationen ersetzt wurden, es sei denn, der Entwickler gibt ausdrücklich an, sie beizubehalten.

Animationen werden entfernt, wenn alle folgenden Bedingungen zutreffen:

- Die Animation wird gefüllt (ihr `fill` ist `forwards`, wenn sie vorwärts läuft, `backwards`, wenn sie rückwärts läuft, oder `both`).
- Die Animation ist beendet. (Beachten Sie, dass sie aufgrund der `fill`-Einstellung weiterhin wirksam ist.)
- Die Zeitleiste der Animation ist monoton steigend. (Dies ist immer wahr für [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline); andere Zeitlinien wie {{cssxref("scroll-timeline")}} können rückwärts laufen.)
- Die Animation wird nicht durch deklaratives Markup wie CSS gesteuert.
- Jeder stilistische Effekt der Animation [`AnimationEffect`](/de/docs/Web/API/AnimationEffect) wird durch eine andere Animation überschrieben, die ebenfalls alle obigen Bedingungen erfüllt. (Typischerweise, wenn zwei Animationen dieselbe Stileigenschaft desselben Elements setzen würden, überschreibt die zuletzt erstellte die andere.)

Die ersten vier Bedingungen stellen sicher, dass die Wirkung der Animation ohne Eingreifen von JavaScript-Code niemals ändert oder endet. Die letzte Bedingung stellt sicher, dass die Animation niemals tatsächlich die Stile eines Elements beeinflusst: sie wurde vollständig ersetzt.

Wenn die Animation automatisch entfernt wird, wird das [`remove`](/de/docs/Web/API/Animation/remove_event) Ereignis der Animation ausgelöst.

Um zu verhindern, dass der Browser Animationen automatisch entfernt, rufen Sie die Methode [`persist()`](/de/docs/Web/API/Animation/persist) der Animation auf.

Die Eigenschaft [`replaceState`](/de/docs/Web/API/Animation/replaceState) der Animation wird `removed` sein, wenn die Animation entfernt wurde, `persisted`, wenn Sie [`persist()`](/de/docs/Web/API/Animation/persist) für die Animation aufgerufen haben, oder `active` ansonsten.

## Informationen aus Animationen erhalten

Stellen Sie sich vor, wir könnten die `playbackRate` auf andere Weisen verwenden, wie z.B. die Barrierefreiheit für Benutzer mit Gleichgewichtsstörungen zu verbessern, indem wir ihnen ermöglichen, Animationen auf einer ganzen Website zu verlangsamen. Das ist mit CSS unmöglich, ohne die Dauer in jeder CSS-Regel neu zu berechnen, aber mit der Web Animations API könnten wir die Methode [`Document.getAnimations`](/de/docs/Web/API/Document/getAnimations) verwenden, um jede Animation auf der Seite durchzugehen und ihre `playbackRate` zu halbieren, wie folgt:

```js
document.getAnimations().forEach((animation) => {
  animation.updatePlaybackRate(animation.playbackRate * 0.5);
});
```

Mit der Web Animations API müssen Sie nur eine einzige kleine Eigenschaft ändern!

Eine andere Sache, die mit CSS-Animationen allein schwer zu machen ist, ist das Erstellen von Abhängigkeiten von Werten, die von anderen Animationen bereitgestellt werden. Zum Beispiel könnte Ihnen im Beispiel des Wachsen- und Schrumpfen-Spiels von Alice etwas an der Dauer des Kuchens seltsam erscheinen:

```js
document.getElementById("eat-me_sprite").animate([], {
  duration: aliceChange.effect.timing.duration / 2,
});
```

Um zu verstehen, was hier passiert, werfen wir einen Blick auf Alice's Animation:

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

Alice's Animation lässt sie von der Hälfte ihrer Größe bis zur doppelten Größe über 8 Sekunden gehen. Dann pausieren wir sie:

```js
aliceChange.pause();
```

Wenn wir sie am Anfang ihrer Animation pausiert ließen, würde sie die Hälfte ihrer vollen Größe beginnen, als ob sie die ganze Flasche bereits ausgetrunken hätte! Wir möchten ihren Animations-"Spielkopf" in die Mitte setzen, sodass sie bereits zur Hälfte fertig ist. Wir könnten dies tun, indem wir ihre [`Animation.currentTime`](/de/docs/Web/API/Animation/currentTime) auf 4 Sekunden setzen, wie folgt:

```js
aliceChange.currentTime = 4000;
```

Aber während wir an dieser Animation arbeiten, könnten wir Alice's Dauer oft ändern. Wäre es nicht besser, wenn wir ihre `currentTime` dynamisch einstellen könnten, sodass wir nicht zwei Aktualisierungen auf einmal vornehmen müssen? Tatsächlich können wir dies tun, indem wir uns auf AliceChange's [`Animation.effect`](/de/docs/Web/API/Animation/effect)-Eigenschaft beziehen, die ein Objekt zurückgibt, das alle Details der auf Alice aktiven Effekte enthält:

```js
aliceChange.currentTime = aliceChange.effect.getComputedTiming().duration / 2;
```

`effect` ermöglicht es uns, auf die Keyframes und Timing-Eigenschaften der Animation zuzugreifen — `aliceChange.effect.getComputedTiming()` zeigt auf Alice's Timing-Objekt — dies enthält ihre [`duration`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect). Wir können ihre Dauer halbieren, um den Mittelpunkt ihrer Animationszeitleiste zu erhalten und sie auf normale Größe zu setzen. Jetzt können wir ihre Animation in beide Richtungen umkehren und abspielen, um sie größer oder kleiner zu machen!

Und wir können dasselbe tun, wenn wir die Dauer des Kuchens und der Flasche einstellen:

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

Wir können auch die Web Animations API verwenden, um die aktuelle Zeit der Animation zu bestimmen. Das Spiel endet, wenn kein Kuchen mehr da ist oder die Flasche leer ist. Welches Szenario den Spielern präsentiert wird, hängt davon ab, wie weit Alice in ihrer Animation war, ob sie zu groß geworden ist, um durch die kleine Tür zu kommen oder zu klein, um den Schlüssel zu erreichen, um die Tür zu öffnen. Wir können herausfinden, ob sie sich am großen oder kleinen Ende ihrer Animation befindet, indem wir die [`currentTime`](/de/docs/Web/API/Animation/currentTime) ihrer Animation abrufen und sie durch ihre `activeDuration` teilen:

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

## Rückrufe und Promises

CSS-Animationen und Transitionen haben ihre eigenen Event-Listener, und diese sind auch mit der Web Animations API möglich:

- [`onfinish`](/de/docs/Web/API/Animation/finish_event) ist der Ereignis-Handler für das `finish`-Ereignis und kann manuell mit [`finish()`](/de/docs/Web/API/Animation/finish) ausgelöst werden.
- [`oncancel`](/de/docs/Web/API/Animation/cancel_event) ist der Ereignis-Handler für das `cancel`-Ereignis und kann mit [`cancel()`](/de/docs/Web/API/Animation/cancel) ausgelöst werden.

Hier setzen wir die Rückrufe für den Kuchen, die Flasche und Alice, um die `endGame`-Funktion zu starten:

```js
// When the cake or bottle runs out
nommingCake.onfinish = endGame;
drinking.onfinish = endGame;

// Alice reaches the end of her animation
aliceChange.onfinish = endGame;
```

Noch besser ist, dass die Web Animations API auch ein [`finished`](/de/docs/Web/API/Animation/finished) Promise bietet, das aufgelöst wird, wenn die Animation endet, oder abgelehnt wird, wenn sie abgebrochen wird.

## Fazit

Dies sind die grundlegenden Funktionen der Web Animations API. Sie sollten nun bereit sein, in das "Kaninchenloch" der Animation im Browser zu springen und bereit sein, Ihre eigenen Animations-Experimente zu schreiben!

## Siehe auch

- Die [vollständige Suite von Alice im Wunderland Demos](https://codepen.io/collection/nqNJvD) auf CodePen zum Spielen, Forken und Teilen.
- [Animieren, als wäre es einem egal mit Element.animate](https://hacks.mozilla.org/2016/08/animating-like-you-just-dont-care-with-element-animate/) (2016) Erklärt den Hintergrund der Web Animations API und warum sie leistungsfähiger ist als andere Web-Animationsmethoden.
