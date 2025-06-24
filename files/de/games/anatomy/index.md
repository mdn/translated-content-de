---
title: Anatomie eines Videospiels
slug: Games/Anatomy
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{GamesSidebar}}

Dieser Artikel betrachtet die Anatomie und den Ablauf eines durchschnittlichen Videospiels aus technischer Sicht, insbesondere wie die Hauptschleife ablaufen sollte. Er hilft Anfängern in der modernen Spieleentwicklung zu verstehen, was beim Erstellen eines Spiels erforderlich ist und wie sich Webstandards wie JavaScript als Werkzeuge eignen. Auch erfahrene Spieleprogrammierer, die neu in der Webentwicklung sind, können davon profitieren.

## Präsentieren, annehmen, interpretieren, berechnen, wiederholen

Das Ziel jedes Videospiels ist es, den Benutzer(n) eine Situation zu **präsentieren**, ihre Eingabe zu **akzeptieren**, diese Signale in Aktionen zu **interpretieren** und eine neue Situation als Ergebnis dieser Handlungen zu **berechnen**. Spiele schleifen ständig durch diese Phasen, immer wieder, bis ein Endzustand eintritt (wie Sieg, Niederlage oder Ausstieg, um schlafen zu gehen). Nicht überraschend, entspricht dieses Muster der Programmierung einer Spiel-Engine.

Die Details hängen vom Spiel ab.

Einige Spiele treiben diesen Zyklus durch Benutzereingaben voran. Stellen Sie sich vor, Sie entwickeln ein Spiel vom Typ _"Finde die Unterschiede zwischen diesen beiden ähnlichen Bildern"_. Diese Spiele **präsentieren** dem Benutzer zwei Bilder; sie **akzeptieren** ihren Klick (oder Touch); sie **interpretieren** die Eingabe als Erfolg, Misserfolg, Pause, Menüinteraktion usw.; schließlich **berechnen** sie eine aktualisierte Szene als Ergebnis dieser Eingabe. Die Spielschleife wird durch die Eingabe des Benutzers vorangetrieben und ruht, bis sie diese bereitstellen. Dies ist eher ein rundenbasierter Ansatz, der nicht bei jedem Frame eine ständige Aktualisierung erfordert, sondern nur, wenn der Spieler reagiert.

Andere Spiele erfordern die Kontrolle über jede der kleinstmöglichen Zeiteinheiten. Die gleichen Prinzipien wie oben gelten mit einem kleinen Twist: Jedes Animationsbild führt den Zyklus fort, und jede Änderung in der Benutzereingabe wird bei der ersten verfügbaren Gelegenheit abgefangen. Dieses Modell, einmal pro Frame, wird in etwas umgesetzt, das als **Hauptschleife** bezeichnet wird. Wenn sich Ihr Spiel auf Basis der Zeit schleift, dann wird dies die Autorität sein, an die sich Ihre Simulationen halten.

Aber es könnte keine Kontrolle pro Frame benötigen. Ihre Spielschleife ähnelt vielleicht dem Beispiel _Finde die Unterschiede_ und basiert auf Eingabeereignissen. Es könnte sowohl Eingaben als auch simulierte Zeit erfordern. Es könnte sich sogar auf etwas ganz anderes schleifen.

Das moderne JavaScript — wie in den nächsten Abschnitten beschrieben — macht es glücklicherweise einfach, eine effiziente Hauptschleife zu entwickeln, die einmal pro Frame ausgeführt wird. Natürlich wird Ihr Spiel nur so optimiert sein, wie Sie es gestalten. Wenn etwas so aussieht, als sollte es an ein selteneres Ereignis angehängt werden, ist es oft eine gute Idee, es aus der Hauptschleife herauszubrechen (aber nicht immer).

## Aufbau einer Hauptschleife in JavaScript

JavaScript arbeitet am besten mit Ereignissen und Callback-Funktionen. Moderne Browser bemühen sich, Methoden genau dann aufzurufen, wenn sie benötigt werden, und ruhen (oder erledigen andere Aufgaben) in den Zwischenzeiten. Es ist eine ausgezeichnete Idee, Ihren Code an den für ihn geeigneten Momenten anzuhängen. Überlegen Sie, ob Ihre Funktion wirklich in einem strengen Zeitintervall, bei jedem Frame oder erst nach einem anderen Ereignis aufgerufen werden muss. Genauere Angaben gegenüber dem Browser, wann Ihre Funktion aufgerufen werden muss, ermöglichen es dem Browser, die Aufrufe zu optimieren. Außerdem wird es wahrscheinlich Ihre Arbeit erleichtern.

Einige Codes müssen frameweise ausgeführt werden, warum also diese Funktion an etwas anderes als den Neuzeichenzeitplan des Browsers anhängen? Im Web wird [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) die Grundlage der meisten gut programmierten pro-Frame-Hauptschleifen sein. Eine Callback-Funktion muss übergeben werden, wenn sie aufgerufen wird. Diese Callback-Funktion wird zu einem geeigneten Zeitpunkt vor dem nächsten Neuzeichnen ausgeführt. Hier ein Beispiel für eine einfache Hauptschleife:

```js
window.main = () => {
  window.requestAnimationFrame(main);

  // Whatever your main loop needs to do
};

main(); // Start the cycle
```

> [!NOTE]
> In jeder der hier besprochenen `main()`-Methoden planen wir ein neues `requestAnimationFrame` ein, bevor wir den Schleifeninhalt ausführen. Das ist kein Zufall und wird als bewährte Praxis angesehen. Das frühe Aufrufen des nächsten `requestAnimationFrame` stellt sicher, dass der Browser es rechtzeitig erhält, um entsprechend zu planen, auch wenn Ihr aktueller Frame sein VSync-Fenster verpasst.

Der obige Codeausschnitt hat zwei Anweisungen. Die erste Anweisung erstellt eine Funktion als globale Variable namens `main()`. Diese Funktion erledigt einige Aufgaben und weist den Browser auch an, sich im nächsten Frame mit `window.requestAnimationFrame()` erneut aufzurufen. Die zweite Anweisung ruft die `main()`-Funktion auf, die in der ersten Anweisung definiert wurde. Da `main()` einmal in der zweiten Anweisung und mit jedem Aufruf selbst in die Warteschlange der Aufgaben für den nächsten Frame eingereiht wird, ist `main()` mit Ihrer Bildrate synchronisiert.

Natürlich ist diese Schleife nicht perfekt. Bevor wir Möglichkeiten zur Änderung diskutieren, lassen Sie uns besprechen, was sie bereits gut macht.

Das Timing der Hauptschleife zu dem Zeitpunkt, an dem der Browser den Bildschirm neu zeichnet, ermöglicht es Ihnen, Ihre Schleife so häufig auszuführen, wie der Browser malen möchte. Sie haben Kontrolle über jeden Animationsframe. Es ist auch sehr einfach, da `main()` die einzige Funktion ist, die in einer Schleife durchläuft. Ein First-Person-Shooter (oder ein ähnliches Spiel) präsentiert einmal pro Frame eine neue Szene. Wirklich flüssiger und reaktionsschneller kann man es kaum bekommen.

Aber nehmen Sie nicht sofort an, dass Animationen eine Kontrolle pro Frame erfordern. Einfache Animationen können leicht durchgeführt werden, sogar GPU-beschleunigt, mit CSS-Animationen und anderen Tools, die im Browser enthalten sind. Es gibt viele davon und sie werden Ihnen das Leben erleichtern.

## Bauen einer besseren Hauptschleife in JavaScript

Es gibt zwei offensichtliche Probleme mit unserer vorherigen Hauptschleife: `main()` verschmutzt das [`window`](/de/docs/Web/API/Window)-Objekt (wo alle globalen Variablen gespeichert werden) und der Beispielcode hinterließ uns keine Möglichkeit, die Schleife _zu stoppen_, es sei denn, der gesamte Tab wird geschlossen oder aktualisiert. Für das erste Problem, wenn Sie möchten, dass die Hauptschleife einfach läuft und Sie keinen einfachen (direkten) Zugriff darauf benötigen, könnten Sie sie als Sofort aufgerufenen Funktionsausdruck (IIFE) erstellen.

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

Wenn der Browser auf dieses IIFE stößt, definiert er Ihre Hauptschleife und stellt sie sofort für den nächsten Frame in die Warteschlange. Sie wird an kein Objekt gebunden und `main` (oder `main()` für Methoden) wird ein gültiger, ungenutzter Name im Rest der Anwendung sein, frei definierbar als etwas anderes.

> [!NOTE]
> In der Praxis ist es häufiger, den nächsten `requestAnimationFrame()` mit einer if-Anweisung zu verhindern, anstatt `cancelAnimationFrame()` aufzurufen.

Für das zweite Problem, das Stoppen der Hauptschleife, müssen Sie den Aufruf von `main()` mit [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) abbrechen. Sie müssen `cancelAnimationFrame()` das ID-Token übergeben, das von `requestAnimationFrame()` beim letzten Aufruf zurückgegeben wurde. Angenommen, die Funktionen und Variablen Ihres Spiels basieren auf einem Namensraum, den Sie `MyGame` genannt haben. Das Erweitern unseres letzten Beispiels würde nun so aussehen:

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

Wir haben jetzt eine Variable in unserem `MyGame`-Namensraum deklariert, die wir `stopMain` nennen, die die ID aus dem letzten Aufruf unserer Hauptschleife von `requestAnimationFrame()` enthält. Zu jedem Zeitpunkt können wir die Hauptschleife stoppen, indem wir dem Browser mitteilen, die Anfrage zu stornieren, die unserem Token entspricht.

```js
window.cancelAnimationFrame(MyGame.stopMain);
```

Der Schlüssel zur Programmierung einer Hauptschleife in JavaScript besteht darin, sie mit dem Ereignis zu verbinden, das Ihre Aktion treiben sollte, und darauf zu achten, wie die unterschiedlichen beteiligten Systeme zusammenwirken. Möglicherweise haben Sie mehrere Komponenten, die durch unterschiedliche Ereignisarten angetrieben werden. Dies fühlt sich wie unnötige Komplexität an, aber es könnte einfach eine gute Optimierung sein (nicht notwendigerweise, natürlich). Das Problem ist, dass Sie keine typische Hauptschleife programmieren. In JavaScript verwenden Sie die Hauptschleife des Browsers und versuchen dies effektiv zu tun.

## Aufbau einer noch optimierteren Hauptschleife in JavaScript

Letztendlich führt der Browser in JavaScript seine eigene Hauptschleife und Ihr Code existiert in einigen ihrer Stadien. Die obigen Abschnitte beschreiben Hauptschleifen, die vermeiden, dem Browser die Kontrolle zu entziehen. Diese Hauptmethoden hängen sich an `window.requestAnimationFrame()`, das den Browser um Kontrolle über den kommenden Frame bittet. Es liegt am Browser, wie er diese Anfragen mit seiner Hauptschleife in Beziehung setzt. Die [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#dom-animationframeprovider-requestanimationframe) definiert nicht wirklich genau, wann die Browser die `requestAnimationFrame`-Callbacks ausführen müssen. Dies kann ein Vorteil sein, da es den Browserherstellern erlaubt, mit den Lösungen zu experimentieren, die sie für am besten halten, und sie im Laufe der Zeit zu optimieren.

Moderne Versionen von Firefox und Google Chrome (und wahrscheinlich auch andere) _versuchen_, `requestAnimationFrame`-Callbacks zu ihrem Hauptthread ganz am Anfang einer Frame-Zeitslice zu verbinden. Der Hauptthread des Browsers _versucht_ daher, wie folgt auszusehen:

1. Beginnen Sie einen neuen Frame (während der vorherige Frame vom Display verarbeitet wird).
2. Gehen Sie durch die Liste der `requestAnimationFrame`-Callbacks und rufen Sie sie auf.
3. Führen Sie eine Speicherbereinigung und andere Aufgaben pro Frame durch, wenn die oben genannten Callbacks aufhören, den Hauptthread zu steuern.
4. Schlafen Sie (es sei denn, ein Ereignis unterbricht das Nickerchen des Browsers), bis der Monitor für Ihr Bild bereit ist ([VSync](https://www.techopedia.com/definition/92/vertical-sync-vsync)) und wiederholen Sie.

Sie können die Entwicklung von Echtzeitanwendungen betrachten, als hätten Sie ein Budget an Zeit, um Arbeit zu erledigen. Alle oben genannten Schritte müssen alle 16,5 Millisekunden stattfinden, um mit einem 60 Hz-Display Schritt zu halten. Browser rufen Ihren Code so früh wie möglich auf, um ihm maximale Rechenzeit zu geben. Ihr Hauptthread wird oft Arbeitslasten starten, die nicht einmal auf dem Hauptthread sind (wie Rasterisierung oder Shader in WebGL). Lange Berechnungen können gleichzeitig auf einem Web Worker oder einer GPU durchgeführt werden, während der Browser seinen Hauptthread zur Verwaltung der Speicherbereinigung, seiner anderen Aufgaben oder zur Verarbeitung asynchroner Ereignisse verwendet.

Apropos Zeitverwaltung, viele Webbrowser haben ein Tool namens _High Resolution Time_. Das {{jsxref("Date")}}-Objekt ist nicht mehr die anerkannte Methode zur Zeitmessung von Ereignissen, da es sehr ungenau ist und durch die Systemuhr manipuliert werden kann. High Resolution Time hingegen zählt die Anzahl der Millisekunden seit `navigationStart` (wenn das vorherige Dokument entladen wird). Dieser Wert wird als Dezimalzahl zurückgegeben, die auf ein Tausendstel einer Millisekunde genau ist. Es wird als [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) bezeichnet, aber im Grunde genommen können Sie es als Gleitkommazahl betrachten.

> [!NOTE]
> Systeme (Hardware oder Software), die nicht in der Lage sind, Mikrosekunden-Genauigkeit zu bieten, dürfen stattdessen eine Millisekunden-Genauigkeit als Minimum bieten. Sie sollten jedoch, wenn möglich, eine Genauigkeit von 0,001ms bereitstellen.

Dieser Wert ist alleine nicht sehr nützlich, da er relativ zu einem ziemlich uninteressanten Ereignis ist, aber er kann von einem anderen Zeitstempel abgezogen werden, um genau und präzise zu bestimmen, wie viel Zeit zwischen diesen beiden Punkten verstrichen ist. Um einen dieser Zeitstempel zu erhalten, können Sie `window.performance.now()` aufrufen und das Ergebnis als Variable speichern.

```js
const tNow = window.performance.now();
```

Zurück zum Thema der Hauptschleife. Sie werden oft wissen wollen, wann Ihre Hauptfunktion aufgerufen wurde. Da dies häufig vorkommt, liefert `window.requestAnimationFrame()` immer ein `DOMHighResTimeStamp` an Callbacks als Argument, wenn sie ausgeführt werden. Dies führt zu einer anderen Verbesserung unserer vorherigen Hauptschleifen.

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

Mehrere weitere Optimierungen sind möglich, und es hängt wirklich davon ab, was Ihr Spiel erreichen will. Ihr Spielgenre wird offensichtlich einen Unterschied machen, aber es könnte sogar subtiler sein. Sie könnten jeden Pixel einzeln auf einer Leinwand zeichnen, oder Sie könnten DOM-Elemente (einschließlich mehrerer WebGL-Leinwände mit transparenten Hintergründen, wenn Sie möchten) in eine komplexe Hierarchie schichten. Jede dieser Pfade führt zu unterschiedlichen Möglichkeiten und Einschränkungen.

## Es ist Entscheidungs...zeit

Sie werden harte Entscheidungen über Ihre Hauptschleife treffen müssen: wie Sie den genauen Fortschritt der Zeit simulieren. Wenn Sie eine pro-Frame-Kontrolle verlangen, müssen Sie bestimmen, wie häufig Ihr Spiel aktualisieren und zeichnen wird. Sie möchten vielleicht sogar, dass Aktualisierung und Zeichnen in unterschiedlichen Geschwindigkeiten stattfinden. Sie werden auch überlegen müssen, wie anmutig Ihr Spiel ausfällt, wenn das System des Benutzers die Arbeitslast nicht bewältigen kann. Lassen Sie uns damit beginnen, dass Sie annehmen, dass Sie bei jedem Zeichnen Benutzereingaben behandeln und den Spielstatus aktualisieren. Wir werden später Zweige daran anknüpfen.

> [!NOTE]
> Das Ändern der Art und Weise, wie Ihre Hauptschleife mit der Zeit umgeht, ist überall ein schwer lösbares Problem beim Debuggen. Denken Sie sorgfältig über Ihre Bedürfnisse nach, bevor Sie an Ihrer Hauptschleife arbeiten.

### Wie die meisten Browser-Spiele aussehen sollten

Wenn Ihr Spiel die maximale Bildwiederholrate von Hardware erreichen kann, die Sie unterstützen, dann ist Ihr Job ziemlich einfach. Sie können aktualisieren, rendern und dann nichts tun, bis VSync.

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

Wenn die maximale Bildwiederholrate nicht erreicht werden kann, könnten Qualitätseinstellungen angepasst werden, um unter Ihrem Zeitbudget zu bleiben. Das bekannteste Beispiel für dieses Konzept ist das Spiel von id Software, RAGE. Dieses Spiel entzog dem Benutzer die Kontrolle, um seine Berechnungszeit auf etwa 16ms (oder etwa 60fps) zu halten. Wenn die Berechnung zu lange dauerte, wurde die gerenderte Auflösung verringert, Texturen und andere Assets wurden nicht geladen oder gezeichnet und so weiter. Diese (nicht-webbasierte) Fallstudie machte einige Annahmen und Kompromisse:

- Jeder Animationsframe berücksichtigt Benutzereingaben.
- Kein Frame muss extrapoliert (geschätzt) werden, da jede Zeichnung ihr eigenes Update hat.
- Simulationssysteme können im Grunde annehmen, dass jede vollständige Aktualisierung \~16ms auseinander liegt.
- Dem Benutzer die Kontrolle über die Qualitätseinstellungen zu geben, wäre ein Albtraum.
- Verschiedene Monitore geben in unterschiedlichen Raten ein: 30 FPS, 75 FPS, 100 FPS, 120 FPS, 144 FPS usw.
- Systeme, die nicht mit 60 FPS Schritt halten können, verlieren an visueller Qualität, um das Spiel in optimaler Geschwindigkeit weiterlaufen zu lassen (schließlich scheitert es vollständig, wenn die Qualität zu niedrig wird.)

### Andere Wege, um variable Bildwiederholraten bedarfsgerecht zu behandeln

Andere Methoden zur Bewältigung des Problems existieren.

Eine häufige Technik besteht darin, die Simulation mit einer konstanten Frequenz zu aktualisieren und dann so viele (oder wenige) der tatsächlichen Frames wie möglich zu zeichnen. Die Aktualisierungsmethode kann ohne Rücksicht darauf, was der Benutzer sieht, weiterlaufen. Die zeichnende Methode kann das letzte Update und wann es stattfand anzeigen. Da die Zeichnung weiß, wann sie repräsentiert, und die Simulationszeit für das letzte Update kennt, kann sie einen plausiblen Frame vorhersagen, den sie dem Benutzer zeichnet. Es ist nicht wichtig, ob dies häufiger als die offizielle Aktualisierungsschleife (oder sogar weniger häufig) erfolgt. Die Aktualisierungsmethode setzt Checkpoints und, so häufig wie das System es erlaubt, zeichnet die Render-Methode Zeitpunkte um diese herum. Es gibt viele Möglichkeiten, die Aktualisierungsmethode in Web-Standards zu trennen:

- Zeichnen auf `requestAnimationFrame()` und Aktualisieren auf einem [`setInterval()`](/de/docs/Web/API/Window/setInterval) oder [`setTimeout()`](/de/docs/Web/API/Window/setTimeout).

  - Dies verbraucht Prozessorzeit, selbst wenn es nicht fokussiert oder minimiert ist, hält den Hauptthread in Bewegung und ist vermutlich ein Artefakt traditioneller Spielschleifen (aber es ist einfach).

- Zeichnen auf `requestAnimationFrame()` und Aktualisieren auf einem [`setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) oder [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) in einem [Web Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers).

  - Dies ist dasselbe wie oben, außer dass die Aktualisierung nicht den Hauptthread blockiert (und umgekehrt). Dies ist eine komplexere Lösung und möglicherweise zu viel Aufwand für einfache Aktualisierungen.

- Zeichnen auf `requestAnimationFrame()` und es verwenden, um einen Web Worker mit der Aktualisierungsmethode mit der Anzahl der zu berechnenden Ticks, falls vorhanden, zu steuern.
  - Dies schläft, bis `requestAnimationFrame()` aufgerufen wird und verschmutzt nicht den Hauptthread, plus Sie verlassen sich nicht auf altmodische Methoden. Wiederum, dies ist etwas komplexer als die vorherigen beiden Optionen, und das _Starten_ jeder Aktualisierung wird blockiert, bis der Browser entscheidet, die rAF-Rückrufe auszulösen.

Jede dieser Methoden hat ähnliche Kompromisse:

- Benutzer können das Rendering von Frames überspringen oder zusätzliche interpolieren, abhängig von ihrer Leistung.
- Sie können darauf zählen, dass alle Benutzer nicht-kosmetische Variablen in der gleichen konstanten Frequenz minus Hiccups aktualisieren.
- Viel komplizierter zu programmieren als die grundlegenden Schleifen, die wir zuvor gesehen haben.
- Benutzereingaben werden vollständig ignoriert, bis zur nächsten Aktualisierung (auch wenn der Benutzer ein schnelles Gerät hat).
- Die obligatorische Interpolation bringt eine Leistungstrafe mit sich.

Eine separate Aktualisierungs- und Zeichnungsmethode könnte wie das folgendes Beispiel aussehen. Um der Demonstration willen, basiert das Beispiel auf dem dritten Aufzählungspunkt, nur ohne die Verwendung von Web Workern zur besseren Lesbarkeit (und, seien wir ehrlich, Schreibbarkeit).

> [!WARNING]
> Dieses Beispiel, speziell, benötigt eine technische Überprüfung.

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

Ein weiteres Alternativmöglichkeit besteht darin, gewisse Dinge seltener auszuführen. Wenn ein Teil Ihrer Aktualisierungsschleife schwer zu berechnen ist, aber nicht zeitkritisch, könnte in Betracht gezogen werden, dessen Häufigkeit zu reduzieren und, idealerweise, ihn über diesen längeren Zeitraum in Stücke zu zerteilen. Ein impliziertes Beispiel dafür war über dem Artillery Blog für Artillery Games zu finden, wo sie [ihre Rate der Müllgenerierung anpassen](https://web.archive.org/web/20161021030645/http://blog.artillery.com/2012/10/browser-garbage-collection-and-framerate.html), um die Müllsammlung zu optimieren. Offensichtlich ist das Aufräumen von Ressourcen nicht zeitkritisch (insbesondere wenn das Aufräumen störender ist als der Müll selbst).

Dies könnte auch auf einige Ihrer eigenen Aufgaben zutreffen. Diese sind gute Kandidaten für eine Drosselung, wenn verfügbare Ressourcen ein Anliegen werden.

## Zusammenfassung

Ich möchte klarstellen, dass alles oben Genannte, oder keines davon, das Beste für Ihr Spiel sein könnte. Die richtige Entscheidung hängt ganz von den Kompromissen ab, die Sie bereit (und unwillig) sind einzugehen. Die Sorge bezieht sich hauptsächlich auf das Umschalten zu einer anderen Option. Glücklicherweise habe ich keine Erfahrung damit, aber ich habe gehört, dass es ein schmerzliches Spiel von Whack-a-Mole ist.

Ein wichtiger Punkt, den man sich bei verwalteten Plattformen, wie dem Web, merken sollte, ist, dass Ihre Schleife für erhebliche Zeiträume gestoppt werden kann. Dies könnte auftreten, wenn der Benutzer Ihren Tab abwählt und der Browser sein `requestAnimationFrame` Callback-Intervall verlangsamt (oder pausiert). Sie haben viele Möglichkeiten, mit dieser Situation umzugehen, und diese könnten davon abhängen, ob Ihr Spiel ein Einzelspieler- oder Mehrspieler-Spiel ist. Einige Optionen sind:

- Betrachten Sie die Lücke als "Pause" und überspringen Sie die Zeit.

  - Sie können wahrscheinlich sehen, wie problematisch das für die meisten Multiplayer-Spiele ist.

- Sie können die Lücke simulieren, um aufzuholen.

  - Dies kann ein Problem für lange Ausfälle und/oder komplexe Aktualisierungen sein.

- Sie können den Spielstand von einem Peer oder dem Server wiederherstellen.
  - Dies ist unwirksam, wenn Ihre Peers oder der Server ebenfalls veraltet sind, oder sie nicht existieren, weil das Spiel ein Einzelspieler-Spiel ist und keinen Server hat.

Sobald Ihre Hauptschleife entwickelt wurde und Sie sich für einen Satz von Annahmen und Kompromissen entschieden haben, die zu Ihrem Spiel passen, geht es jetzt nur noch darum, Ihre Entscheidungen zu verwenden, um etwaige Physik, KI, Sounds, Netzwerksynchronisierung und alles andere zu berechnen, was Ihr Spiel erfordern könnte.
