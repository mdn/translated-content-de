---
title: declarativeNetRequest.ResourceType
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/ResourceType
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{AddonSidebar}}

Der Ressourcentyp einer Anfrage. Vergleichbar mit {{WebExtAPIRef('webRequest.ResourceType')}}.

## Typ

Werte dieses Typs sind Strings. Mögliche Werte sind:

- `beacon`
  - : Anfragen, die über die [Beacon API](/de/docs/Web/API/Beacon_API) gesendet werden.
- `csp_report`
  - : Anfragen, die an die im {{HTTPHeader("Content-Security-Policy")}}-Header angegebene {{CSP("report-uri")}} gesendet werden, wenn ein Versuch zur Verletzung der Richtlinie festgestellt wird.
- `font`
  - : Webfonts, die für eine {{cssxref("@font-face")}} CSS-Regel geladen werden.
- `image`
  - : Ressourcen, die geladen werden, um als Bild dargestellt zu werden, mit Ausnahme von `imageset` in Browsern, die diesen Typ unterstützen (siehe unten die Browser-Kompatibilität).
- `imageset`
  - : Bilder, die von einem {{HTMLElement("picture")}}-Element geladen werden oder im [`srcset`](/de/docs/Web/HTML/Element/img#srcset)-Attribut eines `<img>`-Elements angegeben sind.
- `main_frame`
  - : Dokumente auf oberster Ebene, die in einem Tab geladen werden.
- `media`
  - : Ressourcen, die von einem {{HTMLElement("video")}}- oder {{HTMLElement("audio")}}-Element geladen werden.
- `object`

  - : Ressourcen, die von einem {{HTMLElement("object")}}- oder {{HTMLElement("embed")}}-Element geladen werden.

    Browser, die keinen eigenen `object_subrequest`-Typ haben (siehe unten die Browser-Kompatibilität), kennzeichnen nachfolgende Anfragen, die vom Plugin gesendet werden, ebenfalls als `object`.

- `object_subrequest`
  - : Anfragen, die von Plugins gesendet werden.
- `ping`

  - : Anfragen, die an die URL im [`ping`](/de/docs/Web/HTML/Element/a#ping)-Attribut eines Hyperlinks gesendet werden, wenn der Hyperlink gefolgt wird.

    Browser, die keinen eigenen `beacon`-Typ haben (siehe unten die Browser-Kompatibilität), kennzeichnen Anfragen, die über die Beacon API gesendet werden, ebenfalls als `ping`.

- `script`
  - : Code, der geladen wird, um von einem {{HTMLElement("script")}}-Element oder laufend in einem [Worker](/de/docs/Web/API/Web_Workers_API) ausgeführt zu werden.
- `speculative`
  - : Bei einer spekulativen Verbindung hat der Browser festgestellt, dass möglicherweise bald eine Anfrage an eine URI erfolgen wird, sodass er sofort ein TCP- und/oder TLS-Handshake startet, um schneller bereit zu sein, wenn die Ressource tatsächlich angefordert wird. Beachten Sie, dass dieser Verbindungstyp keine gültigen Tab-Informationen bereitstellt, sodass Anfragedetails wie `tabId`, `frameId`, `parentFrameId` usw. ungenau sind.
- `stylesheet`
  - : [CSS](/de/docs/Web/CSS)-Stylesheets, die geladen werden, um die Darstellung eines Dokuments zu beschreiben.
- `sub_frame`
  - : Dokumente, die in ein {{HTMLElement("iframe")}}- oder {{HTMLElement("frame")}}-Element geladen werden.
- `web_manifest`
  - : [Web-App-Manifeste](/de/docs/Web/Progressive_web_apps/Manifest), die für Websites geladen werden, die auf dem Startbildschirm installiert werden können.
- `webbundle`
  - : Anfragen, die eine Verbindung zu einem Server über ein Web Bundle oder eine [gepackte Website](https://github.com/WICG/webpackage) initiieren.
- `websocket`
  - : Anfragen, die eine Verbindung zu einem Server über die [WebSocket API](/de/docs/Web/API/WebSockets_API) initiieren.
- `webtransport`
  - : Anfragen, die eine Verbindung zu einem Server über die [WebTransport API](/de/docs/Web/API/WebTransport_API) initiieren.
- `xml_dtd`
  - : {{Glossary("Doctype", "DTDs")}}, die für ein XML-Dokument geladen werden.
- `xmlhttprequest`
  - : Anfragen, die von einem [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt oder über die [Fetch API](/de/docs/Web/API/Fetch_API) gesendet werden.
- `xslt`
  - : [XSLT](/de/docs/Web/XML/XSLT)-Stylesheets, die zum Transformieren eines XML-Dokuments geladen werden.
- `other`
  - : Ressourcen, die von keinem anderen verfügbaren Typ abgedeckt werden.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
