---
title: Anatomie eines Videospiels
slug: Games/Anatomy
l10n:
  sourceCommit: 4833ab42e0aee7611fff57f70e38c4be1df9d11b
---

Dieser Artikel betrachtet die Anatomie und den Arbeitsablauf eines durchschnittlichen Videospiels aus technischer Sicht, insbesondere wie die Hauptschleife ablaufen sollte. Er hilft Anfängern in der modernen Spieleentwicklung zu verstehen, was beim Erstellen eines Spiels erforderlich ist und wie Webstandards wie JavaScript sich als Werkzeuge eignen. Auch erfahrene Spieleprogrammierer, die neu in der Webentwicklung sind, könnten davon profitieren.

## Präsentieren, akzeptieren, interpretieren, berechnen, wiederholen

Das Ziel jedes Videospiels ist es, dem/den Benutzer(n) eine Situation zu **präsentieren**, ihre Eingaben zu **akzeptieren**, diese Signale in Aktionen zu **interpretieren** und eine neue Situation zu **berechnen**, die aus diesen Handlungen resultiert. Spiele durchlaufen ständig diese Phasen, immer wieder, bis eine Endbedingung eintritt (z.B. Gewinn, Verlust oder Beendigung, um ins Bett zu gehen). Nicht überraschend entspricht dieses Muster der Programmierung einer Spiel-Engine.

Die Einzelheiten hängen vom Spiel ab.

Einige Spiele treiben diesen Zyklus durch Benutzereingaben voran. Stellen Sie sich vor, Sie entwickeln ein _„Finde die Unterschiede zwischen diesen beiden ähnlichen Bildern“_-Spiel. Diese Spiele **präsentieren** dem Benutzer zwei Bilder; sie **akzeptieren** seinen Klick (oder seine Berührung); sie **interpretieren** die Eingabe als Erfolg, Misserfolg, Pause, Menüinteraktion, usw.; schließlich **berechnen** sie eine aktualisierte Szene, die aus dieser Eingabe resultiert. Die Spielschleife wird durch die Eingabe des Benutzers vorangetrieben und schläft, bis er sie bereitstellt. Dies ist eher ein rundenbasierter Ansatz, der keine ständige Aktualisierung jedes Bildes erfordert, sondern nur, wenn der Spieler reagiert.

Andere Spiele verlangen Kontrolle über jede der kleinstmöglichen Zeitabschnitte. Die gleichen Prinzipien wie oben gelten mit einer leichten Abwandlung: Jedes Animationsbildchen führt den Zyklus fort, und jede Änderung in der Benutzereingabe wird beim ersten verfügbaren Zug erfasst. Dieses Modell mit einer Schleife pro Bild wird in etwas genannt, das **Hauptschleife** heißt, implementiert. Wenn Ihr Spiel zyklusbasiert arbeitet, dann ist dies die Autorität, nach der sich Ihre Simulationen richten.

Aber es könnte keine Kontrolle pro Bild erfordern. Ihre Spielschleife könnte der im _Finde die Unterschiede_-Beispiel ähneln und sich auf Eingabeereignisse stützen. Es könnte sowohl Eingaben als auch simulierte Zeit erfordern. Es könnte sogar auf etwas ganz anderes basierend schleifen.

Modernes JavaScript — wie in den nächsten Abschnitten beschrieben — erleichtert es glücklicherweise, eine effiziente, nur einmal pro Bild ausführbare Hauptschleife zu entwickeln. Natürlich wird Ihr Spiel nur so optimiert sein, wie Sie es machen. Wenn es so aussieht, als sollte etwas an ein selteneres Ereignis angehängt werden, ist es oft eine gute Idee, es aus der Hauptschleife herauszunehmen (aber nicht immer).

## Eine Hauptschleife in JavaScript aufbauen

JavaScript funktioniert am besten mit Ereignissen und Callback-Funktionen. Moderne Browser sind bemüht, Methoden genau dann aufzurufen, wenn sie benötigt werden, und in den Pausen (oder bei anderen Aufgaben) in Leerlauf zu gehen. Es ist eine ausgezeichnete Idee, Ihren Code an die Momente zu koppeln, die für sie geeignet sind. Überlegen Sie, ob Ihre Funktion wirklich in einem strikten Zeitintervall aufgerufen werden muss, jedes Bild oder nur, nachdem etwas anderes passiert ist. Wenn Sie dem Browser deutlicher mitteilen, wann Ihre Funktion aufgerufen werden muss, kann der Browser optimieren, wann sie aufgerufen wird. Das wird wahrscheinlich auch Ihre Arbeit erleichtern.

Einige Codefragmente müssen Bild-für-Bild ausgeführt werden, warum also diese Funktion nicht an die Zeichnungsplanung des Browsers anhängen? Im Web wird [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) die Grundlage der meisten gut programmierten Hauptschleifen pro Bild sein. Beim Aufruf muss eine Callback-Funktion übergeben werden. Diese Callback-Funktion wird zu einem geeigneten Zeitpunkt vor der nächsten Neumalung ausgeführt. Hier ist ein Beispiel für eine einfache Hauptschleife:

```js
window.main = () => {
  window.requestAnimationFrame(main);

  // Whatever your main loop needs to do
};

main(); // Start the cycle
```

> [!NOTE]
> In jeder der hier besprochenen `main()`-Methoden planen wir eine neue `requestAnimationFrame`, bevor wir den Inhalt unserer Schleife ausführen. Das ist kein Zufall und wird als Best Practice angesehen. Das frühe Aufrufen der nächsten `requestAnimationFrame` stellt sicher, dass der Browser sie rechtzeitig erhält, um entsprechend zu planen, selbst wenn Ihr aktuelles Bild sein VSync-Fenster verpasst.

Der obige Codeabschnitt hat zwei Anweisungen. Die erste Anweisung erstellt eine Funktion als globale Variable namens `main()`. Diese Funktion führt einige Arbeiten aus und weist dem Browser auch an, sich im nächsten Bild erneut mit `window.requestAnimationFrame()` selbst aufzurufen. Die zweite Anweisung ruft die `main()`-Funktion auf, die in der ersten Anweisung definiert ist. Da `main()` in der zweiten Anweisung einmal aufgerufen wird und jeder Aufruf dazu führt, dass sie sich selbst in die Warteschlange der Dinge einreiht, die im nächsten Bild zu tun sind, ist `main()` mit Ihrer Bildrate synchronisiert.

Natürlich ist diese Schleife nicht perfekt. Bevor wir besprechen, wie wir sie ändern können, lassen Sie uns besprechen, was sie bereits gut macht.

Das Timing der Hauptschleife, wenn der Browser auf das Display zeichnet, erlaubt Ihnen, Ihre Schleife so häufig laufen zu lassen, wie der Browser zeichnen möchte. Sie erhalten die Kontrolle über jedes Bild der Animation. Es ist auch sehr einfach, da `main()` die einzige Funktion ist, die in der Schleife ausgeführt wird. Ein First-Person Shooter (oder ein ähnliches Spiel) präsentiert einmal pro Bild eine neue Szene. Auf diese Weise kann man kaum glatter und reaktionsschneller werden.

Aber nehmen Sie nicht sofort an, dass Animationen eine Kontrolle Bild-für-Bild erfordern. Einfache Animationen können leicht durchgeführt werden, sogar GPU-beschleunigt, mit CSS-Animationen und anderen im Browser enthaltenen Werkzeugen. Es gibt viele davon und sie werden Ihr Leben erleichtern.

## Eine bessere Hauptschleife in JavaScript aufbauen

Es gibt zwei offensichtliche Probleme mit unserer vorherigen Hauptschleife: `main()` verschmutzt das [`window`](/de/docs/Web/API/Window)-Objekt (wo alle globalen Variablen gespeichert sind) und der Beispielcode ließ uns keine Möglichkeit, die Schleife zu _stoppen_, es sei denn, die gesamte Registerkarte wird geschlossen oder aktualisiert. Beim ersten Problem: Wenn Sie möchten, dass die Hauptschleife einfach läuft und keinen direkten Zugriff darauf benötigen, könnten Sie sie als Immediately-Invoked Function Expression (IIFE) erstellen.

<!-- prettier-ignore-start -->
```js
/*
 * Starting with the semicolon is in case whatever line of code above this example
 * relied on automatic semicolon insertion (ASI). The browser could accidentally
 * think this whole example continues from the previous line. The leading semicolon
 * marks the beginning of our new line if the previous one was not empty or terminated.
 */

;(() => {
  function main() {
    window.requestAnimationFrame(main);

    // Your main loop contents
  }

  main(); // Start the cycle
})();
```
<!-- prettier-ignore-end -->

Wenn der Browser auf diese IIFE trifft, wird er Ihre Hauptschleife definieren und sofort für das nächste Bild in die Warteschlange stellen. Sie wird an keinem Objekt angehängt sein und `main` (oder `main()` für Methoden) wäre ein gültiger unbenutzter Name im Rest der Anwendung, frei, als etwas anderes definiert zu werden.

> [!NOTE]
> In der Praxis ist es üblicher, die nächste `requestAnimationFrame()` mit einer If-Anweisung zu verhindern, anstatt `cancelAnimationFrame()` aufzurufen.

Beim zweiten Problem, das Stoppen der Hauptschleife, müssen Sie den Aufruf an `main()` mit [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) abbrechen. Sie müssen `cancelAnimationFrame()` das ID-Token übergeben, das von `requestAnimationFrame()` beim letzten Aufruf zurückgegeben wurde. Nehmen wir an, die Funktionen und Variablen Ihres Spiels sind in einem Namespace aufgebaut, den Sie `MyGame` genannt haben. Indem wir unser letztes Beispiel erweitern, würde die Hauptschleife nun folgendermaßen aussehen:

<!-- prettier-ignore-start -->
```js
/*
 * Starting with the semicolon is in case whatever line of code above this example
 * relied on automatic semicolon insertion (ASI). The browser could accidentally
 * think this whole example continues from the previous line. The leading semicolon
 * marks the beginning of our new line if the previous one was not empty or terminated.
 *
 * Let us also assume that MyGame is previously defined.
 */

;(() => {
  function main() {
    MyGame.stopMain = window.requestAnimationFrame(main);

    // Your main loop contents
  }

  main(); // Start the cycle
})();
```
<!-- prettier-ignore-end -->

Wir haben jetzt eine Variable in unserem `MyGame`-Namespace deklariert, die wir `stopMain` nennen und die die ID enthält, die von unserem letzten Aufruf der Hauptschleife an `requestAnimationFrame()` zurückgegeben wird. Zu jedem Zeitpunkt können wir die Hauptschleife stoppen, indem wir dem Browser mitteilen, die Anfrage zu stornieren, die unserem Token entspricht.

```js
window.cancelAnimationFrame(MyGame.stopMain);
```

Der Schlüssel zum Programmieren einer Hauptschleife in JavaScript ist, sie an das Ereignis anzuhängen, das Ihre Aktion antreiben sollte und darauf zu achten, wie die verschiedenen beteiligten Systeme zusammenspielen. Sie könnten mehrere Komponenten haben, die von verschiedenen Arten von Ereignissen angetrieben werden. Dies fühlt sich vielleicht wie unnötige Komplexität an, könnte aber eine gute Optimierung sein (nicht unbedingt, natürlich). Das Problem ist, dass Sie keine typische Hauptschleife programmieren. In JavaScript verwenden Sie die Hauptschleife des Browsers und versuchen, diese effektiv zu nutzen.

## Eine optimiertere Hauptschleife in JavaScript aufbauen

Letztendlich führt in JavaScript der Browser seine eigene Hauptschleife aus und Ihr Code existiert in einigen ihrer Phasen. Die obigen Abschnitte beschreiben Hauptschleifen, die es vermeiden, dem Browser die Kontrolle zu entziehen. Diese Hauptmethoden hängen sich an `window.requestAnimationFrame()` an, das den Browser um Kontrolle über das kommende Bild bittet. Es liegt am Browser, wie er diese Anfragen mit seiner Hauptschleife verknüpft. Die [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#dom-animationframeprovider-requestanimationframe) definiert nicht wirklich, wann die Browser die `requestAnimationFrame`-Callbacks ausführen müssen. Dies kann ein Vorteil sein, da es Browser-Anbietern freisteht, mit den Lösungen zu experimentieren, die sie für das Beste halten und sie im Laufe der Zeit zu optimieren.

Moderne Versionen von Firefox und Google Chrome (und wahrscheinlich auch andere) _versuchen_, `requestAnimationFrame`-Callbacks mit ihrem Haupt-Thread zu Beginn eines Zeitabschnitts eines Bildes zu verbinden. Der Haupt-Thread des Browsers _versucht_ daher, wie folgt auszusehen:

1. Starten eines neuen Bildes (während das vorherige Bild vom Display behandelt wird).
2. Durchgehen der Liste der `requestAnimationFrame`-Callbacks und Ausführen dieser.
3. Ausführen der Müllsammlung und anderer Aufgaben pro Bild, wenn die oben genannten Callback-Enden die Kontrolle über den Haupt-Thread abgeben.
4. Schlafen (es sei denn, ein Ereignis unterbricht das Nickerchen des Browsers) bis der Monitor bereit ist für Ihr Bild ([VSync](https://en.wikipedia.org/wiki/Screen_tearing#Vertical_synchronization)) und wiederholen.

Man kann die Entwicklung von Echtzeitanwendungen als Zeitbudget betrachten, um Arbeit zu erledigen. Alle obigen Schritte müssen alle 16-einhalb Millisekunden stattfinden, um mit einem 60 Hz-Display Schritt zu halten. Browser rufen Ihren Code so früh wie möglich auf, um ihm eine maximale Rechenzeit zu geben. Ihr Haupt-Thread wird oft Arbeitslasten starten, die sich gar nicht auf dem Haupt-Thread befinden (wie Rasterungen oder Shader in WebGL). Lange Berechnungen können in einem Web Worker oder einer GPU parallel durchgeführt werden, während der Browser seinen Haupt-Thread für die Verwaltung der Müllsammlung, seiner anderen Aufgaben oder asynchronen Ereignisse nutzt.

Während wir beim Thema der Zeitbudgetierung sind, viele Webbrowser haben ein Werkzeug namens _High Resolution Time_. Das {{jsxref("Date")}}-Objekt ist nicht mehr die anerkannte Methode für zeitliche Ereignisse, da es ungenau ist und von der Systemuhr modifiziert werden kann. High Resolution Time hingegen zählt die Anzahl der Millisekunden seit `navigationStart` (wenn das vorherige Dokument entladen wird). Dieser Wert wird als Dezimalzahl zurückgegeben, die bis zu einem Tausendstel einer Millisekunde genau ist. Es ist bekannt als [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), aber im Wesentlichen betrachten Sie es als Gleitkommazahl.

> [!NOTE]
> Systeme (Hardware oder Software), die nicht zu einer Mikrosekunden-genauen Zeitmessung fähig sind, dürfen pro Millisekunde eine Genauigkeit bereitstellen. Sie sollten eine Genauigkeit von 0,001ms bereitstellen, wenn sie dazu in der Lage sind.

Dieser Wert ist allein nicht besonders nützlich, da er sich auf ein ziemlich uninteressantes Ereignis bezieht, aber er kann von einem anderen Zeitstempel subtrahiert werden, um genau und präzise zu bestimmen, wie viel Zeit zwischen diesen beiden Punkten vergangen ist. Um einen dieser Zeitstempel zu erhalten, können Sie `window.performance.now()` aufrufen und das Ergebnis als Variable speichern.

```js
const tNow = window.performance.now();
```

Zurück zum Thema der Hauptschleife. Sie werden oft wissen wollen, wann Ihre Hauptfunktion aufgerufen wurde. Da dies üblich ist, bietet `window.requestAnimationFrame()` immer einen `DOMHighResTimeStamp` für Callbacks als Argument, wenn sie ausgeführt werden. Dies führt zu einer weiteren Verbesserung unserer vorherigen Hauptschleifen.

<!-- prettier-ignore-start -->
```js
/*
 * Starting with the semicolon is in case whatever line of code above this example
 * relied on automatic semicolon insertion (ASI). The browser could accidentally
 * think this whole example continues from the previous line. The leading semicolon
 * marks the beginning of our new line if the previous one was not empty or terminated.
 *
 * Let us also assume that MyGame is previously defined.
 */

;(() => {
  function main(tFrame) {
    MyGame.stopMain = window.requestAnimationFrame(main);

    // Your main loop contents
    // tFrame, from "function main(tFrame)", is now a DOMHighResTimeStamp provided by rAF.
  }

  main(); // Start the cycle
})();
```
<!-- prettier-ignore-end -->

Mehrere andere Optimierungen sind möglich, und es hängt wirklich davon ab, was Ihr Spiel zu erreichen versucht. Ihr Spielgenre wird offensichtlich einen Unterschied machen, aber es könnte sogar subtiler als das sein. Vielleicht zeichnen Sie jedes Pixel einzeln auf eine Leinwand oder Sie schichten DOM-Elemente (einschließlich mehrerer WebGL-Leinwände mit transparenten Hintergründen) in eine komplexe Hierarchie. Jede dieser Wege führt zu unterschiedlichen Möglichkeiten und Beschränkungen.

## Es ist … Entscheidungszeit

Sie werden schwierige Entscheidungen über Ihre Hauptschleife treffen müssen: wie Sie den genauen Verlauf der Zeit simulieren. Wenn Sie Bild-für-Bild-Kontrolle verlangen, müssen Sie bestimmen, wie häufig Ihr Spiel aktualisiert und gezeichnet wird. Vielleicht möchten Sie sogar, dass Aktualisierung und Zeichnung in unterschiedlichen Raten erfolgen. Sie müssen auch berücksichtigen, wie Ihr Spiel elegant scheitert, wenn das System des Benutzers die Arbeitslast nicht aufrechterhalten kann. Lassen Sie uns zunächst annehmen, dass Sie die Benutzereingabe verarbeiten und den Spielzustand jedes Mal aktualisieren, wenn Sie zeichnen. Wir werden später darauf zurückkommen.

> [!NOTE]
> Das Ändern, wie Ihre Hauptschleife mit Zeit umgeht, ist ein Albtraum für Debugging, überall. Überlegen Sie Ihre Bedürfnisse sorgfältig, bevor Sie an Ihrer Hauptschleife arbeiten.

### Wie die meisten Browserspiele aussehen sollten

Wenn Ihr Spiel die maximale Bildwiederholrate jeder von Ihnen unterstützten Hardware erreichen kann, ist Ihre Aufgabe ziemlich einfach. Sie können aktualisieren, rendern und dann nichts tun, bis VSync.

<!-- prettier-ignore-start -->
```js
/*
 * Starting with the semicolon is in case whatever line of code above this example
 * relied on automatic semicolon insertion (ASI). The browser could accidentally
 * think this whole example continues from the previous line. The leading semicolon
 * marks the beginning of our new line if the previous one was not empty or terminated.
 *
 * Let us also assume that MyGame is previously defined.
 */

;(() => {
  function main(tFrame) {
    MyGame.stopMain = window.requestAnimationFrame(main);

    update(tFrame); // Call your update method. In our case, we give it rAF's timestamp.
    render();
  }

  main(); // Start the cycle
})();
```
<!-- prettier-ignore-end -->

Wenn die maximale Bildwiederholrate nicht erreicht werden kann, könnten Qualitätseinstellungen angepasst werden, um unter Ihrem Zeitbudget zu bleiben. Das berühmteste Beispiel für dieses Konzept ist das Spiel von id Software, RAGE. Dieses Spiel entzog dem Benutzer die Kontrolle, um seine Berechnungszeit auf ungefähr 16ms (oder ungefähr 60fps) zu halten. Wenn die Berechnung zu lange dauerte, würde die Render-Auflösung verringert, Texturen und andere Assets würden nicht geladen oder gezeichnet, und so weiter. Diese (nicht-web) Fallstudie machte einige Annahmen und Trade-offs:

- Jedes Bild der Animation berücksichtigt Benutzereingaben.
- Kein Bild muss extrapoliert (geschätzt) werden, weil jede Zeichnung ihre eigene Aktualisierung hat.
- Simulationssysteme können im Grunde davon ausgehen, dass jede vollständige Aktualisierung \~16ms auseinanderliegt.
- Dem Benutzer die Kontrolle über Qualitätseinstellungen zu geben, wäre ein Albtraum.
- Verschiedene Monitoreeingaben erfolgen mit unterschiedlichen Raten: 30 FPS, 75 FPS, 100 FPS, 120 FPS, 144 FPS usw.
- Systeme, die 60 FPS nicht aufrechterhalten können, verlieren an visueller Qualität, um das spiel bei optimaler Geschwindigkeit weiterlaufen zu lassen (irgendwann scheitert es endgültig, wenn die Qualität zu niedrig wird).

### Andere Möglichkeiten, variable Bildwiederholraten zu handhaben

Andere Methoden zur Bewältigung des Problems existieren.

Eine gängige Technik ist, die Simulation mit einer konstanten Frequenz zu aktualisieren und dann so viele (oder so wenige) der tatsächlichen Bilder wie möglich zu zeichnen. Die Aktualisierungsmethode kann weiterhin schleifen, ohne sich darum zu kümmern, was der Benutzer sieht. Die Zeichnungsmethode kann die letzte Aktualisierung betrachten und wann sie passierte. Da die Zeichnung weiß, wann sie darstellt, und die Simulationszeit für die letzte Aktualisierung, kann sie ein plausibles Bild für den Benutzer vorhersagen. Es spielt keine Rolle, ob dies häufiger als die offizielle Aktualisierungsschleife (oder sogar seltener) ist. Die Aktualisierungsmethode legt Kontrollpunkte fest und so häufig wie das System es erlaubt, zeichnet die Render-Methode Momentaufnahmen rund um diese. Es gibt viele Möglichkeiten, die Aktualisierungsmethode in Webstandards zu trennen:

- Zeichnen Sie auf `requestAnimationFrame()` und aktualisieren Sie auf einem [`setInterval()`](/de/docs/Web/API/Window/setInterval) oder [`setTimeout()`](/de/docs/Web/API/Window/setTimeout).
  - Dies nutzt Prozessorzeit, auch wenn es nicht fokussiert oder minimiert ist, blockiert den Haupt-Thread und ist wahrscheinlich ein Artefakt traditioneller Spielschleifen (aber es ist einfach).

- Zeichnen auf `requestAnimationFrame()` und aktualisieren Sie auf einem [`setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) oder [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) in einem [Web Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers).
  - Dies ist das gleiche wie oben, außer dass die Aktualisierung den Haupt-Thread nicht blockiert (und der Haupt-Thread blockiert sie nicht). Dies ist eine komplexere Lösung und könnte zu viel Overhead für einfache Aktualisierungen sein.

- Zeichnen Sie auf `requestAnimationFrame()` und verwenden Sie es, um einen Web Worker mit der Aktualisierungsmethode abzurufen, der die Anzahl der zu berechnenden Ticks enthält, falls vorhanden.
  - Dies schläft, bis `requestAnimationFrame()` aufgerufen wird und nicht den Haupt-Thread verschmutzt, plus Sie verlassen sich nicht auf altmodische Methoden. Wieder ist dies ein bisschen komplexer als die vorherigen zwei Optionen, und _jeder_ Start der Aktualisierung wird blockiert, bis der Browser sich entscheidet, rAF-Callbacks auszuführen.

Jede dieser Methoden hat ähnliche Trade-offs:

- Benutzer können Render-Frames überspringen oder zusätzliche interpolieren, je nach Leistung.
- Sie können darauf zählen, dass alle Benutzer nicht-kosmetische Variablen in frequenz derselben konstanten Frequenz aktualisieren, minus Hiccups.
- Viel komplexer zu programmieren als die grundlegenden Schleifen, die wir früher gesehen haben.
- Benutzereingaben werden vollständig ignoriert, bis zur nächsten Aktualisierung (selbst wenn der Benutzer ein schnelles Gerät hat).
- Die obligatorische Interpolation hat einen Leistungseinbruch.

Eine separate Aktualisierungs- und Zeichenmethode könnte wie das folgende Beispiel aussehen. Um der Demonstration willen basiert das Beispiel auf dem dritten Punkt, nur ohne Web Worker für die Lesbarkeit (und, seien wir ehrlich, für die Schreibbarkeit).

> [!WARNING]
> Dieses Beispiel, speziell, bedarf einer technischen Überprüfung.

<!-- prettier-ignore-start -->
```js
/*
 * Starting with the semicolon is in case whatever line of code above this example
 * relied on automatic semicolon insertion (ASI). The browser could accidentally
 * think this whole example continues from the previous line. The leading semicolon
 * marks the beginning of our new line if the previous one was not empty or terminated.
 *
 * Let us also assume that MyGame is previously defined.
 *
 * MyGame.lastRender keeps track of the last provided requestAnimationFrame timestamp.
 * MyGame.lastTick keeps track of the last update time. Always increments by tickLength.
 * MyGame.tickLength is how frequently the game state updates. It is 20 Hz (50ms) here.
 *
 * timeSinceTick is the time between requestAnimationFrame callback and last update.
 * numTicks is how many updates should have happened between these two rendered frames.
 *
 * render() is passed tFrame because it is assumed that the render method will calculate
 *          how long it has been since the most recently passed update tick for
 *          extrapolation (purely cosmetic for fast devices). It draws the scene.
 *
 * update() calculates the game state as of a given point in time. It should always
 *          increment by tickLength. It is the authority for game state. It is passed
 *          the DOMHighResTimeStamp for the time it represents (which, again, is always
 *          last update + MyGame.tickLength unless a pause feature is added, etc.)
 *
 * setInitialState() Performs whatever tasks are leftover before the main loop must run.
 *                   It is just a generic example function that you might have added.
 */

;(() => {
  function main(tFrame) {
    MyGame.stopMain = window.requestAnimationFrame(main);
    const nextTick = MyGame.lastTick + MyGame.tickLength;
    let numTicks = 0;

    // If tFrame < nextTick then 0 ticks need to be updated (0 is default for numTicks).
    // If tFrame = nextTick then 1 tick needs to be updated (and so forth).
    // Note: As we mention in summary, you should keep track of how large numTicks is.
    // If it is large, then either your game was asleep, or the machine cannot keep up.
    if (tFrame > nextTick) {
      const timeSinceTick = tFrame - MyGame.lastTick;
      numTicks = Math.floor(timeSinceTick / MyGame.tickLength);
    }

    queueUpdates(numTicks);
    render(tFrame);
    MyGame.lastRender = tFrame;
  }

  function queueUpdates(numTicks) {
    for (let i = 0; i < numTicks; i++) {
      MyGame.lastTick += MyGame.tickLength; // Now lastTick is this tick.
      update(MyGame.lastTick);
    }
  }

  MyGame.lastTick = performance.now();
  MyGame.lastRender = MyGame.lastTick; // Pretend the first draw was on first update.
  MyGame.tickLength = 50; // This sets your simulation to run at 20Hz (50ms)

  setInitialState();
  main(performance.now()); // Start the cycle
})();
```
<!-- prettier-ignore-end -->

Eine weitere Alternative ist, bestimmte Dinge seltener zu tun. Wenn ein Teil Ihrer Aktualisierungsschleife schwer zu berechnen ist, aber unempfindlich gegenüber der Zeit, könnten Sie in Erwägung ziehen, seine Frequenz zu reduzieren und idealerweise in Teile über diesen verlängerten Zeitraum zu verteilen. Ein implizites Beispiel hierfür wurde im Artillery Blog für Artillery Games gefunden, wo sie [die Rate ihrer Müllgenerierung anpassen](https://web.archive.org/web/20161021030645/http://blog.artillery.com/2012/10/browser-garbage-collection-and-framerate.html), um die Müllsammlung zu optimieren. Offensichtlich ist das Aufräumen von Ressourcen nicht zeitkritisch (besonders, wenn das Aufräumen störender ist als der Müll selbst).

Dies kann auch für einige Ihrer eigenen Aufgaben gelten. Dies sind gute Kandidaten, um gedrosselt zu werden, wenn verfügbare Ressourcen Bedenken hervorrufen.

## Zusammenfassung

Ich möchte klarstellen, dass eines oder keines der oben erwähnten am besten für Ihr Spiel sein könnten. Die richtige Entscheidung hängt ganz von den Abwägungen ab, die Sie bereit (und nicht bereit) sind zu machen. Das Hauptproblem besteht darin, zu einer anderen Option zu wechseln. Glücklicherweise habe ich keine Erfahrung damit, aber ich habe gehört, dass es eine qualvolle Übung ist, Fehler in der Rückwärtskompatibilität nachzujagen.

Ein wichtiger Punkt, den man sich für verwaltete Plattformen wie das Web merken sollte, ist, dass Ihre Schleife für beträchtliche Zeiträume die Ausführung stoppen könnte. Dies könnte passieren, wenn der Benutzer Ihre Registerkarte abwählt und der Browser seine `requestAnimationFrame`-Callback-Intervall verlangsamt (oder schläft). Sie haben viele Möglichkeiten, mit dieser Situation umzugehen und dies kann davon abhängen, ob Ihr Spiel ein Einzelspieler- oder Multiplayer-Spiel ist. Einige Optionen sind:

- Betrachten Sie die Lücke als „Pause“ und überspringen Sie die Zeit.
  - Sie können wahrscheinlich sehen, wie dies problematisch für die meisten Multiplayerspiele ist.

- Sie können die Lücke simulieren, um aufzuholen.
  - Dies kann ein Problem für lange Ausfälle und/oder komplexe Updates sein.

- Sie können den Spielstatus von einem Peer oder dem Server wiederherstellen.
  - Dies ist ineffektiv, wenn Ihre Peers oder der Server auch aus dem Takt sind oder sie nicht existieren, weil das Spiel ein Einzelspieler-Spiel ist und keinen Server hat.

Sobald Ihre Hauptschleife entwickelt wurde und Sie sich auf einen Satz von Annahmen und Abwägungen geeinigt haben, die Ihrem Spiel entsprechen, liegt es nur noch daran, Ihre Entscheidungen zu nutzen, um etwaige Physik, AI, Sounds, Netzwerksynchronisation und was Ihr Spiel auch immer erfordern mag, zu berechnen.
