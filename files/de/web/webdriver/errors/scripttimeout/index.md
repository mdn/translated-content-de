---
title: Skript-Timeout
slug: Web/WebDriver/Errors/ScriptTimeout
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Errors")}}

Der **Skript-Timeout**-Fehler ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Errors), der auftritt, wenn ein vom Benutzer bereitgestelltes Skript nicht abgeschlossen wurde, bevor die Timeout-Dauer der Sitzung abgelaufen ist.

Die Skript-Timeout-Dauer ist eine konfigurierbare Fähigkeit, was bedeutet, dass Sie ändern können, wie lange es dauert, bevor der Treiber ein eingefügtes Skript unterbricht. Der Treiber wartet standardmäßig 30 Sekunden, bevor er das Skript unterbricht und einen Skript-Timeout-Fehler zurückgibt. Diese Dauer kann jedoch sowohl verlängert, begrenzt als auch auf unbestimmt eingestellt werden.

Wenn die Skript-Timeout-Dauer der Sitzung durch die Verwendung eines `null`-Wertes auf unbestimmt eingestellt wird, besteht die Gefahr, die Sitzung in einen nicht wiederherstellbaren Zustand zu versetzen. Beachten Sie, dass dies mit Vorsicht verwendet werden sollte.

## Beispiel

Betrachten Sie das folgende asynchrone Skript, das das Versprechen einlösen oder den Rückruf aufrufen wird, nachdem 35 Sekunden vergangen sind:

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

Es ist jedoch möglich, den standardmäßigen Skript-Timeout der Sitzung zu _verlängern_, indem Sie Fähigkeiten nutzen, wenn Sie ein Skript haben, das voraussichtlich länger dauern wird:

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
  - [Skript ausführen](/de/docs/Web/WebDriver/Commands/ExecuteScript)
  - [Asynchrones Skript ausführen](/de/docs/Web/WebDriver/Commands/ExecuteAsyncScript)
