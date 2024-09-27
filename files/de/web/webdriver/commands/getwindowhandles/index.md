---
title: Get Window Handles
slug: Web/WebDriver/Commands/GetWindowHandles
l10n:
  sourceCommit: ac24a64c0ab26d0185c7b768aca130f490ea8487
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Commands")}}

Der _Get Window Handles_ [Befehl](/de/docs/Web/WebDriver/Command) der [WebDriver](/de/docs/Web/WebDriver) API gibt eine Liste aller [`WebWindow`](/de/docs/Web/WebDriver/WebWindow)s zurück. Jeder Tab oder jedes Fenster, je nachdem, ob Sie einen tab-basierten Browser verwenden, wird durch einen _Fenstergriff_ identifiziert, der als Referenz beim [Wechseln zum Fenster](/de/docs/Web/WebDriver/Commands/SwitchToWindow) verwendet wird.

Um festzustellen, ob eine bestimmte Interaktion mit dem Browser ein neues Fenster öffnet, kann man die Menge der Fenstergriffe vor und nach der Interaktion erfassen und vergleichen.

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

- [Switch To Window](/de/docs/Web/WebDriver/Commands/SwitchToWindow) Befehl
- [Get Window Handle](/de/docs/Web/WebDriver/Commands/GetWindowHandle) Befehl
- [Close Window](/de/docs/Web/WebDriver/Commands/CloseWindow) Befehl
