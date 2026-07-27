---
title: acceptInsecureCerts
slug: Web/WebDriver/Reference/Capabilities/acceptInsecureCerts
l10n:
  sourceCommit: fb6aa6056407ba69d96da0fe140a1ae2320f0fb2
---

Die **`acceptInsecureCerts`-Fähigkeit** gibt an, ob abgelaufene oder ungültige {{Glossary("TLS", "TLS-Zertifikate")}} überprüft werden, wenn beim [Navigieren](/de/docs/Web/WebDriver/Reference/Commands/NavigateTo) auf solche Zertifikate getroffen wird. Wenn die Fähigkeit auf false gesetzt ist, wird ein [unsicheres Zertifikat](/de/docs/Web/WebDriver/Reference/Errors/InsecureCertificate)-Fehler zurückgegeben, wenn bei der Navigation auf Domänen mit Zertifikatsproblemen gestoßen wird. Andernfalls werden selbstsignierte oder anderweitig ungültige Zertifikate bei der Navigation vom Browser implizit vertraut. Diese Fähigkeit ist für die Dauer der Sitzung wirksam.

## Beispiel

Mit der `acceptInsecureCerts`-Fähigkeit können Sie TLS-Zertifikate umgehen oder implizit vertrauen, denen der Zertifizierungsdienst im Browser nicht vertraut:

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

- [Liste der WebDriverfähigkeiten](/de/docs/Web/WebDriver/Reference/Capabilities)
- [Zurweisen zu](/de/docs/Web/WebDriver/Reference/Commands/NavigateTo) Befehl
- [Neue Sitzung](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) Befehl
