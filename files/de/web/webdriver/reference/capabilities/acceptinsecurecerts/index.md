---
title: acceptInsecureCerts
slug: Web/WebDriver/Reference/Capabilities/acceptInsecureCerts
l10n:
  sourceCommit: 57b855a52a2d2e8914a30e3a47567bff0806ae23
---

Die **`acceptInsecureCerts`-Fähigkeit** gibt an, ob abgelaufene oder ungültige {{Glossary("TLS", "TLS-Zertifikate")}} geprüft werden, wenn beim [Navigieren](/de/docs/Web/WebDriver/Commands/NavigateTo) auf solche gestoßen wird. Wenn die Fähigkeit auf false gesetzt ist, wird ein Fehler für ein [ungültiges Zertifikat](/de/docs/Web/WebDriver/Reference/Errors/InsecureCertificate) zurückgegeben, sobald beim Navigieren auf Domänen mit Zertifikatsproblemen gestoßen wird. Andernfalls werden selbstsignierte oder anderweitig ungültige Zertifikate beim Navigieren vom Browser implizit als vertrauenswürdig akzeptiert. Diese Fähigkeit gilt während der gesamten Sitzung.

## Beispiel

Mit der `acceptInsecureCerts`-Fähigkeit können Sie TLS-Zertifikate, die der Zertifikatsdienst im Browser nicht vertraut, umgehen oder implizit als vertrauenswürdig akzeptieren:

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
- Befehl [Navigate To](/de/docs/Web/WebDriver/Commands/NavigateTo)
- Befehl [New Session](/de/docs/Web/WebDriver/Commands/NewSession)
