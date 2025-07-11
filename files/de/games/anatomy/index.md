---
title: Anatomie eines Videospiels
slug: Games/Anatomy
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

Dieser Artikel behandelt die Anatomie und den Arbeitsablauf des durchschnittlichen Videospiels aus technischer Sicht, insbesondere in Bezug darauf, wie der Hauptzyklus ablaufen sollte. Er hilft Anfängern in der modernen Spieleentwicklung zu verstehen, was beim Erstellen eines Spiels erforderlich ist und wie sich Webstandards wie JavaScript als Werkzeuge eignen. Auch erfahrene Spieleprogrammierer, die neu in der Webentwicklung sind, könnten davon profitieren.

## Präsentieren, akzeptieren, interpretieren, berechnen, wiederholen

Das Ziel jedes Videospiels ist es, dem/den Benutzer(n) eine Situation zu **präsentieren**, ihre Eingabe zu **akzeptieren**, diese Signale in Aktionen zu **interpretieren** und eine neue Situation zu **berechnen**, die sich aus diesen Handlungen ergibt. Spiele durchlaufen diese Phasen ständig in einer Schleife, bis eine Endbedingung eintritt (z. B. gewinnen, verlieren oder beenden, um schlafen zu gehen). Nicht überraschend entspricht dieses Muster der Programmierung einer Spiele-Engine.

Die Einzelheiten hängen vom Spiel ab.

Einige Spiele steuern diesen Zyklus durch Benutzereingaben. Stellen Sie sich vor, Sie entwickeln ein Spiel vom Typ _"Finde die Unterschiede zwischen diesen beiden ähnlichen Bildern"_. Diese Spiele **präsentieren** dem Benutzer zwei Bilder; sie **akzeptieren** seinen Klick (oder seine Berührung); sie **interpretieren** die Eingabe als Erfolg, Misserfolg, Pause, Menüinteraktion usw.; schließlich **berechnen** sie eine aktualisierte Szene, die sich aus dieser Eingabe ergibt. Der Spielzyklus wird durch die Eingabe des Benutzers vorangetrieben und pausiert, bis der Benutzer sie bereitstellt. Dies ist eher ein rundenbasiertes Vorgehen, das nicht bei jedem Frame ein ständiges Update erfordert, sondern nur, wenn der Spieler reagiert.

Andere Spiele verlangen die Kontrolle über jede der kleinstmöglichen Zeitscheiben. Die gleichen Prinzipien wie oben gelten mit einer kleinen Variation: Jede Animationsbild läuft den Zyklus weiter und jede Änderung der Benutzereingabe wird beim ersten verfügbaren Zeitpunkt erfasst. Dieses Modell wird in etwas implementiert, das als **Hauptschleife** bezeichnet wird. Wenn Ihr Spiel auf Zeit basiert, dann ist dies seine Autorität, an die sich Ihre Simulationen halten werden.

Aber es könnte nicht die Kontrolle pro Frame brauchen. Ihre Spielschleife könnte der des _"Finde die Unterschiede"_-Beispiels ähnlich sein und sich auf Eingabeveranstaltungen stützen. Es könnte sowohl Eingaben als auch simulierte Zeit erfordern. Vielleicht basiert die Schleife sogar auf etwas ganz anderem.

Dank moderner JavaScript-Implementierungen – wie in den folgenden Abschnitten beschrieben – ist es jedoch einfach, eine effiziente, einmal-pro-Frame-Hauptschleife zu entwickeln. Natürlich wird Ihr Spiel nur so optimiert sein, wie Sie es machen. Wenn etwas so aussieht, als sollte es an ein selteneres Ereignis angehängt werden, dann ist es oft eine gute Idee, es aus der Hauptschleife herauszubrechen (aber nicht immer).

## Eine Hauptschleife in JavaScript aufbauen

JavaScript funktioniert am besten mit Ereignissen und Rückruffunktionen. Moderne Browser bemühen sich, Methoden genau dann aufzurufen, wenn sie benötigt werden, und in den Lücken zu ideln (oder andere Aufgaben auszuführen). Es ist eine hervorragende Idee, Ihren Code an die Momente anzuhängen, die für ihn angemessen sind. Überlegen Sie, ob Ihre Funktion wirklich in einem strengen Zeitintervall, bei jedem Frame oder nur nach einem anderen Ereignis aufgerufen werden muss. Je genauer Sie dem Browser verdeutlichen, wann Ihre Funktion aufgerufen werden muss, desto besser kann der Browser optimieren, wann sie aufgerufen wird. Das wird wahrscheinlich auch Ihre Arbeit erleichtern.

Einige Codes müssen frameweise ausgeführt werden. Warum also diese Funktion nicht an den Neuzeichnungsplan des Browsers anknüpfen? Im Web wird [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) die Grundlage für die meisten gut programmierten Hauptschleifen pro Frame sein. Eine Rückruffunktion muss ihr übergeben werden, wenn sie aufgerufen wird. Diese Rückruffunktion wird zu einem geeigneten Zeitpunkt vor dem nächsten Neuzeichnen ausgeführt. Hier ist ein Beispiel für eine einfache Hauptschleife:

```js
window.main = () => {
  window.requestAnimationFrame(main);

  // Whatever your main loop needs to do
};

main(); // Start the cycle
```

> [!NOTE]
> In jedem der hier besprochenen `main()`-Methoden planen wir ein neues `requestAnimationFrame`, bevor wir den Inhalt unserer Schleife ausführen. Das ist kein Zufall und wird als Best Practice angesehen. Das frühzeitige Aufrufen des nächsten `requestAnimationFrame` stellt sicher, dass der Browser es rechtzeitig erhält, um entsprechend zu planen, selbst wenn Ihr aktueller Frame sein VSync-Fenster verpasst.

Der obige Codeblock enthält zwei Anweisungen. Die erste Anweisung erstellt eine Funktion als globale Variable namens `main()`. Diese Funktion führt einige Arbeiten aus und weist den Browser an, sich im nächsten Frame mit `window.requestAnimationFrame()` selbst aufzurufen. Die zweite Anweisung ruft die in der ersten Anweisung definierte `main()`-Funktion auf. Weil `main()` einmal in der zweiten Anweisung aufgerufen wird und bei jedem Aufruf sich selbst in die Liste der Aufgaben für den nächsten Frame einreiht, ist `main()` mit Ihrer Bildrate synchronisiert.

Natürlich ist diese Schleife nicht perfekt. Bevor wir Möglichkeiten zur Änderung besprechen, lassen Sie uns darüber sprechen, was sie bereits gut macht.

Das Anpassen der Hauptschleife an die Zeit, wenn der Browser das Display aktualisiert, ermöglicht es Ihnen, Ihre Schleife so häufig auszuführen, wie der Browser das Display aktualisieren möchte. Sie haben die Kontrolle über jeden Animationsbild. Es ist auch sehr einfach, da `main()` die einzige wiederholt ausgeführte Funktion ist. Ein First-Person-Shooter (oder ein ähnliches Spiel) präsentiert jede Bild ein neues Szenenbild. Sie können kaum reibungsloser und reaktionsschneller werden als das.

Aber nehmen Sie nicht sofort an, dass Animationen eine Kontrolle pro Frame erfordern. Einfache Animationen können problemlos und sogar GPU-beschleunigt mit CSS-Animationen und anderen im Browser integrierten Werkzeugen ausgeführt werden. Es gibt viele davon und sie werden Ihnen das Leben erleichtern.

## Eine bessere Hauptschleife in JavaScript aufbauen

Es gibt zwei offensichtliche Probleme mit unserer vorherigen Hauptschleife: `main()` verschmutzt das [`window`](/de/docs/Web/API/Window)-Objekt (in dem alle globalen Variablen gespeichert werden) und der Beispielcode ließ uns keine Möglichkeit, die Schleife zu _stoppen_, es sei denn, der gesamte Tab wird geschlossen oder aktualisiert. Bei dem ersten Problem, wenn Sie möchten, dass die Hauptschleife einfach läuft und Sie keinen direkten Zugriff darauf benötigen, können Sie sie als sofort aufgerufenen Funktionsausdruck (IIFE) erstellen.

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

Wenn der Browser auf diesen IIFE stößt, wird er Ihre Hauptschleife definieren und sofort für den nächsten Frame einreihen. Sie wird keinen Objekt zugeordnet sein und `main` (oder `main()` für Methoden) wird ein gültiger, ungenutzter Name im Rest der Anwendung sein, der frei ist, als etwas anderes definiert zu werden.

> [!NOTE]
> In der Praxis ist es üblicher, das nächste `requestAnimationFrame()` mit einer if-Anweisung zu verhindern, als `cancelAnimationFrame()` aufzurufen.

Bei dem zweiten Problem, das Stoppen der Hauptschleife, müssen Sie den Aufruf von `main()` mit [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) abbrechen. Sie müssen `cancelAnimationFrame()` das ID-Token übergeben, das von `requestAnimationFrame()` beim letzten Aufruf zurückgegeben wurde. Angenommen, Ihre Spiel-Funktionen und -Variablen sind auf einem Namensraum aufgebaut, den Sie `MyGame` genannt haben. Erweitert um unser letztes Beispiel, würde die Hauptschleife jetzt wie folgt aussehen:

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

Wir haben jetzt eine Variable in unserem `MyGame`-Namensraum deklariert, die wir `stopMain` nennen und die die ID enthält, die von unserem Hauptschleifenabendsten Rückruf zu `requestAnimationFrame()` zurückgegeben wurde. Zu jedem Zeitpunkt können wir die Hauptschleife beenden, indem wir dem Browser mitteilen, die Anfrage zu stornieren, die unserem Token entspricht.

```js
window.cancelAnimationFrame(MyGame.stopMain);
```

Der Schlüssel zur Programmierung einer Hauptschleife in JavaScript besteht darin, sie an das Ereignis zu binden, das Ihre Aktion antreiben soll, und darauf zu achten, wie die verschiedenen beteiligten Systeme zusammenspielen. Sie könnten mehrere Komponenten haben, die von verschiedenen Arten von Ereignissen getrieben werden. Dies fühlt sich wie eine unnötige Komplexität an, könnte aber gerade eine gute Optimierung sein (natürlich nicht immer). Das Problem ist, dass Sie keine typische Hauptschleife programmieren. In JavaScript verwenden Sie die Hauptschleife des Browsers und versuchen, dies effektiv zu tun.

## Eine optimierte Hauptschleife in JavaScript aufbauen

Letztendlich wird im JavaScript der Browser seine eigene Hauptschleife ausführen und Ihr Code existiert in einigen seiner Phasen. Die oben beschriebenen Hauptschlaufen vermeiden, dem Browser Kontrolle zu entziehen. Diese Hauptmethoden binden sich an `window.requestAnimationFrame()`, das den Browser um Kontrolle über den kommenden Frame bittet. Es liegt am Browser, wie diese Anfragen zu seiner Hauptschleife passen. Die [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#dom-animationframeprovider-requestanimationframe) definiert nicht wirklich genau, wann der Browser die `requestAnimationFrame`-Rückrufe ausführen muss. Dies kann von Vorteil sein, da es Browserherstellern die Freiheit gibt, mit den Lösungen zu experimentieren, von denen sie glauben, dass sie am besten sind, und diese im Laufe der Zeit anzupassen.

Moderne Versionen von Firefox und Google Chrome (und wahrscheinlich andere) _versuchen_, `requestAnimationFrame`-Rückrufe mit ihrem Hauptthread ganz am Anfang eines Frame-Zeitscheiben zu verbinden. Der Hauptthread des Browsers _versucht_ somit, wie folgt auszusehen:

1. Starten eines neuen Frames (während der vorherige Frame vom Display verarbeitet wird).
2. Durchgehen der Liste der `requestAnimationFrame`-Rückrufe und sie ausführen.
3. Durchführen der Speicherbereinigung und anderer Aufgaben pro Frame, wenn die obigen Rückrufe den Hauptthread nicht mehr kontrollieren.
4. Schlafen (sofern kein Ereignis den Schlaf des Browsers unterbricht), bis der Monitor für Ihr Bild bereit ist ([VSync](https://www.techopedia.com/definition/92/vertical-sync-vsync)) und wiederholen.

Sie können die Entwicklung echtzeitfähiger Anwendungen als ein Zeitbudget betrachten, um Arbeit zu verrichten. Alle oben genannten Schritte müssen alle 16½ Millisekunden stattfinden, um mit einem 60 Hz-Display Schritt zu halten. Browser rufen Ihren Code so früh wie möglich auf, um ihm maximale Rechenzeit zu geben. Ihr Hauptthread wird oft Arbeitslasten starten, die sich nicht einmal auf dem Hauptthread befinden (wie Rasterung oder Shader in WebGL). Lange Berechnungen können in einem Web Worker oder auf einem GPU gleichzeitig mit dem verwendet werden, während der Browser seinen Hauptthread verwaltet, Ressourcenverwaltung, seine anderen Aufgaben oder asynchrone Ereignisse behandelt.

Da wir uns über das Thema der Zeitbudgetierung unterhalten, haben viele Webbrowser ein Werkzeug namens _High Resolution Time_. Das {{jsxref("Date")}}-Objekt ist inzwischen keine anerkannte Methode mehr für das Timing von Ereignissen, da es sehr ungenau ist und durch die Systemuhr verändert werden kann. High Resolution Time zählt hingegen die Anzahl der Millisekunden seit `navigationStart` (wenn das vorherige Dokument entladen wird). Dieser Wert wird als Dezimalzahl zurückgegeben, die auf ein Tausendstel einer Millisekunde genau ist. Es ist als [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) bekannt, aber für alle praktischen Zwecke betrachten Sie es als Fließkommazahl.

> [!NOTE]
> Systeme (Hardware oder Software), die nicht zur Mikrosekundengenauigkeit fähig sind, dürfen eine Millisekundengenauigkeit als Minimum bereitstellen. Sie sollten 0,001 ms Genauigkeit bereitstellen, wenn sie dazu in der Lage sind.

Dieser Wert ist alleine nicht zu nützlich, da er sich auf ein relativ uninteressantes Ereignis bezieht, aber er kann von einem anderen Zeitstempel subtrahiert werden, um genau zu bestimmen, wie viel Zeit zwischen diesen beiden Punkten vergangen ist. Um einen dieser Zeitstempel zu erlangen, können Sie `window.performance.now()` aufrufen und das Ergebnis als Variable speichern.

```js
const tNow = window.performance.now();
```

Zurück zum Thema der Hauptschleife. Sie werden oft wissen wollen, wann Ihre Hauptfunktion aufgerufen wurde. Da dies häufig vorkommt, liefert `window.requestAnimationFrame()` immer einen `DOMHighResTimeStamp` als Argument an Rückrufe, wenn sie ausgeführt werden. Dies führt zu einer weiteren Verbesserung unserer vorherigen Hauptschleifen.

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

Mehrere andere Optimierungen sind möglich und es hängt wirklich davon ab, was Ihr Spiel erreichen möchte. Ihr Spielgenre wird offensichtlich einen Unterschied machen, aber es könnte sogar subtiler sein als das. Sie könnten jedes Pixel einzeln auf eine Leinwand zeichnen oder DOM-Elemente (einschließlich mehrerer WebGL-Leinwände mit transparenten Hintergründen, wenn Sie möchten) in einer komplexen Hierarchie schichten. Jeder dieser Pfade führt zu unterschiedlichen Möglichkeiten und Einschränkungen.

## Es ist Zeit, Entscheidungen zu treffen

Sie werden harte Entscheidungen über Ihre Hauptschleife treffen müssen: wie man den genauen Fortschritt der Zeit simuliert. Wenn Sie pro Frame Kontrolle verlangen, müssen Sie bestimmen, wie häufig Ihr Spiel aktualisiert und gezeichnet wird. Vielleicht wollen Sie sogar, dass sich Aktualisieren und Zeichnen mit unterschiedlichen Geschwindigkeiten erfolgen. Sie müssen auch berücksichtigen, wie Ihr Spiel auf Anmut scheitern wird, wenn das System des Benutzers mit der Arbeitslast nicht Schritt halten kann. Gehen wir davon aus, dass Sie Benutzereingaben behandeln und den Spielzustand jedes Mal aktualisieren, wenn Sie zeichnen. Wir werden später ausbrechen.

> [!NOTE]
> Das Ändern der Art und Weise, wie Ihre Hauptschleife mit der Zeit umgeht, ist in jedem Bereich ein Albtraum beim Debuggen. Denken Sie sorgfältig über Ihre Bedürfnisse nach, bevor Sie an Ihrer Hauptschleife arbeiten.

### Wie die meisten Browsergames aussehen sollten

Wenn Ihr Spiel die maximale Bildwiederholrate jeder unterstützten Hardware erreichen kann, ist Ihre Aufgabe ziemlich einfach. Sie können aktualisieren, rendern und dann nichts tun, bis VSync.

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

Wenn die maximale Bildwiederholrate nicht erreicht werden kann, könnten die Qualitätseinstellungen angepasst werden, um unter Ihrem Zeitbudget zu bleiben. Das berühmteste Beispiel für dieses Konzept ist das Spiel von id Software, RAGE. Dieses Spiel entzog dem Benutzer die Kontrolle, um seine Berechnungszeit bei etwa 16 ms (oder etwa 60 fps) zu halten. Wenn die Berechnung zu lange dauerte, würde die gerenderte Auflösung sinken, Texturen und andere Assets würden nicht geladen oder gezeichnet, und so weiter. Diese (nicht-internetbasierte) Fallstudie machte einige Annahmen und Kompromisse:

- Jedes Animationsbild konten die Benutzereingaben berücksichtigen.
- Kein Bild musste "extrapoliert" (geraten) werden, da jede Zeichnung ihr eigenes Update hatte.
- Simulationssysteme konnten im Wesentlichen davon ausgehen, dass jedes vollständige Update etwa 16 ms auseinander liegt.
- Dem Benutzer die Kontrolle über Einstellungen unter Abschläge zu überlassen, wäre ein Albtraum.
- Verschiedene Monitoreingaben erfolgen mit unterschiedlichen Geschwindigkeiten: 30 FPS, 75 FPS, 100 FPS, 120 FPS, 144 FPS usw.
- Systeme, die nicht mit 60 FPS Schritt halten können, verlieren ihre visuelle Qualität, um das Spiel bei optimaler Geschwindigkeit zu betreiben (letztendlich bricht es zusammen, wenn die Qualität zu niedrig wird).

### Andere Möglichkeiten, variable Aktualisierungsgeschwindigkeitsanforderungen zu bewältigen

Andere Methoden, das Problem anzugehen, existieren.

Eine häufige Technik besteht darin, die Simulation mit einer konstanten Frequenz zu aktualisieren und dann so viel (oder so wenig) wie möglich der eigentlichen Bilder zu zeichnen. Die Aktualisierungsmethode kann sich weiter wiederholen, ohne sich darum zu kümmern, was der Benutzer sieht. Die Zeichnungsmethode kann das letzte Update betrachten und wann es stattfand. Da die Zeichnungsmethode weiß, wann sie darstellt, und die Simulationszeit des letzten Updates, kann sie ein plausibles Bild der Benutzer darstellen. Es ist unerheblich, ob dies häufiger als die offizielle Aktualisierungsschleife erfolgt (oder sogar seltener). Die Aktualisierungsmethode setzt Kontrollpunkte und, so häufig wie das System es zulässt, zieht die Rendermethode Instanzen der Zeit um sie herum. Es gibt viele Möglichkeiten, die Aktualisierungsmethode in Webstandards zu trennen:

- Zeichnen auf `requestAnimationFrame()` und aktualisieren auf einem [`setInterval()`](/de/docs/Web/API/Window/setInterval) oder [`setTimeout()`](/de/docs/Web/API/Window/setTimeout).
  - Dies verwendet Prozessorzeit auch im minimierten oder nicht fokussierten Zustand, belastet den Hauptthread und ist wahrscheinlich ein Überbleibsel traditioneller Spielschleifen (aber es ist einfach).

- Zeichnen auf `requestAnimationFrame()` und aktualisieren auf einem [`setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) oder [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) in einem [Web Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers).
  - Dies ist dasselbe wie oben, außer dass die Aktualisierung nicht den Hauptthread belegt (noch wird der Mainthread blockiert). Dies ist eine komplexere Lösung und könnte zu viel Overhead für einfache Updates sein.

- Zeichnen auf `requestAnimationFrame()` und dies verwenden, um einem Web Worker mit der Aktualisierungsmethode die zu berechnenden Ticks mitzuteilen, falls vorhanden.
  - Dies schläft, bis `requestAnimationFrame()` aufgerufen wird, und verschmutzt den Hauptthread nicht, und Sie verwenden nicht altmodische Methoden. Dies ist erneut etwas komplexer als die vorherigen beiden Optionen, und das _Starten_ jedes Updates wird blockiert, bis der Browser entscheidet, die rAF-Rückrufe aufzurufen.

Jede dieser Methoden hat ähnliche Kompromisse:

- Benutzer können sich darauf verlassen, dass alle Benutzer nicht-kosmetische Variablen bei der gleichen festen Frequenz aktualisieren (abgesehen von Hindernissen).
- Viel komplizierter zu programmieren als die früher gesehenen Grundschleifen.
- Benutzereingaben werden bis zum nächsten Update vollständig ignoriert (selbst wenn der Benutzer ein schnelles Gerät hat).
- Die obligatorische Interpolation hat Sanktionen hinsichtlich Performance.

Eine separate Aktualisierungs- und Zeichnungsmethode könnte wie im folgenden Beispiel aussehen. Zum Zwecke der Demonstration basiert das Beispiel auf dem Punkt des dritten Aufzählungspunktes, nur ohne die Verwendung von Web Workern zur Lesbarkeit (und, um ehrlich zu sein, zur Schreibbarkeit).

> [!WARNING]
> Dieses Beispiel bedarf einer technischen Überprüfung.

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

Eine andere Alternative ist, bestimmte Dinge seltener zu machen. Wenn ein Teil Ihrer Aktualisierungsschleife schwer zu berechnen ist, aber unempfindlich gegenüber der Zeit, könnten Sie in Betracht ziehen, seine Frequenz zu reduzieren und idealerweise auf länger verteilte Perioden aufzuspalten. Ein implizites Beispiel dafür wurde im Artillery-Blog für Artillery Games gefunden, wo sie ihre [Rate der Generierung von Speicherfetzen anpassen](https://web.archive.org/web/20161021030645/http://blog.artillery.com/2012/10/browser-garbage-collection-and-framerate.html), um die Speicherbereinigung zu optimieren. Offensichtlich ist die Reinigung von Ressourcen nicht zeitkritisch (insbesondere wenn die Ordnung störender ist als die Fetzen selbst).

Dies könnte auch für einige Ihrer eigenen Aufgaben gelten. Diese sind gute Kandidaten für Drosselmaßnahmen, wenn verfügbare Ressourcen zu einem Problem werden.

## Zusammenfassung

Ich möchte klarstellen, dass jede der oben genannten Optionen oder keine davon, die beste für Ihr Spiel sein könnte. Die richtige Entscheidung hängt vollständig von den Kompromissen ab, die Sie bereit (und nicht bereit) sind, einzugehen. Die Besorgnis liegt hauptsächlich im Wechsel zu einer anderen Option. Glücklicherweise habe ich selbst keine Erfahrung damit, aber ich habe gehört, dass es ein qualvolleres Hin und Her ist.

Eine wichtige Sache, an die Sie sich bei verwalteten Plattformen wie dem Web erinnern sollten, ist, dass Ihre Schleife die Ausführung für erhebliche Zeiträume stoppen kann. Dies könnte auftreten, wenn der Benutzer Ihre Registerkarte deaktiviert und der Browser die Intervalle seines `requestAnimationFrame`-Rückrufs schläft (oder verlangsamt). Sie haben viele Möglichkeiten, mit dieser Situation umzugehen, und das kann davon abhängen, ob Ihr Spiel ein Einzel- oder Mehrspielerspiel ist. Einige Entscheidungen sind:

- Betrachten Sie die Lücke als "Pause" und überspringen Sie die Zeit.
  - Sie können wahrscheinlich sehen, wie problematisch dies für die meisten Mehrspielerspiele ist.

- Sie können die Lücke simulieren, um aufzuholen.
  - Dies kann ein Problem für lange Ausfälle und/oder komplexe Updates sein.

- Sie können den Spielzustand von einem Peer oder Server wiederherstellen.
  - Dies ist ineffektiv, wenn Ihre Peers oder der Server ebenfalls veraltet sind oder sie nicht existieren, weil das Spiel Einzelspieler ist und keinen Server hat.

Sobald Ihre Hauptschleife entwickelt wurde und Sie ein Satz von Annahmen und Kompromissen getroffen haben, die zu Ihrem Spiel passen, so dass es nun lediglich um die Anwendung Ihrer Entscheidungen geht, um möglicherweise anwendbare Physik, KI, Sounds, Netzwerksynchronisierung und alles andere, was Ihr Spiel benötigen könnte, zu berechnen.
