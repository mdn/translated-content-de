---
title: Neues Fenster
slug: Web/WebDriver/Reference/Classic/Commands/NewWindow
l10n:
  sourceCommit: 421a9c26127cf11e33e72184b14656c9d406294d
---

Der _Neues Fenster_ [Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands) der [WebDriver](/de/docs/Web/WebDriver) API öffnet einen neuen, eigenständigen Browsingkontext vom Typ _window_ oder _tab_ und gibt ein Wörterbuch zurück, das den _Handle_ des neuen [WebWindow](/de/docs/Web/WebDriver/Reference/WebWindow) und dessen erstellten _Typ_ enthält. Wenn der angeforderte _Typ_ nicht vom Browser erstellt werden kann, wird versucht, den alternativen Typ zu erstellen.

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
  - : Angeforderter Typ des eigenständigen Browsingkontextes.

### Antwort

Die Antwortnutzlast ist ein Objekt:

- handle
  - : Der Handle des neuen [WebWindow](/de/docs/Web/WebDriver/Reference/WebWindow).
- type
  - : Der erstellte Typ des eigenständigen Browsingkontextes.

### Fehler

- [`invalid session id`](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Die Sitzung existiert nicht.
- [`no such window`](/de/docs/Web/WebDriver/Reference/Errors/NoSuchWindow)
  - : Wenn das [`window`](/de/docs/Web/API/Window) geschlossen wurde.
- [`unexpected alert open`](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen)
  - : Eine Benutzeraufforderung, wie z. B. [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis sie behandelt wird.
- [`unsupported operation`](/de/docs/Web/WebDriver/Reference/Errors/UnsupportedOperation)
  - : Der Treiber oder Browser unterstützt den Befehl aus irgendeinem Grund nicht (z. B. wenn es nicht möglich ist, einen neuen Tab oder ein neues Fenster zu erstellen).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenster schließen](/de/docs/Web/WebDriver/Reference/Classic/Commands/CloseWindow) Befehl
