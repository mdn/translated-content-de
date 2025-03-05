---
title: Set Timeouts
slug: Web/WebDriver/Reference/Commands/SetTimeouts
l10n:
  sourceCommit: 394a1aff10d20ba51dbd00252ce481769298001c
---

Der _Set Timeouts_ [Befehl](/de/docs/Web/WebDriver/Reference/Commands) der [WebDriver](/de/docs/Web/WebDriver) API setzt die mit der aktuellen Sitzung verbundenen Zeitlimits. Die [Sitzungstimeouts](/de/docs/Web/WebDriver/Reference/Timeouts) steuern Verhaltensweisen wie Zeitlimits bei [Skriptinjektionen](/de/docs/Web/WebDriver/Reference/Timeouts#script), [Dokumentennavigation](/de/docs/Web/WebDriver/Reference/Timeouts#pageload) und [Elementabruf](/de/docs/Web/WebDriver/Reference/Timeouts#implicit).

## Syntax

| Methode                                 | URI-Vorlage                      |
| --------------------------------------- | -------------------------------- |
| [`POST`](/de/docs/Web/HTTP/Methods/GET) | `/session/{session id}/timeouts` |

### URL-Parameter

- `session id`
  - : Kennung der Sitzung.

### Nutzlast

Die Eingabe ist ein [`Timeouts`](/de/docs/Web/WebDriver/Reference/Timeouts) Objekt:

- `implicit`
  - : Zeit in Millisekunden, um die [Element-Lokalisierungsstrategie](/de/docs/Web/WebDriver/WebElement) erneut zu versuchen, wenn ein Element gefunden wird. Dies ist standardmäßig auf 0 gesetzt, was bedeutet, dass die Strategie nur einmal ausgeführt wird.
- `pageLoad`
  - : Zeit in Millisekunden, um zu warten, bis das Dokument das Laden beendet hat. Standardmäßig wartet WebDriver fünf Minuten (oder 300.000 ms).
- `script`
  - : Skripte, die mit [Execute Script](/de/docs/Web/WebDriver/Commands/ExecuteScript) oder [Execute Async Script](/de/docs/Web/WebDriver/Commands/ExecuteAsyncScript) injiziert werden, laufen bis sie die Skript-Timeout-Dauer erreichen, die ebenfalls in Millisekunden angegeben wird. Die Skripte werden dann unterbrochen, und es wird ein [script timeout error](/de/docs/Web/WebDriver/Errors/ScriptTimeoutError) zurückgegeben. Standardmäßig 30 Sekunden (oder 30.000 ms).

### Fehler

- [Invalid session ID](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Timeouts`](/de/docs/Web/WebDriver/Reference/Timeouts) Objekt
- [Liste der WebDriver-Befehle](/de/docs/Web/WebDriver/Reference/Commands)
