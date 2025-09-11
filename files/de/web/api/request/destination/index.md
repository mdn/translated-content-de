---
title: "Anfrage: destination-Eigenschaft"
short-title: destination
slug: Web/API/Request/destination
l10n:
  sourceCommit: 9c2dabaabc326c4a3fed27f6e9bcb3605958e516
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`destination`** schreibgeschützte Eigenschaft des **[`Request`](/de/docs/Web/API/Request)**-Interfaces gibt einen Zeichenfolgenwert zurück, der den Typ des angeforderten Inhalts beschreibt.

Der Zeichenfolgenwert muss einer der folgenden sein: `audio`, `audioworklet`, `document`, `embed`, `fencedframe`, `font`, `frame`, `iframe`, `image`, `json`, `manifest`, `object`, `paintworklet`, `report`, `script`, `sharedworker`, `speculationrules`, `style`, `track`, `video`, `worker` oder `xslt`, oder die leere Zeichenfolge, die der Standardwert ist.

Die `destination` wird vom {{Glossary("user_agent", "Benutzeragenten")}} verwendet, um beispielsweise zu bestimmen, welche Regelmenge für CORS-Zwecke befolgt werden soll oder wie komplexe Codepfade navigiert werden, die beeinflussen, wie bestimmte Arten von Anfragen verarbeitet werden.

Diese Ziele unterscheiden sich erheblich in ihrer Funktionsweise. Einige sind Datenspeicher, in denen die empfangenen Daten zur späteren Verarbeitung gespeichert werden. Andere basieren auf Skripten, in diesem Fall werden die empfangenen Daten an ein Skript übergeben, indem es aufgerufen wird.
Skriptbasierte Ziele umfassen {{HTMLElement("script")}}-Elemente sowie alle auf [`Worklet`](/de/docs/Web/API/Worklet) basierenden Ziele (einschließlich Unterklassen wie [`AudioWorklet`](/de/docs/Web/API/AudioWorklet)), und die auf [`Worker`](/de/docs/Web/API/Worker) basierenden Ziele, einschließlich [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) und [`SharedWorker`](/de/docs/Web/API/SharedWorker).

## Wert

Eine Zeichenfolge, die den Typ des Inhalts angibt, der von der Anfrage angefordert wird. Dieser Typ ist weitaus breiter als die üblichen Dokumenttyp-Werte (wie `"document"` oder `"manifest"`) und kann kontextuelle Hinweise wie `"image"` oder `"worker"` oder `"audioworklet"` enthalten.

Mögliche Werte sind:

- `""`
  - : Die leere Zeichenfolge ist der Standardwert und wird für Ziele verwendet, die keinen eigenen Wert haben. Dies ist der Wert, wenn Anfragen mit den folgenden APIs (unter anderem) gestellt werden:
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
  - : Das Ziel sind Daten, die für die Nutzung durch eine Audio-Worklet abgerufen werden.
- `"document"`
  - : Das Ziel ist ein Dokument (HTML oder XML).
- `"embed"`
  - : Das Ziel ist eingebetteter Inhalt.
- `"fencedframe"`
  - : Das Ziel ist ein [fenced frame](/de/docs/Web/API/Fenced_frame_API).
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
- `"speculationrules"` {{experimental_inline}} {{non-standard_inline}}
  - : Das Ziel ist ein [speculation rules](/de/docs/Web/API/Speculation_Rules_API) JSON-Dokument.
- `"style"`
  - : Das Ziel ist ein Stil
- `"track"`
  - : Das Ziel ist ein HTML {{HTMLElement("track")}}.
- `"video"`
  - : Das Ziel sind Videodaten.
- `"worker"`
  - : Das Ziel ist ein Worker.
- `"xslt"`
  - : Das Ziel ist eine XSLT-Transformation.

## Beispiele

Im folgenden Schnipsel erstellen wir eine neue Anfrage mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor (für eine Bilddatei im selben Verzeichnis wie das Skript) und speichern dann das Ziel der Anfrage:

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
