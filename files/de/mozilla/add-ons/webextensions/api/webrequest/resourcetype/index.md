---
title: webRequest.ResourceType
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/ResourceType
l10n:
  sourceCommit: f9f6cb5c92c5864691f0ba8f18d2035de6871c9b
---

{{AddonSidebar}}

Dieser Typ ist ein String, der den Kontext repräsentiert, in dem eine Ressource bei einer Webanfrage abgerufen wurde.

Er wird verwendet, um die Anfragen, denen Sie mit der webRequest API zuhören, zu [filtern](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/RequestFilter). Zum Beispiel: Sie können nur Anfragen für Bilder oder nur für Skripte abhören.

## Typ

Werte dieses Typs sind Strings. Mögliche Werte sind:

- `beacon`
  - : Anfragen, die über die [Beacon API](/de/docs/Web/API/Beacon_API) gesendet werden.
- `csp_report`
  - : Anfragen, die an die im {{CSP("report-uri")}} angegebene URL im {{HTTPHeader("Content-Security-Policy")}} Header gesendet werden, wenn ein Versuch, die Richtlinie zu verletzen, erkannt wird.
- `font`
  - : Web-Schriften, die für eine {{cssxref("@font-face")}} CSS-Regel geladen werden.
- `image`
  - : Ressourcen, die geladen werden, um als Bild dargestellt zu werden, außer für `imageset` in Browsern, die diesen Typ unterstützen (siehe Browser-Kompatibilität unten).
- `imageset`
  - : Bilder, die durch ein {{HTMLElement("picture")}} Element geladen werden oder im `<img>` Element im [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) Attribut angegeben sind.
- `json`
  - : JSON-Module, die über einen [import-Befehl](/de/docs/Web/JavaScript/Reference/Statements/import) geladen werden.
- `main_frame`
  - : Dokumente der obersten Ebene, die in einen Tab geladen werden.
- `media`
  - : Ressourcen, die von einem {{HTMLElement("video")}} oder {{HTMLElement("audio")}} Element geladen werden.
- `object`

  - : Ressourcen, die von einem {{HTMLElement("object")}} oder {{HTMLElement("embed")}} Element geladen werden.

    Browser, die keinen dedizierten `object_subrequest` Typ haben (siehe Browser-Kompatibilität unten), kennzeichnen auch nachfolgende Anfragen, die vom Plugin gesendet werden, als `object`.

- `object_subrequest`
  - : Anfragen, die von Plugins gesendet werden.
- `ping`

  - : Anfragen, die an die im [`ping`](/de/docs/Web/HTML/Reference/Elements/a#ping) Attribut eines Hyperlinks angegebene URL gesendet werden, wenn dem Hyperlink gefolgt wird.

    Browser, die keinen dedizierten `beacon` Typ haben (siehe Browser-Kompatibilität unten), kennzeichnen auch Anfragen, die über die Beacon API gesendet werden, als `ping`.

- `script`
  - : Code, der geladen wird, um von einem {{HTMLElement("script")}} Element ausgeführt zu werden oder in einem [Worker](/de/docs/Web/API/Web_Workers_API) zu laufen.
- `speculative`
  - : In einer spekulativen Verbindung hat der Browser festgestellt, dass eine Anfrage an eine URI bald erfolgen könnte, daher wird ein TCP- und/oder TLS-Handshake sofort gestartet, damit die Ressource schneller bereit ist, wenn sie tatsächlich angefordert wird. Beachten Sie, dass diese Art von Verbindung keine gültigen Tab-Informationen liefert, sodass Anfragedetails wie `tabId`, `frameId`, `parentFrameId` usw. ungenau sind.
- `stylesheet`
  - : [CSS](/de/docs/Web/CSS) Stylesheets, die geladen werden, um die Darstellung eines Dokuments zu beschreiben.
- `sub_frame`
  - : Dokumente, die in ein {{HTMLElement("iframe")}} oder {{HTMLElement("frame")}} Element geladen werden.
- `web_manifest`
  - : [Web-App-Manifeste](/de/docs/Web/Progressive_web_apps/Manifest), die für Websites geladen werden, die auf dem Home-Bildschirm installiert werden können.
- `websocket`
  - : Anfragen, die eine Verbindung zu einem Server über die [WebSocket API](/de/docs/Web/API/WebSockets_API) initiieren.
- `xml_dtd`
  - : {{Glossary("Doctype", "DTDs")}}, die für ein XML-Dokument geladen werden.
- `xmlhttprequest`
  - : Anfragen, die von einem [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Objekt gesendet werden oder über die [Fetch API](/de/docs/Web/API/Fetch_API).
- `xslt`
  - : [XSLT](/de/docs/Web/XML/XSLT) Stylesheets, die geladen werden, um ein XML-Dokument zu transformieren.
- `other`
  - : Ressourcen, die von keinem anderen verfügbaren Typ abgedeckt sind.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#type-ResourceType) API. Diese Dokumentation ist abgeleitet von [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.
