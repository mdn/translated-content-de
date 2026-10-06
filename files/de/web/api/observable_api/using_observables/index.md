---
title: Observables verwenden
slug: Web/API/Observable_API/Using_observables
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{DefaultAPISidebar("Observable API")}}

Die [Observable API](/de/docs/Web/API/Observable_API) bietet einen Mechanismus zur Verarbeitung von Werteströmen, einschließlich asynchroner Ereignisse. Dieser Leitfaden erklärt anhand von Browser-Ereignisströmen, wie Sie bestehende Observables transformieren, abonnieren und wieder abbestellen.

Bevor Sie fortfahren, können Sie die [Übersicht zur Observable API](/de/docs/Web/API/Observable_API) lesen, um sich mit den grundlegenden Konzepten vertraut zu machen.

## Ein Observable erhalten

[`Observable`](/de/docs/Web/API/Observable)-Objekte (üblicherweise **Observables** genannt) repräsentieren einen Strom von Werten, der beobachtet und transformiert werden kann. Der Code, der diese Werte bereitstellt, ist der **Producer**; der Code, der sie abonniert, empfängt und verwendet, ist der **Consumer**. Es gibt drei wesentliche Möglichkeiten, Observables zu erhalten:

- Die Methode [`EventTarget.when()`](/de/docs/Web/API/EventTarget/when) gibt ein [`Observable`](/de/docs/Web/API/Observable) zurück, das einen Strom von Ereignissen repräsentiert, die auf dem `EventTarget` ausgelöst werden. Auch Bibliotheken können Observables zurückgeben.
- Mit dem Konstruktor [`Observable()`](/de/docs/Web/API/Observable/Observable) können Sie eigene Observables erstellen. Weitere Informationen finden Sie unter [Eigene Observables erstellen](/de/docs/Web/API/Observable_API/Creating_observables).
- Mit der statischen Methode [`Observable.from()`](/de/docs/Web/API/Observable/from_static) können Sie Objekte wie [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) und [Iterables](/de/docs/Web/JavaScript/Reference/Iteration_protocols) in Observables umwandeln.

Im Web sind `EventTarget`-Objekte vielleicht der häufigste Anwendungsfall für Observables. Die Grundidee lautet: Wo Sie bisher `addEventListener(eventType, handler)` geschrieben haben, können Sie nun `when(eventType).subscribe(handler)` schreiben, um denselben Effekt zu erzielen. So können Sie beispielsweise mit `when()` auf `click`-Ereignisse am Dokument-Body reagieren:

```js
document.body.when("click").subscribe((event) => {
  console.log("Clicked!", event);
});
```

Dies ist nicht bloß ein syntaktischer Unterschied. Mit Observables können Sie Operationen kombinieren, etwa Ereignisse filtern, deren Daten transformieren und einen Strom beenden, wenn ein anderes Ereignis eintritt. Dieselben Operationen lassen sich nicht nur mit Ereignissen, sondern auch mit Promises, Iterables und eigenen Strömen verwenden, etwa den Beispielen für Timer und Benachrichtigungen über Elementgrößen unter [Eigene Observables erstellen](/de/docs/Web/API/Observable_API/Creating_observables).

## Ein Observable transformieren

Ein Observable ist ein Strom von Werten, den Sie in einen neuen Strom transformieren können. Ein `Observable`-Objekt bietet mehrere Transformationsmethoden, die denen von {{jsxref("Iterator")}} oder {{jsxref("Array")}} ähneln.

| [`Observable`](/de/docs/Web/API/Observable)-Methode               | Entsprechung bei {{jsxref("Iterator")}} | Beschreibung                                                                                                                 |
| ----------------------------------------------------------------- | --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| [`Observable.drop()`](/de/docs/Web/API/Observable/drop)           | {{jsxref("Iterator.drop()")}}           | Überspringt die ersten `n` Werte des Quell-Observables.                                                                      |
| [`Observable.filter()`](/de/docs/Web/API/Observable/filter)       | {{jsxref("Iterator.filter()")}}         | Überspringt Werte, die eine Prädikatfunktion nicht erfüllen.                                                                 |
| [`Observable.flatMap()`](/de/docs/Web/API/Observable/flatMap)     | {{jsxref("Iterator.flatMap()")}}        | Ordnet jedem Wert ein Observable zu und führt die resultierenden Observables zu einem einzigen Observable zusammen.          |
| [`Observable.inspect()`](/de/docs/Web/API/Observable/inspect)     | Keine                                   | Ruft Callbacks auf, um Werte und den Lebenszyklus des Abonnements zu untersuchen, und ermöglicht dabei weitere Verkettungen. |
| [`Observable.map()`](/de/docs/Web/API/Observable/map)             | {{jsxref("Iterator.map()")}}            | Ordnet jedem Wert mithilfe einer Mapping-Funktion einen neuen Wert zu.                                                       |
| [`Observable.switchMap()`](/de/docs/Web/API/Observable/switchMap) | Keine                                   | Ordnet jedem Wert ein inneres Observable zu und gibt nur Werte des jeweils neuesten inneren Observables aus.                 |
| [`Observable.take()`](/de/docs/Web/API/Observable/take)           | {{jsxref("Iterator.take()")}}           | Übernimmt nur die ersten `n` Werte des Quell-Observables.                                                                    |
| [`Observable.takeUntil()`](/de/docs/Web/API/Observable/takeUntil) | Keine                                   | Funktioniert wie `take()`, beendet den Strom aber, sobald ein zweites Observable einen Wert ausgibt.                         |

Sie können diese Methoden verketten, um mehrere Transformationen anzuwenden. Anschließend abonnieren Sie das letzte Observable, um die transformierten Werte zu empfangen.

Im folgenden Beispiel geben wir die Mauskoordinaten auf dem Bildschirm aus, wenn die Maus über einige {{htmlelement("div")}}-Elemente bewegt wird. Das HTML zeigen wir nicht, da es lediglich die `<div>`-Elemente und ein einzelnes {{htmlelement("p")}}-Element zur Anzeige der Daten enthält.

```html hidden live-sample___basic-when-example live-sample___abort-example
<div></div>
<div></div>
<p></p>
```

Im Beispiel-CSS geben wir den `<div>`-Elementen eine {{cssxref("height")}}, eine {{cssxref("background-color")}} und einen {{cssxref("margin-bottom")}}:

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

Anschließend legen wir eine Verarbeitungskette fest:

- [`Observable.filter()`](/de/docs/Web/API/Observable/filter) lässt nur Ereignisse durch die Verarbeitungskette, die auf einem {{htmlelement("div")}}-Element ausgelöst wurden (geprüft mit der Methode [`Element.matches()`](/de/docs/Web/API/Element/matches)), nicht aber Ereignisse auf anderen Nachfahren von `body`.
- [`Observable.map()`](/de/docs/Web/API/Observable/map) wandelt die ausgelösten `mousemove`-Ereignisobjekte in neue Objekte um, die die Koordinaten des Mauszeigers zum Zeitpunkt des Ereignisses enthalten.

Schließlich abonniert [`Observable.subscribe()`](/de/docs/Web/API/Observable/subscribe) das Observable. Wir übergeben der Methode `subscribe()` eine Callback-Funktion. Dieser Callback wird jedes Mal aufgerufen, wenn ein `mousemove`-Ereignis den Filter passiert.

Die gerenderte Ausgabe sieht so aus:

{{EmbedLiveSample("basic-when-example", "", 380)}}

Bewegen Sie die Maus über den oberen Teil des Beispiels. Die Koordinaten werden nur dann im `<p>`-Element ausgegeben, wenn sich die Maus über den `<div>`-Elementen befindet, nicht aber über den Bereichen außerhalb der `<div>`-Elemente.

> [!NOTE]
> Observables sind „lazy“: Ereignisse werden erst durch sie weitergeleitet, wenn sie mindestens einen Abonnenten haben. Vorher speichern sie auch keine Daten zwischen. Wenn Sie im vorherigen Beispiel den Aufruf von `subscribe()` entfernen und innerhalb der Methoden `filter()` und `map()` Protokollausgaben hinzufügen, werden Sie feststellen, dass nichts protokolliert wird. Sobald `subscribe()` am Ende der Verarbeitungskette aufgerufen wird, werden auch alle vorherigen Observables in der Kette abonniert und beginnen mit der Verarbeitung der Daten.

### Mit inneren Observables arbeiten

Manche Operationen erzeugen für jeden Quellwert einen weiteren Strom: Ein Klick könnte einen Upload starten, oder eine Änderung in einem Suchfeld könnte eine Anfrage auslösen. Diese Ströme heißen _innere Observables_. Wenn Sie nur `map()` verwenden, werden die inneren Observable-Objekte an Ihren Observer weitergegeben. [`Observable.flatMap()`](/de/docs/Web/API/Observable/flatMap) und [`Observable.switchMap()`](/de/docs/Web/API/Observable/switchMap) abonnieren sie stattdessen und leiten ihre Werte weiter.

- `flatMap()` verarbeitet Quellwerte nacheinander. Die Methode wartet, bis das aktuelle innere Observable abgeschlossen ist, bevor sie den Mapper für den nächsten Quellwert in der Warteschlange aufruft. Verwenden Sie sie, wenn jede Operation der Reihe nach abgeschlossen werden soll. Wird ein inneres Observable nie abgeschlossen, bleiben spätere Quellwerte in der Warteschlange.
- `switchMap()` beendet das Abonnement des aktuellen inneren Observables, wenn ein neuer Quellwert eintrifft, ruft dann den Mapper auf und abonniert dessen Ergebnis. Verwenden Sie diese Methode, wenn nur die Ergebnisse der neuesten Operation relevant sind.

Beide Methoden wandeln das Ergebnis des Mappers mit [`Observable.from()`](/de/docs/Web/API/Observable/from_static) um. Der Mapper kann daher auch ein Promise, ein Iterable oder ein Async Iterable zurückgeben. Ein Promise liefert seinen Erfüllungswert und wird dann abgeschlossen; eine Zurückweisung wird zu einem Fehler im inneren Observable. `map()` dagegen leitet ein zurückgegebenes Promise als Wert weiter, ohne darauf zu warten.

Das folgende interaktive Beispiel durchsucht eine kleine Liste von Fruchtnamen. Geben Sie etwas in das Suchfeld ein, um eine Suche zu starten. Die simulierte Antwort dauert eine Sekunde, sodass Sie erneut tippen können, während eine vorherige Suche noch läuft. Mit einem asynchronen Mapper können wir jede Suche als eine Operation behandeln:

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

Trifft ein weiteres Eingabeereignis ein, bevor die vorherige Suche abgeschlossen ist, wird das vorherige Ergebnis nicht mehr weitergeleitet. Das Beenden des Abonnements eines aus einem Promise erstellten Observables bricht jedoch die Arbeit hinter diesem Promise nicht ab: Die vorherige Anfrage kann trotzdem abgeschlossen werden. Um die Anfrage selbst abzubrechen, geben Sie ein eigenes Observable zurück, das `subscriber.signal` an `fetch()` übergibt, wie unter [Asynchrone Arbeit abbrechen](/de/docs/Web/API/Observable_API/Creating_observables#canceling_asynchronous_work) gezeigt.

### Eine Verarbeitungskette untersuchen

Mit [`Observable.inspect()`](/de/docs/Web/API/Observable/inspect) können Sie einen Seiteneffekt ausführen, etwa eine Protokollausgabe, während Werte unverändert weitergeleitet werden. Anders als `subscribe()` gibt die Methode ein Observable zurück und startet die Verarbeitungskette nicht selbst:

```js
document.body
  .when("click")
  .inspect((event) => console.log("Click:", event.target))
  .map((event) => ({ x: event.clientX, y: event.clientY }))
  .subscribe((point) => console.log("Coordinates:", point));
```

Sie können auch ein Objekt mit den Callbacks `subscribe`, `next`, `error`, `complete` und `abort` übergeben, um den Lebenszyklus des Abonnements zu untersuchen. Ein `inspect()`-Callback kann die Verarbeitungskette beeinflussen, wenn er eine Exception auslöst. Eine Exception in seinem `next`-Callback wird beispielsweise zu einem Fehler im zurückgegebenen Observable.

Weitere Einzelheiten finden Sie in der Referenz zu [`inspect()`](/de/docs/Web/API/Observable/inspect).

## Werte aggregieren

Die zuvor vorgestellten Methoden geben jeweils ein weiteres Observable zurück, sodass Sie mehrere Transformationen verketten können. Anschließend können Sie das letzte Observable abonnieren, um die transformierten Werte zu empfangen.

Sie möchten aber nicht immer jeden Wert einzeln verarbeiten. Manchmal interessiert Sie nur ein einzelner aggregierter Wert aus dem gesamten Strom. Dafür bietet die Observable API die folgenden Methoden:

| [`Observable`](/de/docs/Web/API/Observable)-Methode           | Entsprechung bei {{jsxref("Iterator")}} | Beschreibung                                                                                        |
| ------------------------------------------------------------- | --------------------------------------- | --------------------------------------------------------------------------------------------------- |
| [`Observable.every()`](/de/docs/Web/API/Observable/every)     | {{jsxref("Iterator.every()")}}          | Gibt `false` zurück, wenn das Prädikat für irgendeinen Wert `false` zurückgibt; andernfalls `true`. |
| [`Observable.find()`](/de/docs/Web/API/Observable/find)       | {{jsxref("Iterator.find()")}}           | Gibt den ersten Wert zurück, der ein Prädikat erfüllt.                                              |
| [`Observable.first()`](/de/docs/Web/API/Observable/first)     | Keine                                   | Gibt den ersten Wert des Observables zurück.                                                        |
| [`Observable.forEach()`](/de/docs/Web/API/Observable/forEach) | {{jsxref("Iterator.forEach()")}}        | Ruft für jeden Wert eine Funktion auf.                                                              |
| [`Observable.last()`](/de/docs/Web/API/Observable/last)       | Keine                                   | Gibt den letzten Wert des Observables zurück.                                                       |
| [`Observable.reduce()`](/de/docs/Web/API/Observable/reduce)   | {{jsxref("Iterator.reduce()")}}         | Aggregiert die Werte zu einem einzelnen Wert.                                                       |
| [`Observable.some()`](/de/docs/Web/API/Observable/some)       | {{jsxref("Iterator.some()")}}           | Gibt `true` zurück, wenn das Prädikat für irgendeinen Wert `true` zurückgibt; andernfalls `false`.  |
| [`Observable.toArray()`](/de/docs/Web/API/Observable/toArray) | {{jsxref("Iterator.toArray()")}}        | Sammelt alle Werte in einem Array.                                                                  |

Alle diese Methoden geben Promises zurück, die mit den beschriebenen Ergebnissen erfüllt werden. Je nach Methode wird das Promise erfüllt, sobald das Ergebnis feststeht oder wenn [das Observable abgeschlossen wird](#ein_observable_abonnieren). Es kann auch zurückgewiesen werden, beispielsweise wenn im Observable ein Fehler auftritt oder das Abonnement abgebrochen wird.

Anders als die Transformationsmethoden abonnieren diese Aggregationsmethoden implizit: Die Verarbeitungskette beginnt Werte zu empfangen, sobald eine dieser Methoden aufgerufen wird.

Dieses Beispiel sucht innerhalb eines einzelnen Bereichs nach der ersten Mausposition, die auf beiden Achsen über `200` liegt. Bis eine passende Position gefunden wird, zeigt es die aktuelle Position an und demonstriert dabei auch die Funktionsweise von `inspect()`. Klicken Sie auf „Restart“, nachdem eine passende Position gefunden wurde, um es erneut zu versuchen.

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

So wie ein Promise Benachrichtigungen über seine Erfüllung oder Zurückweisung liefern kann, kann auch ein Observable verschiedene Arten von Benachrichtigungen an seine Abonnenten senden. Jede davon entspricht einer anderen Methode, die Sie an `subscribe()` übergeben können.

- `next(value)`: Wird aufgerufen, sobald ein neuer Wert im Observable-Strom verfügbar ist. In den obigen Beispielen haben wir eine einzelne Funktion an `subscribe()` übergeben. Das ist die Kurzform für ein Objekt, das nur eine `next()`-Methode enthält.
- `error(err)`: Wird aufgerufen, wenn das Observable einen Fehler meldet. Exceptions, die von den eigenen Callbacks des Observers ausgelöst werden, werden stattdessen dem {{Glossary("global_object", "globalen Objekt")}} als nicht abgefangene Fehler gemeldet und nicht an diesen `error()`-Callback übergeben.
- `complete()`: Wird aufgerufen, wenn das Observable keine weiteren Werte mehr sendet. Darauf gehen wir im Leitfaden [Eigene Observables erstellen](/de/docs/Web/API/Observable_API/Creating_observables) näher ein. Ereignisströme sind unendlich, können aber durch Aufrufe von `take()` oder `takeUntil()` begrenzt werden.

Dieses Observable wird beispielsweise nach drei Klicks abgeschlossen und protokolliert eine entsprechende Meldung:

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

Intern verfügt jedes aktive Observable-Abonnement über eine Liste von _Observern_: Objekten, die keinen, einen oder mehrere dieser drei Callbacks enthalten. Sie können `subscribe()` mehrmals für dasselbe Observable aufrufen, um mehrere Observer zu registrieren. Zum Beispiel:

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

Gleichzeitig aktive Observer teilen sich das Abonnement. Jeder empfängt die Werte, die während seines Abonnements ausgegeben werden; bereits ausgegebene Werte werden neuen Observern nicht erneut zugestellt. Das unterscheidet sich von einem gemeinsam genutzten Iterator: Dort bewegt der `next()`-Aufruf eines jeden Consumers denselben Iterator weiter, statt einen Wert an alle Consumer zu verteilen.

> [!NOTE]
> Dieses Verhalten bei gemeinsam genutzten Abonnements könnte sich ändern. Ein [Vorschlag, jedem Observer einen eigenen `Subscriber` zu geben](https://github.com/WICG/observable/issues/217), würde dazu führen, dass jedes Abonnement eine separate Ausführung startet, statt ein aktives Abonnement wiederzuverwenden.
>
> Für dieses konkrete Beispiel wäre das Verhalten gleich, aber jeder `subscribe()`-Aufruf würde einen neuen Event Listener für `click` registrieren, statt denselben Event Listener wiederzuverwenden.

## Das Abonnement eines Observables beenden

Ein Observer kann das Observable auch abbestellen. Seine Callbacks werden dann nicht mehr aufgerufen. Hat ein Observable keine Observer mehr, wird sein gemeinsam genutztes Abonnement inaktiv, und es führt sogenannte _Teardown-Callbacks_ aus. Diese Callbacks geben Ressourcen frei, beispielsweise den von `when()` registrierten Event Listener. Eigene Observables müssen diese Bereinigung selbst implementieren, wie unter [Eigene Observables erstellen](/de/docs/Web/API/Observable_API/Creating_observables#teardown) beschrieben.

Die übliche Methode zum Beenden eines Observable-Abonnements ist ein [`AbortController`](/de/docs/Web/API/AbortController). Damit können Sie das Abonnement zu einem beliebigen Zeitpunkt während der Verarbeitung der Observable-Daten beenden. Dazu erstellen Sie einen `AbortController` und übergeben beim Aufruf von `subscribe()` dessen [`signal`](/de/docs/Web/API/AbortController/signal). Anschließend können Sie [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) auf dem Controller aufrufen. Dadurch werden die Abonnements aller Observer beendet, die diesem Signal zugeordnet sind.

Wir können beispielsweise unser früheres [einfaches `when()`-Beispiel](#ein_observable_transformieren) so ändern, dass das Abonnement endet, wenn der Benutzer irgendwo auf die Seite klickt. Die Ausgabe wird dann nicht mehr aktualisiert. Klicken Sie auf „Restart“, um ein neues Abonnement zu starten.

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

Der Aufruf `take(1)` schließt den Klickstrom nach dem ersten Klick ab und entfernt seinen Event Listener. Das ähnelt der Verwendung von `{ once: true }` mit `addEventListener()`.

Im nächsten Beispiel gibt ein weiteres Observable einen Wert aus, der die Abbruchbedingung auslöst: `document.body.when("click")`. Die Methode `takeUntil()` ist eine [Transformationsmethode](#ein_observable_transformieren) und gibt daher ein Observable zurück. Sie können sie also in die Verarbeitungskette einfügen, um eine Bedingung festzulegen, unter der das Abonnement endet. Der folgende Code erzielt denselben Effekt wie das vorherige Beispiel:

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
> Die Methode `takeUntil()` [wandelt](/de/docs/Web/API/Observable/from_static) ihre Eingabe in ein Observable um. Sie können ein Promise übergeben, um den Strom bei dessen Erfüllung zu beenden, oder synchrone beziehungsweise asynchrone Iterables, um ihn zu beenden, sobald sie ihren ersten Wert liefern, sofern es einen gibt. Wie die Umwandlung funktioniert, erfahren Sie unter [`Observable.from()`](/de/docs/Web/API/Observable/from_static).

Mit einem `AbortController` können Sie ein Abonnement an beliebiger Stelle in Ihrem Code beenden. Separate Controller ermöglichen es Ihnen, die Abonnements von Observern unabhängig voneinander zu beenden. Ein Abbruch ruft den `complete`-Callback des Observers nicht auf. `takeUntil()` dagegen schließt das Observable ab, das die Methode zurückgibt, und benachrichtigt dessen Observer über ihre `complete`-Callbacks. Andere Observer, die das Quell-Observable direkt abonniert haben, bleiben abonniert.

## Fehler behandeln

Ein Fehler beendet das betroffene Abonnement. Fehler aus einer Quelle werden durch die Verarbeitungskette weitergegeben. Exceptions aus Transformations-Callbacks, etwa einem `map()`-Mapper oder einem `filter()`-Prädikat, werden zu Fehlern im zurückgegebenen Observable. Der `error`-Callback eines Observers meldet oder behandelt den Fehler, setzt das Abonnement aber nicht fort. Hat der Observer keinen `error`-Callback, wird der Fehler dem {{Glossary("global_object", "globalen Objekt")}} als nicht abgefangener Fehler gemeldet.

Mit [`Observable.catch()`](/de/docs/Web/API/Observable/catch) kann eine Verarbeitungskette nach einem Fehler fortfahren, indem sie einen Ersatzstrom abonniert. Der Callback erhält den Fehler und gibt ein Observable oder einen beliebigen Wert zurück, der sich mit `Observable.from()` umwandeln lässt. Wenn er beispielsweise `[]` zurückgibt, wird der Ersatzstrom abgeschlossen, ohne einen Wert auszugeben. Die fehlgeschlagene Quelle wird dadurch nicht erneut ausgeführt.

Bei inneren Observables ist die Position von `catch()` wichtig. Im [Suchbeispiel](#mit_inneren_observables_arbeiten) beendet ein Fehler in der aktuellen Anfrage das Suchabonnement, sodass nachfolgende Eingabeereignisse keine weiteren Suchen starten. Wir können den Code für das Abonnement durch den folgenden ersetzen, um Fehler abzufangen, während das innere Abonnement aktiv ist:

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

Hier behandelt `catch()` nur den Fehler der inneren Anfrage. Der leere Ersatzstrom wird abgeschlossen, während das äußere Abonnement weiterhin auf Eingaben wartet. Würden Sie `catch()` stattdessen nach `switchMap()` platzieren, würde die gesamte Such-Verarbeitungskette ersetzt: Die Rückgabe von `[]` würde sie dort abschließen und das Warten auf Eingaben beenden.

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

Fehler aus Anfragen, deren Abonnement `switchMap()` bereits beendet hat, werden dadurch nicht behandelt. Wird das Promise einer solchen Anfrage später zurückgewiesen, meldet `Observable.from()` den Fehler dem globalen Objekt, da sein Subscriber inaktiv ist; der `catch()`-Callback ist nicht mehr abonniert. Um überholte Anfragen abzubrechen und zu verhindern, dass ihr Abbruch als Fehler gemeldet wird, verwenden Sie den eigenen `fetchJSON()`-Producer unter [Asynchrone Arbeit abbrechen](/de/docs/Web/API/Observable_API/Creating_observables#canceling_asynchronous_work). Er prüft `subscriber.active`, bevor er eine Zurückweisung weiterleitet.

Exceptions aus Callbacks, die an `subscribe()` übergeben werden, verhalten sich anders: Sie werden dem globalen Objekt gemeldet, statt zu Fehlern zu werden, die ein `catch()` in der Verarbeitungskette behandeln könnte. Ebenso wird nicht auf das Promise gewartet, das ein asynchroner `next`-Callback zurückgibt. Behandeln Sie dessen Zurückweisungen selbst oder verwenden Sie `flatMap()` beziehungsweise `switchMap()`, um die asynchrone Arbeit in die Verarbeitungskette einzubinden.

Ein `catch()` in der Verarbeitungskette behandelt beispielsweise keine Exception, die von ihrem Observer ausgelöst wird:

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

[`Observable.finally()`](/de/docs/Web/API/Observable/finally) gibt ein Observable zurück, das die Werte und Benachrichtigungen der Quelle weiterleitet und einen Callback ausführt, wenn sein Abonnement durch Abschluss, Fehler oder Abbestellung endet. Damit eignet sich die Methode für Bereinigungsaufgaben, die ein `complete`-Callback allein nicht abdecken würde:

```js
document.body
  .when("click")
  .take(3)
  .finally(() => console.log("Stopped observing clicks"))
  .subscribe((event) => console.log(event.target));
```

Im vorherigen Codeausschnitt wird der `finally()`-Callback ausgeführt, nachdem das Abonnement endet – gemäß `take(3)` nach drei Klicks. Er wird auch ausgeführt, wenn das Abonnement vorzeitig abgebrochen wird. Auf ein zurückgegebenes Promise wartet die Methode nicht. Verwenden Sie `finally()`, um einer Verarbeitungskette eine Bereinigung hinzuzufügen. Verwenden Sie `addTeardown()`, um die Ressourcenbereinigung des Producers selbst zu implementieren, wie unter [Eigene Observables erstellen](/de/docs/Web/API/Observable_API/Creating_observables#teardown) beschrieben.

## Beispiel: Zeichnen auf einem Canvas

In diesem Beispiel erstellen wir eine einfache Zeichenanwendung mit {{htmlelement("canvas")}}. Sie führt die bisher behandelten APIs zusammen und zeigt, wie Observables dabei helfen, komplexe Logik zur Ereignisverarbeitung deklarativ umzusetzen.

### HTML

Das Markup enthält ein `<canvas>`-Element zum Zeichnen und ein {{htmlelement("form")}} mit zwei {{htmlelement("input")}}-Steuerelementen, über die Benutzer eine neue Stiftgröße und -farbe auswählen können: einen [Bereichsregler](/de/docs/Web/HTML/Reference/Elements/input/range) beziehungsweise eine [Farbauswahl](/de/docs/Web/HTML/Reference/Elements/input/color). Außerdem fügen wir ein {{htmlelement("output")}}-Element hinzu, das den aktuellen Wert des Bereichsreglers anzeigt.

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

Im CSS lassen wir das `<body>`-Element die gesamte Breite und Höhe der Seite einnehmen. Außerdem platzieren wir das `<form>` über dem `<canvas>` und verwenden {{Glossary("inset_properties", "Inset-Eigenschaften")}}, damit es am oberen, linken und rechten Rand des `<body>` anliegt.

Der Rest des CSS ist für das Verständnis des Beispiels nicht wichtig. Wir erläutern ihn daher hier nicht, haben ihn aber unten vollständig aufgeführt.

```css live-sample___canvas-example
* {
  box-sizing: border-box;
}

html {
  font-family: "Helvetica", "Arial";
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

In unserem Skript holen wir zuerst Referenzen auf die Elemente `<canvas>`, `<form>`, `<input>` und `<output>`:

```js live-sample___canvas-example
const canvas = document.querySelector("canvas");
const form = document.querySelector("form");
const sizeInput = document.querySelector("[type='range']");
const sizeOutput = document.querySelector("output");
const colorInput = document.querySelector("[type='color']");
```

Anschließend gleichen wir [`width`](/de/docs/Web/API/HTMLCanvasElement/width) und [`height`](/de/docs/Web/API/HTMLCanvasElement/height) des Canvas an [`clientWidth`](/de/docs/Web/API/Element/clientWidth) und [`clientHeight`](/de/docs/Web/API/Element/clientHeight) des `<body>` an. Das übernimmt die Funktion `sizeCanvas()`. Sie wird beim Start der Anwendung und bei jeder Größenänderung des Fensters aufgerufen. Dazu verwenden wir `when("resize").subscribe(sizeCanvas)`, was denselben Effekt wie `addEventListener("resize", sizeCanvas)` hat. Das Festlegen der Canvas-Abmessungen löscht außerdem die Zeichnung.

```js live-sample___canvas-example
function sizeCanvas() {
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;
}

sizeCanvas();

window.when("resize").subscribe(sizeCanvas);
```

Als Nächstes definieren wir die Variablen und Funktionen, die wir zum Zeichnen auf dem `<canvas>` benötigen. Zuerst holen wir eine Referenz auf den [2D-Rendering-Kontext](/de/docs/Web/API/CanvasRenderingContext2D) des `<canvas>` und speichern Anfangswerte für Stiftgröße und -farbe in `penSize` beziehungsweise `penColor`. Die Funktion `updatePenSize()` setzt `penSize` auf [`valueAsNumber`](/de/docs/Web/API/HTMLInputElement/valueAsNumber) des Bereichsreglers und zeigt den Wert im `<output>`-Element an. Die Funktion `updatePenColor()` setzt `penColor` auf [`value`](/de/docs/Web/API/HTMLInputElement/value) der Farbauswahl. Diese Funktionen verarbeiten das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis des Bereichsreglers beziehungsweise das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis der Farbauswahl.

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

Kommen wir nun zu unserer zentralen Funktion `draw()`. Zunächst blenden wir das `<form>` aus, damit beim Zeichnen das gesamte `<canvas>` sichtbar ist. Dann setzen wir [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) des Canvas-Kontexts auf `penColor`, beginnen mit [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) einen Pfad, zeichnen mit [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc) einen einzelnen Kreis mit der angegebenen `penSize` an den Koordinaten `x` und `y` des Ereignisobjekts (dazu später mehr) und stellen die Zeichnung mit [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) auf dem Canvas dar. Zusammen mit dem später gezeigten Observable-Code wird so bei jeder Mausbewegung ein Kreis an den aktuellen Mauskoordinaten gezeichnet.

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

Als letzte Funktion definieren wir `finishDraw()`. Sie zeigt das `<form>` wieder an, wenn das Zeichnen beendet ist.

```js live-sample___canvas-example
function finishDraw() {
  form.style.display = "block";
}
```

Schließlich erstellen wir ein Observable für [`mousedown`](/de/docs/Web/API/Element/mousedown_event)-Ereignisse auf dem `<canvas>`. Bei jedem Drücken der primären Maustaste abonniert [`Observable.flatMap()`](/de/docs/Web/API/Observable/flatMap) einen Strom von `mousemove`-Ereignissen, der endet, wenn die Taste losgelassen wird. Wir achten auf `mouseup` am `document`-Objekt, damit das Zeichnen auch dann endet, wenn die Maustaste außerhalb des Canvas losgelassen wird. Anschließend extrahieren wir mit [`Observable.map()`](/de/docs/Web/API/Observable/map) die Mauskoordinaten und übergeben sie mit `subscribe()` an `draw()`.

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

Die Verarbeitungskette verarbeitet eine Abfolge von `mousedown → mousemove… → mouseup`:

1. Jedes `mousedown`-Ereignis der primären Maustaste passiert den Filter und löst den `flatMap()`-Callback aus.
2. Der Callback gibt `canvas.when("mousemove").takeUntil(mouseUp)` zurück. Durch das Abonnieren dieses inneren Observables wird begonnen, auf Mausbewegungen und das Loslassen der Taste zu achten.
3. Jede Mausbewegung auf dem Canvas gelangt über `flatMap()` zu `map()`, wo ihre Koordinaten extrahiert werden, und anschließend zu `draw()`.
4. Wenn die primäre Maustaste losgelassen wird, schließt [`Observable.takeUntil()`](/de/docs/Web/API/Observable/takeUntil) das innere Observable ab und beendet die Abonnements beider Ereignisströme. Der Callback von [`Observable.finally()`](/de/docs/Web/API/Observable/finally) wird während der Bereinigung ausgeführt und ruft `finishDraw()` auf, um das Formular wieder anzuzeigen.
5. Das äußere `mousedown`-Abonnement bleibt aktiv, sodass der nächste Tastendruck eine neue Zeichenfolge startet.

Im Ergebnis reagieren wir auf `mousemove`-Ereignisse (genau wie im ersten Beispiel auf dieser Seite!), beginnen aber erst beim Auslösen von `mousedown`, auf sie zu achten, und hören beim Auslösen von `mouseup` wieder damit auf. Mithilfe von `Observable` haben wir drei parallele Ereignisströme erfolgreich zu einer einzigen, zusammenhängenden Abfolge kombiniert.

### Ergebnis

Das Beispiel wird so dargestellt:

{{EmbedLiveSample("canvas-example", "", 320)}}

## Siehe auch

- [Eigene Observables erstellen](/de/docs/Web/API/Observable_API/Creating_observables)
- [Erläuterung zu Observables](https://github.com/WICG/observable/blob/master/README.md)
