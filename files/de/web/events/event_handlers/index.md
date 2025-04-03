---
title: Ereignisbehandlung (Übersicht)
slug: Web/Events/Event_handlers
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Ereignisse sind Signale, die innerhalb des Browserfensters ausgelöst werden und Änderungen in der Browser- oder Betriebssystemumgebung anzeigen. Programmierer können _Ereignis-Handler_-Code erstellen, der ausgeführt wird, wenn ein Ereignis ausgelöst wird, sodass Webseiten angemessen auf Änderungen reagieren können.

Diese Seite bietet eine sehr kurze "Erinnerung" daran, wie man mit Ereignissen und Ereignis-Handlern arbeitet. Neue Entwickler sollten stattdessen [Einführung zu Ereignissen](/de/docs/Learn_web_development/Core/Scripting/Events) lesen.

## Welche Ereignisse sind verfügbar?

Ereignisse sind dokumentiert in und/oder unter den Seiten für die JavaScript-Objekte, die sie auslösen. Um beispielsweise herauszufinden, welche Ereignisse im Browserfenster oder im aktuellen Dokument ausgelöst werden, sehen Sie sich die Ereignisabschnitte in [`Window`](/de/docs/Web/API/Window#events) und [`Document`](/de/docs/Web/API/Document#events) an.

Sie können die [Ereignis-Referenz](/de/docs/Web/Events#event_index) verwenden, um herauszufinden, welche JavaScript-Objekte Ereignisse für bestimmte APIs auslösen, z.B. Animation, Medien usw.

## Registrieren von Ereignis-Handlern

Es gibt zwei empfohlene Ansätze zum Registrieren von Handlern. Der Ereignis-Handler-Code kann ausgeführt werden, wenn ein Ereignis ausgelöst wird, indem er der entsprechenden _onevent_-Eigenschaft des Zielelements zugewiesen oder der Handler als Listener für das Element mit der Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) registriert wird. In beiden Fällen erhält der Handler ein Objekt, das der [`Event`-Schnittstelle](/de/docs/Web/API/Event) (oder einer [abgeleiteten Schnittstelle](/de/docs/Web/API/Event#introduction)) entspricht. Der Hauptunterschied besteht darin, dass mit den Ereignis-Listener-Methoden mehrere Ereignis-Handler hinzugefügt (oder entfernt) werden können.

> [!WARNING]
> Ein dritter Ansatz zur Einstellung von Ereignis-Handlern mit HTML-Onevent-Attributen wird nicht empfohlen! Sie blähen das Markup auf und machen es weniger lesbar und schwerer zu debuggen. Weitere Informationen finden Sie unter [Inline-Ereignis-Handler](/de/docs/Learn_web_development/Core/Scripting/Events#inline_event_handlers_—_dont_use_these).

### Verwendung von Onevent-Eigenschaften

Nach Konvention haben JavaScript-Objekte, die Ereignisse auslösen, entsprechende "Onevent"-Eigenschaften (benannt durch Voranstellen von "on" an den Namen des Ereignisses). Diese Eigenschaften werden aufgerufen, um den zugehörigen Handler-Code auszuführen, wenn das Ereignis ausgelöst wird, und können auch direkt von Ihrem eigenen Code aufgerufen werden.

Um Ereignis-Handler-Code einzurichten, können Sie ihn einfach der entsprechenden Onevent-Eigenschaft zuweisen. Für jedes Ereignis in einem Element kann nur ein Ereignis-Handler zugewiesen werden. Falls erforderlich, kann der Handler durch Zuweisen einer anderen Funktion zu derselben Eigenschaft ersetzt werden.

Im Folgenden zeigen wir, wie Sie eine `greet()`-Funktion für das `click`-Ereignis mit der `onclick`-Eigenschaft festlegen.

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.onclick = greet;
```

Beachten Sie, dass ein Objekt, das das Ereignis repräsentiert, als erstes Argument an den Ereignis-Handler übergeben wird. Dieses Ereignisobjekt implementiert entweder oder leitet sich von der [`Event`-Schnittstelle](/de/docs/Web/API/Event) ab.

### EventTarget.addEventListener

Der flexibelste Weg, um einen Ereignis-Handler für ein Element festzulegen, ist die Verwendung der Methode [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener). Dieser Ansatz ermöglicht es, mehrere Listener an ein Element anzuhängen und bei Bedarf Listener zu _entfernen_ (unter Verwendung von [`EventTarget.removeEventListener`](/de/docs/Web/API/EventTarget/removeEventListener)).

> [!NOTE]
> Die Möglichkeit, Ereignis-Handler hinzuzufügen und zu entfernen, erlaubt es Ihnen beispielsweise, denselben Button in unterschiedlichen Situationen unterschiedliche Aktionen ausüben zu lassen. Darüber hinaus kann das Bereinigen alter/unbenutzter Ereignis-Handler in komplexeren Programmen die Effizienz verbessern.

Im Folgenden zeigen wir, wie eine `greet()`-Funktion als Listener/Ereignis-Handler für das `click`-Ereignis festgelegt werden kann (Sie könnten stattdessen einen anonymen Funktionsausdruck verwenden, wenn gewünscht). Beachten Sie erneut, dass das Ereignis als erstes Argument an den Ereignis-Handler übergeben wird.

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.addEventListener("click", greet);
```

Die Methode kann auch zusätzliche Argumente/Optionen annehmen, um Aspekte zu steuern, wie die Ereignisse erfasst und entfernt werden. Weitere Informationen finden Sie auf der Referenzseite zu [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener).

#### Verwenden eines Abbruchsignals

Eine bemerkenswerte Funktion des Ereignis-Listeners ist die Möglichkeit, ein Abbruchsignal zu verwenden, um mehrere Ereignis-Handler gleichzeitig zu bereinigen.

Dies wird erreicht, indem dasselbe [`AbortSignal`](/de/docs/Web/API/AbortSignal) an den Aufruf von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) für alle Ereignis-Handler übergeben wird, die Sie zusammen entfernen möchten. Sie können dann [`abort()`](/de/docs/Web/API/AbortController/abort) auf dem Controller aufrufen, der das `AbortSignal` besitzt, und es werden alle mit diesem Signal hinzugefügten Ereignis-Handler entfernt. Beispielsweise, um einen Ereignis-Handler hinzuzufügen, den wir mit einem `AbortSignal` entfernen können:

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

Dann kann der durch den obigen Code erstellte Ereignis-Handler wie folgt entfernt werden:

```js
controller.abort(); // removes any/all event handlers associated with this controller
```

<section id="Quick_links">
  <ol>
    <li><a href="/de/docs/Learn_web_development/Core/Scripting/Events">Einführung zu Ereignissen</a></li>
    <li><a href="/de/docs/Web/Events">Ereignis-Referenz</a></li>
  </ol>
</section>
