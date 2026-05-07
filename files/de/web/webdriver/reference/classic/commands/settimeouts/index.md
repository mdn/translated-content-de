---
title: Set Timeouts
slug: Web/WebDriver/Reference/Classic/Commands/SetTimeouts
l10n:
  sourceCommit: 421a9c26127cf11e33e72184b14656c9d406294d
---

Der Befehl _Set Timeouts_ der [WebDriver](/de/docs/Web/WebDriver)-API legt die mit der aktuellen Sitzung verbundenen Zeitlimits fest. Die Dauer der [Sitzungszeitüberschreitung](/de/docs/Web/WebDriver/Reference/Classic/Timeouts) steuert das Verhalten wie Zeitüberschreitungen bei [Skripteinjektionen](/de/docs/Web/WebDriver/Reference/Classic/Timeouts#script), [Dokumentnavigation](/de/docs/Web/WebDriver/Reference/Classic/Timeouts#pageload) und [Elementabrufen](/de/docs/Web/WebDriver/Reference/Classic/Timeouts#implicit).

## Syntax

| Methode                                           | URI-Vorlage                      |
| ------------------------------------------------- | -------------------------------- |
| [`POST`](/de/docs/Web/HTTP/Reference/Methods/GET) | `/session/{session id}/timeouts` |

### URL-Parameter

- `session id`
  - : Kennzeichner der Sitzung.

### Nutzlast

Die Eingabe ist ein [`Timeouts`](/de/docs/Web/WebDriver/Reference/Classic/Timeouts)-Objekt:

- `implicit`
  - : Zeit in Millisekunden, um die [Elementlokalisierungsstrategie](/de/docs/Web/WebDriver/Reference/WebElement) beim Auffinden eines Elements erneut zu versuchen. Standardmäßig 0, was bedeutet, dass die Strategie nur einmal ausgeführt wird.
- `pageLoad`
  - : Zeit in Millisekunden, um darauf zu warten, dass das Dokument das Laden abschließt. Standardmäßig wartet WebDriver fünf Minuten (oder 300.000 ms).
- `script`
  - : Skripte, die mit [Execute Script](/de/docs/Web/WebDriver/Reference/Commands/ExecuteScript) oder [Execute Async Script](/de/docs/Web/WebDriver/Reference/Commands/ExecuteAsyncScript) injiziert werden, laufen, bis sie die Skript-Zeitüberschreitungsdauer erreichen, die ebenfalls in Millisekunden angegeben ist. Die Skripte werden dann unterbrochen und ein [`script timeout error`](/de/docs/Web/WebDriver/Reference/Errors/ScriptTimeoutError) wird zurückgegeben. Standardmäßig 30 Sekunden (oder 30.000 ms).

### Fehler

- [`invalid session id`](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Timeouts`](/de/docs/Web/WebDriver/Reference/Classic/Timeouts)-Objekt
- [Liste der WebDriver-Befehle](/de/docs/Web/WebDriver/Reference/Classic/Commands)
