---
title: Neues Fenster
slug: Web/WebDriver/Reference/Classic/Commands/NewWindow
l10n:
  sourceCommit: 225de04b84b717433ffeb3bb0cf5ceddac9653ea
---

Der _Neues Fenster_-[Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands) der [WebDriver](/de/docs/Web/WebDriver) API öffnet einen neuen obersten Browsing-Kontext vom Typ _Fenster_ oder _Tab_ und gibt ein Wörterbuch zurück, das den _Handle_ des neuen [WebWindow](/de/docs/Web/WebDriver/Reference/WebWindow) und den erstellten _Typ_ enthält. Wenn der angeforderte _Typ_ vom Browser nicht erstellt werden kann, wird versucht, den alternativen Typ zu erstellen.

## Syntax

| Methode                                              | URI-Vorlage                        |
| ---------------------------------------------------- | ---------------------------------- |
| [`POST`](/de/docs/Web/HTTP/Reference/Methods/DELETE) | `/session/{session id}/window/new` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.

### Nutzlast

Die Eingabe ist ein Objekt:

- `type`
  - : Angeforderter Typ des obersten Browsing-Kontexts.

### Antwort

Die Antwort-Nutzlast ist ein Objekt:

- handle
  - : Der Handle des neuen [WebWindow](/de/docs/Web/WebDriver/Reference/WebWindow).
- type
  - : Der erstellte Typ des obersten Browsing-Kontexts.

### Fehler

- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Reference/Classic/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.
- [Kein solches Fenster](/de/docs/Web/WebDriver/Reference/Errors/NoSuchWindow)
  - : Wenn das [`window`](/de/docs/Web/API/Window) geschlossen wurde.
- [Unerwarteter Alert offen](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen)
  - : Eine Benutzereingabeaufforderung, wie z.B. [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis sie bearbeitet wird.
- [Nicht unterstützte Operation](/de/docs/Web/WebDriver/Reference/Errors/UnsupportedOperation)
  - : Der Treiber oder Browser unterstützt den Befehl aus irgendeinem Grund nicht (z.B. wenn es nicht möglich ist, einen neuen Tab oder ein neues Fenster zu erstellen).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenster schließen](/de/docs/Web/WebDriver/Reference/Classic/Commands/CloseWindow) Befehl
