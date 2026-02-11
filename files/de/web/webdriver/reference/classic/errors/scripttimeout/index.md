---
title: Skript-Timeout
slug: Web/WebDriver/Reference/Classic/Errors/ScriptTimeout
l10n:
  sourceCommit: 225de04b84b717433ffeb3bb0cf5ceddac9653ea
---

Der **Skript-Timeout**-Fehler ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Classic/Errors), der auftritt, wenn ein vom Benutzer bereitgestelltes Skript nicht abgeschlossen wurde, bevor die Timeout-Dauer der Sitzung abgelaufen ist.

Die Timeout-Dauer für Skripte ist eine konfigurierbare Eigenschaft, was bedeutet, dass Sie ändern können, wie lange es dauert, bis der Treiber ein eingefügtes Skript unterbricht. Standardmäßig wartet der Treiber 30 Sekunden, bevor er das Skript unterbricht und mit einem Skript-Timeout-Fehler antwortet, aber dies kann verlängert, begrenzt und auf unbestimmt festgelegt werden.

Wenn die Timeout-Dauer der Sitzung durch die Verwendung eines `null`-Werts auf unbestimmt festgelegt wird, besteht die Gefahr, dass die Sitzung in einen nicht wiederherstellbaren Zustand versetzt wird. Seien Sie sich bewusst, dass dies mit Vorsicht verwendet werden sollte.

## Beispiel

Betrachten Sie das folgende asynchrone Skript, das das Versprechen auflöst oder den Rückruf aufruft, nachdem 35 Sekunden vergangen sind:

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

Es ist jedoch möglich, den Standard-Skript-Timeout der Sitzung durch die Verwendung von Eigenschaften zu _verlängern_, wenn Sie ein Skript erwarten, das länger dauert:

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

- [Liste der WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Classic/Errors)
- Zugehörige Befehle und Typen:
  - [JavaScript-Fehler](/de/docs/Web/WebDriver/Reference/Classic/Errors/JavaScriptError)
  - [Skript ausführen](/de/docs/Web/WebDriver/Reference/Commands/ExecuteScript)
  - [Asynchrones Skript ausführen](/de/docs/Web/WebDriver/Reference/Commands/ExecuteAsyncScript)
