---
title: webNavigation.onCommitted
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/onCommitted
l10n:
  sourceCommit: 14c57deab8b4924b564a15f3aef6bfb2a1834a46
---

Wird ausgelöst, wenn eine Navigation festgeschrieben wird. Mindestens ein Teil des neuen Dokuments wurde vom Server empfangen und der Browser hat beschlossen, zum neuen Dokument zu wechseln.

## Syntax

```js-nolint
browser.webNavigation.onCommitted.addListener(
  listener,                 // function
  filter                    // optional object
)
browser.webNavigation.onCommitted.removeListener(listener)
browser.webNavigation.onCommitted.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Hört auf, diesem Ereignis zuzuhören. Das Argument `listener` ist der Listener, der entfernt werden soll.
- `hasListener(listener)`
  - : Prüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis auftritt. Der Funktion wird dieses Argument übergeben:
    - `details`
      - : `object`. Details zum Navigationsereignis. Siehe den Abschnitt [details](#details) für weitere Informationen.

- `filter` {{optional_inline}}
  - : `object`. Ein Objekt, das eine einzelne Eigenschaft `url` enthält, welche ein `Array` von {{WebExtAPIRef("events.UrlFilter")}} Objekten ist. Wenn Sie diesen Parameter angeben, wird das Ereignis nur für Übergänge zu URLs ausgelöst, die mit mindestens einem `UrlFilter` im Array übereinstimmen. Wenn Sie diesen Parameter weglassen, wird das Ereignis für alle Übergänge ausgelöst.

## Zusätzliche Objekte

### details

- `documentId`
  - : `string`. Eine UUID des geladenen Dokuments.
- `parentDocumentId`
  - : `string`. Eine UUID des übergeordneten Dokuments, das den Rahmen besitzt. Wird nicht gesetzt, wenn es keinen Elternteil gibt.
- `documentLifecycle`
  - : `string`. Der Lebenszyklus, in dem sich das Dokument befindet. Gibt die Werte `"prerender"`, `"active"`, `"cached"` und `"pending_deletion"` zurück.
- `tabId`
  - : `integer`. Die ID des Tabs, in dem die Navigation stattfinden wird.
- `url`
  - : `string`. Die URL, zu der der gegebene Rahmen navigieren wird.
- `processId` {{optional_inline}} {{deprecated_inline}}
  - : `integer`. Dieser Wert wird in modernen Browsern nicht gesetzt. Wenn er gesetzt war, repräsentierte er die ID des Prozesses, der den Renderer für diesen Tab ausführte.
- `frameId`
  - : `integer`. Der Rahmen, in dem die Navigation stattfinden wird. `0` gibt an, dass die Navigation im obersten Browsing-Kontext des Tabs erfolgt, nicht in einem verschachtelten {{HTMLElement("iframe")}}. Ein positiver Wert gibt an, dass die Navigation in einem verschachtelten iframe erfolgt. Rahmen-IDs sind für einen gegebenen Tab und Prozess eindeutig.
- `parentFrameId`
  - : `integer`. ID des Elternrahmens dieses Rahmens. Auf `-1` gesetzt, wenn es sich um einen obersten Rahmen handelt.
- `frameType`
  - : `string`. Der Rahmentyp, in dem die Navigation erfolgt ist. Gibt die Werte `"outermost_frame"`, `"fenced_frame"` und `"sub_frame"` zurück.
- `timeStamp`
  - : `number`. Die Zeit, zu der die Navigation festgeschrieben wurde, in [Millisekunden seit der Epoche](https://de.wikipedia.org/wiki/Unixzeit).
- `transitionType`
  - : {{WebExtAPIRef("webNavigation.transitionType", "transitionType")}}. Der Grund für die Navigation. (Beispielsweise `"link"`, wenn der Benutzer auf einen Link geklickt hat, oder `"reload"`, wenn der Benutzer die Seite neu geladen hat.)
- `transitionQualifiers`
  - : `Array` von {{WebExtAPIRef("webNavigation.transitionQualifier", "transitionQualifier")}}. Zusätzliche Informationen zur Navigation: beispielsweise, ob es eine server- oder clientseitige Weiterleitung gab.

## Beispiele

Gibt die Ziel-URLs und zusätzliche Übergangsinformationen für `onCommitted` aus, wenn der Hostname der Ziel-URL "example.com" enthält oder mit "developer" beginnt.

```js
const filter = {
  url: [{ hostContains: "example.com" }, { hostPrefix: "developer" }],
};

function logOnCommitted(details) {
  console.log(`target URL: ${details.url}`);
  console.log(`transition type: ${details.transitionType}`);
  console.log(`transition qualifiers: ${details.transitionQualifiers}`);
}

browser.webNavigation.onCommitted.addListener(logOnCommitted, filter);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation#event-onBeforeNavigate) API. Diese Dokumentation wurde abgeleitet aus [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) im Chromium-Code.

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
