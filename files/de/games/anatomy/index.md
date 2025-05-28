---
title: Anatomie eines Videospiels
slug: Games/Anatomy
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{GamesSidebar}}

Dieser Artikel befasst sich mit der Anatomie und dem Arbeitsablauf eines durchschnittlichen Videospiels aus technischer Sicht, insbesondere wie die Hauptschleife ablaufen sollte. Er hilft Anfängern in der modernen Spieleentwicklung zu verstehen, was beim Erstellen eines Spiels erforderlich ist und wie Webstandards wie JavaScript als Werkzeuge genutzt werden können. Auch erfahrene Spieleprogrammierer, die neu im Bereich Webentwicklung sind, könnten davon profitieren.

## Präsentieren, akzeptieren, interpretieren, berechnen, wiederholen

Das Ziel jedes Videospiels ist es, dem Nutzer eine Situation zu **präsentieren**, deren Eingabe zu **akzeptieren**, diese Signale in Handlungen zu **interpretieren** und eine neue Situation zu **berechnen**, die aus diesen Handlungen resultiert. Spiele durchlaufen ständig diese Phasen, immer wieder, bis ein Endzustand eintritt (wie Gewinnen, Verlieren oder das Spiel verlassen, um ins Bett zu gehen). Überraschenderweise entspricht dieses Muster der Programmierung einer Game-Engine.

Die Einzelheiten hängen vom Spiel ab.

Einige Spiele treiben diesen Zyklus durch Benutzereingaben voran. Stellen Sie sich vor, dass Sie ein Spiel vom Typ „Finde die Unterschiede zwischen diesen zwei ähnlichen Bildern“ entwickeln. Diese Spiele **präsentieren** dem Nutzer zwei Bilder; sie **akzeptieren** ihren Klick (oder ihre Berührung); sie **interpretieren** die Eingabe als Erfolg, Misserfolg, Pause, Menüinteraktion usw.; schließlich **berechnen** sie eine aktualisierte Szene, die aus dieser Eingabe resultiert. Die Spielschleife wird durch die Benutzereingabe vorangetrieben und pausiert, bis diese zur Verfügung gestellt wird. Dies ist mehr ein rundenbasierter Ansatz, der nicht in jedem Frame ein Update verlangt, sondern nur, wenn der Spieler reagiert.

Andere Spiele verlangen Kontrolle über jede der kleinsten möglichen Zeitscheiben. Die gleichen Prinzipien wie oben gelten mit einem kleinen Unterschied: jedes Animationsbild treibt den Zyklus voran und jede Änderung der Benutzereingabe wird zur ersten möglichen Gelegenheit erfasst. Dieses Modell pro Frame wird in etwas umgesetzt, das als **Hauptschleife** bezeichnet wird. Wenn Ihr Spiel sich zeitbasiert wiederholt, dann ist dies die Autorität, der Ihre Simulationen folgen werden.

Aber möglicherweise benötigt es keine Kontrolle pro Frame. Ihre Spielschleife könnte ähnlich wie das Beispiel „Finde die Unterschiede“ sein und sich auf Eingabeevents stützen. Es könnte sowohl Eingabe als auch simulierte Zeit erfordern. Es könnte sogar auf etwas ganz anderem beruhen.

Glücklicherweise macht es modernes JavaScript — wie in den folgenden Abschnitten beschrieben — einfach, eine effiziente Hauptschleife zu entwickeln, die einmal pro Frame ausgeführt wird. Natürlich wird Ihr Spiel nur so optimiert sein, wie Sie es programmieren. Wenn etwas so aussieht, als sollte es an ein selteneres Event angehängt werden, dann ist es oft eine gute Idee, es aus der Hauptschleife herauszubrechen (aber nicht immer).

## Eine Hauptschleife in JavaScript erstellen

JavaScript funktioniert am besten mit Ereignissen und Callback-Funktionen. Moderne Browser bemühen sich, Methoden genau dann aufzurufen, wenn sie benötigt werden und im Leerlauf (oder sie erledigen andere Aufgaben) in den Lücken. Es ist eine ausgezeichnete Idee, Ihren Code an die Momente zu binden, die für sie geeignet sind. Überlegen Sie, ob Ihre Funktion wirklich in einem strengen Zeitintervall, in jedem Frame oder nur dann aufgerufen werden muss, wenn etwas anderes passiert. Genauer mit dem Browser darüber zu kommunizieren, wann Ihre Funktion aufgerufen werden muss, ermöglicht es dem Browser zu optimieren, wann sie aufgerufen wird. Darüber hinaus wird es Ihnen wahrscheinlich die Arbeit erleichtern.

Einige Codezeilen müssen frameweise ausgeführt werden, warum also diese Funktion nicht an den Redraw-Zeitplan des Browsers anhängen? Im Web wird [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) die Grundlage der meisten gut programmierten Hauptschleifen pro Frame sein. Eine Callback-Funktion muss übergeben werden, wenn sie aufgerufen wird. Diese Callback-Funktion wird zu einem geeigneten Zeitpunkt vor dem nächsten Neuzeichnen ausgeführt. Hier ist ein Beispiel einer einfachen Hauptschleife:

```js
window.main = () => {
  window.requestAnimationFrame(main);

  // Whatever your main loop needs to do
};

main(); // Start the cycle
```

> [!NOTE]
> In jedem der hier besprochenen `main()`-Methoden planen wir einen neuen `requestAnimationFrame`, bevor wir den Inhalt unserer Schleife ausführen. Das ist kein Zufall und gilt als Best Practice. Das frühzeitige Aufrufen des nächsten `requestAnimationFrame` stellt sicher, dass der Browser ihn rechtzeitig erhält, um entsprechend zu planen, auch wenn Ihr aktueller Frame sein VSync-Fenster verpasst.

Der obige Codeabschnitt enthält zwei Anweisungen. Die erste Anweisung erstellt eine Funktion als globale Variable namens `main()`. Diese Funktion erledigt einige Aufgaben und weist den Browser an, sich im nächsten Frame selbst mit `window.requestAnimationFrame()` aufzurufen. Die zweite Anweisung ruft die in der ersten Anweisung definierte `main()`-Funktion auf. Da `main()` einmal in der zweiten Anweisung aufgerufen wird und jeder Aufruf es in die Warteschlange der Aufgaben für den nächsten Frame stellt, ist `main()` mit Ihrer Bildwiederholrate synchronisiert.

Natürlich ist diese Schleife nicht perfekt. Bevor wir uns mit Möglichkeiten zur Änderung befassen, lassen Sie uns erörtern, was sie bereits gut macht.

Das Timing der Hauptschleife auf den Moment, in dem der Browser auf dem Display zeichnet, ermöglicht es Ihnen, Ihre Schleife so oft auszuführen, wie der Browser zeichnen möchte. Sie erhalten die Kontrolle über jeden Animationsframe. Es ist auch sehr einfach, da `main()` die einzige Schleifenfunktion ist. Ein Ego-Shooter (oder ein ähnliches Spiel) präsentiert in jedem Frame eine neue Szene. Flüssiger und reaktionsschneller kann es kaum werden.

Aber nehmen Sie nicht sofort an, dass Animationen eine Kontrolle pro Frame erfordern. Einfache Animationen können leicht ausgeführt werden, sogar mit GPU-Beschleunigung, durch CSS-Animationen und andere in den Browser integrierte Werkzeuge. Es gibt viele davon und sie machen Ihnen das Leben leichter.

## Eine bessere Hauptschleife in JavaScript erstellen

Es gibt zwei offensichtliche Probleme mit unserer vorherigen Hauptschleife: `main()` verunreinigt das [`window`](/de/docs/Web/API/Window) Objekt (in dem alle globalen Variablen gespeichert sind) und der Beispielcode hat uns keine Möglichkeit gelassen, die Schleife zu _stoppen_, es sei denn, der gesamte Tab wird geschlossen oder aktualisiert. Für das erste Problem, wenn Sie möchten, dass die Hauptschleife einfach läuft und Sie keinen einfachen (direkten) Zugriff darauf benötigen, können Sie sie als selbstaufrufenden Funktionsausdruck (IIFE) erstellen.

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

Wenn der Browser auf diesen IIFE stößt, wird er Ihre Hauptschleife definieren und sofort für den nächsten Frame in die Warteschlange stellen. Sie wird nicht an ein Objekt angehängt, und `main` (oder `main()` für Methoden) wird ein gültiger ungenutzter Name im Rest der Anwendung sein, der frei als etwas anderes definiert werden darf.

> [!NOTE]
> In der Praxis ist es üblicher, den nächsten `requestAnimationFrame()` mit einer if-Anweisung zu verhindern, anstatt `cancelAnimationFrame()` aufzurufen.

Um die Hauptschleife zu stoppen, müssen Sie den Aufruf an `main()` mit [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) abbrechen. Sie müssen `cancelAnimationFrame()` das Identifikationstoken übergeben, das von `requestAnimationFrame()` beim letzten Aufruf zurückgegeben wurde. Angenommen, die Funktionen und Variablen Ihres Spiels basieren auf einem Namensraum, den Sie `MyGame` genannt haben. Durch die Erweiterung unseres letzten Beispiels sieht die Hauptschleife jetzt so aus:

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

Wir haben jetzt eine Variable in unserem `MyGame`-Namensraum deklariert, die wir `stopMain` nennen, die die ID enthält, die von unserem letzten Aufruf der Hauptschleife an `requestAnimationFrame()` zurückgegeben wurde. Zu jedem Zeitpunkt können wir die Hauptschleife stoppen, indem wir dem Browser mitteilen, dass die Anfrage, die unserem Token entspricht, abgebrochen werden soll.

```js
window.cancelAnimationFrame(MyGame.stopMain);
```

Der Schlüssel zur Programmierung einer Hauptschleife in JavaScript besteht darin, sie an das Ereignis zu binden, das Ihre Aktion antreiben soll, und darauf zu achten, wie die verschiedenen beteiligten Systeme zusammenspielen. Sie können mehrere Komponenten haben, die von mehreren unterschiedlichen Ereignistypen gesteuert werden. Dies mag wie unnötige Komplexität erscheinen, könnte jedoch eine gute Optimierung sein (nicht notwendigerweise, natürlich). Das Problem ist, dass Sie keine typische Hauptschleife programmieren. In JavaScript verwenden Sie die Hauptschleife des Browsers und versuchen, dies effektiv zu tun.

## Eine optimiertere Hauptschleife in JavaScript erstellen

Letztendlich führt der Browser in JavaScript seine eigene Hauptschleife aus und Ihr Code existiert in einigen ihrer Phasen. Die oberen Abschnitte beschreiben Hauptschleifen, die vermeiden, dem Browser die Kontrolle zu entziehen. Diese Hauptmethoden binden sich an `window.requestAnimationFrame()`, das den Browser um Kontrolle über den kommenden Frame bittet. Es liegt am Browser, wie er diese Anforderungen zu seiner Hauptschleife in Beziehung setzt. Die [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#dom-animationframeprovider-requestanimationframe) definiert nicht wirklich, wann die Browser die `requestAnimationFrame`-Callbacks ausführen müssen. Dies kann ein Vorteil sein, da es Browser-Anbietern ermöglicht, mit den Lösungen, die sie für die besten halten, zu experimentieren und diese im Laufe der Zeit zu optimieren.

Moderne Versionen von Firefox und Google Chrome (und wahrscheinlich anderen) _versuchen_, `requestAnimationFrame`-Callbacks mit ihrem Hauptthread ganz am Anfang eines Frame-Zeitslices zu verbinden. Der Hauptthread des Browsers _versucht_ daher folgendermaßen auszusehen:

1. Starten Sie einen neuen Frame (während der vorherige Frame vom Display verarbeitet wird).
2. Gehen Sie die Liste der `requestAnimationFrame`-Callbacks durch und führen Sie sie aus.
3. Führen Sie die Speicherbereinigung und andere per-Frame-Aufgaben durch, wenn die oben genannten Callbacks den Hauptthread nicht mehr kontrollieren.
4. Schlafen (es sei denn, ein Ereignis unterbricht das Nickerchen des Browsers), bis der Monitor bereit für Ihr Bild ist ([VSync](https://www.techopedia.com/definition/92/vertical-sync-vsync)) und wiederholen.

Sie können sich die Entwicklung von Echtzeitanwendungen als ein zeitliches Budget vorstellen, um Arbeit zu erledigen. All die obigen Schritte müssen alle 16,5 Millisekunden stattfinden, um mit einem 60 Hz-Display mitzuhalten. Browser rufen Ihren Code so früh wie möglich auf, um ihm maximale Rechenzeit zu geben. Ihr Hauptthread startet oft Arbeitslasten, die nicht einmal auf dem Hauptthread sind (wie Rasterisierung oder Shader in WebGL). Lange Berechnungen können in einem Web Worker oder einer GPU durchgeführt werden, während der Browser seinen Hauptthread verwendet, um Speicherbereinigung zu verwalten, seine anderen Aufgaben durchzuführen oder asynchrone Ereignisse zu behandeln.

Da wir beim Thema Zeitbudget planen sind, haben viele Webbrowser ein Tool namens _High Resolution Time_. Das {{jsxref("Date")}}-Objekt ist nicht mehr die anerkannte Methode zur Timing von Ereignissen, da es sehr ungenau ist und durch die Systemuhr manipuliert werden kann. High Resolution Time hingegen zählt die Anzahl der Millisekunden seit `navigationStart` (wenn das vorherige Dokument entladen wird). Dieser Wert wird als Dezimalzahl zurückgegeben, die auf ein Tausendstel einer Millisekunde genau ist. Er ist bekannt als [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), aber für alle praktischen Zwecke sollte er als Gleitkommazahl betrachtet werden.

> [!NOTE]
> Systeme (Hardware oder Software), die eine Mikrosekunden-Genauigkeit nicht erreichen, dürfen eine Millisekunden-Genauigkeit als Minimum bereitstellen. Sie sollten jedoch 0,001 ms Genauigkeit bereitstellen, wenn sie dazu in der Lage sind.

Dieser Wert allein ist nicht besonders nützlich, da er sich auf ein eher uninteressantes Ereignis bezieht, aber er kann von einem anderen Zeitstempel subtrahiert werden, um genau zu bestimmen, wie viel Zeit zwischen diesen beiden Punkten vergangen ist. Um einen dieser Zeitstempel zu erhalten, können Sie `window.performance.now()` aufrufen und das Ergebnis als Variable speichern.

```js
const tNow = window.performance.now();
```

Zurück zum Thema der Hauptschleife. Sie werden oft wissen wollen, wann Ihre Hauptfunktion aufgerufen wurde. Da dies häufig ist, liefert `window.requestAnimationFrame()` immer einen `DOMHighResTimeStamp` an Callback-Funktionen als Argument, wenn sie ausgeführt werden. Dies führt zu einer weiteren Verbesserung unserer vorherigen Hauptschleifen.

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

Es sind mehrere andere Optimierungen möglich, und es hängt wirklich davon ab, was Ihr Spiel zu erreichen versucht. Ihr Spielgenre macht natürlich einen Unterschied, aber es könnte sogar subtiler sein als das. Sie könnten jeden Pixel individuell auf einem Canvas zeichnen oder Sie könnten DOM-Elemente (einschließlich mehrerer WebGL-Canvas mit transparenten Hintergründen, wenn Sie möchten) in eine komplexe Hierarchie eingliedern. Jeder dieser Wege führt zu unterschiedlichen Möglichkeiten und Einschränkungen.

## Es ist Entscheidungszeit

Sie müssen harte Entscheidungen über Ihre Hauptschleife treffen: wie man die genaue Zeitentwicklung simuliert. Wenn Sie Steuerung pro Frame verlangen, müssen Sie bestimmen, wie oft Ihr Spiel aktualisiert und gezeichnet wird. Sie könnten sogar möchten, dass Aktualisierung und Zeichnung in unterschiedlichen Raten erfolgen. Sie müssen auch in Betracht ziehen, wie anmutig Ihr Spiel versagt, wenn das System des Nutzers nicht mit der Arbeitslast mithalten kann. Lassen Sie uns damit beginnen, anzunehmen, dass Sie die Benutzereingaben verarbeiten und den Spielzustand jedes Mal aktualisieren, wenn Sie zeichnen. Wir werden später weiter verzweigen.

> [!NOTE]
> Die Art und Weise, wie Ihre Hauptschleife mit der Zeit umgeht, zu ändern, ist überall ein Debattenalptraum. Denken Sie sorgfältig über Ihre Bedürfnisse nach, bevor Sie an Ihrer Hauptschleife arbeiten.

### Wie die meisten Browsergames aussehen sollten

Wenn Ihr Spiel die maximale Bildwiederholrate jedes von Ihnen unterstützten Geräts erreichen kann, ist Ihre Aufgabe ziemlich einfach. Sie können aktualisieren, rendern und bis VSync nichts tun.

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

Wenn die maximale Bildwiederholrate nicht erreicht werden kann, könnten die Qualitätseinstellungen angepasst werden, um unter Ihrem Zeitbudget zu bleiben. Das berühmteste Beispiel für dieses Konzept ist das Spiel von id Software namens RAGE. Dieses Spiel entzog dem Nutzer die Kontrolle, um seine Berechnungszeit bei ungefähr 16 ms (oder ungefähr 60 fps) zu halten. Wenn die Berechnung zu lange dauerte, verringerte sich die gerenderte Auflösung, Texturen und andere Assets wurden nicht geladen oder gezeichnet und so weiter. Diese (nicht webbasierte) Fallstudie machte einige Annahmen und Kompromisse:

- Jeder Animationsframe berücksichtigt Benutzereingaben.
- Kein Frame muss extrapoliert (geschätzt) werden, da jede Zeichnung ihr eigenes Update hat.
- Simulationssysteme können grundsätzlich davon ausgehen, dass jedes vollständige Update \~16 ms auseinander liegt.
- Der Benutzer die Kontrolle über die Qualitätseinstellungen zu geben, wäre ein Albtraum.
- Unterschiedliche Monitore haben unterschiedliche Eingaberaten: 30 FPS, 75 FPS, 100 FPS, 120 FPS, 144 FPS usw.
- Systeme, die nicht mit 60 FPS mithalten können, verlieren an Bildqualität, um das Spiel mit optimaler Geschwindigkeit laufen zu lassen (schließlich fällt es ganz aus, wenn die Qualität zu gering wird).

### Andere Wege, um variable Bildwiederholraten zu handhaben

Es existieren andere Methoden, um das Problem anzugehen.

Eine gängige Technik besteht darin, die Simulation mit konstanter Frequenz zu aktualisieren und dann so viele (oder so wenige) der tatsächlichen Frames wie möglich zu zeichnen. Die Aktualisierungsmethode kann weiterhin in einer Schleife laufen, ohne sich darum zu kümmern, was der Nutzer sieht. Die Zeichnungsmethode kann das letzte Update und wann es stattfand betrachten. Da Zeichnung weiß, was es darstellt und die Simulationszeit für das letzte Update, kann sie einen plausiblen Frame, den der Nutzer sieht, vorhersagen. Es spielt keine Rolle, ob dies häufiger als die offizielle Aktualisierungsschleife erfolgt (oder sogar weniger häufig). Die Aktualisierungsmethode legt Checkpoints fest und so häufig wie das System es zulässt, zeichnet die Render-Methode Zeitinstanzen um diese herum. Es gibt viele Möglichkeiten, die Aktualisierungsmethode in Webstandards zu trennen:

- Zeichnen mit `requestAnimationFrame()` und Aktualisieren mit einem [`setInterval()`](/de/docs/Web/API/Window/setInterval) oder [`setTimeout()`](/de/docs/Web/API/Window/setTimeout).

  - Dies verwendet Prozessorzeit, auch wenn es nicht fokussiert oder minimiert ist, blockiert den Hauptthread und ist wahrscheinlich ein Artefakt traditioneller Spielschleifen (aber es ist einfach).

- Zeichnen mit `requestAnimationFrame()` und Aktualisieren mit einem [`setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) oder [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) in einem [Web Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers).

  - Dies ist dasselbe wie oben, außer dass Aktualisierungen den Hauptthread nicht blockieren (und umgekehrt). Dies ist eine komplexere Lösung und möglicherweise zu viel Overhead für einfache Aktualisierungen.

- Zeichnen mit `requestAnimationFrame()` und es verwenden, um einen Web Worker zu pokern, der die Aktualisierungsmethode mit der Anzahl der zu berechnenden Ticks, falls vorhanden, enthält.

  - Dies schläft, bis `requestAnimationFrame()` aufgerufen wird, und verunreinigt den Hauptthread nicht, außerdem verlassen Sie sich nicht auf altmodische Methoden. Trotzdem ist dies etwas komplexer als die vorherigen zwei Optionen und der _Start_ jeder Aktualisierung wird blockiert, bis der Browser sich entscheidet, rAF-Callbacks auszuführen.

Jede dieser Methoden hat ähnliche Kompromisse:

- Nutzer können Rendering-Frames überspringen oder zusätzliche interpolieren je nachdem, wie ihre Leistung ist.
- Sie können davon ausgehen, dass alle Nutzer nicht-kosmetische Variablen mit gleicher Frequenz minus Hiccups aktualisieren.
- Viel komplizierter zu programmieren als die grundlegenden Schleifen, die wir vorher gesehen haben.
- Benutzereingaben werden komplett ignoriert, bis zur nächsten Aktualisierung (auch wenn der Nutzer ein schnelles Gerät hat).
- Die obligatorische Interpolation hat einen Leistungsnachteil.

Eine separate Aktualisierte und Zeichnen-Methode könnte wie das folgende Beispiel aussehen. Es basiert zur Demonstration auf dem dritten Punkt, nur ohne Web Worker aus Gründen der Lesbarkeit (und um ehrlich zu sein, der Schreibbarkeit).

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

Eine andere Alternative ist es, bestimmte Dinge weniger häufig zu tun. Wenn ein Teil Ihrer Aktualisierungsschleife schwer zu berechnen, aber insensitiv gegenüber der Zeit ist, sollten Sie in Betracht ziehen, dessen Frequenz zurückzuschrauben und, im Idealfall, es über diesen verlängerten Zeitraum in Stücke zu zerlegen. Ein implizites Beispiel dafür wurde im The Artillery Blog für Artillery Games gefunden, wo sie [ihre Mülldatenrate anpassen](https://web.archive.org/web/20161021030645/http://blog.artillery.com/2012/10/browser-garbage-collection-and-framerate.html), um die Speicherbereinigung zu optimieren. Offensichtlich ist die Bereinigung von Ressourcen nicht zeitabhängig (besonders wenn das Aufräumen störender als der Müll selbst ist).

Dies kann auch auf einige Ihrer eigenen Aufgaben zutreffen. Dies sind gute Kandidaten, um sie bei verfügbarem Ressourcenkontingent zu drosseln.

## Zusammenfassung

Ich möchte klarstellen, dass jede der oben genannten Methoden, oder keine von ihnen, für Ihr Spiel am besten sein könnte. Die richtige Entscheidung hängt ganz von den Kompromissen ab, die Sie bereit (und nicht bereit) sind einzugehen. Die Hauptsorge besteht darin, auf eine andere Option zu wechseln. Glücklicherweise habe ich keine Erfahrung damit, aber ich habe gehört, es sei ein schmerzhafter Whack-a-Mole.

Ein wichtiger Punkt, der für verwaltete Plattformen wie das Web zu beachten ist, ist, dass Ihre Schleife für längere Zeiträume die Ausführung einstellen kann. Dies könnte passieren, wenn der Nutzer Ihren Tab abwählt und der Browser seine `requestAnimationFrame`-Callback-Intervalle verlangsamt (oder stoppt). Sie haben viele Möglichkeiten, mit dieser Situation umzugehen, und dies könnte davon abhängen, ob Ihr Spiel ein Einzel- oder Mehrspieler-Spiel ist. Einige Optionen sind:

- Betrachten Sie die Lücke als "Pause" und überspringen Sie die Zeit.

  - Sie können wahrscheinlich sehen, wie das für die meisten Mehrspieler-Spiele problematisch ist.

- Sie können die Lücke simulieren, um aufzuholen.

  - Dies kann bei langen Pausen und/oder komplexen Updates ein Problem sein.

- Sie können den Spielzustand von einem Peer oder dem Server wiederherstellen.

  - Das ist ineffektiv, wenn Ihre Peers oder der Server ebenfalls veraltet sind, oder sie nicht existieren, weil das Spiel ein Einzelspielerspiel ist und keinen Server hat.

Sobald Ihre Hauptschleife entwickelt ist und Sie sich auf eine Reihe von Annahmen und Kompromissen entschieden haben, die zu Ihrem Spiel passen, ist es nun nur noch Sache davon, Ihre Entscheidungen zu nutzen, um anwendbare Physik, KI, Geräusche, Netzwerksynchronisation und was auch immer Ihr Spiel sonst erfordert, zu berechnen.
