---
title: Firefox 95 für Entwickler
short-title: Firefox 95
slug: Mozilla/Firefox/Releases/95
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 95, die Entwickler betreffen.
Firefox 95 wurde am 7. Dezember 2021 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das globale Attribut [`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode) wird jetzt auf allen Plattformen unterstützt, nicht nur auf Android.
  Dies bietet den Browsern einen Hinweis auf die Art der virtuellen Tastatur, die zum Bearbeiten eines bestimmten Elements am besten geeignet wäre ([Firefox-Bug 1205133](https://bugzil.la/1205133)).

### CSS

- Die CSS-Eigenschaft [`cursor`](/de/docs/Web/CSS/cursor) wird jetzt auf Firefox für Android unterstützt,
  was es Android-Nutzern mit einer Maus erleichtert, festzustellen, welche Elemente anklickbar sind ([Firefox-Bug 1672609](https://bugzil.la/1672609)).

### JavaScript

Keine bemerkenswerten Änderungen

### APIs

- Die Funktion [`Crypto.randomUUID()`](/de/docs/Web/API/Crypto/randomUUID) wird jetzt unterstützt. Diese gibt eine kryptografisch starke 36 Zeichen lange UUID mit fester Länge zurück ([Firefox-Bug 1723674](https://bugzil.la/1723674)).

#### Medien, WebRTC und Web Audio

- [`SpeechSynthesisEvent.elapsedTime`](/de/docs/Web/API/SpeechSynthesisEvent/elapsedTime) gibt jetzt die verstrichene Zeit in Sekunden anstelle von Millisekunden zurück, entsprechend einer Aktualisierung der Spezifikation (siehe [Firefox-Bug 1732498](https://bugzil.la/1732498)).

### WebDriver-Konformität (Marionette)

- Der `port`, der von Marionette verwendet wird, wird nun in die Datei `MarionetteActivePort` im Profilverzeichnis geschrieben. Dies kann verwendet werden, um den `port` leicht abzurufen, was zuvor nur durch das Parsen der `prefs.js`-Datei des Profils möglich war. ([Firefox-Bug 1735162](https://bugzil.la/1735162)).
- `WebDriver:NewSession` wartet jetzt, bis das initiale Tab vollständig geladen ist, um unerwartete Entladungen des Fenster-Proxys zu verhindern. ([Firefox-Bug 1736323](https://bugzil.la/1736323)).

## Änderungen für Add-on-Entwickler

- Hinzugefügt `overrideContentColorScheme` in {{WebExtAPIRef("browserSettings")}}, um die Fähigkeit zu bieten, die Präferenz `layout.css.prefers-color-scheme.content-override` zu steuern und das bevorzugte Farbschema der Seiten (hell oder dunkel) unabhängig vom Browser-Thema festzulegen ([Firefox-Bug 1733461](https://bugzil.la/1733461)).

- Hinzugefügt `globalPrivacyControl` in {{WebExtAPIRef("privacy.network")}}, um Einblicke zu bieten, ob der Benutzer Global Privacy Control im Browser aktiviert hat. ([Firefox-Bug 1670058](https://bugzil.la/1670058)).

- Die `"webRequestFilterResponse.serviceWorkerScript"` [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) wurde hinzugefügt. Diese Berechtigung bietet Zugriff auf {{WebExtAPIRef("webRequest.filterResponseData")}} für Anfragen, die für `service worker`-Skripte stammen. Diese Berechtigung kann als optionale Berechtigung bereitgestellt werden. Weitere Informationen zur Verwendung dieser Berechtigungen finden Sie unter {{WebExtAPIRef("webRequest.filterResponseData")}} ([Firefox-Bug 1636629](https://bugzil.la/1636629)).
