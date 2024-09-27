---
title: browserSettings
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings
l10n:
  sourceCommit: eec174a08a5003da32f53e694c45eda3377b4d18
---

{{AddonSidebar}}

Ermöglicht einer Erweiterung, bestimmte globale Browsereinstellungen zu ändern. Jede Eigenschaft dieser API ist ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} Objekt, das die Möglichkeit bietet, eine bestimmte Einstellung zu ändern.

Da es sich um globale Einstellungen handelt, können Konflikte zwischen Erweiterungen auftreten. Siehe die Dokumentation zu [`BrowserSetting.set()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/set) für Details zur Handhabung von Konflikten.

Um diese API zu verwenden, benötigen Sie die "browserSettings" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

## Eigenschaften

- {{WebExtAPIRef("browserSettings.allowPopupsForUserEvents")}}
  - : Bestimmt, ob Code, der in Webseiten ausgeführt wird, Popups als Reaktion auf Benutzerereignisse anzeigen kann.
- {{WebExtAPIRef("browserSettings.cacheEnabled")}}
  - : Bestimmt, ob der Browser-Cache aktiviert ist oder nicht.
- {{WebExtAPIRef("browserSettings.closeTabsByDoubleClick")}}
  - : Bestimmt, ob der ausgewählte Tab mit einem Doppelklick geschlossen werden kann.
- {{WebExtAPIRef("browserSettings.colorManagement")}}
  - : Bestimmt verschiedene Einstellungen für das Farbmanagement.
- {{WebExtAPIRef("browserSettings.contextMenuShowEvent")}}
  - : Bestimmt das Mausereignis, das ein Kontextmenü-Popup auslöst.
- {{WebExtAPIRef("browserSettings.ftpProtocolEnabled")}}
  - : Bestimmt, ob das FTP-Protokoll aktiviert ist.
- {{WebExtAPIRef("browserSettings.homepageOverride")}}
  - : Liest den Wert der Startseite des Browsers aus.
- {{WebExtAPIRef("browserSettings.imageAnimationBehavior")}}
  - : Bestimmt, wie der Browser mit animierten Bildern umgeht.
- {{WebExtAPIRef("browserSettings.newTabPageOverride")}}
  - : Liest den Wert der neuen Tab-Seite des Browsers aus.
- {{WebExtAPIRef("browserSettings.newTabPosition")}}
  - : Kontrolliert die Position neu geöffneter Tabs relativ zu bereits offenen Tabs.
- {{WebExtAPIRef("browserSettings.openBookmarksInNewTabs")}}
  - : Bestimmt, ob Lesezeichen im aktuellen Tab oder in einem neuen Tab geöffnet werden.
- {{WebExtAPIRef("browserSettings.openSearchResultsInNewTabs")}}
  - : Bestimmt, ob Suchergebnisse im aktuellen Tab oder in einem neuen Tab geöffnet werden.
- {{WebExtAPIRef("browserSettings.openUrlbarResultsInNewTabs")}}
  - : Bestimmt, ob Adressleisten-Autovervollständigungsvorschläge im aktuellen Tab oder in einem neuen Tab geöffnet werden.
- {{WebExtAPIRef("browserSettings.overrideContentColorScheme")}}
  - : Kontrolliert, ob das Browser-Design (hell oder dunkel) beim Festlegen der bevorzugten Farbgestaltung von Seiten überschrieben wird.
- {{WebExtAPIRef("browserSettings.overrideDocumentColors")}}
  - : Kontrolliert, ob die vom Benutzer gewählten Farben die Farben der Seite überschreiben.
- {{WebExtAPIRef("browserSettings.tlsVersionRestrictionConfig")}}
  - : Liest die höchste und niedrigste vom Browser unterstützte TLS-Version aus.
- {{WebExtAPIRef("browserSettings.useDocumentFonts")}}
  - : Kontrolliert, ob der Browser die von einer Webseite angegebenen Schriftarten verwendet oder nur eingebaute Schriftarten verwendet.
- {{WebExtAPIRef("browserSettings.webNotificationsDisabled")}}
  - : Verhindert, dass Websites Benachrichtigungen mit der [`Notification`](/de/docs/Web/API/Notification) Web API anzeigen.
- {{WebExtAPIRef("browserSettings.zoomFullPage")}}
  - : Kontrolliert, ob der Zoom auf die gesamte Seite oder nur auf Text angewendet wird.
- {{WebExtAPIRef("browserSettings.zoomSiteSpecific")}}
  - : Kontrolliert, ob der Seitenzoom pro Website oder pro Tab angewendet wird. Wenn {{WebExtAPIRef("privacy.websites")}}`.resistFingerprinting` wahr ist, hat diese Einstellung keine Auswirkung und der Zoom wird pro Tab angewendet.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}
