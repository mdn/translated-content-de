---
title: Invalid session ID
slug: Web/WebDriver/Errors/InvalidSessionID
l10n:
  sourceCommit: 4a6dacf8c68925a8538585be3b2728bcb271241e
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Errors")}}

Der Fehler **invalid session ID** ist ein [WebDriver Fehler](/de/docs/Web/WebDriver/Errors), der auftritt, wenn der Server den eindeutigen Sitzungsbezeichner nicht erkennt. Dies geschieht, wenn die [Sitzung gelöscht wurde](/de/docs/Web/WebDriver/Commands/DeleteSession) oder wenn die Sitzungs-ID ungültig ist.

## Beispiel

### Explizite Sitzungs-Löschung

Eine WebDriver-Sitzung wird explizit bei Beendigung gelöscht:

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

### Implizite Sitzungs-Löschung

Die Sitzung kann auch _implizit gelöscht_ werden, wenn Sie das letzte Fenster oder den letzten Tab schließen:

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

- [Liste der WebDriver-Fehler](/de/docs/Web/WebDriver/Errors)
- [Session not created](/de/docs/Web/WebDriver/Errors/SessionNotCreated)
- Verwandte WebDriver-Befehle:

  - [New Session](/de/docs/Web/WebDriver/Commands/NewSession)
  - [Delete Session](/de/docs/Web/WebDriver/Commands/DeleteSession)
