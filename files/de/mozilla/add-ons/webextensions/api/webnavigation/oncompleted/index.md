---
title: webNavigation.onCompleted
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/onCompleted
l10n:
  sourceCommit: 9791add3508e087982097f25fbd367c21bcb8305
---

Wird ausgelöst, wenn ein Dokument, einschließlich der zugehörigen Ressourcen, vollständig geladen und initialisiert ist. Dies entspricht dem Fensterereignis [`load`](/de/docs/Web/API/Window/load_event).

## Syntax

```js-nolint
browser.webNavigation.onCompleted.addListener(
  listener,                   // function
  filter                      // optional object
)
browser.webNavigation.onCompleted.removeListener(listener)
browser.webNavigation.onCompleted.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:
    - `details`
      - : `object`. Details über das Navigationsevent. Siehe den [Abschnitt Details](#details) für mehr Informationen.

- `filter` {{optional_inline}}
  - : `object`. Ein Objekt mit einer einzigen Eigenschaft `url`, die ein `Array` von {{WebExtAPIRef("events.UrlFilter")}} Objekten ist. Wenn Sie diesen Parameter angeben, wird das Ereignis nur für Übergänge zu URLs ausgelöst, die mindestens einem `UrlFilter` im Array entsprechen. Wenn Sie diesen Parameter weglassen, wird das Ereignis für alle Übergänge ausgelöst.

## Zusätzliche Objekte

### details

- `tabId`
  - : `integer`. Die ID des Tabs, in dem die Navigation erfolgt ist.
- `url`
  - : `string`. Die URL, zu der das angegebene Frame navigiert hat.
- `frameId`
  - : `integer`. Frame, in dem die Navigation stattgefunden hat. `0` zeigt an, dass die Navigation im obersten Browserkontext des Tabs und nicht in einem geschachtelten {{HTMLElement("iframe")}} erfolgt ist. Ein positiver Wert zeigt an, dass die Navigation in einem geschachtelten iframe erfolgt ist. Frame-IDs sind einzigartig für einen bestimmten Tab und Prozess.
- `frameType`
  - : `string`. Der Typ des Frames, in dem die Navigation erfolgt ist. Gibt die Werte `"outermost_frame"`, `"fenced_frame"` und `"sub_frame"` zurück.
- `parentFrameId`
  - : `integer`. ID des Eltern-Frames. Auf `-1` gesetzt, wenn dies ein oberstes Frame ist.
- `documentId`
  - : `string`. Eine UUID des geladenen Dokuments. Siehe den Artikel [Arbeiten mit documentId](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId) für weitere Informationen.
- `parentDocumentId`
  - : `string`. Eine UUID des übergeordneten Dokuments, das das Frame besitzt. Nicht gesetzt, wenn es kein übergeordnetes gibt. Siehe den Artikel [Arbeiten mit documentId](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId) für weitere Informationen.
- `documentLifecycle`
  - : `string`. Der Lebenszyklus, in dem sich das Dokument befindet. Gibt die Werte `"prerender"`, `"active"`, `"cached"` und `"pending_deletion"` zurück.
- `timeStamp`
  - : `number`. Der Zeitpunkt, zu dem die Seite das Laden abgeschlossen hat, in [Millisekunden seit der Epoche](https://de.wikipedia.org/wiki/Unixzeit).
- `processId` {{optional_inline}} {{deprecated_inline}}
  - : `integer`. Dieser Wert wird in modernen Browsern nicht gesetzt. Wenn er gesetzt war, stellte er die ID des Prozesses dar, der den Renderer für diesen Tab ausführt.

## Beispiele

Protokolliert die Ziel-URLs für `onCompleted`, wenn der Hostname der Ziel-URL "example.com" enthält oder mit "developer" beginnt.

```js
const filter = {
  url: [{ hostContains: "example.com" }, { hostPrefix: "developer" }],
};

function logOnCompleted(details) {
  console.log(`onCompleted: ${details.url}`);
}

browser.webNavigation.onCompleted.addListener(logOnCompleted, filter);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation#event-onBeforeNavigate) API. Diese Dokumentation ist abgeleitet von [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) im Chromium-Code.

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
