---
title: browsingData
slug: Mozilla/Add-ons/WebExtensions/API/browsingData
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ermöglicht Erweiterungen, die Daten zu löschen, die beim Browsen des Nutzers angehäuft werden.

Im `browsingData`-API werden die Browserdaten in folgende Typen unterteilt:

- Browser-Cache
- Cookies
- Downloads
- Verlauf
- Lokaler Speicher
- Plugindaten
- Gespeicherte Formulardaten
- Gespeicherte Passwörter

Sie können die Funktion {{WebExtAPIRef("browsingData.remove()")}} verwenden, um eine beliebige Kombination dieser Typen zu entfernen. Es gibt auch spezielle Funktionen, um jeden Datentyp separat zu entfernen, wie {{WebExtAPIRef("browsingData.removePasswords()", "removePasswords()")}}, {{WebExtAPIRef("browsingData.removeHistory()", "removeHistory()")}} und so weiter.

Alle `browsingData.remove[X]()`-Funktionen nehmen ein {{WebExtAPIRef("browsingData.RemovalOptions")}}-Objekt an, mit dem Sie zwei weitere Aspekte der Datenentfernung steuern können:

- Wie weit in die Vergangenheit die Daten entfernt werden sollen
- Ob Daten nur von normalen Webseiten oder auch von gehosteten Web-Apps und Add-ons entfernt werden sollen. Beachten Sie, dass diese Option in Firefox noch nicht unterstützt wird.

Schließlich bietet Ihnen dieses API eine {{WebExtAPIRef("browsingData.settings()")}}-Funktion, die Ihnen den aktuellen Wert der Einstellungen für die integrierte "Verlauf löschen"-Funktion des Browsers anzeigt.

Um dieses API zu verwenden, müssen Sie die "browsingData" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) haben.

## Typen

- {{WebExtAPIRef("browsingData.DataTypeSet")}}
  - : Objekt, das verwendet wird, um den Datentyp zum Entfernen anzugeben: zum Beispiel Verlauf, Downloads, Passwörter und so weiter.
- {{WebExtAPIRef("browsingData.RemovalOptions")}}
  - : Objekt, das verwendet wird, um anzugeben, wie weit in die Vergangenheit die Daten entfernt werden sollen und ob Daten entfernt werden sollen, die durch normales Web-Browsing, gehostete Apps oder Add-ons hinzugefügt wurden.

## Methoden

- {{WebExtAPIRef("browsingData.remove()")}}
  - : Entfernt Browserdaten für die angegebenen Datentypen.
- {{WebExtAPIRef("browsingData.removeCache()")}}
  - : Leert den Cache des Browsers.
- {{WebExtAPIRef("browsingData.removeCookies()")}}
  - : Entfernt Cookies.
- {{WebExtAPIRef("browsingData.removeDownloads()")}}
  - : Entfernt die Liste der heruntergeladenen Dateien.
- {{WebExtAPIRef("browsingData.removeFormData()")}}
  - : Löscht gespeicherte Formulardaten.
- {{WebExtAPIRef("browsingData.removeHistory()")}}
  - : Löscht den Verlauf des Browsers.
- {{WebExtAPIRef("browsingData.removeLocalStorage()")}}
  - : Löscht jeglichen von Websites erstellten [lokalen Speicher](/de/docs/Web/API/Window/localStorage).
- {{WebExtAPIRef("browsingData.removePasswords()")}}
  - : Löscht gespeicherte Passwörter.
- {{WebExtAPIRef("browsingData.removePluginData()")}}
  - : Löscht Daten, die mit Plugins assoziiert sind.
- {{WebExtAPIRef("browsingData.settings()")}}
  - : Ruft den aktuellen Wert der Einstellungen in der "Verlauf löschen"-Funktion des Browsers ab.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Dieses API basiert auf dem [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData)-API von Chromium.
