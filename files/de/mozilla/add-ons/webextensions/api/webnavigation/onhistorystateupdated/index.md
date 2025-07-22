---
title: webNavigation.onHistoryStateUpdated
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/onHistoryStateUpdated
l10n:
  sourceCommit: 14c57deab8b4924b564a15f3aef6bfb2a1834a46
---

Wird ausgelöst, wenn die Seite die [History-API](/de/docs/Web/API/History_API/Working_with_the_History_API) verwendet hat, um die URL in der Adressleiste des Browsers zu aktualisieren. Alle zukünftigen Ereignisse für diesen Frame verwenden die aktualisierte URL.

## Syntax

```js-nolint
browser.webNavigation.onHistoryStateUpdated.addListener(
  listener,                   // function
  filter                      // optional object
)
browser.webNavigation.onHistoryStateUpdated.removeListener(listener)
browser.webNavigation.onHistoryStateUpdated.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Zuhören dieses Ereignisses. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Prüfen, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis auftritt. Die Funktion erhält dieses Argument:
    - `details`
      - : `object`. Details über das Navigationsevent. Weitere Informationen finden Sie im Abschnitt [Details](#details).

- `filter` {{optional_inline}}
  - : `object`. Ein Objekt, das eine einzige Eigenschaft `url` enthält, die ein `Array` von {{WebExtAPIRef("events.UrlFilter")}} Objekten ist. Wenn Sie diesen Parameter einschließen, wird das Ereignis nur bei Übergängen zu URLs ausgelöst, die mindestens einem `UrlFilter` im Array entsprechen. Wenn Sie diesen Parameter weglassen, wird das Ereignis bei allen Übergängen ausgelöst.

## Zusätzliche Objekte

### details

- `tabId`
  - : `integer`. Die ID des Tabs, in dem die Navigation stattfinden wird.
- `url`
  - : `string`. Die URL, zu der der gegebene Frame navigieren wird.
- `processId` {{optional_inline}} {{deprecated_inline}}
  - : `integer`. Dieser Wert wird in modernen Browsern nicht gesetzt. Wenn er gesetzt war, repräsentierte er die ID des Prozesses, der den Renderer für diesen Tab ausführt.
- `frameId`
  - : `integer`. Frame, in dem die Navigation stattfinden wird. `0` zeigt an, dass die Navigation im obersten Browsing-Kontext des Tabs und nicht in einem verschachtelten {{HTMLElement("iframe")}} erfolgt. Ein positiver Wert zeigt an, dass die Navigation in einem verschachtelten iframe erfolgt. Frame-IDs sind eindeutig für einen bestimmten Tab und Prozess.
- `parentFrameId`
  - : `integer`. ID des übergeordneten Rahmens dieses Frames. Auf `-1` gesetzt, wenn dies ein oberster Frame ist.
- `timeStamp`
  - : `number`. Die Zeit, zu der die URL von der History-API geändert wurde, in [Millisekunden seit der Epoche](https://de.wikipedia.org/wiki/Unixzeit).
- `transitionType`
  - : {{WebExtAPIRef("webNavigation.transitionType", "transitionType")}}. Der Grund für die Navigation: Zum Beispiel `"link"`, wenn der Benutzer auf einen Link geklickt hat.
- `transitionQualifiers`
  - : `Array` von {{WebExtAPIRef("webNavigation.transitionQualifier", "transitionQualifier")}}. Zusätzliche Informationen über die Navigation: Zum Beispiel, ob es eine Weiterleitung vom Server oder Client gab.

## Beispiele

Protokolliert die Ziel-URLs und zusätzliche Übergangsinformationen für `onHistoryStateUpdated`, wenn der Hostname der Ziel-URL "example.com" enthält oder mit "developer" beginnt.

```js
const filter = {
  url: [{ hostContains: "example.com" }, { hostPrefix: "developer" }],
};

function logOnHistoryStateUpdated(details) {
  console.log(`onHistoryStateUpdated: ${details.url}`);
  console.log(`Transition type: ${details.transitionType}`);
  console.log(`Transition qualifiers: ${details.transitionQualifiers}`);
}

browser.webNavigation.onHistoryStateUpdated.addListener(
  logOnHistoryStateUpdated,
  filter,
);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation#event-onBeforeNavigate) API. Diese Dokumentation stammt aus [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) im Chromium-Code.

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
