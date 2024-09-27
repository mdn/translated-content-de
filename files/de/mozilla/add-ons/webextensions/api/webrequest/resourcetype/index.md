---
title: webRequest.ResourceType
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/ResourceType
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Dieser Typ ist ein String, der den Kontext darstellt, in dem eine Ressource in einer Webanfrage abgerufen wurde.

Er wird verwendet, um die Anfragen zu [filtern](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/RequestFilter), die Sie mithilfe der webRequest-API überwachen. Beispielsweise können Sie nur Anfragen abhören, die für Bilder oder nur für Skripte sind.

## Typ

Werte dieses Typs sind Strings. Mögliche Werte sind:

- `beacon`
  - : Anfragen, die über die [Beacon API](/de/docs/Web/API/Beacon_API) gesendet werden.
- `csp_report`
  - : Anfragen, die an die {{CSP("report-uri")}} gesendet werden, die im {{HTTPHeader("Content-Security-Policy")}} Header angegeben ist, wenn ein Versuch, die Richtlinie zu verletzen, erkannt wird.
- `font`
  - : Webfonts, die für eine {{cssxref("@font-face")}} CSS-Regel geladen werden.
- `image`
  - : Ressourcen, die geladen werden, um als Bild gerendert zu werden, außer `imageset` in Browsern, die diesen Typ unterstützen (siehe Browser-Kompatibilität unten).
- `imageset`
  - : Bilder, die von einem {{HTMLElement("picture")}} Element geladen werden oder im [`srcset`](/de/docs/Web/HTML/Element/img#srcset) Attribut eines `<img>` Elements angegeben sind.
- `main_frame`
  - : Dokumente auf oberster Ebene, die in einen Tab geladen werden.
- `media`
  - : Ressourcen, die von einem {{HTMLElement("video")}} oder {{HTMLElement("audio")}} Element geladen werden.
- `object`

  - : Ressourcen, die von einem {{HTMLElement("object")}} oder {{HTMLElement("embed")}} Element geladen werden.

    Browser, die keinen dedizierten `object_subrequest`-Typ haben (siehe Browser-Kompatibilität unten), kennzeichnen auch nachfolgende Anfragen, die vom Plugin gesendet werden, als `object`.

- `object_subrequest`
  - : Anfragen, die von Plugins gesendet werden.
- `ping`

  - : Anfragen, die an die im [`ping`](/de/docs/Web/HTML/Element/a#ping) Attribut eines Hyperlinks angegebene URL gesendet werden, wenn der Hyperlink gefolgt wird.

    Browser, die keinen dedizierten `beacon`-Typ haben (siehe Browser-Kompatibilität unten), kennzeichnen auch Anfragen, die über die Beacon API gesendet werden, als `ping`.

- `script`
  - : Code, der geladen wird, um von einem {{HTMLElement("script")}} Element ausgeführt zu werden oder in einem [Worker](/de/docs/Web/API/Web_Workers_API) zu laufen.
- `speculative`
  - : In einer spekulativen Verbindung hat der Browser festgestellt, dass eine Anfrage an eine URI möglicherweise in Kürze kommt, sodass er den TCP- und/oder TLS-Handshake sofort startet, damit er schneller bereit ist, wenn die Ressource tatsächlich angefordert wird. Beachten Sie, dass dieser Verbindungstyp keine gültigen Tab-Informationen bereitstellt, sodass Anfragedetails wie `tabId`, `frameId`, `parentFrameId` usw. ungenau sind.
- `stylesheet`
  - : [CSS](/de/docs/Web/CSS) Stylesheets, die geladen werden, um die Darstellung eines Dokuments zu beschreiben.
- `sub_frame`
  - : Dokumente, die in ein {{HTMLElement("iframe")}} oder {{HTMLElement("frame")}} Element geladen werden.
- `web_manifest`
  - : [Web App Manifeste](/de/docs/Web/Manifest), die für Websites geladen werden, die auf dem Startbildschirm installiert werden können.
- `websocket`
  - : Anfragen, die eine Verbindung zu einem Server über die [WebSocket API](/de/docs/Web/API/WebSockets_API) initiieren.
- `xml_dtd`
  - : [DTDs](/de/docs/Glossary/Doctype), die für ein XML-Dokument geladen werden.
- `xmlhttprequest`
  - : Anfragen, die von einem [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Objekt oder über die [Fetch API](/de/docs/Web/API/Fetch_API) gesendet werden.
- `xslt`
  - : [XSLT](/de/docs/Web/XSLT) Stylesheets, die zum Transformieren eines XML-Dokuments geladen werden.
- `other`
  - : Ressourcen, die von keinem anderen verfügbaren Typ abgedeckt werden.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#type-ResourceType). Diese Dokumentation ist abgeleitet von [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
