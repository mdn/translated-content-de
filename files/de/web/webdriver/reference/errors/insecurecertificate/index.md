---
title: Unsicheres Zertifikat
slug: Web/WebDriver/Reference/Errors/InsecureCertificate
l10n:
  sourceCommit: c6cab7f1aa7dc9f3495486a5b46020db320101cf
---

Der **unsichere Zertifikatsfehler** ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Errors), der auftritt, wenn der ferngesteuerte Browser auf eine Zertifikatswarnung jeglicher Art stößt. Dies ist in der Regel das Ergebnis des [Navigierens](/de/docs/Web/WebDriver/Reference/Commands/NavigateTo) zu einer Website mit einem abgelaufenen oder ungültigen {{Glossary("TLS", "TLS-Zertifikat")}}. Beispiele für ungültige Zertifikate umfassen selbstsignierte, widerrufene und kryptographisch unsichere Zertifikate.

Webbrowser verhindern und blockieren den Datenverkehr zu Domains mit fehlerhaften Zertifikaten, da die Kommunikation mit dem Server kompromittiert wäre. Es wird dringend empfohlen, die Zertifikatsproblematik zu beheben, statt die Zertifikatsprüfungen zu deaktivieren, selbst in Testumgebungen.

WebDriver bietet eine [`acceptInsecureCerts` Fähigkeit](/de/docs/Web/WebDriver/Reference/Capabilities/acceptInsecureCerts) an, um Zertifikatsprüfungen für die Dauer der Sitzung zu deaktivieren. Es ist jedoch wichtig zu betonen, dass die Verwendung dieser Funktion stark abzuraten ist und dass ihre Verwendung weithin als Schwachstelle der Testumgebung betrachtet wird.

## Beispiel

Dies passiert, wenn zu einer Domain mit einem selbstsignierten TLS-Zertifikat mit dem Python-Client navigiert wird:

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

- [Navigate To](/de/docs/Web/WebDriver/Reference/Commands/NavigateTo) Befehl
- [Fähigkeiten](/de/docs/Web/WebDriver/Reference/Capabilities)
- [badssl.com](https://badssl.com/)
