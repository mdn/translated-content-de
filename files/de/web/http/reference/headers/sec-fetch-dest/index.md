---
title: Sec-Fetch-Dest header
short-title: Sec-Fetch-Dest
slug: Web/HTTP/Reference/Headers/Sec-Fetch-Dest
l10n:
  sourceCommit: 7e4e8954972d77196e4beedca4a3f8610da34dc9
---

Der HTTP-[Fetch-Metadata-Request-Header](/de/docs/Web/HTTP/Guides/Fetch_metadata) **`Sec-Fetch-Dest`** gibt die _Destination_ der Anfrage an. Sie bezeichnet den Auslöser der ursprünglichen Fetch-Anfrage und damit, wo und wie die abgerufenen Daten verwendet werden.

So können Server entscheiden, ob sie eine Anfrage bearbeiten, indem sie prüfen, ob die angeforderte Ressource zur _erwarteten_ Verwendung passt. Eine Anfrage mit der Destination `audio` sollte beispielsweise Audiodaten anfordern und keine andere Ressource, etwa ein Dokument mit sensiblen Benutzerinformationen.

Der Header ist nur in Anfragen an [potenziell vertrauenswürdige URLs](/de/docs/Web/Security/Defenses/Secure_Contexts#potentially_trustworthy_urls) enthalten.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Fetch_Metadata_Request_Header", "Fetch-Metadata-Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Ja (Präfix <code>Sec-</code>)</td>
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
> Diese Direktiven entsprechen den Werten, die [`Request.destination`](/de/docs/Web/API/Request/destination) zurückgibt.

- `audio`
  - : Die Destination sind Audiodaten. Die Anfrage kann von einem HTML-{{HTMLElement("audio")}}-Element ausgehen.
- `audioworklet`
  - : Die Destination sind Daten, die zur Verwendung durch einen Audio Worklet abgerufen werden. Die Anfrage kann von einem Aufruf von [`audioWorklet.addModule()`](/de/docs/Web/API/Worklet/addModule) ausgehen.
- `document`
  - : Die Destination ist ein Dokument (HTML oder XML). Die Anfrage ergibt sich aus einer vom Benutzer ausgelösten Navigation auf oberster Ebene, beispielsweise durch das Anklicken eines Links.
- `embed`
  - : Die Destination sind eingebettete Inhalte. Die Anfrage kann von einem HTML-{{HTMLElement("embed")}}-Element ausgehen.
- `empty`
  - : Die Destination ist die leere Zeichenfolge. Dieser Wert wird für Destinationen verwendet, die keinen eigenen Wert haben, beispielsweise [`fetch()`](/de/docs/Web/API/Window/fetch), [`navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon), [`EventSource`](/de/docs/Web/API/EventSource), [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) oder [`WebSocket`](/de/docs/Web/API/WebSocket).
- `fencedframe` {{experimental_inline}}
  - : Die Destination ist ein [fenced frame](/de/docs/Web/API/Fenced_frame_API).
- `font`
  - : Die Destination ist eine Schriftart. Die Anfrage kann von CSS {{cssxref("@font-face")}} ausgehen.
- `frame`
  - : Die Destination ist ein Frame. Die Anfrage kann von einem HTML-{{HTMLElement("frame")}}-Element ausgehen.
- `iframe`
  - : Die Destination ist ein iframe. Die Anfrage kann von einem HTML-{{HTMLElement("iframe")}}-Element ausgehen.
- `image`
  - : Die Destination ist ein Bild. Die Anfrage kann beispielsweise von HTML {{HTMLElement("img")}}, SVG {{SVGElement("image")}}, CSS {{cssxref("background-image")}}, CSS {{cssxref("cursor")}} oder CSS {{cssxref("list-style-image")}} ausgehen.
- `json`
  - : Die Destination ist JSON. Die Anfrage kann von einem JavaScript-[`import with { type: "json" }`](/de/docs/Web/JavaScript/Reference/Statements/import/with#json_modules_type_json) ausgehen.
- `manifest`
  - : Die Destination ist ein Manifest. Die Anfrage kann von einem HTML-[\<link rel=manifest>](/de/docs/Web/HTML/Reference/Attributes/rel/manifest) ausgehen.
- `object`
  - : Die Destination ist ein Objekt. Die Anfrage kann von einem HTML-{{HTMLElement("object")}}-Element ausgehen.
- `paintworklet`
  - : Die Destination ist ein Paint Worklet. Die Anfrage kann von einem Aufruf von [`CSS.PaintWorklet.addModule()`](/de/docs/Web/API/Worklet/addModule) ausgehen.
- `report`
  - : Die Destination ist ein Bericht, beispielsweise ein Content-Security-Policy-Bericht.
- `script`
  - : Die Destination ist ein Skript. Die Anfrage kann von einem HTML-{{HTMLElement("script")}}-Element oder einem Aufruf von [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) ausgehen.
- `serviceworker`
  - : Die Destination ist ein Service Worker. Die Anfrage kann von einem Aufruf von [`navigator.serviceWorker.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) ausgehen.
- `sharedworker`
  - : Die Destination ist ein Shared Worker. Die Anfrage kann von einem [`SharedWorker`](/de/docs/Web/API/SharedWorker) ausgehen.
- `style`
  - : Die Destination ist ein Stylesheet. Die Anfrage kann von HTML {{HTMLElement("link","&lt;link rel=stylesheet&gt;")}}, CSS {{cssxref("@import")}} oder einem JavaScript-[`import with { type: "css" }`](/de/docs/Web/JavaScript/Reference/Statements/import/with#css_modules_type_css) ausgehen.
- `text`
  - : Die Destination ist Klartext. Die Anfrage kann von einem JavaScript-[`import with { type: "text" }`](/de/docs/Web/JavaScript/Reference/Statements/import/with#text_modules_type_text) ausgehen.
- `track`
  - : Die Destination ist ein HTML-Texttrack. Die Anfrage kann von einem HTML-{{HTMLElement("track")}}-Element ausgehen.
- `video`
  - : Die Destination sind Videodaten. Die Anfrage kann von einem HTML-{{HTMLElement("video")}}-Element ausgehen.
- `webidentity`
  - : Die Destination ist ein Endpunkt, der mit der Überprüfung der Identität eines Benutzers zusammenhängt. Er wird beispielsweise in der [FedCM API](/de/docs/Web/API/FedCM_API) verwendet, um die Authentizität von Endpunkten eines Identitätsanbieters (IdP) zu überprüfen und so vor {{Glossary("CSRF", "CSRF")}}-Angriffen zu schützen.
- `worker`
  - : Die Destination ist ein [`Worker`](/de/docs/Web/API/Worker).
- `xslt`
  - : Die Destination ist eine XSLT-Transformation.

## Beispiele

### Sec-Fetch-Dest verwenden

Eine websiteübergreifende Anfrage, die von einem {{HTMLElement("img")}}-Element erzeugt wird, hätte die folgenden HTTP-Request-Header (beachten Sie, dass die Destination `image` ist):

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

- Die Fetch-Metadata-Request-Header {{HTTPHeader("Sec-Fetch-Mode")}}, {{HTTPHeader("Sec-Fetch-Site")}} und {{HTTPHeader("Sec-Fetch-User")}}
- [Schützen Sie Ihre Ressourcen mit Fetch Metadata vor Webangriffen](https://web.dev/articles/fetch-metadata) (web.dev)
- [Testumgebung für Fetch-Metadata-Request-Header](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
