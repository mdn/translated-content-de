---
title: Ungültiges Argument
slug: Web/WebDriver/Reference/Errors/InvalidArgument
l10n:
  sourceCommit: 676631fd27c8096c3ae3ceb2a6b4ffd6f687055f
---

Der **ungültiges Argument**-Fehler ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Errors), der auftritt, wenn die an einen [Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands) übergebenen Argumente entweder ungültig oder falsch formatiert sind.

Ungültige Argumentfehler können mit [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError)s in [JavaScript](/de/docs/Web/JavaScript) verglichen werden, da sie bei vielen APIs auftreten können, wenn der Eingabewert nicht vom erwarteten Typ ist oder auf irgendeine Weise falsch formatiert ist. Siehe die Typ- und Begrenzungsbedingungen für jeden [WebDriver-Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands).

## Beispiel

Es ist zum Beispiel nicht möglich, eine Fenstergröße auf einen negativen Wert einzustellen:

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

- [Liste der WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Errors)
- [Liste der WebDriver-Befehle](/de/docs/Web/WebDriver/Reference/Classic/Commands)
