---
title: tabs.Tab
slug: Mozilla/Add-ons/WebExtensions/API/tabs/Tab
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Der Typ **`tabs.Tab`** enthält Informationen über einen Tab. Dies bietet Zugang zu Informationen darüber, welche Inhalte sich im Tab befinden, wie groß die Inhalte sind, welche speziellen Zustände oder Einschränkungen gelten und so weiter.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `active`

  - : `boolean`. Gibt an, ob der Tab in seinem Fenster aktiv ist. Dies kann wahr sein, auch wenn das Fenster des Tabs derzeit nicht im Fokus steht.

    Der aktive Tab ist normalerweise der ausgewählte. Auf Firefox für Android öffnen Erweiterungspopups jedoch in einem neuen Tab. Wenn dieser Popup-Tab ausgewählt ist, wird stattdessen der Tab aktiv sein, in dem das Popup geöffnet wurde.

- `attention` {{optional_inline}}
  - : `boolean`. Gibt an, ob der Tab Aufmerksamkeit erregt. Beispielsweise wird `attention` wahr sein, wenn der Tab ein modales Dialogfenster anzeigt.
- `audible` {{optional_inline}}
  - : `boolean`. Gibt an, ob der Tab Ton erzeugt. Der Benutzer hört den Ton jedoch nicht, wenn der Tab stummgeschaltet ist (siehe die `mutedInfo`-Eigenschaft).
- `autoDiscardable` {{optional_inline}}
  - : `boolean`. Gibt an, ob der Tab vom Browser verworfen werden kann. Der Standardwert ist `true`. Wenn auf `false` gesetzt, kann der Browser den Tab nicht automatisch verwerfen. Der Tab kann jedoch durch {{WebExtAPIRef("tabs.discard")}} verworfen werden.
- `cookieStoreId` {{optional_inline}}
  - : `string`. Der Cookie-Speicher des Tabs. Weitere Informationen finden Sie unter [Arbeiten mit kontextbezogenen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
- `discarded` {{optional_inline}}
  - : `boolean`. Gibt an, ob der Tab verworfen ist. Ein verworfener Tab ist einer, dessen Inhalte aus dem Speicher entladen wurden, aber immer noch in der Tab-Leiste sichtbar sind. Seine Inhalte werden beim nächsten Aktivieren neu geladen.
- `favIconUrl` {{optional_inline}}
  - : `string`. Die URL des Favicons des Tabs. Nur vorhanden, wenn die Erweiterung die `"tabs"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) hat. Sie kann auch `undefined` sein, wenn die Seite kein Favicon hat, oder ein leerer String, wenn der Tab lädt.
- `height` {{optional_inline}}
  - : `integer`. Die Höhe des Tabs in Pixeln.
- `hidden`
  - : `boolean`. Gibt an, ob der Tab verborgen ist.
- `highlighted`

  - : `boolean`. Gibt an, ob der Tab hervorgehoben ist, d. h. Teil der aktuellen Tab-Auswahl ist. Ein aktiver Tab ist immer hervorgehoben, aber einige Browser erlauben möglicherweise, zusätzliche Tabs hervorzuheben, beispielsweise durch Klicken darauf bei gedrückter <kbd>Ctrl</kbd>-, <kbd>Shift</kbd>- oder <kbd>⌘ Command</kbd>-Taste.

    Firefox für Android unterstützt nicht das Hervorheben mehrerer Tabs.

- `id` {{optional_inline}}
  - : `integer`. Die ID des Tabs. Tab-IDs sind innerhalb einer Browser-Sitzung eindeutig. Die Tab-ID kann auch auf {{WebExtAPIRef('tabs.TAB_ID_NONE')}} gesetzt werden für Browserfenster, die keine Inhalte hosten (z. B. Devtools-Fenster).
- `incognito`
  - : `boolean`. Gibt an, ob der Tab in einem privaten Browsing-Fenster ist.
- `index`
  - : `integer`. Der nullbasierte Index des Tabs innerhalb seines Fensters.
- `isArticle`
  - : `boolean`. Wahr, wenn der Tab im [Reader-Modus angezeigt](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode) werden kann, andernfalls falsch.
- `isInReaderMode`
  - : `boolean`. Wahr, wenn der Tab derzeit im [Reader-Modus angezeigt](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode) wird, andernfalls falsch.
- `lastAccessed` {{optional_inline}}
  - : `double`. Zeit, zu der der Tab zuletzt aufgerufen wurde, in [Millisekunden seit der Epoche](https://de.wikipedia.org/wiki/Unixzeit).
- `mutedInfo` {{optional_inline}}
  - : {{WebExtAPIRef('tabs.MutedInfo')}}. Der aktuelle stummgeschaltete Zustand des Tabs und der Grund für die letzte Zustandsänderung.
- `openerTabId` {{optional_inline}}
  - : `integer`. Die ID des Tabs, der diesen Tab geöffnet hat, falls vorhanden. Diese Eigenschaft ist nur vorhanden, wenn der öffnende Tab noch existiert und sich im selben Fenster befindet.
- `pendingUrl`
  - : `string`. Die URL, zu der der Tab navigiert, bevor die Navigation festgeschrieben wurde. Diese Eigenschaft ist nur vorhanden, wenn das Manifest der Erweiterung die "tabs"-Berechtigung enthält und eine ausstehende Navigation vorliegt.
- `pinned`
  - : `boolean`. Gibt an, ob der Tab angeheftet ist.
- `selected` {{deprecated_inline}}
  - : `boolean`. Gibt an, ob der Tab ausgewählt ist. Diese Eigenschaft wurde durch `active` und `highlighted` ersetzt.
- `sessionId` {{optional_inline}}
  - : `string`. Die Sitzungs-ID, die verwendet wird, um einen `Tab` eindeutig zu identifizieren, der von der {{WebExtAPIRef('sessions')}} API erhalten wurde.
- `status` {{optional_inline}}
  - : `string`. Entweder _loading_ oder _complete_.
- `successorTabId` {{optional_inline}}
  - : `integer` Die ID des Nachfolger-Tabs.
- `title` {{optional_inline}}
  - : `string`. Der Titel des Tabs. Nur vorhanden, wenn die Erweiterung die `"tabs"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) hat, die mit der URL des Tabs übereinstimmen.
- `url` {{optional_inline}}
  - : `string`. Die URL des Dokuments, das der Tab anzeigt. Nur vorhanden, wenn die Erweiterung die `"tabs"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder eine übereinstimmende [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) hat.
- `width` {{optional_inline}}
  - : `integer`. Die Breite des Tabs in Pixeln.
- `windowId`
  - : `integer`. Die ID des Fensters, das diesen Tab hostet.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#type-Tab) API von Chromium. Diese Dokumentation basiert auf [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

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
