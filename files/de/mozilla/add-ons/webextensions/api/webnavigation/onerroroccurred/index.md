---
title: webNavigation.onErrorOccurred
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/onErrorOccurred
l10n:
  sourceCommit: 9791add3508e087982097f25fbd367c21bcb8305
---

Wird ausgelöst, wenn ein Fehler auftritt und die Navigation abgebrochen wird. Dies kann passieren, wenn entweder ein Netzwerkfehler aufgetreten ist oder der Benutzer die Navigation abgebrochen hat.

## Syntax

```js-nolint
browser.webNavigation.onErrorOccurred.addListener(
  listener,                   // function
  filter                      // optional object
)
browser.webNavigation.onErrorOccurred.removeListener(listener)
browser.webNavigation.onErrorOccurred.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`, `addListener(listener, filter)`
  - : Fügt einen Listener zu diesem Ereignis hinzu.
- `removeListener(listener)`
  - : Hört auf, auf dieses Ereignis zu hören. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt.

    Die `listener`-Funktion wird mit diesen Argumenten aufgerufen:
    - `details`
      - : [`object`](#details). Details über das Navigationsevent. **`details`** hat die folgenden Eigenschaften:
        - `tabId`
          - : `integer`. Die ID des Tabs, in dem die Navigation stattfand.
        - `url`
          - : `string`. Die URL, zu der der gegebene Frame navigierte.
        - `frameId`
          - : `integer`. Frame, in dem die Navigation stattfand.

            `0` zeigt an, dass die Navigation im obersten Browsing-Kontext des Tabs stattfand, nicht in einem verschachtelten {{HTMLElement("iframe")}}.

            Ein positiver Wert zeigt an, dass die Navigation in einem verschachtelten iframe stattfand.

            Frame-IDs sind für einen gegebenen Tab und Prozess einzigartig.

        - `frameType`
          - : `string`. Der Typ des Frames, in dem die Navigation stattfand. Liefert die Werte `"outermost_frame"`, `"fenced_frame"` und `"sub_frame"`.
        - `parentFrameId`
          - : `integer`. ID des übergeordneten Frames dieses Frames. Auf `-1` gesetzt, wenn dies ein oberster Frame ist.
        - `documentId`
          - : `string`. Eine UUID des geladenen Dokuments. Weitere Informationen finden Sie im Artikel [Mit documentId arbeiten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId).
        - `parentDocumentId`
          - : `string`. Eine UUID des übergeordneten Dokuments, das den Frame besitzt. Nicht gesetzt, wenn es kein übergeordnetes Element gibt. Weitere Informationen finden Sie im Artikel [Mit documentId arbeiten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId).
        - `documentLifecycle`
          - : `string`. Der Lebenszyklus, in dem sich das Dokument befindet. Liefert die Werte `"prerender"`, `"active"`, `"cached"` und `"pending_deletion"`.
        - `timeStamp`
          - : `number`. Der Zeitpunkt, zu dem der Fehler aufgetreten ist, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
        - `processId` {{optional_inline}} {{deprecated_inline}}
          - : `integer`. Dieser Wert wird in modernen Browsern nicht gesetzt. Er repräsentierte früher die ID des Prozesses, der den Renderer für diesen Tab ausführte.
        - `error`
          - : `string`. Der Fehlercode. Dies ist ein interner Fehlercode und es wird nicht garantiert, dass er gleich bleibt oder in verschiedenen Browsern konsistent ist.

- `filter` {{optional_inline}}
  - : `object`. Ein Objekt, das eine einzige Eigenschaft `url` enthält, die ein `Array` von {{WebExtAPIRef("events.UrlFilter")}}-Objekten ist.

    Wenn Sie diesen Parameter einschließen, wird das Ereignis nur für Übergänge zu URLs ausgelöst, die mit mindestens einem `UrlFilter` im Array übereinstimmen.

    Wenn Sie diesen Parameter weglassen, wird das Ereignis für alle Übergänge ausgelöst.

## Beispiele

Protokolliert die Ziel-URLs für `onErrorOccurred`, wenn der `hostname` der Ziel-URL `"example.com"` enthält oder mit `"developer"` beginnt.

```js
const filter = {
  url: [{ hostContains: "example.com" }, { hostPrefix: "developer" }],
};

function logOnErrorOccurred(details) {
  console.log(`onErrorOccurred: ${details.url}`);
  console.log(details.error);
}

browser.webNavigation.onErrorOccurred.addListener(logOnErrorOccurred, filter);
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
