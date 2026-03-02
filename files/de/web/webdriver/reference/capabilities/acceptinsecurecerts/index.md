---
title: acceptInsecureCerts
slug: Web/WebDriver/Reference/Capabilities/acceptInsecureCerts
l10n:
  sourceCommit: 676631fd27c8096c3ae3ceb2a6b4ffd6f687055f
---

Die **`acceptInsecureCerts`-Fähigkeit** gibt an, ob abgelaufene oder ungültige {{Glossary("TLS", "TLS-Zertifikate")}} beim [Navigieren](/de/docs/Web/WebDriver/Reference/Commands/NavigateTo) überprüft werden. Wenn die Fähigkeit auf false gesetzt ist, wird ein [unsicheres Zertifikat](/de/docs/Web/WebDriver/Reference/Errors/InsecureCertificate) Fehler angezeigt, wenn beim Navigieren Domains mit Zertifikatsproblemen aufgerufen werden. Andernfalls werden selbstsignierte oder anderweitig ungültige Zertifikate bei der Navigation vom Browser implizit vertraut. Diese Fähigkeit wirkt sich auf die gesamte Dauer der Sitzung aus.

## Beispiel

Mit der `acceptInsecureCerts`-Fähigkeit können Sie TLS-Zertifikate umgehen oder implizit vertrauen, die der Zertifikatsdienst im Browser nicht vertraut:

```python
from selenium import webdriver
from selenium.common import exceptions

session = webdriver.Firefox(capabilities={"acceptInsecureCerts": True})
session.get("https://self-signed.badssl.com/")
print(session.current_url)
```

Ausgabe:

```url
https://self-signed.badssl.com/
```

## Siehe auch

- [Liste der WebDriver-Fähigkeiten](/de/docs/Web/WebDriver/Reference/Capabilities)
- [Navigate To](/de/docs/Web/WebDriver/Reference/Commands/NavigateTo) Befehl
- [New Session](/de/docs/Web/WebDriver/Reference/Commands/NewSession) Befehl
