---
title: Get Timeouts
slug: Web/WebDriver/Reference/Commands/GetTimeouts
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

Der _Get Timeouts_ [Befehl](/de/docs/Web/WebDriver/Reference/Commands) der [WebDriver](/de/docs/Web/WebDriver) API gibt die mit der aktuellen Sitzung verknüpften Timeouts zurück. Die [Sitzungstimeout](/de/docs/Web/WebDriver/Reference/Timeouts)-Dauern steuern das Verhalten für Timeouts bei [Skriptinjektion](/de/docs/Web/WebDriver/Reference/Timeouts#script), [Dokumentennavigation](/de/docs/Web/WebDriver/Reference/Timeouts#pageload) und [Elementsuche](/de/docs/Web/WebDriver/Reference/Timeouts#implicit).

## Syntax

| Methode                                          | URI Template                     |
| ------------------------------------------------ | -------------------------------- |
| [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) | `/session/{session id}/timeouts` |

### URL-Parameter

- `session id`
  - : Kennung der Sitzung.

### Antwort

Das Antwort-Payload ist ein [`Timeouts`](/de/docs/Web/WebDriver/Reference/Timeouts)-Objekt:

- `implicit`
  - : Zeit in Millisekunden zum erneuten Versuch der [Element-Suchstrategie](/de/docs/Web/WebDriver/WebElement) beim Auffinden eines Elements. Standardmäßig ist dieser Wert 0, was bedeutet, dass die Strategie nur einmal ausgeführt wird.
- `pageLoad`
  - : Zeit in Millisekunden, die gewartet wird, bis das Dokument das Laden abgeschlossen hat. Standardmäßig wartet WebDriver fünf Minuten (oder 300.000 ms).
- `script`
  - : Skripte, die mit [Execute Script](/de/docs/Web/WebDriver/Commands/ExecuteScript) oder [Execute Async Script](/de/docs/Web/WebDriver/Commands/ExecuteAsyncScript) injiziert werden, laufen, bis sie die Skript-Timeout-Dauer erreichen, die ebenfalls in Millisekunden angegeben wird. Die Skripte werden dann unterbrochen und ein [Skript-Timeout-Fehler](/de/docs/Web/WebDriver/Errors/ScriptTimeoutError) wird zurückgegeben. Standardmäßig sind dies 30 Sekunden (oder 30.000 ms).

### Fehler

- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Timeouts`](/de/docs/Web/WebDriver/Reference/Timeouts)-Objekt
- [Set Timeouts](/de/docs/Web/WebDriver/Reference/Commands/SetTimeouts)-Befehl
- [Liste der WebDriver-Befehle](/de/docs/Web/WebDriver/Reference/Commands)
