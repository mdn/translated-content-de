---
title: commands
slug: Mozilla/Add-ons/WebExtensions/API/commands
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Hört auf die Ausführung von Befehlen durch den Benutzer, die über den [`commands` manifest.json key](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) registriert wurden.

Bietet auch Funktionen zum Aktualisieren der Shortcut-Schlüssel-Einstellungen. Siehe [Aktualisierung von Shortcuts](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#updating_shortcuts) im [`commands` manifest.json key](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) Leitfaden für weitere Informationen.

## Typen

- {{WebExtAPIRef("commands.Command")}}
  - : Objekt, das die Einstellungen eines Befehls enthält.

## Funktionen

- {{WebExtAPIRef("commands.getAll")}}
  - : Ruft alle registrierten Befehle der Erweiterung ab.
- {{WebExtAPIRef("commands.openShortcutSettings")}}
  - : Öffnet die Seite „Verwalten von Erweiterungsshortcuts“ und hebt die Shortcut-Optionen der Erweiterung hervor, sofern welche vorhanden sind.
- {{WebExtAPIRef("commands.reset")}}
  - : Setzt die Beschreibung und den Shortcut eines Befehls auf die im Manifest-Schlüssel angegebenen Werte zurück.
- {{WebExtAPIRef("commands.update")}}
  - : Ändert die Beschreibung oder den Shortcut für einen Befehl.

## Ereignisse

- {{WebExtAPIRef("commands.onChanged")}}
  - : Wird ausgelöst, wenn der Tastatur-Shortcut für einen Befehl geändert wird.
- {{WebExtAPIRef("commands.onCommand")}}
  - : Wird ausgelöst, wenn ein Befehl mit seinem zugeordneten Tastatur-Shortcut ausgeführt wird.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.commands`](https://developer.chrome.com/docs/extensions/reference/api/commands) API.
