---
title: Fenster schließen
slug: Web/WebDriver/Reference/Commands/CloseWindow
l10n:
  sourceCommit: 469f97048247e0d738897cae20c695da6f1f738d
---

Der _Fenster schließen_ [Befehl](/de/docs/Web/WebDriver/Command) der [WebDriver](/de/docs/Web/WebDriver) API schließt den aktuellen Top-Level-Browsing-Kontext (Fenster oder Tab) und gibt die Liste der derzeit offenen [`WebWindow`](/de/docs/Web/WebDriver/WebWindow) zurück. Wenn es das letzte Fenster ist, das geschlossen wird, wird die WebDriver-Sitzung implizit beendet. Nachfolgende Befehle nach dem Ende der Sitzung führen daher zu [ungültigen Sitzungs-ID](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID) Fehlern.

## Syntax

| Methode                                                | URI-Vorlage                    |
| ------------------------------------------------------ | ------------------------------ |
| [`DELETE`](/de/docs/Web/HTTP/Reference/Methods/DELETE) | `/session/{session id}/window` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.

### Fehler

- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Die Sitzung existiert nicht.
- [Unerwartetes geöffnetes Alert](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)
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

- [Zu Fenster wechseln](/de/docs/Web/WebDriver/Commands/SwitchToWindow) Befehl
- [Fenstergriff erhalten](/de/docs/Web/WebDriver/Commands/GetWindowHandle) Befehl
- [Fenstergriffe erhalten](/de/docs/Web/WebDriver/Reference/Commands/GetWindowHandles) Befehl
