---
title: The event loop
slug: Web/JavaScript/Event_loop
l10n:
  sourceCommit: 06cdd3a0fe4079360fa0bffb6329e9dc95029dac
---

{{jsSidebar("Advanced")}}

JavaScript hat ein Laufzeitmodell basierend auf einer **Ereignisschleife**, die für die Ausführung des Codes, das Sammeln und Verarbeiten von Ereignissen und das Ausführen von in die Warteschlange eingereihten Unteraufgaben verantwortlich ist. Dieses Modell unterscheidet sich erheblich von Modellen in anderen Sprachen wie C und Java.

## Laufzeitkonzepte

Die folgenden Abschnitte erklären ein theoretisches Modell. Moderne JavaScript-Engines implementieren und optimieren die beschriebenen Semantiken stark.

### Visuelle Darstellung

![Ein Diagramm, das zeigt, wie Stacks aus Frames, Heaps aus Objekten und Warteschlangen aus Nachrichten bestehen.](the_javascript_runtime_environment_example.svg)

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

1. Beim Aufruf von `bar` wird ein erster Frame erstellt, der Referenzen auf `bar`'s Argumente und lokale Variablen enthält.
2. Wenn `bar` `foo` aufruft, wird ein zweiter Frame erstellt und oben auf den ersten gelegt, der Referenzen auf `foo`'s Argumente und lokale Variablen enthält.
3. Wenn `foo` zurückkehrt, wird das oberste Frame-Element aus dem Stack entfernt (nur der Aufruf-Frame von `bar` bleibt).
4. Wenn `bar` zurückkehrt, ist der Stack leer.

Beachten Sie, dass die Argumente und lokalen Variablen weiterhin existieren können, da sie außerhalb des Stacks gespeichert werden - sie können also von [verschachtelten Funktionen](/de/docs/Web/JavaScript/Guide/Functions#nested_functions_and_closures) lange nach der Rückkehr ihrer äußeren Funktion aufgerufen werden.

### Heap

Objekte werden in einem Heap zugewiesen, was lediglich ein Name ist, um einen großen (meist unstrukturierten) Speicherbereich zu bezeichnen.

### Warteschlange

Eine JavaScript-Laufzeitumgebung verwendet eine Nachrichtenwarteschlange, die eine Liste von zu verarbeitenden Nachrichten ist. Jede Nachricht hat eine zugeordnete Funktion, die aufgerufen wird, um die Nachricht zu bearbeiten.

Zu einem gewissen Zeitpunkt während der [Ereignisschleife](#ereignisschleife) beginnt die Laufzeitumgebung mit der Bearbeitung der Nachrichten in der Warteschlange, beginnend mit der ältesten. Dazu wird die Nachricht aus der Warteschlange entfernt, und die entsprechende Funktion wird mit der Nachricht als Eingabeparameter aufgerufen. Wie immer erzeugt der Aufruf einer Funktion einen neuen Stack-Frame für die Verwendung durch diese Funktion.

Die Verarbeitung von Funktionen wird fortgesetzt, bis der Stack wieder leer ist. Dann verarbeitet die Ereignisschleife die nächste Nachricht in der Warteschlange (sofern vorhanden).

## Ereignisschleife

Die **Ereignisschleife** hat ihren Namen durch die Art, wie sie üblicherweise implementiert ist, die normalerweise folgendermaßen aussieht:

```js
while (queue.waitForMessage()) {
  queue.processNextMessage();
}
```

`queue.waitForMessage()` wartet synchron auf das Eintreffen einer Nachricht (falls nicht bereits eine verfügbar und zur Verarbeitung bereit ist).

### "Run-to-Completion"

Jede Nachricht wird vollständig verarbeitet, bevor eine andere Nachricht verarbeitet wird.

Dies bietet einige angenehme Eigenschaften beim Überlegen über Ihr Programm, einschließlich der Tatsache, dass, wann immer eine Funktion läuft, sie nicht unterbrochen werden kann und vollständig ausgeführt wird, bevor anderer Code ausgeführt wird (und Daten ändern kann, die die Funktion bearbeitet). Dies unterscheidet sich von C, zum Beispiel, wo, wenn eine Funktion in einem Thread läuft, sie jederzeit vom Laufzeitsystem gestoppt werden kann, um anderen Code in einem anderen Thread auszuführen.

Ein Nachteil dieses Modells ist, dass die Webanwendung bei einer Nachricht, die zu lange dauert, nicht in der Lage ist, Benutzerinteraktionen wie Klicken oder Scrollen zu verarbeiten. Der Browser mildert dies mit dem Dialog "Ein Skript dauert zu lange, um ausgeführt zu werden". Eine gute Praxis ist es, die Nachrichtenverarbeitung kurz zu halten und, falls möglich, eine Nachricht in mehrere Nachrichten aufzuteilen.

### Hinzufügen von Nachrichten

In Webbrowsern werden häufig Nachrichten hinzugefügt, wenn ein Ereignis eintritt und ein Event-Listener daran angehängt ist. Wenn es keinen Listener gibt, geht das Ereignis verloren. Ein Klick auf ein Element mit einem Klick-Event-Handler wird eine Nachricht hinzufügen, ebenso wie jedes andere Ereignis. Einige Ereignisse treten jedoch synchron ohne Nachricht auf – zum Beispiel simulierte Klicks über die [`click`](/de/docs/Web/API/HTMLElement/click)-Methode.

Die ersten beiden Argumente für die Funktion [`setTimeout`](/de/docs/Web/API/setTimeout) sind eine Nachricht, die zur Warteschlange hinzugefügt werden soll, und ein Zeitwert (optional; Standard ist `0`). Der _Zeitwert_ gibt die (minimale) Verzögerung an, nach der die Nachricht in die Warteschlange eingefügt wird. Wenn keine andere Nachricht in der Warteschlange ist und der Stack leer ist, wird die Nachricht direkt nach der Verzögerung verarbeitet. Wenn jedoch Nachrichten vorhanden sind, muss die `setTimeout`-Nachricht auf die Verarbeitung anderer Nachrichten warten. Aus diesem Grund gibt das zweite Argument eine _minimale_ Zeit an - keine _garantierte_ Zeit.

Hier ist ein Beispiel, das dieses Konzept verdeutlicht (`setTimeout` wird nicht unmittelbar nach Ablauf seines Timers ausgeführt):

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

### Null-Verzögerung

Null-Verzögerung bedeutet nicht, dass der Rückruf nach null Millisekunden ausgelöst wird. Der Aufruf von [`setTimeout`](/de/docs/Web/API/setTimeout) mit einer Verzögerung von `0` (null) Millisekunden führt die Rückruffunktion nicht nach dem angegebenen Intervall aus.

Die Ausführung hängt von der Anzahl der wartenden Aufgaben in der Warteschlange ab. Im untenstehenden Beispiel wird die Nachricht "this is just a message" in die Konsole geschrieben, bevor die Nachricht im Rückruf verarbeitet wird, da die Verzögerung die _minimale_ Zeit ist, die die Laufzeitumgebung benötigt, um die Anfrage zu bearbeiten (nicht eine _garantierte_ Zeit).

Das `setTimeout` muss darauf warten, dass der gesamte Code für die in die Warteschlange gestellten Nachrichten abgeschlossen ist, obwohl Sie ein bestimmtes Zeitlimit für Ihr `setTimeout` angegeben haben.

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

Ein Web Worker oder ein Cross-Origin-`iframe` hat seinen eigenen Stack, Heap und Nachrichtenwarteschlange. Zwei separate Laufzeitumgebungen können nur durch Senden von Nachrichten über die [`postMessage`](/de/docs/Web/API/Window/postMessage)-Methode kommunizieren. Diese Methode fügt eine Nachricht an die andere Laufzeitumgebung hinzu, wenn letztere auf `message`-Ereignisse hört.

## Niemals blockierend

Eine sehr interessante Eigenschaft des Modells der Ereignisschleife ist, dass JavaScript, im Gegensatz zu vielen anderen Sprachen, niemals blockiert. Die Verarbeitung von Ein-/Ausgaben wird typischerweise über Ereignisse und Rückrufe durchgeführt, sodass, wenn die Anwendung auf die Rückkehr einer [IndexedDB](/de/docs/Web/API/IndexedDB_API)-Abfrage oder einer [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage wartet, sie weiterhin andere Aufgaben wie Benutzereingaben verarbeiten kann.

Es gibt Ausnahmen in Legacy, wie `alert` oder synchrones XHR, aber es gilt als gute Praxis, diese zu vermeiden. Seien Sie vorsichtig: [Ausnahmen von der Ausnahme existieren](https://stackoverflow.com/questions/2734025/is-javascript-guaranteed-to-be-single-threaded/2734311#2734311) (sind jedoch in der Regel Implementierungsfehler und nichts anderes).

## Siehe auch

- [Event loops](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops) im HTML-Standard
- [What is the Event Loop?](https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick#what-is-the-event-loop) in den Node.js-Dokumenten
