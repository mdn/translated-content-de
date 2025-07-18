---
title: browserSettings
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ermöglicht einer Erweiterung, bestimmte globale Browsereinstellungen zu ändern. Jede Eigenschaft dieser API ist ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, das die Möglichkeit bietet, eine bestimmte Einstellung zu ändern.

Da es sich um globale Einstellungen handelt, können Erweiterungen in Konflikt geraten. Siehe die Dokumentation zu [`BrowserSetting.set()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/set) für Details dazu, wie Konflikte gehandhabt werden.

Um diese API zu verwenden, müssen Sie die "browserSettings"-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) haben.

## Eigenschaften

- {{WebExtAPIRef("browserSettings.allowPopupsForUserEvents")}}
  - : Bestimmt, ob im Webseitencode laufende Abläufe Pop-ups als Reaktion auf Benutzerereignisse anzeigen können.
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
  - : Steuert die Position neu geöffneter Tabs im Verhältnis zu bereits geöffneten Tabs.
- {{WebExtAPIRef("browserSettings.openBookmarksInNewTabs")}}
  - : Bestimmt, ob Lesezeichen im aktuellen oder in einem neuen Tab geöffnet werden.
- {{WebExtAPIRef("browserSettings.openSearchResultsInNewTabs")}}
  - : Bestimmt, ob Suchergebnisse im aktuellen oder in einem neuen Tab geöffnet werden.
- {{WebExtAPIRef("browserSettings.openUrlbarResultsInNewTabs")}}
  - : Bestimmt, ob Adressleisten-Autovervollständigungsvorschläge im aktuellen oder einem neuen Tab geöffnet werden.
- {{WebExtAPIRef("browserSettings.overrideContentColorScheme")}}
  - : Steuert, ob das Browser-Theme (hell oder dunkel) überschrieben wird, wenn die bevorzugte Farbgebung von Seiten eingestellt wird.
- {{WebExtAPIRef("browserSettings.overrideDocumentColors")}}
  - : Steuert, ob die vom Benutzer gewählten Farben die Seitenfarben überschreiben.
- {{WebExtAPIRef("browserSettings.tlsVersionRestrictionConfig")}}
  - : Liest die höchste und niedrigste Version von TLS, die vom Browser unterstützt wird.
- {{WebExtAPIRef("browserSettings.useDocumentFonts")}}
  - : Steuert, ob der Browser die von einer Webseite angegebenen Schriftarten verwendet oder nur eingebaute Schriftarten nutzt.
- {{WebExtAPIRef("browserSettings.webNotificationsDisabled")}}
  - : Verhindert, dass Webseiten Benachrichtigungen über die [`Notification`](/de/docs/Web/API/Notification) Web API anzeigen.
- {{WebExtAPIRef("browserSettings.zoomFullPage")}}
  - : Steuert, ob die Zoomfunktion auf die gesamte Seite oder nur auf Text angewendet wird.
- {{WebExtAPIRef("browserSettings.zoomSiteSpecific")}}
  - : Steuert, ob der Seitenzoom site-spezifisch oder pro Tab angewendet wird. Wenn [`privacy.websites.resistFingerprinting`](/de/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites#resistfingerprinting) wahr ist, hat diese Einstellung keine Auswirkung und der Zoom wird pro Tab angewendet.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
