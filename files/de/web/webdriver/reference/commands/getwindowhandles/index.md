---
title: Fenster-Handles abrufen
slug: Web/WebDriver/Reference/Commands/GetWindowHandles
l10n:
  sourceCommit: 469f97048247e0d738897cae20c695da6f1f738d
---

Der _Get Window Handles_-[Befehl](/de/docs/Web/WebDriver/Command) der [WebDriver](/de/docs/Web/WebDriver) API gibt eine Liste aller [`WebWindow`](/de/docs/Web/WebDriver/WebWindow)s zurück. Jedes Tab oder Fenster, je nachdem, ob Sie einen Browser mit Tabs verwenden, ist durch ein _Fenster-Handle_ verknüpft, das als Referenz verwendet wird, wenn [zum Fenster gewechselt wird](/de/docs/Web/WebDriver/Commands/SwitchToWindow).

Um festzustellen, ob eine bestimmte Interaktion mit dem Browser ein neues Fenster öffnet, kann man die Menge der Fenster-Handles vor der Interaktion ermitteln und mit der Menge nach der Aktion vergleichen.

## Syntax

| Methode                                          | URI-Vorlage                            |
| ------------------------------------------------ | -------------------------------------- |
| [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) | `/session/{session id}/window/handles` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.

### Fehler

- Ungültige Sitzungs-ID
  - : Sitzung existiert nicht.

## Beispiel

C#:

```cs
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
