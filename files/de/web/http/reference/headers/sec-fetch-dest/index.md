---
title: Sec-Fetch-Dest header
short-title: Sec-Fetch-Dest
slug: Web/HTTP/Reference/Headers/Sec-Fetch-Dest
l10n:
  sourceCommit: 6aefc4cf3fcf5b340d5090f207e3a1a8a66c566f
---

Der HTTP-**`Sec-Fetch-Dest`**-[Fetch-Metadata-Request-Header](/de/docs/Web/HTTP/Guides/Fetch_metadata) gibt das _Ziel_ der Anfrage an.
Dies ist der Initiator der ursprünglichen Fetch-Anfrage, also wo (und wie) die abgerufenen Daten verwendet werden.

Dadurch können Server entscheiden, ob sie eine Anfrage bearbeiten, abhängig davon, ob sie für die _erwartete_ Verwendung angemessen ist. Beispielsweise sollte eine Anfrage mit dem Ziel `audio` Audiodaten und keinen anderen Ressourcentyp anfordern (beispielsweise ein Dokument, das sensible Benutzerinformationen enthält).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Fetch_Metadata_Request_Header", "Fetch-Metadata-Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Ja (<code>Sec-</code>-Präfix)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Request-Header")}}
      </th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-Fetch-Dest: audio
Sec-Fetch-Dest: audioworklet
Sec-Fetch-Dest: document
Sec-Fetch-Dest: embed
Sec-Fetch-Dest: empty
Sec-Fetch-Dest: fencedframe
Sec-Fetch-Dest: font
Sec-Fetch-Dest: frame
Sec-Fetch-Dest: iframe
Sec-Fetch-Dest: image
Sec-Fetch-Dest: json
Sec-Fetch-Dest: manifest
Sec-Fetch-Dest: object
Sec-Fetch-Dest: paintworklet
Sec-Fetch-Dest: report
Sec-Fetch-Dest: script
Sec-Fetch-Dest: serviceworker
Sec-Fetch-Dest: sharedworker
Sec-Fetch-Dest: style
Sec-Fetch-Dest: text
Sec-Fetch-Dest: track
Sec-Fetch-Dest: video
Sec-Fetch-Dest: webidentity
Sec-Fetch-Dest: worker
Sec-Fetch-Dest: xslt
```

Server sollten diesen Header ignorieren, wenn er einen anderen Wert enthält.

## Direktiven

> [!NOTE]
> Diese Direktiven entsprechen den von [`Request.destination`](/de/docs/Web/API/Request/destination) zurückgegebenen Werten.

- `audio`
  - : Das Ziel sind Audiodaten. Dies kann von einem HTML-Tag {{HTMLElement("audio")}} stammen.
- `audioworklet`
  - : Das Ziel sind Daten, die zur Verwendung durch einen Audio-Worklet abgerufen werden. Dies kann von einem Aufruf von [`audioWorklet.addModule()`](/de/docs/Web/API/Worklet/addModule) stammen.
- `document`
  - : Das Ziel ist ein Dokument (HTML oder XML), und die Anfrage ist das Ergebnis einer vom Benutzer initiierten Navigation der obersten Ebene (z. B. wenn ein Benutzer auf einen Link klickt).
- `embed`
  - : Das Ziel ist eingebetteter Inhalt. Dies kann von einem HTML-Tag {{HTMLElement("embed")}} stammen.
- `empty`
  - : Das Ziel ist die leere Zeichenkette. Diese wird für Ziele verwendet, die keinen eigenen Wert haben. Zum Beispiel: [`fetch()`](/de/docs/Web/API/Window/fetch), [`navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon), [`EventSource`](/de/docs/Web/API/EventSource), [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), [`WebSocket`](/de/docs/Web/API/WebSocket) usw.
- `fencedframe` {{experimental_inline}}
  - : Das Ziel ist ein [fenced frame](/de/docs/Web/API/Fenced_frame_API).
- `font`
  - : Das Ziel ist eine Schriftart. Dies kann von CSS {{cssxref("@font-face")}} stammen.
- `frame`
  - : Das Ziel ist ein Frame. Dies kann von einem HTML-Tag {{HTMLElement("frame")}} stammen.
- `iframe`
  - : Das Ziel ist ein iframe. Dies kann von einem HTML-Tag {{HTMLElement("iframe")}} stammen.
- `image`
  - : Das Ziel ist ein Bild. Dies kann von einem HTML-Tag {{HTMLElement("img")}}, SVG {{SVGElement("image")}}, CSS {{cssxref("background-image")}}, CSS {{cssxref("cursor")}}, CSS {{cssxref("list-style-image")}} usw. stammen.
- `json`
  - : Das Ziel ist JSON. Dies kann von einem JavaScript-[`import with { type: "json" }`](/de/docs/Web/JavaScript/Reference/Statements/import/with#json_modules_type_json) stammen.
- `manifest`
  - : Das Ziel ist ein Manifest. Dies kann von einem HTML-[\<link rel=manifest>](/de/docs/Web/HTML/Reference/Attributes/rel/manifest) stammen.
- `object`
  - : Das Ziel ist ein Objekt. Dies kann von einem HTML-Tag {{HTMLElement("object")}} stammen.
- `paintworklet`
  - : Das Ziel ist ein Paint-Worklet. Dies kann von einem Aufruf von [`CSS.PaintWorklet.addModule()`](/de/docs/Web/API/Worklet/addModule) stammen.
- `report`
  - : Das Ziel ist ein Bericht (beispielsweise ein Content-Security-Policy-Bericht).
- `script`
  - : Das Ziel ist ein Skript. Dies kann von einem HTML-Tag {{HTMLElement("script")}} oder einem Aufruf von [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) stammen.
- `serviceworker`
  - : Das Ziel ist ein Service Worker. Dies kann von einem Aufruf von [`navigator.serviceWorker.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) stammen.
- `sharedworker`
  - : Das Ziel ist ein Shared Worker. Dies kann von einem [`SharedWorker`](/de/docs/Web/API/SharedWorker) stammen.
- `style`
  - : Das Ziel ist ein Stylesheet. Dies kann von einem HTML-{{HTMLElement("link","&lt;link rel=stylesheet&gt;")}}, einem CSS-{{cssxref("@import")}} oder einem JavaScript-[`import with { type: "css" }`](/de/docs/Web/JavaScript/Reference/Statements/import/with#css_modules_type_css) stammen.
- `text`
  - : Das Ziel ist Klartext. Dies kann von einem JavaScript-[`import with { type: "text" }`](/de/docs/Web/JavaScript/Reference/Statements/import/with#text_modules_type_text) stammen.
- `track`
  - : Das Ziel ist eine HTML-Textspur. Dies kann von einem HTML-Tag {{HTMLElement("track")}} stammen.
- `video`
  - : Das Ziel sind Videodaten. Dies kann von einem HTML-Tag {{HTMLElement("video")}} stammen.
- `webidentity`
  - : Das Ziel ist ein Endpunkt, der mit der Überprüfung der Benutzeridentität verknüpft ist. Beispielsweise wird es in der [FedCM API](/de/docs/Web/API/FedCM_API) verwendet, um die Authentizität von Endpunkten von Identitätsanbietern (IdP) zu überprüfen und vor {{Glossary("CSRF", "CSRF")}}-Angriffen zu schützen.
- `worker`
  - : Das Ziel ist ein [`Worker`](/de/docs/Web/API/Worker).
- `xslt`
  - : Das Ziel ist eine XSLT-Transformation.

## Beispiele

### Verwendung von Sec-Fetch-Dest

Eine durch ein {{HTMLElement("img")}}-Element erzeugte websiteübergreifende Anfrage würde zu einer Anfrage mit den folgenden HTTP-Request-Headern führen (beachten Sie, dass das Ziel `image` ist):

```http
Sec-Fetch-Dest: image
Sec-Fetch-Mode: no-cors
Sec-Fetch-Site: cross-site
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Sec-Fetch-Mode")}}, {{HTTPHeader("Sec-Fetch-Site")}}, {{HTTPHeader("Sec-Fetch-User")}} Fetch-Metadata-Request-Header
- [Schützen Sie Ihre Ressourcen mit Fetch Metadata vor Webangriffen](https://web.dev/articles/fetch-metadata) (web.dev)
- [Fetch-Metadata-Request-Headers-Spielplatz](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
