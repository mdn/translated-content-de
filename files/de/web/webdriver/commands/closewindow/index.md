---
title: Fenster schließen
slug: Web/WebDriver/Commands/CloseWindow
l10n:
  sourceCommit: ac24a64c0ab26d0185c7b768aca130f490ea8487
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Commands")}}

Der _Fenster schließen_ [Befehl](/de/docs/Web/WebDriver/Command) der [WebDriver](/de/docs/Web/WebDriver) API schließt den aktuellen obersten Browsing-Kontext (Fenster oder Tab) und gibt die Liste der derzeit geöffneten [`WebWindow`](/de/docs/Web/WebDriver/WebWindow)s zurück. Wenn es das letzte zu schließende Fenster ist, wird die WebDriver-Sitzung implizit gelöscht. Nachfolgende Befehle, nachdem die Sitzung beendet wurde, verursachen daher [invalid session ID](/de/docs/Web/WebDriver/Errors/InvalidSessionID) Fehler.

## Syntax

| Methode                                         | URI-Vorlage                    |
| ----------------------------------------------- | ------------------------------ |
| [`DELETE`](/de/docs/Web/HTTP/Methods/DELETE) | `/session/{session id}/window` |

### URL-Parameter

- `session id`
  - : Kennung der Sitzung.

### Fehler

- [Invalid session ID](/de/docs/Web/WebDriver/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.
- [Unexpected alert open](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)
  - : Eine Benutzereingabeaufforderung, wie z.B. [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis sie behandelt wird.

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

```cpp
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

- [Zu Fenster wechseln](/de/docs/Web/WebDriver/Commands/SwitchToWindow) Befehl
- [Fenstergriff abrufen](/de/docs/Web/WebDriver/Commands/GetWindowHandle) Befehl
- [Fenstergriffe abrufen](/de/docs/Web/WebDriver/Commands/GetWindowHandles) Befehl
