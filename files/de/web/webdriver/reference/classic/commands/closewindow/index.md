---
title: Fenster schließen
slug: Web/WebDriver/Reference/Classic/Commands/CloseWindow
l10n:
  sourceCommit: 225de04b84b717433ffeb3bb0cf5ceddac9653ea
---

Der _Fenster schließen_ [Befehl](/de/docs/Web/WebDriver/Reference/Command) der [WebDriver](/de/docs/Web/WebDriver) API schließt den aktuellen Top-Level-Browsing-Kontext (Fenster oder Tab) und gibt die Liste der derzeit geöffneten [`WebWindow`](/de/docs/Web/WebDriver/Reference/WebWindow)s zurück. Wenn es das letzte Fenster ist, das geschlossen wird, wird die WebDriver-Sitzung automatisch gelöscht. Nachfolgende Befehle nach dem Beenden der Sitzung führen daher zu [ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Reference/Classic/Errors/InvalidSessionID) Fehlern.

## Syntax

| Methode                                                | URI-Vorlage                    |
| ------------------------------------------------------ | ------------------------------ |
| [`DELETE`](/de/docs/Web/HTTP/Reference/Methods/DELETE) | `/session/{session id}/window` |

### URL-Parameter

- `session id`
  - : Kennung der Sitzung.

### Fehler

- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Reference/Classic/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.
- [Unerwartete Alarmmeldung geöffnet](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen)
  - : Eine Benutzereingabeaufforderung, wie etwa [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis sie behandelt wird.

## Beispiel

Python:

```python
from selenium import webdriver

session = webdriver.Firefox()
original_window = session.window_handle

new_window = session.execute_script("return window.open()")
session.switch_to.window(new_window)

session.close()
session.switch_to.window(original_window)
```

C#:

```cs
using OpenQA.Selenium.Firefox;

namespace MDNWebDriverExamples
{
    class Example
    {
        public static void Main(string[] args)
        {
            FirefoxDriver session = new FirefoxDriver();
            string original_window = session.CurrentWindowHandle;// Optional if you want to store the handle in a variable

            session.ExecuteScript("window.open()");
            session.SwitchTo().Window(session.WindowHandles[1]); // Switch to the second window

            session.Close(); // Close current window
            session.SwitchTo().Window(session.WindowHandles[0]); // Switch back to the first window
        }
    }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zum Fenster wechseln](/de/docs/Web/WebDriver/Reference/Commands/SwitchToWindow) Befehl
- [Fensterhandle abrufen](/de/docs/Web/WebDriver/Reference/Commands/GetWindowHandle) Befehl
- [Fensterhandles abrufen](/de/docs/Web/WebDriver/Reference/Classic/Commands/GetWindowHandles) Befehl
