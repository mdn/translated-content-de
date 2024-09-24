---
title: Neues Fenster
slug: Web/WebDriver/Commands/NewWindow
l10n:
  sourceCommit: d2b78565fb33a7ebfa7314be61f6a887d2d90ace
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Commands")}}

Der _Neues Fenster_ [Befehl](/de/docs/Web/WebDriver/Commands) der [WebDriver](/de/docs/Web/WebDriver) API öffnet einen neuen obersten Browsing-Kontext des Typs _window_ oder _tab_ und gibt ein Wörterbuch zurück, das das _handle_ des neuen [WebWindow](/de/docs/Web/WebDriver/WebWindow) und seinen erstellten _Type_ enthält. Wenn der angeforderte _Type_ vom Browser nicht erstellt werden kann, wird versucht, einen alternativen Typ zu erstellen.

## Syntax

| Methode                                      | URI-Vorlage                        |
| --------------------------------------------- | ---------------------------------- |
| [`POST`](/de/docs/Web/HTTP/Methods/DELETE) | `/session/{session id}/window/new` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.

### Nutzlast

Die Eingabe ist ein Objekt:

- `type`
  - : Angeforderter Typ des obersten Browsing-Kontexts.

### Antwort

Die Antwortnutzlast ist ein Objekt:

- handle
  - : Das Handle des neuen [WebWindow](/de/docs/Web/WebDriver/WebWindow).
- type
  - : Der erstellte Typ des obersten Browsing-Kontexts.

### Fehler

- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.
- [Kein solches Fenster](/de/docs/Web/WebDriver/Errors/NoSuchWindow)
  - : Wenn das [`window`](/de/docs/Web/API/Window) geschlossen wurde.
- [Unerwarteter geöffneter Alarm](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)
  - : Ein Benutzerprompt, wie z.B. [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis er behandelt wird.
- [Nicht unterstützte Operation](/de/docs/Web/WebDriver/Errors/UnsupportedOperation)
  - : Der Treiber oder Browser unterstützt den Befehl aus irgendeinem Grund nicht (z.B. wenn es nicht möglich ist, einen neuen Tab oder ein neues Fenster zu erstellen).

## Beispiel

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Fenster schließen](/de/docs/Web/WebDriver/Commands/CloseWindow) Befehl
