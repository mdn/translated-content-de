---
title: "`script timeout` Fehlercode"
short-title: script timeout
slug: Web/WebDriver/Reference/Errors/ScriptTimeout
l10n:
  sourceCommit: 421a9c26127cf11e33e72184b14656c9d406294d
---

Der **script timeout** Fehler ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Errors), der auftritt, wenn ein vom Benutzer bereitgestelltes Skript vor Ablauf der Script-Timeout-Dauer der Sitzung nicht abgeschlossen wurde.

Die Script-Timeout-Dauer ist eine konfigurierbare Fähigkeit, was bedeutet, dass Sie ändern können, wie lange es dauert, bis der Treiber ein eingebettetes Skript unterbricht. Standardmäßig wartet der Treiber 30 Sekunden, bevor er das Skript unterbricht und mit einem Script-Timeout-Fehler zurückkehrt, aber dies kann sowohl verlängert, begrenzt als auch auf unbestimmte Zeit eingestellt werden.

Wenn die Script-Timeout-Dauer der Sitzung auf unbestimmte Zeit mittels eines `null` Werts eingestellt wird, besteht das Risiko, die Sitzung in einen nicht wiederherstellbaren Zustand zu versetzen. Beachten Sie, dass dies mit Vorsicht verwendet werden sollte.

## Beispiel

Betrachten Sie das folgende asynchrone Skript, das das Versprechen auflöst oder den Callback aufruft, nachdem 35 Sekunden vergangen sind:

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

Es ist jedoch möglich, die standardmäßige Script-Timeout-Dauer der Sitzung mithilfe von Fähigkeiten zu _verlängern_, wenn Sie ein Skript haben, von dem Sie erwarten, dass es länger dauert:

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
