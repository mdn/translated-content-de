---
title: Firefox 95 für Entwickler
slug: Mozilla/Firefox/Releases/95
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 95, die Entwickler betreffen.
Firefox 95 wurde am 7. Dezember 2021 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das globale Attribut [`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode) wird nun auf allen Plattformen unterstützt, nicht nur auf Android. Dies gibt den Browsern einen Hinweis auf den geeigneten Typ der virtuellen Tastatur, die zum Bearbeiten eines bestimmten Elements am besten geeignet wäre ([Firefox-Bug 1205133](https://bugzil.la/1205133)).

### CSS

- Die CSS-Eigenschaft [`cursor`](/de/docs/Web/CSS/cursor) wird jetzt auf Firefox für Android unterstützt, was es Android-Nutzern mit einer Maus erleichtert, festzustellen, welche Elemente anklickbar sind ([Firefox-Bug 1672609](https://bugzil.la/1672609)).

### JavaScript

Keine nennenswerten Änderungen

### APIs

- Die Funktion [`Crypto.randomUUID()`](/de/docs/Web/API/Crypto/randomUUID) wird nun unterstützt. Diese gibt eine kryptografisch starke, 36 Zeichen lange UUID fester Länge zurück ([Firefox-Bug 1723674](https://bugzil.la/1723674)).

#### Medien, WebRTC und Web Audio

- [`SpeechSynthesisEvent.elapsedTime`](/de/docs/Web/API/SpeechSynthesisEvent/elapsedTime) gibt nun die vergangene Zeit in Sekunden anstatt in Millisekunden zurück, im Einklang mit einer Aktualisierung der Spezifikation (siehe [Firefox-Bug 1732498](https://bugzil.la/1732498)).

### WebDriver-Konformität (Marionette)

- Der von Marionette verwendete `port` wird jetzt in die Datei `MarionetteActivePort` im Profilverzeichnis geschrieben. Dies kann verwendet werden, um den `port` einfach abzurufen, was vorher nur durch das Parsen der `prefs.js`-Datei des Profils möglich war. ([Firefox-Bug 1735162](https://bugzil.la/1735162)).
- `WebDriver:NewSession` wartet jetzt darauf, dass der initiale Tab das Laden abgeschlossen hat, um unerwartete Unloads des Fenster-Proxies zu verhindern. ([Firefox-Bug 1736323](https://bugzil.la/1736323)).

## Änderungen für Add-on-Entwickler

- `overrideContentColorScheme` wurde in {{WebExtAPIRef("browserSettings")}} hinzugefügt, um die Präferenz `layout.css.prefers-color-scheme.content-override` zu steuern und das bevorzugte Farbschema (hell oder dunkel) von Seiten unabhängig vom Browser-Theme festzulegen ([Firefox-Bug 1733461](https://bugzil.la/1733461)).

- `globalPrivacyControl` wurde in {{WebExtAPIRef("privacy.network")}} hinzugefügt, um anzuzeigen, ob der Benutzer die Global Privacy Control im Browser aktiviert hat. ([Firefox-Bug 1670058](https://bugzil.la/1670058)).

- Die [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) `"webRequestFilterResponse.serviceWorkerScript"` wurde hinzugefügt. Diese Berechtigung ermöglicht den Zugriff auf {{WebExtAPIRef("webRequest.filterResponseData")}} für Anfragen, die von Service-Worker-Skripten stammen. Diese Berechtigung kann als optionale Berechtigung bereitgestellt werden. Siehe {{WebExtAPIRef("webRequest.filterResponseData")}} für weitere Informationen zur Verwendung dieser Berechtigungen ([Firefox-Bug 1636629](https://bugzil.la/1636629)).

## Ältere Versionen

{{Firefox_for_developers}}
