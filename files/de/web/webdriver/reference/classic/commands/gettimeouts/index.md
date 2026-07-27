---
title: Abfragen von Timeouts
slug: Web/WebDriver/Reference/Classic/Commands/GetTimeouts
l10n:
  sourceCommit: fb6aa6056407ba69d96da0fe140a1ae2320f0fb2
---

Der _Abfragen von Timeouts_ [Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands) der [WebDriver](/de/docs/Web/WebDriver) API gibt die Timeouts der aktuellen Sitzung zurück. Die [Sitzungs-Timeout](/de/docs/Web/WebDriver/Reference/Classic/Timeouts)-Dauern steuern das Verhalten von Timeouts bei [Skriptinjektion](/de/docs/Web/WebDriver/Reference/Classic/Timeouts#script), [Dokumentnavigation](/de/docs/Web/WebDriver/Reference/Classic/Timeouts#pageload) und [Elementabruf](/de/docs/Web/WebDriver/Reference/Classic/Timeouts#implicit).

## Syntax

| Methode                                          | URI-Vorlage                      |
| ------------------------------------------------ | -------------------------------- |
| [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) | `/session/{session id}/timeouts` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.

### Antwort

Die Antwortnutzlast ist ein [`Timeouts`](/de/docs/Web/WebDriver/Reference/Classic/Timeouts)-Objekt:

- `implicit`
  - : Zeit in Millisekunden, um die [Element-Suchstrategie](/de/docs/Web/WebDriver/Reference/WebElement) beim Finden eines Elements zu wiederholen. Der Standardwert ist 0, was bedeutet, dass die Strategie nur einmal ausgeführt wird.
- `pageLoad`
  - : Zeit in Millisekunden, um darauf zu warten, dass das Dokument das Laden beendet. Standardmäßig wartet WebDriver fünf Minuten (oder 300.000 ms).
- `script`
  - : Skripte, die mit [Execute Script](/de/docs/Web/WebDriver/Reference/Commands/ExecuteScript) oder [Execute Async Script](/de/docs/Web/WebDriver/Reference/Commands/ExecuteAsyncScript) injiziert werden, laufen bis zur Skript-Timeout-Dauer, die ebenfalls in Millisekunden angegeben ist. Danach werden die Skripte unterbrochen und ein [`script timeout error`](/de/docs/Web/WebDriver/Reference/Errors/ScriptTimeout) wird zurückgegeben. Standardwert sind 30 Sekunden (oder 30.000 ms).

### Fehler

- [`invalid session id`](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Timeouts`](/de/docs/Web/WebDriver/Reference/Classic/Timeouts)-Objekt
- [Set Timeouts](/de/docs/Web/WebDriver/Reference/Classic/Commands/SetTimeouts)-Befehl
- [Liste von WebDriver-Befehlen](/de/docs/Web/WebDriver/Reference/Classic/Commands)
