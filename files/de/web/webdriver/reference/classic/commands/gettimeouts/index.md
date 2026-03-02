---
title: Abrufen von Timeouts
slug: Web/WebDriver/Reference/Classic/Commands/GetTimeouts
l10n:
  sourceCommit: 676631fd27c8096c3ae3ceb2a6b4ffd6f687055f
---

Der _Abrufen von Timeouts_ [Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands) der [WebDriver](/de/docs/Web/WebDriver) API gibt die mit der aktuellen Sitzung verbundenen Timeouts zurück. Die [Session-Timeout](/de/docs/Web/WebDriver/Reference/Classic/Timeouts)-Dauern steuern Verhaltensweisen wie Timeouts bei [Skriptinjektion](/de/docs/Web/WebDriver/Reference/Classic/Timeouts#script), [Dokumentnavigation](/de/docs/Web/WebDriver/Reference/Classic/Timeouts#pageload) und [Elementabfrage](/de/docs/Web/WebDriver/Reference/Classic/Timeouts#implicit).

## Syntax

| Methode                                          | URI-Vorlage                      |
| ------------------------------------------------ | -------------------------------- |
| [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) | `/session/{session id}/timeouts` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.

### Antwort

Die Antwortnutzlast ist ein [`Timeouts`](/de/docs/Web/WebDriver/Reference/Classic/Timeouts)-Objekt:

- `implicit`
  - : Zeit in Millisekunden, um die [Element-Lokalisierungsstrategie](/de/docs/Web/WebDriver/Reference/WebElement) beim Auffinden eines Elements zu wiederholen. Standardmäßig ist dies 0, was bedeutet, dass die Strategie nur einmal ausgeführt wird.
- `pageLoad`
  - : Zeit in Millisekunden, die darauf gewartet wird, dass das Dokument das Laden abschließt. Standardmäßig wartet WebDriver fünf Minuten (oder 300.000 ms).
- `script`
  - : Skripte, die mit [Execute Script](/de/docs/Web/WebDriver/Reference/Commands/ExecuteScript) oder [Execute Async Script](/de/docs/Web/WebDriver/Reference/Commands/ExecuteAsyncScript) injiziert werden, laufen bis sie die Skript-Timeout-Dauer erreichen, die ebenfalls in Millisekunden angegeben wird. Die Skripte werden dann unterbrochen und ein [Skript-Timeout-Fehler](/de/docs/Web/WebDriver/Reference/Errors/ScriptTimeoutError) wird zurückgegeben. Standardmäßig ist dies 30 Sekunden (oder 30.000 ms).

### Fehler

- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Timeouts`](/de/docs/Web/WebDriver/Reference/Classic/Timeouts)-Objekt
- [Set Timeouts](/de/docs/Web/WebDriver/Reference/Classic/Commands/SetTimeouts)-Befehl
- [Liste der WebDriver-Befehle](/de/docs/Web/WebDriver/Reference/Classic/Commands)
