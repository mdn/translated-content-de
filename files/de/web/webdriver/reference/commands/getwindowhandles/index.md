---
title: Abrufen von Fenster-Handles
slug: Web/WebDriver/Reference/Commands/GetWindowHandles
l10n:
  sourceCommit: 57b855a52a2d2e8914a30e3a47567bff0806ae23
---

Der _Get Window Handles_ [Befehl](/de/docs/Web/WebDriver/Command) der [WebDriver](/de/docs/Web/WebDriver) API gibt eine Liste aller [`WebWindow`](/de/docs/Web/WebDriver/WebWindow)s zurück. Je nachdem, ob ein tab-basiertes Browserfenster verwendet wird, ist jeder Tab oder jedes Fenster mit einem _window handle_ verknüpft, das als Referenz beim [Wechseln zum Fenster](/de/docs/Web/WebDriver/Commands/SwitchToWindow) verwendet wird.

Um festzustellen, ob eine bestimmte Interaktion mit dem Browser ein neues Fenster öffnet, kann man die Menge der Fenster-Handles vor der Interaktion abrufen und mit der Menge nach der Aktion vergleichen.

## Syntax

| Methode                                | URI-Vorlage                            |
| -------------------------------------- | -------------------------------------- |
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

- [Befehl „Switch To Window“](/de/docs/Web/WebDriver/Commands/SwitchToWindow)
- [Befehl „Get Window Handle“](/de/docs/Web/WebDriver/Commands/GetWindowHandle)
- [Befehl „Close Window“](/de/docs/Web/WebDriver/Reference/Commands/CloseWindow)
