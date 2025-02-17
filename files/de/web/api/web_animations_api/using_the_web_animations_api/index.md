---
title: Verwenden der Web Animations API
slug: Web/API/Web_Animations_API/Using_the_Web_Animations_API
l10n:
  sourceCommit: a29769d6d10261f771321eb60f3990029c160924
---

{{DefaultAPISidebar("Web Animations")}}

Die Web Animations API ermöglicht es, Animationen zu erstellen und ihre Wiedergabe mit JavaScript zu steuern. Dieser Artikel bringt Sie mit unterhaltsamen Demos und Tutorials, die Alice im Wunderland zeigen, auf den richtigen Weg.

## Die Web Animations API kennenlernen

Die [Web Animations API](/de/docs/Web/API/Web_Animations_API) öffnet die Animations-Engine des Browsers für Entwickler und deren Manipulation durch JavaScript. Diese API wurde entwickelt, um sowohl die Implementierungen von [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) als auch von [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) zu unterstützen, und lässt Raum für zukünftige Animationseffekte. Sie ist eine der performantesten Möglichkeiten, im Web zu animieren, da der Browser dadurch eigene interne Optimierungen ohne Tricks, Zwang oder [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) ausführen kann.

Mit der Web Animations API können wir interaktive Animationen aus Stylesheets in JavaScript verlagern und so Präsentation von Verhalten trennen. Es ist nicht mehr nötig, auf DOM-intensive Techniken zurückzugreifen, wie das Schreiben von CSS-Eigenschaften und das Anwenden von Klassen, um die Wiedergaberichtung zu steuern. Anders als reine deklarative CSS-Animationen ermöglicht es uns JavaScript außerdem, Werte vom Eigenschaften bis zu den Dauern dynamisch festzulegen. Zum Erstellen benutzerdefinierter Animationsbibliotheken und interaktiver Animationen könnte die Web Animations API das perfekte Werkzeug sein. Sehen wir uns an, was sie leisten kann!

## CSS-Animationen mit der Web Animations API schreiben

Eine der vertrauteren Möglichkeiten, sich mit der Web Animations API vertraut zu machen, besteht darin, mit etwas zu beginnen, mit dem die meisten Webentwickler bereits gearbeitet haben: CSS-Animationen. CSS-Animationen verfügen über eine vertraute Syntax, die sich gut für Demonstrationen eignet.

### Die CSS-Version

Hier ist eine tumbling animation in CSS, die Alice zeigt, wie sie in den Kaninchenbau fällt, der ins Wunderland führt (sehen Sie den vollständigen [Code auf CodePen](https://codepen.io/rachelnabors/pen/QyOqqW)):

[![Alice tumbling in den Kaninchenbau.](tumbling-alice_optimized.gif)](https://codepen.io/rachelnabors/pen/rxpmJL)

Beachten Sie, dass sich der Hintergrund bewegt, Alice sich dreht und ihre Farbe sich zeitversetzt zur Drehung ändert. Wir werden uns für dieses Tutorial nur auf Alice konzentrieren. Hier ist das vereinfachte CSS, das die Animation von Alice steuert:

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

Diese Animation ändert die Farbe von Alice und die Rotation ihrer `transform`-Eigenschaft über 3 Sekunden mit einer konstanten (linearen) Geschwindigkeit und wiederholt sich unendlich. Im {{cssxref("@keyframes")}}-Block sehen wir, dass sich 30 % des Weges durch jede Schleife (etwa 0,9 Sekunden) die Farbe von Alice von Schwarz in ein tiefes Burgunderrot und dann bis zum Ende der Schleife wieder zurück ändert.

### Übertragen nach JavaScript

Versuchen wir nun, dieselbe Animation mit der Web Animations API zu erstellen.

#### Keyframes darstellen

Zunächst müssen wir ein [Keyframe-Objekt](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats) erstellen, das unserem CSS-{{cssxref("@keyframes")}}-Block entspricht:

```js
const aliceTumbling = [
  { transform: "rotate(0) translate3D(-50%, -50%, 0)", color: "#000" },
  { color: "#431236", offset: 0.3 },
  { transform: "rotate(360deg) translate3D(-50%, -50%, 0)", color: "#000" },
];
```

Hier verwenden wir ein Array, das mehrere Objekte enthält. Jedes Objekt stellt einen Key aus dem ursprünglichen CSS dar. Anders als beim CSS muss der Web Animations API nicht explizit mitgeteilt werden, bei welchen Prozentsätzen entlang der Animation jeder Key angezeigt werden soll. Es wird automatisch in gleiche Teile aufgeteilt, basierend auf der Anzahl der angegebenen Keys. Dies bedeutet, dass ein Keyframe-Objekt mit drei Keys den mittleren Key genau bei 50 % der Animation abspielen wird, es sei denn, Sie geben etwas anderes an.

Wenn wir den Abstand eines Keys explizit von anderen Keys festlegen möchten, können wir einen Offset direkt im Objekt angeben, getrennt durch ein Komma. Im obigen Beispiel geben wir an, dass die Farbänderung bei Alice ungefähr bei 30 % (nicht 50 %) erfolgen soll, indem wir `offset: 0.3` hinzufügen.

Derzeit sollten mindestens zwei Keyframes angegeben werden (die die Anfangs- und Endzustände der Animationssequenz repräsentieren). Wenn Ihre Keyframeliste lediglich einen Eintrag enthält, könnte [`Element.animate()`](/de/docs/Web/API/Element/animate) in einigen Browsern einen `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException) werfen, bis diese aktualisiert werden.

Zusammengefasst: Die Keys sind standardmäßig gleichmäßig verteilt, es sei denn, Sie geben einen Offset für einen Key an. Praktisch, nicht wahr?

#### Zeitliche Eigenschaften darstellen

Wir müssen auch ein Objekt für die Zeitmerkmale erstellen, das den Werten in der Animation von Alice entspricht:

```js
const aliceTiming = {
  duration: 3000,
  iterations: Infinity,
};
```

Sie werden einige Unterschiede zu den entsprechenden Werten in CSS bemerken:

- Zum einen wird die Dauer in Millisekunden anstelle von Sekunden angegeben – 3000 statt 3s. Wie bei [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) akzeptiert die Web Animations API ausschließlich Millisekunden.
- Außerdem wird `iterations` und nicht `iteration-count` verwendet.

> [!NOTE]
> Es gibt eine Reihe von kleinen Unterschieden zwischen der Terminologie, die in CSS-Animationen verwendet wird, und derjenigen in der Web Animations API. Zum Beispiel verwendet die Web Animations API nicht den String `"infinite"`, sondern das JavaScript-Schlüsselwort `Infinity`. Und anstelle von `timing-function` verwenden wir `easing`. Hier listen wir keinen `easing`-Wert auf, da die Standard-{{cssxref("animation-timing-function")}} bei CSS-Animationen `ease` ist, während bei der Web Animations API das Standardeasing `linear` ist — was wir hier benötigen.

#### Die Teile zusammenführen

Nun ist es an der Zeit, beide mit der Methode [`Element.animate()`](/de/docs/Web/API/Element/animate) zusammenzuführen:

```js
document.getElementById("alice").animate(aliceTumbling, aliceTiming);
```

Und voilà: Die Animation beginnt zu spielen (sehen Sie die fertige [Version auf CodePen](https://codepen.io/rachelnabors/pen/rxpmJL)).

Die `animate()`-Methode kann auf jedes DOM-Element angewendet werden, das mit CSS animierbar ist. Sie kann auf mehrere Arten geschrieben werden. Anstelle von Objekten für Keyframes und Zeitmerkmale könnten wir ihre Werte direkt übergeben, wie folgt:

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

Wenn wir dabei nur die Dauer der Animation und nicht ihre Iterationen spezifizieren möchten (standardmäßig läuft eine Animation einmal), könnten wir allein die Millisekunden übergeben:

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

## Wiedergabesteuerung mit play(), pause(), reverse() und updatePlaybackRate()

Während wir mit der Web Animations API CSS-Animationen erstellen können, liegt der wahre Nutzen der API darin, die Wiedergabe der Animation zu steuern. Die Web Animations API bietet mehrere nützliche Methoden zur Steuerung der Wiedergabe. Sehen wir uns das Pausieren und Wiedergeben von Animationen im Growing/Shrinking Alice-Spiel an (sehen Sie den [vollständigen Code auf CodePen](https://codepen.io/rachelnabors/pen/PNYGZQ)):

[![Das Spiel mit der wachsenden und schrumpfenden Alice.](growing-shrinking_article_optimized.gif)](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010)

In diesem Spiel hat Alice eine Animation, die sie von klein zu groß macht und die wir über eine Flasche und einen Cupcake steuern. Beide haben ihre eigenen Animationen.

### Pausieren und Wiedergeben von Animationen

Wir sprechen später mehr über Alices Animation, für den Moment schauen wir uns die Animation des Cupcakes genauer an:

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

Die Methode [`Element.animate()`](/de/docs/Web/API/Element/animate) wird sofort nach ihrem Aufruf ausgeführt. Um zu verhindern, dass der Kuchen selbst isst, bevor der Benutzer ihn anklicken kann, rufen wir [`Animation.pause()`](/de/docs/Web/API/Animation/pause) direkt nach der Definition der Animation auf:

```js
nommingCake.pause();
```

Nun können wir die Methode [`Animation.play()`](/de/docs/Web/API/Animation/play) verwenden, um die Animation auszuführen, wann immer wir bereit sind:

```js
nommingCake.play();
```

Insbesondere möchten wir sie mit Alices Animation verknüpfen, sodass sie größer wird, während der Cupcake aufgegessen wird. Dies können wir mit der folgenden Funktion erreichen:

```js
const growAlice = () => {
  // Play Alice's animation.
  aliceChange.play();

  // Play the cake's animation.
  nommingCake.play();
};
```

Wenn ein Benutzer die Maus gedrückt hält oder auf einem Touchscreen seinen Finger auf den Kuchen legt, können wir jetzt `growAlice` aufrufen, um alle Animationen abzuspielen:

```js
cake.addEventListener("mousedown", growAlice, false);
cake.addEventListener("touchstart", growAlice, false);
```

### Weitere nützliche Methoden

Zusätzlich zu Pausieren und Abspielen können wir die folgenden Animation-Methoden verwenden:

- [`Animation.finish()`](/de/docs/Web/API/Animation/finish) springt zum Ende der Animation.
- [`Animation.cancel()`](/de/docs/Web/API/Animation/cancel) bricht die Animation ab und entfernt deren Auswirkungen.
- [`Animation.reverse()`](/de/docs/Web/API/Animation/reverse) setzt die Wiedergaberate der Animation ([`Animation.playbackRate`](/de/docs/Web/API/Animation/playbackRate)) auf einen negativen Wert, sodass sie rückwärts läuft.

Sehen wir uns zunächst `playbackRate` an — eine negative Wiedergaberate lässt eine Animation rückwärts laufen. Wenn Alice aus der Flasche trinkt, schrumpft sie. Das liegt daran, dass die Flasche Alices Wiedergaberate von 1 auf -1 ändert:

```js
const shrinkAlice = () => {
  aliceChange.playbackRate = -1;
  aliceChange.play();
};

bottle.addEventListener("mousedown", shrinkAlice, false);
bottle.addEventListener("touchstart", shrinkAlice, false);
``` 

In [Hinter den Spiegeln](https://en.wikipedia.org/wiki/Through_the_Looking-Glass) reist Alice in eine Welt, in der sie rennen muss, um an Ort und Stelle zu bleiben — und zweimal so schnell rennen muss, um sich vorwärts zu bewegen! Im Beispiel des Rennens mit der Roten Königin laufen Alice und die Rote Königin, um an Ort und Stelle zu bleiben (sehen Sie den [vollständigen Code auf CodePen](https://codepen.io/rachelnabors/pen/PNGGaV)):

[![Alice und die Rote Königin laufen um das nächste Feld zu erreichen.](red-queen-race_optimized.gif)](https://codepen.io/rachelnabors/pen/PNGGaV)

Da kleine Kinder schneller ermüden als automatisierte Schachfiguren, wird Alice konstant langsamer. Wir können dies durch eine Abschwächung ihrer `playbackRate` erreichen. Dabei verwenden wir `updatePlaybackRate()`, anstatt die Wiedergaberate direkt zu setzen, da das eine sanftere Aktualisierung erzeugt: 

```js
setInterval(() => {
  // Make sure the playback rate never falls below .4
  if (redQueen_alice.playbackRate > 0.4) {
    redQueen_alice.updatePlaybackRate(redQueen_alice.playbackRate * 0.9);
  }
}, 3000);
```

Durch Klicken oder Tippen wird ihre Geschwindigkeit jedoch durch Multiplikation der Wiedergaberate erhöht: 

```js
const goFaster = () => {
  redQueen_alice.updatePlaybackRate(redQueen_alice.playbackRate * 1.1);
};

document.addEventListener("click", goFaster);
document.addEventListener("touchstart", goFaster);
```

Die Hintergrundelemente haben ebenfalls `playbackRate`s, die beim Klicken oder Tippen beeinflusst werden. Was passiert, wenn Sie Alice und die Rote Königin doppelt so schnell laufen lassen? Was passiert, wenn Sie sie verlangsamen?

## Animationsstile beibehalten

Ein häufiger Anwendungsfall beim Animieren von Elementen ist das Beibehalten des Endzustands der Animation, nachdem die Animation abgeschlossen ist. Eine Methode, die hierfür manchmal verwendet wird, ist das Setzen des [Fill-Modus](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) auf `forwards`. Es wird jedoch nicht empfohlen, Füllmodi zu verwenden, um die Wirkung einer Animation auf unbestimmte Zeit beizubehalten, aus zwei Gründen:

- Der Browser muss den Zustand der Animation aufrechterhalten, während diese aktiv bleibt. Das bedeutet, dass die Animation Ressourcen verbraucht, obwohl sie nicht mehr animiert wird. Dies wird jedoch teilweise dadurch gemildert, dass der Browser [füllende Animationen automatisch entfernt](#automatische_entfernung_von_füllenden_animationen).
- Von Animationen angewendete Stile haben eine [höhere Priorität in der Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade#cascading_order) als spezifizierte Stile, was es schwierig machen kann, sie bei Bedarf zu überschreiben.

Eine bessere Methode ist die Verwendung der Methode [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles). Diese schreibt die berechneten Werte der aktuellen Stile der Animation in das [`style`](/de/docs/Web/HTML/Global_attributes/style)-Attribut des Ziels, wonach das Element normal umgestaltet werden kann.

## Automatische Entfernung von füllenden Animationen

Es ist möglich, eine große Anzahl von Animationen auf dasselbe Element auszulösen. Wenn diese Animationen unbefristet sind (d. h., `forwards` füllend), könnte dies zu einer langen Animationsliste führen, die möglicherweise ein Speicherleck hervorruft. Aus diesem Grund entfernen Browser automatisch füllende Animationen, nachdem sie durch neuere Animationen ersetzt wurden, es sei denn, der Entwickler gibt explizit an, dass sie beibehalten werden sollen.

Animationen werden entfernt, wenn alle folgenden Bedingungen erfüllt sind: 

- Die Animation füllt (ihr `fill` ist `forwards`, wenn sie vorwärts abläuft, `backwards`, wenn sie rückwärts abläuft, oder `both`).
- Die Animation ist beendet (beachten Sie, dass sie aufgrund des `fill` weiterhin wirksam bleibt).
- Die Zeitleiste der Animation steigt monoton an. (Dies gilt immer für [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline); andere Zeitleisten wie {{cssxref("scroll-timeline")}} können rückwärts laufen.)
- Die Animation wird nicht durch deklaratives Markup wie CSS gesteuert.
- Jede Styling-Wirkung des [`AnimationEffect`](/de/docs/Web/API/AnimationEffect) der Animation wird durch eine andere Animation überschrieben, die ebenfalls alle oben genannten Bedingungen erfüllt. (Typischerweise überschreibt die letzte erstellte Animation jede vorherige, wenn zwei Animationen dieselbe Stileigenschaft desselben Elements setzen.)

Die ersten vier Bedingungen stellen sicher, dass der Effekt der Animation ohne Eingreifen durch JavaScript-Code niemals geändert oder beendet wird. Die letzte Bedingung stellt sicher, dass die Animation tatsächlich keine Stiländerung eines Elements mehr bewirkt: Sie wurde vollständig ersetzt.

Wird die Animation automatisch entfernt, wird das Event [`remove`](/de/docs/Web/API/Animation/remove_event) der Animation ausgelöst.

Um zu verhindern, dass der Browser Animationen automatisch entfernt, rufen Sie die Methode [`persist()`](/de/docs/Web/API/Animation/persist) der Animation auf.

Die Eigenschaft [`replaceState`](/de/docs/Web/API/Animation/replaceState) der Animation wird `removed` sein, wenn die Animation entfernt wurde, `persisted`, wenn Sie [`persist()`](/de/docs/Web/API/Animation/persist) aufgerufen haben, oder `active` sonst.

## Informationen aus Animationen abrufen

Stellen Sie sich vor, wie wir die Wiedergaberate nutzen könnten, um beispielsweise die Barrierefreiheit für Benutzer mit vestibulären Störungen zu verbessern, indem wir sie Animationen über die gesamte Website hinweg verlangsamen lassen. Das wäre mit CSS unmöglich, ohne die Dauern jeder CSS-Regel neu zu berechnen, aber mit der Web Animations API könnten wir die Methode [`Document.getAnimations`](/de/docs/Web/API/Document/getAnimations) verwenden, um jede Animation auf der Seite zu durchlaufen und deren Wiedergaberate zu halbieren, wie folgt: 

```js
document.getAnimations().forEach((animation) => {
  animation.updatePlaybackRate(animation.playbackRate * 0.5);
});
```

Mit der Web Animations API müssen Sie nur eine kleine Eigenschaft ändern!

Eine weitere Herausforderung mit alleinigen CSS-Animationen ist das Erstellen von Abhängigkeiten basierend auf Werten, die von anderen Animationen bereitgestellt werden. Im Beispiel mit dem Spiel "Wachsende und Schrumpfende Alice" ist Ihnen möglicherweise etwas Eigenartiges bei der Dauer des Kuchens aufgefallen:

```js
document.getElementById("eat-me_sprite").animate([], {
  duration: aliceChange.effect.timing.duration / 2,
});
```

Um das zu verstehen, werfen wir einen Blick auf Alices Animation:

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

Alices Animation lässt sie von halber Größe auf die doppelte Größe über 8 Sekunden wachsen. Anschließend pausieren wir ihre Animation:

```js
aliceChange.pause();
```

Würde es direkt am Anfang ihrer Animation pausiert bleiben, würde Alice mit halber Größe starten, als hätte sie bereits die ganze Flasche ausgetrunken! Wir möchten seine Timeline jedoch auf die Mitte setzen, damit sie bereits auf halbem Weg ist. Das könnten wir tun, indem wir Alices [`Animation.currentTime`](/de/docs/Web/API/Animation/currentTime) auf 4 Sekunden setzen, wie folgt:

```js
aliceChange.currentTime = 4000;
```

Aber während wir an dieser Animation arbeiten, könnten wir Alices Dauer oft ändern. Wäre es nicht besser, wenn wir ihre `currentTime` dynamisch setzen könnten, sodass wir nicht zwei Aktualisierungen vornehmen müssen? Tatsächlich können wir das tun, indem wir auf Alices [`Animation.effect`](/de/docs/Web/API/Animation/effect)-Eigenschaft verweisen, die ein Objekt mit allen Details der auf Alice aktiven Effekte zurückgibt:

```js
aliceChange.currentTime = aliceChange.effect.getComputedTiming().duration / 2;
```

Mit `effect` können wir die Keyframes und Zeiteigenschaften der Animationen abrufen — `aliceChange.effect.getComputedTiming()` gibt auf Alices Timing-Objekt hin — welches ihre [`duration`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect) enthält. Wir können ihre Dauer halbieren, um den Mittelpunkt ihrer Timeline zu berechnen, und sie auf normale Größe setzen. Jetzt können wir ihre Animation in beide Richtungen umkehren und abspielen lassen, um sie kleiner oder größer werden zu lassen!

Und wir können dasselbe tun, wenn wir die Dauer von Kuchen und Flaschen setzen:

```js
const drinking = document
  .getElementById("liquid")
  .animate([{ height: "100%" }, { height: "0" }], {
    fill: "forwards",
    duration: aliceChange.effect.getComputedTiming().duration / 2,
  });
drinking.pause();
```

Nun sind alle drei Animationen an eine einzige Dauer gekoppelt, die wir einfach an einer Stelle ändern können.

Mit der Web Animations API können wir auch den aktuellen Zeitpunkt der Animation herausfinden. Das Spiel endet, sobald der Kuchen aufgegessen oder die Flasche leer ist. Welche Szene den Spielern gezeigt wird, hängt davon ab, wie weit Alice in ihrer Animation war — ob sie zu groß wurde und nicht mehr durch die winzige Tür passt oder zu klein, um die Tür aufzuschließen. Wir können herausfinden, ob sie sich am großen oder kleinen Ende ihrer Animation befindet, indem wir ihre [`currentTime`](/de/docs/Web/API/Animation/currentTime) abrufen und durch ihre `activeDuration` teilen:

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

CSS-Animationen und -Übergänge haben eigene Event-Listener, und diese sind auch mit der Web Animations API möglich:

- [`onfinish`](/de/docs/Web/API/Animation/finish_event) ist der Event-Handler für das `finish`-Event und kann manuell mit [`finish()`](/de/docs/Web/API/Animation/finish) ausgelöst werden.
- [`oncancel`](/de/docs/Web/API/Animation/cancel_event) ist der Event-Handler für das `cancel`-Event und kann mit [`cancel()`](/de/docs/Web/API/Animation/cancel) ausgelöst werden.

Hier setzen wir die Callbacks für den Kuchen, die Flasche und Alice, um die Funktion `endGame` auszuführen:

```js
// When the cake or bottle runs out
nommingCake.onfinish = endGame;
drinking.onfinish = endGame;

// Alice reaches the end of her animation
aliceChange.onfinish = endGame;
```

Noch besser: Die Web Animations API stellt auch ein Promise namens [`finished`](/de/docs/Web/API/Animation/finished) bereit, das aufgelöst wird, wenn die Animation abgeschlossen ist, oder abgelehnt wird, wenn sie abgebrochen wird.

## Fazit

Dies sind die grundlegenden Funktionen der Web Animations API. Sie sollten nun bereit sein, "in den Kaninchenbau zu springen" und Ihre eigenen Animationsexperimente im Browser zu schreiben!

## Siehe auch

- Die [vollständige Sammlung der Alice-im-Wunderland-Demos](https://codepen.io/collection/nqNJvD) auf CodePen, die Sie spielen, fork'en und teilen können.
- [Animating like you just don't care with Element.animate](https://hacks.mozilla.org/2016/08/animating-like-you-just-dont-care-with-element-animate/) (2016) erklärt den Hintergrund der Web Animations API und warum sie performanter ist als andere Methoden der Web-Animation.
