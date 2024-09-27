---
title: declarativeNetRequest.setExtensionActionOptions
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/setExtensionActionOptions
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Konfiguriert, ob die Aktionsanzahl für Tabs als Badge-Text der Erweiterungsaktion angezeigt wird und bietet eine Möglichkeit, die Aktionsanzahl zu erhöhen.

## Syntax

```js-nolint
let count = browser.declarativeNetRequest.setExtensionActionOptions(
    extensionActionOptions, // object
);
```

### Parameter

- `extensionActionOptions`

  - : Ein Objekt, das die Konfigurationsdetails für die Aktionsanzahl für Tabs enthält.
    - `displayActionCountAsBadgeText` {{optional_inline}}
      - : `boolean` Ob die Aktionsanzahl für eine Seite automatisch als Badge-Text der Erweiterung angezeigt wird. Diese Präferenz bleibt über Sitzungen hinweg bestehen.
    - `tabUpdate` {{optional_inline}}
      - : `object`. Details, wie die Aktionsanzahl des Tabs angepasst werden soll. Siehe den Abschnitt [tabUpdate](#tabupdate_2) für weitere Details.

## Zusätzliche Objekte

### tabUpdate

- `increment`
  - : `number` Der Betrag, um den die Aktionsanzahl des Tabs erhöht werden soll. Negative Werte verringern die Anzahl.
- `tabId`
  - : `number` Der Tab, für den die Aktionsanzahl aktualisiert werden soll.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird. Wenn die Anfrage fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
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
