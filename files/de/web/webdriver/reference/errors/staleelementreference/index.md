---
title: "`stale element reference` Fehlercode"
short-title: stale element reference
slug: Web/WebDriver/Reference/Errors/StaleElementReference
l10n:
  sourceCommit: 421a9c26127cf11e33e72184b14656c9d406294d
---

Der **stale element reference** Fehler ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Errors), der auftritt, weil das referenzierte [Web-Element](/de/docs/Web/WebDriver/Reference/WebElement) nicht mehr an den {{Glossary("DOM", "DOM")}} angehängt ist.

Jedes DOM-Element wird im WebDriver durch eine eindeutige identifizierende Referenz dargestellt, bekannt als ein _[Web-Element](/de/docs/Web/WebDriver/Reference/WebElement)_. Die Web-Element-Referenz ist ein {{Glossary("UUID", "UUID")}}, das verwendet wird, um Befehle für spezifische Elemente auszuführen, wie zum Beispiel das [Abrufen des Tag-Namens eines Elements](/de/docs/Web/WebDriver/Reference/Classic/Commands/GetElementTagName) und das [Abrufen einer Eigenschaft](/de/docs/Web/WebDriver/Reference/Classic/Commands/GetElementProperty) eines Elements.

Wenn ein Element nicht mehr an den DOM angehängt ist, d.h. es aus dem Dokument entfernt wurde oder das Dokument sich geändert hat, gilt es als _stale_. Eine Veraltung tritt zum Beispiel auf, wenn Sie eine Web-Element-Referenz haben und das Dokument, aus dem sie stammt, navigiert wird.

## Beispiele

### Dokumentnavigation

Bei der Navigation werden alle Web-Element-Referenzen zum vorherigen Dokument zusammen mit dem Dokument verworfen. Dies wird dazu führen, dass jeder nachfolgende Versuch, mit dem [Web-Element](/de/docs/Web/WebDriver/Reference/WebElement) zu interagieren, mit dem stale element reference Fehler fehlschlägt:

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

Wenn ein Dokumentknoten aus dem DOM entfernt wird, wird seine Web-Element-Referenz ungültig. Dies wird ebenfalls dazu führen, dass jeder nachfolgende Versuch, mit dem [Web-Element](/de/docs/Web/WebDriver/Reference/WebElement) zu interagieren, mit dem stale element reference Fehler fehlschlägt:

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
