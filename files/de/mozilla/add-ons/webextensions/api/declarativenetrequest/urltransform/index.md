---
title: declarativeNetRequest.URLTransform
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/URLTransform
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Details zur Beschreibung einer URL-Transformation für eine Umleitungsregel. Dieses Objekt kann bei {{WebExtAPIRef("declarativeNetRequest.RuleAction", "rule.action")}}.redirect.transform angegeben werden.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten folgende Eigenschaften:

- `fragment` {{optional_inline}}
  - : Ein `string`. Das neue Fragment für die Anfrage. Sollte entweder leer sein, wobei das vorhandene Fragment gelöscht wird, oder mit '#' beginnen.
- `host` {{optional_inline}}
  - : Ein `string`. Der neue Hostname für die Anfrage.
- `password` {{optional_inline}}
  - : Ein `string`. Das neue Passwort für die Anfrage.
- `path` {{optional_inline}}
  - : Ein `string`. Der neue Pfad für die Anfrage. Ist dieser leer, wird der vorhandene Pfad gelöscht.
- `port` {{optional_inline}}
  - : Ein `string`. Der neue Port für die Anfrage. Ist dieser leer, wird der vorhandene Port gelöscht.
- `query` {{optional_inline}}
  - : Ein `string`. Die neue Abfrage für die Anfrage. Sollte entweder leer sein, wobei die vorhandene Abfrage gelöscht wird, oder mit '?' beginnen.
- `queryTransform` {{optional_inline}}

  - : Ein Objekt, das beschreibt, wie Abfrage-Schlüssel-Wert-Paare hinzugefügt, entfernt oder ersetzt werden sollen. Kann nicht angegeben werden, wenn 'query' spezifiziert ist.

    - `addOrReplaceParams` {{optional_inline}}

      - : Ein Array von Objekten, das die Liste der hinzuzufügenden oder zu ersetzenden Abfrage-Schlüssel-Wert-Paare beschreibt.
        - `key`
          - : Ein `string`. Der Schlüsselwert.
        - `replaceOnly` {{optional_inline}}
          - : Ein `boolean`. Wenn true, wird der Abfrageschlüssel nur ersetzt, wenn er bereits vorhanden ist. Andernfalls wird der Schlüssel auch hinzugefügt, wenn er fehlt. Standardmäßig false.
        - `value`
          - : Ein `string`. Der Wertwert.

    - `removeParams` {{optional_inline}}
      - : Ein Array von `string`. Die Liste der zu entfernenden Abfrageschlüssel.

- `scheme` {{optional_inline}}
  - : Ein `string`. Das neue Schema für die Anfrage. Erlaubte Werte sind `"http"`, `"https"` und das Schema der Erweiterung, zum Beispiel "moz-extension" in Firefox oder "chrome-extension" in Chrome. Wenn das Erweiterungsschema verwendet wird, muss der `host` angegeben werden, um ein sinnvolles Umleitungsziel zu erzeugen.
- `username` {{optional_inline}}
  - : Ein `string`. Der neue Benutzername für die Anfrage.

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
