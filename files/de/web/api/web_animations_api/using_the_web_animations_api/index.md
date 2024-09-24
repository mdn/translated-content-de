---
title: Verwendung der Web Animations API
slug: Web/API/Web_Animations_API/Using_the_Web_Animations_API
l10n:
  sourceCommit: d5ded97c6b75937767410359c9d2b4afa8387798
---

{{DefaultAPISidebar("Web Animations")}}

Die Web Animations API ermöglicht es uns, Animationen zu erstellen und deren Wiedergabe mit JavaScript zu steuern. Dieser Artikel bietet Ihnen einen Einstiegspunkt mit unterhaltsamen Demonstrationen und Tutorials mit Alice im Wunderland.

## Einführung in die Web Animations API

Die [Web Animations API](/de/docs/Web/API/Web_Animations_API) öffnet die Animations-Engine des Browsers für Entwickler und zur Manipulation durch JavaScript. Diese API wurde entwickelt, um sowohl Implementierungen von [CSS Animations](/de/docs/Web/CSS/CSS_animations) als auch [CSS Transitions](/de/docs/Web/CSS/CSS_transitions) zu unterstützen und lässt Raum für zukünftige Animationseffekte. Sie ist eine der performantesten Methoden, um im Web Animationen zu erstellen, da der Browser seine eigenen internen Optimierungen vornehmen kann, ohne Tricks, Zwang oder {{domxref("Window.requestAnimationFrame()")}}.

Mit der Web Animations API können wir interaktive Animationen von Stylesheets nach JavaScript verschieben, wodurch die Präsentation vom Verhalten getrennt wird. Wir müssen nicht mehr auf DOM-lastige Techniken wie das Schreiben von CSS-Eigenschaften und das Festlegen von Klassen auf Elementen zurückgreifen, um die Wiedergaberichtung zu steuern. Und im Gegensatz zu rein deklarativem CSS erlaubt es uns JavaScript, dynamisch Werte von Eigenschaften bis zu Dauern festzulegen. Für den Aufbau benutzerdefinierter Animationsbibliotheken und das Erstellen interaktiver Animationen könnte die Web Animations API das perfekte Werkzeug sein. Sehen wir uns an, was sie leisten kann!

## Schreiben von CSS-Animationen mit der Web Animations API

Eine der bekannteren Möglichkeiten, sich der Web Animations API zu nähern, besteht darin, mit etwas zu beginnen, was die meisten Webentwickler schon einmal ausprobiert haben: CSS-Animationen. CSS-Animationen haben eine vertraute Syntax, die sich gut zu Demonstrationszwecken eignet.

### Die CSS-Version

Hier ist eine fallende Animation, geschrieben in CSS, die zeigt, wie Alice in das Kaninchenloch fällt, das ins Wunderland führt (siehe der vollständige [Code auf Codepen](https://codepen.io/rachelnabors/pen/QyOqqW)):

[![Alice Tumbling down the rabbit's hole.](tumbling-alice_optimized.gif)](https://codepen.io/rachelnabors/pen/rxpmJL)

Beachten Sie, dass sich der Hintergrund bewegt, Alice sich dreht und ihre Farbe sich versetzt zur Rotation ändert. Wir konzentrieren uns in diesem Tutorial nur auf Alice. Hier ist das vereinfachte CSS, das Alices Animation steuert:

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

Dies ändert Alices Farbe und die Drehung ihrer Transformation über 3 Sekunden mit einer konstanten (linearen) Rate und wiederholt sich unendlich. Im [@keyframes](/de/docs/Web/CSS/@keyframes) Block sehen wir, dass 30 % des Weges durch jede Schleife (ca. 0,9 Sekunden), Alices Farbe von Schwarz zu einem tiefen Burgunderrot und zurück am Ende der Schleife wechselt.

### Übertragung auf JavaScript

Nun versuchen wir, dieselbe Animation mit der Web Animations API zu erstellen.

#### Keyframes darstellen

Das erste, was wir brauchen, ist ein [Keyframe-Objekt](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats) zu erstellen, das unserem CSS [@keyframes](/de/docs/Web/CSS/@keyframes) Block entspricht:

```js
const aliceTumbling = [
  { transform: "rotate(0) translate3D(-50%, -50%, 0)", color: "#000" },
  { color: "#431236", offset: 0.3 },
  { transform: "rotate(360deg) translate3D(-50%, -50%, 0)", color: "#000" },
];
```

Hier verwenden wir ein Array, das mehrere Objekte enthält. Jedes Objekt repräsentiert einen Schlüssel aus dem ursprünglichen CSS. Im Gegensatz zu CSS muss die Web Animations API jedoch nicht explizit mitgeteilt werden, an welchen Prozenten der Animation jeder Schlüssel erscheinen soll. Sie teilt die Animation automatisch in gleiche Teile basierend auf der Anzahl der angegebenen Schlüssel. Dies bedeutet, dass ein Keyframe-Objekt mit drei Keys den mittleren Key zu 50 % der Schleife der Animation abspielen wird, es sei denn, es wird anders angegeben.

Wenn wir den Offset eines Schlüssels von den anderen Keys explizit festlegen möchten, können wir einen Offset direkt im Objekt angeben, getrennt von der Deklaration durch ein Komma. Im obigen Beispiel, um sicherzustellen, dass sich Alices Farbe bei 30 % (nicht 50 %) ändert, geben wir ihm `offset: 0.3`.

Derzeit sollten mindestens zwei Keyframes angegeben sein (die Start- und Endzustände der Animationssequenz repräsentierend). Wenn Ihre Keyframe-Liste nur einen Eintrag hat, kann {{domxref("Element.animate()")}} in einigen Browsern einen `NotSupportedError` {{domxref("DOMException")}} auslösen, bis sie aktualisiert sind.

Um zusammenzufassen, die Keys sind standardmäßig gleichmäßig verteilt, es sei denn, Sie geben einen Offset auf einem Key an. Praktisch, nicht wahr?

#### Timing-Eigenschaften darstellen

Wir müssen auch ein Objekt für Timing-Eigenschaften erstellen, das den Werten in Alices Animation entspricht:

```js
const aliceTiming = {
  duration: 3000,
  iterations: Infinity,
};
```

Hier werden Ihnen einige Unterschiede zur Darstellung gleichwertiger Werte in CSS auffallen:

- Zum einen ist die Dauer in Millisekunden anstatt in Sekunden — 3000 statt 3s. Wie {{domxref("setTimeout()")}} und {{domxref("Window.requestAnimationFrame()")}} nimmt die Web Animations API nur Millisekunden an.
- Das andere, was Ihnen auffällt, ist, dass es `iterations` ist, nicht `iteration-count`.

> [!NOTE]
> Es gibt eine Reihe kleiner Unterschiede zwischen der Terminologie, die in CSS-Animationen verwendet wird, und der in Web-Animationen verwendeten Terminologie. Beispielsweise verwendet Web Animations nicht den String `"infinite"`, sondern das JavaScript-Schlüsselwort `Infinity`. Und anstelle von `timing-function` verwenden wir `easing`. Wir geben hier keinen `easing`-Wert an, da im Gegensatz zu CSS-Animationen, bei denen die Standard-[animation-timing-function](/de/docs/Web/CSS/animation-timing-function) `ease` ist, in der Web Animations API das Standard-Easing `linear` ist — was wir hier wollen.

#### Die Teile zusammenführen

Nun ist es an der Zeit, beide mit der {{domxref("Element.animate()")}} Methode zusammenzuführen:

```js
document.getElementById("alice").animate(aliceTumbling, aliceTiming);
```

Und boom: die Animation beginnt zu spielen (siehe die fertige [Version auf Codepen](https://codepen.io/rachelnabors/pen/rxpmJL)).

Die `animate()`-Methode kann auf jedem DOM-Element aufgerufen werden, das mit CSS animiert werden könnte. Und sie kann auf verschiedene Weise geschrieben werden. Anstatt Objekte für Keyframes und Timing-Eigenschaften zu erstellen, könnten wir deren Werte direkt übergeben, wie folgt:

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

Was mehr ist, wenn wir nur die Dauer der Animation und nicht ihre Iterationen angeben wollten (standardmäßig werden Animationen einmal iteriert), könnten wir nur die Millisekunden übergeben:

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

Während wir mit der Web Animations API CSS-Animationen schreiben können, ist die eigentliche Stärke der API die Manipulation der Wiedergabe der Animation. Die Web Animations API bietet mehrere nützliche Methoden zur Steuerung der Wiedergabe. Schauen wir uns das Pausieren und Abspielen von Animationen im Wachsenden/Schrumpfenden-Alice-Spiel an (sehen Sie sich den [vollständigen Code auf Codepen](https://codepen.io/rachelnabors/pen/PNYGZQ) an):

[![Playing the growing and shrinking game with Alice.](growing-shrinking_article_optimized.gif)](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010)

In diesem Spiel hat Alice eine Animation, die sie von klein zu groß bringt, was wir über eine Flasche und einen Cupcake steuern. Beide haben ihre eigenen Animationen.

### Pausieren und Abspielen von Animationen

Wir werden später mehr über Alices Animation sprechen, aber jetzt schauen wir uns näher die Animation des Cupcakes an:

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

Die {{domxref("Element.animate()")}} Methode wird sofort ausgeführt, nachdem sie aufgerufen wurde. Um zu verhindern, dass sich der Kuchen selbst aufisst, bevor der Benutzer die Möglichkeit hatte, darauf zu klicken, rufen wir {{domxref("Animation.pause()")}} direkt nach der Definition auf, so:

```js
nommingCake.pause();
```

Nun können wir die {{domxref("Animation.play()")}} Methode verwenden, um sie jederzeit abzuspielen, wenn wir bereit sind:

```js
nommingCake.play();
```

Insbesondere möchten wir es mit Alices Animation verknüpfen, damit sie größer wird, während der Kuchen gegessen wird. Dies können wir mit der folgenden Funktion erreichen:

```js
const growAlice = () => {
  // Spielen Sie Alices Animation ab.
  aliceChange.play();

  // Spielen Sie die Kuchenanimation ab.
  nommingCake.play();
};
```

Wenn ein Benutzer mit der Maus auf den Kuchen klickt oder seine Finger auf dem Kuchen auf einem Touchscreen drückt, können wir nun `growAlice` aufrufen, um alle Animationen abzuspielen:

```js
cake.addEventListener("mousedown", growAlice, false);
cake.addEventListener("touchstart", growAlice, false);
```

### Andere nützliche Methoden

Neben Pausieren und Abspielen können wir die folgenden Methoden der Animation verwenden:

- {{domxref("Animation.finish()")}} überspringt das Ende der Animation.
- {{domxref("Animation.cancel()")}} bricht die Animation ab und entfernt ihre Effekte.
- {{domxref("Animation.reverse()")}} setzt die Wiedergabegeschwindigkeit der Animation ({{domxref("Animation.playbackRate")}}) auf einen negativen Wert, sodass sie rückwärts läuft.

Sehen wir uns zuerst `playbackRate` an — eine negative playbackRate lässt eine Animation rückwärts laufen. Wenn Alice aus der Flasche trinkt, wird sie kleiner. Dies liegt daran, dass die Flasche ihre Animation von einer Wiedergabegeschwindigkeit von 1 auf -1 ändert:

```js
const shrinkAlice = () => {
  aliceChange.playbackRate = -1;
  aliceChange.play();
};

bottle.addEventListener("mousedown", shrinkAlice, false);
bottle.addEventListener("touchstart", shrinkAlice, false);
```

In [Hinter den Spiegeln](https://en.wikipedia.org/wiki/Through_the_Looking-Glass) reist Alice in eine Welt, in der sie laufen muss, um an Ort und Stelle zu bleiben — und doppelt so schnell laufen muss, um vorwärts zu kommen! Im Roten Königin-Rennen-Beispiel laufen Alice und die Rote Königin, um an Ort und Stelle zu bleiben (sehen Sie sich den [vollständigen Code auf Codepen](https://codepen.io/rachelnabors/pen/PNGGaV) an):

[![Alice and the Red Queen race to get to the next square in this game.](red-queen-race_optimized.gif)](https://codepen.io/rachelnabors/pen/PNGGaV)

Da kleine Kinder leichter ermüden als automatisierte Schachfiguren, wird Alice ständig langsamer. Dies können wir tun, indem wir eine Abnahme ihrer `playbackRate` setzen. Wir verwenden `updatePlaybackRate()` anstelle der Direkteinstellung der `playbackRate`, da dies ein reibungsloses Update ermöglicht:

```js
setInterval(() => {
  // Stellen Sie sicher, dass die Wiedergabegeschwindigkeit niemals unter .4 fällt
  if (redQueen_alice.playbackRate > 0.4) {
    redQueen_alice.updatePlaybackRate(redQueen_alice.playbackRate * 0.9);
  }
}, 3000);
```

Aber wenn sie durch Klicken oder Tippen angefeuert werden, beschleunigen sie, indem ihre `playbackRate` multipliziert wird:

```js
const goFaster = () => {
  redQueen_alice.updatePlaybackRate(redQueen_alice.playbackRate * 1.1);
};

document.addEventListener("click", goFaster);
document.addEventListener("touchstart", goFaster);
```

Die Hintergrundelemente haben auch `playbackRate`s, die beim Klicken oder Tippen beeinflusst werden. Was passiert, wenn Sie Alice und die Rote Königin doppelt so schnell laufen lassen? Was passiert, wenn Sie sie langsamer werden lassen?

## Persistente Animationsstile

Beim Animieren von Elementen besteht ein häufiger Anwendungsfall darin, den Endzustand der Animation beizubehalten, nachdem die Animation beendet ist. Eine manchmal verwendete Methode besteht darin, den [Füllmodus](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) der Animation auf `forwards` zu setzen. Es wird jedoch nicht empfohlen, Füllmodi zu verwenden, um den Effekt einer Animation unbegrenzt aufrechtzuerhalten, aus zwei Gründen:

- Der Browser muss den Zustand der Animation aufrechterhalten, während sie noch aktiv ist, sodass die Animation auch dann Ressourcen verbraucht, obwohl sie nicht mehr animiert. Beachten Sie, dass dies teilweise dadurch gemildert wird, dass der Browser [füllende Animationen automatisch entfernt](#automatisches_entfernen_von_füllenden_animationen).
- Von Animationen angewendete Styles haben eine [höhere Priorität im Kaskadeneffekt](/de/docs/Web/CSS/Cascade#cascading_order) als spezifizierte Styles, sodass es schwierig sein kann, sie bei Bedarf zu überschreiben.

Eine bessere Herangehensweise ist die Verwendung der {{domxref("Animation.commitStyles()")}} Methode. Diese schreibt die berechneten Werte der aktuellen Animationsstile in das [`style`](/de/docs/Web/HTML/Global_attributes#style) Attribut ihres Zielelements, wonach das Element normal gestylt werden kann.

## Automatisches Entfernen von füllenden Animationen

Es ist möglich, eine große Anzahl von Animationen auf dasselbe Element auszulösen. Wenn sie auf unbegrenzte Zeit laufen (d.h., nach vorne füllend), kann dies zu einer enormen Animationsliste führen, die zu einem Speicherleck führen könnte. Daher entfernen Browser füllende Animationen automatisch, nachdem sie durch neuere Animationen ersetzt wurden, es sei denn, der Entwickler gibt ausdrücklich an, sie beizubehalten.

Animationen werden entfernt, wenn alle folgenden Bedingungen zutreffen:

- Die Animation ist füllend (ihre `fill` ist `forwards`, wenn sie vorwärts läuft, `backwards`, wenn sie rückwärts läuft, oder `both`).
- Die Animation ist beendet. (Beachten Sie, dass aufgrund des Füllens weiterhin wirksam ist.)
- Die Zeitleiste der Animation ist monoton steigend. (Dies ist immer wahr für {{domxref("DocumentTimeline")}}; andere Zeitleisten wie {{cssxref("scroll-timeline")}} können rückwärts laufen.)
- Die Animation wird nicht durch deklaratives Markup wie CSS gesteuert.
- Jeder stilistische Effekt des {{domxref("AnimationEffect")}} der Animation wird von einer anderen Animation überschrieben, die ebenfalls alle obigen Bedingungen erfüllt. (Typischerweise könnte eine Animation, wenn zwei Animationen dieselbe Stil-Eigenschaft desselben Elements festlegen, erstellt zuletzt die andere überschreiben.)

Die ersten vier Bedingungen stellen sicher, dass ohne Eingriffe durch JavaScript-Code sich der Effekte der Animation niemals ändern oder enden wird. Die letzte Bedingung stellt sicher, dass die Animation keinen Stil eines Elements jemals tatsächlich beeinflusst: sie wurde vollständig ersetzt.

Wenn die Animation automatisch entfernt wird, löst das {{domxref("animation/remove_event", "remove")}} Ereignis der Animation aus.

Um zu verhindern, dass der Browser Animationen automatisch entfernt, rufen Sie die {{domxref("Animation.persist", "persist()")}} Methode der Animation auf.

Die {{domxref("animation.replaceState")}} Eigenschaft der Animation wird `removed` sein, wenn die Animation entfernt wurde, `persisted`, wenn Sie {{domxref("Animation.persist", "persist()")}} auf die Animation aufgerufen haben, oder `active` andernfalls.

## Informationen aus Animationen abrufen

Stellen Sie sich andere Möglichkeiten vor, wie wir `playbackRate` verwenden könnten, wie z.B. die Verbesserung der Barrierefreiheit für Benutzer mit vestibulären Störungen, indem Sie ihnen erlauben, Animationen über eine gesamte Seite zu verlangsamen. Das ist mit CSS unmöglich ohne die Dauer in jeder CSS-Regel neu zu berechnen, aber mit der Web Animations API könnten wir die {{domxref("Document.getAnimations")}} Methode verwenden, um jede Animation auf der Seite zu durchlaufen und ihre `playbackRate`s zu halbieren, wie folgt:

```js
document.getAnimations().forEach((animation) => {
  animation.updatePlaybackRate(animation.playbackRate * 0.5);
});
```

Mit der Web Animations API müssen Sie nur eine kleine Eigenschaft ändern!

Eine andere Sache, die schwierig allein mit CSS-Animationen zu tun ist, ist das Erzeugen von Abhängigkeiten von Werten, die von anderen Animationen bereitgestellt werden. Beispielsweise, im wachsenden und schrumpfenden Alice-Spiel, könnte Ihnen etwas Ungewöhnliches in Bezug auf die Dauer des Kuchens aufgefallen sein:

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

Alices Animation bringt sie von ihrer halben Größe auf die doppelte Größe über 8 Sekunden. Dann pausieren wir sie:

```js
aliceChange.pause();
```

Hätten wir sie zu Beginn ihrer Animation pausiert gelassen, würde sie bei der halben Größe starten, als hätte sie die gesamte Flasche bereits getrunken! Wir möchten den "Playhead" ihrer Animation in die Mitte setzen, sodass sie schon halb fertig ist. Wir könnten dies tun, indem wir ihre {{domxref("Animation.currentTime")}} auf 4 Sekunden setzen, so:

```js
aliceChange.currentTime = 4000;
```

Aber während wir an dieser Animation arbeiten, könnten wir die Dauer von Alice oft ändern. Wäre es nicht besser, wenn wir ihre `currentTime` dynamisch festlegen, damit wir nicht zweimal aktualisieren müssen? Tatsächlich können wir dies tun, indem wir uns auf die {{domxref("Animation.effect")}} Eigenschaft von aliceChange beziehen, die ein Objekt zurückgibt, das alle Details der Effekte enthält, die bei Alice aktiv sind:

```js
aliceChange.currentTime = aliceChange.effect.getComputedTiming().duration / 2;
```

`effect` lässt uns auf die Keyframes und Eigenschaften der Animation zugreifen — `aliceChange.effect.getComputedTiming()` zeigt auf Alice's Timing-Objekt — dies enthält ihre [`duration`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect). Wir können ihre Dauer halbieren, um den Mittelpunkt ihrer Animations-Timeline zu erhalten, was sie auf normale Höhe setzt. Jetzt können wir ihre Animation in beide Richtungen rückwärts abspielen und spielen, um sie kleiner oder größer zu machen!

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

Jetzt sind alle drei Animationen nur mit einer Dauer verknüpft, die wir leicht von einem Ort aus ändern können.

Wir können die Web Animations API auch verwenden, um die aktuelle Zeit der Animation zu ermitteln. Das Spiel endet, wenn Ihnen der Kuchen ausgeht oder die Flasche leer ist. Welche Vignette den Spielern präsentiert wird, hängt davon ab, wie weit Alice in ihrer Animation war, ob sie zu groß wurde und nicht mehr durch die kleine Tür passt oder zu klein wurde und den Schlüssel nicht mehr erreichen kann, um die Tür zu öffnen. Wir können feststellen, ob sie am großen oder kleinen Ende ihrer Animation ist, indem wir die [`currentTime`](/de/docs/Web/API/Animation/currentTime) und ihre `activeDuration` abfragen:

```js
const endGame = () => {
  // holen Sie die Position des Spielkopfes in Alices Zeitleiste
  const alicePlayhead = aliceChange.currentTime;
  const aliceTimeline = aliceChange.effect.getComputedTiming().activeDuration;

  // Stoppt Alice's und andere Animationen
  stopPlayingAlice();

  // abhängig davon, in welches Drittel es fällt
  const aliceHeight = alicePlayhead / aliceTimeline;

  if (aliceHeight <= 0.333) {
    // Alice wurde kleiner!
    // …
  } else if (aliceHeight >= 0.666) {
    // Alice wurde größer!
    // …
  } else {
    // Alice hat sich nicht nennenswert verändert
    // …
  }
};
```

## Rückrufe und Promises

CSS-Animationen und -Übergänge haben ihre eigenen Event Listener, und diese sind auch mit der Web Animations API möglich:

- [`onfinish`](/de/docs/Web/API/Animation/finish_event) ist der Event Handler für das `finish`-Event und kann manuell mit [`finish()`](/de/docs/Web/API/Animation/finish) ausgelöst werden.
- [`oncancel`](/de/docs/Web/API/Animation/cancel_event) ist der Event Handler für das `cancel`-Event und kann mit [`cancel()`](/de/docs/Web/API/Animation/cancel) ausgelöst werden.

Hier setzen wir die Rückrufe für den Kuchen, die Flasche und Alice, um die `endGame`-Funktion auszuführen:

```js
// Wenn der Kuchen oder die Flasche ausgeht
nommingCake.onfinish = endGame;
drinking.onfinish = endGame;

// Alice erreicht das Ende ihrer Animation
aliceChange.onfinish = endGame;
```

Noch besser, die Web Animations API bietet auch ein [`finished`](/de/docs/Web/API/Animation/finished) Promise, das aufgelöst wird, wenn die Animation beendet ist, oder abgelehnt wird, wenn sie abgebrochen wird.

## Fazit

Dies sind die grundlegenden Funktionen der Web Animations API. Mittlerweile sollten Sie bereit sein, "den Kaninchenbau hinunter zu springen" und mit der Animation im Browser zu experimentieren und Ihre eigenen Animationsexperimente zu schreiben!

## Siehe auch

- Die [vollständige Sammlung von Alice im Wunderland Demos](https://codepen.io/collection/nqNJvD) auf CodePen zum Ausprobieren, Forken und Teilen.
- [Mit Element.animate animieren, als ob es Ihnen egal wäre](https://hacks.mozilla.org/2016/08/animating-like-you-just-dont-care-with-element-animate/) (2016) Erklärt den Hintergrund der Web Animations API und warum sie performanter ist als andere Web-Animationsmethoden.
