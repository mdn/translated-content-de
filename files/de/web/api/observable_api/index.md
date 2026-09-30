---
title: Observable API
slug: Web/API/Observable_API
l10n:
  sourceCommit: bacd00c353f643d8f5be0ce769015b1a66b4251a
---

{{SeeCompatTable}}{{DefaultAPISidebar("Observable API")}}

Die **Observable API** bietet einen Mechanismus zur Verarbeitung von Werteströmen, einschließlich asynchroner Ereignisse. Sie können eine Verarbeitungskette definieren, um diese Werte zu filtern und umzuwandeln, sie abonnieren, um sie zu empfangen, und das Abonnement beenden, wenn sie nicht mehr benötigt werden.

## Konzepte und Verwendung

### Ereignisse und reaktive Programmierung

Ereignisse sind grundlegend für die Webentwicklung und die JavaScript-Programmierung im Allgemeinen. Sie gehen von [`EventTarget`](/de/docs/Web/API/EventTarget)-Objekten aus:

```js
element.addEventListener("click", handler1);
element.addEventListener("click", handler2);
```

Wenn der Benutzer auf das `element` klickt, sendet das vom Browser verwaltete Element eine Benachrichtigung an jeden seiner Event-Listener – in diesem Fall `handler1` und `handler2`. Die Benachrichtigung ist ein [`Event`](/de/docs/Web/API/Event)-Objekt, das weitere Informationen und Daten zu dem Ereignis bereitstellt. Der jeweilige Handler führt daraufhin eine Aktion aus.

Dieses Paradigma wird als _reaktive Programmierung_ bezeichnet: Aktionen werden als Reaktion auf einen Auslöser ausgeführt. Abstrakt betrachtet gibt es vier grundlegende Arten reaktiver Programmierung:

- _Einmaliges Abrufen (Single pull)_: Der Initiator empfängt einen einzelnen Wert. Normale Funktionen setzen dies um: Bei `const result = action();` ist der Aufrufer der Funktion `action()` der Initiator, der einen einzelnen Wert `result` aus der Funktion abruft.
- _Einmaliges Senden (Single push)_: Der Initiator sendet einen einzelnen Wert, und der Empfänger wartet, bis er diesen Wert erhält. [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) setzen dies um: Bei `promise.then((value) => { ... });` ist die Promise-Implementierung der Initiator. Wenn das Promise erfüllt wird, ruft sie die Callback-Funktion genau einmal auf und übergibt dabei einen einzelnen Wert.
- _Mehrmaliges Abrufen (Multiple pulls)_: Der Initiator pausiert die Ausführung der Datenquelle und setzt sie fort, um nach und nach mehrere Werte zu empfangen. [Iteratoren](/de/docs/Web/JavaScript/Reference/Iteration_protocols) setzen dies um: Bei `const result1 = iterator.next(); const result2 = iterator.next();` ist der Aufrufer der Methode `next()` der Initiator, der mehrere Werte aus dem Iterator abruft.
- _Mehrmaliges Senden (Multiple pushes)_: Der Initiator sendet mehrere Werte, und die Ausführung des Empfängers pausiert zwischen dem Empfang dieser Werte. Ereignisse setzen dies um: Bei `element.addEventListener("click", handler);` ist das Element der Initiator. Es ruft die Funktion `handler` mehrfach auf, wenn der Benutzer auf das Element klickt, und übergibt dabei mehrere Ereignisobjekte.

### Ereignisströme verknüpfen

Das Problem beim Modell mit `addEventListener()` besteht darin, dass sich Event-Handler nicht einfach miteinander _verknüpfen_ lassen. Jeder Handler wird für sich ausgeführt und hat nicht automatisch Kenntnis von den anderen Ereignissen einer Abfolge. Wenn Sie beispielsweise gezielt auf ein `mousemove`-Ereignis reagieren möchten, das nach einem `mousedown`-Ereignis eintritt, müssen Sie den gemeinsamen Zustand selbst verwalten. Das führt zu komplexem und fehleranfälligem Code.

Die Observable API löst dieses Problem, indem sie Ereignisströme mit Methoden wie [`Observable.map()`](/de/docs/Web/API/Observable/map) und [`Observable.filter()`](/de/docs/Web/API/Observable/filter) deklarativ erstellt und verarbeitet. Sie ersetzt das ereignisgesteuerte Modell nicht grundsätzlich, sondern verändert die Art, wie Sie Ihren Code organisieren – ähnlich wie Promises gegenüber herkömmlichen Callbacks die Art verändert haben, wie asynchroner Code geschrieben wird.

> [!NOTE]
> Die Observable API ist nicht grundsätzlich mit der Event API verknüpft. Die Verarbeitung von Ereignissen ist zwar ein wichtiger Anwendungsfall für Observables, doch Observables können beliebige Datenströme darstellen, nicht nur Ereignisse. Daher ähnelt die Observable API eher einem Sprachprimitiv als einer ausschließlich für das Web bestimmten API, vergleichbar mit {{jsxref("Promise")}} oder {{jsxref("Iterator")}}. Aus historischen Gründen wird sie außerhalb von TC39 spezifiziert, ebenso wie [`AbortController`](/de/docs/Web/API/AbortController) oder [Streams](/de/docs/Web/API/Streams_API).

### Observables beziehen

In der Observable API stellt ein **Observable** einen Wertestrom dar, und ein **Observer** empfängt Benachrichtigungen darüber mittels Callbacks. Der Code, der Werte sendet, wird als _Produzent_ bezeichnet; der Code, der diese Werte nutzt, als _Konsument_. Den Konsumentencode schreiben Sie in der Regel mithilfe von Methoden der Schnittstelle [`Observable`](/de/docs/Web/API/Observable), um Werte aus Observables umzuwandeln und zu verarbeiten. Wenn Sie selbst ein Observable implementieren, schreiben Sie den Produzentencode mithilfe der Schnittstelle [`Subscriber`](/de/docs/Web/API/Subscriber), um Werte an die Observer zu senden. Es gibt drei wesentliche Möglichkeiten, Observables zu beziehen:

- Die Methode [`EventTarget.when()`](/de/docs/Web/API/EventTarget/when) gibt ein [`Observable`](/de/docs/Web/API/Observable) zurück, das einen Strom von Ereignissen darstellt, die auf dem `EventTarget` ausgelöst werden. Auch Bibliotheken können Observables zurückgeben.
- Mit dem Konstruktor [`Observable()`](/de/docs/Web/API/Observable/Observable) können Sie eigene Observables erstellen.
- Mit der statischen Methode [`Observable.from()`](/de/docs/Web/API/Observable/from_static) können Sie Objekte wie [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) und [Iterables](/de/docs/Web/JavaScript/Reference/Iteration_protocols) in Observables umwandeln.

### Werte umwandeln, abonnieren und Abonnements beenden

Ein Observable lässt sich mit verschiedenen Methoden umwandeln, die neue Observables zurückgeben, beispielsweise [`Observable.map()`](/de/docs/Web/API/Observable/map) und [`Observable.filter()`](/de/docs/Web/API/Observable/filter).

Um Werte von einem Observable zu empfangen, abonnieren Sie es mit der Methode [`Observable.subscribe()`](/de/docs/Web/API/Observable/subscribe). Alternativ können Sie alle Werte mit [Methoden, die ein Promise zurückgeben](/de/docs/Web/API/Observable#promise-returning_instance_methods), wie [`Observable.reduce()`](/de/docs/Web/API/Observable/reduce), zusammenfassen. Observables werden _verzögert ausgewertet_: Sie beginnen erst dann, Werte zu erzeugen, wenn sie mindestens einen Abonnenten haben.

Sie können das Abonnement eines Observables auch mit einem [`AbortController`](/de/docs/Web/API/AbortController) oder bestimmten Methoden wie [`Observable.takeUntil()`](/de/docs/Web/API/Observable/takeUntil) beenden.

Betrachten wir ein kurzes Beispiel:

```js
document.body
  .when("mousedown")
  .filter((e) => e.target.matches("body"))
  .map((e) => ({ x: e.clientX, y: e.clientY }))
  .subscribe((p) => {
    console.log(`${p.x},${p.y}`);
  });
```

In diesem Codeausschnitt ist das {{htmlelement("body")}}-Element der Seite ein [`EventTarget`](/de/docs/Web/API/EventTarget). Mit der Methode `when()` erhalten wir einen Strom von [`mousedown`](/de/docs/Web/API/Element/mousedown_event)-Ereignissen, die auf diesem Element ausgelöst werden.

Anschließend definieren wir eine Verarbeitungskette:

- [`Observable.filter()`](/de/docs/Web/API/Observable/filter) lässt nur Ereignisse durch die Verarbeitungskette, die auf dem {{htmlelement("body")}}-Element selbst ausgelöst wurden – geprüft mit der Methode [`Element.matches()`](/de/docs/Web/API/Element/matches) – und nicht auf dessen Nachfahren.
- [`Observable.map()`](/de/docs/Web/API/Observable/map) wandelt die ausgelösten `mousedown`-Ereignisobjekte in neue Objekte um, die die Koordinaten des Mauszeigers zum Zeitpunkt des Ereignisses enthalten.
- [`Observable.subscribe()`](/de/docs/Web/API/Observable/subscribe) abonniert das Observable. Der Callback gibt die Mauskoordinaten jedes Mal auf der Konsole aus, wenn ein `mousedown`-Ereignis den Filter passiert.

Möglicherweise fällt Ihnen auf, dass dieses Paradigma [Iteratoren](/de/docs/Web/JavaScript/Reference/Iteration_protocols) sehr ähnlich ist. Auch bei ihnen können wir Werte mit [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/map) und [`filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/filter) umwandeln und mit `next()` und [`toArray()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/toArray) verarbeiten. Sowohl Observables als auch Iteratoren stellen Datenströme dar. Der entscheidende Unterschied ist, wie bereits erwähnt, dass Iteratoren nach dem Pull-Prinzip funktionieren (der Konsument entscheidet, wann er Werte empfängt), während Observables nach dem Push-Prinzip funktionieren (der Produzent entscheidet, wann er Werte sendet).

Weitere Informationen zu diesen Konzepten finden Sie unter [Observables verwenden](/de/docs/Web/API/Observable_API/Using_observables) und [Eigene Observables erstellen](/de/docs/Web/API/Observable_API/Creating_observables).

## Schnittstellen

- [`Observable`](/de/docs/Web/API/Observable) {{Experimental_Inline}}
  - : Stellt einen Wertestrom dar, der abonniert werden kann.
- [`Subscriber`](/de/docs/Web/API/Subscriber) {{Experimental_Inline}}
  - : Stellt ein Abonnement eines Observable-Wertestroms dar und enthält Methoden zur Verwaltung des Lebenszyklus dieses Abonnements.

## Erweiterungen anderer Schnittstellen

- [`EventTarget.when()`](/de/docs/Web/API/EventTarget/when) {{Experimental_Inline}}
  - : Gibt ein Observable zurück, das einen Strom von Ereignissen darstellt, die auf dem `EventTarget` ausgelöst werden.

## Beispiele

Vollständige Beispiele finden Sie unter [Observables verwenden](/de/docs/Web/API/Observable_API/Using_observables) und [Eigene Observables erstellen](/de/docs/Web/API/Observable_API/Creating_observables).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Erläuterung zu Observables](https://github.com/WICG/observable/blob/master/README.md)
