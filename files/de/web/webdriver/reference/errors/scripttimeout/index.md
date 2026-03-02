---
title: Skript-Timeout
slug: Web/WebDriver/Reference/Errors/ScriptTimeout
l10n:
  sourceCommit: 676631fd27c8096c3ae3ceb2a6b4ffd6f687055f
---

Der **Skript-Timeout**-Fehler ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Errors), der auftritt, wenn ein vom Benutzer bereitgestelltes Skript nicht abgeschlossen wurde, bevor die Skript-Timeout-Dauer der Sitzung abgelaufen ist.

Die Skript-Timeout-Dauer ist eine konfigurierbare Fähigkeit, was bedeutet, dass Sie ändern können, wie lange es dauert, bevor der Treiber ein eingefügtes Skript unterbricht. Der Treiber wartet standardmäßig 30 Sekunden, bevor er das Skript unterbricht und mit einem Skript-Timeout-Fehler zurückkehrt. Diese Dauer kann jedoch sowohl verlängert, verkürzt als auch auf unbestimmte Zeit eingestellt werden.

Wenn die Skript-Timeout-Dauer der Sitzung durch Verwendung eines `null`-Wertes auf unbestimmte Zeit eingestellt ist, besteht das Risiko, die Sitzung in einen nicht wiederherstellbaren Zustand zu versetzen. Seien Sie sich bewusst, dass dies mit Vorsicht verwendet werden sollte.

## Beispiel

Betrachten Sie das folgende asynchrone Skript, das das Versprechen nach 35 Sekunden erfüllt oder den Callback aufruft:

```python
from selenium import webdriver
from selenium.common import exceptions

session = webdriver.Firefox()
try:
    session.execute_script("""
        let [resolve] = arguments;
        setTimeout(resolve, 35000);
        """)
except exceptions.ScriptTimeoutException as e:
    print(e.message)
```

Ausgabe:

```plain
ScriptTimeoutException: Timed out after 35000 ms
```

Es ist jedoch möglich, den Standardskript-Timeout der Sitzung zu _verlängern_, indem Sie Fähigkeiten verwenden, wenn Sie ein Skript haben, das voraussichtlich länger dauern wird:

```python
from selenium import webdriver
from selenium.common import exceptions

session = webdriver.Firefox(capabilities={"alwaysMatch": {"timeouts": {"script": 150000}}})
session.execute_script("""
    let [resolve] = arguments;
    setTimeout(resolve, 35000);
    """)
print("finished successfully")
```

Ausgabe:

```plain
finished successfully
```

## Siehe auch

- [Liste der WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Errors)
- Zugehörige Befehle und Typen:
  - [JavaScript-Fehler](/de/docs/Web/WebDriver/Reference/Errors/JavaScriptError)
  - [Skript ausführen](/de/docs/Web/WebDriver/Reference/Commands/ExecuteScript)
  - [Asynchrones Skript ausführen](/de/docs/Web/WebDriver/Reference/Commands/ExecuteAsyncScript)
