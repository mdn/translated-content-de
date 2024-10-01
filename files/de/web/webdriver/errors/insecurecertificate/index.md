---
title: Insecure certificate
slug: Web/WebDriver/Errors/InsecureCertificate
l10n:
  sourceCommit: 4a6dacf8c68925a8538585be3b2728bcb271241e
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Errors")}}

Der **insecure certificate**-Fehler ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Errors), der auftritt, wenn der ferngesteuerte Browser eine Zertifikatwarnung jeglicher Art erhält. Dies ist normalerweise das Ergebnis des [Navigierens](/de/docs/Web/WebDriver/Commands/NavigateTo) zu einer Website mit einem abgelaufenen oder ungültigen {{Glossary("TLS", "TLS-Zertifikat")}}. Beispiele für ungültige Zertifikate sind selbstsignierte, widerrufene und kryptographisch unsichere Zertifikate.

Webbrowser verhindern und blockieren den Datenverkehr zu Domains mit fehlerhaften Zertifikaten, da die Kommunikation mit dem Server kompromittiert wäre. Es wird dringend empfohlen, die Zertifikatsituation zu beheben, anstatt die Zertifikatsprüfungen zu deaktivieren, selbst in Testumgebungen.

WebDriver bietet jedoch die [`acceptInsecureCerts`-Fähigkeit](/de/docs/Web/WebDriver/Capabilities/acceptInsecureCerts) an, um die Zertifikatsprüfungen für die Dauer der Sitzung zu deaktivieren. Es ist jedoch wichtig zu betonen, dass die Verwendung davon dringend abzuraten ist und allgemein als Schwachstelle der Testumgebung angesehen wird.

## Beispiel

Dies passiert, wenn Sie mit dem Python-Client zu einer Domain navigieren, die ein selbstsigniertes TLS-Zertifikat verwendet:

```python
from selenium import webdriver
from selenium.common import exceptions

session = webdriver.Firefox()
try:
    session.get("https://self-signed.badssl.com/")
except exceptions.InsecureCertificateException as e:
    print("Hit insecure cert on {}".format(session.current_url))
```

Ausgabe:

```plain
Hit an insecure cert on https://self-signed.badssl.com/
```

## Siehe auch

- [Navigate To](/de/docs/Web/WebDriver/Commands/NavigateTo)-Befehl
- [Capabilities](/de/docs/Web/WebDriver/Capabilities)
- [badssl.com](https://badssl.com/)
