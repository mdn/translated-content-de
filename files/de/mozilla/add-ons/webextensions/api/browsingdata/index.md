---
title: browsingData
slug: Mozilla/Add-ons/WebExtensions/API/browsingData
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ermöglicht Erweiterungen, die während des Surfens des Benutzers angesammelten Daten zu löschen.

In der `browsingData` API ist die Browser-Daten in Typen unterteilt:

- Browser-Cache
- Cookies
- Downloads
- Verlauf
- lokaler Speicher
- Plugin-Daten
- gespeicherte Formulardaten
- gespeicherte Passwörter

Sie können die Funktion {{WebExtAPIRef("browsingData.remove()")}} verwenden, um eine beliebige Kombination dieser Typen zu entfernen. Es gibt auch spezielle Funktionen zum Entfernen jedes bestimmten Datentyps, wie {{WebExtAPIRef("browsingData.removePasswords()", "removePasswords()")}}, {{WebExtAPIRef("browsingData.removeHistory()", "removeHistory()")}} und so weiter.

Alle `browsingData.remove[X]()` Funktionen nehmen ein {{WebExtAPIRef("browsingData.RemovalOptions")}} Objekt entgegen, das Sie verwenden können, um zwei weitere Aspekte der Datenlöschung zu steuern:

- wie weit die Daten in der Vergangenheit entfernt werden sollen
- ob die Daten nur von normalen Webseiten oder auch von gehosteten Web-Apps und Add-ons entfernt werden sollen. Beachten Sie, dass diese Option in Firefox noch nicht unterstützt wird.

Schließlich bietet Ihnen diese API eine {{WebExtAPIRef("browsingData.settings()")}} Funktion, die Ihnen den aktuellen Wert der Einstellungen für die integrierte Funktion "Verlauf löschen" des Browsers gibt.

Um diese API zu verwenden, müssen Sie die "browsingData" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) haben.

## Typen

- {{WebExtAPIRef("browsingData.DataTypeSet")}}
  - : Objekt, das zum Festlegen des zu entfernenden Datentyps verwendet wird: zum Beispiel Verlauf, Downloads, Passwörter und so weiter.
- {{WebExtAPIRef("browsingData.RemovalOptions")}}
  - : Objekt, das dazu verwendet wird, festzulegen, wie weit die Daten in der Vergangenheit entfernt werden sollen und ob Daten, die durch normales Webbrowsing, durch gehostete Apps oder durch Add-ons hinzugefügt wurden, entfernt werden sollen.

## Methoden

- {{WebExtAPIRef("browsingData.remove()")}}
  - : Entfernt Browserdaten für die angegebenen Datentypen.
- {{WebExtAPIRef("browsingData.removeCache()")}}
  - : Löscht den Cache des Browsers.
- {{WebExtAPIRef("browsingData.removeCookies()")}}
  - : Entfernt Cookies.
- {{WebExtAPIRef("browsingData.removeDownloads()")}}
  - : Entfernt die Liste der heruntergeladenen Dateien.
- {{WebExtAPIRef("browsingData.removeFormData()")}}
  - : Löscht gespeicherte Formulardaten.
- {{WebExtAPIRef("browsingData.removeHistory()")}}
  - : Löscht den Verlauf des Browsers.
- {{WebExtAPIRef("browsingData.removeLocalStorage()")}}
  - : Löscht jeglichen [lokalen Speicher](/de/docs/Web/API/Window/localStorage), der von Websites erstellt wurde.
- {{WebExtAPIRef("browsingData.removePasswords()")}}
  - : Löscht gespeicherte Passwörter.
- {{WebExtAPIRef("browsingData.removePluginData()")}}
  - : Löscht Daten, die mit Plugins verbunden sind.
- {{WebExtAPIRef("browsingData.settings()")}}
  - : Ruft den aktuellen Wert der Einstellungen in der Funktion "Verlauf löschen" des Browsers ab.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf der [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData) API von Chromium.
