---
title: tabs.Tab
slug: Mozilla/Add-ons/WebExtensions/API/tabs/Tab
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Der Typ **`tabs.Tab`** enthält Informationen über einen Tab. Dies ermöglicht den Zugriff auf Informationen darüber, welches Inhalt im Tab vorhanden ist, wie groß der Inhalt ist, welche speziellen Zustände oder Einschränkungen in Kraft sind, und so weiter.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `active`

  - : `boolean`. Ob der Tab in seinem Fenster aktiv ist. Dies kann wahr sein, auch wenn das Fenster des Tabs derzeit nicht fokussiert ist.

    Der aktive Tab ist normalerweise der ausgewählte. Auf Firefox für Android öffnen Erweiterungs-Popups jedoch in einem neuen Tab. Wenn dieser Popup-Tab ausgewählt ist, wird der aktive Tab stattdessen derjenige sein, in dem das Popup geöffnet wurde.

- `attention` {{optional_inline}}
  - : `boolean`. Gibt an, ob der Tab Aufmerksamkeit erregt. Zum Beispiel, wenn der Tab einen modalen Dialog anzeigt, wird `attention` `true` sein.
- `audible` {{optional_inline}}
  - : `boolean`. Gibt an, ob der Tab Ton produziert. Der Benutzer wird den Ton jedoch nicht hören, wenn der Tab stummgeschaltet ist (siehe die Eigenschaft `mutedInfo`).
- `autoDiscardable` {{optional_inline}}
  - : `boolean`. Ob der Tab vom Browser verworfen werden kann. Der Standardwert ist `true`. Wenn auf `false` gesetzt, kann der Browser den Tab nicht automatisch verwerfen. Der Tab kann jedoch durch {{WebExtAPIRef("tabs.discard")}} verworfen werden.
- `cookieStoreId` {{optional_inline}}
  - : `string`. Der Cookie-Store des Tabs. Siehe [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für weitere Informationen.
- `discarded` {{optional_inline}}
  - : `boolean`. Ob der Tab verworfen ist. Ein verworfener Tab ist einer, dessen Inhalt aus dem Speicher entladen wurde, aber immer noch in der Tab-Leiste sichtbar ist. Sein Inhalt wird beim nächsten Aktivieren neu geladen.
- `favIconUrl` {{optional_inline}}
  - : `string`. Die URL des Favicons des Tabs. Nur vorhanden, wenn die Erweiterung die `"tabs"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) besitzt. Sie kann auch `undefined` sein, wenn die Seite kein Favicon hat, oder ein leerer String, wenn der Tab lädt.
- `height` {{optional_inline}}
  - : `integer`. Die Höhe des Tabs in Pixeln.
- `hidden`
  - : `boolean`. Ob der Tab verborgen ist.
- `highlighted`

  - : `boolean`. Ob der Tab hervorgehoben ist, d.h. Teil der aktuellen Tab-Auswahl ist. Ein aktiver Tab ist immer hervorgehoben, aber einige Browser erlauben es möglicherweise, zusätzliche Tabs hervorzuheben, z.B. durch Klicken während die <kbd>Strg</kbd>-, <kbd>Shift</kbd>- oder <kbd>⌘ Command</kbd>-Tasten gedrückt sind.

    Firefox für Android unterstützt nicht das Hervorheben mehrerer Tabs.

- `id` {{optional_inline}}
  - : `integer`. Die ID des Tabs. Tab-IDs sind innerhalb einer Browsersitzung eindeutig. Die Tab-ID kann auch auf {{WebExtAPIRef('tabs.TAB_ID_NONE')}} gesetzt werden für Browserfenster, die keine Inhaltstabs hosten (z.B. Devtools-Fenster).
- `incognito`
  - : `boolean`. Ob der Tab in einem privaten Browserfenster ist.
- `index`
  - : `integer`. Der nullbasierte Index des Tabs innerhalb seines Fensters.
- `isArticle`
  - : `boolean`. Wahr, wenn der Tab im [Reader-Modus gerendert](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode) werden kann, andernfalls falsch.
- `isInReaderMode`
  - : `boolean`. Wahr, wenn der Tab derzeit im [Reader-Modus gerendert](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode) wird, andernfalls falsch.
- `lastAccessed` {{optional_inline}}
  - : `double`. Zeit, zu der der Tab zuletzt aufgerufen wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `mutedInfo` {{optional_inline}}
  - : {{WebExtAPIRef('tabs.MutedInfo')}}. Der aktuelle Stummschaltungszustand des Tabs und der Grund für die letzte Zustandsänderung.
- `openerTabId` {{optional_inline}}
  - : `integer`. Die ID des Tabs, der diesen Tab geöffnet hat, falls vorhanden. Diese Eigenschaft ist nur vorhanden, wenn der öffnende Tab noch existiert und sich im selben Fenster befindet.
- `pendingUrl`
  - : `string`. Die URL, zu der der Tab navigiert, bevor sie festgeschrieben wurde. Diese Eigenschaft ist nur vorhanden, wenn das Manifest der Erweiterung die "tabs" Berechtigung enthält und eine ausstehende Navigation vorliegt.
- `pinned`
  - : `boolean`. Ob der Tab angeheftet ist.
- `selected` {{deprecated_inline}}
  - : `boolean`. Ob der Tab ausgewählt ist. Diese Eigenschaft wurde durch `active` und `highlighted` ersetzt.
- `sessionId` {{optional_inline}}
  - : `string`. Die Sitzungs-ID, die verwendet wird, um einen `Tab`, der von der {{WebExtAPIRef('sessions')}} API erhalten wurde, eindeutig zu identifizieren.
- `status` {{optional_inline}}
  - : `string`. Entweder _loading_ oder _complete_.
- `successorTabId` {{optional_inline}}
  - : `integer` Die ID des Nachfolgetabs.
- `title` {{optional_inline}}
  - : `string`. Der Titel des Tabs. Nur vorhanden, wenn die Erweiterung die `"tabs"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) besitzt, die mit der URL des Tabs übereinstimmen.
- `url` {{optional_inline}}
  - : `string`. Die URL des Dokuments, das der Tab anzeigt. Nur vorhanden, wenn die Erweiterung die `"tabs"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder passende [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) besitzt.
- `width` {{optional_inline}}
  - : `integer`. Die Breite des Tabs in Pixeln.
- `windowId`
  - : `integer`. Die ID des Fensters, das diesen Tab hostet.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#type-Tab)-API von Chromium. Diese Dokumentation leitet sich von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code ab.

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
