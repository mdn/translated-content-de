---
title: declarativeNetRequest.ResourceType
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/ResourceType
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Der Ressourcentyp einer Anfrage. Vergleichbar mit {{WebExtAPIRef('webRequest.ResourceType')}}.

## Typ

Werte dieses Typs sind Zeichenketten. Mögliche Werte sind:

- `beacon`
  - : Anfragen, die über die [Beacon API](/de/docs/Web/API/Beacon_API) gesendet werden.
- `csp_report`
  - : Anfragen, die an die im {{CSP("report-uri")}} angegebene URL im {{HTTPHeader("Content-Security-Policy")}}-Header gesendet werden, wenn ein Versuch, die Richtlinie zu verletzen, erkannt wird.
- `font`
  - : Web-Schriftarten, die für eine {{cssxref("@font-face")}} CSS-Regel geladen werden.
- `image`
  - : Ressourcen, die geladen werden, um als Bild dargestellt zu werden, mit Ausnahme von `imageset` in Browsern, die diesen Typ unterstützen (siehe unten zur Browser-Kompatibilität).
- `imageset`
  - : Bilder, die von einem {{HTMLElement("picture")}}-Element geladen oder in einem `<img>`-Element im [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)-Attribut angegeben werden.
- `json`
  - : JSON-Module, die durch einen [Import-Statement](/de/docs/Web/JavaScript/Reference/Statements/import) geladen werden.
- `main_frame`
  - : Dokumente der obersten Ebene, die in einem Tab geladen werden.
- `media`
  - : Ressourcen, die von einem {{HTMLElement("video")}} oder {{HTMLElement("audio")}}-Element geladen werden.
- `object`

  - : Ressourcen, die von einem {{HTMLElement("object")}} oder {{HTMLElement("embed")}}-Element geladen werden.

    Browser, die keinen dedizierten `object_subrequest`-Typ haben (siehe unten zur Browser-Kompatibilität), kennzeichnen nachfolgende Anfragen, die vom Plugin gesendet werden, ebenfalls als `object`.

- `object_subrequest`
  - : Anfragen, die von Plugins gesendet werden.
- `ping`

  - : Anfragen, die an die im [`ping`](/de/docs/Web/HTML/Reference/Elements/a#ping)-Attribut eines Hyperlinks angegebene URL gesendet werden, wenn dem Hyperlink gefolgt wird.

    Browser, die keinen dedizierten `beacon`-Typ haben (siehe unten zur Browser-Kompatibilität), kennzeichnen Anfragen, die über die Beacon API gesendet werden, ebenfalls als `ping`.

- `script`
  - : Code, der geladen wird, um von einem {{HTMLElement("script")}}-Element ausgeführt zu werden oder in einem [Worker](/de/docs/Web/API/Web_Workers_API) läuft.
- `speculative`
  - : Bei einer spekulativen Verbindung hat der Browser festgestellt, dass bald eine Anfrage an eine URI kommen könnte, daher wird sofort ein TCP- und/oder TLS-Handshake gestartet, damit die Ressource schneller bereit ist, wenn sie tatsächlich angefordert wird. Beachten Sie, dass diese Art von Verbindung keine gültigen Tab-Informationen bereitstellt, sodass Anfragedetails wie `tabId`, `frameId`, `parentFrameId` usw. ungenau sind.
- `stylesheet`
  - : [CSS](/de/docs/Web/CSS)-Stylesheets, die geladen werden, um die Darstellung eines Dokuments zu beschreiben.
- `sub_frame`
  - : Dokumente, die in einem {{HTMLElement("iframe")}} oder {{HTMLElement("frame")}}-Element geladen werden.
- `web_manifest`
  - : [Web App Manifeste](/de/docs/Web/Progressive_web_apps/Manifest), die für Websites geladen werden, die auf dem Startbildschirm installiert werden können.
- `webbundle`
  - : Anfragen, die eine Verbindung zu einem Server über ein Web Bundle oder eine [verpackte Website](https://github.com/WICG/webpackage) initiieren.
- `websocket`
  - : Anfragen, die eine Verbindung zu einem Server über die [WebSocket API](/de/docs/Web/API/WebSockets_API) initiieren.
- `webtransport`
  - : Anfragen, die eine Verbindung zu einem Server über die [WebTransport API](/de/docs/Web/API/WebTransport_API) initiieren.
- `xml_dtd`
  - : {{Glossary("Doctype", "DTDs")}}, die für ein XML-Dokument geladen werden.
- `xmlhttprequest`
  - : Anfragen, die von einem [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt oder über die [Fetch API](/de/docs/Web/API/Fetch_API) gesendet werden.
- `xslt`
  - : [XSLT](/de/docs/Web/XML/XSLT)-Stylesheets, die für die Transformation eines XML-Dokuments geladen werden.
- `other`
  - : Ressourcen, die von keinem anderen verfügbaren Typ abgedeckt werden.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
