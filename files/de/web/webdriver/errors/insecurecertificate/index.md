---
title: Unsicheres Zertifikat
slug: Web/WebDriver/Errors/InsecureCertificate
l10n:
  sourceCommit: 4a6dacf8c68925a8538585be3b2728bcb271241e
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Errors")}}

Der Fehler **unsicheres Zertifikat** ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Errors), der auftritt, wenn der ferngesteuerte Browser auf eine Zertifikatswarnung jeglicher Art stößt. Dies ist in der Regel das Ergebnis des [Navigierens](/de/docs/Web/WebDriver/Commands/NavigateTo) zu einer Website mit einem abgelaufenen oder ungültigen [TLS-Zertifikat](/de/docs/Glossary/TLS). Beispiele für ungültige Zertifikate sind selbstsignierte, widerrufene und kryptographisch unsichere Zertifikate.

Webbrowser verhindern und blockieren den Verkehr zu Domains mit fehlerhaften Zertifikaten, da die Kommunikation mit dem Server kompromittiert wäre. Es wird dringend empfohlen, das Zertifikatsproblem zu beheben, anstatt Zertifikatsprüfungen zu deaktivieren, selbst in Testumgebungen.

WebDriver bietet zwar die [`acceptInsecureCerts` Fähigkeit](/de/docs/Web/WebDriver/Capabilities/acceptInsecureCerts) zum Deaktivieren von Zertifikatsprüfungen für die Dauer der Sitzung, es ist jedoch wichtig zu betonen, dass deren Verwendung stark abgeraten wird und dass es weithin als Schwäche der Testumgebung angesehen wird.

## Beispiel

Dies wird passieren, wenn Sie mit dem Python-Client zu einer Domain navigieren, die ein selbstsigniertes TLS-Zertifikat verwendet:

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

- Befehl [Navigate To](/de/docs/Web/WebDriver/Commands/NavigateTo)
- [Capabilities](/de/docs/Web/WebDriver/Capabilities)
- [badssl.com](https://badssl.com/)
