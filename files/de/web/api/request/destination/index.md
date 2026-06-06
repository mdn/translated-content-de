---
title: "Request: destination Eigenschaft"
short-title: destination
slug: Web/API/Request/destination
l10n:
  sourceCommit: 8330e7c1afd31d53ae12c3271e96d681bba9e223
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`destination`** schreibgeschützte Eigenschaft der **[`Request`](/de/docs/Web/API/Request)**-Schnittstelle gibt einen String zurück, der den Typ des angeforderten Inhalts beschreibt.

Der String muss einer der folgenden sein: `audio`, `audioworklet`, `document`, `embed`, `fencedframe`, `font`, `frame`, `iframe`, `image`, `json`, `manifest`, `object`, `paintworklet`, `report`, `script`, `sharedworker`, `speculationrules`, `style`, `text`, `track`, `video`, `worker` oder `xslt`, oder der leere String, welcher der Standardwert ist.

Die `destination` wird vom {{Glossary("user_agent", "Benutzeragenten")}} genutzt, um beispielsweise zu bestimmen, welches Regelset für CORS-Zwecke zu befolgen ist, oder wie komplexe Code-Pfade zu navigieren sind, die beeinflussen, wie bestimmte Arten von Anfragen behandelt werden.

Diese Ziele variieren erheblich in ihrer Funktionsweise. Einige sind Datenspeicher, in denen die empfangenen Daten zur späteren Verarbeitung gespeichert werden. Andere basieren auf Skripten, in diesem Fall werden die empfangenen Daten an ein Skript übergeben, indem es aufgerufen wird und die Daten weitergegeben werden.
Skriptbasierte Ziele umfassen {{HTMLElement("script")}}-Elemente sowie alle auf [`Worklet`](/de/docs/Web/API/Worklet) basierenden Ziele (einschließlich Unterklassen wie [`AudioWorklet`](/de/docs/Web/API/AudioWorklet)) und die auf [`Worker`](/de/docs/Web/API/Worker) basierenden Ziele, einschließlich [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) und [`SharedWorker`](/de/docs/Web/API/SharedWorker).

## Wert

Ein String, der den Inhaltstyp angibt, der von der Anfrage angefordert wird. Dieser Typ ist wesentlich breiter als die üblichen Dokumenttypwerte (wie `"document"` oder `"manifest"`) und kann kontextuelle Hinweise wie `"image"`, `"worker"` oder `"audioworklet"` enthalten.

Mögliche Werte sind:

- `""`
  - : Der leere String ist der Standardwert und wird für Ziele verwendet, die keinen eigenen Wert haben. Dies ist der Wert, wenn Anfragen über die folgenden APIs (unter anderem) gestellt werden:
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
  - : Das Ziel sind Daten, die für die Nutzung durch ein Audio Worklet abgerufen werden.
- `"document"`
  - : Das Ziel ist ein Dokument (HTML oder XML).
- `"embed"`
  - : Das Ziel ist eingebetteter Inhalt.
- `"fencedframe"`
  - : Das Ziel ist ein [abgegrenzter Frame](/de/docs/Web/API/Fenced_frame_API).
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
  - : Das Ziel ist ein Paint Worklet.
- `"report"`
  - : Das Ziel ist ein Bericht.
- `"script"`
  - : Das Ziel ist ein Skript.
- `"serviceworker"`
  - : Das Ziel ist ein Service Worker.
- `"sharedworker"`
  - : Das Ziel ist ein Shared Worker.
- `"speculationrules"` {{experimental_inline}}
  - : Das Ziel ist ein [Speculation Rules](/de/docs/Web/API/Speculation_Rules_API)-JSON-Dokument.
- `"style"`
  - : Das Ziel ist ein Stil.
- `"text"` {{experimental_inline}}
  - : Das Ziel ist eine Textdatei.
- `"track"`
  - : Das Ziel ist ein HTML {{HTMLElement("track")}}.
- `"video"`
  - : Das Ziel sind Videodaten.
- `"worker"`
  - : Das Ziel ist ein Worker.
- `"xslt"`
  - : Das Ziel ist eine XSLT-Transformation.

## Beispiele

Im folgenden Ausschnitt erstellen wir eine neue Anfrage mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor (für eine Bilddatei im selben Verzeichnis wie das Skript) und speichern dann das Ziel der Anfrage:

```js
const myRequest = new Request("flowers.jpg");
const myDestination = myRequest.destination; // returns the empty string by default
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
