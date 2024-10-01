---
title: New Window
slug: Web/WebDriver/Commands/NewWindow
l10n:
  sourceCommit: d2b78565fb33a7ebfa7314be61f6a887d2d90ace
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Commands")}}

Der _New Window_ [Befehl](/de/docs/Web/WebDriver/Commands) der [WebDriver](/de/docs/Web/WebDriver) API öffnet einen neuen Top-Level-Browsing-Kontext vom Typ _window_ oder _tab_ und gibt ein Wörterbuch zurück, das den _handle_ des neuen [WebWindow](/de/docs/Web/WebDriver/WebWindow) und seinen erstellten _type_ enthält. Wenn der angeforderte _type_ vom Browser nicht erstellt werden kann, wird versucht, den alternativen Typ zu erstellen.

## Syntax

| Methode                                    | URI-Vorlage                        |
| ------------------------------------------ | ---------------------------------- |
| [`POST`](/de/docs/Web/HTTP/Methods/DELETE) | `/session/{session id}/window/new` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.

### Nutzlast

Die Eingabe ist ein Objekt:

- `type`
  - : Angeforderter Typ des Top-Level-Browsing-Kontextes.

### Antwort

Die Antwortnutzlast ist ein Objekt:

- handle
  - : Der Handle des neuen [WebWindow](/de/docs/Web/WebDriver/WebWindow).
- type
  - : Der erstellte Typ des Top-Level-Browsing-Kontextes.

### Fehler

- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Errors/InvalidSessionID)
  - : Die Sitzung existiert nicht.
- [Kein solches Fenster](/de/docs/Web/WebDriver/Errors/NoSuchWindow)
  - : Wenn das [`window`](/de/docs/Web/API/Window) geschlossen wurde.
- [Unerwartetes offenes Alert](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)
  - : Eine Benutzeraufforderung, wie z.B. [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis sie behandelt wird.
- [Nicht unterstützte Operation](/de/docs/Web/WebDriver/Errors/UnsupportedOperation)
  - : Der Treiber oder Browser unterstützt den Befehl aus irgendeinem Grund nicht (z.B. wenn es nicht möglich ist, einen neuen Tab oder ein Fenster zu erstellen).

## Beispiel

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Close Window](/de/docs/Web/WebDriver/Commands/CloseWindow) Befehl
