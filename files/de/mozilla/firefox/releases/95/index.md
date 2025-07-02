---
title: Firefox 95 für Entwickler
slug: Mozilla/Firefox/Releases/95
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel informiert über die Änderungen in Firefox 95, die Entwickler betreffen werden. Firefox 95 wurde am 7. Dezember 2021 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das globale Attribut [`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode) wird jetzt auf allen Plattformen unterstützt, nicht nur auf Android. Dies gibt den Browsern einen Hinweis darauf, welcher Typ der virtuellen Tastatur am besten geeignet wäre, um ein bestimmtes Element zu bearbeiten ([Firefox Fehler 1205133](https://bugzil.la/1205133)).

### CSS

- Die CSS-Eigenschaft [`cursor`](/de/docs/Web/CSS/cursor) wird jetzt auf Firefox für Android unterstützt. Dadurch wird es für Android-Nutzer, die eine Maus verwenden, einfacher festzustellen, welche Elemente anklickbar sind ([Firefox Fehler 1672609](https://bugzil.la/1672609)).

### JavaScript

Keine bemerkenswerten Änderungen

### APIs

- Die Funktion [`Crypto.randomUUID()`](/de/docs/Web/API/Crypto/randomUUID) wird jetzt unterstützt. Diese gibt eine kryptographisch starke, 36 Zeichen lange UUID mit fester Länge zurück ([Firefox Fehler 1723674](https://bugzil.la/1723674)).

#### Medien, WebRTC und Web Audio

- [`SpeechSynthesisEvent.elapsedTime`](/de/docs/Web/API/SpeechSynthesisEvent/elapsedTime) gibt nun die vergangene Zeit in Sekunden statt in Millisekunden zurück, entsprechend einer Aktualisierung der Spezifikation (siehe [Firefox Fehler 1732498](https://bugzil.la/1732498)).

### WebDriver-Konformität (Marionette)

- Der `port`, der von Marionette verwendet wird, wird jetzt in die Datei `MarionetteActivePort` im Profilverzeichnis geschrieben. Dies kann verwendet werden, um den `port` einfach abzurufen, was zuvor nur durch Parsen der Datei `prefs.js` des Profils möglich war ([Firefox Fehler 1735162](https://bugzil.la/1735162)).
- `WebDriver:NewSession` wartet jetzt darauf, dass der initiale Tab das Laden abgeschlossen hat, um unerwartete Unloads des Fensterproxies zu verhindern ([Firefox Fehler 1736323](https://bugzil.la/1736323)).

## Änderungen für Add-on-Entwickler

- Das `overrideContentColorScheme` wurde in {{WebExtAPIRef("browserSettings")}} hinzugefügt, um die Fähigkeit zu bieten, die Präferenz `layout.css.prefers-color-scheme.content-override` zu steuern und das bevorzugte Farbschema von Seiten (hell oder dunkel) unabhängig vom Browser-Theme einzustellen ([Firefox Fehler 1733461](https://bugzil.la/1733461)).

- `globalPrivacyControl` wurde in {{WebExtAPIRef("privacy.network")}} hinzugefügt, um Einblick zu erhalten, ob der Benutzer Global Privacy Control im Browser aktiviert hat ([Firefox Fehler 1670058](https://bugzil.la/1670058)).

- Die Berechtigung `"webRequestFilterResponse.serviceWorkerScript"` [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) wurde hinzugefügt. Diese Berechtigung bietet Zugriff auf {{WebExtAPIRef("webRequest.filterResponseData")}} für Anfragen, die für Service-Worker-Skripte stammen. Diese Berechtigung kann als optionale Berechtigung angegeben werden. Weitere Informationen zur Verwendung dieser Berechtigungen finden Sie unter {{WebExtAPIRef("webRequest.filterResponseData")}} ([Firefox Fehler 1636629](https://bugzil.la/1636629)).

## Ältere Versionen

{{Firefox_for_developers}}
