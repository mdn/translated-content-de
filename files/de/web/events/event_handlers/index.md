---
title: Ereignisbehandlung (Überblick)
slug: Web/Events/Event_handlers
l10n:
  sourceCommit: 26e46f8c13ebea65dc65a6e99e51e8fa4d5d619d
---

Ereignisse sind Signale, die innerhalb des Browserfensters ausgelöst werden und Änderungen in der Browser- oder Betriebssystemumgebung mitteilen. Programmierer können _Ereignis-Handler_-Code erstellen, der ausgeführt wird, wenn ein Ereignis ausgelöst wird, sodass Webseiten angemessen auf Änderungen reagieren können.

Diese Seite bietet eine sehr kurze "Erinnerung" daran, wie man mit Ereignissen und Ereignis-Handlern arbeitet. Neue Entwickler sollten stattdessen [Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events) lesen.

## Welche Ereignisse sind verfügbar?

Ereignisse werden auf den Seiten der JavaScript-Objekte dokumentiert, die sie auslösen. Um beispielsweise herauszufinden, welche Ereignisse im Browserfenster oder im aktuellen Dokument ausgelöst werden, siehe die Ereignisabschnitte in [`Window`](/de/docs/Web/API/Window#events) und [`Document`](/de/docs/Web/API/Document#events).

Sie können das [Ereignis-Referenz](/de/docs/Web/Events#event_index) verwenden, um herauszufinden, welche JavaScript-Objekte Ereignisse für bestimmte APIs auslösen, z. B. Animation, Medien usw.

## Registrieren von Ereignis-Handlern

Es gibt zwei empfohlene Ansätze zum Registrieren von Handlern. Ereignis-Handler-Code kann ausgeführt werden, wenn ein Ereignis ausgelöst wird, indem er dem entsprechenden _onevent_-Eigenschaft des Zielelements zugewiesen oder als Listener für das Element unter Verwendung der [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Methode registriert wird. In jedem Fall erhält der Handler ein Objekt, das der [`Event`-Schnittstelle](/de/docs/Web/API/Event) (oder einer [abgeleiteten Schnittstelle](/de/docs/Web/API/Event#introduction)) entspricht. Der Hauptunterschied besteht darin, dass mit den Ereignis-Listener-Methoden mehrere Ereignis-Handler hinzugefügt (oder entfernt) werden können.

> [!WARNING]
> Ein dritter Ansatz für das Setzen von Ereignis-Handlern unter Verwendung von HTML-Onevent-Attributen wird nicht empfohlen! Sie blähen das Markup auf und machen es weniger lesbar und schwerer zu debuggen. Weitere Informationen finden Sie unter [Inline-Ereignis-Handler](/de/docs/Learn_web_development/Core/Scripting/Events#inline_event_handlers_—_dont_use_these).

### Verwenden von Onevent-Eigenschaften

Gewohnheitsmäßig haben JavaScript-Objekte, die Ereignisse auslösen, entsprechende "Onevent"-Eigenschaften (die durch Voranstellen von "on" zum Namen des Ereignisses benannt werden). Diese Eigenschaften werden aufgerufen, um den zugehörigen Handler-Code auszuführen, wenn das Ereignis ausgelöst wird, und können auch direkt von Ihrem eigenen Code aufgerufen werden.

Um Ereignis-Handler-Code einzurichten, können Sie ihn einfach der entsprechenden Onevent-Eigenschaft zuweisen. Für jedes Ereignis in einem Element kann nur ein Ereignis-Handler zugewiesen werden. Falls nötig, kann der Handler durch Zuweisung einer anderen Funktion zu derselben Eigenschaft ersetzt werden.

Unten zeigen wir, wie eine `greet()`-Funktion für das `click`-Ereignis mit der `onclick`-Eigenschaft gesetzt wird.

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.onclick = greet;
```

Beachten Sie, dass ein Objekt, das das Ereignis darstellt, als erstes Argument an den Ereignis-Handler übergeben wird. Dieses Ereignisobjekt implementiert entweder die [`Event`](/de/docs/Web/API/Event)-Schnittstelle oder ist davon abgeleitet.

### EventTarget.addEventListener

Der flexibelste Weg, einen Ereignis-Handler auf einem Element zu setzen, ist die Verwendung der [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode. Dieser Ansatz erlaubt es, mehrere Listener einem Element zuzuweisen und bei Bedarf Listener zu _entfernen_ (mit [`EventTarget.removeEventListener`](/de/docs/Web/API/EventTarget/removeEventListener)).

> [!NOTE]
> Die Fähigkeit, Ereignis-Handler hinzuzufügen und zu entfernen, erlaubt es Ihnen beispielsweise, denselben Button in unterschiedlichen Situationen unterschiedliche Aktionen ausführen zu lassen. Außerdem kann das Bereinigen alter/unbenutzter Ereignis-Handler in komplexeren Programmen die Effizienz verbessern.

Unten zeigen wir, wie eine `greet()`-Funktion als Listener/Ereignis-Handler für das `click`-Ereignis gesetzt werden kann (Sie könnten, wenn gewünscht, einen anonymen Funktionsausdruck anstelle einer benannten Funktion verwenden). Beachten Sie erneut, dass das Ereignis als erstes Argument an den Ereignis-Handler übergeben wird.

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.addEventListener("click", greet);
```

Die Methode kann auch zusätzliche Argumente/Optionen annehmen, um Aspekte zu steuern, wie die Ereignisse abgefangen und entfernt werden. Weitere Informationen finden Sie auf der Referenzseite [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener).

#### Verwendung eines Abbruchsignals

Ein bemerkenswertes Feature der Ereignis-Listener ist die Fähigkeit, ein Abbruchsignal zu verwenden, um mehrere Ereignis-Handler gleichzeitig aufzuräumen.

Dies geschieht, indem dasselbe [`AbortSignal`](/de/docs/Web/API/AbortSignal) dem [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Aufruf für alle Ereignis-Handler übergeben wird, die Sie gemeinsam entfernen möchten. Sie können dann [`abort()`](/de/docs/Web/API/AbortController/abort) auf dem Controller aufrufen, der das `AbortSignal` besitzt, und es entfernt alle mit diesem Signal hinzugefügten Ereignis-Handler. Zum Beispiel, um einen Ereignis-Handler hinzuzufügen, den wir mit einem `AbortSignal` entfernen können:

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
    <li><a href="/de/docs/Web/Events">Ereignis-Referenz</a></li>
  </ol>
</section>
