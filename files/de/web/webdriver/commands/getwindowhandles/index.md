---
title: Get Window Handles
slug: Web/WebDriver/Commands/GetWindowHandles
l10n:
  sourceCommit: ac24a64c0ab26d0185c7b768aca130f490ea8487
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Commands")}}

Der Befehl _Get Window Handles_ der [WebDriver](/de/docs/Web/WebDriver) API gibt eine Liste aller [`WebWindow`](/de/docs/Web/WebDriver/WebWindow)s zurück. Jedes Tab oder Fenster, abhängig davon, ob Sie einen Tab-Browser verwenden, ist durch einen _Window Handle_ repräsentiert, der als Referenz verwendet wird, wenn [zum Fenster gewechselt](/de/docs/Web/WebDriver/Commands/SwitchToWindow) wird.

Um festzustellen, ob eine bestimmte Interaktion mit dem Browser ein neues Fenster öffnet, kann man die Menge der Window Handles vor der Interaktion abrufen und sie mit der Menge nach der Aktion vergleichen.

## Syntax

| Methode                                   | URI-Vorlage                            |
| ----------------------------------------- | -------------------------------------- |
| [`GET`](/de/docs/Web/HTTP/Methods/GET) | `/session/{session id}/window/handles` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.

### Fehler

- Ungültige Sitzungs-ID
  - : Sitzung existiert nicht.

## Beispiel

C#:

```cpp
using System.Collections.ObjectModel;
using OpenQA.Selenium.Firefox;

namespace MDNWebDriverExamples
{
    class Example
    {
        public static void Main(string[] args)
        {
            FirefoxDriver session = new FirefoxDriver();

            session.ExecuteScript("window.open()");

            ReadOnlyCollection<string> currentWindowHandles = session.WindowHandles;
        }
    }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Switch To Window](/de/docs/Web/WebDriver/Commands/SwitchToWindow) Befehl
- [Get Window Handle](/de/docs/Web/WebDriver/Commands/GetWindowHandle) Befehl
- [Close Window](/de/docs/Web/WebDriver/Commands/CloseWindow) Befehl
