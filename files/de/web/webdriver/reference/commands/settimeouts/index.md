---
title: Setze Timeouts
slug: Web/WebDriver/Reference/Commands/SetTimeouts
l10n:
  sourceCommit: c6cab7f1aa7dc9f3495486a5b46020db320101cf
---

Der _Setze Timeouts_ [Befehl](/de/docs/Web/WebDriver/Reference/Commands) der [WebDriver](/de/docs/Web/WebDriver) API setzt die Timeouts, die mit der aktuellen Sitzung verbunden sind. Die [Sitzungstimeout](/de/docs/Web/WebDriver/Reference/Timeouts)-Dauern steuern Verhalten wie Timeouts bei [Skriptinjektion](/de/docs/Web/WebDriver/Reference/Timeouts#script), [Dokumentnavigation](/de/docs/Web/WebDriver/Reference/Timeouts#pageload) und [Elementabruf](/de/docs/Web/WebDriver/Reference/Timeouts#implicit).

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
  - : Zeit in Millisekunden, um die [Elementlokalisierungsstrategie](/de/docs/Web/WebDriver/Reference/WebElement) beim Finden eines Elements erneut zu versuchen. Dies ist standardmäßig auf 0 gesetzt, was bedeutet, dass die Strategie nur einmal ausgeführt wird.
- `pageLoad`
  - : Zeit in Millisekunden, um zu warten, bis das Dokument das Laden abgeschlossen hat. Standardmäßig wartet WebDriver fünf Minuten (oder 300.000 ms).
- `script`
  - : Skripte, die mit [Execute Script](/de/docs/Web/WebDriver/Reference/Commands/ExecuteScript) oder [Execute Async Script](/de/docs/Web/WebDriver/Reference/Commands/ExecuteAsyncScript) injiziert werden, laufen, bis sie die Skript-Timeout-Dauer erreichen, die ebenfalls in Millisekunden angegeben ist. Die Skripte werden dann unterbrochen und ein [Skript-Timeout-Fehler](/de/docs/Web/WebDriver/Reference/Errors/ScriptTimeoutError) wird zurückgegeben. Standardmäßig 30 Sekunden (oder 30.000 ms).

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
