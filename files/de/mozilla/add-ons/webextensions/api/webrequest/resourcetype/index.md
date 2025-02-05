---
title: webRequest.ResourceType
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/ResourceType
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

{{AddonSidebar}}

Dieser Typ ist ein String, der den Kontext repräsentiert, in dem eine Ressource in einer Webanfrage abgerufen wurde.

Er wird verwendet, um [Anfragen zu filtern](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/RequestFilter), die Sie mithilfe der WebRequest-API überwachen möchten. Zum Beispiel: Sie können nur Anfragen für Bilder oder nur für Skripte überwachen.

## Typ

Werte dieses Typs sind Zeichenketten. Mögliche Werte sind:

- `beacon`
  - : Anfragen, die über die [Beacon API](/de/docs/Web/API/Beacon_API) gesendet wurden.
- `csp_report`
  - : Anfragen, die an die {{CSP("report-uri")}} gesendet werden, wie im {{HTTPHeader("Content-Security-Policy")}}-Header angegeben, wenn ein Versuch festgestellt wird, die Richtlinie zu verletzen.
- `font`
  - : Web-Schriftarten, die für eine {{cssxref("@font-face")}} CSS-Regel geladen wurden.
- `image`
  - : Ressourcen, die als Bild dargestellt werden sollen, mit Ausnahme von `imageset` in Browsern, die diesen Typ unterstützen (siehe unten Browser-Kompatibilität).
- `imageset`
  - : Bilder, die durch ein {{HTMLElement("picture")}}-Element oder in einem `<img>`-Element über das Attribut [`srcset`](/de/docs/Web/HTML/Element/img#srcset) geladen werden.
- `main_frame`
  - : Hauptdokumente, die in einem Tab geladen werden.
- `media`
  - : Ressourcen, die durch ein {{HTMLElement("video")}}- oder {{HTMLElement("audio")}}-Element geladen werden.
- `object`

  - : Ressourcen, die durch ein {{HTMLElement("object")}}- oder {{HTMLElement("embed")}}-Element geladen werden.

    Browser, die keinen dedizierten `object_subrequest`-Typ haben (siehe unten Browser-Kompatibilität), kennzeichnen nachfolgende Plugin-Anfragen ebenfalls als `object`.

- `object_subrequest`
  - : Anfragen, die durch Plugins gesendet werden.
- `ping`

  - : Anfragen, die an die in einem Hyperlink angegebene URL im [`ping`](/de/docs/Web/HTML/Element/a#ping)-Attribut gesendet werden, wenn der Hyperlink geöffnet wird.

    Browser, die keinen dedizierten `beacon`-Typ haben (siehe unten Browser-Kompatibilität), kennzeichnen Anfragen, die über die Beacon API gesendet werden, ebenfalls als `ping`.

- `script`
  - : Code, der durch ein {{HTMLElement("script")}}-Element geladen wird oder in einem [Worker](/de/docs/Web/API/Web_Workers_API) läuft.
- `speculative`
  - : Bei einer spekulativen Verbindung hat der Browser festgestellt, dass bald eine Anfrage zu einer URI kommen könnte, und startet daher sofort ein TCP- und/oder TLS-Handshake, damit die Ressource schneller bereit ist, wenn die Anfrage tatsächlich gestellt wird. Beachten Sie, dass diese Art von Verbindung keine gültigen Tab-Informationen bereitstellt, sodass Anfragedetails wie `tabId`, `frameId`, `parentFrameId` usw. ungenau sind.
- `stylesheet`
  - : [CSS](/de/docs/Web/CSS)-Stylesheets, die geladen wurden, um die Darstellung eines Dokuments zu beschreiben.
- `sub_frame`
  - : Dokumente, die in einem {{HTMLElement("iframe")}}- oder {{HTMLElement("frame")}}-Element geladen werden.
- `web_manifest`
  - : [Web App Manifeste](/de/docs/Web/Manifest), die für Websites geladen werden, die auf dem Startbildschirm installiert werden können.
- `websocket`
  - : Anfragen, die eine Verbindung zu einem Server über die [WebSocket API](/de/docs/Web/API/WebSockets_API) initiieren.
- `xml_dtd`
  - : {{Glossary("Doctype", "DTDs")}}, die für ein XML-Dokument geladen werden.
- `xmlhttprequest`
  - : Anfragen, die durch ein [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt oder über die [Fetch API](/de/docs/Web/API/Fetch_API) gesendet werden.
- `xslt`
  - : [XSLT](/de/docs/Web/XML/XSLT)-Stylesheets, die für die Transformation eines XML-Dokuments geladen werden.
- `other`
  - : Ressourcen, die durch keinen anderen verfügbaren Typ abgedeckt werden.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#type-ResourceType)-API. Diese Dokumentation wurde aus [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code abgeleitet.

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
