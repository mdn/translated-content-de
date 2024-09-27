---
title: Set Timeouts
slug: Web/WebDriver/Commands/SetTimeouts
l10n:
  sourceCommit: ac24a64c0ab26d0185c7b768aca130f490ea8487
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Commands")}}

Der _Set Timeouts_ [Befehl](/de/docs/Web/WebDriver/Commands) der [WebDriver](/de/docs/Web/WebDriver) API setzt die mit der aktuellen Sitzung verbundenen Zeitüberschreitungen. Die [Sitzungs-Timeout](/de/docs/Web/WebDriver/Timeouts) Dauern steuern Verhaltensweisen wie Zeitüberschreitungen bei [Skript-Injektion](/de/docs/Web/WebDriver/Timeouts#script), [Dokumentnavigation](/de/docs/Web/WebDriver/Timeouts#pageload) und [Elementabruf](/de/docs/Web/WebDriver/Timeouts#implicit).

## Syntax

| Methode                                 | URI-Vorlage                      |
| --------------------------------------- | -------------------------------- |
| [`POST`](/de/docs/Web/HTTP/Methods/GET) | `/session/{session id}/timeouts` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.

### Nutzlast

Die Eingabe ist ein [`Timeouts`](/de/docs/Web/WebDriver/Timeouts) Objekt:

- `implicit`
  - : Zeit in Millisekunden, um die [Elementstandortstrategie](/de/docs/Web/WebDriver/WebElement) beim Finden eines Elements zu wiederholen. Standardmäßig ist dies 0, was bedeutet, dass die Strategie nur einmal ausgeführt wird.
- `pageLoad`
  - : Zeit in Millisekunden, um auf das vollständige Laden des Dokuments zu warten. Standardmäßig wartet WebDriver fünf Minuten (oder 300.000 ms).
- `script`
  - : Mit [Execute Script](/de/docs/Web/WebDriver/Commands/ExecuteScript) oder [Execute Async Script](/de/docs/Web/WebDriver/Commands/ExecuteAsyncScript) injizierte Skripte werden ausgeführt, bis sie auf die Skript-Timeout-Dauer stoßen, die ebenfalls in Millisekunden angegeben wird. Die Skripte werden dann unterbrochen und ein [Script Timeout Error](/de/docs/Web/WebDriver/Errors/ScriptTimeoutError) wird zurückgegeben. Standardmäßig auf 30 Sekunden (oder 30.000 ms) eingestellt.

### Fehler

- [Invalid session ID](/de/docs/Web/WebDriver/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Timeouts`](/de/docs/Web/WebDriver/Timeouts) Objekt
- [Liste der WebDriver-Befehle](/de/docs/Web/WebDriver/Commands)
