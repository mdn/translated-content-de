---
title: "Request: destination-Eigenschaft"
short-title: destination
slug: Web/API/Request/destination
l10n:
  sourceCommit: 11e09e7c584658fbfbecd2f00ae66e546cd54cc0
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`destination`** schreibgeschützte Eigenschaft der **[`Request`](/de/docs/Web/API/Request)**-Schnittstelle gibt einen String zurück, der den angeforderten Inhaltstyp beschreibt.

Der String muss einer der folgenden Werte sein: `audio`, `audioworklet`, `document`, `embed`, `fencedframe`, `font`, `frame`, `iframe`, `image`, `json`, `manifest`, `object`, `paintworklet`, `report`, `script`, `sharedworker`, `speculationrules`, `style`, `track`, `video`, `worker` oder `xslt`. Der leere String ist der Standardwert.

Die `destination` wird vom {{Glossary("user_agent", "User-Agent")}} verwendet, um beispielsweise zu bestimmen, welche Regelmenge für CORS-Zwecke anzuwenden ist oder wie schwierig zu navigierende Codewege behandelt werden, die beeinflussen, wie bestimmte Anfragetypen gehandhabt werden.

Diese Zielorte unterscheiden sich erheblich in ihrer Funktionsweise. Einige sind Datenempfänger, bei denen die empfangenen Daten zur späteren Verarbeitung gespeichert werden. Andere sind skriptbasiert, wobei die empfangenen Daten an ein Skript weitergegeben werden, indem es aufgerufen wird und die Daten übergeben werden.
Skriptbasierte Zielorte umfassen {{HTMLElement("script")}}-Elemente sowie alle auf [`Worklet`](/de/docs/Web/API/Worklet) basierenden Zielorte (einschließlich Unterklassen wie [`AudioWorklet`](/de/docs/Web/API/AudioWorklet)) und die auf [`Worker`](/de/docs/Web/API/Worker) basierenden Zielorte, einschließlich [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) und [`SharedWorker`](/de/docs/Web/API/SharedWorker).

## Wert

Ein String, der den Inhaltstyp angibt, den die Anfrage anfordert. Dieser Typ ist viel breiter als die üblichen Dokumenttyp-Werte (wie `"document"` oder `"manifest"`) und kann kontextbezogene Hinweise wie `"image"` oder `"worker"` oder `"audioworklet"` beinhalten.

Mögliche Werte sind:

- `""`
  - : Der leere String ist der Standardwert und wird für Zielorte verwendet, die keinen eigenen Wert haben. Dies ist der Wert, wenn Anfragen mit den folgenden APIs gestellt werden (unter anderem):
    - [`<a ping>`](/de/docs/Web/HTML/Reference/Elements/a#ping)
    - [`<area ping>`](/de/docs/Web/HTML/Reference/Elements/area#ping)
    - [`Cache`](/de/docs/Web/API/Cache)
    - [`EventSource`](/de/docs/Web/API/EventSource)
    - [`fetch()`](/de/docs/Web/API/Window/fetch)
    - [`navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon)
    - [`WebSocket`](/de/docs/Web/API/WebSocket)
    - [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)

- `"audio"`
  - : Das Ziel ist Audiodaten.
- `"audioworklet"`
  - : Das Ziel sind Daten, die für die Verwendung durch ein Audio Worklet abgerufen werden.
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
  - : Das Ziel ist ein JSON-Dokument mit [Speculation Rules](/de/docs/Web/API/Speculation_Rules_API).
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

Im folgenden Schnipsel erstellen wir eine neue Anfrage mit dem [`Request()`](/de/docs/Web/API/Request/Request) Konstruktor (für eine Bilddatei im selben Verzeichnis wie das Skript) und speichern dann das Ziel der Anfrage:

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
