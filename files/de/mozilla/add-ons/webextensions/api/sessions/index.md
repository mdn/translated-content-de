---
title: Sitzungen
slug: Mozilla/Add-ons/WebExtensions/API/sessions
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Verwenden Sie die Sessions-API, um Tabs und Fenster aufzulisten und wiederherzustellen, die während der Ausführung des Browsers geschlossen wurden.

Die Funktion {{WebExtAPIRef("sessions.getRecentlyClosed()")}} gibt ein Array von {{WebExtAPIRef("tabs.Tab")}}- und {{WebExtAPIRef("windows.Window")}}-Objekten zurück, die Tabs und Fenster darstellen, die seit dem Start des Browsers geschlossen wurden, bis zu dem in {{WebExtAPIRef("sessions.MAX_SESSION_RESULTS")}} definierten Maximum.

Sie können dann ein Fenster oder einen Tab mit der Funktion {{WebExtAPIRef("sessions.restore()")}} wiederherstellen. Die Wiederherstellung öffnet den Tab nicht nur erneut: Sie stellt auch die Navigationselemente wie die Vorwärts-/Rückwärtstasten des Tabs wieder her.

Diese API bietet auch eine Gruppe von Funktionen, die es einer Erweiterung ermöglichen, zusätzliche Zustände im Zusammenhang mit einem Tab oder Fenster zu speichern. Wenn der Tab oder das Fenster geschlossen und später wiederhergestellt wird, kann die Erweiterung den Zustand abrufen. Ein Beispiel wäre eine Tab-Gruppierungs-Erweiterung, die sich merkt, in welcher Gruppe sich ein Tab befindet, um es beim Wiederherstellen in der richtigen Gruppe zu platzieren.

Um die Sessions-API zu verwenden, müssen Sie die "sessions" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) haben.

## Typen

- {{WebExtAPIRef("sessions.Filter")}}
  - : Ermöglicht es Ihnen, die Anzahl der von einem Aufruf von {{WebExtAPIRef("sessions.getRecentlyClosed()")}} zurückgegebenen {{WebExtAPIRef("sessions.Session", "Session")}}-Objekte einzuschränken.
- {{WebExtAPIRef("sessions.Session")}}
  - : Stellt einen Tab oder ein Fenster dar, das der Benutzer in der aktuellen Browsing-Sitzung geschlossen hat.

## Eigenschaften

- {{WebExtAPIRef("sessions.MAX_SESSION_RESULTS")}}
  - : Die maximale Anzahl von Sitzungen, die von einem Aufruf von [`sessions.getRecentlyClosed()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sessions/getRecentlyClosed) zurückgegeben werden.

## Funktionen

- {{WebExtAPIRef("sessions.forgetClosedTab()")}}
  - : Entfernt einen geschlossenen Tab aus der Liste der kürzlich geschlossenen Tabs des Browsers.
- {{WebExtAPIRef("sessions.forgetClosedWindow()")}}
  - : Entfernt ein geschlossenes Fenster aus der Liste der kürzlich geschlossenen Fenster des Browsers.
- {{WebExtAPIRef("sessions.getRecentlyClosed()")}}
  - : Gibt ein Array von {{WebExtAPIRef("sessions.Session", "Session")}}-Objekten zurück, die Fenster und Tabs darstellen, die in der aktuellen Browsing-Sitzung (also seit dem Start des Browsers) geschlossen wurden.
- {{WebExtAPIRef("sessions.restore()")}}
  - : Stellt einen geschlossenen Tab oder ein Fenster wieder her.
- {{WebExtAPIRef("sessions.setTabValue()")}}
  - : Speichern Sie ein Schlüssel/Wert-Paar, das mit einem bestimmten Tab verbunden ist.
- {{WebExtAPIRef("sessions.getTabValue()")}}
  - : Rufen Sie einen zuvor gespeicherten Wert für einen bestimmten Tab ab, unter Angabe seines Schlüssels.
- {{WebExtAPIRef("sessions.removeTabValue()")}}
  - : Entfernen Sie ein Schlüssel/Wert-Paar von einem bestimmten Tab.
- {{WebExtAPIRef("sessions.setWindowValue()")}}
  - : Speichern Sie ein Schlüssel/Wert-Paar, das mit einem bestimmten Fenster verbunden ist.
- {{WebExtAPIRef("sessions.getWindowValue()")}}
  - : Rufen Sie einen zuvor gespeicherten Wert für ein bestimmtes Fenster ab, unter Angabe seines Schlüssels.
- {{WebExtAPIRef("sessions.removeWindowValue()")}}
  - : Entfernen Sie ein Schlüssel/Wert-Paar von einem bestimmten Fenster.

## Ereignisse

- {{WebExtAPIRef("sessions.onChanged")}}
  - : Wird ausgelöst, wenn ein Tab oder Fenster geschlossen wird.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.sessions`](https://developer.chrome.com/docs/extensions/reference/api/sessions) API.
