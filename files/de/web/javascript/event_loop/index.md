---
title: Der Event Loop
slug: Web/JavaScript/Event_loop
l10n:
  sourceCommit: 06cdd3a0fe4079360fa0bffb6329e9dc95029dac
---

{{jsSidebar("Advanced")}}

JavaScript hat ein Laufzeitmodell, das auf einem **Event Loop** basiert, welches für die Ausführung des Codes, das Sammeln und Verarbeiten von Ereignissen sowie die Ausführung von in die Warteschlange gestellten Unteraufgaben verantwortlich ist. Dieses Modell unterscheidet sich stark von Modellen in anderen Sprachen wie C und Java.

## Laufzeitkonzepte

Die folgenden Abschnitte erklären ein theoretisches Modell. Moderne JavaScript-Engines implementieren und optimieren die beschriebenen Semantiken intensiv.

### Visuelle Darstellung

![Ein Diagramm zeigt, wie sich Stapel aus Frames, Heaps aus Objekten und Warteschlangen aus Nachrichten zusammensetzen.](the_javascript_runtime_environment_example.svg)

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

1. Beim Aufruf von `bar` wird ein erster Frame erstellt, der Referenzen auf `bars` Argumente und lokale Variablen enthält.
2. Wenn `bar` `foo` aufruft, wird ein zweiter Frame erstellt und oben auf den ersten gesetzt, der Referenzen auf `foos` Argumente und lokale Variablen enthält.
3. Wenn `foo` zurückkehrt, wird das oberste Frame-Element aus dem Stapel entfernt (es bleibt nur der Aufruf-Frame von `bar`).
4. Wenn `bar` zurückkehrt, ist der Stapel leer.

Beachten Sie, dass die Argumente und lokalen Variablen weiterhin existieren können, da sie außerhalb des Stapels gespeichert werden - so können sie von jeder [eingebetteten Funktion](/de/docs/Web/JavaScript/Guide/Functions#nested_functions_and_closures) lange nach der Rückkehr ihrer äußeren Funktion aufgerufen werden.

### Heap

Objekte werden in einem Heap zugewiesen, der lediglich eine Bezeichnung für einen großen (meist unstrukturierten) Speicherbereich ist.

### Warteschlange

Eine JavaScript-Laufzeitumgebung verwendet eine Nachrichtenwarteschlange, die eine Liste von Nachrichten zum Verarbeiten ist. Jede Nachricht hat eine zugehörige Funktion, die aufgerufen wird, um die Nachricht zu behandeln.

An einem Punkt während des [Event Loop](#event_loop) beginnt die Laufzeitumgebung mit der Bearbeitung der Nachrichten in der Warteschlange, beginnend mit der ältesten. Dazu wird die Nachricht aus der Warteschlange entfernt und ihre entsprechende Funktion mit der Nachricht als Eingabeparameter aufgerufen. Wie immer erzeugt das Aufrufen einer Funktion einen neuen Stapel-Frame zur Nutzung durch diese Funktion.

Die Verarbeitung von Funktionen geht weiter, bis der Stapel wieder leer ist. Dann bearbeitet der Event Loop die nächste Nachricht in der Warteschlange (falls eine vorhanden ist).

## Event Loop

Der **Event Loop** erhielt seinen Namen aufgrund der üblichen Implementierung, die normalerweise wie folgt aussieht:

```js
while (queue.waitForMessage()) {
  queue.processNextMessage();
}
```

`queue.waitForMessage()` wartet synchron auf das Eintreffen einer Nachricht (falls nicht bereits eine verfügbar ist und bearbeitet werden kann).

### "Run-to-completion"

Jede Nachricht wird vollständig verarbeitet, bevor eine andere Nachricht bearbeitet wird.

Dies bietet einige angenehme Eigenschaften beim Nachdenken über Ihr Programm, einschließlich der Tatsache, dass wann immer eine Funktion ausgeführt wird, sie nicht unterbrochen werden kann und vollständig ausgeführt wird, bevor anderer Code ausgeführt wird (und Daten ändern kann, die die Funktion manipuliert). Dies unterscheidet sich von C, wo eine Funktion, die in einem Thread ausgeführt wird, vom Laufzeitsystem jederzeit angehalten werden kann, um anderen Code in einem anderen Thread auszuführen.

Ein Nachteil dieses Modells ist, dass wenn eine Nachricht zu lange dauert, die Webanwendung nicht in der Lage ist, Benutzerinteraktionen wie Klicken oder Scrollen zu verarbeiten. Der Browser mildert dies mit dem Dialog "Ein Skript benötigt zu lange zur Ausführung". Eine gute Praxis ist es, die Nachrichtenverarbeitung kurz zu halten und wenn möglich eine Nachricht in mehrere Nachrichten aufzuteilen.

### Nachrichten hinzufügen

In Web-Browsern werden Nachrichten oft hinzugefügt, wenn ein Ereignis eintritt und ein Ereignislistener daran angehängt ist. Wenn es keinen Listener gibt, geht das Ereignis verloren. Ein Klick auf ein Element mit einem Klick-Ereignis-Handler wird also eine Nachricht hinzufügen - ebenso wie jedes andere Ereignis. Einige Ereignisse geschehen jedoch synchron ohne Nachricht – beispielsweise simulierte Klicks über die [`click`](/de/docs/Web/API/HTMLElement/click)-Methode.

Die ersten beiden Argumente der Funktion [`setTimeout`](/de/docs/Web/API/setTimeout) sind eine Nachricht zur Hinzufügung in die Warteschlange und ein Zeitwert (optional; Standard ist `0`). Der _Zeitwert_ stellt die (Mindest-)Verzögerung dar, nach der die Nachricht in die Warteschlange gestellt wird. Gibt es keine andere Nachricht in der Warteschlange und ist der Stapel leer, wird die Nachricht direkt nach der Verzögerung verarbeitet. Gibt es jedoch Nachrichten, muss die `setTimeout`-Nachricht darauf warten, dass andere Nachrichten verarbeitet werden. Aus diesem Grund gibt das zweite Argument eine _Mindest_-Zeit an – keine _garantierte_ Zeit.

Hier ist ein Beispiel, das dieses Konzept demonstriert (`setTimeout` wird nicht unmittelbar nach Ablauf seines Timers ausgeführt):

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

Null-Verzögerung bedeutet nicht, dass der Rückruf nach null Millisekunden gestartet wird. Das Aufrufen von [`setTimeout`](/de/docs/Web/API/setTimeout) mit einer Verzögerung von `0` (null) Millisekunden führt nicht dazu, dass die Rückruffunktion nach dem gegebenen Intervall ausgeführt wird.

Die Ausführung hängt von der Anzahl der wartenden Aufgaben in der Warteschlange ab. Im unten stehenden Beispiel wird die Nachricht `"this is just a message"` in die Konsole geschrieben, bevor die Nachricht im Rückruf verarbeitet wird, da die Verzögerung die _Mindest_zeit ist, die erforderlich ist, um die Anfrage von der Laufzeitumgebung zu verarbeiten (nicht eine \_garantierte_ Zeit).

Die `setTimeout` muss warten, bis der gesamte Code für die Nachrichten in der Warteschlange abgeschlossen ist, auch wenn Sie ein bestimmtes Zeitlimit für Ihr `setTimeout` festgelegt haben.

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

### Mehrere Laufzeitumgebungen kommunizieren miteinander

Ein Web-Arbeiter oder ein Cross-Origin `iframe` hat seinen eigenen Stapel, Heap und seine eigene Nachrichtenwarteschlange. Zwei unterschiedliche Laufzeitumgebungen können nur durch das Senden von Nachrichten über die [`postMessage`](/de/docs/Web/API/Window/postMessage)-Methode kommunizieren. Diese Methode fügt der anderen Laufzeit eine Nachricht hinzu, wenn diese `message`-Ereignisse abhört.

## Niemals blockierend

Eine sehr interessante Eigenschaft des Event Loop-Modells ist, dass JavaScript, im Gegensatz zu vielen anderen Sprachen, niemals blockiert. Die Bearbeitung von Ein-/Ausgaben wird typischerweise über Ereignisse und Rückrufe durchgeführt, sodass die Anwendung auch dann noch andere Dinge wie Benutzereingaben verarbeiten kann, wenn auf die Rückgabe einer [IndexedDB](/de/docs/Web/API/IndexedDB_API)-Abfrage oder einer [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage gewartet wird.

Es gibt einige Ausnahmen wie `alert` oder synchrones XHR, aber es gilt als eine gute Praxis, sie zu vermeiden. Vorsicht: [Ausnahmen von der Ausnahme existieren](https://stackoverflow.com/questions/2734025/is-javascript-guaranteed-to-be-single-threaded/2734311#2734311) (aber sind in der Regel Implementierungsfehler, eher als alles andere).

## Siehe auch

- [Event Loops](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops) im HTML-Standard
- [Was ist der Event Loop?](https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick#what-is-the-event-loop) in den Node.js-Dokumenten
