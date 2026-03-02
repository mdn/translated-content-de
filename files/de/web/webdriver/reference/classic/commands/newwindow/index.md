---
title: Neues Fenster
slug: Web/WebDriver/Reference/Classic/Commands/NewWindow
l10n:
  sourceCommit: 676631fd27c8096c3ae3ceb2a6b4ffd6f687055f
---

Der _Neues Fenster_ [Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands) der [WebDriver](/de/docs/Web/WebDriver) API öffnet einen neuen Top-Level-Browsing-Kontext des Typs _window_ oder _tab_ und gibt ein Wörterbuch zurück, das den _handle_ des neuen [WebWindow](/de/docs/Web/WebDriver/Reference/WebWindow) und den erstellten _type_ enthält. Wenn der angeforderte _type_ vom Browser nicht erstellt werden kann, wird versucht, den alternativen Typ zu erstellen.

## Syntax

| Methode                                              | URI-Vorlage                        |
| ---------------------------------------------------- | ---------------------------------- |
| [`POST`](/de/docs/Web/HTTP/Reference/Methods/DELETE) | `/session/{session id}/window/new` |

### URL-Parameter

- `session id`
  - : Kennung der Sitzung.

### Nutzlast

Die Eingabe ist ein Objekt:

- `type`
  - : Angeforderter Typ des Top-Level-Browsing-Kontextes.

### Antwort

Die Antwort-Nutzlast ist ein Objekt:

- handle
  - : Der Handle des neuen [WebWindow](/de/docs/Web/WebDriver/Reference/WebWindow).
- type
  - : Der erstellte Typ des Top-Level-Browsing-Kontextes.

### Fehler

- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.
- [Kein solches Fenster](/de/docs/Web/WebDriver/Reference/Errors/NoSuchWindow)
  - : Wenn das [`window`](/de/docs/Web/API/Window) geschlossen wurde.
- [Unerwartetes Alert geöffnet](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen)
  - : Eine Benutzerabfrage, wie [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis sie behandelt wird.
- [Nicht unterstützte Operation](/de/docs/Web/WebDriver/Reference/Errors/UnsupportedOperation)
  - : Der Treiber oder Browser unterstützt den Befehl aus irgendeinem Grund nicht (z. B. wenn es nicht möglich ist, einen neuen Tab oder ein neues Fenster zu erstellen).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenster schließen](/de/docs/Web/WebDriver/Reference/Classic/Commands/CloseWindow) Befehl
