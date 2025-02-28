---
title: Veralteter Elementverweis
slug: Web/WebDriver/Reference/Errors/StaleElementReference
l10n:
  sourceCommit: 57b855a52a2d2e8914a30e3a47567bff0806ae23
---

Der **veraltete Elementverweis** Fehler ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Errors), der auftritt, weil das referenzierte [Webelement](/de/docs/Web/WebDriver/WebElement) nicht mehr an das {{Glossary("DOM", "DOM")}} gebunden ist.

Jedes DOM-Element wird im WebDriver durch einen eindeutigen Identifikationsverweis repräsentiert, bekannt als ein _[Webelement](/de/docs/Web/WebDriver/WebElement)_. Der Webelement-Verweis ist ein {{Glossary("UUID", "UUID")}}, der verwendet wird, um Befehle auf bestimmte Elemente auszuführen, wie zum Beispiel das [Abrufen des Tag-Namens eines Elements](/de/docs/Web/WebDriver/Reference/Commands/GetElementTagName) und das [Abrufen einer Eigenschaft](/de/docs/Web/WebDriver/Reference/Commands/GetElementProperty) eines Elements.

Wenn ein Element nicht mehr an das DOM gebunden ist, d. h., es wurde aus dem Dokument entfernt oder das Dokument hat sich geändert, spricht man davon, dass es _veraltet_ ist. Veralterung tritt beispielsweise auf, wenn Sie einen Webelement-Verweis haben und das Dokument, aus dem er abgerufen wurde, navigiert.

## Beispiele

### Dokumentnavigation

Bei der Navigation werden alle Webelement-Verweise auf das vorherige Dokument zusammen mit dem Dokument verworfen. Dies führt dazu, dass jede nachfolgende Interaktion mit dem [Webelement](/de/docs/Web/WebDriver/WebElement) mit dem Fehler eines veralteten Elementverweises fehlschlägt:

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

Wenn ein Dokumentknoten aus dem DOM entfernt wird, wird sein Webelement-Verweis ungültig. Dies wird ebenfalls dazu führen, dass jede nachfolgende Interaktion mit dem [Webelement](/de/docs/Web/WebDriver/WebElement) mit dem Fehler eines veralteten Elementverweises fehlschlägt:

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
