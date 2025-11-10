---
title: declarativeNetRequest.ResourceType
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/ResourceType
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Der Ressourcentyp einer Anfrage. Vergleichbar mit {{WebExtAPIRef('webRequest.ResourceType')}}.

## Typ

Werte dieses Typs sind Zeichenketten. Mögliche Werte sind:

- `beacon`
  - : Anfragen, die über die [Beacon API](/de/docs/Web/API/Beacon_API) gesendet werden.
- `csp_report`
  - : Anfragen, die an die in der {{HTTPHeader("Content-Security-Policy")}}-Header angegebene {{CSP("report-uri")}} gesendet werden, wenn ein Versuch festgestellt wird, die Richtlinie zu verletzen.
- `font`
  - : Webfonts, die für eine {{cssxref("@font-face")}} CSS-Regel geladen werden.
- `image`
  - : Ressourcen, die geladen werden, um als Bild dargestellt zu werden, mit Ausnahme von `imageset` in Browsern, die diesen Typ unterstützen (siehe unten zur Browser-Kompatibilität).
- `imageset`
  - : Bilder, die von einem {{HTMLElement("picture")}}-Element geladen oder in einem `<img>`-Element im [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)-Attribut angegeben werden.
- `json`
  - : JSON-Module, die über eine [import-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) geladen werden.
- `main_frame`
  - : Dokumente auf oberster Ebene, die in einem Tab geladen werden.
- `media`
  - : Ressourcen, die von einem {{HTMLElement("video")}}- oder {{HTMLElement("audio")}}-Element geladen werden.
- `object`
  - : Ressourcen, die von einem {{HTMLElement("object")}}- oder {{HTMLElement("embed")}}-Element geladen werden.

    Browser, die keinen dedizierten `object_subrequest`-Typ haben (siehe unten zur Browser-Kompatibilität), bezeichnen auch nachfolgende Anfragen, die durch das Plugin gesendet werden, als `object`.

- `object_subrequest`
  - : Anfragen, die von Plugins gesendet werden.
- `ping`
  - : Anfragen, die an die URL gesendet werden, die im [`ping`](/de/docs/Web/HTML/Reference/Elements/a#ping)-Attribut eines Hyperlinks angegeben ist, wenn dem Hyperlink gefolgt wird.

    Browser, die keinen dedizierten `beacon`-Typ haben (siehe unten zur Browser-Kompatibilität), bezeichnen auch Anfragen, die über die Beacon API gesendet werden, als `ping`.

- `script`
  - : Code, der geladen wird, um von einem {{HTMLElement("script")}}-Element ausgeführt zu werden oder in einem [Worker](/de/docs/Web/API/Web_Workers_API) läuft.
- `speculative`
  - : In einer spekulativen Verbindung hat der Browser bestimmt, dass bald eine Anfrage an eine URI kommen könnte, daher beginnt er sofort mit einem TCP- und/oder TLS-Handshake, sodass die Ressource schneller verfügbar ist, wenn sie tatsächlich angefordert wird. Beachten Sie, dass dieser Verbindungstyp keine gültigen Tab-Informationen bereitstellt, sodass Anforderungsdetails wie `tabId`, `frameId`, `parentFrameId` usw. ungenau sind.
- `stylesheet`
  - : [CSS](/de/docs/Web/CSS)-Stylesheets, die geladen werden, um die Darstellung eines Dokuments zu beschreiben.
- `sub_frame`
  - : Dokumente, die in einem {{HTMLElement("iframe")}}- oder {{HTMLElement("frame")}}-Element geladen werden.
- `web_manifest`
  - : [Web App Manifests](/de/docs/Web/Progressive_web_apps/Manifest), die für Websites geladen werden, die auf dem Startbildschirm installiert werden können.
- `webbundle`
  - : Anfragen, die eine Verbindung zu einem Server über ein Web Bundle oder eine [gepackte Website](https://github.com/WICG/webpackage) initiieren.
- `websocket`
  - : Anfragen, die eine Verbindung zu einem Server über die [WebSocket API](/de/docs/Web/API/WebSockets_API) initiieren.
- `webtransport`
  - : Anfragen, die eine Verbindung zu einem Server über die [WebTransport API](/de/docs/Web/API/WebTransport_API) initiieren.
- `xml_dtd`
  - : {{Glossary("Doctype", "DTDs")}}, die für ein XML-Dokument geladen werden.
- `xmlhttprequest`
  - : Anfragen, die durch ein [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt oder über die [Fetch API](/de/docs/Web/API/Fetch_API) gesendet werden.
- `xslt`
  - : [XSLT](/de/docs/Web/XML/XSLT)-Stylesheets, die zum Transformieren eines XML-Dokuments geladen werden.
- `other`
  - : Ressourcen, die durch keinen anderen verfügbaren Typ abgedeckt werden.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
