---
title: Set Timeouts
slug: Web/WebDriver/Reference/Commands/SetTimeouts
l10n:
  sourceCommit: 57b855a52a2d2e8914a30e3a47567bff0806ae23
---

Der _Set Timeouts_ [Befehl](/de/docs/Web/WebDriver/Reference/Commands) der [WebDriver](/de/docs/Web/WebDriver) API setzt die Timeouts für die aktuelle Sitzung. Die [Timeout-Dauern](/de/docs/Web/WebDriver/Reference/Timeouts) der Sitzung steuern Verhaltensweisen wie Timeouts bei [Skript-Injektion](/de/docs/Web/WebDriver/Reference/Timeouts#script), [Dokumentennavigation](/de/docs/Web/WebDriver/Reference/Timeouts#pageload) und [Element-Abruf](/de/docs/Web/WebDriver/Reference/Timeouts#implicit).

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
  - : Zeit in Millisekunden, um die [Elementortungsstrategie](/de/docs/Web/WebDriver/WebElement) beim Auffinden eines Elements zu wiederholen. Standardmäßig wird dies auf 0 gesetzt, was bedeutet, dass die Strategie nur einmal ausgeführt wird.
- `pageLoad`
  - : Zeit in Millisekunden, die gewartet wird, bis das Dokument das Laden abgeschlossen hat. Standardmäßig wartet WebDriver fünf Minuten (oder 300.000 ms).
- `script`
  - : Skripte, die mit [Execute Script](/de/docs/Web/WebDriver/Commands/ExecuteScript) oder [Execute Async Script](/de/docs/Web/WebDriver/Commands/ExecuteAsyncScript) injiziert werden, laufen, bis sie die Skript-Timeout-Dauer erreichen, die ebenfalls in Millisekunden angegeben ist. Die Skripte werden dann unterbrochen und ein [Script Timeout Fehler](/de/docs/Web/WebDriver/Errors/ScriptTimeoutError) wird zurückgegeben. Standardmäßig auf 30 Sekunden (oder 30.000 ms) eingestellt.

### Fehler

- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Timeouts`](/de/docs/Web/WebDriver/Reference/Timeouts) Objekt
- [Liste der WebDriver-Befehle](/de/docs/Web/WebDriver/Reference/Commands)
