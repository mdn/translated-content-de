---
title: Get Timeouts
slug: Web/WebDriver/Reference/Classic/Commands/GetTimeouts
l10n:
  sourceCommit: 421a9c26127cf11e33e72184b14656c9d406294d
---

Der _Get Timeouts_ [Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands) der [WebDriver](/de/docs/Web/WebDriver) API gibt die mit der aktuellen Sitzung verknüpften Zeitüberschreitungen zurück. Die [Sitzungs-Zeitüberschreitungen](/de/docs/Web/WebDriver/Reference/Classic/Timeouts) kontrollieren das Verhalten bei Zeitüberschreitungen wie [Skriptinjektion](/de/docs/Web/WebDriver/Reference/Classic/Timeouts#script), [Dokumentnavigation](/de/docs/Web/WebDriver/Reference/Classic/Timeouts#pageload) und [Elementabfrage](/de/docs/Web/WebDriver/Reference/Classic/Timeouts#implicit).

## Syntax

| Methode                                          | URI-Vorlage                      |
| ------------------------------------------------ | -------------------------------- |
| [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) | `/session/{session id}/timeouts` |

### URL-Parameter

- `session id`
  - : Kennung der Sitzung.

### Antwort

Das Antwort-Payload ist ein [`Timeouts`](/de/docs/Web/WebDriver/Reference/Classic/Timeouts) Objekt:

- `implicit`
  - : Zeit in Millisekunden, um die [Elementfindestrategie](/de/docs/Web/WebDriver/Reference/WebElement) beim Finden eines Elements zu wiederholen. Standardmäßig beträgt diese 0, was bedeutet, dass die Strategie nur einmal ausgeführt wird.
- `pageLoad`
  - : Zeit in Millisekunden, um darauf zu warten, dass das Dokument das Laden abschließt. Standardmäßig wartet WebDriver fünf Minuten (oder 300.000 ms).
- `script`
  - : Skripte, die mit [Execute Script](/de/docs/Web/WebDriver/Reference/Commands/ExecuteScript) oder [Execute Async Script](/de/docs/Web/WebDriver/Reference/Commands/ExecuteAsyncScript) injiziert werden, laufen bis zur Ablaufzeit des Skripts, die ebenfalls in Millisekunden angegeben wird. Die Skripte werden dann unterbrochen und ein [`script timeout error`](/de/docs/Web/WebDriver/Reference/Errors/ScriptTimeoutError) wird zurückgegeben. Standardmäßig 30 Sekunden (oder 30.000 ms).

### Fehler

- [`invalid session id`](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Die Sitzung existiert nicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Timeouts`](/de/docs/Web/WebDriver/Reference/Classic/Timeouts) Objekt
- [Set Timeouts](/de/docs/Web/WebDriver/Reference/Classic/Commands/SetTimeouts) Befehl
- [Liste der WebDriver-Befehle](/de/docs/Web/WebDriver/Reference/Classic/Commands)
