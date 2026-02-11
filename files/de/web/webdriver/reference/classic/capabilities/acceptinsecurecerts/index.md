---
title: acceptInsecureCerts
slug: Web/WebDriver/Reference/Classic/Capabilities/acceptInsecureCerts
l10n:
  sourceCommit: 225de04b84b717433ffeb3bb0cf5ceddac9653ea
---

Die **`acceptInsecureCerts`-Fähigkeit** kommuniziert, ob abgelaufene oder ungültige {{Glossary("TLS", "TLS-Zertifikate")}} überprüft werden, wenn beim [Navigieren](/de/docs/Web/WebDriver/Reference/Commands/NavigateTo). Wenn die Eigenschaft `false` ist, wird ein Fehler für ein [unsicheres Zertifikat](/de/docs/Web/WebDriver/Reference/Classic/Errors/InsecureCertificate) zurückgegeben, sobald beim Navigieren auf Domains mit Zertifikatproblemen gestoßen wird. Andernfalls werden selbstsignierte oder anderweitig ungültige Zertifikate vom Browser beim Navigieren implizit als vertrauenswürdig eingestuft. Die Fähigkeit hat Auswirkungen für die Lebensdauer der Sitzung.

## Beispiel

Mit der `acceptInsecureCerts`-Fähigkeit können Sie TLS-Zertifikate umgehen oder implizit vertrauen, denen der Zertifikatsdienst im Browser nicht vertraut:

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

- [Liste der WebDriver-Fähigkeiten](/de/docs/Web/WebDriver/Reference/Classic/Capabilities)
- [Navigate To](/de/docs/Web/WebDriver/Reference/Commands/NavigateTo)-Befehl
- [New Session](/de/docs/Web/WebDriver/Reference/Commands/NewSession)-Befehl
