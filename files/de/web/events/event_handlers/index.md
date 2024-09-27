---
title: Ereignisbehandlung (Übersicht)
slug: Web/Events/Event_handlers
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

Ereignisse sind Signale, die im Browserfenster ausgelöst werden und Änderungen im Browser- oder Betriebssystemumfeld melden. Programmierer können _Ereignishandler_-Code erstellen, der bei Auftreten eines Ereignisses ausgeführt wird, sodass Webseiten angemessen auf Änderungen reagieren können.

Diese Seite bietet eine sehr kurze "Erinnerung", wie man mit Ereignissen und Ereignishandlern arbeitet. Neue Entwickler sollten stattdessen [Einführung in Ereignisse](/de/docs/Learn/JavaScript/Building_blocks/Events) lesen.

## Welche Ereignisse stehen zur Verfügung?

Ereignisse sind in den JavaScript-Objektseiten dokumentiert, die sie auslösen. Um beispielsweise die Ereignisse zu finden, die im Browserfenster oder im aktuellen Dokument ausgelöst werden, sehen Sie sich die Ereignisse in [`Window`](/de/docs/Web/API/Window#events) und [`Document`](/de/docs/Web/API/Document#events) an.

Sie können die [Ereignisreferenz](/de/docs/Web/Events#event_index) nutzen, um herauszufinden, welche JavaScript-Objekte Ereignisse für bestimmte APIs auslösen, z.B. Animation, Medien usw.

## Registrierung von Ereignishandlern

Es gibt zwei empfohlene Ansätze zur Registrierung von Handlern. Ereignishandler-Code kann so gestaltet werden, dass er ausgelöst wird, wenn ein Ereignis ausgelöst wird, indem man es der entsprechenden _onevent_-Eigenschaft des Ziel-Elements zuweist oder den Handler als Listener für das Element mit der Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) registriert. In beiden Fällen erhält der Handler ein Objekt, das der [`Event`-Schnittstelle](/de/docs/Web/API/Event) (oder einer [abgeleiteten Schnittstelle](/de/docs/Web/API/Event#introduction)) entspricht. Der Hauptunterschied besteht darin, dass mit den Event-Listener-Methoden mehrere Ereignishandler hinzugefügt (oder entfernt) werden können.

> [!WARNING]
> Ein dritter Ansatz zur Einstellung von Ereignishandlern unter Verwendung von HTML-onevent-Attributen wird nicht empfohlen! Sie blähen das Markup auf und machen es weniger lesbar und schwerer zu debuggen. Weitere Informationen finden Sie unter [Inline-Ereignishandler](/de/docs/Learn/JavaScript/Building_blocks/Events#inline_event_handlers_—_dont_use_these).

### Verwendung von onevent-Eigenschaften

Der Konvention nach haben JavaScript-Objekte, die Ereignisse auslösen, entsprechende "onevent"-Eigenschaften (benannt durch Voranstellen von "on" an den Namen des Ereignisses). Diese Eigenschaften werden aufgerufen, um den zugehörigen Handler-Code auszuführen, wenn das Ereignis ausgelöst wird, und können auch direkt durch Ihren eigenen Code aufgerufen werden.

Um Ereignishandler-Code zu setzen, können Sie ihn einfach der entsprechenden onevent-Eigenschaft zuweisen. Für jedes Ereignis in einem Element kann nur ein Ereignishandler zugewiesen werden. Falls nötig, kann der Handler durch Zuweisung einer anderen Funktion zur selben Eigenschaft ersetzt werden.

Unten zeigen wir, wie eine einfache `greet()`-Funktion für das `click`-Ereignis mit der `onclick`-Eigenschaft gesetzt wird.

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.onclick = greet;
```

Beachten Sie, dass ein Objekt, das das Ereignis darstellt, als erstes Argument an den Ereignishandler übergeben wird. Dieses Ereignisobjekt implementiert entweder die [`Event`-Schnittstelle](/de/docs/Web/API/Event) oder leitet sich von ihr ab.

### EventTarget.addEventListener

Die flexibelste Methode, einen Ereignishandler auf ein Element zu setzen, ist die Verwendung der Methode [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener). Dieser Ansatz erlaubt es, mehrere Listener einem Element zuzuweisen und Listener bei Bedarf _entfernen_ zu können (mithilfe von [`EventTarget.removeEventListener`](/de/docs/Web/API/EventTarget/removeEventListener)).

> [!NOTE]
> Die Fähigkeit, Ereignishandler hinzuzufügen und zu entfernen, ermöglicht es Ihnen beispielsweise, dass derselbe Button in unterschiedlichen Situationen unterschiedliche Aktionen ausführt. In komplexeren Programmen kann das Bereinigen von alten/unbenutzten Ereignishandlern die Effizienz verbessern.

Unten zeigen wir, wie eine einfache `greet()`-Funktion als Listener/Ereignishandler für das `click`-Ereignis festgelegt werden kann (Sie könnten eine Lambda-Funktion anstelle einer benannten Funktion verwenden, wenn gewünscht). Beachten Sie erneut, dass das Ereignis als erstes Argument an den Ereignishandler übergeben wird.

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.addEventListener("click", greet);
```

Die Methode kann auch zusätzliche Argumente/Optionen annehmen, um Aspekte der Erfassung und Entfernung der Ereignisse zu steuern. Weitere Informationen finden Sie auf der Referenzseite [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener).

#### Verwendung eines Abbruchsignals

Ein bemerkenswertes Feature für Event-Listener ist die Fähigkeit, ein Abbruchsignal zu nutzen, um mehrere Ereignishandler gleichzeitig zu bereinigen.

Dies geschieht, indem dasselbe [`AbortSignal`](/de/docs/Web/API/AbortSignal) an den Aufruf von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) für alle Ereignishandler übergeben wird, die Sie zusammen entfernen möchten. Sie können dann [`abort()`](/de/docs/Web/API/AbortController/abort) auf dem Controller aufrufen, der das `AbortSignal` besitzt, und es wird alle Ereignishandler entfernen, die mit diesem Signal hinzugefügt wurden. Zum Beispiel, um einen Ereignishandler hinzuzufügen, den wir mit einem `AbortSignal` entfernen können:

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
    <li><a href="/de/docs/Learn/JavaScript/Building_blocks/Events">Einführung in Ereignisse</a></li>
    <li><a href="/de/docs/Web/Events">Ereignisreferenz</a></li>
  </ol>
</section>
