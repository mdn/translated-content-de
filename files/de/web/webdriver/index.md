---
title: WebDriver
slug: Web/WebDriver
l10n:
  sourceCommit: 676631fd27c8096c3ae3ceb2a6b4ffd6f687055f
---

WebDriver ist eine Fernsteuerungsschnittstelle, die eine Introspektion und Steuerung von Benutzeragenten ermöglicht. Sie bietet ein plattform- und sprachneutrales Drahtprotokoll als Methode für unabhängige Programme, das Verhalten von Webbrowsern aus der Ferne anzuweisen.

Die Möglichkeit, Anweisungssätze zu schreiben, die in vielen Browsern auf verschiedenen Plattformen austauschbar ausgeführt werden können, ist entscheidend, um den Benutzern ein konsistentes Erlebnis zu bieten. Mit der neuen Welle von Entwicklungen auf der Webplattform, der zunehmenden Vielfalt an Geräten und der Forderung nach echter Interoperabilität zwischen den Technologien bietet WebDriver Werkzeuge für das [Cross-Browser-Testing](/de/docs/Learn_web_development/Extensions/Testing/Introduction).

Bereitgestellt wird ein Satz von Schnittstellen, um DOM-Elemente in Webdokumenten zu entdecken und zu manipulieren und um das Verhalten eines Benutzeragenten zu steuern. Es ist in erster Linie dafür gedacht, Webautoren zu ermöglichen, Tests zu schreiben, die einen Benutzeragenten aus einem separaten Steuerprozess automatisieren, kann aber auch für in-Browser-Skripte verwendet werden, um einen — möglicherweise separaten — Browser zu steuern.

## Nutzung

Was können Sie also mit WebDriver machen und wie sieht das aus? Da WebDriver programmiersprachenneutral ist, hängt die Antwort auf diese Frage davon ab, welchen WebDriver-Client Sie verwenden und welche Sprache Sie wählen.

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
    driver.find_element(By.NAME, "q").send_keys(f"cheese{Keys.RETURN}")
    wait.until(presence_of_element_located((By.XPATH, '//*[@id="rcnt"]')))
    results = driver.find_elements(By.XPATH, "//a[@href]")

    for i, elem in enumerate(results):
        print(f'#{i} {elem.text} ({elem.get_attribute("href")})')
```

Dies könnte eine Ausgabe wie diese erzeugen:

```plain
#1 Cheese - Wikipedia (https://en.wikipedia.org/wiki/Cheese)
```

## Referenz

Durchsuchen Sie die vollständige [WebDriver-Referenz](/de/docs/Web/WebDriver/Reference) Dokumentation.

### WebDriver klassische Referenz

- [Befehle](/de/docs/Web/WebDriver/Reference/Classic/Commands)
  - : Referenz für alle klassischen WebDriver-Befehle.

- [Fähigkeiten](/de/docs/Web/WebDriver/Reference/Capabilities)
  - : Referenz für alle klassischen WebDriver-Fähigkeiten.

- [Fehler](/de/docs/Web/WebDriver/Reference/Errors)
  - : Referenz für klassische WebDriver-Fehler.

- [Zeitüberschreitungen](/de/docs/Web/WebDriver/Reference/Classic/Timeouts)
  - : Referenz für klassische WebDriver-Zeitüberschreitungen.

## Spezifikationen

- [WebDriver](https://w3c.github.io/webdriver/)

## Siehe auch

- [Testen](/de/docs/Learn_web_development/Extensions/Testing)
- [Selenium-Dokumentation](https://www.selenium.dev/documentation/)
