---
title: Firefox 95 für Entwickler
slug: Mozilla/Firefox/Releases/95
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 95, die Entwickler betreffen werden.
Firefox 95 wurde am 7. Dezember 2021 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das globale Attribut [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode) wird nun auf allen Plattformen unterstützt, nicht nur auf Android.
  Dies gibt den Browsern einen Hinweis darauf, welche Art von virtueller Tastatur am besten geeignet ist, um ein bestimmtes Element zu bearbeiten ([Firefox-Bug 1205133](https://bugzil.la/1205133)).

### CSS

- Die CSS-Eigenschaft [`cursor`](/de/docs/Web/CSS/cursor) wird jetzt auf Firefox für Android unterstützt,
  wodurch es Android-Nutzern mit einer Maus erleichtert wird, festzustellen, welche Elemente anklickbar sind ([Firefox-Bug 1672609](https://bugzil.la/1672609)).

### JavaScript

Keine bemerkenswerten Änderungen

### APIs

- Die Funktion [`Crypto.randomUUID()`](/de/docs/Web/API/Crypto/randomUUID) wird nun unterstützt. Diese gibt eine kryptografisch sichere UUID mit fester Länge von 36 Zeichen zurück ([Firefox-Bug 1723674](https://bugzil.la/1723674)).

#### Medien, WebRTC und Web Audio

- [`SpeechSynthesisEvent.elapsedTime`](/de/docs/Web/API/SpeechSynthesisEvent/elapsedTime) gibt nun die vergangene Zeit in Sekunden anstatt in Millisekunden zurück, was einer Aktualisierung der Spezifikation entspricht (siehe [Firefox-Bug 1732498](https://bugzil.la/1732498)).

### WebDriver-Konformität (Marionette)

- Der `port`, der von Marionette verwendet wird, wird jetzt in die Datei `MarionetteActivePort` im Profilverzeichnis geschrieben. Dies ermöglicht es, den `port` einfach abzurufen, was zuvor nur durch das Parsen der `prefs.js` Datei des Profils möglich war. ([Firefox-Bug 1735162](https://bugzil.la/1735162)).
- `WebDriver:NewSession` wartet nun darauf, dass der Initial-Tab das Laden abgeschlossen hat, um unerwartete Entladungen des Fensterproxys zu verhindern. ([Firefox-Bug 1736323](https://bugzil.la/1736323)).

## Änderungen für Add-on-Entwickler

- Hinzugefügt: `overrideContentColorScheme` in {{WebExtAPIRef("browserSettings")}}, um die Kontrolle über die Präferenz `layout.css.prefers-color-scheme.content-override` zu ermöglichen und das bevorzugte Farbschema (hell oder dunkel) von Seiten unabhängig vom Browser-Theme festzulegen ([Firefox-Bug 1733461](https://bugzil.la/1733461)).

- Hinzugefügt: `globalPrivacyControl` in {{WebExtAPIRef("privacy.network")}}, um Sichtbarkeit darüber zu bieten, ob der Benutzer Global Privacy Control im Browser aktiviert hat ([Firefox-Bug 1670058](https://bugzil.la/1670058)).

- Die [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) `"webRequestFilterResponse.serviceWorkerScript"` wurde hinzugefügt. Diese Berechtigung gewährt Zugriff auf {{WebExtAPIRef("webRequest.filterResponseData")}} für Anfragen, die für Service-Worker-Skripte entstanden sind. Diese Berechtigung kann als optionale Berechtigung angegeben werden. Weitere Informationen zur Nutzung dieser Berechtigungen finden Sie unter {{WebExtAPIRef("webRequest.filterResponseData")}} ([Firefox-Bug 1636629](https://bugzil.la/1636629)).

## Ältere Versionen

{{Firefox_for_developers}}
