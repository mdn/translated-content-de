---
title: Verwendung der Web Animations API
slug: Web/API/Web_Animations_API/Using_the_Web_Animations_API
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

{{DefaultAPISidebar("Web Animations")}}

Die Web Animations API ermöglicht es uns, Animationen zu erstellen und ihre Wiedergabe mit JavaScript zu steuern. Dieser Artikel führt Sie mit unterhaltsamen Demos und Anleitungen, die Alice im Wunderland enthalten, in die richtige Richtung.

## Einführung in die Web Animations API

Die [Web Animations API](/de/docs/Web/API/Web_Animations_API) öffnet die Animations-Engine des Browsers für Entwickler und zur Manipulation durch JavaScript. Diese API wurde entwickelt, um sowohl Implementierungen von [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) als auch [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) zugrunde zu liegen und lässt die Tür für zukünftige Animationseffekte offen. Sie ist eine der leistungsfähigsten Möglichkeiten, im Web zu animieren, da sie es dem Browser ermöglicht, eigene interne Optimierungen durchzuführen, ohne Hacks, Nötigung oder [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame).

Mit der Web Animations API können wir interaktive Animationen aus Stylesheets in JavaScript verschieben, wobei Präsentation und Verhalten getrennt werden. Wir müssen nicht mehr auf DOM-intensive Techniken wie das Schreiben von CSS-Eigenschaften und das Einfügen von Klassen auf Elemente zurückgreifen, um die Wiedergaberichtung zu steuern. Und anders als bei rein deklarativem CSS ermöglicht uns JavaScript auch das dynamische Festlegen von Werten von Eigenschaften bis hin zu Dauern. Für den Aufbau benutzerdefinierter Animationsbibliotheken und die Erstellung interaktiver Animationen könnte die Web Animations API das perfekte Werkzeug sein. Sehen wir uns an, was sie leisten kann!

## Schreiben von CSS-Animationen mit der Web Animations API

Eine der bekannteren Methoden, um die Web Animations API zu erlernen, ist der Einstieg mit etwas, das die meisten Webentwickler schon ausprobiert haben: CSS-Animationen. CSS-Animationen verfügen über eine vertraute Syntax, die sich gut für Demonstrationszwecke eignet.

### Die CSS-Version

Hier ist eine taumelnde Animation in CSS, die zeigt, wie Alice in das Kaninchenloch fällt, das ins Wunderland führt (siehe den vollständigen [Code auf CodePen](https://codepen.io/rachelnabors/pen/QyOqqW)):

[![Alice fällt in das Kaninchenloch.](tumbling-alice_optimized.gif)](https://codepen.io/rachelnabors/pen/rxpmJL)

Beachten Sie, dass der Hintergrund sich bewegt, Alice dreht sich und ihre Farbe ändert sich zeitlich versetzt zu ihrer Drehung. Wir werden uns in diesem Tutorial nur auf Alice konzentrieren. Hier ist das vereinfachte CSS, das Alices Animation steuert:

```css
#alice {
  animation: aliceTumbling infinite 3s linear;
}

@keyframes aliceTumbling {
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

Dies ändert Alices Farbe und die Rotation ihrer Transformation über 3 Sekunden bei einer konstanten (linearen) Geschwindigkeit und wiederholt sich unendlich. Im {{cssxref("@keyframes")}}-Block sehen wir, dass 30 % des Weges durch jede Schleife (etwa 0,9 Sekunden) Alices Farbe von Schwarz zu einem tiefen Burgunderrot wechselt und am Ende der Schleife wieder zurückwechselt.

### Übertragung in JavaScript

Versuchen wir nun, die gleiche Animation mit der Web Animations API zu erstellen.

#### Darstellung von Keyframes

Das erste, was wir brauchen, ist ein [Keyframe-Objekt](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats), das unserem CSS-{{cssxref("@keyframes")}}-Block entspricht:

```js
const aliceTumbling = [
  { transform: "rotate(0) translate3d(-50%, -50%, 0)", color: "black" },
  { color: "#431236", offset: 0.3 },
  { transform: "rotate(360deg) translate3d(-50%, -50%, 0)", color: "black" },
];
```

Hier verwenden wir ein Array, das mehrere Objekte enthält. Jedes Objekt repräsentiert einen Key aus dem ursprünglichen CSS. Anders als bei CSS muss der Web Animations API nicht explizit mitgeteilt werden, bei welchem Prozentsatz entlang der Animation jeder Key erscheinen soll. Es teilt die Animation automatisch in gleichmäßige Teile basierend auf der Anzahl der Keys, die Sie ihm geben. Das bedeutet, dass ein Keyframe-Objekt mit drei Keys den mittleren Key 50 % des Weges durch jede Schleife der Animation abspielen wird, wenn nicht anders angegeben.

Wenn wir möchten, dass ein Key explizit von den anderen Keys versetzt ist, können wir einen Offset direkt im Objekt angeben, getrennt von der Deklaration durch ein Komma. Im obigen Beispiel, um sicherzustellen, dass Alices Farbänderung bei 30 % (nicht 50 %) für die Farbänderung eintritt, geben wir ihm `offset: 0.3`.

Derzeit sollten mindestens zwei Keyframes angegeben werden (die Start- und Endstatus der Animationssequenz darstellen). Wenn Ihre Keyframe-Liste nur einen Eintrag hat, kann [`Element.animate()`](/de/docs/Web/API/Element/animate) in einigen Browsern einen `NotSupportedError`-[`DOMException`](/de/docs/Web/API/DOMException) auslösen, bis diese aktualisiert wurden.

Zusammenfassend sind die Keys standardmäßig gleichmäßig verteilt, es sei denn, Sie geben einen Offset für einen Key an. Praktisch, oder?

#### Darstellung von Zeitgebungs-Eigenschaften

Wir müssen auch ein Objekt von Zeitgebungs-Eigenschaften erstellen, das den Werten in Alices Animation entspricht:

```js
const aliceTiming = {
  duration: 3000,
  iterations: Infinity,
};
```

Sie werden einige Unterschiede bemerken, wie gleichwertige Werte in CSS dargestellt werden:

- Zum einen wird die Dauer in Millisekunden statt in Sekunden angegeben — 3000 statt 3s. Wie [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) akzeptiert die Web Animations API nur Millisekunden.
- Das andere, was Sie bemerken werden, ist, dass es `iterations` anstelle von `iteration-count` ist.

> [!NOTE]
> Es gibt eine Reihe kleiner Unterschiede zwischen der in CSS-Animationen verwendeten Terminologie und der in Web-Animationen verwendeten Terminologie. Zum Beispiel verwendet Web Animations nicht den String `"infinite"`, sondern das JavaScript-Schlüsselwort `Infinity`. Und anstelle von `timing-function` verwenden wir `easing`. Wir listen hier keinen `easing`-Wert auf, weil, anders als bei CSS-Animationen, bei denen die standardmäßige {{cssxref("animation-timing-function")}} `ease` ist, in der Web Animations API das standardmäßige `easing` `linear` ist — was wir hier wollen.

#### Die Teile zusammenbringen

Jetzt ist es an der Zeit, sie mit der [`Element.animate()`](/de/docs/Web/API/Element/animate)-Methode zusammenzubringen:

```js
document.getElementById("alice").animate(aliceTumbling, aliceTiming);
```

Und boom: Die Animation beginnt zu spielen (siehe die fertige [Version auf CodePen](https://codepen.io/rachelnabors/pen/rxpmJL)).

Die `animate()`-Methode kann auf jedem DOM-Element aufgerufen werden, das mit CSS animiert werden könnte. Und sie kann auf verschiedene Weise geschrieben werden. Anstatt Objekte für Keyframes und Zeiteigenschaften zu erstellen, könnten wir ihre Werte direkt übergeben, wie folgt:

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

Was mehr ist, wenn wir nur die Dauer der Animation und nicht ihre Iterationen angeben wollten (standardmäßig iterieren Animationen einmal), könnten wir nur die Millisekunden übergeben:

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

Während wir CSS-Animationen mit der Web Animations API schreiben können, ist die API wirklich nützlich, wenn es darum geht, die Wiedergabe der Animation zu manipulieren. Die Web Animations API bietet mehrere nützliche Methoden zur Steuerung der Wiedergabe. Sehen wir uns das Pausieren und Abspielen von Animationen im "Wachsende/Shrinkende Alice"-Spiel an (sehen Sie sich den [vollständigen Code auf CodePen](https://codepen.io/rachelnabors/pen/PNYGZQ) an):

[![Das wachsende und schrumpfende Spiel mit Alice spielen.](growing-shrinking_article_optimized.gif)](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010)

In diesem Spiel hat Alice eine Animation, die sie von klein auf groß macht, die wir über eine Flasche und einen Cupcake steuern. Beide haben ihre eigenen Animationen.

### Pausieren und Abspielen von Animationen

Wir werden später mehr über Alices Animation sprechen, aber lassen Sie uns jetzt näher auf die Animation des Cupcakes eingehen:

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

Die Methode [`Element.animate()`](/de/docs/Web/API/Element/animate) wird sofort ausgeführt, nachdem sie aufgerufen wurde. Um zu verhindern, dass sich der Kuchen selbst auffrisst, bevor der Benutzer die Gelegenheit hatte, ihn anzuklicken, rufen wir [`Animation.pause()`](/de/docs/Web/API/Animation/pause) direkt nach ihrer Definition auf, wie folgt:

```js
nommingCake.pause();
```

Wir können nun die Methode [`Animation.play()`](/de/docs/Web/API/Animation/play) verwenden, um sie abzuspielen, wann immer wir bereit sind:

```js
nommingCake.play();
```

Insbesondere möchten wir sie mit Alices Animation verknüpfen, damit sie größer wird, während der Cupcake gegessen wird. Dies können wir mit der folgenden Funktion erreichen:

```js
const growAlice = () => {
  // Play Alice's animation.
  aliceChange.play();

  // Play the cake's animation.
  nommingCake.play();
};
```

Wenn ein Benutzer die Maus gedrückt hält oder mit dem Finger auf dem Kuchen auf einem Touchscreen drückt, können wir nun `growAlice` aufrufen, um alle Animationen abzuspielen:

```js
cake.addEventListener("mousedown", growAlice, false);
cake.addEventListener("touchstart", growAlice, false);
```

### Andere nützliche Methoden

Neben dem Pausieren und Abspielen können wir die folgenden Animationsmethoden verwenden:

- [`Animation.finish()`](/de/docs/Web/API/Animation/finish) springt zum Ende der Animation.
- [`Animation.cancel()`](/de/docs/Web/API/Animation/cancel) bricht die Animation ab und entfernt ihre Effekte.
- [`Animation.reverse()`](/de/docs/Web/API/Animation/reverse) setzt die Wiedergabegeschwindigkeit der Animation ([`Animation.playbackRate`](/de/docs/Web/API/Animation/playbackRate)) auf einen negativen Wert, sodass sie rückwärts abläuft.

Sehen wir uns zuerst `playbackRate` an — eine negative `playbackRate` führt dazu, dass eine Animation rückwärts abläuft. Wenn Alice aus der Flasche trinkt, wird sie kleiner. Dies liegt daran, dass die Flasche die `playbackRate` ihrer Animation von 1 auf -1 ändert:

```js
const shrinkAlice = () => {
  aliceChange.playbackRate = -1;
  aliceChange.play();
};

bottle.addEventListener("mousedown", shrinkAlice, false);
bottle.addEventListener("touchstart", shrinkAlice, false);
```

In [Hinter den Spiegeln](https://en.wikipedia.org/wiki/Through_the_Looking-Glass) reist Alice in eine Welt, in der sie rennen muss, um an Ort und Stelle zu bleiben — und doppelt so schnell rennen muss, um sich vorwärts zu bewegen! Im Roten-Königin-Rennen-Beispiel rennen Alice und die Rote Königin, um an Ort und Stelle zu bleiben (sehen Sie sich den [vollständigen Code auf CodePen](https://codepen.io/rachelnabors/pen/PNGGaV) an):

[![Alice und die Rote Königin rennen, um zum nächsten Quadrat zu gelangen.](red-queen-race_optimized.gif)](https://codepen.io/rachelnabors/pen/PNGGaV)

Da kleine Kinder sich leicht ermüden, im Gegensatz zu Automaten-Schachfiguren, wird Alice ständig langsamer. Wir können dies tun, indem wir einen Verfall auf ihre `playbackRate` der Animation setzen. Wir verwenden `updatePlaybackRate()` anstelle der direkten Einstellung der `playbackRate`, da dies eine nahtlose Aktualisierung ergibt:

```js
setInterval(() => {
  // Make sure the playback rate never falls below .4
  if (redQueen_alice.playbackRate > 0.4) {
    redQueen_alice.updatePlaybackRate(redQueen_alice.playbackRate * 0.9);
  }
}, 3000);
```

Aber sie anzuspornen, indem man klickt oder tippt, lässt sie schneller werden, indem ihre `playbackRate` multipliziert wird:

```js
const goFaster = () => {
  redQueen_alice.updatePlaybackRate(redQueen_alice.playbackRate * 1.1);
};

document.addEventListener("click", goFaster);
document.addEventListener("touchstart", goFaster);
```

Die Hintergrundelemente haben ebenfalls `playbackRate`s, die beeinflusst werden, wenn Sie klicken oder tippen. Was passiert, wenn Sie Alice und die Rote Königin doppelt so schnell rennen lassen? Was passiert, wenn Sie sie langsamer werden lassen?

## Persistenz von Animationsstilen

Beim Animieren von Elementen ist ein häufiges Anwendungsszenario, den Endzustand der Animation beizubehalten, nachdem die Animation beendet ist. Eine Methode, die manchmal dafür verwendet wird, ist das Setzen des [Fill-Modus](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) auf `forwards`. Es wird jedoch nicht empfohlen, Fill-Modi zu verwenden, um den Effekt einer Animation unendlich zu halten, aus zwei Gründen:

- Der Browser muss den Zustand der Animation aufrechterhalten, während sie noch aktiv ist, sodass die Animation weiterhin Ressourcen verbraucht, obwohl sie nicht mehr animiert. Beachten Sie, dass dies etwas erleichtert wird, indem der Browser [füllende Animationen automatisch entfernt](#automatisches_entfernen_von_füllenden_animationen).
- Von Animationen angewendete Stile haben eine [höhere Priorität in der Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade#cascading_order) als spezifizierte Stile, weshalb es schwierig sein kann, sie bei Bedarf zu überschreiben.

Ein besserer Ansatz ist die Verwendung der [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles)-Methode. Diese schreibt die berechneten Werte der aktuellen Stile der Animation in das [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut ihres Zielelements, wonach das Element wie gewohnt neu gestylt werden kann.

## Automatisches Entfernen von füllenden Animationen

Es ist möglich, eine große Anzahl von Animationen auf demselben Element auszulösen. Wenn sie unendlich sind (d.h. nach vorne füllend), kann dies zu einer enormen Animationsliste führen, die ein Speicherleck verursachen könnte. Aus diesem Grund entfernen Browser automatisch füllende Animationen, nachdem sie durch neuere Animationen ersetzt wurden, es sei denn, der Entwickler gibt ausdrücklich an, sie beizubehalten.

Animationen werden entfernt, wenn alle folgenden Bedingungen erfüllt sind:

- Die Animation füllt (ihr `fill` ist `forwards`, wenn sie vorwärts abspielt, `backwards`, wenn sie rückwärts abspielt, oder `both`).
- Die Animation ist beendet. (Beachten Sie, dass sie aufgrund des `fill` dennoch in Kraft bleibt.)
- Die Zeitleiste der Animation steigt monoton. (Dies ist immer wahr für [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline); andere Zeitleisten wie {{cssxref("scroll-timeline")}} können rückwärts laufen.)
- Die Animation wird nicht durch deklarative Markup wie CSS gesteuert.
- Jeder Stileffekt der Animation's [`AnimationEffect`](/de/docs/Web/API/AnimationEffect) wird durch eine andere Animation überschrieben, die ebenfalls alle obigen Bedingungen erfüllt. (Typischerweise, wenn zwei Animationen dieselbe Stileigenschaft desselben Elements setzen würden, überschreibt die zuletzt erstellte Animation die andere.)

Die ersten vier Bedingungen stellen sicher, dass die Wirkung der Animation, ohne Eingriff durch JavaScript-Code, sich niemals ändern oder enden wird. Die letzte Bedingung stellt sicher, dass die Animation niemals tatsächlich den Stil eines Elements beeinflussen wird: Sie wurde vollständig ersetzt.

Wenn die Animation automatisch entfernt wird, wird das [`remove`](/de/docs/Web/API/Animation/remove_event) Ereignis der Animation ausgelöst.

Um zu verhindern, dass der Browser automatisch Animationen entfernt, rufen Sie die [`persist()`](/de/docs/Web/API/Animation/persist)-Methode der Animation auf.

Die [`replaceState`](/de/docs/Web/API/Animation/replaceState)-Eigenschaft der Animation wird `removed` sein, wenn die Animation entfernt wurde, `persisted`, wenn Sie [`persist()`](/de/docs/Web/API/Animation/persist) auf die Animation aufgerufen haben, oder `active` andersfalls.

## Informationen aus Animationen abrufen

Stellen Sie sich andere Möglichkeiten vor, wie wir `playbackRate` verwenden könnten, wie z.B. die Verbesserung der Zugänglichkeit für Benutzer mit vestibulären Störungen, indem sie ihnen ermöglicht wird, Animationen auf einer gesamten Webseite zu verlangsamen. Das ist mit CSS unmöglich, ohne die Dauern in jeder CSS-Regel neu zu berechnen, aber mit der Web Animations API könnten wir die [`Document.getAnimations`](/de/docs/Web/API/Document/getAnimations)-Methode verwenden, um über jede Animation auf der Seite zu schleifen und ihre `playbackRate`s zu halbieren, wie folgt:

```js
document.getAnimations().forEach((animation) => {
  animation.updatePlaybackRate(animation.playbackRate * 0.5);
});
```

Mit der Web Animations API müssen Sie nur eine kleine Eigenschaft ändern!

Eine weitere Sache, die schwer mit CSS-Animationen allein zu machen ist, ist, Abhängigkeiten von anderen Animationen bereitgestellten Werten zu schaffen. Zum Beispiel könnten Sie im Beispiel des "Wachsende und Schrumpfende Alice"-Spiels etwas Merkwürdiges an der Dauer des Kuchens bemerkt haben:

```js
document.getElementById("eat-me_sprite").animate([], {
  duration: aliceChange.effect.timing.duration / 2,
});
```

Um zu verstehen, was hier passiert, lassen Sie uns Alices Animation betrachten:

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

Alices Animation lässt sie in 8 Sekunden von halber Größe auf zweifache Größe gehen. Dann pausieren wir sie:

```js
aliceChange.pause();
```

Wenn wir sie zu Beginn ihrer Animation pausiert gelassen hätten, würde sie in halber Größe starten, als ob sie bereits die gesamte Flasche getrunken hätte! Wir möchten ihren Animation's "Playhead" in der Mitte setzen, damit sie bereits zur Hälfte fertig ist. Wir könnten dies tun, indem wir ihre [`Animation.currentTime`](/de/docs/Web/API/Animation/currentTime) auf 4 Sekunden setzen, wie folgt:

```js
aliceChange.currentTime = 4000;
```

Aber während wir an dieser Animation arbeiten, könnten wir Alices Dauer oft ändern. Wäre es nicht besser, wenn wir ihre `currentTime` dynamisch setzen, so dass wir nicht zwei Aktualisierungen gleichzeitig vornehmen müssen? Tatsächlich können wir dies tun, indem wir die [`Animation.effect`](/de/docs/Web/API/Animation/effect)-Eigenschaft von `aliceChange` referenzieren, die ein Objekt mit allen Details der Effekt(e) auf Alice enthält:

```js
aliceChange.currentTime = aliceChange.effect.getComputedTiming().duration / 2;
```

`effect` ermöglicht es uns, auf die Keyframes und Zeitgebungs-Eigenschaften der Animation zuzugreifen — `aliceChange.effect.getComputedTiming()` zeigt auf Alices Zeitgebungsobjekt — dieses enthält ihre [`duration`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect). Wir können ihre Dauer halbieren, um den Mittelpunkt für ihre Animationszeitleiste zu erhalten und sie auf normale Höhe zu setzen. Jetzt können wir ihre Animation in beide Richtungen umkehren und abspielen, um sie kleiner oder größer werden zu lassen!

Und wir können das gleiche tun, wenn wir die Dauer des Kuchens und der Flasche setzen:

```js
const drinking = document
  .getElementById("liquid")
  .animate([{ height: "100%" }, { height: "0" }], {
    fill: "forwards",
    duration: aliceChange.effect.getComputedTiming().duration / 2,
  });
drinking.pause();
```

Jetzt sind alle drei Animationen nur mit einer Dauer verknüpft, die wir leicht von einem Ort ändern können.

Wir können auch die Web Animations API verwenden, um die aktuelle Zeit der Animation herauszufinden. Das Spiel endet, wenn Ihnen der Kuchen zum Essen ausgeht oder die Flasche leer ist. Welche Vignette den Spielern gezeigt wird, hängt davon ab, wie weit Alice in ihrer Animation vorangeschritten ist, ob sie zu groß wurde und nicht mehr durch die kleine Tür gelangen kann oder zu klein und nicht mehr den Schlüssel zum Öffnen der Tür erreichen kann. Wir können herausfinden, ob sie sich am großen oder kleinen Ende ihrer Animation befindet, indem wir die [`currentTime`](/de/docs/Web/API/Animation/currentTime) ihrer Animation abrufen und durch ihre `activeDuration` teilen:

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

CSS-Animationen und -Übergänge haben ihre eigenen Ereignis-Listener und diese sind auch mit der Web Animations API möglich:

- [`onfinish`](/de/docs/Web/API/Animation/finish_event) ist der Ereignis-Handler für das `finish`-Ereignis und kann manuell mit [`finish()`](/de/docs/Web/API/Animation/finish) ausgelöst werden.
- [`oncancel`](/de/docs/Web/API/Animation/cancel_event) ist der Ereignis-Handler für das `cancel`-Ereignis und kann mit [`cancel()`](/de/docs/Web/API/Animation/cancel) ausgelöst werden.

Hier legen wir die Rückrufe für den Kuchen, die Flasche und Alice fest, um die `endGame`-Funktion auszulösen:

```js
// When the cake or bottle runs out
nommingCake.onfinish = endGame;
drinking.onfinish = endGame;

// Alice reaches the end of her animation
aliceChange.onfinish = endGame;
```

Noch besser ist, dass die Web Animations API auch ein [`finished`](/de/docs/Web/API/Animation/finished)-Versprechen bietet, das erfüllt wird, wenn die Animation endet, oder abgelehnt wird, wenn sie abgebrochen wird.

## Fazit

Dies sind die grundlegenden Funktionen der Web Animations API. Bis jetzt sollten Sie bereit sein, "in das Kaninchenloch zu springen" und im Browser zu animieren und Ihre eigenen Animationsexperimente zu schreiben!

## Siehe auch

- Die [vollständige Suite der Alice im Wunderland-Demos](https://codepen.io/collection/nqNJvD) auf CodePen, die Sie ausprobieren, forkieren und teilen können.
- [Animieren wie man es nicht mehr kümmert mit Element.animate](https://hacks.mozilla.org/2016/08/animating-like-you-just-dont-care-with-element-animate/) (2016) erklärt den Hintergrund der Web Animations API und warum sie leistungsfähiger ist als andere Web-Animationsmethoden.
