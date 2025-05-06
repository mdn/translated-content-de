---
title: declarativeNetRequest.ResourceType
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/ResourceType
l10n:
  sourceCommit: f9f6cb5c92c5864691f0ba8f18d2035de6871c9b
---

{{AddonSidebar}}

Der Ressourcentyp einer Anfrage. Vergleichbar mit {{WebExtAPIRef('webRequest.ResourceType')}}.

## Typ

Werte dieses Typs sind Strings. Mögliche Werte sind:

- `beacon`
  - : Anfragen, die über die [Beacon API](/de/docs/Web/API/Beacon_API) gesendet werden.
- `csp_report`
  - : Anfragen, die an die in der {{HTTPHeader("Content-Security-Policy")}}-Header angegebene {{CSP("report-uri")}} gesendet werden, wenn ein Versuch, die Richtlinie zu verletzen, festgestellt wird.
- `font`
  - : Webfonts, die für eine {{cssxref("@font-face")}} CSS-Regel geladen werden.
- `image`
  - : Ressourcen, die geladen werden, um als Bild dargestellt zu werden, mit Ausnahme von `imageset` in Browsern, die diesen Typ unterstützen (siehe unten "Browser-Kompatibilität").
- `imageset`
  - : Bilder, die von einem {{HTMLElement("picture")}}-Element geladen oder im `<img>`-Element-Attribut [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) angegeben werden.
- `json`
  - : JSON-Module, die über eine [import-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/import) geladen werden.
- `main_frame`
  - : Dokumente auf oberster Ebene, die in einem Tab geladen werden.
- `media`
  - : Ressourcen, die von einem {{HTMLElement("video")}}- oder {{HTMLElement("audio")}}-Element geladen werden.
- `object`

  - : Ressourcen, die von einem {{HTMLElement("object")}}- oder {{HTMLElement("embed")}}-Element geladen werden.

    Browser, die keinen eigenen `object_subrequest`-Typ haben (siehe unten "Browser-Kompatibilität"), kennzeichnen auch nachfolgende Anfragen, die vom Plugin gesendet werden, als `object`.

- `object_subrequest`
  - : Anfragen, die von Plugins gesendet werden.
- `ping`

  - : Anfragen, die an die URL gesendet werden, die im [`ping`](/de/docs/Web/HTML/Reference/Elements/a#ping)-Attribut eines Hyperlinks angegeben ist, wenn der Hyperlink gefolgt wird.

    Browser, die keinen eigenen `beacon`-Typ haben (siehe unten "Browser-Kompatibilität"), kennzeichnen Anfragen, die über die Beacon API gesendet werden, ebenfalls als `ping`.

- `script`
  - : Code, der geladen wird, um von einem {{HTMLElement("script")}}-Element ausgeführt zu werden oder in einem [Worker](/de/docs/Web/API/Web_Workers_API) läuft.
- `speculative`
  - : In einer spekulativen Verbindung hat der Browser festgestellt, dass möglicherweise bald eine Anfrage an eine URI kommt, und beginnt daher sofort mit einem TCP- und/oder TLS-Handshake, um schneller bereit zu sein, wenn die Ressource tatsächlich angefordert wird. Beachten Sie, dass diese Art der Verbindung keine validen Tab-Informationen bereitstellt, sodass Anfragedetails wie `tabId`, `frameId`, `parentFrameId` usw. ungenau sind.
- `stylesheet`
  - : [CSS](/de/docs/Web/CSS)-Stylesheets, die geladen werden, um die Darstellung eines Dokuments zu beschreiben.
- `sub_frame`
  - : Dokumente, die in ein {{HTMLElement("iframe")}}- oder {{HTMLElement("frame")}}-Element geladen werden.
- `web_manifest`
  - : [Web App Manifests](/de/docs/Web/Progressive_web_apps/Manifest), die für Websites geladen werden, die auf dem Startbildschirm installiert werden können.
- `webbundle`
  - : Anfragen, die den Aufbau einer Verbindung zu einem Server über ein Web Bundle oder eine [packaged website](https://github.com/WICG/webpackage) initiieren.
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
  - : Ressourcen, die von keinem anderen verfügbaren Typ abgedeckt sind.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

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
