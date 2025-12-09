---
title: Anatomie eines Videospiels
slug: Games/Anatomy
l10n:
  sourceCommit: 1a0be468b9e7c88a09ea3438a81341c4f6a619a6
---

Dieser Artikel befasst sich mit der Anatomie und dem Arbeitsablauf eines durchschnittlichen Videospiels aus technischer Sicht, insbesondere wie die Hauptschleife ablaufen sollte. Er hilft Anfängern in der modernen Spieleentwicklung zu verstehen, was beim Erstellen eines Spiels erforderlich ist und wie Webstandards wie JavaScript als Werkzeuge eingesetzt werden können. Auch erfahrene Spieleprogrammierer, die neu in der Webentwicklung sind, können davon profitieren.

## Präsentieren, akzeptieren, interpretieren, berechnen, wiederholen

Das Ziel jedes Videospiels ist es, dem Benutzer eine Situation zu **präsentieren**, deren Eingabe zu **akzeptieren**, diese Signale in Aktionen zu **interpretieren** und eine neue Situation zu **berechnen**, die aus diesen Aktionen resultiert. Spiele durchlaufen ständig diese Phasen, immer und immer wieder, bis eine Endbedingung eintritt (wie zum Beispiel Gewinnen, Verlieren oder das Beenden, um ins Bett zu gehen). Nicht überraschend, entspricht dieses Muster der Programmierung einer Spiel-Engine.

Die Einzelheiten hängen vom Spiel ab.

Einige Spiele steuern diesen Zyklus durch Benutzereingaben. Stellen Sie sich vor, Sie entwickeln eine Art „Finde die Unterschiede zwischen diesen beiden ähnlichen Bildern“ -Spiel. Diese Spiele **präsentieren** dem Benutzer zwei Bilder; sie **akzeptieren** deren Klick (oder Berührung); sie **interpretieren** die Eingabe als Erfolg, Misserfolg, Pause, Menüinteraktion usw.; schließlich **berechnen** sie eine aktualisierte Szene, die auf diese Eingabe reagiert. Die Spielschleife wird durch die Eingabe des Benutzers vorangetrieben und pausiert, bis diese erfolgt. Dies ist mehr ein rundenbasierter Ansatz, der keine ständige Aktualisierung jedes Frames erfordert, sondern nur, wenn der Spieler reagiert.

Andere Spiele erfordern Kontrolle über jede einzelne kleinste Zeitscheibe. Die gleichen Prinzipien wie oben gelten mit einem kleinen Unterschied: Jedes Animationsbild bringt den Zyklus voran und jede Änderung der Benutzereingabe wird beim ersten möglichen Zug erfasst. Dieses Einmal-pro-Frame-Modell wird in etwas implementiert, das als **Hauptschleife** bezeichnet wird. Wenn Ihre Spielschleife zeitbasiert ist, wird dies die Instanz sein, der Ihre Simulationen folgen werden.

Aber es könnte keine Kontrolle pro Frame benötigen. Ihre Spielschleife könnte ähnlich wie im „Finde die Unterschiede“-Beispiel sein und sich auf Eingabeereignisse stützen. Möglicherweise benötigt es sowohl Eingaben als auch simulierte Zeit. Es könnte sogar auf etwas ganz anderem basieren.

Moderne JavaScript-Standards - wie in den nächsten Abschnitten beschrieben - machen es glücklicherweise weniger schwierig, eine effiziente, einmal-pro-Frame-Hauptschleife zu entwickeln. Natürlich wird Ihr Spiel nur so optimiert sein, wie Sie es machen. Wenn etwas so aussieht, als sollte es an ein weniger häufiges Ereignis angeknüpft werden, ist es oft eine gute Idee, es aus der Hauptschleife herauszubrechen (aber nicht immer).

## Eine Hauptschleife in JavaScript erstellen

JavaScript funktioniert am besten mit Ereignissen und Rückruffunktionen. Moderne Browser bemühen sich, Methoden genau dann aufzurufen, wenn sie benötigt werden, und bleiben im Leerlauf (oder erledigen ihre anderen Aufgaben) in den Zwischenzeiten. Es ist eine ausgezeichnete Idee, Ihren Code an die Momente anzuhängen, die für ihn geeignet sind. Überlegen Sie, ob Ihre Funktion wirklich in einem strengen Zeitintervall, jeden Frame oder nur nach einem anderen Ereignis aufgerufen werden muss. Es ist einfacher für den Browser, zu optimieren, wann Ihre Funktion aufgerufen werden muss, wenn Sie spezifischer damit umgehen. Außerdem wird es wahrscheinlich Ihre Arbeit erleichtern.

Einige Codes müssen Frame für Frame ausgeführt werden, warum sollten Sie diese Funktion also an etwas anderes als den Zeichenplan des Browsers anhängen? Im Web wird [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) die Grundlage der meisten gut programmierten pro-Frame-Hauptschleifen sein. Eine Rückruffunktion muss übergeben werden, wenn sie aufgerufen wird. Diese Rückruffunktion wird zu einem geeigneten Zeitpunkt vor der nächsten Neuzeichnung ausgeführt. Hier ist ein Beispiel für eine einfache Hauptschleife:

```js
window.main = () => {
  window.requestAnimationFrame(main);

  // Whatever your main loop needs to do
};

main(); // Start the cycle
```

> [!NOTE]
> In jeder der hier besprochenen `main()`-Methoden planen wir ein neues `requestAnimationFrame`, bevor wir unsere Schleifeninhalte ausführen. Das ist kein Zufall und gilt als Best Practice. Das nächste `requestAnimationFrame` frühzeitig aufzurufen stellt sicher, dass der Browser es rechtzeitig erhält, um entsprechend zu planen, auch wenn Ihr aktueller Frame sein VSync-Fenster verpasst.

Der obige Codeabschnitt hat zwei Anweisungen. Die erste Anweisung erstellt eine Funktion als globale Variable namens `main()`. Diese Funktion führt einige Arbeiten aus und weist den Browser auch an, sich im nächsten Frame mit `window.requestAnimationFrame()` selbst aufzurufen. Die zweite Anweisung ruft die im ersten Statement definierte `main()`-Funktion auf. Da `main()` einmal im zweiten Statement aufgerufen wird und jeder Aufruf von ihr sich in die Warteschlange der Dinge einreiht, die im nächsten Frame getan werden sollen, ist `main()` mit Ihrer Bildrate synchronisiert.

Natürlich ist diese Schleife nicht perfekt. Bevor wir Methoden besprechen, sie zu ändern, lassen Sie uns besprechen, was sie bereits gut macht.

Das Timing der Hauptschleife mit dem Zeitpunkt, an dem der Browser auf das Display malt, ermöglicht es Ihnen, Ihre Schleife so oft laufen zu lassen, wie der Browser malen möchte. Sie erhalten Kontrolle über jeden Animationsframe. Es ist auch sehr einfach, denn `main()` ist die einzige Funktion, die in einer Schleife durchgeführt wird. Ein Ego-Shooter (oder ein ähnliches Spiel) präsentiert in jedem Frame eine neue Szene. Glatter und reaktionsfähiger geht es kaum.

Aber nehmen Sie nicht sofort an, dass Animationen eine Kontrolle pro Frame erfordern. Einfache Animationen können einfach ausgeführt und sogar GPU-beschleunigt mit CSS-Animationen und anderen im Browser enthaltenen Tools durchgeführt werden. Es gibt viele dieser Tools, die Ihnen das Leben erleichtern werden.

## Eine bessere Hauptschleife in JavaScript erstellen

Es gibt zwei offensichtliche Probleme mit unserer vorhergehenden Hauptschleife: `main()` verschmutzt das [`window`](/de/docs/Web/API/Window)-Objekt (wo alle globalen Variablen gespeichert werden) und der Beispielcode hat uns keine Möglichkeit gegeben, die Schleife zu _stoppen_, es sei denn, der gesamte Tab wird geschlossen oder aktualisiert. Für das erste Problem, wenn Sie möchten, dass die Hauptschleife einfach läuft und Sie keinen direkten Zugriff darauf benötigen, könnten Sie sie als eine "Immediately-Invoked Function Expression" (IIFE) erstellen.

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

Wenn der Browser auf dieses IIFE trifft, wird er Ihre Hauptschleife definieren und sofort für den nächsten Frame in die Warteschlange einreihen. Es wird nicht an ein Objekt angebunden sein und `main` (oder `main()` für Methoden) wird ein gültiger ungenutzter Name im Rest der Anwendung sein, bereit, als etwas anderes definiert zu werden.

> [!NOTE]
> In der Praxis ist es üblicher, das nächste `requestAnimationFrame()` mit einer If-Anweisung zu verhindern, anstatt `cancelAnimationFrame()` aufzurufen.

Für das zweite Problem, das Stoppen der Hauptschleife, müssen Sie den Aufruf zu `main()` mit [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) abbrechen. Sie müssen `cancelAnimationFrame()` das ID-Token übergeben, das von `requestAnimationFrame()` zurückgegeben wurde, als es zuletzt aufgerufen wurde. Nehmen wir an, die Funktionen und Variablen Ihres Spiels basieren auf einem Namensraum, den Sie `MyGame` genannt haben. Wenn wir unser letztes Beispiel erweitern, würde die Hauptschleife jetzt so aussehen:

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

Jetzt haben wir eine Variable in unserem `MyGame`-Namensraum deklariert, die wir `stopMain` nennen, und die die ID enthält, die aus dem letzten Aufruf unserer Hauptschleifen `requestAnimationFrame()` zurückgegeben wurde. Zu jedem Zeitpunkt können wir die Hauptschleife stoppen, indem wir den Browser anweisen, die Anforderung zu stornieren, die unserem Token entspricht.

```js
window.cancelAnimationFrame(MyGame.stopMain);
```

Der Schlüssel zur Programmierung einer Hauptschleife in JavaScript besteht darin, sie an welches Ereignis auch immer Ihre Aktion antreiben sollte, anzuschließen und darauf zu achten, wie die verschiedenen beteiligten Systeme ineinandergreifen. Möglicherweise haben Sie mehrere Komponenten, die von mehreren verschiedenen Arten von Ereignissen angetrieben werden. Dies fühlt sich wie unnötige Komplexität an, könnte aber eine gute Optimierung sein (natürlich nicht unbedingt). Das Problem ist, dass Sie keine typische Hauptschleife programmieren. In JavaScript verwenden Sie die Hauptschleife des Browsers und versuchen, dies effektiv zu tun.

## Eine optimiertere Hauptschleife in JavaScript erstellen

Letztendlich läuft der Browser in JavaScript seine eigene Hauptschleife, und Ihr Code existiert in einigen seiner Stadien. Die oben beschriebenen Hauptschleifen vermeiden es, die Kontrolle vom Browser zu übernehmen. Diese Hauptmethoden binden sich an `window.requestAnimationFrame()`, das den Browser um Kontrolle über den kommenden Frame bittet. Es liegt am Browser, wie diese Anfragen in seine Hauptschleife integriert werden. Die [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#dom-animationframeprovider-requestanimationframe) definiert nicht genau, wann die Browser die `requestAnimationFrame`-Callbacks ausführen müssen. Das kann ein Vorteil sein, da es den Browser-Anbietern Freiheit lässt, mit den Lösungen zu experimentieren, die sie für am besten halten, und diese im Laufe der Zeit zu optimieren.

Moderne Versionen von Firefox und Google Chrome (und wahrscheinlich andere) _versuchen_ `requestAnimationFrame`-Rückrufe an ihren Hauptthread ganz zu Beginn einer Frame-Zeitscheibe zu koppeln. Der Hauptthread des Browsers _versucht_ also folgendermaßen auszusehen:

1. Start eines neuen Frames (während der vorherige Frame vom Display verarbeitet wird).
2. Durchlaufen der Liste der `requestAnimationFrame`-Rückrufe und deren Ausführung.
3. Durchführung der Müllabfuhr und anderer Pro-Frame-Aufgaben, wenn die obigen Rückrufe die Kontrolle über den Hauptthread aufgeben.
4. Schlafen (es sei denn, ein Ereignis unterbricht den Ruhemodus des Browsers), bis der Monitor bereit für Ihr Bild ist ([VSync](https://de.wikipedia.org/wiki/Screen_tearing#Vertikale_Synchronisation)) und wiederholen.

Sie können sich die Entwicklung von Echtzeitanwendungen so vorstellen, dass Sie ein Zeitbudget haben, um Arbeit zu erledigen. Alle oben genannten Schritte müssen alle 16,5 Millisekunden erfolgen, um mit einem 60 Hz-Display Schritt zu halten. Browser führen Ihren Code so früh wie möglich aus, um ihm maximale Rechenzeit zu geben. Ihr Hauptthread startet oft Arbeitslasten, die nicht einmal auf dem Hauptthread laufen (wie Rasterisierung oder Shader in WebGL). Lange Berechnungen können gleichzeitig auf einem Web Worker oder einer GPU durchgeführt werden, während der Browser seinen Hauptthread zur Verwaltung der Müllabfuhr, seiner anderen Aufgaben oder zur Abwicklung asynchroner Ereignisse nutzt.

Da wir über das Thema Zeitplanung sprechen, haben viele Webbrowser ein Tool namens _Hochauflösende Zeit_. Das {{jsxref("Date")}}-Objekt ist nicht mehr die anerkannte Methode zur Zeitmessung von Ereignissen, da es sehr ungenau ist und durch die Systemuhr verändert werden kann. Hochauflösende Zeit hingegen zählt die Millisekunden seit `navigationStart` (wenn das vorherige Dokument entladen wurde). Dieser Wert wird als Dezimalzahl mit einer Genauigkeit von einem Tausendstel Millisekunde zurückgegeben. Es ist bekannt als ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), aber aus Praktikabilitätsgründen, betrachten Sie es einfach als Gleitkommazahl.

> [!NOTE]
> Systeme (Hardware oder Software), die keine Genauigkeit in Mikrosekunden erreichen können, dürfen Millisekunden-Genauigkeit als Minimum anbieten. Sie sollten jedoch, wenn sie dazu in der Lage sind, eine Genauigkeit von 0,001 ms bieten.

Dieser Wert allein ist nicht sehr nützlich, da er sich auf ein relativ uninteressantes Ereignis bezieht, aber er kann von einem anderen Zeitstempel subtrahiert werden, um genau und präzise zu bestimmen, wie viel Zeit zwischen diesen beiden Punkten verstrichen ist. Um einen dieser Zeitstempel zu erhalten, können Sie `window.performance.now()` aufrufen und das Ergebnis als Variable speichern.

```js
const tNow = window.performance.now();
```

Zurück zum Thema der Hauptschleife. Sie werden oft wissen wollen, wann Ihre Hauptfunktion aufgerufen wurde. Da dies üblich ist, gibt `window.requestAnimationFrame()` immer einen `DOMHighResTimeStamp` an die Rückrufe als ein Argument, wenn sie ausgeführt werden. Dies führt zu einer weiteren Verbesserung unserer vorherigen Hauptschleifen.

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

Mehrere andere Optimierungen sind möglich und es hängt wirklich davon ab, was Ihr Spiel zu erreichen versucht. Ihr Spielgenre wird offensichtlich einen Unterschied machen, aber es könnte sogar subtiler sein als das. Sie könnten jeden Pixel einzeln auf ein Canvas zeichnen oder Sie könnten DOM-Elemente schichten (einschließlich mehrerer WebGL-Canvas mit transparenten Hintergründen, wenn Sie möchten) zu einer komplexen Hierarchie. Jeder dieser Wege wird zu unterschiedlichen Möglichkeiten und Beschränkungen führen.

## Es ist Entscheidungszeit

Sie werden schwierige Entscheidungen über Ihre Hauptschleife treffen müssen: wie Sie den genauen Verlauf der Zeit simulieren. Wenn Sie eine pro-Frame-Kontrolle verlangen, müssen Sie bestimmen, wie häufig Ihr Spiel aktualisiert und gezeichnet wird. Sie möchten vielleicht sogar, dass Aktualisierungen und Zeichnungen in unterschiedlichen Raten erfolgen. Sie müssen auch überlegen, wie reibungslos Ihr Spiel scheitert, falls das System des Benutzers mit der Arbeitslast nicht Schritt halten kann. Lassen Sie uns damit beginnen, anzunehmen, dass Sie Benutzereingaben behandeln und den Spielzustand jedes Mal aktualisieren, wenn Sie zeichnen. Wir werden später weiter ausarbeiten.

> [!NOTE]
> Das Ändern, wie Ihre Hauptschleife mit der Zeit umgeht, ist ein Albtraum bei der Fehlersuche, überall. Überlegen Sie sich sorgfältig Ihre Bedürfnisse, bevor Sie an Ihrer Hauptschleife arbeiten.

### Wie die meisten Browser-Spiele aussehen sollten

Wenn Ihr Spiel die maximale Bildwiederholrate einer beliebigen von Ihnen unterstützten Hardware erreichen kann, ist Ihre Arbeit ziemlich einfach. Sie können aktualisieren, rendern und dann nichts tun, bis VSync bereit ist.

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

Wenn die maximale Bildwiederholrate nicht erreicht werden kann, könnten Qualitätseinstellungen angepasst werden, um unter Ihrem Zeitbudget zu bleiben. Das bekannteste Beispiel für dieses Konzept ist das Spiel von id Software, RAGE. Dieses Spiel nahm dem Benutzer die Kontrolle, um seine Berechnungszeit auf ungefähr 16 ms (oder ungefähr 60fps) zu halten. Wenn die Berechnung zu lange dauerte, würde die gerenderte Auflösung verringert, Texturen und andere Assets würden nicht geladen oder gezeichnet werden und so weiter. Diese (nicht-webbasierte) Fallstudie traf einige Annahmen und Kompromisse:

- Jeder Animationsframe berücksichtigt Benutzereingaben.
- Kein Frame muss extrapoliert (geschätzt) werden, da jede Zeichnung ihr eigenes Update hat.
- Simulationssysteme können im Wesentlichen davon ausgehen, dass jedes vollständige Update \~16 ms auseinanderliegt.
- Dem Benutzer die Kontrolle über Qualitätseinstellungen zu geben, wäre ein Albtraum.
- Verschiedene Monitore liefern mit unterschiedlichen Raten: 30 FPS, 75 FPS, 100 FPS, 120 FPS, 144 FPS usw.
- Systeme, die nicht mit 60 FPS mithalten können, verlieren visuelle Qualität, um das Spiel mit optimaler Geschwindigkeit weiter laufen zu lassen (letztendlich scheitert es völlig, wenn die Qualität zu niedrig wird).

### Andere Methoden zur Handhabung von variablen Bildwiederholraten

Es gibt andere Methoden, um das Problem anzugehen.

Eine gängige Technik besteht darin, die Simulation mit einer konstanten Frequenz zu aktualisieren und dann so viele (oder so wenige) der tatsächlichen Frames wie möglich zu zeichnen. Die Aktualisierungsmethode kann weiterlaufen, unabhängig davon, was der Benutzer sieht. Die Zeichnungsmethode kann die letzte Aktualisierung betrachten und wann sie stattfand. Da die Zeichnungsmethode weiß, was sie darstellt, und die Simulationszeit für die letzte Aktualisierung kennt, kann sie einen plausiblen Frame vorhersagen, den sie dem Benutzer präsentieren kann. Es ist egal, ob dies häufiger als die offizielle Aktualisierungsschleife der Fall ist (oder sogar weniger häufig). Die Aktualisierungsmethode setzt Checkpoints und, so oft das System es zulässt, zeichnet die Rendering-Methode Instanzen der Zeit um sie herum. Es gibt viele Methoden, die Aktualisierungsmethode in Webstandards zu trennen:

- Zeichnen Sie bei `requestAnimationFrame()` und aktualisieren Sie bei einem [`setInterval()`](/de/docs/Web/API/Window/setInterval) oder [`setTimeout()`](/de/docs/Web/API/Window/setTimeout).
  - Dies verwendet Rechenzeit, selbst wenn es nicht fokussiert oder minimiert wird, blockiert den Hauptthread und ist wahrscheinlich ein Überbleibsel traditioneller Spielschleifen (aber es ist einfach).

- Zeichnen Sie bei `requestAnimationFrame()` und aktualisieren Sie mit einem [`setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) oder [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) in einem [Web Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers).
  - Dies ist dasselbe wie oben, außer dass die Aktualisierung den Hauptthread nicht blockiert (und umgekehrt). Dies ist eine komplexere Lösung und möglicherweise zu viel Aufwand für einfache Aktualisierungen.

- Zeichnen Sie bei `requestAnimationFrame()` und nutzen Sie es, um einen Web Worker, der die Aktualisierungsmethode enthält, mit der Anzahl der zu berechnenden Ticks anzustupsen, sofern vorhanden.
  - Dies schläft, bis `requestAnimationFrame()` aufgerufen wird und verschmutzt nicht den Hauptthread, zudem verlassen Sie sich nicht auf altmodische Methoden. Auch hier ist dies etwas komplexer als die vorherigen beiden Optionen, und _der Beginn_ jeder Aktualisierung wird blockiert, bis der Browser beschließt, rAF-Rückrufe aufzurufen.

Jede dieser Methoden hat ähnliche Kompromisse:

- Benutzer können das Rendern von Frames überspringen oder zusätzliche interpolieren, abhängig von ihrer Leistung.
- Sie können sich darauf verlassen, dass alle Benutzer nicht-kosmetische Variablen mit der gleichen konstanten Frequenz minus Hiccups aktualisieren.
- Viel komplizierter zu programmieren als die einfachen Schleifen, die wir zuvor gesehen haben.
- Benutzereingaben werden komplett ignoriert, bis zur nächsten Aktualisierung (selbst wenn der Benutzer ein schnelles Gerät hat).
- Die zwingende Interpolation hat einen Leistungseinbruch zur Folge.

Eine separate Aktualisierungs- und Zeichnungsmethode könnte wie das folgende Beispiel aussehen. Um der Demonstration willen, basiert das Beispiel auf dem dritten Aufzählungspunkt, jedoch ohne Web Worker, um die Lesbarkeit (und, seien wir ehrlich, die Schreibbarkeit) zu gewährleisten.

> [!WARNING]
> Dieses spezielle Beispiel bedarf einer technischen Überprüfung.

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

Eine andere Alternative ist es, bestimmte Dinge weniger oft zu tun. Wenn ein Teil Ihrer Aktualisierungsschleife schwierig zu berechnen, aber nicht zeitempfindlich ist, könnten Sie erwägen, dessen Häufigkeit zu reduzieren und idealerweise in Stücke zu zerlegen, die über diesen erweiterten Zeitraum verteilt werden können. Ein implizites Beispiel hierfür fand sich im The Artillery Blog für Artillery Games, wo sie [die Rate der Müllgenerierung anpassen](https://web.archive.org/web/20161021030645/http://blog.artillery.com/2012/10/browser-garbage-collection-and-framerate.html), um die Müllabfuhr zu optimieren. Offensichtlich ist das Aufräumen von Ressourcen nicht zeitempfindlich (besonders wenn das Aufräumen störender als der Müll selbst ist).

Das könnte auch für einige Ihrer eigenen Aufgaben zutreffen. Diese sind gute Kandidaten, um gedrosselt zu werden, wenn verfügbare Ressourcen ein Problem darstellen.

## Zusammenfassung

Ich möchte klarstellen, dass eines der oben genannten oder keines davon am besten für Ihr Spiel geeignet sein könnte. Die richtige Entscheidung hängt vollständig von den Kompromissen ab, die Sie bereit (und nicht bereit) sind, zu machen. Die Sorge liegt hauptsächlich darin, zu einer anderen Option zu wechseln. Glücklicherweise habe ich keine Erfahrung damit, aber ich habe gehört, dass es ein schmerzhaftes Spiel von "Whack-a-Mole" ist.

Eine wichtige Sache, die Sie sich bei verwalteten Plattformen wie dem Web merken sollten, ist, dass Ihre Schleife möglicherweise für erhebliche Zeiträume anhält. Dies könnte passieren, wenn der Benutzer Ihr Tab abwählt und der Browser sein `requestAnimationFrame`-Callback-Intervall schläft (oder verlangsamt). Sie haben viele Möglichkeiten, mit dieser Situation umzugehen, und dies könnte von der Frage abhängen, ob Ihr Spiel Einzel- oder Mehrspielermodus ist. Einige Entscheidungen sind:

- Betrachten Sie die Lücke als "Pause" und überspringen Sie die Zeit.
  - Sie können wahrscheinlich sehen, wie problematisch dies für die meisten Multiplayer-Spiele ist.

- Sie können die Lücke simulieren, um aufzuholen.
  - Dies kann ein Problem für lange Ausfälle und/oder komplexe Aktualisierungen sein.

- Sie können den Spielstatus von einem Peer oder dem Server wiederherstellen.
  - Dies ist ineffektiv, wenn Ihre Peers oder der Server ebenfalls veraltet sind, oder sie nicht existieren, weil das Spiel Einzelspieler ist und keinen Server hat.

Sobald Ihre Hauptschleife entwickelt ist und Sie sich für eine Reihe von Annahmen und Kompromissen entschieden haben, die zu Ihrem Spiel passen, ist es nun nur noch eine Frage der Anwendung Ihrer Entscheidungen, um die anwendbaren Physik, KI, Sounds, Netzwerksynchronisierung und was auch immer Ihr Spiel erfordern mag, zu berechnen.
