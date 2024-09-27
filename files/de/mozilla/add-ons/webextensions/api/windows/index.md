---
title: windows
slug: Mozilla/Add-ons/WebExtensions/API/windows
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Interagieren Sie mit Browserfenstern. Sie können diese API verwenden, um Informationen über offene Fenster zu erhalten sowie Fenster zu öffnen, zu ändern und zu schließen. Sie können auch Ereignisse zum Öffnen, Schließen und Aktivieren von Fenstern abhören.

## Typen

- {{WebExtAPIRef("windows.WindowType")}}
  - : Der Typ dieses Browserfensters.
- {{WebExtAPIRef("windows.WindowState")}}
  - : Der Zustand dieses Browserfensters.
- {{WebExtAPIRef("windows.Window")}}
  - : Enthält Informationen über ein Browserfenster.
- {{WebExtAPIRef("windows.CreateType")}}
  - : Gibt den Typ des zu erstellenden Browserfensters an.

## Konstanten

- {{WebExtAPIRef("windows.WINDOW_ID_NONE")}}
  - : Der `windowId`-Wert, der das Fehlen eines Browserfensters darstellt.
- {{WebExtAPIRef("windows.WINDOW_ID_CURRENT")}}
  - : Ein Wert, der in einigen APIs anstelle einer `windowId` verwendet werden kann, um das aktuelle Fenster darzustellen.

## Methoden

- {{WebExtAPIRef("windows.get()")}}
  - : Ruft Details zu einem Fenster anhand seiner ID ab.
- {{WebExtAPIRef("windows.getCurrent()")}}
  - : Ruft das aktuelle Fenster ab.
- {{WebExtAPIRef("windows.getLastFocused()")}}
  - : Ruft das Fenster ab, das zuletzt fokussiert war — typischerweise das obenliegende Fenster.
- {{WebExtAPIRef("windows.getAll()")}}
  - : Ruft alle Fenster ab.
- {{WebExtAPIRef("windows.create()")}}
  - : Erstellt ein neues Fenster.
- {{WebExtAPIRef("windows.update()")}}
  - : Aktualisiert die Eigenschaften eines Fensters. Verwenden Sie dies, um ein Fenster zu verschieben, zu verkleinern/vergrößern und (de)fokussieren, etc.
- {{WebExtAPIRef("windows.remove()")}}
  - : Schließt ein Fenster und alle seine Tabs.

## Ereignisse

- {{WebExtAPIRef("windows.onBoundsChanged")}}
  - : Wird ausgelöst, wenn ein Fenster in der Größe verändert oder verschoben wird.
- {{WebExtAPIRef("windows.onCreated")}}
  - : Wird ausgelöst, wenn ein Fenster erstellt wird.
- {{WebExtAPIRef("windows.onRemoved")}}
  - : Wird ausgelöst, wenn ein Fenster geschlossen wird.
- {{WebExtAPIRef("windows.onFocusChanged")}}
  - : Wird ausgelöst, wenn das aktuell fokussierte Fenster sich ändert.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/api/windows) API. Diese Dokumentation stammt aus [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) im Chromium-Code.
