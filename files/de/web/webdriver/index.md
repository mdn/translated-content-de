---
title: WebDriver
slug: Web/WebDriver
l10n:
  sourceCommit: 2d19a88d0cc560f031a07585bf57f005fec02670
---

WebDriver ist eine Fernsteuerungsschnittstelle, die die Untersuchung und Steuerung von User Agents ermöglicht. Es bietet ein plattform- und sprachneutrales Drahtprotokoll als Mittel, um Prozessen außerhalb des Browsers Anweisungen zu geben, das Verhalten von Webbrowsern fernzusteuern.

Die Fähigkeit, Anweisungssätze zu schreiben, die in vielen Browsern auf verschiedenen Plattformen austauschbar ausgeführt werden können, ist entscheidend, um den Nutzern eine konsistente Erfahrung zu bieten. Mit der neuen Welle der Entwicklungen auf der Webplattform, der zunehmenden Vielfalt an Geräten und der Nachfrage nach echter Interoperabilität zwischen den Technologien bietet WebDriver Werkzeuge für das [Cross-Browser-Testing](/de/docs/Learn_web_development/Extensions/Testing/Introduction).

Bereitgestellt wird eine Reihe von Schnittstellen, um DOM-Elemente in Webdokumenten zu entdecken und zu manipulieren und um das Verhalten eines User Agents zu steuern. Es ist in erster Linie dafür gedacht, Webautoren zu ermöglichen, Tests zu schreiben, die einen User Agent von einem separaten Steuerungsprozess aus automatisieren können, es kann jedoch auch so verwendet werden, dass Skripte im Browser einen — möglicherweise separaten — Browser steuern.

## Verwendung

Was ermöglicht Ihnen WebDriver und wie sieht es aus? Da WebDriver sprachneutral ist, hängt die Antwort auf diese Frage davon ab, welchen WebDriver-Client Sie verwenden und welche Programmiersprache Sie wählen.

Aber mit einem beliebten Client, der in Python geschrieben ist, könnte Ihre Interaktion mit WebDriver so aussehen:

```python
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support.expected_conditions import presence_of_element_located

with webdriver.Firefox() as driver:

    driver.get("https://google.com/ncr")
    wait = WebDriverWait(driver, 10)
    driver.find_element(By.NAME, "q").send_keys(f"cheese{Keys.RETURN}")
    wait.until(presence_of_element_located((By.XPATH, '//*[@id="rcnt"]')))
    results = driver.find_elements(By.XPATH, "//a[@href]")

    for i, elem in enumerate(results):
        print(f'#{i} {elem.text} ({elem.get_attribute("href")})')
```

Dies könnte eine Ausgabe ähnlich dieser erzeugen:

```plain
#1 Cheese - Wikipedia (https://en.wikipedia.org/wiki/Cheese)
```

## Referenz

Die [WebDriver-Referenz](/de/docs/Web/WebDriver/Reference) bietet detaillierte Informationen über die WebDriver-API, einschließlich der verfügbaren Befehle, Fähigkeiten und Fehler.

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
