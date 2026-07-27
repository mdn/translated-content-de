---
title: Set Timeouts
slug: Web/WebDriver/Reference/Classic/Commands/SetTimeouts
l10n:
  sourceCommit: fb6aa6056407ba69d96da0fe140a1ae2320f0fb2
---

Der _Set Timeouts_ [Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands) der [WebDriver](/de/docs/Web/WebDriver) API setzt die mit der aktuellen Sitzung verbundenen Zeitlimits. Die [Sitzungs-Zeitlimits](/de/docs/Web/WebDriver/Reference/Classic/Timeouts) steuern das Verhalten bei [Skriptinjektion](/de/docs/Web/WebDriver/Reference/Classic/Timeouts#script), [Dokumentnavigation](/de/docs/Web/WebDriver/Reference/Classic/Timeouts#pageload) und [Elementabruf](/de/docs/Web/WebDriver/Reference/Classic/Timeouts#implicit).

## Syntax

| Methode                                           | URI-Vorlage                      |
| ------------------------------------------------- | -------------------------------- |
| [`POST`](/de/docs/Web/HTTP/Reference/Methods/GET) | `/session/{session id}/timeouts` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.

### Payload

Die Eingabe ist ein [`Timeouts`](/de/docs/Web/WebDriver/Reference/Classic/Timeouts)-Objekt:

- `implicit`
  - : Zeit in Millisekunden, um die [Element-Ortungsstrategie](/de/docs/Web/WebDriver/Reference/WebElement) beim Finden eines Elements zu wiederholen. Standardmäßig ist dies 0, was bedeutet, dass die Strategie nur einmal ausgeführt wird.
- `pageLoad`
  - : Zeit in Millisekunden, um auf das Laden des Dokuments zu warten. Standardmäßig wartet WebDriver fünf Minuten (oder 300.000 ms).
- `script`
  - : Skripte, die mit [Execute Script](/de/docs/Web/WebDriver/Reference/Commands/ExecuteScript) oder [Execute Async Script](/de/docs/Web/WebDriver/Reference/Commands/ExecuteAsyncScript) injiziert werden, laufen, bis sie die Skript-Zeitlimitdauer erreichen, die ebenfalls in Millisekunden angegeben wird. Die Skripte werden dann unterbrochen und ein [`script timeout error`](/de/docs/Web/WebDriver/Reference/Errors/ScriptTimeout) wird zurückgegeben. Standardmäßig beträgt dies 30 Sekunden (oder 30.000 ms).

### Fehler

- [`invalid session id`](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Die Sitzung existiert nicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Timeouts`](/de/docs/Web/WebDriver/Reference/Classic/Timeouts)-Objekt
- [Liste der WebDriver-Befehle](/de/docs/Web/WebDriver/Reference/Classic/Commands)
