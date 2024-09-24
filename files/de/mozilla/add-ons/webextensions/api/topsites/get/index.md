---
title: topSites.get()
slug: Mozilla/Add-ons/WebExtensions/API/topSites/get
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Erhält ein Array mit Informationen über Seiten, die der Benutzer häufig und kürzlich besucht hat.

Browser führen eine Liste von Seiten, die der Benutzer häufig und kürzlich besucht. Sie verwenden diese Liste, um dem Benutzer zu helfen, leicht zu diesen Orten zurückzukehren. Zum Beispiel liefert Firefox standardmäßig eine Liste der meistbesuchten Seiten auf der "Neuer Tab"-Seite.

Um zu bestimmen, welche Seiten in der Liste erscheinen und in welcher Reihenfolge sie erscheinen, kombiniert der Browser "Häufigkeit" - wie oft der Benutzer die Seite besucht hat - und "Aktualität" - wie kürzlich der Benutzer die Seite besucht hat.

Der Browser kann dann zusätzliche Filter auf diese Liste anwenden, bevor er sie dem Benutzer präsentiert. Zum Beispiel listet die "Neuer Tab"-Seite in Firefox nur eine Seite pro Domain auf, und der Benutzer kann Seiten blockieren, damit sie nicht in der Liste erscheinen.

Die `topSites.get()` API ermöglicht es einer Erweiterung, Zugriff auf diese Liste zu erhalten. Ohne Optionen aufgerufen, liefert sie die gefilterte Liste von Seiten - also die, die auf der "Neuer Tab"-Seite erscheint. Durch Bereitstellung verschiedener Optionen kann eine Erweiterung jedoch auch die ungefilterte Liste von Seiten erhalten.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

Um die topSites API zu nutzen, müssen Sie die "topSites" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) besitzen.

## Syntax

```js-nolint
let gettingTopSites = browser.topSites.get(
    options  // object
)
```

### Parameter

- `options`

  - : `object`. Optionen zur Modifikation der zurückgegebenen Seitenliste. Dies kann eine der folgenden Eigenschaften enthalten:

    - `includeBlocked` {{optional_inline}}
      - : `Boolean`. Beinhaltet Seiten, die der Benutzer von der "Neuer Tab"-Seite entfernt hat. Standardmäßig `false`.
    - `includeFavicon` {{optional_inline}}
      - : `Boolean`. Beinhaltet Favicons in den Ergebnissen, für Seiten, bei denen sie verfügbar sind. Standardmäßig `false`.
    - `includePinned` {{optional_inline}}
      - : `Boolean`. Beinhaltet Seiten, die der Benutzer auf der neuen Tab-Seite von Firefox angeheftet hat.
        Standardmäßig `false`.
    - `includeSearchShortcuts` {{optional_inline}}
      - : `Boolean`. Beinhaltet Suchkurzbefehle, die auf der neuen Tab-Seite von Firefox erscheinen.
        Standardmäßig `false`.
    - `limit` {{optional_inline}}
      - : `Integer`. Die Anzahl der zurückzugebenden Seiten. Dies muss eine Zahl zwischen 1 und 100 sein, einschließlich. Standardmäßig 12.
    - `newtab` {{optional_inline}}
      - : `Boolean`. Wenn enthalten, gibt die Methode die Liste der Seiten zurück, die angezeigt wird, wenn der Benutzer einen neuen Tab öffnet. Wenn enthalten und auf `true` gesetzt, ignoriert die Methode alle anderen Parameter außer `limit` und `includeFavicon`. Standardmäßig `false`.
    - `onePerDomain` {{optional_inline}}
      - : `Boolean`. Beinhaltet nur eine Seite pro Domain. Standardmäßig `true`.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Dieses wird mit einem Array von {{WebExtAPIRef("topSites.MostVisitedURL", "MostVisitedURL")}} Objekten erfüllt, eines für jede Seite, die auf der "Neuer Tab"-Seite des Browsers aufgelistet ist. Tritt ein Fehler auf, wird das Versprechen mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

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

Dieser Code protokolliert den Titel und die URL für alle Top-Seiten, einschließlich derjenigen, die der Benutzer blockiert hat, und potenziell einschließlich mehrerer Seiten in derselben Domain:

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

> [!NOTE]
> Diese API basiert auf der API [`chrome.topSites`](https://developer.chrome.com/docs/extensions/reference/api/topSites) von Chromium.

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
