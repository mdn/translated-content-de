---
title: WebDriver
slug: Web/WebDriver
l10n:
  sourceCommit: 8d766d1d1c60a2d6d2c95bd2aa9d0b297d9c70ac
---

{{QuickLinksWithSubpages}}

WebDriver ist eine Fernsteuerungsschnittstelle, die es ermöglicht, Benutzerschnittstellen zu inspizieren und zu steuern. Es bietet ein plattform- und sprachneutrales Wire-Protokoll, um Programmen außerhalb des Prozesses die Möglichkeit zu geben, das Verhalten von Webbrowsern aus der Ferne zu steuern.

Die Fähigkeit, Instruktionssätze zu schreiben, die in vielen Browsern auf verschiedenen Plattformen austauschbar ausgeführt werden können, ist entscheidend, um den Benutzern eine konsistente Erfahrung zu bieten. Mit der neuen Welle von Entwicklungen auf der Webplattform, der steigenden Vielfalt an Geräten und dem Bedarf an echter Interoperabilität zwischen den Technologien bietet WebDriver Werkzeuge für das [Cross-Browser-Testing](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction).

Es wird eine Reihe von Schnittstellen bereitgestellt, um DOM-Elemente in Webdokumenten zu entdecken und zu manipulieren und das Verhalten eines Benutzeragenten zu kontrollieren. Es ist in erster Linie dazu gedacht, Webautoren zu ermöglichen, Tests zu schreiben, die einen Benutzeragenten von einem separaten steuernden Prozess aus automatisieren, kann aber auch so verwendet werden, dass Skripte im Browser einen — möglicherweise separaten — Browser steuern können.

## Verwendung

Was ermöglicht WebDriver Ihnen und wie sieht das aus? Da WebDriver programmneutral ist, hängt die Antwort auf diese Frage davon ab, welchen WebDriver-Client Sie verwenden und welche Programmiersprache Sie wählen.

Aber bei der Verwendung eines beliebten Clients, der in Python geschrieben wurde, könnte Ihre Interaktion mit WebDriver so aussehen:

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

Dies könnte eine Ausgabe produzieren, die etwa so aussieht:

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

- [Cross-Browser-Testing](/de/docs/Learn/Tools_and_testing/Cross_browser_testing)
- [Selenium-Dokumentation](https://www.selenium.dev/documentation/)
