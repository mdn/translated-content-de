---
title: Sec-Fetch-Dest
slug: Web/HTTP/Headers/Sec-Fetch-Dest
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der **`Sec-Fetch-Dest`** {{Glossary("Fetch metadata request header", "fetch metadata request header")}} gibt das _Ziel_ der Anforderung an. Das ist der Initiator der ursprünglichen Fetch-Anforderung, also wo (und wie) die abgerufenen Daten verwendet werden.

Dies ermöglicht es Servern zu bestimmen, ob eine Anforderung bearbeitet werden soll, basierend darauf, ob sie für die erwartete Nutzung angemessen ist. Zum Beispiel sollte eine Anforderung mit einem `audio` Ziel Audiodaten anfordern und nicht irgendeinen anderen Ressourcentyp (zum Beispiel ein Dokument, das sensible Benutzerinformationen enthält).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Fetch Metadata Request Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>ja (Präfix <code>Sec-</code>)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header")}}
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
> Diese Direktiven entsprechen den Werten, die von {{domxref("Request.destination")}} zurückgegeben werden.

- `audio`
  - : Das Ziel sind Audiodaten. Dies könnte von einem HTML-Tag {{HTMLElement("audio")}} stammen.
- `audioworklet`
  - : Das Ziel sind Daten, die für die Verwendung durch ein Audio-Worklet abgerufen werden. Dies könnte von einem Aufruf zu {{domxref("Worklet.addModule()", "audioWorklet.addModule()")}} stammen.
- `document`
  - : Das Ziel ist ein Dokument (HTML oder XML), und die Anforderung ist das Ergebnis einer vom Benutzer initiierten Navigation auf oberster Ebene (z. B. wenn ein Benutzer auf einen Link klickt).
- `embed`
  - : Das Ziel ist eingebetteter Inhalt. Dies könnte von einem HTML-Tag {{HTMLElement("embed")}} stammen.
- `empty`
  - : Das Ziel ist der leere String. Dies wird für Ziele verwendet, die keinen eigenen Wert haben. Zum Beispiel: {{domxref("Window/fetch", "fetch()")}}, {{domxref("navigator.sendBeacon()")}}, {{domxref("EventSource")}}, {{domxref("XMLHttpRequest")}}, {{domxref("WebSocket")}}, etc.
- `fencedframe` {{experimental_inline}}
  - : Das Ziel ist ein [fenced frame](/de/docs/Web/API/Fenced_frame_API).
- `font`
  - : Das Ziel ist eine Schriftart. Dies könnte von CSS {{cssxref("@font-face")}} stammen.
- `frame`
  - : Das Ziel ist ein Frame. Dies könnte von einem HTML-Tag {{HTMLElement("frame")}} stammen.
- `iframe`
  - : Das Ziel ist ein iframe. Dies könnte von einem HTML-Tag {{HTMLElement("iframe")}} stammen.
- `image`
  - : Das Ziel ist ein Bild. Dies könnte von einem HTML-Tag {{HTMLElement("img")}}, SVG {{SVGElement("image")}}, CSS {{cssxref("background-image")}}, CSS {{cssxref("cursor")}}, CSS {{cssxref("list-style-image")}}, etc. stammen.
- `manifest`
  - : Das Ziel ist ein Manifest. Dies könnte von einem HTML [\<link rel=manifest>](/de/docs/Web/HTML/Attributes/rel/manifest) stammen.
- `object`
  - : Das Ziel ist ein Objekt. Dies könnte von einem HTML-Tag {{HTMLElement("object")}} stammen.
- `paintworklet`
  - : Das Ziel ist ein Paint-Worklet. Dies könnte von einem Aufruf zu {{domxref('Worklet.addModule', 'CSS.PaintWorklet.addModule()')}} stammen.
- `report`
  - : Das Ziel ist ein Bericht (zum Beispiel ein Bericht über Content-Security-Policy).
- `script`
  - : Das Ziel ist ein Skript. Dies könnte von einem HTML-Tag {{HTMLElement("script")}} oder einem Aufruf zu {{domxref("WorkerGlobalScope.importScripts()")}} stammen.
- `serviceworker`
  - : Das Ziel ist ein Service Worker. Dies könnte von einem Aufruf zu {{domxref("ServiceWorkerContainer.register","navigator.serviceWorker.register()")}} stammen.
- `sharedworker`
  - : Das Ziel ist ein Shared Worker. Dies könnte von einem {{domxref("SharedWorker")}} stammen.
- `style`
  - : Das Ziel ist ein Stil. Dies könnte von einem HTML {{HTMLElement("link","&lt;link rel=stylesheet&gt;")}} oder einem CSS {{cssxref("@import")}} stammen.
- `track`
  - : Das Ziel ist ein HTML-Texttrack. Dies könnte von einem HTML-Tag {{HTMLElement("track")}} stammen.
- `video`
  - : Das Ziel sind Videodaten. Dies könnte von einem HTML-Tag {{HTMLElement("video")}} stammen.
- `webidentity`
  - : Das Ziel ist ein Endpunkt, der mit der Überprüfung der Benutzeridentität verbunden ist. Zum Beispiel wird es in der [FedCM API](/de/docs/Web/API/FedCM_API) verwendet, um die Authentizität von Identitätsanbieter-Endpunkten (IdP) zu überprüfen und gegen {{glossary("CSRF")}}-Angriffe zu schützen.
- `worker`
  - : Das Ziel ist ein {{domxref("Worker")}}.
- `xslt`
  - : Das Ziel ist eine XSLT-Transformation.

## Beispiele

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

- Verwandte Header

  - {{HTTPHeader("Sec-Fetch-Mode")}}
  - {{HTTPHeader("Sec-Fetch-Site")}}
  - {{HTTPHeader("Sec-Fetch-User")}}

- [Schützen Sie Ihre Ressourcen vor Webangriffen mit Fetch-Metadaten](https://web.dev/articles/fetch-metadata) (web.dev)
- [Fetch Metadata Request Headers Spielwiese](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
