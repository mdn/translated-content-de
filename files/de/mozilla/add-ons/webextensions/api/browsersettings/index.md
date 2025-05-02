---
title: browserSettings
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings
l10n:
  sourceCommit: c01b393fbb6939f88cc98ac2a34df1a54be1edfd
---

{{AddonSidebar}}

Ermöglicht einer Erweiterung, bestimmte globale Browsereinstellungen zu ändern. Jedes Objekt dieser API ist ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} Objekt, das die Möglichkeit bietet, eine bestimmte Einstellung zu ändern.

Da es sich um globale Einstellungen handelt, können Konflikte zwischen Erweiterungen auftreten. Für Details, wie Konflikte behandelt werden, siehe die Dokumentation für [`BrowserSetting.set()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/set).

Um diese API zu verwenden, benötigen Sie die Berechtigung "browserSettings" [permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

## Eigenschaften

- {{WebExtAPIRef("browserSettings.allowPopupsForUserEvents")}}
  - : Bestimmt, ob Code, der auf Webseiten ausgeführt wird, Popups als Reaktion auf Benutzerereignisse anzeigen kann.
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
  - : Bestimmt, wie der Browser mit animierten Bildern umgeht.
- {{WebExtAPIRef("browserSettings.newTabPageOverride")}}
  - : Liest den Wert der neuen Tab-Seite des Browsers.
- {{WebExtAPIRef("browserSettings.newTabPosition")}}
  - : Steuert die Position neu geöffneter Tabs relativ zu bereits geöffneten Tabs.
- {{WebExtAPIRef("browserSettings.openBookmarksInNewTabs")}}
  - : Bestimmt, ob Lesezeichen im aktuellen Tab oder in einem neuen Tab geöffnet werden.
- {{WebExtAPIRef("browserSettings.openSearchResultsInNewTabs")}}
  - : Bestimmt, ob Suchergebnisse im aktuellen Tab oder in einem neuen Tab geöffnet werden.
- {{WebExtAPIRef("browserSettings.openUrlbarResultsInNewTabs")}}
  - : Bestimmt, ob Autovervollständigungsvorschläge der Adressleiste im aktuellen Tab oder in einem neuen Tab geöffnet werden.
- {{WebExtAPIRef("browserSettings.overrideContentColorScheme")}}
  - : Steuert, ob das Browser-Thema (hell oder dunkel) beim Festlegen der bevorzugten Farbschema der Seiten überschrieben wird.
- {{WebExtAPIRef("browserSettings.overrideDocumentColors")}}
  - : Steuert, ob die vom Benutzer gewählten Farben die Farben der Seite überschreiben.
- {{WebExtAPIRef("browserSettings.tlsVersionRestrictionConfig")}}
  - : Liest die höchste und niedrigste von dem Browser unterstützte Version von TLS.
- {{WebExtAPIRef("browserSettings.useDocumentFonts")}}
  - : Steuert, ob der Browser die von einer Webseite angegebenen Schriftarten oder nur die eingebauten Schriftarten verwendet.
- {{WebExtAPIRef("browserSettings.webNotificationsDisabled")}}
  - : Verhindert, dass Websites Benachrichtigungen über das [`Notification`](/de/docs/Web/API/Notification) Web-API anzeigen.
- {{WebExtAPIRef("browserSettings.zoomFullPage")}}
  - : Steuert, ob der Zoom auf die gesamte Seite oder nur auf den Text angewendet wird.
- {{WebExtAPIRef("browserSettings.zoomSiteSpecific")}}
  - : Steuert, ob der Seitenzoom auf einer per-Site- oder per-Tab-Basis angewendet wird. Wenn [`privacy.websites.resistFingerprinting`](/de/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites#resistfingerprinting) wahr ist, hat diese Einstellung keine Wirkung und der Zoom wird auf einer per-Tab-Basis angewendet.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}
