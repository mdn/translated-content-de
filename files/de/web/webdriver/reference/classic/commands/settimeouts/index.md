---
title: Set Timeouts
slug: Web/WebDriver/Reference/Classic/Commands/SetTimeouts
l10n:
  sourceCommit: 676631fd27c8096c3ae3ceb2a6b4ffd6f687055f
---

Der _Set Timeouts_ [Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands) der [WebDriver](/de/docs/Web/WebDriver) API setzt die Zeitlimits, die mit der aktuellen Sitzung verknüpft sind. Die [Sitzungszeitüberschreitungs]-Dauern (/de/docs/Web/WebDriver/Reference/Classic/Timeouts) steuern Verhaltensweisen wie Zeitüberschreitungen bei [Skripteinjection](/de/docs/Web/WebDriver/Reference/Classic/Timeouts#script), [Dokumentennavigation](/de/docs/Web/WebDriver/Reference/Classic/Timeouts#pageload) und [Elementabfrage](/de/docs/Web/WebDriver/Reference/Classic/Timeouts#implicit).

## Syntax

| Methode                                           | URI-Vorlage                      |
| ------------------------------------------------- | -------------------------------- |
| [`POST`](/de/docs/Web/HTTP/Reference/Methods/GET) | `/session/{session id}/timeouts` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.

### Nutzlast

Die Eingabe ist ein [`Timeouts`](/de/docs/Web/WebDriver/Reference/Classic/Timeouts) Objekt:

- `implicit`
  - : Zeit in Millisekunden, um die [Element-Lokalisierungsstrategie](/de/docs/Web/WebDriver/Reference/WebElement) beim Auffinden eines Elements erneut zu versuchen. Der Standardwert ist 0, was bedeutet, dass die Strategie nur einmal ausgeführt wird.
- `pageLoad`
  - : Zeit in Millisekunden, um darauf zu warten, dass das Dokument das Laden abschließt. Standardmäßig wartet WebDriver fünf Minuten (oder 300.000 ms).
- `script`
  - : Skripts, die mit [Execute Script](/de/docs/Web/WebDriver/Reference/Commands/ExecuteScript) oder [Execute Async Script](/de/docs/Web/WebDriver/Reference/Commands/ExecuteAsyncScript) injiziert werden, laufen, bis sie die Skript-Zeitüberschreitungsdauer erreichen, die ebenfalls in Millisekunden angegeben ist. Die Skripts werden dann unterbrochen und ein [script timeout error](/de/docs/Web/WebDriver/Reference/Errors/ScriptTimeoutError) wird zurückgegeben. Standardwert sind 30 Sekunden (oder 30.000 ms).

### Fehler

- [Invalid session ID](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Timeouts`](/de/docs/Web/WebDriver/Reference/Classic/Timeouts) Objekt
- [Liste der WebDriver-Befehle](/de/docs/Web/WebDriver/Reference/Classic/Commands)
