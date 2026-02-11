---
title: Unsicheres Zertifikat
slug: Web/WebDriver/Reference/Classic/Errors/InsecureCertificate
l10n:
  sourceCommit: 225de04b84b717433ffeb3bb0cf5ceddac9653ea
---

Der **unsicheres Zertifikat**-Fehler ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Classic/Errors), der auftritt, wenn der ferngesteuerte Browser auf eine Zertifikatswarnung jeglicher Art stößt. Dies ist normalerweise das Ergebnis des [Navigierens](/de/docs/Web/WebDriver/Reference/Commands/NavigateTo) zu einer Website mit einem abgelaufenen oder ungültigen {{Glossary("TLS", "TLS-Zertifikat")}}. Beispiele für ungültige Zertifikate sind selbstsignierte, widerrufene und kryptografisch unsichere Zertifikate.

Webbrowser verhindern und blockieren den Datenverkehr zu Domains mit fehlerhaften Zertifikaten, da die Kommunikation mit dem Server kompromittiert wäre. Es wird dringend empfohlen, die Zertifikatsituation zu beheben, anstatt Zertifikatsprüfungen zu deaktivieren, selbst in Testumgebungen.

Der WebDriver bietet zwar eine [`acceptInsecureCerts` Fähigkeit](/de/docs/Web/WebDriver/Reference/Classic/Capabilities/acceptInsecureCerts) an, um Zertifikatsprüfungen für die Dauer der Sitzung zu deaktivieren, aber es ist wichtig zu betonen, dass die Verwendung stark abgeraten wird und es allgemein als Schwachstelle der Testumgebung angesehen wird, wenn sie verwendet wird.

## Beispiel

Dies wird passieren, wenn man mit dem Python-Client zu einer Domain navigiert, die ein selbstsigniertes TLS-Zertifikat hat:

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

- [Befehl „Navigate To“](/de/docs/Web/WebDriver/Reference/Commands/NavigateTo)
- [Fähigkeiten](/de/docs/Web/WebDriver/Reference/Classic/Capabilities)
- [badssl.com](https://badssl.com/)
