---
title: Die Event-Schleife
slug: Web/JavaScript/Event_loop
l10n:
  sourceCommit: 06cdd3a0fe4079360fa0bffb6329e9dc95029dac
---

{{jsSidebar("Advanced")}}

JavaScript hat ein Laufzeitmodell, das auf einer **Ereignisschleife** basiert. Diese ist verantwortlich für das Ausführen des Codes, das Sammeln und Verarbeiten von Ereignissen sowie das Ausführen von in die Warteschlange gestellten Unteraufgaben. Dieses Modell unterscheidet sich stark von Modellen in anderen Sprachen wie C und Java.

## Laufzeitkonzepte

Die folgenden Abschnitte erklären ein theoretisches Modell. Moderne JavaScript-Engines implementieren und optimieren die beschriebenen Semantiken stark.

### Visuelle Darstellung

![Ein Diagramm zeigt, wie Stacks aus Frames bestehen, Heaps aus Objekten und Warteschlangen aus Nachrichten.](the_javascript_runtime_environment_example.svg)

### Stack

Funktionsaufrufe bilden einen Stack von _Frames_.

```js
function foo(b) {
  const a = 10;
  return a + b + 11;
}

function bar(x) {
  const y = 3;
  return foo(x * y);
}

const baz = bar(7); // weist 42 baz zu
```

Reihenfolge der Operationen:

1. Beim Aufrufen von `bar` wird ein erster Frame angelegt, der Referenzen auf `bars` Argumente und lokale Variablen enthält.
2. Wenn `bar` `foo` aufruft, wird ein zweiter Frame erstellt und auf den ersten gelegt, der Referenzen auf `foos` Argumente und lokale Variablen enthält.
3. Wenn `foo` zurückkehrt, wird das oberste Frame-Element aus dem Stack herausgenommen (was nur `bars` Aufruf-Frame hinterlässt).
4. Wenn `bar` zurückkehrt, ist der Stack leer.

Beachten Sie, dass die Argumente und lokalen Variablen möglicherweise weiterhin existieren, da sie außerhalb des Stacks gespeichert werden - so können sie von allen [verschachtelten Funktionen](/de/docs/Web/JavaScript/Guide/Functions#nested_functions_and_closures) lange nach der Rückkehr ihrer äußeren Funktion aufgerufen werden.

### Heap

Objekte werden in einem Heap zugewiesen, der einfach ein Name für einen großen (meist unstrukturierten) Speicherbereich ist.

### Queue

Ein JavaScript-Laufzeitsystem verwendet eine Nachrichtenwarteschlange, die eine Liste von zu verarbeitenden Nachrichten ist. Jede Nachricht hat eine zugehörige Funktion, die aufgerufen wird, um die Nachricht zu behandeln.

Irgendwann während der [Ereignisschleife](#ereignisschleife) beginnt die Laufzeitumgebung, die Nachrichten in der Warteschlange zu verarbeiten, beginnend mit der ältesten. Zu diesem Zweck wird die Nachricht aus der Warteschlange entfernt und ihre entsprechende Funktion mit der Nachricht als Eingabeparameter aufgerufen. Wie immer erstellt das Aufrufen einer Funktion einen neuen Stack-Frame zur Verwendung durch diese Funktion.

Die Verarbeitung von Funktionen dauert solange an, bis der Stack wieder leer ist. Dann verarbeitet die Ereignisschleife die nächste Nachricht in der Warteschlange (wenn eine vorhanden ist).

## Ereignisschleife

Die **Ereignisschleife** hat ihren Namen von ihrer typischen Implementierung, die normalerweise ähnlich aussieht wie:

```js
while (queue.waitForMessage()) {
  queue.processNextMessage();
}
```

`queue.waitForMessage()` wartet synchron auf das Eintreffen einer Nachricht (falls nicht bereits eine verfügbar ist und darauf wartet, bearbeitet zu werden).

### "Run-to-completion"

Jede Nachricht wird vollständig bearbeitet, bevor eine andere Nachricht bearbeitet wird.

Dies bietet einige angenehme Eigenschaften, wenn Sie über Ihr Programm nachdenken, einschließlich der Tatsache, dass, wann immer eine Funktion ausgeführt wird, sie nicht präemptiv unterbrochen werden kann und vollständig ausgeführt wird, bevor ein anderer Code ausgeführt wird (und Daten ändern kann, die die Funktion manipuliert). Dies unterscheidet sich von C, zum Beispiel, wo, wenn eine Funktion in einem Thread läuft, sie jederzeit vom Laufzeitsystem angehalten werden kann, um anderen Code in einem anderen Thread auszuführen.

Ein Nachteil dieses Modells ist, dass, wenn eine Nachricht zu lange dauert, die Webanwendung keine Benutzerinteraktionen wie Klicken oder Scrollen verarbeiten kann. Der Browser mildert dies mit dem Dialog "Ein Skript benötigt zu lange zum Ausführen" ab. Eine gute Praxis ist, die Nachrichtenverarbeitung kurz zu halten und, wenn möglich, eine Nachricht in mehrere Nachrichten aufzuteilen.

### Hinzufügen von Nachrichten

In Webbrowsern werden Nachrichten oft hinzugefügt, wenn ein Ereignis auftritt und ein Ereignis-Listener daran gebunden ist. Wenn kein Listener vorhanden ist, geht das Ereignis verloren. Ein Klick auf ein Element mit einem Klick-Ereignis-Handler wird eine Nachricht hinzufügen – ebenso wie jedes andere Ereignis. Einige Ereignisse treten jedoch synchron ohne Nachricht auf – zum Beispiel simulierte Klicks über die {{domxref("HTMLElement/click", "click")}}-Methode.

Die ersten beiden Argumente der Funktion [`setTimeout`](/de/docs/Web/API/setTimeout) sind eine Nachricht, die der Warteschlange hinzugefügt werden soll, und ein Zeitwert (optional; Standard ist `0`). Der _Zeitwert_ repräsentiert die (minimale) Verzögerung, nach der die Nachricht in die Warteschlange gestellt wird. Wenn keine andere Nachricht in der Warteschlange vorhanden ist und der Stack leer ist, wird die Nachricht direkt nach der Verzögerung verarbeitet. Wenn jedoch Nachrichten vorhanden sind, muss die `setTimeout`-Nachricht warten, bis andere Nachrichten verarbeitet werden. Aus diesem Grund gibt das zweite Argument eine _Mindestzeit_ an – keine _garantierte_ Zeit.

Hier ist ein Beispiel, das dieses Konzept demonstriert (`setTimeout` wird nicht sofort nach Ablauf des Timers ausgeführt):

```js
const seconds = new Date().getTime() / 1000;

setTimeout(() => {
  // druckt "2" aus, was bedeutet, dass der Rückruf nicht sofort nach 500 Millisekunden aufgerufen wird.
  console.log(`Ran after ${new Date().getTime() / 1000 - seconds} seconds`);
}, 500);

while (true) {
  if (new Date().getTime() / 1000 - seconds >= 2) {
    console.log("Good, looped for 2 seconds");
    break;
  }
}
```

### Null-Verzögerungen

Eine Null-Verzögerung bedeutet nicht, dass der Rückruf nach null Millisekunden ausgelöst wird. Ein Aufruf von [`setTimeout`](/de/docs/Web/API/setTimeout) mit einer Verzögerung von `0` (null) Millisekunden führt die Rückruffunktion nicht nach dem angegebenen Intervall aus.

Die Ausführung hängt von der Anzahl der wartenden Aufgaben in der Warteschlange ab. Im untenstehenden Beispiel wird die Nachricht "this is just a message" in die Konsole geschrieben, bevor die Nachricht im Rückruf verarbeitet wird, da die Verzögerung die _Mindestzeit_ ist, die die Laufzeit benötigt, um die Anfrage zu verarbeiten (nicht eine _garantierte_ Zeit).

Das `setTimeout` muss warten, bis der gesamte Code für wartende Nachrichten abgeschlossen ist, selbst wenn Sie eine bestimmte Zeitbegrenzung für Ihr `setTimeout` angegeben haben.

```js
(() => {
  console.log("this is the start");

  setTimeout(() => {
    console.log("Callback 1: this is a msg from call back");
  }); // hat einen Standardzeitwert von 0

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

### Mehrere Laufzeitumgebungen kommunizieren miteinander

Ein Web Worker oder ein Cross-Origin-`iframe` hat seinen eigenen Stack, Heap und Nachrichtenwarteschlange. Zwei unterschiedliche Laufzeitumgebungen können nur über das Senden von Nachrichten über die [`postMessage`](/de/docs/Web/API/Window/postMessage)-Methode kommunizieren. Diese Methode fügt der anderen Laufzeit eine Nachricht hinzu, wenn diese auf `message`-Ereignisse hört.

## Niemals blockierend

Eine sehr interessante Eigenschaft des Event-Schleifen-Modells ist, dass JavaScript, im Gegensatz zu vielen anderen Sprachen, niemals blockiert. Die Behandlung von I/O wird typischerweise über Ereignisse und Callbacks durchgeführt. Wenn die Anwendung also auf eine [IndexedDB](/de/docs/Web/API/IndexedDB_API)-Abfrage wartet oder ein [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf zurückkehrt, kann sie immer noch andere Dinge wie Benutzereingaben verarbeiten.

Althergebrachte Ausnahmen existieren wie `alert` oder synchrones XHR, aber es gilt als gute Praxis, sie zu vermeiden. Achtung: [Ausnahmen von der Ausnahme existieren](https://stackoverflow.com/questions/2734025/is-javascript-guaranteed-to-be-single-threaded/2734311#2734311) (sind aber in der Regel Implementierungsfehler und nichts anderes).

## Siehe auch

- [Ereignisschleifen](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops) im HTML-Standard
- [Was ist die Ereignisschleife?](https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick#what-is-the-event-loop) in den Node.js-Dokumenten
