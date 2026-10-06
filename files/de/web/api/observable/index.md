---
title: Observable
slug: Web/API/Observable
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

Das **`Observable`**-Interface der [Observable API](/de/docs/Web/API/Observable_API) stellt einen Wertestrom dar, den Sie abonnieren können.

`Observable`-Objekte (häufig **Observables** genannt) lassen sich als leistungsfähigere Event-Listener betrachten, die mit [`EventTarget`](/de/docs/Web/API/EventTarget) zusammenarbeiten. Sie verbessern Code zur Ereignisbehandlung ähnlich wie [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) die Verwendung von Callbacks verbessert haben: Sie vereinfachen den Code, indem sie den Bedarf an verschachtelten Blöcken verringern.

Observables verfügen über mehrere Methoden, die jeweils ein neues Observable zurückgeben. Diese Methoden lassen sich verketten, um eine Pipeline zu erstellen, die den Wertestrom wie gewünscht präzise steuert.

Es gibt drei Hauptwege, Observables zu erhalten:

- Die Methode [`EventTarget.when()`](/de/docs/Web/API/EventTarget/when) gibt ein `Observable` zurück, das einen Strom von Ereignissen darstellt, die auf dem `EventTarget` ausgelöst werden. Auch Bibliotheken können Observables zurückgeben.
- Mit dem Konstruktor [`Observable()`](/de/docs/Web/API/Observable/Observable) können Sie eigene Observables erstellen.
- Mit der statischen Methode [`Observable.from()`](/de/docs/Web/API/Observable/from_static) können Sie Objekte wie [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) und [Iterables](/de/docs/Web/JavaScript/Reference/Iteration_protocols) in Observables umwandeln.

{{InheritanceDiagram}}

## Konstruktor

- [`Observable()`](/de/docs/Web/API/Observable/Observable) {{Experimental_Inline}}
  - : Erstellt eine neue Instanz eines `Observable`-Objekts.

## Statische Methoden

- [`from()`](/de/docs/Web/API/Observable/from_static) {{Experimental_Inline}}
  - : Gibt ein aus einem Promise, Iterable oder Async Iterable umgewandeltes Observable zurück oder gibt ein bereits vorhandenes Observable unverändert zurück.

## Instanzmethoden

- [`subscribe()`](/de/docs/Web/API/Observable/subscribe) {{Experimental_Inline}}
  - : Abonniert einen Wertestrom, meist einen Strom von Ereignissen.

### Instanzmethoden, die ein Observable zurückgeben

- [`catch()`](/de/docs/Web/API/Observable/catch) {{Experimental_Inline}}
  - : Gibt ein neues Observable zurück, das einen Fehler des Quell-Observables durch Werte eines anderen Observables ersetzt.
- [`drop()`](/de/docs/Web/API/Observable/drop) {{Experimental_Inline}}
  - : Gibt ein neues Observable zurück, das die angegebene Anzahl von Werten am Anfang des Quell-Observables überspringt.
- [`filter()`](/de/docs/Web/API/Observable/filter) {{Experimental_Inline}}
  - : Gibt ein neues Observable zurück, das nur diejenigen Werte des Quell-Observables ausgibt, für die die übergebene Callback-Funktion einen truthy-Wert zurückgibt.
- [`finally()`](/de/docs/Web/API/Observable/finally) {{Experimental_Inline}}
  - : Gibt ein neues Observable zurück, das das Quell-Observable widerspiegelt und einen Callback aufruft, wenn sein Abonnement endet.
- [`flatMap()`](/de/docs/Web/API/Observable/flatMap) {{Experimental_Inline}}
  - : Gibt ein neues Observable zurück, das jeden Wert des Quell-Observables einem inneren Observable zuordnet und die Werte der inneren Observables nacheinander ausgibt.
- [`inspect()`](/de/docs/Web/API/Observable/inspect) {{Experimental_Inline}}
  - : Gibt ein neues Observable zurück, das das Quell-Observable widerspiegelt und Callbacks aufruft, um dessen Werte und den Lebenszyklus seines Abonnements zu untersuchen.
- [`map()`](/de/docs/Web/API/Observable/map) {{Experimental_Inline}}
  - : Gibt ein neues Observable zurück, das die Werte des Quell-Observables ausgibt, nachdem jeder Wert durch eine Abbildungsfunktion transformiert wurde.
- [`switchMap()`](/de/docs/Web/API/Observable/switchMap) {{Experimental_Inline}}
  - : Gibt ein neues Observable zurück, das jeden Wert des Quell-Observables einem inneren Observable zuordnet und nur die Werte des jeweils neuesten inneren Observables ausgibt.
- [`take()`](/de/docs/Web/API/Observable/take) {{Experimental_Inline}}
  - : Gibt ein neues Observable zurück, das die angegebene Anzahl von Werten vom Anfang des Quell-Observables ausgibt und danach abgeschlossen wird.
- [`takeUntil()`](/de/docs/Web/API/Observable/takeUntil) {{Experimental_Inline}}
  - : Gibt ein neues Observable zurück, das Werte des Quell-Observables ausgibt, bis ein anderes Observable einen Wert ausgibt oder ein Fehler auftritt.

### Instanzmethoden, die ein Promise zurückgeben

- [`every()`](/de/docs/Web/API/Observable/every) {{Experimental_Inline}}
  - : Gibt ein Promise zurück, das mit einem booleschen Wert erfüllt wird, der angibt, ob jeder vom Quell-Observable ausgegebene Wert die übergebene Prüffunktion erfüllt.
- [`find()`](/de/docs/Web/API/Observable/find) {{Experimental_Inline}}
  - : Gibt ein Promise zurück, das mit dem ersten vom Quell-Observable ausgegebenen Wert erfüllt wird, der die übergebene Prüffunktion erfüllt. Wird das Quell-Observable ohne Übereinstimmung abgeschlossen, wird es mit {{jsxref("undefined")}} erfüllt.
- [`first()`](/de/docs/Web/API/Observable/first) {{Experimental_Inline}}
  - : Gibt ein Promise zurück, das mit dem ersten vom Quell-Observable ausgegebenen Wert erfüllt wird.
- [`forEach()`](/de/docs/Web/API/Observable/forEach) {{Experimental_Inline}}
  - : Gibt ein Promise zurück, das mit {{jsxref("undefined")}} erfüllt wird, wenn das Quell-Observable abgeschlossen ist, nachdem für jeden ausgegebenen Wert ein Callback ausgeführt wurde.
- [`last()`](/de/docs/Web/API/Observable/last) {{Experimental_Inline}}
  - : Gibt ein Promise zurück, das mit dem letzten vom Quell-Observable ausgegebenen Wert erfüllt wird.
- [`reduce()`](/de/docs/Web/API/Observable/reduce) {{Experimental_Inline}}
  - : Gibt ein Promise zurück, das mit einem einzelnen Wert erfüllt wird, der durch die Kombination der Werte des Quell-Observables mithilfe einer Reducer-Funktion entsteht.
- [`some()`](/de/docs/Web/API/Observable/some) {{Experimental_Inline}}
  - : Gibt ein Promise zurück, das mit einem booleschen Wert erfüllt wird, der angibt, ob mindestens ein vom Quell-Observable ausgegebener Wert die übergebene Prüffunktion erfüllt.
- [`toArray()`](/de/docs/Web/API/Observable/toArray) {{Experimental_Inline}}
  - : Gibt ein Promise zurück, das mit einem neuen Array erfüllt wird, das die Werte des Quell-Observables in der Reihenfolge ihrer Ausgabe enthält.

## Beispiele

### Ein Observable von einem EventTarget erhalten

Dieses Beispiel zeigt die Mauskoordinaten in einem `<p>`-Element nur dann an, wenn sich der Mauszeiger über einem `<div>`-Element bewegt. Die Pipeline filtert die `mousemove`-Ereignisse des Dokumentkörpers anhand ihres Ziels und extrahiert die Koordinaten. Informationen zum Aufbau der Seite finden Sie unter [Ein Observable transformieren](/de/docs/Web/API/Observable_API/Using_observables#transforming_an_observable).

```js
const outputElem = document.querySelector("p");

document.body
  .when("mousemove")
  .filter((e) => e.target.matches("div"))
  .map((e) => ({ x: e.clientX, y: e.clientY }))
  .subscribe((p) => {
    outputElem.textContent = `${p.x},${p.y}`;
  });
```

Weitere funktionsfähige Beispiele finden Sie unter [Observables verwenden](/de/docs/Web/API/Observable_API/Using_observables).

### Ein eigenes Observable erstellen

Diese Funktion erstellt ein Observable, das in einem festgelegten Intervall einen aufsteigenden Zählerstand ausgibt. Es wird im Intervall nach der Ausgabe der angeforderten Anzahl von Werten abgeschlossen. Der Teardown-Callback beendet das Intervall, wenn das Abonnement endet, auch wenn alle Observer ihr Abonnement kündigen. Ein Beispiel für einen über eine Schaltfläche gesteuerten Zähler mit diesem Producer finden Sie unter [Teardown](/de/docs/Web/API/Observable_API/Creating_observables#teardown).

> [!NOTE]
> Dieses Verhalten mit gemeinsam genutztem Abonnement könnte sich ändern. Ein [Vorschlag, jedem Observer einen eigenen `Subscriber` zu geben](https://github.com/WICG/observable/issues/217), würde bewirken, dass jedes Abonnement eine separate Ausführung startet, statt ein aktives Abonnement wiederzuverwenden.

```js
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

Weitere funktionsfähige Beispiele finden Sie unter [Eigene Observables erstellen](/de/docs/Web/API/Observable_API/Creating_observables).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Observables verwenden](/de/docs/Web/API/Observable_API/Using_observables)
- [Eigene Observables erstellen](/de/docs/Web/API/Observable_API/Creating_observables)
- [Erläuterung zu Observable](https://github.com/WICG/observable/blob/master/README.md)
