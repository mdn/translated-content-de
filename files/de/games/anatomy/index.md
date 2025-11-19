---
title: Anatomie eines Videospiels
slug: Games/Anatomy
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

Dieser Artikel betrachtet die Anatomie und den Arbeitsablauf eines durchschnittlichen Videospiels aus technischer Sicht, hinsichtlich der Funktionsweise der Hauptschleife. Er hilft Anfängern in der modernen Spieleentwicklung zu verstehen, was beim Erstellen eines Spiels erforderlich ist und wie sich Webstandards wie JavaScript als Werkzeuge eignen. Auch erfahrene Spieleprogrammierer, die neu in der Webentwicklung sind, könnten davon profitieren.

## Präsentieren, akzeptieren, interpretieren, berechnen, wiederholen

Das Ziel jedes Videospiels ist es, dem Benutzer eine Situation zu **präsentieren**, seine Eingabe zu **akzeptieren**, diese Signale in Aktionen zu **interpretieren** und eine neue Situation zu **berechnen**, die aus diesen Handlungen resultiert. Spiele durchlaufen ständig diese Phasen, immer und immer wieder, bis eine Endbedingung eintritt (wie zum Beispiel Gewinnen, Verlieren oder Beenden, um ins Bett zu gehen). Nicht überraschend entspricht dieses Muster der Programmierung einer Spiele-Engine.

Die Einzelheiten hängen vom Spiel ab.

Einige Spiele steuern diesen Zyklus durch die Benutzereingabe. Stellen Sie sich vor, Sie entwickeln ein Spiel vom Typ _"Finde die Unterschiede zwischen diesen zwei ähnlichen Bildern"_. Diese Spiele **präsentieren** dem Benutzer zwei Bilder; sie **akzeptieren** seinen Klick (oder seine Berührung); sie **interpretieren** die Eingabe als Erfolg, Misserfolg, Pause, Menüinteraktion usw.; schließlich **berechnen** sie eine aktualisierte Szene, die aus dieser Eingabe resultiert. Die Spielschleife wird durch die Eingabe des Benutzers vorangetrieben und ruht, bis er sie liefert. Dies ist eher ein rundenbasierter Ansatz, der kein ständiges Aktualisieren jedes Frames erfordert, sondern nur, wenn der Spieler reagiert.

Andere Spiele verlangen Kontrolle über jedes kleinste individuelle Zeitfenster. Die gleichen Prinzipien wie oben gelten mit einem leichten Twist: Jedes Animationsbild treibt den Zyklus voran und jede Änderung der Benutzereingabe wird bei der ersten verfügbaren Gelegenheit erfasst. Dieses Modell „einmal pro Frame“ wird in etwas namens **Hauptschleife** implementiert. Wenn Ihre Spielschleifen auf Zeit basieren, wird dies die Autorität sein, an die sich Ihre Simulationen halten werden.

Es könnte jedoch nicht notwendig sein, jede Frame-Kontrolle zu haben. Ihre Spielschleife könnte dem _Finde die Unterschiede_-Beispiel ähneln und sich auf Eingabeereignisse stützen. Es könnte sowohl Eingaben als auch simulierte Zeit erfordern. Es könnte sogar auf etwas ganz anderem basieren.

Modernes JavaScript – wie in den nächsten Abschnitten beschrieben – macht es glücklicherweise einfach, eine effiziente Hauptschleife zu entwickeln, die einmal pro Frame ausgeführt wird. Natürlich wird Ihr Spiel nur so optimiert sein, wie Sie es machen. Wenn es so aussieht, als sollte etwas an ein weniger häufiges Ereignis angegliedert werden, ist es oft eine gute Idee, es aus der Hauptschleife herauszubrechen (aber nicht immer).

## Aufbau einer Hauptschleife in JavaScript

JavaScript funktioniert am besten mit Ereignissen und Callback-Funktionen. Moderne Browser streben an, Methoden genau dann aufzurufen, wenn sie benötigt werden, und ruhen (oder erledigen ihre anderen Aufgaben) in den Zwischenzeiten. Es ist eine ausgezeichnete Idee, Ihren Code an den Momenten anzuhängen, die für ihn geeignet sind. Überlegen Sie, ob Ihre Funktion wirklich in einem strengen Zeitintervall, jedes Frame oder nur nach dem Eintreten eines anderen Ereignisses aufgerufen werden muss. Wenn Sie dem Browser genauer mitteilen, wann Ihre Funktion aufgerufen werden muss, kann der Browser optimieren, wann sie aufgerufen wird. Außerdem wird es wahrscheinlich Ihre Arbeit erleichtern.

Einige Codes müssen Frame für Frame ausgeführt werden; warum diese Funktion also an etwas anderes als den Neuzeichenplan des Browsers anhängen? Im Web wird [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) die Grundlage der meisten gut programmierten Hauptschleifen pro Frame sein. Es muss eine Callback-Funktion übergeben werden, wenn sie aufgerufen wird. Diese Callback-Funktion wird zu einem geeigneten Zeitpunkt vor der nächsten Neuzeichnung ausgeführt. Hier ist ein Beispiel für eine einfache Hauptschleife:

```js
window.main = () => {
  window.requestAnimationFrame(main);

  // Whatever your main loop needs to do
};

main(); // Start the cycle
```

> [!NOTE]
> In jedem der hier behandelten `main()`-Methoden planen wir ein neues `requestAnimationFrame`, bevor wir den Inhalt unserer Schleife ausführen. Das ist kein Zufall, sondern gilt als Best Practice. Das frühzeitige Aufrufen des nächsten `requestAnimationFrame` stellt sicher, dass der Browser es rechtzeitig erhält, um entsprechend zu planen, selbst wenn Ihr aktuelles Frame sein VSync-Fenster verpasst.

Das obige Code-Fragment hat zwei Anweisungen. Die erste Anweisung erstellt eine Funktion als globale Variable namens `main()`. Diese Funktion führt einige Arbeiten aus und teilt dem Browser außerdem mit, sich im nächsten Frame mit `window.requestAnimationFrame()` selbst aufzurufen. Die zweite Anweisung ruft die in der ersten Anweisung definierte `main()`-Funktion auf. Da `main()` einmal in der zweiten Anweisung aufgerufen wird und jeder Aufruf davon sich selbst in die Reihe der nächst auszuführenden Aufgaben stellt, wird `main()` mit Ihrer Bildrate synchronisiert.

Natürlich ist diese Schleife nicht perfekt. Bevor wir Möglichkeiten besprechen, sie zu ändern, lassen Sie uns besprechen, was sie bereits gut macht.

Die Hauptschleife auf die Zeit zu timen, zu der der Browser auf das Display malt, ermöglicht es Ihnen, Ihre Schleife so oft auszuführen, wie der Browser malen möchte. Sie erhalten die Kontrolle über jeden Animationsframe. Es ist auch sehr einfach, weil `main()` die einzige Funktion ist, die geschleift wird. Ein First-Person Shooter (oder ein ähnliches Spiel) präsentiert einmal pro Frame eine neue Szene. Sie können nicht wirklich flüssiger und reaktionsfähiger werden als das.

Aber gehen Sie nicht sofort davon aus, dass Animationen eine Kontrolle über jeden Frame erfordern. Einfache Animationen können leicht ausgeführt, sogar GPU-beschleunigt, mit CSS-Animationen und anderen im Browser enthaltenen Werkzeugen durchgeführt werden. Es gibt eine Menge davon und sie machen Ihnen das Leben leichter.

## Aufbau einer besseren Hauptschleife in JavaScript

Es gibt zwei offensichtliche Probleme mit unserer vorherigen Hauptschleife: `main()` verunreinigt das [`window`](/de/docs/Web/API/Window)-Objekt (wo alle globalen Variablen gespeichert sind) und der Beispielcode ließ uns keine Möglichkeit, die Schleife zu _stoppen_, es sei denn, der gesamte Tab wird geschlossen oder aktualisiert. Für das erste Problem: Wenn Sie möchten, dass die Hauptschleife einfach läuft und Sie keinen einfachen (direkten) Zugriff darauf benötigen, könnten Sie sie als sofort aufgerufenen Funktionsausdruck (Immediately-Invoked Function Expression, IIFE) erstellen.

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

Wenn der Browser auf diesen IIFE trifft, wird er Ihre Hauptschleife definieren und sie sofort für den nächsten Frame in die Warteschlange stellen. Sie wird an kein Objekt angehängt sein und `main` (oder `main()` für Methoden) wird im Rest der Anwendung ein gültiger unbenutzter Name sein, der frei sein kann, als etwas anderes definiert zu werden.

> [!NOTE]
> In der Praxis ist es üblicher, das nächste `requestAnimationFrame()` mit einer if-Anweisung zu verhindern, anstatt `cancelAnimationFrame()` aufzurufen.

Für das zweite Problem, das Stoppen der Hauptschleife, müssen Sie den Aufruf von `main()` mit [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) abbrechen. Sie müssen `cancelAnimationFrame()` das ID-Token übergeben, das von `requestAnimationFrame()` bei dessen letzten Aufruf zurückgegeben wurde. Nehmen wir an, dass die Funktionen und Variablen Ihres Spiels auf einem Namensraum basieren, den Sie `MyGame` genannt haben. Unser letztes Beispiel erweiternd, würde die Hauptschleife jetzt so aussehen:

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

Wir haben jetzt eine Variable in unserem `MyGame`-Namensraum deklariert, die wir `stopMain` nennen, die die ID enthält, die von unserem letzten Aufruf der Hauptschleife zu `requestAnimationFrame()` zurückgegeben wurde. Zu jedem Zeitpunkt können wir die Hauptschleife stoppen, indem wir dem Browser mitteilen, dass die Anfrage, die unserem Token entspricht, abgebrochen werden soll.

```js
window.cancelAnimationFrame(MyGame.stopMain);
```

Der Schlüssel zur Programmierung einer Hauptschleife in JavaScript besteht darin, sie an das Ereignis zu binden, das Ihre Aktion antreiben sollte, und darauf zu achten, wie die verschiedenen beteiligten Systeme miteinander interagieren. Sie können mehrere Komponenten haben, die durch mehrere verschiedene Arten von Ereignissen angetrieben werden. Dies fühlt sich wie unnötige Komplexität an, könnte aber einfach eine gute Optimierung sein (nicht unbedingt, natürlich). Das Problem ist, dass Sie keine typische Hauptschleife programmieren. In JavaScript verwenden Sie die Hauptschleife des Browsers und versuchen, dies effektiv zu tun.

## Aufbau einer optimierteren Hauptschleife in JavaScript

Letztendlich läuft im JavaScript der Browser seine eigene Hauptschleife und Ihr Code existiert in einigen seiner Phasen. Die obigen Abschnitte beschreiben Hauptschleifen, die versuchen, dem Browser nicht die Kontrolle zu entziehen. Diese Hauptmethoden hängen sich an `window.requestAnimationFrame()`, das den Browser um Kontrolle über das kommende Frame bittet. Es liegt am Browser, wie er diese Anfragen zu seiner Hauptschleife in Beziehung setzt. Die [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#dom-animationframeprovider-requestanimationframe) definiert nicht ausdrücklich, wann die Browser die `requestAnimationFrame`-Callbacks ausführen müssen. Dies kann ein Vorteil sein, da es den Browser-Anbietern Freiheiten lässt, die Lösungen zu erproben, die sie für am besten halten, und sie im Laufe der Zeit zu optimieren.

Moderne Versionen von Firefox und Google Chrome (und wahrscheinlich andere) _versuchen_ die `requestAnimationFrame`-Callbacks zu ihrem Hauptthread am Anfang eines Zeitfensters zu verbinden. Der Hauptthread des Browsers _versucht_ also, wie folgt auszusehen:

1. Ein neues Frame starten (während das vorherige Frame vom Display verarbeitet wird).
2. Durch die Liste der `requestAnimationFrame`-Callbacks gehen und diese aufrufen.
3. Garbage Collection und andere pro Frame Aufgaben durchführen, wenn die obigen Callbacks den Hauptthread nicht mehr kontrollieren.
4. Schlafen (es sei denn, ein Ereignis unterbricht die Ruhe des Browsers), bis der Monitor bereit für Ihr Bild ist ([VSync](https://de.wikipedia.org/wiki/Screen_tearing#Vertikale_Synchronisation)) und wiederholen.

Sie können das Entwickeln von Echtzeitanwendungen als ein Verwenden eines Zeitbudgets, um Arbeit zu erledigen, betrachten. Alle oben genannten Schritte müssen alle 16,5 Millisekunden stattfinden, um mit einem 60 Hz-Display Schritt zu halten. Browser rufen Ihren Code so früh wie möglich auf, um ihm maximale Rechenzeit zu geben. Ihr Hauptthread wird oft Workloads starten, die nicht einmal auf dem Hauptthread liegen (wie Rasterisierung oder Shader in WebGL). Lange Berechnungen können gleichzeitig in einem Web Worker oder auf einer GPU durchgeführt werden, während der Browser seinen Hauptthread zur Verwaltung der Garbage Collection, seiner anderen Aufgaben oder zur Behandlung asynchroner Ereignisse verwendet.

Solange wir über das Thema Zeitbudget sprechen, haben viele Webbrowser ein Werkzeug namens _High Resolution Time_. Das {{jsxref("Date")}}-Objekt ist nicht mehr die anerkannte Methode zur zeitlichen Bestimmung von Ereignissen, weil es sehr ungenau ist und von der Systemuhr verändert werden kann. High Resolution Time zählt hingegen die Anzahl der Millisekunden seit `navigationStart` (wenn das vorherige Dokument entladen wurde). Dieser Wert wird als Dezimalzahl mit einer Genauigkeit von Tausendstel Millisekunden zurückgegeben. Es ist als [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) bekannt, aber, für alle praktischen Zwecke, betrachten Sie es als eine Gleitkommazahl.

> [!NOTE]
> Systeme (Hardware oder Software), die nicht in der Lage sind, Mikrosekundengenauigkeit zu liefern, dürfen eine Millisekundengenauigkeit als Minimum bereitstellen. Sie sollten jedoch 0,001 ms Genauigkeit bereitstellen, wenn sie dazu in der Lage sind.

Dieser Wert alleine ist nicht allzu nützlich, da er relativ zu einem ziemlich uninteressanten Ereignis ist, kann aber von einem anderen Zeitstempel abgezogen werden, um genau zu bestimmen, wie viel Zeit zwischen diesen beiden Punkten verstrichen ist. Um einen dieser Zeitstempel zu erhalten, können Sie `window.performance.now()` aufrufen und das Ergebnis als Variable speichern.

```js
const tNow = window.performance.now();
```

Zurück zum Thema der Hauptschleife. Sie möchten oft wissen, wann Ihre Hauptfunktion aufgerufen wurde. Da dies häufig vorkommt, liefert `window.requestAnimationFrame()` immer einen `DOMHighResTimeStamp` an Callbacks als Argument, wenn sie ausgeführt werden. Dies führt zu einer weiteren Verbesserung unserer vorherigen Hauptschleifen.

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

Es sind noch viele andere Optimierungen möglich, und es hängt wirklich davon ab, was Ihr Spiel zu erreichen versucht. Ihr Spielgenre wird offensichtlich einen Unterschied machen, aber es könnte noch subtiler sein. Sie könnten jedes Pixel individuell auf einer Leinwand zeichnen, oder Sie könnten DOM-Elemente (einschließlich mehrerer WebGL-Leinwände mit transparenten Hintergründen, wenn Sie möchten) in eine komplexe Hierarchie schichten. Jeder dieser Pfade wird zu unterschiedlichen Möglichkeiten und Einschränkungen führen.

## Es ist Entscheidungszeit

Sie müssen harte Entscheidungen über Ihre Hauptschleife treffen, um den genauen Fortschritt der Zeit zu simulieren. Wenn Sie Kontrolle über jeden Frame verlangen, müssen Sie bestimmen, wie häufig Ihr Spiel aktualisiert und gezeichnet wird. Sie könnten sogar wollen, dass Aktualisieren und Zeichnen mit unterschiedlichen Raten erfolgen. Sie müssen auch prüfen, wie elegant Ihr Spiel scheitert, wenn das System des Benutzers mit der Arbeitslast nicht Schritt halten kann. Beginnen wir mit der Annahme, dass Sie Benutzereingaben behandeln und den Spielzustand jedes Mal aktualisieren, wenn Sie zeichnen. Wir werden später andere Möglichkeiten erkunden.

> [!NOTE]
> Das Ändern der Weise, wie Ihre Hauptschleife mit Zeit umgeht, ist ein Debugging-Albtraum, überall. Denken Sie sorgfältig über Ihre Bedürfnisse nach, bevor Sie an Ihrer Hauptschleife arbeiten.

### Wie die meisten Browser-Spiele aussehen sollten

Wenn Ihr Spiel die maximale Bildwiederholrate aller von Ihnen unterstützten Hardware erreichen kann, ist Ihre Aufgabe recht einfach. Sie können aktualisieren, rendern und dann nichts tun, bis VSync eintritt.

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

Wenn die maximale Bildwiederholrate nicht erreicht werden kann, könnten Qualitätseinstellungen angepasst werden, um unter Ihrem Zeitbudget zu bleiben. Das bekannteste Beispiel für dieses Konzept ist das Spiel von id Software, RAGE. Dieses Spiel entzog dem Benutzer die Kontrolle, um seine Berechnungszeit auf etwa 16 ms (oder etwa 60 fps) zu halten. Wenn die Berechnung zu lange dauerte, verringerte sich die gerenderte Auflösung, Texturen und andere Assets wurden nicht geladen oder gezeichnet usw. Diese (nicht webbasierte) Fallstudie machte ein paar Annahmen und Kompromisse:

- Jedes Animationsbild berücksichtigt Benutzereingaben.
- Kein Frame muss extrapoliert (erraten) werden, da jedes Zeichnen seine eigene Aktualisierung hat.
- Simulationssysteme können im Wesentlichen davon ausgehen, dass jede vollständige Aktualisierung \~16 ms auseinander liegt.
- Dem Benutzer Kontrolle über Qualitätseinstellungen zu geben, wäre ein Alptraum.
- Verschiedene Monitore geben mit unterschiedlichen Raten ein: 30 FPS, 75 FPS, 100 FPS, 120 FPS, 144 FPS usw.
- Systeme, die 60 FPS nicht einhalten können, verlieren an visueller Qualität, um das Spiel in optimaler Geschwindigkeit zu halten (es scheitert schließlich ganz, wenn die Qualität zu niedrig wird).

### Andere Wege, um den Bedarf an variabler Bildwiederholrate zu handhaben

Es gibt andere Methoden, das Problem zu lösen.

Eine gängige Technik besteht darin, die Simulation mit einer konstanten Frequenz zu aktualisieren und dann so viele (oder so wenig) tatsächliche Frames wie möglich zu zeichnen. Die Aktualisierungsmethode kann weiterlaufen, ohne sich darum zu kümmern, was der Benutzer sieht. Die Zeichenmethode kann die letzte Aktualisierung und wann sie passiert ist, betrachten. Da das Zeichnen weiß, was es darstellt, und die Simulationszeit für die letzte Aktualisierung kennt, kann es ein plausibles Bild für den Benutzer vorhersagen. Es spielt keine Rolle, ob dies häufiger als die offizielle Aktualisierungsschleife ist (oder sogar weniger häufig). Die Aktualisierungsmethode setzt Kontrollpunkte und, so oft das System es erlaubt, zeichnet die Render-Methode Instanzen von Zeitpunkten um diese herum. Es gibt viele Möglichkeiten, die Aktualisierungsmethode in Webstandards zu trennen:

- Zeichnen bei `requestAnimationFrame()` und Aktualisieren bei einem [`setInterval()`](/de/docs/Web/API/Window/setInterval) oder [`setTimeout()`](/de/docs/Web/API/Window/setTimeout).
  - Dies verbraucht Prozessorzeit, auch wenn es nicht fokussiert oder minimiert ist, beansprucht den Hauptthread und ist wahrscheinlich ein Überbleibsel traditioneller Spielschleifen (aber es ist einfach).

- Zeichnen bei `requestAnimationFrame()` und Aktualisieren bei einem [`setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) oder [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) in einem [Web Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers).
  - Dies ist dasselbe wie oben, außer dass die Aktualisierung nicht den Hauptthread belastet (und umgekehrt). Dies ist eine komplexere Lösung und könnte für einfache Aktualisierungen zu viel Aufwand sein.

- Zeichnen bei `requestAnimationFrame()` und damit einen Web Worker, der die Aktualisierungsmethode enthält, anstoßen mit der Anzahl von Ticks, die berechnet werden müssen, falls vorhanden.
  - Dies schläft, bis `requestAnimationFrame()` aufgerufen wird und verschmutzt den Hauptthread nicht, zudem verlassen Sie sich nicht auf altmodische Methoden. Wiederum ist dies etwas komplexer als die vorherigen beiden Optionen und das _Starten_ jeder Aktualisierung wird blockiert, bis der Browser rAF-Callbacks auslöst.

Jede dieser Methoden hat ähnliche Kompromisse:

- Benutzer können das Rendern von Frames überspringen oder zusätzliche interpolieren, abhängig von ihrer Leistung.
- Sie können darauf vertrauen, dass alle Benutzer nicht-kosmetische Variablen mit der gleichen konstanten Frequenz (abgesehen von Aussetzern) aktualisieren.
- Viel komplizierter zu programmieren als die einfachen Schleifen, die wir zuvor gesehen haben.
- Benutzereingaben werden vollständig ignoriert, bis zur nächsten Aktualisierung (auch wenn der Benutzer ein schnelles Gerät hat).
- Die obligatorische Interpolation hat einen Leistungseinbruch zur Folge.

Eine separate Aktualisierungs- und Zeichenmethode könnte wie das folgende Beispiel aussehen. Zum Zwecke der Demonstration basiert das Beispiel auf dem dritten Aufzählungspunkt, jedoch ohne Web Worker für Lesbarkeit (und, seien wir ehrlich, Schreibbarkeit).

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

Eine andere Alternative ist, bestimmte Dinge seltener zu tun. Wenn ein Teil Ihrer Aktualität schwer zu berechnen, aber zeitunempfindlich ist, könnten Sie erwägen, seine Häufigkeit zu verringern und idealerweise in Teile über diesen verlängerten Zeitraum zu verteilen. Ein implizites Beispiel hierfür fand sich im Artillery-Blog der Artillery Games, wo sie [ihre Rate der Garbage-Erzeugung anpassen](https://web.archive.org/web/20161021030645/http://blog.artillery.com/2012/10/browser-garbage-collection-and-framerate.html), um die Garbage Collection zu optimieren. Offensichtlich ist das Bereinigen von Ressourcen nicht zeitkritisch (besonders, wenn das Aufräumen störender ist als die Garbage selbst).

Dies könnte auch auf einige Ihrer eigenen Aufgaben zutreffen. Diese sind gute Kandidaten zum Drosseln, wenn verfügbare Ressourcen ein Problem werden.

## Zusammenfassung

Ich möchte klarstellen, dass jede der obigen Optionen oder keine davon das Beste für Ihr Spiel sein könnte. Die richtige Entscheidung hängt ganz von den Kompromissen ab, die Sie bereit sind (und nicht bereit sind) einzugehen. Das Hauptanliegen besteht vor allem darin, auf eine andere Option zu wechseln. Glücklicherweise habe ich damit keine Erfahrung, aber ich habe gehört, es sei ein qualvolles Whack-a-Mole-Spiel.

Ein wichtiger Punkt, den es für verwaltete Plattformen wie das Web zu beachten gilt, ist, dass Ihre Schleife die Ausführung für bedeutende Zeiträume einstellen kann. Dies könnte passieren, wenn der Benutzer Ihren Tab abwählt und der Browser sein `requestAnimationFrame`-Intervall verlangsamt oder pausiert. Es gibt viele Möglichkeiten, mit dieser Situation umzugehen, und das könnte davon abhängen, ob Ihr Spiel Einzel- oder Mehrspielermodus ist. Einige Wahlmöglichkeiten sind:

- Den Abstand als “Pause” betrachten und die Zeit überspringen.
  - Sie sehen wahrscheinlich, wie das für die meisten Mehrspielerspiele problematisch ist.

- Sie können die Lücke simulieren, um aufzuholen.
  - Das kann ein Problem bei langen Ausfällen und/oder komplexen Aktualisierungen sein.

- Sie können den Spielzustand von einem Peer oder dem Server wiederherstellen.
  - Dies ist ineffektiv, wenn Ihre Peers oder der Server ebenfalls veraltet sind oder sie nicht existieren, weil das Spiel Einzelspieler ist und keinen Server hat.

Sobald Ihre Hauptschleife entwickelt wurde und Sie sich für eine Reihe von Annahmen und Kompromissen entschieden haben, die Ihrem Spiel entsprechen, besteht die nächste Aufgabe darin, Ihre Entscheidungen zu nutzen, um alle anwendbaren Physics, KI, Sounds, Netzwerksynchronisationen und alles Erforderliche für Ihr Spiel zu berechnen.
