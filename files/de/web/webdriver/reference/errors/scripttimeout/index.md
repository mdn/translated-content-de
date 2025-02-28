---
title: Script-Timeout
slug: Web/WebDriver/Reference/Errors/ScriptTimeout
l10n:
  sourceCommit: 57b855a52a2d2e8914a30e3a47567bff0806ae23
---

Der **Script-Timeout**-Fehler ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Errors), der auftritt, wenn ein vom Benutzer bereitgestelltes Skript nicht abgeschlossen wurde, bevor die Sitzungs-Script-Timeout-Dauer abgelaufen ist.

Die Script-Timeout-Dauer ist eine konfigurierbare Fähigkeit, was bedeutet, dass Sie ändern können, wie lange es dauert, bevor der Treiber ein eingefügtes Skript unterbricht. Der Treiber wartet standardmäßig 30 Sekunden, bevor er das Skript unterbricht und mit einem Script-Timeout-Fehler zurückkehrt. Diese Zeitspanne kann jedoch sowohl verlängert als auch begrenzt oder auf unbestimmt gesetzt werden.

Wenn die Sitzungs-Script-Timeout-Dauer durch die Verwendung eines `null`-Werts auf unbestimmt gesetzt wird, besteht die Gefahr, dass die Sitzung in einen nicht wiederherstellbaren Zustand versetzt wird. Beachten Sie, dass dies mit Vorsicht verwendet werden sollte.

## Beispiel

Betrachten Sie das folgende asynchrone Skript, das das Versprechen auflösen oder den Rückruf nach 35 Sekunden aufrufen wird:

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

Es ist jedoch möglich, den standardmäßigen Script-Timeout der Sitzung durch die Verwendung von Fähigkeiten zu _verlängern_, wenn Sie ein Skript haben, von dem Sie erwarten, dass es länger dauert:

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
  - [Execute Script](/de/docs/Web/WebDriver/Commands/ExecuteScript)
  - [Execute Async Script](/de/docs/Web/WebDriver/Commands/ExecuteAsyncScript)
