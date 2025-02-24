---
title: Sec-Fetch-Dest
slug: Web/HTTP/Headers/Sec-Fetch-Dest
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`Sec-Fetch-Dest`** {{Glossary("fetch_metadata_request_header", "Fetch-Metadaten-Anforderungs-Header")}} gibt das _Ziel_ der Anforderung an.
Das ist der Initiator der ursprünglichen Fetch-Anforderung, also der Ort (und die Art), wie die abgerufenen Daten genutzt werden.

Dies ermöglicht es Servern, zu bestimmen, ob sie eine Anforderung bedienen sollten, basierend darauf, ob sie für die erwartete Nutzung geeignet ist. Beispielsweise sollte eine Anforderung mit dem Ziel `audio` Audiodaten anfordern, nicht irgendeine andere Art von Ressource (zum Beispiel ein Dokument, das sensible Benutzerdaten enthält).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Fetch_Metadata_Request_Header", "Fetch-Metadaten-Anforderungs-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Ja (<code>Sec-</code>-Präfix)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Anforderungs-Header")}}
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
> Diese Direktiven entsprechen den Werten, die von [`Request.destination`](/de/docs/Web/API/Request/destination) zurückgegeben werden.

- `audio`
  - : Das Ziel sind Audiodaten. Dies könnte von einem HTML-{{HTMLElement("audio")}}-Tag stammen.
- `audioworklet`
  - : Das Ziel sind Daten, die für die Verwendung durch ein Audioworklet abgerufen werden. Dies könnte von einem Aufruf von [`audioWorklet.addModule()`](/de/docs/Web/API/Worklet/addModule) stammen.
- `document`
  - : Das Ziel ist ein Dokument (HTML oder XML), und die Anforderung ist das Ergebnis einer vom Benutzer initiierten Navigation auf oberster Ebene (zum Beispiel, wenn ein Benutzer auf einen Link klickt).
- `embed`
  - : Das Ziel sind eingebettete Inhalte. Dies könnte von einem HTML-{{HTMLElement("embed")}}-Tag stammen.
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
  - : Das Ziel ist ein Bild. Dies könnte von einem HTML-{{HTMLElement("img")}}, SVG-{{SVGElement("image")}}, CSS-{{cssxref("background-image")}}, CSS-{{cssxref("cursor")}}, CSS-{{cssxref("list-style-image")}}, etc. stammen.
- `manifest`
  - : Das Ziel ist ein Manifest. Dies könnte von einem HTML-[\<link rel=manifest>](/de/docs/Web/HTML/Attributes/rel/manifest) stammen.
- `object`
  - : Das Ziel ist ein Objekt. Dies könnte von einem HTML-{{HTMLElement("object")}}-Tag stammen.
- `paintworklet`
  - : Das Ziel ist ein Paint-Worklet. Dies könnte von einem Aufruf von [`CSS.PaintWorklet.addModule()`](/de/docs/Web/API/Worklet/addModule) stammen.
- `report`
  - : Das Ziel ist ein Bericht (zum Beispiel ein Bericht über Inhalts-Sicherheitsrichtlinien).
- `script`
  - : Das Ziel ist ein Skript. Dies könnte von einem HTML-{{HTMLElement("script")}}-Tag oder einem Aufruf von [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) stammen.
- `serviceworker`
  - : Das Ziel ist ein Service-Worker. Dies könnte von einem Aufruf von [`navigator.serviceWorker.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) stammen.
- `sharedworker`
  - : Das Ziel ist ein Shared Worker. Dies könnte von einem [`SharedWorker`](/de/docs/Web/API/SharedWorker) stammen.
- `style`
  - : Das Ziel ist ein Stil. Dies könnte von einem HTML-{{HTMLElement("link","&lt;link rel=stylesheet&gt;")}} oder einem CSS-{{cssxref("@import")}} stammen.
- `track`
  - : Das Ziel ist ein HTML-Texttrack. Dies könnte von einem HTML-{{HTMLElement("track")}}-Tag stammen.
- `video`
  - : Das Ziel sind Videodaten. Dies könnte von einem HTML-{{HTMLElement("video")}}-Tag stammen.
- `webidentity`
  - : Das Ziel ist ein Endpunkt, der mit der Verifizierung der Benutzeridentität verbunden ist. Zum Beispiel wird es im [FedCM API](/de/docs/Web/API/FedCM_API) verwendet, um die Authentizität der Endpunkte des Identitätsanbieters (IdP) zu überprüfen und sich gegen {{Glossary("CSRF", "CSRF")}}-Angriffe abzusichern.
- `worker`
  - : Das Ziel ist ein [`Worker`](/de/docs/Web/API/Worker).
- `xslt`
  - : Das Ziel ist eine XSLT-Transformation.

## Beispiele

### Verwendung von Sec-Fetch-Dest

Eine Cross-Site-Anforderung, die von einem {{HTMLElement("img")}}-Element generiert wird, würde zu einer Anforderung mit den folgenden HTTP-Anforderungs-Headern führen (beachten Sie, dass das Ziel `image` ist):

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

- {{HTTPHeader("Sec-Fetch-Mode")}}, {{HTTPHeader("Sec-Fetch-Site")}}, {{HTTPHeader("Sec-Fetch-User")}} Fetch-Metadaten-Anforderungs-Header
- [Schützen Sie Ihre Ressourcen vor Webangriffen mit Fetch Metadata](https://web.dev/articles/fetch-metadata) (web.dev)
- [Fetch Metadata Request Headers playground](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
