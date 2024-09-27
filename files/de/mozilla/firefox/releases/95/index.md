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

- Das globale Attribut [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode) wird jetzt auf allen Plattformen unterstützt, nicht nur auf Android.
  Dies gibt den Browsern einen Hinweis, welcher Typ der virtuellen Tastatur am besten zum Bearbeiten eines bestimmten Elements geeignet wäre ([Firefox-Bug 1205133](https://bugzil.la/1205133)).

### CSS

- Die CSS-Eigenschaft [`cursor`](/de/docs/Web/CSS/cursor) wird jetzt in Firefox für Android unterstützt,
  was es Android-Nutzern mit einer Maus erleichtert, festzustellen, welche Elemente anklickbar sind ([Firefox-Bug 1672609](https://bugzil.la/1672609)).

### JavaScript

Keine bemerkenswerten Änderungen

### APIs

- Die Funktion [`Crypto.randomUUID()`](/de/docs/Web/API/Crypto/randomUUID) wird jetzt unterstützt. Diese gibt eine kryptografisch starke, 36 Zeichen lange, festgelegte UUID zurück ([Firefox-Bug 1723674](https://bugzil.la/1723674)).

#### Medien, WebRTC und Web Audio

- [`SpeechSynthesisEvent.elapsedTime`](/de/docs/Web/API/SpeechSynthesisEvent/elapsedTime) gibt jetzt die verstrichene Zeit in Sekunden statt in Millisekunden zurück und passt sich damit einer Aktualisierung der Spezifikation an (siehe [Firefox-Bug 1732498](https://bugzil.la/1732498)).

### WebDriver-Konformität (Marionette)

- Der `port`, den Marionette verwendet, wird jetzt in die `MarionetteActivePort`-Datei im Profilverzeichnis geschrieben. Dies kann verwendet werden, um den `port` einfacher abzurufen, was vorher nur durch das Parsen der `prefs.js`-Datei des Profils möglich war. ([Firefox-Bug 1735162](https://bugzil.la/1735162)).
- `WebDriver:NewSession` wartet jetzt darauf, dass das erste Tab das Laden abgeschlossen hat, um unerwartete Entladungen des Fenster-Proxys zu verhindern. ([Firefox-Bug 1736323](https://bugzil.la/1736323)).

## Änderungen für Add-on-Entwickler

- `overrideContentColorScheme` wurde in {{WebExtAPIRef("browserSettings")}} hinzugefügt, um die Möglichkeit zu bieten, die Präferenz `layout.css.prefers-color-scheme.content-override` zu steuern und das bevorzugte Farbschema von Seiten (hell oder dunkel) unabhängig vom Browser-Thema festzulegen ([Firefox-Bug 1733461](https://bugzil.la/1733461)).

- `globalPrivacyControl` wurde in {{WebExtAPIRef("privacy.network")}} hinzugefügt, um anzuzeigen, ob der Nutzer die Global Privacy Control im Browser aktiviert hat ([Firefox-Bug 1670058](https://bugzil.la/1670058)).

- Die `"webRequestFilterResponse.serviceWorkerScript"` [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) wurde hinzugefügt. Diese Berechtigung bietet Zugriff auf {{WebExtAPIRef("webRequest.filterResponseData")}} für Anfragen, die für Service-Worker-Skripte stammen. Diese Berechtigung kann als optionale Berechtigung angegeben werden. Siehe {{WebExtAPIRef("webRequest.filterResponseData")}} für weitere Informationen über die Verwendung dieser Berechtigungen ([Firefox-Bug 1636629](https://bugzil.la/1636629)).

## Ältere Versionen

{{Firefox_for_developers}}
