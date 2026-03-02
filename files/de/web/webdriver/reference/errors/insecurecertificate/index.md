---
title: Unsicheres Zertifikat
slug: Web/WebDriver/Reference/Errors/InsecureCertificate
l10n:
  sourceCommit: 676631fd27c8096c3ae3ceb2a6b4ffd6f687055f
---

Der **unsichere Zertifikatfehler** ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Errors), der auftritt, wenn der ferngesteuerte Browser auf eine Zertifikatswarnung jeglicher Art stößt. Dies ist normalerweise das Ergebnis des [Navigierens](/de/docs/Web/WebDriver/Reference/Commands/NavigateTo) zu einer Website mit einem abgelaufenen oder ungültigen {{Glossary("TLS", "TLS-Zertifikat")}}. Beispiele für ungültige Zertifikate sind selbstsignierte, widerrufene und kryptographisch unsichere Zertifikate.

Webbrowser verhindern und blockieren den Datenverkehr zu Domains mit fehlerhaften Zertifikaten, da die Kommunikation mit dem Server kompromittiert wäre. Es wird dringend empfohlen, die Zertifikatsituation zu beheben, anstatt die Zertifikatprüfungen zu deaktivieren, selbst in Testumgebungen.

WebDriver bietet zwar eine [`acceptInsecureCerts`-Fähigkeit](/de/docs/Web/WebDriver/Reference/Capabilities/acceptInsecureCerts) zur Deaktivierung von Zertifikatprüfungen für die Dauer der Sitzung an, es ist jedoch wichtig zu betonen, dass die Nutzung stark abgeraten wird und allgemein als Schwäche der Testumgebung angesehen wird.

## Beispiel

Dies wird passieren, wenn zu einer Domain mit einem selbstsignierten TLS-Zertifikat unter Verwendung des Python-Clients navigiert wird:

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

- [Navigate To](/de/docs/Web/WebDriver/Reference/Commands/NavigateTo)-Befehl
- [Capabilities](/de/docs/Web/WebDriver/Reference/Capabilities)
- [badssl.com](https://badssl.com/)
