---
title: WebDriver
slug: Web/WebDriver
l10n:
  sourceCommit: 8d766d1d1c60a2d6d2c95bd2aa9d0b297d9c70ac
---

{{QuickLinksWithSubpages}}

WebDriver ist eine Fernsteuerungsschnittstelle, die Introspektion und Kontrolle von Benutzeragenten ermöglicht. Es bietet ein plattform- und sprachneutrales Drahtprotokoll, das es Prozessen außerhalb des Browsers ermöglicht, das Verhalten von Webbrowsern fernzusteuern.

Die Möglichkeit, Anweisungssätze zu schreiben, die in vielen Browsern auf verschiedenen Plattformen austauschbar ausgeführt werden können, ist entscheidend, um den Nutzern ein konsistentes Erlebnis zu bieten. Mit der neuen Entwicklungswelle auf der Webplattform, der zunehmenden Vielfalt an Geräten und der Nachfrage nach echter Interoperabilität zwischen den Technologien bietet WebDriver Werkzeuge für das [Cross-Browser-Testing](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction).

Es wird eine Reihe von Schnittstellen bereitgestellt, um DOM-Elemente in Webdokumenten zu entdecken und zu manipulieren und das Verhalten eines Benutzeragenten zu steuern. Es ist in erster Linie dazu gedacht, Webautoren zu ermöglichen, Tests zu schreiben, die einen Benutzeragenten aus einem separat steuernden Prozess automatisieren, kann aber auch so verwendet werden, dass In-Browser-Skripte einen – möglicherweise separaten – Browser steuern.

## Verwendung

Was genau ermöglicht Ihnen WebDriver und wie sieht es aus? Da WebDriver programmsprachneutral ist, hängt die Antwort auf diese Frage davon ab, welchen WebDriver-Client Sie verwenden und welche Sprache Sie gewählt haben.

Wenn Sie jedoch einen beliebten Client verwenden, der in Python geschrieben ist, könnte Ihre Interaktion mit WebDriver wie folgt aussehen:

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

Dies könnte eine Ausgabe ergeben, die dieser ähnelt:

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
- [Timeout-Objekt](/de/docs/Web/WebDriver/Timeouts)
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
