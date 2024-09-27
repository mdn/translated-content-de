---
title: Script-Timeout
slug: Web/WebDriver/Errors/ScriptTimeout
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Errors")}}

Der **Script-Timeout**-Fehler ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Errors), der auftritt, wenn ein vom Benutzer bereitgestelltes Script nicht abgeschlossen wurde, bevor die Script-Timeout-Dauer der Sitzung abgelaufen ist.

Die Script-Timeout-Dauer ist eine konfigurierbare Fähigkeit, was bedeutet, dass Sie ändern können, wie lange es dauert, bis der Treiber ein eingefügtes Script unterbricht. Der Treiber wartet standardmäßig 30 Sekunden, bevor er das Script unterbricht und mit einem Script-Timeout-Fehler zurückkehrt. Diese Dauer kann jedoch sowohl verlängert, verkürzt als auch auf unbestimmt gesetzt werden.

Wenn die Script-Timeout-Dauer der Sitzung durch Verwendung eines `null`-Werts auf unbestimmt gesetzt wird, besteht das Risiko, dass die Sitzung in einen nicht wiederherstellbaren Zustand versetzt wird. Seien Sie sich bewusst, dass dies mit Vorsicht angewendet werden sollte.

## Beispiel

Betrachten Sie das folgende asynchrone Script, das das Versprechen auflösen oder den Callback aufrufen wird, nachdem 35 Sekunden vergangen sind:

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

Es ist jedoch möglich, das standardmäßige Script-Timeout der Sitzung durch die Verwendung von Fähigkeiten _zu verlängern_, wenn Sie ein Script haben, von dem Sie erwarten, dass es länger dauert:

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
