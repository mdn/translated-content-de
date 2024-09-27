---
title: Get Timeouts
slug: Web/WebDriver/Commands/GetTimeouts
l10n:
  sourceCommit: ac24a64c0ab26d0185c7b768aca130f490ea8487
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Commands")}}

Der _Get Timeouts_ [Befehl](/de/docs/Web/WebDriver/Commands) der [WebDriver](/de/docs/Web/WebDriver) API gibt die mit der aktuellen Sitzung verbundenen Timeouts zurück. Die [Sitzungstimeout](/de/docs/Web/WebDriver/Timeouts)-Dauern steuern Verhalten wie Timeouts bei [Skriptinjektion](/de/docs/Web/WebDriver/Timeouts#script), [Dokumentnavigation](/de/docs/Web/WebDriver/Timeouts#pageload) und [Elementabfrage](/de/docs/Web/WebDriver/Timeouts#implicit).

## Syntax

| Methode                                | URI-Vorlage                      |
| -------------------------------------- | -------------------------------- |
| [`GET`](/de/docs/Web/HTTP/Methods/GET) | `/session/{session id}/timeouts` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.

### Antwort

Die Antwortnutzenlast ist ein [`Timeouts`](/de/docs/Web/WebDriver/Timeouts)-Objekt:

- `implicit`
  - : Zeit in Millisekunden, um die [Elementlokalisierungsstrategie](/de/docs/Web/WebDriver/WebElement) beim Auffinden eines Elements zu wiederholen. Dies ist standardmäßig auf 0 gesetzt, was bedeutet, dass die Strategie nur einmal ausgeführt wird.
- `pageLoad`
  - : Zeit in Millisekunden, um zu warten, bis das Dokument fertig geladen ist. Standardmäßig wartet WebDriver fünf Minuten (oder 300.000 ms).
- `script`
  - : Skripte, die mit [Execute Script](/de/docs/Web/WebDriver/Commands/ExecuteScript) oder [Execute Async Script](/de/docs/Web/WebDriver/Commands/ExecuteAsyncScript) eingefügt werden, laufen, bis sie die Skript-Timeout-Dauer erreichen, die ebenfalls in Millisekunden angegeben wird. Die Skripte werden dann unterbrochen und ein [Skript-Timeout-Fehler](/de/docs/Web/WebDriver/Errors/ScriptTimeoutError) wird zurückgegeben. Standardmäßig auf 30 Sekunden (oder 30.000 ms) eingestellt.

### Fehler

- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.

## Specifications

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Timeouts`](/de/docs/Web/WebDriver/Timeouts)-Objekt
- [Set Timeouts](/de/docs/Web/WebDriver/Commands/SetTimeouts)-Befehl
- [Liste der WebDriver-Befehle](/de/docs/Web/WebDriver/Commands)
