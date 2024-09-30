---
title: "Request: destination-Eigenschaft"
short-title: destination
slug: Web/API/Request/destination
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("Fetch API")}}

Die schreibgeschützte Eigenschaft **`destination`** des **[`Request`](/de/docs/Web/API/Request)**-Interfaces gibt einen String zurück, der den Typ des angeforderten Inhalts beschreibt.

Der String muss einer der folgenden sein: `audio`, `audioworklet`, `document`, `embed`, `fencedframe`, `font`, `frame`, `iframe`, `image`, `json`, `manifest`, `object`, `paintworklet`, `report`, `script`, `sharedworker`, `style`, `track`, `video`, `worker` oder `xslt`, oder der leere String, welcher der Standardwert ist.

Das `destination` wird vom [User-Agent](/de/docs/Glossary/user_agent) verwendet, um zum Beispiel zu bestimmen, welche Regeln für CORS-Zwecke zu befolgen sind oder wie komplizierte Codepfade navigiert werden, die die Behandlung bestimmter Anfragearten beeinflussen.

Diese Destinationen unterscheiden sich erheblich in ihrer Funktionsweise. Einige sind Datenspeicher, in denen die empfangenen Daten zur späteren Verarbeitung gespeichert werden. Andere sind skriptbasiert, wobei die empfangenen Daten einem Skript überliefert werden, indem sie aufgerufen und die Daten übergeben werden. Skriptbasierte Destinationen beinhalten {{HTMLElement("script")}}-Elemente sowie Ziele, die auf [`Worklet`](/de/docs/Web/API/Worklet) basieren (einschließlich Unterklassen wie [`AudioWorklet`](/de/docs/Web/API/AudioWorklet)) und die auf [`Worker`](/de/docs/Web/API/Worker) basieren, einschließlich [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) und [`SharedWorker`](/de/docs/Web/API/SharedWorker).

## Wert

Ein String, der den Typ des Inhalts angibt, der durch die Anfrage angefordert wird. Dieser Typ ist viel breiter als die üblichen Dokumenttypen (wie `"document"` oder `"manifest"`) und kann kontextbezogene Hinweise wie `"image"`, `"worker"` oder `"audioworklet"` enthalten.

Mögliche Werte sind:

- `""`

  - : Der leere String ist der Standardwert und wird für Destinationen verwendet, die keinen eigenen Wert haben. Dies ist der Wert, wenn Anfragen mit den folgenden APIs gestellt werden (unter anderem):
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
  - : Das Ziel sind Daten, die durch ein Audio-Worklet verwendet werden.
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
  - : Das Ziel ist ein HTML-{{HTMLElement("track")}}.
- `"video"`
  - : Das Ziel sind Videodaten.
- `"worker"`
  - : Das Ziel ist ein Worker.
- `"xslt"`
  - : Das Ziel ist eine XSLT-Transformation.

## Beispiele

Im folgenden Code-Snippet erstellen wir eine neue Anfrage mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor (für eine Bilddatei im gleichen Verzeichnis wie das Skript) und speichern dann das Ziel der Anfrage:

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
