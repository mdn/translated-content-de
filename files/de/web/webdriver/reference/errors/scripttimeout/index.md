---
title: Skript-Timeout
slug: Web/WebDriver/Reference/Errors/ScriptTimeout
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Der **Skript-Timeout**-Fehler ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Errors), der auftritt, wenn ein Skript, das der Benutzer bereitgestellt hat, nicht abgeschlossen wurde, bevor die Timeout-Dauer des Sitzungsskripts abgelaufen ist.

Die Timeout-Dauer des Skripts ist eine konfigurierbare Fähigkeit, was bedeutet, dass Sie ändern können, wie lange es dauert, bis der Treiber ein eingefügtes Skript unterbricht. Der Treiber wartet standardmäßig 30 Sekunden, bevor er das Skript unterbricht und mit einem Skript-Timeout-Fehler zurückkehrt, aber dies kann sowohl verlängert, begrenzt als auch auf unbestimmte Zeit eingestellt werden.

Wenn die Timeout-Dauer des Sitzungsskripts durch die Verwendung eines `null`-Werts auf unbestimmte Zeit eingestellt wird, besteht das Risiko, dass die Sitzung in einen nicht wiederherstellbaren Zustand versetzt wird. Beachten Sie, dass dies mit Vorsicht verwendet werden sollte.

## Beispiel

Betrachten Sie das folgende asynchrone Skript, das das Versprechen einlöst oder den Callback aufruft, nachdem 35 Sekunden vergangen sind:

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

Es ist jedoch möglich, den standardmäßigen Skript-Timeout der Sitzung durch die Verwendung von Fähigkeiten zu _verlängern_, wenn Sie ein Skript haben, das voraussichtlich länger dauern wird:

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
