---
title: Anatomie eines Videospiels
slug: Games/Anatomy
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

Dieser Artikel betrachtet die Anatomie und den Arbeitsablauf eines durchschnittlichen Videospiels aus technischer Sicht, insbesondere wie die Hauptschleife ablaufen sollte. Er hilft Anfängern in der modernen Spieleentwicklung zu verstehen, was beim Erstellen eines Spiels erforderlich ist und wie sich Webstandards wie JavaScript als Werkzeuge eignen. Auch erfahrene Spielprogrammierer, die neu in der Webentwicklung sind, könnten davon profitieren.

## Präsentieren, akzeptieren, interpretieren, berechnen, wiederholen

Das Ziel jedes Videospiels ist es, dem Benutzer eine Situation zu **präsentieren**, seine Eingabe zu **akzeptieren**, diese Signale in Aktionen zu **interpretieren** und eine neue Situation zu **berechnen**, die sich aus diesen Handlungen ergibt. Spiele durchlaufen ständig diese Phasen, immer und immer wieder, bis eine Endbedingung eintritt (wie Gewinnen, Verlieren oder Beenden, um schlafen zu gehen). Überraschenderweise entspricht dieses Muster der Programmierung einer Spiel-Engine.

Die Details hängen vom Spiel ab.

Einige Spiele steuern diesen Zyklus durch Benutzereingaben. Stellen Sie sich vor, Sie entwickeln ein Spiel vom Typ "_Finde die Unterschiede zwischen diesen beiden ähnlichen Bildern_". Diese Spiele **präsentieren** dem Nutzer zwei Bilder; sie **akzeptieren** ihren Klick (oder Berührung); sie **interpretieren** die Eingabe als Erfolg, Misserfolg, Pause, Menüinteraktion usw.; schließlich **berechnen** sie eine aktualisierte Szene, die aus dieser Eingabe resultiert. Die Spielschleife wird durch die Eingabe des Benutzers vorangebracht und ruht, bis er sie bereitstellt. Dies ist eher ein rundenbasierter Ansatz, der kein ständiges Update jedes Bildes erfordert, sondern nur dann, wenn der Spieler reagiert.

Andere Spiele verlangen die Kontrolle über jede der kleinstmöglichen einzelnen Zeitscheiben. Die gleichen Prinzipien wie oben gelten mit einer kleinen Drehung: Jedes Animationsbild führt den Zyklus weiter, und jede Änderung der Benutzereingabe wird bei der ersten verfügbaren Gelegenheit erfasst. Dieses einmal-pro-Bild-Modell wird in etwas implementiert, das als **Hauptschleife** bezeichnet wird. Wenn Ihre Spielschleife auf Zeit basiert, wird dies ihre Autorität sein, an die sich Ihre Simulationen halten müssen.

Aber möglicherweise benötigt es keine Kontrolle pro Bild. Ihre Spielschleife könnte ähnlich dem Beispiel _Finde die Unterschiede_ sein und sich auf Eingabereignisse stützen. Es könnte sowohl Eingaben als auch simulierte Zeit erfordern. Es könnte sogar auf etwas ganz anderem beruhen.

Moderne JavaScript — wie in den folgenden Abschnitten beschrieben — macht es glücklicherweise einfach, eine effiziente, einmal-pro-Bild auszuführende Hauptschleife zu entwickeln. Natürlich wird Ihr Spiel nur so optimiert sein, wie Sie es gestalten. Wenn etwas so aussieht, als sollte es an ein selteneres Ereignis gebunden werden, ist es oft eine gute Idee, es aus der Hauptschleife herauszunehmen (aber nicht immer).

## Aufbau einer Hauptschleife in JavaScript

JavaScript funktioniert am besten mit Ereignissen und Rückruffunktionen. Moderne Browser bemühen sich, Methoden genau dann aufzurufen, wenn sie benötigt werden, und in den Lücken im Leerlauf (oder erledigen ihre anderen Aufgaben). Es ist eine ausgezeichnete Idee, Ihren Code an die Momente anzuhängen, die für ihn geeignet sind. Überlegen Sie, ob Ihre Funktion wirklich in einem strengen Zeitintervall, jedes Bild oder nur nach einem anderen Ereignis aufgerufen werden muss. Genauer mit dem Browser darüber zu sein, wann Ihre Funktion aufgerufen werden muss, ermöglicht es dem Browser, den Aufruf zu optimieren. Es wird Ihnen wahrscheinlich auch die Arbeit erleichtern.

Einige Codes müssen Bild für Bild ausgeführt werden, warum also diese Funktion nicht an den Neuzeichenplan des Browsers anhängen? Im Web wird [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) die Grundlage der meisten gut programmierten Hauptschleifen sein, die pro Bild laufen. Eine Rückruffunktion muss übergeben werden, wenn sie aufgerufen wird. Diese Rückruffunktion wird zu einem geeigneten Zeitpunkt vor dem nächsten Neuzeichnen ausgeführt. Hier ist ein Beispiel für eine einfache Hauptschleife:

```js
window.main = () => {
  window.requestAnimationFrame(main);

  // Whatever your main loop needs to do
};

main(); // Start the cycle
```

> [!NOTE]
> In jeder der hier besprochenen `main()`-Methoden planen wir einen neuen `requestAnimationFrame`, bevor wir unsere Schleifeninhalte ausführen. Das ist kein Zufall und es wird als bewährte Praxis angesehen. Das frühzeitige Aufrufen des nächsten `requestAnimationFrame` stellt sicher, dass der Browser ihn rechtzeitig erhält, um entsprechend zu planen, selbst wenn Ihr aktuelles Bild sein VSync-Fenster verpasst.

Der obige Code-Ausschnitt enthält zwei Anweisungen. Die erste Anweisung erstellt eine Funktion als globale Variable namens `main()`. Diese Funktion erledigt einige Aufgaben und teilt dem Browser außerdem mit, sich mit `window.requestAnimationFrame()` beim nächsten Bild selbst aufzurufen. Die zweite Anweisung ruft die `main()`-Funktion auf, die in der ersten Anweisung definiert wird. Da `main()` einmal in der zweiten Anweisung aufgerufen wird und jeder Aufruf es in die Warteschlange der Dinge setzt, die als nächstes Bild erledigt werden müssen, ist `main()` mit Ihrer Bildrate synchronisiert.

Natürlich ist diese Schleife nicht perfekt. Bevor wir Wege diskutieren, sie zu ändern, lassen Sie uns darüber sprechen, was sie bereits gut macht.

Die Hauptschleife auf den Zeitpunkt zu timen, zu dem der Browser auf das Display zeichnet, ermöglicht es Ihnen, Ihre Schleife so oft auszuführen, wie der Browser zeichnen möchte. Sie erhalten Kontrolle über jedes Animationsbild. Es ist auch sehr einfach, da `main()` die einzige Funktion ist, die geschleift wird. Ein Ego-Shooter (oder ein ähnliches Spiel) präsentiert einmal pro Bild eine neue Szene. Sie können wirklich nicht glatter und reaktionsschneller werden als das.

Aber nehmen Sie nicht sofort an, dass Animationen Kontrolle Bild für Bild erfordern. Einfache Animationen können leicht ausgeführt werden, sogar GPU-beschleunigt, mit CSS-Animationen und anderen im Browser enthaltenen Werkzeugen. Es gibt viele davon und sie werden Ihnen das Leben erleichtern.

## Aufbau einer besseren Hauptschleife in JavaScript

Es gibt zwei offensichtliche Probleme mit unserer vorherigen Hauptschleife: `main()` verschmutzt das [`window`](/de/docs/Web/API/Window)-Objekt (wo alle globalen Variablen gespeichert sind) und der Beispielcode ließ uns keine Möglichkeit, die Schleife zu _stoppen_, es sei denn, der gesamte Tab wird geschlossen oder aktualisiert. Für das erste Problem, wenn Sie möchten, dass die Hauptschleife einfach läuft und Sie keinen einfachen (direkten) Zugang dazu benötigen, könnten Sie sie als Immediately-Invoked Function Expression (IIFE) erstellen.

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

Wenn der Browser auf dieses IIFE trifft, wird er Ihre Hauptschleife definieren und sofort für das nächste Bild in die Warteschlange stellen. Es wird an keinem Objekt angehängt und `main` (oder `main()` für Methoden) wird ein gültiger, ungenutzter Name im Rest der Anwendung sein, frei, als etwas anderes definiert zu werden.

> [!NOTE]
> In der Praxis ist es üblicher, das nächste `requestAnimationFrame()` mit einer if-Anweisung zu verhindern, anstatt `cancelAnimationFrame()` aufzurufen.

Beim zweiten Problem, dem Stoppen der Hauptschleife, müssen Sie den Aufruf von `main()` mit [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) abbrechen. Sie müssen `cancelAnimationFrame()` das von `requestAnimationFrame()` zurückgegebene ID-Token übergeben, wenn es das letzte Mal aufgerufen wurde. Nehmen wir an, dass die Funktionen und Variablen Ihres Spiels auf einem Namespace basieren, den Sie `MyGame` genannt haben. Indem wir unser letztes Beispiel erweitern, sieht die Hauptschleife jetzt so aus:

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

Wir haben jetzt eine Variable in unserem `MyGame`-Namespace deklariert, die wir `stopMain` nennen und die die ID enthält, die aus dem letzte Aufruf der Hauptschleife an `requestAnimationFrame()` zurückgegeben wurde. Zu jedem Zeitpunkt können wir die Hauptschleife stoppen, indem wir dem Browser sagen, die Anfrage zu stornieren, die unserem Token entspricht.

```js
window.cancelAnimationFrame(MyGame.stopMain);
```

Der Schlüssel zur Programmierung einer Hauptschleife in JavaScript besteht darin, sie an das Ereignis zu binden, das Ihre Aktion antreiben soll, und darauf zu achten, wie die verschiedenen beteiligten Systeme miteinander in Wechselwirkung stehen. Sie könnten mehrere Komponenten haben, die von verschiedenen Arten von Ereignissen angetrieben werden. Dies fühlt sich an wie unnötige Komplexität, aber es könnte einfach eine gute Optimierung sein (nicht unbedingt, natürlich). Das Problem ist, dass Sie keine typische Hauptschleife programmieren. In JavaScript verwenden Sie die Hauptschleife des Browsers und versuchen dies effektiv zu tun.

## Aufbau einer optimierteren Hauptschleife in JavaScript

Letztlich läuft der Browser in JavaScript seine eigene Hauptschleife, und Ihr Code existiert in einigen seiner Phasen. Die obigen Abschnitte beschreiben Hauptschleifen, die versuchen, die Kontrolle nicht vom Browser zu entreißen. Diese Hauptmethoden binden sich an `window.requestAnimationFrame()`, das den Browser um Kontrolle über das kommende Bild bittet. Es liegt am Browser, wie diese Anfragen mit ihrer Hauptschleife in Beziehung stehen. Die [W3C-Spezifikation für requestAnimationFrame](https://www.w3.org/TR/animation-timing/) definiert nicht wirklich genau, wann die Browser die requestAnimationFrame-Rückrufe durchführen müssen. Dies kann ein Vorteil sein, da es Browseranbietern Freiheit lässt, mit den Lösungen zu experimentieren, die sie für am besten halten, und diese im Laufe der Zeit anzupassen.

Moderne Versionen von Firefox und Google Chrome (und wahrscheinlich andere) _versuchen_, `requestAnimationFrame`-Rückrufe an ihren Hauptthread ganz am Anfang einer Bildzeitscheibe zu binden. Der Hauptthread des Browsers _versucht_ folglich, wie folgt auszusehen:

1. Starten Sie ein neues Bild (während das vorherige Bild von der Anzeige gehandhabt wird).
2. Gehen Sie die Liste der `requestAnimationFrame`-Rückrufe durch und führen Sie sie aus.
3. Führen Sie die Speicherbereinigung und andere pro Bild Aufgaben durch, wenn die obigen Rückrufe den Hauptthread nicht mehr kontrollieren.
4. Schlafen (es sei denn, ein Ereignis unterbricht den Schlaf des Browsers) bis der Monitor bereit für Ihr Bild ist ([VSync](https://www.techopedia.com/definition/92/vertical-sync-vsync)) und wiederholen Sie dies.

Sie können sich die Entwicklung von Echtzeitanwendungen vorstellen, als hätten Sie ein Zeitbudget für Arbeit. Alle oben genannten Schritte müssen alle 16,5 Millisekunden stattfinden, um mit einem 60-Hz-Display Schritt zu halten. Browser rufen Ihren Code so früh wie möglich auf, um ihm maximalen Rechenaufwand zu geben. Ihr Hauptthread startet oft Arbeitslasten, die nicht einmal auf dem Hauptthread sind (wie Rasterung oder Shader in WebGL). Lange Berechnungen können auf einem Web Worker oder einer GPU parallel erfolgen, während der Browser seinen Hauptthread verwendet, um Speicherbereinigung zu verwalten, seine anderen Aufgaben zu erledigen oder asynchrone Ereignisse zu behandeln.

Während wir beim Thema Zeitbudgetierung sind, haben viele Webbrowser ein Tool namens _High Resolution Time_. Das {{jsxref("Date")}}-Objekt wird nicht mehr als anerkannte Methode zum Timing von Ereignissen angesehen, da es sehr ungenau ist und von der Systemuhr manipuliert werden kann. High Resolution Time hingegen zählt die Anzahl der Millisekunden seit `navigationStart` (wenn das vorherige Dokument entladen wird). Dieser Wert wird als Dezimalzahl zurückgegeben, die auf tausendstel Millisekunde genau ist. Sie ist als [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) bekannt, aber für alle praktischen Zwecke betrachten Sie es als Gleitkommazahl.

> [!NOTE]
> Systeme (Hardware oder Software), die nicht in der Lage sind, Mikrosekunden-Genauigkeit zu liefern, können Millisekunden-Genauigkeit als Minimum bieten. Sie sollten jedoch 0,001ms Genauigkeit bieten, wenn sie dazu in der Lage sind.

Dieser Wert ist allein nicht allzu nützlich, da er relativ zu einem ziemlich uninteressanten Ereignis ist, kann jedoch von einem anderen Zeitstempel subtrahiert werden, um genau und präzise zu bestimmen, wie viel Zeit zwischen diesen beiden Punkten vergangen ist. Um einen dieser Zeitstempel zu erhalten, können Sie `window.performance.now()` aufrufen und das Ergebnis als Variable speichern.

```js
const tNow = window.performance.now();
```

Zurück zum Thema der Hauptschleife. Sie werden oft wissen wollen, wann Ihre Hauptfunktion aufgerufen wurde. Da dies üblich ist, stellt `window.requestAnimationFrame()` stets einen `DOMHighResTimeStamp` für Rückrufe als Argument zur Verfügung, wenn sie ausgeführt werden. Dies führt zu einer weiteren Verbesserung unserer vorherigen Hauptschleifen.

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

Weitere Optimierungen sind möglich und es hängt wirklich davon ab, was Ihr Spiel erreichen möchte. Ihr Spielgenre wird offensichtlich einen Unterschied machen, aber es könnte noch subtiler sein. Sie könnten jeden Pixel einzeln auf einer Leinwand zeichnen oder Sie könnten DOM-Elemente (einschließlich mehrerer WebGL-Leinwände mit transparenten Hintergründen, wenn Sie möchten) in eine komplexe Hierarchie schichten. Jeder dieser Wege wird zu unterschiedlichen Möglichkeiten und Einschränkungen führen.

## Es ist Entscheidung… Zeit

Sie müssen schwierige Entscheidungen über Ihre Hauptschleife treffen: wie man den genauen Verlauf der Zeit simuliert. Wenn Sie eine Kontrolle pro Bild verlangen, dann müssen Sie bestimmen, wie häufig Ihr Spiel aktualisiert und gezeichnet wird. Sie könnten sogar möchten, dass Aktualisieren und Zeichnen mit unterschiedlichen Raten geschieht. Sie müssen auch berücksichtigen, wie Ihr Spiel abstürzt, wenn das System des Nutzers mit der Arbeitslast nicht Schritt halten kann. Gehen wir davon aus, dass Sie Benutzereingaben behandeln und den Spielstatus jedes Mal, wenn Sie zeichnen, aktualisieren. Wir werden später verzweigen.

> [!NOTE]
> Die Änderung der Art und Weise, wie Ihre Hauptschleife mit der Zeit umgeht, ist überall ein Debugging-Alptraum. Überlegen Sie sorgfältig Ihre Anforderungen, bevor Sie an Ihrer Hauptschleife arbeiten.

### Wie die meisten Browserspiele aussehen sollten

Wenn Ihr Spiel die maximale Bildwiederholrate jeder von Ihnen unterstützten Hardware erreichen kann, dann ist Ihre Aufgabe ziemlich einfach. Sie können aktualisieren, rendern und dann nichts tun bis VSync.

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

Wenn die maximale Bildwiederholrate nicht erreicht werden kann, könnten die Qualitätseinstellungen angepasst werden, um unter Ihrem Zeitbudget zu bleiben. Das berühmteste Beispiel für dieses Konzept ist das Spiel von id Software, RAGE. Dieses Spiel entzog dem Benutzer die Kontrolle, um seine Berechnungszeit bei etwa 16ms (oder etwa 60fps) zu halten. Wenn die Berechnung zu lange dauerte, verringerte sich die Auflösung, Texturen und andere Assets wurden nicht geladen oder gezeichnet und so weiter. Diese (nicht-webbasierte) Fallstudie machte einige Annahmen und Kompromisse:

- Jedes Animationsbild berücksichtigt Benutzereingaben.
- Kein Bild muss extrapoliert (geschätzt) werden, da jeder Zeichenvorgang sein eigenes Update hat.
- Simulationssysteme können im Wesentlichen davon ausgehen, dass jedes vollständige Update \~16ms auseinander liegt.
- Dem Benutzer die Kontrolle über die Qualitätseinstellungen zu geben wäre ein Albtraum.
- Unterschiedliche Monitoreingaben mit unterschiedlichen Raten: 30 FPS, 75 FPS, 100 FPS, 120 FPS, 144 FPS, etc.
- Systeme, die 60 FPS nicht halten können, verlieren an visueller Qualität, um das Spiel in optimalem Tempo zu halten (schließlich scheitert es, wenn die Qualität zu gering wird).

### Andere Wege, um variable Bildwiederholraten zu handhaben

Andere Methoden zur Bewältigung des Problems existieren.

Eine häufige Technik ist es, die Simulation mit einer konstanten Frequenz zu aktualisieren und dann so viele (oder so wenige) der tatsächlichen Bilder wie möglich zu zeichnen. Die Aktualisierungsmethode kann weiterlaufen, ohne sich darum zu kümmern, was der Benutzer sieht. Die Zeichnen-Methode kann die letzte Aktualisierung betrachten und wann sie stattgefunden hat. Da Zeichnen weiß, wann es darstellt, und die Simulationszeit für die letzte Aktualisierung, kann sie einen plausiblen Rahmen voraussagen, um ihn dem Benutzer zu zeigen. Es spielt keine Rolle, ob dies häufiger ist als die offizielle Aktualisierungsschleife (oder sogar weniger oft). Die Aktualisierungsmethode setzt Kontrollpunkte und die Render-Methode zeichnet, so häufig das System erlaubt, Momente der Zeit um sie herum. Es gibt viele Möglichkeiten, die Aktualisierungsmethode in Webstandards zu trennen:

- Zeichnen auf `requestAnimationFrame` und Aktualisieren auf einem [`setInterval()`](/de/docs/Web/API/SetInterval) oder [`setTimeout()`](/de/docs/Web/API/SetTimeout).

  - Dies verbraucht Prozessorzeit, auch wenn es nicht im Vordergrund oder minimiert ist, belastet den Hauptthread und ist wahrscheinlich ein Überbleibsel traditioneller Spielschleifen (aber es ist einfach).

- Zeichnen auf `requestAnimationFrame` und Aktualisieren auf einem `setInterval` oder `setTimeout` in einem [Web Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers).

  - Dies ist dasselbe wie oben, außer dass die Aktualisierung den Hauptthread nicht belastet (und umgekehrt). Dies ist eine komplexere Lösung und könnte zu viel Aufwand für einfache Aktualisierungen sein.

- Zeichnen auf `requestAnimationFrame` und Verwendung dieses, um einen Web Worker mit der Aktualisierungsmethode mit der Anzahl der zu berechnenden Ticks, falls vorhanden, zu stupsen.

  - Dies schläft, bis `requestAnimationFrame` aufgerufen wird und verschmutzt nicht den Hauptthread, plus man verlässt sich nicht auf altmodische Methoden. Wiederum ist dies ein wenig komplexer als die vorherigen beiden Optionen, und das _Starten_ jeder Aktualisierung wird blockiert, bis der Browser sich entschließt, rAF-Rückrufe auszuführen.

Jede dieser Methoden hat ähnliche Kompromisse:

- Benutzer können Frames überspringen oder zusätzliche interpolieren, je nach Leistung.
- Sie können sich darauf verlassen, dass alle Benutzer nicht-kosmetische Variablen mit der gleichen konstanten Frequenz minus Aussetzer aktualisieren.
- Deutlich komplizierter zu programmieren als die grundlegenden Schleifen, die wir zuvor gesehen haben.
- Benutzereingaben werden vollständig ignoriert, bis zur nächsten Aktualisierung (auch wenn das Gerät des Nutzers schnell ist).
- Die obligatorische Interpolation hat eine Leistungseinbuße.

Eine separate Aktualisieren- und Zeichnen-Methode könnte wie das folgende Beispiel aussehen. Zum Zwecke der Demonstration basiert das Beispiel auf dem dritten Aufzählungspunkt, nur ohne Web Workers zur Lesbarkeit (und, seien wir ehrlich, zur Schreibbarkeit).

> [!WARNING]
> Dieses Beispiel bedarf speziell der technischen Überprüfung.

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

Eine weitere Alternative ist es, bestimmte Dinge seltener zu tun. Wenn ein Teil Ihrer Aktualisierungsschleife schwierig zu berechnen, aber unempfindlich gegen die Zeit ist, könnten Sie in Betracht ziehen, seine Frequenz zurückzuschrauben und idealerweise über diesen verlängerten Zeitraum in Stücke zu verteilen. Ein implizites Beispiel dafür fand sich im The Artillery Blog für Artillery Games, wo sie [ihre Rate der Müllgenerierung anpassen](https://web.archive.org/web/20161021030645/http://blog.artillery.com/2012/10/browser-garbage-collection-and-framerate.html), um die Müllsammlung zu optimieren. Offensichtlich ist das Aufräumen von Ressourcen nicht zeitkritisch (insbesondere wenn das Aufräumen störender ist als der Müll selbst).

Dies kann auch für einige Ihrer eigenen Aufgaben gelten. Diese sind gute Kandidaten, um gedrosselt zu werden, wenn verfügbare Ressourcen zu einem Problem werden.

## Zusammenfassung

Ich möchte klarstellen, dass jeder der oben genannten Punkte, oder keiner von ihnen, das Beste für Ihr Spiel sein könnte. Die richtige Entscheidung hängt völlig von den Kompromissen ab, die Sie bereit (und nicht bereit) sind einzugehen. Die Sorge ist vor allem das Wechseln zu einer anderen Option. Glücklicherweise habe ich keine Erfahrung damit, aber ich habe gehört, es sei ein qualvolles Spiel von Whack-a-Mole.

Eine wichtige Erinnerung für verwaltete Plattformen wie das Web ist, dass Ihre Schleife die Ausführung für bedeutende Zeitabschnitte stoppen kann. Dies könnte auftreten, wenn der Benutzer Ihren Tab abwählt und der Browser seine `requestAnimationFrame`-Intervall-Rückrufe schläft (oder verlangsamt). Sie haben viele Möglichkeiten, mit dieser Situation umzugehen, und dies könnte davon abhängen, ob Ihr Spiel Einzelspieler oder Mehrspieler ist. Einige Möglichkeiten sind:

- Betrachten Sie die Lücke als "Pause" und überspringen Sie die Zeit.

  - Sie können sich wahrscheinlich vorstellen, wie problematisch dies für die meisten Mehrspieler-Spiele ist.

- Sie können die Lücke simulieren, um aufzuschließen.

  - Das kann ein Problem für lange Unterbrechungen und/oder komplexe Aktualisierungen sein.

- Sie können den Spielzustand von einem Peerspieler oder dem Server wiederherstellen.

  - Dies ist ineffektiv, wenn Ihre Peers oder der Server ebenfalls veraltete Daten haben oder sie nicht existieren, weil das Spiel ein Einzelspielermodus ist und keinen Server hat.

Sobald Ihre Hauptschleife entwickelt wurde und Sie eine Reihe von Annahmen und Kompromissen getroffen haben, die zu Ihrem Spiel passen, liegt es nun daran, Ihre Entscheidungen zu verwenden, um anwendbare Physik, KI, Klänge, Netzwerksynchronisation und alles andere zu berechnen, was Ihr Spiel erfordern könnte.
