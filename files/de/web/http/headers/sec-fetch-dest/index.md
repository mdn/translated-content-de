---
title: Sec-Fetch-Dest
slug: Web/HTTP/Headers/Sec-Fetch-Dest
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der **`Sec-Fetch-Dest`** {{Glossary("Fetch metadata request header", "fetch metadata request header")}} gibt das _Ziel_ der Anfrage an. Das bedeutet, der Auslöser der ursprünglichen Fetch-Anfrage wird angegeben, wo (und wie) die abgerufenen Daten verwendet werden.

Dies ermöglicht es Servern zu bestimmen, ob eine Anfrage bedient werden soll, basierend darauf, ob sie für die Verwendung, wie sie _erwartet_ wird, geeignet ist. Zum Beispiel sollte eine Anfrage mit dem Zieltyp `audio` Audiodaten anfordern und nicht eine andere Art von Ressource (zum Beispiel ein Dokument, das sensible Benutzerinformationen enthält).

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
  - : Das Ziel sind Audiodaten. Diese stammen möglicherweise aus einem HTML-{{HTMLElement("audio")}}-Tag.
- `audioworklet`
  - : Das Ziel sind Daten, die von einem Audio-Worklet verwendet werden. Diese stammen möglicherweise aus einem Aufruf von {{domxref("Worklet.addModule()", "audioWorklet.addModule()")}}.
- `document`
  - : Das Ziel ist ein Dokument (HTML oder XML), und die Anfrage ist das Ergebnis einer vom Benutzer initiierten Navigation auf oberster Ebene (z. B. durch Klicken eines Links).
- `embed`
  - : Das Ziel sind eingebettete Inhalte. Diese stammen möglicherweise aus einem HTML-{{HTMLElement("embed")}}-Tag.
- `empty`
  - : Das Ziel ist der leere String. Dies wird für Ziele verwendet, die keinen eigenen Wert haben. Zum Beispiel: {{domxref("Window/fetch", "fetch()")}}, {{domxref("navigator.sendBeacon()")}}, {{domxref("EventSource")}}, {{domxref("XMLHttpRequest")}}, {{domxref("WebSocket")}}, etc.
- `fencedframe` {{experimental_inline}}
  - : Das Ziel ist ein [fenced frame](/de/docs/Web/API/Fenced_frame_API).
- `font`
  - : Das Ziel ist eine Schriftart. Diese stammt möglicherweise aus CSS {{cssxref("@font-face")}}.
- `frame`
  - : Das Ziel ist ein Frame. Diese stammen möglicherweise aus einem HTML-{{HTMLElement("frame")}}-Tag.
- `iframe`
  - : Das Ziel ist ein Iframe. Diese stammen möglicherweise aus einem HTML-{{HTMLElement("iframe")}}-Tag.
- `image`
  - : Das Ziel ist ein Bild. Diese stammen möglicherweise aus einem HTML-{{HTMLElement("img")}}, SVG-{{SVGElement("image")}}, CSS-{{cssxref("background-image")}}, CSS-{{cssxref("cursor")}}, CSS-{{cssxref("list-style-image")}}, etc.
- `manifest`
  - : Das Ziel ist ein Manifest. Diese stammen möglicherweise aus einem HTML-[\<link rel=manifest>](/de/docs/Web/HTML/Attributes/rel/manifest).
- `object`
  - : Das Ziel ist ein Objekt. Diese stammen möglicherweise aus einem HTML-{{HTMLElement("object")}}-Tag.
- `paintworklet`
  - : Das Ziel ist ein Paint Worklet. Diese stammen möglicherweise aus einem Aufruf von {{domxref('Worklet.addModule', 'CSS.PaintWorklet.addModule()')}}.
- `report`
  - : Das Ziel ist ein Bericht (zum Beispiel ein Bericht zur Content-Security-Policy).
- `script`
  - : Das Ziel ist ein Skript. Diese stammen möglicherweise aus einem HTML-{{HTMLElement("script")}}-Tag oder einem Aufruf von {{domxref("WorkerGlobalScope.importScripts()")}}.
- `serviceworker`
  - : Das Ziel ist ein Service Worker. Diese stammen möglicherweise aus einem Aufruf von {{domxref("ServiceWorkerContainer.register","navigator.serviceWorker.register()")}}.
- `sharedworker`
  - : Das Ziel ist ein Shared Worker. Diese stammen möglicherweise aus einem {{domxref("SharedWorker")}}.
- `style`
  - : Das Ziel ist ein Stil. Diese stammen möglicherweise aus einem HTML-{{HTMLElement("link","&lt;link rel=stylesheet&gt;")}} oder einem CSS-{{cssxref("@import")}}.
- `track`
  - : Das Ziel ist eine HTML-Textspur. Diese stammen möglicherweise aus einem HTML-{{HTMLElement("track")}}-Tag.
- `video`
  - : Das Ziel sind Videodaten. Diese stammen möglicherweise aus einem HTML-{{HTMLElement("video")}}-Tag.
- `webidentity`
  - : Das Ziel ist ein Endpunkt, der mit der Verifizierung der Benutzeridentität verbunden ist. Zum Beispiel wird es in der [FedCM API](/de/docs/Web/API/FedCM_API) verwendet, um die Authentizität von Identitätsprovider-Endpunkten (IdP) zu überprüfen und gegen {{glossary("CSRF")}}-Angriffe zu schützen.
- `worker`
  - : Das Ziel ist ein {{domxref("Worker")}}.
- `xslt`
  - : Das Ziel ist eine XSLT-Transformation.

## Beispiele

Eine Cross-Site-Anfrage, die von einem {{HTMLElement("img")}}-Element erzeugt wird, würde zu einer Anfrage mit den folgenden HTTP-Anfrage-Headern führen (beachten Sie, dass das Ziel `image` ist):

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
