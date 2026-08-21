---
title: Anatomie eines Videospiels
slug: Games/Anatomy
l10n:
  sourceCommit: f99d00a1c3697e26a679925954e26564e7e79b98
---

Dieser Artikel beleuchtet die Anatomie und den Arbeitsablauf des durchschnittlichen Videospiels aus technischer Sicht, insbesondere wie die Hauptschleife laufen sollte. Er hilft Einsteigern in die moderne Spieleentwicklung zu verstehen, was beim Erstellen eines Spiels erforderlich ist und wie sich Webstandards wie JavaScript als Werkzeuge eignen. Erfahrene Spieleprogrammierer, die neu in der Webentwicklung sind, könnten ebenfalls davon profitieren.

## Präsentieren, annehmen, interpretieren, berechnen, wiederholen

Das Ziel jedes Videospiels ist es, den Benutzer(n) eine Situation zu **präsentieren**, deren Eingaben zu **akzeptieren**, diese Signale in Aktionen zu **interpretieren** und eine neue Situation zu **berechnen**, die aus diesen Handlungen resultiert. Spiele durchlaufen ständig diese Stadien, immer wieder, bis eine Endbedingung eintritt (wie Gewinnen, Verlieren oder Beenden, um ins Bett zu gehen). Es ist nicht überraschend, dass dieses Muster dem entspricht, wie eine Spiele-Engine programmiert ist.

Die Details hängen vom Spiel ab.

Einige Spiele treiben diesen Zyklus durch Benutzereingaben an. Stellen Sie sich vor, Sie entwickeln ein Spiel vom Typ _"Finde die Unterschiede zwischen diesen beiden ähnlichen Bildern"_. Diese Spiele **präsentieren** dem Benutzer zwei Bilder; sie **akzeptieren** seinen Klick (oder seine Berührung); sie **interpretieren** die Eingabe als Erfolg, Misserfolg, Pause, Menüinteraktion usw.; schließlich **berechnen** sie eine aktualisierte Szene, die aus dieser Eingabe resultiert. Die Spielschleife wird durch die Eingabe des Benutzers vorangetrieben und ruht, bis er sie bereitstellt. Dies ist mehr ein rundenbasierter Ansatz, der kein konstantes Update pro Frame erfordert, nur wenn der Spieler reagiert.

Andere Spiele erfordern die Kontrolle über die kleinsten möglichen Zeitscheiben. Die gleichen Prinzipien wie oben gelten mit einer kleinen Abwandlung: jedes Animationsbild treibt den Zyklus voran, und jede Änderung der Benutzereingaben wird beim ersten verfügbaren Zug erfasst. Dieses Modell, einmal pro Frame, wird in etwas implementiert, das als **Hauptschleife** bekannt ist. Wenn Ihre Spielschleife zeitbasiert ist, wird dies die Autorität sein, an die sich Ihre Simulationen halten.

Aber es braucht möglicherweise keine Kontrolle pro Frame. Ihre Spielschleife könnte der des Beispiels _Finde die Unterschiede_ ähneln und sich auf Eingabeveranstaltungen stützen. Es könnte sowohl Eingaben als auch simulierte Zeit erfordern. Möglicherweise basiert es sogar auf etwas ganz anderem.

Moderne JavaScript — wie in den nächsten Abschnitten beschrieben — erleichtert zum Glück die Entwicklung einer effizienten, einmal pro Frame auszuführenden Hauptschleife. Natürlich wird Ihr Spiel nur so optimiert, wie Sie es machen. Wenn etwas so aussieht, als sollte es an ein selteneres Ereignis angehängt werden, dann ist es oft eine gute Idee, es aus der Hauptschleife herauszulösen (aber nicht immer).

## Eine Hauptschleife in JavaScript erstellen

JavaScript arbeitet am besten mit Ereignissen und Callback-Funktionen. Moderne Browser bemühen sich, Methoden genau dann aufzurufen, wenn sie benötigt werden und ziehen sich in den Pausen zurück (oder führen andere Aufgaben durch). Es ist eine ausgezeichnete Idee, Ihren Code an die dafür geeigneten Momente zu binden. Überlegen Sie, ob Ihre Funktion wirklich in einem strengen Zeitintervall, jedem Frame oder nur nach einem anderen Ereignis aufgerufen werden muss. Wenn Sie dem Browser spezifizieren, wann Ihre Funktion aufgerufen werden muss, kann der Browser optimieren, wann sie aufgerufen wird. Auch wird es wahrscheinlich Ihre Arbeit erleichtern.

Einige Codes müssen frameweise ausgeführt werden, also warum diese Funktion an etwas anderes als den Redraw-Zeitplan des Browsers anhängen? Im Web wird [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) die Grundlage der meisten gut programmierten per-Frame-Hauptschleifen sein. Eine Callback-Funktion muss übergeben werden, wenn sie aufgerufen wird. Diese Callback-Funktion wird zu einem geeigneten Zeitpunkt vor der nächsten Neuzeichnung ausgeführt. Hier ist ein Beispiel für eine einfache Hauptschleife:

```js
window.main = () => {
  window.requestAnimationFrame(main);

  // Whatever your main loop needs to do
};

main(); // Start the cycle
```

> [!NOTE]
> In jeder der hier diskutierten `main()`-Methoden planen wir einen neuen `requestAnimationFrame`, bevor wir den Inhalt unserer Schleife ausführen. Das ist kein Zufall und wird als Best Practice angesehen. Das frühzeitige Aufrufen des nächsten `requestAnimationFrame` stellt sicher, dass der Browser es rechtzeitig erhält, um es entsprechend einzuplanen, selbst wenn Ihr aktuelles Frame sein VSync-Fenster verpasst.

Der obige Codeabschnitt hat zwei Anweisungen. Die erste Anweisung erstellt eine Funktion als globale Variable mit dem Namen `main()`. Diese Funktion erledigt einige Arbeiten und weist den Browser auch an, sich im nächsten Frame selbst mit `window.requestAnimationFrame()` aufzurufen. Die zweite Anweisung ruft die im ersten Schritt definierte `main()`-Funktion auf. Da `main()` einmal in der zweiten Anweisung aufgerufen wird und jeder Aufruf sie in die Warteschlange der nächsten zu erledigenden Dinge einreiht, wird `main()` auf Ihre Bildrate synchronisiert.

Diese Schleife ist natürlich nicht perfekt. Bevor wir über Möglichkeiten diskutieren, sie zu ändern, lassen Sie uns darüber sprechen, was sie bereits gut macht.

Das Timing der Hauptschleife, wenn der Browser den Bildschirm neu zeichnet, ermöglicht es Ihnen, Ihre Schleife so oft laufen zu lassen, wie der Browser neu zeichnen möchte. Sie haben die Kontrolle über jeden Frame der Animation. Es ist auch sehr einfach, da `main()` die einzige Funktion ist, die in der Schleife ausgeführt wird. Ein Ego-Shooter (oder ein ähnliches Spiel) stellt einmal pro Frame eine neue Szene dar. Glatter und reaktionsfreudiger können Sie wirklich nicht werden.

Aber gehen Sie nicht sofort davon aus, dass Animationen eine Kontrolle pro Frame erfordern. Einfache Animationen können leicht, sogar GPU-beschleunigt, mit CSS-Animationen und anderen im Browser enthaltenen Werkzeugen ausgeführt werden. Es gibt viele davon, die Ihnen das Leben erleichtern werden.

## Eine bessere Hauptschleife in JavaScript erstellen

Es gibt zwei offensichtliche Probleme mit unserer vorherigen Hauptschleife: `main()` verschmutzt das [`window`](/de/docs/Web/API/Window)-Objekt (wo alle globalen Variablen gespeichert sind) und dem Beispielcode fehlt eine Möglichkeit, die Schleife zu _stoppen_, es sei denn, das gesamte Tab wird geschlossen oder aktualisiert. Für das erste Problem, wenn Sie möchten, dass die Hauptschleife einfach läuft und Sie keinen direkten Zugriff darauf benötigen, könnten Sie sie als sofort aufgerufenen Funktionsausdruck (IIFE) erstellen.

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

Wenn der Browser auf dieses IIFE trifft, wird er Ihre Hauptschleife definieren und sie sofort für das nächste Frame einreihen. Sie wird an kein Objekt angehängt und `main` (oder `main()` für Methoden) wird ein gültiger, ungenutzter Name im Rest der Anwendung sein, frei zur Definition als etwas anderes.

> [!NOTE]
> In der Praxis ist es häufiger, den nächsten `requestAnimationFrame()` mit einer if-Anweisung zu verhindern, anstatt `cancelAnimationFrame()` aufzurufen.

Für das zweite Problem, die Hauptschleife zu stoppen, müssen Sie den Anruf an `main()` mit [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) abbrechen. Sie müssen `cancelAnimationFrame()` das ID-Token übergeben, das von `requestAnimationFrame()` beim letzten Aufruf gegeben wurde. Lassen Sie uns annehmen, dass die Funktionen und Variablen Ihres Spiels auf einem Namensraum basieren, den Sie `MyGame` genannt haben. Durch die Erweiterung unseres letzten Beispiels würde die Hauptschleife jetzt folgendermaßen aussehen:

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

Wir haben nun eine Variable in unserem `MyGame`-Namensraum deklariert, die wir `stopMain` nennen und die die ID enthält, die von unserem letzten Anruf an `requestAnimationFrame()` in der Hauptschleife zurückgegeben wurde. Zu jedem beliebigen Zeitpunkt können wir die Hauptschleife stoppen, indem wir dem Browser sagen, dass er die Anfrage abbrechen soll, die unserem Token entspricht.

```js
window.cancelAnimationFrame(MyGame.stopMain);
```

Der Schlüssel zur Programmierung einer Hauptschleife in JavaScript besteht darin, sie an das Ereignis zu binden, das Ihre Aktion antreibt, und darauf zu achten, wie die verschiedenen beteiligten Systeme interagieren. Möglicherweise haben Sie mehrere Komponenten, die von verschiedenen Ereignistypen gesteuert werden. Das fühlt sich wie unnötige Komplexität an, könnte aber einfach gute Optimierung sein (nicht unbedingt, natürlich). Das Problem ist, dass Sie keine typische Hauptschleife programmieren. In JavaScript verwenden Sie die Hauptschleife des Browsers und versuchen dies effektiv zu tun.

## Eine optimiertere Hauptschleife in JavaScript erstellen

Letztendlich, in JavaScript, läuft der Browser seine eigene Hauptschleife und Ihr Code existiert in einigen seiner Stadien. Die obigen Abschnitte beschreiben Hauptschleifen, die vermeiden, die Kontrolle vom Browser zu übernehmen. Diese Hauptmethoden binden sich an `window.requestAnimationFrame()`, was den Browser um Kontrolle über das kommende Frame bittet. Es liegt am Browser, wie er diese Anfragen mit seiner Hauptschleife in Beziehung setzt. Die [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#dom-animationframeprovider-requestanimationframe) definiert nicht wirklich genau, wann die Browser die `requestAnimationFrame`-Callbacks ausführen müssen. Dies kann ein Vorteil sein, da es den Browseranbietern die Freiheit lässt, mit den Lösungen zu experimentieren, die ihrer Meinung nach am besten sind, und sie im Laufe der Zeit anzupassen.

Moderne Versionen von Firefox und Google Chrome (und wahrscheinlich auch andere) _versuchen_, `requestAnimationFrame`-Callbacks direkt am Anfang einer Frame-Zeitscheibe mit ihrem Hauptthread zu verbinden. Der Hauptthread des Browsers _versucht_ somit, wie folgt auszusehen:

1. Starten Sie ein neues Frame (während das vorherige Frame vom Display behandelt wird).
2. Gehen Sie die Liste der `requestAnimationFrame`-Callbacks durch und rufen Sie sie auf.
3. Führen Sie Müllsammlung und andere pro-Frame-Aufgaben durch, wenn die obigen Callbacks den Hauptthread nicht mehr kontrollieren.
4. Schlafen (es sei denn, ein Ereignis unterbricht den Schlaf des Browsers) bis der Monitor bereit für Ihr Bild ist ([VSync](https://en.wikipedia.org/wiki/Screen_tearing#Vertical_synchronization)) und wiederholen.

Sie können über die Entwicklung von Echtzeitanwendungen nachdenken, als hätten Sie ein Zeitbudget, um Arbeit zu erledigen. Alle oben genannten Schritte müssen alle 16,5 Millisekunden stattfinden, um mit einem 60 Hz Display Schritt zu halten. Browser rufen Ihren Code so früh wie möglich auf, um ihm maximale Rechenzeit zu geben. Ihr Hauptthread wird oft Arbeitslasten starten, die nicht einmal auf dem Hauptthread sind (wie Rasterisierung oder Shader in WebGL). Lange Berechnungen können auf einem Web Worker oder einer GPU gleichzeitig durchgeführt werden, während der Browser seinen Hauptthread verwendet, um Müllsammlung zu verwalten, seine anderen Aufgaben zu erledigen oder asynchrone Ereignisse zu behandeln.

Während wir beim Thema Zeiteffektivität sind, haben viele Webbrowser ein Werkzeug namens _Hochauflösende Zeit_. Das {{jsxref("Date")}}-Objekt wird nicht mehr als Methode zur Ereignisstimmung erkannt, da es sehr ungenau ist und durch die Systemuhr geändert werden kann. Die Hochauflösende Zeit hingegen zählt die Anzahl der Millisekunden seit `navigationStart` (wenn das vorherige Dokument entladen wird). Dieser Wert wird als Dezimalzahl zurückgegeben, die auf ein Tausendstel einer Millisekunde genau ist. Sie ist bekannt als [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), aber für alle praktischen Zwecke können Sie es als Gleitkommazahl betrachten.

> [!NOTE]
> Systeme (Hardware oder Software), die keine Mikrosekundengenauigkeit unterstützen, dürfen eine Millisekundengenauigkeit als Minimum bieten. Sie sollten jedoch, wenn möglich, eine Genauigkeit von 0,001 ms bieten.

Dieser Wert ist alleine nicht allzu nützlich, da er sich auf ein eher uninteressantes Ereignis bezieht, aber er kann von einem anderen Zeitstempel subtrahiert werden, um genau und präzise zu ermitteln, wie viel Zeit zwischen diesen beiden Punkten verstrichen ist. Um einen dieser Zeitstempel zu erhalten, können Sie `window.performance.now()` aufrufen und das Ergebnis als Variable speichern.

```js
const tNow = window.performance.now();
```

Zurück zum Thema der Hauptschleife. Sie werden oft wissen wollen, wann Ihre Hauptfunktion aufgerufen wurde. Da dies häufig vorkommt, stellt `window.requestAnimationFrame()` immer einen `DOMHighResTimeStamp` für Callbacks als Argument zur Verfügung, wenn diese ausgeführt werden. Dies führt zu einer weiteren Verbesserung unserer vorherigen Hauptschleifen.

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

Es sind mehrere andere Optimierungen möglich und es hängt wirklich davon ab, was Ihr Spiel erreichen möchte. Ihr Spielegenre wird offensichtlich einen Unterschied machen, aber es könnte sogar subtiler sein als das. Sie könnten jedes Pixel einzeln auf einer Leinwand zeichnen oder Sie könnten DOM-Elemente (einschließlich mehrerer WebGL-Leinwände mit transparenten Hintergründen, wenn Sie möchten) in eine komplexe Hierarchie schichten. Jeder dieser Wege wird zu unterschiedlichen Möglichkeiten und Einschränkungen führen.

## Es ist Entscheidungs…zeit

Sie müssen harte Entscheidungen über Ihre Hauptschleife treffen: wie Sie den genauen Fortschritt der Zeit simulieren. Wenn Sie eine Kontrolle pro Frame erfordern, müssen Sie bestimmen, wie häufig Ihr Spiel aktualisiert und gezeichnet wird. Möglicherweise möchten Sie, dass Aktualisierung und Zeichnung in unterschiedlichen Raten erfolgen. Sie müssen auch berücksichtigen, wie Ihr Spiel gracefully versagt, wenn das System des Benutzers mit der Arbeitsbelastung nicht mithalten kann. Gehen wir davon aus, dass Sie Benutzereingaben verarbeiten und den Spielzustand jedes Mal aktualisieren, wenn Sie zeichnen. Wir werden später differenzieren.

> [!NOTE]
> Das Ändern der Art und Weise, wie Ihre Hauptschleife mit der Zeit umgeht, ist ein Debugging-Albtraum, überall. Denken Sie sorgfältig über Ihre Anforderungen nach, bevor Sie an Ihrer Hauptschleife arbeiten.

### Wie die meisten Browser-Spiele aussehen sollten

Wenn Ihr Spiel die maximale Bildwiederholfrequenz der von Ihnen unterstützten Hardware erreichen kann, ist Ihre Aufgabe relativ einfach. Sie können aktualisieren, rendern und dann nichts tun, bis VSync.

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

Wenn die maximale Bildwiederholfrequenz nicht erreicht werden kann, könnten Qualitätseinstellungen angepasst werden, um unter Ihrem Zeitbudget zu bleiben. Das bekannteste Beispiel für dieses Konzept ist das Spiel von id Software, RAGE. Dieses Spiel nahm dem Benutzer die Kontrolle, um die Berechnungszeit ungefähr bei 16 ms (oder ungefähr 60 fps) zu halten. Wenn die Berechnung zu lange dauerte, verringert sich die gerenderte Auflösung, Texturen und andere Ressourcen werden nicht geladen oder gezeichnet usw. Diese (nicht-webbasierte) Fallstudie machte einige Annahmen und Kompromisse:

- Jedes Animationsbild berücksichtigt Benutzereingaben.
- Kein Bild muss extrapoliert (erraten) werden, da jede Zeichnung ihr eigenes Update hat.
- Simulationssysteme können im Wesentlichen davon ausgehen, dass jedes vollständige Update \~16 ms auseinander liegt.
- Die Kontrolle über Qualitätseinstellungen durch den Benutzer würde ein Albtraum sein.
- Verschiedene Monitoreingaben mit unterschiedlichen Raten: 30 FPS, 75 FPS, 100 FPS, 120 FPS, 144 FPS usw.
- Systeme, die nicht in der Lage sind, mit 60 FPS Schritt zu halten, verlieren an visueller Qualität, um das Spiel mit optimaler Geschwindigkeit laufen zu lassen (letztendlich scheitert es, wenn die Qualität zu niedrig wird).

### Andere Möglichkeiten zur Bewältigung variabler Bildwiederholraten

Es existieren andere Methoden zur Bewältigung des Problems.

Eine häufig angewendete Technik besteht darin, die Simulation mit konstanter Frequenz zu aktualisieren und dann so viele (oder so wenige) der tatsächlichen Bilder wie möglich zu zeichnen. Die Aktualisierungsmethode kann weiterlaufen, ohne sich darum zu kümmern, was der Benutzer sieht. Die Zeichenmethode kann das letzte Update und wann es stattfand, sehen. Da die Zeichnung weiß, was sie darstellt, und die Simulationszeit für das letzte Update bekannt ist, kann sie ein plausibles Bild vorhersagen, das dem Benutzer angezeigt werden soll. Es spielt keine Rolle, ob dies häufiger als die offizielle Aktualisierungsschleife ist (oder sogar seltener). Die Aktualisierungsmethode setzt Checkpoints und so oft wie das System erlaubt, zeichnet die Render-Methode Zeitaugenblicke um sie herum. Es gibt viele Möglichkeiten, die Aktualisierungsmethode in Webstandards zu trennen:

- Zeichnen bei `requestAnimationFrame()` und aktualisieren bei einem [`setInterval()`](/de/docs/Web/API/Window/setInterval) oder [`setTimeout()`](/de/docs/Web/API/Window/setTimeout).
  - Das nutzt Prozessorzeit, selbst wenn das Tab nicht fokussiert oder minimiert ist, blockiert den Hauptthread und ist wahrscheinlich ein Artefakt traditioneller Spielschleifen (aber es ist einfach).

- Zeichnen bei `requestAnimationFrame()` und aktualisieren bei einem [`setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) oder [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) in einem [Web Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers).
  - Das ist das gleiche wie oben, außer dass die Aktualisierung nicht den Hauptthread blockiert (und auch nicht vom Hauptthread blockiert wird). Dies ist eine komplexere Lösung und möglicherweise zu viel Aufwand für einfache Aktualisierungen.

- Zeichnen bei `requestAnimationFrame()` und verwenden es, um einen Web Worker mit der Aktualisierungsmethode und der Anzahl der zu berechnenden Ticks zu steuern, sofern vorhanden.
  - Das schläft bis `requestAnimationFrame()` aufgerufen wird und verschmutzt nicht den Hauptthread, außerdem sind Sie nicht auf altmodische Methoden angewiesen. Auch dies ist etwas komplexer als die beiden vorherigen Möglichkeiten und das _Starten_ jedes Updates wird blockiert, bis der Browser entscheidet, rAF-Callbacks aufzurufen.

Jede dieser Methoden hat ähnliche Kompromisse:

- Benutzer können das Rendern von Frames überspringen oder zusätzliche interpolieren, abhängig von ihrer Leistung.
- Sie können darauf zählen, dass alle Benutzer nicht-kosmetische Variablen in derselben konstanten Frequenz minus Hänger aktualisieren.
- Viel komplizierter zu programmieren als die einfachen Schleifen, die wir zuvor gesehen haben.
- Benutzereingaben werden vollständig ignoriert, bis zum nächsten Update (selbst wenn der Nutzer ein schnelles Gerät hat).
- Die obligatorische Interpolation hat einen Leistungsnachteil.

Eine separate Aktualisierungs- und Zeichnungsmethode könnte wie das folgende Beispiel aussehen. Zur Demonstration basiert das Beispiel auf dem dritten Aufzählungspunkt, nur ohne Web Worker für bessere Lesbarkeit (und um ehrlich zu sein, Schreibbarkeit).

> [!WARNING]
> Dieses Beispiel benötigt speziell eine technische Überprüfung.

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

Eine andere Alternative besteht darin, bestimmte Dinge seltener zu tun. Wenn ein Teil Ihrer Aktualisierungsschleife schwierig zu berechnen ist, aber zeitunempfindlich, könnten Sie erwägen, seine Frequenz zu reduzieren und idealerweise ihn in Stücke über diesen verlängerten Zeitraum zu verteilen. Ein implizites Beispiel dafür war auf dem Artillery-Blog für Artillery-Spiele zu finden, wo sie [ihre Rate der Müllsammlung anpassen](https://web.archive.org/web/20161021030645/http://blog.artillery.com/2012/10/browser-garbage-collection-and-framerate.html), um die Müllsammlung zu optimieren. Offensichtlich ist das Bereinigen von Ressourcen nicht zeitkritisch (insbesondere, wenn das Aufräumen störender ist als der Müll selbst).

Dies könnte auch auf einige Ihrer Aufgaben zutreffen. Diese sind gute Kandidaten, um gedrosselt zu werden, wenn verfügbare Ressourcen ein Problem sind.

## Zusammenfassung

Ich möchte klarstellen, dass jede der oben genannten Optionen, oder keine von ihnen, das Beste für Ihr Spiel sein könnte. Die richtige Entscheidung hängt ganz von den Kompromissen ab, die Sie bereit (und nicht bereit) sind einzugehen. Das Anliegen betrifft hauptsächlich den Wechsel zu einer anderen Option. Glücklicherweise habe ich damit keine Erfahrung, aber ich habe gehört, dass es eine quälende Übung im Nachjagen von Regressionen ist.

Eine wichtige Erinnerung für verwaltete Plattformen wie das Web ist, dass Ihre Schleife für längere Zeiträume unterbrechen könnte. Dies könnte passieren, wenn der Benutzer Ihren Tab abwählt und der Browser seinen `requestAnimationFrame`-Callback-Intervall schläft (oder verlangsamt). Es gibt viele Möglichkeiten, mit dieser Situation umzugehen, und dies könnte davon abhängen, ob Ihr Spiel ein Einzelspieler- oder Mehrspielerspiel ist. Einige Optionen sind:

- Betrachten Sie die Lücke als "Pause" und überspringen Sie die Zeit.
  - Sie können wahrscheinlich sehen, wie problematisch das für die meisten Mehrspielerspiele ist.

- Sie können die Lücke simulieren, um aufzuholen.
  - Dies kann bei langen Ausfällen und/oder komplexen Updates ein Problem sein.

- Sie können den Spielzustand von einem Peer oder dem Server wiederherstellen.
  - Das ist ineffektiv, wenn Ihre Peers oder der Server auch veraltet sind oder sie nicht existieren, weil das Spiel ein Einzelspielerspiel ist und keinen Server hat.

Sobald Ihre Hauptschleife entwickelt wurde und Sie eine Reihe von Annahmen und Kompromissen getroffen haben, die zu Ihrem Spiel passen, liegt es nun nur noch daran, Ihre Entscheidungen zu nutzen, um etwaige Physik, KI, Sounds, Netzwerksynchronisation und was Ihr Spiel sonst noch erfordern mag, zu berechnen.
