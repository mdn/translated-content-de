---
title: declarativeNetRequest.ResourceType
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/ResourceType
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Der Ressourcentyp einer Anfrage. Vergleichbar mit {{WebExtAPIRef('webRequest.ResourceType')}}.

## Typ

Werte dieses Typs sind Zeichenfolgen. Mögliche Werte sind:

- `beacon`
  - : Anfragen, die über die [Beacon API](/de/docs/Web/API/Beacon_API) gesendet werden.
- `csp_report`
  - : Anfragen, die an die im {{CSP("report-uri")}} angegebenen Adresse im {{HTTPHeader("Content-Security-Policy")}}-Header gesendet werden, wenn ein Verstoß gegen die Richtlinie versucht wird.
- `font`
  - : Webschriftarten, die für eine {{cssxref("@font-face")}} CSS-Regel geladen werden.
- `image`
  - : Ressourcen, die geladen werden, um als Bild dargestellt zu werden, außer `imageset` in Browsern, die diesen Typ unterstützen (siehe Browser-Kompatibilität unten).
- `imageset`
  - : Bilder, die von einem {{HTMLElement("picture")}}-Element geladen oder in einem `<img>`-Element im [`srcset`](/de/docs/Web/HTML/Element/img#srcset)-Attribut angegeben werden.
- `main_frame`
  - : Dokumente auf oberster Ebene, die in einen Tab geladen werden.
- `media`
  - : Ressourcen, die von einem {{HTMLElement("video")}}- oder {{HTMLElement("audio")}}-Element geladen werden.
- `object`

  - : Ressourcen, die von einem {{HTMLElement("object")}}- oder {{HTMLElement("embed")}}-Element geladen werden.

    Browser, die keinen dedizierten `object_subrequest`-Typ haben (siehe Browser-Kompatibilität unten), kennzeichnen auch nachfolgende Anfragen, die vom Plugin gesendet werden, als `object`.

- `object_subrequest`
  - : Anfragen, die von Plugins gesendet werden.
- `ping`

  - : Anfragen, die an die URL im [`ping`](/de/docs/Web/HTML/Element/a#ping)-Attribut eines Hyperlinks gesendet werden, wenn der Hyperlink gefolgt wird.

    Browser, die keinen dedizierten `beacon`-Typ haben (siehe Browser-Kompatibilität unten), kennzeichnen auch Anfragen, die über die Beacon API gesendet werden, als `ping`.

- `script`
  - : Code, der geladen wird, um von einem {{HTMLElement("script")}}-Element ausgeführt zu werden oder der in einem [Worker](/de/docs/Web/API/Web_Workers_API) läuft.
- `speculative`
  - : Bei einer spekulativen Verbindung hat der Browser festgestellt, dass möglicherweise bald eine Anfrage an eine URI erfolgen wird, daher beginnt er sofort mit einem TCP- und/oder TLS-Handshake, sodass die Ressource schneller bereit ist, wenn sie tatsächlich angefordert wird. Beachten Sie, dass bei dieser Art von Verbindung keine gültigen Tab-Informationen bereitgestellt werden, sodass Anfragedetails wie `tabId`, `frameId`, `parentFrameId` usw. ungenau sind.
- `stylesheet`
  - : [CSS](/de/docs/Web/CSS)-Stylesheets, die geladen werden, um die Darstellung eines Dokuments zu beschreiben.
- `sub_frame`
  - : Dokumente, die in ein {{HTMLElement("iframe")}}- oder {{HTMLElement("frame")}}-Element geladen werden.
- `web_manifest`
  - : [Web App Manifeste](/de/docs/Web/Manifest), die für Websites geladen werden, die auf dem Startbildschirm installiert werden können.
- `webbundle`
  - : Anfragen, die eine Verbindung zu einem Server über ein Web-Bundle oder eine [verpackte Website](https://github.com/WICG/webpackage) initiieren.
- `websocket`
  - : Anfragen, die eine Verbindung zu einem Server über die [WebSocket API](/de/docs/Web/API/WebSockets_API) initiieren.
- `webtransport`
  - : Anfragen, die eine Verbindung zu einem Server über die [WebTransport API](/de/docs/Web/API/WebTransport_API) initiieren.
- `xml_dtd`
  - : [DTDs](/de/docs/Glossary/Doctype), die für ein XML-Dokument geladen werden.
- `xmlhttprequest`
  - : Anfragen, die von einem [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt oder über die [Fetch API](/de/docs/Web/API/Fetch_API) gesendet werden.
- `xslt`
  - : [XSLT](/de/docs/Web/XSLT)-Stylesheets, die zur Transformation eines XML-Dokuments geladen werden.
- `other`
  - : Ressourcen, die durch keinen anderen verfügbaren Typ abgedeckt sind.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
