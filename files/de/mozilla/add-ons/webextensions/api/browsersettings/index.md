---
title: browserSettings
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings
l10n:
  sourceCommit: eec174a08a5003da32f53e694c45eda3377b4d18
---

{{AddonSidebar}}

Ermöglicht einer Erweiterung, bestimmte globale Browsereinstellungen zu ändern. Jede Eigenschaft dieser API ist ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} Objekt, welches die Möglichkeit bietet, eine bestimmte Einstellung zu ändern.

Da es sich um globale Einstellungen handelt, können Erweiterungen in Konflikt geraten. Siehe die Dokumentation für [`BrowserSetting.set()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/set) für Details dazu, wie Konflikte behandelt werden.

Um diese API zu nutzen, benötigen Sie die "browserSettings" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

## Eigenschaften

- {{WebExtAPIRef("browserSettings.allowPopupsForUserEvents")}}
  - : Bestimmt, ob Code, der auf Webseiten läuft, Popups als Reaktion auf Benutzerereignisse anzeigen kann.
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
  - : Liest den Wert der Startseite des Browsers.
- {{WebExtAPIRef("browserSettings.imageAnimationBehavior")}}
  - : Bestimmt, wie der Browser animierte Bilder behandelt.
- {{WebExtAPIRef("browserSettings.newTabPageOverride")}}
  - : Liest den Wert der neuen Tab-Seite des Browsers.
- {{WebExtAPIRef("browserSettings.newTabPosition")}}
  - : Steuert die Position neu geöffneter Tabs relativ zu bereits geöffneten Tabs.
- {{WebExtAPIRef("browserSettings.openBookmarksInNewTabs")}}
  - : Bestimmt, ob Lesezeichen im aktuellen Tab oder in einem neuen Tab geöffnet werden.
- {{WebExtAPIRef("browserSettings.openSearchResultsInNewTabs")}}
  - : Bestimmt, ob Suchergebnisse im aktuellen Tab oder in einem neuen Tab geöffnet werden.
- {{WebExtAPIRef("browserSettings.openUrlbarResultsInNewTabs")}}
  - : Bestimmt, ob Autovervollständigungs-Vorschläge der Adressleiste im aktuellen Tab oder in einem neuen Tab geöffnet werden.
- {{WebExtAPIRef("browserSettings.overrideContentColorScheme")}}
  - : Steuert, ob das Browser-Thema (hell oder dunkel) beim Festlegen der bevorzugten Farbgebung von Seiten überschrieben wird.
- {{WebExtAPIRef("browserSettings.overrideDocumentColors")}}
  - : Steuert, ob die vom Benutzer gewählten Farben die Farben der Seite überschreiben.
- {{WebExtAPIRef("browserSettings.tlsVersionRestrictionConfig")}}
  - : Liest die höchsten und niedrigsten von dem Browser unterstützten TLS-Versionen.
- {{WebExtAPIRef("browserSettings.useDocumentFonts")}}
  - : Steuert, ob der Browser die von einer Webseite angegebenen Schriftarten verwendet oder nur integrierte Schriftarten.
- {{WebExtAPIRef("browserSettings.webNotificationsDisabled")}}
  - : Verhindert, dass Webseiten Benachrichtigungen mit der [`Notification`](/de/docs/Web/API/Notification) Web-API anzeigen.
- {{WebExtAPIRef("browserSettings.zoomFullPage")}}
  - : Steuert, ob der Zoom auf die gesamte Seite oder nur auf Text angewendet wird.
- {{WebExtAPIRef("browserSettings.zoomSiteSpecific")}}
  - : Steuert, ob der Seitenzoom auf einer per-Site- oder per-Tab-Basis angewendet wird. Wenn {{WebExtAPIRef("privacy.websites")}}`.resistFingerprinting` wahr ist, hat diese Einstellung keine Auswirkung und Zoom wird auf einer per-Tab-Basis angewandt.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}
