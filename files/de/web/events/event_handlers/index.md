---
title: Ereignisbehandlung (Überblick)
slug: Web/Events/Event_handlers
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

Ereignisse sind Signale, die im Browserfenster ausgelöst werden, um Änderungen im Browser oder im Betriebssystemumfeld zu melden. Programmierer können _Ereignis-Handler_-Code erstellen, der ausgeführt wird, wenn ein Ereignis ausgelöst wird, sodass Webseiten angemessen auf Änderungen reagieren können.

Diese Seite bietet eine sehr kurze "Erinnerung" daran, wie man mit Ereignissen und Ereignis-Handlern arbeitet. Neue Entwickler sollten stattdessen [Einführung in Ereignisse](/de/docs/Learn/JavaScript/Building_blocks/Events) lesen.

## Welche Ereignisse sind verfügbar?

Ereignisse sind in und/oder unter den Seiten für die JavaScript-Objekte dokumentiert, die sie erzeugen. Um zum Beispiel herauszufinden, welche Ereignisse im Browserfenster oder im aktuellen Dokument ausgelöst werden, sehen Sie sich die Ereignisse-Abschnitte in [`Window`](/de/docs/Web/API/Window#events) und [`Document`](/de/docs/Web/API/Document#events) an.

Sie können die [Ereignis-Referenz](/de/docs/Web/Events#event_index) verwenden, um herauszufinden, welche JavaScript-Objekte Ereignisse für bestimmte APIs auslösen, z. B. Animation, Medien usw.

## Registrieren von Ereignishandlern

Es gibt zwei empfohlene Ansätze zur Registrierung von Handletern. Ereignis-Handler-Code kann ausgeführt werden, wenn ein Ereignis ausgelöst wird, indem er der entsprechenden _onevent_-Eigenschaft des Ziel-Elements zugewiesen wird oder indem der Handler als Listener für das Element mit der Methode {{domxref("EventTarget.addEventListener", "addEventListener()")}} registriert wird. In beiden Fällen erhält der Handler ein Objekt, das der [`Event`-Schnittstelle](/de/docs/Web/API/Event) (oder einer [abgeleiteten Schnittstelle](/de/docs/Web/API/Event#introduction)) entspricht. Der Hauptunterschied besteht darin, dass mit den Ereignis-Listener-Methoden mehrere Ereignis-Handler hinzugefügt (oder entfernt) werden können.

> [!WARNING]
> Ein dritter Ansatz zum Setzen von Ereignis-Handlern mit HTML-Onevent-Attributen wird nicht empfohlen! Diese vergrößern das Markup und machen es weniger lesbar und schwieriger zu debuggen. Weitere Informationen finden Sie unter [Inline-Ereignis-Handler](/de/docs/Learn/JavaScript/Building_blocks/Events#inline_event_handlers_—_dont_use_these).

### Verwendung von Onevent-Eigenschaften

Konventionell haben JavaScript-Objekte, die Ereignisse auslösen, entsprechende "onevent"-Eigenschaften (benannt, indem dem Namen des Ereignisses "on" vorangestellt wird). Diese Eigenschaften werden aufgerufen, um den zugehörigen Handler-Code auszuführen, wenn das Ereignis ausgelöst wird, und können auch direkt durch Ihren Code aufgerufen werden.

Um Ereignis-Handler-Code zu setzen, können Sie ihn einfach der entsprechenden Onevent-Eigenschaft zuweisen. Jedem Ereignis in einem Element kann nur ein Ereignis-Handler zugewiesen werden. Falls nötig, kann der Handler durch Zuweisen einer anderen Funktion zur selben Eigenschaft ersetzt werden.

Unten zeigen wir, wie man eine einfache `greet()`-Funktion für das `click`-Ereignis mit der `onclick`-Eigenschaft setzt.

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.onclick = greet;
```

Beachten Sie, dass ein das Ereignis repräsentierendes Objekt als erstes Argument an den Ereignis-Handler übergeben wird. Dieses Ereignis-Objekt implementiert entweder die {{domxref("Event")}}-Schnittstelle oder leitet sich von ihr ab.

### EventTarget.addEventListener

Der flexibelste Weg, einen Ereignis-Handler an einem Element zu setzen, ist die Verwendung der {{domxref("EventTarget.addEventListener")}}-Methode. Dieser Ansatz ermöglicht es, mehrere Listener einem Element zuzuweisen und Listener bei Bedarf zu _entfernen_ (unter Verwendung von {{domxref("EventTarget.removeEventListener")}}).

> [!NOTE]
> Die Möglichkeit, Ereignis-Handler hinzuzufügen und zu entfernen, erlaubt es Ihnen beispielsweise, dass derselbe Button in unterschiedlichen Situationen verschiedene Aktionen ausführt. Zudem kann in komplexeren Programmen das Bereinigen alter/nicht verwendeter Ereignis-Handler die Effizienz verbessern.

Unten zeigen wir, wie eine einfache `greet()`-Funktion als Listener/Ereignis-Handler für das `click`-Ereignis gesetzt werden kann (anstelle einer benannten Funktion könnte auch eine Lambda-Funktion verwendet werden, falls gewünscht). Beachten Sie erneut, dass das Ereignis als erstes Argument an den Ereignis-Handler übergeben wird.

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.addEventListener("click", greet);
```

Die Methode kann auch zusätzliche Argumente/Optionen annehmen, um Aspekte zu steuern, wie die Ereignisse erfasst und entfernt werden. Weitere Informationen finden Sie auf der {{domxref("EventTarget.addEventListener")}}-Referenzseite.

#### Verwendung eines Abbruchsignals

Ein bemerkenswertes Merkmal von Ereignis-Listenern ist die Fähigkeit, ein Abbruchsignal zu verwenden, um mehrere Ereignis-Handler gleichzeitig zu bereinigen.

Dies geschieht, indem dasselbe {{domxref("AbortSignal")}} an den {{domxref("EventTarget/addEventListener()", "addEventListener()")}}-Aufruf für alle Ereignis-Handler übergeben wird, die Sie gemeinsam entfernen möchten. Sie können dann {{domxref("AbortController/abort()", "abort()")}} auf den Controller aufrufen, der das `AbortSignal` besitzt, und es werden alle Ereignis-Handler entfernt, die mit diesem Signal hinzugefügt wurden. Zum Beispiel, um einen Ereignis-Handler hinzuzufügen, den wir mit einem `AbortSignal` entfernen können:

```js
const controller = new AbortController();

btn.addEventListener(
  "click",
  (event) => {
    console.log("greet:", event);
  },
  { signal: controller.signal },
); // ein AbortSignal an diesen Handler übergeben
```

Dann kann der durch den obigen Code erstellte Ereignis-Handler wie folgt entfernt werden:

```js
controller.abort(); // entfernt alle Ereignis-Handler, die mit diesem Controller verbunden sind
```

<section id="Quick_links">
  <ol>
    <li><a href="/de/docs/Learn/JavaScript/Building_blocks/Events">Einführung in Ereignisse</a></li>
    <li><a href="/de/docs/Web/Events">Ereignis-Referenz</a></li>
  </ol>
</section>
