---
title: webRequest.RequestFilter
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/RequestFilter
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ein Objekt, das Filter beschreibt, die auf webRequest-Ereignisse angewendet werden sollen.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `urls`
  - : `array` von `string`. Ein Array von [Übereinstimmungsmustern](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns). Der Listener wird nur für Anfragen aufgerufen, deren Ziele mit einem der angegebenen Muster übereinstimmen. Nur Anfragen, die mit HTTP oder HTTPS gestellt werden, lösen Ereignisse aus. Andere Protokolle (wie data: und file:), die von der Musterübereinstimmung unterstützt werden, lösen keine Ereignisse aus. `view-source:` Anfragen können basierend auf ihrer inneren URL übereinstimmen.
- `types` {{optional_inline}}
  - : `array` von {{WebExtAPIRef('webRequest.ResourceType')}}. Eine Liste von Ressourcentypen (z.B. Stylesheets, Bilder, Skripte). Der Listener wird nur für Anfragen aufgerufen, die sich auf Ressourcen beziehen, die einem der angegebenen Typen entsprechen.
- `tabId` {{optional_inline}}
  - : `integer`. Der Listener wird nur für Anfragen von dem {{WebExtAPIRef("tabs.Tab", "Tab")}} aufgerufen, der durch diese ID identifiziert wird.
- `windowId` {{optional_inline}}
  - : `integer`. Der Listener wird nur für Anfragen von dem {{WebExtAPIRef("windows.Window", "Fenster")}} aufgerufen, das durch diese ID identifiziert wird.
- `incognito` {{optional_inline}}
  - : `boolean`. Wenn angegeben, werden Anfragen, die nicht dem Inkognito-Status (`true` oder `false`) entsprechen, herausgefiltert.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#type-RequestFilter) API von Chromium. Diese Dokumentation leitet sich von [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code ab.

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
