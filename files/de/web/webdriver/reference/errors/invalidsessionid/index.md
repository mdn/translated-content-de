---
title: "`invalid session id` Fehlercode"
short-title: invalid session id
slug: Web/WebDriver/Reference/Errors/InvalidSessionID
l10n:
  sourceCommit: 421a9c26127cf11e33e72184b14656c9d406294d
---

Der **invalid session ID**-Fehler ist ein [WebDriver Fehler](/de/docs/Web/WebDriver/Reference/Errors), der auftritt, wenn der Server den eindeutigen Sitzungsbezeichner nicht erkennt. Dies passiert, wenn die [Sitzung gelöscht wurde](/de/docs/Web/WebDriver/Reference/Commands/DeleteSession) oder wenn die Sitzungs-ID ungültig ist.

## Beispiel

### Explizites Löschen der Sitzung

Eine WebDriver-Sitzung wird beim Beenden explizit gelöscht:

```python
from selenium import webdriver
from selenium.common import exceptions

session = webdriver.Firefox()
print("Current session is {}".format(session.session_id))
session.quit()

try:
    session.get("https://mozilla.org")
except exceptions.InvalidSessionIdException as e:
    print(e.message)
```

Ausgabe:

```plain
Current session is 46197c16-8373-469b-bc56-4c4d9e4132b4
No active session with ID 46197c16-8373-469b-bc56-4c4d9e4132b4
```

### Implizites Löschen der Sitzung

Die Sitzung kann auch _implizit gelöscht_ werden, wenn Sie das letzte Fenster oder Tab schließen:

```python
from selenium import webdriver
from selenium.common import exceptions

session = webdriver.Firefox()
print("Current session is {}".format(session.session_id))

# closes current window/tab
session.close()

try:
    session.get("https://mozilla.org")
except exceptions.InvalidSessionIdException as e:
    print(e.message)
```

Ausgabe:

```plain
Current session is 46197c16-8373-469b-bc56-4c4d9e4132b4
No active session with ID 46197c16-8373-469b-bc56-4c4d9e4132b4
```

## Siehe auch

- [Liste der WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Errors)
- [Sitzung nicht erstellt](/de/docs/Web/WebDriver/Reference/Errors/SessionNotCreated)
- Verwandte WebDriver-Befehle:
  - [Neue Sitzung](/de/docs/Web/WebDriver/Reference/Commands/NewSession)
  - [Sitzung löschen](/de/docs/Web/WebDriver/Reference/Commands/DeleteSession)
