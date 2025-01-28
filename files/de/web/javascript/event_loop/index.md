---
title: Die Ereignisschleife
slug: Web/JavaScript/Event_loop
l10n:
  sourceCommit: 8f10db5cabb50ee778f781f96adadc8cff98761a
---

{{jsSidebar("Advanced")}}

JavaScript hat ein Laufzeitmodell, das auf einer **Ereignisschleife** basiert, die für die Ausführung des Codes, das Sammeln und Verarbeiten von Ereignissen und das Ausführen von wartenden Unteraufgaben zuständig ist. Dieses Modell unterscheidet sich erheblich von Modellen in anderen Sprachen wie C und Java.

## Laufzeitkonzepte

Die folgenden Abschnitte erläutern ein theoretisches Modell. Moderne JavaScript-Engines implementieren und optimieren die beschriebenen Semantiken stark.

### Visuelle Darstellung

![Ein Diagramm zeigt, wie Stapel aus Frames, Heaps aus Objekten und Warteschlangen aus Nachrichten bestehen.](the_javascript_runtime_environment_example.svg)

### Stapel

Funktionsaufrufe bilden einen Stapel von _Frames_.

```js
function foo(b) {
  const a = 10;
  return a + b + 11;
}

function bar(x) {
  const y = 3;
  return foo(x * y);
}

const baz = bar(7); // assigns 42 to baz
```

Reihenfolge der Operationen:

1. Beim Aufruf von `bar` wird ein erstes Frame erstellt, das Referenzen zu `bar`'s Argumenten und lokalen Variablen enthält.
2. Wenn `bar` `foo` aufruft, wird ein zweites Frame erstellt und auf das erste gelegt, das Referenzen zu `foo`'s Argumenten und lokalen Variablen enthält.
3. Wenn `foo` zurückkehrt, wird das oberste Frame-Element aus dem Stapel entfernt (sodass nur das Aufruf-Frame von `bar` übrig bleibt).
4. Wenn `bar` zurückkehrt, ist der Stapel leer.

Beachten Sie, dass die Argumente und lokalen Variablen bestehen bleiben können, da sie außerhalb des Stapels gespeichert sind — sie sind daher für alle [verschachtelten Funktionen](/de/docs/Web/JavaScript/Guide/Functions#function_scopes_and_closures) zugänglich, lange nachdem ihre äußere Funktion zurückgekehrt ist.

### Heap

Objekte werden in einem Heap zugewiesen, was einfach ein Name für einen großen (meist unstrukturierten) Speicherbereich ist.

### Warteschlange

Eine JavaScript-Laufzeit verwendet eine Nachrichtenwarteschlange, die eine Liste von zu verarbeitenden Nachrichten ist. Jede Nachricht hat eine zugeordnete Funktion, die aufgerufen wird, um die Nachricht zu verarbeiten.

An einem Punkt während der [Ereignisschleife](#ereignisschleife) beginnt die Laufzeit, die Nachrichten in der Warteschlange zu bearbeiten, beginnend mit der ältesten. Dazu wird die Nachricht aus der Warteschlange entfernt und die entsprechende Funktion mit der Nachricht als Eingabeparameter aufgerufen. Wie immer erstellt der Aufruf einer Funktion einen neuen Stapelrahmen zur Verwendung durch diese Funktion.

Die Verarbeitung von Funktionen wird fortgesetzt, bis der Stapel erneut leer ist. Dann wird die Ereignisschleife die nächste Nachricht in der Warteschlange bearbeiten (falls vorhanden).

## Ereignisschleife

Die **Ereignisschleife** hat ihren Namen von der Art und Weise, wie sie normalerweise implementiert wird, was meist so aussieht:

```js
while (queue.waitForMessage()) {
  queue.processNextMessage();
}
```

`queue.waitForMessage()` wartet synchron auf das Eintreffen einer Nachricht (wenn keine bereits verfügbar und bereit zur Verarbeitung ist).

### "Run-to-completion"

Jede Nachricht wird vollständig verarbeitet, bevor eine andere Nachricht verarbeitet wird.

Dies bietet einige angenehme Eigenschaften bei der Überlegung zum Programm, einschließlich der Tatsache, dass immer dann, wenn eine Funktion läuft, sie nicht unterbrochen werden kann und vollständig läuft, bevor ein anderer Code läuft (und die Daten, die die Funktion bearbeitet, modifizieren kann). Dies unterscheidet sich z. B. von C, wo, wenn eine Funktion in einem Thread läuft, sie jederzeit vom Laufzeitsystem gestoppt werden kann, um anderen Code in einem anderen Thread auszuführen.

Ein Nachteil dieses Modells ist, dass, wenn eine Nachricht zu lange braucht, um abgeschlossen zu werden, die Webanwendung nicht in der Lage ist, Benutzerinteraktionen wie Klicken oder Scrollen zu verarbeiten. Der Browser mildert dies mit dem Dialog "Ein Skript läuft zu lange.". Eine gute Praxis besteht darin, die Nachrichtenverarbeitung kurz zu halten und, wenn möglich, eine Nachricht in mehrere Nachrichten aufzuteilen.

### Hinzufügen von Nachrichten

In Webbrowsern werden Nachrichten häufig hinzugefügt, wenn ein Ereignis eintritt und ein Ereignis-Listener daran angehängt ist. Wenn es keinen Listener gibt, geht das Ereignis verloren. Ein Klick auf ein Element mit einem Klickereignis-Handler fügt eine Nachricht hinzu – ebenso wie jedes andere Ereignis. Einige Ereignisse treten jedoch synchron und ohne Nachricht auf – zum Beispiel simulierte Klicks über die [`click`](/de/docs/Web/API/HTMLElement/click) Methode.

Die ersten beiden Argumente der Funktion [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) sind eine Nachricht, die der Warteschlange hinzugefügt werden soll, und ein Zeitwert (optional; standardmäßig `0`). Der _Zeitwert_ stellt die (Mindest-)Verzögerung dar, nach der die Nachricht in die Warteschlange gestellt wird. Wenn sich keine andere Nachricht in der Warteschlange befindet und der Stapel leer ist, wird die Nachricht direkt nach der Verzögerung verarbeitet. Wenn jedoch Nachrichten vorhanden sind, muss die `setTimeout()`-Nachricht warten, bis andere Nachrichten verarbeitet wurden. Aus diesem Grund gibt das zweite Argument eine _Mindestzeit_ an - nicht eine _garantierte_ Zeit.

Hier ist ein Beispiel, das dieses Konzept demonstriert (`setTimeout()` läuft nicht sofort nach Ablauf seines Timers):

```js
const seconds = new Date().getTime() / 1000;

setTimeout(() => {
  // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
  console.log(`Ran after ${new Date().getTime() / 1000 - seconds} seconds`);
}, 500);

while (true) {
  if (new Date().getTime() / 1000 - seconds >= 2) {
    console.log("Good, looped for 2 seconds");
    break;
  }
}
```

### Null-Abweichungen

Null-Abweichungen bedeuten nicht, dass der Rückruf nach null Millisekunden ausgelöst wird. Das Aufrufen von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) mit einer Verzögerung von `0` (null) Millisekunden führt die Rückruffunktion nicht nach dem angegebenen Intervall aus.

Die Ausführung hängt von der Anzahl der wartenden Aufgaben in der Warteschlange ab. Im untenstehenden Beispiel wird die Nachricht "das ist nur eine Nachricht" in die Konsole geschrieben, bevor die Nachricht im Rückruf verarbeitet wird, weil die Verzögerung die _Mindestzeit_ ist, die erforderlich ist, damit die Laufzeit die Anfrage verarbeitet (nicht eine _garantierte_ Zeit).

Das `setTimeout()` muss warten, bis der gesamte Code für die in der Warteschlange stehenden Nachrichten abgeschlossen ist, obwohl Sie für Ihr `setTimeout()` ein bestimmtes Zeitlimit angegeben haben.

```js
(() => {
  console.log("this is the start");

  setTimeout(() => {
    console.log("Callback 1: this is a msg from call back");
  }); // has a default time value of 0

  console.log("this is just a message");

  setTimeout(() => {
    console.log("Callback 2: this is a msg from call back");
  }, 0);

  console.log("this is the end");
})();

// "this is the start"
// "this is just a message"
// "this is the end"
// "Callback 1: this is a msg from call back"
// "Callback 2: this is a msg from call back"
```

### Mehrere Laufzeiten, die miteinander kommunizieren

Ein Web Worker oder ein Cross-Origin-`iframe` hat seinen eigenen Stapel, Heap und Nachrichtenwarteschlange. Zwei unterschiedliche Laufzeiten können nur durch das Senden von Nachrichten über die [`postMessage`](/de/docs/Web/API/Window/postMessage) Methode kommunizieren. Diese Methode fügt der anderen Laufzeit eine Nachricht hinzu, wenn letztere auf `message`-Ereignisse hört.

## Niemals blockierend

Eine sehr interessante Eigenschaft des Ereignisschleifenmodells ist, dass JavaScript, anders als viele andere Sprachen, niemals blockiert. Die Verarbeitung von Ein-/Ausgaben erfolgt typischerweise über Ereignisse und Rückrufe, sodass die Anwendung, während sie auf die Rückkehr einer [IndexedDB](/de/docs/Web/API/IndexedDB_API)-Abfrage oder einer [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage wartet, weiterhin andere Dinge wie Benutzereingaben verarbeiten kann.

Es gibt alte Ausnahmen wie `alert` oder synchrones XHR, aber es wird als gute Praxis angesehen, diese zu vermeiden. Vorsicht: [Ausnahmen von der Ausnahme existieren](https://stackoverflow.com/questions/2734025/is-javascript-guaranteed-to-be-single-threaded/2734311#2734311) (sind aber normalerweise Implementierungsfehler und nichts anderes).

## Siehe auch

- [Ereignisschleifen](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops) im HTML-Standard
- [Was ist die Ereignisschleife?](https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick#what-is-the-event-loop) in den Node.js-Dokumenten
