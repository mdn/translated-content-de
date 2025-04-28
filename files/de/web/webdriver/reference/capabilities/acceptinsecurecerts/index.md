---
title: acceptInsecureCerts
slug: Web/WebDriver/Reference/Capabilities/acceptInsecureCerts
l10n:
  sourceCommit: c6cab7f1aa7dc9f3495486a5b46020db320101cf
---

Die **`acceptInsecureCerts`-Fähigkeit** gibt an, ob abgelaufene oder ungültige {{Glossary("TLS", "TLS-Zertifikate")}} beim [Navigieren](/de/docs/Web/WebDriver/Reference/Commands/NavigateTo) überprüft werden sollen. Wenn die Fähigkeit auf false gesetzt ist, wird ein [Insecure Certificate](/de/docs/Web/WebDriver/Reference/Errors/InsecureCertificate)-Fehler zurückgegeben, sobald bei der Navigation auf Domains mit Zertifikatsproblemen gestoßen wird. Andernfalls werden selbstsignierte oder auf andere Weise ungültige Zertifikate vom Browser bei der Navigation implizit vertraut. Die Fähigkeit wirkt während der gesamten Dauer der Sitzung.

## Beispiel

Mit der `acceptInsecureCerts`-Fähigkeit können Sie TLS-Zertifikate umgehen oder ihnen implizit vertrauen, denen der Zertifikatsdienst im Browser nicht vertraut:

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
- [Navigate To](/de/docs/Web/WebDriver/Reference/Commands/NavigateTo)-Befehl
- [New Session](/de/docs/Web/WebDriver/Reference/Commands/NewSession)-Befehl
