---
title: WebDriver
slug: Web/WebDriver
l10n:
  sourceCommit: 8d766d1d1c60a2d6d2c95bd2aa9d0b297d9c70ac
---

{{QuickLinksWithSubpages}}

WebDriver ist eine Fernsteuerungsschnittstelle, die es ermöglicht, Benutzeragenten zu introspektieren und zu steuern. Es bietet ein plattform- und sprachneutrales Drahtprotokoll, um Programmen außerhalb des Prozesses zu ermöglichen, das Verhalten von Webbrowsern aus der Ferne zu steuern.

Die Fähigkeit, Befehlssätze zu schreiben, die in vielen Browsern auf verschiedenen Plattformen austauschbar ausgeführt werden können, ist entscheidend, um eine konsistente Erfahrung für Benutzer zu liefern. Mit der neuen Welle von Entwicklungen auf der Webplattform, der zunehmenden Vielfalt an Geräten und der Forderung nach echter Interoperabilität zwischen den Technologien bietet WebDriver Werkzeuge für das [Cross-Browser-Testing](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction).

Es wird eine Reihe von Schnittstellen bereitgestellt, um DOM-Elemente in Webdokumenten zu entdecken und zu manipulieren und um das Verhalten eines Benutzeragenten zu steuern. Es ist in erster Linie dazu gedacht, Webautoren zu ermöglichen, Tests zu schreiben, die einen Benutzeragenten von einem separaten Steuerprozess aus automatisieren. Es kann jedoch auch so verwendet werden, dass Skripte im Browser einen — möglicherweise separaten — Browser steuern können.

## Verwendung

Was ermöglicht Ihnen WebDriver und wie sieht es aus? Da WebDriver programmierneutral ist, hängt die Antwort auf diese Frage davon ab, welchen WebDriver-Client Sie verwenden und welche Sprache Sie wählen.

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
    driver.find_element(By.NAME, "q").send_keys("cheese" + Keys.RETURN)
    wait.until(presence_of_element_located((By.XPATH, '//*[@id="rcnt"]')))
    results = driver.find_elements(By.XPATH, "//a[@href]")

    for i, elem in enumerate(results):
        print(f'#{i} {elem.text} ({elem.get_attribute("href")})')
```

Dies könnte eine Ausgabe erzeugen, die in etwa so aussieht:

```plain
#1 Cheese - Wikipedia (https://en.wikipedia.org/wiki/Cheese)
```

## Referenz

### Befehle

[Befehle](/de/docs/Web/WebDriver/Commands)

{{ListSubpages("/de/docs/Web/WebDriver/Commands")}}

### Typen

[Typen](/de/docs/Web/WebDriver/Types)

- [Error object](/de/docs/Web/WebDriver/Errors#payload)
- [Timeouts object](/de/docs/Web/WebDriver/Timeouts)
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
