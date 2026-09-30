---
title: Observables verwenden
slug: Web/API/Observable_API/Using_observables
l10n:
  sourceCommit: bacd00c353f643d8f5be0ce769015b1a66b4251a
---

{{DefaultAPISidebar("Observable API")}}

Die [Observable API](/de/docs/Web/API/Observable_API) bietet einen Mechanismus zur Verarbeitung von Werteströmen, einschließlich asynchroner Ereignisse. Dieser Leitfaden erklärt anhand von Ereignisströmen im Browser, wie Sie bestehende Observables transformieren, abonnieren und wieder abbestellen.

Bevor Sie fortfahren, können Sie die [Übersicht zur Observable API](/de/docs/Web/API/Observable_API) lesen, um sich mit den grundlegenden Konzepten vertraut zu machen.

## Ein Observable erhalten

[`Observable`](/de/docs/Web/API/Observable)-Objekte (üblicherweise **Observables** genannt) repräsentieren einen Strom von Werten, der beobachtet und transformiert werden kann. Der Code, der diese Werte bereitstellt, ist der **Producer**; der Code, der sie abonniert, empfängt und verwendet, ist der **Consumer**. Es gibt drei grundlegende Möglichkeiten, Observables zu erhalten:

- Die Methode [`EventTarget.when()`](/de/docs/Web/API/EventTarget/when) gibt ein [`Observable`](/de/docs/Web/API/Observable) zurück, das einen Strom von Ereignissen repräsentiert, die auf dem `EventTarget` ausgelöst werden. Möglicherweise verwenden Sie auch Bibliotheken, die Observables zurückgeben.
- Mit dem Konstruktor [`Observable()`](/de/docs/Web/API/Observable/Observable) können Sie eigene Observables erstellen. Weitere Informationen finden Sie unter [Eigene Observables erstellen](/de/docs/Web/API/Observable_API/Creating_observables).
- Mit der statischen Methode [`Observable.from()`](/de/docs/Web/API/Observable/from_static) können Sie Objekte wie [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) und [Iterables](/de/docs/Web/JavaScript/Reference/Iteration_protocols) in Observables umwandeln.

Im Web gehören `EventTarget`-Objekte vielleicht zu den häufigsten Anwendungsfällen für Observables. Der Grundgedanke ist: Wo Sie bisher `addEventListener(eventType, handler)` geschrieben haben, können Sie nun mit `when(eventType).subscribe(handler)` denselben Effekt erzielen. So können Sie beispielsweise mit `when()` auf `click`-Ereignisse am Dokumentkörper reagieren:

```js
document.body.when("click").subscribe((event) => {
  console.log("Clicked!", event);
});
```

Dies ist nicht nur ein syntaktischer Unterschied. Mit Observables können Sie Operationen kombinieren, etwa Ereignisse filtern, ihre Daten transformieren und einen Strom beenden, wenn ein anderes Ereignis eintritt. Dieselben Operationen lassen sich auch auf Promises, Iterables und eigene Ströme anwenden, beispielsweise auf die Benachrichtigungen eines Timers oder über Elementgrößen, die unter [Eigene Observables erstellen](/de/docs/Web/API/Observable_API/Creating_observables) gezeigt werden.

## Ein Observable transformieren

Ein Observable ist ein Strom von Werten, den Sie in einen neuen Strom transformieren können. Ein `Observable`-Objekt verfügt über mehrere Transformationsmethoden, die denen ähneln, die Sie möglicherweise bereits von {{jsxref("Iterator")}} oder {{jsxref("Array")}} kennen.

| Methode von [`Observable`](/de/docs/Web/API/Observable)           | Entsprechung bei {{jsxref("Iterator")}} | Beschreibung                                                                                                                     |
| ----------------------------------------------------------------- | --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| [`Observable.drop()`](/de/docs/Web/API/Observable/drop)           | {{jsxref("Iterator.drop()")}}           | Überspringt die ersten `n` Werte des Quell-Observables.                                                                          |
| [`Observable.filter()`](/de/docs/Web/API/Observable/filter)       | {{jsxref("Iterator.filter()")}}         | Überspringt Werte, die eine Prädikatfunktion nicht erfüllen.                                                                     |
| [`Observable.flatMap()`](/de/docs/Web/API/Observable/flatMap)     | {{jsxref("Iterator.flatMap()")}}        | Ordnet jedem Wert ein Observable zu und fasst die resultierenden Observables anschließend zu einem einzigen Observable zusammen. |
| [`Observable.inspect()`](/de/docs/Web/API/Observable/inspect)     | Keine                                   | Ruft Callbacks auf, um Werte und den Lebenszyklus des Abonnements zu untersuchen, ohne die weitere Verkettung zu verhindern.     |
| [`Observable.map()`](/de/docs/Web/API/Observable/map)             | {{jsxref("Iterator.map()")}}            | Ordnet jedem Wert mithilfe einer Zuordnungsfunktion einen neuen Wert zu.                                                         |
| [`Observable.switchMap()`](/de/docs/Web/API/Observable/switchMap) | Keine                                   | Ordnet jedem Wert ein inneres Observable zu und gibt nur Werte des jeweils neuesten inneren Observables aus.                     |
| [`Observable.take()`](/de/docs/Web/API/Observable/take)           | {{jsxref("Iterator.take()")}}           | Übernimmt nur die ersten `n` Werte des Quell-Observables.                                                                        |
| [`Observable.takeUntil()`](/de/docs/Web/API/Observable/takeUntil) | Keine                                   | Funktioniert wie `take()`, stoppt aber, sobald ein zweites Observable einen Wert ausgibt.                                        |

Sie können diese Methoden verketten, um mehrere Transformationen anzuwenden. Anschließend abonnieren Sie das letzte Observable, um die transformierten Werte zu empfangen.

Im folgenden Beispiel geben wir die Mauskoordinaten auf dem Bildschirm aus, wenn die Maus über eines von zwei {{htmlelement("div")}}-Elementen bewegt wird. Das HTML zeigen wir nicht, da es lediglich die `<div>`-Elemente und ein einzelnes {{htmlelement("p")}}-Element zur Anzeige der Daten enthält.

```html hidden live-sample___basic-when-example live-sample___abort-example
<div></div>
<div></div>
<p></p>
```

Im CSS des Beispiels geben wir den `<div>`-Elementen eine {{cssxref("height")}}, eine {{cssxref("background-color")}} und einen {{cssxref("margin-bottom")}}:

```css live-sample___basic-when-example live-sample___abort-example
div {
  height: 150px;
  background-color: purple;
  margin-bottom: 10px;
}
```

Das JavaScript sieht so aus:

```js live-sample___basic-when-example
const outputElem = document.querySelector("p");

document.body
  .when("mousemove")
  .filter((e) => e.target.matches("div"))
  .map((e) => ({ x: e.clientX, y: e.clientY }))
  .subscribe((p) => {
    outputElem.textContent = `${p.x},${p.y}`;
  });
```

In diesem Codeausschnitt ist das {{htmlelement("body")}}-Element der Seite ein [`EventTarget`](/de/docs/Web/API/EventTarget). Mit der Methode `when()` erhalten wir einen Strom von [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignissen, die darauf ausgelöst werden.

Anschließend legen wir eine Pipeline fest:

- [`Observable.filter()`](/de/docs/Web/API/Observable/filter) beschränkt die durch die Pipeline geleiteten Ereignisse auf solche, die auf einem {{htmlelement("div")}}-Element ausgelöst wurden (geprüft mit der Methode [`Element.matches()`](/de/docs/Web/API/Element/matches)), und schließt andere Nachfahren von `body` aus.
- [`Observable.map()`](/de/docs/Web/API/Observable/map) bildet die ausgelösten `mousemove`-Ereignisobjekte auf neue Objekte ab, die die Koordinaten des Mauszeigers zum Zeitpunkt des Ereignisses enthalten.

Schließlich abonniert [`Observable.subscribe()`](/de/docs/Web/API/Observable/subscribe) das Observable. Der Methode `subscribe()` übergeben wir eine Callback-Funktion. Sie wird jedes Mal aufgerufen, wenn ein `mousemove`-Ereignis den Filter passiert.

Die gerenderte Ausgabe sieht so aus:

{{EmbedLiveSample("basic-when-example", "", 380)}}

Bewegen Sie die Maus über den oberen Teil des Beispiels. Die Koordinaten werden nur dann im `<p>`-Element ausgegeben, wenn sich die Maus über einem der `<div>`-Elemente befindet, nicht aber in den Bereichen außerhalb der `<div>`-Elemente.

> [!NOTE]
> Observables sind „lazy“: Ereignisse werden erst durch sie geleitet und Daten erst verarbeitet, wenn sie mindestens einen Abonnenten haben. Wenn Sie im vorherigen Beispiel den Aufruf von `subscribe()` entfernen und innerhalb der Methoden `filter()` und `map()` Log-Ausgaben hinzufügen, werden Sie feststellen, dass nichts ausgegeben wird. Sobald `subscribe()` am Ende der Pipeline aufgerufen wird, werden auch alle vorherigen Observables in der Kette abonniert und beginnen, Daten zu verarbeiten.

### Mit inneren Observables arbeiten

Manche Operationen erzeugen für jeden Quellwert einen weiteren Strom: Ein Klick könnte einen Upload starten, oder eine Änderung in einem Suchfeld könnte eine Anfrage auslösen. Diese Ströme heißen _innere Observables_. Wenn Sie nur `map()` verwenden, werden die inneren Observable-Objekte an Ihren Observer weitergegeben. [`Observable.flatMap()`](/de/docs/Web/API/Observable/flatMap) und [`Observable.switchMap()`](/de/docs/Web/API/Observable/switchMap) abonnieren sie stattdessen und leiten ihre Werte weiter.

- `flatMap()` verarbeitet Quellwerte nacheinander. Die Methode wartet, bis das aktuelle innere Observable abgeschlossen ist, bevor sie die Zuordnungsfunktion für den nächsten Quellwert in der Warteschlange aufruft. Verwenden Sie dies, wenn jede Operation der Reihe nach abgeschlossen werden soll. Wird ein inneres Observable nie abgeschlossen, bleiben spätere Quellwerte in der Warteschlange.
- `switchMap()` meldet sich vom aktuellen inneren Observable ab, wenn ein neuer Quellwert eintrifft. Anschließend ruft die Methode die Zuordnungsfunktion auf und abonniert deren Ergebnis. Verwenden Sie dies, wenn nur die Ergebnisse der neuesten Operation relevant sind.

Beide Methoden wandeln das Ergebnis der Zuordnungsfunktion mit [`Observable.from()`](/de/docs/Web/API/Observable/from_static) um. Die Funktion kann daher auch ein Promise, ein Iterable oder ein asynchrones Iterable zurückgeben. Ein Promise steuert nach seiner Erfüllung seinen Wert bei und wird anschließend abgeschlossen; eine Zurückweisung wird zu einem Fehler im inneren Observable. `map()` hingegen leitet ein zurückgegebenes Promise als Wert weiter, ohne darauf zu warten.

Das folgende interaktive Beispiel durchsucht eine kleine Liste von Fruchtnamen. Geben Sie etwas in das Suchfeld ein, um eine Suche zu starten. Die simulierte Antwort dauert eine Sekunde, sodass Sie während einer laufenden Suche weitere Zeichen eingeben können. Mit einer asynchronen Zuordnungsfunktion können wir jede Suche als eine Operation behandeln:

```html live-sample___search-example
<label>Search fruit: <input type="search" /></label>
<p id="results">Type a fruit name</p>
```

```js live-sample___search-example
const searchInput = document.querySelector("input[type='search']");
const results = document.querySelector("#results");

async function search(query) {
  const fruits = ["Apple", "Apricot", "Banana", "Cherry", "Pear"];
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return fruits.filter((fruit) =>
    fruit.toLowerCase().includes(query.toLowerCase()),
  );
}

const queries = searchInput.when("input").map(() => searchInput.value);

queries.switchMap(search).subscribe({
  next(data) {
    results.textContent = JSON.stringify(data);
  },
  error(error) {
    results.textContent = error.message;
  },
});
```

{{EmbedLiveSample("search-example", "", 100)}}

In einer echten Suchanwendung könnte `search()` stattdessen eine JSON-Antwort abrufen und parsen:

```js
async function search(query) {
  const response = await fetch(`/search?q=${encodeURIComponent(query)}`);
  if (!response.ok) {
    throw new Error(`Search failed: ${response.status}`);
  }
  return response.json();
}
```

Wenn ein weiteres Eingabeereignis eintrifft, bevor die vorherige Suche abgeschlossen ist, wird deren Ergebnis nicht mehr weitergeleitet. Die Abmeldung von einem Observable, das aus einem Promise erstellt wurde, bricht jedoch die dem Promise zugrunde liegende Arbeit nicht ab: Die vorherige Anfrage kann trotzdem abgeschlossen werden. Um die Anfrage selbst abzubrechen, geben Sie ein eigenes Observable zurück, das `subscriber.signal` an `fetch()` übergibt. Ein Beispiel finden Sie unter [Asynchrone Arbeit abbrechen](/de/docs/Web/API/Observable_API/Creating_observables#canceling_asynchronous_work).

### Eine Pipeline untersuchen

Mit [`Observable.inspect()`](/de/docs/Web/API/Observable/inspect) können Sie einen Seiteneffekt wie eine Log-Ausgabe ausführen und dabei die Werte unverändert weiterleiten. Anders als `subscribe()` gibt die Methode ein Observable zurück und startet die Pipeline nicht von selbst:

```js
document.body
  .when("click")
  .inspect((event) => console.log("Click:", event.target))
  .map((event) => ({ x: event.clientX, y: event.clientY }))
  .subscribe((point) => console.log("Coordinates:", point));
```

Sie können auch ein Objekt mit den Callbacks `subscribe`, `next`, `error`, `complete` und `abort` übergeben, um den Lebenszyklus des Abonnements zu untersuchen. Ein `inspect()`-Callback kann die Pipeline beeinflussen, wenn er eine Ausnahme auslöst: Eine Ausnahme in seinem `next`-Callback wird beispielsweise zu einem Fehler im zurückgegebenen Observable.

Weitere Einzelheiten finden Sie in der Referenz zu [`inspect()`](/de/docs/Web/API/Observable/inspect).

## Werte aggregieren

Die bisher vorgestellten Methoden geben ein weiteres Observable zurück. Dadurch können Sie mehrere Transformationen verketten und anschließend das letzte Observable abonnieren, um die transformierten Werte zu empfangen.

Sie möchten jedoch nicht immer jeden Wert einzeln verarbeiten. Manchmal interessiert Sie nur ein einzelner aggregierter Wert aus dem gesamten Strom. Dafür bietet die Observable API die folgenden Methoden:

| Methode von [`Observable`](/de/docs/Web/API/Observable)       | Entsprechung bei {{jsxref("Iterator")}} | Beschreibung                                                                                    |
| ------------------------------------------------------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------- |
| [`Observable.every()`](/de/docs/Web/API/Observable/every)     | {{jsxref("Iterator.every()")}}          | Gibt `false` zurück, sobald das Prädikat für einen Wert `false` zurückgibt; andernfalls `true`. |
| [`Observable.find()`](/de/docs/Web/API/Observable/find)       | {{jsxref("Iterator.find()")}}           | Gibt den ersten Wert zurück, der ein Prädikat erfüllt.                                          |
| [`Observable.first()`](/de/docs/Web/API/Observable/first)     | Keine                                   | Gibt den ersten Wert des Observables zurück.                                                    |
| [`Observable.forEach()`](/de/docs/Web/API/Observable/forEach) | {{jsxref("Iterator.forEach()")}}        | Ruft für jeden Wert eine Funktion auf.                                                          |
| [`Observable.last()`](/de/docs/Web/API/Observable/last)       | Keine                                   | Gibt den letzten Wert des Observables zurück.                                                   |
| [`Observable.reduce()`](/de/docs/Web/API/Observable/reduce)   | {{jsxref("Iterator.reduce()")}}         | Aggregiert die Werte zu einem einzelnen Wert.                                                   |
| [`Observable.some()`](/de/docs/Web/API/Observable/some)       | {{jsxref("Iterator.some()")}}           | Gibt `true` zurück, sobald das Prädikat für einen Wert `true` zurückgibt; andernfalls `false`.  |
| [`Observable.toArray()`](/de/docs/Web/API/Observable/toArray) | {{jsxref("Iterator.toArray()")}}        | Sammelt alle Werte in einem Array.                                                              |

Alle diese Methoden geben Promises zurück, die mit den beschriebenen Ergebnissen erfüllt werden. Je nach Methode wird das Promise erfüllt, sobald das Ergebnis feststeht oder wenn das [Observable abgeschlossen ist](#ein_observable_abonnieren). Es kann auch zurückgewiesen werden, beispielsweise wenn im Observable ein Fehler auftritt oder das Abonnement abgebrochen wird.

Anders als die Transformationsmethoden abonnieren diese Aggregationsmethoden implizit: Die Pipeline beginnt Werte zu empfangen, sobald eine dieser Methoden aufgerufen wird.

Dieses Beispiel sucht innerhalb eines einzelnen Bereichs nach der ersten Mausposition, bei der beide Koordinaten größer als `200` sind. Bis eine passende Position gefunden wird, zeigt es die aktuelle Position an und demonstriert dabei auch die Funktionsweise von `inspect()`. Klicken Sie nach einem Treffer auf Restart, um es erneut zu versuchen.

```html live-sample___find-example
<div id="target">Move the pointer beyond 200,200.</div>
<p></p>
<button disabled>Restart</button>
```

```css live-sample___find-example
#target {
  height: 300px;
  background-color: lavender;
}
```

```js live-sample___find-example
const target = document.querySelector("#target");
const outputElem = document.querySelector("p");
const restart = document.querySelector("button");

function start() {
  restart.disabled = true;
  outputElem.textContent = "Move the mouse around...";
  target
    .when("mousemove")
    .map((event) => ({ x: event.offsetX, y: event.offsetY }))
    .inspect(({ x, y }) => {
      outputElem.textContent = `Target of 200,200 not yet reached (current ${x},${y})`;
    })
    .find(({ x, y }) => x > 200 && y > 200)
    .then(({ x, y }) => {
      outputElem.textContent = `Target coordinates found: ${x},${y}`;
      restart.disabled = false;
    });
}

restart.when("click").subscribe(start);
start();
```

Die gerenderte Ausgabe sieht so aus:

{{EmbedLiveSample("find-example", "", 430)}}

## Ein Observable abonnieren

Die grundlegende Verwendung von `subscribe()` haben wir bereits in den vorherigen Abschnitten gezeigt. Sehen wir sie uns nun etwas genauer an.

So wie ein Promise Benachrichtigungen über seine Erfüllung oder Zurückweisung bereitstellen kann, kann auch ein Observable verschiedene Arten von Benachrichtigungen an seine Abonnenten senden. Jede entspricht einer anderen Methode, die Sie an `subscribe()` übergeben können.

- `next(value)`: Wird aufgerufen, sobald ein neuer Wert im Observable-Strom verfügbar ist. In den obigen Beispielen haben wir eine einzelne Funktion an `subscribe()` übergeben. Das ist eine Kurzform für die Übergabe eines Objekts, das nur eine `next()`-Methode enthält.
- `error(err)`: Wird aufgerufen, wenn das Observable einen Fehler signalisiert. Ausnahmen, die von den eigenen Callbacks des Observers ausgelöst werden, werden stattdessen als nicht abgefangene Fehler an das {{Glossary("global_object", "globale Objekt")}} gemeldet und nicht an diesen `error()`-Callback übergeben.
- `complete()`: Wird aufgerufen, wenn das Observable keine weiteren Werte mehr sendet. Darauf gehen wir im Leitfaden [Eigene Observables erstellen](/de/docs/Web/API/Observable_API/Creating_observables) näher ein. Ereignisströme sind unbegrenzt, können aber durch den Aufruf von `take()` oder `takeUntil()` begrenzt werden.

Dieses Observable wird beispielsweise nach drei Klicks abgeschlossen und gibt eine Abschlussmeldung aus:

```js
document.body
  .when("click")
  .take(3)
  .subscribe({
    next(event) {
      console.log("Clicked at", event.clientX, event.clientY);
    },
    complete() {
      console.log("Observable complete");
    },
  });
```

Intern verfügt jedes aktive Observable-Abonnement über eine Liste von _Observers_: Objekte, die keine, einen oder mehrere dieser drei Callbacks enthalten. Sie können `subscribe()` für dasselbe Observable mehrfach aufrufen, um mehrere Observers zu registrieren. Zum Beispiel:

```js
const clickObservable = document.body.when("click");

clickObservable.subscribe((e) => {
  console.log("Observer 1: Clicked at", e.clientX, e.clientY);
});
clickObservable.subscribe((e) => {
  console.log("Observer 2: Clicked at", e.clientX, e.clientY);
});

// For every click, both observers will be called
```

Gleichzeitig aktive Observers teilen sich das Abonnement. Jeder empfängt die Werte, die ausgegeben werden, während er abonniert ist; zuvor ausgegebene Werte werden für neue Observers nicht erneut ausgegeben. Das unterscheidet sich von der gemeinsamen Nutzung eines Iterators: Dort bewegt jeder `next()`-Aufruf eines Consumers denselben Iterator weiter, statt einen Wert an alle Consumers zu senden.

> [!NOTE]
> Dieses Verhalten bei gemeinsam genutzten Abonnements könnte sich ändern. Ein [Vorschlag, jedem Observer einen eigenen `Subscriber` zu geben](https://github.com/WICG/observable/issues/217), würde bewirken, dass jedes Abonnement eine eigene Ausführung startet, statt ein aktives Abonnement wiederzuverwenden.
>
> Für dieses konkrete Beispiel wäre das Verhalten gleich, aber jeder `subscribe()`-Aufruf würde einen neuen `click`-Event-Listener registrieren, statt denselben Event-Listener wiederzuverwenden.

## Ein Observable abbestellen

Ein Observer kann sich auch von einem Observable abmelden. Seine Callbacks werden dann nicht mehr aufgerufen. Hat ein Observable keine Observers mehr, wird sein gemeinsam genutztes Abonnement inaktiv und führt sogenannte _Teardown-Callbacks_ aus. Diese Callbacks geben Ressourcen frei, beispielsweise den von `when()` registrierten Event-Listener. Eigene Observables müssen diese Bereinigung selbst implementieren, wie unter [Eigene Observables erstellen](/de/docs/Web/API/Observable_API/Creating_observables#teardown) beschrieben.

Der übliche Weg, ein Observable abzubestellen, ist die Verwendung eines [`AbortController`](/de/docs/Web/API/AbortController). Damit können Sie sich jederzeit während der Verarbeitung der Observable-Daten abmelden. Erstellen Sie dazu einen `AbortController` und übergeben Sie beim Aufruf von `subscribe()` dessen [`signal`](/de/docs/Web/API/AbortController/signal). Anschließend können Sie [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) auf dem Controller aufrufen. Dadurch werden alle Observers abgemeldet, die diesem Signal zugeordnet sind.

Wir können beispielsweise unser früheres [einfaches `when()`-Beispiel](#ein_observable_transformieren) so ändern, dass das Abonnement endet, sobald die Person irgendwo auf die Seite klickt. Die Ausgabe wird dann nicht mehr aktualisiert. Klicken Sie auf Restart, um ein neues Abonnement zu starten.

```html hidden live-sample___abort-example
<button disabled>Restart</button>
```

```js live-sample___abort-example
const outputElem = document.querySelector("p");
const restart = document.querySelector("button");

function start() {
  restart.disabled = true;
  outputElem.textContent = "Move the mouse over a purple area";
  // Create controller
  const controller = new AbortController();

  document.body
    .when("mousemove")
    .filter((e) => e.target.matches("div"))
    .map((e) => ({ x: e.clientX, y: e.clientY }))
    .subscribe(
      (p) => {
        outputElem.textContent = `${p.x},${p.y}`;
      },
      // Register observer with signal
      { signal: controller.signal },
    );

  document.body
    .when("click")
    .filter((event) => event.target !== restart)
    .take(1)
    .subscribe(() => {
      // Unsubscribe on click
      controller.abort();
      outputElem.textContent += " — Stopped. Click Restart to try again.";
      restart.disabled = false;
    });
}

restart.when("click").subscribe(start);
start();
```

{{EmbedLiveSample("abort-example", "", 430)}}

Der Aufruf `take(1)` schließt den Klickstrom nach dem ersten Klick ab und entfernt seinen Event-Listener. Das ähnelt der Verwendung von `{ once: true }` mit `addEventListener()`.

Im nächsten Beispiel gibt ein anderes Observable einen Wert aus, der die Abbruchbedingung auslöst: `document.body.when("click")`. Die Methode `takeUntil()` ist eine [Transformationsmethode](#ein_observable_transformieren) und gibt daher ein Observable zurück. Sie können sie somit in die Pipeline einfügen, um festzulegen, unter welcher Bedingung die Abmeldung erfolgt. Der folgende Code erzielt denselben Effekt wie das vorherige Beispiel:

```js
const outputElem = document.querySelector("p");

document.body
  .when("mousemove")
  .filter((e) => e.target.matches("div"))
  .map((e) => ({ x: e.clientX, y: e.clientY }))
  // When the click event fires, unsubscribe
  .takeUntil(document.body.when("click"))
  .subscribe((p) => {
    outputElem.textContent = `${p.x},${p.y}`;
  });
```

> [!NOTE]
> Die Methode `takeUntil()` [wandelt](/de/docs/Web/API/Observable/from_static) ihre Eingabe in ein Observable um. Sie können ein Promise übergeben, um bei seiner Erfüllung zu stoppen, oder synchrone beziehungsweise asynchrone Iterables, um beim ersten von ihnen erzeugten Wert zu stoppen, falls es einen gibt. Wie die Umwandlung funktioniert, erfahren Sie unter [`Observable.from()`](/de/docs/Web/API/Observable/from_static).

Mit einem `AbortController` können Sie sich an beliebiger Stelle im Code abmelden. Mit getrennten Controllern können Sie Observers unabhängig voneinander abmelden. Ein Abbruch ruft den `complete`-Callback des Observers nicht auf. Dagegen schließt `takeUntil()` das von der Methode zurückgegebene Observable ab und benachrichtigt dessen Observers über ihre `complete`-Callbacks. Andere Observers, die das Quell-Observable direkt abonniert haben, bleiben angemeldet.

## Fehler behandeln

Ein Fehler beendet das betroffene Abonnement. Fehler einer Quelle werden durch die Pipeline weitergegeben. Ausnahmen, die von Transformations-Callbacks ausgelöst werden, beispielsweise von einer `map()`-Zuordnungsfunktion oder einem `filter()`-Prädikat, werden zu Fehlern im zurückgegebenen Observable. Der `error`-Callback eines Observers meldet oder behandelt den Fehler, setzt das Abonnement aber nicht fort. Hat der Observer keinen `error`-Callback, wird der Fehler als nicht abgefangener Fehler an das {{Glossary("global_object", "globale Objekt")}} gemeldet.

Mit [`Observable.catch()`](/de/docs/Web/API/Observable/catch) kann eine Pipeline den Fehler behandeln, indem sie einen Ersatzstrom abonniert. Der Callback erhält den Fehler und gibt ein Observable oder einen beliebigen Wert zurück, der sich mit `Observable.from()` umwandeln lässt. Wird beispielsweise `[]` zurückgegeben, wird der Ersatzstrom abgeschlossen, ohne einen Wert auszugeben. Die fehlgeschlagene Quelle wird nicht erneut ausgeführt.

Bei inneren Observables kommt es auf die Position von `catch()` an. Im [Suchbeispiel](#mit_inneren_observables_arbeiten) beendet ein Fehler in der aktuellen Anfrage das Suchabonnement. Spätere Eingabeereignisse starten dann keine Suchen mehr. Wir können den Code für dieses Abonnement durch den folgenden ersetzen, um Fehler zu behandeln, während das innere Abonnement aktiv ist:

```js
queries
  .switchMap((query) =>
    Observable.from(search(query)).catch((error) => {
      results.textContent = error.message;
      return [];
    }),
  )
  .subscribe((data) => {
    results.textContent = JSON.stringify(data);
  });
```

Hier behandelt `catch()` nur den Fehler der inneren Anfrage. Der leere Ersatzstrom wird abgeschlossen, während das äußere Abonnement weiterhin auf Eingaben reagiert. Würden Sie `catch()` stattdessen nach `switchMap()` platzieren, würde die gesamte Suchpipeline ersetzt: Die Rückgabe von `[]` würde sie abschließen, sodass sie nicht mehr auf Eingaben reagiert.

```js
queries
  .switchMap(search)
  .catch((error) => {
    results.textContent = error.message;
    return [];
  })
  .subscribe({
    next(data) {
      results.textContent = JSON.stringify(data);
    },
    complete() {
      console.log("Search pipeline ended");
    },
  });
```

Dieselbe Unterscheidung gilt für `flatMap()`.

Fehler von Anfragen, von denen sich `switchMap()` bereits abgemeldet hat, werden dadurch nicht behandelt. Wenn das Promise einer solchen Anfrage später zurückgewiesen wird, meldet `Observable.from()` den Fehler an das globale Objekt, weil sein Subscriber inaktiv ist; der `catch()`-Callback ist nicht mehr abonniert. Um veraltete Anfragen abzubrechen und zu vermeiden, dass ihr Abbruch als Fehler gemeldet wird, verwenden Sie den eigenen `fetchJSON()`-Producer aus [Asynchrone Arbeit abbrechen](/de/docs/Web/API/Observable_API/Creating_observables#canceling_asynchronous_work). Er prüft `subscriber.active`, bevor er eine Zurückweisung weiterleitet.

Ausnahmen, die von an `subscribe()` übergebenen Callbacks ausgelöst werden, sind anders: Sie werden an das globale Objekt gemeldet, statt zu Fehlern zu werden, von denen sich eine Pipeline mit `catch()` erholen kann. Ebenso wird nicht auf das Promise gewartet, das ein asynchroner `next`-Callback zurückgibt. Behandeln Sie dessen Zurückweisungen selbst oder verwenden Sie `flatMap()` beziehungsweise `switchMap()`, um die asynchrone Arbeit in die Pipeline einzubinden.

Beispielsweise behandelt `catch()` in einer Pipeline keine Ausnahme, die ihr Observer auslöst:

```js
Observable.from([1, 2, 3])
  .catch(() => [0])
  .subscribe(() => {
    throw new Error("Reported as an uncaught error on window");
  });
```

Wenn bei einem Observer vorhersehbare Fehler auftreten können, behandeln Sie diese ausdrücklich:

```js
queries.subscribe(async (query) => {
  try {
    results.textContent = JSON.stringify(await search(query));
  } catch (error) {
    results.textContent = error.message;
  }
});
```

Anders als die Variante mit `switchMap()` behandelt diese Variante Fehler, verwirft aber keine veralteten Ergebnisse.

### Bereinigung ausführen

[`Observable.finally()`](/de/docs/Web/API/Observable/finally) gibt ein Observable zurück, das die Werte und Benachrichtigungen der Quelle weiterleitet. Außerdem führt es einen Callback aus, wenn sein Abonnement durch Abschluss, Fehler oder Abmeldung endet. Dadurch eignet es sich für Bereinigungsarbeiten, die ein `complete`-Callback allein nicht erfassen würde:

```js
document.body
  .when("click")
  .take(3)
  .finally(() => console.log("Stopped observing clicks"))
  .subscribe((event) => console.log(event.target));
```

Im vorherigen Codeausschnitt wird der `finally()`-Callback ausgeführt, nachdem das Abonnement endet – nach drei Klicks, wie durch `take(3)` festgelegt. Er wird auch ausgeführt, wenn das Abonnement vorzeitig abgebrochen wird. Auf ein zurückgegebenes Promise wartet er nicht. Verwenden Sie `finally()`, um beim Zusammenstellen einer Pipeline eine Bereinigung hinzuzufügen. Verwenden Sie `addTeardown()`, um die Freigabe der eigenen Ressourcen des Producers zu implementieren, wie unter [Eigene Observables erstellen](/de/docs/Web/API/Observable_API/Creating_observables#teardown) beschrieben.

## Beispiel: Auf einem Canvas zeichnen

In diesem Beispiel erstellen wir eine einfache Zeichenanwendung auf Basis von {{htmlelement("canvas")}}. Sie führt die bisher vorgestellten APIs zusammen und zeigt, wie Observables dabei helfen, komplexe Logik zur Ereignisverarbeitung deklarativ zu implementieren.

### HTML

Das Markup enthält ein `<canvas>`-Element zum Zeichnen und ein {{htmlelement("form")}} mit zwei {{htmlelement("input")}}-Steuerelementen. Damit können Sie eine neue Stiftgröße beziehungsweise -farbe auswählen: über einen [Schieberegler](/de/docs/Web/HTML/Reference/Elements/input/range) und einen [Farbwähler](/de/docs/Web/HTML/Reference/Elements/input/color). Außerdem verwenden wir ein {{htmlelement("output")}}-Element, um den aktuellen Wert des Schiebereglers anzuzeigen.

```html live-sample___canvas-example
<canvas></canvas>
<form>
  <div>
    <label for="size">Choose pen size:</label>
    <input id="size" type="range" min="1" max="40" value="10" />
    <output for="size">10</output>
  </div>
  <div>
    <label for="color">Choose pen color:</label>
    <input id="color" type="color" />
  </div>
</form>
```

### CSS

Im CSS sorgen wir dafür, dass das `<body>`-Element die gesamte Breite und Höhe der Seite einnimmt. Außerdem platzieren wir das `<form>` über dem `<canvas>` und verwenden {{Glossary("inset_properties", "inset-Eigenschaften")}}, um es am oberen, linken und rechten Rand des `<body>` zu halten.

Das übrige CSS ist für das Verständnis des Beispiels insgesamt nicht wichtig. Deshalb erläutern wir es hier nicht, stellen es aber vollständig bereit, damit Sie es sich ansehen können.

```css live-sample___canvas-example
* {
  box-sizing: border-box;
}

html {
  font-family: Arial, Helvetica, sans-serif;
  height: 100%;
}

body {
  margin: 0;
  height: inherit;
  overflow: hidden;
}

form {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  padding: 10px;
  background: rgb(218 112 214 / 0.85);
  box-shadow: 0 1px 3px black;
}

form > div {
  display: flex;
  align-items: center;
}

form > div:first-child {
  margin-bottom: 10px;
}

form label {
  width: 140px;
}

form input {
  width: 100px;
}
```

### JavaScript

In unserem Skript holen wir zunächst Referenzen auf die Elemente `<canvas>`, `<form>`, `<input>` und `<output>`:

```js live-sample___canvas-example
const canvas = document.querySelector("canvas");
const form = document.querySelector("form");
const sizeInput = document.querySelector("[type='range']");
const sizeOutput = document.querySelector("output");
const colorInput = document.querySelector("[type='color']");
```

Als Nächstes gleichen wir [`width`](/de/docs/Web/API/HTMLCanvasElement/width) und [`height`](/de/docs/Web/API/HTMLCanvasElement/height) des Canvas an [`clientWidth`](/de/docs/Web/API/Element/clientWidth) und [`clientHeight`](/de/docs/Web/API/Element/clientHeight) des `<body>` an. Dafür ist die Funktion `sizeCanvas()` zuständig. Sie wird beim Start der Anwendung und bei jeder Größenänderung des Fensters mit `when("resize").subscribe(sizeCanvas)` aufgerufen (was denselben Effekt wie `addEventListener("resize", sizeCanvas)` hat). Das Festlegen der Canvas-Abmessungen löscht auch die Zeichnung.

```js live-sample___canvas-example
function sizeCanvas() {
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;
}

sizeCanvas();

window.when("resize").subscribe(sizeCanvas);
```

Anschließend definieren wir die Variablen und Funktionen, die wir zum Zeichnen auf unserem `<canvas>` benötigen. Zunächst holen wir eine Referenz auf den [2D-Rendering-Kontext](/de/docs/Web/API/CanvasRenderingContext2D) des `<canvas>` und speichern Anfangswerte für Stiftgröße und -farbe in `penSize` beziehungsweise `penColor`. Die Funktion `updatePenSize()` setzt `penSize` auf [`valueAsNumber`](/de/docs/Web/API/HTMLInputElement/valueAsNumber) des Schiebereglers und zeigt den Wert im `<output>`-Element an. Die Funktion `updatePenColor()` setzt `penColor` auf [`value`](/de/docs/Web/API/HTMLInputElement/value) des Farbwählers. Diese Funktionen verarbeiten das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis des Schiebereglers beziehungsweise das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis des Farbwählers.

```js live-sample___canvas-example
const ctx = canvas.getContext("2d");
let penSize = 10;
let penColor = "black";

function updatePenSize() {
  penSize = sizeInput.valueAsNumber;
  sizeOutput.textContent = sizeInput.value;
}

function updatePenColor() {
  penColor = colorInput.value;
}

sizeInput.when("input").subscribe(updatePenSize);
colorInput.when("change").subscribe(updatePenColor);
```

Nun zu unserer Hauptfunktion `draw()`. Darin blenden wir das `<form>` aus, damit beim Zeichnen das gesamte `<canvas>` sichtbar ist. Anschließend setzen wir [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) des Canvas-Kontexts auf `penColor`, beginnen mit [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) einen Pfad, zeichnen mit [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc) einen einzelnen Kreis der angegebenen Größe `penSize` an den Koordinaten `x` und `y` des Ereignisobjekts (dazu später mehr) und stellen die Zeichnung mit [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) auf dem Canvas dar. Zusammen mit dem später gezeigten Observable-Code wird dadurch bei jeder Mausbewegung ein Kreis an der aktuellen Mausposition gezeichnet.

```js live-sample___canvas-example
function draw(e) {
  form.style.display = "none";

  ctx.fillStyle = penColor;
  ctx.beginPath();
  ctx.arc(
    e.x - canvas.offsetLeft,
    e.y - canvas.offsetTop,
    penSize,
    0,
    2 * Math.PI,
  );
  ctx.fill();
}
```

Als letzte Funktion definieren wir `finishDraw()`. Sie zeigt das `<form>` nach dem Ende des Zeichnens wieder an.

```js live-sample___canvas-example
function finishDraw() {
  form.style.display = "block";
}
```

Schließlich erstellen wir ein Observable für [`mousedown`](/de/docs/Web/API/Element/mousedown_event)-Ereignisse auf dem `<canvas>`. Bei jedem Drücken der primären Maustaste abonniert [`Observable.flatMap()`](/de/docs/Web/API/Observable/flatMap) einen Strom von `mousemove`-Ereignissen, der beim Loslassen der Taste endet. Wir reagieren auf `mouseup` am `document`-Objekt, damit das Zeichnen auch dann stoppt, wenn die Maustaste außerhalb des Canvas losgelassen wird. Anschließend extrahieren wir mit [`Observable.map()`](/de/docs/Web/API/Observable/map) die Mauskoordinaten und übergeben sie mithilfe von `subscribe()` an `draw()`.

```js live-sample___canvas-example
canvas
  .when("mousedown")
  .filter((e) => e.button === 0)
  .flatMap(() => {
    const mouseUp = document
      .when("mouseup")
      .filter((e) => e.button === 0)
      .finally(finishDraw);
    return canvas.when("mousemove").takeUntil(mouseUp);
  })
  .map((e) => ({ x: e.clientX, y: e.clientY }))
  .subscribe(draw);
```

Die Pipeline verarbeitet eine Abfolge von `mousedown → mousemove… → mouseup`:

1. Jedes `mousedown`-Ereignis der primären Maustaste passiert den Filter und löst den `flatMap()`-Callback aus.
2. Der Callback gibt `canvas.when("mousemove").takeUntil(mouseUp)` zurück. Durch das Abonnieren dieses inneren Observables werden Mausbewegungen und das Loslassen der Taste beobachtet.
3. Jede Mausbewegung auf dem Canvas wird über `flatMap()` an `map()` weitergeleitet, das ihre Koordinaten extrahiert, und gelangt anschließend zu `draw()`.
4. Beim Loslassen der primären Maustaste schließt [`Observable.takeUntil()`](/de/docs/Web/API/Observable/takeUntil) das innere Observable ab und meldet es von beiden Ereignisströmen ab. Der Callback von [`Observable.finally()`](/de/docs/Web/API/Observable/finally) wird während der Bereinigung ausgeführt und ruft `finishDraw()` auf, um das Formular wieder anzuzeigen.
5. Das äußere `mousedown`-Abonnement bleibt aktiv. Der nächste Tastendruck startet daher eine neue Zeichenfolge.

Im Ergebnis reagieren wir auf `mousemove`-Ereignisse (genau wie im ersten Beispiel auf dieser Seite!), beginnen damit aber erst, wenn `mousedown` ausgelöst wird, und hören auf, wenn `mouseup` ausgelöst wird. Mithilfe von `Observable` haben wir drei parallele Ereignisströme erfolgreich zu einer einzigen zusammenhängenden Abfolge kombiniert.

### Ergebnis

Das Beispiel wird so dargestellt:

{{EmbedLiveSample("canvas-example", "", 320)}}

## Siehe auch

- [Eigene Observables erstellen](/de/docs/Web/API/Observable_API/Creating_observables)
- [Erläuterung zu Observable](https://github.com/WICG/observable/blob/master/README.md)
