---
title: tabs.Tab
slug: Mozilla/Add-ons/WebExtensions/API/tabs/Tab
l10n:
  sourceCommit: 8bc98818dfbc851ee6749b123e98f5eeb7e43923
---

Der Typ **`tabs.Tab`** enthält Informationen über einen Tab. Dies ermöglicht den Zugriff auf Informationen darüber, welcher Inhalt sich im Tab befindet, wie groß der Inhalt ist, welche speziellen Zustände oder Einschränkungen in Kraft sind und so weiter.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `active`
  - : `boolean`. Ob der Tab in seinem Fenster aktiv ist. Dies kann wahr sein, auch wenn das Fenster des Tabs derzeit nicht fokussiert ist.

    Der aktive Tab ist normalerweise der ausgewählte. Auf Firefox für Android werden Erweiterungs-Popups jedoch in einem neuen Tab geöffnet. Wenn dieser Popup-Tab ausgewählt ist, wird stattdessen der Tab aktiv, in dem das Popup geöffnet wurde.

- `attention` {{optional_inline}}
  - : `boolean`. Gibt an, ob der Tab Aufmerksamkeit erregt. Wenn der Tab beispielsweise einen modalen Dialog anzeigt, wird `attention` auf `true` gesetzt.
- `audible` {{optional_inline}}
  - : `boolean`. Gibt an, ob der Tab Ton ausgibt. Der Benutzer wird den Ton jedoch nicht hören, wenn der Tab stummgeschaltet ist (siehe die Eigenschaft `mutedInfo`).
- `autoDiscardable` {{optional_inline}}
  - : `boolean`. Ob der Tab vom Browser verworfen werden kann. Der Standardwert ist `true`. Wenn er auf `false` gesetzt wird, kann der Browser den Tab nicht automatisch verwerfen. Der Tab kann jedoch durch {{WebExtAPIRef("tabs.discard")}} verworfen werden.
- `cookieStoreId` {{optional_inline}}
  - : `string`. Der Cookie-Store des Tabs. Weitere Informationen finden Sie unter [Mit kontextuellen Identitäten arbeiten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
- `discarded` {{optional_inline}}
  - : `boolean`. Ob der Tab verworfen wurde. Ein verworfener Tab ist einer, dessen Inhalt aus dem Speicher entladen wurde, aber immer noch in der Tableiste sichtbar ist. Sein Inhalt wird das nächste Mal neu geladen, wenn er aktiviert wird.
- `favIconUrl` {{optional_inline}}
  - : `string`. Die URL des Favicons des Tabs. Nur vorhanden, wenn die Erweiterung die `"tabs"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) hat. Sie kann auch `undefined` sein, wenn die Seite kein Favicon hat, oder ein leerer String, wenn der Tab geladen wird.
- `groupId` {{optional_inline}}
  - : `integer`. Die ID der Tab-Gruppe, zu der der Tab gehört. Wird auf `-1` ({{WebExtAPIRef("tabGroups.TAB_GROUP_ID_NONE")}}) gesetzt, wenn der Tab keiner Tab-Gruppe zugehört. Siehe {{WebExtAPIRef("tabs.group")}}. Weitere Informationen zu Tab-Gruppen finden Sie unter {{WebExtAPIRef("tabGroups")}}.
- `height` {{optional_inline}}
  - : `integer`. Die Höhe des Tabs in Pixeln.
- `hidden`
  - : `boolean`. Ob der Tab ausgeblendet ist.
- `highlighted`
  - : `boolean`. Ob der Tab hervorgehoben ist, d.h. Teil der aktuellen Tab-Auswahl. Ein aktiver Tab ist immer hervorgehoben, aber einige Browser erlauben es möglicherweise, zusätzliche Tabs hervorzuheben, zum Beispiel durch Anklicken bei gleichzeitigem Drücken der Tasten <kbd>Ctrl</kbd>, <kbd>Shift</kbd> oder <kbd>⌘ Command</kbd>.

    Firefox für Android unterstützt nicht das Hervorheben mehrerer Tabs.

- `id` {{optional_inline}}
  - : `integer`. Die ID des Tabs. Tab-IDs sind innerhalb einer Browser-Sitzung eindeutig. Die Tab-ID kann auch auf {{WebExtAPIRef('tabs.TAB_ID_NONE')}} gesetzt werden für Browserfenster, die keine Inhalts-Tabs hosten (zum Beispiel devtool-Fenster).
- `incognito`
  - : `boolean`. Ob der Tab sich in einem privaten Browserfenster befindet.
- `index`
  - : `integer`. Der nullbasierte Index des Tabs innerhalb seines Fensters.
- `isArticle`
  - : `boolean`. Wahr, wenn der Tab im [Reader-Modus angezeigt](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode) werden kann, andernfalls falsch.
- `isInReaderMode`
  - : `boolean`. Wahr, wenn der Tab derzeit im [Reader-Modus angezeigt](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode) wird, andernfalls falsch.
- `lastAccessed` {{optional_inline}}
  - : `double`. Zeitpunkt, zu dem auf den Tab zuletzt zugegriffen wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `mutedInfo` {{optional_inline}}
  - : {{WebExtAPIRef('tabs.MutedInfo')}}. Der aktuelle Stummschaltungsstatus für den Tab und der Grund für die letzte Statusänderung.
- `openerTabId` {{optional_inline}}
  - : `integer`. Die ID des Tabs, der diesen Tab geöffnet hat, falls vorhanden. Diese Eigenschaft ist nur vorhanden, wenn der öffnende Tab noch existiert und sich im selben Fenster befindet.
- `pendingUrl`
  - : `string`. Die URL, zu der der Tab navigiert, bevor er ausgeführt wurde. Diese Eigenschaft ist nur vorhanden, wenn das Manifest der Erweiterung die Berechtigung "tabs" enthält und eine ausstehende Navigation vorliegt.
- `pinned`
  - : `boolean`. Ob der Tab angeheftet ist.
- `selected` {{deprecated_inline}}
  - : `boolean`. Ob der Tab ausgewählt ist. Diese Eigenschaft wurde durch `active` und `highlighted` ersetzt.
- `sessionId` {{optional_inline}}
  - : `string`. Die Sitzungs-ID, die verwendet wird, um einen `Tab` eindeutig zu identifizieren, der von der {{WebExtAPIRef('sessions')}} API bezogen wurde.
- `splitViewId` {{optional_inline}}
  - : `integer`. Die ID der [geteilten Ansicht](/de/docs/Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API#working_with_tab_split_views), zu der der Tab gehört. Wird auf {{WebExtAPIRef('tabs.SPLIT_VIEW_ID_NONE')}} gesetzt, wenn der Tab nicht zu einer geteilten Ansicht gehört.
- `status` {{optional_inline}}
  - : `string`. Entweder _loading_ oder _complete_.
- `successorTabId` {{optional_inline}}
  - : `integer` Die ID des Nachfolgers des Tabs.
- `title` {{optional_inline}}
  - : `string`. Der Titel des Tabs. Nur vorhanden, wenn die Erweiterung die `"tabs"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) hat, die zur URL des Tabs passt.
- `url` {{optional_inline}}
  - : `string`. Die URL des Dokuments, das der Tab anzeigt. Nur vorhanden, wenn die Erweiterung die `"tabs"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder entsprechende [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) hat.
- `width` {{optional_inline}}
  - : `integer`. Die Breite des Tabs in Pixeln.
- `windowId`
  - : `integer`. Die ID des Fensters, das diesen Tab hostet.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#type-Tab) API von Chromium. Diese Dokumentation stammt von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.
