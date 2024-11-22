---
title: Verwenden der Web Animations API
slug: Web/API/Web_Animations_API/Using_the_Web_Animations_API
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{DefaultAPISidebar("Web Animations")}}

Die Web Animations API ermöglicht es uns, Animationen zu erstellen und ihre Wiedergabe mit JavaScript zu steuern. Dieser Artikel wird Ihnen den richtigen Einstieg mit unterhaltsamen Demos und Tutorials mit Alice im Wunderland geben.

## Einführung in die Web Animations API

Die [Web Animations API](/de/docs/Web/API/Web_Animations_API) öffnet die Animations-Engine des Browsers für Entwickler und Manipulationen durch JavaScript. Diese API wurde entwickelt, um Implementierungen von sowohl [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) als auch [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) zugrunde zu liegen und lässt Raum für zukünftige Animationseffekte. Sie ist eine der performantesten Möglichkeiten, im Web zu animieren, da der Browser seine eigenen internen Optimierungen ohne Hacks, Zwänge oder [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) vornehmen kann.

Mit der Web Animations API können wir interaktive Animationen von Stylesheets nach JavaScript verschieben und die Präsentation vom Verhalten trennen. Wir müssen nicht mehr auf DOM-intensive Techniken wie das Schreiben von CSS-Eigenschaften und das Setzen von Klassen auf Elemente zur Steuerung der Wiedergaberichtung zurückgreifen. Und im Gegensatz zu rein deklarativem CSS können wir mit JavaScript auch dynamisch Werte von Eigenschaften bis hin zu Dauern festlegen. Für den Aufbau benutzerdefinierter Animationsbibliotheken und das Erstellen interaktiver Animationen könnte die Web Animations API das perfekte Werkzeug für den Job sein. Schauen wir uns an, was sie kann!

## Schreiben von CSS-Animationen mit der Web Animations API

Einer der vertrauteren Ansätze zum Erlernen der Web Animations API besteht darin, mit etwas zu beginnen, mit dem die meisten Webentwickler schon zuvor gespielt haben: CSS-Animationen. CSS-Animationen haben eine vertraute Syntax, die sich gut zu Demonstrationszwecken aufgliedern lässt.

### Die CSS-Version

Hier ist eine Animation, die das Fallen von Alice in das Kaninchenloch zeigt, das ins Wunderland führt (sehen Sie sich den vollständigen [Code auf CodePen](https://codepen.io/rachelnabors/pen/QyOqqW) an):

[![Alice fällt in das Kaninchenloch.](tumbling-alice_optimized.gif)](https://codepen.io/rachelnabors/pen/rxpmJL)

Beachten Sie, dass sich der Hintergrund bewegt, Alice sich dreht und ihre Farbe versetzt zur Drehung ändert. Wir werden uns in diesem Tutorial nur auf Alice konzentrieren. Hier ist das vereinfachte CSS, das die Animation von Alice steuert:

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

Dies ändert Alices Farbe und die Rotation ihres `transform` über 3 Sekunden mit einer konstanten (linearen) Rate und wiederholt sich unendlich. Im {{cssxref("@keyframes")}}-Block sehen wir, dass 30% des Weges durch jede Schleife (etwa .9 Sekunden) Alices Farbe von Schwarz in ein tiefes Burgunderrot wechselt und am Ende der Schleife wieder zurück.

### In JavaScript umwandeln

Versuchen wir nun, dieselbe Animation mit der Web Animations API zu erstellen.

#### Keyframes darstellen

Das Erste, was wir benötigen, ist die Erstellung eines [Keyframe Objects](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats), das unserem CSS-{{cssxref("@keyframes")}}-Block entspricht:

```js
const aliceTumbling = [
  { transform: "rotate(0) translate3D(-50%, -50%, 0)", color: "#000" },
  { color: "#431236", offset: 0.3 },
  { transform: "rotate(360deg) translate3D(-50%, -50%, 0)", color: "#000" },
];
```

Hier verwenden wir ein Array mit mehreren Objekten. Jedes Objekt repräsentiert einen Schlüssel aus dem ursprünglichen CSS. Im Gegensatz zu CSS muss der Web Animations API jedoch nicht explizit mitgeteilt werden, in welchen prozentualen Abständen jedes Schlüsselbild erscheinen soll. Es wird die Animation automatisch in gleiche Teile unterteilen, basierend auf der Anzahl der gegebenen Schlüssel. Dies bedeutet, dass ein Keyframe-Objekt mit drei Schlüsseln das mittlere Schlüsselbild in 50% des Weges durch jede Schleife der Animation abspielt, es sei denn, es wird anders angegeben.

Wenn wir den Versatz eines Schlüssels von den anderen Schlüsseln explizit festlegen möchten, können wir den Versatz direkt im Objekt angeben, getrennt von der Deklaration durch ein Komma. Im obigen Beispiel, um sicherzustellen, dass sich Alices Farbe bei 30% (nicht 50%) für den Farbwechsel ändert, geben wir ihm `offset: 0.3`.

Derzeit sollten mindestens zwei Keyframes angegeben werden (die Anfangs- und Endzustände der Animationssequenz darstellend). Wenn Ihre Keyframeliste nur einen Eintrag hat, könnte [`Element.animate()`](/de/docs/Web/API/Element/animate) bei einigen Browsern einen `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException) auslösen, bis sie aktualisiert werden.

Zusammengefasst sind die Schlüssel standardmäßig gleichmäßig verteilt, es sei denn, Sie spezifizieren einen Versatz bei einem Schlüssel. Praktisch, nicht wahr?

#### Zeitverhältnisse darstellen

Wir müssen auch ein Objekt von Zeitsteuerungseigenschaften erstellen, das den Werten in Alices Animation entspricht:

```js
const aliceTiming = {
  duration: 3000,
  iterations: Infinity,
};
```

Hier fallen einige Unterschiede auf, wie äquivalente Werte in CSS dargestellt werden:

- Erstens ist die Dauer in Millisekunden statt in Sekunden — 3000 statt 3s. Wie [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) akzeptiert die Web Animations API nur Millisekunden.
- Ein weiterer Unterschied ist, dass es `iterations` und nicht `iteration-count` ist.

> [!NOTE]
> Es gibt eine Reihe kleiner Unterschiede zwischen der Terminologie, die in CSS-Animationen verwendet wird, und der in Web-Animationen. Zum Beispiel verwendet Web Animations nicht den String `"infinite"`, sondern das JavaScript-Schlüsselwort `Infinity`. Und anstelle von `timing-function` verwenden wir `easing`. Wir listen hier keinen `easing`-Wert auf, weil im Gegensatz zu CSS-Animationen, wo der Standardwert für {{cssxref("animation-timing-function")}} `ease` ist, der Standardwert für `easing` in der Web Animations API `linear` ist — was wir hier wollen.

#### Die Teile zusammenfügen

Jetzt ist es an der Zeit, sie mit der [`Element.animate()`](/de/docs/Web/API/Element/animate)-Methode zusammenzuführen:

```js
document.getElementById("alice").animate(aliceTumbling, aliceTiming);
```

Und voilà: Die Animation beginnt zu spielen (siehe die fertige [Version auf CodePen](https://codepen.io/rachelnabors/pen/rxpmJL)).

Die `animate()`-Methode kann auf jedem DOM-Element aufgerufen werden, das mit CSS animiert werden kann. Und es kann auf mehrere Arten geschrieben werden. Anstatt Objekte für Keyframes und Zeitsteuerungseigenschaften zu erstellen, könnten wir ihre Werte direkt übergeben, wie folgt:

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

Außerdem, wenn wir nur die Dauer der Animation und nicht deren Iterationen angeben wollten (standardmäßig wird eine Animation einmal iteriert), könnten wir einfach die Millisekunden allein übergeben:

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

Während wir CSS-Animationen mit der Web Animations API schreiben können, ist ihre wahre Stärke die Manipulation der Wiedergabe der Animation. Die Web Animations API bietet mehrere nützliche Methoden zur Steuerung der Wiedergabe. Schauen wir uns das Anhalten und Abspielen von Animationen im Spiel "Wachsendes/Sich verkleinerndes Alice" an (sehen Sie sich den [vollständigen Code auf CodePen](https://codepen.io/rachelnabors/pen/PNYGZQ) an):

[![Spielen des wachsendes und verkleinerndes Spiels mit Alice.](growing-shrinking_article_optimized.gif)](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010)

In diesem Spiel hat Alice eine Animation, die sie von klein zu groß bringt, was wir über eine Flasche und einen Cupcake steuern. Beide haben ihre eigenen Animationen.

### Pausieren und Abspielen von Animationen

Wir werden später mehr über Alices Animation sprechen, aber im Moment werfen wir einen genaueren Blick auf die Animation des Cupcakes:

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

Die Methode [`Element.animate()`](/de/docs/Web/API/Element/animate) wird sofort ausgeführt, nachdem sie aufgerufen wurde. Um zu verhindern, dass sich der Kuchen selbst aufisst, bevor der Benutzer die Möglichkeit hat, darauf zu klicken, rufen wir [`Animation.pause()`](/de/docs/Web/API/Animation/pause) sofort nach ihrer Definition wie folgt auf:

```js
nommingCake.pause();
```

Nun können wir die Methode [`Animation.play()`](/de/docs/Web/API/Animation/play) verwenden, um sie auszuführen, wann immer wir bereit sind:

```js
nommingCake.play();
```

Insbesondere möchten wir sie an Alices Animation knüpfen, sodass sie größer wird, während der Cupcake gegessen wird. Dies können wir über die folgende Funktion erreichen:

```js
const growAlice = () => {
  // Play Alice's animation.
  aliceChange.play();

  // Play the cake's animation.
  nommingCake.play();
};
```

Wenn ein Benutzer seine Maus gedrückt hält oder seinen Finger auf den Kuchen auf einem Touchscreen legt, können wir nun `growAlice` aufrufen, um alle Animationen abzuspielen:

```js
cake.addEventListener("mousedown", growAlice, false);
cake.addEventListener("touchstart", growAlice, false);
```

### Weitere nützliche Methoden

Zusätzlich zum Pausieren und Abspielen können wir die folgenden Animation-Methoden verwenden:

- [`Animation.finish()`](/de/docs/Web/API/Animation/finish) springt zum Ende der Animation.
- [`Animation.cancel()`](/de/docs/Web/API/Animation/cancel) bricht die Animation ab und entfernt ihre Effekte.
- [`Animation.reverse()`](/de/docs/Web/API/Animation/reverse) setzt die Wiedergabegeschwindigkeit der Animation ([`Animation.playbackRate`](/de/docs/Web/API/Animation/playbackRate)) auf einen negativen Wert, sodass sie rückwärts läuft.

Schauen wir uns zuerst die `playbackRate` an — eine negative `playbackRate` lässt eine Animation rückwärts laufen. Wenn Alice aus der Flasche trinkt, wird sie kleiner. Das liegt daran, dass die Flasche ihre `playbackRate` von 1 auf -1 ändert:

```js
const shrinkAlice = () => {
  aliceChange.playbackRate = -1;
  aliceChange.play();
};

bottle.addEventListener("mousedown", shrinkAlice, false);
bottle.addEventListener("touchstart", shrinkAlice, false);
```

In [Hinter den Spiegeln](https://en.wikipedia.org/wiki/Through_the_Looking-Glass) reist Alice in eine Welt, in der sie laufen muss, um an Ort und Stelle zu bleiben — und doppelt so schnell laufen muss, um sich vorwärts zu bewegen! Im Beispiel des Rennens der Roten Königin rennen Alice und die Rote Königin, um an Ort und Stelle zu bleiben (sehen Sie sich den [vollständigen Code auf CodePen](https://codepen.io/rachelnabors/pen/PNGGaV) an):

[![Alice und die Rote Königin rennen, um das nächste Feld zu erreichen.](red-queen-race_optimized.gif)](https://codepen.io/rachelnabors/pen/PNGGaV)

Da kleine Kinder leicht ermüden, im Gegensatz zu automatisierten Schachfiguren, verlangsamt sich Alice ständig. Wir können dies erreichen, indem wir einen Abbau auf ihre `playbackRate` setzen. Wir verwenden `updatePlaybackRate()` anstelle der direkten Einstellung der `playbackRate`, da dies ein reibungsloses Update ergibt:

```js
setInterval(() => {
  // Make sure the playback rate never falls below .4
  if (redQueen_alice.playbackRate > 0.4) {
    redQueen_alice.updatePlaybackRate(redQueen_alice.playbackRate * 0.9);
  }
}, 3000);
```

Aber wenn man sie anfeuert, indem man klickt oder tippt, lässt sie schneller laufen, indem man ihre `playbackRate` multipliziert:

```js
const goFaster = () => {
  redQueen_alice.updatePlaybackRate(redQueen_alice.playbackRate * 1.1);
};

document.addEventListener("click", goFaster);
document.addEventListener("touchstart", goFaster);
```

Die Hintergrundelemente haben ebenfalls `playbackRate`s, die beim Klick oder Tippen beeinflusst werden. Was passiert, wenn Sie Alice und die Rote Königin doppelt so schnell laufen lassen? Was passiert, wenn Sie ihnen erlauben, langsamer zu werden?

## Persistieren von Animationsstilen

Bei der Animation von Elementen besteht ein häufiges Anwendungsbeispiel darin, den Endzustand der Animation zu behalten, nachdem die Animation abgeschlossen ist. Eine Methode, die hierfür manchmal verwendet wird, ist das Setzen des `fill mode` der Animation auf `forwards`. Es wird jedoch nicht empfohlen, Füllmodi zu verwenden, um die Wirkung einer Animation unbegrenzt beizubehalten, aus zwei Gründen:

- Der Browser muss den Zustand der Animation beibehalten, während sie noch aktiv ist, sodass die Animation weiterhin Ressourcen verbraucht, obwohl sie nicht mehr animiert. Beachten Sie, dass dies durch das automatische Entfernen der Füllanimations durch den Browser [teilweise gelindert wird](#automatisches_entfernen_von_füllanimationen).
- Von Animationen angewendete Stile haben eine [höhere Priorität in der Kaskade](/de/docs/Web/CSS/Cascade#cascading_order) als spezifizierte Stile, sodass es schwierig sein kann, sie bei Bedarf zu überschreiben.

Ein besserer Ansatz ist die Verwendung der Methode [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles). Diese schreibt die berechneten Werte der aktuellen Stile der Animation in das `style`-Attribut ihres Ziel-Elements, danach kann das Element normal neu gestylt werden.

## Automatisches Entfernen von Füllanimationen

Es ist möglich, eine große Anzahl von Animationen auf demselben Element auszulösen. Wenn sie unbegrenzt sind (d.h. forwards-füllend), könnte dies zu einer riesigen Animationsliste führen, was ein Speicherleck erzeugen könnte. Aus diesem Grund entfernen Browser Füllanimationen automatisch, nachdem sie durch neuere Animationen ersetzt wurden, es sei denn, der Entwickler gibt ausdrücklich an, sie zu behalten.

Animationen werden entfernt, wenn alle folgenden Bedingungen erfüllt sind:

- Die Animation wird gefüllt (ihr `fill` ist `forwards`, wenn sie vorwärts abgespielt wird, `backwards`, wenn sie rückwärts abgespielt wird, oder `both`).
- Die Animation ist beendet. (Beachten Sie, dass sie aufgrund des `fill` weiterhin in Kraft bleibt.)
- Die Zeitleiste der Animation ist monoton zunehmend. (Dies ist immer wahr für [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline); andere Zeitleisten wie {{cssxref("scroll-timeline")}} können rückwärts laufen.)
- Die Animation wird nicht durch deklarative Markup wie CSS gesteuert.
- Jeder Stileffekt des [`AnimationEffect`](/de/docs/Web/API/AnimationEffect) der Animation wird durch eine andere Animation überschrieben, die ebenfalls alle oben genannten Bedingungen erfüllt. (Typischerweise, wenn zwei Animationen dieselbe Stileigenschaft desselben Elements setzen würden, überschreibt die zuletzt erstellte Animation die andere.)

Die ersten vier Bedingungen stellen sicher, dass die Animation ohne Eingriff durch JavaScript-Code niemals ihre Wirkung ändern oder enden wird. Die letzte Bedingung stellt sicher, dass die Animation niemals tatsächlich den Stil eines Elements beeinflussen wird: Sie wurde vollständig ersetzt.

Wenn die Animation automatisch entfernt wird, wird das `remove`-Ereignis der Animation ausgelöst.

Um zu verhindern, dass der Browser Animationen automatisch entfernt, rufen Sie die Methode [`persist()`](/de/docs/Web/API/Animation/persist) der Animation auf.

Die Eigenschaft [`replaceState`](/de/docs/Web/API/Animation/replaceState) der Animation wird `removed` sein, wenn die Animation entfernt wurde, `persisted`, wenn Sie [`persist()`](/de/docs/Web/API/Animation/persist) auf die Animation aufgerufen haben, oder `active` sonst.

## Informationen aus Animationen abrufen

Stellen Sie sich vor, wir könnten `playbackRate` auf andere Weise nutzen, zum Beispiel um die Barrierefreiheit für Benutzer mit vestibulären Störungen zu verbessern, indem wir ihnen ermöglichen, Animationen auf einer gesamten Website zu verlangsamen. Das wäre mit CSS unmöglich, ohne die Dauern in jeder CSS-Regel neu zu berechnen, aber mit der Web Animations API könnten wir die Methode [`Document.getAnimations`](/de/docs/Web/API/Document/getAnimations) nutzen, um über jede Animation auf der Seite zu gehen und ihre `playbackRate`s zu halbieren, wie folgt:

```js
document.getAnimations().forEach((animation) => {
  animation.updatePlaybackRate(animation.playbackRate * 0.5);
});
```

Mit der Web Animations API müssen Sie nur eine kleine Eigenschaft ändern!

Eine weitere Sache, die mit CSS-Animationen allein schwer zu machen ist, ist das Erstellen von Abhängigkeiten von Werten, die von anderen Animationen bereitgestellt werden. Beispielsweise könnte Ihnen im Beispiel des wachsenden und schrumpfenden Alice-Spiels etwas Seltsames an der Dauer des Kuchens aufgefallen sein:

```js
document.getElementById("eat-me_sprite").animate([], {
  duration: aliceChange.effect.timing.duration / 2,
});
```

Um zu verstehen, was hier passiert, schauen wir uns Alices Animation genauer an:

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

Alices Animation lässt sie von ihrer halben Größe zu ihrer doppelten Größe über 8 Sekunden gehen. Dann pausieren wir sie:

```js
aliceChange.pause();
```

Wenn wir sie zu Beginn ihrer Animation pausiert belassen hätten, würde sie in halber Größe beginnen, als hätte sie schon die gesamte Flasche getrunken! Wir möchten ihren "Abspielkopf" in der Mitte einstellen, sodass sie schon halb fertig ist. Wir könnten dies tun, indem wir ihre [`Animation.currentTime`](/de/docs/Web/API/Animation/currentTime) auf 4 Sekunden setzen, wie folgt:

```js
aliceChange.currentTime = 4000;
```

Aber während wir an dieser Animation arbeiten, könnten wir Alices Dauer oft ändern. Wäre es nicht besser, wenn wir ihre `currentTime` dynamisch einstellen könnten, sodass wir nicht zwei Aktualisierungen auf einmal vornehmen müssen? Wir können dies tatsächlich erreichen, indem wir auf die Eigenschaft [`Animation.effect`](/de/docs/Web/API/Animation/effect) von aliceChange verweisen, die ein Objekt zurückgibt, das alle Details der auf Alice aktiven Effekte enthält:

```js
aliceChange.currentTime = aliceChange.effect.getComputedTiming().duration / 2;
```

`effect` ermöglicht es uns, auf die Keyframes und Zeitsteuerungseigenschaften der Animation zuzugreifen — `aliceChange.effect.getComputedTiming()` weist auf Alices Zeitsteuerungsobjekt hin — dies enthält ihre [`dauer`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect). Wir können ihre Dauer halbieren, um den Mittelpunkt ihrer Animationszeitleiste zu erhalten, und sie auf normale Höhe setzen. Jetzt können wir ihre Animation in beide Richtungen umkehren und abspielen lassen, um sie kleiner oder größer werden zu lassen!

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

Jetzt sind alle drei Animationen an nur eine Dauer gebunden, die wir leicht an einem Ort ändern können.

Wir können die Web Animations API auch verwenden, um die aktuelle Zeit der Animation herauszufinden. Das Spiel endet, wenn Sie keinen Kuchen mehr zum Essen haben oder die Flasche geleert ist. Welche Szene den Spielern präsentiert wird, hängt davon ab, wie weit Alice in ihrer Animation war, ob sie zu groß geworden ist und nicht mehr durch die kleine Tür passt, oder zu klein, um den Schlüssel zu erreichen, um die Tür zu öffnen. Wir können feststellen, ob sie am großen oder kleinen Ende ihrer Animation steht, indem wir die [`currentTime`](/de/docs/Web/API/Animation/currentTime) ihrer Animation abrufen und sie durch ihre `activeDuration` teilen:

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

## Rückrufe und Versprechungen

CSS-Animationen und Übergänge haben ihre eigenen Ereignis-Listener, und diese sind auch mit der Web Animations API möglich:

- [`onfinish`](/de/docs/Web/API/Animation/finish_event) ist der Ereignishandler für das `finish`-Ereignis und kann manuell mit [`finish()`](/de/docs/Web/API/Animation/finish) ausgelöst werden.
- [`oncancel`](/de/docs/Web/API/Animation/cancel_event) ist der Ereignishandler für das `cancel`-Ereignis und kann mit [`cancel()`](/de/docs/Web/API/Animation/cancel) ausgelöst werden.

Hier setzen wir die Rückrufe für den Kuchen, die Flasche und Alice, um die Funktion `endGame` auszulösen:

```js
// When the cake or bottle runs out
nommingCake.onfinish = endGame;
drinking.onfinish = endGame;

// Alice reaches the end of her animation
aliceChange.onfinish = endGame;
```

Noch besser ist, dass die Web Animations API auch ein [`finished`](/de/docs/Web/API/Animation/finished)-Versprechen bietet, das sich auflöst, wenn die Animation beendet ist, oder abgelehnt wird, wenn sie abgebrochen wird.

## Fazit

Dies sind die grundlegenden Funktionen der Web Animations API. Bis jetzt sollten Sie bereit sein, das "Kaninchenloch" der Animationen im Browser hinunterzuspringen und bereit, Ihre eigenen Animationsexperimente zu schreiben!

## Siehe auch

- Die [vollständige Sammlung von Alice im Wunderland Demos](https://codepen.io/collection/nqNJvD) auf CodePen zum Spielen, Verzweigen und Teilen.
- [Animieren, als ob es Ihnen egal wäre, mit Element.animate](https://hacks.mozilla.org/2016/08/animating-like-you-just-dont-care-with-element-animate/) (2016) Erklärt den Hintergrund der Web Animations API und warum sie performanter ist als andere Web-Animationsmethoden.
