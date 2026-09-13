---
title: declarativeNetRequest.ResourceType
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/ResourceType
l10n:
  sourceCommit: f99d00a1c3697e26a679925954e26564e7e79b98
---

Der Ressourcentyp einer Anfrage. Vergleichbar mit {{WebExtAPIRef('webRequest.ResourceType')}}.

## Typ

Werte dieses Typs sind Zeichenketten. Mögliche Werte sind:

- `beacon`
  - : Anfragen, die über die [Beacon API](/de/docs/Web/API/Beacon_API) gesendet werden.
- `csp_report`
  - : Anfragen, die an die in der {{HTTPHeader("Content-Security-Policy")}}-Kopfzeile angegebene {{CSP("report-uri")}} gesendet werden, wenn ein Versuch entdeckt wird, die Richtlinie zu verletzen.
- `font`
  - : Web-Schriftarten, die für eine {{cssxref("@font-face")}} CSS-Regel geladen werden.
- `image`
  - : Ressourcen, die geladen werden, um als Bilder dargestellt zu werden, mit Ausnahme von `imageset` in Browsern, die diesen Typ unterstützen (siehe unten zur Browser-Kompatibilität).
- `imageset`
  - : Bilder, die durch ein {{HTMLElement("picture")}}-Element geladen werden oder im [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)-Attribut eines `<img>`-Elements angegeben sind.
- `json`
  - : JSON-Module, die über eine [import-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) geladen werden.
- `main_frame`
  - : Dokumente der obersten Ebene, die in einem Tab geladen werden.
- `media`
  - : Ressourcen, die von einem {{HTMLElement("video")}}- oder {{HTMLElement("audio")}}-Element geladen werden.
- `object`
  - : Ressourcen, die von einem {{HTMLElement("object")}}- oder {{HTMLElement("embed")}}-Element geladen werden.

    Browser, die keinen speziellen `object_subrequest`-Typ haben (siehe unten zur Browser-Kompatibilität), kennzeichnen auch nachfolgende Anfragen, die vom Plugin gesendet werden, als `object`.

- `object_subrequest`
  - : Anfragen, die von Plugins gesendet werden.
- `ping`
  - : Anfragen, die an die im [`ping`](/de/docs/Web/HTML/Reference/Elements/a#ping)-Attribut eines Hyperlinks angegebene URL gesendet werden, wenn der Hyperlink aufgerufen wird.

    Browser, die keinen speziellen `beacon`-Typ haben (siehe unten zur Browser-Kompatibilität), kennzeichnen auch Anfragen, die über die Beacon-API gesendet werden, als `ping`.

- `script`
  - : Code, der geladen wird, um von einem {{HTMLElement("script")}}-Element oder in einem [Worker](/de/docs/Web/API/Web_Workers_API) ausgeführt zu werden.
- `speculative`
  - : In einer spekulativen Verbindung hat der Browser festgestellt, dass eine Anfrage an eine URI möglicherweise bald erfolgt, daher wird der TCP- und/oder TLS-Handshake sofort gestartet, damit die Ressource schneller verfügbar ist, wenn sie tatsächlich angefordert wird. Beachten Sie, dass dieser Verbindungstyp keine gültigen Tab-Informationen bereitstellt, sodass Anfragedetails wie `tabId`, `frameId`, `parentFrameId` etc. ungenau sind.
- `stylesheet`
  - : [CSS](/de/docs/Web/CSS)-Stylesheets, die geladen werden, um die Darstellung eines Dokuments zu beschreiben.
- `sub_frame`
  - : Dokumente, die in einem {{HTMLElement("iframe")}}- oder {{HTMLElement("frame")}}-Element geladen werden.
- `web_manifest`
  - : [Web App Manifests](/de/docs/Web/Progressive_web_apps/Manifest), die für Websites geladen werden, die auf dem Startbildschirm installiert werden können.
- `webbundle`
  - : Anfragen, die eine Verbindung zu einem Server über ein Web-Bundle oder [gepackter Website](https://github.com/WICG/webpackage) initiieren.
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
