---
title: browserSettings
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings
l10n:
  sourceCommit: 0883a7eca5c44d65daea8d73163a89d66a8d2f13
---

Ermöglicht es einer Erweiterung, bestimmte globale Browsereinstellungen zu ändern. Jede Eigenschaft dieser API ist ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, das die Möglichkeit bietet, eine bestimmte Einstellung zu ändern.

Da es sich um globale Einstellungen handelt, können Erweiterungen in Konflikt geraten. Weitere Informationen zur Behandlung von Konflikten finden Sie in der Dokumentation zu [`BrowserSetting.set()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/set).

Um diese API zu verwenden, benötigen Sie die Berechtigung "browserSettings" [permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

## Eigenschaften

- {{WebExtAPIRef("browserSettings.allowPopupsForUserEvents")}}
  - : Bestimmt, ob Code, der in Webseiten ausgeführt wird, Pop-ups als Reaktion auf Benutzereignisse anzeigen kann.
- {{WebExtAPIRef("browserSettings.cacheEnabled")}}
  - : Bestimmt, ob der Browser-Cache aktiviert ist oder nicht.
- {{WebExtAPIRef("browserSettings.closeTabsByDoubleClick")}}
  - : Bestimmt, ob der ausgewählte Tab durch einen Doppelklick geschlossen werden kann.
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
  - : Steuert die Position neuer Tabs im Verhältnis zu den geöffneten Tabs.
- {{WebExtAPIRef("browserSettings.openBookmarksInNewTabs")}}
  - : Bestimmt, ob Lesezeichen im aktuellen Tab oder einem neuen Tab geöffnet werden.
- {{WebExtAPIRef("browserSettings.openSearchResultsInNewTabs")}}
  - : Bestimmt, ob Suchergebnisse im aktuellen Tab oder einem neuen Tab geöffnet werden.
- {{WebExtAPIRef("browserSettings.openUrlbarResultsInNewTabs")}}
  - : Bestimmt, ob Adressleiste-Autovervollständigungsvorschläge im aktuellen Tab oder einem neuen Tab geöffnet werden.
- {{WebExtAPIRef("browserSettings.overrideContentColorScheme")}}
  - : Kontrolliert, ob das Browser-Design (hell oder dunkel) beim Festlegen der bevorzugten Farbpalette von Seiten überschrieben wird.
- {{WebExtAPIRef("browserSettings.overrideDocumentColors")}}
  - : Kontrolliert, ob die vom Benutzer gewählten Farben die Farben der Seite überschreiben.
- {{WebExtAPIRef("browserSettings.tlsVersionRestrictionConfig")}}
  - : Liest die höchsten und niedrigsten vom Browser unterstützten TLS-Versionen.
- {{WebExtAPIRef("browserSettings.useDocumentFonts")}}
  - : Kontrolliert, ob der Browser die von einer Webseite angegebenen Schriftarten verwendet oder nur eingebaute Schriftarten verwendet.
- {{WebExtAPIRef("browserSettings.verticalTabs")}}
  - : Kontrolliert, ob der Browser die Tableiste horizontal oder vertikal anzeigt.
- {{WebExtAPIRef("browserSettings.webNotificationsDisabled")}}
  - : Verhindert, dass Websites Benachrichtigungen mit der [`Notification`](/de/docs/Web/API/Notification) Web API anzeigen.
- {{WebExtAPIRef("browserSettings.zoomFullPage")}}
  - : Kontrolliert, ob der Zoom auf die gesamte Seite oder nur auf den Text angewendet wird.
- {{WebExtAPIRef("browserSettings.zoomSiteSpecific")}}
  - : Kontrolliert, ob der Seitenzoom pro Website oder pro Tab angewendet wird. Wenn [`privacy.websites.resistFingerprinting`](/de/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites#resistfingerprinting) wahr ist, hat diese Einstellung keine Wirkung und der Zoom wird pro Tab angewendet.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
