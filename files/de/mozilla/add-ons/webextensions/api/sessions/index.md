---
title: Sitzungen
slug: Mozilla/Add-ons/WebExtensions/API/sessions
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Verwenden Sie die Sitzungen-API, um Tabs und Fenster aufzulisten und wiederherzustellen, die geschlossen wurden, während der Browser ausgeführt wurde.

Die Funktion {{WebExtAPIRef("sessions.getRecentlyClosed()")}} gibt ein Array von {{WebExtAPIRef("tabs.Tab")}}- und {{WebExtAPIRef("windows.Window")}}-Objekten zurück, die Tabs und Fenster repräsentieren, die seit dem Start des Browsers geschlossen wurden, bis zur maximal in {{WebExtAPIRef("sessions.MAX_SESSION_RESULTS")}} definierten Anzahl.

Sie können dann ein Fenster oder einen Tab mit der Funktion {{WebExtAPIRef("sessions.restore()")}} wiederherstellen. Beim Wiederherstellen wird nicht nur der Tab erneut geöffnet, sondern auch die Navigationserläufe des Tabs wiederhergestellt, sodass die Zurück-/Vorwärts-Schaltflächen funktionieren.

Diese API bietet auch eine Gruppe von Funktionen, die es einer Erweiterung ermöglicht, zusätzlichen Status mit einem Tab oder einem Fenster zu speichern. Wenn der Tab oder das Fenster geschlossen und anschließend wiederhergestellt wird, kann die Erweiterung den Status abrufen. Beispielsweise könnte eine Tab-Gruppierungserweiterung dies verwenden, um sich zu merken, in welcher Gruppe sich ein Tab befindet, um ihn in der richtigen Gruppe wiederherzustellen, falls der Benutzer den Tab wiederherstellt.

Um die Sitzungen-API verwenden zu können, müssen Sie die "sessions" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) haben.

## Typen

- {{WebExtAPIRef("sessions.Filter")}}
  - : Ermöglicht es Ihnen, die Anzahl der von einem Aufruf an {{WebExtAPIRef("sessions.getRecentlyClosed()")}} zurückgegebenen {{WebExtAPIRef("sessions.Session", "Session")}}-Objekte einzuschränken.
- {{WebExtAPIRef("sessions.Session")}}
  - : Repräsentiert einen Tab oder ein Fenster, das der Benutzer in der aktuellen Browsing-Sitzung geschlossen hat.

## Eigenschaften

- {{WebExtAPIRef("sessions.MAX_SESSION_RESULTS")}}
  - : Die maximale Anzahl von Sitzungen, die durch einen Aufruf von [`sessions.getRecentlyClosed()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sessions/getRecentlyClosed) zurückgegeben werden.

## Funktionen

- {{WebExtAPIRef("sessions.forgetClosedTab()")}}
  - : Entfernt einen geschlossenen Tab aus der Liste der kürzlich geschlossenen Tabs des Browsers.
- {{WebExtAPIRef("sessions.forgetClosedWindow()")}}
  - : Entfernt ein geschlossenes Fenster aus der Liste der kürzlich geschlossenen Fenster des Browsers.
- {{WebExtAPIRef("sessions.getRecentlyClosed()")}}
  - : Gibt ein Array von {{WebExtAPIRef("sessions.Session", "Session")}}-Objekten zurück, die Fenster und Tabs repräsentieren, die in der aktuellen Browsing-Sitzung geschlossen wurden (d.h. seit dem Start des Browsers).
- {{WebExtAPIRef("sessions.restore()")}}
  - : Stellt einen geschlossenen Tab oder Fenster wieder her.
- {{WebExtAPIRef("sessions.setTabValue()")}}
  - : Speichert ein Schlüssel/Wert-Paar, das mit einem bestimmten Tab verbunden ist.
- {{WebExtAPIRef("sessions.getTabValue()")}}
  - : Ruft einen zuvor gespeicherten Wert für einen bestimmten Tab anhand seines Schlüssels ab.
- {{WebExtAPIRef("sessions.removeTabValue()")}}
  - : Entfernt ein Schlüssel/Wert-Paar aus einem bestimmten Tab.
- {{WebExtAPIRef("sessions.setWindowValue()")}}
  - : Speichert ein Schlüssel/Wert-Paar, das mit einem bestimmten Fenster verbunden ist.
- {{WebExtAPIRef("sessions.getWindowValue()")}}
  - : Ruft einen zuvor gespeicherten Wert für ein bestimmtes Fenster anhand seines Schlüssels ab.
- {{WebExtAPIRef("sessions.removeWindowValue()")}}
  - : Entfernt ein Schlüssel/Wert-Paar aus einem bestimmten Fenster.

## Ereignisse

- {{WebExtAPIRef("sessions.onChanged")}}
  - : Wird ausgelöst, wenn ein Tab oder Fenster geschlossen wird.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der API [`chrome.sessions`](https://developer.chrome.com/docs/extensions/reference/api/sessions) von Chromium.
