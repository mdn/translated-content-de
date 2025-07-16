---
title: browserSettings
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ermöglicht es einer Erweiterung, bestimmte globale Browsereinstellungen zu ändern. Jede Eigenschaft dieser API ist ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} Objekt, das die Möglichkeit bietet, eine bestimmte Einstellung zu modifizieren.

Da es sich um globale Einstellungen handelt, können Konflikte zwischen Erweiterungen auftreten. Siehe die Dokumentation für [`BrowserSetting.set()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/set) für Details, wie Konflikte behandelt werden.

Um diese API zu nutzen, müssen Sie die Berechtigung "browserSettings" [permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) besitzen.

## Eigenschaften

- {{WebExtAPIRef("browserSettings.allowPopupsForUserEvents")}}
  - : Bestimmt, ob Code, der auf Webseiten ausgeführt wird, Popups als Reaktion auf Benutzerevents anzeigen kann.
- {{WebExtAPIRef("browserSettings.cacheEnabled")}}
  - : Bestimmt, ob der Browser-Cache aktiviert ist oder nicht.
- {{WebExtAPIRef("browserSettings.closeTabsByDoubleClick")}}
  - : Bestimmt, ob der ausgewählte Tab durch Doppelklick geschlossen werden kann.
- {{WebExtAPIRef("browserSettings.colorManagement")}}
  - : Bestimmt verschiedene Einstellungen für das Farbmanagement.
- {{WebExtAPIRef("browserSettings.contextMenuShowEvent")}}
  - : Bestimmt das Mausereignis, das ein Kontextmenü-Popup auslöst.
- {{WebExtAPIRef("browserSettings.ftpProtocolEnabled")}}
  - : Bestimmt, ob das FTP-Protokoll aktiviert ist.
- {{WebExtAPIRef("browserSettings.homepageOverride")}}
  - : Liest den Wert der Startseite des Browsers.
- {{WebExtAPIRef("browserSettings.imageAnimationBehavior")}}
  - : Bestimmt, wie der Browser animierte Bilder behandelt.
- {{WebExtAPIRef("browserSettings.newTabPageOverride")}}
  - : Liest den Wert der neuen Tab-Seite des Browsers.
- {{WebExtAPIRef("browserSettings.newTabPosition")}}
  - : Steuert die Position von neu geöffneten Tabs relativ zu bereits geöffneten Tabs.
- {{WebExtAPIRef("browserSettings.openBookmarksInNewTabs")}}
  - : Bestimmt, ob Lesezeichen im aktuellen Tab oder in einem neuen Tab geöffnet werden.
- {{WebExtAPIRef("browserSettings.openSearchResultsInNewTabs")}}
  - : Bestimmt, ob Suchergebnisse im aktuellen Tab oder in einem neuen Tab geöffnet werden.
- {{WebExtAPIRef("browserSettings.openUrlbarResultsInNewTabs")}}
  - : Bestimmt, ob die Autovervollständigungsvorschläge der Adressleiste im aktuellen Tab oder in einem neuen Tab geöffnet werden.
- {{WebExtAPIRef("browserSettings.overrideContentColorScheme")}}
  - : Steuert, ob das Browser-Theme (hell oder dunkel) überschrieben wird, wenn die bevorzugte Farbgestaltung der Seiten festgelegt wird.
- {{WebExtAPIRef("browserSettings.overrideDocumentColors")}}
  - : Steuert, ob die vom Benutzer gewählten Farben die Farben der Seite überschreiben.
- {{WebExtAPIRef("browserSettings.tlsVersionRestrictionConfig")}}
  - : Liest die höchsten und niedrigsten TLS-Versionen, die vom Browser unterstützt werden.
- {{WebExtAPIRef("browserSettings.useDocumentFonts")}}
  - : Steuert, ob der Browser die von einer Webseite angegebenen Schriftarten verwendet oder nur integrierte Schriftarten verwendet.
- {{WebExtAPIRef("browserSettings.webNotificationsDisabled")}}
  - : Verhindert, dass Websites Benachrichtigungen über die [`Notification`](/de/docs/Web/API/Notification) Web API anzeigen.
- {{WebExtAPIRef("browserSettings.zoomFullPage")}}
  - : Steuert, ob der Zoom auf die gesamte Seite oder nur auf Text angewendet wird.
- {{WebExtAPIRef("browserSettings.zoomSiteSpecific")}}
  - : Steuert, ob der Seitenzoom pro Seite oder pro Tab angewendet wird. Wenn [`privacy.websites.resistFingerprinting`](/de/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites#resistfingerprinting) wahr ist, hat diese Einstellung keine Auswirkung und der Zoom wird pro Tab angewendet.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
