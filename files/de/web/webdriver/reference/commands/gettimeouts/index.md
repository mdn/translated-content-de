---
title: Zeitlimits abrufen
slug: Web/WebDriver/Reference/Commands/GetTimeouts
l10n:
  sourceCommit: 57b855a52a2d2e8914a30e3a47567bff0806ae23
---

Der _Zeitlimits abrufen_ [Befehl](/de/docs/Web/WebDriver/Reference/Commands) der [WebDriver](/de/docs/Web/WebDriver) API gibt die mit der aktuellen Sitzung verbundenen Zeitlimits zurück. Die [Zeitlimits der Sitzung](/de/docs/Web/WebDriver/Reference/Timeouts) steuern das Verhalten wie Zeitlimits bei [Skript-Injektion](/de/docs/Web/WebDriver/Reference/Timeouts#script), [Dokumentnavigation](/de/docs/Web/WebDriver/Reference/Timeouts#pageload) und [Elementabfrage](/de/docs/Web/WebDriver/Reference/Timeouts#implicit).

## Syntax

| Methode                                | URI-Vorlage                      |
| -------------------------------------- | -------------------------------- |
| [`GET`](/de/docs/Web/HTTP/Methods/GET) | `/session/{session id}/timeouts` |

### URL-Parameter

- `session id`
  - : Kennung der Sitzung.

### Antwort

Die Antwort-Nutzlast ist ein [`Timeouts`](/de/docs/Web/WebDriver/Reference/Timeouts)-Objekt:

- `implicit`
  - : Zeit in Millisekunden, um die [Elementpositionierungsstrategie](/de/docs/Web/WebDriver/WebElement) beim Auffinden eines Elements zu wiederholen. Standardmäßig ist dies auf 0 eingestellt, was bedeutet, dass die Strategie nur einmal ausgeführt wird.
- `pageLoad`
  - : Zeit in Millisekunden, um darauf zu warten, dass das Dokument das Laden abschließt. Standardmäßig wird WebDriver fünf Minuten (oder 300.000 ms) warten.
- `script`
  - : Skripts, die mit [Execute Script](/de/docs/Web/WebDriver/Commands/ExecuteScript) oder [Execute Async Script](/de/docs/Web/WebDriver/Commands/ExecuteAsyncScript) injiziert wurden, werden ausgeführt, bis sie das Skript-Zeitlimit erreichen, welches ebenfalls in Millisekunden angegeben wird. Die Skripts werden dann unterbrochen und ein [Skript-Zeitlimitfehler](/de/docs/Web/WebDriver/Errors/ScriptTimeoutError) wird zurückgegeben. Standardmäßig 30 Sekunden (oder 30.000 ms).

### Fehler

- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Timeouts`](/de/docs/Web/WebDriver/Reference/Timeouts) Objekt
- [Zeitlimits setzen](/de/docs/Web/WebDriver/Reference/Commands/SetTimeouts) Befehl
- [Liste der WebDriver-Befehle](/de/docs/Web/WebDriver/Reference/Commands)
