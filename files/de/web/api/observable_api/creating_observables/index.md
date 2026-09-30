---
title: Benutzerdefinierte Observables erstellen
slug: Web/API/Observable_API/Creating_observables
l10n:
  sourceCommit: bacd00c353f643d8f5be0ce769015b1a66b4251a
---

{{DefaultAPISidebar("Observable API")}}

Mit der [Observable API](/de/docs/Web/API/Observable_API) können Sie mithilfe des Konstruktors [`Observable()`](/de/docs/Web/API/Observable/Observable) eigene Werteströme erstellen. Dieser Leitfaden erklärt, wie Sie Werte bereitstellen, einen Datenstrom abschließen und Ressourcen freigeben, wenn ein Abonnement endet.

Lesen Sie zunächst [Observables verwenden](/de/docs/Web/API/Observable_API/Using_observables), um sich mit dem Abonnieren und Verarbeiten von Observable-Datenströmen vertraut zu machen.

## Ein Observable erstellen

Wie Promises werden Observables erstellt, indem dem Konstruktor [`Observable()`](/de/docs/Web/API/Observable/Observable) eine Callback-Funktion übergeben wird. Diese Funktion führt die erforderliche Arbeit aus und stellt den Abonnenten des Observables Daten bereit. Sie wird nicht sofort aufgerufen, sondern erst, wenn sich der erste Beobachter anmeldet: über `subscribe()`, eine [Aggregationsmethode](/de/docs/Web/API/Observable_API/Using_observables#aggregating_values) oder durch das Abonnieren eines nachgelagerten Observables, das mit einer [Transformationsmethode](/de/docs/Web/API/Observable_API/Using_observables#transforming_an_observable) erstellt wurde.

Die Callback-Funktion von `Observable()` erhält ein [`Subscriber`](/de/docs/Web/API/Subscriber)-Objekt. Über dessen Methoden können Sie Daten an alle Beobachter senden, die das Observable abonniert haben. Weitere Beobachter nutzen dasselbe zugrunde liegende Abonnement, bis es abgeschlossen wird, ein Fehler auftritt oder sich alle Beobachter abmelden. Danach wird die Callback-Funktion erneut aufgerufen, sobald sich der nächste Beobachter anmeldet.

> [!NOTE]
> Dieses Verhalten bei gemeinsam genutzten Abonnements könnte sich ändern. Ein [Vorschlag, jedem Beobachter einen eigenen `Subscriber` zu geben](https://github.com/WICG/observable/issues/217), würde bewirken, dass jedes Abonnement eine eigene Ausführung startet, statt eine aktive Ausführung wiederzuverwenden.

Das `Subscriber`-Objekt verfügt über folgende Methoden:

- [`next(value)`](/de/docs/Web/API/Subscriber/next): Sendet einen Wert an die `next`-Callback-Funktion jedes Beobachters. Diese Methode kann beliebig oft aufgerufen werden, solange das Abonnement aktiv ist.
- [`complete()`](/de/docs/Web/API/Subscriber/complete): Schließt das Abonnement erfolgreich ab und ruft die `complete`-Callback-Funktion jedes Beobachters ohne Argumente auf.
- [`error(error)`](/de/docs/Web/API/Subscriber/error): Beendet das Abonnement mit einem Fehler und übergibt diesen an die `error`-Callback-Funktion jedes Beobachters. Hat ein Beobachter keine `error`-Callback-Funktion, wird der Fehler dem {{Glossary("global_object", "globalen Objekt")}} als nicht abgefangener Fehler gemeldet.
- [`addTeardown(callback)`](/de/docs/Web/API/Subscriber/addTeardown): Registriert eine Callback-Funktion, die beim Ende des Abonnements Ressourcen freigibt. Weitere Informationen finden Sie unter [Ressourcen freigeben](#ressourcen_freigeben).

Sobald ein Abonnement besteht, kann das benutzerdefinierte Observable durch Aufrufe von `subscriber.next()` beliebig viele Werte senden. Optional kann anschließend `subscriber.complete()` oder `subscriber.error()` aufgerufen werden, um das Ende des Datenstroms zu signalisieren.

In diesem Beispiel geben wir die Zahlen von 1 bis 10 auf der Seite aus und zeigen anschließend eine Meldung an, dass die Zählung abgeschlossen ist. Das HTML zeigen wir nicht: Es enthält lediglich ein `<p>`-Element zur Anzeige des Zählerstands und ein {{htmlelement("button")}} zum Starten der Zählung.

```html hidden live-sample___basic-constructor-example live-sample___basic-teardown-example
<button>Start count</button>
<p></p>
```

Im JavaScript erstellen wir mit dem Konstruktor [`Observable()`](/de/docs/Web/API/Observable/Observable) ein neues Observable. Innerhalb seiner Callback-Funktion deklarieren wir die Variable `i` mit dem Wert `1`. Anschließend prüfen wir mit einem Aufruf von [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) den Wert von `i` alle `timerInterval` Millisekunden. Wenn der Wert die angegebene Anzahl von Durchläufen überschritten hat, schließen wir das Abonnement mit der Methode `Subscriber.complete()` ab. Andernfalls senden wir den aktuellen Wert von `i` mit `Subscriber.next()` an die Beobachter. Am Ende der Intervall-Callback-Funktion wird `i` um 1 erhöht.

```js live-sample___basic-constructor-example
function makeTimer(timerInterval, iterations = Infinity) {
  return new Observable((subscriber) => {
    let i = 1;
    const interval = setInterval(() => {
      if (i === iterations + 1) {
        subscriber.complete();
        clearInterval(interval);
      } else {
        subscriber.next(i);
      }
      i++;
    }, timerInterval);
  });
}
```

> [!NOTE]
> Diese Funktion ist noch nicht für den Produktiveinsatz geeignet! Wenn der Benutzer mehrmals auf die Schaltfläche klickt, bevor die Zählung endet, können mehrere Intervalle erstellt werden. Dieses Problem beheben wir im Abschnitt [Ressourcen freigeben](#ressourcen_freigeben).

Als Nächstes definieren wir eine Funktion `init()`, in der wir das Observable durch einen Aufruf von `Observable.subscribe()` abonnieren. Das an `subscribe()` übergebene Objekt definiert die Callback-Funktionen des Beobachters: `next()` gibt den vom Erzeuger empfangenen Wert im `<p>`-Element aus, und `complete()` zeigt eine Abschlussmeldung an.

```js hidden live-sample___basic-constructor-example live-sample___basic-teardown-example
const outputElem = document.querySelector("p");
const btn = document.querySelector("button");
```

```js live-sample___basic-constructor-example
function init() {
  makeTimer(500, 10).subscribe({
    next(value) {
      outputElem.textContent = value;
    },
    complete() {
      outputElem.textContent = "Count complete; click to restart.";
    },
  });
}
```

Schließlich wird die Funktion `init()` als Reaktion auf das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis am `<button>`-Element mithilfe von `when()` und `subscribe()` aufgerufen.

```js live-sample___basic-constructor-example
btn.when("click").subscribe(init);
```

Die gerenderte Ausgabe sieht so aus:

{{EmbedLiveSample("basic-constructor-example", "", 80)}}

Klicken Sie auf die Schaltfläche. Alle 500 Millisekunden wird der Wert von `i` auf der Seite ausgegeben und anschließend um 1 erhöht. Beim nächsten Intervall nach der Ausgabe von `10` wird das Abonnement abgeschlossen und im Absatz erscheint „Count complete; click to restart.“

> [!NOTE]
> Der Erzeuger ruft Methoden des `Subscriber`-Objekts auf, um Benachrichtigungen zu senden. Der Empfänger definiert die entsprechenden Callback-Funktionen im Objekt, das an `subscribe()` übergeben wird. Wie Sie im nächsten Abschnitt sehen werden, registriert auch der Erzeuger die Bereinigung, indem er innerhalb der Konstruktor-Callback-Funktion `Subscriber.addTeardown()` verwendet.

## Ressourcen freigeben

Das [vorherige Beispiel](#ein_observable_erstellen) ist nicht für den Produktiveinsatz geeignet, weil jedes Abonnement eines neuen `makeTimer()`-Observables ein neues Intervall erstellt. Wenn der Benutzer mehrmals auf das `<button>` klickt, entstehen mehrere Intervalle, die alle versuchen, dasselbe `<p>`-Element zu aktualisieren. Um dies zu verhindern, müssen wir das vorherige Observable abbestellen und sein Intervall beenden, bevor eine neue Zählung beginnt.

Zunächst verwenden wir einen `AbortController`, um das Abonnement zu beenden, wenn der Benutzer erneut auf die Schaltfläche klickt:

```js live-sample___basic-teardown-example
let controller;

function init() {
  controller?.abort();
  controller = new AbortController();
  makeTimer(500, 10).subscribe(
    {
      next(value) {
        outputElem.textContent = value;
      },
      complete() {
        outputElem.textContent = "Count complete; click to restart.";
      },
    },
    { signal: controller.signal },
  );
}

btn.when("click").subscribe(init);
```

Das `makeTimer()`-Observable wird gestoppt. Das darin erstellte Intervall wird jedoch erst beendet, wenn der Zähler `11` erreicht. Für unser Beispiel ist das unproblematisch, weil sich das Intervall schließlich selbst beendet. In einer realen Anwendung könnte dies aber zu Speicherlecks und unerwartetem Verhalten führen. Wir müssen sicherstellen, dass `clearInterval` zuverlässig aufgerufen wird, sobald das Observable inaktiv wird – nicht erst, wenn es seinen regulären Endpunkt erreicht. Dazu fügen wir dem Observable eine _Bereinigungsroutine_ hinzu.

Die Bereinigungslogik wird als Callback-Funktion an [`Subscriber.addTeardown()`](/de/docs/Web/API/Subscriber/addTeardown) übergeben:

```js live-sample___basic-teardown-example
function makeTimer(timerInterval, iterations = Infinity) {
  return new Observable((subscriber) => {
    let i = 1;
    const interval = setInterval(() => {
      if (i === iterations + 1) {
        subscriber.complete();
      } else {
        subscriber.next(i);
      }
      i++;
    }, timerInterval);
    subscriber.addTeardown(() => {
      clearInterval(interval);
    });
  });
}
```

Die mit `addTeardown()` registrierte Callback-Funktion wird ausgeführt, wenn `Subscriber.complete()` oder `Subscriber.error()` das Abonnement beendet, und zwar vor den Abschluss- oder Fehler-Callback-Funktionen der Beobachter. Sie wird auch ausgeführt, wenn sich alle Beobachter abmelden.

In diesem Fall beendet die Bereinigungs-Callback-Funktion das Intervall über [`Window.clearInterval()`](/de/docs/Web/API/Window/clearInterval). Dadurch läuft es nicht weiter, sobald das Abonnement endet.

Das Beispiel wird nun wie folgt dargestellt:

{{EmbedLiveSample("basic-teardown-example", "", 80)}}

Klicken Sie während der laufenden Zählung auf das `<button>`: Die Zählung beginnt wieder bei `1`.

## Werte synchron bereitstellen

Ein Observable muss nicht auf ein Ereignis oder einen asynchronen Vorgang warten. Die Konstruktor-Callback-Funktion wird synchron ausgeführt, wenn ein Abonnement beginnt, und `subscriber.next()` ruft die Callback-Funktionen der Beobachter ebenfalls synchron auf. Ein Abonnement kann daher Werte empfangen und abgeschlossen werden, bevor `subscribe()` zurückkehrt:

```js
const numbers = new Observable((subscriber) => {
  for (let value = 1; value <= 10; value++) {
    if (!subscriber.active) {
      return;
    }
    subscriber.next(value);
  }
  subscriber.complete();
});

console.log("Before subscribing");
numbers.take(3).subscribe({
  next(value) {
    console.log(value);
  },
  complete() {
    console.log("Complete");
  },
});
console.log("After subscribing");

// Before subscribing
// 1
// 2
// 3
// Complete
// After subscribing
```

Nachdem `take(3)` drei Werte empfangen hat, schließt es seine Ausgabe ab und meldet sich von `numbers` ab. Da keine Beobachter mehr vorhanden sind, erhält die Eigenschaft [`active`](/de/docs/Web/API/Subscriber/active) des Erzeugers den Wert `false`. Wenn der Erzeuger sie vor jedem Durchlauf prüft, vermeidet er unnötige Arbeit. Diese Prüfung berücksichtigt auch Abonnements, die mit einem bereits abgebrochenen Signal gestartet werden.

Ein Aufruf von `subscriber.complete()` oder `subscriber.error()` stoppt die JavaScript-Ausführung des Erzeugers nicht. Verwenden Sie gegebenenfalls `return`, `break` oder eine Prüfung von `Subscriber.active`, um die Bereitstellung weiterer Werte zu beenden. Funktionen, die eine synchrone Bereitstellung unterbrechen sollen, müssen bereits vor dem Aufruf von `subscribe()` verfügbar sein, beispielsweise über ein in den Optionen übergebenes `AbortSignal`.

## Asynchrone Vorgänge abbrechen

Wenn sich ein Empfänger abmeldet, ist der Erzeuger dafür verantwortlich, nicht mehr benötigte Vorgänge zu stoppen. Bei APIs, die ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) akzeptieren, etwa [`fetch()`](/de/docs/Web/API/Window/fetch), können Sie [`subscriber.signal`](/de/docs/Web/API/Subscriber/signal) direkt übergeben. Dieses Signal wird abgebrochen, wenn das gemeinsam genutzte Abonnement endet – auch dann, wenn sich alle Beobachter abmelden.

Die folgende Funktion erstellt ein Observable, das JSON abruft, die geparsten Daten ausgibt und anschließend abgeschlossen wird. Die Anfrage beginnt, wenn das Observable abonniert wird:

```js
function fetchJSON(url) {
  return new Observable((subscriber) => {
    fetch(url, { signal: subscriber.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        subscriber.next(data);
        subscriber.complete();
      })
      .catch((error) => {
        if (subscriber.active) {
          subscriber.error(error);
        }
      });
  });
}
```

Wenn das Abonnement endet, während die Anfrage oder das Einlesen des Antworttexts noch aussteht, bricht `subscriber.signal` diese Vorgänge ab. Dadurch wird das Promise für den Abruf oder das Einlesen des Antworttexts abgelehnt. Der Handler für die Ablehnung prüft `subscriber.active`, bevor er den Fehler weiterleitet: Ein Aufruf von `subscriber.error()` nach dem Abbruch würde den Fehler dem globalen Objekt melden. Solange das Abonnement aktiv ist, werden Fehler bei der Anfrage und beim Parsen des JSON an seine Beobachter weitergeleitet.

Die Callback-Funktion des Konstruktors `Observable()` ist nicht asynchron. Ihr Rückgabewert wird ignoriert: Die Rückgabe eines Promise würde daher weder bewirken, dass das Observable darauf wartet, noch würde dessen Ablehnung automatisch weitergeleitet. Stattdessen ruft dieses Beispiel `next()`, `complete()` und `error()` ausdrücklich in den Promise-Handlern auf.

Wir können `fetchJSON()` in einer Suchpipeline wie der unter [Observables verwenden](/de/docs/Web/API/Observable_API/Using_observables#working_with_inner_observables) beschriebenen einsetzen. Angenommen, die Seite enthält ein Sucheingabefeld und ein Element für die Ergebnisse:

```js
const searchInput = document.querySelector("input[type='search']");
const results = document.querySelector("#results");

searchInput
  .when("input")
  .map(() => searchInput.value)
  .switchMap((query) =>
    fetchJSON(`/search?q=${encodeURIComponent(query)}`).catch((error) => {
      results.textContent = error.message;
      return [];
    }),
  )
  .subscribe((data) => {
    results.textContent = JSON.stringify(data);
  });
```

Bei jedem neuen Eingabeereignis meldet sich `switchMap()` vom vorherigen inneren Observable ab. Da dessen Anfrage keine weiteren Beobachter hat, wird ihr `subscriber.signal` abgebrochen und die ausstehende Anfrage beendet. Das verhindert sowohl die Anzeige veralteter Ergebnisse als auch unnötige Hintergrundarbeit. Das innere `catch()` behandelt Anfragefehler, ohne das Abonnement für Eingabeereignisse zu beenden, sodass der Benutzer eine weitere Suche versuchen kann.

## Beispiel: Elementgröße beobachten

Benutzerdefinierte Observables können APIs einbinden, die Benachrichtigungen über Callback-Funktionen bereitstellen. In diesem Beispiel binden wir einen [`ResizeObserver`](/de/docs/Web/API/ResizeObserver) ein, um einen Datenstrom mit den Abmessungen eines Elements zu erstellen. Wenn sich die Größe eines Elements ändert, wird an diesem Element kein `resize`-Ereignis ausgelöst. Deshalb können wir diesen Datenstrom nicht mit `when()` erzeugen.

### HTML und CSS

Das Markup enthält einen größenveränderbaren Bereich, einen Absatz zur Anzeige seiner Abmessungen sowie Schaltflächen zum Stoppen und Neustarten. Mit der Eigenschaft {{cssxref("resize")}} kann der Benutzer die Größe des Bereichs ändern, indem er an dessen Ecke zieht.

```html live-sample___resize-example
<div id="panel">Drag my corner to resize me.</div>
<p id="dimensions"></p>
<button>Stop</button>
<button id="restart" disabled>Restart</button>
```

```css live-sample___resize-example
#panel {
  width: 200px;
  height: 100px;
  min-width: 100px;
  max-width: 90%;
  min-height: 50px;
  max-height: 200px;
  overflow: auto;
  resize: both;
  border: 1px solid;
}
```

### JavaScript

Innerhalb der Callback-Funktion eines benutzerdefinierten Observables erstellen wir einen `ResizeObserver` und beginnen, den Bereich zu beobachten. Jede Benachrichtigung übergibt das Inhaltsrechteck des Bereichs an [`Subscriber.next()`](/de/docs/Web/API/Subscriber/next). Außerdem registrieren wir eine Bereinigungs-Callback-Funktion, die die Verbindung des `ResizeObserver` beendet, wenn das Abonnement endet.

In diesem Beispiel wird durch einen Klick auf „Stop“ der von `takeUntil()` zurückgegebene Datenstrom abgeschlossen und dessen einziger Beobachter von `sizes` abgemeldet. Dadurch wird die Bereinigung ausgelöst. Ein Klick auf „Restart“ startet ein neues Abonnement und erstellt einen neuen `ResizeObserver`.

```js live-sample___resize-example
const panel = document.getElementById("panel");
const dimensions = document.getElementById("dimensions");

const sizes = new Observable((subscriber) => {
  const observer = new ResizeObserver(([entry]) => {
    subscriber.next(entry.contentRect);
  });
  observer.observe(panel);
  subscriber.addTeardown(() => observer.disconnect());
});

const stop = document.querySelector("button");
const restart = document.querySelector("#restart");

function start() {
  restart.disabled = true;
  sizes.takeUntil(stop.when("click")).subscribe({
    next({ width, height }) {
      dimensions.textContent = `Content size: ${Math.round(width)} × ${Math.round(height)} pixels`;
    },
    complete() {
      restart.disabled = false;
    },
  });
}

restart.when("click").subscribe(start);
start();
```

Durch das Abonnieren wird der `ResizeObserver` gestartet, der die anfängliche Größe und nachfolgende Größenänderungen meldet. Die Callback-Funktion des Abonnements zeigt diese Abmessungen außerhalb des Bereichs an. So beeinflusst die Aktualisierung der Ausgabe nicht die Größe des beobachteten Elements.

### Ergebnis

{{EmbedLiveSample("resize-example", "", 280)}}

## Siehe auch

- [Observables verwenden](/de/docs/Web/API/Observable_API/Using_observables)
- [Erläuterung zu Observable](https://github.com/WICG/observable/blob/master/README.md)
