---
title: Firefox 95 für Entwickler
slug: Mozilla/Firefox/Releases/95
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 95, die Entwickler betreffen.
Firefox 95 wurde am 7. Dezember 2021 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das globale Attribut [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode) wird nun auf allen Plattformen unterstützt, nicht nur auf Android.
  Dies gibt den Browsern einen Hinweis darauf, welcher virtuelle Tastaturtyp am besten für die Bearbeitung eines bestimmten Elements geeignet wäre ([Firefox-Bug 1205133](https://bugzil.la/1205133)).

### CSS

- Die CSS-Eigenschaft [`cursor`](/de/docs/Web/CSS/cursor) wird jetzt in Firefox für Android unterstützt,
  was es Android-Nutzern erleichtert, mit einer Maus zu erkennen, welche Elemente anklickbar sind ([Firefox-Bug 1672609](https://bugzil.la/1672609)).

### JavaScript

Keine bemerkenswerten Änderungen

### APIs

- Die Funktion {{domxref("Crypto.randomUUID()")}} wird jetzt unterstützt. Diese liefert eine kryptographisch starke, 36 Zeichen lange UUID mit fester Länge zurück ([Firefox-Bug 1723674](https://bugzil.la/1723674)).

#### Medien, WebRTC und Web Audio

- {{domxref("SpeechSynthesisEvent.elapsedTime")}} gibt jetzt die vergangene Zeit in Sekunden anstelle von Millisekunden zurück, was einer Aktualisierung der Spezifikation entspricht (siehe [Firefox-Bug 1732498](https://bugzil.la/1732498)).

### WebDriver-Konformität (Marionette)

- Der von Marionette verwendete `port` wird jetzt in die Datei `MarionetteActivePort` im Profilverzeichnis geschrieben. Dadurch kann der `port` leicht abgerufen werden, was zuvor nur durch das Parsen der `prefs.js`-Datei des Profils möglich war. ([Firefox-Bug 1735162](https://bugzil.la/1735162)).
- `WebDriver:NewSession` wartet jetzt darauf, dass der erste Tab vollständig geladen ist, um unerwartete Unloads des Fenster-Proxys zu verhindern. ([Firefox-Bug 1736323](https://bugzil.la/1736323)).

## Änderungen für Add-on-Entwickler

- `overrideContentColorScheme` wurde in {{WebExtAPIRef("browserSettings")}} hinzugefügt, um die Möglichkeit zu bieten, die Einstellung `layout.css.prefers-color-scheme.content-override` zu steuern und das bevorzugte Farbschema (hell oder dunkel) von Seiten unabhängig vom Browser-Thema festzulegen ([Firefox-Bug 1733461](https://bugzil.la/1733461)).

- `globalPrivacyControl` wurde in {{WebExtAPIRef("privacy.network")}} hinzugefügt, um Sichtbarkeit darüber zu bieten, ob der Benutzer die globale Datenschutzkontrolle im Browser aktiviert hat. ([Firefox-Bug 1670058](https://bugzil.la/1670058)).

- Die Erlaubnis `"webRequestFilterResponse.serviceWorkerScript"` wurde hinzugefügt [API-Erlaubnis](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions). Diese Berechtigung gewährt Zugriff auf {{WebExtAPIRef("webRequest.filterResponseData")}} für Anfragen, die für Service-Worker-Skripte stammen. Diese Erlaubnis kann als optionale Erlaubnis bereitgestellt werden. Siehe {{WebExtAPIRef("webRequest.filterResponseData")}} für weitere Informationen zur Nutzung dieser Berechtigungen ([Firefox-Bug 1636629](https://bugzil.la/1636629)).

## Ältere Versionen

{{Firefox_for_developers}}
