---
title: "Request: destination-Eigenschaft"
short-title: destination
slug: Web/API/Request/destination
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`destination`** der **[`Request`](/de/docs/Web/API/Request)**-Schnittstelle gibt einen String zurück, der den Typ des angeforderten Inhalts beschreibt.

Der String muss einer der folgenden sein: `audio`, `audioworklet`, `document`, `embed`, `fencedframe`, `font`, `frame`, `iframe`, `image`, `json`, `manifest`, `object`, `paintworklet`, `report`, `script`, `sharedworker`, `style`, `track`, `video`, `worker` oder `xslt`. Alternativ kann es der leere String sein, was dem Standardwert entspricht.

Die `destination`-Eigenschaft wird vom {{Glossary("user_agent", "User-Agent")}} verwendet, um beispielsweise zu bestimmen, welche Regeln für CORS-Zwecke zu befolgen sind oder wie komplizierte Codepfade gehandhabt werden, die beeinflussen, wie bestimmte Anfragen behandelt werden.

Diese Ziele unterscheiden sich erheblich in ihrer Funktionsweise. Einige sind Datenspeicher, in denen die empfangenen Daten zur späteren Verarbeitung gespeichert werden. Andere sind skriptbasiert, wobei die empfangenen Daten an ein Skript übergeben und zur Verarbeitung übergeben werden. Skriptbasierte Ziele umfassen {{HTMLElement("script")}}-Elemente sowie alle [`Worklet`](/de/docs/Web/API/Worklet)-basierten Ziele (einschließlich Unterklassen wie [`AudioWorklet`](/de/docs/Web/API/AudioWorklet)) und die [`Worker`](/de/docs/Web/API/Worker)-basierten Ziele, einschließlich [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) und [`SharedWorker`](/de/docs/Web/API/SharedWorker).

## Wert

Ein String, der den Inhaltstyp beschreibt, nach dem die Anfrage fragt. Dieser Typ ist viel breiter als die üblichen Dokumenttypen (wie `"document"` oder `"manifest"`) und kann kontextbezogene Hinweise wie `"image"` oder `"worker"` oder `"audioworklet"` enthalten.

Mögliche Werte sind:

- `""`

  - : Der leere String ist der Standardwert und wird für Ziele verwendet, die keinen eigenen Wert haben. Dies ist der Wert, wenn Anfragen mit den folgenden APIs gestellt werden (unter anderem):
    - [`<a ping>`](/de/docs/Web/HTML/Element/a#ping)
    - [`<area ping>`](/de/docs/Web/HTML/Element/area#ping)
    - [`Cache`](/de/docs/Web/API/Cache)
    - [`EventSource`](/de/docs/Web/API/EventSource)
    - [`fetch()`](/de/docs/Web/API/Window/fetch)
    - [`navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon)
    - [`WebSocket`](/de/docs/Web/API/WebSocket)
    - [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)

- `"audio"`
  - : Das Ziel sind Audiodaten.
- `"audioworklet"`
  - : Das Ziel sind Daten, die für die Verwendung durch ein Audio-Worklet abgerufen werden.
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
- `"style"`
  - : Das Ziel ist ein Stil.
- `"track"`
  - : Das Ziel ist ein HTML {{HTMLElement("track")}}.
- `"video"`
  - : Das Ziel sind Videodaten.
- `"worker"`
  - : Das Ziel ist ein Worker.
- `"xslt"`
  - : Das Ziel ist eine XSLT-Transformation.

## Beispiele

Im folgenden Beispiel erstellen wir eine neue Anfrage mit dem [`Request()`](/de/docs/Web/API/Request/Request) Konstruktor (für eine Bilddatei im gleichen Verzeichnis wie das Skript) und speichern dann das Ziel der Anfrage:

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
