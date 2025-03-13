---
title: Fenster schließen
slug: Web/WebDriver/Reference/Commands/CloseWindow
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

Der Befehl [_Fenster schließen_](/de/docs/Web/WebDriver/Command) der [WebDriver](/de/docs/Web/WebDriver) API schließt den aktuellen obersten Browsing-Kontext (Fenster oder Tab) und gibt die Liste der derzeit geöffneten [`WebWindow`](/de/docs/Web/WebDriver/WebWindow)s zurück. Wenn es das letzte Fenster ist, das geschlossen wird, wird die WebDriver-Sitzung implizit gelöscht. Nachfolgende Befehle nach dem Ende der Sitzung führen daher zu [Ungültigen Sitzungs-ID](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)-Fehlern.

## Syntax

| Methode                                                | URI-Vorlage                    |
| ------------------------------------------------------ | ------------------------------ |
| [`DELETE`](/de/docs/Web/HTTP/Reference/Methods/DELETE) | `/session/{session id}/window` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.

### Fehler

- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.
- [Unerwarteter Alert geöffnet](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)
  - : Eine Benutzereingabeaufforderung, wie z.B. [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis sie bearbeitet wird.

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

- Befehl [Zu Fenster wechseln](/de/docs/Web/WebDriver/Commands/SwitchToWindow)
- Befehl [Fenster-Handle abrufen](/de/docs/Web/WebDriver/Commands/GetWindowHandle)
- Befehl [Fenster-Handles abrufen](/de/docs/Web/WebDriver/Reference/Commands/GetWindowHandles)
