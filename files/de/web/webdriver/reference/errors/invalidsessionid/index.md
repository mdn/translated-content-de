---
title: Ungültige Sitzungs-ID
slug: Web/WebDriver/Reference/Errors/InvalidSessionID
l10n:
  sourceCommit: 57b855a52a2d2e8914a30e3a47567bff0806ae23
---

Der Fehler **ungültige Sitzungs-ID** ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Errors), der auftritt, wenn der Server den eindeutigen Sitzungsbezeichner nicht erkennt. Dies passiert, wenn die [Sitzung gelöscht wurde](/de/docs/Web/WebDriver/Commands/DeleteSession) oder wenn die Sitzungs-ID ungültig ist.

## Beispiel

### Explizite Sitzungslöschung

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

### Implizite Sitzungslöschung

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
- [Sitzung nicht erstellt](/de/docs/Web/WebDriver/Errors/SessionNotCreated)
- Verwandte WebDriver-Befehle:

  - [Neue Sitzung](/de/docs/Web/WebDriver/Commands/NewSession)
  - [Sitzung löschen](/de/docs/Web/WebDriver/Commands/DeleteSession)
