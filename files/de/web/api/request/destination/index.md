---
title: "Request: destination-Eigenschaft"
short-title: destination
slug: Web/API/Request/destination
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("Fetch API")}}

Die **`destination`** schreibgeschützte Eigenschaft des **{{domxref("Request")}}**-Interfaces gibt einen String zurück, der den Typ des angeforderten Inhalts beschreibt.

Der String muss einer der folgenden sein: `audio`, `audioworklet`, `document`, `embed`, `fencedframe`, `font`, `frame`, `iframe`, `image`, `json`, `manifest`, `object`, `paintworklet`, `report`, `script`, `sharedworker`, `style`, `track`, `video`, `worker` oder `xslt`-Strings, oder der leere String, der den Standardwert darstellt.

Die `destination` wird vom {{Glossary("user agent")}} verwendet, um z.B. zu helfen, die zu befolgenden Regeln für CORS-Zwecke zu bestimmen oder wie komplexe Codepfade navigiert werden, die beeinflussen, wie bestimmte Typen von Anfragen behandelt werden.

Diese Destinationen unterscheiden sich erheblich in ihrer Funktionsweise. Einige sind Datenbehälter, in denen die empfangenen Daten zur späteren Verarbeitung gespeichert werden. Andere basieren auf Skripts, bei denen die empfangenen Daten an ein Skript geliefert werden, indem es aufgerufen wird und die Daten übergeben werden. Skriptbasierte Destinationen umfassen {{HTMLElement("script")}}-Elemente sowie alle auf {{domxref("Worklet")}}-basierenden Destinationen (einschließlich Unterklassen wie {{domxref("AudioWorklet")}}) und die auf {{domxref("Worker")}}-basierenden Destinationen, einschließlich {{domxref("ServiceWorker")}} und {{domxref("SharedWorker")}}.

## Wert

Ein String, der den Inhaltstyp angibt, nach dem die Anfrage fragt. Dieser Typ ist viel breiter als die üblichen Dokumenttypwerte (wie `"document"` oder `"manifest"`) und kann kontextuelle Hinweise wie `"image"`, `"worker"` oder `"audioworklet"` beinhalten.

Mögliche Werte sind:

- `""`

  - : Der leere String ist der Standardwert und wird für Destinationen verwendet, die keinen eigenen Wert haben. Das ist der Wert, wenn Anfragen mit den folgenden APIs (unter anderem) gemacht werden:
    - [`<a ping>`](/de/docs/Web/HTML/Element/a#ping)
    - [`<area ping>`](/de/docs/Web/HTML/Element/area#ping)
    - {{domxref("Cache")}}
    - {{domxref("EventSource")}}
    - {{domxref("Window/fetch", "fetch()")}}
    - {{domxref("navigator.sendBeacon()")}}
    - {{domxref("WebSocket")}}
    - {{domxref("XMLHttpRequest")}}

- `"audio"`
  - : Das Ziel sind Audiodaten.
- `"audioworklet"`
  - : Das Ziel sind Daten, die für die Nutzung durch einen Audio-Worklet abgerufen werden.
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

Im folgenden Beispiel erstellen wir eine neue Anfrage mit dem {{domxref("Request.Request", "Request()")}}-Konstruktor (für eine Bilddatei im selben Verzeichnis wie das Skript) und speichern dann die Destination der Anfrage:

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
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
