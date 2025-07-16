---
title: topSites.get()
slug: Mozilla/Add-ons/WebExtensions/API/topSites/get
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Erhält ein Array mit Informationen über Seiten, die der Benutzer häufig und kürzlich besucht hat.

Browser führen eine Liste von Seiten, die der Benutzer häufig und kürzlich besucht. Sie verwenden diese Liste, um dem Benutzer zu helfen, leicht zu diesen Orten zurückzukehren. Beispielsweise stellt Firefox standardmäßig eine Liste der am häufigsten besuchten Seiten auf der "Neuer Tab"-Seite bereit.

Um zu bestimmen, welche Seiten in der Liste erscheinen und in welcher Reihenfolge sie erscheinen, kombiniert der Browser "Häufigkeit" - wie oft der Benutzer die Seite besucht hat - mit "Zeitraum" - wie kürzlich der Benutzer die Seite besucht hat.

Der Browser kann dann weitere Filter auf diese Liste anwenden, bevor er sie dem Benutzer präsentiert. Beispielsweise listet die "Neuer Tab"-Seite in Firefox nur eine Seite pro Domain auf, und der Benutzer kann Seiten blockieren, damit sie nicht in der Liste erscheinen.

Die `topSites.get()` API ermöglicht einer Erweiterung den Zugriff auf diese Liste. Ohne Optionen aufgerufen, liefert sie die gefilterte Liste der Seiten - also die, die auf der "Neuer Tab"-Seite erscheinen. Durch die Angabe verschiedener Optionen ist es jedoch möglich, dass eine Erweiterung die ungefilterte Liste der Seiten erhält.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

Um die topSites API zu verwenden, müssen Sie die "topSites" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) haben.

## Syntax

```js-nolint
let gettingTopSites = browser.topSites.get(
    options  // object
)
```

### Parameter

- `options`
  - : `object`. Optionen zur Änderung der zurückgegebenen Seitenliste. Dies kann eine der folgenden Eigenschaften umfassen:
    - `includeBlocked` {{optional_inline}}
      - : `Boolean`. Einschluss von Seiten, die der Benutzer von der "Neuer Tab"-Seite entfernt hat. Standardmäßig `false`.
    - `includeFavicon` {{optional_inline}}
      - : `Boolean`. Einschluss von Favicons in die Ergebnisse, für Seiten, für die sie verfügbar sind. Standardmäßig `false`.
    - `includePinned` {{optional_inline}}
      - : `Boolean`. Beinhaltet Seiten, die der Benutzer zur neuen Firefox-Registerkarte gepinnt hat.
        Standardmäßig `false`.
    - `includeSearchShortcuts` {{optional_inline}}
      - : `Boolean`. Beinhaltet Suchverknüpfungen, die auf der neuen Firefox-Registerkarte erscheinen.
        Standardmäßig `false`.
    - `limit` {{optional_inline}}
      - : `Integer`. Die Anzahl der zurückzugebenden Seiten. Dies muss eine Zahl zwischen 1 und 100 inklusive sein. Standardmäßig 12.
    - `newtab` {{optional_inline}}
      - : `Boolean`. Wenn enthalten, gibt die Methode die Liste der Seiten zurück, die angezeigt wird, wenn der Benutzer einen neuen Tab öffnet. Wenn enthalten und auf `true` gesetzt, ignoriert die Methode alle anderen Parameter außer `limit` und `includeFavicon`. Standardmäßig `false`.
    - `onePerDomain` {{optional_inline}}
      - : `Boolean`. Nur eine Seite pro Domain einbeziehen. Standardmäßig `true`.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Dies wird mit einem Array von {{WebExtAPIRef("topSites.MostVisitedURL", "MostVisitedURL")}} Objekten erfüllt, eines für jede Seite, die auf der "Neuer Tab"-Seite des Browsers angezeigt wird. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Dieser Code protokolliert den Titel und die URL für alle Seiten auf der "Neuer Tab"-Seite:

```js
function logTopSites(topSitesArray) {
  for (const topSite of topSitesArray) {
    console.log(`Title: ${topSite.title}, URL: ${topSite.url}`);
  }
}

function onError(error) {
  console.error(error);
}

browser.topSites.get().then(logTopSites, onError);
```

Dieser Code protokolliert den Titel und die URL für alle Top-Seiten, einschließlich derjenigen, die der Benutzer blockiert hat, und möglicherweise mehrere Seiten in derselben Domain:

```js
function logTopSites(topSitesArray) {
  for (const topSite of topSitesArray) {
    console.log(`Title: ${topSite.title}, URL: ${topSite.url}`);
  }
}

function onError(error) {
  console.error(error);
}

browser.topSites
  .get({
    includeBlocked: true,
    onePerDomain: false,
  })
  .then(logTopSites, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.topSites`](https://developer.chrome.com/docs/extensions/reference/api/topSites) API von Chromium.

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
