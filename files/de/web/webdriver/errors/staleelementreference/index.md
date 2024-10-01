---
title: Stale element reference
slug: Web/WebDriver/Errors/StaleElementReference
l10n:
  sourceCommit: 4a6dacf8c68925a8538585be3b2728bcb271241e
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Errors")}}

Der Fehler **stale element reference** ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Errors), der auftritt, weil das referenzierte [Webelement](/de/docs/Web/WebDriver/WebElement) nicht mehr mit dem {{Glossary("DOM", "DOM")}} verbunden ist.

Jedes DOM-Element wird im WebDriver durch eine eindeutige Identifikationsreferenz dargestellt, bekannt als _[Webelement](/de/docs/Web/WebDriver/WebElement)_. Die Webelement-Referenz ist eine {{Glossary("UUID", "UUID")}}, die verwendet wird, um Befehle auszuführen, die auf bestimmte Elemente abzielen, wie z.B. [Abrufen des Tag-Namens eines Elements](/de/docs/Web/WebDriver/Commands/GetElementTagName) und [Abrufen einer Eigenschaft](/de/docs/Web/WebDriver/Commands/GetElementProperty) eines Elements.

Wenn ein Element nicht mehr mit dem DOM verbunden ist, d.h. es aus dem Dokument entfernt wurde oder sich das Dokument geändert hat, wird es als _veraltet_ bezeichnet. Veralterung tritt beispielsweise auf, wenn Sie eine Webelement-Referenz haben und das Dokument, aus dem sie abgerufen wurde, navigiert.

## Beispiele

### Dokumentnavigation

Bei einer Navigation werden alle Webelement-Referenzen zum vorherigen Dokument zusammen mit dem Dokument verworfen. Dies führt dazu, dass jede nachfolgende Interaktion mit dem [Webelement](/de/docs/Web/WebDriver/WebElement) mit dem Fehler "stale element reference" fehlschlägt:

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

### Knotenanwendung

Wenn ein Dokumentknoten aus dem DOM entfernt wird, wird seine Webelement-Referenz ungültig. Dies führt ebenfalls dazu, dass jede nachfolgende Interaktion mit dem [Webelement](/de/docs/Web/WebDriver/WebElement) mit dem Fehler "stale element reference" fehlschlägt:

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

- [WebElement](/de/docs/Web/WebDriver/WebElement)
- Zugehörige Befehle:

  - [Find Element](/de/docs/Web/WebDriver/Commands/FindElement)
  - [Find Elements](/de/docs/Web/WebDriver/Commands/FindElements)
  - [Find Element From Element](/de/docs/Web/WebDriver/Commands/FindElementFromElement)
  - [Find Elements From Element](/de/docs/Web/WebDriver/Commands/FindElementsFromElement)
