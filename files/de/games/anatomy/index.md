---
title: Anatomie eines Videospiels
slug: Games/Anatomy
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

Dieser Artikel beleuchtet die Anatomie und den Arbeitsablauf des durchschnittlichen Videospiels aus technischer Sicht, insbesondere wie die Hauptschleife ablaufen sollte. Er hilft Anfängern in der modernen Spieleentwicklung zu verstehen, was beim Erstellen eines Spiels erforderlich ist und wie Webstandards wie JavaScript als Werkzeuge genutzt werden können. Auch erfahrene Spieleprogrammierer, die neu in der Webentwicklung sind, könnten davon profitieren.

## Präsentieren, akzeptieren, interpretieren, berechnen, wiederholen

Das Ziel jedes Videospiels ist es, den Benutzer(n) eine Situation zu **präsentieren**, ihre Eingaben zu **akzeptieren**, diese Signale in Aktionen zu **interpretieren** und eine neue Situation, die sich aus diesen Handlungen ergibt, zu **berechnen**. Spiele durchlaufen diese Phasen ständig wiederholt, bis eine Endbedingung eintritt (wie z.B. Gewinnen, Verlieren oder Beenden, um ins Bett zu gehen). Diese Abfolge entspricht nicht überraschend der Art und Weise, wie eine Spiel-Engine programmiert wird.

Die Details hängen vom Spiel ab.

Einige Spiele treiben diesen Zyklus durch Benutzereingaben an. Stellen Sie sich vor, Sie entwickeln ein Spiel vom Typ _"Finde die Unterschiede zwischen diesen beiden ähnlichen Bildern"_. Diese Spiele **präsentieren** dem Benutzer zwei Bilder; sie **akzeptieren** ihren Klick (oder ihre Berührung); sie **interpretieren** die Eingabe als Erfolg, Misserfolg, Pause, Menüinteraktion usw.; schließlich **berechnen** sie eine aktualisierte Szene, die sich aus dieser Eingabe ergibt. Die Spielschleife wird durch die Benutzereingabe vorangetrieben und ruht, bis diese erfolgt. Dies ist eher ein rundenbasiertes Vorgehen, das nicht von einem dauernden Update in jedem Bildrahmen abhängt, sondern nur, wenn der Spieler reagiert.

Andere Spiele erfordern Kontrolle über jede kleinste mögliche Zeitscheibe. Die gleichen Prinzipien wie oben gelten mit einem kleinen Unterschied: Jeder Animationsrahmen schreitet im Zyklus voran, und jede Änderung der Benutzereingaben wird bei der ersten Gelegenheit abgefangen. Dieses Modell, das einmal pro Bildrahmen implementiert wird, nennt man eine **Hauptschleife**. Wenn Ihre Spielschleife zeitbasiert ist, wird dies ihre Autorität sein, an die sich Ihre Simulationen halten werden.

Aber es muss vielleicht keine Steuerung pro Bildrahmen sein. Ihre Spielschleife könnte der des _Find-the-differences_ Beispiels ähneln und sich auf Eingabereignisse stützen. Sie könnte sowohl Eingaben als auch simulierte Zeit erfordern. Sie könnte sogar auf etwas völlig anderem basieren.

Moderne JavaScript-Methoden—wie in den nächsten Abschnitten beschrieben—erleichtern glücklicherweise die Entwicklung einer effizienten, einmal pro Bildrahmen ausführenden Hauptschleife. Natürlich wird Ihr Spiel nur so optimiert sein, wie Sie es machen. Wenn etwas so aussieht, als sollte es an ein weniger häufiges Ereignis gebunden sein, ist es oft eine gute Idee, es aus der Hauptschleife herauszulösen (aber nicht immer).

## Eine Hauptschleife in JavaScript erstellen

JavaScript funktioniert am besten mit Ereignissen und Rückruffunktionen. Moderne Browser versuchen, Methoden genau dann aufzurufen, wenn sie benötigt werden und in den Zwischenräumen (oder bei ihren anderen Aufgaben) zu ruhen. Es ist eine ausgezeichnete Idee, Ihren Code an die Momente anzuhängen, die für sie passend sind. Überlegen Sie, ob Ihre Funktion wirklich in einem strikten Zeitintervall, in jedem Bildrahmen oder nur nach einem anderen Ereignis aufgerufen werden muss. Wenn Sie dem Browser genauer mitteilen, wann Ihre Funktion aufgerufen werden muss, kann der Browser optimieren, wann sie aufgerufen wird. Außerdem wird es Ihre Arbeit wahrscheinlich erleichtern.

Einige Codeabschnitte müssen von Bildrahmen zu Bildrahmen ausgeführt werden, warum also diese Funktion nicht an den Neuzeichnungszeitplan des Browsers binden? Im Web wird [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) die Grundlage der meisten gut programmierten Schleifen sein, die pro Bildrahmen laufen. Eine Rückruffunktion muss übergeben werden, wenn sie aufgerufen wird. Diese Rückruffunktion wird zu einem geeigneten Zeitpunkt vor der nächsten Aktualisierung ausgeführt. Hier ist ein Beispiel für eine einfache Hauptschleife:

```js
window.main = () => {
  window.requestAnimationFrame(main);

  // Whatever your main loop needs to do
};

main(); // Start the cycle
```

> [!NOTE]
> In jeder der hier besprochenen `main()`-Methoden planen wir ein neues `requestAnimationFrame`, bevor wir unseren Schleifeninhalt ausführen. Das ist kein Zufall und gilt als Best Practice. Das frühzeitige Aufrufen des nächsten `requestAnimationFrame` stellt sicher, dass der Browser es rechtzeitig erhält, um entsprechend zu planen, selbst wenn Ihr aktueller Rahmen sein VSync-Fenster verpasst.

Der obige Codeabschnitt enthält zwei Anweisungen. Die erste Anweisung erstellt eine Funktion als globale Variable namens `main()`. Diese Funktion führt einige Arbeiten aus und weist den Browser an, sich im nächsten Bildrahmen selbst mit `window.requestAnimationFrame()` aufzurufen. Die zweite Anweisung ruft die in der ersten Anweisung definierte `main()`-Funktion auf. Da `main()` einmal in der zweiten Anweisung aufgerufen wird und jeder ihrer Aufrufe sie in die Warteschlange der nächsten zu erledigenden Bildrahmen einreiht, wird `main()` mit Ihrer Bildrate synchronisiert.

Natürlich ist diese Schleife nicht perfekt. Bevor wir Möglichkeiten zur Änderung besprechen, lassen Sie uns diskutieren, was sie bereits gut macht.

Die Hauptschleife auf den Zeitpunkt zu steuern, zu dem der Browser auf das Display zeichnet, erlaubt Ihnen, Ihre Schleife so oft wie der Browser zeichnen möchte, auszuführen. Sie haben Kontrolle über jeden Animationsrahmen. Sie ist auch sehr einfach, da `main()` die einzige Funktion ist, die wiederholt wird. Ein First-Person-Shooter (oder ein ähnliches Spiel) stellt in jedem Frame eine neue Szene dar. Glatter und reaktionsfreudiger kann es kaum gehen.

Aber gehen Sie nicht sofort davon aus, dass Animationen eine Steuerung von Bildrahmen zu Bildrahmen erfordern. Einfache Animationen können leicht durchgeführt werden, sogar GPU-beschleunigt, mit CSS-Animationen und anderen im Browser enthaltenen Werkzeugen. Davon gibt es viele und sie werden Ihr Leben leichter machen.

## Eine bessere Hauptschleife in JavaScript erstellen

Es gibt zwei offensichtliche Probleme mit unserer vorherigen Hauptschleife: `main()` verschmutzt das [`window`](/de/docs/Web/API/Window)-Objekt (wo alle globalen Variablen gespeichert sind) und der Beispielcode ließ uns keine Möglichkeit, die Schleife zu _stoppen_, es sei denn, der gesamte Tab wurde geschlossen oder aktualisiert. Für das erste Problem, wenn Sie möchten, dass die Hauptschleife einfach läuft und Sie keinen einfachen (direkten) Zugriff darauf benötigen, könnten Sie sie als Immediately-Invoked Function Expression (IIFE) erstellen.

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

Wenn der Browser auf diesen IIFE trifft, definiert er Ihre Hauptschleife und stellt sie sofort für den nächsten Frame in die Warteschlange. Sie wird keinem Objekt zugeordnet und `main` (oder `main()` für Methoden) wird im Rest der Anwendung ein gültiger ungenutzter Name sein, der frei als etwas anderes definiert werden kann.

> [!NOTE]
> In der Praxis ist es üblicher, das nächste `requestAnimationFrame()` mit einer if-Anweisung zu verhindern, anstatt `cancelAnimationFrame()` aufzurufen.

Für das zweite Problem, das Stoppen der Hauptschleife, müssen Sie den Aufruf an `main()` mit [`window.cancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) stornieren. Sie müssen `cancelAnimationFrame()` das ID-Token übergeben, das von `requestAnimationFrame()` bei seinem letzten Aufruf gegeben wurde. Angenommen, die Funktionen und Variablen Ihres Spiels sind in einem Namespace aufgebaut, den Sie `MyGame` genannt haben. Wenn wir unser letztes Beispiel erweitern, würde die Hauptschleife jetzt wie folgt aussehen:

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

Wir haben jetzt eine Variable in unserem `MyGame`-Namespace deklariert, die wir `stopMain` nennen und die die ID enthält, die von unserem letzten Aufruf an die Hauptschleife von `requestAnimationFrame()` zurückgegeben wurde. Jederzeit können wir die Hauptschleife stoppen, indem wir dem Browser mitteilen, das er das dergestellte Token betreffende Anfrage stornieren soll.

```js
window.cancelAnimationFrame(MyGame.stopMain);
```

Der Schlüssel zur Programmierung einer Hauptschleife in JavaScript besteht darin, sie an jedes Ereignis zu binden, das Ihre Aktion antreiben soll, und darauf zu achten, wie die verschiedenen beteiligten Systeme zusammenwirken. Sie können mehrere Komponenten haben, die von mehreren verschiedenen Arten von Ereignissen gesteuert werden. Dies erscheint als überflüssige Komplexität, kann aber eine gute Optimierung sein (nicht notwendigerweise, natürlich). Das Problem ist, dass Sie keine typische Hauptschleife programmieren. In JavaScript nutzen Sie die Hauptschleife des Browsers und versuchen, dies effektiv zu tun.

## Eine optimiertere Hauptschleife in JavaScript erstellen

Letztendlich läuft im JavaScript der Browser selbst seine eigene Hauptschleife und Ihr Code existiert in einigen ihrer Phasen. Die oben beschriebenen Hauptschleifen versuchen nicht, die Kontrolle vom Browser zu entreißen. Diese Hauptmethoden binden sich an `window.requestAnimationFrame()`, das den Browser auffordert, die Kontrolle über den nächsten Frame zu übernehmen. Es liegt am Browser, wie er diese Anfragen mit seinen Hauptschleifen in Beziehung setzt. Die [W3C-Spezifikation für requestAnimationFrame](https://www.w3.org/TR/animation-timing/) definiert nicht wirklich genau, wann die Browser die requestAnimationFrame-Rückrufe ausführen müssen. Dies kann von Vorteil sein, da es Browseranbietern die Freiheit lässt, mit den für sie am besten geeigneten Lösungen zu experimentieren und diese im Laufe der Zeit zu optimieren.

Moderne Versionen von Firefox und Google Chrome (und wahrscheinlich auch andere) _versuchen_, ihre `requestAnimationFrame`-Rückrufe mit ihrem Main-Thread gleich zu Beginn eines Frame-Zeitslices zu verbinden. Der Hauptthread des Browsers _versucht_ somit wie folgt auszusehen:

1. Starten Sie einen neuen Frame (während der vorherige Frame von der Anzeige gehandhabt wird).
2. Gehen Sie die Liste der `requestAnimationFrame`-Rückrufe durch und führen Sie sie aus.
3. Führen Sie eine Speicherbereinigung und andere pro Frame anfallende Aufgaben durch, wenn die obigen Rückrufe die Steuerung des Hauptthreads beenden.
4. Ruhen Sie sich aus (außer, ein Ereignis unterbricht das Nickerchen des Browsers), bis der Monitor bereit für Ihr Bild ist ([VSync](https://www.techopedia.com/definition/92/vertical-sync-vsync)) und wiederholen Sie den Vorgang.

Sie können die Entwicklung von Echtzeitanwendungen als das Arbeiten innerhalb eines Zeitbudgets betrachten. Alle oben genannten Schritte müssen alle 16,5 Millisekunden stattfinden, um mit einem 60 Hz-Display Schritt zu halten. Browser rufen Ihren Code so früh wie möglich auf, um maximale Rechenzeit zu gewähren. Ihr Hauptthread startet oft Arbeitslasten, die nicht einmal im Hauptthread sind (wie Rasterisierung oder Shader in WebGL). Lange Berechnungen können in einem Web Worker oder auf eine GPU ausgeführt werden, während der Browser seinen Hauptthread für Speicherbereinigung, seine anderen Aufgaben oder zur Verwaltung asynchroner Ereignisse verwendet.

Da wir über die Zeitbudgetierung sprechen, haben viele Webbrowser ein Tool namens _High Resolution Time_. Das {{jsxref("Date")}}-Objekt ist nicht mehr die anerkannte Methode zur Zeitmessung von Ereignissen, da es sehr ungenau ist und durch die Systemuhr verändert werden kann. High Resolution Time zählt hingegen die Anzahl der Millisekunden seit `navigationStart` (wenn das vorherige Dokument entladen wurde). Dieser Wert wird als Dezimalzahl zurückgegeben, die auf ein Tausendstel einer Millisekunde genau ist. Es wird als [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) bezeichnet, aber für alle praktischen Zwecke, betrachten Sie es als eine Gleitkommazahl.

> [!NOTE]
> Systeme (Hardware oder Software), die keine Mikrosekunden-Genauigkeit bieten können, dürfen als Mindestanforderung Millisekunden-Genauigkeit bereitstellen. Sie sollten jedoch 0,001 ms Genauigkeit bereitstellen, wenn sie dazu in der Lage sind.

Dieser Wert ist allein nicht allzu nützlich, da er sich auf ein recht uninteressantes Ereignis bezieht, kann aber von einem anderen Zeitstempel subtrahiert werden, um genau und präzise zu bestimmen, wie viel Zeit zwischen diesen beiden Punkten vergangen ist. Um einen dieser Zeitstempel zu erhalten, können Sie `window.performance.now()` aufrufen und das Ergebnis als Variable speichern.

```js
const tNow = window.performance.now();
```

Zurück zum Thema der Hauptschleife. Oftmals möchten Sie wissen, wann Ihre Hauptfunktion aufgerufen wurde. Da dies häufig vorkommt, stellt `window.requestAnimationFrame()` beim Ausführen eine `DOMHighResTimeStamp`-Rückgabevariable als Argument zur Verfügung. Dies führt zu einer weiteren Verbesserung unserer vorherigen Hauptschleifen.

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

Es sind mehrere weitere Optimierungen möglich, und es hängt wirklich davon ab, was Ihr Spiel zu erreichen versucht. Ihr Spielgenre wird offensichtlich einen Unterschied machen, es könnte jedoch auch subtiler sein. Sie könnten jedes Pixel einzeln auf einer Leinwand zeichnen oder DOM-Elemente (einschließlich mehrerer WebGL-Leinwände mit transparenten Hintergründen, wenn Sie möchten) in einer komplexen Hierarchie schichten. Jeder dieser Pfade eröffnet unterschiedliche Möglichkeiten und Zwänge.

## Es ist Entscheidungszeit…

Sie werden schwierige Entscheidungen in Bezug auf Ihre Hauptschleife treffen müssen: wie die genaue Zeitfortschreitungen zu simulieren sind. Wenn Sie Steuerung pro Bildrahmen verlangen, müssen Sie bestimmen, wie häufig Ihr Spiel aktualisiert und gezeichnet wird. Vielleicht möchten Sie sogar, dass Aktualisieren und Zeichnen mit unterschiedlichen Raten erfolgen. Sie müssen auch berücksichtigen, wie elegant Ihr Spiel ausfallen wird, wenn das System des Benutzers die Arbeitslast nicht bewältigen kann. Lassen Sie uns damit beginnen, davon auszugehen, dass Sie Benutzereingaben handhaben und den Spielzustand jedes Mal aktualisieren, wenn Sie zeichnen. Wir werden später auf andere Aspekte eingehen.

> [!NOTE]
> Das Ändern, wie Ihre Hauptschleife mit der Zeit umgeht, ist überall ein Albtraum beim Debuggen. Überlegen Sie sorgfältig Ihre Bedürfnisse, bevor Sie an Ihrer Hauptschleife arbeiten.

### Wie die meisten Browserspiele aussehen sollten

Wenn Ihr Spiel die maximale Aktualisierungsrate jeder unterstützten Hardware erreichen kann, dann ist Ihre Aufgabe ziemlich einfach. Sie können aktualisieren, rendern und dann nichts tun, bis VSync.

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

Wenn die maximale Aktualisierungsrate nicht erreicht werden kann, könnten die Qualitätseinstellungen angepasst werden, um unter Ihrem Zeitbudget zu bleiben. Das berühmteste Beispiel für dieses Konzept ist das Spiel von id Software, RAGE. Dieses Spiel entzog dem Benutzer die Kontrolle, um seine Berechnungszeit auf etwa 16 ms (oder ungefähr 60 fps) zu halten. Wenn die Verarbeitung zu viel Zeit in Anspruch nahm, verringerte sich die gerenderte Auflösung, Texturen und andere Assets wurden nicht geladen oder dargestellt usw. Diese (nicht-webbasierte) Fallstudie machte einige Annahmen und Kompromisse:

- Jeder Animationsrahmen berücksichtigt Benutzereingaben.
- Kein Rahmen muss extrapoliert (geschätzt) werden, da jeder Zeichnungsaufruf eigenes Update hat.
- Simulationen können im Wesentlichen davon ausgehen, dass jedes vollständige Update ca. 16 ms auseinanderliegt.
- Die Kontrollvergabe des Benutzers über Qualitätseinstellungen wäre ein Albtraum.
- Verschiedene Monitoreingabefrequenzen: 30 FPS, 75 FPS, 100 FPS, 120 FPS, 144 FPS, usw.
- Systeme, die nicht mit 60 FPS mithalten können, verlieren an visueller Qualität, um das Spiel weiter in optimaler Geschwindigkeit laufen zu lassen (irgendwann scheitert es dann komplett, wenn die Qualität zu niedrig wird).

### Andere Möglichkeiten, variable Aktualisierungsraten zu handhaben

Es gibt andere Methoden, wie man das Problem angehen kann.

Eine gängige Methode ist es, die Simulation mit einer konstanten Frequenz zu aktualisieren und die tatsächlichen Bilder so oft (oder wenig) wie möglich zu zeichnen. Die Aktualisierungsmethode kann ohne Rücksicht darauf, was der Benutzer sieht, weiter Schleifen durchlaufen. Die Zeichnungsmethode kann die letzte Aktualisierung beobachten und wann sie stattfand. Da die Zeichnung weiß, welche Zeit sie darstellt, und welchen Simulationszeitpunkt die letzte Aktualisierung einnahm, kann sie ein plausibles Bild für den Benutzer erraten. Es spielt keine Rolle, ob dies häufiger als die offizielle Aktualisierungsschleife ist (oder sogar weniger häufig). Die Aktualisierungsmethode setzt Checkpoints und, so oft es das System zulässt, zeichnet die Render-Methode zeitliche Momentaufnahmen um sie herum. Es gibt viele Möglichkeiten, die Aktualisierungsmethode in Webstandards zu trennen:

- Zeichnen Sie auf `requestAnimationFrame` und aktualisieren Sie mit einem [`setInterval()`](/de/docs/Web/API/SetInterval) oder [`setTimeout()`](/de/docs/Web/API/SetTimeout).

  - Dies verwendet die Prozessorzeit, auch wenn es nicht fokussiert oder minimiert ist, beansprucht den Hauptthread und ist wahrscheinlich ein Überbleibsel traditioneller Spielschleifen (aber es ist einfach).

- Zeichnen Sie auf `requestAnimationFrame` und aktualisieren Sie mit einem `setInterval` oder `setTimeout` in einem [Web Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers).

  - Dies ist dasselbe wie oben, außer dass Aktualisierungen nicht den Hauptthread beanspruchen (noch wird der Hauptthread es für sich beanspruchen). Dies ist eine komplexere Lösung und könnte für einfache Aktualisierungen zu viel Overhead sein.

- Zeichnen Sie auf `requestAnimationFrame` und verwenden Sie es, um einen Web Worker mit der Aktualisierungsmethode mit der Anzahl der zu berechnenden Einheiten zu stoßen, falls vorhanden.

  - Dies schläft, bis `requestAnimationFrame` aufgerufen wird und verschmutzt nicht den Hauptthread, zudem verlassen Sie sich nicht auf altmodische Methoden. Dies ist jedoch etwas komplexer als die vorherigen zwei Optionen, und, das Starten jeder Aktualisierung wird blockiert, bis der Browser entscheidet, die rAF-Rückrufmethoden auszulösen.

Jede dieser Methoden hat ähnliche Kompromisse:

- Benutzer können das Rendern von Frames überspringen oder zusätzliche interpolieren, je nach Leistung.
- Sie können darauf zählen, dass alle Benutzer nicht-kosmetische Variablen in derselben konstanten Frequenz minus Haker aktualisieren.
- Deutlich komplizierter zu programmieren als die einfachen Schleifen, die wir zuvor gesehen haben.
- Benutzereingaben werden vollständig ignoriert, bis zur nächsten Aktualisierung (selbst wenn der Benutzer ein schnelles Gerät hat).
- Die obligatorische Interpolation hat eine Leistungseinbuße.

Eine separate Update- und Zeichnungsmethode könnte wie das folgende Beispiel aussehen. Zum Zweck der Demonstration basiert das Beispiel auf dem dritten Aufzählungspunkt, nur ohne Web Worker für bessere Lesbarkeit (und ehrlich gesagt Schreibbarkeit).

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

Eine andere Alternative ist, bestimmte Dinge seltener zu machen. Wenn ein Teil Ihrer Aktualisierungsschleife schwer zu berechnen, aber nicht zeitkritisch ist, könnten Sie erwägen, seine Frequenz zurückzuschrauben und, idealerweise, es über diesen verlängerten Zeitraum in Blöcke aufzuteilen. Ein implizites Beispiel dafür fand sich im Blog von The Artillery Blog für Artillery Games, wo sie [ihre Garbagesammelrate anpassen](https://web.archive.org/web/20161021030645/http://blog.artillery.com/2012/10/browser-garbage-collection-and-framerate.html), um die Speicherbereinigung zu optimieren. Offensichtlich ist das Aufräumen von Ressourcen nicht zeitkritisch (besonders wenn das Aufräumen störender ist als der Garbage selbst).

Dies könnte auch auf einige Ihrer eigenen Aufgaben zutreffen. Dies sind gute Kandidaten, um sie zu drosseln, wenn verfügbare Ressourcen ein Anliegen sind.

## Zusammenfassung

Ich möchte klar stellen, dass jede oder keine der obigen Optionen die beste für Ihr Spiel sein könnte. Die richtige Entscheidung hängt vollständig von den Kompromissen ab, die Sie bereit sind (und nicht bereit sind) einzugehen. Es geht vor allem darum, zu einer anderen Option zu wechseln. Glücklicherweise habe ich selbst keine Erfahrung damit, aber ich habe gehört, dass es ein ermüdendes Spiel von "Whack-a-Mole" ist.

Ein wichtiger Punkt, um sich bei verwalteten Plattformen wie dem Web zu erinnern, ist, dass Ihre Schleife möglicherweise längere Zeit nicht ausgeführt wird. Dies könnte passieren, wenn der Benutzer Ihre Registerkarte abwählt und der Browser seine `requestAnimationFrame`-Rückrufintervalle zum Schlafen (oder Verlangsamen) bringt. Sie haben viele Möglichkeiten, mit dieser Situation umzugehen, und dies könnte davon abhängen, ob Ihr Spiel ein Spieler- oder Mehrspieler-Spiel ist. Einige Optionen sind:

- Betrachten Sie die Lücke als "Pause" und übergehen Sie die Zeit.

  - Sie können wahrscheinlich erkennen, wie dies problematisch für die meisten Mehrspieler-Spiele ist.

- Sie können die Lücke simulieren, um aufzuholen.

  - Dies kann ein Problem bei langen Abstürzen und/oder komplexen Aktualisierungen sein.

- Sie können den Spielzustand von einem Peer oder vom Server wiederherstellen.

  - Dies ist unwirksam, wenn Ihre Peers oder der Server auch veraltet sind, oder sie nicht existieren, weil das Spiel Einzelspieler ist und keinen Server hat.

Sobald Ihre Hauptschleife entwickelt wurde und Sie sich für eine Reihe von Annahmen und Kompromissen entschieden haben, die zu Ihrem Spiel passen, geht es nur noch darum, Ihre Entscheidungen zu nutzen, um eventuell anfallende Physik, KI, Sounds, Netzwerksynchronisation und was auch immer Ihr Spiel erfordert, zu berechnen.
