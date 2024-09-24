---
title: Fenster-Handles abrufen
slug: Web/WebDriver/Commands/GetWindowHandles
l10n:
  sourceCommit: ac24a64c0ab26d0185c7b768aca130f490ea8487
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Commands")}}

Der _Get Window Handles_ [Befehl](/de/docs/Web/WebDriver/Command) der [WebDriver](/de/docs/Web/WebDriver) API gibt eine Liste aller [`WebWindow`](/de/docs/Web/WebDriver/WebWindow)s zurück. Jedes Tab oder Fenster, je nachdem, ob Sie einen tabfähigen Browser verwenden, ist mit einem _Fenster-Handle_ verknüpft, das als Referenz verwendet wird, wenn Sie [zum Fenster wechseln](/de/docs/Web/WebDriver/Commands/SwitchToWindow).

Um festzustellen, ob eine bestimmte Interaktion mit dem Browser ein neues Fenster öffnet, kann man die Menge der Fenster-Handles vor der Interaktion abrufen und sie mit der Menge nach der Aktion vergleichen.

## Syntax

| Methode                                    | URI-Vorlage                            |
| ------------------------------------------ | -------------------------------------- |
| [`GET`](/de/docs/Web/HTTP/Methods/GET)  | `/session/{session id}/window/handles` |

### URL-Parameter

- `session id`
  - : Identifikator der Sitzung.

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

- [Zum Fenster wechseln](/de/docs/Web/WebDriver/Commands/SwitchToWindow) Befehl
- [Fenster-Handle abrufen](/de/docs/Web/WebDriver/Commands/GetWindowHandle) Befehl
- [Fenster schließen](/de/docs/Web/WebDriver/Commands/CloseWindow) Befehl
