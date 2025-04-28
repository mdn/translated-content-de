---
title: Neues Fenster
slug: Web/WebDriver/Reference/Commands/NewWindow
l10n:
  sourceCommit: c6cab7f1aa7dc9f3495486a5b46020db320101cf
---

Der _New Window_ [Befehl](/de/docs/Web/WebDriver/Reference/Commands) der [WebDriver](/de/docs/Web/WebDriver) API öffnet einen neuen, obersten Browsing-Kontext vom Typ _window_ oder _tab_ und gibt ein Wörterbuch zurück, das den _handle_ des neuen [WebWindow](/de/docs/Web/WebDriver/Reference/WebWindow) und seinen erstellten _Typ_ enthält. Wenn der angeforderte _Typ_ vom Browser nicht erstellt werden kann, wird versucht, einen alternativen Typ zu erstellen.

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
  - : Angeforderter Typ des obersten Browsing-Kontexts.

### Antwort

Die Antwortnutzlast ist ein Objekt:

- handle
  - : Der Handle des neuen [WebWindow](/de/docs/Web/WebDriver/Reference/WebWindow).
- type
  - : Der erstellte Typ des obersten Browsing-Kontexts.

### Fehler

- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.
- [Kein solches Fenster](/de/docs/Web/WebDriver/Reference/Errors/NoSuchWindow)
  - : Wenn das [`window`](/de/docs/Web/API/Window) geschlossen wurde.
- [Unerwartetes geöffnetes Dialogfenster](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen)
  - : Eine Benutzeraufforderung, wie z.B. [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis sie behandelt wird.
- [Nicht unterstützte Operation](/de/docs/Web/WebDriver/Reference/Errors/UnsupportedOperation)
  - : Der Treiber oder Browser unterstützt den Befehl aus irgendeinem Grund nicht (z. B. wenn es nicht möglich ist, einen neuen Tab oder ein neues Fenster zu erstellen).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenster schließen](/de/docs/Web/WebDriver/Reference/Commands/CloseWindow) Befehl
