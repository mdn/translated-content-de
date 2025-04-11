---
title: declarativeNetRequest.ResourceType
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/ResourceType
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{AddonSidebar}}

Der Ressourcentyp einer Anforderung. Vergleichbar mit {{WebExtAPIRef('webRequest.ResourceType')}}.

## Typ

Werte dieses Typs sind Zeichenfolgen. Mögliche Werte sind:

- `beacon`
  - : Anfragen, die über die [Beacon API](/de/docs/Web/API/Beacon_API) gesendet werden.
- `csp_report`
  - : Anfragen, die an die in der {{HTTPHeader("Content-Security-Policy")}} Kopfzeile angegebene {{CSP("report-uri")}} gesendet werden, wenn ein Versuch, die Richtlinie zu verletzen, festgestellt wird.
- `font`
  - : Web-Schriftarten, die für eine {{cssxref("@font-face")}} CSS-Regel geladen werden.
- `image`
  - : Ressourcen, die geladen werden, um als Bild gerendert zu werden, mit Ausnahme von `imageset` in Browsern, die diesen Typ unterstützen (siehe unten für Browser-Kompatibilität).
- `imageset`
  - : Bilder, die von einem {{HTMLElement("picture")}}-Element oder im `srcset`-Attribut eines `<img>`-Elements angegeben sind.
- `main_frame`
  - : Dokumente auf oberster Ebene, die in einen Tab geladen werden.
- `media`
  - : Ressourcen, die von einem {{HTMLElement("video")}} oder {{HTMLElement("audio")}}-Element geladen werden.
- `object`

  - : Ressourcen, die von einem {{HTMLElement("object")}} oder {{HTMLElement("embed")}}-Element geladen werden.

    Browser, die keinen dedizierten `object_subrequest`-Typ haben (siehe unten für Browser-Kompatibilität), kennzeichnen auch nachfolgende Anfragen, die vom Plugin gesendet werden, als `object`.

- `object_subrequest`
  - : Anfragen, die von Plugins gesendet werden.
- `ping`

  - : Anfragen, die an die URL gesendet werden, die im [`ping`](/de/docs/Web/HTML/Reference/Elements/a#ping) Attribut eines Hyperlinks angegeben ist, wenn der Hyperlink gefolgt wird.

    Browser, die keinen dedizierten `beacon`-Typ haben (siehe unten für Browser-Kompatibilität), kennzeichnen auch Anfragen, die über die Beacon API gesendet werden, als `ping`.

- `script`
  - : Code, der geladen wird, um von einem {{HTMLElement("script")}}-Element ausgeführt zu werden oder in einem [Worker](/de/docs/Web/API/Web_Workers_API) läuft.
- `speculative`
  - : In einer spekulativen Verbindung hat der Browser festgestellt, dass möglicherweise bald eine Anfrage an eine URI kommt, sodass er sofort ein TCP- und/oder TLS-Handshake startet, um schneller bereit zu sein, wenn die Ressource tatsächlich angefordert wird. Beachten Sie, dass dieser Verbindungstyp keine gültigen Tab-Informationen liefert, daher sind Anfragedetails wie `tabId`, `frameId`, `parentFrameId` usw. ungenau.
- `stylesheet`
  - : [CSS](/de/docs/Web/CSS)-Stylesheets, die geladen werden, um die Darstellung eines Dokuments zu beschreiben.
- `sub_frame`
  - : Dokumente, die in ein {{HTMLElement("iframe")}} oder {{HTMLElement("frame")}}-Element geladen werden.
- `web_manifest`
  - : [Web App Manifests](/de/docs/Web/Progressive_web_apps/Manifest), die für Websites geladen werden, die auf dem Startbildschirm installiert werden können.
- `webbundle`
  - : Anfragen, die eine Verbindung zu einem Server über ein Web Bundle oder [verpackte Website](https://github.com/WICG/webpackage) initiieren.
- `websocket`
  - : Anfragen, die eine Verbindung zu einem Server über die [WebSocket API](/de/docs/Web/API/WebSockets_API) initiieren.
- `webtransport`
  - : Anfragen, die eine Verbindung zu einem Server über die [WebTransport API](/de/docs/Web/API/WebTransport_API) initiieren.
- `xml_dtd`
  - : {{Glossary("Doctype", "DTDs")}}, die für ein XML-Dokument geladen werden.
- `xmlhttprequest`
  - : Anfragen, die von einem [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Objekt oder über die [Fetch API](/de/docs/Web/API/Fetch_API) gesendet werden.
- `xslt`
  - : [XSLT](/de/docs/Web/XML/XSLT)-Stylesheets, die zur Transformation eines XML-Dokuments geladen werden.
- `other`
  - : Ressourcen, die durch keinen anderen verfügbaren Typ abgedeckt sind.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
