---
title: Zeitüberschreitungen abrufen
slug: Web/WebDriver/Commands/GetTimeouts
l10n:
  sourceCommit: ac24a64c0ab26d0185c7b768aca130f490ea8487
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Commands")}}

Der _Get Timeouts_-[Befehl](/de/docs/Web/WebDriver/Commands) der [WebDriver](/de/docs/Web/WebDriver)-API gibt die mit der aktuellen Sitzung verbundenen Zeitüberschreitungen zurück. Die [Sitzungszeitschaltzeiten](/de/docs/Web/WebDriver/Timeouts) steuern Verhaltensweisen wie Zeitüberschreitungen bei [Skript-Injektionen](/de/docs/Web/WebDriver/Timeouts#script), [Dokumentennavigation](/de/docs/Web/WebDriver/Timeouts#pageload) und [Elementabruf](/de/docs/Web/WebDriver/Timeouts#implicit).

## Syntax

| Methode                                   | URI-Vorlage                      |
| ----------------------------------------- | -------------------------------- |
| [`GET`](/de/docs/Web/HTTP/Methods/GET) | `/session/{session id}/timeouts` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.

### Antwort

Die Antwortnutzlast ist ein [`Timeouts`](/de/docs/Web/WebDriver/Timeouts)-Objekt:

- `implicit`
  - : Zeit in Millisekunden für das erneute Ausführen der [Element-Lokalisierungsstrategie](/de/docs/Web/WebDriver/WebElement) beim Finden eines Elements. Standardmäßig ist dies 0, was bedeutet, dass die Strategie nur einmal ausgeführt wird.
- `pageLoad`
  - : Zeit in Millisekunden, die darauf gewartet wird, dass das Dokument das Laden abschließt. Standardmäßig wartet der WebDriver fünf Minuten (oder 300.000 ms).
- `script`
  - : Skripte, die mit [Execute Script](/de/docs/Web/WebDriver/Commands/ExecuteScript) oder [Execute Async Script](/de/docs/Web/WebDriver/Commands/ExecuteAsyncScript) injiziert werden, laufen, bis die Skriptzeitüberschreitungsdauer erreicht ist, die ebenfalls in Millisekunden angegeben wird. Die Skripte werden dann unterbrochen und ein [Skriptzeitüberschreitungsfehler](/de/docs/Web/WebDriver/Errors/ScriptTimeoutError) wird zurückgegeben. Standardmäßig 30 Sekunden (oder 30.000 ms).

### Fehler

- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Timeouts`](/de/docs/Web/WebDriver/Timeouts)-Objekt
- [Set Timeouts](/de/docs/Web/WebDriver/Commands/SetTimeouts)-Befehl
- [Liste der WebDriver-Befehle](/de/docs/Web/WebDriver/Commands)
