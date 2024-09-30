---
title: Get Timeouts
slug: Web/WebDriver/Commands/GetTimeouts
l10n:
  sourceCommit: ac24a64c0ab26d0185c7b768aca130f490ea8487
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Commands")}}

Der _Get Timeouts_ [Befehl](/de/docs/Web/WebDriver/Commands) der [WebDriver](/de/docs/Web/WebDriver) API gibt die mit der aktuellen Sitzung verbundenen Zeitüberschreitungen zurück. Die [Sitzungszeitüberschreitungen](/de/docs/Web/WebDriver/Timeouts) steuern Verhaltensweisen wie Zeitüberschreitungen bei der [Skriptinjektion](/de/docs/Web/WebDriver/Timeouts#script), der [Dokumentnavigation](/de/docs/Web/WebDriver/Timeouts#pageload) und der [Elementsuche](/de/docs/Web/WebDriver/Timeouts#implicit).

## Syntax

| Methode                                   | URI-Vorlage                      |
| ----------------------------------------- | -------------------------------- |
| [`GET`](/de/docs/Web/HTTP/Methods/GET) | `/session/{session id}/timeouts` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.

### Antwort

Die Antwortnutzlast ist ein [`Timeouts`](/de/docs/Web/WebDriver/Timeouts)-Objekt:

- `implicit`
  - : Zeit in Millisekunden, um die [Elementfindungsstrategie](/de/docs/Web/WebDriver/WebElement) beim Auffinden eines Elements zu wiederholen. Standardmäßig ist dies 0, was bedeutet, dass die Strategie nur einmal ausgeführt wird.
- `pageLoad`
  - : Zeit in Millisekunden, die auf das Laden des Dokuments gewartet wird. Standardmäßig wartet WebDriver fünf Minuten (oder 300.000 ms).
- `script`
  - : Skripte, die mit [Execute Script](/de/docs/Web/WebDriver/Commands/ExecuteScript) oder [Execute Async Script](/de/docs/Web/WebDriver/Commands/ExecuteAsyncScript) injiziert werden, laufen, bis sie die Skriptzeitüberschreitungsdauer erreichen, die ebenfalls in Millisekunden angegeben ist. Die Skripte werden dann unterbrochen und ein [Script Timeout Error](/de/docs/Web/WebDriver/Errors/ScriptTimeoutError) wird zurückgegeben. Standard ist 30 Sekunden (oder 30.000 ms).

### Fehler

- [Invalid session ID](/de/docs/Web/WebDriver/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Timeouts`](/de/docs/Web/WebDriver/Timeouts)-Objekt
- [Set Timeouts](/de/docs/Web/WebDriver/Commands/SetTimeouts)-Befehl
- [Liste der WebDriver-Befehle](/de/docs/Web/WebDriver/Commands)
