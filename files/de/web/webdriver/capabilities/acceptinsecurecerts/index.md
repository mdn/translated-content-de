---
title: acceptInsecureCerts
slug: Web/WebDriver/Capabilities/acceptInsecureCerts
l10n:
  sourceCommit: 4a6dacf8c68925a8538585be3b2728bcb271241e
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Capabilities")}}

Die **`acceptInsecureCerts`-Eigenschaft** gibt an, ob abgelaufene oder ungültige [TLS-Zertifikate](/de/docs/Glossary/TLS) beim [Navigieren](/de/docs/Web/WebDriver/Commands/NavigateTo) überprüft werden. Wenn die Eigenschaft auf false gesetzt ist, wird ein Fehler bezüglich eines [unsicheren Zertifikats](/de/docs/Web/WebDriver/Errors/InsecureCertificate) zurückgegeben, wenn bei der Navigation auf Domänen mit Zertifikatsproblemen gestoßen wird. Andernfalls werden selbstsignierte oder anderweitig ungültige Zertifikate bei der Navigation vom Browser implizit vertraut. Die Eigenschaft hat Auswirkungen für die gesamte Lebensdauer der Sitzung.

## Beispiel

Mit der `acceptInsecureCerts`-Eigenschaft können Sie TLS-Zertifikate umgehen oder diesen implizit vertrauen, wenn der Zertifikatsservice im Browser ihnen nicht vertraut:

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

- [Liste der WebDriver-Eigenschaften](/de/docs/Web/WebDriver/Capabilities)
- Befehl [Navigate To](/de/docs/Web/WebDriver/Commands/NavigateTo)
- Befehl [New Session](/de/docs/Web/WebDriver/Commands/NewSession)
