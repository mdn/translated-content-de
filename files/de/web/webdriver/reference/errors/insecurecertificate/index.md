---
title: Unsicheres Zertifikat
slug: Web/WebDriver/Reference/Errors/InsecureCertificate
l10n:
  sourceCommit: 57b855a52a2d2e8914a30e3a47567bff0806ae23
---

Der **unsichere Zertifikatsfehler** ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Errors), der auftritt, wenn der ferngesteuerte Browser auf eine Zertifikatswarnung jeglicher Art stößt. Dies ist normalerweise das Ergebnis des [Navigierens](/de/docs/Web/WebDriver/Commands/NavigateTo) zu einer Website mit einem abgelaufenen oder ungültigen {{Glossary("TLS", "TLS-Zertifikat")}}. Beispiele für ungültige Zertifikate sind selbst signierte, widerrufene und kryptographisch unsichere Zertifikate.

Webbrowser verhindern und blockieren den Datenverkehr zu Domänen mit ungültigen Zertifikaten, da die Kommunikation mit dem Server gefährdet wäre. Es wird dringend empfohlen, das Zertifikatsproblem zu beheben, anstatt Zertifikatsprüfungen zu deaktivieren, selbst in Testumgebungen.

WebDriver bietet eine [`acceptInsecureCerts`-Fähigkeit](/de/docs/Web/WebDriver/Reference/Capabilities/acceptInsecureCerts) zum Deaktivieren von Zertifikatsprüfungen für die Dauer der Sitzung, aber es ist wichtig zu betonen, dass die Nutzung stark abgeraten wird und allgemein als Schwachstelle der Testumgebung angesehen wird.

## Beispiel

Dies wird passieren, wenn Sie mit dem Python-Client zu einer Domäne navigieren, die ein selbst signiertes TLS-Zertifikat hat:

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
- [Capabilities](/de/docs/Web/WebDriver/Reference/Capabilities)
- [badssl.com](https://badssl.com/)
