---
title: JavaScript-Fehler
slug: Web/WebDriver/Reference/Errors/JavaScriptError
l10n:
  sourceCommit: 57b855a52a2d2e8914a30e3a47567bff0806ae23
---

Der **JavaScript**-Fehler ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Errors), der auftritt, wenn ein vom Benutzer bereitgestelltes Skript nicht ausgeführt werden kann.

Die zugrunde liegende Ursache des Ausführungsfehlers wird häufig in der Fehlermeldung angegeben, zusammen mit einem Stacktrace, der von der JavaScript-Engine im Browser bereitgestellt wird.

## Beispiel

Betrachten Sie das folgende eingespritzte Skript, das versucht, eine undefinierte Variable zu verwenden. In JavaScript führt dies normalerweise dazu, dass ein `ReferenceError` geworfen wird. WebDriver fängt diesen Fehler ab und serialisiert ihn als JavaScript-Fehler:

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

  - [Execute Script](/de/docs/Web/WebDriver/Commands/ExecuteScript)
  - [Execute Async Script](/de/docs/Web/WebDriver/Commands/ExecuteAsyncScript)
