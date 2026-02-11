---
title: Ungültiges Argument
slug: Web/WebDriver/Reference/Classic/Errors/InvalidArgument
l10n:
  sourceCommit: 225de04b84b717433ffeb3bb0cf5ceddac9653ea
---

Der **ungültige Argument**-Fehler ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Classic/Errors), der auftritt, wenn die an einen [Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands) übergebenen Argumente entweder ungültig oder fehlerhaft sind.

Ungültige Argumentfehler können mit [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError)s in [JavaScript](/de/docs/Web/JavaScript) verglichen werden, da sie für eine Vielzahl von APIs auftreten können, wenn der Eingabewert nicht vom erwarteten Typ ist oder in irgendeiner Weise fehlerhaft ist. Siehe die Typ- und Bereichsbeschränkungen für jeden [WebDriver-Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands).

## Beispiel

Es ist zum Beispiel nicht möglich, eine Fenstergröße auf einen negativen Wert zu setzen:

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

- [Liste der WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Classic/Errors)
- [Liste der WebDriver-Befehle](/de/docs/Web/WebDriver/Reference/Classic/Commands)
