---
title: Abrufen von Fenster-Handles
slug: Web/WebDriver/Reference/Classic/Commands/GetWindowHandles
l10n:
  sourceCommit: 225de04b84b717433ffeb3bb0cf5ceddac9653ea
---

Der _Get Window Handles_ [Befehl](/de/docs/Web/WebDriver/Reference/Command) der [WebDriver](/de/docs/Web/WebDriver) API liefert eine Liste aller [`WebWindow`](/de/docs/Web/WebDriver/Reference/WebWindow)s. Jedes Tab oder Fenster, je nachdem ob Sie einen Tab-basierten Browser verwenden, wird über ein _Fenster-Handle_ zugeordnet, das als Referenz beim [Wechseln zum Fenster](/de/docs/Web/WebDriver/Reference/Commands/SwitchToWindow) verwendet wird.

Um festzustellen, ob eine bestimmte Interaktion mit dem Browser ein neues Fenster öffnet, kann man die Menge der Fenster-Handles vor der Interaktion abrufen und mit der Menge nach der Aktion vergleichen.

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

- [Switch To Window](/de/docs/Web/WebDriver/Reference/Commands/SwitchToWindow) Befehl
- [Get Window Handle](/de/docs/Web/WebDriver/Reference/Commands/GetWindowHandle) Befehl
- [Close Window](/de/docs/Web/WebDriver/Reference/Classic/Commands/CloseWindow) Befehl
