---
title: tabs.Tab
slug: Mozilla/Add-ons/WebExtensions/API/tabs/Tab
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{AddonSidebar}}

Der Typ **`tabs.Tab`** enthält Informationen über einen Tab. Er bietet Zugriff auf Informationen darüber, welche Inhalte im Tab sind, wie groß der Inhalt ist, welche speziellen Zustände oder Einschränkungen aktiv sind und so weiter.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `active`

  - : `boolean`. Ob der Tab innerhalb seines Fensters aktiv ist. Dies kann auch der Fall sein, wenn das Fenster des Tabs nicht aktuell fokussiert ist.

    Der aktive Tab ist in der Regel der ausgewählte. Auf Firefox für Android öffnen Erweiterungspopups jedoch in einem neuen Tab. Wenn dieser Popup-Tab ausgewählt ist, wird der aktive Tab stattdessen derjenige sein, in dem das Popup geöffnet wurde.

- `attention` {{optional_inline}}
  - : `boolean`. Gibt an, ob der Tab Aufmerksamkeit erregt. Beispielsweise wird `attention` auf `true` gesetzt, wenn der Tab ein modales Dialogfenster anzeigt.
- `audible` {{optional_inline}}
  - : `boolean`. Gibt an, ob der Tab Sound abspielt. Der Benutzer wird den Sound jedoch nicht hören, wenn der Tab stummgeschaltet ist (siehe die Eigenschaft `mutedInfo`).
- `autoDiscardable` {{optional_inline}}
  - : `boolean`. Ob der Tab vom Browser verworfen werden kann. Der Standardwert ist `true`. Wenn der Wert auf `false` gesetzt ist, kann der Browser den Tab nicht automatisch verwerfen. Der Tab kann jedoch durch {{WebExtAPIRef("tabs.discard")}} verworfen werden.
- `cookieStoreId` {{optional_inline}}
  - : `string`. Der Cookie-Store des Tabs. Weitere Informationen finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
- `discarded` {{optional_inline}}
  - : `boolean`. Ob der Tab verworfen ist. Ein verwerfener Tab ist einer, dessen Inhalt aus dem Speicher entladen wurde, der aber weiterhin in der Tableiste sichtbar ist. Sein Inhalt wird beim nächsten Aktivieren neu geladen.
- `favIconUrl` {{optional_inline}}
  - : `string`. Die URL des Favicons des Tabs. Nur vorhanden, wenn die Erweiterung über die `"tabs"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) verfügt. Sie kann auch `undefined` sein, wenn die Seite kein Favicon hat, oder eine leere Zeichenfolge, wenn der Tab gerade lädt.
- `height` {{optional_inline}}
  - : `integer`. Die Höhe des Tabs in Pixeln.
- `hidden`
  - : `boolean`. Ob der Tab ausgeblendet ist.
- `highlighted`

  - : `boolean`. Ob der Tab hervorgehoben ist, d.h. Teil der aktuellen Tab-Auswahl. Ein aktiver Tab ist immer hervorgehoben, aber einige Browser erlauben es, zusätzliche Tabs hervorzuheben, zum Beispiel durch Klicken, während die Tasten <kbd>Ctrl</kbd>, <kbd>Shift</kbd> oder <kbd>⌘ Command</kbd> gedrückt gehalten werden.

    Firefox für Android unterstützt das Hervorheben mehrerer Tabs nicht.

- `id` {{optional_inline}}
  - : `integer`. Die ID des Tabs. Tab-IDs sind innerhalb einer Browsersitzung eindeutig. Die Tab-ID kann auch auf {{WebExtAPIRef('tabs.TAB_ID_NONE')}} gesetzt werden für Browserfenster, die keine Inhalte-Tabs beherbergen (z.B. Devtools-Fenster).
- `incognito`
  - : `boolean`. Ob der Tab in einem privaten Browserfenster ist.
- `index`
  - : `integer`. Der nullbasierte Index des Tabs innerhalb seines Fensters.
- `isArticle`
  - : `boolean`. Wahr, wenn der Tab im [Reader-Modus dargestellt werden kann](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode), andernfalls falsch.
- `isInReaderMode`
  - : `boolean`. Wahr, wenn der Tab aktuell im [Reader-Modus dargestellt wird](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode), andernfalls falsch.
- `lastAccessed` {{optional_inline}}
  - : `double`. Zeitpunkt, zu dem der Tab zuletzt besucht wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `mutedInfo` {{optional_inline}}
  - : {{WebExtAPIRef('tabs.MutedInfo')}}. Der aktuelle Stummschaltungszustand für den Tab und der Grund für die letzte Zustandsänderung.
- `openerTabId` {{optional_inline}}
  - : `integer`. Die ID des Tabs, der diesen Tab geöffnet hat, falls vorhanden. Diese Eigenschaft ist nur vorhanden, wenn der öffnende Tab noch existiert und sich im gleichen Fenster befindet.
- `pendingUrl`
  - : `string`. Die URL, zu der der Tab navigiert, bevor sie abgeschlossen wurde. Diese Eigenschaft ist nur vorhanden, wenn das Manifest der Erweiterung die Berechtigung "tabs" enthält und eine ausstehende Navigation stattfindet.
- `pinned`
  - : `boolean`. Ob der Tab angepinnt ist.
- `selected` {{deprecated_inline}}
  - : `boolean`. Ob der Tab ausgewählt ist. Diese Eigenschaft wurde durch `active` und `highlighted` ersetzt.
- `sessionId` {{optional_inline}}
  - : `string`. Die Sitzungs-ID, die zum eindeutigen Identifizieren eines `Tab` aus der {{WebExtAPIRef('sessions')}} API verwendet wird.
- `status` {{optional_inline}}
  - : `string`. Entweder _loading_ oder _complete_.
- `successorTabId` {{optional_inline}}
  - : `integer` Die ID des Nachfolger-Tabs.
- `title` {{optional_inline}}
  - : `string`. Der Titel des Tabs. Nur vorhanden, wenn die Erweiterung die `"tabs"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) hat, die mit der URL des Tabs übereinstimmen.
- `url` {{optional_inline}}
  - : `string`. Die URL des Dokuments, das der Tab anzeigt. Nur vorhanden, wenn die Erweiterung die `"tabs"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder eine passende [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) hat.
- `width` {{optional_inline}}
  - : `integer`. Die Breite des Tabs in Pixeln.
- `windowId`
  - : `integer`. Die ID des Fensters, das diesen Tab beherbergt.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#type-Tab) API von Chromium. Diese Dokumentation stammt aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.
