---
title: "`insecure certificate` Fehlercode"
short-title: unsicheres Zertifikat
slug: Web/WebDriver/Reference/Errors/InsecureCertificate
l10n:
  sourceCommit: 421a9c26127cf11e33e72184b14656c9d406294d
---

Der **unsichere Zertifikat**-Fehler ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Errors), der auftritt, wenn der ferngesteuerte Browser auf eine Zertifikatswarnung jeglicher Art stößt. Dies ist normalerweise das Ergebnis des [Navigierens](/de/docs/Web/WebDriver/Reference/Commands/NavigateTo) zu einer Website mit einem abgelaufenen oder ungültigen {{Glossary("TLS", "TLS-Zertifikat")}}. Beispiele für ungültige Zertifikate umfassen selbstsignierte, widerrufene und kryptographisch unsichere Zertifikate.

Webbrowser verhindern und blockieren den Datenverkehr zu Domains mit fehlerhaften Zertifikaten, da die Kommunikation mit dem Server kompromittiert wäre. Es wird dringend empfohlen, die Zertifikatssituation zu beheben, anstatt Zertifikatsprüfungen zu deaktivieren, selbst in Testumgebungen.

WebDriver bietet eine [`acceptInsecureCerts` Fähigkeit](/de/docs/Web/WebDriver/Reference/Capabilities/acceptInsecureCerts) zum Deaktivieren von Zertifikatsprüfungen für die Dauer der Sitzung, aber es ist wichtig zu betonen, dass die Nutzung stark abgeraten wird und weithin als Schwäche der Testumgebung angesehen wird.

## Beispiel

Folgendes passiert beim Navigieren zu einer Domain, die ein selbstsigniertes TLS-Zertifikat verwendet, mit dem Python-Client:

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

- [Befehl "Navigate To"](/de/docs/Web/WebDriver/Reference/Commands/NavigateTo)
- [Fähigkeiten](/de/docs/Web/WebDriver/Reference/Capabilities)
- [badssl.com](https://badssl.com/)
