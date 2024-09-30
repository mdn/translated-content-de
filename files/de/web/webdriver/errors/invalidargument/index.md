---
title: Invalid argument
slug: Web/WebDriver/Errors/InvalidArgument
l10n:
  sourceCommit: ac24a64c0ab26d0185c7b768aca130f490ea8487
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Errors")}}

Der **Invalid Argument**-Fehler ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Errors), der auftritt, wenn die an einen [Befehl](/de/docs/Web/WebDriver/Commands) übergebenen Argumente entweder ungültig oder fehlerhaft formatiert sind.

Ungültige Argumentfehler können mit [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError)s in [JavaScript](/de/docs/Web/JavaScript) verglichen werden, da sie bei vielen APIs auftreten können, wenn der Eingabewert nicht vom erwarteten Typ ist oder in irgendeiner Weise fehlerhaft formatiert ist. Siehe die Typ- und Bereichseinschränkungen für jeden [WebDriver-Befehl](/de/docs/Web/WebDriver/Commands).

## Beispiel

Es ist beispielsweise nicht möglich, eine Fenstergröße auf einen negativen Wert einzustellen:

```python
from selenium import webdriver
from selenium.common import exceptions

session = webdriver.Firefox()
try:
    session.set_window_size(-100, 0)
except exceptions.InvalidArgumentException as e:
    print(e.message)
```

Ausgabe:

```plain
InvalidArgumentException: Expected -100 to be >= 0
```

## Siehe auch

- [Liste der WebDriver-Fehler](/de/docs/Web/WebDriver/Errors)
- [Liste der WebDriver-Befehle](/de/docs/Web/WebDriver/Commands)
