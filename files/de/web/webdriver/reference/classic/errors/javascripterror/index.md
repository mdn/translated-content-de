---
title: JavaScript-Fehler
slug: Web/WebDriver/Reference/Classic/Errors/JavaScriptError
l10n:
  sourceCommit: 225de04b84b717433ffeb3bb0cf5ceddac9653ea
---

Der **JavaScript**-Fehler ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Classic/Errors), der auftritt, wenn ein vom Benutzer bereitgestelltes Skript nicht ausgeführt werden kann.

Die zugrunde liegende Ursache des Ausführungsfehlers wird oft in der Fehlermeldung angegeben, zusammen mit einem Stack-Trace, der vom JavaScript-Engine im Browser bereitgestellt wird.

## Beispiel

Betrachten Sie das folgende eingebettete Skript, das versucht, eine nicht definierte Variable zu verwenden. In JavaScript führt dies normalerweise dazu, dass ein ReferenceError ausgelöst wird. WebDriver fängt diesen Fehler ab und serialisiert ihn als JavaScript-Fehler:

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

- [Liste der WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Classic/Errors)
- Zugehörige Befehle:
  - [Execute Script](/de/docs/Web/WebDriver/Reference/Commands/ExecuteScript)
  - [Execute Async Script](/de/docs/Web/WebDriver/Reference/Commands/ExecuteAsyncScript)
