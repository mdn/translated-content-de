---
title: browsingData
slug: Mozilla/Add-ons/WebExtensions/API/browsingData
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ermöglicht es Erweiterungen, die Daten zu löschen, die während des Surfens des Nutzers gesammelt werden.

Innerhalb der `browsingData` API wird das Surf-Daten in folgende Typen unterteilt:

- Browser-Cache
- Cookies
- Downloads
- Verlauf
- Lokaler Speicher
- Plugin-Daten
- Gespeicherte Formulardaten
- Gespeicherte Passwörter

Sie können die Funktion {{WebExtAPIRef("browsingData.remove()")}} verwenden, um jede Kombination dieser Typen zu entfernen. Es gibt auch spezielle Funktionen zum Entfernen jedes bestimmten Datentyps, wie {{WebExtAPIRef("browsingData.removePasswords()", "removePasswords()")}}, {{WebExtAPIRef("browsingData.removeHistory()", "removeHistory()")}} und so weiter.

Alle `browsingData.remove[X]()` Funktionen akzeptieren ein {{WebExtAPIRef("browsingData.RemovalOptions")}} Objekt, das Sie verwenden können, um zwei weitere Aspekte der Datenentfernung zu steuern:

- wie weit in der Vergangenheit Daten entfernt werden sollen
- ob Daten nur von normalen Webseiten oder auch von gehosteten Web-Apps und Add-ons entfernt werden sollen. Beachten Sie, dass diese Option in Firefox noch nicht unterstützt wird.

Abschließend bietet Ihnen diese API die Funktion {{WebExtAPIRef("browsingData.settings()")}}, die Ihnen den aktuellen Wert der Einstellungen für die eingebaute "Verlauf löschen"-Funktion des Browsers gibt.

Um diese API zu verwenden, müssen Sie die "browsingData" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) haben.

## Typen

- {{WebExtAPIRef("browsingData.DataTypeSet")}}
  - : Objekt zum Spezifizieren des Typs der zu entfernenden Daten: zum Beispiel, Verlauf, Downloads, Passwörter und so weiter.
- {{WebExtAPIRef("browsingData.RemovalOptions")}}
  - : Objekt zum Spezifizieren wie weit in der Vergangenheit Daten entfernt werden sollen und ob Daten entfernt werden sollen, die durch normales Web-Browsing, durch gehostete Apps oder Add-ons hinzugefügt wurden.

## Methoden

- {{WebExtAPIRef("browsingData.remove()")}}
  - : Entfernt die Surf-Daten für die angegebenen Datentypen.
- {{WebExtAPIRef("browsingData.removeCache()")}}
  - : Löscht den Browser-Cache.
- {{WebExtAPIRef("browsingData.removeCookies()")}}
  - : Entfernt Cookies.
- {{WebExtAPIRef("browsingData.removeDownloads()")}}
  - : Entfernt die Liste der heruntergeladenen Dateien.
- {{WebExtAPIRef("browsingData.removeFormData()")}}
  - : Löscht gespeicherte Formulardaten.
- {{WebExtAPIRef("browsingData.removeHistory()")}}
  - : Löscht den Verlauf des Browsers.
- {{WebExtAPIRef("browsingData.removeLocalStorage()")}}
  - : Löscht jeden durch Websites erstellten [lokalen Speicher](/de/docs/Web/API/Window/localStorage).
- {{WebExtAPIRef("browsingData.removePasswords()")}}
  - : Löscht gespeicherte Passwörter.
- {{WebExtAPIRef("browsingData.removePluginData()")}}
  - : Löscht Daten, die mit Plugins verbunden sind.
- {{WebExtAPIRef("browsingData.settings()")}}
  - : Ruft den aktuellen Wert der Einstellungen in der "Verlauf löschen"-Funktion des Browsers ab.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData) API.
