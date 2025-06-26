---
title: Ereignisbehandlung (Überblick)
slug: Web/Events/Event_handlers
l10n:
  sourceCommit: d0ed4906719465102739e604bdb35213fb19f251
---

Ereignisse sind Signale, die im Browserfenster ausgelöst werden und über Änderungen in der Browser- oder Betriebssystemumgebung informieren. Programmierer können _Ereignishandler_-Code erstellen, der ausgeführt wird, wenn ein Ereignis ausgelöst wird, sodass Webseiten angemessen auf Änderungen reagieren können.

Diese Seite bietet eine sehr kurze "Erinnerung" daran, wie man mit Ereignissen und Ereignishandlern arbeitet. Neue Entwickler sollten stattdessen [Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events) lesen.

## Welche Ereignisse sind verfügbar?

Ereignisse sind in und/oder unter den Seiten für die JavaScript-Objekte dokumentiert, die sie auslösen. Um beispielsweise zu erfahren, welche Ereignisse im Browserfenster oder im aktuellen Dokument ausgelöst werden, siehe die Ereignisabschnitte in [`Window`](/de/docs/Web/API/Window#events) und [`Document`](/de/docs/Web/API/Document#events).

Sie können das [Ereignis-Referenz](/de/docs/Web/Events#event_index) verwenden, um herauszufinden, welche JavaScript-Objekte Ereignisse für bestimmte APIs auslösen, z.B. Animation, Medien usw.

## Ereignishandler registrieren

Es gibt zwei empfohlene Ansätze zur Registrierung von Handlern. Ereignishandler-Code kann so gemacht werden, dass er ausgeführt wird, wenn ein Ereignis ausgelöst wird, indem er der entsprechenden _onevent_-Eigenschaft des Zielelements zugewiesen wird oder indem der Handler als Listener für das Element mit der [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Methode registriert wird. In beiden Fällen erhält der Handler ein Objekt, das der [`Event`-Schnittstelle](/de/docs/Web/API/Event) (oder einer [abgeleiteten Schnittstelle](/de/docs/Web/API/Event#interfaces_based_on_event)) entspricht. Der Hauptunterschied besteht darin, dass mehrere Ereignishandler mithilfe der Event-Listener-Methoden hinzugefügt (oder entfernt) werden können.

> [!WARNING]
> Ein dritter Ansatz zur Einstellung von Ereignishandlern unter Verwendung von HTML-Onevent-Attributen wird nicht empfohlen! Sie aufblasen das Markup und machen es weniger lesbar und schwerer zu debuggen. Weitere Informationen finden Sie unter [Inline-Ereignishandler](/de/docs/Learn_web_development/Core/Scripting/Events#inline_event_handlers_—_dont_use_these).

### Verwendung von Onevent-Eigenschaften

Konventionell haben JavaScript-Objekte, die Ereignisse auslösen, entsprechende "Onevent"-Eigenschaften (benennt durch Voranstellen von "on" an den Namen des Ereignisses). Diese Eigenschaften werden aufgerufen, um den zugehörigen Handler-Code auszuführen, wenn das Ereignis ausgelöst wird, und können auch direkt von Ihrem eigenen Code aufgerufen werden.

Um Ereignishandler-Code festzulegen, können Sie ihn einfach der entsprechenden Onevent-Eigenschaft zuweisen. Nur ein Ereignishandler kann für jedes Ereignis in einem Element zugewiesen werden. Bei Bedarf kann der Handler durch Zuweisung einer anderen Funktion zu derselben Eigenschaft ersetzt werden.

Unten zeigen wir, wie eine `greet()`-Funktion für das `click`-Ereignis mit der `onclick`-Eigenschaft festgelegt wird.

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.onclick = greet;
```

Beachten Sie, dass ein Objekt, das das Ereignis darstellt, als erstes Argument an den Ereignishandler übergeben wird. Dieses Ereignisobjekt implementiert entweder die [`Event`](/de/docs/Web/API/Event)-Schnittstelle oder ist von ihr abgeleitet.

### EventTarget.addEventListener

Der flexibelste Weg, um einen Ereignishandler für ein Element festzulegen, ist die Verwendung der [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode. Dieser Ansatz ermöglicht es, mehrere Listener zu einem Element hinzuzufügen und gegebenenfalls zu entfernen (mithilfe von [`EventTarget.removeEventListener`](/de/docs/Web/API/EventTarget/removeEventListener)).

> [!NOTE]
> Die Möglichkeit, Ereignishandler hinzuzufügen und zu entfernen, ermöglicht es Ihnen beispielsweise, denselben Button in verschiedenen Umständen unterschiedliche Aktionen ausführen zu lassen. Außerdem kann das Bereinigen alter/nicht genutzter Ereignishandler in komplexeren Programmen die Effizienz erhöhen.

Unten zeigen wir, wie eine `greet()`-Funktion als Listener/Ereignishandler für das `click`-Ereignis festgelegt werden kann (Sie können eine anonyme Funktionsausdruck anstelle einer benannten Funktion verwenden, falls gewünscht). Beachten Sie erneut, dass das Ereignis als erstes Argument an den Ereignishandler übergeben wird.

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.addEventListener("click", greet);
```

Die Methode kann auch zusätzliche Argumente/Optionen erhalten, um Aspekte der Erfassung und Entfernung von Ereignissen zu steuern. Weitere Informationen finden Sie auf der [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Referenzseite.

#### Verwendung eines Abbruchsignals

Eine bemerkenswerte Funktion von Event-Listenern ist die Fähigkeit, ein Abbruchsignal zu verwenden, um mehrere Ereignishandler gleichzeitig zu bereinigen.

Dies wird erreicht, indem das gleiche [`AbortSignal`](/de/docs/Web/API/AbortSignal) an den [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Aufruf für alle Ereignishandler übergeben wird, die Sie zusammen entfernen möchten. Sie können dann [`abort()`](/de/docs/Web/API/AbortController/abort) auf den Controller aufrufen, dem das `AbortSignal` gehört, und es wird alle Ereignishandler entfernen, die mit diesem Signal hinzugefügt wurden. Um beispielsweise einen Ereignishandler hinzuzufügen, den wir mit einem `AbortSignal` entfernen können:

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

Dann kann der durch den obigen Code erstellte Ereignishandler so entfernt werden:

```js
controller.abort(); // removes any/all event handlers associated with this controller
```

<section id="Quick_links">
  <ol>
    <li><a href="/de/docs/Learn_web_development/Core/Scripting/Events">Einführung in Ereignisse</a></li>
    <li><a href="/de/docs/Web/Events">Ereignis-Referenz</a></li>
    <li><a href="/de/docs/Web/Events/Creating_and_triggering_events">Erstellen und Auslösen von Ereignissen</a></li>
    <li><a href="/de/docs/Web/Events/Event_handlers">Ereignishandler (Überblick)</a></li>
  </ol>
</section>
