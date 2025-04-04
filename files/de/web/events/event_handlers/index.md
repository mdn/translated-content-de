---
title: Ereignisbehandlung (Überblick)
slug: Web/Events/Event_handlers
l10n:
  sourceCommit: 20cff31570e35c6da44ddd84158fcebd9f4f42d9
---

Ereignisse sind Signale, die innerhalb des Browserfensters ausgelöst werden und über Änderungen in der Browser- oder Betriebssystemumgebung informieren. Programmierer können _Ereignis-Handler_-Code erstellen, der ausgeführt wird, wenn ein Ereignis ausgelöst wird, sodass Webseiten angemessen auf Änderungen reagieren können.

Diese Seite bietet eine sehr kurze „Erinnerung“ daran, wie mit Ereignissen und Ereignis-Handlern umzugehen ist. Neue Entwickler sollten stattdessen [Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events) lesen.

## Welche Ereignisse sind verfügbar?

Ereignisse werden auf den Seiten der JavaScript-Objekte, die sie auslösen, dokumentiert. Um beispielsweise die Ereignisse zu finden, die auf dem Browserfenster oder dem aktuellen Dokument ausgelöst werden, siehe die Ereignisabschnitte in [`Window`](/de/docs/Web/API/Window#events) und [`Document`](/de/docs/Web/API/Document#events).

Sie können das [Ereignisverzeichnis](/de/docs/Web/Events#event_index) verwenden, um herauszufinden, welche JavaScript-Objekte Ereignisse für bestimmte APIs auslösen, z. B. Animation, Medien und so weiter.

## Registrieren von Ereignis-Handlern

Es gibt zwei empfohlene Ansätze zum Registrieren von Handlern. Ereignis-Handler-Code kann so eingerichtet werden, dass er ausgeführt wird, wenn ein Ereignis ausgelöst wird, indem er der entsprechenden _onevent_-Eigenschaft des Ziel-Elements zugewiesen wird oder indem der Handler als Listener für das Element mit der Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) registriert wird. In beiden Fällen erhält der Handler ein Objekt, das der [`Event` Schnittstelle](/de/docs/Web/API/Event) (oder einer [abgeleiteten Schnittstelle](/de/docs/Web/API/Event#interfaces_based_on_event)) entspricht. Der Hauptunterschied besteht darin, dass mit den Listener-Methoden mehrere Ereignis-Handler hinzugefügt (oder entfernt) werden können.

> [!WARNING]
> Ein dritter Ansatz, bei dem Ereignis-Handler über HTML-Onevent-Attribute festgelegt werden, wird nicht empfohlen! Diese blähen das Markup auf und machen es weniger leserlich und schwieriger zu debuggen. Weitere Informationen finden Sie unter [Inline-Ereignis-Handler](/de/docs/Learn_web_development/Core/Scripting/Events#inline_event_handlers_—_dont_use_these).

### Verwenden von Onevent-Eigenschaften

JavaScript-Objekte, die Ereignisse auslösen, haben konventionell entsprechende "onevent"-Eigenschaften (benannt durch das Präfix "on" vor dem Namen des Ereignisses). Diese Eigenschaften werden aufgerufen, um den zugehörigen Handler-Code auszuführen, wenn das Ereignis ausgelöst wird, und können auch direkt durch Ihren eigenen Code aufgerufen werden.

Um Ereignis-Handler-Code einzurichten, können Sie diesen einfach der entsprechenden Onevent-Eigenschaft zuweisen. Für jedes Ereignis in einem Element kann nur ein Ereignis-Handler zugewiesen werden. Falls erforderlich, kann der Handler durch Zuweisen einer anderen Funktion zu derselben Eigenschaft ersetzt werden.

Im Folgenden zeigen wir, wie eine `greet()`-Funktion für das `click`-Ereignis mit der `onclick`-Eigenschaft festgelegt wird.

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.onclick = greet;
```

Beachten Sie, dass ein Objekt, das das Ereignis darstellt, als erstes Argument an den Ereignis-Handler übergeben wird. Dieses Ereignis-Objekt implementiert die [`Event`](/de/docs/Web/API/Event) Schnittstelle oder ist davon abgeleitet.

### EventTarget.addEventListener

Der flexibelste Weg, einen Ereignis-Handler an einem Element festzulegen, ist die Verwendung der Methode [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener). Dieser Ansatz ermöglicht es, mehrere Listener an ein Element zu binden und diese bei Bedarf zu _entfernen_ (mithilfe von [`EventTarget.removeEventListener`](/de/docs/Web/API/EventTarget/removeEventListener)).

> [!NOTE]
> Die Möglichkeit, Ereignis-Handler hinzuzufügen und zu entfernen, ermöglicht es Ihnen beispielsweise, denselben Knopf in unterschiedlichen Situationen für unterschiedliche Aktionen zu verwenden. Darüber hinaus kann das Bereinigen alter/nicht verwendeter Ereignis-Handler in komplexeren Programmen die Effizienz verbessern.

Nachfolgend zeigen wir, wie eine `greet()`-Funktion als Listener/Ereignis-Handler für das `click`-Ereignis festgelegt werden kann (Sie könnten stattdessen einen anonymen Funktionsausdruck anstelle einer benannten Funktion verwenden, falls gewünscht). Beachten Sie erneut, dass das Ereignis als erstes Argument an den Ereignis-Handler übergeben wird.

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.addEventListener("click", greet);
```

Die Methode kann auch zusätzliche Argumente/Optionen annehmen, um Aspekte zu steuern, wie die Ereignisse erfasst und entfernt werden. Weitere Informationen finden Sie auf der Referenzseite zu [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener).

#### Verwendung eines Abbruchsignals

Ein bemerkenswertes Merkmal von Ereignis-Listenern ist die Fähigkeit, ein Abbruchsignal zu verwenden, um mehrere Ereignis-Handler gleichzeitig zu bereinigen.

Dies geschieht, indem dasselbe [`AbortSignal`](/de/docs/Web/API/AbortSignal) an den Aufruf von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) für alle Ereignis-Handler übergeben wird, die zusammen entfernt werden sollen. Sie können dann [`abort()`](/de/docs/Web/API/AbortController/abort) auf dem Controller aufrufen, dem das `AbortSignal` gehört, und es entfernt alle Ereignis-Handler, die mit diesem Signal hinzugefügt wurden. Zum Beispiel, um einen Ereignis-Handler hinzuzufügen, den wir mit einem `AbortSignal` entfernen können:

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

<section id="Quick_links">
  <ol>
    <li><a href="/de/docs/Learn_web_development/Core/Scripting/Events">Einführung in Ereignisse</a></li>
    <li><a href="/de/docs/Web/Events">Ereignisverzeichnis</a></li>
  </ol>
</section>
