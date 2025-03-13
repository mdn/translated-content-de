---
title: Set Timeouts
slug: Web/WebDriver/Reference/Commands/SetTimeouts
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

Der _Set Timeouts_-[Befehl](/de/docs/Web/WebDriver/Reference/Commands) der [WebDriver](/de/docs/Web/WebDriver) API setzt die mit der aktuellen Sitzung verbundenen Zeitlimits. Die Dauer der [Sitzungs-Timeouts](/de/docs/Web/WebDriver/Reference/Timeouts) steuert Verhaltensweisen wie Zeitüberschreitungen bei der [Skriptinjektion](/de/docs/Web/WebDriver/Reference/Timeouts#script), [Dokumentnavigation](/de/docs/Web/WebDriver/Reference/Timeouts#pageload) und [Elementabfrage](/de/docs/Web/WebDriver/Reference/Timeouts#implicit).

## Syntax

| Methode                                           | URI-Vorlage                      |
| ------------------------------------------------- | -------------------------------- |
| [`POST`](/de/docs/Web/HTTP/Reference/Methods/GET) | `/session/{session id}/timeouts` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.

### Nutzlast

Die Eingabe ist ein [`Timeouts`](/de/docs/Web/WebDriver/Reference/Timeouts)-Objekt:

- `implicit`
  - : Zeit in Millisekunden, die die [Elementabfragestrategie](/de/docs/Web/WebDriver/WebElement) wiederholt wird, wenn ein Element gefunden wird. Standardmäßig ist dies 0, was bedeutet, dass die Strategie nur einmal ausgeführt wird.
- `pageLoad`
  - : Zeit in Millisekunden, die gewartet wird, bis das Dokument fertig geladen ist. Standardmäßig wartet WebDriver fünf Minuten (oder 300.000 ms).
- `script`
  - : Mit [Execute Script](/de/docs/Web/WebDriver/Commands/ExecuteScript) oder [Execute Async Script](/de/docs/Web/WebDriver/Commands/ExecuteAsyncScript) injizierte Skripte laufen, bis sie die Skript-Timeout-Dauer erreichen, die ebenfalls in Millisekunden angegeben wird. Die Skripte werden dann unterbrochen und ein [Skript-Timeout-Fehler](/de/docs/Web/WebDriver/Errors/ScriptTimeoutError) wird zurückgegeben. Standardmäßig beträgt das Timeout 30 Sekunden (oder 30.000 ms).

### Fehler

- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Timeouts`](/de/docs/Web/WebDriver/Reference/Timeouts)-Objekt
- [Liste der WebDriver-Befehle](/de/docs/Web/WebDriver/Reference/Commands)
