---
title: Zeitüberschreitungen abrufen
slug: Web/WebDriver/Reference/Commands/GetTimeouts
l10n:
  sourceCommit: c6cab7f1aa7dc9f3495486a5b46020db320101cf
---

Der _Zeitüberschreitungen abrufen_ [Befehl](/de/docs/Web/WebDriver/Reference/Commands) der [WebDriver](/de/docs/Web/WebDriver) API gibt die Zeitüberschreitungen zurück, die mit der aktuellen Sitzung verbunden sind. Die [Sitzungs-Timeouts](/de/docs/Web/WebDriver/Reference/Timeouts) steuern das Verhalten wie Zeitüberschreitungen bei [Skriptinjektion](/de/docs/Web/WebDriver/Reference/Timeouts#script), [Dokumentnavigation](/de/docs/Web/WebDriver/Reference/Timeouts#pageload) und [Elementabruf](/de/docs/Web/WebDriver/Reference/Timeouts#implicit).

## Syntax

| Methode                                          | URI-Vorlage                      |
| ------------------------------------------------ | -------------------------------- |
| [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) | `/session/{session id}/timeouts` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.

### Antwort

Die Antwortnutzlast ist ein [`Timeouts`](/de/docs/Web/WebDriver/Reference/Timeouts) Objekt:

- `implicit`
  - : Zeit in Millisekunden, um die [Element-Ortungsstrategie](/de/docs/Web/WebDriver/Reference/WebElement) beim Auffinden eines Elements zu wiederholen. Standardmäßig ist dies 0, was bedeutet, dass die Strategie nur einmal ausgeführt wird.
- `pageLoad`
  - : Zeit in Millisekunden, um auf das vollständige Laden des Dokuments zu warten. Standardmäßig wartet WebDriver fünf Minuten (oder 300.000 ms).
- `script`
  - : Skripte, die mit [Execute Script](/de/docs/Web/WebDriver/Reference/Commands/ExecuteScript) oder [Execute Async Script](/de/docs/Web/WebDriver/Reference/Commands/ExecuteAsyncScript) injiziert werden, laufen, bis sie die Skript-Timeout-Dauer erreichen, die ebenfalls in Millisekunden angegeben ist. Die Skripte werden dann unterbrochen und ein [Skript-Timeout-Fehler](/de/docs/Web/WebDriver/Reference/Errors/ScriptTimeoutError) wird zurückgegeben. Standardwert sind 30 Sekunden (oder 30.000 ms).

### Fehler

- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Timeouts`](/de/docs/Web/WebDriver/Reference/Timeouts) Objekt
- [Zeitüberschreitungen festlegen](/de/docs/Web/WebDriver/Reference/Commands/SetTimeouts) Befehl
- [Liste der WebDriver-Befehle](/de/docs/Web/WebDriver/Reference/Commands)
