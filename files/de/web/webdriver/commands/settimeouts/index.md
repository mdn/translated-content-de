---
title: Zeitüberschreitungen festlegen
slug: Web/WebDriver/Commands/SetTimeouts
l10n:
  sourceCommit: ac24a64c0ab26d0185c7b768aca130f490ea8487
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Commands")}}

Der _Set Timeouts_-[Befehl](/de/docs/Web/WebDriver/Commands) der [WebDriver](/de/docs/Web/WebDriver) API legt die Zeitüberschreitungen fest, die mit der aktuellen Sitzung verbunden sind. Die [Sitzungszeitüberschreitungen](/de/docs/Web/WebDriver/Timeouts) steuern das Verhalten bei Zeitüberschreitungen für [Skript-Injektionen](/de/docs/Web/WebDriver/Timeouts#script), [Dokumentnavigation](/de/docs/Web/WebDriver/Timeouts#pageload) und [Elementabfragen](/de/docs/Web/WebDriver/Timeouts#implicit).

## Syntax

| Methode                                    | URI-Vorlage                      |
| ------------------------------------------ | -------------------------------- |
| [`POST`](/de/docs/Web/HTTP/Methods/GET) | `/session/{session id}/timeouts` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.

### Nutzdaten

Die Eingabe ist ein [`Timeouts`](/de/docs/Web/WebDriver/Timeouts)-Objekt:

- `implicit`
  - : Zeit in Millisekunden, um die [Element-Lokalisierungsstrategie](/de/docs/Web/WebDriver/WebElement) beim Finden eines Elements zu wiederholen. Standardmäßig ist dies 0, was bedeutet, dass die Strategie nur einmal ausgeführt wird.
- `pageLoad`
  - : Zeit in Millisekunden, um zu warten, bis das Dokument vollständig geladen ist. Standardmäßig wartet WebDriver fünf Minuten (oder 300.000 ms).
- `script`
  - : Skripte, die mit [Execute Script](/de/docs/Web/WebDriver/Commands/ExecuteScript) oder [Execute Async Script](/de/docs/Web/WebDriver/Commands/ExecuteAsyncScript) injiziert werden, laufen, bis sie die Skript-Zeitüberschreitungsdauer erreichen, die ebenfalls in Millisekunden angegeben ist. Die Skripte werden dann unterbrochen und ein [Script Timeout Error](/de/docs/Web/WebDriver/Errors/ScriptTimeoutError) wird zurückgegeben. Standardmäßig 30 Sekunden (oder 30.000 ms).

### Fehler

- [Invalid session ID](/de/docs/Web/WebDriver/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [`Timeouts`](/de/docs/Web/WebDriver/Timeouts)-Objekt
- [Liste der WebDriver-Befehle](/de/docs/Web/WebDriver/Commands)
