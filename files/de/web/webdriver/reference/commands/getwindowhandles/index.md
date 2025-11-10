---
title: Fenster-Handles abrufen
slug: Web/WebDriver/Reference/Commands/GetWindowHandles
l10n:
  sourceCommit: c6cab7f1aa7dc9f3495486a5b46020db320101cf
---

Der _Fenster-Handles abrufen_ [Befehl](/de/docs/Web/WebDriver/Reference/Command) der [WebDriver](/de/docs/Web/WebDriver) API gibt eine Liste aller [`WebWindow`](/de/docs/Web/WebDriver/Reference/WebWindow)s zurück. Jeder Tab oder jedes Fenster, abhängig davon, ob Sie einen tabbed Browser verwenden, ist mit einem _Fenster-Handle_ verknüpft, das als Referenz verwendet wird, wenn Sie [zum Fenster wechseln](/de/docs/Web/WebDriver/Reference/Commands/SwitchToWindow).

Um zu bestimmen, ob eine bestimmte Interaktion mit dem Browser ein neues Fenster öffnet, kann man die Menge der Fenster-Handles vor der Interaktion abrufen und sie mit der Menge nach der Aktion vergleichen.

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

- [Befehl "Zum Fenster wechseln"](/de/docs/Web/WebDriver/Reference/Commands/SwitchToWindow)
- [Befehl "Fenster-Handle abrufen"](/de/docs/Web/WebDriver/Reference/Commands/GetWindowHandle)
- [Befehl "Fenster schließen"](/de/docs/Web/WebDriver/Reference/Commands/CloseWindow)
