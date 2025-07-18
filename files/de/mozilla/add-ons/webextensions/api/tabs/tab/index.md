---
title: tabs.Tab
slug: Mozilla/Add-ons/WebExtensions/API/tabs/Tab
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Der Typ **`tabs.Tab`** enthält Informationen über einen Tab. Dies ermöglicht den Zugriff auf Informationen darüber, welche Inhalte sich im Tab befinden, wie groß der Inhalt ist, welche speziellen Zustände oder Einschränkungen gelten und so weiter.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `active`
  - : `boolean`. Ob der Tab in seinem Fenster aktiv ist. Dies kann auch dann der Fall sein, wenn das Fensters des Tabs nicht aktuell fokussiert ist.

    Der aktive Tab ist normalerweise der ausgewählte. Auf Firefox für Android öffnen Erweiterungspopups jedoch in einem neuen Tab. Wenn dieser Popup-Tab ausgewählt ist, ist der aktive Tab stattdessen der, in dem das Popup geöffnet wurde.

- `attention` {{optional_inline}}
  - : `boolean`. Zeigt an, ob der Tab Aufmerksamkeit erregt. Zum Beispiel, wenn der Tab einen modalen Dialog anzeigt, wird `attention` `true` sein.
- `audible` {{optional_inline}}
  - : `boolean`. Gibt an, ob der Tab Ton erzeugt. Der Benutzer wird den Ton jedoch nicht hören, wenn der Tab stummgeschaltet ist (siehe die Eigenschaft `mutedInfo`).
- `autoDiscardable` {{optional_inline}}
  - : `boolean`. Ob der Tab vom Browser verworfen werden kann. Der Standardwert ist `true`. Wenn er auf `false` gesetzt ist, kann der Browser den Tab nicht automatisch verwerfen. Der Tab kann jedoch mit {{WebExtAPIRef("tabs.discard")}} verworfen werden.
- `cookieStoreId` {{optional_inline}}
  - : `string`. Der Cookie-Store des Tabs. Siehe [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für weitere Informationen.
- `discarded` {{optional_inline}}
  - : `boolean`. Ob der Tab verworfen wurde. Ein verworfener Tab ist einer, dessen Inhalt aus dem Speicher entladen wurde, aber weiterhin in der Tab-Leiste sichtbar ist. Sein Inhalt wird beim nächsten Aktivieren neu geladen.
- `favIconUrl` {{optional_inline}}
  - : `string`. Die URL des Favicons des Tabs. Nur vorhanden, wenn die Erweiterung über die `"tabs"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) verfügt. Sie kann auch `undefined` sein, wenn die Seite kein Favicon hat, oder ein leerer String, wenn der Tab geladen wird.
- `groupId` {{optional_inline}}
  - : `integer`. Die ID der Tab-Gruppe, zu der der Tab gehört. Auf `-1` gesetzt ({{WebExtAPIRef("tabGroups.TAB_GROUP_ID_NONE")}}), wenn der Tab nicht zu einer Tab-Gruppe gehört. Siehe {{WebExtAPIRef("tabs.group")}}. Für weitere Informationen zu Tab-Gruppen, siehe {{WebExtAPIRef("tabGroups")}}.
- `height` {{optional_inline}}
  - : `integer`. Die Höhe des Tabs in Pixeln.
- `hidden`
  - : `boolean`. Ob der Tab versteckt ist.
- `highlighted`
  - : `boolean`. Ob der Tab hervorgehoben ist, d.h. Teil der aktuellen Tab-Auswahl. Ein aktiver Tab ist immer hervorgehoben, aber einige Browser erlauben es, zusätzliche Tabs hervorzuheben, z.B. durch Klicken bei gedrückter <kbd>Ctrl</kbd>-, <kbd>Shift</kbd>- oder <kbd>⌘ Command</kbd>-Taste.

    Firefox für Android unterstützt das Hervorheben mehrerer Tabs nicht.

- `id` {{optional_inline}}
  - : `integer`. Die ID des Tabs. Tab-IDs sind innerhalb einer Browsersitzung eindeutig. Die Tab-ID kann auch auf {{WebExtAPIRef('tabs.TAB_ID_NONE')}} gesetzt sein für Browserfenster, die keine Inhaltstabs hosten (zum Beispiel DevTools-Fenster).
- `incognito`
  - : `boolean`. Ob der Tab in einem privaten Browserfenster ist.
- `index`
  - : `integer`. Der nullbasierte Index des Tabs innerhalb seines Fensters.
- `isArticle`
  - : `boolean`. `True`, wenn der Tab im [Reader-Modus gerendert](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode) werden kann, `false` ansonsten.
- `isInReaderMode`
  - : `boolean`. `True`, wenn der Tab aktuell im [Reader-Modus gerendert](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode) wird, `false` ansonsten.
- `lastAccessed` {{optional_inline}}
  - : `double`. Zeit in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time), zu der zuletzt auf den Tab zugegriffen wurde.
- `mutedInfo` {{optional_inline}}
  - : {{WebExtAPIRef('tabs.MutedInfo')}}. Der aktuelle Stummschaltungsstatus des Tabs und der Grund für die letzte Statusänderung.
- `openerTabId` {{optional_inline}}
  - : `integer`. Die ID des Tabs, der diesen Tab geöffnet hat, falls vorhanden. Diese Eigenschaft ist nur vorhanden, wenn der öffnende Tab noch existiert und sich im selben Fenster befindet.
- `pendingUrl`
  - : `string`. Die URL, zu der der Tab navigiert, bevor sie festgeschrieben ist. Diese Eigenschaft ist nur vorhanden, wenn das Manifest der Erweiterung die "tabs"-Berechtigung beinhaltet und eine ausstehende Navigation vorhanden ist.
- `pinned`
  - : `boolean`. Ob der Tab angeheftet ist.
- `selected` {{deprecated_inline}}
  - : `boolean`. Ob der Tab ausgewählt ist. Diese Eigenschaft wurde durch `active` und `highlighted` ersetzt.
- `sessionId` {{optional_inline}}
  - : `string`. Die Sitzungs-ID, die zum eindeutigen Identifizieren eines `Tab` verwendet wird, der von der {{WebExtAPIRef('sessions')}}-API erhalten wird.
- `status` {{optional_inline}}
  - : `string`. Entweder _loading_ oder _complete_.
- `successorTabId` {{optional_inline}}
  - : `integer`. Die ID des Nachfolgertabs.
- `title` {{optional_inline}}
  - : `string`. Der Titel des Tabs. Nur vorhanden, wenn die Erweiterung die `"tabs"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) hat, die mit der URL des Tabs übereinstimmen.
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
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#type-Tab) API von Chromium. Diese Dokumentation stammt aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.
