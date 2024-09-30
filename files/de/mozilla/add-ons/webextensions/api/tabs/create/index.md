---
title: tabs.create()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/create
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Erstellt einen neuen Tab.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let creating = browser.tabs.create(
  createProperties   // object
)
```

### Parameter

- `createProperties`

  - : `object`. Eigenschaften, die dem neuen Tab zugewiesen werden. Um mehr über diese Eigenschaften zu erfahren, sehen Sie sich die {{WebExtAPIRef("tabs.Tab")}} Dokumentation an.

    - `active` {{optional_inline}}
      - : `boolean`. Ob der Tab der aktive Tab im Fenster werden soll. Wenn `false`, hat dies keine Auswirkung. Beeinflusst nicht, ob das Fenster fokussiert ist (siehe {{WebExtAPIRef('windows.update')}}). Standardwert ist `true`.
    - `cookieStoreId` {{optional_inline}}
      - : `string`. Verwenden Sie dies, um einen Tab zu erstellen, dessen Cookie-Store-ID `cookieStoreId` ist. Diese Option ist nur verfügbar, wenn die Erweiterung die `"cookies"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) hat. Weitere Informationen finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
    - `discarded` {{optional_inline}}
      - : `boolean`. Ob der Tab erstellt und in der Tableiste sichtbar gemacht wird, ohne dass Inhalte in den Speicher geladen werden, ein Zustand, der als verworfen bekannt ist. Der Inhalt des Tabs wird geladen, wenn der Tab aktiviert wird.
    - `index` {{optional_inline}}
      - : `integer`. Die Position, die der Tab im Fenster einnehmen soll. Der angegebene Wert wird zwischen null und der Anzahl der Tabs im Fenster begrenzt.
    - `muted` {{optional_inline}}
      - : `boolean`. Ob der Tab stummgeschaltet werden soll. Standardwert ist `false`.
    - `openerTabId` {{optional_inline}}
      - : `integer`. Die ID des Tabs, der diesen Tab geöffnet hat. Wenn angegeben, muss der öffnende Tab im selben Fenster wie der neu erstellte Tab sein.
    - `openInReaderMode` {{optional_inline}}
      - : `boolean`. Wenn `true`, öffnen Sie diesen Tab im [Lesemodus](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode). Standardwert ist `false`.
    - `pinned` {{optional_inline}}
      - : `boolean`. Ob der Tab angeheftet werden soll. Standardwert ist `false`.
    - `selected` {{optional_inline}}

      - : `boolean`. Ob der Tab der ausgewählte Tab im Fenster werden soll. Standardwert ist `true`.

        > [!WARNING]
        > Diese Eigenschaft ist veraltet und wird in Firefox nicht unterstützt. Verwenden Sie stattdessen `active`.

    - `title` {{optional_inline}}
      - : `string`. Der Titel des Tabs. Nur erlaubt, wenn der Tab mit `discarded` auf `true` erstellt wird.
    - `url` {{optional_inline}}

      - : `string`. Die URL, zu der der Tab anfangs navigieren soll. Standardwert ist die Neue-Tab-Seite.

        Vollständig qualifizierte URLs müssen ein Schema enthalten (beispielsweise 'http\://www.google.com' statt 'www.google.com').

        Aus Sicherheitsgründen darf dies in Firefox keine privilegierte URL sein. Daher schlägt die Übergabe einer der folgenden URLs fehl:

        - chrome: URLs
        - [javascript: URLs](/de/docs/Web/URI/Schemes/javascript)
        - [data: URLs](/de/docs/Web/URI/Schemes/data)
        - file: URLs (d.h. Dateien auf dem Dateisystem. Um jedoch eine Datei zu verwenden, die in die Erweiterung eingebunden ist, siehe unten)
        - privilegierte about: URLs (z. B. `about:config`, `about:addons`, `about:debugging`). Nicht privilegierte URLs (z. B. `about:blank`) sind erlaubt.
        - Die Neue-Tab-Seite (`about:newtab`) kann geöffnet werden, wenn kein Wert für URL angegeben ist.

        Um eine Seite zu laden, die in Ihre Erweiterung eingebunden ist, geben Sie eine absolute URL an, die bei der manifest.json-Datei der Erweiterung beginnt. Beispielsweise: '/path/to/my-page.html'. Wenn Sie das führende '/' weglassen, wird die URL als relative URL behandelt, und verschiedene Browser können unterschiedliche absolute URLs konstruieren.

    - `windowId` {{optional_inline}}
      - : `integer`. Das Fenster, in dem der neue Tab erstellt werden soll. Standardwert ist das aktuelle Fenster.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('tabs.Tab')}} Objekt erfüllt wird, das Details über den erstellten Tab enthält. Wenn der Tab nicht erstellt werden konnte (zum Beispiel, weil `url` ein privilegiertes Schema verwendet), wird das Promise mit einer Fehlermeldung abgelehnt.

Das von `browser.tabs.create()` zurückgegebene Promise wird aufgelöst, sobald der Tab erstellt wurde. Der Tab kann noch geladen werden. Um zu erkennen, wann der Tab das Laden abgeschlossen hat, hören Sie auf das {{WebExtAPIRef('tabs.onUpdated')}} oder das {{WebExtAPIRef('webNavigation.onCompleted')}} Ereignis, bevor Sie `tabs.create` aufrufen.

## Beispiele

Öffnen Sie "https://example.org" in einem neuen Tab:

```js
function onCreated(tab) {
  console.log(`Created new tab: ${tab.id}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener(() => {
  let creating = browser.tabs.create({
    url: "https://example.org",
  });
  creating.then(onCreated, onError);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-create) API von Chromium. Diese Dokumentation ist abgeleitet aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

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
