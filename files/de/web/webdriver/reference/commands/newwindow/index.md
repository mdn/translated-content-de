---
title: Neues Fenster
slug: Web/WebDriver/Reference/Commands/NewWindow
l10n:
  sourceCommit: 57b855a52a2d2e8914a30e3a47567bff0806ae23
---

Der _Neues Fenster_ [Befehl](/de/docs/Web/WebDriver/Reference/Commands) der [WebDriver](/de/docs/Web/WebDriver) API öffnet einen neuen Top-Level-Browsing-Kontext vom Typ _window_ oder _tab_ und gibt ein Wörterbuch zurück, das den _Handle_ des neuen [WebWindow](/de/docs/Web/WebDriver/WebWindow) und seinen erstellten _Typ_ enthält. Kann der angeforderte _Typ_ vom Browser nicht erstellt werden, wird versucht, den alternativen Typ zu erstellen.

## Syntax

| Methode                                    | URI-Vorlage                        |
| ------------------------------------------ | ---------------------------------- |
| [`POST`](/de/docs/Web/HTTP/Methods/DELETE) | `/session/{session id}/window/new` |

### URL-Parameter

- `session id`
  - : Kennung der Sitzung.

### Nutzlast (Payload)

Die Eingabe ist ein Objekt:

- `type`
  - : Angeforderter Typ des Top-Level-Browsing-Kontextes.

### Antwort

Die Antwort-Nutzlast ist ein Objekt:

- handle
  - : Der Handle des neuen [WebWindow](/de/docs/Web/WebDriver/WebWindow).
- type
  - : Der erstellte Typ des Top-Level-Browsing-Kontextes.

### Fehler

- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Die Sitzung existiert nicht.
- [Kein solches Fenster](/de/docs/Web/WebDriver/Errors/NoSuchWindow)
  - : Wenn das [`window`](/de/docs/Web/API/Window) geschlossen wurde.
- [Unerwartetes offenes Alert](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)
  - : Ein Benutzeraufforderung, wie z.B. [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis sie bearbeitet wird.
- [Nicht unterstützte Operation](/de/docs/Web/WebDriver/Errors/UnsupportedOperation)
  - : Der Treiber oder Browser unterstützt den Befehl aus irgendeinem Grund nicht (z. B. wenn es nicht möglich ist, einen neuen Tab oder ein neues Fenster zu erstellen).

## Beispiel

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenster schließen](/de/docs/Web/WebDriver/Reference/Commands/CloseWindow) Befehl
