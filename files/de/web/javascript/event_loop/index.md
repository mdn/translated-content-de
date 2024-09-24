---
title: Der Event Loop
slug: Web/JavaScript/Event_loop
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{jsSidebar("Advanced")}}

JavaScript basiert auf einem Laufzeitmodell, das auf einem **Event Loop** beruht. Dieser ist verantwortlich für die Ausführung des Codes, das Sammeln und Verarbeiten von Ereignissen und die Ausführung von Aufgaben in der Warteschlange. Dieses Modell unterscheidet sich erheblich von Modellen in anderen Sprachen wie C und Java.

## Laufzeitkonzepte

Die folgenden Abschnitte erklären ein theoretisches Modell. Moderne JavaScript-Engines implementieren und optimieren die beschriebenen Semantiken umfassend.

### Visuelle Darstellung

![Ein Diagramm, das zeigt, wie Stacks aus Frames bestehen, Heaps aus Objekten und Queues aus Nachrichten.](the_javascript_runtime_environment_example.svg)

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

const baz = bar(7); // assigns 42 to baz
```

Reihenfolge der Operationen:

1. Beim Aufruf von `bar` wird ein erster Frame erstellt, der Referenzen auf die Argumente und lokalen Variablen von `bar` enthält.
2. Wenn `bar` `foo` aufruft, wird ein zweiter Frame erstellt und dem ersten oben aufgesetzt, der Referenzen auf die Argumente und lokalen Variablen von `foo` enthält.
3. Wenn `foo` zurückkehrt, wird das oberste Frame-Element aus dem Stack entfernt (so dass nur noch der Aufruf-Frame von `bar` verbleibt).
4. Wenn `bar` zurückkehrt, ist der Stack leer.

Beachten Sie, dass die Argumente und lokalen Variablen weiterhin existieren können, da sie außerhalb des Stacks gespeichert werden — so können sie von beliebigen [verschachtelten Funktionen](/de/docs/Web/JavaScript/Guide/Functions#verschachtelte_funktionen_und_closures) lange nach der Rückkehr ihrer äußeren Funktion aufgerufen werden.

### Heap

Objekte werden in einem Heap zugewiesen, der lediglich eine Bezeichnung für einen großen (meist unstrukturierten) Speicherbereich ist.

### Queue

Eine JavaScript-Laufzeit verwendet eine Nachrichtenwarteschlange, die eine Liste von zu verarbeitenden Nachrichten ist. Jede Nachricht hat eine zugeordnete Funktion, die aufgerufen wird, um die Nachricht zu bearbeiten.

Irgendwann während des [Event Loops](#event_loop) beginnt die Laufzeit, die Nachrichten in der Warteschlange zu bearbeiten, beginnend mit der ältesten. Dazu wird die Nachricht aus der Warteschlange entfernt und die entsprechende Funktion mit der Nachricht als Eingabeparameter aufgerufen. Wie immer erstellt das Aufrufen einer Funktion einen neuen Stack-Frame für die Verwendung dieser Funktion.

Die Bearbeitung von Funktionen wird fortgesetzt, bis der Stack wieder leer ist. Dann verarbeitet der Event Loop die nächste Nachricht in der Warteschlange (falls vorhanden).

## Event Loop

Der **Event Loop** hat seinen Namen aufgrund der Art und Weise, wie er normalerweise implementiert wird, die üblicherweise wie folgt aussieht:

```js
while (queue.waitForMessage()) {
  queue.processNextMessage();
}
```

`queue.waitForMessage()` wartet synchron darauf, dass eine Nachricht eingeht (falls keine bereits verfügbar und bereit zur Bearbeitung ist).

### "Run-to-completion"

Jede Nachricht wird vollständig verarbeitet, bevor eine andere Nachricht bearbeitet wird.

Dies bietet einige positive Eigenschaften beim Nachdenken über Ihr Programm, einschließlich der Tatsache, dass wann immer eine Funktion ausgeführt wird, sie nicht unterbrochen werden kann und vollständig ausgeführt wird, bevor irgendein anderer Code ausgeführt wird (und kann die Daten ändern, die die Funktion manipuliert). Dies unterscheidet sich beispielsweise von C, wo eine Funktion, die in einem Thread läuft, jederzeit vom Laufzeitsystem unterbrochen werden kann, um anderen Code in einem anderen Thread auszuführen.

Ein Nachteil dieses Modells ist, dass wenn eine Nachricht zu lange braucht, um abgeschlossen zu werden, die Webanwendung keine Benutzerinteraktionen wie Klicks oder Scrollen verarbeiten kann. Der Browser mildert dies mit dem Dialog "Ein Skript benötigt zu lange zur Ausführung" ab. Eine gute Praxis ist es, die Bearbeitung von Nachrichten kurz zu halten und, wenn möglich, eine Nachricht in mehrere Nachrichten aufzuteilen.

### Hinzufügen von Nachrichten

In Webbrowsern werden Nachrichten häufig hinzugefügt, wenn ein Ereignis auftritt und ein Ereignis-Listener daran angehängt ist. Wenn kein Listener vorhanden ist, geht das Ereignis verloren. Ein Klick auf ein Element mit einem Klick-Ereignis-Handler wird eine Nachricht hinzufügen — ebenso wie jedes andere Ereignis. Einige Ereignisse treten jedoch synchron ohne Nachricht auf — beispielsweise simulierte Klicks über die [`click`](/de/docs/Web/API/HTMLElement/click)-Methode.

Die ersten beiden Argumente der Funktion [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) sind eine Nachricht, die zur Warteschlange hinzugefügt werden soll, und ein Zeitwert (optional; Standardwert ist `0`). Der _Zeitwert_ repräsentiert die (minimale) Verzögerung, nach der die Nachricht in die Warteschlange eingereiht wird. Wenn keine andere Nachricht in der Warteschlange ist und der Stack leer ist, wird die Nachricht unmittelbar nach der Verzögerung verarbeitet. Wenn es Nachrichten gibt, muss die `setTimeout()`-Nachricht darauf warten, dass andere Nachrichten verarbeitet werden. Aus diesem Grund gibt das zweite Argument eine _Mindest_zeit an — keine \_garantierte_ Zeit.

Hier ist ein Beispiel, das dieses Konzept demonstriert (`setTimeout()` läuft nicht sofort ab, nachdem sein Timer abgelaufen ist):

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

Null-Verzögerung bedeutet nicht, dass der Callback nach Null Millisekunden ausgelöst wird. Der Aufruf von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) mit einer Verzögerung von `0` (null) Millisekunden führt die Callback-Funktion nicht nach dem angegebenen Intervall aus.

Die Ausführung hängt von der Anzahl der in der Warteschlange wartenden Aufgaben ab. Im folgenden Beispiel wird die Nachricht "this is just a message" in die Konsole geschrieben, bevor die Nachricht im Callback verarbeitet wird, da die Verzögerung die _minimale_ Zeit ist, die die Laufzeit benötigt, um die Anforderung zu verarbeiten (nicht eine _garantierte_ Zeit).

Das `setTimeout()` muss warten, bis der gesamte Code für aufgereihte Nachrichten abgeschlossen ist, obwohl Sie eine bestimmte Zeitbegrenzung für Ihr `setTimeout()` angegeben haben.

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

Ein Web Worker oder ein `iframe` mit Cross-Origin hat seinen eigenen Stack, Heap und Nachrichtenwarteschlange. Zwei unterschiedliche Laufzeiten können nur durch Senden von Nachrichten über die [`postMessage`](/de/docs/Web/API/Window/postMessage)-Methode kommunizieren. Diese Methode fügt der anderen Laufzeit eine Nachricht hinzu, wenn Letztere `message`-Ereignisse abhört.

## Nie blockierend

Eine sehr interessante Eigenschaft des Event Loop-Modells ist, dass JavaScript, im Gegensatz zu vielen anderen Sprachen, niemals blockiert. Die Behandlung von I/O erfolgt typischerweise über Ereignisse und Rückrufe, sodass die Anwendung, wenn sie auf eine Rückmeldung einer [IndexedDB](/de/docs/Web/API/IndexedDB_API)-Abfrage oder eine Rückgabe einer [`fetch()`](/de/docs/Web/API/Window/fetch)-Anforderung wartet, dennoch andere Dinge wie Benutzereingaben verarbeiten kann.

Es gibt Ausnahmen bei Legacy-Techniken wie `alert` oder synchronem XHR, aber es wird als gute Praxis angesehen, diese zu vermeiden. Achtung: [Ausnahmen von der Ausnahme existieren](https://stackoverflow.com/questions/2734025/is-javascript-guaranteed-to-be-single-threaded/2734311#2734311) (sind jedoch meist Implementierungsfehler und nichts anderes).

## Siehe auch

- [Event loops](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops) im HTML-Standard
- [What is the Event Loop?](https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick#what-is-the-event-loop) in den Node.js-Dokumenten
