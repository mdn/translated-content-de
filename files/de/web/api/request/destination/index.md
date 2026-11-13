---
title: "Request: destination-Eigenschaft"
short-title: destination
slug: Web/API/Request/destination
l10n:
  sourceCommit: 25abd448c8a088e9f333360dea0adbe8143e6b86
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`destination`** der Schnittstelle **[`Request`](/de/docs/Web/API/Request)** gibt einen String zurück, der den Typ des angeforderten Inhalts beschreibt.

Der String muss einer der Werte `audio`, `audioworklet`, `document`, `embed`, `fencedframe`, `font`, `frame`, `iframe`, `image`, `json`, `manifest`, `object`, `paintworklet`, `report`, `script`, `sharedworker`, `speculationrules`, `style`, `text`, `track`, `video`, `worker` oder `xslt` oder der leere String sein. Der leere String ist der Standardwert.

Der {{Glossary("user_agent", "User-Agent")}} verwendet `destination` beispielsweise, um zu bestimmen, welche Regeln für CORS gelten oder wie komplexe Codepfade durchlaufen werden, die die Verarbeitung bestimmter Anfragetypen beeinflussen.

Diese Ziele unterscheiden sich erheblich in ihrer Funktionsweise. Bei einigen wird der empfangene Inhalt gespeichert, um ihn später zu verarbeiten. Andere sind skriptbasiert: In diesem Fall werden die empfangenen Daten an ein Skript übergeben, indem es aufgerufen wird.
Zu den skriptbasierten Zielen gehören {{HTMLElement("script")}}-Elemente sowie alle auf [`Worklet`](/de/docs/Web/API/Worklet) basierenden Ziele (einschließlich Unterklassen wie [`AudioWorklet`](/de/docs/Web/API/AudioWorklet)) und die auf [`Worker`](/de/docs/Web/API/Worker) basierenden Ziele, darunter [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) und [`SharedWorker`](/de/docs/Web/API/SharedWorker).

## Wert

Ein String, der den Typ des angeforderten Inhalts angibt. Dieser Typ ist wesentlich weiter gefasst als die üblichen Dokumenttypwerte (etwa `"document"` oder `"manifest"`) und kann kontextbezogene Angaben wie `"image"`, `"worker"` oder `"audioworklet"` enthalten.

Mögliche Werte sind:

- `""`
  - : Der leere String ist der Standardwert und wird für Ziele verwendet, denen kein eigener Wert zugeordnet ist. Dies ist unter anderem der Wert für Anfragen, die mit den folgenden APIs gestellt werden:
    - [`<a ping>`](/de/docs/Web/HTML/Reference/Elements/a#ping)
    - [`<area ping>`](/de/docs/Web/HTML/Reference/Elements/area#ping)
    - [`Cache`](/de/docs/Web/API/Cache)
    - [`EventSource`](/de/docs/Web/API/EventSource)
    - [`fetch()`](/de/docs/Web/API/Window/fetch)
    - [`navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon)
    - [`WebSocket`](/de/docs/Web/API/WebSocket)
    - [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)

- `"audio"`
  - : Das Ziel sind Audiodaten.
- `"audioworklet"`
  - : Das Ziel sind Daten, die zur Verwendung durch ein Audio-Worklet abgerufen werden.
- `"document"`
  - : Das Ziel ist ein Dokument (HTML oder XML).
- `"embed"`
  - : Das Ziel ist eingebetteter Inhalt.
- `"fencedframe"`
  - : Das Ziel ist ein [Fenced Frame](/de/docs/Web/API/Fenced_frame_API).
- `"font"`
  - : Das Ziel ist eine Schriftart.
- `"image"`
  - : Das Ziel ist ein Bild.
- `"json"`
  - : Das Ziel ist eine JSON-Datei.
- `"manifest"`
  - : Das Ziel ist ein Manifest.
- `"object"`
  - : Das Ziel ist ein Objekt.
- `"paintworklet"`
  - : Das Ziel ist ein Paint-Worklet.
- `"report"`
  - : Das Ziel ist ein Bericht.
- `"script"`
  - : Das Ziel ist ein Skript.
- `"serviceworker"`
  - : Das Ziel ist ein Service Worker.
- `"sharedworker"`
  - : Das Ziel ist ein Shared Worker.
- `"speculationrules"`
  - : Das Ziel ist ein JSON-Dokument mit [Speculation Rules](/de/docs/Web/API/Speculation_Rules_API).
- `"style"`
  - : Das Ziel ist ein Stylesheet.
- `"text"` {{experimental_inline}}
  - : Das Ziel ist eine Textdatei.
- `"track"`
  - : Das Ziel ist ein HTML-{{HTMLElement("track")}}-Element.
- `"video"`
  - : Das Ziel sind Videodaten.
- `"worker"`
  - : Das Ziel ist ein Worker.
- `"xslt"`
  - : Das Ziel ist eine XSLT-Transformation.

## Beispiele

Im folgenden Codeausschnitt erstellen wir mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor eine neue Anfrage für eine Bilddatei im selben Verzeichnis wie das Skript und speichern anschließend das Ziel der Anfrage:

```js
const myRequest = new Request("flowers.jpg");
const myDestination = myRequest.destination; // returns the empty string by default
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker-API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
