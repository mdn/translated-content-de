---
title: Veralteter Elementverweis
slug: Web/WebDriver/Reference/Classic/Errors/StaleElementReference
l10n:
  sourceCommit: 225de04b84b717433ffeb3bb0cf5ceddac9653ea
---

Der **veraltete Elementverweis**-Fehler ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Classic/Errors), der auftritt, weil das referenzierte [Web-Element](/de/docs/Web/WebDriver/Reference/WebElement) nicht mehr an das {{Glossary("DOM", "DOM")}} gebunden ist.

Jedes DOM-Element wird in WebDriver durch einen einzigartigen Identifizierungsverweis repräsentiert, bekannt als ein _[Web-Element](/de/docs/Web/WebDriver/Reference/WebElement)_. Der Web-Element-Verweis ist ein {{Glossary("UUID", "UUID")}}, der verwendet wird, um Befehle auszuführen, die auf spezifische Elemente abzielen, wie z.B. [Abrufen des Tag-Namens eines Elements](/de/docs/Web/WebDriver/Reference/Classic/Commands/GetElementTagName) und [Abrufen einer Eigenschaft](/de/docs/Web/WebDriver/Reference/Classic/Commands/GetElementProperty) eines Elements.

Wenn ein Element nicht mehr an das DOM gebunden ist, d.h. es aus dem Dokument entfernt wurde oder das Dokument sich geändert hat, wird es als _veraltet_ bezeichnet. Veralterung tritt beispielsweise auf, wenn Sie einen Web-Element-Verweis haben und das Dokument, aus dem es abgerufen wurde, navigiert.

## Beispiele

### Dokumentnavigation

Bei der Navigation werden alle Web-Element-Verweise auf das vorherige Dokument zusammen mit dem Dokument verworfen. Dies führt dazu, dass jede nachfolgende Interaktion mit dem [Web-Element](/de/docs/Web/WebDriver/Reference/WebElement) mit dem Fehler des veralteten Elementverweises fehlschlägt:

```python
import urllib

from selenium import webdriver
from selenium.common import exceptions

def inline(doc):
    return "data:text/html;charset=utf-8,{}".format(urllib.quote(doc))

session = webdriver.Firefox()
session.get(inline("<strong>foo</strong>"))
foo = session.find_element_by_css_selector("strong")

session.get(inline("<i>bar</i>"))
try:
    foo.tag_name
except exceptions.StaleElementReferenceException as e:
    print(e)
```

Ausgabe:

```plain
StaleElementReferenceException: The element reference of e75a1764-ff73-40fa-93c1-08cb90394b65 is stale either the element is no longer attached to the DOM, it is not in the current frame context, or the document has been refreshed
```

### Knotenentfernung

Wenn ein Dokumentknoten aus dem DOM entfernt wird, wird sein Web-Element-Verweis ungültig. Dies führt ebenfalls dazu, dass jede nachfolgende Interaktion mit dem [Web-Element](/de/docs/Web/WebDriver/Reference/WebElement) mit dem Fehler des veralteten Elementverweises fehlschlägt:

```python
import urllib

from selenium import webdriver
from selenium.common import exceptions

def inline(doc):
    return "data:text/html;charset=utf-8,{}".format(urllib.quote(doc))

session = webdriver.Firefox()
session.get(inline("<button>foo</button>"))
button = session.find_element_by_css_selector("button")
session.execute_script("""
    let [button] = arguments;
    button.remove();
    """, script_args=(button,))

try:
    button.click()
except exceptions.StaleElementReferenceException as e:
    print(e)
```

Ausgabe:

```plain
StaleElementReferenceException: The element reference of e75a1764-ff73-40fa-93c1-08cb90394b65 is stale either the element is no longer attached to the DOM, it is not in the current frame context, or the document has been refreshed
```

## Siehe auch

- [WebElement](/de/docs/Web/WebDriver/Reference/WebElement)
- Zugehörige Befehle:
  - [Element finden](/de/docs/Web/WebDriver/Reference/Commands/FindElement)
  - [Elemente finden](/de/docs/Web/WebDriver/Reference/Commands/FindElements)
  - [Element aus Element finden](/de/docs/Web/WebDriver/Reference/Commands/FindElementFromElement)
  - [Elemente aus Element finden](/de/docs/Web/WebDriver/Reference/Commands/FindElementsFromElement)
