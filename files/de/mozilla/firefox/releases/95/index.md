---
title: Firefox 95 Versionshinweise für Entwickler
short-title: Firefox 95
slug: Mozilla/Firefox/Releases/95
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 95, die Entwickler betreffen werden. Firefox 95 wurde am 7. Dezember 2021 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das globale Attribut [`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode) wird jetzt auf allen Plattformen unterstützt, nicht nur auf Android.
  Dies gibt den Browsern einen Hinweis auf den Typ der virtuellen Tastatur, die am besten geeignet ist, um ein bestimmtes Element zu bearbeiten ([Firefox-Bug 1205133](https://bugzil.la/1205133)).

### CSS

- Die CSS-Eigenschaft [`cursor`](/de/docs/Web/CSS/Reference/Properties/cursor) wird jetzt in Firefox für Android unterstützt,
  was es Android-Nutzern mit einer Maus erleichtert, zu bestimmen, welche Elemente anklickbar sind ([Firefox-Bug 1672609](https://bugzil.la/1672609)).

### JavaScript

Keine bemerkenswerten Änderungen

### APIs

- Die Funktion [`Crypto.randomUUID()`](/de/docs/Web/API/Crypto/randomUUID) wird jetzt unterstützt. Sie gibt eine kryptographisch starke UUID mit fester Länge von 36 Zeichen zurück ([Firefox-Bug 1723674](https://bugzil.la/1723674)).

#### Medien, WebRTC und Web Audio

- [`SpeechSynthesisEvent.elapsedTime`](/de/docs/Web/API/SpeechSynthesisEvent/elapsedTime) gibt nun die verstrichene Zeit in Sekunden statt in Millisekunden zurück, entsprechend einer Aktualisierung der Spezifikation (siehe [Firefox-Bug 1732498](https://bugzil.la/1732498)).

### WebDriver-Konformität (Marionette)

- Der `port`, der von Marionette verwendet wird, wird jetzt in die Datei `MarionetteActivePort` im Profilverzeichnis geschrieben. Dies kann verwendet werden, um den `port` leicht abzurufen, was zuvor nur durch das Parsen der Datei `prefs.js` des Profils möglich war. ([Firefox-Bug 1735162](https://bugzil.la/1735162)).
- `WebDriver:NewSession` wartet nun, bis der initiale Tab das Laden abgeschlossen hat, um unerwartete Entladungen der Fenster-Proxys zu verhindern. ([Firefox-Bug 1736323](https://bugzil.la/1736323)).

## Änderungen für Add-on-Entwickler

- `overrideContentColorScheme` wurde in {{WebExtAPIRef("browserSettings")}} hinzugefügt, um die Möglichkeit zu bieten, die Präferenz `layout.css.prefers-color-scheme.content-override` zu steuern und das bevorzugte Farbschema (hell oder dunkel) der Seiten unabhängig vom Browser-Thema festzulegen ([Firefox-Bug 1733461](https://bugzil.la/1733461)).

- `globalPrivacyControl` wurde in {{WebExtAPIRef("privacy.network")}} hinzugefügt, um Einblick zu geben, ob der Benutzer Global Privacy Control im Browser aktiviert hat ([Firefox-Bug 1670058](https://bugzil.la/1670058)).

- Die [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) `"webRequestFilterResponse.serviceWorkerScript"` wurde hinzugefügt. Diese Berechtigung bietet Zugriff auf {{WebExtAPIRef("webRequest.filterResponseData")}} für Anfragen, die für Service Worker Scripts initiiert wurden. Diese Berechtigung kann als optionale Berechtigung bereitgestellt werden. Siehe {{WebExtAPIRef("webRequest.filterResponseData")}} für weitere Informationen zur Verwendung dieser Berechtigungen ([Firefox-Bug 1636629](https://bugzil.la/1636629)).
