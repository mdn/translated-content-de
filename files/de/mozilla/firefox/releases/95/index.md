---
title: Firefox 95 Versionshinweise für Entwickler
short-title: Firefox 95
slug: Mozilla/Firefox/Releases/95
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 95, die Entwickler betreffen werden.
Firefox 95 wurde am 7. Dezember 2021 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das globale Attribut [`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode) wird jetzt auf allen Plattformen unterstützt, nicht nur auf Android.
  Dies bietet Browsern einen Hinweis auf den Typ der virtuellen Tastatur, der am besten für die Bearbeitung eines bestimmten Elements geeignet wäre ([Firefox-Bug 1205133](https://bugzil.la/1205133)).

### CSS

- Die CSS-Eigenschaft [`cursor`](/de/docs/Web/CSS/cursor) wird jetzt auf Firefox für Android unterstützt,
  was es Android-Nutzern mit einer Maus erleichtert, festzustellen, welche Elemente anklickbar sind ([Firefox-Bug 1672609](https://bugzil.la/1672609)).

### JavaScript

Keine bemerkenswerten Änderungen

### APIs

- Die Funktion [`Crypto.randomUUID()`](/de/docs/Web/API/Crypto/randomUUID) wird jetzt unterstützt. Diese gibt eine kryptographisch starke, 36 Zeichen lange, festgelegte UUID zurück ([Firefox-Bug 1723674](https://bugzil.la/1723674)).

#### Medien, WebRTC und Web Audio

- [`SpeechSynthesisEvent.elapsedTime`](/de/docs/Web/API/SpeechSynthesisEvent/elapsedTime) gibt jetzt die verstrichene Zeit in Sekunden statt in Millisekunden zurück, um eine Aktualisierung der Spezifikation widerzuspiegeln (siehe [Firefox-Bug 1732498](https://bugzil.la/1732498)).

### WebDriver-Konformität (Marionette)

- Der `port`, der von Marionette verwendet wird, wird jetzt in die Datei `MarionetteActivePort` im Profilverzeichnis geschrieben. Dies kann verwendet werden, um den `port` leicht abzurufen, was zuvor nur durch das Parsen der `prefs.js`-Datei des Profils möglich war. ([Firefox-Bug 1735162](https://bugzil.la/1735162)).
- `WebDriver:NewSession` wartet jetzt, bis das initiale Tab das Laden abgeschlossen hat, um unerwartete Unloads des Fensterproxies zu verhindern. ([Firefox-Bug 1736323](https://bugzil.la/1736323)).

## Änderungen für Add-on-Entwickler

- Hinzugefügt `overrideContentColorScheme` in {{WebExtAPIRef("browserSettings")}}, um die Möglichkeit zu bieten, die Präferenz `layout.css.prefers-color-scheme.content-override` zu steuern und die bevorzugte Farbgestaltung der Seiten (hell oder dunkel) unabhängig vom Browser-Theme festzulegen ([Firefox-Bug 1733461](https://bugzil.la/1733461)).

- Hinzugefügt `globalPrivacyControl` in {{WebExtAPIRef("privacy.network")}}, um Einsicht darüber zu geben, ob der Nutzer die Global Privacy Control im Browser aktiviert hat. ([Firefox-Bug 1670058](https://bugzil.la/1670058)).

- Die `"webRequestFilterResponse.serviceWorkerScript"` [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) wurde hinzugefügt. Diese Berechtigung bietet Zugriff auf {{WebExtAPIRef("webRequest.filterResponseData")}} für Anforderungen, die von Service-Worker-Skripten ausgehen. Diese Berechtigung kann als optionale Berechtigung bereitgestellt werden. Weitere Informationen zur Nutzung dieser Berechtigungen finden Sie unter {{WebExtAPIRef("webRequest.filterResponseData")}} ([Firefox-Bug 1636629](https://bugzil.la/1636629)).
