---
title: Sec-Fetch-Dest
slug: Web/HTTP/Headers/Sec-Fetch-Dest
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der **`Sec-Fetch-Dest`** [Fetch-Metadaten-Anforderungsheader](/de/docs/Glossary/Fetch_metadata_request_header) gibt das _Ziel_ der Anfrage an. Das bedeutet der Initiator der ursprünglichen Fetch-Anfrage, welches angibt, wo (und wie) die abgerufenen Daten verwendet werden.

Dies ermöglicht Servern zu bestimmen, ob die Bearbeitung einer Anfrage basierend darauf erfolgen soll, ob sie für die erwartete Verwendung geeignet ist. Beispielsweise sollte eine Anfrage mit dem Ziel `audio` Audiodaten anfordern und nicht eine andere Art von Ressource (wie zum Beispiel ein Dokument, das sensible Nutzerdaten enthält).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Fetch-Metadaten-Anforderungsheader](/de/docs/Glossary/Fetch_Metadata_Request_Header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>ja (Präfix <code>Sec-</code>)</td>
    </tr>
    <tr>
      <th scope="row">
        [CORS-gesicherter Anforderungsheader](/de/docs/Glossary/CORS-safelisted_request_header)
      </th>
      <td>nein</td>
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
> Diese Direktiven entsprechen den Werten, die von [`Request.destination`](/de/docs/Web/API/Request/destination) zurückgegeben werden.

- `audio`
  - : Das Ziel sind Audiodaten. Dies könnte von einem HTML-{{HTMLElement("audio")}}-Tag stammen.
- `audioworklet`
  - : Das Ziel sind Daten, die für die Verwendung durch einen Audioworklet abgerufen wurden. Dies könnte von einem Aufruf von [`audioWorklet.addModule()`](/de/docs/Web/API/Worklet/addModule) stammen.
- `document`
  - : Das Ziel ist ein Dokument (HTML oder XML), und die Anfrage ist das Ergebnis einer vom Benutzer initiierten Top-Level-Navigation (z.B. durch Klicken auf einen Link).
- `embed`
  - : Das Ziel ist eingebetteter Inhalt. Dies könnte von einem HTML-{{HTMLElement("embed")}}-Tag stammen.
- `empty`
  - : Das Ziel ist der leere String. Dies wird für Ziele verwendet, die keinen eigenen Wert haben. Beispiele: [`fetch()`](/de/docs/Web/API/Window/fetch), [`navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon), [`EventSource`](/de/docs/Web/API/EventSource), [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), [`WebSocket`](/de/docs/Web/API/WebSocket), usw.
- `fencedframe` {{experimental_inline}}
  - : Das Ziel ist ein [fenced frame](/de/docs/Web/API/Fenced_frame_API).
- `font`
  - : Das Ziel ist eine Schriftart. Dies könnte von CSS {{cssxref("@font-face")}} stammen.
- `frame`
  - : Das Ziel ist ein Frame. Dies könnte von einem HTML-{{HTMLElement("frame")}}-Tag stammen.
- `iframe`
  - : Das Ziel ist ein Inline-Frame. Dies könnte von einem HTML-{{HTMLElement("iframe")}}-Tag stammen.
- `image`
  - : Das Ziel ist ein Bild. Dies könnte von einem HTML-{{HTMLElement("img")}}, SVG-{{SVGElement("image")}}, CSS-{{cssxref("background-image")}}, CSS-{{cssxref("cursor")}}, CSS-{{cssxref("list-style-image")}}, usw. stammen.
- `manifest`
  - : Das Ziel ist ein Manifest. Dies könnte von einem HTML [\<link rel=manifest>](/de/docs/Web/HTML/Attributes/rel/manifest) stammen.
- `object`
  - : Das Ziel ist ein Objekt. Dies könnte von einem HTML-{{HTMLElement("object")}}-Tag stammen.
- `paintworklet`
  - : Das Ziel ist ein Mal-Worklet. Dies könnte von einem Aufruf von [`CSS.PaintWorklet.addModule()`](/de/docs/Web/API/Worklet/addModule) stammen.
- `report`
  - : Das Ziel ist ein Bericht (zum Beispiel ein Bericht über eine Inhalts-Sicherheitsrichtlinie).
- `script`
  - : Das Ziel ist ein Skript. Dies könnte von einem HTML-{{HTMLElement("script")}}-Tag oder einem Aufruf von [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) stammen.
- `serviceworker`
  - : Das Ziel ist ein Service-Worker. Dies könnte von einem Aufruf von [`navigator.serviceWorker.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) stammen.
- `sharedworker`
  - : Das Ziel ist ein Shared Worker. Dies könnte von einem [`SharedWorker`](/de/docs/Web/API/SharedWorker) stammen.
- `style`
  - : Das Ziel ist ein Stil. Dies könnte von einem HTML-{{HTMLElement("link","&lt;link rel=stylesheet&gt;")}} oder einem CSS-{{cssxref("@import")}} stammen.
- `track`
  - : Das Ziel ist ein HTML-Textspur. Dies könnte von einem HTML-{{HTMLElement("track")}}-Tag stammen.
- `video`
  - : Das Ziel sind Videodaten. Dies könnte von einem HTML-{{HTMLElement("video")}}-Tag stammen.
- `webidentity`
  - : Das Ziel ist ein Endpunkt, der mit der Verifizierung der Benutzeridentität verbunden ist. Zum Beispiel wird es in der [FedCM API](/de/docs/Web/API/FedCM_API) verwendet, um die Authentizität von Identitätsanbieter-Endpunkten (IdP) zu überprüfen und vor [CSRF](/de/docs/Glossary/CSRF)-Angriffen zu schützen.
- `worker`
  - : Das Ziel ist ein [`Worker`](/de/docs/Web/API/Worker).
- `xslt`
  - : Das Ziel ist eine XSLT-Transformation.

## Beispiele

Eine Cross-Site-Anfrage, die von einem {{HTMLElement("img")}}-Element generiert wird, würde zu einer Anfrage mit den folgenden HTTP-Anforderungsheadern führen (beachten Sie, dass das Ziel `image` ist):

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

- Verwandte Header

  - {{HTTPHeader("Sec-Fetch-Mode")}}
  - {{HTTPHeader("Sec-Fetch-Site")}}
  - {{HTTPHeader("Sec-Fetch-User")}}

- [Schützen Sie Ihre Ressourcen vor Webangriffen mit Fetch Metadata](https://web.dev/articles/fetch-metadata) (web.dev)
- [Fetch Metadata Request Headers playground](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
