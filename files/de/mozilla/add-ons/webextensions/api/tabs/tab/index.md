---
title: tabs.Tab
slug: Mozilla/Add-ons/WebExtensions/API/tabs/Tab
l10n:
  sourceCommit: 3ffce2e0e798a46f6405d32a971d1ebf9874cdd4
---

{{AddonSidebar}}

Der Typ **`tabs.Tab`** enthält Informationen über einen Tab. Dies bietet Zugriff auf Informationen darüber, welche Inhalte im Tab sind, wie groß der Inhalt ist, welche speziellen Zustände oder Einschränkungen in Kraft sind und so weiter.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `active`

  - : `boolean`. Gibt an, ob der Tab in seinem Fenster aktiv ist. Dies kann auch dann wahr sein, wenn das Fenster des Tabs derzeit nicht fokussiert ist.

    Der aktive Tab ist normalerweise der ausgewählte. Auf Firefox für Android öffnen Erweiterungs-Popups jedoch in einem neuen Tab. Wenn dieser Popup-Tab ausgewählt wird, ist stattdessen der Tab aktiv, in dem das Popup geöffnet wurde.

- `attention` {{optional_inline}}
  - : `boolean`. Gibt an, ob der Tab Aufmerksamkeit erregt. Zum Beispiel, wenn der Tab einen modalen Dialog anzeigt, wird `attention` `true` sein.
- `audible` {{optional_inline}}
  - : `boolean`. Gibt an, ob der Tab Ton produziert. Der Benutzer wird den Ton jedoch nicht hören, wenn der Tab stummgeschaltet ist (siehe die Eigenschaft `mutedInfo`).
- `autoDiscardable` {{optional_inline}}
  - : `boolean`. Gibt an, ob der Tab vom Browser verworfen werden kann. Der Standardwert ist `true`. Wenn auf `false` gesetzt, kann der Browser den Tab nicht automatisch verwerfen. Der Tab kann jedoch durch {{WebExtAPIRef("tabs.discard")}} verworfen werden.
- `cookieStoreId` {{optional_inline}}
  - : `string`. Der Cookie-Speicher des Tabs. Weitere Informationen finden Sie unter [Mit kontextuellen Identitäten arbeiten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
- `discarded` {{optional_inline}}
  - : `boolean`. Gibt an, ob der Tab verworfen wurde. Ein verworfener Tab ist einer, dessen Inhalt aus dem Speicher entladen wurde, aber weiterhin im Tabstreifen sichtbar ist. Sein Inhalt wird beim nächsten Aktivieren neu geladen.
- `favIconUrl` {{optional_inline}}
  - : `string`. Die URL des Favicons des Tabs. Nur vorhanden, wenn die Erweiterung die Berechtigung `"tabs"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) hat. Es kann auch `undefined` sein, wenn die Seite kein Favicon hat, oder ein leerer String, wenn der Tab lädt.
- `groupId` {{optional_inline}}
  - : `integer`. Die ID der Tab-Gruppe, zu der der Tab gehört. Wird auf `-1` gesetzt ({{WebExtAPIRef("tabGroups.TAB_GROUP_ID_NONE")}}), wenn der Tab keiner Tab-Gruppe angehört. Weitere Informationen zu Tab-Gruppen finden Sie unter {{WebExtAPIRef("tabGroups")}}.
- `height` {{optional_inline}}
  - : `integer`. Die Höhe des Tabs in Pixeln.
- `hidden`
  - : `boolean`. Gibt an, ob der Tab versteckt ist.
- `highlighted`

  - : `boolean`. Gibt an, ob der Tab hervorgehoben ist, d.h. Teil der aktuellen Tab-Auswahl ist. Ein aktiver Tab ist immer hervorgehoben, aber einige Browser erlauben möglicherweise zusätzliche Tabs zu markieren, zum Beispiel durch Klicken mit gedrückter <kbd>Ctrl</kbd>-, <kbd>Shift</kbd>- oder <kbd>⌘ Command</kbd>-Taste.

    Firefox für Android unterstützt keine Hervorhebung mehrerer Tabs.

- `id` {{optional_inline}}
  - : `integer`. Die ID des Tabs. Tab-IDs sind innerhalb einer Browsersitzung eindeutig. Die Tab-ID kann auch auf {{WebExtAPIRef('tabs.TAB_ID_NONE')}} gesetzt werden für Browserfenster, die keine Inhalts-Tabs hosten (zum Beispiel Devtools-Fenster).
- `incognito`
  - : `boolean`. Gibt an, ob sich der Tab in einem privaten Fenster befindet.
- `index`
  - : `integer`. Der nullbasierte Index des Tabs innerhalb seines Fensters.
- `isArticle`
  - : `boolean`. True, wenn der Tab im [Leseansichtsmodus gerendert](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode) werden kann, false andernfalls.
- `isInReaderMode`
  - : `boolean`. True, wenn der Tab derzeit im [Leseansichtsmodus gerendert](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode) wird, false andernfalls.
- `lastAccessed` {{optional_inline}}
  - : `double`. Zeit, zu der der Tab zuletzt aufgerufen wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `mutedInfo` {{optional_inline}}
  - : {{WebExtAPIRef('tabs.MutedInfo')}}. Der aktuelle Stummschaltungsstatus für den Tab und der Grund für die letzte Statusänderung.
- `openerTabId` {{optional_inline}}
  - : `integer`. Die ID des Tabs, der diesen Tab geöffnet hat, falls vorhanden. Diese Eigenschaft ist nur vorhanden, wenn der öffnende Tab noch existiert und im selben Fenster ist.
- `pendingUrl`
  - : `string`. Die URL, zu der der Tab navigiert, bevor sie festgelegt wurde. Diese Eigenschaft ist nur vorhanden, wenn das Manifest der Erweiterung die Berechtigung "tabs" enthält und eine ausstehende Navigation vorliegt.
- `pinned`
  - : `boolean`. Gibt an, ob der Tab angeheftet ist.
- `selected` {{deprecated_inline}}
  - : `boolean`. Ob der Tab ausgewählt ist. Diese Eigenschaft wurde durch `active` und `highlighted` ersetzt.
- `sessionId` {{optional_inline}}
  - : `string`. Die Sitzungs-ID, die verwendet wird, um einen `Tab` eindeutig zu identifizieren, der von der {{WebExtAPIRef('sessions')}} API erhalten wurde.
- `status` {{optional_inline}}
  - : `string`. Entweder _loading_ oder _complete_.
- `successorTabId` {{optional_inline}}
  - : `integer`. Die ID des Nachfolgetabs des Tabs.
- `title` {{optional_inline}}
  - : `string`. Der Titel des Tabs. Nur vorhanden, wenn die Erweiterung die `"tabs"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) besitzt, die mit der URL des Tabs übereinstimmen.
- `url` {{optional_inline}}
  - : `string`. Die URL des Dokuments, das der Tab anzeigt. Nur vorhanden, wenn die Erweiterung die `"tabs"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder eine passende [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) hat.
- `width` {{optional_inline}}
  - : `integer`. Die Breite des Tabs in Pixeln.
- `windowId`
  - : `integer`. Die ID des Fensters, das diesen Tab hostet.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#type-Tab) API. Diese Dokumentation wird aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code abgeleitet.

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
