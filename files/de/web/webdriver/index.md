---
title: WebDriver
slug: Web/WebDriver
l10n:
  sourceCommit: 225de04b84b717433ffeb3bb0cf5ceddac9653ea
---

WebDriver ist eine Fernsteuerungsschnittstelle, die die Untersuchung und Steuerung von Benutzeragenten ermöglicht. Sie bietet ein plattform- und sprachunabhängiges Drahtprotokoll, um externen Programmen eine Möglichkeit zu geben, das Verhalten von Webbrowsern aus der Ferne zu steuern.

Die Fähigkeit, Satzanweisungen zu schreiben, die auf verschiedenen Plattformen in vielen Browsern austauschbar ausgeführt werden können, ist entscheidend, um den Benutzern ein konsistentes Erlebnis zu bieten. Mit der neuen Welle von Entwicklungen auf der Webplattform, der zunehmenden Vielfalt der Geräte und dem Bedarf an echter Interoperabilität zwischen den Technologien, bietet WebDriver Werkzeuge für [Cross-Browser-Testing](/de/docs/Learn_web_development/Extensions/Testing/Introduction).

Es wird ein Satz von Schnittstellen bereitgestellt, um DOM-Elemente in Webdokumenten zu entdecken und zu manipulieren und um das Verhalten eines Benutzeragenten zu steuern. Es ist in erster Linie dazu gedacht, Webautoren zu ermöglichen, Tests zu schreiben, die einen Benutzeragenten von einem separaten Steuerprozess aus automatisieren, kann aber auch in einer Weise verwendet werden, dass In-Browser-Skripte einen — möglicherweise separaten — Browser steuern.

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

Dies könnte eine Ausgabe erzeugen, die in etwa so aussieht:

```plain
#1 Cheese - Wikipedia (https://en.wikipedia.org/wiki/Cheese)
```

## Referenz

Durchsuchen Sie die vollständige [WebDriver-Referenz](/de/docs/Web/WebDriver/Reference) Dokumentation.

### Klassische WebDriver-Referenz

- [Befehle](/de/docs/Web/WebDriver/Reference/Classic/Commands)
  - : Referenz für alle klassischen WebDriver-Befehle.

- [Fähigkeiten](/de/docs/Web/WebDriver/Reference/Classic/Capabilities)
  - : Referenz für alle klassischen WebDriver-Fähigkeiten.

- [Fehler](/de/docs/Web/WebDriver/Reference/Classic/Errors)
  - : Referenz für klassische WebDriver-Fehler.

- [Timeouts](/de/docs/Web/WebDriver/Reference/Classic/Timeouts)
  - : Referenz für klassische WebDriver-Timeouts.

## Spezifikationen

- [WebDriver](https://w3c.github.io/webdriver/)

## Siehe auch

- [Testing](/de/docs/Learn_web_development/Extensions/Testing)
- [Selenium Dokumentation](https://www.selenium.dev/documentation/)
