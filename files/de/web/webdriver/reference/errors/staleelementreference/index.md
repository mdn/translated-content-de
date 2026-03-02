---
title: Verweis auf ein veraltetes Element
slug: Web/WebDriver/Reference/Errors/StaleElementReference
l10n:
  sourceCommit: 676631fd27c8096c3ae3ceb2a6b4ffd6f687055f
---

Der **Verweis auf ein veraltetes Element**-Fehler ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Errors), der auftritt, weil das referenzierte [Webelement](/de/docs/Web/WebDriver/Reference/WebElement) nicht mehr an das {{Glossary("DOM", "DOM")}} gebunden ist.

Jedes DOM-Element wird in WebDriver durch eine eindeutige Referenz dargestellt, bekannt als ein _[Webelement](/de/docs/Web/WebDriver/Reference/WebElement)_. Die Webelement-Referenz ist eine {{Glossary("UUID", "UUID")}}, die verwendet wird, um Befehle auszuführen, die auf bestimmte Elemente zielen, wie zum Beispiel das [Abrufen des Tag-Namens eines Elements](/de/docs/Web/WebDriver/Reference/Classic/Commands/GetElementTagName) und das [Abrufen einer Eigenschaft](/de/docs/Web/WebDriver/Reference/Classic/Commands/GetElementProperty) eines Elements.

Wenn ein Element nicht mehr an das DOM gebunden ist, d.h. es wurde aus dem Dokument entfernt oder das Dokument hat sich geändert, wird es als _veraltet_ bezeichnet. Veralterung tritt beispielsweise auf, wenn Sie eine Webelement-Referenz haben und das Dokument, aus dem sie abgerufen wurde, navigiert.

## Beispiele

### Dokumentnavigation

Bei der Navigation werden alle Webelement-Referenzen zum vorherigen Dokument zusammen mit dem Dokument verworfen. Dies führt dazu, dass jede nachfolgende Interaktion mit dem [Webelement](/de/docs/Web/WebDriver/Reference/WebElement) mit dem Fehler des veralteten Elemente-Verweises fehlschlägt:

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

Wenn ein Dokumentknoten aus dem DOM entfernt wird, wird seine Webelement-Referenz ungültig. Dies wird auch jede nachfolgende Interaktion mit dem [Webelement](/de/docs/Web/WebDriver/Reference/WebElement) mit dem Fehler des veralteten Elemente-Verweises fehlschlagen lassen:

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
  - [Find Element](/de/docs/Web/WebDriver/Reference/Commands/FindElement)
  - [Find Elements](/de/docs/Web/WebDriver/Reference/Commands/FindElements)
  - [Find Element From Element](/de/docs/Web/WebDriver/Reference/Commands/FindElementFromElement)
  - [Find Elements From Element](/de/docs/Web/WebDriver/Reference/Commands/FindElementsFromElement)
