---
title: Anatomie eines Videospiels
slug: Games/Anatomy
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

Dieser Artikel betrachtet die Anatomie und den Arbeitsablauf eines durchschnittlichen Videospiels aus einer technischen Perspektive, in Bezug darauf, wie die Hauptschleife ablaufen sollte. Er hilft Anfängern der modernen Spieleentwicklung zu verstehen, welche Anforderungen beim Erstellen eines Spiels bestehen und wie Webstandards wie JavaScript als Werkzeuge dienen können. Auch erfahrene Spieleprogrammierer, die neu in der Webentwicklung sind, könnten davon profitieren.

## Präsentieren, akzeptieren, interpretieren, berechnen, wiederholen

Das Ziel jedes Videospiels ist es, dem / den Benutzer(n) eine Situation zu **präsentieren**, ihre Eingaben zu **akzeptieren**, diese Signale in Aktionen zu **interpretieren** und eine neue Situation zu **berechnen**, die aus diesen Aktionen resultiert. Spiele durchlaufen diese Phasen ständig, immer wieder, bis eine Endbedingung eintritt (wie zum Beispiel Gewinnen, Verlieren oder Beenden, um schlafen zu gehen). Nicht überraschend, entspricht dieses Muster dem, wie eine Spiel-Engine programmiert wird.

Die Details hängen vom Spiel ab.

Einige Spiele treiben diesen Zyklus durch Benutzereingaben an. Stellen Sie sich vor, Sie entwickeln ein Spiel vom Typ _"Finde die Unterschiede zwischen diesen beiden ähnlichen Bildern"_. Diese Spiele **präsentieren** dem Benutzer zwei Bilder; sie **akzeptieren** seinen Klick (oder seine Berührung); sie **interpretieren** die Eingabe als Erfolg, Misserfolg, Pause, Menüinteraktion usw.; schließlich **berechnen** sie eine aktualisierte Szene, die sich aus dieser Eingabe ergibt. Die Spielschleife wird durch die Eingabe des Benutzers vorangetrieben und ruht, bis dieser sie bereitstellt. Dies ist eher ein rundenbasierter Ansatz, der nicht bei jedem Frame eine ständige Aktualisierung erfordert, sondern nur, wenn der Spieler reagiert.

Andere Spiele verlangen Kontrolle über jeden kleinsten individuellen Zeitabschnitt. Die gleichen Prinzipien wie oben gelten mit einem kleinen Twist: jedes Bild einer Animation schreitet im Zyklus voran und jede Änderung in der Benutzereingabe wird beim ersten verfügbaren Zug erkannt. Dieses Modell „einmal pro Frame“ wird in etwas namens **Hauptschleife** implementiert. Wenn Ihre Spielschleife auf Zeit basiert, dann wird dies die Autorität sein, der Ihre Simulationen folgen werden.

Aber eventuell braucht sie keine Kontrolle pro Frame. Ihre Spielschleife könnte ähnlich dem Beispiel _Finde die Unterschiede_ sein und sich auf Eingabeereignisse stützen. Eventuell benötigt sie sowohl Eingaben als auch simulierte Zeit. Es könnte sogar auf etwas völlig anderem basieren.

Moderne JavaScript - wie in den nächsten Abschnitten beschrieben - macht es glücklicherweise einfach, eine effiziente, einmal-pro-Frame ausführende Hauptschleife zu entwickeln. Natürlich wird Ihr Spiel nur so optimiert sein, wie Sie es gestalten. Wenn etwas so aussieht, als sollte es an ein weniger häufiges Ereignis angehängt werden, dann ist es oft eine gute Idee, es aus der Hauptschleife herauszunehmen (aber nicht immer).

## Eine Hauptschleife in JavaScript erstellen

JavaScript funktioniert am besten mit Ereignissen und Rückruffunktionen. Moderne Browser streben danach, Methoden genau dann aufzurufen, wenn sie benötigt werden, und ruhen (oder führen ihre anderen Aufgaben aus) in den Zwischenräumen. Es ist eine ausgezeichnete Idee, Ihren Code an den geeigneten Momenten zu verknüpfen. Überlegen Sie, ob Ihre Funktion wirklich in einem strikten Zeitintervall, bei jedem Frame oder nur nach einem anderen Ereignis aufgerufen werden muss. Wenn Sie dem Browser spezifisch mitteilen, wann Ihre Funktion aufgerufen werden muss, ermöglicht dies dem Browser, zu optimieren, wann sie aufgerufen wird. Außerdem wird es wahrscheinlich Ihre Aufgabe erleichtern.

Einige Codes müssen frameweise ausgeführt werden, warum also diese Funktion nicht an die Neuzeichenplanung des Browsers anhängen? Im Web wird {{ domxref("window.requestAnimationFrame()") }} die Grundlage der meisten gut programmierten pro-Frame Hauptschleifen sein. Eine Rückruffunktion muss übergeben werden, wenn diese aufgerufen wird. Diese Rückruffunktion wird zu einem geeigneten Zeitpunkt vor dem nächsten Neuzeichnen ausgeführt. Hier ist ein Beispiel für eine einfache Hauptschleife:

```js
window.main = () => {
  window.requestAnimationFrame(main);

  // Was auch immer Ihre Hauptschleife erledigen muss
};

main(); // Startet den Zyklus
```

> [!NOTE]
> In jeder der hier besprochenen `main()`-Methoden planen wir ein neues `requestAnimationFrame`, bevor wir den Schleifeninhalt ausführen. Das ist kein Zufall und wird als Best Practice angesehen. Das frühe Aufrufen des nächsten `requestAnimationFrame` stellt sicher, dass der Browser es rechtzeitig erhält, um entsprechend zu planen, selbst wenn Ihr aktueller Frame sein VSync-Fenster verpasst.

Das obige Code-Stück hat zwei Anweisungen. Die erste Anweisung erstellt eine Funktion als globale Variable namens `main()`. Diese Funktion erledigt einige Aufgaben und weist den Browser auch an, sich im nächsten Frame mit `window.requestAnimationFrame()` erneut aufzurufen. Die zweite Anweisung ruft die `main()`-Funktion auf, die in der ersten Anweisung definiert wurde. Da `main()` einmal in der zweiten Anweisung aufgerufen wird und jedes seiner Aufrufe sich selbst in die Warteschlange der nächsten Frame-Aufgaben stellt, ist `main()` mit Ihrer Bildrate synchronisiert.

Natürlich ist diese Schleife nicht perfekt. Bevor wir Möglichkeiten zur Veränderung diskutieren, lassen Sie uns besprechen, was sie bereits gut macht.

Die Hauptschleife auf den Zeitpunkt abzustimmen, wenn der Browser auf das Display malt, ermöglicht es Ihnen, Ihre Schleife so häufig auszuführen, wie der Browser malen möchte. Sie erhalten die Kontrolle über jeden Animationsrahmen. Es ist auch sehr einfach, weil `main()` die einzige Funktion ist, die geschleift wird. Ein Ego-Shooter (oder ein ähnliches Spiel) präsentiert pro Frame eine neue Szene. Glatter und reaktionsschneller kann es nicht sein.

Aber gehen Sie nicht sofort davon aus, dass Animationen eine Frame-für-Frame-Kontrolle erfordern. Einfache Animationen können leicht durchgeführt und sogar GPU-beschleunigt mit CSS-Animationen und anderen im Browser enthaltenen Werkzeugen ausgeführt werden. Es gibt viele davon, und sie werden Ihnen das Leben erleichtern.

## Eine bessere Hauptschleife in JavaScript erstellen

Es gibt zwei offensichtliche Probleme mit unserer vorherigen Hauptschleife: `main()` verschmutzt das {{ domxref("window") }}-Objekt (wo alle globalen Variablen gespeichert sind), und der Beispielcode hat uns keinen Weg gelassen, die Schleife zu stoppen, es sei denn, der gesamte Tab wird geschlossen oder aktualisiert. Für das erste Problem: Wenn die Hauptschleife einfach laufen soll und Sie keinen einfachen (direkten) Zugriff darauf benötigen, könnten Sie sie als Eine sofort aufgerufene Funktionsausdruck (IIFE) erstellen.

<!-- prettier-ignore-start -->
```js
/*
 * Mit dem Semikolon zu beginnen, ist für den Fall notwendig, dass irgendeine Zeile Code über diesem Beispiel
 * sich auf die automatische Semikolon-Einfügung (ASI) verlässt. Der Browser könnte versehentlich
 * denken, dieses ganze Beispiel setze die vorherige Zeile fort. Das führende Semikolon
 * markiert den Beginn unserer neuen Zeile, wenn die vorherige nicht leer war oder terminiert wurde.
 */

;(() => {
  function main() {
    window.requestAnimationFrame(main);

    // Ihre Hauptschleifeninhalte
  }

  main(); // Starten Sie den Zyklus
})();
```
<!-- prettier-ignore-end -->

Wenn der Browser auf diese IIFE stößt, wird er Ihre Hauptschleife definieren und sie sofort für den nächsten Frame in die Warteschlange stellen. Sie wird keinem Objekt zugeordnet, und `main` (oder `main()` für Methoden) wird ein gültiger unbenutzter Name im Rest der Anwendung sein, frei, als etwas anderes definiert zu werden.

> [!NOTE]
> In der Praxis ist es üblicher, das nächste `requestAnimationFrame()` mit einer if-Anweisung zu verhindern, anstatt `cancelAnimationFrame()` aufzurufen.

Für das zweite Problem, das Stoppen der Hauptschleife, müssen Sie den Aufruf von `main()` mit {{ domxref("window.cancelAnimationFrame()") }} absagen. Sie müssen `cancelAnimationFrame()` das von `requestAnimationFrame()` gegebene ID-Token übergeben, als es zuletzt aufgerufen wurde. Nehmen wir an, die Funktionen und Variablen Ihres Spiels basieren auf einem Namensraum, den Sie `MyGame` genannt haben. Wenn wir unser letztes Beispiel erweitern, würde die Hauptschleife jetzt wie folgt aussehen:

<!-- prettier-ignore-start -->
```js
/*
 * Mit dem Semikolon zu beginnen, ist für den Fall notwendig, dass irgendeine Zeile Code über diesem Beispiel
 * sich auf die automatische Semikolon-Einfügung (ASI) verlässt. Der Browser könnte versehentlich
 * denken, dieses ganze Beispiel setze die vorherige Zeile fort. Das führende Semikolon
 * markiert den Beginn unserer neuen Zeile, wenn die vorherige nicht leer war oder terminiert wurde.
 *
 * Wir nehmen auch an, dass MyGame zuvor definiert wurde.
 */

;(() => {
  function main() {
    MyGame.stopMain = window.requestAnimationFrame(main);

    // Ihre Hauptschleifeninhalte
  }

  main(); // Starten Sie den Zyklus
})();
```
<!-- prettier-ignore-end -->

Wir haben jetzt eine Variable in unserem `MyGame`-Namensraum deklariert, die wir `stopMain` nennen und die die ID enthält, die von unserem Hauptschleifen-Aufruf von `requestAnimationFrame()` am meisten zurückgegeben wurde. Zu jedem Zeitpunkt können wir die Hauptschleife stoppen, indem wir dem Browser mitteilen, das Ersuchen zu annullieren, das unserem Token entspricht.

```js
window.cancelAnimationFrame(MyGame.stopMain);
```

Der Schlüssel zum Programmieren einer Hauptschleife in JavaScript liegt darin, sie an das Ereignis anzuhängen, das Ihre Aktionen steuern soll, und darauf zu achten, wie die verschiedenen beteiligten Systeme zusammenspielen. Sie können mehrere Komponenten haben, die von mehreren verschiedenen Ereignistypen gesteuert werden. Dies fühlt sich wie unnötige Komplexität an, könnte aber eine gute Optimierung sein (natürlich nicht unbedingt). Das Problem ist, dass Sie keine typische Hauptschleife programmieren. In JavaScript verwenden Sie die Hauptschleife des Browsers und versuchen, dies effektiv zu tun.

## Eine mehr optimierte Hauptschleife in JavaScript erstellen

Letztendlich läuft im Browser eine eigene Hauptschleife, und Ihr Code existiert in einigen ihrer Phasen. Die oben beschriebenen Abschnitte beschreiben Hauptschleifen, die versuchen, die Kontrolle nicht vom Browser wegzunehmen. Diese Hauptmethoden hängen sich an `window.requestAnimationFrame()` an, was den Browser um Kontrolle über den anstehenden Frame bittet. Es liegt am Browser, wie er diese Anfragen in Bezug auf ihre Hauptschleife behandelt. Die [W3C-Spezifikation für requestAnimationFrame](https://www.w3.org/TR/animation-timing/) definiert nicht wirklich, wann die Browser die requestAnimationFrame-Rückrufe ausführen müssen. Dies kann von Vorteil sein, weil es den Browseranbietern erlaubt, mit den Lösungen zu experimentieren, die sie für die besten halten, und im Laufe der Zeit Feinabstimmungen vorzunehmen.

Moderne Versionen von Firefox und Google Chrome (und wahrscheinlich andere) _versuchen_, die requestAnimationFrame-Rückrufe an ihren Hauptthread zu Beginn des Zeitabschnitts eines Frames zu binden. Der Hauptthread des Browsers _versucht_ somit wie folgt auszusehen:

1. Ein neues Frame starten (während das vorherige Frame von der Anzeige gehandhabt wird).
2. Gehe die Liste der requestAnimationFrame-Rückrufe durch und rufe sie auf.
3. Führe die Müllabfuhr und andere per-Frame-Aufgaben aus, wenn die oben genannten Rückrufe aufhören, den Hauptthread zu kontrollieren.
4. Schlafen (es sei denn, ein Ereignis unterbricht das Nickerchen des Browsers), bis der Monitor für Ihr Bild bereit ist ([VSync](https://www.techopedia.com/definition/92/vertical-sync-vsync)) und wiederholen.

Man kann die Entwicklung von Echtzeitanwendungen so betrachten, dass man ein Zeitbudget hat, um die Arbeit zu erledigen. All die oben genannten Schritte müssen alle 16,5 Millisekunden stattfinden, um mit einem 60-Hz-Display Schritt zu halten. Browser rufen Ihren Code so früh wie möglich auf, um ihm maximale Rechenzeit zu geben. Ihr Hauptthread wird oft Workloads starten, die nicht einmal auf dem Hauptthread sind (wie etwa Rasterisierung oder Shader in WebGL). Lange Berechnungen können auf einem Web Worker oder einer GPU parallel zum Hauptthread-Browser ausgeführt werden, um die Müllabfuhr, seine anderen Aufgaben zu verwalten oder asynchrone Ereignisse zu behandeln.

Während wir beim Thema der Zeitbudgetierung sind, verfügen viele Web-Browser über ein Tool namens _High Resolution Time_. Das {{jsxref("Date")}}-Objekt ist nicht mehr die anerkannte Methode zum Timing von Ereignissen, weil es sehr ungenau ist und durch die Systemuhr verändert werden kann. Die High Resolution Time hingegen zählt die Anzahl der Millisekunden seit `navigationStart` (wenn das vorherige Dokument entladen wird). Dieser Wert wird als Dezimalzahl zurückgegeben, die auf Tausendstel einer Millisekunde genau ist. Sie wird als {{ domxref("DOMHighResTimeStamp") }} bezeichnet, aber im Wesentlichen ist sie eine Fließkommazahl.

> [!NOTE]
> Systeme (Hardware oder Software), die nicht in der Lage sind, eine Genauigkeit im Mikrosekundenbereich zu bieten, dürfen eine Genauigkeit im Millisekundenbereich als Minimum bieten. Sie sollten eine Genauigkeit von 0,001 ms bieten, wenn sie dazu in der Lage sind.

Dieser Wert ist allein nicht sehr nützlich, da er relativ zu einem eher uninteressanten Ereignis ist, aber er kann von einem anderen Zeitstempel subtrahiert werden, um genau und präzise zu bestimmen, wie viel Zeit zwischen diesen beiden Punkten vergangen ist. Um einen dieser Zeitstempel zu erhalten, können Sie `window.performance.now()` aufrufen und das Ergebnis als Variable speichern.

```js
const tNow = window.performance.now();
```

Zurück zum Thema der Hauptschleife. Oft möchten Sie wissen, wann Ihre Hauptfunktion aufgerufen wurde. Da dies üblich ist, übergibt `window.requestAnimationFrame()` immer eine `DOMHighResTimeStamp` an Rückrufe als Argument bei ihrer Ausführung. Dies führt zu einer weiteren Verbesserung unserer vorherigen Hauptschleifen.

<!-- prettier-ignore-start -->
```js
/*
 * Mit dem Semikolon zu beginnen, ist für den Fall notwendig, dass irgendeine Zeile Code über diesem Beispiel
 * sich auf die automatische Semikolon-Einfügung (ASI) verlässt. Der Browser könnte versehentlich
 * denken, dieses ganze Beispiel setze die vorherige Zeile fort. Das führende Semikolon
 * markiert den Beginn unserer neuen Zeile, wenn die vorherige nicht leer war oder terminiert wurde.
 *
 * Wir nehmen auch an, dass MyGame zuvor definiert wurde.
 */

;(() => {
  function main(tFrame) {
    MyGame.stopMain = window.requestAnimationFrame(main);

    // Ihre Hauptschleifeninhalte
    // tFrame, aus "function main(tFrame)", ist jetzt ein DOMHighResTimeStamp, der von rAF bereitgestellt wird.
  }

  main(); // Starten Sie den Zyklus
})();
```
<!-- prettier-ignore-end -->

Weitere Optimierungen sind möglich, und es hängt wirklich davon ab, was Ihr Spiel zu erreichen versucht. Ihr Spielgenre wird offensichtlich einen Unterschied machen, aber es könnte sogar subtiler sein. Sie könnten jedes Pixel einzeln auf einer Leinwand zeichnen oder DOM-Elemente (einschließlich mehrerer WebGL-Leinwände mit transparenten Hintergründen, wenn Sie möchten) in eine komplexe Hierarchie schichten. Jeder dieser Wege wird zu unterschiedlichen Möglichkeiten und Einschränkungen führen.

## Es ist Entscheidungszeit

Sie müssen harte Entscheidungen über Ihre Hauptschleife treffen: wie Sie die genaue Zeitfortschreitung simulieren. Wenn Sie eine Kontrolle pro Frame verlangen, müssen Sie bestimmen, wie häufig Ihr Spiel aktualisiert und gezeichnet wird. Sie könnten sogar wollen, dass Aktualisierungen und Zeichnungen mit unterschiedlichen Raten erfolgen. Sie müssen auch berücksichtigen, wie anmutig Ihr Spiel scheitern wird, wenn das System des Benutzers nicht mit der Arbeitslast Schritt halten kann. Lassen Sie uns zunächst annehmen, dass Sie die Benutzereingaben verarbeiten und den Spielzustand jedes Mal aktualisieren, wenn Sie zeichnen. Wir werden später abzweigen.

> [!NOTE]
> Die Änderung, wie Ihre Hauptschleife mit der Zeit umgeht, ist überall eine Albtraum bei der Fehlersuche. Denken Sie sorgfältig über Ihre Bedürfnisse nach, bevor Sie an Ihrer Hauptschleife arbeiten.

### Wie die meisten Browser-Spiele aussehen sollten

Wenn Ihr Spiel die maximale Bildwiederholrate aller unterstützten Hardware erreichen kann, dann ist Ihre Aufgabe ziemlich einfach. Sie können aktualisieren, rendern und dann nichts tun, bis VSync.

<!-- prettier-ignore-start -->
```js
/*
 * Mit dem Semikolon zu beginnen, ist für den Fall notwendig, dass irgendeine Zeile Code über diesem Beispiel
 * sich auf die automatische Semikolon-Einfügung (ASI) verlässt. Der Browser könnte versehentlich
 * denken, dieses ganze Beispiel setze die vorherige Zeile fort. Das führende Semikolon
 * markiert den Beginn unserer neuen Zeile, wenn die vorherige nicht leer war oder terminiert wurde.
 *
 * Wir nehmen auch an, dass MyGame zuvor definiert wurde.
 */

;(() => {
  function main(tFrame) {
    MyGame.stopMain = window.requestAnimationFrame(main);

    update(tFrame); // Rufen Sie Ihre Aktualisierungsmethode auf. In unserem Fall geben wir ihr den rAF-Zeitstempel.
    render();
  }

  main(); // Starten Sie den Zyklus
})();
```
<!-- prettier-ignore-end -->

Wenn die maximale Bildwiederholrate nicht erreicht werden kann, könnten Qualitätseinstellungen angepasst werden, um innerhalb Ihres Zeitbudgets zu bleiben. Das bekannteste Beispiel für dieses Konzept ist das Spiel von id Software, RAGE. Dieses Spiel entzog dem Benutzer die Kontrolle, um seine Berechnungszeit auf etwa 16 ms (oder etwa 60 fps) zu halten. Wenn die Berechnung zu lange dauerte, würde die gerenderte Auflösung abnehmen, Texturen und andere Assets würden nicht geladen oder gezeichnet werden und so weiter. Diese (nicht-web) Fallstudie traf ein paar Annahmen und Abwägungen:

- Jeder Animationsrahmen berücksichtigt die Benutzereingaben.
- Kein Rahmen muss extrapoliert (erraten) werden, weil jeder Zeichenvorgang seine eigene Aktualisierung hat.
- Simulationssysteme können im Grunde davon ausgehen, dass jede vollständige Aktualisierung \~16 ms auseinanderliegt.
- Dem Benutzer die Kontrolle über Qualitätseinstellungen zu geben, wäre ein Albtraum.
- Verschiedene Monitoreingaben bei unterschiedlichen Raten: 30 FPS, 75 FPS, 100 FPS, 120 FPS, 144 FPS usw.
- Systeme, die nicht mit 60 FPS Schritt halten können, verlieren visuelle Qualität, um das Spiel bei optimaler Geschwindigkeit laufen zu lassen (am Ende scheitert es vollständig, wenn die Qualität zu niedrig wird).

### Andere Wege, um den Anforderungen an variable Bildwiederholraten gerecht zu werden

Andere Methoden zur Lösung des Problems existieren.

Eine häufige Technik besteht darin, die Simulation mit einer konstanten Frequenz zu aktualisieren und dann so viel (oder so wenig) der tatsächlichen Frames wie möglich zu zeichnen. Die Update-Methode kann ohne Rücksicht auf das, was der Benutzer sieht, weiterlaufen. Die Zeichenmethode kann die letzte Aktualisierung und den Zeitpunkt, zu dem sie stattfand, betrachten. Da das Zeichnen weiß, wann es darstellt, und die Simulationszeit für die letzte Aktualisierung, kann es ein plausibles Bild vorhersehen, das dem Benutzer gezeigt wird. Es spielt keine Rolle, ob dies häufiger als die offizielle Aktualisierungsschleife ist (oder sogar seltener). Die Update-Methode setzt Kontrollpunkte und, so oft, wie es das System erlaubt, zeichnet die Render-Methode Augenblicke der Zeit um sie herum. Es gibt viele Möglichkeiten, die Update-Methode in Web-Standards zu trennen:

- Zeichnen auf `requestAnimationFrame` und Aktualisieren auf ein {{ domxref("setInterval()") }} oder {{ domxref("setTimeout()") }}.

  - Das verbraucht Rechenzeit, auch wenn es nicht fokussiert oder minimiert ist, blockiert den Hauptthread und ist wahrscheinlich ein Überbleibsel traditioneller Spielschleifen (aber es ist einfach.)

- Zeichnen auf `requestAnimationFrame` und aktualisieren auf einem `setInterval` oder `setTimeout` in einem [Web Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers).

  - Das ist dasselbe wie oben, außer dass das Aktualisieren nicht den Hauptthread blockiert (noch wird es vom Hauptthread blockiert). Das ist eine komplexere Lösung und könnte zu viel Overhead für einfache Aktualisierungen sein.

- Zeichnen auf `requestAnimationFrame` und verwenden, um einen Web Worker mit der Aktualisierungsmethode mit der Anzahl der zu berechnenden Ticks, falls vorhanden, anzustoßen.

  - Das ruht, bis `requestAnimationFrame` aufgerufen wird und verunreinigt nicht den Hauptthread, plus man verlässt sich nicht auf altmodische Methoden. Wieder, das ist etwas komplexer als die beiden vorherigen Optionen, und _jede_ Aktualisierung zu beginnen, wird blockiert, bis der Browser sich entscheidet, rAF-Rückrufe auszuführen.

Jede dieser Methoden hat ähnliche Kompromisse:

- Benutzer können Rendering-Frames überspringen oder zusätzliche interpolieren, je nach Leistung.
- Sie können darauf zählen, dass alle Benutzer nicht-kosmetische Variablen mit der gleichen konstanten Frequenz aktualisieren, abzüglich Hänger.
- Viel komplizierter zu programmieren als die einfachen Schleifen, die wir vorher gesehen haben.
- Benutzereingaben werden vollständig ignoriert, bis zur nächsten Aktualisierung (selbst wenn der Benutzer ein schnelles Gerät hat).
- Die obligatorische Interpolation hat ein Leistungsprämie.

Eine separate Aktualisieren- und Zeichenmethode könnte wie das folgende Beispiel aussehen. Der Übersichtlichkeit halber basiert das Beispiel auf dem dritten Punkt, nur ohne die Verwendung von Web Workern für Lesbarkeit (und, ehrlich gesagt, die Schreibbarkeit).

> [!WARNING]
> Dieses Beispiel, insbesondere, bedarf einer technischen Überprüfung.

<!-- prettier-ignore-start -->
```js
/*
 * Mit dem Semikolon zu beginnen, ist für den Fall notwendig, dass irgendeine Zeile Code über diesem Beispiel
 * sich auf die automatische Semikolon-Einfügung (ASI) verlässt. Der Browser könnte versehentlich
 * denken, dieses ganze Beispiel setze die vorherige Zeile fort. Das führende Semikolon
 * markiert den Beginn unserer neuen Zeile, wenn die vorherige nicht leer war oder terminiert wurde.
 *
 * Wir nehmen auch an, dass MyGame zuvor definiert wurde.
 *
 * MyGame.lastRender hält den zuletzt bereitgestellten requestAnimationFrame-Zeitstempel fest.
 * MyGame.lastTick hält die letzte Aktualisierungszeit fest. Erhöht sich immer um tickLength.
 * MyGame.tickLength ist, wie häufig sich der Spielstatus aktualisiert. Es ist 20 Hz (50ms) hier.
 *
 * timeSinceTick ist die Zeit zwischen dem requestAnimationFrame-Rückruf und der letzten Aktualisierung.
 * numTicks ist, wie viele Aktualisierungen zwischen diesen beiden gerenderten Frames geschehen sind.
 *
 * render() wird tFrame übergeben, weil davon ausgegangen wird, dass die Render-Methode berechnet,
 *           wie lange es her ist, seit dem zuletzt übergebenen Aktualisierungstick zu extrapolieren
 *           (rein kosmetisch für schnelle Geräte). Es zeichnet die Szene.
 *
 * update() berechnet den Spielstatus zu einem bestimmten Zeitpunkt. Es sollte immer
 *          um tickLength erhöht werden. Es ist die Autorität für den Spielstatus. Es wird der DOMHighResTimeStamp
 *          für die Zeit übergeben, die es darstellt (was, wie gesagt, immer die letzte Aktualisierung
 *          + MyGame.tickLength ist, es sei denn, eine Pause-Funktion wird hinzugefügt, etc.)
 *
 * setInitialState() führt die verbleibenden Aufgaben aus, bevor die Hauptschleife laufen muss.
 *                   Es ist nur eine generische Beispiel-Funktion, die Sie hinzugefügt haben könnten.
 */

;(() => {
  function main(tFrame) {
    MyGame.stopMain = window.requestAnimationFrame(main);
    const nextTick = MyGame.lastTick + MyGame.tickLength;
    let numTicks = 0;

    // Wenn tFrame < nextTick ist, dann müssen 0 Ticks aktualisiert werden (0 ist Standard für numTicks).
    // Wenn tFrame = nextTick, dann muss 1 Tick aktualisiert werden (und so weiter).
    // Hinweis: Wie wir in der Zusammenfassung erwähnen, sollten Sie verfolgen, wie groß numTicks ist.
    // Wenn es groß ist, dann war entweder Ihr Spiel eingeschlafen oder die Maschine kann nicht Schritt halten.
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
      MyGame.lastTick += MyGame.tickLength; // Nun ist lastTick dieser Tick.
      update(MyGame.lastTick);
    }
  }

  MyGame.lastTick = performance.now();
  MyGame.lastRender = MyGame.lastTick; // Angenommen, der erste Zeichen war bei der ersten Aktualisierung.
  MyGame.tickLength = 50; // Dies legt Ihre Simulation auf 20Hz (50ms) fest.

  setInitialState();
  main(performance.now()); // Starten Sie den Zyklus
})();
```
<!-- prettier-ignore-end -->

Eine andere Alternative besteht darin, bestimmte Dinge weniger oft zu erledigen. Wenn ein Teil Ihrer Aktualisierungsschleife schwer zu berechnen, aber zeitunempfindlich ist, können Sie in Betracht ziehen, seine Frequenz zu reduzieren und, idealerweise, ihn auf Abschnitte über diesen verlängerten Zeitraum zu verteilen. Ein implizites Beispiel dafür fand sich auf dem Artillery Blog für Artillery Games, wo sie [ihren Müllerzeugungsrate anpassen](https://web.archive.org/web/20161021030645/http://blog.artillery.com/2012/10/browser-garbage-collection-and-framerate.html) um Müllsammlung zu optimieren. Offensichtlich ist das Aufräumen von Ressourcen nicht zeitkritisch (insbesondere, wenn das Aufräumen störender ist als der Müll selbst).

Dies könnte auch auf einige Ihrer eigenen Aufgaben zutreffen. Dies sind gute Kandidaten, um gedrosselt zu werden, wenn verfügbare Ressourcen ein Anliegen werden.

## Zusammenfassung

Ich möchte klarstellen, dass jede der obigen oder keine von ihnen das Beste für Ihr Spiel sein könnte. Die richtige Entscheidung hängt ganz von den Kompromissen ab, die Sie bereit (und nicht bereit) sind einzugehen. Das Hauptanliegen ist, zu einer anderen Option zu wechseln. Glücklicherweise habe ich damit keine Erfahrung, aber ich habe gehört, dass es ein schmerzhaftes Spiel von Whack-a-Mole ist.

Eine wichtige Sache, die man auf verwalteten Plattformen, wie dem Web, beachten sollte, ist, dass sich Ihr Loop möglicherweise für signifikante Zeiträume aufhört auszuführen. Dies könnte vorkommen, wenn der Benutzer Ihren Tab unselektiert und der Browser sein `requestAnimationFrame`-Rückrufintervall verlangsamt (oder verlangsamt). Sie haben viele Möglichkeiten, mit dieser Situation umzugehen, und dies könnte davon abhängen, ob Ihr Spiel ein Einzelspieler- oder Mehrspielerspiel ist. Einige Auswahlmöglichkeiten sind:

- Die Lücke als "Pause" betrachten und die Zeit überspringen.

  - Sie können sich wahrscheinlich vorstellen, wie problematisch dies für die meisten Mehrspieler-Spiele ist.

- Sie können die Lücke simulieren, um aufzuholen.

  - Dies kann bei langen Ausfällen und/oder komplexen Aktualisierungen zu einem Problem werden.

- Sie können den Spielstatus von einem Peer oder dem Server wiederherstellen.

  - Das ist unwirksam, wenn Ihre Peers oder Server auch veraltet sind, oder sie existieren nicht, weil das Spiel im Einzelspieler-Modus ist und keinen Server hat.

Sobald Ihre Hauptschleife entwickelt wurde und Sie sich für einen Satz von Annahmen und Kompromissen entschieden haben, die zu Ihrem Spiel passen, geht es nur noch darum, Ihre Entscheidungen zu nutzen, um anwendbare Physik, KI, Sounds, Netzwerksynchronisation und was auch immer Ihr Spiel erfordern könnte, zu berechnen.
