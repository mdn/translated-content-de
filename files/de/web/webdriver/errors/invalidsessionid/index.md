---
title: Ungültige Sitzungs-ID
slug: Web/WebDriver/Errors/InvalidSessionID
l10n:
  sourceCommit: 4a6dacf8c68925a8538585be3b2728bcb271241e
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Errors")}}

Der **ungültige Sitzungs-ID**-Fehler ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Errors), der auftritt, wenn der Server die eindeutige Sitzungskennung nicht erkennt. Dies passiert, wenn die [Sitzung gelöscht wurde](/de/docs/Web/WebDriver/Commands/DeleteSession) oder wenn die Sitzungs-ID ungültig ist.

## Beispiel

### Explizites Löschen der Sitzung

Eine WebDriver-Sitzung wird explizit gelöscht, wenn sie beendet wird:

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
- [Session nicht erstellt](/de/docs/Web/WebDriver/Errors/SessionNotCreated)
- Verwandte WebDriver-Befehle:

  - [Neue Sitzung](/de/docs/Web/WebDriver/Commands/NewSession)
  - [Sitzung löschen](/de/docs/Web/WebDriver/Commands/DeleteSession)
