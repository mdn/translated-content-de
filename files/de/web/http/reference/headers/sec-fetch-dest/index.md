---
title: Sec-Fetch-Dest
slug: Web/HTTP/Reference/Headers/Sec-Fetch-Dest
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTTPSidebar}}

Der HTTP **`Sec-Fetch-Dest`** {{Glossary("fetch_metadata_request_header", "Fetch-Metadaten-Anfrage-Header")}} gibt das _Ziel_ der Anfrage an. Das bedeutet, dass es den Initiator der ursprünglichen Fetch-Anfrage beschreibt, das heißt, wo (und wie) die abgerufenen Daten verwendet werden.

Dies ermöglicht es Servern zu bestimmen, ob eine Anfrage bearbeitet werden soll, basierend darauf, ob sie angemessen für die _erwartete_ Nutzung ist. Zum Beispiel sollte eine Anfrage mit dem Ziel `audio` Audiodaten anfordern und nicht irgendeinen anderen Ressourcentyp (zum Beispiel ein Dokument, das sensible Nutzerinformationen enthält).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Fetch_Metadata_Request_Header", "Fetch-Metadaten-Anfrage-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Ja (<code>Sec-</code>-Präfix)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-Safelisted-Anfrage-Header")}}
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
Sec-Fetch-Dest: manifest
Sec-Fetch-Dest: object
Sec-Fetch-Dest: paintworklet
Sec-Fetch-Dest: report
Sec-Fetch-Dest: script
Sec-Fetch-Dest: serviceworker
Sec-Fetch-Dest: sharedworker
Sec-Fetch-Dest: style
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
  - : Das Ziel sind Audiodaten. Dies könnte von einem HTML-{{HTMLElement("audio")}}-Tag stammen.
- `audioworklet`
  - : Das Ziel sind Daten, die für eine Audio-Worklet verwendet werden. Dies könnte von einem Aufruf zu [`audioWorklet.addModule()`](/de/docs/Web/API/Worklet/addModule) stammen.
- `document`
  - : Das Ziel ist ein Dokument (HTML oder XML), und die Anfrage ist das Ergebnis einer vom Nutzer initiierten Navigation auf oberster Ebene (z. B. durch einen Klick auf einen Link).
- `embed`
  - : Das Ziel ist eingebetteter Inhalt. Dies könnte von einem HTML-{{HTMLElement("embed")}}-Tag stammen.
- `empty`
  - : Das Ziel ist der leere String. Dies wird für Ziele verwendet, die keinen eigenen Wert haben. Zum Beispiel: [`fetch()`](/de/docs/Web/API/Window/fetch), [`navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon), [`EventSource`](/de/docs/Web/API/EventSource), [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), [`WebSocket`](/de/docs/Web/API/WebSocket), etc.
- `fencedframe` {{experimental_inline}}
  - : Das Ziel ist ein [fenced frame](/de/docs/Web/API/Fenced_frame_API).
- `font`
  - : Das Ziel ist eine Schriftart. Dies könnte von CSS {{cssxref("@font-face")}} stammen.
- `frame`
  - : Das Ziel ist ein Frame. Dies könnte von einem HTML-{{HTMLElement("frame")}}-Tag stammen.
- `iframe`
  - : Das Ziel ist ein iframe. Dies könnte von einem HTML-{{HTMLElement("iframe")}}-Tag stammen.
- `image`
  - : Das Ziel ist ein Bild. Dies könnte von einem HTML-{{HTMLElement("img")}}, SVG-{{SVGElement("image")}}, CSS {{cssxref("background-image")}}, CSS {{cssxref("cursor")}}, CSS {{cssxref("list-style-image")}}, etc. stammen.
- `manifest`
  - : Das Ziel ist ein Manifest. Dies könnte von einem HTML [\<link rel=manifest>](/de/docs/Web/HTML/Reference/Attributes/rel/manifest) stammen.
- `object`
  - : Das Ziel ist ein Objekt. Dies könnte von einem HTML-{{HTMLElement("object")}}-Tag stammen.
- `paintworklet`
  - : Das Ziel ist eine Mal-Worklet. Dies könnte von einem Aufruf zu [`CSS.PaintWorklet.addModule()`](/de/docs/Web/API/Worklet/addModule) stammen.
- `report`
  - : Das Ziel ist ein Bericht (zum Beispiel ein Bericht zur Inhalts-Sicherheitsrichtlinie).
- `script`
  - : Das Ziel ist ein Skript. Dies könnte von einem HTML-{{HTMLElement("script")}}-Tag oder einem Aufruf zu [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) stammen.
- `serviceworker`
  - : Das Ziel ist ein Service Worker. Dies könnte von einem Aufruf zu [`navigator.serviceWorker.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) stammen.
- `sharedworker`
  - : Das Ziel ist ein Shared Worker. Dies könnte von einem [`SharedWorker`](/de/docs/Web/API/SharedWorker) stammen.
- `style`
  - : Das Ziel ist ein Stil. Dies könnte von einem HTML {{HTMLElement("link","&lt;link rel=stylesheet&gt;")}} oder einem CSS {{cssxref("@import")}} stammen.
- `track`
  - : Das Ziel ist eine HTML-Textspur. Dies könnte von einem HTML-{{HTMLElement("track")}}-Tag stammen.
- `video`
  - : Das Ziel sind Videodaten. Dies könnte von einem HTML-{{HTMLElement("video")}}-Tag stammen.
- `webidentity`
  - : Das Ziel ist ein Endpunkt zur Überprüfung der Benutzeridentität. Zum Beispiel wird es in der [FedCM-API](/de/docs/Web/API/FedCM_API) verwendet, um die Authentizität von Identitätsanbieter (IdP)-Endpunkten zu überprüfen und gegen {{Glossary("CSRF", "CSRF")}}-Angriffe zu schützen.
- `worker`
  - : Das Ziel ist ein [`Worker`](/de/docs/Web/API/Worker).
- `xslt`
  - : Das Ziel ist eine XSLT-Transformation.

## Beispiele

### Verwendung von Sec-Fetch-Dest

Eine Cross-Site-Anfrage, die von einem {{HTMLElement("img")}}-Element generiert wird, würde zu einer Anfrage mit den folgenden HTTP-Anfrage-Headern führen (beachten Sie, dass das Ziel `image` ist):

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

- {{HTTPHeader("Sec-Fetch-Mode")}}, {{HTTPHeader("Sec-Fetch-Site")}}, {{HTTPHeader("Sec-Fetch-User")}} Fetch-Metadaten-Anfrage-Header
- [Schützen Sie Ihre Ressourcen vor Webangriffen mit Fetch Metadata](https://web.dev/articles/fetch-metadata) (web.dev)
- [Fetch Metadata Request Headers Spielplatz](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
