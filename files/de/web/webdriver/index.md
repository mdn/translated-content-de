---
title: WebDriver
slug: Web/WebDriver
l10n:
  sourceCommit: 57b855a52a2d2e8914a30e3a47567bff0806ae23
---

WebDriver ist eine Fernsteuerungsschnittstelle, die es ermöglicht, Benutzeragenten zu inspizieren und zu steuern. Es bietet ein plattform- und sprachenneutrales Kommunikationsprotokoll, mit dem Programme außerhalb des Prozesses das Verhalten von Webbrowsern aus der Ferne anweisen können.

Die Fähigkeit, Anweisungssets zu schreiben, die in vielen Browsern auf verschiedenen Plattformen austauschbar ausgeführt werden können, ist entscheidend, um den Benutzern ein konsistentes Erlebnis zu bieten. Mit der neuen Entwicklung auf der Webplattform, der zunehmenden Vielfalt an Geräten und dem Bedarf an echter Interoperabilität zwischen den Technologien, bietet WebDriver Werkzeuge für das [Cross-Browser-Testing](/de/docs/Learn_web_development/Extensions/Testing/Introduction).

Bereitgestellt wird ein Satz von Schnittstellen, um DOM-Elemente in Webdokumenten zu entdecken und zu manipulieren und das Verhalten eines Benutzeragenten zu steuern. Es ist in erster Linie dazu gedacht, Webautoren das Schreiben von Tests zu ermöglichen, die einen Benutzeragenten aus einem separaten Steuerprozess automatisieren, kann aber auch so verwendet werden, dass Skripte im Browser einen — möglicherweise separaten — Browser steuern.

## Verwendung

Was ermöglicht Ihnen WebDriver zu tun und wie sieht es aus? Da WebDriver sprachneutral ist, hängt die Antwort auf diese Frage davon ab, welchen WebDriver-Client Sie verwenden und welche Sprache Sie wählen.

Aber wenn Sie einen populären Client verwenden, der in Python geschrieben ist, könnte Ihre Interaktion mit WebDriver so aussehen:

```python
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support.expected_conditions import presence_of_element_located

with webdriver.Firefox() as driver:

    driver.get("https://google.com/ncr")
    wait = WebDriverWait(driver, 10)
    driver.find_element(By.NAME, "q").send_keys("cheese" + Keys.RETURN)
    wait.until(presence_of_element_located((By.XPATH, '//*[@id="rcnt"]')))
    results = driver.find_elements(By.XPATH, "//a[@href]")

    for i, elem in enumerate(results):
        print(f'#{i} {elem.text} ({elem.get_attribute("href")})')
```

Dies könnte eine Ausgabe erzeugen, die dieser ähnelt:

```plain
#1 Cheese - Wikipedia (https://en.wikipedia.org/wiki/Cheese)
```

## Referenz

- [Timeouts](/de/docs/Web/WebDriver/Reference/Timeouts)

### [Befehle](/de/docs/Web/WebDriver/Reference/Commands)

{{ListSubpages("/de/docs/Web/WebDriver/Reference/Commands")}}

### [Fähigkeiten](/de/docs/Web/WebDriver/Reference/Capabilities)

{{ListSubpages("/de/docs/Web/WebDriver/Reference/Capabilities")}}

### [Fehler](/de/docs/Web/WebDriver/Reference/Errors)

{{ListSubpages("/de/docs/Web/WebDriver/Reference/Errors")}}

## Spezifikationen

- [WebDriver](https://w3c.github.io/webdriver/)

## Siehe auch

- [Testing](/de/docs/Learn_web_development/Extensions/Testing)
- [Selenium-Dokumentation](https://www.selenium.dev/documentation/)
