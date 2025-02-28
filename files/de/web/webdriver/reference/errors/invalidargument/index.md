---
title: Ungültiges Argument
slug: Web/WebDriver/Reference/Errors/InvalidArgument
l10n:
  sourceCommit: 57b855a52a2d2e8914a30e3a47567bff0806ae23
---

Der **ungültige Argument**-Fehler ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Errors), der auftritt, wenn die an einen [Befehl](/de/docs/Web/WebDriver/Reference/Commands) übergebenen Argumente entweder ungültig oder fehlerhaft sind.

Ungültige Argumentfehler können mit [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError) in [JavaScript](/de/docs/Web/JavaScript) verglichen werden, da sie bei sehr vielen APIs auftreten können, wenn der Eingabewert nicht vom erwarteten Typ ist oder in irgendeiner Weise fehlerhaft ist. Siehe die Typ- und Bereichsbeschränkungen für jeden [WebDriver-Befehl](/de/docs/Web/WebDriver/Reference/Commands).

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

- [Liste der WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Errors)
- [Liste der WebDriver-Befehle](/de/docs/Web/WebDriver/Reference/Commands)
