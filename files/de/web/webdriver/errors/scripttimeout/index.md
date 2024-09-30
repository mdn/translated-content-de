---
title: Script timeout
slug: Web/WebDriver/Errors/ScriptTimeout
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Errors")}}

Der **script timeout**-Fehler ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Errors), der auftritt, wenn ein vom Benutzer bereitgestelltes Skript nicht abgeschlossen wurde, bevor die script timeout-Dauer der Sitzung abgelaufen ist.

Die script timeout-Dauer ist eine konfigurierbare Fähigkeit, was bedeutet, dass Sie ändern können, wie lange es dauert, bis der Treiber ein eingefügtes Skript unterbricht. Standardmäßig wartet der Treiber 30 Sekunden, bevor er das Skript unterbricht und mit einem script timeout-Fehler zurückkehrt. Diese Dauer kann jedoch verlängert, begrenzt oder unbegrenzt festgelegt werden.

Wenn die script timeout-Dauer der Sitzung mit einem `null`-Wert auf unbegrenzte Zeit festgelegt ist, besteht das Risiko, dass die Sitzung in einen nicht mehr wiederherstellbaren Zustand versetzt wird. Seien Sie sich bewusst, dass dies mit Vorsicht verwendet werden sollte.

## Beispiel

Betrachten Sie das folgende asynchrone Skript, das das Versprechen auflösen oder den Rückruf aufrufen wird, nachdem 35 Sekunden vergangen sind:

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

Es ist jedoch möglich, die standardmäßige script timeout-Dauer der Sitzung zu _verlängern_, indem Sie Fähigkeiten verwenden, wenn Sie ein Skript haben, von dem Sie erwarten, dass es länger dauert:

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

- [Liste der WebDriver-Fehler](/de/docs/Web/WebDriver/Errors)
- Zugehörige Befehle und Typen:

  - [JavaScript-Fehler](/de/docs/Web/WebDriver/Errors/JavaScriptError)
  - [Execute Script](/de/docs/Web/WebDriver/Commands/ExecuteScript)
  - [Execute Async Script](/de/docs/Web/WebDriver/Commands/ExecuteAsyncScript)
