---
title: Arbeiten mit Ereignissen und Ereignis-Handlern
slug: Web/Events/Event_handlers
l10n:
  sourceCommit: 95e0fbb78a16450188753d0b53ca02a9fbd2a641
---

Ereignisse sind Signale, die innerhalb des Browser-Fensters ausgelöst werden und auf Änderungen in der Browser- oder Betriebssystemumgebung hinweisen. Programmierer können _Ereignis-Handler_-Code erstellen, der beim Auftreten eines Ereignisses ausgeführt wird, sodass Webseiten angemessen auf Änderungen reagieren können.

Diese Seite bietet eine sehr kurze "Erinnerung" daran, wie man mit Ereignissen und Ereignis-Handlern arbeitet. Neue Entwickler sollten stattdessen [Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events) lesen.

## Welche Ereignisse sind verfügbar?

Ereignisse sind auf den Seiten der JavaScript-Objekte dokumentiert, die sie auslösen. Beispielsweise finden Sie heraus, welche Ereignisse im Browserfenster oder im aktuellen Dokument ausgelöst werden, indem Sie die Ereignisse in [`Window`](/de/docs/Web/API/Window#events) und [`Document`](/de/docs/Web/API/Document#events) einsehen.

Sie können die [Ereignisreferenz](/de/docs/Web/Events#event_index) nutzen, um herauszufinden, welche JavaScript-Objekte Ereignisse für bestimmte APIs auslösen, z. B. Animation, Medien usw.

## Registrieren von Ereignis-Handlern

Es gibt zwei empfohlene Ansätze zum Registrieren von Handlern. Ereignis-Handler-Code kann ausgeführt werden, wenn ein Ereignis ausgelöst wird, indem er der entsprechenden _onevent_-Eigenschaft des Ziel-Elements zugewiesen oder indem der Handler als Listener für das Element mit der [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Methode registriert wird. In beiden Fällen wird dem Handler ein Objekt übergeben, das der [`Event`-Schnittstelle](/de/docs/Web/API/Event) (oder einer [abgeleiteten Schnittstelle](/de/docs/Web/API/Event#interfaces_based_on_event)) entspricht. Der Hauptunterschied besteht darin, dass mit den Event-Listener-Methoden mehrere Ereignis-Handler hinzugefügt (oder entfernt) werden können.

> [!WARNING]
> Ein dritter Ansatz zur Einstellung von Ereignis-Handlern mit HTML-onevent-Attributen wird nicht empfohlen! Sie blähen das Markup auf und machen es weniger lesbar und schwerer zu debuggen. Weitere Informationen finden Sie unter [Inline-Ereignishandler](/de/docs/Learn_web_development/Core/Scripting/Events#inline_event_handlers_—_dont_use_these).

### Verwendung von onevent-Eigenschaften

Per Konvention haben JavaScript-Objekte, die Ereignisse auslösen, entsprechende "onevent"-Eigenschaften (benannt durch das Voranstellen von "on" an den Namen des Ereignisses). Diese Eigenschaften werden aufgerufen, um zugehörigen Handler-Code auszuführen, wenn das Ereignis ausgelöst wird, und können auch direkt durch Ihren eigenen Code aufgerufen werden.

Um Ereignis-Handler-Code zu setzen, können Sie ihn einfach der entsprechenden onevent-Eigenschaft zuweisen. Nur ein Ereignis-Handler kann für jedes Ereignis in einem Element zugewiesen werden. Bei Bedarf kann der Handler durch Zuweisung einer anderen Funktion zu derselben Eigenschaft ersetzt werden.

Unten zeigen wir, wie man eine `greet()`-Funktion für das `click`-Ereignis mittels der `onclick`-Eigenschaft festlegt.

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.onclick = greet;
```

Beachten Sie, dass ein Objekt, das das Ereignis repräsentiert, als erstes Argument an den Ereignis-Handler übergeben wird. Dieses Ereignis-Objekt implementiert entweder die [`Event`-Schnittstelle](/de/docs/Web/API/Event) oder leitet sich davon ab.

### EventTarget.addEventListener

Die flexibelste Methode, um einen Ereignis-Handler auf einem Element zu setzen, ist die Verwendung der Methode [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener). Dieser Ansatz erlaubt es, mehrere Listener einem Element zuzuweisen und Listener bei Bedarf _zu entfernen_ (unter Verwendung von [`EventTarget.removeEventListener`](/de/docs/Web/API/EventTarget/removeEventListener)).

> [!NOTE]
> Die Möglichkeit, Ereignishandler hinzuzufügen und zu entfernen, ermöglicht es Ihnen beispielsweise, dass derselbe Button in unterschiedlichen Situationen unterschiedliche Aktionen ausführt. Zudem kann in komplexeren Programmen das Bereinigen von alten/nicht verwendeten Ereignis-Handlern die Effizienz verbessern.

Unten zeigen wir, wie eine `greet()`-Funktion als Listener/Ereignis-Handler für das `click`-Ereignis festgelegt werden kann (statt einer benannten Funktion könnte auch ein anonymer Funktionsausdruck verwendet werden). Beachten Sie erneut, dass das Ereignis als erstes Argument an den Ereignis-Handler übergeben wird.

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.addEventListener("click", greet);
```

Die Methode kann auch zusätzliche Argumente/Optionen annehmen, um Aspekte der Erfassung und Entfernung von Ereignissen zu steuern. Weitere Informationen finden Sie auf der Referenzseite [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener).

#### Verwendung eines Abbruchsignals

Eine bemerkenswerte Funktion der Ereignis-Listener ist die Möglichkeit, ein Abbruchsignal zu verwenden, um mehrere Ereignis-Handler gleichzeitig zu bereinigen.

Dies geschieht, indem das gleiche [`AbortSignal`](/de/docs/Web/API/AbortSignal) an den Wert von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) für alle Ereignis-Handler übergeben wird, die Sie zusammen entfernen möchten. Dann können Sie [`abort()`](/de/docs/Web/API/AbortController/abort) auf dem Controller aufrufen, dem das `AbortSignal` gehört, und es werden alle Ereignis-Handler entfernt, die mit diesem Signal hinzugefügt wurden. Um beispielsweise einen Ereignis-Handler hinzuzufügen, den wir mit einem `AbortSignal` entfernen können:

```js
const controller = new AbortController();

btn.addEventListener(
  "click",
  (event) => {
    console.log("greet:", event);
  },
  { signal: controller.signal },
); // pass an AbortSignal to this handler
```

Dann kann der durch den obigen Code erstellte Ereignis-Handler so entfernt werden:

```js
controller.abort(); // removes any/all event handlers associated with this controller
```
