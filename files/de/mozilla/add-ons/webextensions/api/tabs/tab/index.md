---
title: tabs.Tab
slug: Mozilla/Add-ons/WebExtensions/API/tabs/Tab
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Der Typ **`tabs.Tab`** enthält Informationen über einen Tab. Dies ermöglicht den Zugriff auf Informationen darüber, welche Inhalte sich im Tab befinden, wie groß der Inhalt ist, welche speziellen Zustände oder Einschränkungen in Kraft sind und so weiter.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `active`

  - : `boolean`. Ob der Tab in seinem Fenster aktiv ist. Dies kann auch dann der Fall sein, wenn das Fenster des Tabs derzeit nicht fokussiert ist.

    Der aktive Tab ist normalerweise der ausgewählte. Auf Firefox für Android öffnen Erweiterungs-Popups jedoch in einem neuen Tab. Wenn dieser Popup-Tab ausgewählt ist, wird der aktive Tab stattdessen derjenige sein, in dem das Popup geöffnet wurde.

- `attention` {{optional_inline}}
  - : `boolean`. Gibt an, ob der Tab Aufmerksamkeit erregt. Zum Beispiel, wenn der Tab ein modales Dialogfeld anzeigt, wird `attention` `true` sein.
- `audible` {{optional_inline}}
  - : `boolean`. Gibt an, ob der Tab Ton erzeugt. Der Benutzer hört den Ton jedoch nicht, wenn der Tab stummgeschaltet ist (siehe die Eigenschaft `mutedInfo`).
- `autoDiscardable` {{optional_inline}}
  - : `boolean`. Ob der Tab vom Browser verworfen werden kann. Der Standardwert ist `true`. Wenn er auf `false` gesetzt ist, kann der Browser den Tab nicht automatisch verwerfen. Der Tab kann jedoch durch {{WebExtAPIRef("tabs.discard")}} verworfen werden.
- `cookieStoreId` {{optional_inline}}
  - : `string`. Der Cookie Store des Tabs. Siehe [Arbeit mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für mehr Informationen.
- `discarded` {{optional_inline}}
  - : `boolean`. Ob der Tab verworfen ist. Ein verworfener Tab ist einer, dessen Inhalt aus dem Speicher entladen wurde, aber weiterhin im Tabstreifen sichtbar ist. Sein Inhalt wird neu geladen, wenn er das nächste Mal aktiviert wird.
- `favIconUrl` {{optional_inline}}
  - : `string`. Die URL des Favicons des Tabs. Nur vorhanden, wenn die Erweiterung die Berechtigung `"tabs"` [permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) hat. Sie kann auch `undefined` sein, wenn die Seite kein Favicon hat, oder eine leere Zeichenkette, wenn der Tab lädt.
- `groupId` {{optional_inline}}
  - : `integer`. Die ID der Tabgruppe, zu der der Tab gehört. Setzen Sie auf `-1` ({{WebExtAPIRef("tabGroups.TAB_GROUP_ID_NONE")}}), wenn der Tab keiner Tabgruppe angehört. Siehe {{WebExtAPIRef("tabs.group")}}. Für weitere Informationen zu Tabgruppen, siehe {{WebExtAPIRef("tabGroups")}}.
- `height` {{optional_inline}}
  - : `integer`. Die Höhe des Tabs in Pixeln.
- `hidden`
  - : `boolean`. Ob der Tab versteckt ist.
- `highlighted`

  - : `boolean`. Ob der Tab hervorgehoben ist, d.h. Teil der aktuellen Tab-Auswahl ist. Ein aktiver Tab ist immer hervorgehoben, aber einige Browser erlauben möglicherweise zusätzliche Tabs hervorzuheben, z.B. durch Anklicken bei gedrückter <kbd>Strg</kbd>, <kbd>Shift</kbd> oder <kbd>⌘ Command</kbd>-Taste.

    Firefox für Android unterstützt das Hervorheben mehrerer Tabs nicht.

- `id` {{optional_inline}}
  - : `integer`. Die ID des Tabs. Tab-IDs sind innerhalb einer Browsersitzung eindeutig. Die Tab-ID kann auch auf {{WebExtAPIRef('tabs.TAB_ID_NONE')}} gesetzt sein für Browserfenster, die keine Inhaltstabs hosten (zum Beispiel Devtools-Fenster).
- `incognito`
  - : `boolean`. Ob der Tab in einem privaten Fenster ist.
- `index`
  - : `integer`. Der nullbasierte Index des Tabs innerhalb seines Fensters.
- `isArticle`
  - : `boolean`. Wahr, wenn der Tab im [Reader-Modus gerendert](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode) werden kann, sonst falsch.
- `isInReaderMode`
  - : `boolean`. Wahr, wenn der Tab derzeit im [Reader-Modus gerendert](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode) wird, sonst falsch.
- `lastAccessed` {{optional_inline}}
  - : `double`. Zeit, zu der der Tab zuletzt aufgerufen wurde, in [Millisekunden seit der Epoche](https://de.wikipedia.org/wiki/Unixzeit).
- `mutedInfo` {{optional_inline}}
  - : {{WebExtAPIRef('tabs.MutedInfo')}}. Der aktuelle stummgeschaltete Zustand für den Tab und der Grund für die letzte Zustandsänderung.
- `openerTabId` {{optional_inline}}
  - : `integer`. Die ID des Tabs, der diesen Tab geöffnet hat, falls vorhanden. Diese Eigenschaft ist nur vorhanden, wenn der öffnende Tab noch existiert und im selben Fenster ist.
- `pendingUrl`
  - : `string`. Die URL, zu der der Tab navigiert, bevor sie festgeschrieben wurde. Diese Eigenschaft ist nur vorhanden, wenn das Manifest der Erweiterung die Berechtigung "tabs" enthält und eine ausstehende Navigation vorliegt.
- `pinned`
  - : `boolean`. Ob der Tab angeheftet ist.
- `selected` {{deprecated_inline}}
  - : `boolean`. Ob der Tab ausgewählt ist. Diese Eigenschaft wurde durch `active` und `highlighted` ersetzt.
- `sessionId` {{optional_inline}}
  - : `string`. Die Sitzungs-ID, die verwendet wird, um einen `Tab` eindeutig zu identifizieren, der über die {{WebExtAPIRef('sessions')}} API erhalten wurde.
- `status` {{optional_inline}}
  - : `string`. Entweder _loading_ oder _complete_.
- `successorTabId` {{optional_inline}}
  - : `integer` Die ID des Nachfolgers des Tabs.
- `title` {{optional_inline}}
  - : `string`. Der Titel des Tabs. Nur vorhanden, wenn die Erweiterung die `"tabs"` [permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) hat, die mit der URL des Tabs übereinstimmen.
- `url` {{optional_inline}}
  - : `string`. Die URL des Dokuments, das der Tab anzeigt. Nur vorhanden, wenn die Erweiterung die `"tabs"` [permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder übereinstimmende [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) hat.
- `width` {{optional_inline}}
  - : `integer`. Die Breite des Tabs in Pixeln.
- `windowId`
  - : `integer`. Die ID des Fensters, das diesen Tab hostet.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#type-Tab). Diese Dokumentation stammt von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.
