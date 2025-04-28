---
title: Fenster schließen
slug: Web/WebDriver/Reference/Commands/CloseWindow
l10n:
  sourceCommit: c6cab7f1aa7dc9f3495486a5b46020db320101cf
---

Der _Fenster schließen_ [Befehl](/de/docs/Web/WebDriver/Reference/Command) der [WebDriver](/de/docs/Web/WebDriver) API schließt den aktuellen obersten Browsing-Kontext (Fenster oder Tab) und gibt die Liste der aktuell geöffneten [`WebWindow`](/de/docs/Web/WebDriver/Reference/WebWindow)s zurück. Wenn es das letzte Fenster ist, das geschlossen wird, wird die WebDriver-Sitzung implizit gelöscht. Nachfolgende Befehle nach dem Ende der Sitzung werden daher [ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)-Fehler verursachen.

## Syntax

| Methode                                                | URI Vorlage                    |
| ------------------------------------------------------ | ------------------------------ |
| [`DELETE`](/de/docs/Web/HTTP/Reference/Methods/DELETE) | `/session/{session id}/window` |

### URL-Parameter

- `session id`
  - : Kennung der Sitzung.

### Fehler

- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.
- [Unerwartet geöffneter Alarm](/de/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen)
  - : Eine Benutzeraufforderung, wie z.B. [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis sie behandelt wird.

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

- [Zu Fenster wechseln](/de/docs/Web/WebDriver/Reference/Commands/SwitchToWindow) Befehl
- [Fenster-Handle holen](/de/docs/Web/WebDriver/Reference/Commands/GetWindowHandle) Befehl
- [Fenster-Handles holen](/de/docs/Web/WebDriver/Reference/Commands/GetWindowHandles) Befehl
