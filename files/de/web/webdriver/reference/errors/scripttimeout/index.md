---
title: Script-Timeout
slug: Web/WebDriver/Reference/Errors/ScriptTimeout
l10n:
  sourceCommit: c6cab7f1aa7dc9f3495486a5b46020db320101cf
---

Der **Script-Timeout**-Fehler ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Errors), der auftritt, wenn ein vom Benutzer bereitgestelltes Script nicht abgeschlossen wurde, bevor die Script-Timeout-Dauer der Sitzung abgelaufen ist.

Die Script-Timeout-Dauer ist eine konfigurierbare Fähigkeit, was bedeutet, dass Sie ändern können, wie lange es dauert, bis der Treiber ein eingefügtes Script unterbricht. Standardmäßig wartet der Treiber 30 Sekunden, bevor er das Script unterbricht und mit einem Script-Timeout-Fehler zurückkehrt. Diese Dauer kann jedoch sowohl verlängert, begrenzt als auch auf unbestimmte Zeit eingestellt werden.

Wenn die Script-Timeout-Dauer der Sitzung durch Verwendung eines `null`-Werts auf unbestimmte Zeit gesetzt wird, besteht die Gefahr, dass die Sitzung in einen nicht wiederherstellbaren Zustand versetzt wird. Seien Sie sich bewusst, dass dies mit Vorsicht verwendet werden sollte.

## Beispiel

Betrachten Sie das folgende asynchrone Script, das das Versprechen einlöst oder den Rückruf aufruft, nachdem 35 Sekunden vergangen sind:

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

Es ist jedoch möglich, die standardmäßige Script-Timeout-Dauer der Sitzung mithilfe von Fähigkeiten zu _verlängern_, wenn Sie ein Script haben, von dem Sie erwarten, dass es länger dauert:

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
  - [Script ausführen](/de/docs/Web/WebDriver/Reference/Commands/ExecuteScript)
  - [Asynchrones Script ausführen](/de/docs/Web/WebDriver/Reference/Commands/ExecuteAsyncScript)
