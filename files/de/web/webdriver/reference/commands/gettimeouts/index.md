---
title: Zeitüberschreitungen abrufen
slug: Web/WebDriver/Reference/Commands/GetTimeouts
l10n:
  sourceCommit: 394a1aff10d20ba51dbd00252ce481769298001c
---

Der _Zeitüberschreitungen abrufen_ [Befehl](/de/docs/Web/WebDriver/Reference/Commands) der [WebDriver](/de/docs/Web/WebDriver) API gibt die mit der aktuellen Sitzung verbundenen Zeitüberschreitungen zurück. Die [Sitzungs-Zeitüberschreitungs](/de/docs/Web/WebDriver/Reference/Timeouts) -Dauern steuern das Verhalten wie Zeitüberschreitungen bei [Skriptinjektion](/de/docs/Web/WebDriver/Reference/Timeouts#script), [Dokumentnavigation](/de/docs/Web/WebDriver/Reference/Timeouts#pageload) und [Elementwiederherstellung](/de/docs/Web/WebDriver/Reference/Timeouts#implicit).

## Syntax

| Methode                                | URI-Vorlage                      |
| -------------------------------------- | -------------------------------- |
| [`GET`](/de/docs/Web/HTTP/Methods/GET) | `/session/{session id}/timeouts` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.

### Antwort

Die Antwortnutzlast ist ein [`Timeouts`](/de/docs/Web/WebDriver/Reference/Timeouts) Objekt:

- `implicit`
  - : Zeit in Millisekunden, um die [Element-Findestrategie](/de/docs/Web/WebDriver/WebElement) bei der Suche nach einem Element erneut zu versuchen. Dies wird standardmäßig auf 0 gesetzt, was bedeutet, dass die Strategie nur einmal ausgeführt wird.
- `pageLoad`
  - : Zeit in Millisekunden, um auf das vollständige Laden des Dokuments zu warten. Standardmäßig wartet WebDriver fünf Minuten (oder 300.000 ms).
- `script`
  - : Mit [Execute Script](/de/docs/Web/WebDriver/Commands/ExecuteScript) oder [Execute Async Script](/de/docs/Web/WebDriver/Commands/ExecuteAsyncScript) injizierte Skripte werden ausgeführt, bis sie die Skript-Zeitüberschreitungsdauer erreichen, die ebenfalls in Millisekunden angegeben ist. Die Skripte werden dann unterbrochen, und ein [Script-Timeout-Fehler](/de/docs/Web/WebDriver/Errors/ScriptTimeoutError) wird zurückgegeben. Standardwert ist 30 Sekunden (oder 30.000 ms).

### Fehler

- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Timeouts`](/de/docs/Web/WebDriver/Reference/Timeouts) Objekt
- [Zeitüberschreitungen festlegen](/de/docs/Web/WebDriver/Reference/Commands/SetTimeouts) Befehl
- [Liste der WebDriver-Befehle](/de/docs/Web/WebDriver/Reference/Commands)
