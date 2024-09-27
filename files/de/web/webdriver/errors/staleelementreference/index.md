---
title: Veralteter Element-Referenzfehler
slug: Web/WebDriver/Errors/StaleElementReference
l10n:
  sourceCommit: 4a6dacf8c68925a8538585be3b2728bcb271241e
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Errors")}}

Der **veraltete Element-Referenzfehler** ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Errors), der auftritt, weil das referenzierte [Web-Element](/de/docs/Web/WebDriver/WebElement) nicht mehr mit dem [DOM](/de/docs/Glossary/DOM) verknüpft ist.

Jedes DOM-Element wird in WebDriver durch eine eindeutige Identifikationsreferenz dargestellt, bekannt als ein _[Web-Element](/de/docs/Web/WebDriver/WebElement)_. Die Web-Element-Referenz ist eine [UUID](/de/docs/Glossary/UUID), die verwendet wird, um Befehle für bestimmte Elemente auszuführen, wie z.B. [den Tag-Namen eines Elements abzurufen](/de/docs/Web/WebDriver/Commands/GetElementTagName) und [eine Eigenschaft eines Elements abzurufen](/de/docs/Web/WebDriver/Commands/GetElementProperty).

Wenn ein Element nicht mehr mit dem DOM verknüpft ist, d.h. es wurde aus dem Dokument entfernt oder das Dokument hat sich verändert, ist es als _veraltet_ zu bezeichnen. Veralterung tritt beispielsweise auf, wenn Sie eine Web-Element-Referenz haben und das Dokument, aus dem sie abgerufen wurde, navigiert.

## Beispiele

### Dokumentennavigation

Bei der Navigation werden alle Web-Element-Referenzen des vorherigen Dokuments zusammen mit dem Dokument verworfen. Dies wird dazu führen, dass jede nachfolgende Interaktion mit dem [Web-Element](/de/docs/Web/WebDriver/WebElement) mit dem veralteten Element-Referenzfehler fehlschlägt:

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

Wenn ein Dokumentenknoten aus dem DOM entfernt wird, wird seine Web-Element-Referenz ungültig. Dies wird auch dazu führen, dass jede nachfolgende Interaktion mit dem [Web-Element](/de/docs/Web/WebDriver/WebElement) mit dem veralteten Element-Referenzfehler fehlschlägt:

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
