---
title: Fenster-Handles abrufen
slug: Web/WebDriver/Reference/Commands/GetWindowHandles
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

Der _Get Window Handles_ [Befehl](/de/docs/Web/WebDriver/Command) der [WebDriver](/de/docs/Web/WebDriver) API gibt eine Liste aller [`WebWindow`](/de/docs/Web/WebDriver/WebWindow)s zurück. Jedes Tab oder Fenster, je nachdem, ob Sie einen Tab-Browser verwenden, wird mit einem _Fenster-Handle_ assoziiert, das verwendet wird, um [zum Fenster zu wechseln](/de/docs/Web/WebDriver/Commands/SwitchToWindow).

Um festzustellen, ob eine bestimmte Interaktion mit dem Browser ein neues Fenster öffnet, kann man die Menge der Fenster-Handles vor der Interaktion erfassen und mit der Menge nach der Aktion vergleichen.

## Syntax

| Methode                                          | URI-Vorlage                            |
| ------------------------------------------------ | -------------------------------------- |
| [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) | `/session/{session id}/window/handles` |

### URL-Parameter

- `session id`
  - : Kennung der Sitzung.

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

- [Switch To Window](/de/docs/Web/WebDriver/Commands/SwitchToWindow)-Befehl
- [Get Window Handle](/de/docs/Web/WebDriver/Commands/GetWindowHandle)-Befehl
- [Close Window](/de/docs/Web/WebDriver/Reference/Commands/CloseWindow)-Befehl
