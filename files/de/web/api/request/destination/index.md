---
title: "Anforderung: destination Eigenschaft"
short-title: destination
slug: Web/API/Request/destination
l10n:
  sourceCommit: abdfc17f1b34ce3ef06d6b3922f04524c2b31c7d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`destination`** des **[`Request`](/de/docs/Web/API/Request)**-Interfaces gibt einen String zurück, der den Typ des angeforderten Inhalts beschreibt.

Der String muss einer der folgenden sein: `audio`, `audioworklet`, `document`, `embed`, `fencedframe`, `font`, `frame`, `iframe`, `image`, `json`, `manifest`, `object`, `paintworklet`, `report`, `script`, `sharedworker`, `speculationrules`, `style`, `track`, `video`, `worker` oder `xslt` Strings, oder der leere String, welcher der Standardwert ist.

Der `destination` wird vom {{Glossary("user_agent", "User-Agent")}} verwendet, um zum Beispiel zu bestimmen, welche Regelmenge für CORS-Zwecke zu verwenden ist, oder wie bei komplexen Codepfaden zu navigieren ist, die beeinflussen, wie bestimmte Arten von Anfragen behandelt werden.

Diese Destinationen unterscheiden sich erheblich in ihrer Funktionsweise. Einige sind Datenspeicher, in denen die empfangenen Daten zur späteren Verarbeitung gespeichert werden. Andere basieren auf Skripten, wobei die empfangenen Daten an ein Skript übermittelt werden, indem es aufgerufen und die Daten weitergegeben werden. Skriptbasierte Destinationen umfassen {{HTMLElement("script")}} Elemente sowie alle auf [`Worklet`](/de/docs/Web/API/Worklet) basierenden Destinationen (einschließlich Unterklassen wie [`AudioWorklet`](/de/docs/Web/API/AudioWorklet)) und die auf [`Worker`](/de/docs/Web/API/Worker) basierenden Destinationen, einschließlich [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) und [`SharedWorker`](/de/docs/Web/API/SharedWorker).

## Wert

Ein String, der angibt, welche Art von Inhalt mit der Anfrage angefordert wird. Dieser Typ ist viel breiter als die üblichen Dokumenttypwerte (wie `"document"` oder `"manifest"`) und kann kontextbezogene Hinweise wie `"image"` oder `"worker"` oder `"audioworklet"` enthalten.

Mögliche Werte sind:

- `""`
  - : Der leere String ist der Standardwert und wird für Destinationen verwendet, die keinen eigenen Wert haben. Dies ist der Wert, wenn Anfragen mit folgenden APIs (unter anderem) gemacht werden:
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
  - : Das Ziel sind Daten, die für die Verwendung durch ein Audioworklet abgerufen werden.
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
- `"speculationrules"`
  - : Das Ziel ist ein [speculation rules](/de/docs/Web/API/Speculation_Rules_API) JSON-Dokument.
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

Im folgenden Beispiel erstellen wir eine neue Anfrage mithilfe des [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktors (für eine Bilddatei im selben Verzeichnis wie das Skript), und speichern dann das Ziel der Anfrage:

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
