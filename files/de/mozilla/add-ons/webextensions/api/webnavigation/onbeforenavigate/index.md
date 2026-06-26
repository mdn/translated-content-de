---
title: webNavigation.onBeforeNavigate
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/onBeforeNavigate
l10n:
  sourceCommit: 9791add3508e087982097f25fbd367c21bcb8305
---

Wird ausgelöst, wenn der Browser im Begriff ist, ein Navigationsevent zu starten.

## Syntax

```js-nolint
browser.webNavigation.onBeforeNavigate.addListener(
  listener,                   // function
  filter                      // optional object
)
browser.webNavigation.onBeforeNavigate.removeListener(listener)
browser.webNavigation.onBeforeNavigate.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Hört auf, dieses Ereignis zu hören. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es hört, andernfalls `false`.

## Syntax von addListener

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:
    - `details`
      - : `object`. Details über das Navigationsevent. Siehe den Abschnitt [details](#details) für weitere Informationen.

- `filter` {{optional_inline}}
  - : `object`. Ein Objekt, das eine einzelne Eigenschaft `url` enthält, welche ein `Array` von {{WebExtAPIRef("events.UrlFilter")}} Objekten ist. Wenn Sie diesen Parameter einbeziehen, wird das Ereignis nur für Übergänge zu URLs ausgelöst, die mindestens einen `UrlFilter` im Array erfüllen. Wenn Sie diesen Parameter weglassen, wird das Ereignis für alle Übergänge ausgelöst.

## Zusätzliche Objekte

### details

- `tabId`
  - : `integer`. Die ID des Tabs, in dem die Navigation stattfinden wird.
- `url`
  - : `string`. Die URL, zu der der gegebene Frame navigieren wird.
- `frameId`
  - : `integer`. Der Frame, in dem die Navigation stattfinden wird. `0` gibt an, dass die Navigation im obersten Browserkontext des Tabs erfolgt, nicht in einem verschachtelten {{HTMLElement("iframe")}}. Ein positiver Wert gibt an, dass die Navigation in einem verschachtelten iframe erfolgt. Frame-IDs sind für einen gegebenen Tab und Prozess eindeutig.
- `frameType`
  - : `string`. Der Typ des Frames. Gibt die Werte `"outermost_frame"`, `"fenced_frame"` oder `"sub_frame"` zurück.
- `parentFrameId`
  - : `integer`. Die ID des übergeordneten Frames. Wird auf `-1` gesetzt, wenn dies ein oberster Frame ist.
- `parentDocumentId`
  - : `string`. Eine UUID des übergeordneten Dokuments, dem der Frame gehört. Wird nicht gesetzt, wenn kein übergeordnetes Dokument existiert. Weitere Informationen finden Sie im Artikel [Work with documentId](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId).
    > [!NOTE]
    > Dieses Ereignis schließt `documentId` nicht ein, da das Ziel-Dokument der Navigation nicht existiert, wenn das Ereignis ausgelöst wird. Weitere Informationen finden Sie im Artikel [Work with documentId](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId).
- `documentLifecycle`
  - : `string`. Der Lebenszyklus, in dem sich das Dokument befindet. Gibt die Werte `"prerender"`, `"active"`, `"cached"` oder `"pending_deletion"` zurück.
- `timeStamp`
  - : `number`. Die Zeit, zu der der Browser im Begriff ist, die Navigation zu starten, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `processId` {{optional_inline}} {{deprecated_inline}}
  - : `integer`. Dieser Wert wird in modernen Browsern nicht gesetzt. Wenn er gesetzt war, repräsentierte er die ID des Prozesses, der das Renderer für diesen Tab ausführte.

## Beispiele

Protokolliert die Ziel-URLs für `onBeforeNavigate`, wenn der Hostname des Ziels "example.com" enthält oder mit "developer" beginnt.

```js
const filter = {
  url: [{ hostContains: "example.com" }, { hostPrefix: "developer" }],
};

function logOnBefore(details) {
  console.log(`onBeforeNavigate to: ${details.url}`);
}

browser.webNavigation.onBeforeNavigate.addListener(logOnBefore, filter);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation#event-onBeforeNavigate) API von Chromium. Diese Dokumentation ist abgeleitet von [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) im Chromium-Code.

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
