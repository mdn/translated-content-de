---
title: declarativeNetRequest.setExtensionActionOptions()
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/setExtensionActionOptions
l10n:
  sourceCommit: 5137b45128dcf07ac636da68184f00aab30ec1cc
---

Konfiguriert, ob die Anzahl der Aktionen für Tabs als Badge-Text der Erweiterungsaktion angezeigt wird, und bietet eine Möglichkeit, diese Anzahl zu erhöhen.

## Syntax

```js-nolint
let settingCount = browser.declarativeNetRequest.setExtensionActionOptions(
    extensionActionOptions, // object
);
```

### Parameter

- `extensionActionOptions`
  - : Ein Objekt mit den Konfigurationsdetails für die Anzahl der Aktionen für Tabs.
    - `displayActionCountAsBadgeText` {{optional_inline}}
      - : `boolean` Gibt an, ob die Anzahl der Aktionen für eine Seite automatisch als Badge-Text der Erweiterung angezeigt wird. Diese Einstellung bleibt über Sitzungen hinweg erhalten.
    - `tabUpdate` {{optional_inline}}
      - : `object`. Angaben dazu, wie die Anzahl der Aktionen für den Tab angepasst werden soll. Weitere Informationen finden Sie im Abschnitt [tabUpdate](#tabupdate_2).

## Zusätzliche Objekte

### tabUpdate

- `increment`
  - : `number` Der Wert, um den die Anzahl der Aktionen für den Tab erhöht wird. Negative Werte verringern die Anzahl.
- `tabId`
  - : `number` Der Tab, für den die Anzahl der Aktionen aktualisiert werden soll.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird. Wenn die Anfrage fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

{{WebExtExamples}}

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
