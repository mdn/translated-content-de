---
title: Event handling (overview)
slug: Web/Events/Event_handlers
l10n:
  sourceCommit: 859f03368d7a2fcb330c4292d58a55920a076bba
---

Ereignisse sind Signale, die innerhalb des Browserfensters ausgelöst werden und Änderungen in der Browser- oder Betriebssystemumgebung anzeigen. Programmierer können _Ereignishandler_-Code erstellen, der ausgeführt wird, wenn ein Ereignis ausgelöst wird, sodass Webseiten angemessen auf Änderungen reagieren können.

Diese Seite bietet eine sehr kurze „Erinnerung“ daran, wie man mit Ereignissen und Ereignishandlern arbeitet. Neue Entwickler sollten stattdessen [Einführung in Ereignisse](/de/docs/Learn/JavaScript/Building_blocks/Events) lesen.

## Welche Ereignisse sind verfügbar?

Ereignisse sind auf den Seiten zu den JavaScript-Objekten dokumentiert, die sie auslösen. Um beispielsweise die auf dem Browserfenster oder dem aktuellen Dokument ausgelösten Ereignisse zu finden, sehen Sie sich die Abschnitt zu Ereignissen in [`Window`](/de/docs/Web/API/Window#events) und [`Document`](/de/docs/Web/API/Document#events) an.

Sie können die [Ereignisreferenz](/de/docs/Web/Events#event_index) verwenden, um herauszufinden, welche JavaScript-Objekte Ereignisse für bestimmte APIs auslösen, z. B. Animation, Media usw.

## Registrieren von Ereignishandlern

Es gibt zwei empfohlene Ansätze, um Handler zu registrieren. Der Ereignishandler-Code kann so ausgeführt werden, dass er ausgeführt wird, wenn ein Ereignis ausgelöst wird, indem er der entsprechenden _onevent_-Eigenschaft des Zielelements zugewiesen wird oder indem der Handler als Listener für das Element mit der Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) registriert wird. In beiden Fällen erhält der Handler ein Objekt, das der [`Event`-Schnittstelle](/de/docs/Web/API/Event) (oder einer [abgeleiteten Schnittstelle](/de/docs/Web/API/Event#introduction)) entspricht. Der Hauptunterschied besteht darin, dass mit den Ereignis-Listener-Methoden mehrere Ereignishandler hinzugefügt (oder entfernt) werden können.

> [!WARNING]
> Ein dritter Ansatz zum Festlegen von Ereignishandlern mit HTML-Onevent-Attributen wird nicht empfohlen! Sie blähen das Markup auf und machen es weniger lesbar und schwieriger zu debuggen. Weitere Informationen finden Sie unter [Inline-Ereignishandler](/de/docs/Learn/JavaScript/Building_blocks/Events#inline_event_handlers_—_dont_use_these).

### Verwendung von onevent-Eigenschaften

In der Regel haben JavaScript-Objekte, die Ereignisse auslösen, entsprechende „onevent“-Eigenschaften (benannt durch Voranstellen von „on“ vor den Namen des Ereignisses). Diese Eigenschaften werden aufgerufen, um zugehörigen Handler-Code auszuführen, wenn das Ereignis ausgelöst wird, und können auch direkt von Ihrem eigenen Code aufgerufen werden.

Um Ereignishandler-Code festzulegen, können Sie ihn einfach der entsprechenden onevent-Eigenschaft zuweisen. Für jedes Ereignis in einem Element kann nur ein Ereignishandler zugewiesen werden. Falls erforderlich, kann der Handler durch Zuweisung einer anderen Funktion zur gleichen Eigenschaft ersetzt werden.

Im Folgenden zeigen wir, wie eine einfache `greet()`-Funktion für das `click`-Ereignis mithilfe der `onclick`-Eigenschaft festgelegt wird.

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.onclick = greet;
```

Beachten Sie, dass ein Objekt, das das Ereignis darstellt, als erstes Argument an den Ereignishandler übergeben wird. Dieses Ereignisobjekt implementiert entweder die oder ist von der [`Event`](/de/docs/Web/API/Event)-Schnittstelle abgeleitet.

### EventTarget.addEventListener

Der flexibelste Weg, um einen Ereignishandler auf einem Element festzulegen, ist die Verwendung der Methode [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener). Dieser Ansatz ermöglicht es, einem Element mehrere Listener zuzuweisen und Listener bei Bedarf zu _entfernen_ (mithilfe von [`EventTarget.removeEventListener`](/de/docs/Web/API/EventTarget/removeEventListener)).

> [!NOTE]
> Die Möglichkeit, Ereignishandler hinzuzufügen und zu entfernen, ermöglicht es Ihnen beispielsweise, denselben Button in unterschiedlichen Situationen unterschiedliche Aktionen ausführen zu lassen. Darüber hinaus kann in komplexeren Programmen das Bereinigen alter/nicht genutzter Ereignishandler die Effizienz verbessern.

Im Folgenden zeigen wir, wie eine einfache `greet()`-Funktion als Listener/Ereignishandler für das `click`-Ereignis festgelegt werden kann (Sie könnten stattdessen einen anonymen Funktionsausdruck anstelle einer benannten Funktion verwenden, wenn gewünscht). Beachten Sie erneut, dass das Ereignis als erstes Argument an den Ereignishandler übergeben wird.

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.addEventListener("click", greet);
```

Die Methode kann auch zusätzliche Argumente/Optionen zur Steuerung der Erfassungs- und Entfernungsaspekte der Ereignisse annehmen. Weitere Informationen finden Sie auf der Referenzseite zu [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener).

#### Verwendung eines Abbruchsignals

Ein bemerkenswertes Feature von Ereignis-Listenern ist die Möglichkeit, ein Abbruchsignal zu verwenden, um mehrere Ereignishandler gleichzeitig zu bereinigen.

Dies geschieht, indem dasselbe [`AbortSignal`](/de/docs/Web/API/AbortSignal) allen zuzufügen, die Sie zusammen entfernen möchten, und es dann an die [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) Übergabeaufforderung anzuhängen. Danach können Sie die Methode [`abort()`](/de/docs/Web/API/AbortController/abort) des Controllers aufrufen, der das `AbortSignal` besitzt, und es wird alle Ereignishandler entfernen, die mit diesem Signal hinzugefügt wurden. Beispiel, um einen Ereignishandler hinzuzufügen, den wir mit einem `AbortSignal` entfernen können:

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

Dann kann der durch obigen Code erstellte Ereignishandler wie folgt entfernt werden:

```js
controller.abort(); // removes any/all event handlers associated with this controller
```

<section id="Quick_links">
  <ol>
    <li><a href="/de/docs/Learn/JavaScript/Building_blocks/Events">Einführung in Ereignisse</a></li>
    <li><a href="/de/docs/Web/Events">Ereignisreferenz</a></li>
  </ol>
</section>
