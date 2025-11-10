---
title: Veralteter Elementverweis
slug: Web/WebDriver/Reference/Errors/StaleElementReference
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Der **veraltete Elementverweis**-Fehler ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Errors), der auftritt, weil das referenzierte [Webelement](/de/docs/Web/WebDriver/Reference/WebElement) nicht mehr an den {{Glossary("DOM", "DOM")}} angehängt ist.

Jedes DOM-Element wird in WebDriver durch eine eindeutige Identifikationsreferenz dargestellt, bekannt als _[Webelement](/de/docs/Web/WebDriver/Reference/WebElement)_. Die Webelement-Referenz ist eine {{Glossary("UUID", "UUID")}}, die verwendet wird, um Befehle auszuführen, die auf bestimmte Elemente abzielen, wie z.B. [den Tag-Namen eines Elements zu erhalten](/de/docs/Web/WebDriver/Reference/Commands/GetElementTagName) und [eine Eigenschaft eines Elements abzurufen](/de/docs/Web/WebDriver/Reference/Commands/GetElementProperty).

Wenn ein Element nicht mehr an den DOM angehängt ist, d.h. es wurde aus dem Dokument entfernt oder das Dokument hat sich geändert, gilt es als _veraltet_. Veraltetsein tritt zum Beispiel auf, wenn Sie eine Webelement-Referenz haben und das Dokument, aus dem sie abgerufen wurde, navigiert.

## Beispiele

### Dokumentnavigation

Beim Navigieren werden alle Webelement-Referenzen auf das vorherige Dokument zusammen mit dem Dokument verworfen. Dies führt dazu, dass jede nachfolgende Interaktion mit dem [Webelement](/de/docs/Web/WebDriver/Reference/WebElement) mit dem veralteten Elementverweis-Fehler fehlschlägt:

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

Wenn ein Dokumentknoten aus dem DOM entfernt wird, wird seine Webelement-Referenz ungültig. Dies führt ebenfalls dazu, dass jede nachfolgende Interaktion mit dem [Webelement](/de/docs/Web/WebDriver/Reference/WebElement) mit dem veralteten Elementverweis-Fehler fehlschlägt:

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

- [Webelement](/de/docs/Web/WebDriver/Reference/WebElement)
- Zugehörige Befehle:
  - [Element finden](/de/docs/Web/WebDriver/Reference/Commands/FindElement)
  - [Elemente finden](/de/docs/Web/WebDriver/Reference/Commands/FindElements)
  - [Element von Element finden](/de/docs/Web/WebDriver/Reference/Commands/FindElementFromElement)
  - [Elemente von Element finden](/de/docs/Web/WebDriver/Reference/Commands/FindElementsFromElement)
