---
title: Zeitüberschreitungen abrufen
slug: Web/WebDriver/Reference/Classic/Commands/GetTimeouts
l10n:
  sourceCommit: 225de04b84b717433ffeb3bb0cf5ceddac9653ea
---

Der _Zeitüberschreitungen abrufen_ [Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands) der [WebDriver](/de/docs/Web/WebDriver) API gibt die mit der aktuellen Sitzung verbundenen Zeitüberschreitungen zurück. Die [Sitzungs-Zeitüberschreitungs](/de/docs/Web/WebDriver/Reference/Classic/Timeouts)-Dauern steuern das Verhalten wie Zeitüberschreitungen bei [Skripteinjection](/de/docs/Web/WebDriver/Reference/Classic/Timeouts#script), [Dokumentnavigation](/de/docs/Web/WebDriver/Reference/Classic/Timeouts#pageload) und [Elementabfrage](/de/docs/Web/WebDriver/Reference/Classic/Timeouts#implicit).

## Syntax

| Methode                                          | URI-Vorlage                      |
| ------------------------------------------------ | -------------------------------- |
| [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) | `/session/{session id}/timeouts` |

### URL-Parameter

- `session id`
  - : Kennung der Sitzung.

### Antwort

Der Antwortdatensatz ist ein [`Timeouts`](/de/docs/Web/WebDriver/Reference/Classic/Timeouts) Objekt:

- `implicit`
  - : Zeit in Millisekunden, um die [Element-Abfragstrategie](/de/docs/Web/WebDriver/Reference/WebElement) beim Auffinden eines Elements zu wiederholen. Standardmäßig ist dies 0, was bedeutet, dass die Strategie nur einmal ausgeführt wird.
- `pageLoad`
  - : Zeit in Millisekunden, um auf das vollständige Laden des Dokuments zu warten. Standardmäßig wartet WebDriver fünf Minuten (oder 300.000 ms).
- `script`
  - : Skripte, die mit [Execute Script](/de/docs/Web/WebDriver/Reference/Commands/ExecuteScript) oder [Execute Async Script](/de/docs/Web/WebDriver/Reference/Commands/ExecuteAsyncScript) injiziert werden, laufen, bis sie die Skript-Zeitüberschreitungsdauer erreichen, die ebenfalls in Millisekunden angegeben ist. Die Skripte werden dann unterbrochen und ein [Skript-Zeitüberschreitungsfehler](/de/docs/Web/WebDriver/Reference/Errors/ScriptTimeoutError) wird zurückgegeben. Standardmäßig sind es 30 Sekunden (oder 30.000 ms).

### Fehler

- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Reference/Classic/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Timeouts`](/de/docs/Web/WebDriver/Reference/Classic/Timeouts) Objekt
- [Set Timeouts](/de/docs/Web/WebDriver/Reference/Classic/Commands/SetTimeouts) Befehl
- [Liste der WebDriver-Befehle](/de/docs/Web/WebDriver/Reference/Classic/Commands)
