---
title: Fenstergriffe abrufen
slug: Web/WebDriver/Reference/Commands/GetWindowHandles
l10n:
  sourceCommit: 394a1aff10d20ba51dbd00252ce481769298001c
---

Der _Fenstergriffe abrufen_ [Befehl](/de/docs/Web/WebDriver/Command) der [WebDriver](/de/docs/Web/WebDriver) API gibt eine Liste aller [`WebWindow`](/de/docs/Web/WebDriver/WebWindow)s zurück. Jedes Tab oder Fenster, je nachdem, ob Sie einen tab-basierten Browser verwenden, ist durch einen _Fenstergriff_ zugeordnet, der als Referenz verwendet wird, wenn [zum Fenster gewechselt wird](/de/docs/Web/WebDriver/Commands/SwitchToWindow).

Um festzustellen, ob eine bestimmte Interaktion mit dem Browser ein neues Fenster öffnet, kann man die Menge der Fenstergriffe vor der Interaktion abrufen und sie mit der Menge nach der Aktion vergleichen.

## Syntax

| Methode                                | URI-Vorlage                            |
| -------------------------------------- | -------------------------------------- |
| [`GET`](/de/docs/Web/HTTP/Methods/GET) | `/session/{session id}/window/handles` |

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

- [Zum Fenster wechseln](/de/docs/Web/WebDriver/Commands/SwitchToWindow) Befehl
- [Fenstergriff abrufen](/de/docs/Web/WebDriver/Commands/GetWindowHandle) Befehl
- [Fenster schließen](/de/docs/Web/WebDriver/Reference/Commands/CloseWindow) Befehl
