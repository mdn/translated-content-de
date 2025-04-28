---
title: JavaScript-Fehler
slug: Web/WebDriver/Reference/Errors/JavaScriptError
l10n:
  sourceCommit: c6cab7f1aa7dc9f3495486a5b46020db320101cf
---

Der **JavaScript**-Fehler ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Errors), der auftritt, wenn ein vom Benutzer bereitgestelltes Skript nicht ausgeführt werden kann.

Die zugrunde liegende Ursache des Ausführungsfehlers wird häufig in der Fehlermeldung angegeben, zusammen mit einem vom JavaScript-Engine im Browser bereitgestellten Stacktrace.

## Beispiel

Betrachten Sie das folgende eingefügte Skript, das versucht, eine undefinierte Variable zu verwenden. In JavaScript führt dies normalerweise dazu, dass ein ReferenceError ausgelöst wird. WebDriver fängt diesen Fehler ab und serialisiert ihn als JavaScript-Fehler:

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

  - [Execute Script](/de/docs/Web/WebDriver/Reference/Commands/ExecuteScript)
  - [Execute Async Script](/de/docs/Web/WebDriver/Reference/Commands/ExecuteAsyncScript)
