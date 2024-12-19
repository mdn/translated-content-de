---
title: Ereignisverarbeitung (Überblick)
slug: Web/Events/Event_handlers
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

Ereignisse sind Signale, die im Browserfenster ausgelöst werden und Änderungen in der Browser- oder Betriebssystemumgebung melden. Programmierer können _Ereignisbehandlungs_­code erstellen, der ausgeführt wird, wenn ein Ereignis ausgelöst wird, sodass Webseiten angemessen auf Änderungen reagieren können.

Diese Seite bietet eine sehr kurze "Erinnerung" daran, wie mit Ereignissen und Ereignisbehandlern gearbeitet wird. Neue Entwickler sollten stattdessen [Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events) lesen.

## Welche Ereignisse sind verfügbar?

Ereignisse werden in und/oder unter den Seiten für die JavaScript-Objekte dokumentiert, die sie auslösen. Um beispielsweise herauszufinden, welche Ereignisse im Browserfenster oder im aktuellen Dokument ausgelöst werden, sehen Sie sich die Ereignisbereiche in [`Window`](/de/docs/Web/API/Window#events) und [`Document`](/de/docs/Web/API/Document#events) an.

Sie können die [Ereignisreferenz](/de/docs/Web/Events#event_index) verwenden, um herauszufinden, welche JavaScript-Objekte für bestimmte APIs, z.B. Animation, Medien usw., Ereignisse auslösen.

## Registrierung von Ereignisbehandlern

Es gibt zwei empfohlene Ansätze zur Registrierung von Behandlern. Ereignisbehandlungs­code kann ausgeführt werden, wenn ein Ereignis durch Zuweisung zum entsprechenden _onevent_ Eigenschaft des Zielelements ausgelöst wird, oder indem der Behandler als Listener für das Element mit der Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) registriert wird. In beiden Fällen erhält der Behandler ein Objekt, das der [`Event` Schnittstelle](/de/docs/Web/API/Event) (oder einer [abgeleiteten Schnittstelle](/de/docs/Web/API/Event#introduction)) entspricht. Der Hauptunterschied besteht darin, dass mit den Methoden zur Ereignisüberwachung mehrere Ereignisbehandler hinzugefügt (oder entfernt) werden können.

> [!WARNING]
> Ein dritter Ansatz zum Setzen von Ereignisbehandlern mithilfe von HTML-Onevent-Attributen wird nicht empfohlen! Sie blähen das Markup auf und machen es weniger lesbar und schwerer zu debuggen. Weitere Informationen finden Sie unter [Inline-Ereignisbehandler](/de/docs/Learn_web_development/Core/Scripting/Events#inline_event_handlers_—_dont_use_these).

### Verwendung von Onevent-Eigenschaften

Nach Konvention haben JavaScript-Objekte, die Ereignisse auslösen, entsprechende "onevent" Eigenschaften (benannt durch Voranstellen von "on" zum Namen des Ereignisses). Diese Eigenschaften werden aufgerufen, um den zugehörigen Behandlercode auszuführen, wenn das Ereignis ausgelöst wird, und können auch direkt von Ihrem eigenen Code aufgerufen werden.

Um Ereignisbehandlungs­code zu setzen, können Sie ihn einfach der entsprechenden onevent Eigenschaft zuweisen. Für jedes Ereignis in einem Element kann nur ein Ereignisbehandler zugewiesen werden. Falls erforderlich, kann der Behandler durch die Zuweisung einer anderen Funktion zur gleichen Eigenschaft ersetzt werden.

Unten zeigen wir, wie eine einfache `greet()` Funktion für das `click` Ereignis mit der `onclick` Eigenschaft gesetzt wird.

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.onclick = greet;
```

Beachten Sie, dass ein Objekt, das das Ereignis darstellt, als erstes Argument an den Ereignisbehandler übergeben wird. Dieses Ereignisobjekt implementiert entweder die [`Event`](/de/docs/Web/API/Event) Schnittstelle oder ist von ihr abgeleitet.

### EventTarget.addEventListener

Der flexibelste Weg, einen Ereignisbehandler auf einem Element zu setzen, ist die Verwendung der [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) Methode. Dieser Ansatz ermöglicht es, mehreren Listenern einem Element zuzuweisen, und ermöglicht es, Listener bei Bedarf _zu entfernen_ (mithilfe von [`EventTarget.removeEventListener`](/de/docs/Web/API/EventTarget/removeEventListener)).

> [!NOTE]
> Die Fähigkeit, Ereignisbehandler hinzuzufügen und zu entfernen, erlaubt es Ihnen z.B., dass derselbe Button in unterschiedlichen Situationen unterschiedliche Aktionen ausführt. Darüber hinaus kann in komplexeren Programmen das Aufräumen alter/verwendeter Ereignisbehandler die Effizienz verbessern.

Unten zeigen wir, wie eine einfache `greet()` Funktion als Listener/Ereignisbehandler für das `click` Ereignis gesetzt werden kann (Sie könnten, falls gewünscht, einen anonymen Funktionsausdruck anstelle einer benannten Funktion verwenden). Beachten Sie erneut, dass das Ereignis als erstes Argument an den Ereignisbehandler übergeben wird.

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.addEventListener("click", greet);
```

Die Methode kann auch zusätzliche Argumente/Optionen aufnehmen, um Aspekte zu kontrollieren, wie die Ereignisse erfasst und entfernt werden. Weitere Informationen finden Sie auf der Referenzseite zu [`EventTarget.addEventListener`](/de/docs/Web/API/EventTarget/addEventListener).

#### Verwendung eines Abbruchsignals

Eine bemerkenswerte Funktion eines Ereignislisteners ist die Möglichkeit, ein Abbruchsignal zu verwenden, um mehrere Ereignisbehandler gleichzeitig zu bereinigen.

Dies geschieht, indem dasselbe [`AbortSignal`](/de/docs/Web/API/AbortSignal) an den [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) Aufruf für alle Ereignisbehandler übergeben wird, die Sie gemeinsam entfernen möchten. Sie können dann [`abort()`](/de/docs/Web/API/AbortController/abort) auf dem Controller aufrufen, der das `AbortSignal` besitzt, und es werden alle Ereignisbehandler entfernt, die mit diesem Signal hinzugefügt wurden. Zum Beispiel, um einen Ereignisbehandler hinzuzufügen, den wir mit einem `AbortSignal` entfernen können:

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

Dann kann der durch den obigen Code erstellte Ereignisbehandler so entfernt werden:

```js
controller.abort(); // removes any/all event handlers associated with this controller
```

<section id="Quick_links">
  <ol>
    <li><a href="/de/docs/Learn_web_development/Core/Scripting/Events">Einführung in Ereignisse</a></li>
    <li><a href="/de/docs/Web/Events">Ereignisreferenz</a></li>
  </ol>
</section>
