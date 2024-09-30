---
title: acceptInsecureCerts
slug: Web/WebDriver/Capabilities/acceptInsecureCerts
l10n:
  sourceCommit: 4a6dacf8c68925a8538585be3b2728bcb271241e
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Capabilities")}}

Die **`acceptInsecureCerts`-Fähigkeit** gibt an, ob abgelaufene oder ungültige [TLS-Zertifikate](/de/docs/Glossary/TLS) beim [Navigieren](/de/docs/Web/WebDriver/Commands/NavigateTo) überprüft werden. Wenn die Fähigkeit auf false gesetzt ist, wird ein Fehler mit einem [unsicheren Zertifikat](/de/docs/Web/WebDriver/Errors/InsecureCertificate) zurückgegeben, wenn die Navigation auf Domains mit Zertifikatsproblemen trifft. Andernfalls werden selbstsignierte oder anderweitig ungültige Zertifikate vom Browser bei der Navigation implizit vertraut. Die Fähigkeit gilt für die Dauer der Sitzung.

## Beispiel

Mit der `acceptInsecureCerts`-Fähigkeit können Sie TLS-Zertifikate umgehen oder diesen implizit vertrauen, die der Zertifikatsdienst im Browser nicht vertraut:

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

- [Liste der WebDriver-Fähigkeiten](/de/docs/Web/WebDriver/Capabilities)
- Befehl [Navigate To](/de/docs/Web/WebDriver/Commands/NavigateTo)
- Befehl [New Session](/de/docs/Web/WebDriver/Commands/NewSession)
