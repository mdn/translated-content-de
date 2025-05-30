---
title: WebDriver
slug: Web/WebDriver
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

WebDriver ist eine Fernsteuerungsschnittstelle, die die Untersuchung und Steuerung von Benutzeragenten ermöglicht. Sie bietet ein plattform- und sprachneutrales Wire-Protokoll als Mittel, um aus Prozessen heraus das Verhalten von Webbrowsern fernzusteuern.

Die Fähigkeit, Anweisungssätze zu schreiben, die in vielen Browsern auf verschiedenen Plattformen austauschbar ausgeführt werden können, ist entscheidend, um den Benutzern ein konsistentes Erlebnis zu bieten. Mit der neuen Welle von Entwicklungen auf der Webplattform, der zunehmenden Vielfalt an Geräten und der Forderung nach echter Interoperabilität zwischen den Technologien bietet WebDriver Tools für das [Cross-Browser-Testing](/de/docs/Learn_web_development/Extensions/Testing/Introduction).

Es wird eine Reihe von Schnittstellen bereitgestellt, um DOM-Elemente in Webdokumenten zu entdecken und zu manipulieren und das Verhalten eines Benutzeragenten zu steuern. Sie ist in erster Linie dazu gedacht, Webautoren das Schreiben von Tests zu ermöglichen, die einen Benutzeragenten von einem separaten Steuerprozess aus automatisieren. Sie kann aber auch so verwendet werden, dass In-Browser-Skripte einen – möglicherweise separaten – Browser steuern können.

## Verwendung

Was ermöglicht Ihnen WebDriver und wie sieht es aus? Da WebDriver sprachunabhängig ist, hängt die Antwort auf diese Frage davon ab, welchen WebDriver-Client Sie verwenden und welche Sprache Sie wählen.

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

Dies könnte eine Ausgabe produzieren, die in etwa so aussieht:

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

- [Testen](/de/docs/Learn_web_development/Extensions/Testing)
- [Selenium-Dokumentation](https://www.selenium.dev/documentation/)
