---
title: tabs.Tab
slug: Mozilla/Add-ons/WebExtensions/API/tabs/Tab
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Der Typ **`tabs.Tab`** enthält Informationen über einen Tab. Er bietet Zugriff auf Informationen darüber, welcher Inhalt im Tab ist, wie groß der Inhalt ist, welche besonderen Zustände oder Einschränkungen gelten und so weiter.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `active`

  - : `boolean`. Ob der Tab in seinem Fenster aktiv ist. Dies kann auch dann zutreffen, wenn das Fenster des Tabs nicht derzeit fokussiert ist.

    Der aktive Tab ist normalerweise der ausgewählte. Auf Firefox für Android öffnen Erweiterungspopups jedoch in einem neuen Tab. Wenn dieser Popup-Tab ausgewählt wird, ist der aktive Tab stattdessen der, in dem das Popup geöffnet wurde.

- `attention` {{optional_inline}}
  - : `boolean`. Gibt an, ob der Tab Aufmerksamkeit erregt. Wenn der Tab beispielsweise ein modales Dialogfeld anzeigt, wird `attention` auf `true` gesetzt.
- `audible` {{optional_inline}}
  - : `boolean`. Zeigt an, ob der Tab Ton produziert. Der Benutzer hört den Ton jedoch nicht, wenn der Tab stummgeschaltet ist (siehe die Eigenschaft `mutedInfo`).
- `autoDiscardable` {{optional_inline}}
  - : `boolean`. Ob der Tab vom Browser verworfen werden kann. Der Standardwert ist `true`. Wenn auf `false` gesetzt, kann der Browser den Tab nicht automatisch verwerfen. Der Tab kann jedoch durch {{WebExtAPIRef("tabs.discard")}} verworfen werden.
- `cookieStoreId` {{optional_inline}}
  - : `string`. Der Cookie-Speicher des Tabs. Siehe [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für weitere Informationen.
- `discarded` {{optional_inline}}
  - : `boolean`. Ob der Tab verworfen wurde. Ein verworfener Tab ist einer, dessen Inhalt aus dem Speicher entladen wurde, der aber weiterhin im Tabstreifen sichtbar ist. Sein Inhalt wird das nächste Mal neu geladen, wenn er aktiviert wird.
- `favIconUrl` {{optional_inline}}
  - : `string`. Die URL des Favicons des Tabs. Nur vorhanden, wenn die Erweiterung die `"tabs"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) hat. Es kann auch `undefined` sein, wenn die Seite kein Favicon hat, oder ein leerer String, wenn der Tab lädt.
- `height` {{optional_inline}}
  - : `integer`. Die Höhe des Tabs in Pixeln.
- `hidden`
  - : `boolean`. Ob der Tab versteckt ist.
- `highlighted`

  - : `boolean`. Ob der Tab hervorgehoben ist, d.h. Teil der aktuellen Tabauswahl ist. Ein aktiver Tab ist immer hervorgehoben, aber einige Browser erlauben es möglicherweise, zusätzliche Tabs hervorzuheben, z.B. durch Klicken auf sie, während die Tasten <kbd>Ctrl</kbd>, <kbd>Shift</kbd> oder <kbd>⌘ Command</kbd> gedrückt werden.

    Firefox für Android unterstützt das Hervorheben mehrerer Tabs nicht.

- `id` {{optional_inline}}
  - : `integer`. Die ID des Tabs. Tab-IDs sind innerhalb einer Browsersitzung eindeutig. Die Tab-ID kann auch auf {{WebExtAPIRef('tabs.TAB_ID_NONE')}} gesetzt werden für Browserfenster, die keine Inhaltstabs hosten (zum Beispiel Devtools-Fenster).
- `incognito`
  - : `boolean`. Ob der Tab in einem privaten Browserfenster ist.
- `index`
  - : `integer`. Der nullbasierte Index des Tabs innerhalb seines Fensters.
- `isArticle`
  - : `boolean`. Wahr, wenn der Tab [im Lesemodus angezeigt werden kann](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode), andernfalls falsch.
- `isInReaderMode`
  - : `boolean`. Wahr, wenn der Tab derzeit [im Lesemodus angezeigt wird](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode), andernfalls falsch.
- `lastAccessed` {{optional_inline}}
  - : `double`. Zeit, zu der der Tab zuletzt aufgerufen wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `mutedInfo` {{optional_inline}}
  - : {{WebExtAPIRef('tabs.MutedInfo')}}. Der aktuelle stummgeschaltete Zustand für den Tab und der Grund für die letzte Zustandsänderung.
- `openerTabId` {{optional_inline}}
  - : `integer`. Die ID des Tabs, der diesen Tab geöffnet hat, falls vorhanden. Diese Eigenschaft ist nur vorhanden, wenn der öffnende Tab noch existiert und sich im selben Fenster befindet.
- `pendingUrl`
  - : `string`. Die URL, zu der der Tab navigiert, bevor sie bestätigt wurde. Diese Eigenschaft ist nur vorhanden, wenn das Manifest der Erweiterung die "tabs"-Berechtigung enthält und eine ausstehende Navigation vorliegt.
- `pinned`
  - : `boolean`. Ob der Tab angepinnt ist.
- `selected` {{deprecated_inline}}
  - : `boolean`. Ob der Tab ausgewählt ist. Diese Eigenschaft wurde durch `active` und `highlighted` ersetzt.
- `sessionId` {{optional_inline}}
  - : `string`. Die Sitzungs-ID, die verwendet wird, um einen `Tab` eindeutig zu identifizieren, der von der {{WebExtAPIRef('sessions')}} API erhalten wurde.
- `status` {{optional_inline}}
  - : `string`. Entweder _loading_ oder _complete_.
- `successorTabId` {{optional_inline}}
  - : `integer`. Die ID des Nachfolgers des Tabs.
- `title` {{optional_inline}}
  - : `string`. Der Titel des Tabs. Nur vorhanden, wenn die Erweiterung die `"tabs"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder eine passende [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) hat, die mit der URL des Tabs übereinstimmt.
- `url` {{optional_inline}}
  - : `string`. Die URL des Dokuments, das der Tab anzeigt. Nur vorhanden, wenn die Erweiterung die `"tabs"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder eine passende [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) hat.
- `width` {{optional_inline}}
  - : `integer`. Die Breite des Tabs in Pixeln.
- `windowId`
  - : `integer`. Die ID des Fensters, das diesen Tab hostet.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#type-Tab) API. Diese Dokumentation stammt von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.
