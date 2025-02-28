---
title: Fenster schließen
slug: Web/WebDriver/Reference/Commands/CloseWindow
l10n:
  sourceCommit: 57b855a52a2d2e8914a30e3a47567bff0806ae23
---

Der _Close Window_ [Befehl](/de/docs/Web/WebDriver/Command) der [WebDriver](/de/docs/Web/WebDriver) API schließt den aktuellen obersten Browsing-Kontext (Fenster oder Tab) und gibt die Liste der derzeit geöffneten [`WebWindow`](/de/docs/Web/WebDriver/WebWindow)s zurück. Wenn es das letzte Fenster ist, das geschlossen wird, wird die WebDriver-Sitzung implizit gelöscht. Nachfolgende Befehle nach Beendigung der Sitzung führen daher zu [ungültigen Sitzungs-ID](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID) Fehlern.

## Syntax

| Methode                                      | URI-Vorlage                    |
| -------------------------------------------- | ------------------------------ |
| [`DELETE`](/de/docs/Web/HTTP/Methods/DELETE) | `/session/{session id}/window` |

### URL-Parameter

- `session id`
  - : Bezeichner der Sitzung.

### Fehler

- [Ungültige Sitzungs-ID](/de/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : Sitzung existiert nicht.
- [Unerwartetes geöffnetes Dialogfeld](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)
  - : Ein Benutzerdialog, wie beispielsweise [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis er behandelt wird.

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
- [Fenster-Handle erhalten](/de/docs/Web/WebDriver/Commands/GetWindowHandle) Befehl
- [Fenster-Handles erhalten](/de/docs/Web/WebDriver/Reference/Commands/GetWindowHandles) Befehl
