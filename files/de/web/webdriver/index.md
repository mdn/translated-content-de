---
title: WebDriver
slug: Web/WebDriver
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{QuickLinksWithSubpages}}

WebDriver ist eine Fernsteuerungsschnittstelle, die die Inspektion und Steuerung von User Agents ermöglicht. Sie bietet ein plattform- und sprachneutrales Drahtprotokoll, um Programmen außerhalb des Prozesses die Möglichkeit zu geben, das Verhalten von Web-Browsern aus der Ferne zu steuern.

Die Fähigkeit, Anweisungssets zu schreiben, die in vielen Browsern auf verschiedenen Plattformen austauschbar ausgeführt werden können, ist entscheidend, um den Benutzern ein konsistentes Erlebnis zu bieten. Mit der neuen Welle von Entwicklungen auf der Web-Plattform, der zunehmenden Vielfalt an Geräten und dem Bedarf an echter Interoperabilität zwischen den Technologien, bietet WebDriver Werkzeuge für [Cross-Browser-Testing](/de/docs/Learn_web_development/Extensions/Testing/Introduction).

Bereitgestellt wird eine Reihe von Schnittstellen zum Entdecken und Manipulieren von DOM-Elementen in Web-Dokumenten und zur Steuerung des Verhaltens eines User Agents. Sie ist hauptsächlich dazu gedacht, Web-Autoren zu ermöglichen, Tests zu schreiben, die einen User Agent von einem separaten Steuerungsprozess automatisieren. Sie kann aber auch so verwendet werden, dass Scripts im Browser einen — möglicherweise separaten — Browser steuern.

## Verwendung

Was können Sie also mit WebDriver tun und wie sieht das aus? Da WebDriver sprachneutral ist, hängt die Antwort auf diese Frage davon ab, welchen WebDriver-Client Sie verwenden und welche Sprache Sie gewählt haben.

Aber mit einem beliebten Client, der in Python geschrieben ist, könnte Ihre Interaktion mit WebDriver folgendermaßen aussehen:

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

Dies könnte eine Ausgabe erzeugen, die ungefähr so aussieht:

```plain
#1 Cheese - Wikipedia (https://en.wikipedia.org/wiki/Cheese)
```

## Referenz

### Befehle

[Befehle](/de/docs/Web/WebDriver/Commands)

{{ListSubpages("/de/docs/Web/WebDriver/Commands")}}

### Typen

[Typen](/de/docs/Web/WebDriver/Types)

- [Fehlerobjekt](/de/docs/Web/WebDriver/Errors#payload)
- [Timeouts-Objekt](/de/docs/Web/WebDriver/Timeouts)
- [WebElement](/de/docs/Web/WebDriver/WebElement)
- [WebWindow](/de/docs/Web/WebDriver/WebWindow)

### Fähigkeiten

[Fähigkeiten](/de/docs/Web/WebDriver/Capabilities)

{{ListSubpages("/de/docs/Web/WebDriver/Capabilities")}}

### Fehler

[Fehler](/de/docs/Web/WebDriver/Errors)

{{ListSubpages("/de/docs/Web/WebDriver/Errors")}}

## Spezifikationen

- [WebDriver](https://w3c.github.io/webdriver/)

## Siehe auch

- [Testen](/de/docs/Learn_web_development/Extensions/Testing)
- [Selenium-Dokumentation](https://www.selenium.dev/documentation/)
