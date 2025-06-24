---
title: tabs.onUpdated
slug: Mozilla/Add-ons/WebExtensions/API/tabs/onUpdated
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Wird ausgelöst, wenn ein Tab aktualisiert wird.

Wenn der Benutzer zu einer neuen URL in einem Tab navigiert, werden normalerweise mehrere `onUpdated`-Ereignisse generiert, da verschiedene Eigenschaften des {{WebExtAPIRef("tabs.Tab")}}-Objekts aktualisiert werden. Dies schließt die `url` ein, aber auch potenziell die `title`- und `favIconUrl`-Eigenschaften. Die `status`-Eigenschaft wechselt zwischen `"loading"` und `"complete"`.

Dieses Ereignis wird auch bei Änderungen von Eigenschaften eines Tabs ausgelöst, die keine Navigation beinhalten, wie das Anheften und Lösen (was die `pinned`-Eigenschaft aktualisiert) und das Stummschalten oder Aufheben der Stummschaltung (was die Eigenschaften `audible` und `mutedInfo` aktualisiert).

Sie können dieses Ereignis filtern, sodass es nur für Tabs ausgelöst wird, deren URLs bestimmten [Mustern](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) entsprechen, Änderungen an bestimmten Eigenschaften vornehmen, Änderungen an einem Tab oder einem Fenster betreffen, oder beliebige Kombinationen dieser Einschränkungen.

## Syntax

```js-nolint
browser.tabs.onUpdated.addListener(
  listener, // function
  filter     // optional object
)
browser.tabs.onUpdated.removeListener(listener)
browser.tabs.onUpdated.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(callback, filter)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen dieses Ereignisses. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Prüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:
    - `tabId`
      - : `integer`. Die ID des aktualisierten Tabs.
    - `changeInfo`
      - : `object`. Eigenschaften des Tabs, die sich geändert haben. Siehe den Abschnitt [changeInfo](#changeinfo_2) für weitere Details.
    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}. Der neue Zustand des Tabs.

- `filter` {{optional_inline}}

  - : `object`. Eine Menge von Filtern, die die an diesen Listener gesendeten Ereignisse einschränken. Dieses Objekt kann eine oder mehrere dieser Eigenschaften haben. Ereignisse werden nur gesendet, wenn alle angegebenen Filter erfüllt sind.

    - `urls`
      - : `Array`. Ein Array von [übereinstimmenden Mustern](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns). Löst das Ereignis nur für Tabs aus, deren aktuelle `url`-Eigenschaft einem der Muster entspricht.
    - `properties`

      - : `Array`. Ein Array von Zeichenketten, bestehend aus unterstützten {{WebExtAPIRef("tabs.Tab")}}-Objekteigenschaftsnamen. Löst das Ereignis nur für Änderungen an einer der im Array genannten Eigenschaften aus. Diese Eigenschaften können verwendet werden:

        - "attention"
        - "autoDiscardable"
        - "audible"
        - "discarded"
        - "favIconUrl"
        - "groupId"
        - "hidden"
        - "isArticle"
        - "mutedInfo"
        - "openerTabId"
        - "pinned"
        - "status"
        - "title"
        - "url"

        > [!NOTE]
        > Der "url"-Wert wird seit Firefox 88 unterstützt. In Firefox 87 und früher können "url"-Änderungen beobachtet werden, indem nach "status" gefiltert wird.

    - `tabId`
      - : `Integer`. Löst dieses Ereignis nur für den Tab mit dieser ID aus.
    - `windowId`
      - : `Integer`. Löst dieses Ereignis nur für Tabs im Fenster mit dieser ID aus.

## Zusätzliche Objekte

### changeInfo

Listet die Änderungen am Zustand des aktualisierten Tabs auf. Um mehr über diese Eigenschaften zu erfahren, siehe die {{WebExtAPIRef("tabs.Tab")}}-Dokumentation. Beachten Sie, dass nicht alle {{WebExtAPIRef("tabs.Tab")}}-Eigenschaften unterstützt werden.

- `attention` {{optional_inline}}
  - : `boolean`. Gibt an, ob der Tab Aufmerksamkeit erregt. Zum Beispiel ist `attention` `true`, wenn der Tab einen Modal-Dialog anzeigt.
- `audible` {{optional_inline}}
  - : `boolean`. Der neue hörbare Zustand des Tabs.
- `autoDiscardable` {{optional_inline}}
  - : `boolean`. Ob der Tab vom Browser verworfen werden kann. Der Standardwert ist `true`. Wenn auf `false` gesetzt, kann der Browser den Tab nicht automatisch verwerfen. Der Tab kann jedoch durch {{WebExtAPIRef("tabs.discard")}} verworfen werden.
- `discarded` {{optional_inline}}
  - : `boolean`. Ob der Tab verworfen wurde. Ein verworfener Tab ist einer, dessen Inhalt aus dem Speicher entladen wurde, aber im Tab-Bereich sichtbar bleibt. Sein Inhalt wird neu geladen, sobald er aktiviert wird.
- `favIconUrl` {{optional_inline}}
  - : `string`. Die neue Favicon-URL des Tabs. Wird nicht enthalten, wenn ein Tab sein Favicon verliert (navigieren von einer Seite mit Favicon zu einer Seite ohne). Prüfen Sie `favIconUrl` im [tab](#tab) Abschnitt.
- `groupId` {{optional_inline}}
  - : `integer`. Die ID der Gruppe, in der sich die Tabs befinden oder `-1` ({{WebExtAPIRef("tabGroups.TAB_GROUP_ID_NONE")}}) für ungruppierte Tabs.
- `hidden` {{optional_inline}}
  - : `boolean`. `True`, wenn der Tab {{WebExtAPIRef("tabs.hide()", "hidden")}} ist.
- `isArticle` {{optional_inline}}
  - : `boolean`. `True`, wenn der Tab ein Artikel ist und daher für die Anzeige im [Reader Mode](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode) geeignet ist.
- `mutedInfo` {{optional_inline}}
  - : {{WebExtAPIRef('tabs.MutedInfo')}}. Der neue stummgeschaltete Zustand des Tabs und der Grund für die Änderung.
- `openerTabId` {{optional_inline}}
  - : `integer`. Die ID des Tabs, der diesen Tab geöffnet hat, falls vorhanden. Diese Eigenschaft ist nur vorhanden, wenn der eröffnende Tab existiert und sich im gleichen Fenster befindet.
- `pinned` {{optional_inline}}
  - : `boolean`. Der neue angeheftete Zustand des Tabs.
- `status` {{optional_inline}}
  - : `string`. Der Status des Tabs. Kann entweder _loading_ oder _complete_ sein.
- `title` {{optional_inline}}
  - : `string`. Der neue Titel des Tabs.
- `url` {{optional_inline}}
  - : `string`. Die URL des Tabs, falls sie sich geändert hat.

## Beispiele

Hören Sie auf und protokollieren Sie alle Änderungsinformationen und den neuen Zustand:

```js
function handleUpdated(tabId, changeInfo, tabInfo) {
  console.log(`Updated tab: ${tabId}`);
  console.log("Changed attributes: ", changeInfo);
  console.log("New tab Info: ", tabInfo);
}

browser.tabs.onUpdated.addListener(handleUpdated);
```

Protokollieren Sie Änderungen an URLs:

```js
function handleUpdated(tabId, changeInfo, tabInfo) {
  if (changeInfo.url) {
    console.log(`Tab: ${tabId} URL changed to ${changeInfo.url}`);
  }
}

browser.tabs.onUpdated.addListener(handleUpdated);
```

### Filterbeispiele

Protokollieren Sie Änderungen nur für Tabs, deren `url`-Eigenschaft von `https://developer.mozilla.org/*` oder `https://mastodon.social/@mdn` [übereinstimmt](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns):

```js
const pattern1 = "https://developer.mozilla.org/*";
const pattern2 = "https://mastodon.social/@mdn";

const filter = {
  urls: [pattern1, pattern2],
};

function handleUpdated(tabId, changeInfo, tabInfo) {
  console.log(`Updated tab: ${tabId}`);
  console.log("Changed attributes: ", changeInfo);
  console.log("New tab Info: ", tabInfo);
}

browser.tabs.onUpdated.addListener(handleUpdated, filter);
```

Protokollieren Sie Änderungen nur an der `pinned`-Eigenschaft der Tabs (also Anheften und Lösen):

```js
const filter = {
  properties: ["pinned"],
};

function handleUpdated(tabId, changeInfo, tabInfo) {
  console.log(`Updated tab: ${tabId}`);
  console.log("Changed attributes: ", changeInfo);
  console.log("New tab Info: ", tabInfo);
}

browser.tabs.onUpdated.addListener(handleUpdated, filter);
```

Kombinieren Sie beide vorherigen Filter, protokollieren Sie nur, wenn die `pinned`-Eigenschaft von Tabs geändert wird, deren `url`-Eigenschaft von `https://developer.mozilla.org/*` oder `https://mastodon.social/@mdn` [übereinstimmt](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns):

```js
const pattern1 = "https://developer.mozilla.org/*";
const pattern2 = "https://mastodon.social/@mdn";

const filter = {
  urls: [pattern1, pattern2],
  properties: ["pinned"],
};

function handleUpdated(tabId, changeInfo, tabInfo) {
  console.log(`Updated tab: ${tabId}`);
  console.log("Changed attributes: ", changeInfo);
  console.log("New tab Info: ", tabInfo);
}

browser.tabs.onUpdated.addListener(handleUpdated, filter);
```

Protokollieren Sie Änderungen nur, wenn die `pinned`-Eigenschaft von Tabs geändert wird, deren `url`-Eigenschaft von `https://developer.mozilla.org/*` oder `https://mastodon.social/@mdn` [übereinstimmt](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) und der Tab Teil des aktuellen Browserfensters war, als das Update-Ereignis ausgelöst wurde:

```js
const pattern1 = "https://developer.mozilla.org/*";
const pattern2 = "https://mastodon.social/@mdn";

const filter = {
  urls: [pattern1, pattern2],
  properties: ["pinned"],
  windowId: browser.windows.WINDOW_ID_CURRENT,
};

function handleUpdated(tabId, changeInfo, tabInfo) {
  console.log(`Updated tab: ${tabId}`);
  console.log("Changed attributes: ", changeInfo);
  console.log("New tab Info: ", tabInfo);
}

browser.tabs.onUpdated.addListener(handleUpdated, filter);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#event-onUpdated) API. Diese Dokumentation ist abgeleitet von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

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

{{AddonSidebar}}
