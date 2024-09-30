---
title: Event handling (overview)
slug: Web/Events/Event_handlers
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

Events sind Signale, die im Browserfenster ausgelöst werden und über Änderungen in der Browser- oder Betriebssystemumgebung informieren. Programmierer können _Event-Handler_-Code erstellen, der ausgeführt wird, wenn ein Ereignis ausgelöst wird, sodass Webseiten angemessen auf Änderungen reagieren können.

Diese Seite bietet eine sehr kurze "Erinnerung" daran, wie man mit Ereignissen und Event-Handlern arbeitet. Neue Entwickler sollten stattdessen [Einführung in Ereignisse](/de/docs/Learn/JavaScript/Building_blocks/Events) lesen.

## Welche Ereignisse sind verfügbar?

Ereignisse sind in und/oder unter den Seiten für die JavaScript-Objekte dokumentiert, die sie auslösen. Um zum Beispiel Ereignisse zu finden, die im Browserfenster oder im aktuellen Dokument ausgelöst werden, sehen Sie sich die Ereignisse Abschnitte in [`Window`](/de/docs/Web/API/Window#events) und [`Document`](/de/docs/Web/API/Document#events) an.

Sie können die [Ereignisreferenz](/de/docs/Web/Events#event_index) verwenden, um herauszufinden, welche JavaScript-Objekte Ereignisse für bestimmte APIs auslösen, z. B. Animation, Medien usw.

## Registrieren von Event-Handlern

Es gibt zwei empfohlene Ansätze zur Registrierung von Handlern. Event-Handler-Code kann ausgeführt werden, wenn ein Ereignis ausgelöst wird, indem er der entsprechenden _onevent_-Eigenschaft des Zielelements zugewiesen wird, oder indem der Handler als Listener für das Element mit der Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) registriert wird. In beiden Fällen erhält der Handler ein Objekt, das der [`Event`-Schnittstelle](/de/docs/Web/API/Event) (oder einer [abgeleiteten Schnittstelle](/de/docs/Web/API/Event#introduction)) entspricht. Der Hauptunterschied besteht darin, dass mit den Event-Listener-Methoden mehrere Event-Handler hinzugefügt (oder entfernt) werden können.

> [!WARNING]
> Ein dritter Ansatz zur Festlegung von Event-Handlern mit HTML-Onevent-Attributen wird nicht empfohlen! Sie vergrößern das Markup und machen es weniger lesbar und schwerer zu debuggen. Weitere Informationen finden Sie unter [Inline-Event-Handler](/de/docs/Learn/JavaScript/Building_blocks/Events#inline_event_handlers_—_dont_use_these).

### Verwendung von Onevent-Eigenschaften

Der Konvention nach haben JavaScript-Objekte, die Ereignisse auslösen, entsprechende "onevent"-Eigenschaften (benannt durch Voranstellen von "on" an den Namen des Ereignisses). Diese Eigenschaften werden aufgerufen, um zugehörigen Handler-Code auszuführen, wenn das Ereignis ausgelöst wird, und können auch direkt von Ihrem eigenen Code aufgerufen werden.

Um Event-Handler-Code festzulegen, können Sie ihn einfach der entsprechenden Onevent-Eigenschaft zuweisen. Für jedes Ereignis in einem Element kann nur ein Event-Handler zugewiesen werden. Wenn nötig, kann der Handler durch Zuweisen einer anderen Funktion zur gleichen Eigenschaft ersetzt werden.

Wir zeigen unten, wie Sie eine einfache `greet()`-Funktion für das `click`-Ereignis mit der `onclick`-Eigenschaft festlegen.

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.onclick = greet;
```

Beachten Sie, dass ein Objekt, das das Ereignis darstellt, als erstes Argument an den Event-Handler übergeben wird. Dieses Ereignisobjekt implementiert entweder die [`Event`](/de/docs/Web/API/Event)-Schnittstelle oder ist von ihr abgeleitet.

### EventTarget.addEventListener

Die flexibelste Methode, um einen Event-Handler für ein Element festzulegen, ist die Methode [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener). Dieser Ansatz erlaubt es, mehreren Listenern einem Element zuzuweisen und Listener bei Bedarf zu _entfernen_ (mit [`EventTarget.removeEventListener`](/de/docs/Web/API/EventTarget/removeEventListener)).

> [!NOTE]
> Die Fähigkeit, Event-Handler hinzuzufügen und zu entfernen, ermöglicht es Ihnen beispielsweise, dass derselbe Button in unterschiedlichen Situationen verschiedene Aktionen ausführt. Außerdem kann das Bereinigen alter/nicht verwendeter Event-Handler in komplexeren Programmen die Effizienz verbessern.

Wir zeigen unten, wie eine einfache `greet()`-Funktion als Listener/Event-Handler für das `click`-Ereignis festgelegt werden kann (Sie könnten anstelle einer benannten Funktion auch eine Lambda-Funktion verwenden, wenn gewünscht). Beachten Sie erneut, dass das Ereignis als erstes Argument an den Event-Handler übergeben wird.

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.addEventListener("click", greet);
```

Die Methode kann auch zusätzliche Argumente/Optionen entgegennehmen, um Aspekte der Erfassung und Entfernung der Ereignisse zu steuern. Weitere Informationen finden Sie auf der [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Referenzseite.

#### Verwendung eines Abort-Signals

Ein bemerkenswertes Feature von Event-Listenern ist die Möglichkeit, ein Abort-Signal zu verwenden, um mehrere Event-Handler gleichzeitig zu bereinigen.

Dies geschieht, indem das gleiche [`AbortSignal`](/de/docs/Web/API/AbortSignal) an den [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Aufruf für alle Event-Handler übergeben wird, die Sie gemeinsam entfernen möchten. Sie können dann [`abort()`](/de/docs/Web/API/AbortController/abort) auf dem Controller aufrufen, der das `AbortSignal` besitzt, und es wird alle Event-Handler entfernen, die mit diesem Signal hinzugefügt wurden. Zum Beispiel, um einen Event-Handler hinzuzufügen, den wir mit einem `AbortSignal` entfernen können:

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

Dann kann der durch den obigen Code erstellte Event-Handler folgendermaßen entfernt werden:

```js
controller.abort(); // removes any/all event handlers associated with this controller
```

<section id="Quick_links">
  <ol>
    <li><a href="/de/docs/Learn/JavaScript/Building_blocks/Events">Einführung in Ereignisse</a></li>
    <li><a href="/de/docs/Web/Events">Ereignisreferenz</a></li>
  </ol>
</section>
