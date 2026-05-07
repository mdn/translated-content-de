---
title: Fenster-Handles abrufen
slug: Web/WebDriver/Reference/Classic/Commands/GetWindowHandles
l10n:
  sourceCommit: 421a9c26127cf11e33e72184b14656c9d406294d
---

Der _Get Window Handles_ [Befehl](/de/docs/Web/WebDriver/Reference/Command) der [WebDriver](/de/docs/Web/WebDriver) API gibt eine Liste aller [`WebWindow`](/de/docs/Web/WebDriver/Reference/WebWindow)s zurück. Jeder Tab oder jedes Fenster, je nachdem, ob Sie einen Browser mit Tabs verwenden, ist mit einem _Fenster-Handle_ verknüpft, das als Referenz verwendet wird, wenn Sie [zu einem Fenster wechseln](/de/docs/Web/WebDriver/Reference/Commands/SwitchToWindow).

Um festzustellen, ob eine bestimmte Interaktion mit dem Browser ein neues Fenster öffnet, kann man die Menge der Fenster-Handles vor der Interaktion abrufen und mit der Menge nach der Aktion vergleichen.

## Syntax

| Methode                                          | URI-Vorlage                            |
| ------------------------------------------------ | -------------------------------------- |
| [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) | `/session/{session id}/window/handles` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.

### Fehler

- `invalid session id`
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

- [Switch To Window](/de/docs/Web/WebDriver/Reference/Commands/SwitchToWindow)-Befehl
- [Get Window Handle](/de/docs/Web/WebDriver/Reference/Commands/GetWindowHandle)-Befehl
- [Close Window](/de/docs/Web/WebDriver/Reference/Classic/Commands/CloseWindow)-Befehl
