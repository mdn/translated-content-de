---
title: JavaScript-Fehler
slug: Web/WebDriver/Reference/Errors/JavaScriptError
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Der **JavaScript**-Fehler ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Errors), der auftritt, wenn ein vom Benutzer bereitgestelltes Skript nicht ausgeführt werden kann.

Die zugrunde liegende Ursache des Ausführungsfehlers wird oft in der Fehlermeldung angegeben, zusammen mit einem vom JavaScript-Engine im Browser bereitgestellten Stacktrace.

## Beispiel

Betrachten Sie das folgende eingefügte Skript, das versucht, eine undefinierte Variable zu verwenden. In JavaScript führt dies normalerweise dazu, dass ein `ReferenceError` ausgelöst wird. WebDriver fängt diesen Fehler ab und serialisiert ihn als JavaScript-Fehler:

```python
from selenium import webdriver
from selenium.common import exceptions

session = webdriver.Firefox()
try:
    session.execute_script("return foo")
except exceptions.JavascriptException as e:
    print(e.message)
```

Ausgabe:

```plain
JavascriptException: ReferenceError: foo is not defined
```

## Siehe auch

- [Liste der WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Errors)
- Zugehörige Befehle:
  - [Script ausführen](/de/docs/Web/WebDriver/Reference/Commands/ExecuteScript)
  - [Asynchrones Script ausführen](/de/docs/Web/WebDriver/Reference/Commands/ExecuteAsyncScript)
