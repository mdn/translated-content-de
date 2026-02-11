---
title: Zeitlimits festlegen
slug: Web/WebDriver/Reference/Classic/Commands/SetTimeouts
l10n:
  sourceCommit: 225de04b84b717433ffeb3bb0cf5ceddac9653ea
---

Der _Set Timeouts_ [Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands) der [WebDriver](/de/docs/Web/WebDriver) API legt die mit der aktuellen Sitzung verbundenen Zeitlimits fest. Die [Sitzungszeitlimits](/de/docs/Web/WebDriver/Reference/Classic/Timeouts) steuern Verhaltensweisen wie Zeitlimits für [Skriptinjektion](/de/docs/Web/WebDriver/Reference/Classic/Timeouts#script), [Dokumentnavigation](/de/docs/Web/WebDriver/Reference/Classic/Timeouts#pageload) und [Elementabruf](/de/docs/Web/WebDriver/Reference/Classic/Timeouts#implicit).

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
  - : Zeit in Millisekunden, um die [Elementlokalisierungsstrategie](/de/docs/Web/WebDriver/Reference/WebElement) beim Auffinden eines Elements erneut auszuführen. Dies ist standardmäßig auf 0 gesetzt, was bedeutet, dass die Strategie nur einmal ausgeführt wird.
- `pageLoad`
  - : Zeit in Millisekunden, um auf das Laden des Dokuments zu warten. Standardmäßig wartet WebDriver fünf Minuten (oder 300.000 ms).
- `script`
  - : Skripte, die mit [Execute Script](/de/docs/Web/WebDriver/Reference/Commands/ExecuteScript) oder [Execute Async Script](/de/docs/Web/WebDriver/Reference/Commands/ExecuteAsyncScript) injiziert werden, laufen bis zur Erreichung des Skript-Zeitlimits, das ebenfalls in Millisekunden angegeben wird. Die Skripte werden dann unterbrochen und ein [Skript-Zeitfehler](/de/docs/Web/WebDriver/Reference/Errors/ScriptTimeoutError) wird zurückgegeben. Standardmäßig 30 Sekunden (oder 30.000 ms).

### Fehler

- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Reference/Classic/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Timeouts`](/de/docs/Web/WebDriver/Reference/Classic/Timeouts) Objekt
- [Liste der WebDriver-Befehle](/de/docs/Web/WebDriver/Reference/Classic/Commands)
