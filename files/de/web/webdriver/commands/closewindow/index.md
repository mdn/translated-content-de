---
title: Close Window
slug: Web/WebDriver/Commands/CloseWindow
l10n:
  sourceCommit: ac24a64c0ab26d0185c7b768aca130f490ea8487
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Commands")}}

Der Befehl _Close Window_ der [WebDriver](/de/docs/Web/WebDriver) API schließt den aktuellen Top-Level-Browsing-Kontext (Fenster oder Tab) und gibt die Liste der derzeit geöffneten [`WebWindow`](/de/docs/Web/WebDriver/WebWindow)s zurück. Wenn es das letzte Fenster ist, das geschlossen wird, wird die WebDriver-Sitzung automatisch gelöscht. Nachfolgende Befehle nach dem Ende der Sitzung verursachen daher [invalid session ID](/de/docs/Web/WebDriver/Errors/InvalidSessionID)-Fehler.

## Syntax

| Methode                                      | URI-Vorlage                    |
| -------------------------------------------- | ------------------------------ |
| [`DELETE`](/de/docs/Web/HTTP/Methods/DELETE) | `/session/{session id}/window` |

### URL-Parameter

- `session id`
  - : Kennung der Sitzung.

### Fehler

- [Invalid session ID](/de/docs/Web/WebDriver/Errors/InvalidSessionID)
  - : Die Sitzung existiert nicht.
- [Unexpected alert open](/de/docs/Web/WebDriver/Errors/UnexpectedAlertOpen)
  - : Eine Benutzeraufforderung, wie z. B. [`window.alert`](/de/docs/Web/API/Window/alert), blockiert die Ausführung des Befehls, bis sie bearbeitet wird.

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

- [Switch To Window](/de/docs/Web/WebDriver/Commands/SwitchToWindow) Befehl
- [Get Window Handle](/de/docs/Web/WebDriver/Commands/GetWindowHandle) Befehl
- [Get Window Handles](/de/docs/Web/WebDriver/Commands/GetWindowHandles) Befehl
