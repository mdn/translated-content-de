---
title: tabs.Tab
slug: Mozilla/Add-ons/WebExtensions/API/tabs/Tab
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Der Typ **`tabs.Tab`** enthält Informationen über einen Tab. Dies ermöglicht den Zugriff auf Informationen darüber, welche Inhalte sich im Tab befinden, wie groß die Inhalte sind, welche besonderen Zustände oder Einschränkungen in Kraft sind und so weiter.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `active`
  - : `boolean`. Ob der Tab in seinem Fenster aktiv ist. Dies kann auch dann zutreffen, wenn das Fenster des Tabs derzeit nicht fokussiert ist.

    Der aktive Tab ist normalerweise der ausgewählte Tab. Auf Firefox für Android jedoch öffnen Erweiterungspopups in einem neuen Tab. Wenn dieser Popup-Tab ausgewählt wird, ist anstelle dessen der Tab aktiv, in dem das Popup geöffnet wurde.

- `attention` {{optional_inline}}
  - : `boolean`. Gibt an, ob der Tab Aufmerksamkeit erregt. Beispielsweise wird `attention` `true` sein, wenn der Tab einen modalen Dialog anzeigt.
- `audible` {{optional_inline}}
  - : `boolean`. Gibt an, ob der Tab Sound abspielt. Der Benutzer wird den Sound jedoch nicht hören, wenn der Tab stummgeschaltet ist (siehe die Eigenschaft `mutedInfo`).
- `autoDiscardable` {{optional_inline}}
  - : `boolean`. Ob der Tab vom Browser verworfen werden kann. Der Standardwert ist `true`. Wenn auf `false` gesetzt, kann der Browser den Tab nicht automatisch verwerfen. Der Tab kann jedoch durch {{WebExtAPIRef("tabs.discard")}} verworfen werden.
- `cookieStoreId` {{optional_inline}}
  - : `string`. Der Cookie-Store des Tabs. Siehe [Arbeiten mit kontextbezogenen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für weitere Informationen.
- `discarded` {{optional_inline}}
  - : `boolean`. Ob der Tab verworfen wurde. Ein verworfener Tab ist einer, dessen Inhalt aus dem Speicher entladen wurde, der aber weiterhin in der Tab-Leiste sichtbar ist. Sein Inhalt wird erneut geladen, sobald er aktiviert wird.
- `favIconUrl` {{optional_inline}}
  - : `string`. Die URL des Favicons des Tabs. Nur vorhanden, wenn die Erweiterung die `"tabs"`-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) besitzt. Sie kann auch `undefined` sein, wenn die Seite kein Favicon hat, oder ein leerer String, wenn der Tab geladen wird.
- `groupId` {{optional_inline}}
  - : `integer`. Die ID der Tab-Gruppe, zu der der Tab gehört. Auf `-1` gesetzt ({{WebExtAPIRef("tabGroups.TAB_GROUP_ID_NONE")}}), wenn der Tab keiner Tab-Gruppe angehört. Siehe {{WebExtAPIRef("tabs.group")}}. Für weitere Informationen zu Tab-Gruppen siehe {{WebExtAPIRef("tabGroups")}}.
- `height` {{optional_inline}}
  - : `integer`. Die Höhe des Tabs in Pixeln.
- `hidden`
  - : `boolean`. Ob der Tab versteckt ist.
- `highlighted`
  - : `boolean`. Ob der Tab hervorgehoben ist, d.h. Teil der aktuellen Tabauswahl. Ein aktiver Tab ist immer hervorgehoben, aber manche Browser erlauben es, zusätzliche Tabs hervorzuheben, beispielsweise durch Klicken bei gedrückter <kbd>Ctrl</kbd>, <kbd>Shift</kbd> oder <kbd>⌘ Command</kbd>-Taste.

    Firefox für Android unterstützt das Hervorheben mehrerer Tabs nicht.

- `id` {{optional_inline}}
  - : `integer`. Die ID des Tabs. Tab-IDs sind innerhalb einer Browsersitzung eindeutig. Die Tab-ID kann auch auf {{WebExtAPIRef('tabs.TAB_ID_NONE')}} gesetzt werden für Browserfenster, die keine Inhaltstabs hosten (zum Beispiel Entwicklertoolsfenster).
- `incognito`
  - : `boolean`. Ob der Tab in einem privaten Fenstermodus ist.
- `index`
  - : `integer`. Der nullbasierte Index des Tabs innerhalb seines Fensters.
- `isArticle`
  - : `boolean`. `true`, wenn der Tab im [Reader-Modus angezeigt](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode) werden kann, andernfalls `false`.
- `isInReaderMode`
  - : `boolean`. `true`, wenn der Tab derzeit im [Reader-Modus angezeigt](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode) wird, andernfalls `false`.
- `lastAccessed` {{optional_inline}}
  - : `double`. Zeitpunkt, an dem der Tab zuletzt aufgerufen wurde, in [Millisekunden seit der Epoche](https://de.wikipedia.org/wiki/Unixzeit).
- `mutedInfo` {{optional_inline}}
  - : {{WebExtAPIRef('tabs.MutedInfo')}}. Der aktuelle Stummschaltungszustand für den Tab und der Grund für die letzte Zustandsänderung.
- `openerTabId` {{optional_inline}}
  - : `integer`. Die ID des Tabs, der diesen Tab geöffnet hat, falls vorhanden. Diese Eigenschaft ist nur vorhanden, wenn der öffnende Tab noch existiert und sich im selben Fenster befindet.
- `pendingUrl`
  - : `string`. Die URL, zu der der Tab navigiert, bevor er ausgeführt wird. Diese Eigenschaft ist nur vorhanden, wenn das Manifest der Erweiterung die "tabs"-Berechtigung enthält und es eine ausstehende Navigation gibt.
- `pinned`
  - : `boolean`. Ob der Tab angeheftet ist.
- `selected` {{deprecated_inline}}
  - : `boolean`. Ob der Tab ausgewählt ist. Diese Eigenschaft wurde durch `active` und `highlighted` ersetzt.
- `sessionId` {{optional_inline}}
  - : `string`. Die Sitzungs-ID, die verwendet wird, um einen aus der {{WebExtAPIRef('sessions')}} API erhaltenen `Tab` eindeutig zu identifizieren.
- `status` {{optional_inline}}
  - : `string`. Entweder _loading_ oder _complete_.
- `successorTabId` {{optional_inline}}
  - : `integer` Die ID des Nachfolgers des Tabs.
- `title` {{optional_inline}}
  - : `string`. Der Titel des Tabs. Nur vorhanden, wenn die Erweiterung die `"tabs"`-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) besitzt, die mit der URL des Tabs übereinstimmen.
- `url` {{optional_inline}}
  - : `string`. Die URL des Dokuments, das der Tab anzeigt. Nur vorhanden, wenn die Erweiterung über die `"tabs"`-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder eine passende [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) verfügt.
- `width` {{optional_inline}}
  - : `integer`. Die Breite des Tabs in Pixeln.
- `windowId`
  - : `integer`. Die ID des Fensters, das diesen Tab beherbergt.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#type-Tab) API. Diese Dokumentation stammt aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.
