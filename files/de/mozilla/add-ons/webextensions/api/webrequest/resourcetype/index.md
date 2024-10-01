---
title: webRequest.ResourceType
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/ResourceType
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Dieser Typ ist ein String, der den Kontext repräsentiert, in dem eine Ressource in einer Webanfrage abgerufen wurde.

Er wird verwendet, um die Anfragen, die Sie mithilfe der webRequest-API abhören, [zu filtern](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/RequestFilter). Zum Beispiel: Sie können Anfragen nur für Bilder oder nur für Skripte abhören.

## Typ

Werte dieses Typs sind Strings. Mögliche Werte sind:

- `beacon`
  - : Anfragen, die über die [Beacon API](/de/docs/Web/API/Beacon_API) gesendet werden.
- `csp_report`
  - : Anfragen, die an die in der {{CSP("report-uri")}} im {{HTTPHeader("Content-Security-Policy")}}-Header angegebene Adresse gesendet werden, wenn versucht wird, die Richtlinie zu verletzen.
- `font`
  - : Webfonts, die für eine {{cssxref("@font-face")}} CSS-Regel geladen werden.
- `image`
  - : Ressourcen, die geladen werden, um als Bild dargestellt zu werden, mit Ausnahme von `imageset` in Browsern, die diesen Typ unterstützen (siehe unten zur Browser-Kompatibilität).
- `imageset`
  - : Bilder, die von einem {{HTMLElement("picture")}}-Element geladen werden oder im [`srcset`](/de/docs/Web/HTML/Element/img#srcset)-Attribut eines `<img>`-Elements angegeben sind.
- `main_frame`
  - : Dokumente auf oberster Ebene, die in einem Tab geladen werden.
- `media`
  - : Ressourcen, die von einem {{HTMLElement("video")}}- oder {{HTMLElement("audio")}}-Element geladen werden.
- `object`

  - : Ressourcen, die von einem {{HTMLElement("object")}}- oder {{HTMLElement("embed")}}-Element geladen werden.

    Browser, die keinen dedizierten `object_subrequest`-Typ haben (siehe unten zur Browser-Kompatibilität), bezeichnen auch nachfolgende Anfragen, die vom Plugin gesendet werden, als `object`.

- `object_subrequest`
  - : Anfragen, die von Plugins gesendet werden.
- `ping`

  - : Anfragen, die an die im [`ping`](/de/docs/Web/HTML/Element/a#ping)-Attribut eines Hyperlinks angegebene URL gesendet werden, wenn der Hyperlink gefolgt wird.

    Browser, die keinen dedizierten `beacon`-Typ haben (siehe unten zur Browser-Kompatibilität), bezeichnen auch Anfragen, die über die Beacon API gesendet werden, als `ping`.

- `script`
  - : Code, der geladen wird, um von einem {{HTMLElement("script")}}-Element ausgeführt oder in einem [Worker](/de/docs/Web/API/Web_Workers_API) ausgeführt zu werden.
- `speculative`
  - : Bei einer spekulativen Verbindung hat der Browser festgestellt, dass eine Anfrage an eine URI möglicherweise bald erfolgt, sodass er sofort ein TCP- und/oder TLS-Handshake startet, um schneller bereit zu sein, wenn die Ressource tatsächlich angefordert wird. Beachten Sie, dass dieser Verbindungstyp keine gültigen Tab-Informationen bereitstellt, sodass Anfragedetails wie `tabId`, `frameId`, `parentFrameId` usw. ungenau sind.
- `stylesheet`
  - : [CSS](/de/docs/Web/CSS)-Stylesheets, die geladen werden, um die Darstellung eines Dokuments zu beschreiben.
- `sub_frame`
  - : Dokumente, die in einem {{HTMLElement("iframe")}}- oder {{HTMLElement("frame")}}-Element geladen werden.
- `web_manifest`
  - : [Web App Manifests](/de/docs/Web/Manifest), die für Websites geladen werden, die auf dem Startbildschirm installiert werden können.
- `websocket`
  - : Anfragen, die eine Verbindung zu einem Server über die [WebSocket API](/de/docs/Web/API/WebSockets_API) initiieren.
- `xml_dtd`
  - : {{Glossary("Doctype", "DTDs")}}, die für ein XML-Dokument geladen werden.
- `xmlhttprequest`
  - : Anfragen, die von einem [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt oder über die [Fetch API](/de/docs/Web/API/Fetch_API) gesendet werden.
- `xslt`
  - : [XSLT](/de/docs/Web/XSLT)-Stylesheets, die zum Transformieren eines XML-Dokuments geladen werden.
- `other`
  - : Ressourcen, die durch keinen anderen verfügbaren Typ abgedeckt sind.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#type-ResourceType) API von Chromium. Diese Dokumentation stammt aus [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.
