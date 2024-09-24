---
title: Anatomie eines Videospiels
slug: Games/Anatomy
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{GamesSidebar}}

Dieser Artikel betrachtet die Anatomie und den Arbeitsablauf eines durchschnittlichen Videospiels aus technischer Sicht, insbesondere wie der Hauptschleifeinsatz ablaufen sollte. Er hilft Anfängern der modernen Spieleentwicklung zu verstehen, was beim Bau eines Spiels erforderlich ist und wie Webstandards wie JavaScript als Werkzeuge genutzt werden können. Auch erfahrene Spieleprogrammierer, die neu in der Webentwicklung sind, könnten davon profitieren.

## Präsentieren, akzeptieren, interpretieren, berechnen, wiederholen

Das Ziel jedes Videospiels ist es, dem Benutzer eine Situation zu **präsentieren**, seine Eingaben zu **akzeptieren**, diese Signale in Aktionen zu **interpretieren** und eine neue Situation zu **berechnen**, die aus diesen Handlungen resultiert. Spiele durchlaufen diese Phasen ständig, immer wieder, bis eine Endbedingung eintritt (wie Gewinnen, Verlieren oder das Beenden, um ins Bett zu gehen). Wenig überraschend entspricht dieses Muster der Programmierung einer Spiele-Engine.

Die Details hängen vom Spiel ab.

Einige Spiele treiben diesen Zyklus durch Benutzereingaben voran. Stellen Sie sich vor, Sie entwickeln ein Spiel vom Typ _"Finde die Unterschiede zwischen diesen beiden ähnlichen Bildern"_. Diese Spiele **präsentieren** dem Benutzer zwei Bilder; sie **akzeptieren** seinen Klick (oder Berührung); sie **interpretieren** die Eingabe als Erfolg, Misserfolg, Pause, Menüinteraktion usw.; schließlich **berechnen** sie eine aktualisierte Szene, die sich aus dieser Eingabe ergibt. Die Spielschleife wird durch die Benutzereingabe vorangetrieben und pausiert, bis diese erfolgt. Dies ist eher ein rundenbasierter Ansatz, der keine ständige Aktualisierung jedes Frames erfordert, sondern nur, wenn der Spieler reagiert.

Andere Spiele verlangen die Kontrolle über jede der kleinstmöglichen Zeitscheiben. Die gleichen Prinzipien wie oben gelten mit einem kleinen Unterschied: Jedes Animationsbild treibt den Zyklus voran und jede Änderung der Benutzereingabe wird zu einem frühestmöglichen Zeitpunkt erfasst. Dieses Modell einmal pro Frame wird in etwas implementiert, das als **Hauptschleife** bezeichnet wird. Wenn Ihre Spielschleife zeitbasiert ist, dann wird dies ihre Autorität sein, der Ihre Simulationen folgen werden.

Aber es könnte keine Steuerung pro Frame benötigen. Ihre Spielschleife könnte der _"Finde die Unterschiede"_-Beispiel ähneln und sich auf Eingabeereignisse stützen. Sie könnte sowohl Eingaben als auch simulierte Zeit erfordern. Sie könnte sogar auf etwas ganz anderem basieren.

Moderne JavaScript — wie in den folgenden Abschnitten beschrieben — macht es zum Glück einfach, eine effiziente Hauptschleife, die einmal pro Frame ausgeführt wird, zu entwickeln. Natürlich wird Ihr Spiel nur so optimiert sein, wie Sie es machen. Wenn es so aussieht, als sollte etwas mit einem selteneren Ereignis verbunden sein, dann ist es oft eine gute Idee, es aus der Hauptschleife herauszulösen (aber nicht immer).

## Eine Hauptschleife in JavaScript erstellen

JavaScript funktioniert am besten mit Ereignissen und Callback-Funktionen. Moderne Browser sind bestrebt, Methoden genau dann aufzurufen, wenn sie benötigt werden und in den Lücken zu ruhen (oder andere Aufgaben zu erledigen). Es ist eine ausgezeichnete Idee, Ihren Code an die Momente anzupassen, die für ihn geeignet sind. Überlegen Sie, ob Ihre Funktion wirklich in einem strikten Zeitintervall, jedes Frame oder nur nach einem anderen Ereignis aufgerufen werden muss. Wenn Sie dem Browser genauer mitteilen, wann Ihre Funktion aufgerufen werden muss, kann der Browser optimieren, wann sie aufgerufen wird. Außerdem macht es wahrscheinlich Ihre Arbeit einfacher.

Einige Codes müssen Frame für Frame ausgeführt werden, also warum diese Funktion an etwas anderes als den Redraw-Zeitplan des Browsers anhängen? Im Web wird [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) die Grundlage der meisten gut programmierten Main Loops sein, die pro Frame laufen. Eine Callback-Funktion muss übergeben werden, wenn sie aufgerufen wird. Diese Callback-Funktion wird zu einem geeigneten Zeitpunkt vor dem nächsten Neuzeichnen ausgeführt. Hier ist ein Beispiel für eine einfache Hauptschleife:

```js
window.main = () => {
  window.requestAnimationFrame(main);

  // Whatever your main loop needs to do
};

main(); // Start the cycle
```

> [!NOTE]
> In jeder der hier besprochenen `main()`-Methoden planen wir ein neues `requestAnimationFrame`, bevor wir den Inhalt unserer Schleife ausführen. Das ist kein Zufall und gilt als Best Practice. Das frühzeitige Aufrufen des nächsten `requestAnimationFrame` stellt sicher, dass der Browser es rechtzeitig erhält, um entsprechend zu planen, selbst wenn Ihr aktuelles Frame sein VSync-Fenster verpasst.

Das obige Codefragment enthält zwei Anweisungen. Die erste Anweisung erstellt eine Funktion als globale Variable namens `main()`. Diese Funktion erledigt einige Aufgaben und weist den Browser auch an, sich im nächsten Frame mit `window.requestAnimationFrame()` erneut aufzurufen. Die zweite Anweisung ruft die in der ersten Anweisung definierte `main()`-Funktion auf. Da `main()` einmal in der zweiten Anweisung und bei jedem Aufruf in die Warteschlange der Dinge, die im nächsten Frame zu tun sind, gestellt wird, wird `main()` mit der Bildrate synchronisiert.

Natürlich ist diese Schleife nicht perfekt. Bevor wir besprechen, wie man sie ändert, lassen Sie uns diskutieren, was sie bereits gut macht.

Das Timing der Hauptschleife, wenn der Browser auf das Display malt, ermöglicht es Ihnen, Ihre Schleife so häufig auszuführen, wie der Browser malen möchte. Sie erhalten die Kontrolle über jedes Animationsbild. Es ist auch sehr einfach, da `main()` die einzige Funktion ist, die in einer Schleife ausgeführt wird. Ein Ego-Shooter (oder ein ähnliches Spiel) präsentiert jede Sekunde eine neue Szene. Glatter und reaktionsschneller kann man kaum werden.

Aber nehmen Sie nicht sofort an, dass Animationen eine Kontrolle Frame für Frame erfordern. Einfache Animationen können leicht durchgeführt werden, sogar GPU-beschleunigt, mit CSS-Animationen und anderen Tools, die im Browser enthalten sind. Davon gibt es viele und sie machen Ihnen das Leben leichter.

## Eine bessere Hauptschleife in JavaScript erstellen

Es gibt zwei offensichtliche Probleme mit unserer vorherigen Hauptschleife: `main()` verunreinigt das [`window`](/de/docs/Web/API/Window)-Objekt (wo alle globalen Variablen gespeichert werden) und der Beispielcode ließ uns keine Möglichkeit, die Schleife zu stoppen, es sei denn, der gesamte Tab wird geschlossen oder aktualisiert. Für das erste Problem: Wenn Sie möchten, dass die Hauptschleife einfach läuft und Sie keinen einfachen (direkten) Zugriff darauf benötigen, könnten Sie sie als Eine Sofortige Funktionserklärung (IIFE) erstellen.

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

Wenn der Browser auf dieses IIFE stößt, wird er Ihre Hauptschleife definieren und sofort für das nächste Frame in die Warteschlange stellen. Es wird an kein Objekt angehängt und `main` (oder `main()` für Methoden) wird ein gültiger unbenutzter Name im Rest der Anwendung sein, der frei als etwas anderes definiert werden kann.

> [!NOTE]
> In der Praxis ist es gebräuchlicher, das nächste `requestAnimationFrame()` mit einer If-Anweisung zu verhindern, als `cancelAnimationFrame()` aufzurufen.

Für das zweite Problem, das Stoppen der Hauptschleife, müssen Sie den Aufruf von `main()` mit [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) abbrechen. Sie müssen `cancelAnimationFrame()` das ID-Token übergeben, das von `requestAnimationFrame()` bei seinem letzten Aufruf zurückgegeben wurde. Lassen Sie uns annehmen, dass die Funktionen und Variablen Ihres Spiels auf einem Namensraum basieren, den Sie `MyGame` genannt haben. Wenn wir unser letztes Beispiel erweitern, würde die Hauptschleife jetzt so aussehen:

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

Wir haben nun eine Variable in unserem `MyGame` Namensraum deklariert, die wir `stopMain` nennen, die die ID enthält, die von unserem letzten Aufruf der Hauptschleife an `requestAnimationFrame()` zurückgegeben wurde. Jederzeit können wir die Hauptschleife stoppen, indem wir dem Browser sagen, dass er die Anfrage abbrechen soll, die unserem Token entspricht.

```js
window.cancelAnimationFrame(MyGame.stopMain);
```

Der Schlüssel zur Programmierung einer Hauptschleife in JavaScript besteht darin, sie an das Ereignis anzuhängen, das Ihre Aktion antreiben soll, und darauf zu achten, wie die verschiedenen beteiligten Systeme zusammenwirken. Sie können mehrere Komponenten haben, die von verschiedenen Typen von Ereignissen angetrieben werden. Dies fühlt sich wie unnötige Komplexität an, könnte aber einfach eine gute Optimierung sein (muss natürlich nicht). Das Problem ist, dass Sie keine typische Hauptschleife programmieren. In JavaScript verwenden Sie die Hauptschleife des Browsers und versuchen, diese effektiv zu nutzen.

## Eine optimiertere Hauptschleife in JavaScript erstellen

Letztlich läuft im JavaScript der Browser seine eigene Hauptschleife und Ihr Code existiert in einigen ihrer Phasen. Die obigen Abschnitte beschreiben Hauptschleifen, die versuchen, dem Browser nicht die Kontrolle zu entreißen. Diese Hauptmethoden hängen sich an `window.requestAnimationFrame()`, was den Browser um die Kontrolle über das bevorstehende Frame bittet. Es liegt am Browser, wie er diese Anfragen zu seiner Hauptschleife in Beziehung setzt. Die [W3C-Spezifikation für requestAnimationFrame](https://www.w3.org/TR/animation-timing/) definiert nicht genau, wann die Browser die requestAnimationFrame-Callbacks ausführen müssen. Dies kann von Vorteil sein, da es den Anbietern von Browsern freisteht, mit den ihrer Meinung nach besten Lösungen zu experimentieren und diese im Laufe der Zeit anzupassen.

Moderne Versionen von Firefox und Google Chrome (und wahrscheinlich andere) _versuchen_, die `requestAnimationFrame`-Callbacks mit ihrem Hauptthread zu Beginn eines Frame-Zeitslots zu verbinden. Der Hauptthread des Browsers _versucht_ daher, folgendermaßen auszusehen:

1. Starten eines neuen Frames (während der vorherige Frame von der Anzeige gehandhabt wird).
2. Durchgehen der Liste von `requestAnimationFrame`-Callbacks und deren Ausführung.
3. Bereinigung von Speicher und andere Aufgaben pro Frame, wenn die obigen Callbacks den Hauptthread nicht mehr kontrollieren.
4. Schlafen (es sei denn, ein Ereignis unterbricht das Nickerchen des Browsers), bis der Monitor bereit für Ihr Bild ist ([VSync](https://www.techopedia.com/definition/92/vertical-sync-vsync)) und Wiederholen.

Sie können sich vorstellen, dass die Entwicklung von Echtzeitanwendungen darin besteht, ein Zeitbudget zur Verfügung zu haben, um Arbeiten zu erledigen. Alle oben genannten Schritte müssen alle 16,5 Millisekunden durchgeführt werden, um mit einem 60-Hz-Bildschirm Schritt zu halten. Browser rufen Ihren Code so früh wie möglich auf, um ihm maximale Rechenzeit zu geben. Ihr Hauptthread wird häufig Arbeitslasten starten, die nicht einmal auf dem Hauptthread sind (wie Rasterisierung oder Shader in WebGL). Lange Berechnungen können gleichzeitig auf einem Web Worker oder einer GPU durchgeführt werden, während der Browser seinen Hauptthread verwendet, um Speicherbereinigung, andere Aufgaben oder das Handling von asynchronen Ereignissen zu verwalten.

Da wir gerade beim Thema Zeitbudgetierung sind, viele Webbrowser haben ein Tool namens _High Resolution Time_. Das {{jsxref("Date")}}-Objekt ist nicht mehr die anerkannte Methode zur Zeitmessung von Ereignissen, da es sehr unpräzise und vom Systemuhr veränderbar ist. High Resolution Time dagegen zählt die Anzahl der Millisekunden seit `navigationStart` (wenn das vorherige Dokument entladen wird). Dieser Wert wird als Dezimalzahl zurückgegeben, die auf ein Tausendstel einer Millisekunde genau ist. Es wird als [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) bezeichnet, ist aber praktisch eine Fließkommazahl.

> [!NOTE]
> Systeme (Hardware oder Software), die keine Mikrosekundengenauigkeit bieten können, dürfen eine Millisekundengenauigkeit als Mindestwert bereitstellen. Sie sollten jedoch, wenn sie dazu in der Lage sind, eine Genauigkeit von 0,001 ms bieten.

Dieser Wert ist allein nicht besonders nützlich, da er relativ zu einem wenig interessanten Ereignis ist, aber er kann von einem anderen Zeitstempel subtrahiert werden, um genau und präzise zu ermitteln, wie viel Zeit zwischen diesen beiden Punkten verstrichen ist. Um einen dieser Zeitstempel zu erhalten, können Sie `window.performance.now()` aufrufen und das Ergebnis als Variable speichern.

```js
const tNow = window.performance.now();
```

Zurück zum Thema der Hauptschleife. Sie möchten oft wissen, wann Ihre Hauptfunktion aufgerufen wurde. Da dies häufig vorkommt, liefert `window.requestAnimationFrame()` immer einen `DOMHighResTimeStamp` an Callbacks als Argument, wenn diese ausgeführt werden. Dies führt zu einer weiteren Verbesserung unserer vorherigen Hauptschleifen.

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

Weitere Optimierungen sind möglich und es kommt wirklich darauf an, was Ihr Spiel zu erreichen versucht. Ihr Spielgenre wird offensichtlich einen Unterschied machen, aber es könnte sogar subtiler sein als das. Sie könnten jedes Pixel einzeln auf eine Leinwand zeichnen oder DOM-Elemente (einschließlich mehrerer WebGL-Leinwände mit transparenten Hintergründen, wenn Sie möchten) in eine komplexe Hierarchie schichten. Jeder dieser Wege wird zu unterschiedlichen Möglichkeiten und Einschränkungen führen.

## Es ist Entscheidungszeit

Sie müssen schwierige Entscheidungen über Ihre Hauptschleife treffen: Wie man den genauen Fortschritt der Zeit simuliert. Wenn Sie eine Kontrolle pro Frame verlangen, müssen Sie bestimmen, wie häufig Ihr Spiel aktualisiert und gezeichnet wird. Sie möchten möglicherweise auch, dass Aktualisierung und Zeichnen mit unterschiedlichen Geschwindigkeiten erfolgen. Sie müssen auch überlegen, wie anmutig Ihr Spiel scheitern wird, wenn das System des Benutzers mit der Arbeitslast nicht Schritt halten kann. Lassen Sie uns beginnen, indem wir annehmen, dass Sie Benutzereingaben behandeln und den Spielstatus jedes Mal aktualisieren, wenn Sie zeichnen. Wir werden später abzweigen.

> [!NOTE]
> Die Änderung, wie Ihre Hauptschleife mit der Zeit umgeht, ist überall ein Debugging-Albtraum. Überlegen Sie sich sorgfältig Ihre Bedürfnisse, bevor Sie an Ihrer Hauptschleife arbeiten.

### Wie die meisten Browser-Spiele aussehen sollten

Wenn Ihr Spiel die maximale Bildwiederholrate aller von Ihnen unterstützten Hardware erreichen kann, ist Ihre Aufgabe ziemlich einfach. Sie können aktualisieren, rendern und dann nichts tun, bis VSync.

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

Wenn die maximale Bildwiederholrate nicht erreicht werden kann, könnten Qualitätseinstellungen angepasst werden, um unter Ihrem Zeitbudget zu bleiben. Das bekannteste Beispiel für dieses Konzept ist das Spiel von id Software, RAGE. Dieses Spiel entzieht dem Benutzer die Kontrolle, um seine Rechenzeit auf etwa 16 ms (oder etwa 60 fps) zu halten. Wenn die Berechnung zu lange dauert, würde die render Veerückte

Version auf ein niedrigeres Bildauflösungsniveau reduziert, Texturen und andere Assets würden nicht geladen oder gezeichnet usw. Diese (nicht-webbasierte) Fallstudie machte einige Annahmen und Kompromisse:

- Jedes Animations-Frame berücksichtigt die Benutzereingaben.
- Kein Frame muss extrapoliert (geraten) werden, da jedes Frame seine eigene Aktualisierung hat.
- Simulationssysteme können im Großen und Ganzen annehmen, dass jede vollständige Aktualisierung \~16 ms auseinanderliegt.
- Dem Benutzer die Kontrolle über die Qualitätseinstellungen zu geben wäre ein Albtraum.
- Unterschiedliche Monitore geben Input mit unterschiedlichen Raten: 30 FPS, 75 FPS, 100 FPS, 120 FPS, 144 FPS, usw.
- Systeme, die nicht mit 60 FPS mithalten können, verlieren die visuelle Qualität, um das Spiel bei optimaler Geschwindigkeit zu halten (letztendlich scheitert es völlig, wenn die Qualität zu niedrig wird).

### Andere Methoden, um variable Erfrischungsratenanforderungen zu handhaben

Es gibt andere Methoden, das Problem anzugehen.

Eine gängige Technik besteht darin, die Simulation mit einer konstanten Frequenz zu aktualisieren und dann so viele (oder so wenige) der tatsächlichen Frames wie möglich zu zeichnen. Die Aktualisierungsmethode kann weiterlaufen, ohne sich darum zu kümmern, was der Benutzer sieht. Die Zeichnen-Methode kann die letzte Aktualisierung und wann sie stattgefunden hat, sehen. Da die Zeichnungsmethode weiß, wann sie darstellt, und die Simulationszeit für die letzte Aktualisierung, kann sie für den Benutzer ein plausibles Frame vorhersagen. Es spielt keine Rolle, ob dies häufiger als die offizielle Aktualisierungsschleife ist (oder sogar weniger häufig). Die Aktualisierungsmethode setzt Kontrollpunkte und, so häufig wie das System es zulässt, zeichnet die Render-Methode Momente der Zeit um diese herum. Es gibt viele Möglichkeiten, die Aktualisierungsmethode in Webstandards zu trennen:

- Zeichnen bei `requestAnimationFrame()` und aktualisieren bei einem [`setInterval()`](/de/docs/Web/API/Window/setInterval) oder [`setTimeout()`](/de/docs/Web/API/Window/setTimeout).

  - Dies nutzt die Prozessorzeit, selbst wenn sie nicht im Fokus oder minimiert ist, blockiert den Hauptthread und ist wahrscheinlich ein Artefakt traditioneller Hauptschleifen (aber es ist einfach.)

- Zeichnen bei `requestAnimationFrame()` und aktualisieren bei einem [`setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) oder [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) in einem [Web Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers).

  - Dies ist das gleiche wie oben, außer dass die Aktualisierung den Hauptthread nicht blockiert (noch blockiert der Hauptthread sie). Dies ist eine kompliziertere Lösung und könnte zu viel Overhead für einfache Aktualisierungen sein.

- Zeichnen bei `requestAnimationFrame()` und verwenden, um einen Web Worker mit der Aktualisierungsmethode zu stoßen, mit der Anzahl der Berechnungen, die ausgeführt werden müssen, falls vorhanden.

  - Dies schläft, bis `requestAnimationFrame()` aufgerufen wird und verunreinigt den Hauptthread nicht, und Sie verlassen sich nicht auf altmodische Methoden. Nochmals, dies ist etwas komplexer als die vorherigen zwei Optionen, und das _Starten_ jeder Aktualisierung wird blockiert, bis der Browser rAF-Callbacks feuert.

Jede dieser Methoden hat ähnliche Kompromisse:

- Benutzer können das Rendern von Frames überspringen oder zusätzliche interpolieren, je nach ihrer Leistung.
- Sie können darauf zählen, dass alle Benutzer nicht-kosmetische Variablen mit der gleichen konstanten Frequenz minus Hiccups aktualisieren.
- Viel komplizierter zu programmieren als die grundlegenden Schleifen, die wir zuvor gesehen haben.
- Benutzereingaben werden völlig ignoriert, bis die nächste Aktualisierung erfolgt (selbst wenn der Benutzer ein schnelles Gerät hat).
- Die verpflichtende Interpolation hat einen Leistungsabfall.

Eine separate Methode für Aktualisierungen und Zeichnungen könnte wie das folgende Beispiel aussehen. Zum Zwecke der Demonstration basiert das Beispiel auf der dritten Aufzählung, nur ohne die Verwendung von Web Works für die Lesbarkeit (und seien wir ehrlich, die Schreibbarkeit).

> [!WARNING]
> Dieses Beispiel speziell ist in technischer Überprüfung nötig.

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

Eine weitere Alternative besteht darin, bestimmte Dinge seltener auszuführen. Wenn ein Teil Ihrer Aktualisierungsschleife schwer zu berechnen, aber unempfindlich gegenüber Zeit ist, könnten Sie in Betracht ziehen, seine Frequenz zu drosseln und idealerweise in Stücke über diesen verlängerten Zeitraum zu verteilen. Ein implizites Beispiel hierfür war auf dem Artillery-Blog für die Artillery-Games zu finden, wo sie [ihre Rate der Müllgenerierung anpassen](https://web.archive.org/web/20161021030645/http://blog.artillery.com/2012/10/browser-garbage-collection-and-framerate.html), um die Müllsammlung zu optimieren. Offensichtlich ist das Aufräumen von Ressourcen nicht zeitkritisch (besonders wenn das Ordnen störender ist als der Müll selbst).

Dies könnte auch auf einige Ihrer eigenen Aufgaben zutreffen. Dies sind gute Kandidaten, um gedrosselt zu werden, wenn verfügbare Ressourcen ein Problem darstellen.

## Zusammenfassung

Ich möchte klarstellen, dass eines der oben genannten oder keines davon das Beste für Ihr Spiel sein könnte. Die richtige Entscheidung hängt ganz von den Kompromissen ab, die Sie bereit (und nicht bereit) sind einzugehen. Das Anliegen liegt hauptsächlich darin, zu einer anderen Option zu wechseln. Zum Glück habe ich keine Erfahrung damit, aber ich habe gehört, dass es ein qualvolles Spiel von Whack-a-Mole ist.

Eine wichtige Sache, die man für verwaltete Plattformen wie das Web beachten sollte, ist, dass Ihre Schleife für erhebliche Zeiträume die Ausführung einstellen könnte. Dies könnte passieren, wenn der Benutzer Ihren Tab abwählt und der Browser sein `requestAnimationFrame`-Callback-Intervall verlangsamt (oder verlangsamt). Sie haben viele Möglichkeiten, mit dieser Situation umzugehen, und dies könnte davon abhängen, ob Ihr Spiel Einzelspieler oder Mehrspieler ist. Einige Möglichkeiten sind:

- Betrachten Sie die Lücke als "Pause" und überspringen Sie die Zeit.

  - Sie können wahrscheinlich erkennen, wie problematisch dies für die meisten Mehrspielerspiele ist.

- Sie können die Lücke simulieren, um aufzuholen.

  - Dies kann ein Problem für lange Ausfälle und/oder komplexe Aktualisierungen sein.

- Sie können den Spielstatus von einem Peer oder dem Server wiederherstellen.

  - Dies ist ineffektiv, wenn Ihre Peers oder der Server auch veraltet sind oder sie nicht existieren, weil das Spiel ein Einzelspieler-Spiel ist und keinen Server hat.

Sobald Ihre Hauptschleife entwickelt und Sie sich auf eine Reihe von Annahmen und Kompromissen festgelegt haben, die zu Ihrem Spiel passen, ist es nun nur noch eine Frage, Ihre Entscheidungen zu nutzen, um die nötige Physik, KI, Sounds, Netzwerksynchronisation und was auch immer Ihr Spiel erfordern mag, zu berechnen.
