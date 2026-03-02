---
title: JavaScript-Fehler
slug: Web/WebDriver/Reference/Errors/JavaScriptError
l10n:
  sourceCommit: 676631fd27c8096c3ae3ceb2a6b4ffd6f687055f
---

Der **JavaScript**-Fehler ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Errors), der auftritt, wenn ein vom Benutzer bereitgestelltes Skript nicht ausgeführt werden kann.

Die zugrunde liegende Ursache des Ausführungsfehlers wird oft in der Fehlermeldung angegeben, zusammen mit einem Stacktrace, der von der JavaScript-Engine im Browser bereitgestellt wird.

## Beispiel

Betrachten Sie das folgende injizierte Skript, das versucht, eine undefinierte Variable zu verwenden. In JavaScript würde dies normalerweise einen ReferenceError auslösen. WebDriver fängt diesen Fehler ab und serialisiert ihn als JavaScript-Fehler:

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
