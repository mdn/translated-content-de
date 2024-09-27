---
title: New Window
slug: Web/WebDriver/Commands/NewWindow
l10n:
  sourceCommit: d2b78565fb33a7ebfa7314be61f6a887d2d90ace
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Commands")}}

Der Befehl _New Window_ der [WebDriver](/de/docs/Web/WebDriver)-API öffnet einen neuen obersten Browsing-Kontext vom Typ _window_ oder _tab_ und gibt ein Wörterbuch zurück, das den _handle_ des neuen [WebWindow](/de/docs/Web/WebDriver/WebWindow) und seinen erstellten _type_ enthält. Wenn der angeforderte _type_ vom Browser nicht erstellt werden kann, wird versucht, den alternativen Typ zu erstellen.

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
  - : Angeforderter Typ des obersten Browsing-Kontexts.

### Antwort

Die Antwort-Nutzlast ist ein Objekt:

- handle
  - : Der Handle des neuen [WebWindow](/de/docs/Web/WebDriver/WebWindow).
- type
  - : Der erstellte Typ des obersten Browsing-Kontexts.

### Fehler

- [Invalid session ID](/de/docs/Web/WebDriver/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.
- [No such window](/de/docs/Web/WebDriver/Errors/NoSuchWindow)
  - : Wenn das [`window`](/de/docs/Web/API/Window) geschlossen wurde.
- [Unexpected alert open](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)
  - : Ein Benutzer-Prompt, wie [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis es behandelt wird.
- [Unsupported Operation](/de/docs/Web/WebDriver/Errors/UnsupportedOperation)
  - : Der Treiber oder Browser unterstützt den Befehl aus irgendeinem Grund nicht (z.B. wenn es nicht möglich ist, ein neues Tab oder Fenster zu erstellen).

## Beispiel

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Befehl [Close Window](/de/docs/Web/WebDriver/Commands/CloseWindow)
