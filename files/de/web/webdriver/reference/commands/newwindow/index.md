---
title: Neues Fenster
slug: Web/WebDriver/Reference/Commands/NewWindow
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

Der _Neues Fenster_ [Befehl](/de/docs/Web/WebDriver/Reference/Commands) der [WebDriver](/de/docs/Web/WebDriver) API öffnet einen neuen obersten Browsing-Kontext vom Typ _window_ oder _tab_ und gibt ein Wörterbuch zurück, das den _handle_ des neuen [WebWindow](/de/docs/Web/WebDriver/WebWindow) und seinen erstellten _type_ enthält. Wenn der angeforderte _type_ vom Browser nicht erstellt werden kann, wird versucht, den alternativen Typ zu erstellen.

## Syntax

| Methode                                              | URI-Vorlage                        |
| ---------------------------------------------------- | ---------------------------------- |
| [`POST`](/de/docs/Web/HTTP/Reference/Methods/DELETE) | `/session/{session id}/window/new` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.

### Nutzdaten

Die Eingabe ist ein Objekt:

- `type`
  - : Angeforderter Typ des obersten Browsing-Kontextes.

### Antwort

Die Antwortnutzlast ist ein Objekt:

- handle
  - : Der Handle des neuen [WebWindow](/de/docs/Web/WebDriver/WebWindow).
- type
  - : Der erstellte Typ des obersten Browsing-Kontextes.

### Fehler

- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.
- [Kein solches Fenster](/de/docs/Web/WebDriver/Errors/NoSuchWindow)
  - : Wenn das [`window`](/de/docs/Web/API/Window) geschlossen wurde.
- [Unerwartetes offenes Dialogfeld](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)
  - : Eine Benutzereingabeaufforderung, wie z.B. [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis sie behandelt wird.
- [Nicht unterstützte Operation](/de/docs/Web/WebDriver/Errors/UnsupportedOperation)
  - : Der Treiber oder Browser unterstützt den Befehl aus irgendeinem Grund nicht (z.B. wenn es nicht möglich ist, einen neuen Tab oder ein Fenster zu erstellen).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Befehl [Fenster schließen](/de/docs/Web/WebDriver/Reference/Commands/CloseWindow)
