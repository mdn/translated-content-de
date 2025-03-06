---
title: JavaScript-Ausführungsmodell
slug: Web/JavaScript/Reference/Execution_model
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("More")}}

JavaScript hat ein Laufzeitmodell basierend auf einer **Ereignisschleife**, die für die Ausführung des Codes, das Sammeln und Bearbeiten von Ereignissen sowie die Ausführung von wartenden Unteraufgaben zuständig ist. Dieses Modell unterscheidet sich erheblich von Modellen in anderen Sprachen wie C und Java.

## Laufzeitkonzepte

Die folgenden Abschnitte erläutern ein theoretisches Modell. Moderne JavaScript-Engines implementieren und optimieren die beschriebenen Semantiken stark.

### Visuelle Darstellung

![Ein Diagramm, das zeigt, wie Stacks aus Frames, Heaps aus Objekten und Queues aus Nachrichten bestehen.](the_javascript_runtime_environment_example.svg)

### Stack

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

1. Beim Aufruf von `bar` wird ein erstes Frame erstellt, das Referenzen auf `bar`'s Argumente und lokale Variablen enthält.
2. Wenn `bar` `foo` aufruft, wird ein zweites Frame erstellt und oben auf das erste gestellt, das Referenzen auf `foo`'s Argumente und lokale Variablen enthält.
3. Wenn `foo` zurückkehrt, wird das oberste Frame-Element aus dem Stack entfernt (es verbleibt nur das Aufruf-Frame von `bar`).
4. Wenn `bar` zurückkehrt, ist der Stack leer.

Beachten Sie, dass die Argumente und lokalen Variablen weiterhin existieren können, da sie außerhalb des Stacks gespeichert werden — so können sie von allen [geschachtelten Funktionen](/de/docs/Web/JavaScript/Guide/Functions#function_scopes_and_closures) lange nach dem Ende der äußeren Funktion aufgerufen werden.

### Heap

Objekte werden in einem Heap zugewiesen, der einfach eine Bezeichnung für einen großen (meist unstrukturierten) Speicherbereich ist.

### Queue

Eine JavaScript-Laufzeitumgebung verwendet eine Nachrichtenwarteschlange, die eine Liste von zu verarbeitenden Nachrichten ist. Jede Nachricht hat eine zugehörige Funktion, die aufgerufen wird, um die Nachricht zu verarbeiten.

Zu einem bestimmten Zeitpunkt während der [Ereignisschleife](#ereignisschleife) beginnt die Laufzeitumgebung mit der Bearbeitung der Nachrichten in der Warteschlange, beginnend mit der ältesten. Dazu wird die Nachricht aus der Warteschlange entfernt und die zugehörige Funktion wird mit der Nachricht als Eingabeparameter aufgerufen. Wie immer erstellt der Aufruf einer Funktion einen neuen Stack-Frame für die Benutzung dieser Funktion.

Die Funktionen werden weiterverarbeitet, bis der Stack erneut leer ist. Dann verarbeitet die Ereignisschleife die nächste Nachricht in der Warteschlange (falls es eine gibt).

## Ereignisschleife

Die **Ereignisschleife** hat ihren Namen von ihrer üblichen Implementierung, die oft folgendem Aufbau ähnelt:

```js
while (queue.waitForMessage()) {
  queue.processNextMessage();
}
```

`queue.waitForMessage()` wartet synchron auf das Eintreffen einer Nachricht (falls nicht bereits eine verfügbar und wartend auf Bearbeitung ist).

### "Run-to-Completion"

Jede Nachricht wird vollständig verarbeitet, bevor eine andere Nachricht bearbeitet wird.

Dies bietet einige nützliche Eigenschaften beim Denken über Ihr Programm, einschließlich der Tatsache, dass, wenn eine Funktion läuft, sie nicht unterbrochen werden kann und vollständig abläuft, bevor anderer Code ausgeführt wird (und die Daten, die die Funktion manipuliert, geändert werden können). Dies unterscheidet sich von C, wo eine Funktion, die in einem Thread läuft, jederzeit vom Laufzeitsystem angehalten werden kann, um anderen Code in einem anderen Thread auszuführen.

Ein Nachteil dieses Modells ist, dass, wenn eine Nachricht zu lange dauert, die Webanwendung nicht in der Lage ist, Benutzerinteraktionen wie Klicks oder Scrollen zu verarbeiten. Der Browser mildert dies mit dem Dialog "Ein Skript läuft zu lange" ab. Eine gute Praxis ist es, die Nachrichtenverarbeitung kurz zu halten und, falls möglich, eine Nachricht in mehrere Nachrichten aufzuteilen.

### Hinzufügen von Nachrichten

In Webbrowsern werden Nachrichten oft hinzugefügt, wenn ein Ereignis auftritt und ein Ereignislistener daran angebunden ist. Wenn kein Listener vorhanden ist, geht das Ereignis verloren. Ein Klick auf ein Element mit einem Klick-Ereignishandler fügt eine Nachricht hinzu — ebenso wie jedes andere Ereignis. Einige Ereignisse passieren jedoch synchron ohne eine Nachricht — zum Beispiel simulierte Klicks über die [`click`](/de/docs/Web/API/HTMLElement/click)-Methode.

Die ersten beiden Argumente der Funktion [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) sind eine Nachricht, die zur Warteschlange hinzugefügt werden soll, und ein Zeitwert (optional; Standard ist `0`). Der _Zeitwert_ repräsentiert die (minimale) Verzögerung, nach der die Nachricht in die Warteschlange gestellt wird. Wenn es keine andere Nachricht in der Warteschlange gibt und der Stack leer ist, wird die Nachricht direkt nach der Verzögerung verarbeitet. Wenn es jedoch Nachrichten gibt, muss die `setTimeout()`-Nachricht warten, bis andere Nachrichten verarbeitet wurden. Aus diesem Grund gibt das zweite Argument eine _minimale_ Zeit an — keine _garantierte_ Zeit.

Hier ist ein Beispiel, das dieses Konzept veranschaulicht (`setTimeout()` läuft nicht direkt nach Ablauf seines Timers ab):

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

### Null-Verzögerungen

Eine Verzögerung von null bedeutet nicht, dass der Rückruf nach null Millisekunden ausgeführt wird. Der Aufruf von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) mit einer Verzögerung von `0` (null) Millisekunden führt die Rückruffunktion nicht nach dem angegebenen Intervall aus.

Die Ausführung hängt von der Anzahl der wartenden Aufgaben in der Warteschlange ab. Im folgenden Beispiel wird die Nachricht `"this is just a message"` in die Konsole geschrieben, bevor die Nachricht im Rückruf verarbeitet wird, da die Verzögerung die _minimale_ Zeit ist, die erforderlich ist, damit die Laufzeit das Anliegen bearbeiten kann (keine _garantierte_ Zeit).

Das `setTimeout()` muss warten, bis der gesamte Code für in der Warteschlange befindliche Nachrichten abgeschlossen ist, auch wenn Sie ein bestimmtes Zeitlimit für Ihr `setTimeout()` angegeben haben.

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

### Mehrere Laufzeiten, die zusammen kommunizieren

Ein Web Worker oder ein Cross-Origin-`iframe` hat seinen eigenen Stack, Heap und Nachrichtenwarteschlange. Zwei getrennte Laufzeiten können nur durch den Versand von Nachrichten über die [`postMessage`](/de/docs/Web/API/Window/postMessage)-Methode kommunizieren. Diese Methode fügt der anderen Laufzeit eine Nachricht hinzu, wenn letztere auf `message`-Ereignisse hört.

## Niemals blockierend

Eine sehr interessante Eigenschaft des Ereignisschleifenmodells ist, dass JavaScript, im Gegensatz zu vielen anderen Sprachen, niemals blockiert. Die Behandlung von I/O erfolgt typischerweise über Ereignisse und Rückrufe, sodass, wenn die Anwendung auf den Rückruf einer [IndexedDB](/de/docs/Web/API/IndexedDB_API)-Abfrage oder eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anforderung wartet, sie weiterhin andere Dinge wie Benutzereingaben verarbeiten kann.

Es gibt ältere Ausnahmen wie `alert` oder synchrones XHR, aber es wird als gute Praxis angesehen, diese zu vermeiden. Vorsicht: [Ausnahmen zu den Ausnahmen existieren](https://stackoverflow.com/questions/2734025/is-javascript-guaranteed-to-be-single-threaded/2734311#2734311) (sind aber in der Regel Implementierungsfehler, anstatt alles andere).

## Siehe auch

- [Ereignisschleifen](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops) im HTML-Standard
- [Was ist die Ereignisschleife?](https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick#what-is-the-event-loop) in den Node.js-Dokumentationen
