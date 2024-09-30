---
title: JavaScript-Fehler
slug: Web/WebDriver/Errors/JavaScriptError
l10n:
  sourceCommit: 4a6dacf8c68925a8538585be3b2728bcb271241e
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Errors")}}

Der **JavaScript-Fehler** ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Errors), der auftritt, wenn ein vom Benutzer bereitgestelltes Skript nicht ausgeführt werden kann.

Die zugrunde liegende Ursache des Ausführungsfehlers wird häufig in der Fehlermeldung angegeben, zusammen mit einem Stacktrace, der von der JavaScript-Engine im Browser bereitgestellt wird.

## Beispiel

Betrachten Sie das folgende eingebettete Skript, das versucht, eine undefinierte Variable zu verwenden. In JavaScript führt dies normalerweise dazu, dass ein `ReferenceError` ausgelöst wird. WebDriver fängt diesen Fehler ab und serialisiert ihn als JavaScript-Fehler:

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

- [Liste der WebDriver-Fehler](/de/docs/Web/WebDriver/Errors)
- Zugehörige Befehle:

  - [Execute Script](/de/docs/Web/WebDriver/Commands/ExecuteScript)
  - [Execute Async Script](/de/docs/Web/WebDriver/Commands/ExecuteAsyncScript)
